"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getSavedRun } from "@/lib/api";
import type { SavedRunDetail } from "@/lib/types";
import { MarkdownReport } from "@/components/MarkdownReport";

export default function ReportPage() {
  const params = useParams();
  const id = params.id as string;
  const [run, setRun] = useState<SavedRunDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    let active = true;
    getSavedRun(id)
      .then((data) => {
        if (active) setRun(data);
      })
      .catch((err) => {
        if (active) setError(err instanceof Error ? err.message : "Failed to load report");
      });
    return () => {
      active = false;
    };
  }, [id]);

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-neutral-950 text-red-300">
        <div className="p-4 border border-red-500/30 rounded-xl bg-red-500/10">
          <h2 className="font-bold mb-2">Error Loading Report</h2>
          <p>{error}</p>
          <Link href="/" className="mt-4 block hover:underline">← Back to Catalog</Link>
        </div>
      </div>
    );
  }

  if (!run) {
    return (
      <div className="flex h-screen items-center justify-center bg-neutral-950 text-neutral-400">
        Loading report...
      </div>
    );
  }

  const dashboardUrl = `/api/runs/${run.run_id}/evidence-dashboard`;
  const reportMarkdown = run.summary_markdown || "No report content available.";

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
            {run.gene_symbol} {run.disease_id ? `/ ${run.disease_id}` : ""} • Saved on {new Date(run.created_at).toLocaleString()}
          </div>
        </div>
        <div className="ml-auto flex gap-2">
          <Link href="/" className="text-sm font-medium text-neutral-300 hover:text-white px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition border border-white/10">
            ← Catalog
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full p-8 space-y-8">
        <div className="bg-neutral-950/50 rounded-3xl border border-white/10 p-6 shadow-xl">
          <h2 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">Analysis Report</h2>
          <MarkdownReport 
            markdown={reportMarkdown} 
            dashboardUrl={dashboardUrl} 
            defaultMode="rendered"
          />
        </div>

        {run.scored_target && (
          <div className="bg-neutral-950/50 rounded-3xl border border-white/10 p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">Evidence Contribution Dashboard</h2>
            <div className="mt-4 min-h-[500px] w-full bg-white/5 rounded-xl border border-white/5 overflow-hidden">
               <iframe 
                src={dashboardUrl} 
                className="w-full h-[600px] border-none"
                title="Evidence Dashboard"
               />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
