# Web Tóm Tắt Văn Bản

Repository này bao gồm backend FastAPI và frontend React + Vite + TailwindCSS dùng để thử nghiệm tính năng tóm tắt văn bản tự động.

## Yêu cầu môi trường
- Python 3.11 trở lên
- Node.js 18 trở lên (kèm npm)
- Cơ sở dữ liệu PostgreSQL (chạy bằng container local hoặc dịch vụ cloud như Neon)

## Cài đặt Backend
1. Tạo và kích hoạt virtual environment:
   ```
   python -m venv .venv
  .venv\Scripts\Activate.ps1   # PowerShell
  # hoặc
  source .venv/bin/activate    # bash/zsh
   ```
2. Cài đặt các gói phụ thuộc:
   ```
   pip install -r backend/requirements.txt
   ```
3. Khởi động API server từ thư mục gốc dự án:
   ```
   uvicorn app.main:app --app-dir backend --reload
   ```
## Cài đặt Frontend
1. Cài đặt các gói phụ thuộc:
   ```
   cd frontend
   npm install
   ```
2. Chạy server phát triển:
   ```
   npm run dev
   ```
3. Mở URL của Vite dev server (default `http://localhost:5173`) để xem giao diện người dùng.
