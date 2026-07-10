/**
 * QuizRelâmpago — 3 perguntas curtas com feedback explicativo por alternativa.
 * Estilo do Dashboard Fund. 2: grafite + ciano, tipografia técnica.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Zap, ChevronRight, RotateCcw } from "lucide-react";
import type { QuizItem } from "./dados-fund2";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

export function QuizRelampago({
  perguntas,
  audioLigado = true,
}: {
  perguntas: QuizItem[];
  audioLigado?: boolean;
}) {
  const [idx, setIdx] = useState(0);
  const [escolhas, setEscolhas] = useState<Array<number | null>>(
    () => perguntas.map(() => null),
  );
  const [finalizado, setFinalizado] = useState(false);

  const atual = perguntas[idx];
  const escolha = escolhas[idx];
  const respondida = escolha !== null;

  const acertos = escolhas.reduce((acc, esc, i) => {
    if (esc === null) return acc;
    return perguntas[i].opcoes[esc].correta ? acc + 1 : acc;
  }, 0);

  function responder(i: number) {
    if (respondida) return;
    const novas = [...escolhas];
    novas[idx] = i;
    setEscolhas(novas);
    if (audioLigado) {
      stopSpeaking();
      speakChunked(atual.opcoes[i].explicacao);
    }
  }

  function proxima() {
    stopSpeaking();
    if (idx < perguntas.length - 1) {
      setIdx(idx + 1);
    } else {
      setFinalizado(true);
    }
  }

  function reiniciar() {
    stopSpeaking();
    setEscolhas(perguntas.map(() => null));
    setIdx(0);
    setFinalizado(false);
  }

  if (finalizado) {
    const pct = Math.round((acertos / perguntas.length) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-xl border border-cyan-500/40 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-5 text-center"
      >
        <div className="flex justify-center mb-3">
          <div className="h-12 w-12 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center">
            <Zap className="h-6 w-6 text-cyan-300" />
          </div>
        </div>
        <div className="text-[11px] uppercase tracking-widest text-cyan-400 mb-1">Quiz Relâmpago concluído</div>
        <div className="font-serif text-2xl text-slate-50 mb-1">
          {acertos} de {perguntas.length}
        </div>
        <div className="text-slate-400 text-sm mb-4">Aproveitamento: {pct}%</div>
        <button
          type="button"
          onClick={reiniciar}
          className="inline-flex items-center gap-2 rounded border border-slate-700 px-4 py-2 text-xs font-mono uppercase tracking-widest text-slate-300 hover:text-cyan-300 hover:border-cyan-500/60"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Refazer quiz
        </button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950/60 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 bg-slate-900/60 px-4 py-2.5">
        <div className="h-7 w-7 rounded-full bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center">
          <Zap className="h-3.5 w-3.5 text-cyan-300" />
        </div>
        <div className="flex-1">
          <div className="text-[10px] uppercase tracking-widest text-slate-500">Quiz Relâmpago</div>
          <div className="text-slate-200 text-sm font-medium">
            Pergunta {idx + 1} de {perguntas.length}
          </div>
        </div>
        {/* Progresso bolinhas */}
        <div className="flex gap-1.5">
          {perguntas.map((_, i) => {
            const e = escolhas[i];
            const done = e !== null;
            const correct = done && perguntas[i].opcoes[e!].correta;
            return (
              <div
                key={i}
                className={[
                  "h-2 w-2 rounded-full",
                  i === idx
                    ? "ring-2 ring-cyan-400 ring-offset-1 ring-offset-slate-950"
                    : "",
                  done
                    ? correct
                      ? "bg-emerald-400"
                      : "bg-red-400"
                    : "bg-slate-700",
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>

      {/* Corpo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.2 }}
          className="p-4 space-y-3"
        >
          <p className="text-slate-100 text-[15px] leading-relaxed">{atual.pergunta}</p>

          <div className="space-y-2.5">
            {atual.opcoes.map((op, i) => {
              const selected = escolha === i;
              const revealCorrect = respondida && op.correta;
              const revealWrong = respondida && selected && !op.correta;
              const dimmed = respondida && !selected && !op.correta;
              return (
                <motion.button
                  key={i}
                  type="button"
                  whileHover={respondida ? undefined : { scale: 1.01 }}
                  whileTap={respondida ? undefined : { scale: 0.99 }}
                  onClick={() => responder(i)}
                  disabled={respondida}
                  className={[
                    "w-full text-left rounded-lg border-2 border-b-4 px-4 py-3 text-[14px] leading-relaxed transition-colors flex items-start gap-3 disabled:cursor-default",
                    revealCorrect
                      ? "border-emerald-400 border-b-emerald-600 bg-emerald-500/15 text-emerald-50"
                      : revealWrong
                        ? "border-red-400 border-b-red-600 bg-red-500/15 text-red-50"
                        : selected
                          ? "border-cyan-400 border-b-cyan-600 bg-cyan-500/10 text-slate-50"
                          : dimmed
                            ? "border-slate-800 border-b-slate-900 bg-slate-900/40 text-slate-500"
                            : "border-slate-700 border-b-slate-800 bg-slate-900/60 text-slate-200 hover:border-cyan-500/70 hover:bg-slate-900",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex-shrink-0 h-7 w-7 rounded-full border-2 flex items-center justify-center font-mono font-bold text-xs",
                      revealCorrect
                        ? "border-emerald-400 bg-emerald-500 text-white"
                        : revealWrong
                          ? "border-red-400 bg-red-500 text-white"
                          : selected
                            ? "border-cyan-400 bg-cyan-500/30 text-cyan-100"
                            : "border-slate-600 bg-slate-950 text-slate-400",
                    ].join(" ")}
                  >
                    {revealCorrect ? (
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    ) : revealWrong ? (
                      <X className="h-3.5 w-3.5" strokeWidth={3} />
                    ) : (
                      String.fromCharCode(65 + i)
                    )}
                  </span>
                  <span className="flex-1 pt-0.5">{op.texto}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Feedback explicativo */}
          {respondida && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={[
                "rounded-lg border-l-2 px-4 py-3",
                atual.opcoes[escolha!].correta
                  ? "border-emerald-400 bg-emerald-500/5"
                  : "border-amber-400 bg-amber-500/5",
              ].join(" ")}
            >
              <div
                className={[
                  "text-[11px] uppercase tracking-widest mb-1",
                  atual.opcoes[escolha!].correta ? "text-emerald-400" : "text-amber-400",
                ].join(" ")}
              >
                {atual.opcoes[escolha!].correta ? "Correto — por quê?" : "Vamos ajustar o raciocínio"}
              </div>
              <p className="text-slate-200 text-[13.5px] leading-relaxed">
                {atual.opcoes[escolha!].explicacao}
              </p>
            </motion.div>
          )}

          {respondida && (
            <div className="pt-1">
              <button
                type="button"
                onClick={proxima}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-slate-950 hover:bg-cyan-400 transition"
              >
                {idx < perguntas.length - 1 ? "Próxima pergunta" : "Ver resultado"}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
