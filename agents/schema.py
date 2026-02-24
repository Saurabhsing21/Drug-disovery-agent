from __future__ import annotations

from datetime import datetime, timezone
from enum import Enum
from typing import Any
from uuid import uuid4

from pydantic import BaseModel, Field, ConfigDict


SCHEMA_VERSION = "0.1.0"


class SourceName(str, Enum):
    DEPMAP = "depmap"
    PHAROS = "pharos"
    OPENTARGETS = "opentargets"
    LITERATURE = "literature"
    EXT_OPENTARGETS = "ext_opentargets"   # Official Open Targets MCP (external)
    EXT_PHAROS = "ext_pharos"             # Community Pharos MCP (external)


class StatusName(str, Enum):
    SUCCESS = "success"
    PARTIAL = "partial"
    FAILED = "failed"
    SKIPPED = "skipped"


class ErrorCode(str, Enum):
    TIMEOUT = "timeout"
    RATE_LIMIT = "rate_limit"
    NOT_FOUND = "not_found"
    UPSTREAM_ERROR = "upstream_error"
    PARSE_ERROR = "parse_error"
    VALIDATION_ERROR = "validation_error"
    INTERNAL_ERROR = "internal_error"




class CollectorRequest(BaseModel):
    model_config = ConfigDict(extra="forbid", use_enum_values=True)

    gene_symbol: str = Field(..., min_length=1, description="Target HGNC symbol")
    disease_id: str | None = Field(default=None, description="Disease id (EFO/MONDO/etc.)")
    species: str = Field(default="Homo sapiens")
    sources: list[SourceName] = Field(default_factory=lambda: [
        SourceName.DEPMAP,
        SourceName.PHAROS,
        SourceName.OPENTARGETS,
        SourceName.LITERATURE,
    ])
    per_source_top_k: int = Field(
        default=5,
        ge=1,
        le=20,
        description="Target number of evidence records to keep per source when available.",
    )
    max_literature_articles: int = Field(default=5, ge=1, le=20)
    model_override: str | None = Field(default=None, description="Force the summary agent to use a specific model.")
    run_id: str = Field(default_factory=lambda: f"run-{uuid4().hex[:12]}")


class Provenance(BaseModel):
    model_config = ConfigDict(extra="forbid")

    provider: str
    endpoint: str
    query: dict[str, Any] = Field(default_factory=dict)
    retrieved_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class EvidenceRecord(BaseModel):
    model_config = ConfigDict(extra="forbid", use_enum_values=True)

    source: SourceName
    target_id: str
    target_symbol: str
    disease_id: str | None = None
    evidence_type: str
    raw_value: float | int | str | dict[str, Any] | list[Any] | None = None
    normalized_score: float | None = Field(default=None, ge=0.0, le=1.0)
    confidence: float = Field(default=0.5, ge=0.0, le=1.0)
    support: dict[str, Any] = Field(default_factory=dict)
    summary: str | None = None
    provenance: Provenance
    retrieved_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class SourceStatus(BaseModel):
    model_config = ConfigDict(extra="forbid", use_enum_values=True)

    source: SourceName
    status: StatusName
    duration_ms: int = Field(default=0, ge=0)
    record_count: int = Field(default=0, ge=0)
    error_code: ErrorCode | None = None
    error_message: str | None = None


class ErrorRecord(BaseModel):
    model_config = ConfigDict(extra="forbid", use_enum_values=True)

    source: SourceName
    error_code: ErrorCode
    message: str
    retryable: bool = False




class SourceSummary(BaseModel):
    model_config = ConfigDict(extra="forbid", use_enum_values=True)

    source: SourceName
    status: StatusName
    record_count: int = Field(default=0, ge=0)
    key_point: str
    evidence_points: list[str] = Field(default_factory=list)
    limitations: list[str] = Field(default_factory=list)


class RobustnessSummary(BaseModel):
    model_config = ConfigDict(extra="forbid")

    requested_source_count: int = Field(ge=0)
    successful_source_count: int = Field(ge=0)
    used_evidence_count: int = Field(ge=0)
    source_record_depth: dict[str, int] = Field(default_factory=dict)
    minimum_coverage_met: bool = False
    failed_or_skipped_sources: list[str] = Field(default_factory=list)
    verdict: str


class LLMSummary(BaseModel):
    model_config = ConfigDict(extra="forbid")

    markdown_report: str = Field(..., description="The complete integrated therapeutic dossier.")
    robustness: RobustnessSummary | None = None
    model_used: str | None = None
    generation_mode: str = "deterministic_fallback"


class CollectorResult(BaseModel):
    model_config = ConfigDict(extra="forbid", use_enum_values=True)

    schema_version: str = SCHEMA_VERSION
    run_id: str
    query: CollectorRequest
    items: list[EvidenceRecord] = Field(default_factory=list)
    source_status: list[SourceStatus] = Field(default_factory=list)
    errors: list[ErrorRecord] = Field(default_factory=list)
    llm_summary: LLMSummary | None = None
