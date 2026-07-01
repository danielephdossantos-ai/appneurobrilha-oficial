import { Lightbulb } from "lucide-react";
import { Secao } from "./Secao";

export function ExemploResolvido({
  dados,
}: {
  dados: { enunciado: string; passos: string[]; resposta: string };
}) {
  return (
    <Secao icon={Lightbulb} rotulo="Exemplo resolvido" cor="#FBBF24">
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
    </Secao>
  );
}
