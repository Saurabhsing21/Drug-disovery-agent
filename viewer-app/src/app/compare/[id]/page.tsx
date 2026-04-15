import Link from "next/link";
import { notFound } from "next/navigation";
import { CompareReportPanel } from "@/components/CompareReportPanel";
import { getSavedComparison, getSavedRunByRunId, listSavedComparisons } from "@/lib/api";

export const dynamicParams = false;

export async function generateStaticParams() {
  const comps = await listSavedComparisons();
  return comps.map((comp) => ({ id: comp.id }));
}

export default async function CompareViewerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let comp = null;
  let runA = null;
  let runB = null;

  try {
    comp = await getSavedComparison(id);
    [runA, runB] = await Promise.all([
      getSavedRunByRunId(comp.run_a_id),
      getSavedRunByRunId(comp.run_b_id),
    ]);
  } catch {
    notFound();
  }

  if (!comp || !runA || !runB) notFound();

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
          <div className="text-xs text-neutral-400">Target Analysis • Saved on {new Date(comp.created_at).toLocaleString()}</div>
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

      <main className="flex-1 max-w-6xl mx-auto w-full p-8 border-t border-white/10 min-h-[400px]">
        <CompareReportPanel runA={runA} runB={runB} initialMarkdown={comp.compare_markdown || "> No LLM analysis saved."} dataSnapshot={comp.data_snapshot} />
      </main>
    </div>
  );
}
