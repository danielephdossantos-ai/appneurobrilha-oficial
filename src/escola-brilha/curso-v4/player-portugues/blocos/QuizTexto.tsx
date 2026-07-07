import { useState } from "react";
import type { QuizTextoData } from "../../types";

/**
 * Quiz de compreensão textual — opções em texto puro.
 * Feedback mostra onde a resposta está no texto (quando fornecido).
 */
export function QuizTexto({ quiz }: { quiz: QuizTextoData }) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const acertou = escolha !== null && escolha === quiz.correta;

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-3">
      <div className="text-base font-bold text-white">❓ {quiz.pergunta}</div>
      <div className="grid gap-2">
        {quiz.opcoes.map((op, i) => {
          const marcada = escolha === i;
          const certa = i === quiz.correta;
          const cor =
            escolha === null
              ? "bg-white/10 hover:bg-white/20 text-white"
              : marcada && certa
                ? "bg-emerald-500 text-white"
                : marcada && !certa
                  ? "bg-rose-500 text-white"
                  : certa
                    ? "bg-emerald-500/40 text-white"
                    : "bg-white/5 text-white/40";
          return (
            <button
              key={i}
              disabled={escolha !== null}
              onClick={() => setEscolha(i)}
              className={`text-left px-4 py-3 rounded-xl transition text-sm font-medium ${cor}`}
            >
              {op}
            </button>
          );
        })}
      </div>

      {escolha !== null && (
        <div
          className={`text-sm p-3 rounded-xl ${
            acertou ? "bg-emerald-500/20 text-emerald-100" : "bg-amber-500/20 text-amber-100"
          }`}
        >
          <div>{acertou ? quiz.feedbackAcerto : quiz.feedbackErro}</div>
          {quiz.ondeEstaNoTexto && (
            <div className="mt-2 text-xs italic text-white/70">
              📖 No texto: "{quiz.ondeEstaNoTexto}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
