import { PartyPopper } from "lucide-react";
import { Secao } from "./Secao";

export function Conclusao({
  texto,
  acertos,
  total,
}: {
  texto: string;
  acertos: number;
  total: number;
}) {
  const pct = total > 0 ? Math.round((acertos / total) * 100) : 0;
  return (
    <Secao icon={PartyPopper} rotulo="Conclusão" cor="#22C55E">
      <div className="rounded-2xl bg-white/10 border border-white/20 p-4 mb-3 text-center">
        <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
          Seu desempenho no quiz
        </div>
        <div className="text-3xl font-black text-[#FFC93C] my-1">
          {acertos}/{total}
        </div>
        <div className="text-xs font-bold text-white/70">{pct}% de acerto</div>
      </div>
      <p className="font-bold">{texto}</p>
    </Secao>
  );
}
