import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, RotateCcw, ArrowRight } from "lucide-react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

type Props = {
  imagemUrl: string;
  itemPlural: string;
  grupos: number[]; // ex.: [5, 2]
};

const NOME: Record<number, string> = {
  0: "zero", 1: "um", 2: "dois", 3: "três", 4: "quatro", 5: "cinco",
  6: "seis", 7: "sete", 8: "oito", 9: "nove", 10: "dez",
  11: "onze", 12: "doze", 13: "treze", 14: "quatorze", 15: "quinze",
};
const num = (n: number) => NOME[n] ?? String(n);

/**
 * "Frutas viram número": mostra grupos de frutas separados por " + ",
 * conta uma a uma quando a criança toca, e revela a soma como algarismos
 * (ex.: "🍎🍎🍎🍎🍎 + 🍎🍎  →  5 + 2 = 7").
 */
export function FrutasParaNumero({ imagemUrl, itemPlural, grupos }: Props) {
  const total = grupos.reduce((s, n) => s + n, 0);
  // achatamos numa única lista mas guardamos qual grupo cada índice pertence
  const flat: Array<{ idx: number; grupo: number; posGrupo: number }> = [];
  let idx = 0;
  grupos.forEach((qtd, gi) => {
    for (let k = 0; k < qtd; k++) flat.push({ idx: idx++, grupo: gi, posGrupo: k });
  });

  const [tocadas, setTocadas] = useState<number[]>([]);
  const [revelou, setRevelou] = useState(false);

  useEffect(() => () => stopSpeaking(), []);

  const contar = (i: number) => {
    if (tocadas.includes(i)) return;
    const novo = [...tocadas, i];
    setTocadas(novo);
    const n = novo.length;
    speakChunked(
      n === total
        ? `${num(n)}! Contamos ${num(n)} ${itemPlural}.`
        : num(n),
      { rate: 0.9, pitch: 1.1 },
    );
  };

  const resetar = () => {
    stopSpeaking();
    setTocadas([]);
    setRevelou(false);
  };

  const contouTudo = tocadas.length === total;

  return (
    <div className="mt-3 rounded-2xl bg-white/95 text-[#0d1f55] p-4 border-2 border-amber-300/50">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-black uppercase tracking-widest text-amber-600">
          Toque em cada {itemPlural.replace(/s$/, "")} para contar
        </div>
        <button
          onClick={resetar}
          disabled={tocadas.length === 0}
          className="h-9 w-9 rounded-xl bg-white border-2 border-[#0d1f55]/20 grid place-items-center active:scale-95 disabled:opacity-30"
          aria-label="Reiniciar"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      {/* Frutas em grupos separados por + */}
      <div className="rounded-xl bg-amber-50 p-3 flex flex-wrap items-center justify-center gap-3">
        {grupos.map((qtd, gi) => (
          <div key={gi} className="flex items-center gap-2">
            <div className="flex flex-wrap gap-1 max-w-[220px] justify-center">
              {flat
                .filter((f) => f.grupo === gi)
                .map((f) => {
                  const pos = tocadas.indexOf(f.idx);
                  const foiContada = pos !== -1;
                  return (
                    <motion.button
                      key={f.idx}
                      onClick={() => contar(f.idx)}
                      whileTap={{ scale: 0.85 }}
                      animate={foiContada ? { scale: [1, 1.25, 1] } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-12 h-12 grid place-items-center"
                      aria-label={`${itemPlural} ${f.posGrupo + 1}`}
                    >
                      <img
                        src={imagemUrl}
                        alt=""
                        className="w-full h-full object-contain drop-shadow"
                        draggable={false}
                      />
                      <AnimatePresence>
                        {foiContada && (
                          <motion.div
                            initial={{ scale: 0, y: -6 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0 }}
                            className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-emerald-500 text-white grid place-items-center text-[10px] font-black shadow border-2 border-white"
                          >
                            {pos + 1}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
            </div>
            {gi < grupos.length - 1 && (
              <div className="text-3xl font-black text-amber-500">+</div>
            )}
          </div>
        ))}
      </div>

      {/* Botão revelar */}
      {contouTudo && !revelou && (
        <button
          onClick={() => {
            setRevelou(true);
            speakChunked(
              `${grupos.join(" mais ")} é igual a ${num(total)}.`,
              { rate: 0.9 },
            );
          }}
          className="mt-3 w-full py-3 rounded-xl bg-amber-400 text-[#0d1f55] font-black flex items-center justify-center gap-2 active:scale-95"
        >
          Ver a soma <ArrowRight className="h-5 w-5" />
        </button>
      )}

      {/* Revelação: frutas viram número */}
      <AnimatePresence>
        {revelou && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-xl bg-[#0d1f55] text-white p-4"
          >
            <div className="text-[10px] font-black uppercase tracking-widest text-amber-300 mb-2 flex items-center gap-2">
              <Volume2 className="h-3 w-3" /> As frutas viraram números:
            </div>
            <div className="flex items-center justify-center gap-3 text-4xl sm:text-5xl font-black tabular-nums">
              {grupos.map((n, gi) => (
                <div key={gi} className="flex items-center gap-3">
                  <motion.span
                    initial={{ scale: 0, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: gi * 0.25, type: "spring" }}
                    className="text-amber-300"
                  >
                    {n}
                  </motion.span>
                  {gi < grupos.length - 1 && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: gi * 0.25 + 0.1 }}
                    >
                      +
                    </motion.span>
                  )}
                </div>
              ))}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: grupos.length * 0.25 + 0.1 }}
              >
                =
              </motion.span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: grupos.length * 0.25 + 0.25, type: "spring" }}
                className="text-emerald-400"
              >
                {total}
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
