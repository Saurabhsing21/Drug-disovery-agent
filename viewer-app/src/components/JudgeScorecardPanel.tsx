import React from "react";

export interface JudgeScore {
  overall_score: number;
  faithfulness_score: number;
  formatting_score: number;
  passed: boolean;
  feedback: string[];
}

export function JudgeScorecardPanel({ score }: { score: JudgeScore | null | undefined }) {
  if (!score) return null;

  const passedColor = score.passed ? "text-emerald-400" : "text-rose-400";
  const passedBg = score.passed ? "bg-emerald-400/10 border-emerald-400/20" : "bg-rose-400/10 border-rose-400/20";

  return (
    <div className={`mb-8 overflow-hidden rounded-2xl border ${passedBg} p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            AI Judge Evaluation
            {score.passed ? (
              <span className="inline-flex items-center rounded-full bg-emerald-400/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-400/20">
                Passed
              </span>
            ) : (
              <span className="inline-flex items-center rounded-full bg-rose-400/20 px-2.5 py-0.5 text-xs font-semibold text-rose-400 border border-rose-400/20">
                Failed
              </span>
            )}
          </h3>
          <p className="text-sm text-neutral-400 mt-1">Automated semantic validation of the generated report.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-1">Overall</span>
            <div className="flex items-baseline gap-1">
              <span className={`text-4xl font-black ${passedColor}`}>{score.overall_score}</span>
              <span className="text-neutral-500 font-medium">/100</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-black/20 rounded-xl p-4 border border-white/5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-neutral-300">Faithfulness</span>
            <span className="text-lg font-bold text-white">{score.faithfulness_score}<span className="text-xs font-normal text-neutral-500 ml-1">/10</span></span>
          </div>
          <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-indigo-500 h-2 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${(score.faithfulness_score / 10) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-neutral-500 mt-2">Evaluation of grounding against raw evidence</p>
        </div>

        <div className="bg-black/20 rounded-xl p-4 border border-white/5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-neutral-300">Formatting</span>
            <span className="text-lg font-bold text-white">{score.formatting_score}<span className="text-xs font-normal text-neutral-500 ml-1">/10</span></span>
          </div>
          <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-purple-500 h-2 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${(score.formatting_score / 10) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-neutral-500 mt-2">Adherence to required section structure</p>
        </div>
      </div>

      {score.feedback && score.feedback.length > 0 && (
        <div className="bg-black/20 rounded-xl p-5 border border-white/5">
          <h4 className="text-sm font-semibold text-neutral-300 mb-3 uppercase tracking-wider flex items-center gap-2">
            <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            Judge Feedback
          </h4>
          <ul className="space-y-2">
            {score.feedback.map((item, idx) => (
              <li key={idx} className="text-sm text-neutral-400 flex items-start gap-2">
                <span className="text-indigo-400 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
