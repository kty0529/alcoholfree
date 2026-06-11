interface BadgeProps {
  color: string;
  text: string;
}

export function Badge({ color, text }: BadgeProps) {
  return (
    <span
      className={`notion-multi-select-color-${color}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 9px",
        borderRadius: "2px",
        fontSize: "10px",
        fontFamily: "'DM Mono', monospace",
        fontWeight: 500,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      {text}
    </span>
  );
}
