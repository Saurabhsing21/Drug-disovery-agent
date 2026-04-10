import uuid
from datetime import datetime
from dotenv import load_dotenv
load_dotenv()

from ui_api.db import get_session_factory, init_db
from ui_api.db_models import SavedRun

def insert_test_data():
    init_db()
    Session = get_session_factory()
    if not Session:
        print("Database not configured.")
        return

    session = Session()

    kras_markdown = ""
    try:
        with open("reports/KRAS_summary.md", "r") as f:
            kras_markdown = f.read()
    except FileNotFoundError:
        kras_markdown = "No report content."

    egfr_markdown = kras_markdown.replace("KRAS", "EGFR").replace("ACH-000222", "ACH-EGFR123").replace("0.690", "0.850").replace("target_score", "some_score")

    # Clear old data for these specific ones to prevent unique constraint issues if run multiple times
    session.query(SavedRun).filter(SavedRun.run_id.in_(["test-kras-123", "test-egfr-123"])).delete(synchronize_session=False)

    kras_run = SavedRun(
        run_id="test-kras-123",
        title="Research: KRAS",
        gene_symbol="KRAS",
        disease_id=None,
        objective="Therapeutic target assessment for KRAS",
        summary_markdown=kras_markdown,
        scored_target={
            "target_score": 0.690,
            "evidence_confidence": 0.750,
            "conflict_flag": False,
            "missing_sources": ["pharos"],
            "source_scores": {"depmap": 0.98, "opentargets": 0.849, "literature": 0.94},
            "weights_used": {"depmap": 0.4, "opentargets": 0.3, "literature": 0.3},
            "source_confidences": {"depmap": 0.95, "opentargets": 0.89, "literature": 0.85}
        },
        evidence_graph={"nodes": [1,2,3], "edges": [1,2]},
        created_at=datetime.utcnow()
    )

    egfr_run = SavedRun(
        run_id="test-egfr-123",
        title="Research: EGFR",
        gene_symbol="EGFR",
        disease_id="Lung Adenocarcinoma",
        objective="Therapeutic target assessment for EGFR / Lung Adenocarcinoma",
        summary_markdown=egfr_markdown,
        scored_target={
            "target_score": 0.850,
            "evidence_confidence": 0.900,
            "conflict_flag": True,
            "missing_sources": [],
            "source_scores": {"pharos": 0.70, "depmap": 0.80, "opentargets": 0.90, "literature": 0.95},
            "weights_used": {"pharos": 0.2, "depmap": 0.3, "opentargets": 0.25, "literature": 0.25},
            "source_confidences": {"pharos": 0.80, "depmap": 0.85, "opentargets": 0.92, "literature": 0.95}
        },
        evidence_graph={"nodes": [1,2,3,4,5], "edges": [1,2,3,4]},
        created_at=datetime.utcnow()
    )

    session.add(kras_run)
    session.add(egfr_run)
    session.commit()
    print("Inserted 2 test records (KRAS & EGFR).")
    session.close()

if __name__ == "__main__":
    insert_test_data()
