# Target Evidence Report: BRAF

## Executive Answer
Decision: **Strongly Supported** (overall_support_score=0.929, completeness=1.000). Disease context: **unspecified**.

## Evidence Summary
| # | category | strength | score | top_evidence_id | top_finding | main_limitation |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | annotation | strong | 0.940 | pharos:BRAF:MONDO:0015280:target_annotation:8e61272246 | PHAROS annotations for BRAF relating to cardiofaciocutaneous syndrome (TDL=Tclin, ligands=2031). | n/a |
| 2 | dependency | strong | 0.980 | depmap:BRAF:ACH-000614:NA:genetic_dependency_cell_line:004795ac54 | Cell-line dependency for BRAF in ACH-000614: gene_effect=-2.673 (rank 1). | n/a |
| 3 | disease_association | strong | 0.863 | opentargets:ENSG00000157764:MONDO_0015280:disease_association:cd0a4a38f6 | Open Targets association score for BRAF and cardiofaciocutaneous syndrome is 0.876. | disease context unspecified; association may be non-specific |
| 4 | literature | strong | 0.940 | literature:BRAF:PMID:12068308:NA:literature_article:7c4597eda6 | Europe PMC article rank 1/13 for BRAF: Mutations of the BRAF gene in human cancer. (PMID=12068308, citations=7469). | literature is supportive and can be noisy |

