import { AlertCircleIcon } from "lucide-react";

export function ErrorMessage() {
  return (
    <div className="flex min-h-[200px] flex-1 flex-col items-center justify-center gap-3 text-center">
      <AlertCircleIcon
        size={28}
        style={{ animation: "error-attention 1s cubic-bezier(1,0,0,1) 1 forwards" }}
      />
      <div className="text-xs text-black">
        데이터 로드에 실패했습니다!
        <br />왜지?
        <br />
        <br />페이지를 새로고침 해주세요.
        <br />만약 오류가 계속된다면 관리자에게 문의해주세요.
      </div>
      <style>{`
        @keyframes error-attention {
          0% { width: 28px; height: 28px; }
          80% { color: red; width: 80px; height: 80px; }
          100% { color: red; width: 50px; height: 50px; }
        }
      `}</style>
    </div>
  );
}
