import "./Footer.scss"

const iconList = ["🍺", "🍻", "🍾", "🍷", "🍹", "🥂", "🍸", "🍶", "🥃"];
const randomIcon = iconList[Math.floor(Math.random() * iconList.length)];

function Footer() {
  return (
    <footer className="footer">
      <span className="text">Alcohol Free ~</span>
      <span className="icon">{randomIcon}</span>
    </footer>
  );
}

export default Footer;
