import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw } from "lucide-react";
import { useMoodRecorder } from "./shared/moodLog";

const NIVEL_METRICS: Record<number, { valence: number; energy: number }> = {
  1: { valence: 2, energy: 1 },
  2: { valence: 1, energy: -0.5 },
  3: { valence: -0.5, energy: 0.5 },
  4: { valence: -1.5, energy: -1 },
  5: { valence: -2, energy: 2 },
};

import { url as imgBravo } from "@/assets/brilha-vida/emocoes/bravo.png.asset.json";
import { url as imgTriste } from "@/assets/brilha-vida/emocoes/triste.png.asset.json";
import { url as imgSurpreso } from "@/assets/brilha-vida/emocoes/confuso.png.asset.json";
import { url as imgSono } from "@/assets/brilha-vida/emocoes/tranquilo.png.asset.json";
import { url as imgFeliz } from "@/assets/brilha-vida/emocoes/feliz.png.asset.json";

/**
 * Termômetro das Emoções
 * Escala vertical de 5 níveis ilustrados (ilustrações kawaii do neuro-treino).
 * Cada nível dá uma sugestão de regulação.
 */
const NIVEIS = [
  {
    id: 5,
    img: imgBravo,
    nome: "Explodindo",
    cor: "#ef4444",
    bg: "from-red-100 to-red-200",
    dica: "Vamos respirar fundo juntos. Tente a Pausa para Respirar 💙",
  },
  {
    id: 4,
    img: imgTriste,
    nome: "Triste",
    cor: "#f97316",
    bg: "from-orange-100 to-orange-200",
    dica: "Tudo bem chorar. Pode pedir um abraço pra alguém de confiança 🤗",
  },
  {
    id: 3,
    img: imgSurpreso,
    nome: "Confuso(a)",
    cor: "#eab308",
    bg: "from-yellow-100 to-yellow-200",
    dica: "Beba água e conte pra alguém o que você sentiu 💧",
  },
  {
    id: 2,
    img: imgSono,
    nome: "Tranquilo(a)",
    cor: "#22c55e",
    bg: "from-emerald-100 to-emerald-200",
    dica: "Que bom! Aproveite essa calma pra brincar do que gosta 🎨",
  },
  {
    id: 1,
    img: imgFeliz,
    nome: "Muito feliz",
    cor: "#06b6d4",
    bg: "from-sky-100 to-sky-200",
    dica: "Uhul! Compartilhe esse sorriso com alguém especial ✨",
  },
];


export function TermometroEmocoes({ onClose }: { onClose: () => void }) {
  const [selecionado, setSelecionado] = useState<number | null>(null);
  const recordMood = useMoodRecorder();
  const escolher = (n: (typeof NIVEIS)[number]) => {
    if (selecionado === n.id) return;
    setSelecionado(n.id);
    const m = NIVEL_METRICS[n.id];
    recordMood({
      source: "termometro",
      valence: m?.valence ?? 0,
      energy: m?.energy ?? 0,
      emocao: n.nome,
    });
  };
  const nivel = NIVEIS.find((n) => n.id === selecionado);

  return (
    <div
      className={`relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] overflow-hidden transition-colors duration-500 bg-gradient-to-b ${
        nivel ? nivel.bg : "from-slate-50 to-white"
      }`}
    >
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1">Termômetro das Emoções</h2>
      <p className="text-sm text-slate-600 font-medium mb-6 text-center max-w-md">
        Como você está se sentindo agora? Toque no rostinho que combina com você.
      </p>

      <div className="flex items-center gap-6 w-full max-w-md">
        {/* Termômetro visual */}
        <div className="relative w-14 h-80 rounded-full bg-white shadow-inner border-2 border-slate-200 overflow-hidden flex flex-col-reverse">
          <motion.div
            className="w-full rounded-full"
            animate={{
              height: nivel ? `${(nivel.id / 5) * 100}%` : "0%",
              backgroundColor: nivel?.cor ?? "#e2e8f0",
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          {/* bolinha base */}
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-2 border-slate-200 shadow-md"
            style={{ background: nivel?.cor ?? "#e2e8f0" }}
          />
        </div>

        {/* Botões dos níveis */}
        <div className="flex-1 flex flex-col gap-2">
          {NIVEIS.map((n) => (
            <button
              key={n.id}
              onClick={() => setSelecionado(n.id)}
              className={`flex items-center gap-3 p-3 rounded-2xl border-2 transition-all text-left ${
                selecionado === n.id
                  ? "bg-white border-slate-400 shadow-lg scale-105"
                  : "bg-white/60 border-transparent hover:bg-white hover:scale-102"
              }`}
              style={selecionado === n.id ? { borderColor: n.cor } : {}}
            >
              <img src={n.img} alt={n.nome} width={48} height={48} className="w-12 h-12 object-contain drop-shadow-sm" />
              <span className="font-black text-slate-700 text-sm">{n.nome}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Dica de regulação */}
      <AnimatePresence mode="wait">
        {nivel && (
          <motion.div
            key={nivel.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-6 bg-white rounded-3xl p-5 shadow-lg border-2 max-w-md text-center"
            style={{ borderColor: nivel.cor }}
          >
            <img src={nivel.img} alt={nivel.nome} width={96} height={96} className="w-24 h-24 object-contain mx-auto mb-2 drop-shadow-md" />
            <div className="font-black text-lg text-slate-800 mb-1">
              Você está {nivel.nome.toLowerCase()}
            </div>
            <p className="text-sm text-slate-600 font-medium">{nivel.dica}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-6 flex gap-3">
        {selecionado && (
          <button
            onClick={() => setSelecionado(null)}
            className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50"
          >
            <RotateCcw size={16} /> Escolher de novo
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
