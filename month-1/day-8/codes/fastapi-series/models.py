from enum import Enum
from pydantic import BaseModel, validator
from datetime import date
from sqlmodel import Field, SQLModel, Relationship

class GenreURLChoices(Enum):
    ROCK = "rock"
    METAL = "metal"
    GRUNGE = "grunge"
    ELECTRONIC = "electronic"

class GenreChoices(str, Enum):
    rock = "Rock"
    metal = "Metal"
    grunge = "Grunge"
    electronic = "Electronic"

class AlbumBase(SQLModel):
    title: str
    release_date: date
    band_id: int = Field(default=None, foreign_key="band.id")

class Album(AlbumBase, table=True):
    id: int = Field(default=None, primary_key=True)
    band: "Band" = Relationship(back_populates="albums")

# Band schema, 3 models are created
class BandBase(SQLModel):
    name: str
    genre: GenreChoices

class BandCreate(BandBase):  
    albums: list[AlbumBase] | None = None # List of albums
    @validator('genre', pre=True)
    def title_case_genre(cls, value):
        return value.title() # RoCK -> Rock

class Band(BandBase, table=True):
    id: int = Field(default=None, primary_key=True)
    albums: list[Album] = Relationship(back_populates="band")