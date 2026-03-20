from __future__ import annotations

import asyncio
import json
import os
import sys
import time
from typing import Any

from rich.console import Console
from rich.panel import Panel
from rich.text import Text

from dotenv import load_dotenv

from agents.artifact_store import artifact_layout
from agents.graph import CollectionPaused, get_collection_state, resume_collection_graph, run_collection_graph
from agents.request_builders import build_collector_request
from agents.review_interface import apply_review_decision
from agents.schema import CollectorRequest, ReviewDecisionInput, ReviewDecisionStatus, SourceName
from cli.display import AgentDisplay, STAGE_DESCRIPTIONS

load_dotenv()

STAGE_PHASE = {
    "validate_input": "planning",
    "plan_collection": "planning",
    "plan_review_gate": "planning",
    "collect_sources_parallel": "collecting",
    "normalize_evidence": "normalizing",
    "verify_evidence": "normalizing",
    "analyze_conflicts": "normalizing",
    "build_evidence_graph": "normalizing",
    "score_evidence": "scoring",
    "assess_sufficiency": "scoring",
    "generate_explanation": "summarizing",
    "supervisor_decide": "summarizing",
    "prepare_review_brief": "summarizing",
    "human_review_gate": "summarizing",
    "emit_dossier": "summarizing",
}

SOURCE_MAP = {
    "opentargets": "open_targets",
    "open_targets": "open_targets",
    "pharos": "pharos",
    "depmap": "depmap",
    "literature": "literature",
}

PHASE_LAST_STAGE = {
    "planning": "plan_review_gate",
    "collecting": "collect_sources_parallel",
    "normalizing": "build_evidence_graph",
    "scoring": "assess_sufficiency",
    "summarizing": "emit_dossier",
}


def _display_stage_name(stage_name: str) -> str:
    return stage_name.replace("_", " ").title()


def _phase_for_stage(stage: str) -> str | None:
    return STAGE_PHASE.get(stage)


def _stage_detail(stage: str, update: dict) -> str:
    if stage == "plan_collection":
        plan = update.get("plan", {})
        selected_sources = plan.get("selected_sources", []) if isinstance(plan, dict) else []
        return f"Selected {len(selected_sources)} sources"
    if stage == "collect_sources_parallel":
        items = update.get("evidence_items", {})
        count = items.get("count", 0) if isinstance(items, dict) else 0
        return f"Fetched {count} raw items"
    if stage == "normalize_evidence":
        items = update.get("normalized_items", {})
        count = items.get("count", 0) if isinstance(items, dict) else 0
        return f"Normalized {count} items"
    if stage == "build_evidence_graph":
        graph = update.get("evidence_graph", {})
        if isinstance(graph, dict):
            return f"Graph nodes={len(graph.get('nodes', []))} edges={len(graph.get('edges', []))}"
    if stage == "score_evidence":
        scored = update.get("scored_target", {})
        score = scored.get("target_score")
        if score is not None:
            return f"Target score {score:.3f}"
    if stage == "prepare_review_brief":
        brief = update.get("review_brief", {})
        if isinstance(brief, dict):
            q = len(brief.get("reviewer_questions", []))
            return f"Prepared review brief ({q} questions)"
    if stage == "emit_dossier":
        return "Final dossier emitted"
    return STAGE_DESCRIPTIONS.get(_phase_for_stage(stage) or "", "")


def _source_result_line(payload: dict) -> str:
    count = payload.get("record_count", 0)
    return f"{count} records"


async def run_query(
    gene: str,
    disease: str | None,
    sources: list[SourceName],
    output: str = "table",
    save: str | None = None,
    top_k: int = 5,
    model: str | None = None,
    objective: str | None = None,
    run_id: str | None = None,
    save_markdown: bool = False,
    no_ui: bool = False,
) -> None:
    request = build_collector_request(
        gene_symbol=gene,
        disease_id=disease,
        objective=objective,
        sources=sources,
        per_source_top_k=top_k,
        max_literature_articles=max(top_k, 1),
        model_override=model,
        run_id=run_id,
    )
    await _execute_query(
        request=request,
        output=output,
        save=save,
        gene=gene,
        sources=sources,
        disease=disease,
        runner=run_collection_graph,
        save_markdown=save_markdown,
        no_ui=no_ui,
    )


async def resume_query(
    run_id: str,
    output: str = "table",
    save: str | None = None,
    no_ui: bool = False,
) -> None:
    snapshot = await get_collection_state(run_id)
    state_values = snapshot.values
    request = state_values.get("query")
    if request is None:
        raise ValueError(f"No stored query found for run `{run_id}`.")
    if isinstance(request, dict):
        request = CollectorRequest.model_validate(request)
    await _execute_query(
        request=request,
        output=output,
        save=save,
        gene=request.gene_symbol,
        sources=request.sources,
        disease=request.disease_id,
        runner=resume_collection_graph,
        save_markdown=False,
        no_ui=no_ui,
    )


def submit_review(
    run_id: str,
    decision: str,
    reviewer_id: str,
    reason: str,
) -> None:
    parsed = ReviewDecisionStatus(decision.strip().lower())
    payload = ReviewDecisionInput(
        run_id=run_id,
        decision=parsed,
        reviewer_id=reviewer_id,
        reason=reason,
    )
    response = apply_review_decision(payload)
    print(json.dumps(response.model_dump(mode="json"), indent=2))


