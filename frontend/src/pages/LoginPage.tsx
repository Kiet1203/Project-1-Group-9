// LoginPage.tsx
import { Github, Chrome, Sparkles } from "lucide-react";
import "../styles/login.css"

const GoogleLogin = () => {
  window.location.href = `${import.meta.env.VITE_API_BASE}/auth/google/login`
}

const GitHubLogin = () => {
  window.location.href = `${import.meta.env.VITE_API_BASE}/auth/github/login`
}

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="animated-background">
        <div className="blob-container">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
      </div>

      <div className="grid-pattern" />
      
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      <div className="login-card-wrapper">
        <div className="card-glow" />
        
        <div className="login-card">
          <div className="login-header">
            <div className="icon-wrapper">
              <Sparkles className="header-icon" />
            </div>
            <h1 className="login-title">Chào Mừng</h1>
            <p className="login-subtitle">
              Chọn phương thức đăng nhập của bạn
            </p>
          </div>
          <div className="login-buttons">
            <button onClick={GoogleLogin} className="login-btn google-btn">
              <div className="btn-shine" />
              <div className="btn-content">
                <Chrome className="btn-icon" />
                <span>Tiếp tục với Google</span>
              </div>
            </button>

            <button onClick={GitHubLogin} className="login-btn github-btn">
              <div className="btn-shine" />
              <div className="btn-content">
                <Github className="btn-icon" />
                <span>Tiếp tục với GitHub</span>
              </div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}