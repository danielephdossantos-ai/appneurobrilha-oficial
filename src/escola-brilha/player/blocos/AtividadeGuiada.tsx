import { useState } from "react";
import { HandHelping, Eye } from "lucide-react";
import { Secao } from "./Secao";
import { PodioVisual } from "./PodioVisual";
import type { Aula } from "../../types";

export function AtividadeGuiada({
  dados,
}: {
  dados: Aula["atividadeGuiada"];
}) {
  const [revelar, setRevelar] = useState(false);
  const visual = dados.visual;

  if (visual?.tipo === "podio") {
    return (
      <Secao icon={HandHelping} rotulo="Atividade guiada" cor="#34D399">
        <PodioVisual
          pergunta={visual.pergunta}
          participantes={visual.participantes}
          respostaCerta={visual.respostaCerta}
          explicacao={dados.explicacao}
        />
      </Secao>
    );
  }

  return (
    <Secao icon={HandHelping} rotulo="Atividade guiada" cor="#34D399">
      <p className="font-black mb-3">{dados.enunciado}</p>
      {!revelar ? (
        <button
          onClick={() => setRevelar(true)}
          className="w-full h-12 rounded-2xl bg-white text-[#0d1f55] font-black flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          <Eye className="h-4 w-4" /> Ver a resposta com a explicação
        </button>
      ) : (
        <div className="space-y-2">
          <div className="rounded-2xl bg-[#22C55E]/15 border-2 border-[#22C55E]/30 p-3">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#22C55E] mb-1">
              Resposta
            </div>
            <div className="font-black">{dados.resposta}</div>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/20 p-3 text-sm">
            {dados.explicacao}
          </div>
        </div>
      )}
    </Secao>
  );
}
