import DrinkListItem from "../../components/DrinkListItem/DrinkListItem";
import DrinkData from "../../data/DrinkData.json";

import "./Main.scss";

function Main() {
  return (
      <main className="main">
        <div className="lists">
          <ul>
            {
              DrinkData.map((item, index) => {
                return (
                  <li key={index}>
                    <DrinkListItem
                      {...item} />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </main>
  );
}

export default Main;
