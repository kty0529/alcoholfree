import { Link } from "react-router";
import { Badge } from "./Badge";

interface DrinkProperty {
  Picture?: { files: Array<{ file: { url: string } }> };
  Proof?: { number: number };
  Name?: { title: Array<{ plain_text: string }> };
  Name_en?: { rich_text: Array<{ plain_text: string }> };
  Category?: { select: { name: string; color: string } };
}

interface DrinkListItemProps {
  id: string;
  properties: DrinkProperty;
}

export function DrinkListItem({ id, properties }: DrinkListItemProps) {
  const item = {
    page_id: id,
    thumbnail: properties.Picture?.files[0]?.file.url,
    proof: properties.Proof?.number,
    name: properties.Name?.title[0]?.plain_text,
    name_en: properties.Name_en?.rich_text[0]?.plain_text,
    category: properties.Category?.select.name,
    category_color: properties.Category?.select.color,
  };

  return (
    <Link to={item.page_id} className="flex w-full items-center gap-4">
      <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded bg-[#f1f1f1]">
        {item.thumbnail && (
          <img
            loading="lazy"
            src={item.thumbnail}
            alt="썸네일 이미지"
            className="h-full w-full object-contain"
          />
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-base font-bold">
          {item.name}
          {item.proof && <small className="font-normal">&nbsp;({item.proof}%)</small>}
        </div>

        {item.name_en && (
          <div className="text-xs text-[#888]">{item.name_en}</div>
        )}

        {item.category && (
          <div className="mt-1 text-xs">
            <Badge color={item.category_color ?? "default"} text={item.category} />
          </div>
        )}
      </div>
    </Link>
  );
}
