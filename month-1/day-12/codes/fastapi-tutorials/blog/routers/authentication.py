from fastapi import APIRouter, Depends, status, Response, HTTPException
from .. import schemas, models, hashing, database
from sqlalchemy.orm import Session
from ..hashing import Hash

router = APIRouter(tags=['authentication'])

@router.post('/login')
def login(request: schemas.Login, db: Session = Depends(database.get_db)):
    user = db.query(models.User).filter(
        models.User.email == request.username).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Invalid Credentials")
    if not Hash.verify(user.password, request.password):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Incorrect password")

