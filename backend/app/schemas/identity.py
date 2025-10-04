from pydantic import BaseModel, ConfigDict
from datetime import datetime
from .enums import Provider

class IdentityOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    provider: Provider
    provider_user_id: str              # Google: sub; GitHub: id
    provider_email: str | None = None
    linked_at: datetime | None = None
    last_login_at: datetime | None = None
