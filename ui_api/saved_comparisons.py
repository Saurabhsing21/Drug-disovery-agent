from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy import and_, or_
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime

from ui_api.db import get_db
from ui_api.db_models import SavedComparison

router = APIRouter(prefix="/saved-comparisons", tags=["saved_comparisons"])

class SavedComparisonBase(BaseModel):
    title: str
    run_a_id: str
    run_b_id: str
    compare_markdown: Optional[str] = None
    data_snapshot: Optional[dict] = None

class SavedComparisonResponse(SavedComparisonBase):
    id: str
    created_at: datetime

    class Config:
        from_attributes = True


def _serialize(comp: SavedComparison) -> SavedComparisonResponse:
    return SavedComparisonResponse(
        id=str(comp.id),
        title=comp.title,
        run_a_id=comp.run_a_id,
        run_b_id=comp.run_b_id,
        compare_markdown=comp.compare_markdown,
        data_snapshot=comp.data_snapshot,
        created_at=comp.created_at,
    )


def _find_existing_pair(db: Session, run_a_id: str, run_b_id: str) -> SavedComparison | None:
    return (
        db.query(SavedComparison)
        .filter(
            or_(
                and_(SavedComparison.run_a_id == run_a_id, SavedComparison.run_b_id == run_b_id),
                and_(SavedComparison.run_a_id == run_b_id, SavedComparison.run_b_id == run_a_id),
            )
        )
        .order_by(SavedComparison.created_at.desc())
        .first()
    )

@router.get("/", response_model=List[SavedComparisonResponse])
def list_comparisons(db: Session = Depends(get_db)):
    comparisons = db.query(SavedComparison).order_by(SavedComparison.created_at.desc()).all()
    return [_serialize(comp) for comp in comparisons]

@router.post("/", response_model=SavedComparisonResponse)
def save_comparison(data: SavedComparisonBase, db: Session = Depends(get_db)):
    existing = _find_existing_pair(db, data.run_a_id, data.run_b_id)
    if existing is not None:
        existing.title = data.title
        existing.run_a_id = data.run_a_id
        existing.run_b_id = data.run_b_id
        existing.compare_markdown = data.compare_markdown
        existing.data_snapshot = data.data_snapshot
        db.add(existing)
        db.commit()
        db.refresh(existing)
        return _serialize(existing)

    new_comp = SavedComparison(
        title=data.title,
        run_a_id=data.run_a_id,
        run_b_id=data.run_b_id,
        compare_markdown=data.compare_markdown,
        data_snapshot=data.data_snapshot,
    )
    db.add(new_comp)
    db.commit()
    db.refresh(new_comp)
    return _serialize(new_comp)

@router.get("/{comp_id}", response_model=SavedComparisonResponse)
def get_comparison(comp_id: str, db: Session = Depends(get_db)):
    comp = db.query(SavedComparison).filter(SavedComparison.id == comp_id).first()
    if not comp:
        raise HTTPException(status_code=404, detail="Comparison not found")
    return _serialize(comp)
