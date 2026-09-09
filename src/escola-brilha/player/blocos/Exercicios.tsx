import { useState } from "react";
import { PencilLine, Eye, HelpCircle } from "lucide-react";
import { Secao } from "./Secao";
import type { Exercicio } from "../../types";

export function Exercicios({ itens }: { itens: Exercicio[] }) {
  return (
    <Secao icon={PencilLine} rotulo="Exercícios" cor="#60A5FA">
      <div className="space-y-3">
        {itens.map((ex, i) => (
          <ItemExercicio key={i} idx={i + 1} ex={ex} />
        ))}
      </div>
    </Secao>
  );
}

function ItemExercicio({ idx, ex }: { idx: number; ex: Exercicio }) {
  const [verDica, setVerDica] = useState(false);
  const [verResp, setVerResp] = useState(false);
  return (
    <div className="rounded-2xl bg-white/10 border border-white/20 p-3">
      <div className="flex items-start gap-2 mb-2">
        <span className="h-6 w-6 rounded-full bg-[#60A5FA] text-[#0d1f55] font-black text-xs grid place-items-center shrink-0">
          {idx}
        </span>
        <p className="font-bold">{ex.enunciado}</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        {ex.dica && !verDica && (
          <button
            onClick={() => setVerDica(true)}
            className="text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/15 flex items-center gap-1"
          >
            <HelpCircle className="h-3 w-3" /> Dica
          </button>
        )}
        {!verResp && (
          <button
            onClick={() => setVerResp(true)}
            className="text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white text-[#0d1f55] flex items-center gap-1"
          >
            <Eye className="h-3 w-3" /> Resposta
          </button>
        )}
      </div>
      {verDica && ex.dica && (
        <div className="mt-2 text-sm rounded-xl bg-[#FBBF24]/15 p-2 border border-[#FBBF24]/30">
          💡 {ex.dica}
        </div>
      )}
      {verResp && (
        <div className="mt-2 text-sm rounded-xl bg-[#22C55E]/15 p-2 border border-[#22C55E]/30 font-black">
          ✅ {ex.resposta}
        </div>
      )}
    </div>
  );
}
