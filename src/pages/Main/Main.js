import { useEffect, useState } from "react";

import DrinkListItem from "../../components/DrinkListItem/DrinkListItem";
// import DrinkData from "../../data/DrinkData.json";

import "./Main.scss";

function Main() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
    console.log("fetchDrinkList");

    fetch(process.env.REACT_APP_NOTION_API)
      .then((res) => res.json())
      .then((res) => {
        setIsLoaded(true);
        setItem(res.results);
      }, (error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  const statusClass = isLoaded && error === null ? "done" : "loading";

  return (
    <main className={`main ${statusClass}`}>
      {
        ! isLoaded || error
        ? (
          <div className="message">
            <span className="icon material-icons-outlined">hourglass_empty</span>
            <div className="text">로딩이 계속되면 페이지를 새로고침 해주세요.</div>
          </div>
          )
        : (
          <div className="lists">
            <ul>
              {
                item.map((drink, index) => {
                  return (
                    <li key={index}>
                      <DrinkListItem
                        {...drink} />
                    </li>
                  )
                })
              }
            </ul>
          </div>
        )
      }
    </main>
  )
}

export default Main;
