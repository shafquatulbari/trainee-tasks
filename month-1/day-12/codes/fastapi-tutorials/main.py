#Import
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
# import uvicorn

#Instance
app = FastAPI() # Create an instance of FastAPI



#Decorator
@app.get("/") # Define a route, the base route
#Function
def index():
    return {'data':'blog list'} # Return a dictionary with a key 'data' and value 'blog list'


@app.get("/blog/unpublished")
def unpublished():
    #fetch unpublished blogs
    return {'data': 'all unpublished blogs'}


@app.get("/blog/{id}") 
def show(id: int):
    #fetch blog with id = id
    return {'data': id} # Return a dictionary with a key 'data' and value 'blog list'


@app.get("/blog/{id}/comments") 
def comments(id):
    #fetch comments of blog with id = id
    return {'data': {'1', '2'}} 

class Blog(BaseModel):
    title: str
    body: str
    published: Optional[bool]

@app.post("/blog")
def create_blog(request: Blog):
    #create a blog
    return {'data': f"Blog is created with title as {request.title} and body as {request.body}"}


# only for debugging purposes
# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=9000) # Run the server with python3 main.py