## Top Evidence
| # | category | evidence_id | source | score | confidence | summary |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | annotation | pharos:BRAF:MONDO:0015280:target_annotation:8e61272246 | pharos | 1.000 | 0.850 | PHAROS annotations for BRAF relating to cardiofaciocutaneous syndrome (TDL=Tclin, ligands=2031). |
| 2 | annotation | pharos:BRAF:MONDO:0018997:target_annotation:e9e8dd9e79 | pharos | 1.000 | 0.850 | PHAROS annotations for BRAF relating to Noonan syndrome (TDL=Tclin, ligands=2031). |
| 3 | annotation | pharos:BRAF:MONDO:0007893:target_annotation:f37d65134b | pharos | 1.000 | 0.850 | PHAROS annotations for BRAF relating to Noonan syndrome with multiple lentigines (TDL=Tclin, ligands=2031). |
| 4 | dependency | depmap:BRAF:ACH-000614:NA:genetic_dependency_cell_line:004795ac54 | depmap | 1.000 | 0.950 | Cell-line dependency for BRAF in ACH-000614: gene_effect=-2.673 (rank 1). |
| 5 | dependency | depmap:BRAF:ACH-000441:NA:genetic_dependency_cell_line:642a4038b6 | depmap | 1.000 | 0.950 | Cell-line dependency for BRAF in ACH-000441: gene_effect=-2.518 (rank 2). |
| 6 | dependency | depmap:BRAF:ACH-000477:NA:genetic_dependency_cell_line:7c5e57f05d | depmap | 1.000 | 0.950 | Cell-line dependency for BRAF in ACH-000477: gene_effect=-2.505 (rank 3). |
| 7 | disease_association | opentargets:ENSG00000157764:MONDO_0015280:disease_association:cd0a4a38f6 | opentargets | 0.876 | 0.913 | Open Targets association score for BRAF and cardiofaciocutaneous syndrome is 0.876. |
| 8 | disease_association | opentargets:ENSG00000157764:EFO_0000756:disease_association:da047e4486 | opentargets | 0.819 | 0.896 | Open Targets association score for BRAF and melanoma is 0.819. |
| 9 | disease_association | opentargets:ENSG00000157764:MONDO_0018997:disease_association:bca0b635d2 | opentargets | 0.818 | 0.895 | Open Targets association score for BRAF and Noonan syndrome is 0.818. |
| 10 | literature | literature:BRAF:PMID:12068308:NA:literature_article:7c4597eda6 | literature | 1.000 | 0.850 | Europe PMC article rank 1/13 for BRAF: Mutations of the BRAF gene in human cancer. (PMID=12068308, citations=7469). |
| 11 | literature | literature:BRAF:PMID:21639808:NA:literature_article:730a592eaf | literature | 1.000 | 0.850 | Europe PMC article rank 2/13 for BRAF: Improved survival with vemurafenib in melanoma with BRAF V600E mutation. (PMID=2… |
| 12 | literature | literature:BRAF:PMID:25399552:NA:literature_article:c827601a62 | literature | 1.000 | 0.850 | Europe PMC article rank 3/13 for BRAF: Nivolumab in previously untreated melanoma without BRAF mutation. (PMID=25399552… |

## Source Coverage
| # | source | status | records | duration_ms | error |
| --- | --- | --- | --- | --- | --- |
| 1 | depmap | success | 15 | 13453 |  |
| 2 | pharos | success | 10 | 1240 |  |
| 3 | opentargets | success | 15 | 1204 |  |
| 4 | literature | success | 13 | 2648 |  |

## Conflicts & Caveats
- No cross-source conflicts detected.

## Recommended Next Steps
- No specific next steps generated.

## Machine Appendix
| # | evidence_id | source | type | normalized_score | confidence | summary |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | depmap:BRAF:NA:genetic_dependency:dfde55b4a9 | depmap | genetic_dependency | 0.087 | 0.825 | DepMap CRISPR gene effect for BRAF: -0.174 avg across 1169 cell lines (96 show strong dependency ≤ −0.5). |
| 2 | depmap:BRAF:ACH-000614:NA:genetic_dependency_cell_line:004795ac54 | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for BRAF in ACH-000614: gene_effect=-2.673 (rank 1). |
| 3 | depmap:BRAF:ACH-000441:NA:genetic_dependency_cell_line:642a4038b6 | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for BRAF in ACH-000441: gene_effect=-2.518 (rank 2). |
| 4 | depmap:BRAF:ACH-000477:NA:genetic_dependency_cell_line:7c5e57f05d | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for BRAF in ACH-000477: gene_effect=-2.505 (rank 3). |
| 5 | depmap:BRAF:ACH-000425:NA:genetic_dependency_cell_line:7bdc923c49 | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for BRAF in ACH-000425: gene_effect=-2.421 (rank 4). |
| 6 | depmap:BRAF:ACH-000765:NA:genetic_dependency_cell_line:8553247b32 | depmap | genetic_dependency_cell_line | 1.000 | 0.940 | Cell-line dependency for BRAF in ACH-000765: gene_effect=-2.094 (rank 5). |
| 7 | depmap:BRAF:ACH-001838:NA:genetic_dependency_cell_line:6ca07dc2af | depmap | genetic_dependency_cell_line | 1.000 | 0.939 | Cell-line dependency for BRAF in ACH-001838: gene_effect=-2.077 (rank 6). |
| 8 | depmap:BRAF:ACH-000014:NA:genetic_dependency_cell_line:3030328740 | depmap | genetic_dependency_cell_line | 0.970 | 0.932 | Cell-line dependency for BRAF in ACH-000014: gene_effect=-1.940 (rank 7). |
| 9 | depmap:BRAF:ACH-001982:NA:genetic_dependency_cell_line:8e537ff1fd | depmap | genetic_dependency_cell_line | 0.969 | 0.932 | Cell-line dependency for BRAF in ACH-001982: gene_effect=-1.938 (rank 8). |
| 10 | depmap:BRAF:ACH-001239:NA:genetic_dependency_cell_line:d51e44453a | depmap | genetic_dependency_cell_line | 0.952 | 0.930 | Cell-line dependency for BRAF in ACH-001239: gene_effect=-1.904 (rank 9). |
| 11 | depmap:BRAF:ACH-000676:NA:genetic_dependency_cell_line:1a6ce7e5f7 | depmap | genetic_dependency_cell_line | 0.943 | 0.929 | Cell-line dependency for BRAF in ACH-000676: gene_effect=-1.887 (rank 10). |
| 12 | depmap:BRAF:ACH-001522:NA:genetic_dependency_cell_line:b0bc80beda | depmap | genetic_dependency_cell_line | 0.932 | 0.928 | Cell-line dependency for BRAF in ACH-001522: gene_effect=-1.865 (rank 11). |
| 13 | depmap:BRAF:ACH-001975:NA:genetic_dependency_cell_line:10e45cec2b | depmap | genetic_dependency_cell_line | 0.932 | 0.928 | Cell-line dependency for BRAF in ACH-001975: gene_effect=-1.864 (rank 12). |
| 14 | depmap:BRAF:ACH-000827:NA:genetic_dependency_cell_line:8fd440b941 | depmap | genetic_dependency_cell_line | 0.914 | 0.926 | Cell-line dependency for BRAF in ACH-000827: gene_effect=-1.829 (rank 13). |
| 15 | depmap:BRAF:ACH-001970:NA:genetic_dependency_cell_line:6b39d9a5f6 | depmap | genetic_dependency_cell_line | 0.910 | 0.926 | Cell-line dependency for BRAF in ACH-001970: gene_effect=-1.819 (rank 14). |
| 16 | literature:BRAF:PMID:12068308:NA:literature_article:7c4597eda6 | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 1/13 for BRAF: Mutations of the BRAF gene in human cancer. (PMID=12068308, citations=7469). |
| 17 | literature:BRAF:PMID:21639808:NA:literature_article:730a592eaf | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 2/13 for BRAF: Improved survival with vemurafenib in melanoma with BRAF V600E mutation. (PMID=21639808, citations=5581). |
| 18 | literature:BRAF:PMID:25399552:NA:literature_article:c827601a62 | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 3/13 for BRAF: Nivolumab in previously untreated melanoma without BRAF mutation. (PMID=25399552, citations=4192). |
| 19 | literature:BRAF:PMID:20818844:NA:literature_article:225d0874bf | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 4/13 for BRAF: Inhibition of mutated, activated BRAF in metastatic melanoma. (PMID=20818844, citations=2616). |
| 20 | literature:BRAF:PMID:22735384:NA:literature_article:852c2d9b2b | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 5/13 for BRAF: Dabrafenib in BRAF-mutated metastatic melanoma: a multicentre, open-label, phase 3 randomised controlled trial. (PMID=22735384, citations=2177). |
| 21 | literature:BRAF:PMID:29628290:NA:literature_article:24b46a7d1d | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 6/13 for BRAF: The Immune Landscape of Cancer. (PMID=29628290, citations=4323). |
| 22 | literature:BRAF:PMID:15466206:NA:literature_article:e1adc0e86e | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 7/13 for BRAF: BAY 43-9006 exhibits broad spectrum oral antitumor activity and targets the RAF/MEK/ERK pathway and receptor tyrosine kinases involved in tumor progression and angiogenesis. (PMID=15466206, citations=3013). |
| 23 | literature:BRAF:PMID:28889792:NA:literature_article:be349b9e7a | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 8/13 for BRAF: Overall Survival with Combined Nivolumab and Ipilimumab in Advanced Melanoma. (PMID=28889792, citations=2729). |
| 24 | literature:BRAF:PMID:26000489:NA:literature_article:a9752ec4db | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 9/13 for BRAF: Integrative clinical genomics of advanced prostate cancer. (PMID=26000489, citations=2572). |
| 25 | literature:BRAF:PMID:26091043:NA:literature_article:dce3112430 | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 10/13 for BRAF: Genomic Classification of Cutaneous Melanoma. (PMID=26091043, citations=2407). |
| 26 | literature:BRAF:PMID:25476604:NA:literature_article:460a6335c6 | literature | literature_article | 0.950 | 0.850 | Europe PMC article rank 11/13 for BRAF: MAGeCK enables robust identification of essential  genes from genome-scale CRISPR/Cas9 knockout  screens. (PMID=25476604, citations=2246). |
| 27 | literature:BRAF:PMID:25494202:NA:literature_article:e2dde21657 | literature | literature_article | 0.900 | 0.850 | Europe PMC article rank 12/13 for BRAF: Genome-scale transcriptional activation by an engineered CRISPR-Cas9 complex. (PMID=25494202, citations=2198). |
| 28 | literature:BRAF:PMID:25417114:NA:literature_article:eb56f8eeff | literature | literature_article | 0.850 | 0.800 | Europe PMC article rank 13/13 for BRAF: Integrated genomic characterization of papillary thyroid carcinoma. (PMID=25417114, citations=2189). |
| 29 | opentargets:ENSG00000157764:MONDO_0015280:disease_association:cd0a4a38f6 | opentargets | disease_association | 0.876 | 0.913 | Open Targets association score for BRAF and cardiofaciocutaneous syndrome is 0.876. |
| 30 | opentargets:ENSG00000157764:EFO_0000756:disease_association:da047e4486 | opentargets | disease_association | 0.819 | 0.896 | Open Targets association score for BRAF and melanoma is 0.819. |
| 31 | opentargets:ENSG00000157764:MONDO_0018997:disease_association:bca0b635d2 | opentargets | disease_association | 0.818 | 0.895 | Open Targets association score for BRAF and Noonan syndrome is 0.818. |
| 32 | opentargets:ENSG00000157764:MONDO_0007265:disease_association:c1d38afae3 | opentargets | disease_association | 0.763 | 0.879 | Open Targets association score for BRAF and cardiofaciocutaneous syndrome 1 is 0.763. |
| 33 | opentargets:ENSG00000157764:MONDO_0013379:disease_association:502e928cf8 | opentargets | disease_association | 0.759 | 0.878 | Open Targets association score for BRAF and Noonan syndrome 7 is 0.759. |
| 34 | opentargets:ENSG00000157764:MONDO_0013380:disease_association:b589247e47 | opentargets | disease_association | 0.756 | 0.877 | Open Targets association score for BRAF and LEOPARD syndrome 3 is 0.756. |
| 35 | opentargets:ENSG00000157764:MONDO_0005575:disease_association:38100328f4 | opentargets | disease_association | 0.713 | 0.864 | Open Targets association score for BRAF and colorectal cancer is 0.713. |
| 36 | opentargets:ENSG00000157764:EFO_0003060:disease_association:1f6d654a09 | opentargets | disease_association | 0.713 | 0.864 | Open Targets association score for BRAF and non-small cell lung carcinoma is 0.713. |
| 37 | opentargets:ENSG00000157764:EFO_0000571:disease_association:c2cc274134 | opentargets | disease_association | 0.706 | 0.862 | Open Targets association score for BRAF and lung adenocarcinoma is 0.706. |
| 38 | opentargets:ENSG00000157764:MONDO_0008903:disease_association:a3a71a47ae | opentargets | disease_association | 0.704 | 0.861 | Open Targets association score for BRAF and lung cancer is 0.704. |
| 39 | opentargets:ENSG00000157764:MONDO_0004992:disease_association:70120ed37c | opentargets | disease_association | 0.700 | 0.860 | Open Targets association score for BRAF and cancer is 0.700. |
| 40 | opentargets:ENSG00000157764:EFO_0000182:disease_association:28229f100e | opentargets | disease_association | 0.670 | 0.851 | Open Targets association score for BRAF and hepatocellular carcinoma is 0.670. |
| 41 | opentargets:ENSG00000157764:EFO_0000616:disease_association:e3fcd1ae6d | opentargets | disease_association | 0.665 | 0.850 | Open Targets association score for BRAF and neoplasm is 0.665. |
| 42 | opentargets:ENSG00000157764:EFO_0000574:disease_association:7cbd95f470 | opentargets | disease_association | 0.650 | 0.845 | Open Targets association score for BRAF and lymphoma is 0.650. |
| 43 | opentargets:ENSG00000157764:EFO_0000365:disease_association:cc43dd23e1 | opentargets | disease_association | 0.632 | 0.840 | Open Targets association score for BRAF and colorectal adenocarcinoma is 0.632. |
| 44 | pharos:BRAF:MONDO:0015280:target_annotation:8e61272246 | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for BRAF relating to cardiofaciocutaneous syndrome (TDL=Tclin, ligands=2031). |
| 45 | pharos:BRAF:MONDO:0018997:target_annotation:e9e8dd9e79 | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for BRAF relating to Noonan syndrome (TDL=Tclin, ligands=2031). |
| 46 | pharos:BRAF:MONDO:0007893:target_annotation:f37d65134b | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for BRAF relating to Noonan syndrome with multiple lentigines (TDL=Tclin, ligands=2031). |
| 47 | pharos:BRAF:MONDO:0100342:target_annotation:103ac239f8 | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for BRAF relating to malignant glioma (TDL=Tclin, ligands=2031). |
| 48 | pharos:BRAF:MONDO:0005575:target_annotation:c7861ecb1b | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for BRAF relating to colorectal cancer (TDL=Tclin, ligands=2031). |
| 49 | pharos:BRAF:MONDO:0013379:target_annotation:55008b9681 | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for BRAF relating to Noonan syndrome 7 (TDL=Tclin, ligands=2031). |
| 50 | pharos:BRAF:MONDO:0011719:target_annotation:f739d8ce12 | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for BRAF relating to gastrointestinal stromal tumor (TDL=Tclin, ligands=2031). |
| 51 | pharos:BRAF:MONDO:0009026:target_annotation:d57a0ed05c | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for BRAF relating to Costello syndrome (TDL=Tclin, ligands=2031). |
| 52 | pharos:BRAF:MONDO:0018153:target_annotation:4eed472c2e | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for BRAF relating to Erdheim-Chester disease (TDL=Tclin, ligands=2031). |
| 53 | pharos:BRAF:MONDO:0005105:target_annotation:5a2b21eb59 | pharos | target_annotation | 1.000 | 0.850 | PHAROS annotations for BRAF relating to melanoma (TDL=Tclin, ligands=2031). |


## Evidence Contribution Dashboard
[[EVIDENCE_DASHBOARD]]