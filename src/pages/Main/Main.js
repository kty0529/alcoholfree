import "./Main.scss";
import sample from "../../assets/images/sample.webp";

// components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Main() {
  return (
    <div id="main">
      <Header />

      <main className="main">
        <div className="lists">
          <ul>
            <li>
              <a href="#1">
                <div className="item">
                  <div className="thumbnail">
                    <img src={sample} alt="썸네일 이미지" />
                    <span className="degree">41%</span>
                  </div>

                  <div className="content">
                    <div className="title">파코리 16년</div>

                    <div className="category">깔바도스</div>

                    <div className="price">129.000원</div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#1">
                <div className="item">
                  <div className="thumbnail">
                    <img src={sample} alt="썸네일 이미지" />
                    <span className="degree">41%</span>
                  </div>

                  <div className="content">
                    <div className="title">파코리 16년</div>

                    <div className="category">깔바도스</div>

                    <div className="price">129.000원</div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#1">
                <div className="item">
                  <div className="thumbnail">
                    <img src={sample} alt="썸네일 이미지" />
                    <span className="degree">41%</span>
                  </div>

                  <div className="content">
                    <div className="title">파코리 16년</div>

                    <div className="category">깔바도스</div>

                    <div className="price">129.000원</div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#1">
                <div className="item">
                  <div className="thumbnail">
                    <img src={sample} alt="썸네일 이미지" />
                    <span className="degree">41%</span>
                  </div>

                  <div className="content">
                    <div className="title">파코리 16년</div>

                    <div className="category">깔바도스</div>

                    <div className="price">129.000원</div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#1">
                <div className="item">
                  <div className="thumbnail">
                    <img src={sample} alt="썸네일 이미지" />
                    <span className="degree">41%</span>
                  </div>

                  <div className="content">
                    <div className="title">파코리 16년</div>

                    <div className="category">깔바도스</div>

                    <div className="price">129.000원</div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Main;
