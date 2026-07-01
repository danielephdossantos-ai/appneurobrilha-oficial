import { useState } from "react";
import { Trophy, Eye } from "lucide-react";
import { Secao } from "./Secao";

export function Desafio({ dados }: { dados: { enunciado: string; resposta: string } }) {
  const [revelar, setRevelar] = useState(false);
  return (
    <Secao icon={Trophy} rotulo="Desafio" cor="#F97316">
      <p className="font-black mb-3">{dados.enunciado}</p>
      {!revelar ? (
        <button
          onClick={() => setRevelar(true)}
          className="w-full h-12 rounded-2xl bg-[#F97316] text-white font-black flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          <Eye className="h-4 w-4" /> Ver resposta
        </button>
      ) : (
        <div className="rounded-2xl bg-[#22C55E]/15 border-2 border-[#22C55E]/30 p-3">
          <div className="text-[10px] font-black uppercase tracking-widest text-[#22C55E] mb-1">
            Resposta
          </div>
          <div className="font-black">{dados.resposta}</div>
        </div>
      )}
    </Secao>
  );
}
