// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./DrinkListItem.scss";



function DrinkListItem(props) {
  // const NumberFormat = new Intl.NumberFormat();

  const DATA = props.properties;

  const uid = DATA.ID.unique_id.prefix + DATA.ID.unique_id.number;
  const thumbnail = DATA.Picture.files[0]?.file.url;
  const proof = DATA.Proof.number;
  const name = DATA.Name.title[0]?.plain_text;
  const name_en = DATA.Name_en.rich_text[0]?.plain_text;
  const category = DATA.Category.select.name;

  return (
    <Link to={uid} className="item">
      <div className="thumbnail">
        {thumbnail && <img src={thumbnail} alt="썸네일 이미지" />}
        {proof && <span className="proof">{proof}%</span>}
      </div>

      <div className="content">
        <div className="title">
          {name}
          {name_en && <small>{name_en}</small>}
        </div>

        <div className="category">{category}</div>
      </div>
    </Link>
  )
}

export default DrinkListItem;
