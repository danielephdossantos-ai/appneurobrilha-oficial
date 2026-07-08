import { useMemo, useState } from "react";
import type { ArquitetoLugarData } from "../../types";

/**
 * Arquiteto do Lugar Certo — bloco aditivo.
 * Rodadas sequenciais: cenário grande no topo (lugar + moradores + pista),
 * 3 cartões de moradia embaixo. Toca no card → construção animada +
 * feedback. Após feedback, aparece "Próxima rodada". No fim, tela de fim.
 *
 * Mecânica "tap-to-place" (mobile-friendly, sem HTML5 drag):
 *   1) criança toca no MATERIAL
 *   2) ele "voa" para o cenário e é conferido
 */
export function ArquitetoLugar({ data }: { data: ArquitetoLugarData }) {
  const [idx, setIdx] = useState(0);
  const [escolha, setEscolha] = useState<string | null>(null);
  const [acertos, setAcertos] = useState(0);
  const [finalizou, setFinalizou] = useState(false);

  const rodada = data.rodadas[idx];
  const total = data.rodadas.length;
  const respondeu = escolha !== null;
  const acertou = respondeu && escolha === rodada.correta;
  const opcaoEscolhida = rodada.opcoes.find((o) => o.id === escolha);
  const opcaoCerta = rodada.opcoes.find((o) => o.id === rodada.correta)!;

  const escolher = (id: string) => {
    if (respondeu) return;
    setEscolha(id);
    if (id === rodada.correta) setAcertos((a) => a + 1);
  };

  const proxima = () => {
    if (idx + 1 >= total) {
      setFinalizou(true);
    } else {
      setIdx((i) => i + 1);
      setEscolha(null);
    }
  };

  const reiniciar = () => {
    setIdx(0);
    setEscolha(null);
    setAcertos(0);
    setFinalizou(false);
  };

  const progresso = useMemo(
    () => Array.from({ length: total }, (_, i) => i),
    [total],
  );

  if (finalizou) {
    const perfeito = acertos === total;
    return (
      <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 text-center space-y-4">
        <div className="text-6xl">{perfeito ? "🏆" : "🎉"}</div>
        <div className="text-xl font-bold text-white">
          Você construiu {acertos} de {total}!
        </div>
        <div className="text-white/80 text-sm">{data.feedbackFinal}</div>
        <button
          onClick={reiniciar}
          className="mt-2 px-5 py-2 rounded-full bg-amber-400 text-amber-900 font-bold hover:bg-amber-300"
        >
          🔁 Jogar de novo
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-4 md:p-6 space-y-5">
      <p className="text-white/90 text-sm md:text-base">{data.instrucao}</p>

      {/* Progresso das rodadas */}
      <div className="flex items-center gap-2">
        {progresso.map((i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${
              i < idx
                ? "bg-emerald-400"
                : i === idx
                ? "bg-amber-300"
                : "bg-white/15"
            }`}
          />
        ))}
        <span className="text-white/60 text-xs ml-2">
          {idx + 1}/{total}
        </span>
      </div>

      {/* CENÁRIO no topo */}
      <div className="rounded-2xl bg-gradient-to-br from-sky-500/25 to-emerald-500/20 ring-1 ring-white/15 p-5">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-5xl md:text-6xl drop-shadow-md">
            {rodada.cenario.emojiLugar}
          </span>
          <span className="text-3xl text-white/70">+</span>
          <span className="text-5xl md:text-6xl drop-shadow-md">
            {rodada.cenario.emojiMorador}
          </span>
        </div>
        <div className="text-center">
          <div className="text-amber-200 text-xs uppercase tracking-wide font-bold mb-1">
            Lugar
          </div>
          <div className="text-white text-lg md:text-xl font-bold">
            {rodada.cenario.nome}
          </div>
          <div className="text-white/85 text-sm md:text-base mt-2">
            💡 {rodada.cenario.pista}
          </div>
        </div>

        {/* Zona de construção — mostra a casa que a criança escolheu */}
        <div className="mt-4 h-32 rounded-xl bg-white/10 ring-2 ring-dashed ring-white/25 grid place-items-center overflow-hidden relative">
          {!respondeu && (
            <div className="text-white/60 text-sm">
              👇 Escolha o material embaixo
            </div>
          )}
          {respondeu && acertou && opcaoEscolhida && (
            <img
              src={opcaoEscolhida.imagemUrl}
              alt={opcaoEscolhida.nome}
              className="h-28 object-contain animate-scale-in"
            />
          )}
          {respondeu && !acertou && opcaoEscolhida && (
            <div className="flex flex-col items-center gap-1">
              <img
                src={opcaoEscolhida.imagemUrl}
                alt={opcaoEscolhida.nome}
                className="h-20 object-contain opacity-40 grayscale"
              />
              <span className="text-rose-200 text-xs">
                Não combina com esse lugar
              </span>
            </div>
          )}
          {respondeu && acertou && (
            <div className="absolute top-2 right-2 text-2xl animate-bounce">
              ✨
            </div>
          )}
        </div>
      </div>

      {/* OPÇÕES embaixo (3 materiais) */}
      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {rodada.opcoes.map((op) => {
          const escolhida = escolha === op.id;
          const certa = op.id === rodada.correta;
          const dim = respondeu && !escolhida && !certa;
          return (
            <button
              key={op.id}
              onClick={() => escolher(op.id)}
              disabled={respondeu}
              className={`rounded-2xl p-2 md:p-3 flex flex-col items-stretch gap-2 ring-2 transition-all overflow-hidden ${
                respondeu && certa
                  ? "bg-emerald-400/25 ring-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.5)]"
                  : respondeu && escolhida && !certa
                  ? "bg-rose-500/25 ring-rose-300"
                  : dim
                  ? "bg-white/5 ring-white/10 opacity-50"
                  : "bg-white/10 ring-white/20 hover:bg-white/15 hover:ring-amber-300 active:scale-95"
              }`}
            >
              <div className="relative w-full h-24 md:h-28 rounded-lg bg-white/5 overflow-hidden">
                <img
                  src={op.imagemUrl}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-contain p-1"
                />
              </div>
              <div className="rounded-lg bg-black/50 px-2 py-1.5 text-white text-xs md:text-sm font-semibold text-center leading-tight">
                {op.nome}
              </div>
            </button>
          );
        })}
      </div>

      {/* Feedback + Próxima */}
      {respondeu && (
        <div className="animate-fade-in space-y-3">
          <div
            className={`rounded-xl p-3 text-sm ${
              acertou
                ? "bg-emerald-500/20 ring-1 ring-emerald-300/40 text-emerald-100"
                : "bg-rose-500/20 ring-1 ring-rose-300/40 text-rose-100"
            }`}
          >
            {acertou ? rodada.feedbackAcerto : rodada.feedbackErro}
            {!acertou && (
              <div className="mt-2 text-white/85">
                A resposta certa era:{" "}
                <span className="font-bold text-amber-200">
                  {opcaoCerta.nome}
                </span>
              </div>
            )}
          </div>
          <button
            onClick={proxima}
            className="w-full py-3 rounded-full bg-amber-400 text-amber-900 font-bold text-base hover:bg-amber-300 active:scale-95 transition"
          >
            {idx + 1 >= total ? "🏁 Ver resultado" : "➡️ Próxima rodada"}
          </button>
        </div>
      )}
    </div>
  );
}
