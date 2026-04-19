"use client";

const SOURCE_ORDER = ["pharos", "depmap", "open_targets", "literature"] as const;

const SOURCE_LABELS: Record<string, string> = {
  pharos: "PHAROS",
  depmap: "DepMap",
  open_targets: "Open Targets",
  opentargets: "Open Targets",
  literature: "Literature",
};

const SOURCE_ACCENTS: Record<string, string> = {
  pharos: "bg-sky-400",
  depmap: "bg-emerald-400",
  open_targets: "bg-amber-400",
  literature: "bg-fuchsia-400",
};

function asNumber(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function pct(value: number | null, digits = 1): string {
  if (value == null) return "—";
  return `${(value * 100).toFixed(digits)}%`;
}

function scoreMap(payload: Record<string, unknown> | null | undefined, key: string): Record<string, unknown> {
  const raw = payload?.[key];
  return raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
}

function readSourceValue(map: Record<string, unknown>, key: string): number | null {
  const direct = asNumber(map[key]);
  if (direct != null) return direct;
  if (key === "open_targets") return asNumber(map.opentargets);
  if (key === "opentargets") return asNumber(map.open_targets);
  return null;
}

function sourceConfidence(map: Record<string, unknown>, key: string): string {
  const direct = map[key];
  if (typeof direct === "string" && direct.trim()) return direct;
  if (key === "open_targets" && typeof map.opentargets === "string") return String(map.opentargets);
  return "n/a";
}

function missingSources(payload: Record<string, unknown> | null | undefined): string[] {
  const raw = payload?.missing_sources;
  if (!Array.isArray(raw)) return [];
  return raw.map((item) => SOURCE_LABELS[String(item)] ?? String(item));
}

function notes(payload: Record<string, unknown> | null | undefined): string[] {
  const raw = payload?.notes;
  if (!Array.isArray(raw)) return [];
  return raw.map((item) => String(item));
}

export function EvidenceContributionDashboard({
  scoredTarget,
}: {
  scoredTarget?: Record<string, unknown> | null;
}) {
  const payload = scoredTarget ?? null;
  const targetScore = asNumber(payload?.target_score);
  const evidenceConfidence = asNumber(payload?.evidence_confidence);
  const conflictFlag = Boolean(payload?.conflict_flag);
  const conflictDetail = typeof payload?.conflict_detail === "string" ? payload.conflict_detail : "";
  const scores = scoreMap(payload, "source_scores");
  const weights = scoreMap(payload, "weights_used");
  const confidences = scoreMap(payload, "source_confidences");
  const sparse = new Set(
    Array.isArray(payload?.sparse_sources) ? payload.sparse_sources.map((item) => String(item)) : [],
  );

  const rows = SOURCE_ORDER.map((source) => {
    const score = readSourceValue(scores, source);
    const weight = readSourceValue(weights, source);
    const contribution = score != null && weight != null ? score * weight : null;
    return {
      source,
      label: SOURCE_LABELS[source],
      score,
      weight,
      contribution,
      confidence: sourceConfidence(confidences, source),
      sparse: sparse.has(source),
    };
  }).filter((row) => row.score != null || row.weight != null);

  if (!payload || rows.length === 0) {
    return <div className="p-4 text-sm text-neutral-400">Dashboard not available for this run.</div>;
  }

  return (
    <div className="space-y-4 p-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-4">
          <div className="text-[11px] uppercase tracking-wide text-neutral-400">Overall Target Score</div>
          <div className="mt-2 text-3xl font-semibold text-white">{pct(targetScore)}</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-4">
          <div className="text-[11px] uppercase tracking-wide text-neutral-400">Evidence Confidence</div>
          <div className="mt-2 text-3xl font-semibold text-white">{pct(evidenceConfidence)}</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-4">
          <div className="text-[11px] uppercase tracking-wide text-neutral-400">Conflict Signal</div>
          <div className={`mt-2 text-3xl font-semibold ${conflictFlag ? "text-amber-300" : "text-emerald-300"}`}>
            {conflictFlag ? "Present" : "None"}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-4">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-neutral-100">Source Contribution</div>
            <div className="text-xs text-neutral-400">Readable source-level contribution from the saved scoring payload.</div>
          </div>
        </div>

        <div className="space-y-3">
          {rows.map((row) => (
            <div key={row.source} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${SOURCE_ACCENTS[row.source] ?? "bg-white"}`} />
                  <div className="text-sm font-medium text-neutral-100">{row.label}</div>
                  {row.sparse ? (
                    <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-amber-200">
                      Sparse
                    </span>
                  ) : null}
                </div>
                <div className="text-xs text-neutral-400">Confidence: {row.confidence}</div>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-3 text-xs text-neutral-300 md:grid-cols-3">
                <div>
                  <div className="text-neutral-500">Source score</div>
                  <div className="mt-1 font-medium text-neutral-100">{pct(row.score)}</div>
                </div>
                <div>
                  <div className="text-neutral-500">Weight used</div>
                  <div className="mt-1 font-medium text-neutral-100">{pct(row.weight)}</div>
                </div>
                <div>
                  <div className="text-neutral-500">Weighted contribution</div>
                  <div className="mt-1 font-medium text-neutral-100">{pct(row.contribution)}</div>
                </div>
              </div>

              <div className="mt-3">
                <div className="mb-1 flex justify-between text-[11px] text-neutral-500">
                  <span>Contribution</span>
                  <span>{pct(row.contribution)}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className={`h-full rounded-full ${SOURCE_ACCENTS[row.source] ?? "bg-white"}`}
                    style={{ width: `${Math.max(0, Math.min(100, (row.contribution ?? 0) * 100))}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {conflictDetail ? (
        <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4">
          <div className="text-sm font-semibold text-amber-100">Conflict Detail</div>
          <div className="mt-2 text-sm leading-relaxed text-amber-50/90">{conflictDetail}</div>
        </div>
      ) : null}

      {notes(payload).length > 0 || missingSources(payload).length > 0 ? (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-4">
            <div className="text-sm font-semibold text-neutral-100">Scoring Notes</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300">
              {notes(payload).map((note, index) => (
                <li key={`${index}-${note.slice(0, 16)}`}>{note}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-4">
            <div className="text-sm font-semibold text-neutral-100">Missing Sources</div>
            {missingSources(payload).length > 0 ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                {missingSources(payload).map((source) => (
                  <li key={source}>{source}</li>
                ))}
              </ul>
            ) : (
              <div className="mt-3 text-sm text-neutral-400">No sources are marked missing for this run.</div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
