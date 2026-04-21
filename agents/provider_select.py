from __future__ import annotations

import asyncio
import os
import time
from dataclasses import dataclass


def _probe_timeout_s() -> float:
    raw = os.getenv("A4T_PROVIDER_PROBE_TIMEOUT_S", "10").strip()
    try:
        return max(1.0, float(raw))
    except ValueError:
        return 10.0


def _system_provider_pref() -> str:
    raw = os.getenv("A4T_SYSTEM_LLM_PROVIDER", "auto").strip().lower()
    return raw if raw in {"auto", "openai"} else "auto"


def _openai_key_present() -> bool:
    return bool(os.getenv("OPENAI_API_KEY", "").strip())

def _probe_disabled() -> bool:
    return os.getenv("A4T_PROVIDER_PROBE_ENABLED", "1").strip().lower() in {"0", "false", "no"}


async def _probe_openai(*, model: str) -> tuple[bool, str | None]:
    if not _openai_key_present():
        return False, "OPENAI_API_KEY not set"
    try:
        from langchain_openai import ChatOpenAI
        from agents.llm_policy import openai_api_key
        llm = ChatOpenAI(model=model, temperature=0, api_key=openai_api_key())
        await asyncio.wait_for(llm.ainvoke("ping"), timeout=_probe_timeout_s())
        return True, None
    except Exception as exc:  # noqa: BLE001
        return False, f"{type(exc).__name__}: {exc}"


@dataclass(frozen=True)
class ProviderSelection:
    provider: str  # openai|none
    locked: bool
    llm_calls_enabled: bool
    error: str | None = None
    selected_at_ms: int = 0

    def as_dict(self) -> dict[str, object]:
        return {
            "provider": self.provider,
            "locked": self.locked,
            "llm_calls_enabled": self.llm_calls_enabled,
            "error": self.error,
            "selected_at_ms": self.selected_at_ms,
            "system_pref": _system_provider_pref(),
        }


_CACHED: ProviderSelection | None = None
_LOCK = asyncio.Lock()


def current_provider_selection() -> ProviderSelection | None:
    return _CACHED


def reset_provider_selection() -> None:
    """Reset the cached selection. Internal/Test use only."""
    global _CACHED  # noqa: PLW0603
    _CACHED = None
    if "A4T_LLM_PROVIDER" in os.environ:
        del os.environ["A4T_LLM_PROVIDER"]
    # Do NOT reset A4T_LLM_CALLS_ENABLED or CROSS_PROVIDER_FALLBACK here as they might be set by .env


async def select_provider_once() -> ProviderSelection:
    """Select and lock the system provider for this process.

    Policy (default):
    - If A4T_SYSTEM_LLM_PROVIDER=auto|openai:
      - probe OpenAI
    - If OpenAI is not reachable:
      - disable live LLM calls for this process (deterministic mode)
    """
    global _CACHED  # noqa: PLW0603
    if _CACHED is not None:
        return _CACHED

    async with _LOCK:
        if _CACHED is not None:
            return _CACHED

        system_pref = _system_provider_pref()

        # Default: probe even if an API key is present. This avoids the common failure mode
        # where the key exists but the configured/default model is not accessible (403 model_not_found).
        # Allow opt-out for environments where probing is undesirable.
        openai_model = os.getenv("A4T_OPENAI_FAST_MODEL", "gpt-5-mini").strip() or "gpt-5-mini"
        if _probe_disabled():
            openai_ok, openai_err = (True, None) if _openai_key_present() else (False, "OPENAI_API_KEY not set")
        else:
            openai_ok, openai_err = await _probe_openai(model=openai_model)

        selected: str | None = None
        if system_pref == "openai" and openai_ok:
            selected = "openai"
        elif openai_ok:
            selected = "openai"

        selected_at_ms = int(time.time() * 1000)
        if selected is None:
            errors = []
            if openai_err:
                errors.append(f"openai: {openai_err}")

            os.environ["A4T_LLM_CALLS_ENABLED"] = "0"
            os.environ["A4T_LLM_CROSS_PROVIDER_FALLBACK"] = "0"

            # Log failure to a local file for debugging
            try:
                with open("llm_probe_error.log", "w") as f:
                    f.write(f"Selection Result: FAIL\nErrors: {'; '.join(errors) if errors else 'Unknown'}\n")
            except Exception:
                pass

            os.environ.setdefault("A4T_LLM_PROVIDER", "openai")
            _CACHED = ProviderSelection(
                provider="none",
                locked=True,
                llm_calls_enabled=False,
                error="; ".join(errors) if errors else "Probes failed for both providers",
                selected_at_ms=selected_at_ms,
            )
            return _CACHED

        os.environ["A4T_LLM_PROVIDER"] = selected
        os.environ.setdefault("A4T_LLM_CALLS_ENABLED", "1")
        os.environ["A4T_LLM_CROSS_PROVIDER_FALLBACK"] = "0"

        _CACHED = ProviderSelection(
            provider=selected,
            locked=True,
            llm_calls_enabled=True,
            error=None,
            selected_at_ms=selected_at_ms,
        )
        return _CACHED
