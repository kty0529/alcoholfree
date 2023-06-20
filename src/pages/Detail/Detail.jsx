import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

// components
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import Badge from "../../components/Badge/Badge";

// pages
import "./Detail.scss";

function Detail() {
  const { page_id } = useParams();

  // 페이지 콘텐츠 가져오기
  const { isLoading, data, error } = useQuery("fetchDetail", async () => {
    return await fetch(`${process.env.REACT_APP_NOTION_API}/pages.php?id=${page_id}`)
      .then(res => res.json());
  }, {
    refetchOnWindowFocus: false
  });

  let ITEM_DATA = {};
  if ( ! isLoading ) {
    ITEM_DATA = {
      thumbnail: data.properties.Picture?.files[0]?.file.url,
      name: data.properties.Name?.title[0]?.plain_text,
      name_en: data.properties.Name_en?.rich_text[0]?.plain_text,
      proof: data.properties.Proof?.number,
      category: data.properties.Category?.select.name,
      country: data.properties.Country?.rich_text[0]?.plain_text,
      brewery: data.properties.Brewery?.rich_text[0]?.plain_text,
      tags: data.properties.Tags?.multi_select,
    }
  }

  return (
    <main className="detail">
      {
        error && <Error />
      }

      {
        ! error && (
          isLoading ? <Loading />
          : (
            <>
              {
                ITEM_DATA.thumbnail && (
                  <div className="thumbnail-block">
                    <img
                      className="thumbnail"
                      src={ITEM_DATA.thumbnail}
                      alt="썸네일 이미지"
                    />

                    <a
                      className="original"
                      href={ITEM_DATA.thumbnail}
                      aria-label="이미지 원본 보기"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="material-icons-outlined">
                        open_in_new
                      </span>
                    </a>

                    <img
                      className="background"
                      src={ITEM_DATA.thumbnail}
                      alt="썸네일 이미지"
                    />
                  </div>
                )
              }

              {
                ITEM_DATA.name && (
                  <div className="data-block">
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
                            <Badge
                              key={index}
                              color={tag.color}
                              text={tag.name}
                            />
                          ))}
                        </li>
                      )}
                    </ul>
                  </div>
                )
              }

              {/* <div className="content-block">
                둠칫
              </div> */}
            </>
          )
        )
      }
    </main>
  );
}

export default Detail;
