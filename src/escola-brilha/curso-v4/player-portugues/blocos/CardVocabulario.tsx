import { useContext } from "react";
import type { CardVocabularioData } from "../../types";
import { BotaoOuvirEnunciado } from "./BotaoOuvirEnunciado";
import { KidsCtx } from "../PlayerPortuguesV4";
import { TeenBlackboard } from "./TeenBlackboard";

/**
 * Card de vocabulário — palavra + explicação simples + exemplo.
 * Design pensado como "flashcard" grande, uma cor por card.
 */
export function CardVocabulario({ card }: { card: CardVocabularioData }) {
  const skin = useContext(KidsCtx);
  return (
    <TeenBlackboard titulo="Dicionário de Dados">
      <div className={`rounded-2xl border-2 p-4 ${skin.teen ? "bg-slate-900/50 border-cyan-500/30" : "bg-gradient-to-br from-amber-500/20 to-orange-500/10 border-amber-300/30"}`}>
      <div className="flex items-start gap-3">
        {card.imagemUrl && (
          <img
            src={card.imagemUrl}
            alt=""
            className={`w-14 h-14 object-contain shrink-0 drop-shadow ${skin.teen ? "brightness-90 contrast-125" : ""}`}
          />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div className={`text-[10px] uppercase tracking-widest ${skin.teen ? "text-cyan-400" : "text-amber-300"}`}>
              📚 Palavra nova
            </div>
            <BotaoOuvirEnunciado
              texto={[
                card.palavra,
                `O que quer dizer: ${card.explicacao}`,
                `Exemplo: ${card.exemplo}`,
              ]}
              rotulo="Ouvir"
            />
          </div>
          <div className={`text-2xl font-black ${skin.teen ? "text-cyan-100" : "text-amber-200"}`}>{card.palavra}</div>
          <div className={`text-sm mt-2 leading-relaxed ${skin.teen ? "text-cyan-50/80" : "text-white/90"}`}>
            <span className={`font-bold ${skin.teen ? "text-cyan-400" : "text-amber-100"}`}>O que quer dizer:</span> {card.explicacao}
          </div>
          <div className={`text-sm mt-2 italic leading-relaxed ${skin.teen ? "text-cyan-50/60" : "text-white/80"}`}>
            <span className={`font-bold not-italic ${skin.teen ? "text-cyan-400" : "text-amber-100"}`}>Exemplo:</span> "{card.exemplo}"
          </div>
        </div>
      </div>
    </div>
    </TeenBlackboard>
  );
}
