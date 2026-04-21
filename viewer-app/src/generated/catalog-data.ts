export const savedRuns: any[] = [
  {
    "id": "run-cf3e06c2c40b",
    "run_id": "run-cf3e06c2c40b",
    "title": "KRAS \u2014 High-Fidelity Research Report",
    "gene_symbol": "KRAS",
    "disease_id": null,
    "objective": null,
    "created_at": "2026-04-21T15:50:27.397111Z",
    "updated_at": "2026-04-21T15:50:27.397111Z",
    "summary_markdown": "# THERAPEUTIC TARGET EVIDENCE SUMMARY REPORT\n\nGene: KRAS | Run ID: run-cf3e06c2c40b\n\n## Evidence Contribution Dashboard\n[[EVIDENCE_DASHBOARD]]\n\n## 1. Executive Summary\nKRAS is a small GTPase that switches between GDP- and GTP-bound states to regulate cell proliferation and MAPK signaling (Source: curated biological context; trace: protein function and family). In functional genomic screens, KRAS knockout shows a moderate-to-strong viability dependency overall (average CERES-like gene effect \u22120.7345 across 985 cell lines; 52.7% of lines meet a strong-dependency threshold \u2264 \u22120.5), indicating context-specific essentiality rather than universal pan-essential behavior ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: global CRISPR gene effect summary, Appendix 3.1). Open Targets reports high disease-association scores for RASopathies (e.g., Noonan syndrome 3 score 0.826) and for a major oncology indication (non-small cell lung carcinoma score 0.809), reflecting strong combined genetic, somatic, and clinical signals in those settings ([Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: top disease associations, Appendix 4). PHAROS classifies KRAS as TDL=Tclin with 223 ligands, which biologically means FDA-approved drugs exist for this target class and well-developed chemical matter is available for clinical use ([Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: target annotation summary, Appendix 2). Two high-visibility TCGA studies provide disease-centric genomic context involving KRAS in colorectal and endometrial cancers, serving as bibliographic anchors rather than mechanistic confirmation ([Source: Europe PMC](https://europepmc.org/article/MED/22810696); trace: colorectal cancer TCGA paper, Appendix 5; [Source: Europe PMC](https://europepmc.org/article/MED/23636398); trace: endometrial carcinoma TCGA paper, Appendix 5).\n\nOverall, the most decision-critical evidence comes from DepMap functional dependency, supported by disease associations in Open Targets and target accessibility from PHAROS. The literature entries add context but are not determinative for essentiality or tractability in specific clinical niches.\n\n## 2. Target Annotation \u2014 PHAROS\nExplanation\n- KRAS is annotated as \u201cGTPase KRas,\u201d family \u201cEnzyme,\u201d with Target Development Level (TDL) = Tclin and 223 ligands recorded. TDL=Tclin indicates FDA-approved drugs exist for this target, implying clinical tractability of at least some KRAS-targeted modalities or alleles ([Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: target annotation summary, Appendix 2).\n- As a Ras-family small GTPase, KRAS historically posed druggability challenges due to a smooth nucleotide-binding surface; the Tclin status indicates that practical clinical targeting has been achieved despite this general class hurdle (Source: curated biological context; trace: protein family).\n\nPHAROS Target Summary (Appendix 2)\n| Target name | Family | TDL | Ligands (count) | Example associated diseases in PHAROS |\n|---|---|---|---|---|\n| GTPase KRas | Enzyme | Tclin | 223 | Noonan syndrome; juvenile myelomonocytic leukemia; cardiofaciocutaneous syndrome; acute myeloid leukemia; gastric cancer |\n\n## 3. Genetic Dependency \u2014 DepMap\n### Global Dependency Analysis\nExplanation\n- A global average gene effect of \u22120.7345 indicates a moderate-to-strong loss-of-fitness upon CRISPR knockout; values closer to \u22121 suggest strong essentiality, while around \u22120.5 indicate moderate dependency, and near 0 indicate non-essentiality ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: global CRISPR gene effect summary, Appendix 3.1).\n- 519 of 985 lines (52.7%) meet a strong-dependency threshold (\u2264 \u22120.5), showing that KRAS dependency is common but context-dependent rather than universal across lineages ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: global CRISPR gene effect summary, Appendix 3.1).\n- These metrics reflect functional importance in substantial subsets of cancer models, consistent with oncogenic KRAS biology in specific tumor contexts (Source: curated biological context; trace: role in MAPK signaling and proliferation).\n\nGlobal Dependency Metrics (Appendix 3.1)\n| Metric | Value |\n|---|---|\n| Cell lines screened | 985 |\n| Average gene effect | \u22120.7345 |\n| Median gene effect | \u22120.5189 |\n| Strong dependency (\u2264 \u22120.5), count | 519 |\n| Strong dependency fraction | 0.5269 |\n| Screen | CRISPRGeneEffect (DepMap 25Q3) |\n\n### Top Dependent Cell Lines\nExplanation\n- The most KRAS-dependent models show extreme negative gene-effect scores (\u2264 \u22123.66), consistent with strong viability impact upon KRAS loss in those contexts ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: top dependent cell-line records, Appendix 3.2).\n\nTop Dependent Cell Lines (Appendix 3.2)\n| Rank | Cell line ID | Gene effect |\n|---|---|---|\n| 1 | ACH-000222 | \u22124.4607 |\n| 2 | ACH-000417 | \u22123.9677 |\n| 3 | ACH-000505 | \u22123.9228 |\n| 4 | ACH-000235 | \u22123.6639 |\n\n## 4. Disease Associations \u2014 Open Targets\nExplanation\n- Association scores > 0.7 denote strong integrated evidence across genetic, somatic, and clinical layers; KRAS shows such signals for RASopathies and for non-small cell lung carcinoma (NSCLC), aligning with known KRAS biology and therapeutic interest in oncology ([Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: association records, Appendix 4).\n- Because the requested disease context is unspecified, the table lists the highest-scoring diseases available in the payload; this does not imply exclusivity beyond these entries ([Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: dataset scope, Appendix 4).\n\nOpen Targets Associations (Appendix 4)\n| Disease | Association score |\n|---|---|\n| Noonan syndrome 3 | 0.826 |\n| Cardiofaciocutaneous syndrome 2 | 0.814 |\n| Noonan syndrome | 0.813 |\n| Non-small cell lung carcinoma | 0.809 |\n| Cardiofaciocutaneous syndrome | 0.794 |\n\n## 5. Literature\nExplanation\n- Appendix A5 lists additional literature records beyond the lead example highlighted in this section.\n- The two listed TCGA studies are high-impact disease characterizations that include KRAS within the genomic landscape; they serve as contextual anchors but are not direct functional dependency assessments ([Source: Europe PMC](https://europepmc.org/article/MED/22810696); trace: colorectal cancer TCGA paper, Appendix 5; [Source: Europe PMC](https://europepmc.org/article/MED/23636398); trace: endometrial carcinoma TCGA paper, Appendix 5).\n- Additional literature may exist outside this minimal set; the dataset here is intentionally sparse and filtered to high-level disease genomics.\n\nKey Literature (Appendix 5)\n| PMID | Year | Title | Disease area | KRAS relevance |\n|---|---|---|---|---|\n| 22810696 | 2012 | Comprehensive molecular characterization of human colon and rectal cancer | Colorectal cancer | KRAS covered as a recurrently altered oncogene in TCGA landscape |\n| 23636398 | 2013 | Integrated genomic characterization of endometrial carcinoma | Endometrial carcinoma | KRAS included in somatic genomic context |\n\n## 6. Integrated Interpretation\nKRAS is a small GTPase (Ras family) that binds GDP/GTP and regulates MAPK signaling and proliferation, providing a direct mechanistic link between its molecular function and observed context-dependent essentiality in cancer models (Source: curated biological context; trace: molecular function and family). The DepMap profile (average \u22120.7345; 52.7% strong-dependency fraction) indicates robust but non-uniform essentiality, consistent with oncogene-driven reliance in subsets of tumors rather than across all lineages ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: global dependency summary, Appendix 3.1). Open Targets highlights high-scoring associations with RASopathies and NSCLC, coherent with germline and somatic disease mechanisms for KRAS ([Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: association table, Appendix 4). PHAROS TDL=Tclin with 223 ligands indicates established clinical engagement of the target class ([Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: target annotation summary, Appendix 2).\n\nCross-referencing curated biological disease context with Open Targets:\n- Matches: Noonan syndrome 3 and Cardiofaciocutaneous syndrome 2 appear in both curated context and Open Targets, supporting congruent germline disease relevance (Source: curated biological context; trace: curated disease list; [Source: Open Targets](https://platform.opentargets.org/target/ENSG00000133703); trace: association table, Appendix 4).\n- Partial differences: Curated context lists acute myelogenous leukemia and gastric cancer, which are not included in the limited Open Targets rows shown here; this likely reflects dataset truncation rather than absence of association in the broader knowledge base (Source: curated biological context; trace: curated disease list; [Source: Open Targets](https://platform.opentargets.org/target/ENSG00000133703); trace: association table scope, Appendix 4).\n\nComparative context: Unlike kinases such as EGFR that offer well-defined ATP-binding sites for small-molecule inhibition, KRAS is a GTPase whose nucleotide-binding surface historically limited direct druggability; the PHAROS Tclin status indicates that this barrier has been at least partly overcome in clinical settings (Source: curated biological context; trace: protein family; [Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: TDL=Tclin, Appendix 2).\n\nAn expected cross-source tension is observed between:\n- PHAROS ([Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: TDL=Tclin with 223 ligands, Appendix 2; indicates clinical tractability)\n- DepMap ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: average gene effect \u22120.7345 with 52.7% strong-dependency fraction, Appendix 3.1; indicates context-specific, not universal, essentiality)\nThis likely reflects lineage- and allele-specific KRAS dependence within Ras/MAPK pathway\u2013driven tumors, making tractability evident at the drug/target level while essentiality varies across cell contexts (Source: curated biological context; trace: MAPK pathway regulation role). No formal contradiction is recorded, but an expected cross-source tension exists.\n\n### Evidence Contribution (Interpretation)\n- Strongest: DepMap provides direct functional evidence of viability dependence (average \u22120.7345; 519/985 strong-dependency lines), which is the highest-priority evidence type for target validation in this framework ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: global dependency metrics, Appendix 3.1).\n- Moderate: Open Targets supplies high association scores for RASopathies and NSCLC, integrating genetic and clinical layers that contextualize where KRAS is disease-relevant ([Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: association table, Appendix 4).\n- Moderate (annotation-oriented): PHAROS establishes clinical tractability (TDL=Tclin; 223 ligands), which informs feasibility but not disease selectivity or dependency strength ([Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: target annotation summary, Appendix 2).\n- Weakest: The literature entries here are broad TCGA overviews; they anchor disease context but are not designed to quantify functional essentiality or direct drug-response relationships ([Source: Europe PMC](https://europepmc.org/article/MED/22810696); trace: CRC TCGA; [Source: Europe PMC](https://europepmc.org/article/MED/23636398); trace: endometrial TCGA, Appendix 5).\n\n## 7. Evidence Strength Assessment\n- DepMap (functional): The gene-effect profile (average \u22120.7345; median \u22120.5189) indicates biologically meaningful dependency with context specificity; key limitations include in vitro cell-line models and lack of explicit allele/lineage annotations in the provided summary ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: global metrics, Appendix 3.1).\n- Open Targets (disease association): Scores \u2265 0.8 for both RASopathies and NSCLC indicate strong convergent evidence; limitation: disease context for this report is unspecified, and only a subset of associations is shown here ([Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: association table, Appendix 4).\n- PHAROS (annotation/tractability): TDL=Tclin and 223 ligands demonstrate established clinical targeting potential; limitation: these annotations do not specify which variants or tumor contexts are clinically actionable ([Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: target annotation summary, Appendix 2).\n- Literature: High-impact disease genomics papers offer context but lack direct interventional or dependency measures in this dataset; they should be weighted cautiously ([Source: Europe PMC](https://europepmc.org/article/MED/22810696); [Source: Europe PMC](https://europepmc.org/article/MED/23636398); trace: Appendix 5).\n\nNo formal contradiction is recorded in the structured conflict list, but an expected cross-source tension exists between clinical tractability and non-universal functional essentiality.\n\n## 8. Overall Assessment\nThe combined evidence indicates KRAS is a tractable, clinically engaged target with substantial, context-dependent essentiality in cancer models and strong disease associations in both germline RASopathies and NSCLC. Biologically, KRAS\u2019s role in MAPK pathway control aligns with observed dependencies and associations (Source: curated biological context; trace: molecular function). Interpretation for therapy development should remain indication- and context-aware given that dependency is not universal across all models ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: global metrics, Appendix 3.1; [Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: association table, Appendix 4; [Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: TDL=Tclin, Appendix 2).\n\n## 9. Final Conclusion\nKRAS meets key criteria for a therapeutically relevant target: functional dependency is frequent and biologically coherent, disease associations are high for prioritized indications (including NSCLC and RASopathies), and target tractability is established at the clinical level. Given the context-specific nature of dependency, indication and molecular context stratification are essential for translating this evidence into therapeutics ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: dependency metrics, Appendix 3.1; [Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: association table, Appendix 4; [Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: target annotation summary, Appendix 2).\n\n---\n\n# Appendix A \u2014 Raw Evidence Tables\n\nThese tables are compiled directly from the verified evidence payload to make the report scannable.\n- `evidence_id` is the canonical identifier used for traceability.\n- `normalized_score` and `confidence` are copied from the payload (they are not re-computed here).\n- If the narrative report above contains non-table lists, use these tables as the authoritative tabular view.\n\n## A0. Scoring Summary\n| # | category | strength | category_score | top_evidence_id | main_limitation |\n| --- | --- | --- | --- | --- | --- |\n| 1 | annotation | strong | 0.94 | pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277 |  |\n| 2 | dependency | strong | 0.98 | depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80 |  |\n| 3 | disease_association | strong | 0.854986 | opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc | disease context unspecified; association may be non-specific |\n| 4 | literature | strong | 0.88 | literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33 | literature is supportive and can be noisy |\n\n## A0.1 Source Contribution Weights\n| # | source | source_score | weight_used | confidence_label |\n| --- | --- | --- | --- | --- |\n| 1 | pharos | 1 | 0.3 | high |\n| 2 | depmap | 0.3673 | 0.3 | high |\n| 3 | open_targets | 0.82637 | 0.25 | high |\n| 4 | literature | 0.159 | 0.15 | low |\n\n## A1. Source Coverage\n| # | source | status | records | duration_ms | error |\n| --- | --- | --- | --- | --- | --- |\n| 1 | depmap | success | 5 | 7065 |  |\n| 2 | pharos | success | 5 | 1122 |  |\n| 3 | opentargets | success | 5 | 887 |  |\n| 4 | literature | success | 2 | 3518 |  |\n| 5 | depmap | success | 5 | 7436 |  |\n| 6 | pharos | success | 5 | 1102 |  |\n| 7 | opentargets | success | 5 | 1039 |  |\n| 8 | literature | success | 2 | 2813 |  |\n\n## A2. Target Annotation (PHAROS)\n| # | evidence_id | source | tdl | family | ligand_total | novelty | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to Noonan syndrome (TDL=Tclin, ligands=223). |\n| 2 | pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to juvenile myelomonocytic leukemia (TDL=Tclin, ligands=223). |\n| 3 | pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to cardiofaciocutaneous syndrome (TDL=Tclin, ligands=223). |\n| 4 | pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to acute myeloid leukemia (TDL=Tclin, ligands=223). |\n| 5 | pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to gastric cancer (TDL=Tclin, ligands=223). |\n| 6 | pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to Noonan syndrome (TDL=Tclin, ligands=223). |\n| 7 | pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to juvenile myelomonocytic leukemia (TDL=Tclin, ligands=223). |\n| 8 | pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to cardiofaciocutaneous syndrome (TDL=Tclin, ligands=223). |\n| 9 | pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to acute myeloid leukemia (TDL=Tclin, ligands=223). |\n| 10 | pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to gastric cancer (TDL=Tclin, ligands=223). |\n| 11 | pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to Noonan syndrome (TDL=Tclin, ligands=223). |\n| 12 | pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to juvenile myelomonocytic leukemia (TDL=Tclin, ligands=223). |\n| 13 | pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to cardiofaciocutaneous syndrome (TDL=Tclin, ligands=223). |\n| 14 | pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to acute myeloid leukemia (TDL=Tclin, ligands=223). |\n| 15 | pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to gastric cancer (TDL=Tclin, ligands=223). |\n\n## A3. Genetic Dependency (DepMap)\n### A3.1 Global metrics\n| # | evidence_id | source | average_gene_effect | cell_line_count | strong_dependency_count | strong_dependency_fraction | data_release | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | depmap:KRAS:NA:genetic_dependency:93ea48efaf | depmap | -0.73455 | 985 | 519 | 0.5269 | DepMap 25Q3 | 0.950 | 0.367275 | DepMap CRISPR gene effect for KRAS: -0.735 avg across 985 cell lines (519 show strong dependency \u2264 \u22120.5). |\n| 2 | depmap:KRAS:NA:genetic_dependency:93ea48efaf | depmap | -0.73455 | 985 | 519 | 0.5269 | DepMap 25Q3 | 0.950 | 0.367275 | DepMap CRISPR gene effect for KRAS: -0.735 avg across 985 cell lines (519 show strong dependency \u2264 \u22120.5). |\n| 3 | depmap:KRAS:NA:genetic_dependency:93ea48efaf | depmap | -0.73455 | 985 | 519 | 0.5269 | DepMap 25Q3 | 0.950 | 0.367275 | DepMap CRISPR gene effect for KRAS: -0.735 avg across 985 cell lines (519 show strong dependency \u2264 \u22120.5). |\n\n### A3.2 Top dependent cell lines\n| # | evidence_id | cell_line_id | gene_effect | rank_within_gene | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80 | ACH-000222 | -4.46066 | 1 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000222: gene_effect=-4.461 (rank 1). |\n| 2 | depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a | ACH-000417 | -3.96775 | 2 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000417: gene_effect=-3.968 (rank 2). |\n| 3 | depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4 | ACH-000505 | -3.92275 | 3 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000505: gene_effect=-3.923 (rank 3). |\n| 4 | depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828 | ACH-000235 | -3.66389 | 4 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000235: gene_effect=-3.664 (rank 4). |\n| 5 | depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80 | ACH-000222 | -4.46066 | 1 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000222: gene_effect=-4.461 (rank 1). |\n| 6 | depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a | ACH-000417 | -3.96775 | 2 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000417: gene_effect=-3.968 (rank 2). |\n| 7 | depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4 | ACH-000505 | -3.92275 | 3 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000505: gene_effect=-3.923 (rank 3). |\n| 8 | depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828 | ACH-000235 | -3.66389 | 4 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000235: gene_effect=-3.664 (rank 4). |\n| 9 | depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80 | ACH-000222 | -4.46066 | 1 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000222: gene_effect=-4.461 (rank 1). |\n| 10 | depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a | ACH-000417 | -3.96775 | 2 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000417: gene_effect=-3.968 (rank 2). |\n| 11 | depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4 | ACH-000505 | -3.92275 | 3 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000505: gene_effect=-3.923 (rank 3). |\n| 12 | depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828 | ACH-000235 | -3.66389 | 4 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000235: gene_effect=-3.664 (rank 4). |\n\n## A4. Disease Associations (Open Targets)\n| # | evidence_id | source | disease_name | disease_id | score | evidence_count | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc | opentargets | Noonan syndrome 3 | MONDO_0012371 | 0.82637 | 1815 | 0.898 | 0.82637 | Open Targets association score for KRAS and Noonan syndrome 3 is 0.826. |\n| 2 | opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc | opentargets | Noonan syndrome 3 | MONDO_0012371 | 0.82637 | 1815 | 0.898 | 0.82637 | Open Targets association score for KRAS and Noonan syndrome 3 is 0.826. |\n| 3 | opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc | opentargets | Noonan syndrome 3 | MONDO_0012371 | 0.82637 | 1815 | 0.898 | 0.82637 | Open Targets association score for KRAS and Noonan syndrome 3 is 0.826. |\n| 4 | opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590 | opentargets | cardiofaciocutaneous syndrome 2 | MONDO_0014112 | 0.814412 | 1815 | 0.894 | 0.814412 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome 2 is 0.814. |\n| 5 | opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590 | opentargets | cardiofaciocutaneous syndrome 2 | MONDO_0014112 | 0.814412 | 1815 | 0.894 | 0.814412 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome 2 is 0.814. |\n| 6 | opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590 | opentargets | cardiofaciocutaneous syndrome 2 | MONDO_0014112 | 0.814412 | 1815 | 0.894 | 0.814412 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome 2 is 0.814. |\n| 7 | opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f | opentargets | Noonan syndrome | MONDO_0018997 | 0.813127 | 1815 | 0.894 | 0.813127 | Open Targets association score for KRAS and Noonan syndrome is 0.813. |\n| 8 | opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f | opentargets | Noonan syndrome | MONDO_0018997 | 0.813127 | 1815 | 0.894 | 0.813127 | Open Targets association score for KRAS and Noonan syndrome is 0.813. |\n| 9 | opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f | opentargets | Noonan syndrome | MONDO_0018997 | 0.813127 | 1815 | 0.894 | 0.813127 | Open Targets association score for KRAS and Noonan syndrome is 0.813. |\n| 10 | opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a | opentargets | non-small cell lung carcinoma | EFO_0003060 | 0.809177 | 1815 | 0.893 | 0.809177 | Open Targets association score for KRAS and non-small cell lung carcinoma is 0.809. |\n| 11 | opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a | opentargets | non-small cell lung carcinoma | EFO_0003060 | 0.809177 | 1815 | 0.893 | 0.809177 | Open Targets association score for KRAS and non-small cell lung carcinoma is 0.809. |\n| 12 | opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a | opentargets | non-small cell lung carcinoma | EFO_0003060 | 0.809177 | 1815 | 0.893 | 0.809177 | Open Targets association score for KRAS and non-small cell lung carcinoma is 0.809. |\n| 13 | opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e | opentargets | cardiofaciocutaneous syndrome | MONDO_0015280 | 0.794482 | 1815 | 0.888 | 0.794482 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome is 0.794. |\n| 14 | opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e | opentargets | cardiofaciocutaneous syndrome | MONDO_0015280 | 0.794482 | 1815 | 0.888 | 0.794482 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome is 0.794. |\n| 15 | opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e | opentargets | cardiofaciocutaneous syndrome | MONDO_0015280 | 0.794482 | 1815 | 0.888 | 0.794482 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome is 0.794. |\n\n## A5. Literature (Europe PMC)\n| # | evidence_id | pmid | year | cited_by | title | confidence | normalized_score |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33 | 22810696 | 2012 | 6756 | Comprehensive molecular characterization of human colon and rectal cancer. | 0.850 | 0.9 |\n| 2 | literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33 | 22810696 | 2012 | 6756 | Comprehensive molecular characterization of human colon and rectal cancer. | 0.850 | 0.9 |\n| 3 | literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33 | 22810696 | 2012 | 6756 | Comprehensive molecular characterization of human colon and rectal cancer. | 0.850 | 0.9 |\n| 4 | literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c | 23636398 | 2013 | 4198 | Integrated genomic characterization of endometrial carcinoma. | 0.800 | 0.85 |\n| 5 | literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c | 23636398 | 2013 | 4198 | Integrated genomic characterization of endometrial carcinoma. | 0.800 | 0.85 |\n| 6 | literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c | 23636398 | 2013 | 4198 | Integrated genomic characterization of endometrial carcinoma. | 0.800 | 0.85 |",
    "scored_target": {
      "conflict_detail": "PHAROS (1.00) vs DEPMAP (0.37): High tractability but low genetic essentiality \u2014 may be relevant in different tissue or disease context than DepMap cell lines tested.",
      "conflict_flag": true,
      "evidence_confidence": 0.895,
      "gene": "KRAS",
      "missing_sources": [],
      "notes": [
        "Sources with sparse data: ['literature'].",
        "Inter-source conflict detected \u2014 see detail for stratification needs."
      ],
      "score_version": "1.0",
      "source_confidences": {
        "depmap": "high",
        "literature": "low",
        "open_targets": "high",
        "pharos": "high"
      },
      "source_scores": {
        "depmap": 0.3673,
        "literature": 0.159,
        "open_targets": 0.8263697027313498,
        "pharos": 1.0
      },
      "sparse_sources": [
        "literature"
      ],
      "target_score": 0.6406,
      "weights_used": {
        "depmap": 0.3,
        "literature": 0.15,
        "open_targets": 0.25,
        "pharos": 0.3
      }
    },
    "final_dossier": {
      "artifact_path": "/data/artifacts/dossiers/run-cf3e06c2c40b.evidence_dossier.json",
      "artifacts": {
        "evidence_dashboard": "/data/artifacts/evidence_dashboards/run-cf3e06c2c40b.evidence_dashboard.html",
        "graph": "/data/artifacts/graphs/run-cf3e06c2c40b.evidence_graph.json",
        "plan": "/data/artifacts/plans/run-cf3e06c2c40b.collection_plan.json"
      },
      "conflicts": [],
      "emitted_at": "2026-04-21T15:52:48.862783Z",
      "errors": [],
      "graph_snapshot": {
        "artifact_path": "/data/artifacts/graphs/run-cf3e06c2c40b.evidence_graph.json",
        "edges": [
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80",
            "target_id": "source:depmap"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828",
            "target_id": "source:depmap"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a",
            "target_id": "source:depmap"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4",
            "target_id": "source:depmap"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:depmap:KRAS:NA:genetic_dependency:93ea48efaf",
            "target_id": "source:depmap"
          },
          {
            "attributes": {},
            "edge_type": "evidence_publication",
            "source_id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
            "target_id": "publication:pmid:22810696"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
            "target_id": "source:literature"
          },
          {
            "attributes": {},
            "edge_type": "evidence_publication",
            "source_id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
            "target_id": "publication:pmid:23636398"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
            "target_id": "source:literature"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a",
            "target_id": "source:opentargets"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc",
            "target_id": "source:opentargets"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590",
            "target_id": "source:opentargets"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e",
            "target_id": "source:opentargets"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f",
            "target_id": "source:opentargets"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c",
            "target_id": "source:pharos"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9",
            "target_id": "source:pharos"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342",
            "target_id": "source:pharos"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05",
            "target_id": "source:pharos"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277",
            "target_id": "source:pharos"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:EFO_0003060"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO:0001056"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO:0011908"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO:0015280"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO:0018874"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO:0018997"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO_0012371"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO_0014112"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO_0015280"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO_0018997"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:depmap:KRAS:NA:genetic_dependency:93ea48efaf"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277"
          }
        ],
        "generated_at": "2026-04-21T15:50:27.535268Z",
        "graph_format": "json",
        "nodes": [
          {
            "attributes": {},
            "id": "disease:EFO_0003060",
            "label": "EFO_0003060",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO:0001056",
            "label": "MONDO:0001056",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO:0011908",
            "label": "MONDO:0011908",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO:0015280",
            "label": "MONDO:0015280",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO:0018874",
            "label": "MONDO:0018874",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO:0018997",
            "label": "MONDO:0018997",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO_0012371",
            "label": "MONDO_0012371",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO_0014112",
            "label": "MONDO_0014112",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO_0015280",
            "label": "MONDO_0015280",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO_0018997",
            "label": "MONDO_0018997",
            "node_type": "disease"
          },
          {
            "attributes": {
              "confidence": 0.95,
              "conflict_severity": null,
              "evidence_id": "depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80",
              "normalized_score": 1.0,
              "source": "depmap"
            },
            "id": "evidence:depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80",
            "label": "genetic_dependency_cell_line",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.95,
              "conflict_severity": null,
              "evidence_id": "depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828",
              "normalized_score": 1.0,
              "source": "depmap"
            },
            "id": "evidence:depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828",
            "label": "genetic_dependency_cell_line",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.95,
              "conflict_severity": null,
              "evidence_id": "depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a",
              "normalized_score": 1.0,
              "source": "depmap"
            },
            "id": "evidence:depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a",
            "label": "genetic_dependency_cell_line",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.95,
              "conflict_severity": null,
              "evidence_id": "depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4",
              "normalized_score": 1.0,
              "source": "depmap"
            },
            "id": "evidence:depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4",
            "label": "genetic_dependency_cell_line",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.95,
              "conflict_severity": null,
              "evidence_id": "depmap:KRAS:NA:genetic_dependency:93ea48efaf",
              "normalized_score": 0.3672748093729284,
              "source": "depmap"
            },
            "id": "evidence:depmap:KRAS:NA:genetic_dependency:93ea48efaf",
            "label": "genetic_dependency",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
              "normalized_score": 0.9,
              "source": "literature"
            },
            "id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
            "label": "literature_article",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.8,
              "conflict_severity": null,
              "evidence_id": "literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
              "normalized_score": 0.8500000000000001,
              "source": "literature"
            },
            "id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
            "label": "literature_article",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.89275320519801,
              "conflict_severity": null,
              "evidence_id": "opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a",
              "normalized_score": 0.8091773506600335,
              "source": "opentargets"
            },
            "id": "evidence:opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a",
            "label": "disease_association",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.8979109108194049,
              "conflict_severity": null,
              "evidence_id": "opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc",
              "normalized_score": 0.8263697027313498,
              "source": "opentargets"
            },
            "id": "evidence:opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc",
            "label": "disease_association",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.8943234896706429,
              "conflict_severity": null,
              "evidence_id": "opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590",
              "normalized_score": 0.8144116322354762,
              "source": "opentargets"
            },
            "id": "evidence:opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590",
            "label": "disease_association",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.8883445975496039,
              "conflict_severity": null,
              "evidence_id": "opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e",
              "normalized_score": 0.7944819918320131,
              "source": "opentargets"
            },
            "id": "evidence:opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e",
            "label": "disease_association",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.8939379521341774,
              "conflict_severity": null,
              "evidence_id": "opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f",
              "normalized_score": 0.8131265071139245,
              "source": "opentargets"
            },
            "id": "evidence:opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f",
            "label": "disease_association",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c",
              "normalized_score": 1.0,
              "source": "pharos"
            },
            "id": "evidence:pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c",
            "label": "target_annotation",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9",
              "normalized_score": 1.0,
              "source": "pharos"
            },
            "id": "evidence:pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9",
            "label": "target_annotation",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342",
              "normalized_score": 1.0,
              "source": "pharos"
            },
            "id": "evidence:pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342",
            "label": "target_annotation",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05",
              "normalized_score": 1.0,
              "source": "pharos"
            },
            "id": "evidence:pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05",
            "label": "target_annotation",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277",
              "normalized_score": 1.0,
              "source": "pharos"
            },
            "id": "evidence:pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277",
            "label": "target_annotation",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "identifier_type": "pmid"
            },
            "id": "publication:pmid:22810696",
            "label": "22810696",
            "node_type": "publication"
          },
          {
            "attributes": {
              "identifier_type": "pmid"
            },
            "id": "publication:pmid:23636398",
            "label": "23636398",
            "node_type": "publication"
          },
          {
            "attributes": {
              "provider": "DepMap (Broad Institute)"
            },
            "id": "source:depmap",
            "label": "depmap",
            "node_type": "source"
          },
          {
            "attributes": {
              "provider": "Europe PMC"
            },
            "id": "source:literature",
            "label": "literature",
            "node_type": "source"
          },
          {
            "attributes": {
              "provider": "Open Targets"
            },
            "id": "source:opentargets",
            "label": "opentargets",
            "node_type": "source"
          },
          {
            "attributes": {
              "provider": "PHAROS"
            },
            "id": "source:pharos",
            "label": "pharos",
            "node_type": "source"
          },
          {
            "attributes": {
              "target_id": "KRAS"
            },
            "id": "target:KRAS",
            "label": "KRAS",
            "node_type": "target"
          }
        ]
      },
      "handoff_payload": {
        "blocking_issues": [],
        "conflict_count": 0,
        "dossier_artifact_path": "/data/artifacts/dossiers/run-cf3e06c2c40b.evidence_dossier.json",
        "evidence_count": 51,
        "graph_artifact_path": "/data/artifacts/graphs/run-cf3e06c2c40b.evidence_graph.json",
        "handoff_version": "phase2.v1",
        "phase": "phase2",
        "ready": false,
        "reason": "awaiting_human_review",
        "requested_source_count": 4,
        "review_required": true,
        "run_id": "run-cf3e06c2c40b",
        "successful_source_count": 8,
        "warning_issues": [
          "duplicate_detection"
        ]
      },
      "judge_score": {
        "faithfulness_score": 4,
        "feedback": [
          "Multiple unreferenced biological claims (\"curated biological context\") are made about KRAS function (small GTPase switching GDP/GTP, MAPK signaling role), druggability challenges, and comparisons to EGFR; none of these are present in the provided JSON evidence.",
          "The statement that TDL=Tclin \"biologically means FDA-approved drugs exist\" is an interpretation not supported by the provided PHAROS JSON (which only states TDL=Tclin and ligand_total=223) and thus constitutes a hallucination.",
          "Use of the term \"CERES-like gene effect\" is not supported by the DepMap JSON (which lists CRISPRGeneEffect); avoid implying a specific scoring model not present in the evidence.",
          "A non-evidence Open Targets URL is cited (https://platform.opentargets.org/target/ENSG00000133703); citations should use URLs present in the provided evidence JSON (the evidence URLs are the /evidence/... links).",
          "The report introduces fabricated sections/tables not present in the JSON: A0 Scoring Summary, A0.1 Source Contribution Weights, and A1 Source Coverage (with fields like duration_ms, weights), which are unsupported by the evidence.",
          "Several claims are attributed to \"curated biological context\" without any JSON-backed source or hyperlink, violating the requirement that every biological claim be traceable to the provided evidence.",
          "Formatting deviates from the required strict 9 sections by adding an \"Evidence Contribution Dashboard\" and an extensive Appendix; while appendices can be helpful, strict compliance was requested.",
          "Inline citation consistency: some narrative sentences include sources labeled only as \"curated biological context\" without markdown hyperlinks, and one Open Targets link does not match any URL in the evidence JSON.",
          "Minor misattribution: AML and gastric cancer are discussed under \"curated context,\" but in the provided evidence they originate from PHAROS target annotations; cite PHAROS explicitly for those associations."
        ],
        "formatting_score": 6,
        "model_used": "gpt-5",
        "overall_score": 55,
        "passed": false
      },
      "plan": {
        "artifact_path": "/data/artifacts/plans/run-cf3e06c2c40b.collection_plan.json",
        "created_at": "2026-04-21T15:50:10.264475Z",
        "execution_notes": [
          "Found 7 prior episodic match(es) for this query.",
          "Latest related run `run-59651f6fe668` has no recorded review decision."
        ],
        "expected_outputs": {
          "depmap": [
            "evidence_records",
            "source_status"
          ],
          "literature": [
            "evidence_records",
            "source_status"
          ],
          "opentargets": [
            "evidence_records",
            "source_status"
          ],
          "pharos": [
            "evidence_records",
            "source_status"
          ]
        },
        "memory_context": {
          "latest_evidence_count": 17,
          "latest_review_decision": null,
          "latest_run_id": "run-59651f6fe668",
          "match_count": 7,
          "recent_run_ids": [
            "run-76ada2136f55",
            "run-3ac8f72149be",
            "run-59651f6fe668"
          ]
        },
        "plan_version": "phase1.v1",
        "planner_model_used": null,
        "planning_mode": "cached_planner",
        "query_intent": "Collect Phase-1 evidence for target KRAS. Memory-informed planning enabled from 7 prior run(s).",
        "query_variants": [
          "KRAS",
          "K-RAS"
        ],
        "retry_policy": {
          "base_delay_ms": 100,
          "fallback": "emit_partial_result",
          "max_attempts": 3,
          "max_delay_ms": 400,
          "retryable_error_codes": [
            "timeout",
            "rate_limit",
            "upstream_error"
          ],
          "strategy": "bounded_exponential_backoff"
        },
        "run_id": "run-cf3e06c2c40b",
        "selected_sources": [
          "depmap",
          "pharos",
          "opentargets",
          "literature"
        ],
        "source_directives": {
          "depmap": "Collect 5 evidence records for KRAS.",
          "literature": "Collect 5 evidence records for KRAS.",
          "opentargets": "Collect 5 evidence records for KRAS.",
          "pharos": "Collect 5 evidence records for KRAS."
        }
      },
      "query": {
        "disease_id": null,
        "gene_symbol": "KRAS",
        "max_literature_articles": 5,
        "model_override": null,
        "objective": null,
        "per_source_top_k": 5,
        "run_id": "run-cf3e06c2c40b",
        "sources": [
          "depmap",
          "pharos",
          "opentargets",
          "literature"
        ],
        "species": "Homo sapiens"
      },
      "review_decision": null,
      "run_id": "run-cf3e06c2c40b",
      "run_metadata": {
        "collector_node_sequence": [
          "validate_input",
          "plan_collection",
          "plan_review_gate",
          "collect_sources_parallel",
          "normalize_evidence",
          "verify_evidence",
          "analyze_conflicts",
          "score_evidence",
          "assess_sufficiency",
          "build_evidence_graph",
          "generate_explanation",
          "judge_report",
          "supervisor_decide",
          "prepare_review_brief",
          "human_review_gate",
          "emit_dossier"
        ],
        "model_override": null,
        "requested_sources": 4,
        "review_iteration_count": 1
      },
      "schema_version": "0.1.0",
      "source_status": [
        {
          "duration_ms": 7065,
          "error_code": null,
          "error_message": null,
          "record_count": 5,
          "source": "depmap",
          "status": "success"
        },
        {
          "duration_ms": 1122,
          "error_code": null,
          "error_message": null,
          "record_count": 5,
          "source": "pharos",
          "status": "success"
        },
        {
          "duration_ms": 887,
          "error_code": null,
          "error_message": null,
          "record_count": 5,
          "source": "opentargets",
          "status": "success"
        },
        {
          "duration_ms": 3518,
          "error_code": null,
          "error_message": null,
          "record_count": 2,
          "source": "literature",
          "status": "success"
        },
        {
          "duration_ms": 7436,
          "error_code": null,
          "error_message": null,
          "record_count": 5,
          "source": "depmap",
          "status": "success"
        },
        {
          "duration_ms": 1102,
          "error_code": null,
          "error_message": null,
          "record_count": 5,
          "source": "pharos",
          "status": "success"
        },
        {
          "duration_ms": 1039,
          "error_code": null,
          "error_message": null,
          "record_count": 5,
          "source": "opentargets",
          "status": "success"
        },
        {
          "duration_ms": 2813,
          "error_code": null,
          "error_message": null,
          "record_count": 2,
          "source": "literature",
          "status": "success"
        }
      ],
      "summary_markdown": "# THERAPEUTIC TARGET EVIDENCE SUMMARY REPORT\n\nGene: KRAS | Run ID: run-cf3e06c2c40b\n\n## Evidence Contribution Dashboard\n[[EVIDENCE_DASHBOARD]]\n\n## 1. Executive Summary\nKRAS is a small GTPase that switches between GDP- and GTP-bound states to regulate cell proliferation and MAPK signaling (Source: curated biological context; trace: protein function and family). In functional genomic screens, KRAS knockout shows a moderate-to-strong viability dependency overall (average CERES-like gene effect \u22120.7345 across 985 cell lines; 52.7% of lines meet a strong-dependency threshold \u2264 \u22120.5), indicating context-specific essentiality rather than universal pan-essential behavior ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: global CRISPR gene effect summary, Appendix 3.1). Open Targets reports high disease-association scores for RASopathies (e.g., Noonan syndrome 3 score 0.826) and for a major oncology indication (non-small cell lung carcinoma score 0.809), reflecting strong combined genetic, somatic, and clinical signals in those settings ([Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: top disease associations, Appendix 4). PHAROS classifies KRAS as TDL=Tclin with 223 ligands, which biologically means FDA-approved drugs exist for this target class and well-developed chemical matter is available for clinical use ([Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: target annotation summary, Appendix 2). Two high-visibility TCGA studies provide disease-centric genomic context involving KRAS in colorectal and endometrial cancers, serving as bibliographic anchors rather than mechanistic confirmation ([Source: Europe PMC](https://europepmc.org/article/MED/22810696); trace: colorectal cancer TCGA paper, Appendix 5; [Source: Europe PMC](https://europepmc.org/article/MED/23636398); trace: endometrial carcinoma TCGA paper, Appendix 5).\n\nOverall, the most decision-critical evidence comes from DepMap functional dependency, supported by disease associations in Open Targets and target accessibility from PHAROS. The literature entries add context but are not determinative for essentiality or tractability in specific clinical niches.\n\n## 2. Target Annotation \u2014 PHAROS\nExplanation\n- KRAS is annotated as \u201cGTPase KRas,\u201d family \u201cEnzyme,\u201d with Target Development Level (TDL) = Tclin and 223 ligands recorded. TDL=Tclin indicates FDA-approved drugs exist for this target, implying clinical tractability of at least some KRAS-targeted modalities or alleles ([Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: target annotation summary, Appendix 2).\n- As a Ras-family small GTPase, KRAS historically posed druggability challenges due to a smooth nucleotide-binding surface; the Tclin status indicates that practical clinical targeting has been achieved despite this general class hurdle (Source: curated biological context; trace: protein family).\n\nPHAROS Target Summary (Appendix 2)\n| Target name | Family | TDL | Ligands (count) | Example associated diseases in PHAROS |\n|---|---|---|---|---|\n| GTPase KRas | Enzyme | Tclin | 223 | Noonan syndrome; juvenile myelomonocytic leukemia; cardiofaciocutaneous syndrome; acute myeloid leukemia; gastric cancer |\n\n## 3. Genetic Dependency \u2014 DepMap\n### Global Dependency Analysis\nExplanation\n- A global average gene effect of \u22120.7345 indicates a moderate-to-strong loss-of-fitness upon CRISPR knockout; values closer to \u22121 suggest strong essentiality, while around \u22120.5 indicate moderate dependency, and near 0 indicate non-essentiality ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: global CRISPR gene effect summary, Appendix 3.1).\n- 519 of 985 lines (52.7%) meet a strong-dependency threshold (\u2264 \u22120.5), showing that KRAS dependency is common but context-dependent rather than universal across lineages ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: global CRISPR gene effect summary, Appendix 3.1).\n- These metrics reflect functional importance in substantial subsets of cancer models, consistent with oncogenic KRAS biology in specific tumor contexts (Source: curated biological context; trace: role in MAPK signaling and proliferation).\n\nGlobal Dependency Metrics (Appendix 3.1)\n| Metric | Value |\n|---|---|\n| Cell lines screened | 985 |\n| Average gene effect | \u22120.7345 |\n| Median gene effect | \u22120.5189 |\n| Strong dependency (\u2264 \u22120.5), count | 519 |\n| Strong dependency fraction | 0.5269 |\n| Screen | CRISPRGeneEffect (DepMap 25Q3) |\n\n### Top Dependent Cell Lines\nExplanation\n- The most KRAS-dependent models show extreme negative gene-effect scores (\u2264 \u22123.66), consistent with strong viability impact upon KRAS loss in those contexts ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: top dependent cell-line records, Appendix 3.2).\n\nTop Dependent Cell Lines (Appendix 3.2)\n| Rank | Cell line ID | Gene effect |\n|---|---|---|\n| 1 | ACH-000222 | \u22124.4607 |\n| 2 | ACH-000417 | \u22123.9677 |\n| 3 | ACH-000505 | \u22123.9228 |\n| 4 | ACH-000235 | \u22123.6639 |\n\n## 4. Disease Associations \u2014 Open Targets\nExplanation\n- Association scores > 0.7 denote strong integrated evidence across genetic, somatic, and clinical layers; KRAS shows such signals for RASopathies and for non-small cell lung carcinoma (NSCLC), aligning with known KRAS biology and therapeutic interest in oncology ([Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: association records, Appendix 4).\n- Because the requested disease context is unspecified, the table lists the highest-scoring diseases available in the payload; this does not imply exclusivity beyond these entries ([Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: dataset scope, Appendix 4).\n\nOpen Targets Associations (Appendix 4)\n| Disease | Association score |\n|---|---|\n| Noonan syndrome 3 | 0.826 |\n| Cardiofaciocutaneous syndrome 2 | 0.814 |\n| Noonan syndrome | 0.813 |\n| Non-small cell lung carcinoma | 0.809 |\n| Cardiofaciocutaneous syndrome | 0.794 |\n\n## 5. Literature\nExplanation\n- Appendix A5 lists additional literature records beyond the lead example highlighted in this section.\n- The two listed TCGA studies are high-impact disease characterizations that include KRAS within the genomic landscape; they serve as contextual anchors but are not direct functional dependency assessments ([Source: Europe PMC](https://europepmc.org/article/MED/22810696); trace: colorectal cancer TCGA paper, Appendix 5; [Source: Europe PMC](https://europepmc.org/article/MED/23636398); trace: endometrial carcinoma TCGA paper, Appendix 5).\n- Additional literature may exist outside this minimal set; the dataset here is intentionally sparse and filtered to high-level disease genomics.\n\nKey Literature (Appendix 5)\n| PMID | Year | Title | Disease area | KRAS relevance |\n|---|---|---|---|---|\n| 22810696 | 2012 | Comprehensive molecular characterization of human colon and rectal cancer | Colorectal cancer | KRAS covered as a recurrently altered oncogene in TCGA landscape |\n| 23636398 | 2013 | Integrated genomic characterization of endometrial carcinoma | Endometrial carcinoma | KRAS included in somatic genomic context |\n\n## 6. Integrated Interpretation\nKRAS is a small GTPase (Ras family) that binds GDP/GTP and regulates MAPK signaling and proliferation, providing a direct mechanistic link between its molecular function and observed context-dependent essentiality in cancer models (Source: curated biological context; trace: molecular function and family). The DepMap profile (average \u22120.7345; 52.7% strong-dependency fraction) indicates robust but non-uniform essentiality, consistent with oncogene-driven reliance in subsets of tumors rather than across all lineages ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: global dependency summary, Appendix 3.1). Open Targets highlights high-scoring associations with RASopathies and NSCLC, coherent with germline and somatic disease mechanisms for KRAS ([Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: association table, Appendix 4). PHAROS TDL=Tclin with 223 ligands indicates established clinical engagement of the target class ([Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: target annotation summary, Appendix 2).\n\nCross-referencing curated biological disease context with Open Targets:\n- Matches: Noonan syndrome 3 and Cardiofaciocutaneous syndrome 2 appear in both curated context and Open Targets, supporting congruent germline disease relevance (Source: curated biological context; trace: curated disease list; [Source: Open Targets](https://platform.opentargets.org/target/ENSG00000133703); trace: association table, Appendix 4).\n- Partial differences: Curated context lists acute myelogenous leukemia and gastric cancer, which are not included in the limited Open Targets rows shown here; this likely reflects dataset truncation rather than absence of association in the broader knowledge base (Source: curated biological context; trace: curated disease list; [Source: Open Targets](https://platform.opentargets.org/target/ENSG00000133703); trace: association table scope, Appendix 4).\n\nComparative context: Unlike kinases such as EGFR that offer well-defined ATP-binding sites for small-molecule inhibition, KRAS is a GTPase whose nucleotide-binding surface historically limited direct druggability; the PHAROS Tclin status indicates that this barrier has been at least partly overcome in clinical settings (Source: curated biological context; trace: protein family; [Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: TDL=Tclin, Appendix 2).\n\nAn expected cross-source tension is observed between:\n- PHAROS ([Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: TDL=Tclin with 223 ligands, Appendix 2; indicates clinical tractability)\n- DepMap ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: average gene effect \u22120.7345 with 52.7% strong-dependency fraction, Appendix 3.1; indicates context-specific, not universal, essentiality)\nThis likely reflects lineage- and allele-specific KRAS dependence within Ras/MAPK pathway\u2013driven tumors, making tractability evident at the drug/target level while essentiality varies across cell contexts (Source: curated biological context; trace: MAPK pathway regulation role). No formal contradiction is recorded, but an expected cross-source tension exists.\n\n### Evidence Contribution (Interpretation)\n- Strongest: DepMap provides direct functional evidence of viability dependence (average \u22120.7345; 519/985 strong-dependency lines), which is the highest-priority evidence type for target validation in this framework ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: global dependency metrics, Appendix 3.1).\n- Moderate: Open Targets supplies high association scores for RASopathies and NSCLC, integrating genetic and clinical layers that contextualize where KRAS is disease-relevant ([Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: association table, Appendix 4).\n- Moderate (annotation-oriented): PHAROS establishes clinical tractability (TDL=Tclin; 223 ligands), which informs feasibility but not disease selectivity or dependency strength ([Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: target annotation summary, Appendix 2).\n- Weakest: The literature entries here are broad TCGA overviews; they anchor disease context but are not designed to quantify functional essentiality or direct drug-response relationships ([Source: Europe PMC](https://europepmc.org/article/MED/22810696); trace: CRC TCGA; [Source: Europe PMC](https://europepmc.org/article/MED/23636398); trace: endometrial TCGA, Appendix 5).\n\n## 7. Evidence Strength Assessment\n- DepMap (functional): The gene-effect profile (average \u22120.7345; median \u22120.5189) indicates biologically meaningful dependency with context specificity; key limitations include in vitro cell-line models and lack of explicit allele/lineage annotations in the provided summary ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: global metrics, Appendix 3.1).\n- Open Targets (disease association): Scores \u2265 0.8 for both RASopathies and NSCLC indicate strong convergent evidence; limitation: disease context for this report is unspecified, and only a subset of associations is shown here ([Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: association table, Appendix 4).\n- PHAROS (annotation/tractability): TDL=Tclin and 223 ligands demonstrate established clinical targeting potential; limitation: these annotations do not specify which variants or tumor contexts are clinically actionable ([Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: target annotation summary, Appendix 2).\n- Literature: High-impact disease genomics papers offer context but lack direct interventional or dependency measures in this dataset; they should be weighted cautiously ([Source: Europe PMC](https://europepmc.org/article/MED/22810696); [Source: Europe PMC](https://europepmc.org/article/MED/23636398); trace: Appendix 5).\n\nNo formal contradiction is recorded in the structured conflict list, but an expected cross-source tension exists between clinical tractability and non-universal functional essentiality.\n\n## 8. Overall Assessment\nThe combined evidence indicates KRAS is a tractable, clinically engaged target with substantial, context-dependent essentiality in cancer models and strong disease associations in both germline RASopathies and NSCLC. Biologically, KRAS\u2019s role in MAPK pathway control aligns with observed dependencies and associations (Source: curated biological context; trace: molecular function). Interpretation for therapy development should remain indication- and context-aware given that dependency is not universal across all models ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: global metrics, Appendix 3.1; [Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: association table, Appendix 4; [Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: TDL=Tclin, Appendix 2).\n\n## 9. Final Conclusion\nKRAS meets key criteria for a therapeutically relevant target: functional dependency is frequent and biologically coherent, disease associations are high for prioritized indications (including NSCLC and RASopathies), and target tractability is established at the clinical level. Given the context-specific nature of dependency, indication and molecular context stratification are essential for translating this evidence into therapeutics ([Source: DepMap](https://depmap.org/portal/gene/KRAS); trace: dependency metrics, Appendix 3.1; [Source: Open Targets](https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060); trace: association table, Appendix 4; [Source: PHAROS](https://pharos.nih.gov/targets/KRAS); trace: target annotation summary, Appendix 2).\n\n---\n\n# Appendix A \u2014 Raw Evidence Tables\n\nThese tables are compiled directly from the verified evidence payload to make the report scannable.\n- `evidence_id` is the canonical identifier used for traceability.\n- `normalized_score` and `confidence` are copied from the payload (they are not re-computed here).\n- If the narrative report above contains non-table lists, use these tables as the authoritative tabular view.\n\n## A0. Scoring Summary\n| # | category | strength | category_score | top_evidence_id | main_limitation |\n| --- | --- | --- | --- | --- | --- |\n| 1 | annotation | strong | 0.94 | pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277 |  |\n| 2 | dependency | strong | 0.98 | depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80 |  |\n| 3 | disease_association | strong | 0.854986 | opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc | disease context unspecified; association may be non-specific |\n| 4 | literature | strong | 0.88 | literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33 | literature is supportive and can be noisy |\n\n## A0.1 Source Contribution Weights\n| # | source | source_score | weight_used | confidence_label |\n| --- | --- | --- | --- | --- |\n| 1 | pharos | 1 | 0.3 | high |\n| 2 | depmap | 0.3673 | 0.3 | high |\n| 3 | open_targets | 0.82637 | 0.25 | high |\n| 4 | literature | 0.159 | 0.15 | low |\n\n## A1. Source Coverage\n| # | source | status | records | duration_ms | error |\n| --- | --- | --- | --- | --- | --- |\n| 1 | depmap | success | 5 | 7065 |  |\n| 2 | pharos | success | 5 | 1122 |  |\n| 3 | opentargets | success | 5 | 887 |  |\n| 4 | literature | success | 2 | 3518 |  |\n| 5 | depmap | success | 5 | 7436 |  |\n| 6 | pharos | success | 5 | 1102 |  |\n| 7 | opentargets | success | 5 | 1039 |  |\n| 8 | literature | success | 2 | 2813 |  |\n\n## A2. Target Annotation (PHAROS)\n| # | evidence_id | source | tdl | family | ligand_total | novelty | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to Noonan syndrome (TDL=Tclin, ligands=223). |\n| 2 | pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to juvenile myelomonocytic leukemia (TDL=Tclin, ligands=223). |\n| 3 | pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to cardiofaciocutaneous syndrome (TDL=Tclin, ligands=223). |\n| 4 | pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to acute myeloid leukemia (TDL=Tclin, ligands=223). |\n| 5 | pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to gastric cancer (TDL=Tclin, ligands=223). |\n| 6 | pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to Noonan syndrome (TDL=Tclin, ligands=223). |\n| 7 | pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to juvenile myelomonocytic leukemia (TDL=Tclin, ligands=223). |\n| 8 | pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to cardiofaciocutaneous syndrome (TDL=Tclin, ligands=223). |\n| 9 | pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to acute myeloid leukemia (TDL=Tclin, ligands=223). |\n| 10 | pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to gastric cancer (TDL=Tclin, ligands=223). |\n| 11 | pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to Noonan syndrome (TDL=Tclin, ligands=223). |\n| 12 | pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to juvenile myelomonocytic leukemia (TDL=Tclin, ligands=223). |\n| 13 | pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to cardiofaciocutaneous syndrome (TDL=Tclin, ligands=223). |\n| 14 | pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to acute myeloid leukemia (TDL=Tclin, ligands=223). |\n| 15 | pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to gastric cancer (TDL=Tclin, ligands=223). |\n\n## A3. Genetic Dependency (DepMap)\n### A3.1 Global metrics\n| # | evidence_id | source | average_gene_effect | cell_line_count | strong_dependency_count | strong_dependency_fraction | data_release | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | depmap:KRAS:NA:genetic_dependency:93ea48efaf | depmap | -0.73455 | 985 | 519 | 0.5269 | DepMap 25Q3 | 0.950 | 0.367275 | DepMap CRISPR gene effect for KRAS: -0.735 avg across 985 cell lines (519 show strong dependency \u2264 \u22120.5). |\n| 2 | depmap:KRAS:NA:genetic_dependency:93ea48efaf | depmap | -0.73455 | 985 | 519 | 0.5269 | DepMap 25Q3 | 0.950 | 0.367275 | DepMap CRISPR gene effect for KRAS: -0.735 avg across 985 cell lines (519 show strong dependency \u2264 \u22120.5). |\n| 3 | depmap:KRAS:NA:genetic_dependency:93ea48efaf | depmap | -0.73455 | 985 | 519 | 0.5269 | DepMap 25Q3 | 0.950 | 0.367275 | DepMap CRISPR gene effect for KRAS: -0.735 avg across 985 cell lines (519 show strong dependency \u2264 \u22120.5). |\n\n### A3.2 Top dependent cell lines\n| # | evidence_id | cell_line_id | gene_effect | rank_within_gene | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80 | ACH-000222 | -4.46066 | 1 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000222: gene_effect=-4.461 (rank 1). |\n| 2 | depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a | ACH-000417 | -3.96775 | 2 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000417: gene_effect=-3.968 (rank 2). |\n| 3 | depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4 | ACH-000505 | -3.92275 | 3 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000505: gene_effect=-3.923 (rank 3). |\n| 4 | depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828 | ACH-000235 | -3.66389 | 4 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000235: gene_effect=-3.664 (rank 4). |\n| 5 | depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80 | ACH-000222 | -4.46066 | 1 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000222: gene_effect=-4.461 (rank 1). |\n| 6 | depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a | ACH-000417 | -3.96775 | 2 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000417: gene_effect=-3.968 (rank 2). |\n| 7 | depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4 | ACH-000505 | -3.92275 | 3 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000505: gene_effect=-3.923 (rank 3). |\n| 8 | depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828 | ACH-000235 | -3.66389 | 4 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000235: gene_effect=-3.664 (rank 4). |\n| 9 | depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80 | ACH-000222 | -4.46066 | 1 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000222: gene_effect=-4.461 (rank 1). |\n| 10 | depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a | ACH-000417 | -3.96775 | 2 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000417: gene_effect=-3.968 (rank 2). |\n| 11 | depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4 | ACH-000505 | -3.92275 | 3 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000505: gene_effect=-3.923 (rank 3). |\n| 12 | depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828 | ACH-000235 | -3.66389 | 4 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000235: gene_effect=-3.664 (rank 4). |\n\n## A4. Disease Associations (Open Targets)\n| # | evidence_id | source | disease_name | disease_id | score | evidence_count | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc | opentargets | Noonan syndrome 3 | MONDO_0012371 | 0.82637 | 1815 | 0.898 | 0.82637 | Open Targets association score for KRAS and Noonan syndrome 3 is 0.826. |\n| 2 | opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc | opentargets | Noonan syndrome 3 | MONDO_0012371 | 0.82637 | 1815 | 0.898 | 0.82637 | Open Targets association score for KRAS and Noonan syndrome 3 is 0.826. |\n| 3 | opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc | opentargets | Noonan syndrome 3 | MONDO_0012371 | 0.82637 | 1815 | 0.898 | 0.82637 | Open Targets association score for KRAS and Noonan syndrome 3 is 0.826. |\n| 4 | opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590 | opentargets | cardiofaciocutaneous syndrome 2 | MONDO_0014112 | 0.814412 | 1815 | 0.894 | 0.814412 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome 2 is 0.814. |\n| 5 | opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590 | opentargets | cardiofaciocutaneous syndrome 2 | MONDO_0014112 | 0.814412 | 1815 | 0.894 | 0.814412 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome 2 is 0.814. |\n| 6 | opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590 | opentargets | cardiofaciocutaneous syndrome 2 | MONDO_0014112 | 0.814412 | 1815 | 0.894 | 0.814412 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome 2 is 0.814. |\n| 7 | opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f | opentargets | Noonan syndrome | MONDO_0018997 | 0.813127 | 1815 | 0.894 | 0.813127 | Open Targets association score for KRAS and Noonan syndrome is 0.813. |\n| 8 | opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f | opentargets | Noonan syndrome | MONDO_0018997 | 0.813127 | 1815 | 0.894 | 0.813127 | Open Targets association score for KRAS and Noonan syndrome is 0.813. |\n| 9 | opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f | opentargets | Noonan syndrome | MONDO_0018997 | 0.813127 | 1815 | 0.894 | 0.813127 | Open Targets association score for KRAS and Noonan syndrome is 0.813. |\n| 10 | opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a | opentargets | non-small cell lung carcinoma | EFO_0003060 | 0.809177 | 1815 | 0.893 | 0.809177 | Open Targets association score for KRAS and non-small cell lung carcinoma is 0.809. |\n| 11 | opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a | opentargets | non-small cell lung carcinoma | EFO_0003060 | 0.809177 | 1815 | 0.893 | 0.809177 | Open Targets association score for KRAS and non-small cell lung carcinoma is 0.809. |\n| 12 | opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a | opentargets | non-small cell lung carcinoma | EFO_0003060 | 0.809177 | 1815 | 0.893 | 0.809177 | Open Targets association score for KRAS and non-small cell lung carcinoma is 0.809. |\n| 13 | opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e | opentargets | cardiofaciocutaneous syndrome | MONDO_0015280 | 0.794482 | 1815 | 0.888 | 0.794482 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome is 0.794. |\n| 14 | opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e | opentargets | cardiofaciocutaneous syndrome | MONDO_0015280 | 0.794482 | 1815 | 0.888 | 0.794482 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome is 0.794. |\n| 15 | opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e | opentargets | cardiofaciocutaneous syndrome | MONDO_0015280 | 0.794482 | 1815 | 0.888 | 0.794482 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome is 0.794. |\n\n## A5. Literature (Europe PMC)\n| # | evidence_id | pmid | year | cited_by | title | confidence | normalized_score |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33 | 22810696 | 2012 | 6756 | Comprehensive molecular characterization of human colon and rectal cancer. | 0.850 | 0.9 |\n| 2 | literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33 | 22810696 | 2012 | 6756 | Comprehensive molecular characterization of human colon and rectal cancer. | 0.850 | 0.9 |\n| 3 | literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33 | 22810696 | 2012 | 6756 | Comprehensive molecular characterization of human colon and rectal cancer. | 0.850 | 0.9 |\n| 4 | literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c | 23636398 | 2013 | 4198 | Integrated genomic characterization of endometrial carcinoma. | 0.800 | 0.85 |\n| 5 | literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c | 23636398 | 2013 | 4198 | Integrated genomic characterization of endometrial carcinoma. | 0.800 | 0.85 |\n| 6 | literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c | 23636398 | 2013 | 4198 | Integrated genomic characterization of endometrial carcinoma. | 0.800 | 0.85 |",
      "verification_report": {
        "affected_evidence_ids": [
          "depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80",
          "depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828",
          "depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a",
          "depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4",
          "depmap:KRAS:NA:genetic_dependency:93ea48efaf",
          "literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
          "literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
          "opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a",
          "opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc",
          "opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590",
          "opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e",
          "opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f",
          "pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c",
          "pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9",
          "pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342",
          "pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05",
          "pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277"
        ],
        "blocked": false,
        "blocking_issue_count": 0,
        "blocking_issues": [],
        "fail_count": 1,
        "generated_at": "2026-04-21T15:50:27.397111Z",
        "pass_count": 7,
        "rule_outcomes": [
          {
            "blocking": true,
            "evidence_ids": [],
            "message": "All evidence records validate against the canonical schema.",
            "passed": true,
            "rule_name": "schema_validity"
          },
          {
            "blocking": true,
            "evidence_ids": [],
            "message": "All evidence records include required provenance fields.",
            "passed": true,
            "rule_name": "provenance_completeness"
          },
          {
            "blocking": true,
            "evidence_ids": [],
            "message": "All evidence records include a canonical evidence_id.",
            "passed": true,
            "rule_name": "evidence_id_presence"
          },
          {
            "blocking": false,
            "evidence_ids": [
              "depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80",
              "depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80",
              "depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80",
              "depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80",
              "depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828",
              "depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828",
              "depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828",
              "depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828",
              "depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a",
              "depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a",
              "depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a",
              "depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a",
              "depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4",
              "depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4",
              "depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4",
              "depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4",
              "depmap:KRAS:NA:genetic_dependency:93ea48efaf",
              "depmap:KRAS:NA:genetic_dependency:93ea48efaf",
              "depmap:KRAS:NA:genetic_dependency:93ea48efaf",
              "depmap:KRAS:NA:genetic_dependency:93ea48efaf",
              "literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
              "literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
              "literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
              "literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
              "literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
              "literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
              "literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
              "literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
              "opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a",
              "opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a",
              "opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a",
              "opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a",
              "opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc",
              "opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc",
              "opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc",
              "opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc",
              "opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590",
              "opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590",
              "opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590",
              "opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590",
              "opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e",
              "opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e",
              "opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e",
              "opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e",
              "opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f",
              "opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f",
              "opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f",
              "opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f",
              "pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c",
              "pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c",
              "pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c",
              "pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c",
              "pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9",
              "pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9",
              "pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9",
              "pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9",
              "pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342",
              "pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342",
              "pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342",
              "pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342",
              "pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05",
              "pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05",
              "pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05",
              "pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05",
              "pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277",
              "pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277",
              "pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277",
              "pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277"
            ],
            "message": "Duplicate evidence records detected.",
            "passed": false,
            "rule_name": "duplicate_detection"
          },
          {
            "blocking": true,
            "evidence_ids": [],
            "message": "All evidence records match the requested gene symbol.",
            "passed": true,
            "rule_name": "gene_mapping_consistency"
          },
          {
            "blocking": false,
            "evidence_ids": [],
            "message": "All evidence records match the requested disease context.",
            "passed": true,
            "rule_name": "disease_mapping_consistency"
          },
          {
            "blocking": false,
            "evidence_ids": [],
            "message": "All literature evidence includes a PMID or PMCID.",
            "passed": true,
            "rule_name": "citation_presence"
          },
          {
            "blocking": false,
            "evidence_ids": [],
            "message": "All disease identifiers match EFO/MONDO format.",
            "passed": true,
            "rule_name": "ontology_id_format"
          }
        ],
        "total_rules": 8,
        "verification_policy_version": "phase1.v1",
        "warning_count": 1,
        "warning_issues": [
          "duplicate_detection"
        ]
      },
      "verified_evidence": [
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:NA:genetic_dependency:93ea48efaf",
          "evidence_type": "genetic_dependency",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.3672748093729284,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:50.352324Z"
          },
          "raw_value": -0.7345496187458568,
          "retrieved_at": "2026-04-21T15:47:50.352516Z",
          "source": "depmap",
          "summary": "DepMap CRISPR gene effect for KRAS: -0.735 avg across 985 cell lines (519 show strong dependency \u2264 \u22120.5).",
          "support": {
            "average_gene_effect": -0.7345,
            "cell_line_count": 985,
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "median_gene_effect": -0.5189,
            "screen_type": "CRISPRGeneEffect",
            "strong_dependency_count": 519,
            "strong_dependency_fraction": 0.5269,
            "url": "https://depmap.org/portal/gene/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000222",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:50.353844Z"
          },
          "raw_value": -4.460656621974225,
          "retrieved_at": "2026-04-21T15:47:50.353864Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000222: gene_effect=-4.461 (rank 1).",
          "support": {
            "cell_line_id": "ACH-000222",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -4.460656621974225,
            "rank_within_gene": 1,
            "screen_type": "CRISPRGeneEffect",
            "url": "https://depmap.org/portal/gene/KRAS"
          },
          "target_id": "KRAS:ACH-000222",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000417",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:50.353876Z"
          },
          "raw_value": -3.967747228826036,
          "retrieved_at": "2026-04-21T15:47:50.353881Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000417: gene_effect=-3.968 (rank 2).",
          "support": {
            "cell_line_id": "ACH-000417",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -3.967747228826036,
            "rank_within_gene": 2,
            "screen_type": "CRISPRGeneEffect",
            "url": "https://depmap.org/portal/gene/KRAS"
          },
          "target_id": "KRAS:ACH-000417",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000505",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:50.353889Z"
          },
          "raw_value": -3.922754552933352,
          "retrieved_at": "2026-04-21T15:47:50.353894Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000505: gene_effect=-3.923 (rank 3).",
          "support": {
            "cell_line_id": "ACH-000505",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -3.922754552933352,
            "rank_within_gene": 3,
            "screen_type": "CRISPRGeneEffect",
            "url": "https://depmap.org/portal/gene/KRAS"
          },
          "target_id": "KRAS:ACH-000505",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000235",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:50.353900Z"
          },
          "raw_value": -3.663893170595823,
          "retrieved_at": "2026-04-21T15:47:50.353911Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000235: gene_effect=-3.664 (rank 4).",
          "support": {
            "cell_line_id": "ACH-000235",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -3.663893170595823,
            "rank_within_gene": 4,
            "screen_type": "CRISPRGeneEffect",
            "url": "https://depmap.org/portal/gene/KRAS"
          },
          "target_id": "KRAS:ACH-000235",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0018997",
          "evidence_id": "pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "Noonan syndrome",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:52.697056Z"
          },
          "raw_value": {
            "disease_name": "Noonan syndrome",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-21T15:47:52.697328Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to Noonan syndrome (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "Noonan syndrome",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin",
            "url": "https://pharos.nih.gov/targets/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0011908",
          "evidence_id": "pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "juvenile myelomonocytic leukemia",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:52.697357Z"
          },
          "raw_value": {
            "disease_name": "juvenile myelomonocytic leukemia",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-21T15:47:52.697377Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to juvenile myelomonocytic leukemia (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "juvenile myelomonocytic leukemia",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin",
            "url": "https://pharos.nih.gov/targets/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0015280",
          "evidence_id": "pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "cardiofaciocutaneous syndrome",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:52.697387Z"
          },
          "raw_value": {
            "disease_name": "cardiofaciocutaneous syndrome",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-21T15:47:52.697398Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to cardiofaciocutaneous syndrome (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "cardiofaciocutaneous syndrome",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin",
            "url": "https://pharos.nih.gov/targets/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0018874",
          "evidence_id": "pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "acute myeloid leukemia",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:52.697407Z"
          },
          "raw_value": {
            "disease_name": "acute myeloid leukemia",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-21T15:47:52.697419Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to acute myeloid leukemia (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "acute myeloid leukemia",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin",
            "url": "https://pharos.nih.gov/targets/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0001056",
          "evidence_id": "pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "gastric cancer",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:52.697426Z"
          },
          "raw_value": {
            "disease_name": "gastric cancer",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-21T15:47:52.697437Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to gastric cancer (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "gastric cancer",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin",
            "url": "https://pharos.nih.gov/targets/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8979109108194049,
          "disease_id": "MONDO_0012371",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8263697027313498,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:54.622491Z"
          },
          "raw_value": 0.8263697027313498,
          "retrieved_at": "2026-04-21T15:47:54.622645Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and Noonan syndrome 3 is 0.826.",
          "support": {
            "disease_name": "Noonan syndrome 3",
            "evidence_count": 1815,
            "requested_disease": null,
            "url": "https://platform.opentargets.org/evidence/ENSG00000133703/MONDO_0012371"
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8943234896706429,
          "disease_id": "MONDO_0014112",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8144116322354762,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:54.622674Z"
          },
          "raw_value": 0.8144116322354762,
          "retrieved_at": "2026-04-21T15:47:54.622684Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and cardiofaciocutaneous syndrome 2 is 0.814.",
          "support": {
            "disease_name": "cardiofaciocutaneous syndrome 2",
            "evidence_count": 1815,
            "requested_disease": null,
            "url": "https://platform.opentargets.org/evidence/ENSG00000133703/MONDO_0014112"
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8939379521341774,
          "disease_id": "MONDO_0018997",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8131265071139245,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:54.622697Z"
          },
          "raw_value": 0.8131265071139245,
          "retrieved_at": "2026-04-21T15:47:54.622705Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and Noonan syndrome is 0.813.",
          "support": {
            "disease_name": "Noonan syndrome",
            "evidence_count": 1815,
            "requested_disease": null,
            "url": "https://platform.opentargets.org/evidence/ENSG00000133703/MONDO_0018997"
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.89275320519801,
          "disease_id": "EFO_0003060",
          "evidence_id": "opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8091773506600335,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:54.622719Z"
          },
          "raw_value": 0.8091773506600335,
          "retrieved_at": "2026-04-21T15:47:54.622727Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and non-small cell lung carcinoma is 0.809.",
          "support": {
            "disease_name": "non-small cell lung carcinoma",
            "evidence_count": 1815,
            "requested_disease": null,
            "url": "https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060"
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8883445975496039,
          "disease_id": "MONDO_0015280",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.7944819918320131,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:54.622739Z"
          },
          "raw_value": 0.7944819918320131,
          "retrieved_at": "2026-04-21T15:47:54.622747Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and cardiofaciocutaneous syndrome is 0.794.",
          "support": {
            "disease_name": "cardiofaciocutaneous syndrome",
            "evidence_count": 1815,
            "requested_disease": null,
            "url": "https://platform.opentargets.org/evidence/ENSG00000133703/MONDO_0015280"
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": null,
          "evidence_id": "literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
          "evidence_type": "literature_article",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.9,
          "provenance": {
            "endpoint": "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
            "provider": "Europe PMC",
            "query": {
              "disease_id": null,
              "pmid": "22810696",
              "query": "\"KRAS\""
            },
            "retrieved_at": "2026-04-21T15:47:59.160796Z"
          },
          "raw_value": 6756.0,
          "retrieved_at": "2026-04-21T15:47:59.160881Z",
          "source": "literature",
          "summary": "Europe PMC article rank 1/2 for KRAS: Comprehensive molecular characterization of human colon and rectal cancer. (PMID=22810696, citations=6756).",
          "support": {
            "article_count_returned": 2,
            "cited_by_count": 6756,
            "eligible_hit_count": 2,
            "fetch_page_size": 25,
            "gene_in_abstract": true,
            "gene_in_title": false,
            "journal": null,
            "original_rank_by_cited_sort": 1,
            "pmid": "22810696",
            "pub_year": "2012",
            "query": "\"KRAS\"",
            "rank": 1,
            "title": "Comprehensive molecular characterization of human colon and rectal cancer.",
            "total_hit_count": 124284,
            "url": "https://europepmc.org/article/MED/22810696"
          },
          "target_id": "KRAS:PMID:22810696",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8,
          "disease_id": null,
          "evidence_id": "literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
          "evidence_type": "literature_article",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8500000000000001,
          "provenance": {
            "endpoint": "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
            "provider": "Europe PMC",
            "query": {
              "disease_id": null,
              "pmid": "23636398",
              "query": "\"KRAS\""
            },
            "retrieved_at": "2026-04-21T15:47:59.160915Z"
          },
          "raw_value": 4198.0,
          "retrieved_at": "2026-04-21T15:47:59.160922Z",
          "source": "literature",
          "summary": "Europe PMC article rank 2/2 for KRAS: Integrated genomic characterization of endometrial carcinoma. (PMID=23636398, citations=4198).",
          "support": {
            "article_count_returned": 2,
            "cited_by_count": 4198,
            "eligible_hit_count": 2,
            "fetch_page_size": 25,
            "gene_in_abstract": true,
            "gene_in_title": false,
            "journal": null,
            "original_rank_by_cited_sort": 2,
            "pmid": "23636398",
            "pub_year": "2013",
            "query": "\"KRAS\"",
            "rank": 2,
            "title": "Integrated genomic characterization of endometrial carcinoma.",
            "total_hit_count": 124284,
            "url": "https://europepmc.org/article/MED/23636398"
          },
          "target_id": "KRAS:PMID:23636398",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:NA:genetic_dependency:93ea48efaf",
          "evidence_type": "genetic_dependency",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.3672748093729284,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:50.352324Z"
          },
          "raw_value": -0.7345496187458568,
          "retrieved_at": "2026-04-21T15:47:50.352516Z",
          "source": "depmap",
          "summary": "DepMap CRISPR gene effect for KRAS: -0.735 avg across 985 cell lines (519 show strong dependency \u2264 \u22120.5).",
          "support": {
            "average_gene_effect": -0.7345,
            "cell_line_count": 985,
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "median_gene_effect": -0.5189,
            "screen_type": "CRISPRGeneEffect",
            "strong_dependency_count": 519,
            "strong_dependency_fraction": 0.5269,
            "url": "https://depmap.org/portal/gene/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000222",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:50.353844Z"
          },
          "raw_value": -4.460656621974225,
          "retrieved_at": "2026-04-21T15:47:50.353864Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000222: gene_effect=-4.461 (rank 1).",
          "support": {
            "cell_line_id": "ACH-000222",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -4.460656621974225,
            "rank_within_gene": 1,
            "screen_type": "CRISPRGeneEffect",
            "url": "https://depmap.org/portal/gene/KRAS"
          },
          "target_id": "KRAS:ACH-000222",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000417",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:50.353876Z"
          },
          "raw_value": -3.967747228826036,
          "retrieved_at": "2026-04-21T15:47:50.353881Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000417: gene_effect=-3.968 (rank 2).",
          "support": {
            "cell_line_id": "ACH-000417",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -3.967747228826036,
            "rank_within_gene": 2,
            "screen_type": "CRISPRGeneEffect",
            "url": "https://depmap.org/portal/gene/KRAS"
          },
          "target_id": "KRAS:ACH-000417",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000505",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:50.353889Z"
          },
          "raw_value": -3.922754552933352,
          "retrieved_at": "2026-04-21T15:47:50.353894Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000505: gene_effect=-3.923 (rank 3).",
          "support": {
            "cell_line_id": "ACH-000505",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -3.922754552933352,
            "rank_within_gene": 3,
            "screen_type": "CRISPRGeneEffect",
            "url": "https://depmap.org/portal/gene/KRAS"
          },
          "target_id": "KRAS:ACH-000505",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000235",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:50.353900Z"
          },
          "raw_value": -3.663893170595823,
          "retrieved_at": "2026-04-21T15:47:50.353911Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000235: gene_effect=-3.664 (rank 4).",
          "support": {
            "cell_line_id": "ACH-000235",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -3.663893170595823,
            "rank_within_gene": 4,
            "screen_type": "CRISPRGeneEffect",
            "url": "https://depmap.org/portal/gene/KRAS"
          },
          "target_id": "KRAS:ACH-000235",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0018997",
          "evidence_id": "pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "Noonan syndrome",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:52.697056Z"
          },
          "raw_value": {
            "disease_name": "Noonan syndrome",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-21T15:47:52.697328Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to Noonan syndrome (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "Noonan syndrome",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin",
            "url": "https://pharos.nih.gov/targets/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0011908",
          "evidence_id": "pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "juvenile myelomonocytic leukemia",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:52.697357Z"
          },
          "raw_value": {
            "disease_name": "juvenile myelomonocytic leukemia",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-21T15:47:52.697377Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to juvenile myelomonocytic leukemia (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "juvenile myelomonocytic leukemia",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin",
            "url": "https://pharos.nih.gov/targets/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0015280",
          "evidence_id": "pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "cardiofaciocutaneous syndrome",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:52.697387Z"
          },
          "raw_value": {
            "disease_name": "cardiofaciocutaneous syndrome",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-21T15:47:52.697398Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to cardiofaciocutaneous syndrome (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "cardiofaciocutaneous syndrome",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin",
            "url": "https://pharos.nih.gov/targets/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0018874",
          "evidence_id": "pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "acute myeloid leukemia",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:52.697407Z"
          },
          "raw_value": {
            "disease_name": "acute myeloid leukemia",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-21T15:47:52.697419Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to acute myeloid leukemia (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "acute myeloid leukemia",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin",
            "url": "https://pharos.nih.gov/targets/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0001056",
          "evidence_id": "pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "gastric cancer",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:52.697426Z"
          },
          "raw_value": {
            "disease_name": "gastric cancer",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-21T15:47:52.697437Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to gastric cancer (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "gastric cancer",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin",
            "url": "https://pharos.nih.gov/targets/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8979109108194049,
          "disease_id": "MONDO_0012371",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8263697027313498,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:54.622491Z"
          },
          "raw_value": 0.8263697027313498,
          "retrieved_at": "2026-04-21T15:47:54.622645Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and Noonan syndrome 3 is 0.826.",
          "support": {
            "disease_name": "Noonan syndrome 3",
            "evidence_count": 1815,
            "requested_disease": null,
            "url": "https://platform.opentargets.org/evidence/ENSG00000133703/MONDO_0012371"
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8943234896706429,
          "disease_id": "MONDO_0014112",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8144116322354762,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:54.622674Z"
          },
          "raw_value": 0.8144116322354762,
          "retrieved_at": "2026-04-21T15:47:54.622684Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and cardiofaciocutaneous syndrome 2 is 0.814.",
          "support": {
            "disease_name": "cardiofaciocutaneous syndrome 2",
            "evidence_count": 1815,
            "requested_disease": null,
            "url": "https://platform.opentargets.org/evidence/ENSG00000133703/MONDO_0014112"
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8939379521341774,
          "disease_id": "MONDO_0018997",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8131265071139245,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:54.622697Z"
          },
          "raw_value": 0.8131265071139245,
          "retrieved_at": "2026-04-21T15:47:54.622705Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and Noonan syndrome is 0.813.",
          "support": {
            "disease_name": "Noonan syndrome",
            "evidence_count": 1815,
            "requested_disease": null,
            "url": "https://platform.opentargets.org/evidence/ENSG00000133703/MONDO_0018997"
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.89275320519801,
          "disease_id": "EFO_0003060",
          "evidence_id": "opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8091773506600335,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:54.622719Z"
          },
          "raw_value": 0.8091773506600335,
          "retrieved_at": "2026-04-21T15:47:54.622727Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and non-small cell lung carcinoma is 0.809.",
          "support": {
            "disease_name": "non-small cell lung carcinoma",
            "evidence_count": 1815,
            "requested_disease": null,
            "url": "https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060"
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8883445975496039,
          "disease_id": "MONDO_0015280",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.7944819918320131,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:47:54.622739Z"
          },
          "raw_value": 0.7944819918320131,
          "retrieved_at": "2026-04-21T15:47:54.622747Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and cardiofaciocutaneous syndrome is 0.794.",
          "support": {
            "disease_name": "cardiofaciocutaneous syndrome",
            "evidence_count": 1815,
            "requested_disease": null,
            "url": "https://platform.opentargets.org/evidence/ENSG00000133703/MONDO_0015280"
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": null,
          "evidence_id": "literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
          "evidence_type": "literature_article",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.9,
          "provenance": {
            "endpoint": "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
            "provider": "Europe PMC",
            "query": {
              "disease_id": null,
              "pmid": "22810696",
              "query": "\"KRAS\""
            },
            "retrieved_at": "2026-04-21T15:47:59.160796Z"
          },
          "raw_value": 6756.0,
          "retrieved_at": "2026-04-21T15:47:59.160881Z",
          "source": "literature",
          "summary": "Europe PMC article rank 1/2 for KRAS: Comprehensive molecular characterization of human colon and rectal cancer. (PMID=22810696, citations=6756).",
          "support": {
            "article_count_returned": 2,
            "cited_by_count": 6756,
            "eligible_hit_count": 2,
            "fetch_page_size": 25,
            "gene_in_abstract": true,
            "gene_in_title": false,
            "journal": null,
            "original_rank_by_cited_sort": 1,
            "pmid": "22810696",
            "pub_year": "2012",
            "query": "\"KRAS\"",
            "rank": 1,
            "title": "Comprehensive molecular characterization of human colon and rectal cancer.",
            "total_hit_count": 124284,
            "url": "https://europepmc.org/article/MED/22810696"
          },
          "target_id": "KRAS:PMID:22810696",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8,
          "disease_id": null,
          "evidence_id": "literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
          "evidence_type": "literature_article",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8500000000000001,
          "provenance": {
            "endpoint": "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
            "provider": "Europe PMC",
            "query": {
              "disease_id": null,
              "pmid": "23636398",
              "query": "\"KRAS\""
            },
            "retrieved_at": "2026-04-21T15:47:59.160915Z"
          },
          "raw_value": 4198.0,
          "retrieved_at": "2026-04-21T15:47:59.160922Z",
          "source": "literature",
          "summary": "Europe PMC article rank 2/2 for KRAS: Integrated genomic characterization of endometrial carcinoma. (PMID=23636398, citations=4198).",
          "support": {
            "article_count_returned": 2,
            "cited_by_count": 4198,
            "eligible_hit_count": 2,
            "fetch_page_size": 25,
            "gene_in_abstract": true,
            "gene_in_title": false,
            "journal": null,
            "original_rank_by_cited_sort": 2,
            "pmid": "23636398",
            "pub_year": "2013",
            "query": "\"KRAS\"",
            "rank": 2,
            "title": "Integrated genomic characterization of endometrial carcinoma.",
            "total_hit_count": 124284,
            "url": "https://europepmc.org/article/MED/23636398"
          },
          "target_id": "KRAS:PMID:23636398",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:NA:genetic_dependency:93ea48efaf",
          "evidence_type": "genetic_dependency",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.3672748093729284,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:50:18.852040Z"
          },
          "raw_value": -0.7345496187458568,
          "retrieved_at": "2026-04-21T15:50:18.852262Z",
          "source": "depmap",
          "summary": "DepMap CRISPR gene effect for KRAS: -0.735 avg across 985 cell lines (519 show strong dependency \u2264 \u22120.5).",
          "support": {
            "average_gene_effect": -0.7345,
            "cell_line_count": 985,
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "median_gene_effect": -0.5189,
            "screen_type": "CRISPRGeneEffect",
            "strong_dependency_count": 519,
            "strong_dependency_fraction": 0.5269,
            "url": "https://depmap.org/portal/gene/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000222",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:50:18.853714Z"
          },
          "raw_value": -4.460656621974225,
          "retrieved_at": "2026-04-21T15:50:18.853739Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000222: gene_effect=-4.461 (rank 1).",
          "support": {
            "cell_line_id": "ACH-000222",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -4.460656621974225,
            "rank_within_gene": 1,
            "screen_type": "CRISPRGeneEffect",
            "url": "https://depmap.org/portal/gene/KRAS"
          },
          "target_id": "KRAS:ACH-000222",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000417",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:50:18.853762Z"
          },
          "raw_value": -3.967747228826036,
          "retrieved_at": "2026-04-21T15:50:18.853769Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000417: gene_effect=-3.968 (rank 2).",
          "support": {
            "cell_line_id": "ACH-000417",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -3.967747228826036,
            "rank_within_gene": 2,
            "screen_type": "CRISPRGeneEffect",
            "url": "https://depmap.org/portal/gene/KRAS"
          },
          "target_id": "KRAS:ACH-000417",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000505",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:50:18.853778Z"
          },
          "raw_value": -3.922754552933352,
          "retrieved_at": "2026-04-21T15:50:18.853782Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000505: gene_effect=-3.923 (rank 3).",
          "support": {
            "cell_line_id": "ACH-000505",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -3.922754552933352,
            "rank_within_gene": 3,
            "screen_type": "CRISPRGeneEffect",
            "url": "https://depmap.org/portal/gene/KRAS"
          },
          "target_id": "KRAS:ACH-000505",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000235",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:50:18.853788Z"
          },
          "raw_value": -3.663893170595823,
          "retrieved_at": "2026-04-21T15:50:18.853803Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000235: gene_effect=-3.664 (rank 4).",
          "support": {
            "cell_line_id": "ACH-000235",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -3.663893170595823,
            "rank_within_gene": 4,
            "screen_type": "CRISPRGeneEffect",
            "url": "https://depmap.org/portal/gene/KRAS"
          },
          "target_id": "KRAS:ACH-000235",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0018997",
          "evidence_id": "pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "Noonan syndrome",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:50:21.197548Z"
          },
          "raw_value": {
            "disease_name": "Noonan syndrome",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-21T15:50:21.198153Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to Noonan syndrome (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "Noonan syndrome",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin",
            "url": "https://pharos.nih.gov/targets/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0011908",
          "evidence_id": "pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "juvenile myelomonocytic leukemia",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:50:21.198179Z"
          },
          "raw_value": {
            "disease_name": "juvenile myelomonocytic leukemia",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-21T15:50:21.198199Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to juvenile myelomonocytic leukemia (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "juvenile myelomonocytic leukemia",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin",
            "url": "https://pharos.nih.gov/targets/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0015280",
          "evidence_id": "pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "cardiofaciocutaneous syndrome",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:50:21.198208Z"
          },
          "raw_value": {
            "disease_name": "cardiofaciocutaneous syndrome",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-21T15:50:21.198219Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to cardiofaciocutaneous syndrome (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "cardiofaciocutaneous syndrome",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin",
            "url": "https://pharos.nih.gov/targets/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0018874",
          "evidence_id": "pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "acute myeloid leukemia",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:50:21.198228Z"
          },
          "raw_value": {
            "disease_name": "acute myeloid leukemia",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-21T15:50:21.198239Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to acute myeloid leukemia (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "acute myeloid leukemia",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin",
            "url": "https://pharos.nih.gov/targets/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0001056",
          "evidence_id": "pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1.0,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "gastric cancer",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:50:21.198247Z"
          },
          "raw_value": {
            "disease_name": "gastric cancer",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-21T15:50:21.198258Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to gastric cancer (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "gastric cancer",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin",
            "url": "https://pharos.nih.gov/targets/KRAS"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8979109108194049,
          "disease_id": "MONDO_0012371",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8263697027313498,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:50:23.311369Z"
          },
          "raw_value": 0.8263697027313498,
          "retrieved_at": "2026-04-21T15:50:23.311427Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and Noonan syndrome 3 is 0.826.",
          "support": {
            "disease_name": "Noonan syndrome 3",
            "evidence_count": 1815,
            "requested_disease": null,
            "url": "https://platform.opentargets.org/evidence/ENSG00000133703/MONDO_0012371"
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8943234896706429,
          "disease_id": "MONDO_0014112",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8144116322354762,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:50:23.311453Z"
          },
          "raw_value": 0.8144116322354762,
          "retrieved_at": "2026-04-21T15:50:23.311465Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and cardiofaciocutaneous syndrome 2 is 0.814.",
          "support": {
            "disease_name": "cardiofaciocutaneous syndrome 2",
            "evidence_count": 1815,
            "requested_disease": null,
            "url": "https://platform.opentargets.org/evidence/ENSG00000133703/MONDO_0014112"
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8939379521341774,
          "disease_id": "MONDO_0018997",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8131265071139245,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:50:23.311484Z"
          },
          "raw_value": 0.8131265071139245,
          "retrieved_at": "2026-04-21T15:50:23.311494Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and Noonan syndrome is 0.813.",
          "support": {
            "disease_name": "Noonan syndrome",
            "evidence_count": 1815,
            "requested_disease": null,
            "url": "https://platform.opentargets.org/evidence/ENSG00000133703/MONDO_0018997"
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.89275320519801,
          "disease_id": "EFO_0003060",
          "evidence_id": "opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8091773506600335,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:50:23.311507Z"
          },
          "raw_value": 0.8091773506600335,
          "retrieved_at": "2026-04-21T15:50:23.311516Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and non-small cell lung carcinoma is 0.809.",
          "support": {
            "disease_name": "non-small cell lung carcinoma",
            "evidence_count": 1815,
            "requested_disease": null,
            "url": "https://platform.opentargets.org/evidence/ENSG00000133703/EFO_0003060"
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8883445975496039,
          "disease_id": "MONDO_0015280",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.7944819918320131,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-21T15:50:23.311528Z"
          },
          "raw_value": 0.7944819918320131,
          "retrieved_at": "2026-04-21T15:50:23.311536Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and cardiofaciocutaneous syndrome is 0.794.",
          "support": {
            "disease_name": "cardiofaciocutaneous syndrome",
            "evidence_count": 1815,
            "requested_disease": null,
            "url": "https://platform.opentargets.org/evidence/ENSG00000133703/MONDO_0015280"
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": null,
          "evidence_id": "literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
          "evidence_type": "literature_article",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.9,
          "provenance": {
            "endpoint": "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
            "provider": "Europe PMC",
            "query": {
              "disease_id": null,
              "pmid": "22810696",
              "query": "\"KRAS\""
            },
            "retrieved_at": "2026-04-21T15:50:27.149908Z"
          },
          "raw_value": 6756.0,
          "retrieved_at": "2026-04-21T15:50:27.150246Z",
          "source": "literature",
          "summary": "Europe PMC article rank 1/2 for KRAS: Comprehensive molecular characterization of human colon and rectal cancer. (PMID=22810696, citations=6756).",
          "support": {
            "article_count_returned": 2,
            "cited_by_count": 6756,
            "eligible_hit_count": 2,
            "fetch_page_size": 25,
            "gene_in_abstract": true,
            "gene_in_title": false,
            "journal": null,
            "original_rank_by_cited_sort": 1,
            "pmid": "22810696",
            "pub_year": "2012",
            "query": "\"KRAS\"",
            "rank": 1,
            "title": "Comprehensive molecular characterization of human colon and rectal cancer.",
            "total_hit_count": 124284,
            "url": "https://europepmc.org/article/MED/22810696"
          },
          "target_id": "KRAS:PMID:22810696",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8,
          "disease_id": null,
          "evidence_id": "literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
          "evidence_type": "literature_article",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8500000000000001,
          "provenance": {
            "endpoint": "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
            "provider": "Europe PMC",
            "query": {
              "disease_id": null,
              "pmid": "23636398",
              "query": "\"KRAS\""
            },
            "retrieved_at": "2026-04-21T15:50:27.150282Z"
          },
          "raw_value": 4198.0,
          "retrieved_at": "2026-04-21T15:50:27.150290Z",
          "source": "literature",
          "summary": "Europe PMC article rank 2/2 for KRAS: Integrated genomic characterization of endometrial carcinoma. (PMID=23636398, citations=4198).",
          "support": {
            "article_count_returned": 2,
            "cited_by_count": 4198,
            "eligible_hit_count": 2,
            "fetch_page_size": 25,
            "gene_in_abstract": true,
            "gene_in_title": false,
            "journal": null,
            "original_rank_by_cited_sort": 2,
            "pmid": "23636398",
            "pub_year": "2013",
            "query": "\"KRAS\"",
            "rank": 2,
            "title": "Integrated genomic characterization of endometrial carcinoma.",
            "total_hit_count": 124284,
            "url": "https://europepmc.org/article/MED/23636398"
          },
          "target_id": "KRAS:PMID:23636398",
          "target_symbol": "KRAS"
        }
      ]
    },
    "evidence_graph": {
      "artifact_path": "/data/artifacts/graphs/run-cf3e06c2c40b.evidence_graph.json",
      "edges": [
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80",
          "target_id": "source:depmap"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828",
          "target_id": "source:depmap"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a",
          "target_id": "source:depmap"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4",
          "target_id": "source:depmap"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:depmap:KRAS:NA:genetic_dependency:93ea48efaf",
          "target_id": "source:depmap"
        },
        {
          "attributes": {},
          "edge_type": "evidence_publication",
          "source_id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
          "target_id": "publication:pmid:22810696"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
          "target_id": "source:literature"
        },
        {
          "attributes": {},
          "edge_type": "evidence_publication",
          "source_id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
          "target_id": "publication:pmid:23636398"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
          "target_id": "source:literature"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a",
          "target_id": "source:opentargets"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc",
          "target_id": "source:opentargets"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590",
          "target_id": "source:opentargets"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e",
          "target_id": "source:opentargets"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f",
          "target_id": "source:opentargets"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c",
          "target_id": "source:pharos"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9",
          "target_id": "source:pharos"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342",
          "target_id": "source:pharos"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05",
          "target_id": "source:pharos"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277",
          "target_id": "source:pharos"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:EFO_0003060"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO:0001056"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO:0011908"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO:0015280"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO:0018874"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO:0018997"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO_0012371"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO_0014112"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO_0015280"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO_0018997"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:depmap:KRAS:NA:genetic_dependency:93ea48efaf"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277"
        }
      ],
      "generated_at": "2026-04-21T15:50:27.535268Z",
      "graph_format": "json",
      "nodes": [
        {
          "attributes": {},
          "id": "disease:EFO_0003060",
          "label": "EFO_0003060",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO:0001056",
          "label": "MONDO:0001056",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO:0011908",
          "label": "MONDO:0011908",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO:0015280",
          "label": "MONDO:0015280",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO:0018874",
          "label": "MONDO:0018874",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO:0018997",
          "label": "MONDO:0018997",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO_0012371",
          "label": "MONDO_0012371",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO_0014112",
          "label": "MONDO_0014112",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO_0015280",
          "label": "MONDO_0015280",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO_0018997",
          "label": "MONDO_0018997",
          "node_type": "disease"
        },
        {
          "attributes": {
            "confidence": 0.95,
            "conflict_severity": null,
            "evidence_id": "depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80",
            "normalized_score": 1.0,
            "source": "depmap"
          },
          "id": "evidence:depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:1c89b66a80",
          "label": "genetic_dependency_cell_line",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.95,
            "conflict_severity": null,
            "evidence_id": "depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828",
            "normalized_score": 1.0,
            "source": "depmap"
          },
          "id": "evidence:depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:0072834828",
          "label": "genetic_dependency_cell_line",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.95,
            "conflict_severity": null,
            "evidence_id": "depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a",
            "normalized_score": 1.0,
            "source": "depmap"
          },
          "id": "evidence:depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:bcb453813a",
          "label": "genetic_dependency_cell_line",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.95,
            "conflict_severity": null,
            "evidence_id": "depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4",
            "normalized_score": 1.0,
            "source": "depmap"
          },
          "id": "evidence:depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:ae43597af4",
          "label": "genetic_dependency_cell_line",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.95,
            "conflict_severity": null,
            "evidence_id": "depmap:KRAS:NA:genetic_dependency:93ea48efaf",
            "normalized_score": 0.3672748093729284,
            "source": "depmap"
          },
          "id": "evidence:depmap:KRAS:NA:genetic_dependency:93ea48efaf",
          "label": "genetic_dependency",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
            "normalized_score": 0.9,
            "source": "literature"
          },
          "id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:f9aa672a33",
          "label": "literature_article",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.8,
            "conflict_severity": null,
            "evidence_id": "literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
            "normalized_score": 0.8500000000000001,
            "source": "literature"
          },
          "id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:e7f4ff9a4c",
          "label": "literature_article",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.89275320519801,
            "conflict_severity": null,
            "evidence_id": "opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a",
            "normalized_score": 0.8091773506600335,
            "source": "opentargets"
          },
          "id": "evidence:opentargets:ENSG00000133703:EFO_0003060:disease_association:65cf93148a",
          "label": "disease_association",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.8979109108194049,
            "conflict_severity": null,
            "evidence_id": "opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc",
            "normalized_score": 0.8263697027313498,
            "source": "opentargets"
          },
          "id": "evidence:opentargets:ENSG00000133703:MONDO_0012371:disease_association:c01940c2dc",
          "label": "disease_association",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.8943234896706429,
            "conflict_severity": null,
            "evidence_id": "opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590",
            "normalized_score": 0.8144116322354762,
            "source": "opentargets"
          },
          "id": "evidence:opentargets:ENSG00000133703:MONDO_0014112:disease_association:f4a717a590",
          "label": "disease_association",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.8883445975496039,
            "conflict_severity": null,
            "evidence_id": "opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e",
            "normalized_score": 0.7944819918320131,
            "source": "opentargets"
          },
          "id": "evidence:opentargets:ENSG00000133703:MONDO_0015280:disease_association:2afdeaff7e",
          "label": "disease_association",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.8939379521341774,
            "conflict_severity": null,
            "evidence_id": "opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f",
            "normalized_score": 0.8131265071139245,
            "source": "opentargets"
          },
          "id": "evidence:opentargets:ENSG00000133703:MONDO_0018997:disease_association:8c212afe7f",
          "label": "disease_association",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c",
            "normalized_score": 1.0,
            "source": "pharos"
          },
          "id": "evidence:pharos:KRAS:MONDO:0001056:target_annotation:d41099d16c",
          "label": "target_annotation",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9",
            "normalized_score": 1.0,
            "source": "pharos"
          },
          "id": "evidence:pharos:KRAS:MONDO:0011908:target_annotation:0a341fffe9",
          "label": "target_annotation",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342",
            "normalized_score": 1.0,
            "source": "pharos"
          },
          "id": "evidence:pharos:KRAS:MONDO:0015280:target_annotation:8e10c06342",
          "label": "target_annotation",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05",
            "normalized_score": 1.0,
            "source": "pharos"
          },
          "id": "evidence:pharos:KRAS:MONDO:0018874:target_annotation:b04cd23e05",
          "label": "target_annotation",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277",
            "normalized_score": 1.0,
            "source": "pharos"
          },
          "id": "evidence:pharos:KRAS:MONDO:0018997:target_annotation:d5130eb277",
          "label": "target_annotation",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "identifier_type": "pmid"
          },
          "id": "publication:pmid:22810696",
          "label": "22810696",
          "node_type": "publication"
        },
        {
          "attributes": {
            "identifier_type": "pmid"
          },
          "id": "publication:pmid:23636398",
          "label": "23636398",
          "node_type": "publication"
        },
        {
          "attributes": {
            "provider": "DepMap (Broad Institute)"
          },
          "id": "source:depmap",
          "label": "depmap",
          "node_type": "source"
        },
        {
          "attributes": {
            "provider": "Europe PMC"
          },
          "id": "source:literature",
          "label": "literature",
          "node_type": "source"
        },
        {
          "attributes": {
            "provider": "Open Targets"
          },
          "id": "source:opentargets",
          "label": "opentargets",
          "node_type": "source"
        },
        {
          "attributes": {
            "provider": "PHAROS"
          },
          "id": "source:pharos",
          "label": "pharos",
          "node_type": "source"
        },
        {
          "attributes": {
            "target_id": "KRAS"
          },
          "id": "target:KRAS",
          "label": "KRAS",
          "node_type": "target"
        }
      ]
    },
    "judge_score": {
      "faithfulness_score": 4,
      "feedback": [
        "Multiple unreferenced biological claims (\"curated biological context\") are made about KRAS function (small GTPase switching GDP/GTP, MAPK signaling role), druggability challenges, and comparisons to EGFR; none of these are present in the provided JSON evidence.",
        "The statement that TDL=Tclin \"biologically means FDA-approved drugs exist\" is an interpretation not supported by the provided PHAROS JSON (which only states TDL=Tclin and ligand_total=223) and thus constitutes a hallucination.",
        "Use of the term \"CERES-like gene effect\" is not supported by the DepMap JSON (which lists CRISPRGeneEffect); avoid implying a specific scoring model not present in the evidence.",
        "A non-evidence Open Targets URL is cited (https://platform.opentargets.org/target/ENSG00000133703); citations should use URLs present in the provided evidence JSON (the evidence URLs are the /evidence/... links).",
        "The report introduces fabricated sections/tables not present in the JSON: A0 Scoring Summary, A0.1 Source Contribution Weights, and A1 Source Coverage (with fields like duration_ms, weights), which are unsupported by the evidence.",
        "Several claims are attributed to \"curated biological context\" without any JSON-backed source or hyperlink, violating the requirement that every biological claim be traceable to the provided evidence.",
        "Formatting deviates from the required strict 9 sections by adding an \"Evidence Contribution Dashboard\" and an extensive Appendix; while appendices can be helpful, strict compliance was requested.",
        "Inline citation consistency: some narrative sentences include sources labeled only as \"curated biological context\" without markdown hyperlinks, and one Open Targets link does not match any URL in the evidence JSON.",
        "Minor misattribution: AML and gastric cancer are discussed under \"curated context,\" but in the provided evidence they originate from PHAROS target annotations; cite PHAROS explicitly for those associations."
      ],
      "formatting_score": 6,
      "model_used": "gpt-5",
      "overall_score": 55,
      "passed": false
    }
  }
];
export const savedComparisons: any[] = [];
