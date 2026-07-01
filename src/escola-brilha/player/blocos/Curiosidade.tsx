import { Zap } from "lucide-react";
export function Curiosidade({ texto }: { texto: string }) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#9B6CFF]/25 to-[#F43F5E]/25 border-2 border-white/20 p-6">
      <div className="flex items-center gap-2 mb-3 text-[#FFC93C]">
        <Zap className="h-5 w-5" />
        <span className="text-xs font-black uppercase tracking-widest">Você sabia?</span>
      </div>
      <p className="text-base leading-relaxed">{texto}</p>
    </div>
  );
}
