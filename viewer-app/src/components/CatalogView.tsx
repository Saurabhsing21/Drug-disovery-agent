"use client";

import { useState } from "react";
import Link from "next/link";
import type { SavedComparisonSummary, SavedRunSummary } from "@/lib/types";

export function CatalogView({
  savedRuns,
  savedComps,
}: {
  savedRuns: SavedRunSummary[];
  savedComps: SavedComparisonSummary[];
}) {
  const [activeTab, setActiveTab] = useState<"reports" | "comparisons">("reports");

  return (
    <div className="flex h-screen bg-neutral-950 text-neutral-100 flex-col overflow-auto">
      <header className="flex w-full border-b border-white/10 bg-neutral-950/60 p-4 items-center justify-between sticky top-0 backdrop-blur-sm z-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-white">
            DA
          </div>
          <div className="flex flex-col leading-tight">
            <div className="text-base font-semibold text-neutral-100">Drugagent Viewer</div>
            <div className="text-xs text-neutral-400">Research Documents & Comparisons</div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full p-8">
        <h1 className="text-3xl font-bold mb-6">Database Catalog</h1>

        <div className="flex space-x-2 border-b border-white/10 mb-6">
          <button
            onClick={() => setActiveTab("reports")}
            className={`px-4 py-2 border-b-2 text-sm font-medium transition ${
              activeTab === "reports"
                ? "border-sky-500 text-white"
                : "border-transparent text-neutral-400 hover:text-neutral-200"
            }`}
          >
            Saved Target Reports
          </button>
          <button
            onClick={() => setActiveTab("comparisons")}
            className={`px-4 py-2 border-b-2 text-sm font-medium transition ${
              activeTab === "comparisons"
                ? "border-pink-500 text-white"
                : "border-transparent text-neutral-400 hover:text-neutral-200"
            }`}
          >
            Saved Comparisons
          </button>
        </div>

        {activeTab === "reports" ? (
          savedRuns.length === 0 ? (
            <div className="text-neutral-400 p-8 text-center border border-dashed border-white/10 rounded-xl">
              No saved target reports found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedRuns.map((run) => (
                <Link key={run.id} href={`/report/${run.id}`}>
                  <div className="group border border-white/10 bg-white/5 rounded-2xl p-5 hover:bg-white/10 hover:border-sky-500/50 transition cursor-pointer flex flex-col h-[140px]">
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-neutral-100 group-hover:text-white line-clamp-2" title={run.title}>
                        {run.title}
                      </h2>
                      {run.gene_symbol && (
                        <div className="text-xs font-medium text-sky-400 mt-2 uppercase tracking-wide">
                          {run.gene_symbol}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-[11px] text-neutral-500">
                        {new Date(run.created_at).toLocaleDateString()}
                      </span>
                      <span className="text-[11px] text-sky-400 group-hover:text-sky-300 flex items-center">
                        View Report →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )
        ) : savedComps.length === 0 ? (
          <div className="text-neutral-400 p-8 text-center border border-dashed border-white/10 rounded-xl">
            No saved comparisons found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedComps.map((comp) => (
              <Link key={comp.id} href={`/compare/${comp.id}`}>
                <div className="group border border-white/10 bg-white/5 rounded-2xl p-5 hover:bg-white/10 hover:border-pink-500/50 transition cursor-pointer flex flex-col h-[140px]">
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-neutral-100 group-hover:text-white line-clamp-2" title={comp.title}>
                      {comp.title}
                    </h2>
                    <div className="text-xs font-medium text-pink-400 mt-2 uppercase tracking-wide">Comparison</div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[11px] text-neutral-500">
                      {new Date(comp.created_at).toLocaleDateString()}
                    </span>
                    <span className="text-[11px] text-pink-400 group-hover:text-pink-300 flex items-center">
                      View Analysis →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
