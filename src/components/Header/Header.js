import './Header.scss'

function Header() {
  return (
    <header className="header">
      <h1 className="title"><a href="#main">A.</a></h1>

      <nav className="navigation">
        <ul>
          <li><a href="#1">nav1</a></li>
          <li><a href="#2">nav2</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
