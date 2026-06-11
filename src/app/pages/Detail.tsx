import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { ZoomInIcon } from "lucide-react";
import { Loading } from "../components/Loading";
import { ErrorMessage } from "../components/ErrorMessage";
import { Badge } from "../components/Badge";
import { getMockDetail } from "../mock/data";

const NOTION_API = import.meta.env.VITE_NOTION_API;

export function Detail() {
  const { page_id } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["fetchDetail", page_id],
    queryFn: async () => {
      if (!NOTION_API) return getMockDetail(page_id ?? "");
      const res = await fetch(`${NOTION_API}/pages.php?id=${page_id}`);
      return res.json();
    },
  });

  let item: Record<string, unknown> = {};
  if (!isLoading && data) {
    item = {
      thumbnail: data.properties.Picture?.files[0]?.file.url,
      name: data.properties.Name?.title[0]?.plain_text,
      name_en: data.properties.Name_en?.rich_text[0]?.plain_text,
      proof: data.properties.Proof?.number,
      category: data.properties.Category?.select.name,
      country: data.properties.Country?.rich_text[0]?.plain_text,
      brewery: data.properties.Brewery?.rich_text[0]?.plain_text,
      tags: data.properties.Tags?.multi_select,
    };
  }

  return (
    <main className="flex flex-1 flex-col bg-white">
      {error && <ErrorMessage />}

      {!error && (
        isLoading ? <Loading /> : (
          <>
            {item.thumbnail && (
              <div className="relative z-[2] flex h-[200px] items-center justify-center overflow-hidden bg-[#f1f1f1]">
                <img
                  className="h-4/5 w-4/5 object-contain"
                  src={item.thumbnail as string}
                  alt="썸네일 이미지"
                />

                <a
                  className="absolute bottom-3 right-3 z-[2] flex h-9 w-9 items-center justify-center rounded-sm bg-white/90 shadow-[0_0_10px_-2px_rgba(0,0,0,0.3)]"
                  href={item.thumbnail as string}
                  aria-label="이미지 원본 보기"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ZoomInIcon size={22} />
                </a>

                <img
                  className="pointer-events-none touch-none select-none absolute -z-[1] top-0 left-0 h-full w-full scale-[1.2] object-cover object-center blur-[10px]"
                  src={item.thumbnail as string}
                  alt="썸네일 이미지"
                />
              </div>
            )}

            {item.name && (
              <div>
                <h2 className="bg-[#f1f1f1] px-4 py-3 text-sm text-center">{item.name as string}</h2>

                <ul className="m-0 mt-4 flex list-none flex-col gap-2 px-4 pb-4">
                  {item.name_en && <li className="text-xs text-[#333]"><strong>영문</strong> : {item.name_en as string}</li>}
                  {item.proof && <li className="text-xs text-[#333]"><strong>도수</strong> : {item.proof as number}%</li>}
                  {item.category && <li className="text-xs text-[#333]"><strong>분류</strong> : {item.category as string}</li>}
                  {item.country && <li className="text-xs text-[#333]"><strong>제조국</strong> : {item.country as string}</li>}
                  {item.brewery && <li className="text-xs text-[#333]"><strong>제조사</strong> : {item.brewery as string}</li>}
                  {item.tags && (
                    <li className="flex flex-wrap gap-1">
                      {(item.tags as Array<{ color: string; name: string }>).map((tag, index) => (
                        <Badge key={index} color={tag.color} text={tag.name} />
                      ))}
                    </li>
                  )}
                </ul>
              </div>
            )}
          </>
        )
      )}
    </main>
  );
}
