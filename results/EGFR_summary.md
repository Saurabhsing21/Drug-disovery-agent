# Target Evidence Report: EGFR

## Executive Answer
Decision: **Strongly Supported** (overall_support_score=0.919, completeness=1.000). Disease context: **unspecified**.

## Evidence Summary
| # | category | strength | score | top_evidence_id | top_finding | main_limitation |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | annotation | strong | 0.940 | pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3 | PHAROS annotations for EGFR relating to non-small cell lung carcinoma (TDL=Tclin, ligands=2445). | n/a |
| 2 | dependency | strong | 0.978 | depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be | Cell-line dependency for EGFR in ACH-000587: gene_effect=-2.849 (rank 1). | n/a |
| 3 | disease_association | strong | 0.832 | opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf | Open Targets association score for EGFR and non-small cell lung carcinoma is 0.852. | disease context unspecified; association may be non-specific |
| 4 | literature | strong | 0.940 | literature:EGFR:PMID:15118125:NA:literature_article:87cf2def7c | Europe PMC article rank 1/14 for EGFR: EGFR mutations in lung cancer: correlation with clinical response to gefitinib therapy. (PMID=151181… | literature is supportive and can be noisy |

## Top Evidence
| # | category | evidence_id | source | score | confidence | summary |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | annotation | pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3 | pharos | 1.000 | 0.850 | PHAROS annotations for EGFR relating to non-small cell lung carcinoma (TDL=Tclin, ligands=2445). |
| 2 | annotation | pharos:EGFR:MONDO:0018177:target_annotation:4dadc00624 | pharos | 1.000 | 0.850 | PHAROS annotations for EGFR relating to glioblastoma (TDL=Tclin, ligands=2445). |
| 3 | annotation | pharos:EGFR:MONDO:0014481:target_annotation:59e4eadfa2 | pharos | 1.000 | 0.850 | PHAROS annotations for EGFR relating to inflammatory skin and bowel disease, neonatal, 2 (TDL=Tclin, ligands=2445). |
| 4 | dependency | depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be | depmap | 1.000 | 0.950 | Cell-line dependency for EGFR in ACH-000587: gene_effect=-2.849 (rank 1). |
| 5 | dependency | depmap:EGFR:ACH-000472:NA:genetic_dependency_cell_line:5e9192f441 | depmap | 1.000 | 0.943 | Cell-line dependency for EGFR in ACH-000472: gene_effect=-2.165 (rank 2). |
| 6 | dependency | depmap:EGFR:ACH-002239:NA:genetic_dependency_cell_line:12a9309a91 | depmap | 1.000 | 0.939 | Cell-line dependency for EGFR in ACH-002239: gene_effect=-2.074 (rank 3). |
| 7 | disease_association | opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf | opentargets | 0.852 | 0.906 | Open Targets association score for EGFR and non-small cell lung carcinoma is 0.852. |
| 8 | disease_association | opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9 | opentargets | 0.766 | 0.880 | Open Targets association score for EGFR and lung cancer is 0.766. |
| 9 | disease_association | opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609 | opentargets | 0.764 | 0.879 | Open Targets association score for EGFR and lung adenocarcinoma is 0.764. |
| 10 | literature | literature:EGFR:PMID:15118125:NA:literature_article:87cf2def7c | literature | 1.000 | 0.850 | Europe PMC article rank 1/14 for EGFR: EGFR mutations in lung cancer: correlation with clinical response to gefitinib t… |
| 11 | literature | literature:EGFR:PMID:20129251:NA:literature_article:ed18691ba6 | literature | 1.000 | 0.850 | Europe PMC article rank 2/14 for EGFR: Integrated genomic analysis identifies clinically relevant subtypes of glioblast… |
| 12 | literature | literature:EGFR:PMID:22285168:NA:literature_article:5e1047a35e | literature | 1.000 | 0.850 | Europe PMC article rank 3/14 for EGFR: Erlotinib versus standard chemotherapy as first-line treatment for European pati… |

## Source Coverage
| # | source | status | records | duration_ms | error |
| --- | --- | --- | --- | --- | --- |
| 1 | depmap | success | 15 | 10791 |  |
| 2 | pharos | success | 10 | 2975 |  |
| 3 | opentargets | success | 15 | 2450 |  |
| 4 | literature | success | 14 | 6237 |  |

## Conflicts & Caveats
- No cross-source conflicts detected.

## Recommended Next Steps
- No specific next steps generated.

## Machine Appendix
| # | evidence_id | source | type | normalized_score | confidence | summary |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | depmap:EGFR:NA:genetic_dependency:1f15b784e2 | depmap | genetic_dependency | 0.122 | 0.854 | DepMap CRISPR gene effect for EGFR: -0.243 avg across 1169 cell lines (210 show strong dependency ≤ −0.5). |
| 2 | depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for EGFR in ACH-000587: gene_effect=-2.849 (rank 1). |
| 3 | depmap:EGFR:ACH-000472:NA:genetic_dependency_cell_line:5e9192f441 | depmap | genetic_dependency_cell_line | 1.000 | 0.943 | Cell-line dependency for EGFR in ACH-000472: gene_effect=-2.165 (rank 2). |
| 4 | depmap:EGFR:ACH-002239:NA:genetic_dependency_cell_line:12a9309a91 | depmap | genetic_dependency_cell_line | 1.000 | 0.939 | Cell-line dependency for EGFR in ACH-002239: gene_effect=-2.074 (rank 3). |
| 5 | depmap:EGFR:ACH-002156:NA:genetic_dependency_cell_line:f0f9f58c28 | depmap | genetic_dependency_cell_line | 1.000 | 0.937 | Cell-line dependency for EGFR in ACH-002156: gene_effect=-2.034 (rank 4). |
| 6 | depmap:EGFR:ACH-000548:NA:genetic_dependency_cell_line:1854a320df | depmap | genetic_dependency_cell_line | 1.000 | 0.937 | Cell-line dependency for EGFR in ACH-000548: gene_effect=-2.033 (rank 5). |
| 7 | depmap:EGFR:ACH-000911:NA:genetic_dependency_cell_line:3ac66a8df6 | depmap | genetic_dependency_cell_line | 1.000 | 0.936 | Cell-line dependency for EGFR in ACH-000911: gene_effect=-2.029 (rank 6). |
| 8 | depmap:EGFR:ACH-000936:NA:genetic_dependency_cell_line:44b82b2351 | depmap | genetic_dependency_cell_line | 0.910 | 0.926 | Cell-line dependency for EGFR in ACH-000936: gene_effect=-1.819 (rank 7). |
| 9 | depmap:EGFR:ACH-002029:NA:genetic_dependency_cell_line:60179bf4d1 | depmap | genetic_dependency_cell_line | 0.908 | 0.926 | Cell-line dependency for EGFR in ACH-002029: gene_effect=-1.817 (rank 8). |
| 10 | depmap:EGFR:ACH-000181:NA:genetic_dependency_cell_line:933e26eb71 | depmap | genetic_dependency_cell_line | 0.903 | 0.925 | Cell-line dependency for EGFR in ACH-000181: gene_effect=-1.806 (rank 9). |
| 11 | depmap:EGFR:ACH-001836:NA:genetic_dependency_cell_line:0ce840bedf | depmap | genetic_dependency_cell_line | 0.901 | 0.925 | Cell-line dependency for EGFR in ACH-001836: gene_effect=-1.802 (rank 10). |
| 12 | depmap:EGFR:ACH-000735:NA:genetic_dependency_cell_line:ad026ad5d6 | depmap | genetic_dependency_cell_line | 0.882 | 0.923 | Cell-line dependency for EGFR in ACH-000735: gene_effect=-1.763 (rank 11). |
| 13 | depmap:EGFR:ACH-000448:NA:genetic_dependency_cell_line:bf00f9a6d8 | depmap | genetic_dependency_cell_line | 0.844 | 0.919 | Cell-line dependency for EGFR in ACH-000448: gene_effect=-1.688 (rank 12). |
| 14 | depmap:EGFR:ACH-000546:NA:genetic_dependency_cell_line:c31da44068 | depmap | genetic_dependency_cell_line | 0.842 | 0.919 | Cell-line dependency for EGFR in ACH-000546: gene_effect=-1.684 (rank 13). |
| 15 | depmap:EGFR:ACH-002251:NA:genetic_dependency_cell_line:b27814f6f8 | depmap | genetic_dependency_cell_line | 0.835 | 0.918 | Cell-line dependency for EGFR in ACH-002251: gene_effect=-1.670 (rank 14). |
| 16 | literature:EGFR:PMID:15118125:NA:literature_article:87cf2def7c | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 1/14 for EGFR: EGFR mutations in lung cancer: correlation with clinical response to gefitinib therapy. (PMID=15118125, citations=7133). |
| 17 | literature:EGFR:PMID:20129251:NA:literature_article:ed18691ba6 | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 2/14 for EGFR: Integrated genomic analysis identifies clinically relevant subtypes of glioblastoma characterized by abnormalities in PDGFRA, IDH1, EGFR, and NF1. (PMID=20129251, citations=5717). |
| 18 | literature:EGFR:PMID:22285168:NA:literature_article:5e1047a35e | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 3/14 for EGFR: Erlotinib versus standard chemotherapy as first-line treatment for European patients with advanced EGFR mutation-positive non-small-cell lung cancer (EURTAC): a multicentre, open-label, randomised phase 3 trial. (PMID=22285168, citations=4247). |
| 19 | literature:EGFR:PMID:20573926:NA:literature_article:f7ecb81d5a | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 4/14 for EGFR: Gefitinib or chemotherapy for non-small-cell lung cancer with mutated EGFR. (PMID=20573926, citations=4205). |
| 20 | literature:EGFR:PMID:29151359:NA:literature_article:d222b522b2 | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 5/14 for EGFR: Osimertinib in Untreated EGFR-Mutated Advanced Non-Small-Cell Lung Cancer. (PMID=29151359, citations=3934). |
| 21 | literature:EGFR:PMID:23000897:NA:literature_article:48efb72cb8 | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 6/14 for EGFR: Comprehensive molecular portraits of human breast tumours. (PMID=23000897, citations=9520). |
| 22 | literature:EGFR:PMID:15118073:NA:literature_article:818663bc35 | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 7/14 for EGFR: Activating mutations in the epidermal growth factor receptor underlying responsiveness of non-small-cell lung cancer to gefitinib. (PMID=15118073, citations=8308). |
| 23 | literature:EGFR:PMID:19692680:NA:literature_article:576cefbd6c | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 8/14 for EGFR: Gefitinib or carboplatin-paclitaxel in pulmonary adenocarcinoma. (PMID=19692680, citations=6284). |
| 24 | literature:EGFR:PMID:19339088:NA:literature_article:07026bb377 | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 9/14 for EGFR: Revised equations for estimated GFR from serum creatinine in Japan. (PMID=19339088, citations=5072). |
| 25 | literature:EGFR:PMID:29658856:NA:literature_article:43ad23becc | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 10/14 for EGFR: Pembrolizumab plus Chemotherapy in Metastatic Non-Small-Cell Lung Cancer. (PMID=29658856, citations=4878). |
| 26 | literature:EGFR:PMID:25079552:NA:literature_article:4b6d0a3a15 | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 11/14 for EGFR: Comprehensive molecular profiling of lung adenocarcinoma. (PMID=25079552, citations=4467). |
| 27 | literature:EGFR:PMID:24120142:NA:literature_article:2200cd6bbd | literature | literature_article | 0.950 | 0.850 | Europe PMC article rank 12/14 for EGFR: The somatic genomic landscape of glioblastoma. (PMID=24120142, citations=3918). |
| 28 | literature:EGFR:PMID:17463250:NA:literature_article:db7096bb93 | literature | literature_article | 0.900 | 0.850 | Europe PMC article rank 13/14 for EGFR: MET amplification leads to gefitinib resistance in lung cancer by activating ERBB3 signaling. (PMID=17463250, citations=3563). |
| 29 | literature:EGFR:PMID:21252716:NA:literature_article:861900a55b | literature | literature_article | 0.850 | 0.800 | Europe PMC article rank 14/14 for EGFR: International association for the study of lung cancer/american thoracic society/european respiratory society international multidisciplinary classification of lung adenocarcinoma. (PMID=21252716, citations=3507). |
| 30 | opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf | opentargets | disease_association | 0.852 | 0.906 | Open Targets association score for EGFR and non-small cell lung carcinoma is 0.852. |
| 31 | opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9 | opentargets | disease_association | 0.766 | 0.880 | Open Targets association score for EGFR and lung cancer is 0.766. |
| 32 | opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609 | opentargets | disease_association | 0.764 | 0.879 | Open Targets association score for EGFR and lung adenocarcinoma is 0.764. |
| 33 | opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d | opentargets | disease_association | 0.746 | 0.874 | Open Targets association score for EGFR and cancer is 0.746. |
| 34 | opentargets:ENSG00000146648:MONDO_0007254:disease_association:ec4efa69be | opentargets | disease_association | 0.678 | 0.853 | Open Targets association score for EGFR and breast cancer is 0.678. |
| 35 | opentargets:ENSG00000146648:EFO_0000365:disease_association:4f03da1e7a | opentargets | disease_association | 0.670 | 0.851 | Open Targets association score for EGFR and colorectal adenocarcinoma is 0.670. |
| 36 | opentargets:ENSG00000146648:EFO_0000181:disease_association:54b09374b3 | opentargets | disease_association | 0.669 | 0.851 | Open Targets association score for EGFR and head and neck squamous cell carcinoma is 0.669. |
| 37 | opentargets:ENSG00000146648:EFO_0006859:disease_association:7edf45d781 | opentargets | disease_association | 0.655 | 0.846 | Open Targets association score for EGFR and head and neck malignant neoplasia is 0.655. |
| 38 | opentargets:ENSG00000146648:EFO_0000616:disease_association:79ec381c46 | opentargets | disease_association | 0.655 | 0.846 | Open Targets association score for EGFR and neoplasm is 0.655. |
| 39 | opentargets:ENSG00000146648:EFO_0000519:disease_association:98f5488066 | opentargets | disease_association | 0.649 | 0.845 | Open Targets association score for EGFR and glioblastoma multiforme is 0.649. |
| 40 | opentargets:ENSG00000146648:MONDO_0014481:disease_association:ba025a1c16 | opentargets | disease_association | 0.639 | 0.842 | Open Targets association score for EGFR and inflammatory skin and bowel disease, neonatal, 2 is 0.639. |
| 41 | opentargets:ENSG00000146648:MONDO_0005575:disease_association:7caf976256 | opentargets | disease_association | 0.604 | 0.831 | Open Targets association score for EGFR and colorectal cancer is 0.604. |
| 42 | opentargets:ENSG00000146648:MONDO_0004986:disease_association:613f346071 | opentargets | disease_association | 0.593 | 0.828 | Open Targets association score for EGFR and urinary bladder carcinoma is 0.593. |
| 43 | opentargets:ENSG00000146648:MONDO_0001187:disease_association:e8dd203429 | opentargets | disease_association | 0.581 | 0.824 | Open Targets association score for EGFR and urinary bladder cancer is 0.581. |
| 44 | opentargets:ENSG00000146648:EFO_0003869:disease_association:0b9e0553ed | opentargets | disease_association | 0.578 | 0.823 | Open Targets association score for EGFR and breast neoplasm is 0.578. |
| 45 | pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3 | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for EGFR relating to non-small cell lung carcinoma (TDL=Tclin, ligands=2445). |
| 46 | pharos:EGFR:MONDO:0018177:target_annotation:4dadc00624 | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for EGFR relating to glioblastoma (TDL=Tclin, ligands=2445). |
| 47 | pharos:EGFR:MONDO:0014481:target_annotation:59e4eadfa2 | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for EGFR relating to inflammatory skin and bowel disease, neonatal, 2 (TDL=Tclin, ligands=2445). |
| 48 | pharos:EGFR:MONDO:0016682:target_annotation:e8ed166b31 | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for EGFR relating to giant cell glioblastoma (TDL=Tclin, ligands=2445). |
| 49 | pharos:EGFR:MONDO:0009807:target_annotation:160228d6c2 | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for EGFR relating to osteosarcoma (TDL=Tclin, ligands=2445). |
| 50 | pharos:EGFR:MONDO:0008903:target_annotation:a991326eba | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for EGFR relating to lung cancer (TDL=Tclin, ligands=2445). |
| 51 | pharos:EGFR:MONDO:0019087:target_annotation:a5df0741e1 | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for EGFR relating to cholangiocarcinoma (TDL=Tclin, ligands=2445). |
| 52 | pharos:EGFR:MONDO:0005096:target_annotation:4cc5f9b368 | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for EGFR relating to squamous cell carcinoma (TDL=Tclin, ligands=2445). |
| 53 | pharos:EGFR:MONDO:0009889:target_annotation:b6ffe6299d | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for EGFR relating to autosomal recessive polycystic kidney disease (TDL=Tclin, ligands=2445). |
| 54 | pharos:EGFR:MONDO:0005021:target_annotation:65c4faab15 | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for EGFR relating to dilated cardiomyopathy (TDL=Tclin, ligands=2445). |


## Evidence Contribution Dashboard
[[EVIDENCE_DASHBOARD]]