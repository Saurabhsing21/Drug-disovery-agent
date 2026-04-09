# 🧬 Drug Discovery Agent: Project Catalog
### *Empowering Biomedical Research with Specialized AI Orchestration*

---

## 🔬 Project Overview
The **Drug Discovery Agent** is an enterprise-grade multi-agent system designed to act as a research partner for drug-target discovery. It automates the complex task of aggregating evidence from fragmented global databases, normalizing contradictory signals, and generating high-fidelity research dossiers.

### Key Capabilities
- **Federated Intelligence**: Queries multiple biomedical sources simultaneously via the Model Context Protocol (MCP).
- **Consensus Building**: Resolves inter-source conflicts using a deterministic scoring engine.
- **Explainable AI**: Provides 1:1 traceability for every score, providing researchers with evidence they can trust.

---

## 🤖 The Multi-Agent Ecosystem
The project moves beyond a simple chatbot. It is a **Stateful Orchestration** where specialized agents collaborate to solve the research objective.

| Component | Role | Why it Matters |
| :--- | :--- | :--- |
| **Supervisor Agent** | The Project Manager | Governs the entire research flow, ensuring no step is skipped and that data quality is maintained at each gate. |
| **Planning Agent** | The Research Strategist | Analyzes the gene/disease input and crafts a custom collection plan, deciding which databases are most likely to yield "high-impact" data. |
| **MCP Workers** | The Librarians | Specialized connectors that bridge the AI to real-world databases like DepMap and PHAROS using standardized protocols. |
| **Scoring Engine** | The Quantitative Analyst | Normalizes raw data into a 0.0–1.0 "Therapeutic Potential" score and identifies inter-source conflicts. |
| **Synthesis Agent** | The Scientific Writer | Automates the drafting of the final research dossier, summarizing findings into professional, clinical-grade language. |

---

## 📡 Detailed Data Synergy (MCP Sources)
Our system utilizes the **Model Context Protocol (MCP)** to interface with four critical pillars of drug discovery data. Here is exactly what we retrieve from each source:

### 1. **PHAROS 🧬** (Target Tractability)
*   **Target Development Level (TDL)**: A key metric (Tclin, Tchem, Tbio, Tdark) that categorizes how much is known about the target and its clinical ligands.
*   **Ligand Counts**: The total number of known small molecules or biologics that bind to the target.
*   **Target Novelty Score**: A measure of how "new" or "unexplored" the target is in the scientific literature.
*   **Disease Associations**: A list of diseases linked to this target in clinical trials or through chemical-gene interactions.

### 2. **DepMap (Dependency Map) 🧪** (Genetic Essentiality)
*   **CERES/Chronos Scores**: Quantitative measures of gene dependency derived from CRISPR-Cas9 or RNAi screens.
*   **Cell Line Metadata**: Access to data from over 1,000+ cancer cell lines, categorized by lineage (e.g., Lung, Breast, Colon).
*   **Probability of Dependency**: The statistical likelihood that the gene is essential for at least one cell line in the dataset.

### 3. **Open Targets 🎯** (Clinical & Genetic Evidence)
*   **Overall Association Score**: A composite score (0-1) reflecting the strength of the relationship between the target and a disease.
*   **Data Types**: Evidence categories including Genetics, Somatic Mutations, Drugs, pathways, and Animal Models.
*   **Target Annotations**: Functional descriptions, protein classes, and subcellular localization.

### 4. **Europe PMC (Literature) 📚** (Scientific Context)
*   **Publication Metrics**: Total record count and yearly publication trends.
*   **Abstract Snippets**: Extraction of high-relevance sentences from peer-reviewed journals.
*   **Keywords & MeSH Terms**: Descriptive tags that help categorize the research focus (e.g., "Inhibitor", "Mutation", "Clinical Trial").

---

## ⚖️ The Scoring Engine: Logic & Transparency
Our "Therapeutic Potential" score is not a guess—it is a calculated value based on a transparent weighting system.

### 1. Normalization (The Common Language)
Every source provides data in different formats (numbers, categories, paper counts). We normalize them to a shared **0.0 to 1.0 scale**:
- **PHAROS**: We map categorical levels (Tclin, Tchem, Tbio, Tdark).
- **DepMap (CERES)**: We convert complex dependency scores (e.g., -1.5) into a 0.0-1.0 "Essentiality" metric.
- **Literature**: We use a logarithmic scale to account for the massive difference between 10 papers and 1,000 papers.

### 2. Balanced Weighting
We weight each source based on its strategic importance in drug validation:
- **30% Pharo**: Traction & Tractability.
- **30% DepMap**: Genetic Essentiality (Functional Proof).
- **25% Open Targets**: Clinical Evidence.
- **15% Literature**: Supporting Research.

### 3. Dynamic Weight Rebalancing
If a source is unavailable (e.g., a service outage), the system **automatically re-distributes** the missing weight across the available sources. This ensures the researcher always receives a valid, relative score even with incomplete data.

### 4. Smart Conflict Detection
If major sources disagree (e.g., PHAROS says it's druggable, but DepMap says it's not essential), the system **automatically flags it**. This alerts the researcher that the target might be tractable but may not have the desired biological effect in certain contexts.

---

## 🛡️ Trust & Traceability
- **No Hallucinations**: Core scores are calculated via deterministic Python code, not guessed by the LLM.
- **Evidence Dossier**: Every report includes a full appendix of the raw data retrieved, allowing researchers to "double-check" the AI's work anytime.

---
**Developed by Saurabh Singh** (Saurabhsing21) | *Next-Generation Biomedical AI Orchestration*
