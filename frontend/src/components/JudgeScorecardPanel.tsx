"use client";

import type { JudgeScore } from "@/lib/types";

export function JudgeScorecardPanel({ score }: { score: JudgeScore | null }) {
  if (!score) return null;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-neutral-100">AI Judge Evaluation</h3>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            score.passed ? "bg-emerald-500/15 text-emerald-300" : "bg-red-500/15 text-red-300"
          }`}
        >
          {score.passed ? "Passed" : "Failed"}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm">
          <div className="text-xs text-neutral-400">Overall</div>
          <div className="mt-1 font-semibold text-neutral-100">{score.overall_score}/100</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm">
          <div className="text-xs text-neutral-400">Faithfulness</div>
          <div className="mt-1 font-semibold text-neutral-100">{score.faithfulness_score}/10</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm">
          <div className="text-xs text-neutral-400">Formatting</div>
          <div className="mt-1 font-semibold text-neutral-100">{score.formatting_score}/10</div>
        </div>
      </div>
      {score.model_used ? <div className="mt-2 text-xs text-neutral-400">Model: {score.model_used}</div> : null}
      {Array.isArray(score.feedback) && score.feedback.length ? (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-neutral-300">
          {score.feedback.map((line, idx) => (
            <li key={`${idx}-${line.slice(0, 16)}`}>{line}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
