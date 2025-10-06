# Web Tóm Tắt Văn Bản

Ứng dụng web tóm tắt văn bản

## Yêu cầu hệ thống
- Python 3.11 (khuyến nghị dùng Python 3.11.x)
- Node.js 18+ và npm

## Chuẩn bị biến môi trường

## Cài đặt backend

```bash
cd backend
pip install --upgrade pip
pip install -r requirements.txt
```

Khởi động API:

```bash
uvicorn app.main:app --reload --port 8000
```

## Cài đặt frontend

```bash
cd frontend
npm install
npm run dev
```

Truy cập `http://localhost:5173` để xem ứng dụng.


