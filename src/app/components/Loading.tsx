export function Loading() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "320px", gap: "20px" }}>
      <div style={{ position: "relative", width: "44px", height: "44px" }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(200,169,126,0.1)" }} />
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid transparent", borderTopColor: "#c8a97e", animation: "spin 1.2s cubic-bezier(0.5,0,0.5,1) infinite" }} />
      </div>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,237,230,0.6)" }}>
        Pouring...
      </span>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
