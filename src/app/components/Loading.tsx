import { HourglassIcon } from "lucide-react";

export function Loading() {
  return (
    <div className="flex min-h-[200px] flex-1 flex-col items-center justify-center gap-3 text-center">
      <HourglassIcon
        size={28}
        className="text-[#888]"
        style={{ animation: "loading-spin 2s infinite cubic-bezier(.81,.13,.24,.75)" }}
      />
      <div className="text-xs text-black">
        데이터를 로드 중입니다.
        <br />로딩이 계속되면 페이지를 새로고침 해주세요.
      </div>
      <style>{`
        @keyframes loading-spin {
          0% { transform: rotate(0deg); }
          80%, 100% { transform: rotate(180deg); }
        }
      `}</style>
    </div>
  );
}
