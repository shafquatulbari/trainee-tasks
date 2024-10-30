from fastapi import APIRouter, Depends, status, Response, HTTPException
from .. import schemas, models, hashing, database
from sqlalchemy.orm import Session
from typing import List
from ..hashing import Hash
from ..repository import user

router = APIRouter(
    prefix='/user',
    tags=['users']
)
get_db = database.get_db



@router.post('/', response_model=schemas.ShowUser, tags=['users'])
def create_user(request: schemas.User, db: Session = Depends(get_db)):
    return user.create(request, db)

@router.get('/{id}', response_model=schemas.ShowUser, tags=['users'])
def get_user(id, db: Session = Depends(get_db)):
    return user.show(id, db)

