import { Lightbulb } from "lucide-react";
export function Exemplo({ texto }: { texto: string }) {
  return (
    <div className="rounded-3xl bg-[#FFC93C]/15 border-2 border-[#FFC93C]/40 p-6">
      <div className="flex items-center gap-2 mb-3 text-[#FFC93C]">
        <Lightbulb className="h-5 w-5" />
        <span className="text-xs font-black uppercase tracking-widest">Exemplo</span>
      </div>
      <p className="text-base leading-relaxed whitespace-pre-line">{texto}</p>
    </div>
  );
}
