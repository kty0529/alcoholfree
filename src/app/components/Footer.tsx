import githubUrl from "../assets/github.svg";

export function Footer() {
  const iconList = ["🍺", "🍻", "🍾", "🍷", "🍹", "🥂", "🍸", "🍶", "🥃"];
  const randomIcon = iconList[Math.floor(Math.random() * iconList.length)];

  return (
    <footer className="flex-none px-4 py-[30px] text-center text-[10px] font-bold text-[#888]">
      <div className="flex cursor-default items-center justify-center gap-1 leading-none">
        <span>Alcohol Free ~</span>
        <span className="text-base">{randomIcon}</span>
      </div>

      <div className="mt-3">
        <a
          href="https://github.com/kty0529/alcoholfree"
          target="_blank"
          rel="noreferrer"
          className="inline-block opacity-20 transition-opacity duration-200 hover:opacity-100"
        >
          <img src={githubUrl} alt="GitHub 아이콘" className="w-[18px]" />
        </a>
      </div>
    </footer>
  );
}
