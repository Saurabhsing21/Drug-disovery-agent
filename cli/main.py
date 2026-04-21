from __future__ import annotations

import argparse
import asyncio
import os
import sys
from pathlib import Path
from typing import Iterable

from rich.console import Console
from rich.prompt import Prompt
from rich.table import Table

from dotenv import load_dotenv

from agents.graph import CollectionPaused
from agents.artifact_store import artifact_layout, artifact_root
from agents.provider_select import select_provider_once
from agents.schema import ReviewDecisionStatus, SourceName
from cli.run import resume_query, run_query, submit_review

VALID_SOURCES = ["opentargets", "pharos", "literature", "depmap"]

load_dotenv()


def _parse_sources(raw_sources: str | None) -> list[SourceName]:
    if raw_sources is None or not raw_sources.strip():
        return [
            SourceName.DEPMAP,
            SourceName.PHAROS,
            SourceName.OPENTARGETS,
            SourceName.LITERATURE,
        ]

    parsed: list[SourceName] = []
    for value in raw_sources.split(","):
        token = value.strip().lower()
        if not token:
            continue
        try:
            parsed.append(SourceName(token))
        except ValueError:
            print(f"Error: Unknown source '{token}'. Valid: {', '.join(VALID_SOURCES)}")
            sys.exit(1)
    return parsed


def _parse_review_decision(raw_decision: str) -> ReviewDecisionStatus:
    token = raw_decision.strip().lower()
    try:
        return ReviewDecisionStatus(token)
    except ValueError:
        options = ", ".join([status.value for status in ReviewDecisionStatus])
        print(f"Error: Unknown decision '{token}'. Valid: {options}")
        sys.exit(1)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="cli", description="Drug Discovery Agent CLI")
    subparsers = parser.add_subparsers(dest="command", required=True)

    run_parser = subparsers.add_parser("run", help="Run a single query")
    run_parser.add_argument("--gene", "-g", required=True, metavar="SYMBOL")
    run_parser.add_argument("--disease", "-d", default=None, metavar="DISEASE_ID")
    run_parser.add_argument(
        "--sources",
        "-s",
        default=",".join(VALID_SOURCES),
        metavar="SOURCE[,SOURCE]",
    )
    run_parser.add_argument(
        "--output",
        "-o",
        choices=["table", "json", "minimal"],
        default="table",
    )
    run_parser.add_argument("--save", metavar="FILE", default=None)
    run_parser.add_argument("--save-markdown", action="store_true")
    run_parser.add_argument("--top-k", type=int, default=15, metavar="N")
    run_parser.add_argument("--model", metavar="MODEL", default=None)
    run_parser.add_argument("--objective", metavar="TEXT", default=None)
    run_parser.add_argument("--run-id", metavar="RUN_ID", default=None)
    run_parser.add_argument("--no-ui", action="store_true", help="Disable Rich live UI")
    run_parser.add_argument("--no-llm", action="store_true", help="Disable live LLM calls (deterministic fallbacks)")
    run_parser.add_argument("--print-artifacts", action="store_true", help="Print artifact paths at end")

    score_parser = subparsers.add_parser("score", help="Score only (no LLM summary)")
    score_parser.add_argument("--gene", "-g", required=True, metavar="SYMBOL")
    score_parser.add_argument("--disease", "-d", default=None, metavar="DISEASE_ID")
    score_parser.add_argument("--top-k", type=int, default=15, metavar="N")
    score_parser.add_argument("--no-ui", action="store_true", help="Disable Rich live UI")

    subparsers.add_parser("repl", help="Start interactive REPL loop")
    subparsers.add_parser("doctor", help="Print runtime/provider configuration diagnostics")

    artifacts_parser = subparsers.add_parser("artifacts", help="Print artifact paths for a run id")
    artifacts_parser.add_argument("--run-id", required=True, metavar="RUN_ID")

    review_parser = subparsers.add_parser("review", help="Record a human review decision")
    review_parser.add_argument("--run-id", required=True, metavar="RUN_ID")
    review_parser.add_argument("--decision", required=True, metavar="DECISION")
    review_parser.add_argument("--reviewer-id", required=True, metavar="REVIEWER")
    review_parser.add_argument("--reason", required=True, metavar="TEXT")

    resume_parser = subparsers.add_parser("resume", help="Resume a paused run from checkpoint")
    resume_parser.add_argument("--output", "-o", choices=["table", "json", "minimal"], default="table")
    resume_parser.add_argument("--save", metavar="FILE", default=None)
    resume_parser.add_argument("--run-id", required=True, metavar="RUN_ID")
    resume_parser.add_argument("--no-ui", action="store_true", help="Disable Rich live UI")

    return parser


