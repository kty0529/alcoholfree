import './Main.scss';
import sample from '../../assets/images/sample.webp';

function Main() {
  return (
    <div id="main">
      <header className="header">
        <h1 className="title"><a href="#main">A.</a></h1>

        <nav className="navigation">
          <ul>
            <li><a href="#1">nav1</a></li>
            <li><a href="#2">nav2</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <div className="lists">
          <ul>
            <li>
              <a href="#1">
                <div className="item">
                  <img className="thumbnail" src={sample} alt="썸네일 이미지" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">(c) Alcohol Free ~ 🎵</footer>
    </div>
  );
}

export default Main;
