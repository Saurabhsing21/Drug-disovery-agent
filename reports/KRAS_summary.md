# Target Evidence Report: KRAS

## Executive Answer
Decision: **Supported with Context Limits** (overall_support_score=0.690, completeness=0.750). Disease context: **unspecified**.

## Evidence Summary
| # | category | strength | score | top_evidence_id | top_finding | main_limitation |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | annotation | weak | 0.000 | n/a | n/a | missing coverage in this category |
| 2 | dependency | strong | 0.980 | depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab | Cell-line dependency for KRAS in ACH-000222: gene_effect=-4.282 (rank 1). | n/a |
| 3 | disease_association | strong | 0.849 | opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025 | Open Targets association score for KRAS and Noonan syndrome 3 is 0.826. | disease context unspecified; association may be non-specific |
| 4 | literature | strong | 0.940 | literature:KRAS:PMID:19847166:NA:literature_article:9e475b1f9b | Europe PMC article rank 1/12 for KRAS: Systematic RNA interference reveals that oncogenic KRAS-driven cancers require TBK1. (PMID=19847166,… | literature is supportive and can be noisy |

## Top Evidence
| # | category | evidence_id | source | score | confidence | summary |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | dependency | depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab | depmap | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000222: gene_effect=-4.282 (rank 1). |
| 2 | dependency | depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7 | depmap | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000417: gene_effect=-3.859 (rank 2). |
| 3 | dependency | depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:62b615625a | depmap | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000505: gene_effect=-3.814 (rank 3). |
| 4 | disease_association | opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025 | opentargets | 0.826 | 0.898 | Open Targets association score for KRAS and Noonan syndrome 3 is 0.826. |
| 5 | disease_association | opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464 | opentargets | 0.814 | 0.894 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome 2 is 0.814. |
| 6 | disease_association | opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e | opentargets | 0.813 | 0.894 | Open Targets association score for KRAS and Noonan syndrome is 0.813. |
| 7 | literature | literature:KRAS:PMID:19847166:NA:literature_article:9e475b1f9b | literature | 1.000 | 0.850 | Europe PMC article rank 1/12 for KRAS: Systematic RNA interference reveals that oncogenic KRAS-driven cancers require T… |
| 8 | literature | literature:KRAS:PMID:18316791:NA:literature_article:09f0f0fbf8 | literature | 1.000 | 0.850 | Europe PMC article rank 2/12 for KRAS: Wild-type KRAS is required for panitumumab efficacy in patients with metastatic… |
| 9 | literature | literature:KRAS:PMID:28607485:NA:literature_article:1c887c9daa | literature | 1.000 | 0.850 | Europe PMC article rank 3/12 for KRAS: Exosomes facilitate therapeutic targeting of oncogenic KRAS in pancreatic cancer… |

## Source Coverage
| # | source | status | records | duration_ms | error |
| --- | --- | --- | --- | --- | --- |
| 1 | depmap | success | 20 | 10347 |  |
| 2 | pharos | skipped | 0 | 995 | Target 'KRAS' not found in PHAROS |
| 3 | opentargets | success | 20 | 1087 |  |
| 4 | literature | success | 12 | 2678 |  |

## Conflicts & Caveats
- No cross-source conflicts detected.
- Verification warnings: ontology_id_format.

## Recommended Next Steps
- Add target tractability/annotation coverage (PHAROS).

## Machine Appendix
| # | evidence_id | source | type | normalized_score | confidence | summary |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | depmap:KRAS:NA:genetic_dependency:2067ce2c5f | depmap | genetic_dependency | 0.351 | 0.947 | DepMap CRISPR gene effect for KRAS: -0.702 avg across 1169 cell lines (571 show strong dependency ≤ −0.5). |
| 2 | depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000222: gene_effect=-4.282 (rank 1). |
| 3 | depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7 | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000417: gene_effect=-3.859 (rank 2). |
| 4 | depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:62b615625a | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000505: gene_effect=-3.814 (rank 3). |
| 5 | depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:d8acb8e0db | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000235: gene_effect=-3.494 (rank 4). |
| 6 | depmap:KRAS:ACH-000042:NA:genetic_dependency_cell_line:165a2e8ba3 | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000042: gene_effect=-3.338 (rank 5). |
| 7 | depmap:KRAS:ACH-000264:NA:genetic_dependency_cell_line:d79167e86c | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000264: gene_effect=-3.296 (rank 6). |
| 8 | depmap:KRAS:ACH-000114:NA:genetic_dependency_cell_line:c4e8217250 | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000114: gene_effect=-3.274 (rank 7). |
| 9 | depmap:KRAS:ACH-001494:NA:genetic_dependency_cell_line:7a427721de | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-001494: gene_effect=-3.253 (rank 8). |
| 10 | depmap:KRAS:ACH-000532:NA:genetic_dependency_cell_line:892fe3818e | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000532: gene_effect=-3.225 (rank 9). |
| 11 | depmap:KRAS:ACH-000468:NA:genetic_dependency_cell_line:b30fc2a1ee | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000468: gene_effect=-3.213 (rank 10). |
| 12 | depmap:KRAS:ACH-000489:NA:genetic_dependency_cell_line:476bed2001 | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000489: gene_effect=-3.148 (rank 11). |
| 13 | depmap:KRAS:ACH-000652:NA:genetic_dependency_cell_line:57e7a60610 | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000652: gene_effect=-3.142 (rank 12). |
| 14 | depmap:KRAS:ACH-000517:NA:genetic_dependency_cell_line:a1198453cf | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000517: gene_effect=-3.129 (rank 13). |
| 15 | depmap:KRAS:ACH-000932:NA:genetic_dependency_cell_line:51bc243861 | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000932: gene_effect=-3.117 (rank 14). |
| 16 | depmap:KRAS:ACH-001399:NA:genetic_dependency_cell_line:2e10ccfd05 | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-001399: gene_effect=-3.105 (rank 15). |
| 17 | depmap:KRAS:ACH-000601:NA:genetic_dependency_cell_line:7d14c5b9f0 | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000601: gene_effect=-3.101 (rank 16). |
| 18 | depmap:KRAS:ACH-000266:NA:genetic_dependency_cell_line:19f9aa27ec | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000266: gene_effect=-3.078 (rank 17). |
| 19 | depmap:KRAS:ACH-000651:NA:genetic_dependency_cell_line:6dd8171b14 | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000651: gene_effect=-3.010 (rank 18). |
| 20 | depmap:KRAS:ACH-000565:NA:genetic_dependency_cell_line:95e1c2e4a5 | depmap | genetic_dependency_cell_line | 1.000 | 0.950 | Cell-line dependency for KRAS in ACH-000565: gene_effect=-2.956 (rank 19). |
| 21 | literature:KRAS:PMID:19847166:NA:literature_article:9e475b1f9b | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 1/12 for KRAS: Systematic RNA interference reveals that oncogenic KRAS-driven cancers require TBK1. (PMID=19847166, citations=3009). |
| 22 | literature:KRAS:PMID:18316791:NA:literature_article:09f0f0fbf8 | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 2/12 for KRAS: Wild-type KRAS is required for panitumumab efficacy in patients with metastatic colorectal cancer. (PMID=18316791, citations=2232). |
| 23 | literature:KRAS:PMID:28607485:NA:literature_article:1c887c9daa | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 3/12 for KRAS: Exosomes facilitate therapeutic targeting of oncogenic KRAS in pancreatic cancer. (PMID=28607485, citations=1987). |
| 24 | literature:KRAS:PMID:22810696:NA:literature_article:1c0279d9d1 | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 4/12 for KRAS: Comprehensive molecular characterization of human colon and rectal cancer. (PMID=22810696, citations=6682). |
| 25 | literature:KRAS:PMID:23636398:NA:literature_article:6086754dcc | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 5/12 for KRAS: Integrated genomic characterization of endometrial carcinoma. (PMID=23636398, citations=4161). |
| 26 | literature:KRAS:PMID:24553385:NA:literature_article:c4951a9f5c | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 6/12 for KRAS: Detection of circulating tumor DNA in early- and late-stage human malignancies. (PMID=24553385, citations=3594). |
| 27 | literature:KRAS:PMID:15466206:NA:literature_article:95a9b2ab0e | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 7/12 for KRAS: BAY 43-9006 exhibits broad spectrum oral antitumor activity and targets the RAF/MEK/ERK pathway and receptor tyrosine kinases involved in tumor progression and angiogenesis. (PMID=15466206, citations=3013). |
| 28 | literature:KRAS:PMID:19339720:NA:literature_article:d160d34449 | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 8/12 for KRAS: Cetuximab and chemotherapy as initial treatment for metastatic colorectal cancer. (PMID=19339720, citations=2738). |
| 29 | literature:KRAS:PMID:26909576:NA:literature_article:371a33701b | literature | literature_article | 1.000 | 0.850 | Europe PMC article rank 9/12 for KRAS: Genomic analyses identify molecular subtypes of pancreatic cancer. (PMID=26909576, citations=2721). |
| 30 | literature:KRAS:PMID:15737014:NA:literature_article:411c8c6746 | literature | literature_article | 0.950 | 0.850 | Europe PMC article rank 10/12 for KRAS: Acquired resistance of lung adenocarcinomas to gefitinib or erlotinib is associated with a second mutation in the EGFR kinase domain. (PMID=15737014, citations=2553). |
| 31 | literature:KRAS:PMID:26106858:NA:literature_article:f207a824c1 | literature | literature_article | 0.900 | 0.850 | Europe PMC article rank 11/12 for KRAS: Glypican-1 identifies cancer exosomes and detects early pancreatic cancer. (PMID=26106858, citations=2128). |
| 32 | literature:KRAS:PMID:15894267:NA:literature_article:c84fbddfc6 | literature | literature_article | 0.850 | 0.800 | Europe PMC article rank 12/12 for KRAS: Trp53R172H and KrasG12D cooperate to promote chromosomal instability and widely metastatic pancreatic ductal adenocarcinoma in mice. (PMID=15894267, citations=2080). |
| 33 | opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025 | opentargets | disease_association | 0.826 | 0.898 | Open Targets association score for KRAS and Noonan syndrome 3 is 0.826. |
| 34 | opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464 | opentargets | disease_association | 0.814 | 0.894 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome 2 is 0.814. |
| 35 | opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e | opentargets | disease_association | 0.813 | 0.894 | Open Targets association score for KRAS and Noonan syndrome is 0.813. |
| 36 | opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e | opentargets | disease_association | 0.809 | 0.893 | Open Targets association score for KRAS and non-small cell lung carcinoma is 0.809. |
| 37 | opentargets:ENSG00000133703:MONDO_0015280:disease_association:58a0242160 | opentargets | disease_association | 0.794 | 0.888 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome is 0.794. |
| 38 | opentargets:ENSG00000133703:MONDO_0001056:disease_association:ef560580cc | opentargets | disease_association | 0.768 | 0.880 | Open Targets association score for KRAS and gastric cancer is 0.768. |
| 39 | opentargets:ENSG00000133703:EFO_0000222:disease_association:db0da82372 | opentargets | disease_association | 0.755 | 0.876 | Open Targets association score for KRAS and acute myeloid leukemia is 0.755. |
| 40 | opentargets:ENSG00000133703:MONDO_0008097:disease_association:0c7fbd051b | opentargets | disease_association | 0.742 | 0.873 | Open Targets association score for KRAS and linear nevus sebaceous syndrome is 0.742. |
| 41 | opentargets:ENSG00000133703:MONDO_0010854:disease_association:7219814dfc | opentargets | disease_association | 0.740 | 0.872 | Open Targets association score for KRAS and Toriello-Lacassie-Droste syndrome is 0.740. |
| 42 | opentargets:ENSG00000133703:Orphanet_2612:disease_association:2af42a5e69 | opentargets | disease_association | 0.734 | 0.870 | Open Targets association score for KRAS and Linear nevus sebaceus syndrome is 0.734. |
| 43 | opentargets:ENSG00000133703:EFO_0000571:disease_association:e9ec62fbae | opentargets | disease_association | 0.722 | 0.867 | Open Targets association score for KRAS and lung adenocarcinoma is 0.722. |
| 44 | opentargets:ENSG00000133703:MONDO_0004992:disease_association:2a1f9538e8 | opentargets | disease_association | 0.715 | 0.865 | Open Targets association score for KRAS and cancer is 0.715. |
| 45 | opentargets:ENSG00000133703:MONDO_0013767:disease_association:6e61e8562a | opentargets | disease_association | 0.715 | 0.864 | Open Targets association score for KRAS and autoimmune lymphoproliferative syndrome type 4 is 0.715. |
| 46 | opentargets:ENSG00000133703:Orphanet_268114:disease_association:65c84b5fbf | opentargets | disease_association | 0.714 | 0.864 | Open Targets association score for KRAS and RAS-associated autoimmune leukoproliferative disease is 0.714. |
| 47 | opentargets:ENSG00000133703:MONDO_0001187:disease_association:06e0da259e | opentargets | disease_association | 0.699 | 0.860 | Open Targets association score for KRAS and urinary bladder cancer is 0.699. |
| 48 | opentargets:ENSG00000133703:EFO_1000309:disease_association:4927b6b72f | opentargets | disease_association | 0.693 | 0.858 | Open Targets association score for KRAS and Juvenile Myelomonocytic Leukemia is 0.693. |
| 49 | opentargets:ENSG00000133703:EFO_0000365:disease_association:237f1ca0ab | opentargets | disease_association | 0.684 | 0.855 | Open Targets association score for KRAS and colorectal adenocarcinoma is 0.684. |
| 50 | opentargets:ENSG00000133703:EFO_1001502:disease_association:5b68deeb87 | opentargets | disease_association | 0.674 | 0.852 | Open Targets association score for KRAS and rasopathy is 0.674. |
| 51 | opentargets:ENSG00000133703:MONDO_0015278:disease_association:d169d99701 | opentargets | disease_association | 0.669 | 0.851 | Open Targets association score for KRAS and familial pancreatic carcinoma is 0.669. |
| 52 | opentargets:ENSG00000133703:EFO_0001378:disease_association:10046bc739 | opentargets | disease_association | 0.660 | 0.848 | Open Targets association score for KRAS and multiple myeloma is 0.660. |


## Evidence Contribution Dashboard
[[EVIDENCE_DASHBOARD]]