import { Lightbulb } from "lucide-react";
import { Secao } from "./Secao";
import { ContagemInterativa } from "./ContagemInterativa";
import type { Aula } from "../../types";

export function ExemploResolvido({
  dados,
}: {
  dados: Aula["exemploResolvido"];
}) {
  const interativo = dados.interativo;
  return (
    <Secao icon={Lightbulb} rotulo="Exemplo resolvido" cor="#FBBF24">
      {interativo?.tipo === "contagem" ? (
        <div className="space-y-4">
          <ContagemInterativa
            imagemUrl={interativo.imagemUrl}
            quantidade={interativo.quantidade}
            nomeItem={interativo.nomeItem}
            nomeItemPlural={interativo.nomeItemPlural}
            pergunta={interativo.pergunta ?? dados.enunciado}
          />
          <details className="rounded-2xl bg-white/10 border border-white/20 p-3 text-sm">
            <summary className="cursor-pointer font-black">
              Como o professor pensa
            </summary>
            <ol className="space-y-2 mt-3">
              {dados.passos.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-[#FBBF24] text-[#0d1f55] font-black text-xs grid place-items-center shrink-0">
                    {i + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </details>
        </div>
      ) : (
        <>
          <p className="font-black mb-3">{dados.enunciado}</p>
          <ol className="space-y-2 mb-4">
            {dados.passos.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-[#FBBF24] text-[#0d1f55] font-black text-xs grid place-items-center shrink-0">
                  {i + 1}
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
          <div className="rounded-2xl bg-[#22C55E]/15 border-2 border-[#22C55E]/30 p-3">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#22C55E] mb-1">
              Resposta
            </div>
            <div className="font-black">{dados.resposta}</div>
          </div>
        </>
      )}
    </Secao>
  );
}
