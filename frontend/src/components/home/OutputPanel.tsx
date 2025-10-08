import "../../styles/outputPanel.css";

export default function OutputPanel() {
  const summary = "test";

  return (
    <div className="output-panel">
      <label className="output-label">Kết quả tóm tắt</label>
      <div className="output-container">
        <div className="output-box whitespace-pre-wrap">
          {summary || <span className="text-gray-500">Chưa có nội dung.</span>}
        </div>
      </div>
    </div>
  );
}
