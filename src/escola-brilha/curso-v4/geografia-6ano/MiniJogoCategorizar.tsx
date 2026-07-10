/**
 * MiniJogoCategorizar — Jogo conceitual: classifique cada cartão em uma categoria.
 * Mobile-first: cartão selecionado → pilha de botões de categoria embaixo.
 * Dashboard Fund. 2 (grafite + ciano).
 */
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Puzzle, RotateCcw, Trophy } from "lucide-react";
import type { MiniJogoCategorizar as JogoData } from "./dados-fund2";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

const CORES: Record<
  "cyan" | "amber" | "emerald" | "violet",
  { chip: string; badge: string; ring: string; text: string }
> = {
  cyan: {
    chip: "border-cyan-400 bg-cyan-500/20 text-cyan-100",
    badge: "bg-cyan-500 text-slate-950",
    ring: "ring-cyan-400/60",
    text: "text-cyan-300",
  },
  amber: {
    chip: "border-amber-400 bg-amber-500/20 text-amber-100",
    badge: "bg-amber-400 text-slate-950",
    ring: "ring-amber-400/60",
    text: "text-amber-300",
  },
  emerald: {
    chip: "border-emerald-400 bg-emerald-500/20 text-emerald-100",
    badge: "bg-emerald-500 text-slate-950",
    ring: "ring-emerald-400/60",
    text: "text-emerald-300",
  },
  violet: {
    chip: "border-violet-400 bg-violet-500/20 text-violet-100",
    badge: "bg-violet-500 text-slate-50",
    ring: "ring-violet-400/60",
    text: "text-violet-300",
  },
};

