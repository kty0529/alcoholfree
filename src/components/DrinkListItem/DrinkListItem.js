import "./DrinkListItem.scss";

function DrinkListItem(props) {
  const NumberFormat = new Intl.NumberFormat();

  return (
    <a href={`#${props.name.kr}`}>
      <div className="item">
        <div className="thumbnail">
          {props.thumbnail && <img src={require(`../../assets/images/${props.thumbnail}`)} alt="썸네일 이미지" />}
          {props.proof && <span className="proof">{props.proof}%</span>}
        </div>

        <div className="content">
          <div className="title">
            {props.name.kr}
            {props.name.en && <small>{props.name.en}</small>}
          </div>

          <div className="category">{props.category}</div>

          <div className="price">
            {
              props.price && props.price.map((store, index) => {
                return index === 0 && (
                  <div className="block" key={index}>
                    <span className="store">{store.store}</span>
                    <span className="amount">{NumberFormat.format(store.amount)}원</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </a>
  )
}

export default DrinkListItem;
