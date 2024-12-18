from fastapi import FastAPI
from . import models
from .database import engine
from .routers import blog, user
from .routers import authentication

app = FastAPI()

models.Base.metadata.create_all(engine) #this is just like migrate in Django, we create the tables in the database

app.include_router(authentication.router)
app.include_router(blog.router)
app.include_router(user.router)



