"""Unit tests for the NormalizationScoringAgent."""
from __future__ import annotations

import pytest

from agents.scoring_schemas import SourceEvidence, ScoredTarget
from agents.scoring_agent import NormalizationScoringAgent


@pytest.fixture
def agent():
    return NormalizationScoringAgent()


# ---------------------------------------------------------------------------
# Helper to build SourceEvidence quickly
# ---------------------------------------------------------------------------
def _ev(source: str, gene: str, *, data_present: bool = True,
        total_available: int = 10, raw_signal=None,
        metadata: dict | None = None) -> SourceEvidence:
    return SourceEvidence(
        source=source,
        gene=gene,
        data_present=data_present,
        total_available=total_available,
        raw_signal=raw_signal,
        metadata=metadata or {},
    )


# ===================================================================
# Test 1: Full data – EGFR-like gene with all 4 sources present
# ===================================================================
class TestEGFRFullData:
    """All four sources present with strong evidence → high score."""

    @pytest.fixture
    def evidence(self):
        return [
            _ev("pharos", "EGFR", total_available=1, raw_signal=None,
                metadata={"tdl": "Tclin"}),
            _ev("depmap", "EGFR", total_available=500, raw_signal=-1.2),
            _ev("open_targets", "EGFR", total_available=15, raw_signal=0.92,
                metadata={"all_disease_scores": [0.92, 0.85, 0.78]}),
            _ev("literature", "EGFR", total_available=5000, raw_signal=1200.0),
        ]

    def test_high_target_score(self, agent, evidence):
        result = agent.score(evidence)
        assert isinstance(result, ScoredTarget)
        assert result.gene == "EGFR"
        assert result.target_score > 0.75, f"Expected high score, got {result.target_score}"

    def test_no_missing_sources(self, agent, evidence):
        result = agent.score(evidence)
        assert result.missing_sources == []

    def test_no_conflict(self, agent, evidence):
        result = agent.score(evidence)
        assert result.conflict_flag is False

    def test_all_source_scores_present(self, agent, evidence):
        result = agent.score(evidence)
        assert set(result.source_scores.keys()) == {"pharos", "depmap", "open_targets", "literature"}

    def test_weights_sum_to_one(self, agent, evidence):
        result = agent.score(evidence)
        assert abs(sum(result.weights_used.values()) - 1.0) < 1e-6

    def test_high_confidence(self, agent, evidence):
        result = agent.score(evidence)
        assert result.evidence_confidence > 0.7


# ===================================================================
# Test 2: Sparse Tdark gene (FAM83H-like)
# ===================================================================
class TestSparseTdarkGene:
    """Tdark gene with minimal data → low score and sparse flags."""

    @pytest.fixture
    def evidence(self):
        return [
            _ev("pharos", "FAM83H", total_available=1, raw_signal=None,
                metadata={"tdl": "Tdark"}),
            _ev("depmap", "FAM83H", total_available=3, raw_signal=-0.1),
            _ev("literature", "FAM83H", total_available=4, raw_signal=2.0),
            # Open Targets missing entirely
        ]

    def test_low_target_score(self, agent, evidence):
        result = agent.score(evidence)
        assert result.target_score < 0.50, f"Expected low score, got {result.target_score}"

    def test_missing_open_targets(self, agent, evidence):
        result = agent.score(evidence)
        assert "open_targets" in result.missing_sources

    def test_sparse_sources_flagged(self, agent, evidence):
        result = agent.score(evidence)
        # DepMap with 3 cell lines and literature with 4 papers should be flagged as low
        assert len(result.sparse_sources) > 0

    def test_notes_mention_missing(self, agent, evidence):
        result = agent.score(evidence)
        assert any("no data" in note.lower() or "missing" in note.lower() for note in result.notes)


# ===================================================================
# Test 3: All-missing gene – no data from any source
# ===================================================================
class TestAllMissingGene:
    """No data from any source → zero score, zero confidence."""

    @pytest.fixture
    def evidence(self):
        return [
            _ev("pharos", "FAKEGENE", data_present=False, total_available=0),
            _ev("depmap", "FAKEGENE", data_present=False, total_available=0),
            _ev("open_targets", "FAKEGENE", data_present=False, total_available=0),
            _ev("literature", "FAKEGENE", data_present=False, total_available=0),
        ]

    def test_zero_target_score(self, agent, evidence):
        result = agent.score(evidence)
        assert result.target_score == 0.0

    def test_zero_confidence(self, agent, evidence):
        result = agent.score(evidence)
        assert result.evidence_confidence == 0.0

    def test_all_missing(self, agent, evidence):
        result = agent.score(evidence)
        assert set(result.missing_sources) == {"pharos", "depmap", "open_targets", "literature"}

    def test_all_confidences_missing(self, agent, evidence):
        result = agent.score(evidence)
        for src, conf in result.source_confidences.items():
            assert conf == "missing", f"{src} should be 'missing', got '{conf}'"


