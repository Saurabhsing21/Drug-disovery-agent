from __future__ import annotations

from agents.evidence_id import compute_evidence_id
from agents.schema import EvidenceRecord, Provenance, SourceName
from agents.summary_validation import validate_summary_markdown


def _item() -> EvidenceRecord:
    source = SourceName.OPENTARGETS
    target_id = "ENSG00000146648"
    disease_id = "EFO_0000311"
    evidence_type = "disease_association"
    support = {}
    evidence_id = compute_evidence_id(
        source=source.value,
        target_id=target_id,
        disease_id=disease_id,
        evidence_type=evidence_type,
        raw_value=0.9,
        support=support,
    )
    return EvidenceRecord(
        evidence_id=evidence_id,
        source=source,
        target_id=target_id,
        target_symbol="EGFR",
        disease_id=disease_id,
        evidence_type=evidence_type,
        normalized_score=0.9,
        confidence=0.8,
        summary="Strong disease association",
        provenance=Provenance(provider="Open Targets", endpoint="/graphql", query={"gene_symbol": "EGFR"}),
        support=support,
    )


def test_summary_validation_accepts_grounded_summary() -> None:
    item = _item()
    ref = item.evidence_id
    markdown = "\n".join(
        [
            "## 1. Executive Summary",
            "This is the executive summary paragraph with sufficient detail.",
            "## 2. Target Biology & Mechanism of Action",
            "EGFR is a receptor tyrosine kinase involved in cancer cell proliferation.",
            "## 3. Genetic Dependency & Functional Evidence",
            "CRISPR screens show moderate dependency in EGFR-amplified cell lines.",
            "## 4. Disease Associations & Clinical Relevance",
            "EGFR is associated with multiple cancer types including NSCLC.",
            "## 5. Druggability & Therapeutic Tractability",
            "EGFR is a well-established drug target with approved kinase inhibitors.",
            "## 6. Cross-Source Evidence Synthesis",
            "Evidence from Open Targets and literature are consistent.",
            "## 7. Conflict Analysis & Evidence Gaps",
            "No conflicts detected. Literature coverage is limited.",
            "## 8. Grounded Evidence Citations",
            f"- [{ref}] {item.summary} (confidence=0.8, score=0.9)",
            "## 9. Conclusions & Recommended Next Steps",
            "Recommend expanding to additional disease contexts.",
        ]
    )

    valid, reason = validate_summary_markdown(markdown, [item])
    assert valid is True
    assert reason is None


def test_summary_validation_rejects_unsupported_claims() -> None:
    item = _item()
    markdown = "\n".join(
        [
            "## 1. Executive Summary",
            "This is the executive summary.",
            "## 2. Target Biology & Mechanism of Action",
            "I think EGFR is definitely the best target.",
            "## 3. Genetic Dependency & Functional Evidence",
            "Some dependency data.",
            "## 4. Disease Associations & Clinical Relevance",
            "Disease info.",
            "## 8. Grounded Evidence Citations",
            "- [phantom:BAD:ref] unsupported claim",
            "## 9. Conclusions & Recommended Next Steps",
            "Further work needed.",
        ]
    )

    valid, reason = validate_summary_markdown(markdown, [item])
    assert valid is False
    assert reason is not None


def test_summary_validation_accepts_compiler_report_with_human_readable_traceability() -> None:
    item = _item()
    markdown = "\n".join(
        [
            "# THERAPEUTIC TARGET EVIDENCE SUMMARY REPORT",
            "",
            "## 1. Executive Summary",
            "EGFR is strongly linked to NSCLC (Source: Open Targets; trace: non-small cell lung carcinoma association, Appendix A4).",
            "",
            "## 2. Target Annotation — PHAROS",
            "EGFR is clinically tractable (Source: PHAROS; trace: target annotation summary, Appendix A2).",
            "",
            "## 3. Genetic Dependency — DepMap",
            "### Global Dependency Analysis",
            "Dependency is context-specific (Source: DepMap; trace: global dependency metrics, Appendix A3.1).",
            "",
            "### Top Dependent Cell Lines",
            "Representative cell-line rows are summarized below.",
            "",
            "## 4. Disease Associations — Open Targets",
            "Disease associations are consistent with oncology relevance (Source: Open Targets; trace: non-small cell lung carcinoma association, Appendix A4).",
            "",
            "## 5. Literature",
            "A lead paper is highlighted here (Source: Literature; trace: PMID 12345, Appendix A5).",
            "",
            "## 6. Integrated Interpretation",
            "Cross-source evidence is aligned (Source: Open Targets; trace: non-small cell lung carcinoma association, Appendix A4).",
            "",
            "### Evidence Contribution (Interpretation)",
            "DepMap contributes functional evidence (Source: DepMap; trace: global dependency metrics, Appendix A3.1).",
            "",
            "## 7. Evidence Strength Assessment",
            "The evidence is multi-source and bounded by model limitations (Source: Open Targets; trace: non-small cell lung carcinoma association, Appendix A4).",
            "",
            "## 8. Overall Assessment",
            "The report remains indication-aware (Source: Open Targets; trace: non-small cell lung carcinoma association, Appendix A4).",
            "",
            "## 9. Final Conclusion",
            "EGFR remains a tractable oncology target (Source: PHAROS; trace: target annotation summary, Appendix A2).",
            "",
            "---",
            "",
            "# Appendix A — Raw Evidence Tables",
            "",
            "## A4. Disease Associations (Open Targets)",
            f"| # | evidence_id | source | disease_name | disease_id | score | evidence_count | confidence | normalized_score | summary |",
            "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |",
            f"| 1 | {item.evidence_id} | opentargets | non-small cell lung carcinoma | EFO_0000311 | 0.9 | 10 | 0.8 | 0.9 | Strong disease association |",
        ]
    )

    valid, reason = validate_summary_markdown(markdown, [item])
    assert valid is True
    assert reason is None
