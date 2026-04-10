"use server";

import prisma from "./prisma";
import type { SavedRunDetail, SavedRunSummary, SavedComparisonSummary, SavedComparisonDetail } from "./types";

function safeJsonParse<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function formatDate(raw: any): string {
  if (!raw) return new Date().toISOString();
  const d = new Date(raw);
  return isNaN(d.getTime()) ? String(raw) : d.toISOString();
}

export async function listSavedRuns(): Promise<SavedRunSummary[]> {
  const runs = await prisma.saved_runs.findMany({
    orderBy: { created_at: 'desc' },
    select: {
      id: true,
      run_id: true,
      title: true,
      gene_symbol: true,
      created_at: true,
      updated_at: true,
    }
  });

  return runs.map(r => ({
    id: r.id,
    run_id: r.run_id,
    title: r.title,
    gene_symbol: r.gene_symbol,
    created_at: formatDate(r.created_at),
    updated_at: formatDate(r.updated_at),
  }));
}

export async function getSavedRun(savedId: string): Promise<SavedRunDetail> {
  const run = await prisma.saved_runs.findUnique({
    where: { id: savedId }
  });

  if (!run) {
    throw new Error("Report not found");
  }

  return {
    id: run.id,
    run_id: run.run_id,
    title: run.title,
    gene_symbol: run.gene_symbol ?? null,
    disease_id: run.disease_id ?? null,
    objective: run.objective ?? null,
    summary_markdown: run.summary_markdown ?? null,
    scored_target: run.scored_target as Record<string, any>,
    final_dossier: run.final_dossier as Record<string, any>,
    evidence_graph: run.evidence_graph as Record<string, any>,
    created_at: formatDate(run.created_at),
    updated_at: formatDate(run.updated_at),
  };
}

export async function postCompareReport(input: {
  title_a: string;
  title_b: string;
  report_a: string;
  report_b: string;
}): Promise<{ markdown: string }> {
  // Since we are no longer running the python backend agent, we return a mock message
  // If the user configures an LLM in Next.js backend later, it can be added here.
  return {
    markdown: `> **Note**: Live LLM Comparison is disabled in the Prisma viewer.\n\n### Report A (${input.title_a})\n...\n\n### Report B (${input.title_b})\n...`
  };
}


export async function listSavedComparisons(): Promise<SavedComparisonSummary[]> {
  const comps = await prisma.saved_comparisons.findMany({
    orderBy: { created_at: 'desc' },
    select: {
      id: true,
      run_a_id: true,
      run_b_id: true,
      title: true,
      created_at: true,
    }
  });

  return comps.map(c => ({
    id: c.id,
    run_a_id: c.run_a_id,
    run_b_id: c.run_b_id,
    title: c.title,
    created_at: formatDate(c.created_at),
  }));
}

export async function getSavedComparison(id: string): Promise<SavedComparisonDetail> {
  const comp = await prisma.saved_comparisons.findUnique({
    where: { id }
  });

  if (!comp) {
    throw new Error("Comparison not found");
  }

  return {
    id: comp.id,
    run_a_id: comp.run_a_id,
    run_b_id: comp.run_b_id,
    title: comp.title,
    compare_markdown: comp.compare_markdown,
    data_snapshot: comp.data_snapshot as Record<string, any>,
    created_at: formatDate(comp.created_at),
  };
}

export async function getSavedRunByRunId(run_id: string): Promise<SavedRunDetail> {
  const run = await prisma.saved_runs.findUnique({
    where: { run_id }
  });

  if (!run) {
    throw new Error(`Run ID ${run_id} not found in DB`);
  }

  return getSavedRun(run.id); // reuse the formatting logic
}
