from fastapi import FastAPI
from . import schemas, models
from .database import engine, SessionLocal
from sqlalchemy.orm import Session
from fastapi import Depends

app = FastAPI()

models.Base.metadata.create_all(engine) #this is just like migrate in Django, we create the tables in the database

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/blog", status_code=201)
def create(request: schemas.Blog, db: Session = Depends(get_db)):
    new_blog = models.Blog(title=request.title, body=request.body)
    db.add(new_blog) # add the new blog to the database
    db.commit() # commit the changes
    db.refresh(new_blog) # refresh the database
    return new_blog

@app.get("/blog")
def all(db: Session = Depends(get_db)):
    blogs = db.query(models.Blog).all() # get all the blogs from the database
    return blogs

@app.get("/blog/{id}")
def show(id, db: Session = Depends(get_db)):
    blog = db.query(models.Blog).filter(models.Blog.id == id).first()
    return blog