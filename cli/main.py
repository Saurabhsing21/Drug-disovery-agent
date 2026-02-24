from __future__ import annotations

import argparse
import asyncio
import json
import os
import sys
import time
from typing import Iterable

from dotenv import load_dotenv

from agents.graph import run_collection_graph
from agents.schema import CollectorRequest, SourceName
from cli.formatters import bold, blue, cyan, dim, green, red, yellow, print_table_result

load_dotenv()

ASCII_LOGO = r"""
     ___                        _     _  _                         _   
    / _ \                      | |   | || |                       | |  
   / /_\ \ __ _  ___ _ __  _   | |_  | || |_    __ _  __ _  ___ _ __ | |_ 
   |  _  |/ _` |/ _ \ '_ \| |_ | __| |__   _|  / _` |/ _` |/ _ \ '_ \| __|
   | | | | (_| |  __/ | | |  _|| |_     | |   | (_| | (_| |  __/ | | | |_ 
   \_| |_/\__, |\___|_| |_|_|   \__|    |_|    \__,_|\__, |\___|_| |_|\__|
           __/ |                                      __/ |               
          |___/                                      |___/                
"""

def print_header():
    # Print the logo in a gradient of colors
    lines = ASCII_LOGO.strip("\n").split("\n")
    colors = [cyan, cyan, blue, blue, blue, cyan, cyan]
    for i, line in enumerate(lines):
        print(colors[i % len(colors)](line))
    
    print("\n" + "=" * 100)
    print(f"  {bold(yellow('AGENT 4 AGENT'))} | {bold('Evidence Collector Ecosystem')}")
    print("=" * 100)
    
    print(f"\n{bold('Initialized 4 Separate MCP Systems:')}")
    print(f"  {green('✔')} {bold('Open Targets')}  {dim('— Global drug/disease associations via external MCP')}")
    print(f"  {green('✔')} {bold('Pharos')}        {dim('— Target development levels via community MCP')}")
    print(f"  {green('✔')} {bold('Internal Lit')}   {dim('— AI-powered semantic literature search')}")
    print(f"  {green('✔')} {bold('DepMap')}         {dim('— Cancer dependency/perturbation genetic scores')}")
    print("-" * 100)

VALID_SOURCES = ["opentargets", "pharos", "literature", "depmap"]

SOURCE_DESCRIPTIONS = {
    "opentargets":     "Disease associations via official Open Targets external MCP (stdio)",
    "pharos":          "Target development level via community PHAROS external MCP (SSE:8787)",
    "literature":      "Published research papers via internal MCP",
    "depmap":          "CRISPR genetic dependency scores via internal MCP",
}

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
            print(red(f"Error: Unknown source '{token}'. Valid: {', '.join(VALID_SOURCES)}"))
            sys.exit(1)
    return parsed

async def run_query(
    gene: str,
    disease: str | None,
    sources: list[SourceName],
    output: str = "table",
    save: str | None = None,
    top_k: int = 5,
    model: str | None = None,
) -> None:
    request = CollectorRequest(
        gene_symbol=gene.upper().strip(),
        disease_id=disease,
        sources=sources,
        per_source_top_k=top_k,
        max_literature_articles=max(top_k, 1),
        model_override=model,
    )

    if output == "table":
        source_names = [s.value for s in sources]
        print_header()
        print(f"\n{blue('🔬 Querying')} {bold(gene.upper())} across {bold(str(len(source_names)))} source(s)...")
        src_list = ", ".join(f"{cyan(s)}" for s in source_names)
        print(f"   Sources: {src_list}")
        if disease:
            print(f"   Disease: {disease}")
        print(dim("   Connecting to live APIs..."))

    t0 = time.perf_counter()
    result = await run_collection_graph(request)
    elapsed = time.perf_counter() - t0

    result_dict = result.model_dump(mode="json")

    if output == "json":
        print(json.dumps(result_dict, indent=2))
    else:
        print_table_result(result_dict)
        print(dim(f"  [Completed in {elapsed:.2f}s]"))

    if save:
        os.makedirs(os.path.dirname(save) if os.path.dirname(save) else ".", exist_ok=True)
        with open(save, "w") as f:
            json.dump(result_dict, f, indent=2)
        print(green(f"✅ Full JSON saved to: {save}"))

    # Automatically save markdown summary to results/ folder
    if result.llm_summary and result.llm_summary.markdown_report:
        md_dir = "results"
        os.makedirs(md_dir, exist_ok=True)
        md_path = os.path.join(md_dir, f"{gene.upper()}_summary.md")
        with open(md_path, "w") as f:
            f.write(result.llm_summary.markdown_report)
        print(green(f"📄 Markdown report saved to: {md_path}"))

