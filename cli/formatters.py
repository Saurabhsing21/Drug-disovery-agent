from __future__ import annotations

import sys
import time
from collections import deque
from typing import Any, Deque

try:
    from rich.align import Align
    from rich.box import ROUNDED
    from rich.console import Console, Group
    from rich.live import Live
    from rich.markdown import Markdown
    from rich.panel import Panel
    from rich.table import Table
    from rich.text import Text
except Exception:  # noqa: BLE001
    Console = None  # type: ignore[assignment]
    Live = None  # type: ignore[assignment]
    Table = None  # type: ignore[assignment]
    Panel = None  # type: ignore[assignment]
    Text = None  # type: ignore[assignment]
    Group = None  # type: ignore[assignment]
    Markdown = None  # type: ignore[assignment]
    Align = None  # type: ignore[assignment]
    ROUNDED = None  # type: ignore[assignment]

# ─────────────────────────────────────────────────────────────────────────────
# ANSI Colors (auto-disable if not a tty)
# ─────────────────────────────────────────────────────────────────────────────
_IS_TTY = sys.stdout.isatty()
_RICH_AVAILABLE = Console is not None
_RICH_CONSOLE = Console() if _RICH_AVAILABLE else None


def rich_available() -> bool:
    return _RICH_AVAILABLE and _IS_TTY


def console_print(*args: Any, **kwargs: Any) -> None:
    if rich_available():
        _RICH_CONSOLE.print(*args, **kwargs)
    else:
        print(*args, **kwargs)


def _c(code: str, text: str) -> str:
    return f"\033[{code}m{text}\033[0m" if _IS_TTY else text


def bold(t: str) -> str:
    return _c("1", t)


def green(t: str) -> str:
    return _c("92", t)


def yellow(t: str) -> str:
    return _c("93", t)


def red(t: str) -> str:
    return _c("91", t)


def blue(t: str) -> str:
    return _c("94", t)


def dim(t: str) -> str:
    return _c("90", t)


def cyan(t: str) -> str:
    return _c("96", t)

STATUS_ICONS = {
    "success": green("✅ success"),
    "skipped": yellow("⏩ skipped"),
    "failed":  red("❌ failed"),
}

def _status_icon(status: str) -> str:
    return STATUS_ICONS.get(status, dim(status))


def _rich_status_text(status: str) -> Text:
    status_value = status or "unknown"
    if status_value == "success":
        return Text("success", style="bold green")
    if status_value == "failed":
        return Text("failed", style="bold red")
    if status_value == "skipped":
        return Text("skipped", style="bold yellow")
    return Text(status_value, style="dim")