# ===================================================================
# Test 4: Conflict scenario – PHAROS says Tclin, DepMap says non-essential
# ===================================================================
class TestConflictScenario:
    """Strong disagreement between sources → conflict_flag=True."""

    @pytest.fixture
    def evidence(self):
        return [
            _ev("pharos", "CONFLICTGENE", total_available=1,
                metadata={"tdl": "Tclin"}),        # normalizes to 1.0
            _ev("depmap", "CONFLICTGENE", total_available=100,
                raw_signal=-0.05),                  # normalizes to ~0.025 (non-essential)
            _ev("open_targets", "CONFLICTGENE", total_available=5,
                raw_signal=0.15),                   # low association
            _ev("literature", "CONFLICTGENE", total_available=50,
                raw_signal=10.0),
        ]

    def test_conflict_detected(self, agent, evidence):
        result = agent.score(evidence)
        assert result.conflict_flag is True

    def test_conflict_detail_present(self, agent, evidence):
        result = agent.score(evidence)
        assert result.conflict_detail is not None
        assert "pharos" in result.conflict_detail.lower()
        assert "depmap" in result.conflict_detail.lower()

    def test_notes_mention_conflict(self, agent, evidence):
        result = agent.score(evidence)
        assert any("conflict" in note.lower() for note in result.notes)


# ===================================================================
# Test 4b: Conflict scenario – DepMap positive CERES
# ===================================================================
class TestConflictPositiveCeres:
    """Positive CERES should use non-essentiality conflict template."""

    def test_conflict_uses_nonessentiality_message(self, agent):
        evidence = [
            _ev("pharos", "GENE", total_available=1, metadata={"tdl": "Tclin"}),
            _ev("depmap", "GENE", total_available=100, raw_signal=0.2),
            _ev("open_targets", "GENE", total_available=5, raw_signal=0.05),
        ]
        result = agent.score(evidence)
        assert result.conflict_flag is True
        assert "non-essentiality" in (result.conflict_detail or "").lower()

# ===================================================================
# Test 5: Single source only – only PHAROS has data
# ===================================================================
class TestSingleSourceOnly:
    """Only one source returns data → weight=1.0 for that source."""

    @pytest.fixture
    def evidence(self):
        return [
            _ev("pharos", "SINGLEGENE", total_available=1,
                metadata={"tdl": "Tchem"}),         # normalizes to 0.70
        ]

    def test_score_equals_pharos(self, agent, evidence):
        result = agent.score(evidence)
        assert abs(result.target_score - 0.70) < 0.01

    def test_pharos_weight_is_one(self, agent, evidence):
        result = agent.score(evidence)
        assert abs(result.weights_used["pharos"] - 1.0) < 1e-6

    def test_three_missing_sources(self, agent, evidence):
        result = agent.score(evidence)
        assert len(result.missing_sources) == 3

    def test_single_source_note(self, agent, evidence):
        result = agent.score(evidence)
        assert any("single source" in note.lower() for note in result.notes)


