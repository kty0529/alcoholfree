export function Header() {
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      background: "rgba(5,5,5,0.92)",
      backdropFilter: "blur(20px)",
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 16px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <a href="#/" style={{ display: "flex", alignItems: "baseline", gap: "8px", textDecoration: "none", flexShrink: 0 }}>
          <span style={{
            fontFamily: "'Bodoni Moda', serif",
            fontStyle: "italic",
            fontSize: "20px",
            fontWeight: 700,
            color: "#f2ede6",
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
          }}>
            The Vault
          </span>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            fontWeight: 400,
            color: "#c8a97e",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}>
            Spirits
          </span>
        </a>
        <nav className="header-nav" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span className="header-nav-label" style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(242,237,230,0.6)",
            whiteSpace: "nowrap",
          }}>
            Curated Collection
          </span>
          <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#c8a97e", opacity: 0.85, flexShrink: 0 }} />
        </nav>
      </div>
      <style>{`@media (max-width: 480px) { .header-nav-label { display: none !important; } }`}</style>
    </header>
  );
}