async def repl_loop() -> None:
    print_header()
    print(bold("Interactive REPL Mode"))
    print("Enter target + disease, then source MCP servers are orchestrated via LangGraph.")
    print("Type 'quit' or 'exit' to stop.")
    print("=" * 100)

    while True:
        gene_symbol = input("\nTarget gene symbol (example: EGFR): ").strip()
        if gene_symbol.lower() in {"quit", "exit"}:
            break
        if not gene_symbol:
            continue

        disease_id = input("Disease id (optional, example: EFO_0000311): ").strip() or None
        raw_sources = input("Sources (comma list or empty for all): ").strip() or None

        try:
            sources = _parse_sources(raw_sources)
            await run_query(gene_symbol, disease_id, sources)
        except ValueError as exc:
            print(red(f"Input error: {exc}"))
        except Exception as exc:  # noqa: BLE001
            print(red(f"Execution error: {exc}"))
    print("Goodbye")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="cli",
        description=bold("Evidence Collector — Aggregate genetic evidence from scientific databases via MCP"),
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    
    subparsers = parser.add_subparsers(dest="command", required=True)
    
    # Run command
    run_parser = subparsers.add_parser("run", help="Run a single query")
    run_parser.add_argument(
        "--gene", "-g",
        required=True,
        metavar="SYMBOL",
        help="Target gene symbol (example: EGFR, BRAF, KRAS)",
    )
    run_parser.add_argument(
        "--disease", "-d",
        default=None,
        metavar="DISEASE_ID",
        help="Disease EFO/MONDO ID to filter evidence (example: EFO_0000311)",
    )
    run_parser.add_argument(
        "--sources", "-s",
        default=",".join(VALID_SOURCES),
        metavar="SOURCE[,SOURCE]",
        help=f"Comma-separated sources to query. Default: all. Options: {', '.join(VALID_SOURCES)}",
    )
    run_parser.add_argument(
        "--output", "-o",
        choices=["table", "json"],
        default="table",
        help="Output format: 'table' or 'json'. Default: table",
    )
    run_parser.add_argument(
        "--save",
        metavar="FILE",
        default=None,
        help="Save JSON result to a file (example: --save results/EGFR.json)",
    )
    run_parser.add_argument(
        "--top-k",
        type=int,
        default=15,
        metavar="N",
        help="Target number of evidence records per source (default: 15).",
    )
    run_parser.add_argument(
        "--model",
        metavar="MODEL",
        default=None,
        help="Override the LLM model (default: env variable A4T_SUMMARY_MODEL)",
    )
    
    # REPL command
    subparsers.add_parser("repl", help="Start interactive REPL loop")
    
    return parser


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()

    if args.command == "repl":
        try:
            asyncio.run(repl_loop())
        except KeyboardInterrupt:
            print(f"\n{yellow('Interrupted.')}")
            sys.exit(0)
            
    elif args.command == "run":
        sources = _parse_sources(args.sources)
        try:
            asyncio.run(run_query(
                gene=args.gene,
                disease=args.disease,
                sources=sources,
                output=args.output,
                save=args.save,
                top_k=args.top_k,
                model=args.model,
            ))
        except KeyboardInterrupt:
            print(f"\n{yellow('Interrupted.')}")
            sys.exit(0)
        except Exception as exc:
            print(red(f"\n[Error] {exc}"))
            sys.exit(1)


if __name__ == "__main__":
    main()
