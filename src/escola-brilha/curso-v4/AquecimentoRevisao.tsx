import { useMemo, useState } from "react";
import { Volume2, Brain, Check, X } from "lucide-react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import {
  montarAquecimento,
  registrarRespostaAquecimento,
  type ItemAquecimento,
} from "@/escola-brilha/motor/aquecimento-revisao";

type Props = {
  cursoSlug: string;
  aulaSlug: string;
  /** kids = 1º/2º ano (roxo/doce) · tween = 3º ano+ (grafite/neon) */
  kids?: boolean;
  tween?: boolean;
  /** velocidade da leitura em voz alta (mais lenta na alfabetização) */
  rate?: number;
};

type Estado = { escolha: number | null; acertou: boolean | null };

/**
 * Aquecimento — Revisão Espaçada
 * 3 itens de aulas anteriores, respondidos ANTES do Momento 1.
 * Nunca trava a aula: erro só devolve o item pra fila de reforço.
 */
export function AquecimentoRevisao({ cursoSlug, aulaSlug, kids, tween, rate }: Props) {
  const itens = useMemo<ItemAquecimento[]>(
    () => montarAquecimento(cursoSlug, aulaSlug, 3),
    [cursoSlug, aulaSlug],
  );

  const [estados, setEstados] = useState<Record<string, Estado>>({});

  if (!itens.length) return null;

  const respondidos = itens.filter((i) => estados[i.id]?.acertou != null).length;
  const acertos = itens.filter((i) => estados[i.id]?.acertou).length;
  const completo = respondidos === itens.length;

  const cor = tween ? "#818cf8" : "#c084fc";

  function responder(item: ItemAquecimento, idx: number) {
    if (estados[item.id]?.acertou != null) return;
    const acertou = idx === item.correta;
    registrarRespostaAquecimento(item.id, acertou);
    setEstados((s) => ({ ...s, [item.id]: { escolha: idx, acertou } }));
    stopSpeaking();
    speakChunked(acertou ? item.feedbackAcerto : item.feedbackErro, {
      rate: rate ?? (kids && !tween ? 0.85 : 0.95),
    }).catch(() => {});
  }

  function ouvir(texto: string) {
    stopSpeaking();
    speakChunked(texto, { rate: rate ?? (kids && !tween ? 0.8 : 0.95) }).catch(() => {});
  }

  return (
    <section id="m0" className="scroll-mt-24">
      <div
        className={
          tween
            ? "rounded-xl border border-indigo-400/40 bg-white/[.04] overflow-hidden"
            : "rounded-3xl border-2 border-purple-300/40 bg-white/[.07] overflow-hidden"
        }
      >
        {/* Cabeçalho */}
        <div
          className="px-4 py-3 flex items-center gap-3"
          style={{ background: `linear-gradient(90deg, ${cor}33, transparent)` }}
        >
          <div
            className="h-9 w-9 shrink-0 grid place-items-center rounded-full"
            style={{ background: cor }}
          >
            <Brain className="h-5 w-5 text-[#1a0d3d]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className={tween ? "text-sm font-extrabold uppercase tracking-wide" : "text-base font-black"}>
              🔁 Aquecimento — Você lembra?
            </div>
            <div className="text-[11px] text-white/70">
              {itens.length} perguntinhas das aulas que você já fez. Isso deixa o que você aprendeu
              guardado pra sempre.
            </div>
          </div>
          <span className="shrink-0 text-[11px] font-black" style={{ color: cor }}>
            {respondidos}/{itens.length}
          </span>
        </div>

        <div className="p-4 space-y-4">
          {itens.map((item, n) => {
            const st = estados[item.id];
            const travado = st?.acertou != null;
            return (
              <div
                key={item.id}
                className={
                  tween
                    ? "rounded-lg border border-white/10 bg-black/25 p-3"
                    : "rounded-2xl border border-white/15 bg-black/20 p-3"
                }
              >
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span
                    className="text-[10px] font-black px-2 py-0.5 rounded-full"
                    style={{ background: `${cor}33`, color: cor }}
                  >
                    {n + 1}
                  </span>
                  <span className="text-[10px] text-white/55 truncate">
                    {item.reforco ? "🎯 reforço · " : ""}
                    de “{item.aulaTitulo}”
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <button
                    type="button"
                    onClick={() => ouvir(item.pergunta)}
                    aria-label="Ouvir a pergunta"
                    className="shrink-0 mt-0.5 h-8 w-8 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition"
                  >
                    <Volume2 className="h-4 w-4" />
                  </button>
                  <p className={tween ? "text-sm font-semibold" : "text-[15px] font-bold leading-snug"}>
                    {item.pergunta}
                  </p>
                </div>

                {/* Alternativas — sempre empilhadas (melhor no celular) */}
                <div className="mt-3 flex flex-col gap-2">
                  {item.opcoes.map((op, i) => {
                    const escolhida = st?.escolha === i;
                    const certa = travado && i === item.correta;
                    const errada = travado && escolhida && !certa;
                    return (
                      <button
                        key={i}
                        type="button"
                        disabled={travado}
                        onClick={() => responder(item, i)}
                        className={[
                          "w-full text-left px-3 py-2.5 rounded-xl border text-sm font-semibold transition flex items-center gap-2",
                          certa
                            ? "bg-emerald-400/25 border-emerald-300 text-emerald-50"
                            : errada
                              ? "bg-rose-500/20 border-rose-400 text-rose-50"
                              : travado
                                ? "bg-white/5 border-white/10 text-white/50"
                                : "bg-white/8 border-white/20 hover:bg-white/15 active:scale-[.99]",
                        ].join(" ")}
                      >
                        {certa && <Check className="h-4 w-4 shrink-0" />}
                        {errada && <X className="h-4 w-4 shrink-0" />}
                        <span className="min-w-0">{op}</span>
                      </button>
                    );
                  })}
                </div>

                {travado && (
                  <div
                    className={[
                      "mt-2 rounded-xl px-3 py-2 text-[13px] leading-snug",
                      st?.acertou
                        ? "bg-emerald-400/15 text-emerald-100"
                        : "bg-amber-400/15 text-amber-100",
                    ].join(" ")}
                  >
                    {st?.acertou ? "✅ " : "💡 "}
                    {st?.acertou ? item.feedbackAcerto : item.feedbackErro}
                    {!st?.acertou && (
                      <div className="mt-1 text-[12px] text-white/70">
                        Resposta certa:{" "}
                        <strong className="text-white">{item.opcoes[item.correta]}</strong>. Essa
                        pergunta volta no próximo aquecimento pra você treinar de novo.
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {completo && (
            <div
              className="rounded-2xl px-4 py-3 text-sm font-bold text-center"
              style={{ background: `${cor}22`, color: "#fff" }}
            >
              {acertos === itens.length
                ? "🌟 Memória afiada! Você lembrou de tudo. Agora vamos para a aula de hoje!"
                : `Você lembrou de ${acertos} de ${itens.length}. O que faltou volta no próximo aquecimento — bora para a aula de hoje! 👇`}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
