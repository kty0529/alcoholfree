import { Link } from "react-router-dom";

import "./DrinkListItem.scss";

function DrinkListItem(props) {
  const DATA = props.properties;

  const ITEM_DATA = {
    page_id: props.id,
    thumbnail: DATA.Picture?.files[0]?.file.url,
    proof: DATA.Proof?.number,
    name: DATA.Name?.title[0]?.plain_text,
    name_en: DATA.Name_en?.rich_text[0]?.plain_text,
    category: DATA.Category?.select.name,
  }

  return (
    <Link
      to={ITEM_DATA.page_id}
      className="item"
    >
      <div className="thumbnail">
        {ITEM_DATA.thumbnail && <img loading="lazy" src={ITEM_DATA.thumbnail} alt="썸네일 이미지" />}
        {ITEM_DATA.proof && <span className="proof">{ITEM_DATA.proof}%</span>}
      </div>

      <div className="content">
        <div className="title">
          {ITEM_DATA.name}
          {ITEM_DATA.name_en && <small>{ITEM_DATA.name_en}</small>}
        </div>

        <div className="category">{ITEM_DATA.category}</div>
      </div>
    </Link>
  )
}

export default DrinkListItem;
