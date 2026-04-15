#!/usr/bin/env python3
from __future__ import annotations

import asyncio
import os

from dotenv import load_dotenv


PASS = "PASS"
FAIL = "FAIL"


def section(title: str) -> None:
    print(f"\n== {title} ==")


def check(label: str, ok: bool, detail: str = "") -> bool:
    state = PASS if ok else FAIL
    suffix = f" | {detail}" if detail else ""
    print(f"[{state}] {label}{suffix}")
    return ok


def mask(secret: str | None) -> str:
    if not secret:
        return "MISSING"
    return "***" + secret[-4:]


async def ping_openai(model: str) -> tuple[bool, str]:
    try:
        from langchain_openai import ChatOpenAI

        llm = ChatOpenAI(model=model, temperature=0.0, api_key=os.getenv("OPENAI_API_KEY"))
        response = await asyncio.wait_for(llm.ainvoke("Reply with exactly: ok"), timeout=30.0)
        content = str(getattr(response, "content", response)).strip()
        return content.lower().startswith("ok"), content[:120]
    except Exception as exc:  # noqa: BLE001
        return False, f"{type(exc).__name__}: {exc}"


def main() -> int:
    load_dotenv(dotenv_path=".env", override=False)

    from agents.llm_policy import default_fast_model, get_llm, llm_configured, openai_api_key, preferred_provider
    from agents.provider_select import reset_provider_selection, select_provider_once
    from langchain_openai import ChatOpenAI

    ok = True

    section("Environment")
    ok &= check("OPENAI_API_KEY is set", bool(os.getenv("OPENAI_API_KEY", "").strip()), f"key={mask(os.getenv('OPENAI_API_KEY'))}")
    ok &= check("A4T_LLM_PROVIDER is openai or unset", os.getenv("A4T_LLM_PROVIDER", "").strip().lower() in {"", "openai"})
    ok &= check("A4T_SYSTEM_LLM_PROVIDER is openai or unset", os.getenv("A4T_SYSTEM_LLM_PROVIDER", "").strip().lower() in {"", "openai"})

    section("Runtime")
    ok &= check("openai_api_key() returns a value", bool(openai_api_key()), f"key={mask(openai_api_key())}")
    ok &= check("llm_configured() is true", llm_configured())
    ok &= check("preferred_provider() returns openai", preferred_provider() == "openai")
    ok &= check("default_fast_model() is OpenAI", default_fast_model().startswith(("gpt-", "o")))

    section("LLM Factory")
    llm = get_llm(default_fast_model())
    ok &= check("get_llm(default_fast_model()) returns ChatOpenAI", isinstance(llm, ChatOpenAI), f"type={type(llm).__name__}")

    section("Live Ping")
    ping_ok, ping_detail = asyncio.run(ping_openai(default_fast_model()))
    ok &= check("OpenAI live ping succeeded", ping_ok, ping_detail)

    section("Provider Selection")
    reset_provider_selection()
    selection = asyncio.run(select_provider_once())
    ok &= check("select_provider_once() selects openai", selection.provider == "openai", f"provider={selection.provider}")
    ok &= check("A4T_LLM_PROVIDER is openai", os.getenv("A4T_LLM_PROVIDER") == "openai")

    return 0 if ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
