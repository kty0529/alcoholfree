import { useQuery } from "react-query";

// components
import Loading from "../../components/Loading/Loading";
import DrinkListItem from "../../components/DrinkListItem/DrinkListItem";
import Error from "../../components/Error/Error";

// pages
import styles from "./Main.module.scss";

function Main() {
  const { isLoading, data, error } = useQuery("fetchList", async () => {
    return await fetch(process.env.REACT_APP_NOTION_API)
      .then(res => res.json());
  }, {
    refetchOnWindowFocus: false
  });

  return (
    <main className={styles.main}>
      {
        error && <Error />
      }

      {
        ! error && (
          isLoading ? <Loading />
          : (
            <div className={styles.lists}>
              <ul>
                {
                  data.results.map((drink, index) => {
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
