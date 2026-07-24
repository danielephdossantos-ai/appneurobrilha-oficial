import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw } from "lucide-react";
import { useMoodRecorder } from "./shared/moodLog";

const LUZ_METRICS: Record<string, { valence: number; energy: number; quadrante: "vermelho" | "amarelo" | "verde" }> = {
  vermelho: { valence: -2, energy: 2, quadrante: "vermelho" },
  amarelo: { valence: -0.5, energy: 1, quadrante: "amarelo" },
  verde: { valence: 2, energy: 0, quadrante: "verde" },
};

import { url as imgBravo } from "@/assets/brilha-vida/emocoes/bravo.png.asset.json";
import { url as imgConfuso } from "@/assets/brilha-vida/emocoes/confuso.png.asset.json";
import { url as imgTranquilo } from "@/assets/brilha-vida/emocoes/tranquilo.png.asset.json";

/**
 * Semáforo do Sentir
 * Três luzes (vermelho/amarelo/verde) que representam o estado emocional
 * e ensinam a estratégia PARE • PENSE • SIGA.
 * Reutiliza as carinhas kawaii já aprovadas em emocoes/.
 */
const LUZES = [
  {
    id: "vermelho",
    cor: "#ef4444",
    glow: "shadow-[0_0_60px_20px_rgba(239,68,68,0.55)]",
    bg: "from-red-100 to-red-200",
    img: imgBravo,
    rotulo: "PARE",
    titulo: "Estou explodindo",
    dica: "Pare tudo. Respire fundo 3 vezes bem devagarinho. Conte até 10 com calma.",
  },
  {
    id: "amarelo",
    cor: "#eab308",
    glow: "shadow-[0_0_60px_20px_rgba(234,179,8,0.55)]",
    bg: "from-yellow-100 to-yellow-200",
    img: imgConfuso,
    rotulo: "PENSE",
    titulo: "Estou ficando nervoso(a)",
    dica: "Antes de agir, pense: o que aconteceu? Como posso resolver com gentileza?",
  },
  {
    id: "verde",
    cor: "#22c55e",
    glow: "shadow-[0_0_60px_20px_rgba(34,197,94,0.55)]",
    bg: "from-emerald-100 to-emerald-200",
    img: imgTranquilo,
    rotulo: "SIGA",
    titulo: "Estou tranquilo(a)",
    dica: "Você está pronto para brincar, conversar e seguir o seu dia com leveza.",
  },
] as const;

type LuzId = (typeof LUZES)[number]["id"];

export function SemaforoSentir({ onClose }: { onClose: () => void }) {
  const [ativa, setAtiva] = useState<LuzId | null>(null);
  const luz = LUZES.find((l) => l.id === ativa);
  const recordMood = useMoodRecorder();
  const escolher = useCallback(
    (l: (typeof LUZES)[number]) => {
      if (ativa === l.id) return;
      setAtiva(l.id);
      const m = LUZ_METRICS[l.id];
      recordMood({
        source: "semaforo",
        valence: m.valence,
        energy: m.energy,
        emocao: l.titulo,
        quadrante: m.quadrante,
      });
    },
    [ativa, recordMood],
  );

  return (
    <div
      className={`relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] overflow-hidden transition-colors duration-500 bg-gradient-to-b ${
        luz ? luz.bg : "from-slate-50 to-white"
      }`}
    >
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1">Semáforo do Sentir</h2>
      <p className="text-sm text-slate-600 font-medium mb-6 text-center max-w-md">
        Toque a luz que combina com o que você está sentindo agora.
      </p>

      <div className="flex items-center gap-8 w-full max-w-md justify-center">
        {/* Semáforo */}
        <div className="flex flex-col gap-3 p-4 bg-slate-800 rounded-[2rem] shadow-2xl border-4 border-slate-900">
          {LUZES.map((l) => {
            const acesa = ativa === l.id;
            return (
              <button
                key={l.id}
                onClick={() => setAtiva(l.id)}
                aria-label={l.rotulo}
                className={`relative w-20 h-20 rounded-full border-4 border-slate-900 transition-all ${
                  acesa ? l.glow : "opacity-40 hover:opacity-70"
                }`}
                style={{ background: l.cor }}
              >
                {acesa && (
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white drop-shadow"
                  >
                    {l.rotulo}
                  </motion.span>
                )}
              </button>
            );
          })}
          {/* base */}
          <div className="h-3 bg-slate-900 rounded-b-xl -mb-1" />
        </div>

        {/* Carinhas auxiliares */}
        <div className="flex-1 flex flex-col gap-2">
          {LUZES.map((l) => (
            <button
              key={l.id}
              onClick={() => setAtiva(l.id)}
              className={`flex items-center gap-3 p-3 rounded-2xl border-2 transition-all text-left ${
                ativa === l.id
                  ? "bg-white shadow-lg scale-105"
                  : "bg-white/60 border-transparent hover:bg-white"
              }`}
              style={ativa === l.id ? { borderColor: l.cor } : {}}
            >
              <img
                src={l.img}
                alt={l.titulo}
                width={48}
                height={48}
                className="w-12 h-12 object-contain drop-shadow-sm"
              />
              <span className="font-black text-slate-700 text-sm leading-tight">
                {l.rotulo}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Dica */}
      <AnimatePresence mode="wait">
        {luz && (
          <motion.div
            key={luz.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-6 bg-white rounded-3xl p-5 shadow-lg border-2 max-w-md text-center"
            style={{ borderColor: luz.cor }}
          >
            <img
              src={luz.img}
              alt={luz.titulo}
              width={96}
              height={96}
              className="w-24 h-24 object-contain mx-auto mb-2 drop-shadow-md"
            />
            <div
              className="text-xs font-black tracking-widest mb-1"
              style={{ color: luz.cor }}
            >
              {luz.rotulo}
            </div>
            <div className="font-black text-lg text-slate-800 mb-1">{luz.titulo}</div>
            <p className="text-sm text-slate-600 font-medium">{luz.dica}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-6 flex gap-3">
        {ativa && (
          <button
            onClick={() => setAtiva(null)}
            className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50"
          >
            <RotateCcw size={16} /> Trocar luz
          </button>
        )}
        <button
          onClick={onClose}
          className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
        >
          Pronto
        </button>
      </div>
    </div>
  );
}