def _render_history(console: Console, history: Iterable[str]) -> None:
    table = Table(title="Session History", header_style="bold cyan")
    table.add_column("Run #", justify="right", style="dim")
    table.add_column("Gene", style="bold")
    for idx, gene in enumerate(history, start=1):
        table.add_row(str(idx), gene)
    console.print(table)


async def repl_loop() -> None:
    console = Console()
    history: list[str] = []
    while True:
        if history:
            _render_history(console, history)
        gene = Prompt.ask("> Gene")
        if gene.strip().lower() in {"exit", "quit"}:
            break
        disease = Prompt.ask("> Disease (optional)", default="").strip() or None
        if not gene.strip():
            continue
        try:
            os.environ["A4T_NO_UI"] = "1"
            await run_query(
                gene=gene.strip(),
                disease=disease,
                sources=_parse_sources(None),
                output="minimal",
                top_k=15,
                no_ui=True,
            )
            history.append(gene.strip().upper())
        except Exception as exc:  # noqa: BLE001
            console.print(f"[red]Error:[/red] {exc}")


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()

    if args.command == "repl":
        asyncio.run(repl_loop())
        return

    if args.command == "doctor":
        try:
            selection = asyncio.run(select_provider_once())
        except Exception as exc:  # noqa: BLE001
            print(f"[Error] doctor failed: {exc}")
            sys.exit(1)
        print("Provider selection:")
        print(selection.as_dict())
        print("Models:")
        print(
            {
                "A4T_OPENAI_FAST_MODEL": os.getenv("A4T_OPENAI_FAST_MODEL"),
                "A4T_OPENAI_REASONING_MODEL": os.getenv("A4T_OPENAI_REASONING_MODEL"),
                "A4T_SYSTEM_FAST_MODEL": os.getenv("A4T_SYSTEM_FAST_MODEL"),
                "A4T_SYSTEM_REASONING_MODEL": os.getenv("A4T_SYSTEM_REASONING_MODEL"),
                "A4T_LLM_CALLS_ENABLED": os.getenv("A4T_LLM_CALLS_ENABLED"),
            }
        )
        return

    if args.command == "artifacts":
        root = artifact_root().resolve()
        layout = artifact_layout(args.run_id)
        print(f"Artifact root: {root}")
        for key, raw in layout.items():
            p = Path(raw)
            exists = p.exists()
            print(f"{key}: {p} ({'exists' if exists else 'missing'})")
        return

    if args.command == "run":
        if args.no_llm:
            os.environ["A4T_LLM_CALLS_ENABLED"] = "0"
        sources = _parse_sources(args.sources)
        try:
            asyncio.run(
                run_query(
                    gene=args.gene,
                    disease=args.disease,
                    sources=sources,
                    output=args.output,
                    save=args.save,
                    top_k=args.top_k,
                    model=args.model,
                    objective=args.objective,
                    run_id=args.run_id,
                    save_markdown=args.save_markdown,
                    no_ui=args.no_ui or args.output == "minimal",
                    print_artifacts=args.print_artifacts,
                )
            )
        except CollectionPaused:
            sys.exit(2)
        except Exception as exc:  # noqa: BLE001
            print(f"[Error] {exc}")
            sys.exit(1)
        return

    if args.command == "score":
        os.environ["A4T_REPORT_FORMAT"] = "structured"
        os.environ["A4T_LLM_CALLS_ENABLED"] = "0"
        try:
            asyncio.run(
                run_query(
                    gene=args.gene,
                    disease=args.disease,
                    sources=_parse_sources(None),
                    output="minimal",
                    top_k=args.top_k,
                    no_ui=True,
                )
            )
        except Exception as exc:  # noqa: BLE001
            print(f"[Error] {exc}")
            sys.exit(1)
        return

    if args.command == "review":
        try:
            submit_review(
                run_id=args.run_id,
                decision=args.decision,
                reviewer_id=args.reviewer_id,
                reason=args.reason,
            )
        except Exception as exc:  # noqa: BLE001
            print(f"[Error] {exc}")
            sys.exit(1)
        return

    if args.command == "resume":
        try:
            asyncio.run(
                resume_query(
                    run_id=args.run_id,
                    output=args.output,
                    save=args.save,
                    no_ui=args.no_ui or args.output == "minimal",
                )
            )
        except CollectionPaused:
            sys.exit(2)
        except Exception as exc:  # noqa: BLE001
            print(f"[Error] {exc}")
            sys.exit(1)


if __name__ == "__main__":
    main()
