
import "./DrinkListItem.scss";

type DrinkListItemProps = {
  name: string,
  category: string,
  store: string,
  price: number,
  proof: number,
  thumbnail: string,
}

function DrinkListItem(props) {
  console.log(props.thumbnail);

  return (
    <a href="#1">
      <div className="item">
        <div className="thumbnail">
          {props.thumbnail && <img src={props.thumbnail} alt="썸네일 이미지" /> }
          <span className="proof">{props.proof}%</span>
        </div>

        <div className="content">
          <div className="title">{props.name}</div>

          <div className="category">{props.category}</div>

          <div className="price">
            <span className="store">{props.store}</span>
            <span className="amount">{props.price}원</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default DrinkListItem;
