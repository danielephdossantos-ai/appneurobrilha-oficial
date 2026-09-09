import { Lightbulb } from "lucide-react";
import { Secao } from "./Secao";
import type { Aula } from "../../types";
import { TextoComMascotes } from "./TextoComMascotes";

export function Curiosidade({ dados }: { dados: NonNullable<Aula["curiosidade"]> }) {
  return (
    <Secao icon={Lightbulb} rotulo="Curiosidade" cor="#FBBF24">
      <div className="rounded-2xl bg-gradient-to-br from-[#FBBF24]/20 to-[#F97316]/15 border-2 border-[#FBBF24]/40 p-4">
        <div className="flex items-start gap-3">
          <div className="text-3xl shrink-0">📖</div>
          <div className="flex-1">
            {dados.titulo && (
              <div className="text-[11px] font-black uppercase tracking-widest text-[#FBBF24] mb-1">
                {dados.titulo}
              </div>
            )}
            <TextoComMascotes texto={dados.texto} className="font-black text-base leading-snug flex-1" />
          </div>
        </div>
        {dados.imagemUrl && (
          <img
            src={dados.imagemUrl}
            alt=""
            className="mt-3 mx-auto max-h-40 object-contain drop-shadow"
          />
        )}
      </div>
    </Secao>
  );
}
