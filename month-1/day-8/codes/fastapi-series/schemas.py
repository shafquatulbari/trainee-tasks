from enum import Enum
from pydantic import BaseModel, validator
from datetime import date

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

class Album(BaseModel):
    title: str
    release_date: date

# Band schema, 3 models are created
class BandBase(BaseModel):
    name: str
    genre: GenreChoices
    albums: list[Album] = []

class BandCreate(BandBase):
    @validator('genre', pre=True)
    def title_case_genre(cls, value):
        return value.title() # RoCK -> Rock

class BandWithId(BandBase):
    id: int