from __future__ import annotations

import pytest

from agents.schema import CollectorRequest, SourceName, StatusName
from mcps.connectors.depmap import DepMapConnector
from mcps.connectors.literature import LiteratureConnector
from mcps.connectors.opentargets import OpenTargetsConnector
from mcps.connectors.pharos import PharosConnector


@pytest.mark.asyncio
async def test_opentargets_connector_returns_contract_with_mocked_graphql(monkeypatch) -> None:
    connector = OpenTargetsConnector()
    request = CollectorRequest(gene_symbol="EGFR", disease_id="EFO_0000311")

    async def fake_resolve(_symbol: str):
        return "ENSG00000146648", "EGFR"

    async def fake_graphql(_query: str, _variables: dict):
        return {
            "target": {
                "id": "ENSG00000146648",
                "approvedSymbol": "EGFR",
                "associatedDiseases": {
                    "count": 1,
                    "rows": [{"score": 0.91, "disease": {"id": "EFO_0000311", "name": "NSCLC"}}],
                },
            }
        }

    monkeypatch.setattr(connector, "_resolve_target", fake_resolve)
    monkeypatch.setattr(connector, "_graphql", fake_graphql)

    items, status, errors = await connector.collect(request)

    assert len(items) == 1
    assert status.status == StatusName.SUCCESS
    assert errors == []

@pytest.mark.asyncio
async def test_opentargets_connector_emits_definitive_zero_record(monkeypatch) -> None:
    connector = OpenTargetsConnector()
    request = CollectorRequest(gene_symbol="EGFR", disease_id="EFO_0000311")

    async def fake_resolve(_symbol: str):
        return "ENSG00000146648", "EGFR"

    async def fake_graphql(_query: str, _variables: dict):
        return {
            "target": {
                "id": "ENSG00000146648",
                "approvedSymbol": "EGFR",
                "associatedDiseases": {
                    "count": 0,
                    "rows": [],
                },
            }
        }

    monkeypatch.setattr(connector, "_resolve_target", fake_resolve)
    monkeypatch.setattr(connector, "_graphql", fake_graphql)

    items, status, errors = await connector.collect(request)

    assert len(items) == 1
    assert items[0].evidence_type == "disease_association_absence"
    assert float(items[0].raw_value or 0.0) == 0.0
    assert status.status == StatusName.SUCCESS
    assert errors == []

@pytest.mark.asyncio
async def test_opentargets_connector_exposes_total_association_count(monkeypatch) -> None:
    connector = OpenTargetsConnector()
    request = CollectorRequest(gene_symbol="EGFR", disease_id="EFO_0000311", per_source_top_k=2)

    async def fake_resolve(_symbol: str):
        return "ENSG00000146648", "EGFR"

    async def fake_graphql(_query: str, _variables: dict):
        return {
            "target": {
                "id": "ENSG00000146648",
                "approvedSymbol": "EGFR",
                "associatedDiseases": {
                    "count": 42,
                    "rows": [
                        {"score": 0.91, "disease": {"id": "EFO_0000311", "name": "NSCLC"}},
                        {"score": 0.55, "disease": {"id": "EFO_0000700", "name": "LC"}},
                    ],
                },
            }
        }

    monkeypatch.setattr(connector, "_resolve_target", fake_resolve)
    monkeypatch.setattr(connector, "_graphql", fake_graphql)

    items, status, errors = await connector.collect(request)

    assert len(items) == 2
    assert status.status == StatusName.SUCCESS
    assert errors == []
    assert all((item.support or {}).get("evidence_count") == 42 for item in items)


@pytest.mark.asyncio
async def test_pharos_connector_returns_annotation_with_mocked_graphql(monkeypatch) -> None:
    connector = PharosConnector()
    request = CollectorRequest(gene_symbol="EGFR")

    async def fake_graphql(_query: str, _variables: dict):
        return {"target": {"sym": "EGFR", "name": "EGFR", "tdl": "Tclin", "fam": "Kinase", "novelty": 0.2, "ligandCounts": [{"value": 12}]}}

    monkeypatch.setattr(connector, "_graphql", fake_graphql)
    items, status, errors = await connector.collect(request)

    assert len(items) == 1
    assert items[0].evidence_type == "target_annotation"
    assert status.status == StatusName.SUCCESS
    assert errors == []


@pytest.mark.asyncio
async def test_literature_connector_returns_articles_with_mocked_http(monkeypatch) -> None:
    connector = LiteratureConnector()
    request = CollectorRequest(gene_symbol="EGFR", disease_id="EFO_0000311", per_source_top_k=2)

    async def fake_get_json(*_args, **_kwargs):
        return {
            "hitCount": 2,
            "resultList": {
                "result": [
                    {"pmid": "1", "title": "EGFR Paper 1", "journalTitle": "J1", "pubYear": "2024", "citedByCount": 10},
                    {"pmid": "2", "title": "Paper 2", "abstractText": "EGFR drives signaling.", "journalTitle": "J2", "pubYear": "2023", "citedByCount": 4},
                ]
            },
        }

    monkeypatch.setattr(connector.http, "get_json", fake_get_json)
    items, status, errors = await connector.collect(request)

    assert len(items) == 2
    assert all(item.source == SourceName.LITERATURE for item in items)
    assert status.status == StatusName.SUCCESS
    assert errors == []
    assert all((item.support or {}).get("eligible_hit_count") == 2 for item in items)

