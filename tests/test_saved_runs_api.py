import os
import uuid

import pytest
from fastapi.testclient import TestClient
from dotenv import load_dotenv

from ui_api.app import app
from ui_api.db import init_db
from ui_api.saved_runs import upsert_saved_run_from_snapshot


def test_saved_runs_crud():
    load_dotenv()
    if not os.getenv("DATABASE_URL"):
        pytest.skip("DATABASE_URL not set")
    assert init_db() is True
    client = TestClient(app)

    run_id = f"test-run-{uuid.uuid4().hex[:12]}"
    payload = {
        "run_id": run_id,
        "title": "Test Run",
        "gene_symbol": "TP53",
        "disease_id": "DLBCL",
        "objective": "Test objective",
        "summary_markdown": "Summary",
        "scored_target": {"target_score": 0.5, "evidence_confidence": 0.4, "source_scores": {}, "weights_used": {}},
        "final_dossier": None,
        "evidence_graph": {"nodes": [], "edges": []},
    }

    saved_id = upsert_saved_run_from_snapshot(payload)

    res = client.get("/api/saved-runs")
    assert res.status_code == 200
    data = res.json()
    assert any(item["id"] == saved_id for item in data.get("saved_runs", []))

    res = client.get(f"/api/saved-runs/{saved_id}")
    assert res.status_code == 200
    item = res.json()
    assert item["run_id"] == run_id

    res = client.patch(f"/api/saved-runs/{saved_id}", json={"title": "Renamed"})
    assert res.status_code == 200
    assert res.json()["title"] == "Renamed"

    res = client.delete(f"/api/saved-runs/{saved_id}")
    assert res.status_code == 200

    res = client.get(f"/api/saved-runs/{saved_id}")
    assert res.status_code == 404
