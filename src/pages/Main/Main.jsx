import { useEffect, useState } from "react";

import Loading from "../../components/Loading/Loading";
import DrinkListItem from "../../components/DrinkListItem/DrinkListItem";

import "./Main.scss";

function Main() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
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

  return (
    <main className="main">
      {
        error && (
          <>로딩중 에러가 발생했습니다.</>
        )
      }

      {
        ! error && (
          ! isLoaded ? <Loading />
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
        )
      }
    </main>
  )
}

export default Main;
