from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship, declarative_base
import datetime

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    telegram_id = Column(Integer, unique=True, index=True)
    username = Column(String)
    referred_by = Column(Integer, ForeignKey('users.id'), nullable=True)
    referrals = relationship('User')
    tickets = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class Spin(Base):
    __tablename__ = 'spins'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    result = Column(String)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)

class Purchase(Base):
    __tablename__ = 'purchases'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    item = Column(String)
    cost = Column(Integer)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)

class Task(Base):
    __tablename__ = 'tasks'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    description = Column(String)
    completed = Column(Integer, default=0)
