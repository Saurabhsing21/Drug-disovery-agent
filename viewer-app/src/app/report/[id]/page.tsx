import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownReport } from "@/components/MarkdownReport";

import { listSavedRuns, getSavedRun } from "@/lib/api";

export const dynamicParams = false;

export async function generateStaticParams() {
  const runs = await listSavedRuns();
  return runs.map((run) => ({ id: run.id }));
}

export default async function ReportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let run = null;

  try {
    run = await getSavedRun(id);
  } catch {
    notFound();
  }

  if (!run) notFound();

  const reportMarkdown = run.summary_markdown || "No report content available.";
  const scoredTarget = (run.scored_target as Record<string, unknown> | null | undefined) ?? null;


  return (
    <div className="flex h-screen bg-neutral-950 text-neutral-100 flex-col overflow-auto">
      <header className="flex w-full border-b border-white/10 bg-neutral-950/60 p-4 items-center gap-4 sticky top-0 backdrop-blur-sm z-10">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-white">
            DA
          </div>
        </Link>
        <div className="flex flex-col leading-tight ml-2">
          <div className="text-base font-semibold text-neutral-100">{run.title}</div>
          <div className="text-xs text-neutral-400">
            {run.gene_symbol} {run.disease_id ? `/ ${run.disease_id}` : ""} • Saved on{" "}
            {new Date(run.created_at).toLocaleString()}
          </div>
        </div>
        <div className="ml-auto flex gap-2">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-300 hover:text-white px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition border border-white/10"
          >
            ← Catalog
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full p-8 space-y-8">

        <div className="bg-neutral-950/50 rounded-3xl border border-white/10 p-6 shadow-xl">
          <h2 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">Analysis Report</h2>
          <MarkdownReport markdown={reportMarkdown} defaultMode="rendered" dashboardData={scoredTarget} />
        </div>
      </main>
    </div>
  );
}
