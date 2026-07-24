import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { X, Play, Pause, RotateCcw } from "lucide-react";
import { VozGuia } from "./shared/VozGuia";
import { DemoAnimado } from "./shared/DemoAnimado";

/**
 * Butterfly Hug — Abraço da Borboleta (Artigas & Jarero, EMDR)
 * Estimulação bilateral leve para acalmar susto/ansiedade/trauma leve.
 * A criança cruza os braços sobre o peito e bate levemente cada mão alternando,
 * seguindo o ritmo visual das asas de uma borboleta.
 */

const CICLO_MS = 900; // meio ciclo (uma "batida") — total 1.8s por asa completa
const DURACAO_S = 90;

export function ButterflyHug({ onClose }: { onClose: () => void }) {
  const [rodando, setRodando] = useState(false);
  const [restante, setRestante] = useState(DURACAO_S);
  const [lado, setLado] = useState<"esq" | "dir">("esq");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const batidaRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const concluido = restante <= 0;

  useEffect(() => {
    if (!rodando || concluido) return;
    timerRef.current = setInterval(() => {
      setRestante((s) => Math.max(0, s - 1));
    }, 1000);
    batidaRef.current = setInterval(() => {
      setLado((l) => (l === "esq" ? "dir" : "esq"));
    }, CICLO_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (batidaRef.current) clearInterval(batidaRef.current);
    };
  }, [rodando, concluido]);

  useEffect(() => {
    if (concluido) setRodando(false);
  }, [concluido]);

  const reiniciar = () => {
    setRestante(DURACAO_S);
    setLado("esq");
    setRodando(true);
  };

  const mm = Math.floor(restante / 60);
  const ss = restante % 60;

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-lilac/10 via-white to-sky-50 rounded-[2rem] overflow-hidden">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive transition-colors z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1">Abraço da Borboleta</h2>
      <p className="text-sm text-slate-500 mb-3 font-medium text-center max-w-xs">
        Cruze os braços no peito, com as mãos nos ombros. Toque de leve uma mão de cada vez, seguindo as asas.
      </p>

      <div className="mb-3 flex flex-col items-center gap-2">
        <div className="rounded-2xl bg-white/70 p-1 shadow-inner">
          <DemoAnimado tipo="butterfly" size={140} />
        </div>
        <VozGuia texto="Cruze seus braços no peito, deixando cada mão em um ombro. Agora vamos bater bem de leve uma mão de cada vez, no ritmo das asas da borboleta. Esquerda, direita, esquerda, direita. Respira devagarinho." />
      </div>



      <div className="relative w-80 h-56 flex items-center justify-center mb-4">
        {/* Asa esquerda */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-y-1/2 origin-right"
          style={{ marginLeft: -140 }}
          animate={{
            scale: lado === "esq" && rodando ? [1, 1.15, 1] : 1,
            rotate: lado === "esq" && rodando ? [-2, -8, -2] : -2,
          }}
          transition={{ duration: CICLO_MS / 1000, ease: "easeInOut" }}
        >
          <div className="w-32 h-40 rounded-[60%_40%_60%_40%] bg-gradient-to-br from-lilac to-sky-400 shadow-xl opacity-90" />
        </motion.div>

        {/* Asa direita */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-y-1/2 origin-left"
          style={{ marginLeft: 12 }}
          animate={{
            scale: lado === "dir" && rodando ? [1, 1.15, 1] : 1,
            rotate: lado === "dir" && rodando ? [2, 8, 2] : 2,
          }}
          transition={{ duration: CICLO_MS / 1000, ease: "easeInOut" }}
        >
          <div className="w-32 h-40 rounded-[40%_60%_40%_60%] bg-gradient-to-bl from-pink-300 to-lilac shadow-xl opacity-90" />
        </motion.div>

        {/* Corpo da borboleta */}
        <div className="relative z-10 w-6 h-32 rounded-full bg-slate-800 flex flex-col items-center justify-start pt-1">
          <div className="w-3 h-3 rounded-full bg-slate-800 -mt-3" />
          <div className="absolute -top-6 w-8 flex justify-between">
            <div className="w-0.5 h-4 bg-slate-800 rotate-[20deg]" />
            <div className="w-0.5 h-4 bg-slate-800 -rotate-[20deg]" />
          </div>
        </div>
      </div>

      <div className="text-4xl font-black text-slate-800 tabular-nums mb-1">
        {mm}:{ss.toString().padStart(2, "0")}
      </div>
      <p className="text-sm font-bold text-slate-500 mb-4">
        {concluido
          ? "Você acalmou o coração 💜"
          : rodando
          ? lado === "esq"
            ? "← mão esquerda"
            : "mão direita →"
          : "Prontinho pra começar"}
      </p>

      <div className="flex items-center gap-3">
        {!rodando && !concluido && (
          <button
            onClick={() => setRodando(true)}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            <Play size={18} /> {restante === DURACAO_S ? "Começar" : "Continuar"}
          </button>
        )}
        {rodando && (
          <button
            onClick={() => setRodando(false)}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            <Pause size={18} /> Pausar
          </button>
        )}
        {concluido && (
          <button
            onClick={reiniciar}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
          >
            <RotateCcw size={18} /> De novo
          </button>
        )}
        <button
          onClick={onClose}
          className="px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50"
        >
          Sair
        </button>
      </div>

      <p className="mt-6 text-[10px] text-slate-400 text-center max-w-xs">
        Base clínica: Butterfly Hug (Artigas & Jarero, EMDR) — estimulação bilateral lenta.
      </p>
    </div>
  );
}
