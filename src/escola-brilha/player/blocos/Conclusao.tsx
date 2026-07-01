import { useEffect, useState } from "react";
import { PartyPopper } from "lucide-react";
import { Secao } from "./Secao";
import { ProximaHabilidade } from "./ProximaHabilidade";
import { proximaHabilidade, type HabSeq } from "../../bncc-sequencia";

export function Conclusao({
  texto,
  acertos,
  total,
  codigoAtual,
}: {
  texto: string;
  acertos: number;
  total: number;
  codigoAtual: string;
}) {
  const pct = total > 0 ? Math.round((acertos / total) * 100) : 0;
  const [proxima, setProxima] = useState<HabSeq | null | undefined>(undefined);

  useEffect(() => {
    let vivo = true;
    proximaHabilidade(codigoAtual).then((p) => {
      if (vivo) setProxima(p);
    });
    return () => {
      vivo = false;
    };
  }, [codigoAtual]);

  return (
    <>
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

      {proxima !== undefined && (
        <ProximaHabilidade
          proxima={proxima ? { codigo: proxima.codigo, titulo: proxima.titulo } : undefined}
        />
      )}
    </>
  );
}
