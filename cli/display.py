from __future__ import annotations

import os
import threading
import time
from collections import deque
from datetime import datetime
from typing import Deque, Literal

from rich.align import Align
from rich.columns import Columns
from rich.console import Console, Group
from rich.layout import Layout
from rich.live import Live
from rich.panel import Panel
from rich.table import Table
from rich.text import Text

COLORS = {
    "pharos": "bright_magenta",
    "depmap": "bright_green",
    "open_targets": "bright_blue",
    "literature": "bright_yellow",
    "planning": "cyan",
    "collecting": "blue",
    "normalizing": "magenta",
    "scoring": "green",
    "summarizing": "yellow",
}

SPINNER_FRAMES = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]

STAGE_DESCRIPTIONS = {
    "planning": "Analyzing gene and planning evidence collection strategy",
    "collecting": "Querying 4 MCP sources in parallel",
    "normalizing": "Converting heterogeneous signals to 0-1 scale",
    "scoring": "Computing weighted target_score and evidence_confidence",
    "summarizing": "Generating 9-section therapeutic dossier",
}

SOURCE_DESCRIPTIONS = {
    "pharos": "Target development level + ligand count",
    "depmap": "CRISPR gene effect across 1,169 cancer lines",
    "open_targets": "Human disease association scores",
    "literature": "Europe PMC relevant paper count",
}

_STAGE_LABELS = {
    "planning": "Planning Agent",
    "collecting": "Evidence Collectors",
    "normalizing": "Normalization Agent",
    "scoring": "Scoring Agent",
    "summarizing": "Summary Agent",
}

_SOURCE_LABELS = {
    "pharos": "PHAROS",
    "depmap": "DepMap",
    "open_targets": "Open Targets",
    "literature": "Literature",
}


