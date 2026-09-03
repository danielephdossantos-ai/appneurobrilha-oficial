import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, Play, Pause, RotateCcw } from "lucide-react";

type Fase = "inspirar" | "expirar";
const FASES: Array<{ id: Fase; label: string; dur: number; cor: string }> = [
  { id: "inspirar", label: "Puxe o ar devagar pelo nariz", dur: 3, cor: "from-sky-300 to-sky-500" },
  { id: "expirar", label: "Solte o ar devagar pela boca", dur: 4, cor: "from-lilac/60 to-lilac" },
];
const META_CICLOS = 3;

export function PausaRespirar({ onClose }: { onClose: () => void }) {
  const [rodando, setRodando] = useState(false);
  const [faseIdx, setFaseIdx] = useState(0);
  const [segundos, setSegundos] = useState(FASES[0].dur);
  const [ciclos, setCiclos] = useState(0);
  const concluido = ciclos >= META_CICLOS;

  useEffect(() => {
    if (!rodando || concluido) return;
    const timer = window.setInterval(() => {
      setSegundos((atual) => {
        if (atual > 1) return atual - 1;
        setFaseIdx((indice) => {
          const proxima = (indice + 1) % FASES.length;
          if (proxima === 0) setCiclos((valor) => valor + 1);
          return proxima;
        });
        return FASES[(faseIdx + 1) % FASES.length].dur;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [rodando, concluido, faseIdx]);

  useEffect(() => {
    if (concluido) setRodando(false);
  }, [concluido]);

  const reiniciar = () => {
    setFaseIdx(0);
    setSegundos(FASES[0].dur);
    setCiclos(0);
    setRodando(true);
  };
  const fase = FASES[faseIdx];

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-sky-50 via-white to-lilac/10 rounded-[2rem] overflow-hidden">
      <button onClick={onClose} aria-label="Fechar" className="absolute top-4 right-4 min-h-12 min-w-12 p-3 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-500 z-10"><X size={24} /></button>
      <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-2 text-center">Pausa para Respirar</h2>
      <p className="text-base text-slate-600 mb-5 font-semibold text-center">{concluido ? "Terminou! Perceba como seu corpo está agora." : `Volta ${Math.min(ciclos + 1, META_CICLOS)} de ${META_CICLOS}`}</p>
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center mb-5">
        <motion.div className={`absolute inset-0 rounded-full bg-gradient-to-br ${fase.cor} shadow-2xl`} animate={{ scale: concluido ? 1 : fase.id === "inspirar" ? 1.18 : 0.72 }} transition={{ duration: fase.dur, ease: "easeInOut" }} />
        <div className="relative z-10 text-center text-white drop-shadow-lg px-7">
          <div className="text-xl font-black mb-2">{concluido ? "Muito bem!" : fase.label}</div>
          {!concluido && <div className="text-6xl font-black tabular-nums">{segundos}</div>}
          {concluido && <div className="text-5xl" aria-hidden="true">🌟</div>}
        </div>
      </div>
      <p className="text-base text-slate-600 font-semibold text-center max-w-md mb-5">Não precisa prender o ar nem soprar forte. Pare se ficar desconfortável e chame um adulto.</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {!rodando && !concluido && <button onClick={() => setRodando(true)} className="min-h-14 flex items-center gap-2 px-7 py-3 bg-primary text-white rounded-2xl text-lg font-bold shadow-glow"><Play size={20} /> Começar</button>}
        {rodando && <button onClick={() => setRodando(false)} className="min-h-14 flex items-center gap-2 px-7 py-3 bg-primary text-white rounded-2xl text-lg font-bold shadow-glow"><Pause size={20} /> Pausar</button>}
        {concluido && <button onClick={reiniciar} className="min-h-14 flex items-center gap-2 px-7 py-3 bg-primary text-white rounded-2xl text-lg font-bold shadow-glow"><RotateCcw size={20} /> Fazer novamente</button>}
        <button onClick={onClose} className="min-h-14 px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl text-lg font-bold">Sair</button>
      </div>
    </div>
  );
}
