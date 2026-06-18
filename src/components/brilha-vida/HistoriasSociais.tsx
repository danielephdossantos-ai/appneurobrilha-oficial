import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw, Check, BookOpen } from "lucide-react";
import { HISTORIAS } from "@/data/brilha-vida/cenarios";

export function HistoriasSociais({ onClose }: { onClose: () => void }) {
  const historias = useMemo(() => [...HISTORIAS].sort(() => Math.random() - 0.5), []);
  const [idx, setIdx] = useState(0);
  const [escolhaIdx, setEscolhaIdx] = useState<number | null>(null);

  const h = historias[idx];
  const escolha = escolhaIdx !== null ? h.opcoes[escolhaIdx] : null;

  const proxima = () => {
    if (idx + 1 >= historias.length) {
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
    setEscolhaIdx(null);
  };

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1 flex items-center gap-2">
        <BookOpen className="text-emerald-500" /> Histórias Sociais
      </h2>
      <p className="text-sm text-slate-600 font-medium mb-4 text-center max-w-md">
        Leia a cena e escolha a melhor atitude.
      </p>
      <div className="text-xs font-bold text-emerald-600 mb-4">
        História {idx + 1} de {historias.length}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="w-full max-w-xl"
        >
          <div className="bg-white rounded-3xl p-5 shadow-lg border-2 border-emerald-100 mb-4 flex gap-4 items-start">
            <img src={h.img} alt="" aria-hidden className="w-20 h-20 object-contain shrink-0" />
            <div>
              <h3 className="font-black text-slate-800 mb-1">{h.titulo}</h3>
              <p className="text-sm text-slate-700 font-medium">{h.cena}</p>
            </div>
          </div>

          <div className="space-y-2">
            {h.opcoes.map((o, i) => {
              const ativo = escolhaIdx === i;
              const desabilitado = escolhaIdx !== null && !ativo;
              return (
                <button
                  key={i}
                  onClick={() => escolhaIdx === null && setEscolhaIdx(i)}
                  disabled={escolhaIdx !== null}
                  className={`w-full text-left p-4 rounded-2xl border-2 font-bold text-sm transition-all ${
                    ativo
                      ? o.certo
                        ? "bg-emerald-50 border-emerald-400 text-emerald-800"
                        : "bg-amber-50 border-amber-400 text-amber-800"
                      : desabilitado
                      ? "bg-white border-slate-100 text-slate-400 opacity-60"
                      : "bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:scale-[1.01]"
                  }`}
                >
                  {o.texto}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {escolha && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-2xl border-2 text-center ${
                  escolha.certo
                    ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                    : "bg-amber-50 border-amber-300 text-amber-800"
                }`}
              >
                <div className="flex items-center justify-center gap-2 font-black mb-1">
                  {escolha.certo ? <><Check size={18} /> Excelente escolha!</> : <>Vamos pensar de novo…</>}
                </div>
                <p className="text-sm font-medium">{escolha.feedback}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      <div className="mt-auto pt-6 flex gap-3">
        {escolha && (
          <button
            onClick={proxima}
            className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            Próxima história →
          </button>
        )}
        <button
          onClick={onClose}
          className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 flex items-center gap-2"
        >
          <RotateCcw size={16} /> Sair
        </button>
      </div>
    </div>
  );
}
