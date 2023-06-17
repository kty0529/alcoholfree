import "./Badge.scss";

function Badge({ color, text }) {
  return (
    <span className={`badge notion-multi-select-color-${color}`}>{text}</span>
  );
}

export default Badge;
