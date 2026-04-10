"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getSavedComparison, getSavedRunByRunId } from "@/lib/api";
import type { SavedComparisonDetail, SavedRunDetail } from "@/lib/types";
import { CompareReportPanel } from "@/components/CompareReportPanel";

export default function CompareViewerPage() {
  const params = useParams();
  const id = params.id as string;
  
  const [comp, setComp] = useState<SavedComparisonDetail | null>(null);
  const [runA, setRunA] = useState<SavedRunDetail | null>(null);
  const [runB, setRunB] = useState<SavedRunDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    let active = true;
    
    getSavedComparison(id)
      .then((data) => {
        if (!active) return;
        setComp(data);
        return Promise.all([
          getSavedRunByRunId(data.run_a_id),
          getSavedRunByRunId(data.run_b_id)
        ]);
      })
      .then((runs) => {
        if (!active || !runs) return;
        setRunA(runs[0]);
        setRunB(runs[1]);
      })
      .catch((err) => {
        if (active) setError(err instanceof Error ? err.message : "Failed to load comparison record");
      });

    return () => {
      active = false;
    };
  }, [id]);

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-neutral-950 text-red-300">
        <div className="p-4 border border-red-500/30 rounded-xl bg-red-500/10">
          <h2 className="font-bold mb-2">Error Loading Comparison</h2>
          <p>{error}</p>
          <Link href="/" className="mt-4 block hover:underline">← Back to Catalog</Link>
        </div>
      </div>
    );
  }

  if (!comp || !runA || !runB) {
    return (
      <div className="flex h-screen items-center justify-center bg-neutral-950 text-neutral-400">
        Loading saved comparison...
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-neutral-950 text-neutral-100 flex-col overflow-auto">
      <header className="flex w-full border-b border-white/10 bg-neutral-950/60 p-4 items-center gap-4 sticky top-0 backdrop-blur-sm z-10">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-white">
            DA
          </div>
        </Link>
        <div className="flex flex-col leading-tight ml-2">
          <div className="text-base font-semibold text-neutral-100">{comp.title}</div>
          <div className="text-xs text-neutral-400">
            Target Analysis • Saved on {new Date(comp.created_at).toLocaleString()}
          </div>
        </div>
        <div className="ml-auto flex gap-2">
          <Link href="/" className="text-sm font-medium text-neutral-300 hover:text-white px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition border border-white/10">
            ← Catalog
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full p-8 border-t border-white/10 min-h-[400px]">
        <CompareReportPanel 
          runA={runA} 
          runB={runB} 
          initialMarkdown={comp.compare_markdown || "> No LLM analysis saved."}
          dataSnapshot={comp.data_snapshot}
        />
      </main>
    </div>
  );
}
