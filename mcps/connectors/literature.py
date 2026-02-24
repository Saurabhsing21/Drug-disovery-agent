from __future__ import annotations

import os
import time

import httpx

from agents.schema import CollectorRequest, ErrorCode, EvidenceRecord, Provenance, SourceName

from .base import CollectorConnector
from .http_client import JsonHttpClient


class LiteratureConnector(CollectorConnector):
    source = SourceName.LITERATURE

    def __init__(self) -> None:
        self.base_url = os.getenv(
            "EUROPE_PMC_SEARCH_URL",
            "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
        )
        self.http = JsonHttpClient(timeout_s=20.0, retries=2)

    @staticmethod
    def _build_query(gene_symbol: str, disease_id: str | None) -> str:
        terms = [f'"{gene_symbol}"']

        if not disease_id:
            return " AND ".join(terms)

        # Handle ontology-like IDs such as EFO_0000311 by also trying EFO:0000311.
        alt = None
        if __import__("re").match(r"^[A-Za-z]+_\d+$", disease_id):
            alt = disease_id.replace("_", ":", 1)

        if alt:
            terms.append(f'("{disease_id}" OR "{alt}")')
        else:
            terms.append(f'"{disease_id}"')

        return " AND ".join(terms)

    async def collect(self, request: CollectorRequest):
        started_at = time.perf_counter()

        query_string = self._build_query(request.gene_symbol, request.disease_id)

        try:
            payload = await self.http.get_json(
                self.base_url,
                params={
                    "query": query_string,
                    "format": "json",
                    "pageSize": request.max_literature_articles,
                    "resultType": "core",
                    "sort": "CITED desc",
                },
            )
        except httpx.TimeoutException:
            message = "Literature search timed out"
            return [], self.error_status(started_at, ErrorCode.TIMEOUT, message), [
                self.error_record(ErrorCode.TIMEOUT, message, retryable=True)
            ]
        except Exception as exc:  # noqa: BLE001
            code = self.upstream_error_code(exc)
            message = f"Literature source error: {exc}"
            return [], self.error_status(started_at, code, message), [
                self.error_record(code, message, retryable=code in {ErrorCode.TIMEOUT, ErrorCode.RATE_LIMIT})
            ]

        results = payload.get("resultList", {}).get("result", [])
        if not results:
            message = "No literature evidence found for query"
            return [], self.skipped_status(started_at, message), []

        limit = min(len(results), request.max_literature_articles, request.per_source_top_k)
        selected = results[:limit]
        total_hits = int(payload.get("hitCount") or len(results))
        records: list[EvidenceRecord] = []

        for idx, paper in enumerate(selected, start=1):
            citations = int(paper.get("citedByCount") or 0)
            confidence = min(0.95, 0.5 + min(citations / 200, 0.25) + min((limit - idx + 1) / 20, 0.1))
            normalized = min(1.0, 0.4 + min(citations / 150, 0.4) + min((limit - idx + 1) / 20, 0.2))
            pmid = paper.get("pmid")
            title = paper.get("title")

            records.append(
                EvidenceRecord(
                    source=self.source,
                    target_id=f"{request.gene_symbol}:PMID:{pmid or idx}",
                    target_symbol=request.gene_symbol,
                    disease_id=request.disease_id,
                    evidence_type="literature_article",
                    raw_value=float(citations),
                    normalized_score=self.safe_float(normalized),
                    confidence=self.safe_float(confidence),
                    support={
                        "rank": idx,
                        "article_count_returned": limit,
                        "total_hit_count": total_hits,
                        "pmid": pmid,
                        "title": title,
                        "journal": paper.get("journalTitle"),
                        "pub_year": paper.get("pubYear"),
                        "cited_by_count": citations,
                        "query": query_string,
                    },
                    summary=(
                        f"Europe PMC article rank {idx}/{limit} for {request.gene_symbol}: "
                        f"{title or 'untitled'} (PMID={pmid or 'n/a'}, citations={citations})."
                    ),
                    provenance=Provenance(
                        provider="Europe PMC",
                        endpoint=self.base_url,
                        query={"query": query_string, "disease_id": request.disease_id, "pmid": pmid},
                    ),
                )
            )

        return records, self.success_status(started_at, len(records)), []
