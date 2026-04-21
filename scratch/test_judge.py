import asyncio
import os
import json
from agents.report_judge_agent import ReportJudgeAgent
from agents.schema import CollectorRequest, EvidenceRecord
from agents.run_state_store import RunStateStore

async def run():
    # Use KRAS as an example since it was likely the one in the screenshot
    run_id = "kras-test-run" # Assuming a run exists or we can find the latest
    
    # Try to find the latest run from the DB
    import sqlite3
    conn = sqlite3.connect("saved_runs.db")
    cursor = conn.cursor()
    cursor.execute("SELECT run_id, summary_markdown FROM saved_runs ORDER BY created_at DESC LIMIT 1")
    row = cursor.fetchone()
    conn.close()
    
    if not row:
        print("No saved runs found.")
        return
        
    run_id, markdown = row
    print(f"Testing judge on run: {run_id}")
    
    # We'd need the items too. For this test, let's just mock a couple or try to load them if they are persisted.
    # Actually, the pipeline will finish soon, so I'll just wait for it.
    
asyncio.run(run())
