import GitHubIcon from "../../assets/svgs/github.svg";

import styles from "./Footer.module.scss";

function Footer() {
  const iconList = ["🍺", "🍻", "🍾", "🍷", "🍹", "🥂", "🍸", "🍶", "🥃"];
  const randomIcon = iconList[Math.floor(Math.random() * iconList.length)];

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <span className={styles.text}>Alcohol Free ~</span>
        <span className={styles.icon}>{randomIcon}</span>
      </div>

      <div className={styles.github}>
        <a
          href="https://github.com/kty0529/alcoholfree"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GitHubIcon} alt="GitHub 아이콘" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
