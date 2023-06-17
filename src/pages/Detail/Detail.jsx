import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "../../components/Loading/Loading";

import "./Detail.scss";

function Detail() {
  const { page_id } = useParams();

  // 페이지 콘텐츠 가져오기
  // const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_NOTION_API}/pages.php?id=${page_id}`)
      .then((res) => res.json())
      .then((res) => {
        setIsLoaded(true);
        setItem(res.properties);
      }, () => {
        setIsLoaded(true);
        // setError(error);
      });
  }, []);

  const ITEM_DATA = {
    thumbnail: item.Picture?.files[0]?.file.url,
    name: item.Name?.title[0]?.plain_text,
    name_en: item.Name_en?.rich_text[0]?.plain_text,
    proof: item.Proof?.number,
    category: item.Category?.select.name,
    country: item.Country?.rich_text[0]?.plain_text,
    brewery: item.Brewery?.rich_text[0]?.plain_text,
    tags: item.Tags?.multi_select,
  }

  return (
    <main className="detail">
      {
        ! isLoaded ? <Loading />
        : (
          <>
            {
              ITEM_DATA.thumbnail && (
                <div className="thumbnail">
                  <img
                    src={ITEM_DATA.thumbnail}
                    alt="썸네일 이미지"
                  />

                  <a
                    href={ITEM_DATA.thumbnail}
                    aria-label="이미지 원본 보기"
                    target="_blank"
                    rel="noreferrer"
                  >
                      <span className="material-icons-outlined">
                        open_in_new
                      </span>
                    </a>
                </div>
              )
            }

            {
              ITEM_DATA.name && (
                <div className="data">
                  <h2 className="title">{ITEM_DATA.name}</h2>

                  <ul>
                    {ITEM_DATA.name_en && <li className="name_en"><strong>영문</strong> : {ITEM_DATA.name_en}</li>}
                    {ITEM_DATA.proof && <li className="proof"><strong>도수</strong> : {ITEM_DATA.proof}%</li>}
                    {ITEM_DATA.category && <li className="category"><strong>분류</strong> : {ITEM_DATA.category}</li>}
                    {ITEM_DATA.country && <li className="country"><strong>제조국</strong> : {ITEM_DATA.country}</li>}
                    {ITEM_DATA.brewery && <li className="brewery"><strong>제조사</strong> : {ITEM_DATA.brewery}</li>}
                    {ITEM_DATA.tags && (
                      <li className="tags">
                        {ITEM_DATA.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`notion-multi-select-color-${tag.color}`}>{tag.name}</span>
                        ))}
                      </li>
                    )}
                  </ul>
                </div>
              )
            }

            <div className="content">
              둠칫
            </div>
          </>
        )
      }
    </main>
  );
}

export default Detail;