class ProgressRenderer:
    def __init__(self, enabled: bool) -> None:
        self.enabled = enabled and rich_available()
        self.active_stage: str | None = None
        self.last_stage: str | None = None
        self.running_sources: set[str] = set()
        self.last_agent: str | None = None
        self.last_agent_detail: str | None = None
        self.last_event: str | None = None
        self.started_at = time.perf_counter()
        self.events: Deque[str] = deque(maxlen=8)
        self._live = None
        self._console = _RICH_CONSOLE if self.enabled else None

    def __enter__(self) -> "ProgressRenderer":
        if self.enabled:
            self._live = Live(self._render(), console=self._console, refresh_per_second=8)
            self._live.__enter__()
        return self

    def __exit__(self, exc_type, exc, tb) -> None:
        if self._live is not None:
            self._live.__exit__(exc_type, exc, tb)

    def _display_stage(self, stage_name: str) -> str:
        return stage_name.replace("_", " ").title()

    def _log(self, text: str) -> None:
        self.events.appendleft(text)

    def _render(self):
        elapsed = time.perf_counter() - self.started_at
        status_table = Table.grid(padding=(0, 1))
        status_table.add_column(justify="right", style="dim", width=18)
        status_table.add_column(style="bold")

        active_stage = self._display_stage(self.active_stage) if self.active_stage else "Idle"
        last_stage = self._display_stage(self.last_stage) if self.last_stage else "n/a"
        running_sources = ", ".join(sorted(self.running_sources)) if self.running_sources else "n/a"
        agent_line = self.last_agent or "n/a"
        if self.last_agent_detail:
            agent_line = f"{agent_line} ({self.last_agent_detail})"

        status_table.add_row("Active stage", active_stage)
        status_table.add_row("Last stage", last_stage)
        status_table.add_row("Running sources", running_sources)
        status_table.add_row("Agent activity", agent_line)
        status_table.add_row("Last event", self.last_event or "n/a")
        status_table.add_row("Elapsed", f"{elapsed:.1f}s")

        log_table = Table.grid(padding=(0, 1))
        log_table.add_column(style="dim")
        for entry in list(self.events):
            log_table.add_row(entry)

        panel = Panel(
            Group(status_table, Align.left(log_table)),
            title="Run Status",
            border_style="cyan",
            box=ROUNDED,
        )
        return panel

    def on_progress(self, event_type: str, payload: dict[str, Any]) -> None:
        if not self.enabled:
            return

        if event_type == "stage_start":
            stage = payload.get("stage")
            if stage:
                self.active_stage = stage
                self.last_event = f"Stage start: {self._display_stage(stage)}"
                self._log(self.last_event)
        elif event_type == "stage_end":
            stage = payload.get("stage")
            if stage:
                self.last_stage = stage
                if self.active_stage == stage:
                    self.active_stage = None
                self.last_event = f"Stage complete: {self._display_stage(stage)}"
                self._log(self.last_event)
        elif event_type == "edge":
            source = payload.get("from_stage")
            target = payload.get("to_stage")
            if source and target:
                self.last_event = f"Transition: {self._display_stage(source)} → {self._display_stage(target)}"
                self._log(self.last_event)
        elif event_type == "source_start":
            source = payload.get("source")
            if source:
                self.running_sources.add(source)
                self.last_event = f"Source start: {source}"
                self._log(self.last_event)
        elif event_type == "source_end":
            source = payload.get("source")
            if source:
                self.running_sources.discard(source)
                status = payload.get("status", "")
                self.last_event = f"Source end: {source} ({status})"
                self._log(self.last_event)
        elif event_type == "agent_decision":
            self.last_agent = payload.get("agent_name")
            self.last_agent_detail = payload.get("action")
            self.last_event = f"Agent decision: {self.last_agent}"
            self._log(self.last_event)
        elif event_type == "agent_report":
            self.last_agent = payload.get("agent_name")
            self.last_agent_detail = "report"
            self.last_event = f"Agent report: {self.last_agent}"
            self._log(self.last_event)
        elif event_type == "workflow_paused":
            next_stages = payload.get("next_stages", ())
            self.last_event = f"Paused at {', '.join(next_stages) if next_stages else 'unknown'}"
            self._log(self.last_event)

        if self._live is not None:
            self._live.update(self._render(), refresh=True)

