# app/routers/user_me.py
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from app.models.user import User
from app.core.security import get_current_user

router = APIRouter(prefix="/user", tags=["user"])

class UserView(BaseModel):
    id: str
    email: str | None = None
    full_name: str | None = None
    avatar_url: str | None = None

@router.get("/me", response_model=UserView)
def me(current: User = Depends(get_current_user)):
    return UserView(
        id=str(current.id),
        email=current.email,
        full_name=current.full_name,
        avatar_url=current.avatar_url,
    )
