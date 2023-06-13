import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Detail.scss";

function Detail() {
  // 이전 페이지 데이터 가져오기
  const location = useLocation();
  const { uid, name, name_en, thumbnail, proof, category, country, brewery, tags } = location.state;

  // 페이지 콘텐츠 가져오기
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_NOTION_API}/blocks.php?id=${uid}`)
      .then((res) => res.json())
      .then((res) => {
        setIsLoaded(true);
        setItem(res.results);
      }, (error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  console.log(item, error, isLoaded);

  return (
      <main className="detail">
        <div className="thumbnail">
          <img src={thumbnail} alt={`${name} 썸네일 이미지`} />

          <a
            href={thumbnail} aria-label="원본보기">
              <span className="material-icons-outlined">open_in_new</span>
            </a>
        </div>

        <div className="data">
          <h2 className="title">{name}</h2>

          <ul>
            {name_en && <li className="name_en"><strong>영문</strong> : {name_en}</li>}
            {proof && <li className="proof"><strong>도수</strong> : {proof}%</li>}
            {category && <li className="category"><strong>종류</strong> : {category}</li>}
            {country && <li className="country"><strong>국가</strong> : {country}</li>}
            {brewery && <li className="brewery"><strong>제조</strong> : {brewery}</li>}
            {tags.multi_select && (
              <li className="tags">
                {tags.multi_select.map((tag, index) => (
                  <span
                    key={index}
                    className={`notion-multi-select-color-${tag.color}`}>{tag.name}</span>
                ))}
              </li>
            )}
          </ul>
        </div>

        <div className="content">
          둠칫
        </div>
      </main>
  );
}

export default Detail;
