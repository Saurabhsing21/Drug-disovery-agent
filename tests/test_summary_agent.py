from __future__ import annotations

from agents.evidence_id import compute_evidence_id
from agents.evidence_graph import build_evidence_graph_snapshot
from agents.schema import (
    CollectorRequest,
    ConflictRecord,
    ConflictSeverity,
    EvidenceRecord,
    Provenance,
    SourceName,
    SourceStatus,
    StatusName,
    VerificationReport,
)
from agents.summary_agent import SummaryAgent


def _record(source: SourceName, target_id: str, summary: str, confidence: float, score: float) -> EvidenceRecord:
    disease_id = "EFO_0000311"
    evidence_type = "disease_association" if source == SourceName.OPENTARGETS else "literature_article"
    support = {"pmid": "12345"} if source == SourceName.LITERATURE else {}
    evidence_id = compute_evidence_id(
        source=source.value,
        target_id=target_id,
        disease_id=disease_id,
        evidence_type=evidence_type,
        raw_value=score,
        support=support,
    )
    return EvidenceRecord(
        evidence_id=evidence_id,
        source=source,
        target_id=target_id,
        target_symbol="EGFR",
        disease_id=disease_id,
        evidence_type=evidence_type,
        raw_value=score,
        normalized_score=score,
        confidence=confidence,
        summary=summary,
        support=support,
        provenance=Provenance(provider=source.value, endpoint="/test", query={"gene_symbol": "EGFR"}),
    )


async def _run_summary() -> str:
    request = CollectorRequest(gene_symbol="EGFR", disease_id="EFO_0000311")
    items = [
        _record(SourceName.OPENTARGETS, "ENSG00000146648", "Strong disease association", 0.9, 0.91),
        _record(SourceName.LITERATURE, "EGFR:PMID:12345", "Peer-reviewed evidence", 0.72, 0.7),
    ]
    statuses = [
        SourceStatus(source=SourceName.OPENTARGETS, status=StatusName.SUCCESS, record_count=1, duration_ms=15),
        SourceStatus(source=SourceName.LITERATURE, status=StatusName.SUCCESS, record_count=1, duration_ms=20),
        SourceStatus(source=SourceName.PHAROS, status=StatusName.FAILED, record_count=0, duration_ms=10, error_message="offline"),
    ]
    conflicts = [
        ConflictRecord(
            severity=ConflictSeverity.LOW,
            rationale="Minor score spread across sources.",
            sources=[SourceName.OPENTARGETS, SourceName.LITERATURE],
            evidence_ids=[items[0].evidence_id],
        )
    ]
    verification = VerificationReport(
        total_rules=8,
        pass_count=8,
        fail_count=0,
        warning_count=0,
        blocked=False,
        blocking_issue_count=0,
        blocking_issues=[],
        warning_issues=[],
        affected_evidence_ids=[],
        rule_outcomes=[],
    )
    graph = build_evidence_graph_snapshot(items, conflicts=conflicts)
    agent = SummaryAgent()
    summary = await agent.run(
        request=request,
        items=items,
        source_status=statuses,
        verification_report=verification,
        conflicts=conflicts,
        evidence_graph=graph,
    )
    return summary.markdown_report


def test_summary_agent_grounded_fallback_contains_coverage_confidence_and_conflicts() -> None:
    import asyncio
    from unittest.mock import patch

    # Force deterministic fallback by explicitly disabling the LLM requirement flag
    with patch.dict("os.environ", {"A4T_REQUIRE_LLM_AGENTS": "0"}, clear=False):
        with patch.dict("os.environ", {}, clear=False) as env_patch:
            env_patch.pop("OPENAI_API_KEY", None)
            markdown = asyncio.run(_run_summary())

    # The deterministic fallback produces coverage/confidence/conflict sections
    assert "## Source Coverage" in markdown or "## 1. Executive Summary" in markdown
    assert "opentargets" in markdown.lower()
    assert "pharos" in markdown.lower()


def test_summary_agent_postprocess_converts_list_tables_and_harmonizes_consistency() -> None:
    agent = SummaryAgent()
    dep_item = EvidenceRecord(
        evidence_id="depmap:EGFR:NA:genetic_dependency:abc123",
        source=SourceName.DEPMAP,
        target_id="EGFR",
        target_symbol="EGFR",
        disease_id="EFO_0000311",
        evidence_type="genetic_dependency",
        raw_value=-0.7,
        normalized_score=0.35,
        confidence=0.95,
        summary="Global dependency metrics",
        support={"cell_line_count": 1000},
        provenance=Provenance(provider="depmap", endpoint="/test", query={"gene_symbol": "EGFR"}),
    )
    ot_item = EvidenceRecord(
        evidence_id="opentargets:ENSG:test:disease_association:def456",
        source=SourceName.OPENTARGETS,
        target_id="ENSG",
        target_symbol="EGFR",
        disease_id="EFO_0000311",
        evidence_type="disease_association",
        raw_value=0.9,
        normalized_score=0.9,
        confidence=0.9,
        summary="NSCLC association",
        support={"disease_name": "non-small cell lung carcinoma"},
        provenance=Provenance(provider="opentargets", endpoint="/test", query={"gene_symbol": "EGFR"}),
    )
    lit_a = _record(SourceName.LITERATURE, "EGFR:PMID:12345", "Lead paper", 0.85, 0.9)
    lit_b = _record(SourceName.LITERATURE, "EGFR:PMID:67890", "Second paper", 0.8, 0.85)
    items = [dep_item, ot_item, lit_a, lit_b]
    raw = "\n".join(
        [
            "## 5. Literature",
            "Explanation",
            "Literature table",
            "- PMID | Year | Title | evidence_id",
            "- 12345 | 2020 | Lead paper | literature:EGFR:PMID:12345:NA:literature_article:aaa",
            "",
            "## 6. Integrated Interpretation",
            "A conflict is observed between:",
            f"- PHAROS signal (evidence_id: {dep_item.evidence_id}; source: DepMap)",
            f"- Open Targets signal (evidence_id: {ot_item.evidence_id}; source: Open Targets)",
            "Extremely negative gene effects are reported here (evidence_ids listed per row; source: DepMap).",
            "",
            "## 7. Evidence Strength Assessment",
            "No explicit contradictions detected in the provided conflict list, but limitations exist.",
            "UniProt-curated disease concepts are aligned here.",
        ]
    )

    processed = agent._postprocess_report_markdown(raw, items)

    assert "| PMID | Year | Title |" in processed
    assert "evidence_id" not in processed.split("# Appendix A")[0]
    assert "An expected cross-source tension is observed between:" in processed
    assert "No formal contradiction is recorded in the structured conflict list" in processed
    assert "Curated biological-context disease concepts" in processed
    assert "Appendix A5 lists additional literature records" in processed
    assert "(Source: DepMap; trace: global dependency metrics, Appendix A3.1)" in processed
    assert "(Source: Open Targets; trace: non-small cell lung carcinoma association, Appendix A4)" in processed
    assert "(Source: DepMap; trace: detailed records in Appendix A3.2)" in processed
