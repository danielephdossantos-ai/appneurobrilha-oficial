import { useState } from "react";
import type { PrevisaoTituloData } from "../../types";

/**
 * Bloco de Previsão — mostra título + capa + pistas (imagens de objetos)
 * e pede pra criança escolher uma hipótese do que vai acontecer.
 */
export function PrevisaoTitulo({ data }: { data: PrevisaoTituloData }) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const acertou = escolha !== null && escolha === data.respostaCerta;

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-4">
      {/* Capa do livro */}
      <div className="flex flex-col items-center gap-3">
        {data.capaImagemUrl && (
          <img
            src={data.capaImagemUrl}
            alt={data.titulo}
            className="w-32 h-32 object-contain drop-shadow-lg"
          />
        )}
        <div className="text-center">
          <div className="text-[10px] uppercase tracking-widest text-amber-300">Título do livro</div>
          <div className="text-xl font-black text-white">📖 {data.titulo}</div>
        </div>
      </div>

      {/* Pistas visuais */}
      {data.pistas && data.pistas.length > 0 && (
        <div>
          <div className="text-xs text-white/60 text-center mb-2">Pistas na capa:</div>
          <div className="flex flex-wrap justify-center gap-3">
            {data.pistas.map((p) => (
              <div
                key={p.nome}
                className="flex flex-col items-center gap-1 bg-white/5 rounded-xl p-2 min-w-[70px]"
              >
                <img src={p.imagemUrl} alt={p.nome} className="w-12 h-12 object-contain" />
                <div className="text-[10px] text-white/70">{p.nome}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pergunta + hipóteses */}
      <div className="pt-2">
        <div className="text-sm font-bold text-white mb-3">🤔 {data.pergunta}</div>
        <div className="grid gap-2">
          {data.hipoteses.map((h, i) => {
            const marcada = escolha === i;
            const certa = i === data.respostaCerta;
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
                className={`text-left px-4 py-3 rounded-xl transition ${cor}`}
              >
                <div className="flex items-center gap-3">
                  {h.imagemUrl && (
                    <img src={h.imagemUrl} alt="" className="w-10 h-10 object-contain shrink-0" />
                  )}
                  <div className="text-sm font-medium">{h.texto}</div>
                </div>
              </button>
            );
          })}
        </div>

        {escolha !== null && (
          <div
            className={`mt-3 text-sm p-3 rounded-xl ${
              acertou ? "bg-emerald-500/20 text-emerald-100" : "bg-amber-500/20 text-amber-100"
            }`}
          >
            {acertou ? data.feedbackAcerto : data.feedbackErro}
          </div>
        )}
      </div>
    </div>
  );
}
