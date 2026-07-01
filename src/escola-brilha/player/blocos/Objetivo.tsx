import { Target } from "lucide-react";
export function Objetivo({ texto }: { texto: string }) {
  return (
    <div className="rounded-3xl bg-white/10 border-2 border-white/20 p-6">
      <div className="flex items-center gap-2 mb-3 text-[#FFC93C]">
        <Target className="h-5 w-5" />
        <span className="text-xs font-black uppercase tracking-widest">Objetivo da aula</span>
      </div>
      <p className="text-xl font-black leading-snug">{texto}</p>
    </div>
  );
}
