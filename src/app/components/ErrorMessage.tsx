export function ErrorMessage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "320px", gap: "12px", textAlign: "center" }}>
      <span style={{ fontSize: "32px", opacity: 0.6 }}>⚠</span>
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(242,237,230,0.65)", lineHeight: 2 }}>
        Failed to load<br />Please refresh
      </p>
    </div>
  );
}
