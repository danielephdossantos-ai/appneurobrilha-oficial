import { Bookmark } from "lucide-react";
export function Revisao({ dados }: { dados: { palavrasChave: string[]; dica: string } }) {
  return (
    <div className="rounded-3xl bg-white/10 border-2 border-white/20 p-6">
      <div className="flex items-center gap-2 mb-3 text-[#FFC93C]">
        <Bookmark className="h-5 w-5" />
        <span className="text-xs font-black uppercase tracking-widest">Revisão</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {dados.palavrasChave.map((p) => (
          <span
            key={p}
            className="px-3 py-1.5 rounded-full bg-[#FFC93C] text-[#0d1f55] font-black text-sm"
          >
            {p}
          </span>
        ))}
      </div>
      <p className="text-base leading-relaxed">{dados.dica}</p>
    </div>
  );
}
