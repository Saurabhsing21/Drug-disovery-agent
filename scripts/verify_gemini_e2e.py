#!/usr/bin/env python3
"""
End-to-end verification: Gemini API connectivity and provider selection.

Checks:
1. GOOGLE_API_KEY / GEMINI_API_KEY env vars are present (no OPENAI_API_KEY)
2. preferred_provider() returns 'google'
3. openai_api_key() returns None (nuclear disable is in effect)
4. get_llm() returns a ChatGoogleGenerativeAI instance for any model
5. A live Gemini ping succeeds
6. select_provider_once() selects 'google' and not 'openai'

Run from the project root:
    python scripts/verify_gemini_e2e.py
"""
from __future__ import annotations

import asyncio
import os
import sys
from pathlib import Path

# Load the project root .env first.
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from dotenv import load_dotenv
load_dotenv(ROOT / ".env", override=False)
# Also try deploy/.env
load_dotenv(ROOT / "deploy" / ".env", override=False)

PASS = "\033[92m✓\033[0m"
FAIL = "\033[91m✗\033[0m"
INFO = "\033[94m·\033[0m"


def check(label: str, condition: bool, detail: str = "") -> bool:
    icon = PASS if condition else FAIL
    print(f"  {icon} {label}" + (f" → {detail}" if detail else ""))
    return condition


def section(title: str) -> None:
    print(f"\n\033[1m{'─'*60}\033[0m")
    print(f"\033[1m{title}\033[0m")
    print(f"\033[1m{'─'*60}\033[0m")


all_ok = True


# ─── 1. Environment Variables ────────────────────────────────────────────────
section("1. Environment Variables")

google_key = os.getenv("GOOGLE_API_KEY", "") or os.getenv("GEMINI_API_KEY", "")
openai_key = os.getenv("OPENAI_API_KEY", "")
provider_env = os.getenv("A4T_LLM_PROVIDER", "(not set)")

ok1 = check("GOOGLE_API_KEY or GEMINI_API_KEY is set", bool(google_key.strip()),
            f"key={'***' + google_key[-4:] if google_key else 'MISSING'}")
ok2 = check("OPENAI_API_KEY is NOT set (correctly absent)", not openai_key.strip(),
            f"value='{openai_key or '(empty)'}'" )
ok3 = check("A4T_LLM_PROVIDER is 'google' or unset", provider_env in ("google", "gemini", "(not set)"),
            f"A4T_LLM_PROVIDER={provider_env}")

all_ok = all_ok and ok1 and ok2 and ok3


# ─── 2. llm_policy.py Functions ──────────────────────────────────────────────
section("2. llm_policy.py Module Functions")

from agents.llm_policy import openai_api_key, google_api_key, preferred_provider, get_llm, default_fast_model

ok4 = check("openai_api_key() returns None (nuclear disable)", openai_api_key() is None,
            f"got: {openai_api_key()!r}")
ok5 = check("google_api_key() returns a value", bool(google_api_key()),
            f"key={'***' + google_api_key()[-4:] if google_api_key() else 'MISSING'}")
ok6 = check("preferred_provider() returns 'google'", preferred_provider() == "google",
            f"got: {preferred_provider()!r}")
ok7 = check("default_fast_model() is a Gemini model", "gemini" in default_fast_model().lower(),
            f"got: {default_fast_model()!r}")

all_ok = all_ok and ok4 and ok5 and ok6 and ok7


# ─── 3. get_llm() Returns Google Not OpenAI ──────────────────────────────────
section("3. get_llm() Provider Routing")

from langchain_google_genai import ChatGoogleGenerativeAI

for test_model in ["gemini-2.5-flash", "gpt-4o-mini", "gpt-4o"]:
    try:
        llm = get_llm(test_model)
        is_google = isinstance(llm, ChatGoogleGenerativeAI)
        ok = check(f"get_llm('{test_model}') → Google", is_google,
                   f"got: {type(llm).__name__}")
        all_ok = all_ok and ok
    except Exception as exc:
        check(f"get_llm('{test_model}') → EXCEPTION", False, str(exc))
        all_ok = False


# ─── 4. Live Gemini API Ping ──────────────────────────────────────────────────
section("4. Live Gemini API Ping")

async def ping_gemini() -> tuple[bool, str]:
    try:
        from agents.llm_policy import google_api_key
        llm = ChatGoogleGenerativeAI(
            model="gemini-2.5-flash",
            temperature=0,
            max_output_tokens=10,
            google_api_key=google_api_key(),
        )
        result = await asyncio.wait_for(asyncio.to_thread(llm.invoke, "Reply with: OK"), timeout=30.0)
        text = result.content if hasattr(result, "content") else str(result)
        return True, text[:80].strip()
    except Exception as exc:
        return False, f"{type(exc).__name__}: {exc}"

ping_ok, ping_detail = asyncio.run(ping_gemini())
ok8 = check("Gemini API live ping succeeded", ping_ok, ping_detail)
all_ok = all_ok and ok8


# ─── 5. provider_select.select_provider_once() ───────────────────────────────
section("5. select_provider_once() Selection")

async def run_provider_select() -> tuple[str, bool, str | None]:
    # Reset any cached selection first.
    from agents import provider_select
    provider_select._CACHED = None  # type: ignore[attr-defined]
    if "A4T_LLM_PROVIDER" in os.environ:
        del os.environ["A4T_LLM_PROVIDER"]

    sel = await provider_select.select_provider_once()
    return sel.provider, sel.llm_calls_enabled, sel.error

sel_provider, sel_calls_enabled, sel_error = asyncio.run(run_provider_select())

ok9  = check("select_provider_once() selects 'google'", sel_provider == "google",
             f"got: {sel_provider!r}" + (f" error={sel_error}" if sel_error else ""))
ok10 = check("llm_calls_enabled=True after selection", sel_calls_enabled,
             f"got: {sel_calls_enabled}")
ok11 = check("A4T_LLM_PROVIDER is now 'google'", os.getenv("A4T_LLM_PROVIDER") == "google",
             f"got: {os.getenv('A4T_LLM_PROVIDER')!r}")

all_ok = all_ok and ok9 and ok10 and ok11


# ─── 6. No OpenAI Class Instantiated ─────────────────────────────────────────
section("6. OpenAI Not Used")

# If openai_api_key() is None, ChatOpenAI would fail. Verify nothing tries to create one.
try:
    from langchain_openai import ChatOpenAI
    # Confirm we can't create one without a key.
    try:
        bad_llm = ChatOpenAI(model="gpt-4o", temperature=0)
        # Force initialization
        _ = bad_llm.model_name
        check("ChatOpenAI without key raises error", False, "No error raised — unexpected!")
        all_ok = False
    except Exception as exc:
        check("ChatOpenAI without key correctly raises error", True,
              f"{type(exc).__name__}: {str(exc)[:60]}")
except ImportError:
    check("langchain_openai not installed", True, "clean environment")


# ─── Summary ──────────────────────────────────────────────────────────────────
section("Summary")
if all_ok:
    print(f"\n  {PASS} \033[1mAll checks passed.\033[0m Gemini is the active provider.\n")
    sys.exit(0)
else:
    print(f"\n  {FAIL} \033[1mSome checks failed.\033[0m Review output above.\n")
    sys.exit(1)
