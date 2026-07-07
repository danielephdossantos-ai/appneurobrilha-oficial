import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw } from "lucide-react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

type Props = {
  a: number;
  b: number;
  resultado?: number;
  itemPlural?: string;
};

const NOME: Record<number, string> = {
  0: "zero", 1: "um", 2: "dois", 3: "três", 4: "quatro", 5: "cinco",
  6: "seis", 7: "sete", 8: "oito", 9: "nove", 10: "dez",
  11: "onze", 12: "doze", 13: "treze", 14: "quatorze", 15: "quinze",
  16: "dezesseis", 17: "dezessete", 18: "dezoito", 19: "dezenove", 20: "vinte",
};
const num = (n: number) => NOME[n] ?? String(n);

/**
 * "Conta armada" — adição vertical animada.
 *   a
 * + b
 * ----
 *   r
 *
 * Ao apertar "resolver", conta em voz alta a partir de `a` somando `b`
 * (ex.: começa em 5, "seis... sete..." e o resultado aparece embaixo).
 */
export function ContaArmada({ a, b, resultado, itemPlural = "" }: Props) {
  const r = resultado ?? a + b;
  const [contando, setContando] = useState(false);
  const [atual, setAtual] = useState<number | null>(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  useEffect(() => () => stopSpeaking(), []);

  const resolver = async () => {
    if (contando) return;
    setContando(true);
    setMostrarResultado(false);
    setAtual(a);
    speakChunked(`Começamos com ${num(a)}.`, { rate: 0.95 });
    await new Promise((res) => setTimeout(res, 900));
    for (let i = 1; i <= b; i++) {
      const n = a + i;
      setAtual(n);
      speakChunked(num(n), { rate: 0.9, pitch: 1.1 });
      await new Promise((res) => setTimeout(res, 700));
    }
    setMostrarResultado(true);
    speakChunked(
      itemPlural
        ? `${num(a)} mais ${num(b)} é igual a ${num(r)}. ${num(r)} ${itemPlural}!`
        : `${num(a)} mais ${num(b)} é igual a ${num(r)}.`,
      { rate: 0.9 },
    );
    setContando(false);
  };

  const resetar = () => {
    stopSpeaking();
    setContando(false);
    setAtual(null);
    setMostrarResultado(false);
  };

  const largura = String(Math.max(a, b, r)).length;
  const pad = (n: number) => String(n).padStart(largura, " ");

  return (
    <div className="mt-3 rounded-2xl bg-white/95 text-[#0d1f55] p-4 border-2 border-amber-300/50">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-black uppercase tracking-widest text-amber-600">
          Conta armada
        </div>
        <div className="flex gap-2">
          <button
            onClick={resolver}
            disabled={contando}
            className="h-9 px-3 rounded-xl bg-amber-400 text-[#0d1f55] font-black flex items-center gap-1 active:scale-95 disabled:opacity-50"
          >
            <Play className="h-4 w-4" />
            {contando ? "Contando..." : "Resolver"}
          </button>
          <button
            onClick={resetar}
            disabled={contando || (atual === null && !mostrarResultado)}
            className="h-9 w-9 rounded-xl bg-white border-2 border-[#0d1f55]/20 grid place-items-center active:scale-95 disabled:opacity-30"
            aria-label="Reiniciar"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="rounded-xl bg-[#FFF7DC] py-6 px-4 flex justify-center">
        <div className="font-mono text-5xl sm:text-6xl font-black text-[#0d1f55] leading-tight text-right tabular-nums">
          <div className="pr-2">
            <span className="opacity-0">+&nbsp;</span>
            <span>{pad(a).split("").map((c, i) => <span key={i}>{c === " " ? "\u00A0" : c}</span>)}</span>
          </div>
          <div className="pr-2 flex items-center justify-end gap-3">
            <span className="text-amber-500">+</span>
            <span>{pad(b).split("").map((c, i) => <span key={i}>{c === " " ? "\u00A0" : c}</span>)}</span>
          </div>
          <div className="border-t-4 border-[#0d1f55] my-2" />
          <div className="pr-2 min-h-[1em]">
            <span className="opacity-0">+&nbsp;</span>
            <AnimatePresence mode="wait">
              {mostrarResultado ? (
                <motion.span
                  key="final"
                  initial={{ scale: 0, y: -10 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ type: "spring" }}
                  className="text-emerald-600 inline-block"
                >
                  {r}
                </motion.span>
              ) : atual !== null ? (
                <motion.span
                  key={atual}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.4, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-amber-500 inline-block"
                >
                  {atual}
                </motion.span>
              ) : (
                <span className="opacity-20">?</span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {mostrarResultado && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 rounded-xl bg-emerald-500 text-white p-3 text-center font-black text-lg"
        >
          {a} + {b} = {r} {itemPlural && `${itemPlural}!`}
        </motion.div>
      )}
    </div>
  );
}
