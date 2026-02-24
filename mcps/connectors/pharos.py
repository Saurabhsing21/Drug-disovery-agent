from __future__ import annotations

import os
import time
from typing import Any

from agents.schema import CollectorRequest, ErrorCode, EvidenceRecord, Provenance, SourceName

from .base import CollectorConnector
from .http_client import JsonHttpClient


class PharosConnector(CollectorConnector):
    source = SourceName.PHAROS

    def __init__(self) -> None:
        self.base_url = os.getenv("PHAROS_GRAPHQL_URL", "https://pharos-api.ncats.io/graphql")
        self.http = JsonHttpClient(timeout_s=25.0, retries=2)

    async def _graphql(self, query: str, variables: dict[str, Any]) -> dict[str, Any]:
        payload = {"query": query, "variables": variables}
        data = await self.http.post_json(self.base_url, payload=payload)
        if data.get("errors"):
            message = data["errors"][0].get("message", "PHAROS GraphQL error")
            raise ValueError(message)
        return data.get("data", {})

    def _tdl_score(self, tdl: str | None) -> float:
        mapping = {
            "Tclin": 0.95,
            "Tchem": 0.75,
            "Tbio":  0.55,
            "Tdark": 0.25,
        }
        return mapping.get(tdl or "", 0.45)

    async def collect(self, request: CollectorRequest):
        started_at = time.perf_counter()

        query = """
        query targetDetails($term: String!) {
          target(q: {sym: $term}) {
            sym
            name
            tdl
            fam
            novelty
            ligandCounts {
              name
              value
            }
          }
        }
        """
        try:
            data = await self._graphql(query, {"term": request.gene_symbol})
            target = data.get("target") or {}

            if not target or not target.get("sym"):
                message = f"Target '{request.gene_symbol}' not found in PHAROS"
                return [], self.skipped_status(started_at, message), []

            ligand_counts = target.get("ligandCounts") or []
            ligand_total = 0
            for item in ligand_counts:
                value = item.get("value")
                if isinstance(value, (int, float)):
                    ligand_total += int(value)

            tdl = target.get("tdl")
            base_score = self._tdl_score(tdl)
            ligand_bonus = min(0.2, ligand_total / 200)
            normalized_score = min(1.0, base_score + ligand_bonus)
            confidence = min(0.95, 0.6 + (0.1 if tdl else 0.0) + min(ligand_total / 500, 0.15))

            target_symbol = target.get("sym") or request.gene_symbol
            target_name = target.get("name")
            family = target.get("fam")
            novelty = target.get("novelty")

            record = EvidenceRecord(
                source=self.source,
                target_id=target_symbol,
                target_symbol=target_symbol,
                disease_id=request.disease_id,
                evidence_type="target_annotation",
                raw_value={
                    "tdl": tdl,
                    "ligand_total": ligand_total,
                    "novelty": novelty,
                },
                normalized_score=self.safe_float(normalized_score),
                confidence=self.safe_float(confidence),
                support={
                    "target_name": target_name,
                    "family": family,
                    "tdl": tdl,
                    "novelty": novelty,
                    "ligand_total": ligand_total,
                },
                summary=(
                    f"PHAROS annotations for {target_symbol}"
                    f" (TDL={tdl or 'unknown'}, ligands={ligand_total})."
                ),
                provenance=Provenance(
                    provider="PHAROS",
                    endpoint=self.base_url,
                    query={"gene_symbol": request.gene_symbol},
                ),
            )

            return [record], self.success_status(started_at, 1), []

        except Exception as exc:  # noqa: BLE001
            code = self.upstream_error_code(exc)
            message = f"PHAROS request failed: {exc}"
            return [], self.error_status(started_at, code, message), [
                self.error_record(code, message, retryable=code in {ErrorCode.TIMEOUT, ErrorCode.RATE_LIMIT})
            ]