@pytest.mark.asyncio
async def test_literature_connector_emits_definitive_zero_record(monkeypatch) -> None:
    connector = LiteratureConnector()
    request = CollectorRequest(gene_symbol="EGFR", disease_id="EFO_0000311", per_source_top_k=2)

    async def fake_get_json(*_args, **_kwargs):
        return {"hitCount": 0, "resultList": {"result": []}}

    monkeypatch.setattr(connector.http, "get_json", fake_get_json)
    items, status, errors = await connector.collect(request)

    assert len(items) == 1
    assert items[0].evidence_type == "literature_absence"
    assert float(items[0].raw_value or 0.0) == 0.0
    assert status.status == StatusName.SUCCESS
    assert errors == []

@pytest.mark.asyncio
async def test_literature_connector_emits_absence_when_no_eligible_hits(monkeypatch) -> None:
    connector = LiteratureConnector()
    request = CollectorRequest(gene_symbol="OBSCN", disease_id="EFO_0000311", per_source_top_k=2)

    async def fake_get_json(*_args, **_kwargs):
        return {
            "hitCount": 3,
            "resultList": {
                "result": [
                    {"pmid": "1", "title": "Paper 1", "journalTitle": "J1", "pubYear": "2024", "citedByCount": 10},
                    {"pmid": "2", "title": "Paper 2", "journalTitle": "J2", "pubYear": "2023", "citedByCount": 4},
                    {"pmid": "3", "title": "Paper 3", "journalTitle": "J3", "pubYear": "2022", "citedByCount": 2},
                ]
            },
        }

    monkeypatch.setattr(connector.http, "get_json", fake_get_json)
    items, status, errors = await connector.collect(request)

    assert len(items) == 1
    assert items[0].evidence_type == "literature_absence"
    assert status.status == StatusName.SUCCESS
    assert errors == []
    support = items[0].support or {}
    assert support.get("eligible_hit_count") == 0
    assert support.get("total_hit_count") == 3

@pytest.mark.asyncio
async def test_literature_connector_exposes_total_hit_count(monkeypatch) -> None:
    connector = LiteratureConnector()
    request = CollectorRequest(gene_symbol="EGFR", disease_id="EFO_0000311", per_source_top_k=2)

    async def fake_get_json(*_args, **_kwargs):
        return {
            "hitCount": 50,
            "resultList": {
                "result": [
                    {"pmid": "1", "title": "EGFR Paper 1", "journalTitle": "J1", "pubYear": "2024", "citedByCount": 10},
                    {"pmid": "2", "title": "Paper 2", "abstractText": "EGFR drives signaling.", "journalTitle": "J2", "pubYear": "2023", "citedByCount": 4},
                    {"pmid": "3", "title": "Paper 3", "journalTitle": "J3", "pubYear": "2022", "citedByCount": 1},
                ]
            },
        }

    monkeypatch.setattr(connector.http, "get_json", fake_get_json)
    items, status, errors = await connector.collect(request)

    assert len(items) == 2
    assert status.status == StatusName.SUCCESS
    assert errors == []
    assert all((item.support or {}).get("total_hit_count") == 50 for item in items)


@pytest.mark.asyncio
async def test_literature_connector_caps_by_max_literature_articles(monkeypatch) -> None:
    connector = LiteratureConnector()
    request = CollectorRequest(gene_symbol="EGFR", disease_id="EFO_0000311", per_source_top_k=10, max_literature_articles=2)

    async def fake_get_json(*_args, **_kwargs):
        return {
            "hitCount": 5,
            "resultList": {
                "result": [
                    {"pmid": "1", "title": "EGFR Paper 1", "journalTitle": "J1", "pubYear": "2024", "citedByCount": 10},
                    {"pmid": "2", "title": "EGFR Paper 2", "journalTitle": "J2", "pubYear": "2023", "citedByCount": 9},
                    {"pmid": "3", "title": "EGFR Paper 3", "journalTitle": "J3", "pubYear": "2022", "citedByCount": 8},
                    {"pmid": "4", "title": "EGFR Paper 4", "journalTitle": "J4", "pubYear": "2021", "citedByCount": 7},
                    {"pmid": "5", "title": "EGFR Paper 5", "journalTitle": "J5", "pubYear": "2020", "citedByCount": 6},
                ]
            },
        }

    monkeypatch.setattr(connector.http, "get_json", fake_get_json)
    items, status, errors = await connector.collect(request)

    assert len(items) == 2
    assert status.status == StatusName.SUCCESS
    assert errors == []


@pytest.mark.asyncio
async def test_depmap_connector_uses_loaded_dataframe_without_disk_reload(monkeypatch) -> None:
    import pandas as pd
    import mcps.connectors.depmap as depmap_module

    connector = DepMapConnector()
    request = CollectorRequest(gene_symbol="EGFR", per_source_top_k=2)

    monkeypatch.setattr(depmap_module.os.path, "exists", lambda _path: True)
    depmap_module._df = pd.DataFrame({"EGFR (1956)": [-1.2, -0.7]}, index=["CL1", "CL2"])
    depmap_module._col_map = {"EGFR": "EGFR (1956)"}

    items, status, errors = await connector.collect(request)

    assert len(items) == 2
    assert items[0].evidence_type == "genetic_dependency"
    # Average gene effect = (-1.2 + -0.7) / 2 = -0.95
    # Normalize with clip [-2,0]: (0 - (-0.95)) / 2 = 0.475
    assert abs(items[0].normalized_score - 0.475) < 1e-6
    assert status.status == StatusName.SUCCESS
    assert errors == []
