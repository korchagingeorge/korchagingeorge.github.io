from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base

# Создаём локальную базу данных SQLite
engine = create_engine('sqlite:///bot/data.db', connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def init_db():
    Base.metadata.create_all(bind=engine)
