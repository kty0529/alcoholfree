import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DrinkListItem from "../../components/DrinkListItem/DrinkListItem";
import DrinkData from "../../data/DrinkData.json";

import "./Main.scss";

function Main() {
  return (
    <div id="main">
      <Header />

      <main className="main">
        <div className="lists">
          <ul>
            {
              DrinkData.map((item, index) => {
                return (
                  <li key={index}>
                    <DrinkListItem
                      name={item.name}
                      category={item.category}
                      store={item.price[0].store}
                      price={item.price[0].amount}
                      proof={item.proof}
                      thumbnail={item.thumbnail}
                    />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Main;
