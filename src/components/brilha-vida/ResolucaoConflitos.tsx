import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw, Check, Shuffle } from "lucide-react";
import { CONFLITOS } from "@/data/brilha-vida/cenarios";

const PASSOS = [
  { n: 1, titulo: "Parar e perceber", desc: "Respire e veja qual é o problema." },
  { n: 2, titulo: "Pensar em soluções", desc: "Quais saídas existem?" },
  { n: 3, titulo: "Escolher a melhor", desc: "Qual cuida de todos?" },
];

const pickConflito = () => CONFLITOS[Math.floor(Math.random() * CONFLITOS.length)];

export function ResolucaoConflitos({ onClose }: { onClose: () => void }) {
  const [conflito, setConflito] = useState(() => pickConflito());
  const [passo, setPasso] = useState(1);
  const [escolha, setEscolha] = useState<number | null>(null);

  const sol = escolha !== null ? conflito.solucoes[escolha] : null;

  const novo = () => {
    setPasso(1);
    setEscolha(null);
    setConflito(pickConflito());
  };

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1 flex items-center gap-2">
        <Shuffle className="text-indigo-500" /> Resolução de Conflitos
      </h2>
      <p className="text-sm text-slate-600 font-medium mb-4 text-center max-w-md">
        Aprenda os 3 passos para resolver brigas com calma.
      </p>

      {/* Trilho dos 3 passos */}
      <div className="flex items-center gap-2 mb-6">
        {PASSOS.map((p, i) => (
          <div key={p.n} className="flex items-center gap-2">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-sm transition-colors ${
                passo >= p.n ? "bg-indigo-500 text-white" : "bg-slate-200 text-slate-500"
              }`}
            >
              {p.n}
            </div>
            {i < PASSOS.length - 1 && (
              <div className={`w-8 h-1 rounded ${passo > p.n ? "bg-indigo-500" : "bg-slate-200"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Cena do conflito */}
      <div
        className="bg-white rounded-3xl p-5 shadow-lg border-2 mb-4 flex gap-4 items-center w-full max-w-xl"
        style={{ borderColor: conflito.cor }}
      >
        <img src={conflito.img} alt="" aria-hidden className="w-20 h-20 object-contain shrink-0" />
        <p className="text-sm font-black text-slate-800">{conflito.problema}</p>
      </div>

      <AnimatePresence mode="wait">
        {passo === 1 && (
          <motion.div
            key="p1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-indigo-50 border-2 border-indigo-200 rounded-3xl p-5 max-w-xl text-center"
          >
            <div className="text-2xl mb-1">🫁</div>
            <h3 className="font-black text-indigo-800 mb-1">Passo 1 — Parar e perceber</h3>
            <p className="text-sm text-indigo-700 font-medium">
              Respire fundo 3 vezes. Pergunte: <em>qual é o problema de verdade?</em>
            </p>
          </motion.div>
        )}

        {passo === 2 && (
          <motion.div
            key="p2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-indigo-50 border-2 border-indigo-200 rounded-3xl p-5 max-w-xl text-center"
          >
            <div className="text-2xl mb-1">💡</div>
            <h3 className="font-black text-indigo-800 mb-1">Passo 2 — Pensar em soluções</h3>
            <p className="text-sm text-indigo-700 font-medium">
              Existem várias saídas possíveis. Vamos ver algumas no próximo passo.
            </p>
          </motion.div>
        )}

        {passo === 3 && (
          <motion.div
            key="p3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-xl space-y-2"
          >
            <h3 className="font-black text-indigo-800 mb-2 text-center">
              Passo 3 — Escolha a melhor solução
            </h3>
            {conflito.solucoes.map((s, i) => {
              const ativa = escolha === i;
              const desab = escolha !== null && !ativa;
              return (
                <button
                  key={i}
                  onClick={() => escolha === null && setEscolha(i)}
                  disabled={escolha !== null}
                  className={`w-full text-left p-3 rounded-2xl border-2 font-bold text-sm transition-all ${
                    ativa
                      ? s.pontos >= 2
                        ? "bg-emerald-50 border-emerald-400 text-emerald-800"
                        : "bg-amber-50 border-amber-400 text-amber-800"
                      : desab
                      ? "bg-white border-slate-100 text-slate-400 opacity-60"
                      : "bg-white border-slate-200 text-slate-700 hover:border-indigo-300"
                  }`}
                >
                  {s.texto}
                </button>
              );
            })}

            <AnimatePresence>
              {sol && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-3 p-3 rounded-2xl text-sm font-medium text-center ${
                    sol.pontos >= 2
                      ? "bg-emerald-50 text-emerald-800 border-2 border-emerald-200"
                      : "bg-amber-50 text-amber-800 border-2 border-amber-200"
                  }`}
                >
                  <div className="font-black mb-1 flex items-center justify-center gap-1">
                    {sol.pontos >= 2 ? <><Check size={16} /> Boa escolha!</> : "Hmm, pode melhorar"}
                  </div>
                  {sol.comentario}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-6 flex gap-3">
        {passo < 3 && (
          <button
            onClick={() => setPasso((p) => p + 1)}
            className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            Próximo passo →
          </button>
        )}
        {passo === 3 && sol && (
          <button
            onClick={novo}
            className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50"
          >
            <RotateCcw size={16} /> Outro conflito
          </button>
        )}
        <button
          onClick={onClose}
          className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
