# backend/app/core/config.py
import os
from pathlib import Path
from dotenv import load_dotenv

ENV_PATH = Path(__file__).resolve().parents[2] / ".env"
load_dotenv(dotenv_path=ENV_PATH)

class Settings:
    PROJECT_NAME: str = "Project 1 API"
    DATABASE_URL: str | None = os.getenv("DATABASE_URL")