export function MiniJogoCategorizar({
  jogo,
  audioLigado = true,
}: {
  jogo: JogoData;
  audioLigado?: boolean;
}) {
  const [respostas, setRespostas] = useState<Record<number, string>>({});
  const [selecionado, setSelecionado] = useState<number | null>(0);

  const total = jogo.cartoes.length;
  const respondidos = Object.keys(respostas).length;
  const acertos = useMemo(
    () =>
      Object.entries(respostas).reduce((acc, [i, catId]) => {
        return jogo.cartoes[Number(i)].categoriaId === catId ? acc + 1 : acc;
      }, 0),
    [respostas, jogo.cartoes],
  );

  const finalizado = respondidos === total;
  const cartaoAtual = selecionado !== null ? jogo.cartoes[selecionado] : null;
  const respAtual = selecionado !== null ? respostas[selecionado] : undefined;

  function catInfo(id: string) {
    return jogo.categorias.find((c) => c.id === id);
  }

  function categorizar(catId: string) {
    if (selecionado === null || respostas[selecionado] !== undefined) return;
    const correto = jogo.cartoes[selecionado].categoriaId === catId;
    const cat = catInfo(catId);
    const catCerta = catInfo(jogo.cartoes[selecionado].categoriaId);
    setRespostas((r) => ({ ...r, [selecionado]: catId }));
    if (audioLigado) {
      stopSpeaking();
      speakChunked(
        correto
          ? `Correto. Isso é ${cat?.titulo}.`
          : `Ops. A resposta certa era ${catCerta?.titulo}.`,
      );
    }
    // Avança automaticamente para o próximo não respondido
    setTimeout(() => {
      setSelecionado((s) => {
        if (s === null) return null;
        for (let k = 1; k <= total; k++) {
          const cand: number = (s + k) % total;
          if (respostas[cand] === undefined && cand !== s) return cand;
        }
        for (let cand2 = 0; cand2 < total; cand2++) {
          if (respostas[cand2] === undefined && cand2 !== s) return cand2;
        }
        return s;
      });
    }, 900);
  }

  function reiniciar() {
    stopSpeaking();
    setRespostas({});
    setSelecionado(0);
  }

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950/60 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 bg-slate-900/60 px-4 py-2.5">
        <div className="h-7 w-7 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center">
          <Puzzle className="h-3.5 w-3.5 text-emerald-300" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-widest text-slate-500">Mini-jogo conceitual</div>
          <div className="text-slate-200 text-sm font-medium truncate">Classifique cada afirmação</div>
        </div>
        <div className="text-[11px] font-mono text-slate-400">
          {respondidos}/{total}
        </div>
      </div>

      <div className="p-4 space-y-4">
        <p className="text-slate-300 text-[13.5px] leading-relaxed">{jogo.instrucao}</p>

        {/* Grade de cartões */}
        <div className="grid grid-cols-2 gap-2">
          {jogo.cartoes.map((c, i) => {
            const resp = respostas[i];
            const respondido = resp !== undefined;
            const correto = respondido && resp === c.categoriaId;
            const cat = respondido ? catInfo(resp) : null;
            const ativo = selecionado === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setSelecionado(i)}
                className={[
                  "text-left rounded-lg border-2 border-b-4 px-3 py-2.5 text-[12.5px] leading-snug transition-all min-h-[76px] flex flex-col justify-between",
                  respondido
                    ? correto
                      ? "border-emerald-400/60 border-b-emerald-600 bg-emerald-500/10 text-emerald-50"
                      : "border-red-400/60 border-b-red-600 bg-red-500/10 text-red-50"
                    : ativo
                      ? "border-cyan-400 border-b-cyan-600 bg-cyan-500/15 text-slate-50 ring-2 ring-cyan-400/40"
                      : "border-slate-700 border-b-slate-800 bg-slate-900/60 text-slate-200 hover:border-cyan-500/60",
                ].join(" ")}
              >
                <span className="flex-1">{c.texto}</span>
                {respondido && cat && (
                  <span
                    className={[
                      "mt-2 inline-flex items-center gap-1 self-start rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider",
                      CORES[cat.cor].chip,
                    ].join(" ")}
                  >
                    {correto ? (
                      <Check className="h-3 w-3" strokeWidth={3} />
                    ) : (
                      <X className="h-3 w-3" strokeWidth={3} />
                    )}
                    {cat.titulo}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Cartão selecionado + escolha de categoria */}
        <AnimatePresence mode="wait">
          {cartaoAtual && !finalizado && (
            <motion.div
              key={selecionado}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="rounded-lg border border-slate-700 bg-slate-900/60 p-3 space-y-3"
            >
              <div className="text-[10px] uppercase tracking-widest text-slate-500">Classifique</div>
              <div className="text-slate-100 text-[14px] leading-relaxed">{cartaoAtual.texto}</div>

              {respAtual === undefined ? (
                <div className="grid gap-2 sm:grid-cols-3">
                  {jogo.categorias.map((cat) => (
                    <motion.button
                      key={cat.id}
                      type="button"
                      whileTap={{ scale: 0.97 }}
                      onClick={() => categorizar(cat.id)}
                      className={[
                        "rounded-lg border-2 border-b-4 px-3 py-2.5 text-sm font-medium transition",
                        "border-slate-700 border-b-slate-800 bg-slate-950 text-slate-200",
                        "hover:border-transparent hover:border-b-transparent",
                        `hover:${CORES[cat.cor].chip}`,
                      ].join(" ")}
                    >
                      <span className={CORES[cat.cor].text}>▸</span> {cat.titulo}
                    </motion.button>
                  ))}
                </div>
              ) : (
                <div
                  className={[
                    "rounded-lg border-l-2 px-3 py-2 text-[13px] leading-relaxed",
                    respAtual === cartaoAtual.categoriaId
                      ? "border-emerald-400 bg-emerald-500/5 text-emerald-100"
                      : "border-red-400 bg-red-500/5 text-red-100",
                  ].join(" ")}
                >
                  {respAtual === cartaoAtual.categoriaId ? (
                    <>
                      <strong className="text-emerald-300">✓ Correto.</strong> Isso realmente é{" "}
                      <strong>{catInfo(cartaoAtual.categoriaId)?.titulo}</strong>.
                    </>
                  ) : (
                    <>
                      <strong className="text-red-300">✗ Não é isso.</strong> A resposta certa é{" "}
                      <strong>{catInfo(cartaoAtual.categoriaId)?.titulo}</strong>, não{" "}
                      <em>{catInfo(respAtual)?.titulo}</em>.
                    </>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Resultado final */}
        {finalizado && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl border border-cyan-500/40 bg-gradient-to-br from-slate-900 to-slate-950 p-4 text-center space-y-3"
          >
            <div className="flex justify-center">
              <div className="h-10 w-10 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center">
                <Trophy className="h-5 w-5 text-emerald-300" />
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-cyan-400">Mini-jogo concluído</div>
              <div className="font-serif text-xl text-slate-50">
                {acertos} de {total} corretos
              </div>
            </div>
            <button
              type="button"
              onClick={reiniciar}
              className="inline-flex items-center gap-2 rounded border border-slate-700 px-4 py-2 text-xs font-mono uppercase tracking-widest text-slate-300 hover:text-cyan-300 hover:border-cyan-500/60"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Jogar novamente
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
