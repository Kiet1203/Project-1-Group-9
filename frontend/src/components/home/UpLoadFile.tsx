import {FileText } from "lucide-react";
import "../../styles/uploadFile.css";

export default function UpLoadFile() {
  return (
    <button type="button" className="ip-upload" aria-label="Tải lên tệp tin">
      <FileText className="ip-icon" />
      <span>Tải lên tệp tin</span>
    </button>
  );
}