async def _execute_query(
    *,
    request: CollectorRequest,
    output: str,
    save: str | None,
    gene: str,
    sources: list[SourceName],
    disease: str | None,
    runner,
    save_markdown: bool,
    no_ui: bool,
) -> None:
    if no_ui or output == "minimal":
        os.environ["A4T_NO_UI"] = "1"
    display = AgentDisplay(gene, disease or "n/a", request.per_source_top_k, request.run_id)
    if output == "minimal":
        display._suppress_logs = True
    if output != "minimal" and not no_ui:
        display.start()
    display.set_stage("planning", "running", "Analyzing gene and selecting sources")
    display.log("Initializing pipeline...", "info")

    def on_progress(event_type: str, payload: dict[str, Any]):
        if event_type == "stage_start":
            stage = payload.get("stage", "")
            phase = _phase_for_stage(stage)
            if phase:
                display.set_stage(phase, "running", STAGE_DESCRIPTIONS.get(phase, ""))
            display.log(f"Stage start: {_display_stage_name(stage)}", "transition")
            return

        if event_type == "stage_end":
            stage = payload.get("stage", "")
            phase = _phase_for_stage(stage)
            update = payload.get("update", {}) if isinstance(payload, dict) else {}
            detail = _stage_detail(stage, update)
            if phase:
                state = "complete" if PHASE_LAST_STAGE.get(phase) == stage else "running"
                display.set_stage(phase, state, detail or STAGE_DESCRIPTIONS.get(phase, ""))
            display.log(f"Stage complete: {_display_stage_name(stage)}", "success")
            return

        if event_type == "edge":
            display.log(
                f"{_display_stage_name(payload.get('from_stage', ''))} -> {_display_stage_name(payload.get('to_stage', ''))}",
                "transition",
            )
            return

        if event_type == "source_start":
            source = SOURCE_MAP.get(payload.get("source", ""))
            if source:
                display.set_source(source, "running")
                display.log(f"Connecting to {source} MCP...", "action")
            return

        if event_type == "source_end":
            source = SOURCE_MAP.get(payload.get("source", ""))
            status = payload.get("status", "")
            error = payload.get("error") or payload.get("error_message")
            if source:
                if status == "success" and not error:
                    display.set_source(source, "complete", _source_result_line(payload))
                    display.log(f"{source} complete", "success")
                else:
                    display.set_source(source, "failed", "FAILED")
                    display.log(f"{source} failed: {error or status}", "error")
            return

        if event_type == "agent_decision":
            display.log(f"{payload.get('agent_name', 'agent')} -> {payload.get('action', '')}", "action")
            return

        if event_type == "agent_report":
            display.log(f"{payload.get('agent_name', 'agent')} report", "info")
            return

        if event_type == "stage_error":
            stage = payload.get("stage", "")
            phase = _phase_for_stage(stage)
            if phase:
                display.set_stage(phase, "failed", payload.get("error", ""))
            display.log(f"Stage error: {_display_stage_name(stage)}", "error")
            return

        if event_type == "workflow_paused":
            display.log("Workflow paused - awaiting review decision", "warning")

    t0 = time.perf_counter()
    try:
        result = await runner(request, progress_cb=on_progress)
    except CollectionPaused as exc:
        display.log(f"Run paused: {exc.run_id}", "warning")
        display.stop()
        raise
    except Exception as exc:  # noqa: BLE001
        stage = getattr(exc, "__drugagent_stage__", "")
        phase = _phase_for_stage(stage)
        if phase:
            display.set_stage(phase, "failed", str(exc))
        display.log(str(exc), "error")
        display.stop()
        _print_failure(stage=phase, error=str(exc))
        raise

    elapsed = time.perf_counter() - t0
    result_dict = result.model_dump(mode="json")

    if save:
        os.makedirs(os.path.dirname(save) if os.path.dirname(save) else ".", exist_ok=True)
        with open(save, "w") as f:
            json.dump(result_dict, f, indent=2)
        display.log(f"Saved JSON to {save}", "success")

    auto_enabled = os.getenv("A4T_AUTO_SAVE_RESULTS", "0").strip().lower() in {"1", "true", "yes"}
    if (save_markdown or auto_enabled) and result.llm_summary and result.llm_summary.markdown_report:
        md_dir = "results"
        os.makedirs(md_dir, exist_ok=True)
        md_path = os.path.join(md_dir, f"{gene.upper()}_summary.md")
        with open(md_path, "w", encoding="utf-8") as f:
            f.write(result.llm_summary.markdown_report)
        display.log(f"Saved markdown to {md_path}", "success")

    layout = artifact_layout(result.run_id)
    dashboard_path = layout.get("evidence_dashboard")
    display.artifact_path = dashboard_path or "n/a"

    if result.scored_target:
        display.show_final_score(result.scored_target.model_dump(mode="json"))
    else:
        display.log("No scored_target produced.", "warning")

    display.stop()

    if output == "json":
        print(json.dumps(result_dict, indent=2))
    if output == "minimal":
        print(f"Completed in {elapsed:.2f}s")


def _print_failure(stage: str | None, error: str) -> None:
    stage_label = stage or "unknown"
    panel = Panel(
        Text(f"Pipeline failed at {stage_label}: {error}", style="bold red"),
        border_style="red",
    )
    Console().print(panel)
