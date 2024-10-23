from sqlmodel import create_engine, SQLModel, Session, select

DATABASE_URL = "sqlite:///db.sqlite" #create a sqlite database in the current directory

engine = create_engine(DATABASE_URL, echo=True) #create an engine to connect to the database

def init_db():
    SQLModel.metadata.create_all(engine) #create the tables in the database by looking at the models that have table=True

# context manager to get a session from the engine
def get_session():
    with Session(engine) as session:
        yield session