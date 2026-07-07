import { useState } from "react";
import type { OrientacaoEspacialData } from "../../types";

/**
 * Grid 3x3 de orientação espacial — criança move o personagem com
 * botões direção (⬆️ ⬇️ ⬅️ ➡️) até chegar no alvo.
 * Ensina noções de direita/esquerda/frente/atrás sem texto pesado.
 */
export function OrientacaoEspacial({ data }: { data: OrientacaoEspacialData }) {
  const [pos, setPos] = useState(() => ({ ...data.posicaoInicial }));
  const acertou = pos.linha === data.alvo.linha && pos.coluna === data.alvo.coluna;

  function mover(dLinha: number, dColuna: number) {
    if (acertou) return;
    setPos((p) => ({
      linha: Math.max(0, Math.min(2, p.linha + dLinha)),
      coluna: Math.max(0, Math.min(2, p.coluna + dColuna)),
    }));
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      try { navigator.vibrate?.(15); } catch { /* ignore */ }
    }
  }

  function reset() {
    setPos({ ...data.posicaoInicial });
  }

  return (
    <div className="rounded-3xl bg-white text-[#0d1f55] p-3 sm:p-4 shadow-lg border-2 border-white/60">
      <div className="text-sm sm:text-base font-bold text-center mb-3 bg-indigo-100 text-indigo-900 rounded-2xl px-3 py-2">
        🧭 {data.instrucao}
      </div>

      {/* Grid 3x3 */}
      <div
        className="mx-auto max-w-md aspect-square rounded-2xl border-4 border-indigo-200 bg-gradient-to-br from-lime-50 to-emerald-50 p-2 relative"
        style={data.cenarioUrl ? {
          backgroundImage: `url(${data.cenarioUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        } : undefined}
      >
        <div className="grid grid-cols-3 grid-rows-3 gap-1 h-full">
          {Array.from({ length: 9 }).map((_, i) => {
            const linha = Math.floor(i / 3);
            const coluna = i % 3;
            const eAlvo = linha === data.alvo.linha && coluna === data.alvo.coluna;
            const ePersonagem = linha === pos.linha && coluna === pos.coluna;
            return (
              <div
                key={i}
                className={`rounded-xl border-2 border-dashed grid place-items-center relative ${
                  eAlvo ? "border-amber-400 bg-amber-100/60" : "border-white/40 bg-white/20"
                }`}
              >
                {eAlvo && !ePersonagem && (
                  <img
                    src={data.alvo.imagemUrl}
                    alt={data.alvo.nome}
                    className="w-3/4 h-3/4 object-contain opacity-80"
                  />
                )}
                {ePersonagem && (
                  <img
                    src={data.personagemUrl}
                    alt="você"
                    className={`w-3/4 h-3/4 object-contain drop-shadow-lg transition-transform ${
                      acertou ? "scale-110 animate-bounce" : ""
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Botões direcionais */}
      <div className="mt-4 grid grid-cols-3 gap-2 max-w-xs mx-auto">
        <div />
        <button
          onClick={() => mover(-1, 0)}
          disabled={acertou || pos.linha === 0}
          className="h-14 rounded-2xl bg-sky-500 text-white text-2xl font-black shadow active:scale-95 disabled:opacity-30"
          aria-label="Ir para cima"
        >
          ⬆️
        </button>
        <div />
        <button
          onClick={() => mover(0, -1)}
          disabled={acertou || pos.coluna === 0}
          className="h-14 rounded-2xl bg-sky-500 text-white text-2xl font-black shadow active:scale-95 disabled:opacity-30"
          aria-label="Ir para a esquerda"
        >
          ⬅️
        </button>
        <button
          onClick={reset}
          disabled={acertou}
          className="h-14 rounded-2xl bg-slate-300 text-[#0d1f55] text-xl font-black shadow active:scale-95 disabled:opacity-30"
          aria-label="Voltar ao início"
        >
          🔄
        </button>
        <button
          onClick={() => mover(0, 1)}
          disabled={acertou || pos.coluna === 2}
          className="h-14 rounded-2xl bg-sky-500 text-white text-2xl font-black shadow active:scale-95 disabled:opacity-30"
          aria-label="Ir para a direita"
        >
          ➡️
        </button>
        <div />
        <button
          onClick={() => mover(1, 0)}
          disabled={acertou || pos.linha === 2}
          className="h-14 rounded-2xl bg-sky-500 text-white text-2xl font-black shadow active:scale-95 disabled:opacity-30"
          aria-label="Ir para baixo"
        >
          ⬇️
        </button>
        <div />
      </div>

      {acertou && (
        <div className="mt-3 p-3 rounded-2xl bg-emerald-100 text-emerald-900 border-2 border-emerald-300 text-center font-bold">
          🎉 {data.feedbackAcerto}
        </div>
      )}
    </div>
  );
}
