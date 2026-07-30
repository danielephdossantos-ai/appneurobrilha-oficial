import type { CardVocabularioData } from "../../types";
import { BotaoOuvirEnunciado } from "./BotaoOuvirEnunciado";

/**
 * Card de vocabulário — palavra + explicação simples + exemplo.
 * Design pensado como "flashcard" grande, uma cor por card.
 */
export function CardVocabulario({ card }: { card: CardVocabularioData }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border-2 border-amber-300/30 p-4">
      <div className="flex items-start gap-3">
        {card.imagemUrl && (
          <img
            src={card.imagemUrl}
            alt=""
            className="w-14 h-14 object-contain shrink-0 drop-shadow"
          />
        )}
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-widest text-amber-300">
            📚 Palavra nova
          </div>
          <div className="text-2xl font-black text-amber-200">{card.palavra}</div>
          <div className="text-sm text-white/90 mt-2 leading-relaxed">
            <span className="font-bold text-amber-100">O que quer dizer:</span> {card.explicacao}
          </div>
          <div className="text-sm text-white/80 mt-2 italic leading-relaxed">
            <span className="font-bold not-italic text-amber-100">Exemplo:</span> "{card.exemplo}"
          </div>
        </div>
      </div>
    </div>
  );
}
