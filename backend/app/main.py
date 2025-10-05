from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.db.session import SessionLocal
from starlette.middleware.sessions import SessionMiddleware
from app.core.config import settings
from app.api.auth.google_oauth import router as google_api
from app.api.auth.github_oauth import router as github_api

app = FastAPI()

app.add_middleware(
    SessionMiddleware,
    secret_key=settings.SECRET_KEY,  
    session_cookie="sid",            
    same_site="lax",                 
    https_only=False,               
    max_age=60 * 60 * 2,              
)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/test-db")
def db_test(db: Session = Depends(get_db)):
    try:
        result = db.execute(text("SELECT 1")).scalar()
        return {"status": "ok", "result": result}
    except Exception as e:
        return {"status": "error", "message": str(e)}
    
app.include_router(google_api)
app.include_router(github_api)
