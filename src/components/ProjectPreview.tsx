function PreviewBar({ label }: { label: string }) {
  return (
    <div className="preview-bar">
      <span />
      <span />
      <span />
      <b>{label}</b>
      <i>•••</i>
    </div>
  );
}

function VendorRiskPreview() {
  return (
    <>
      <div className="preview-heading">
        <strong>Vendor analysis</strong>
        <small>Acme Security.pdf</small>
      </div>
      <div className="risk-summary">
        <div className="risk-score">
          <small>RISK SCORE</small>
          <b>34<span>/100</span></b>
          <em>Moderate risk</em>
        </div>
        <div className="control-count">
          <small>CONTROLS REVIEWED</small>
          <b>22</b>
          <span>↗ analysis complete</span>
        </div>
      </div>
      <div className="control-bars">
        <div><span>Covered</span><i style={{ width: "68%" }} /><b>15</b></div>
        <div><span>Partial</span><i style={{ width: "27%" }} /><b>06</b></div>
        <div><span>Missing</span><i style={{ width: "9%" }} /><b>02</b></div>
      </div>
    </>
  );
}

function RagTubePreview() {
  return (
    <>
      <div className="preview-heading">
        <strong>Ask your transcript</strong>
        <small>RagTube / video loaded</small>
      </div>
      <div className="rag-query">
        <span>What was the main idea?</span>
        <b>⌕</b>
      </div>
      <div className="rag-answer">
        <div className="answer-label"><span /> GROQ ANSWER · GROUNDED</div>
        <p>The speaker explains how retrieval gives language models reliable context before they answer.</p>
        <div className="timestamps"><span>[ 04:32 ]</span><span>[ 07:18 ]</span><span>NDJSON stream</span></div>
      </div>
    </>
  );
}

function AttendancePreview() {
  return (
    <>
      <div className="preview-heading">
        <strong>Live attendance</strong>
        <small>CS / 03 OCT 2026</small>
      </div>
      <div className="camera-panel">
        <div className="face-frame"><span /><span /><span /><span /></div>
        <small>CAMERA 01 · SCANNING</small>
        <b>Face detected</b>
      </div>
      <div className="attendance-list">
        <div><span className="avatar">AS</span><b>Arjun Sharma</b><em>Present · 09:42</em></div>
        <div><span className="avatar">NK</span><b>Neha Kapoor</b><em>Present · 09:44</em></div>
      </div>
    </>
  );
}

export function ProjectPreview({ variant }: { variant: string }) {
  return (
    <div className={`project-preview ${variant}`} aria-label={`${variant} project preview`}>
      <PreviewBar label={variant === "analytics" ? "vendor-risk / analysis" : variant === "commerce" ? "ragtube / ask" : "attendance / live"} />
      {variant === "analytics" && <VendorRiskPreview />}
      {variant === "commerce" && <RagTubePreview />}
      {variant === "collab" && <AttendancePreview />}
    </div>
  );
}
