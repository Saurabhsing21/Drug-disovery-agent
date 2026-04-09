import json
import os

run_id = "run-ed291e77bcb0"
path = f"artifacts/working_memory/{run_id}/latest.json"

with open(path, "r") as f:
    data = json.load(f)

values = data.get("values", {})
final_result = values.get("final_result")

report = None
if final_result and "llm_summary" in final_result:
    report = final_result["llm_summary"].get("markdown_report")

if not report:
    # Fallback to explanation field if final_result is not yet ready
    report = values.get("explanation")

if report:
    os.makedirs("results", exist_ok=True)
    with open("results/BRAF_summary.md", "w") as f:
        f.write(report)
    print("Extracting success: results/BRAF_summary.md created.")
else:
    print("Report not found in JSON.")
