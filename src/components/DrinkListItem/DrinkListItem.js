import "./DrinkListItem.scss";

function DrinkListItem(props) {
  const NumberFormat = new Intl.NumberFormat();

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
            <span className="amount">{NumberFormat.format(props.price)}원</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default DrinkListItem;
