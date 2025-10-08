
import '../../styles/inputPanel.css'
import OutputPanel from "./OutputPanel";

export default function InputPanel() {
  return (
    <div className="ip-panel">
      <div className="ip-wrap">
        <label className="ip-label">Nội dung cần tóm tắt</label>
        <div className="mb-4">
          <textarea
            placeholder="Nhập văn bản hoặc dán tại đây, sau đó nhấn click chuột vào Summarize để tóm tắt văn bản."
            className="ip-textarea resize-none"
          />
        </div>
      </div>
      <div className="ip-wrap">
        <OutputPanel />
      </div>
    </div>
  );
}
