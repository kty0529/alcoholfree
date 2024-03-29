import Logo from "../../assets/svgs/logo.svg";

import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <a href={process.env.PUBLIC_URL} aria-label="알콜프리">
          <img src={Logo} alt="알콜프리 로고 이미지" />
        </a>
      </h1>

      {/* <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="#1" aria-label="검색">
              <span className="material-icons-outlined">search</span>
            </a>
          </li>
          <li>
            <a href="#2" aria-label="분류">
              <span className="material-icons-outlined">inventory_2</span>
            </a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Header;
