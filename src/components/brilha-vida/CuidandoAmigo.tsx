import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw, Check, HeartHandshake } from "lucide-react";
import { SITUACOES_CUIDAR as SITUACOES } from "@/data/brilha-vida/cenarios";

export function CuidandoAmigo({ onClose }: { onClose: () => void }) {
  const situacoes = useMemo(() => [...SITUACOES].sort(() => Math.random() - 0.5), []);
  const [idx, setIdx] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false);

  const s = situacoes[idx];
  const acaoEscolhida = escolha !== null ? s.acoes[escolha] : null;

  const proxima = () => {
    if (idx + 1 >= situacoes.length) {
      setFim(true);
    } else {
      setIdx(idx + 1);
      setEscolha(null);
    }
  };

  const escolher = (i: number) => {
    if (escolha !== null) return;
    setEscolha(i);
    if (s.acoes[i].certo) setAcertos((a) => a + 1);
  };

  const reiniciar = () => {
    setIdx(0);
    setEscolha(null);
    setAcertos(0);
    setFim(false);
  };

  if (fim) {
    return (
      <div className="relative min-h-[70vh] flex flex-col items-center justify-center p-6 rounded-[2rem] bg-gradient-to-b from-rose-50 to-amber-50">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
        >
          <X size={22} />
        </button>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="text-7xl mb-4">
          🌟
        </motion.div>
        <h3 className="text-2xl font-black text-slate-800 mb-2">Que amigo cuidadoso!</h3>
        <p className="text-slate-600 font-bold mb-6">
          {acertos} de {situacoes.length} escolhas de empatia 💖
        </p>
        <div className="flex gap-3">
          <button onClick={reiniciar} className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50">
            <RotateCcw size={16} /> Jogar de novo
          </button>
          <button onClick={onClose} className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform">
            Pronto
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] overflow-hidden bg-gradient-to-b from-rose-50 to-white">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1 flex items-center gap-2">
        <HeartHandshake className="text-rose-500" /> Cuidando do Amigo
      </h2>
      <p className="text-sm text-slate-600 font-medium mb-2 text-center max-w-md">
        Como você pode ajudar nessa situação?
      </p>
      <div className="text-xs font-bold text-rose-600 mb-4">
        Situação {idx + 1} de {situacoes.length}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="w-full max-w-xl"
        >
          <div className="bg-white rounded-3xl p-5 shadow-lg border-2 mb-4 flex gap-4 items-center" style={{ borderColor: s.cor }}>
            <img src={s.img} alt="" aria-hidden className="w-20 h-20 object-contain shrink-0" />
            <p className="text-sm font-black text-slate-800">{s.texto}</p>
          </div>

          <div className="grid gap-2">
            {s.acoes.map((a, i) => {
              const ativo = escolha === i;
              const desab = escolha !== null && !ativo;
              return (
                <button
                  key={i}
                  onClick={() => escolher(i)}
                  disabled={escolha !== null}
                  className={`flex items-center gap-3 p-3 rounded-2xl border-2 font-bold text-sm text-left transition-all ${
                    ativo
                      ? a.certo
                        ? "bg-emerald-50 border-emerald-400 text-emerald-800"
                        : "bg-amber-50 border-amber-400 text-amber-800"
                      : desab
                      ? "bg-white border-slate-100 text-slate-400 opacity-60"
                      : "bg-white border-slate-200 text-slate-700 hover:border-rose-300"
                  }`}
                >
                  <span className="text-2xl" aria-hidden>{a.emoji}</span>
                  <span className="flex-1">{a.texto}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {acaoEscolhida && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 rounded-2xl text-sm font-medium text-center ${
                  acaoEscolhida.certo
                    ? "bg-emerald-50 text-emerald-800 border-2 border-emerald-200"
                    : "bg-amber-50 text-amber-800 border-2 border-amber-200"
                }`}
              >
                <div className="font-black flex items-center justify-center gap-1 mb-1">
                  {acaoEscolhida.certo ? <><Check size={16} /> Que cuidado lindo!</> : "Hmm, vamos pensar…"}
                </div>
                {acaoEscolhida.feedback}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      <div className="mt-auto pt-6 flex gap-3">
        {escolha !== null && (
          <button
            onClick={proxima}
            className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            {idx + 1 >= situacoes.length ? "Ver resultado" : "Próxima situação →"}
          </button>
        )}
      </div>
    </div>
  );
}
