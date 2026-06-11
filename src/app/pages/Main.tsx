import { useQuery } from "@tanstack/react-query";
import { DrinkListItem } from "../components/DrinkListItem";
import { Loading } from "../components/Loading";
import { ErrorMessage } from "../components/ErrorMessage";

const NOTION_API = import.meta.env.VITE_NOTION_API;

export function Main() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["fetchList"],
    queryFn: async () => {
      const res = await fetch(NOTION_API);
      return res.json();
    },
  });

  return (
    <main className="flex flex-1 flex-col bg-white px-4">
      {error && <ErrorMessage />}

      {!error && (
        isLoading ? <Loading /> : (
          <ul className="m-0 list-none p-0">
            {data?.results.map((drink: { id: string; properties: Record<string, unknown> }, index: number) => (
              <li
                key={drink.id ?? index}
                className={`py-5 ${index !== 0 ? "border-t border-[#ddd]" : ""}`}
              >
                <DrinkListItem id={drink.id} properties={drink.properties as never} />
              </li>
            ))}
          </ul>
        )
      )}
    </main>
  );
}
