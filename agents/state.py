from __future__ import annotations

from operator import add
from typing import Any, Annotated, TypedDict

from .schema import CollectorRequest, CollectorResult, ErrorRecord, EvidenceRecord, SourceStatus


class CollectorState(TypedDict, total=False):
    query: CollectorRequest
    evidence_items: Annotated[list[EvidenceRecord], add]
    source_status: Annotated[list[SourceStatus], add]
    errors: Annotated[list[ErrorRecord], add]
    raw_source_payloads: Annotated[list[dict[str, Any]], add]
    final_result: CollectorResult
