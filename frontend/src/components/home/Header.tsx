import { FileText, Menu, User, Sparkles } from "lucide-react";
import "../../styles/Header.css";

const handleLogin = () => {
  window.location.href = "/login";
};

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-glow"></div>
      <div className="header-inner">
        <div className="header-bar">
          <div className="logo-container">
            <div className="logo">
              <div className="logo-badge">
                <FileText className="icon-6 text-white" />
                <div className="logo-shine"></div>
              </div>
              <div className="logo-text-wrapper">
                <span className="logo-text">Summarizer</span>
                <Sparkles className="icon-4 sparkle-icon" />
              </div>
            </div>
          </div>

          <div className="nav-right">
            <button onClick={handleLogin} className="account-btn">
              <div className="btn-bg"></div>
              <User className="icon-4" />
              <span className="hidden sm:inline">Đăng nhập</span>
            </button>
            <button className="menu-btn">
              <Menu className="icon-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}