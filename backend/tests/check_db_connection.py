import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_db_connection():
    response = client.get("/test-db")
    data = response.json()

    # Kiểm tra API trả về 200
    assert response.status_code == 200

    # Kiểm tra có key "status"
    assert "status" in data
    assert data["status"] in ["ok", "error"]

    # Nếu DB kết nối ok → phải trả về result = 1
    if data["status"] == "ok":
        assert data["result"] == 1
    else:
        # Nếu lỗi → phải có message
        assert "message" in data
