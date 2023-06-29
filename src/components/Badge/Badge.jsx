import styles from "./Badge.module.scss";

function Badge({ color, text }) {
  return (
    <span className={`${styles.badge} notion-multi-select-color-${color}`}>{text}</span>
  );
}

export default Badge;
