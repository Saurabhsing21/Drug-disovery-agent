import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";

const rootDir = path.resolve(process.cwd(), "..");
const dbPath = path.join(rootDir, "saved_runs.db");
const outputPath = path.join(process.cwd(), "src", "generated", "catalog-data.ts");

function parseJson(value) {
  if (value == null) return null;
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function mapRun(row) {
  return {
    id: row.id,
    run_id: row.run_id,
    title: row.title,
    gene_symbol: row.gene_symbol ?? null,
    disease_id: row.disease_id ?? null,
    objective: row.objective ?? null,
    summary_markdown: row.summary_markdown ?? null,
    scored_target: parseJson(row.scored_target),
    final_dossier: parseJson(row.final_dossier),
    evidence_graph: parseJson(row.evidence_graph),
    created_at: new Date(row.created_at).toISOString(),
    updated_at: new Date(row.updated_at).toISOString(),
  };
}

function mapComparison(row) {
  const compareMarkdown =
    row.id === "cf08fabcfe334a579d3123d8f8cee375"
      ? `# COMPARATIVE THERAPEUTIC TARGET REPORT

Genes Compared: **EGFR** vs **KRAS**

---

## 1. Executive Comparison Summary

- **Stronger Target Overall:** **KRAS** is the stronger functional therapeutic target due to its significantly higher genetic dependency fraction (52.4% vs 17.5%) and deeper essentiality scores in sensitive models.
- **Context-Specific Strengths:** **EGFR** remains the gold standard for kinase-driven oncology (NSCLC, Glioblastoma) with superior chemical tractability. **KRAS** dominates in broader oncogenic "addiction" and has unique relevance in germline developmental disorders (Rasopathies).
- **Key Differentiator:** While both are **Tclin** targets, KRAS represents a more fundamental "Achilles heel" across a majority of cancer models, whereas EGFR dependency is highly restricted to specific mutational niches.

---

## 2. Side-by-Side Evidence Comparison

### 2.1 Target Annotation (PHAROS)
| Metric | EGFR | KRAS | Winner | Insight |
|--------|----------|----------|--------|---------|
| TDL | Tclin | Tclin | Tie | Both have FDA-approved inhibitors. |
| Target Family | Kinase | Enzyme (Small GTPase) | **EGFR** | Kinases are traditionally more druggable than GTPases. |
| Ligand Count | 2445 | 223 | **EGFR** | EGFR has ~11x more known ligands, reflecting higher tractability. |
| Novelty | 7.27e-05 | 1.38e-04 | **KRAS** | KRAS is slightly more "novel" in terms of recent exploration. |

→ **Insight:** EGFR is the more "druggable" target due to its well-defined ATP-binding pocket and massive ligand library. KRAS, despite its Tclin status, remains structurally challenging (historically "undruggable").

---

### 2.2 Genetic Dependency (DepMap)
| Metric | EGFR | KRAS | Winner | Insight |
|--------|----------|----------|--------|---------|
| Avg Gene Effect | -0.237 | -0.725 | **KRAS** | KRAS is significantly more essential globally. |
| Strong Dependency Fraction | 17.5% | 52.4% | **KRAS** | KRAS is a dependency in >50% of lines; EGFR in <20%. |
| Max Dependency Strength | -2.784 | -4.461 | **KRAS** | KRAS loss is more lethal in its most sensitive models. |

→ **Insight:** KRAS is a much more potent functional dependency. EGFR essentiality is rare and highly context-specific, whereas KRAS is a broad driver of survival in over half of all tested cancer models.

---

### 2.3 Disease Associations (Open Targets)
| Metric | EGFR | KRAS | Winner | Insight |
|--------|----------|----------|--------|---------|
| Top Score | 0.852 (NSCLC) | 0.826 (Noonan) | **EGFR** | EGFR has a slightly stronger link to its primary oncology indication. |
| Disease Breadth | Oncology focused | Oncology + Germline | **KRAS** | KRAS covers both somatic cancers and Rasopathies. |
| Oncology Relevance | High (Lung/Brain) | High (Lung/Colorectal) | Tie | Both are top-tier oncology drivers. |

→ **Insight:** EGFR has the strongest single-disease association (NSCLC), but KRAS has a more diverse therapeutic reach, including rare developmental disorders (Noonan Syndrome).

---

### 2.4 Literature Strength
| Metric | EGFR | KRAS | Winner | Insight |
|--------|----------|----------|--------|---------|
| # High-impact Papers | 5 (cited >5k) | 2 (cited >4k) | **EGFR** | EGFR literature is more voluminous and clinical-trial heavy. |
| Citation Strength | Up to 8,308 | Up to 6,682 | **EGFR** | EGFR papers establish the paradigm for precision oncology. |
| Research Maturity | Very High | High | **EGFR** | EGFR validation is more mature in the clinical literature. |

→ **Insight:** EGFR is the more "established" target with decades of clinical data regarding mutation-driven response (e.g., gefitinib). KRAS literature is robust but historically focused on its "undruggable" nature.

---

## 3. Cross-Domain Interpretation

- **Consistency:** KRAS shows remarkable consistency between its high disease association (0.82) and its broad functional dependency (52.4% of lines). EGFR shows a "bottleneck" profile: high clinical relevance in a very narrow subset of patients, reflected by its low global dependency score (-0.237).
- **Conflict Resolution:** The "tractability-dependency tradeoff" is evident here. EGFR is easier to drug (Kinase, 2445 ligands) but less essential globally. KRAS is harder to drug (GTPase, 223 ligands) but more essential. However, the recent clinical success of KRAS G12C inhibitors (confirming Tclin status) effectively mitigates the tractability risk for KRAS.
- **Contextual Essentiality:** Both are "oncogene-addicted" targets. However, KRAS dependency is more "pan-cancer" (Colorectal, Lung, Endometrial) compared to EGFR’s primary dominance in NSCLC and Glioblastoma.

---

## 4. Therapeutic Positioning Insight

- **EGFR:** Best positioned for **Precision Oncology** in NSCLC and Glioblastoma. High potential for combination therapies to overcome acquired resistance (e.g., T790M).
- **KRAS:** Best positioned as a **Broad-Spectrum Oncogenic Driver** in NSCLC and Colorectal cancer, with a secondary niche in **Rare Disease/Rasopathies**.
- **Biomarker Dependency:** Both require strict biomarker stratification (EGFR mutations vs KRAS G12C/G12D/G12V mutations) for clinical efficacy.

---

## 5. Risk Assessment

| Risk Type | EGFR | KRAS | Insight |
|----------|----------|----------|--------|
| **Biological Risk** | Moderate | Low | EGFR loss is often compensated by other RTKs; KRAS is a central node. |
| **Clinical Translation Risk** | Low | Moderate | EGFR has many approved generations; KRAS inhibitors are newer. |
| **Competition / Saturation** | Extreme | High | EGFR market is highly saturated; KRAS is the current "hot" frontier. |

---

## 6. Final Verdict (CRITICAL)

**KRAS is a stronger therapeutic target.**

**Justification:**
1. **Superior Functional Essentiality:** KRAS is essential in 52.4% of cell lines compared to EGFR's 17.5%, making it a more broadly applicable target.
2. **Deeper Dependency:** The maximum gene effect for KRAS (-4.46) indicates a more profound "cell death" phenotype upon inhibition than EGFR (-2.78).
3. **Strategic Breadth:** KRAS offers therapeutic opportunities in both major oncology markets and rare germline disorders, providing a more diverse portfolio.

---

## 7. Confidence Score

- **Confidence:** 0.95
- **Reason:** Both targets have Tclin status and high-quality DepMap/Open Targets data. The data consistency across both reports is excellent, allowing for a high-confidence functional comparison. The only minor uncertainty is the long-term clinical durability of KRAS inhibitors compared to the mature EGFR landscape.`
      : row.compare_markdown ?? null;

  return {
    id: row.id,
    run_a_id: row.run_a_id,
    run_b_id: row.run_b_id,
    title: row.title,
    compare_markdown: compareMarkdown,
    data_snapshot: parseJson(row.data_snapshot),
    created_at: new Date(row.created_at).toISOString(),
  };
}

if (!fs.existsSync(dbPath)) {
  throw new Error(`SQLite database not found at ${dbPath}`);
}

const db = new Database(dbPath, { readonly: true });

const runs = db
  .prepare(
    `
      SELECT id, run_id, title, gene_symbol, disease_id, objective,
             summary_markdown, scored_target, final_dossier, evidence_graph,
             created_at, updated_at
      FROM saved_runs
      ORDER BY datetime(created_at) DESC, datetime(updated_at) DESC
    `
  )
  .all()
  .map(mapRun);

const comparisons = db
  .prepare(
    `
      SELECT id, run_a_id, run_b_id, title, compare_markdown, data_snapshot, created_at
      FROM saved_comparisons
      ORDER BY datetime(created_at) DESC
    `
  )
  .all()
  .map(mapComparison);

const header = `/* eslint-disable */\n/* auto-generated from saved_runs.db - do not edit manually */\n\n`;
const body = `${header}import type { SavedComparisonDetail, SavedRunDetail } from "@/lib/types";\n\nexport const savedRuns: SavedRunDetail[] = ${JSON.stringify(runs, null, 2)};\n\nexport const savedComparisons: SavedComparisonDetail[] = ${JSON.stringify(comparisons, null, 2)};\n`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, body, "utf8");
console.log(`Wrote ${outputPath} with ${runs.length} runs and ${comparisons.length} comparisons.`);
