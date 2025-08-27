# models/user.py

from sqlalchemy import Column, Integer, String
from .base import Base
from passlib.context import CryptContext
from datetime import datetime, timedelta, timezone  # New import for timestamps
import jwt  # New import for token generation

# Import the secret from the environment file
from config.environment import secret

from sqlalchemy.orm import relationship # add relationship


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class UserModel(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    password_hash = Column(String, nullable=True)
    
     # NEW: Relationship - a user can have multiple teas
    teas = relationship('TeaModel', back_populates='user')

    def set_password(self, password: str):
        self.password_hash = pwd_context.hash(password)

    # Method to verify the password
    def verify_password(self, password: str) -> bool:
        return pwd_context.verify(password, self.password_hash)

    # Method to generate a JWT token
    def generate_token(self):
        # Define the payload
        payload = {
            "exp": datetime.now(timezone.utc) + timedelta(days=1),  # Expiration time (1 day)
            "iat": datetime.now(timezone.utc),  # Issued at time
            "sub": str(self.id),  # Subject - the user ID
        }

        # Create the JWT token
        token = jwt.encode(payload, secret, algorithm="HS256")

        return token
