import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Sparkles, RotateCcw } from "lucide-react";
import { CENAS_ELOGIO as CENAS } from "@/data/brilha-vida/cenarios";

import imgFeliz from "@/assets/brilha-vida/emocoes/feliz.png";

export function ElogioMagico({ onClose }: { onClose: () => void }) {
  const cenas = useMemo(() => [...CENAS].sort(() => Math.random() - 0.5), []);
  const [idx, setIdx] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false);

  const c = cenas[idx];
  const op = escolha !== null ? c.opcoes[escolha] : null;

  const proxima = () => {
    if (idx + 1 >= cenas.length) { setFim(true); return; }
    setIdx(idx + 1); setEscolha(null);
  };

  const reiniciar = () => { setIdx(0); setEscolha(null); setAcertos(0); setFim(false); };

  if (fim) {
    return (
      <div className="relative min-h-[70vh] flex flex-col items-center justify-center p-6 rounded-[2rem] bg-gradient-to-b from-amber-50 to-pink-50">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"><X size={22} /></button>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="text-7xl mb-4">✨</motion.div>
        <h3 className="text-2xl font-black text-slate-800 mb-2">Você espalhou luz!</h3>
        <p className="text-slate-600 font-bold mb-6">{acertos} de {cenas.length} elogios mágicos 💛</p>
        <div className="flex gap-3">
          <button onClick={reiniciar} className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50">
            <RotateCcw size={16} /> Jogar de novo
          </button>
          <button onClick={onClose} className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform">Pronto</button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] bg-gradient-to-b from-amber-50 to-white">
      <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"><X size={22} /></button>

      <h2 className="text-2xl font-black text-slate-800 mb-1 flex items-center gap-2">
        <Sparkles className="text-amber-400" /> Elogio Mágico
      </h2>
      <p className="text-sm text-slate-600 font-medium mb-2 text-center max-w-md">Qual é o elogio mais sincero pra essa cena?</p>
      <div className="text-xs font-bold text-amber-600 mb-4">Cena {idx + 1} de {cenas.length}</div>

      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="w-full max-w-xl">
          <div className="bg-white rounded-3xl p-5 shadow-lg border-2 border-amber-100 mb-4 flex gap-4 items-center">
            <img src={imgFeliz} alt="" aria-hidden className="w-16 h-16 object-contain shrink-0" />
            <p className="text-sm font-black text-slate-800">{c.texto}</p>
          </div>
          <div className="space-y-2">
            {c.opcoes.map((o, i) => {
              const ativa = escolha === i;
              const desab = escolha !== null && !ativa;
              return (
                <button key={i} onClick={() => { if (escolha === null) { setEscolha(i); if (o.bom) setAcertos(a => a + 1); } }} disabled={escolha !== null}
                  className={`w-full text-left p-3 rounded-2xl border-2 font-bold text-sm transition-all ${
                    ativa ? (o.bom ? "bg-emerald-50 border-emerald-400 text-emerald-800" : "bg-amber-50 border-amber-400 text-amber-800")
                    : desab ? "bg-white border-slate-100 text-slate-400 opacity-60"
                    : "bg-white border-slate-200 text-slate-700 hover:border-amber-300"
                  }`}>
                  "{o.texto}"
                </button>
              );
            })}
          </div>
          <AnimatePresence>
            {op && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`mt-4 p-3 rounded-2xl text-sm font-medium text-center ${op.bom ? "bg-emerald-50 text-emerald-800 border-2 border-emerald-200" : "bg-amber-50 text-amber-800 border-2 border-amber-200"}`}>
                <div className="font-black flex items-center justify-center gap-1 mb-1">
                  {op.bom ? <><Check size={16} /> Elogio mágico!</> : "Vamos pensar de novo…"}
                </div>
                {op.feedback}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      <div className="mt-auto pt-6 flex gap-3">
        {op && (
          <button onClick={proxima} className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform">
            {idx + 1 >= cenas.length ? "Ver resultado" : "Próxima cena →"}
          </button>
        )}
      </div>
    </div>
  );
}
