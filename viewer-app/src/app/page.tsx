import { CatalogView } from "@/components/CatalogView";
import { listSavedComparisons, listSavedRuns } from "@/lib/api";

export default async function CatalogPage() {
  const [savedRuns, savedComps] = await Promise.all([listSavedRuns(), listSavedComparisons()]);
  return <CatalogView savedRuns={savedRuns} savedComps={savedComps} />;
}
