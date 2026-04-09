import json
import os

run_id = "run-07df90206878"
path = f"artifacts/working_memory/{run_id}/latest.json"

with open(path, "r") as f:
    data = json.load(f)

values = data.get("values", {})
report = values.get("explanation")

if report:
    os.makedirs("results", exist_ok=True)
    with open("results/EGFR_summary.md", "w") as f:
        f.write(report)
    print("Extracting success: results/EGFR_summary.md created.")
    
    # Check for common markdown rendering issues
    if "\\n" in report and "\n" not in report:
        print("ERROR: Literal newlines found.")
    elif "```" in report and "```" not in report.split("```", 1)[1]:
         # Rough check for unclosed code blocks
         pass
    else:
        print("Check: No obvious markdown escape errors.")
else:
    print("Report not found in JSON.")
