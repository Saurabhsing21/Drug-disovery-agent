import { savedComparisons, savedRuns } from "@/generated/catalog-data";
import type {
  SavedComparisonDetail,
  SavedComparisonSummary,
  SavedRunDetail,
  SavedRunSummary,
} from "@/lib/types";

function formatDate(raw: string | null | undefined): string {
  if (!raw) return new Date().toISOString();
  const d = new Date(raw);
  return Number.isNaN(d.getTime()) ? String(raw) : d.toISOString();
}

function toRunSummary(run: SavedRunDetail): SavedRunSummary {
  return {
    id: run.id,
    run_id: run.run_id,
    title: run.title,
    gene_symbol: run.gene_symbol ?? null,
    created_at: formatDate(run.created_at),
    updated_at: formatDate(run.updated_at),
  };
}

function toComparisonSummary(comp: SavedComparisonDetail): SavedComparisonSummary {
  return {
    id: comp.id,
    run_a_id: comp.run_a_id,
    run_b_id: comp.run_b_id,
    title: comp.title,
    created_at: formatDate(comp.created_at),
  };
}

export async function listSavedRuns(): Promise<SavedRunSummary[]> {
  // Strictly show ONLY the final high-fidelity KRAS run as requested by the user.
  // This removes all 'old' versions from the viewer's catalog.
  const FINAL_RUN_ID = "run-cf3e06c2c40b";
  return savedRuns
    .filter((run) => run.run_id === FINAL_RUN_ID)
    .map(toRunSummary);
}

export async function getSavedRun(savedId: string): Promise<SavedRunDetail> {
  const run = savedRuns.find((entry) => entry.id === savedId);
  if (!run) {
    throw new Error("Report not found");
  }
  return run;
}

export async function postCompareReport(input: {
  title_a: string;
  title_b: string;
  report_a: string;
  report_b: string;
}): Promise<{ markdown: string }> {
  return {
    markdown: `> **Note**: Live LLM Comparison is disabled in the static viewer.\n\n### Report A (${input.title_a})\n...\n\n### Report B (${input.title_b})\n...`,
  };
}

export async function listSavedComparisons(): Promise<SavedComparisonSummary[]> {
  // Remove other "things" like existing static comparisons
  return [];
}

export async function getSavedComparison(id: string): Promise<SavedComparisonDetail> {
  const comp = savedComparisons.find((entry) => entry.id === id);
  if (!comp) {
    throw new Error("Comparison not found");
  }
  return comp;
}

export async function getSavedRunByRunId(run_id: string): Promise<SavedRunDetail> {
  const run = savedRuns.find((entry) => entry.run_id === run_id);
  if (!run) {
    throw new Error(`Run ID ${run_id} not found in catalog`);
  }
  return run;
}
