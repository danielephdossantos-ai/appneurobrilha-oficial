import { useState } from "react";
import type { ComparadorLadoALadoData } from "../../types";

/**
 * Comparador lado a lado (campo × cidade, dia × noite, seca × chuva…).
 * Duas colunas com imagem grande e lista de características.
 * Se `desafio` estiver definido, mostra pergunta abaixo com escolha.
 */
export function ComparadorLadoALado({ data }: { data: ComparadorLadoALadoData }) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const acertou = data.desafio && escolha === data.desafio.correta;
  const revelou = escolha !== null;

  return (
    <div className="rounded-3xl bg-white text-[#0d1f55] p-3 sm:p-4 shadow-lg border-2 border-white/60">
      <div className="text-sm sm:text-base font-bold text-center mb-3 bg-indigo-100 text-indigo-900 rounded-2xl px-3 py-2">
        👀 {data.instrucao}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {[data.esquerda, data.direita].map((lado, i) => (
          <div
            key={i}
            className={`rounded-2xl p-2 sm:p-3 border-2 ${
              i === 0
                ? "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200"
                : "bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200"
            }`}
          >
            <div className={`text-center font-black text-sm sm:text-base mb-2 ${
              i === 0 ? "text-emerald-800" : "text-sky-800"
            }`}>
              {lado.titulo}
            </div>
            <div className="aspect-square rounded-xl overflow-hidden bg-white mb-2 grid place-items-center">
              <img
                src={lado.imagemUrl}
                alt={lado.titulo}
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
            <ul className="space-y-1">
              {lado.caracteristicas.map((c, j) => (
                <li key={j} className="text-xs sm:text-sm flex items-start gap-1 leading-tight">
                  <span className={i === 0 ? "text-emerald-500" : "text-sky-500"}>✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {data.desafio && (
        <div className="mt-4 pt-3 border-t-2 border-dashed border-slate-200">
          <div className="text-base sm:text-lg font-black mb-2">
            🎯 {data.desafio.pergunta}
          </div>
          <div className="grid gap-2">
            {data.desafio.opcoes.map((op, i) => {
              const marcada = escolha === i;
              const certa = i === data.desafio!.correta;
              let estado = "bg-slate-100 hover:bg-slate-200";
              if (revelou) {
                if (marcada && certa) estado = "bg-emerald-500 text-white ring-4 ring-emerald-200";
                else if (marcada && !certa) estado = "bg-rose-500 text-white ring-4 ring-rose-200";
                else if (certa) estado = "bg-emerald-100 text-emerald-800 ring-2 ring-emerald-300";
                else estado = "bg-slate-100 text-slate-400";
              }
              return (
                <button
                  key={i}
                  disabled={revelou}
                  onClick={() => setEscolha(i)}
                  className={`text-left px-4 py-3 rounded-2xl font-bold text-sm sm:text-base transition ${estado}`}
                >
                  {op}
                </button>
              );
            })}
          </div>
          {revelou && (
            <div className={`mt-3 p-3 rounded-2xl text-sm font-bold ${
              acertou
                ? "bg-emerald-100 text-emerald-900 border-2 border-emerald-300"
                : "bg-amber-100 text-amber-900 border-2 border-amber-300"
            }`}>
              <div className="flex items-start gap-2">
                <span className="text-xl">{acertou ? "🌟" : "🤔"}</span>
                <span>{acertou ? data.desafio.feedbackAcerto : data.desafio.feedbackErro}</span>
              </div>
              {!acertou && (
                <button
                  onClick={() => setEscolha(null)}
                  className="mt-2 w-full h-10 rounded-xl bg-amber-400 text-[#0d1f55] font-black text-sm active:scale-95"
                >
                  🔄 Tentar de novo
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
