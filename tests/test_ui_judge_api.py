from __future__ import annotations

from fastapi.testclient import TestClient
import pytest

from agents.run_state_store import RunStateStore
from agents.schema import CollectorRequest, EvidenceRecord, Provenance, ReportJudgeScore, SourceName


def _make_artifact_root(tmp_path):
    tmp_artifacts = tmp_path / "artifacts"
    tmp_artifacts.mkdir()
    for d in [
        "dossiers",
        "graphs",
        "plans",
        "evidence_dashboards",
        "metrics",
        "health_reports",
        "review_audit",
        "review_decisions",
        "episodic_memory",
        "procedural_memory",
        "working_memory",
    ]:
        (tmp_artifacts / d).mkdir(exist_ok=True)
    return tmp_artifacts


def _seed_run_state(run_id: str) -> None:
    req = CollectorRequest(gene_symbol="EGFR", disease_id="EFO_0000311", run_id=run_id)
    item = EvidenceRecord(
        evidence_id="opentargets:ENSG:test:disease_association:abc123",
        source=SourceName.OPENTARGETS,
        target_id="ENSG00000146648",
        target_symbol="EGFR",
        disease_id="EFO_0000311",
        evidence_type="disease_association",
        normalized_score=0.9,
        confidence=0.9,
        summary="Strong disease association",
        support={"disease_name": "non-small cell lung carcinoma"},
        provenance=Provenance(provider="Open Targets", endpoint="/graphql", query={"gene_symbol": "EGFR"}),
    )
    RunStateStore.write_latest(
        run_id,
        stage="generate_explanation",
        state={
            "query": req.model_dump(mode="json"),
            "explanation": "## 1. Executive Summary\nEGFR evidence summary.",
            "normalized_items": [item.model_dump(mode="json")],
        },
        next_stages=(),
        status="completed",
    )


def test_manual_judge_endpoint_updates_state(monkeypatch: pytest.MonkeyPatch, tmp_path) -> None:
    tmp_artifacts = _make_artifact_root(tmp_path)
    monkeypatch.setenv("A4T_ARTIFACT_DIR", str(tmp_artifacts))
    run_id = "run-judge-success"
    _seed_run_state(run_id)

    async def _fake_decide(self, *, request, markdown_report, items):  # noqa: ANN001
        return ReportJudgeScore(
            overall_score=92,
            faithfulness_score=9,
            formatting_score=9,
            passed=True,
            feedback=["Looks good."],
            model_used="gpt-5",
        )

    monkeypatch.setattr("agents.report_judge_agent.ReportJudgeAgent.decide", _fake_decide)

    from ui_api.app import app  # import after env set

    client = TestClient(app)
    resp = client.post(f"/api/runs/{run_id}/judge", json={})
    assert resp.status_code == 200
    body = resp.json()
    assert body["overall_score"] == 92
    assert body["passed"] is True

    persisted = RunStateStore.load_latest(run_id)
    assert persisted is not None
    assert isinstance(persisted.values.get("judge_score"), dict)
    assert persisted.values["judge_score"]["overall_score"] == 92


def test_manual_judge_endpoint_missing_report_or_evidence_returns_409(monkeypatch: pytest.MonkeyPatch, tmp_path) -> None:
    tmp_artifacts = _make_artifact_root(tmp_path)
    monkeypatch.setenv("A4T_ARTIFACT_DIR", str(tmp_artifacts))
    run_id = "run-judge-missing-payload"
    req = CollectorRequest(gene_symbol="EGFR", disease_id="EFO_0000311", run_id=run_id)
    RunStateStore.write_latest(
        run_id,
        stage="plan_collection",
        state={"query": req.model_dump(mode="json")},
        next_stages=(),
        status="running",
    )

    from ui_api.app import app  # import after env set

    client = TestClient(app)
    resp = client.post(f"/api/runs/{run_id}/judge", json={})
    assert resp.status_code == 409


def test_manual_judge_endpoint_returns_structured_error_on_failure(monkeypatch: pytest.MonkeyPatch, tmp_path) -> None:
    tmp_artifacts = _make_artifact_root(tmp_path)
    monkeypatch.setenv("A4T_ARTIFACT_DIR", str(tmp_artifacts))
    run_id = "run-judge-error"
    _seed_run_state(run_id)

    async def _fake_decide(self, *, request, markdown_report, items):  # noqa: ANN001
        raise RuntimeError("simulated judge failure")

    monkeypatch.setattr("agents.report_judge_agent.ReportJudgeAgent.decide", _fake_decide)

    from ui_api.app import app  # import after env set

    client = TestClient(app)
    resp = client.post(f"/api/runs/{run_id}/judge", json={})
    assert resp.status_code == 200
    body = resp.json()
    assert body["passed"] is False
    assert body["overall_score"] == 0
    assert any("simulated judge failure" in f for f in body.get("feedback", []))
