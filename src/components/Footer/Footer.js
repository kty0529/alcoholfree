import "./Footer.scss"

const iconList = ["🍺", "🍻", "🍾", "🍷", "🍹", "🥂", "🍸", "🍶", "🥃"];
const randomIcon = iconList[Math.floor(Math.random() * iconList.length)];

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://github.com/kty0529/alcoholfree"
        target="_blank"
        rel="noreferrer"
      >
        <span className="text">Alcohol Free ~</span>
        <span className="icon">{randomIcon}</span>
      </a>
    </footer>
  );
}

export default Footer;
