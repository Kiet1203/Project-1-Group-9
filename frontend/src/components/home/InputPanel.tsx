import { Clipboard, Sparkles } from "lucide-react";
import { useState } from "react";
import OutputPanel from "./OutputPanel";
import "../../styles/inputPanel.css";

export default function InputPanel() {
  const [inputText, setInputText] = useState("");
  const maxChars = 10;

  return (
    <div className="ip-page">
      <div className="ip-container">
        <div className="ip-hero">
          <div className="ip-hero-row">
            <Sparkles className="ip-hero-icon" />
            <h1 className="ip-title">Tóm tắt văn bản</h1>
          </div>
        </div>

        <div className="ip-panel">
          <div className="ip-wrap">
            <div className="ip-card">
              <label className="ip-label">
                <span className="ip-label-dot" />
                Nội dung cần tóm tắt
              </label>

              <div className="ip-field">
                <textarea
                  className="ip-textarea"
                  placeholder="Nhập văn bản hoặc dán tại đây, sau đó nhấn Summarize để tóm tắt văn bản..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  maxLength={maxChars}
                />
              </div>

              <div className="ip-help">
                <span className="ip-hint">💡 Hỗ trợ tối đa {maxChars.toLocaleString()} ký tự</span>
                <span className="ip-count">
                  {inputText.length.toLocaleString()} / {maxChars.toLocaleString()}
                </span>
              </div>

              <div className="ip-actions">
                <button type="button" className="ip-primary">
                  <Sparkles className="ip-icon" />
                  <span>Tóm tắt</span>
                </button>
              </div>
            </div>
          </div>

          <div className="ip-wrap">
            <div className="ip-card ip-card-output">
              <label className="ip-label">
                <span className="ip-label-dot ip-label-dot-purple" />
                Kết quả tóm tắt
              </label>
              <OutputPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
