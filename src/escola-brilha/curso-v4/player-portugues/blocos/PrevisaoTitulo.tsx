import { useState } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import type { PrevisaoTituloData } from "../../types";

/**
 * Bloco de Previsão — mostra título/recado + capa + pistas e pede pra criança
 * escolher uma hipótese do que vai acontecer.
 *
 * As hipóteses são renderizadas como CARDS VISUAIS gigantes (mesmo tratamento
 * do QuizTexto), não mais como lista de botões estilo questionário.
 */
const CORES = [
  { bg: "from-rose-400 to-pink-500" },
  { bg: "from-sky-400 to-blue-500" },
  { bg: "from-emerald-400 to-green-500" },
  { bg: "from-amber-400 to-orange-500" },
];

export function PrevisaoTitulo({ data }: { data: PrevisaoTituloData }) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const acertou = escolha !== null && escolha === data.respostaCerta;

  const temRecado = !!data.recado && data.recado.linhas.length > 0;

  function ouvirPergunta() {
    stopSpeaking();
    speakChunked(data.pergunta);
  }

  function tocar(i: number) {
    if (escolha !== null) return;
    stopSpeaking();
    setEscolha(i);
  }


  function tentarDeNovo() {
    stopSpeaking();
    setEscolha(null);
  }

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-4">
      {temRecado ? (
        <RecadoPapel recado={data.recado!} />
      ) : (
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
      )}

      {!temRecado && data.pistas && data.pistas.length > 0 && (
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

      {/* Pergunta + hipóteses VISUAIS */}
      <div className="rounded-3xl bg-white text-[#0d1f55] p-4 shadow-lg border-2 border-white/60">
        <div className="flex items-start gap-3 mb-4">
          <button
            onClick={ouvirPergunta}
            aria-label="Ouvir a pergunta"
            className="shrink-0 w-12 h-12 rounded-full bg-amber-400 text-[#0d1f55] text-2xl font-black grid place-items-center shadow-md active:scale-95"
          >
            🔊
          </button>
          <p className="text-lg sm:text-xl font-black leading-snug flex-1">
            🤔 {data.pergunta}
          </p>
        </div>

        <div
          className={`grid gap-3 ${
            data.hipoteses.length <= 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-3"
          }`}
        >
          {data.hipoteses.map((h, i) => {
            const cor = CORES[i % CORES.length];
            const marcada = escolha === i;
            const certa = i === data.respostaCerta;
            const revelou = escolha !== null;

            let estado = "";
            if (!revelou) {
              estado = `bg-gradient-to-br ${cor.bg} text-white hover:scale-105 active:scale-95`;
            } else if (marcada && certa) {
              estado = "bg-gradient-to-br from-emerald-400 to-green-600 text-white ring-8 ring-emerald-200 scale-105";
            } else if (marcada && !certa) {
              estado = "bg-gradient-to-br from-rose-400 to-red-600 text-white ring-8 ring-rose-200 animate-pulse";
            } else if (certa) {
              estado = "bg-gradient-to-br from-emerald-400 to-green-600 text-white ring-8 ring-emerald-200";
            } else {
              estado = "bg-slate-200 text-slate-400";
            }

            return (
              <button
                key={i}
                disabled={revelou}
                onClick={() => tocar(i)}
                className={`relative rounded-[2rem] p-4 min-h-[140px] font-black shadow-xl transition-all duration-200 flex flex-col items-center justify-center gap-2 text-center ${estado}`}
              >
                {h.imagemUrl && (
                  <div className="w-20 h-20 rounded-2xl bg-white/90 grid place-items-center p-2">
                    <img src={h.imagemUrl} alt="" className="w-full h-full object-contain" />
                  </div>
                )}
                <span className="text-sm sm:text-base leading-snug">{h.texto}</span>
                {revelou && marcada && certa && (
                  <span className="absolute -top-2 -right-2 text-3xl">🎉</span>
                )}
                {revelou && marcada && !certa && (
                  <span className="absolute -top-2 -right-2 text-3xl">💭</span>
                )}
                {revelou && !marcada && certa && (
                  <span className="absolute -top-2 -right-2 text-2xl">✅</span>
                )}
              </button>
            );
          })}
        </div>

        {escolha !== null && (
          <div
            className={`mt-4 p-4 rounded-2xl text-base font-bold leading-snug ${
              acertou
                ? "bg-emerald-100 text-emerald-900 border-2 border-emerald-300"
                : "bg-amber-100 text-amber-900 border-2 border-amber-300"
            }`}
          >
            <div className="flex items-start gap-2">
              <span className="text-2xl">{acertou ? "🌟" : "🤔"}</span>
              <div className="flex-1">{acertou ? data.feedbackAcerto : data.feedbackErro}</div>
            </div>
            {!acertou && (
              <button
                onClick={tentarDeNovo}
                className="mt-3 w-full h-12 rounded-2xl bg-amber-400 text-[#0d1f55] font-black text-lg active:scale-95 shadow"
              >
                🔄 Tentar de novo
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function RecadoPapel({
  recado,
}: {
  recado: NonNullable<import("../../types").PrevisaoTituloData["recado"]>;
}) {
  const estilo = recado.estilo ?? "papel";
  const ehCartaz = estilo === "cartaz";

  return (
    <div className="flex flex-col items-center gap-2">
      {recado.rotulo && (
        <div className="text-[10px] uppercase tracking-widest text-amber-300">
          {recado.icone ? `${recado.icone} ` : ""}
          {recado.rotulo}
        </div>
      )}

      <div
        className={
          ehCartaz
            ? "w-full max-w-md bg-amber-50 border-4 border-rose-500 rounded-lg p-5 shadow-xl text-center"
            : "w-full max-w-md bg-amber-50 border border-amber-200 rounded-md p-5 shadow-xl -rotate-1"
        }
        style={
          ehCartaz
            ? undefined
            : {
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 26px, rgba(59,30,107,0.15) 27px)",
              }
        }
      >
        {recado.linhas.map((linha, i) => (
          <div
            key={i}
            className={
              ehCartaz
                ? "text-[#1a0d3d] font-black text-2xl leading-tight uppercase tracking-wide mb-1"
                : "text-[#1a0d3d] font-medium text-base leading-7"
            }
          >
            {linha || "\u00A0"}
          </div>
        ))}
      </div>
    </div>
  );
}
