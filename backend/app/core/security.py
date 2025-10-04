import jwt
from app.core.config import settings
from datetime import datetime, timedelta, timezone
def create_access_token(sub: str, minutes: int = 60) -> str:
    payload = {"sub": sub, "exp": datetime.now(timezone.utc) + timedelta(minutes=minutes)}
    return jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")

def decode_token(token: str):
    return jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
