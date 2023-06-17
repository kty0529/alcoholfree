import GitHubIcon from "../../assets/svgs/github.svg";

import "./Footer.scss";

function Footer() {
  const iconList = ["🍺", "🍻", "🍾", "🍷", "🍹", "🥂", "🍸", "🍶", "🥃"];
  const randomIcon = iconList[Math.floor(Math.random() * iconList.length)];

  return (
    <footer className="footer">
      <div className="copyright">
        <span className="text">Alcohol Free ~</span>
        <span className="icon">{randomIcon}</span>
      </div>

      <div className="github">
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