# ===================================================================
# Individual normalizer unit tests
# ===================================================================
class TestNormalizerMethods:
    """Direct tests for each normalization function."""

    def test_pharos_tclin(self, agent):
        ev = _ev("pharos", "X", metadata={"tdl": "Tclin"})
        assert agent._normalize_pharos(ev) == 1.0

    def test_pharos_tdark(self, agent):
        ev = _ev("pharos", "X", metadata={"tdl": "Tdark"})
        assert agent._normalize_pharos(ev) == 0.10

    def test_pharos_missing(self, agent):
        ev = _ev("pharos", "X", data_present=False)
        assert agent._normalize_pharos(ev) is None

    def test_depmap_strong_dependency(self, agent):
        ev = _ev("depmap", "X", raw_signal=-1.5)
        # (-1.5 clipped to -1.5), (0 - (-1.5)) / 2.0 = 0.75
        assert agent._normalize_depmap(ev) == 0.75

    def test_depmap_no_dependency(self, agent):
        ev = _ev("depmap", "X", raw_signal=0.0)
        assert agent._normalize_depmap(ev) == 0.0

    def test_depmap_extreme_clip(self, agent):
        ev = _ev("depmap", "X", raw_signal=-3.0)
        # Clipped to -2.0, (0 - (-2.0)) / 2.0 = 1.0
        assert agent._normalize_depmap(ev) == 1.0

    def test_depmap_missing(self, agent):
        ev = _ev("depmap", "X", data_present=False)
        assert agent._normalize_depmap(ev) is None

    def test_open_targets_direct(self, agent):
        ev = _ev("open_targets", "X", raw_signal=0.85)
        assert agent._normalize_open_targets(ev) == 0.85

    def test_open_targets_requested_disease(self, agent):
        ev = _ev(
            "open_targets",
            "X",
            raw_signal=0.5,
            metadata={
                "requested_disease_id": "EFO_0000311",
                "disease_scores": [
                    {"disease_id": "EFO_0000311", "score": 0.7},
                    {"disease_id": "EFO_0000700", "score": 0.9},
                ],
                "all_disease_scores": [0.7, 0.9],
            },
        )
        assert agent._normalize_open_targets(ev) == 0.7
        assert ev.metadata.get("score_source_disease") == "EFO_0000311"

    def test_open_targets_multi_disease(self, agent):
        ev = _ev("open_targets", "X", raw_signal=0.5,
                 metadata={"all_disease_scores": [0.3, 0.9, 0.5]})
        assert agent._normalize_open_targets(ev) == 0.9

    def test_open_targets_missing(self, agent):
        ev = _ev("open_targets", "X", data_present=False)
        assert agent._normalize_open_targets(ev) is None

    def test_literature_high_count(self, agent):
        ev = _ev("literature", "X", total_available=1000, raw_signal=1000)
        # min(log10(1001) / 3.0, 1.0) = min(2.999/3, 1) ≈ 1.0
        result = agent._normalize_literature(ev)
        assert result is not None
        assert result >= 0.99

    def test_literature_zero_papers(self, agent):
        ev = _ev("literature", "X", total_available=0, raw_signal=0)
        assert agent._normalize_literature(ev) == 0.0

    def test_literature_missing(self, agent):
        ev = _ev("literature", "X", data_present=False)
        assert agent._normalize_literature(ev) is None

    def test_literature_moderate(self, agent):
        ev = _ev("literature", "X", total_available=100, raw_signal=100)
        # min(log10(101) / 3.0, 1.0) ≈ 0.668
        result = agent._normalize_literature(ev)
        assert 0.6 < result < 0.75

    def test_literature_prefers_raw_signal(self, agent):
        ev = _ev("literature", "X", total_available=1000, raw_signal=2)
        # raw_signal=2 -> log10(3)/3 ≈ 0.159
        result = agent._normalize_literature(ev)
        assert result < 0.3


# ===================================================================
# Confidence tests
# ===================================================================
class TestConfidence:
    """Tests for compute_source_confidence."""

    def test_pharos_always_high(self, agent):
        ev = _ev("pharos", "X")
        assert agent.compute_source_confidence("pharos", ev) == "high"

    def test_depmap_high(self, agent):
        ev = _ev("depmap", "X", total_available=25)
        assert agent.compute_source_confidence("depmap", ev) == "high"

    def test_depmap_medium(self, agent):
        ev = _ev("depmap", "X", total_available=10)
        assert agent.compute_source_confidence("depmap", ev) == "medium"

    def test_depmap_low(self, agent):
        ev = _ev("depmap", "X", total_available=3)
        assert agent.compute_source_confidence("depmap", ev) == "low"

    def test_missing_source(self, agent):
        ev = _ev("pharos", "X", data_present=False)
        assert agent.compute_source_confidence("pharos", ev) == "missing"

    def test_literature_high(self, agent):
        ev = _ev("literature", "X", total_available=200)
        assert agent.compute_source_confidence("literature", ev) == "high"

    def test_literature_low(self, agent):
        ev = _ev("literature", "X", total_available=5)
        assert agent.compute_source_confidence("literature", ev) == "low"


# ===================================================================
# Empty input edge case
# ===================================================================
class TestEmptyInput:
    def test_empty_list(self, agent):
        result = agent.score([])
        assert result.target_score == 0.0
        assert result.evidence_confidence == 0.0
        assert result.gene == "Unknown"
