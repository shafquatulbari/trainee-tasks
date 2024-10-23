from fastapi import FastAPI, HTTPException, Path, Query, Depends
# from schemas import GenreURLChoices, BandBase, BandCreate, BandWithId   # Importing GenreURLChoices from schemas.py
from models import GenreURLChoices, BandBase, BandCreate, Band, Album, AlbumBase 
from typing import Annotated
from contextlib import asynccontextmanager
from db import init_db, get_session
from sqlmodel import Session, select

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield

app = FastAPI(lifespan=lifespan)

BANDS = [
    {'id':1 , 'name': 'Metallica', 'genre': 'Metal'},
    {'id':2 , 'name': 'Iron Maiden', 'genre': 'Metal'},
    {'id':3 , 'name': 'AC/DC', 'genre': 'Rock'},
    {'id':4 , 'name': 'Queen', 'genre': 'Rock', 'albums': [{'title': 'A Night at the Opera', 'release_date': '1975-11-21'}]},
    {'id':5 , 'name': 'Nirvana', 'genre': 'Grunge'},
] 

@app.get("/bands")
async def bands(genre: GenreURLChoices | None = None, q: Annotated[str | None, Query(max_length=10)] = None, session: Session = Depends(get_session)) -> list[Band]:
    band_list = session.exec(select(Band)).all()
    if genre: # Check if genre is provided
        band_list = [band for band in band_list if band.genre.value.lower() == genre.value]
    if q:
        band_list = [band for band in band_list if q.lower() in band.name.lower()]
    return band_list



@app.get("/bands/{band_id}")
async def band(band_id: Annotated[int, Path(title="The band ID")], session: Session = Depends(get_session)) -> Band:
    band = session.get(Band, band_id)
    if band:
        return band
    raise HTTPException(status_code=404, detail="Band not found")

@app.post("/bands")
async def create_band(band_data: BandCreate, session: Session = Depends(get_session)) -> Band:
    band = Band(name=band_data.name, genre=band_data.genre)
    session.add(band)

    if band_data.albums:
        for album in band_data.albums:
            album_obj = Album(title=album.title, release_date=album.release_date, band=band)
            session.add(album_obj)

    session.commit() # Commit the transaction in the database
    session.refresh(band)
    return band
###    OLD CODE   !!!!!   

# app = FastAPI() # FastAPI instance, we use this app to create routes

# BANDS = [
#     {'id':1 , 'name': 'Metallica', 'genre': 'Metal'},
#     {'id':2 , 'name': 'Iron Maiden', 'genre': 'Metal'},
#     {'id':3 , 'name': 'AC/DC', 'genre': 'Rock'},
#     {'id':4 , 'name': 'Queen', 'genre': 'Rock', 'albums': [{'title': 'A Night at the Opera', 'release_date': '1975-11-21'}]},
#     {'id':5 , 'name': 'Nirvana', 'genre': 'Grunge'},
# ]   

# #route decorator
# @app.get("/bands")
# #route function 
# async def bands(genre: GenreURLChoices | None = None, q: Annotated[str | None, Query(max_length=10)] = None
#                 ) -> list[BandWithId]:
#     band_list = [BandWithId(**b) for b in BANDS]
#     if genre: # Check if genre is provided
#         band_list = [band for band in band_list if band.genre.value.lower() == genre.value]
#     if q:
#         band_list = [band for band in band_list if q.lower() in band.name.lower()]
#     return band_list
    

# @app.get("/about")
# async def about() -> str:
#     return "About FastAPI"

# @app.get("/bands/{band_id}")
# async def band(band_id: Annotated[int, Path(title="The band ID")]) -> BandWithId:
#     band = next((BandWithId(**band) for band in BANDS if band['id'] == band_id), None)
#     if band:
#         return band
#     return HTTPException(status_code=404, detail="Band not found")

# @app.get("/bands/genre/{genre}")
# async def band_genre(genre: GenreURLChoices) -> list[BandWithId]:
#     bands = [band for band in BANDS if band['genre'].lower() == genre.value]
#     return bands

#route decorator
# @app.post("/bands")
# async def create_band(band_date: BandCreate) -> BandWithId:
#     id = BANDS[-1]['id'] + 1
#     band = BandWithId(id=id, **band_date.model_dump()) # Create a new band with the provided data and id
#     BANDS.append(band)
#     return band

