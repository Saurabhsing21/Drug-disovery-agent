import uuid
from datetime import datetime
from dotenv import load_dotenv
load_dotenv()

from ui_api.db import get_session_factory, init_db
from ui_api.db_models import SavedComparison, SavedRun

def insert_comparison_data():
    init_db()
    Session = get_session_factory()
    if not Session:
        print("Database not configured.")
        return

    session = Session()

    # Get the run IDs we just inserted
    kras_run = session.query(SavedRun).filter(SavedRun.run_id == "test-kras-123").first()
    egfr_run = session.query(SavedRun).filter(SavedRun.run_id == "test-egfr-123").first()

    if not kras_run or not egfr_run:
        print("Required test runs not found. Run insert_test_data.py first.")
        return

    # Clear old comparisons
    session.query(SavedComparison).filter(SavedComparison.title == "Comparison: KRAS vs EGFR").delete(synchronize_session=False)

    comp = SavedComparison(
        run_a_id=kras_run.run_id,
        run_b_id=egfr_run.run_id,
        title="Comparison: KRAS vs EGFR",
        compare_markdown="## KRAS vs EGFR Comparison\n\nKRAS and EGFR are both key oncology targets...\n\n### Key Differences\n- KRAS is a GTPase\n- EGFR is a Receptor Tyrosine Kinase",
        data_snapshot={
            "report_a_title": kras_run.title,
            "report_b_title": egfr_run.title,
            "score_a": kras_run.scored_target["target_score"],
            "score_b": egfr_run.scored_target["target_score"],
            "comparison_date": datetime.now().isoformat()
        }
    )

    session.add(comp)
    session.commit()
    print("Inserted 1 comparison record.")
    session.close()

if __name__ == "__main__":
    insert_comparison_data()
