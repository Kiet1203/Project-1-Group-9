# Web Tóm Tắt Văn Bản

Repository này bao gồm backend FastAPI và frontend React + Vite + TailwindCSS dùng để phát triển web tóm tắt văn bản.

## Yêu cầu môi trường
- Python 3.11 trở lên
- Node.js 18 trở lên (kèm npm)

## Thiết lập Backend
1. Tạo và kích hoạt virtual environment:
   ```bash
   python -m venv .venv
   .venv\Scripts\Activate.ps1   # PowerShell
   # hoặc
   source .venv/bin/activate     # bash/zsh
   ```
2. Cài đặt dependency Python:
   ```bash
   pip install -r backend/requirements.txt
   ```
3. Chạy API server (từ thư mục gốc):
   ```bash
   cd backend
   uvicorn app.main:app --reload
   ```
## Thiết lập Frontend
1. Cài đặt dependency:
   ```bash
   cd frontend
   npm install
   ```
2. Chạy server phát triển:
   ```bash
   npm run dev
   ```
3. Mở `http://localhost:5173` để xem giao diện. Khi dùng TailwindCSS, đảm bảo đã cấu hình PostCSS/Tailwind (cập nhật `package.json`, `tailwind.config.js`, v.v. nếu bổ sung).

