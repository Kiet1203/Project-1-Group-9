from pydantic import BaseModel, ConfigDict, EmailStr
from .identity import IdentityOut

class UserOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: str
    email: EmailStr | None = None
    email_verified: bool = False
    full_name: str | None = None
    avatar_url: str | None = None
    is_active: bool = True
    identity: IdentityOut