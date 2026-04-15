#!/usr/bin/env python3
from __future__ import annotations

import argparse
import asyncio
import os

from dotenv import load_dotenv


def _bool_env(name: str) -> bool:
    return os.getenv(name, "").strip().lower() in {"1", "true", "yes", "on"}


async def _check_openai(model: str, timeout_s: float) -> int:
    try:
        from langchain_openai import ChatOpenAI
    except Exception as exc:  # noqa: BLE001
        print(f"[openai] FAIL import langchain_openai: {exc}")
        return 2

    key = os.getenv("OPENAI_API_KEY")
    if not key:
        print("[openai] SKIP missing OPENAI_API_KEY")
        return 3

    llm = ChatOpenAI(model=model, temperature=0.0)
    try:
        resp = await asyncio.wait_for(llm.ainvoke("Reply with exactly: ok"), timeout=timeout_s)
        content = str(getattr(resp, "content", resp))
        ok = content.strip().lower().startswith("ok")
        print(f"[openai] {'OK' if ok else 'WARN'} model={model} response_prefix={content[:40].replace(chr(10), ' ')}")
        return 0 if ok else 1
    except Exception as exc:  # noqa: BLE001
        msg = str(exc)
        print(f"[openai] FAIL model={model} {type(exc).__name__}: {msg[:300]}")
        return 1


async def main() -> int:
    parser = argparse.ArgumentParser(description="Smoke-test LLM API keys from env without printing secrets.")
    parser.add_argument(
        "--provider",
        choices=["openai"],
        default="openai",
        help="Which provider to test.",
    )
    parser.add_argument("--openai-model", default=os.getenv("OPENAI_MODEL", "gpt-4o-mini"))
    parser.add_argument("--timeout", type=float, default=float(os.getenv("A4T_LLM_TIMEOUT_S", "30")))
    parser.add_argument("--no-dotenv", action="store_true", help="Do not load .env")
    args = parser.parse_args()

    if not args.no_dotenv:
        # Explicit path avoids python-dotenv's stdin frame assertion edge case.
        load_dotenv(dotenv_path=".env", override=_bool_env("A4T_DOTENV_OVERRIDE"))

    results = [await _check_openai(args.openai_model, args.timeout)]

    # 0 = OK, 1 = FAIL/WARN, 2 = import/config error, 3 = missing key
    # If both tested, any non-zero means not fully healthy.
    return 0 if results and all(code == 0 for code in results) else (max(results) if results else 1)


if __name__ == "__main__":
    raise SystemExit(asyncio.run(main()))