class AgentDisplay:
    def __init__(self, gene: str, disease: str, top_k: int, run_id: str):
        self.gene = gene
        self.disease = disease or "n/a"
        self.top_k = top_k
        self.run_id = run_id
        self.console = Console()
        self.layout = Layout(name="root")
        self.layout.split_column(
            Layout(name="header", size=6),
            Layout(name="pipeline", size=14),
            Layout(name="sources", size=10),
            Layout(name="log", ratio=1, minimum_size=6),
        )
        self._stage_state = {
            "planning": {"state": "waiting", "detail": ""},
            "collecting": {"state": "waiting", "detail": ""},
            "normalizing": {"state": "waiting", "detail": ""},
            "scoring": {"state": "waiting", "detail": ""},
            "summarizing": {"state": "waiting", "detail": ""},
        }
        self._source_state = {
            "pharos": {"state": "waiting", "result": ""},
            "depmap": {"state": "waiting", "result": ""},
            "open_targets": {"state": "waiting", "result": ""},
            "literature": {"state": "waiting", "result": ""},
        }
        self._log: Deque[tuple[str, str, str]] = deque(maxlen=400)
        self._spinner_index = 0
        self._spinner_frame = SPINNER_FRAMES[0]
        self._spinner_thread: threading.Thread | None = None
        self._running = False
        self._live: Live | None = None
        self._start_time: float | None = None
        self._sources_visible = False
        self.artifact_path = "n/a"
        self._ui_enabled = os.getenv("A4T_NO_UI", "").strip().lower() not in {"1", "true", "yes"}
        self._suppress_logs = False

    def start(self):
        if not self._ui_enabled:
            self._start_time = time.perf_counter()
            return
        self._start_time = time.perf_counter()
        self._running = True
        self._live = Live(self.layout, console=self.console, refresh_per_second=10, screen=True)
        self._live.__enter__()
        self._refresh()
        self._spinner_thread = threading.Thread(target=self._spin, daemon=True)
        self._spinner_thread.start()

    def stop(self):
        self._running = False
        if self._live is not None:
            self._live.__exit__(None, None, None)
            self._live = None

    def set_stage(
        self,
        stage: Literal["planning", "collecting", "normalizing", "scoring", "summarizing"],
        state: Literal["waiting", "running", "complete", "failed"],
        detail: str = "",
    ):
        if stage not in self._stage_state:
            return
        self._stage_state[stage]["state"] = state
        self._stage_state[stage]["detail"] = detail
        if stage == "planning" and state == "complete":
            self._sources_visible = True
        self._refresh()

    def set_source(
        self,
        source: Literal["pharos", "depmap", "open_targets", "literature"],
        state: Literal["waiting", "running", "complete", "failed"],
        result_line: str = "",
    ):
        if source not in self._source_state:
            return
        self._source_state[source]["state"] = state
        self._source_state[source]["result"] = result_line
        self._refresh()

    def log(
        self,
        message: str,
        level: Literal["info", "warning", "action", "success", "error", "transition"] = "info",
    ):
        if self._suppress_logs:
            return
        timestamp = datetime.now().strftime("%H:%M:%S")
        self._log.append((timestamp, level, message))
        if not self._ui_enabled:
            self._plain_log(timestamp, level, message)
        self._refresh()

    def show_final_score(self, scored_target: dict):
        elapsed = self._elapsed()
        if self._live is not None:
            self.stop()

        gene = scored_target.get("gene", self.gene)
        target_score = float(scored_target.get("target_score", 0.0))
        evidence_conf = float(scored_target.get("evidence_confidence", 0.0))
        conflict_flag = bool(scored_target.get("conflict_flag", False))
        missing_sources = scored_target.get("missing_sources") or []
        source_scores = scored_target.get("source_scores") or {}
        source_confidences = scored_target.get("source_confidences") or {}
        weights_used = scored_target.get("weights_used") or {}
        notes = scored_target.get("notes") or []

        score_color = self._score_color(target_score)
        conf_color = self._score_color(evidence_conf)
        conflict_text = "None" if not conflict_flag else "YES"
        conflict_style = "green" if not conflict_flag else "bold red"
        missing_text = "None" if not missing_sources else ", ".join(missing_sources)
        missing_style = "green" if not missing_sources else "bold red"

        left = Table.grid(padding=(0, 1))
        left.add_column(justify="right", style="dim", width=20)
        left.add_column()
        left.add_row("Target Score", Text(f"{target_score:.3f}", style=f"bold {score_color}"))
        left.add_row("Evidence Confidence", Text(f"{int(evidence_conf * 100)}%", style=f"bold {conf_color}"))
        left.add_row("Conflict Flag", Text(conflict_text, style=conflict_style))
        left.add_row("Missing Sources", Text(missing_text, style=missing_style))
        left.add_row("", "")

        table = Table(show_header=True, header_style="bold", box=None)
        table.add_column("Source", style="bold")
        table.add_column("Raw Signal")
        table.add_column("Normalized")
        table.add_column("Weight")
        table.add_column("Contribution")
        table.add_column("Confidence")

        for src in ["pharos", "depmap", "open_targets", "literature"]:
            color = COLORS[src]
            score = source_scores.get(src)
            weight = weights_used.get(src)
            conf = source_confidences.get(src, "missing")
            missing = score is None
            if self._source_state.get(src, {}).get("state") == "failed":
                table.add_row(
                    Text(_SOURCE_LABELS[src], style=color),
                    Text("—", style="dim"),
                    Text("—", style="dim"),
                    Text("—", style="dim"),
                    Text("FAILED", style="bold red"),
                    Text("failed", style="red"),
                )
                continue
            if missing:
                table.add_row(
                    Text(_SOURCE_LABELS[src], style=color),
                    Text("—", style="dim"),
                    Text("—", style="dim"),
                    Text("—", style="dim"),
                    Text("—", style="dim"),
                    Text(conf, style="dim"),
                )
                continue
            contribution = score * float(weight or 0)
            table.add_row(
                Text(_SOURCE_LABELS[src], style=color),
                Text("n/a", style="dim"),
                Text(f"{score:.3f}", style=color),
                Text(f"{float(weight or 0):.2f}", style=color),
                Text(f"{contribution * 100:.1f} pts", style=color),
                Text(conf, style=color),
            )

        left_panel = Group(left, table)

        bars = self._render_contribution_bars(source_scores, weights_used)
        notes_block = self._render_notes(notes)
        right_panel = Group(bars, notes_block)

        body = Table.grid(expand=True)
        body.add_column(ratio=3)
        body.add_column(ratio=2)
        body.add_row(left_panel, right_panel)
        panel = Panel(
            body,
            title=f"Target Assessment: {gene}",
            border_style="bright_green",
            expand=True,
        )
        self.console.print(panel)
        self._print_interpretations(source_scores)
        self.console.print(
            Text(f"Run complete in {elapsed:.1f}s  |  Artifacts: {self.artifact_path}", style="dim")
        )

    def _spin(self):
        while self._running:
            self._spinner_index = (self._spinner_index + 1) % len(SPINNER_FRAMES)
            self._spinner_frame = SPINNER_FRAMES[self._spinner_index]
            self._refresh()
            time.sleep(0.1)

    def _refresh(self):
        if not self._ui_enabled or self._live is None:
            return
        self.layout["header"].update(self._render_header())
        self.layout["pipeline"].update(self._render_pipeline())
        self.layout["sources"].update(self._render_sources())
        self.layout["log"].update(self._render_log())

    def _render_header(self):
        title = Text(
            "\n".join(
                [
                    "  ___                   _  _     _                 _   ",
                    " / _ | ___ ___  ___ ___| || |_ _| |_ ___ _ _  ___ | |_ ",
                    "/ __ |/ -_) _ \\/ -_) _ \\ __ | '_|  _/ -_) '_|/ _ \\|  _|",
                    "/_/ |_|\\__/_//_/\\___\\___/_||_|_|  \\__\\___|_|  \\___/ \\__|",
                    "                Drug Discovery Agent                   ",
                    "                                                        ",
                ]
            ),
            style="bold cyan",
        )
        stamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        meta = Text(
            f"Gene: {self.gene}  |  Disease: {self.disease}  |  Top-K: {self.top_k}  |  Run ID: {self.run_id}  |  {stamp}",
            style="dim",
        )
        content = Group(Align.center(title), Align.center(meta))
        return Panel(content, border_style="bright_blue")

    def _render_pipeline(self):
        panels = []
        for stage in ["planning", "collecting", "normalizing", "scoring", "summarizing"]:
            state = self._stage_state[stage]["state"]
            detail = self._stage_state[stage]["detail"] or STAGE_DESCRIPTIONS[stage]
            panels.append(self._stage_panel(stage, state, detail))
        return Columns(panels, expand=True, equal=True)

    def _stage_panel(self, stage: str, state: str, detail: str):
        label = _STAGE_LABELS[stage]
        if state == "waiting":
            title = Text.assemble(("● ", "dim"), (label, "dim"))
        elif state == "running":
            title = Text.assemble(
                (self._spinner_frame + " ", "yellow"),
                ("● ", "yellow"),
                (label, "yellow"),
            )
        elif state == "complete":
            title = Text.assemble(("✓ ", "green"), (label, "green"))
        else:
            title = Text.assemble(("✗ ", "red"), (label, "red"))
        body = Text(detail, style="white")
        return Panel(body, title=title, border_style=COLORS.get(stage, "white"))

    def _render_sources(self):
        if not self._sources_visible:
            return Panel(Text("Waiting for planning output...", style="dim"), border_style="dim")

        width = self.console.width
        panels = [self._source_panel(src) for src in ["pharos", "depmap", "open_targets", "literature"]]

        if width >= 140:
            return Columns(panels, expand=True, equal=True)
        if width >= 90:
            return Columns(panels, expand=True, equal=True, column_first=False)
        return Group(*panels)

    def _source_panel(self, source: str):
        state = self._source_state[source]["state"]
        result = self._source_state[source]["result"]
        desc = SOURCE_DESCRIPTIONS[source]
        status_line = self._source_status_line(state, result)
        body = Text(f"{desc}\n{status_line}", style="white")
        return Panel(body, title=Text(_SOURCE_LABELS[source], style=COLORS[source]), border_style=COLORS[source])

    def _source_status_line(self, state: str, result: str):
        if state == "waiting":
            return "Status: waiting..."
        if state == "running":
            return f"Status: {self._spinner_frame} querying"
        if state == "complete":
            suffix = f" | {result}" if result else ""
            return f"Status: ✓ complete{suffix}"
        return "Status: ✗ failed"

    def _render_log(self):
        lines = []
        for ts, level, msg in list(self._log)[-60:]:
            prefix, style = self._log_style(level)
            line = Text(f"[{ts}] ", style="dim")
            line.append(f"{prefix} {msg}", style=style)
            lines.append(line)
        if lines:
            content = Text()
            for idx, line in enumerate(lines):
                if idx:
                    content.append("\n")
                content.append(line)
        else:
            content = Text("No events yet...", style="dim")
        return Panel(content, title=Text("Event log", style="dim"), border_style="dim")

    def _log_style(self, level: str):
        if level == "warning":
            return "!", "yellow"
        if level == "action":
            return "→", "cyan"
        if level == "success":
            return "✓", "green"
        if level == "error":
            return "✗", "red"
        if level == "transition":
            return "⟶", "bright_blue"
        return "·", "dim"

    def _plain_log(self, ts: str, level: str, message: str):
        prefix, _style = self._log_style(level)
        self.console.print(f"[{ts}] {prefix} {message}")

    def _render_contribution_bars(self, source_scores: dict, weights_used: dict):
        table = Table.grid(padding=(0, 1))
        table.add_column()
        table.add_column(justify="left")
        for src in ["pharos", "depmap", "open_targets", "literature"]:
            score = source_scores.get(src)
            weight = weights_used.get(src) or 0
            pts = score * weight * 100 if score is not None else 0
            bar = "█" * max(1, int(pts / 2)) if score is not None else ""
            label = f"{_SOURCE_LABELS[src]:<12}"
            table.add_row(Text(label, style=COLORS[src]), Text(f"{bar:<18} {pts:>5.1f} pts", style=COLORS[src]))
        return table

    def _render_notes(self, notes: list[str]):
        if not notes:
            return Text("No audit notes.", style="dim")
        bullet = "\n".join([f"- {n}" for n in notes])
        return Text(bullet, style="dim")

    def _print_interpretations(self, source_scores: dict):
        interpretations = {
            "pharos": "Pharos reflects target development maturity and ligandability signals.",
            "depmap": "DepMap highlights genetic dependency across cancer cell lines.",
            "open_targets": "Open Targets summarizes disease association strength.",
            "literature": "Literature coverage indicates breadth of published evidence.",
        }
        for src in ["pharos", "depmap", "open_targets", "literature"]:
            if src in source_scores:
                self.console.print(Text(interpretations[src], style="dim italic"))

    def _elapsed(self) -> float:
        if self._start_time is None:
            return 0.0
        return time.perf_counter() - self._start_time

    def _score_color(self, value: float) -> str:
        if value >= 0.7:
            return "green"
        if value >= 0.4:
            return "yellow"
        return "red"
