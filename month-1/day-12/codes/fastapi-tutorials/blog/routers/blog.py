from fastapi import APIRouter, Depends, status, Response, HTTPException
from .. import schemas, models, hashing, database
from sqlalchemy.orm import Session
from typing import List
from ..repository import blog

router = APIRouter(
    tags=['blogs'],
    prefix='/blog'
)

@router.get("/", status_code= status.HTTP_200_OK, response_model=List[schemas.ShowBlog]) # response_model is used to return the response in the form of a list of ShowBlog
def all(db: Session = Depends(database.get_db)):
    return blog.get_all(db)

@router.post("/", status_code= status.HTTP_201_CREATED)
def create(request: schemas.Blog, db: Session = Depends(database.get_db)):
    return blog.create(request, db)

@router.delete("/{id}", status_code= status.HTTP_204_NO_CONTENT)
def destroy(id, db: Session = Depends(database.get_db)):
   return blog.destroy(id, db)

@router.put("/{id}", status_code= status.HTTP_202_ACCEPTED)
def update(id, request: schemas.Blog, db: Session = Depends(database.get_db)):
    return blog.update(id, request, db)

@router.get("/{id}", status_code= status.HTTP_200_OK, response_model=schemas.ShowBlog)
def show(id, response: Response, db: Session = Depends(database.get_db)):
    return blog.show(id, db)



