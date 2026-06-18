import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { X, Play, Pause, RotateCcw } from "lucide-react";

type Fase = "inspirar" | "segurar" | "expirar";

const FASES: { id: Fase; label: string; dur: number; scale: number; cor: string }[] = [
  { id: "inspirar", label: "Inspire pelo nariz", dur: 4, scale: 1.4, cor: "from-sky-300 to-sky-500" },
  { id: "segurar", label: "Segure o ar", dur: 4, scale: 1.4, cor: "from-emerald-300 to-emerald-500" },
  { id: "expirar", label: "Solte pela boca", dur: 4, scale: 0.7, cor: "from-lilac/60 to-lilac" },
];

const META_CICLOS = 4;

export function PausaRespirar({ onClose }: { onClose: () => void }) {
  const [rodando, setRodando] = useState(true);
  const [faseIdx, setFaseIdx] = useState(0);
  const [segundos, setSegundos] = useState(FASES[0].dur);
  const [ciclos, setCiclos] = useState(0);
  const [concluido, setConcluido] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!rodando || concluido) return;
    timerRef.current = setInterval(() => {
      setSegundos((s) => {
        if (s > 1) return s - 1;
        // próxima fase
        setFaseIdx((idx) => {
          const next = (idx + 1) % FASES.length;
          if (next === 0) {
            setCiclos((c) => {
              const nc = c + 1;
              if (nc >= META_CICLOS) {
                setConcluido(true);
                setRodando(false);
              }
              return nc;
            });
          }
          return next;
        });
        return FASES[(faseIdx + 1) % FASES.length].dur;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [rodando, faseIdx, concluido]);

  const reiniciar = () => {
    setFaseIdx(0);
    setSegundos(FASES[0].dur);
    setCiclos(0);
    setConcluido(false);
    setRodando(true);
  };

  const fase = FASES[faseIdx];

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-sky-50 via-white to-lilac/10 rounded-[2rem] overflow-hidden">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive transition-colors z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1">Pausa para Respirar</h2>
      <p className="text-sm text-slate-500 mb-8 font-medium">
        Ciclo {Math.min(ciclos + (concluido ? 0 : 1), META_CICLOS)} de {META_CICLOS}
      </p>

      <div className="relative w-72 h-72 flex items-center justify-center mb-8">
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${fase.cor} shadow-2xl`}
          animate={{ scale: concluido ? 1 : fase.scale }}
          transition={{ duration: fase.dur, ease: "easeInOut" }}
        />
        <div className="relative z-10 text-center text-white drop-shadow-lg">
          {concluido ? (
            <>
              <div className="text-5xl mb-2">🌟</div>
              <div className="text-2xl font-black">Muito bem!</div>
              <div className="text-sm font-medium opacity-90">Você se acalmou.</div>
            </>
          ) : (
            <>
              <div className="text-xl font-bold mb-2">{fase.label}</div>
              <div className="text-6xl font-black tabular-nums">{segundos}</div>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {!concluido ? (
          <button
            onClick={() => setRodando((r) => !r)}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            {rodando ? <><Pause size={18} /> Pausar</> : <><Play size={18} /> Continuar</>}
          </button>
        ) : (
          <button
            onClick={reiniciar}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            <RotateCcw size={18} /> Respirar de novo
          </button>
        )}
        <button
          onClick={onClose}
          className="px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