def print_table_result(result: dict) -> None:
    gene = result["query"]["gene_symbol"]
    disease = result["query"].get("disease_id") or "none"
    run_id = result.get("run_id", "")
    if rich_available():
        header = Text("Evidence Collection Report", style="bold cyan")
        sub = Text.assemble("Target: ", (gene, "bold"), "   Disease: ", disease, "   Run: ", run_id)
        console_print(Panel(Align.left(Text.assemble(header, "\n", sub)), box=ROUNDED, border_style="cyan"))

        table = Table(title="Source Status", box=ROUNDED, border_style="blue")
        table.add_column("Source", style="bold")
        table.add_column("Status")
        table.add_column("Records", justify="right")
        table.add_column("Duration", justify="right")
        table.add_column("Note")
        for s in result.get("source_status", []):
            table.add_row(
                s.get("source", ""),
                _rich_status_text(s.get("status", "")),
                str(s.get("record_count", 0)),
                f"{s.get('duration_ms', 0)} ms",
                s.get("error_message", "") or "",
            )
        console_print(table)

        llm_summary = result.get("llm_summary")
        if llm_summary:
            summary_table = Table.grid(padding=(0, 1))
            summary_table.add_column(style="dim", width=18)
            summary_table.add_column()
            summary_table.add_row("Mode", llm_summary.get("generation_mode", "unknown"))
            if llm_summary.get("model_used"):
                summary_table.add_row("Model", llm_summary["model_used"])
            robustness = llm_summary.get("robustness")
            if robustness:
                status = "COMPLETED" if robustness.get("minimum_coverage_met") else "PARTIAL"
                status_style = "bold green" if robustness.get("minimum_coverage_met") else "bold yellow"
                summary_table.add_row("Status", Text(status, style=status_style))
                summary_table.add_row(
                    "Robustness",
                    f"sources={robustness.get('successful_source_count', 0)}/"
                    f"{robustness.get('requested_source_count', 0)} | verdict={robustness.get('verdict', '')}",
                )

            console_print(Panel(summary_table, title="Bio-Synthesis Dossier", border_style="magenta", box=ROUNDED))

            markdown_report = llm_summary.get("markdown_report")
            if markdown_report:
                console_print(Panel(Markdown(markdown_report), title="Summary", border_style="green", box=ROUNDED))

        errors = result.get("errors", [])
        if errors:
            error_table = Table(title="Errors", box=ROUNDED, border_style="red")
            error_table.add_column("Source")
            error_table.add_column("Code")
            error_table.add_column("Message")
            for err in errors:
                error_table.add_row(err.get("source", ""), err.get("error_code", ""), err.get("message", ""))
            console_print(error_table)
        return

    print()
    print(bold("=" * 100))
    print(bold(f"  EVIDENCE COLLECTION REPORT: {cyan(gene)}"))
    print(f"  Target indication : {dim(disease)}")
    print(f"  Run Identifier    : {dim(run_id)}")
    print(bold("=" * 100))

    # Source status table
    print(f"\n{bold('SOURCE STATUS')}")
    print(f"  {'Source':<16} {'Status':<22} {'Records':<10} {'Duration':<12} {'Note'}")
    print(f"  {'-'*16} {'-'*22} {'-'*10} {'-'*12} {'-'*40}")
    for s in result.get("source_status", []):
        src = s["source"]
        status = _status_icon(s.get("status", ""))
        count = str(s.get("record_count", 0))
        dur = f"{s.get('duration_ms', 0)} ms"
        note = dim(s.get("error_message") or "")
        print(f"  {src:<16} {status:<30} {count:<10} {dur:<12} {note}")

    llm_summary = result.get("llm_summary")
    if llm_summary:
        print(f"\n{bold('BIO-SYNTHESIS DOSSIER')}")
        print(f"  Mode                 : {llm_summary.get('generation_mode', 'unknown')}")
        if llm_summary.get("model_used"):
            print(f"  Model                : {cyan(llm_summary['model_used'])}")

        robustness = llm_summary.get("robustness")
        if robustness:
            print(f"  Status               : {green('COMPLETED') if robustness.get('minimum_coverage_met') else yellow('PARTIAL')}")
            print(
                "  Robustness           : "
                f"sources={robustness.get('successful_source_count', 0)}/"
                f"{robustness.get('requested_source_count', 0)} | "
                f"verdict={robustness.get('verdict', '')}"
            )

        markdown_report = llm_summary.get("markdown_report")
        if markdown_report:
            print("\n" + bold("-" * 100))
            print(markdown_report)
            print(bold("-" * 100))

    print(f"\n{bold('ERRORS')}" if result.get("errors") else "")
    for err in result.get("errors", []):
        print(f"  [{err['source']}] {err['error_code']}: {err['message']}")

    print(bold("=" * 100))
    print()


def print_final_summary(summary: dict[str, str]) -> None:
    if rich_available():
        table = Table.grid(padding=(0, 1))
        table.add_column(style="dim", width=18)
        table.add_column()
        for key, value in summary.items():
            table.add_row(key, value)
        console_print(Panel(table, title="Final Output", border_style="green", box=ROUNDED))
    else:
        print(bold("\nFINAL OUTPUT"))
        for key, value in summary.items():
            print(f"  {key:<16}: {value}")
