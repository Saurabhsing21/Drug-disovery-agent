from __future__ import annotations

import pytest
from fastapi.testclient import TestClient


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


def test_evidence_dashboard_missing_returns_404(monkeypatch: pytest.MonkeyPatch, tmp_path) -> None:
    tmp_artifacts = _make_artifact_root(tmp_path)
    monkeypatch.setenv("A4T_ARTIFACT_DIR", str(tmp_artifacts))

    from ui_api.app import app  # import after env set

    client = TestClient(app)
    resp = client.get("/api/runs/run-missing/evidence-dashboard")
    assert resp.status_code == 404


def test_evidence_dashboard_serves_html(monkeypatch: pytest.MonkeyPatch, tmp_path) -> None:
    tmp_artifacts = _make_artifact_root(tmp_path)
    monkeypatch.setenv("A4T_ARTIFACT_DIR", str(tmp_artifacts))
    run_id = "run-has-dashboard"

    dashboard_path = tmp_artifacts / "evidence_dashboards" / f"{run_id}.evidence_dashboard.html"
    dashboard_path.write_text("<!doctype html><html><body>hello</body></html>", encoding="utf-8")

    from ui_api.app import app  # import after env set

    client = TestClient(app)
    resp = client.get(f"/api/runs/{run_id}/evidence-dashboard")
    assert resp.status_code == 200
    assert "text/html" in (resp.headers.get("content-type") or "")
    assert "hello" in resp.text

