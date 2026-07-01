import { Sparkles } from "lucide-react";
export function Introducao({ texto }: { texto: string }) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#4C9EFF]/25 to-[#9B6CFF]/25 border-2 border-white/20 p-6">
      <div className="flex items-center gap-2 mb-3 text-[#FFC93C]">
        <Sparkles className="h-5 w-5" />
        <span className="text-xs font-black uppercase tracking-widest">Vamos começar</span>
      </div>
      <p className="text-lg leading-relaxed">{texto}</p>
    </div>
  );
}
