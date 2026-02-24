from __future__ import annotations

import json
import os
from typing import Any, Iterable

from langchain_openai import ChatOpenAI
from pydantic import ValidationError

from .schema import (
    CollectorRequest,
    EvidenceRecord,
    LLMSummary,
    RobustnessSummary,
    SourceStatus,
    SourceSummary,
    StatusName,
)
from . import prompts


class SummaryAgent:
    """Generate a structured evidence summary using OpenAI, with deterministic fallback."""

    def __init__(self, model: str | None = None, temperature: float = 0.7):
        self.model = model or os.getenv("A4T_SUMMARY_MODEL", "gpt-5")
        self.temperature = temperature

    @staticmethod
    def _enum_value(value: object) -> str:
        return value.value if hasattr(value, "value") else str(value)

    def _build_payload(
        self,
        request: CollectorRequest,
        items: list[EvidenceRecord],
        source_status: list[SourceStatus],
        raw_source_payloads: list[dict[str, Any]] | None = None,
    ) -> dict:
        """Construct the LLM payload, prioritizing raw MCP results for deep reasoning."""
        
        # Source health is always useful for context
        health = [
            {
                "name": self._enum_value(s.source),
                "status": self._enum_value(s.status),
                "count": s.record_count,
                "error": s.error_message
            }
            for s in source_status
        ]

        if raw_source_payloads:
            # Reconstruct a cleaner raw view for the LLM
            mcp_data = {}
            for payload in raw_source_payloads:
                source_name = payload.get("source", "unknown")
                mcp_data[source_name] = {
                    "items": payload.get("items", []),
                    "errors": payload.get("errors", [])
                }
            
            return {
                "target": request.gene_symbol,
                "disease_context": request.disease_id,
                "source_health": health,
                "raw_mcp_results": mcp_data,
            }

        # Fallback for structured items (though we are moving away from this)
        compact_items = []
        for item in sorted(items, key=lambda x: x.confidence, reverse=True)[:30]:
            entry = {
                "source": self._enum_value(item.source),
                "type": item.evidence_type,
                "summary": item.summary,
                "confidence": item.confidence,
                "metadata": item.support
            }
            compact_items.append(entry)

        return {
            "target": request.gene_symbol,
            "disease_context": request.disease_id,
            "source_health": health,
            "evidence_pool": compact_items,
        }

    def _build_robustness(
        self,
        source_status: list[SourceStatus],
        item_count: int = 0,
    ) -> RobustnessSummary:
        requested_source_count = len(source_status)
        successful_source_count = 0
        failed_or_skipped_sources: list[str] = []
        source_record_depth: dict[str, int] = {}

        # Sources that naturally only produce 1 consolidated record
        SHALLOW_SOURCES = {"depmap", "literature", "pharos"}

        for s in source_status:
            status_name = self._enum_value(s.status)
            source_name = self._enum_value(s.source)
            source_record_depth[source_name] = int(s.record_count)
            if status_name == StatusName.SUCCESS.value:
                successful_source_count += 1
            elif status_name in {StatusName.FAILED.value, StatusName.SKIPPED.value, StatusName.PARTIAL.value}:
                failed_or_skipped_sources.append(source_name)

        used_evidence_count = item_count
        
        # Sane depth check: Successful sources must have >= 2 records UNLESS they are shallow sources
        def _check_depth(s):
            name = self._enum_value(s.source)
            depth = source_record_depth.get(name, 0)
            required = 1 if name in SHALLOW_SOURCES else 2
            ok = depth >= required
            return ok

        sufficient_depth = all(
            _check_depth(s)
            for s in source_status
            if self._enum_value(s.status) == StatusName.SUCCESS.value
        )
        
        minimum_coverage_met = successful_source_count >= 3 and used_evidence_count >= 4 and sufficient_depth

        verdict = (
            "sufficient_multi_source_evidence"
            if minimum_coverage_met
            else "insufficient_evidence_for_strong_claim"
        )

        return RobustnessSummary(
            requested_source_count=requested_source_count,
            successful_source_count=successful_source_count,
            used_evidence_count=used_evidence_count,
            source_record_depth=source_record_depth,
            minimum_coverage_met=minimum_coverage_met,
            failed_or_skipped_sources=failed_or_skipped_sources,
            verdict=verdict,
        )

    def _build_markdown_report(
        self,
        request: CollectorRequest,
        robustness: RobustnessSummary,
        findings: list[str],
        source_summaries: list[SourceSummary],
        evidence_snapshot: list[str],
        next_actions: list[str],
    ) -> str:
        success = robustness.successful_source_count
        total = robustness.requested_source_count

        lines = [
            f"# Target Evidence Summary: {request.gene_symbol}",
            "",
            "## Executive",
            (
                f"Evaluation completed across **{success}/{total}** sources. "
                "Aggregate scoring is disabled in raw MCP mode."
            ),
            (
                "Robustness verdict: "
                f"**{robustness.verdict}** "
                f"(coverage_met={robustness.minimum_coverage_met})."
            ),
            "",
            "## Key Findings",
        ]
        for finding in findings:
            lines.append(f"- {finding}")

        lines.extend(["", "## Source Breakdown"])
        for source_summary in source_summaries:
            lines.append(
                f"- **{self._enum_value(source_summary.source)}** "
                f"({self._enum_value(source_summary.status)}, records={source_summary.record_count}): "
                f"{source_summary.key_point}"
            )
            for point in source_summary.evidence_points:
                lines.append(f"  - {point}")
            for limitation in source_summary.limitations:
                lines.append(f"  - Limitation: {limitation}")

        lines.extend(["", "## Evidence Snapshot"])
        for row in evidence_snapshot:
            lines.append(f"- {row}")

        lines.extend(["", "## Next Actions"])
        for action in next_actions:
            lines.append(f"- {action}")

        return "\n".join(lines)

    def _deterministic_fallback(
        self,
        request: CollectorRequest,
        items: list[EvidenceRecord],
        source_status: list[SourceStatus],
        raw_source_payloads: list[dict[str, Any]] | None = None,
    ) -> LLMSummary:
        findings = [
            f"Evaluated {len(source_status)} sources.",
            f"Evidence records available: {len(items)}.",
        ]

        gaps = []
        evidence_snapshot: list[str] = []
        source_summaries: list[SourceSummary] = []
        
        # Snapshot logic: use raw payloads if available, else items
        if raw_source_payloads:
            for payload in raw_source_payloads:
                source = str(payload.get("source", "unknown"))
                for item in (payload.get("items") or [])[:3]:
                    evidence_snapshot.append(
                        f"{source}: {item.get('evidence_type', 'unknown')}, "
                        f"summary={item.get('summary', 'n/a')}"
                    )
        elif items:
            for item in sorted(items, key=lambda x: x.confidence, reverse=True)[:8]:
                snapshot = (
                    f"{self._enum_value(item.source)}: {item.evidence_type}, "
                    f"conf={item.confidence:.3f}"
                )
                evidence_snapshot.append(snapshot)

        for s in source_status:
            msg = s.error_message or "No additional note."
            source_name = self._enum_value(s.source)
            status_name = self._enum_value(s.status)
            source_summaries.append(
                SourceSummary(
                    source=s.source,
                    status=s.status,
                    record_count=s.record_count,
                    key_point=msg if len(msg) < 180 else msg[:177] + "...",
                    evidence_points=[
                        f"Status={status_name}, records={s.record_count}, duration_ms={s.duration_ms}."
                    ],
                    limitations=[msg] if status_name in {StatusName.FAILED.value, StatusName.SKIPPED.value, StatusName.PARTIAL.value} else [],
                )
            )
            if status_name in {StatusName.FAILED.value, StatusName.SKIPPED.value, StatusName.PARTIAL.value}:
                gaps.append(f"{source_name}: {msg}")

        if not gaps:
            gaps.append("No major source execution gaps were detected.")

        next_actions = [
            "Review raw MCP results for deep biological insights.",
            "Re-run skipped/failed sources to increase evidence coverage.",
        ]
        robustness = self._build_robustness(source_status, item_count=len(items))

        markdown_report = self._build_markdown_report(
            request=request,
            robustness=robustness,
            findings=findings,
            source_summaries=source_summaries,
            evidence_snapshot=evidence_snapshot,
            next_actions=next_actions,
        )

        return LLMSummary(
            executive_summary=(
                f"For target {request.gene_symbol}, the summary is based on raw MCP evidence payloads. "
                "Normalization was bypassed to provide original source context."
            ),
            markdown_report=markdown_report,
            detailed_analysis=(
                f"The run evaluated {len(source_status)} sources. "
                "Structured scoring was not applied; please see the detailed evidence snapshot below."
            ),
            key_findings=findings,
            source_summaries=source_summaries,
            evidence_gaps=gaps,
            next_actions=next_actions,
            evidence_snapshot=evidence_snapshot,
            robustness=robustness,
            model_used=None,
            generation_mode="deterministic_fallback",
        )

    async def run(
        self,
        request: CollectorRequest,
        items: Iterable[EvidenceRecord],
        source_status: Iterable[SourceStatus],
        raw_source_payloads: list[dict[str, Any]] | None = None,
    ) -> LLMSummary:
        item_list = list(items)
        status_list = list(source_status)

        if not os.getenv("OPENAI_API_KEY"):
            return self._deterministic_fallback(
                request,
                item_list,
                status_list,
                raw_source_payloads=raw_source_payloads,
            )

        payload = self._build_payload(
            request,
            item_list,
            status_list,
            raw_source_payloads=raw_source_payloads,
        )

        try:
            llm = ChatOpenAI(model=self.model, temperature=self.temperature)
            response = await llm.ainvoke([
                ("system", prompts.get_system_prompt()),
                ("user", prompts.get_user_prompt(
                    gene_symbol=payload.get("target", "N/A"),
                    disease_context=payload.get("disease_context", "an undefined indication") or "an undefined indication",
                    payload_json=json.dumps(payload, indent=1)
                )),
            ])
            
            raw_text = str(response.content)
            
            # Manually construct the summary object from raw text
            summary = LLMSummary(
                markdown_report=raw_text,
                generation_mode="llm_raw_text"
            )
            
            summary.robustness = self._build_robustness(status_list, item_count=len(item_list))
            summary.model_used = self.model
            return summary
        except Exception:
            return self._deterministic_fallback(
                request,
                item_list,
                status_list,
                raw_source_payloads=raw_source_payloads,
            )

    def _system_prompt(self) -> str:
        return prompts.get_system_prompt()

    def _user_prompt(self, payload: dict) -> str:
        return prompts.get_user_prompt(
            gene_symbol=payload.get("target", "N/A"),
            disease_context=payload.get("disease_context", "an undefined indication") or "an undefined indication",
            payload_json=json.dumps(payload, indent=1)
        )
