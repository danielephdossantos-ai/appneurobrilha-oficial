import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw, Check } from "lucide-react";
import { useMoodRecorder } from "./shared/moodLog";

const ROSTO_VALENCIA: Record<string, number> = {
  feliz: 2,
  tranquilo: 1,
  confuso: -0.5,
  triste: -1.5,
  bravo: -2,
};
const ENERGIA_MAP: Record<number, number> = { 1: -1, 2: 0, 3: 2 };

import { url as imgFeliz } from "@/assets/brilha-vida/emocoes/feliz.png.asset.json";
import { url as imgTranquilo } from "@/assets/brilha-vida/emocoes/tranquilo.png.asset.json";
import { url as imgConfuso } from "@/assets/brilha-vida/emocoes/confuso.png.asset.json";
import { url as imgTriste } from "@/assets/brilha-vida/emocoes/triste.png.asset.json";
import { url as imgBravo } from "@/assets/brilha-vida/emocoes/bravo.png.asset.json";

/**
 * Como estou agora?
 * Check-in em 3 passos: rosto + sensação corporal + nível de energia.
 * Devolve um pequeno resumo do estado atual da criança.
 */

const ROSTOS = [
  { id: "feliz", img: imgFeliz, nome: "Feliz", cor: "#ec4899" },
  { id: "tranquilo", img: imgTranquilo, nome: "Tranquilo", cor: "#22c55e" },
  { id: "confuso", img: imgConfuso, nome: "Confuso", cor: "#eab308" },
  { id: "triste", img: imgTriste, nome: "Triste", cor: "#f97316" },
  { id: "bravo", img: imgBravo, nome: "Bravo", cor: "#ef4444" },
];

const SENSACOES = [
  { id: "leve", emoji: "🌬️", nome: "Corpo leve" },
  { id: "quente", emoji: "🔥", nome: "Cabeça quente" },
  { id: "barriga", emoji: "🌀", nome: "Barriga estranha" },
  { id: "maos", emoji: "💧", nome: "Mãos suando" },
  { id: "coracao", emoji: "💓", nome: "Coração acelerado" },
  { id: "ombros", emoji: "🪨", nome: "Ombros pesados" },
];

const ENERGIAS = [
  { id: 1, emoji: "🪫", nome: "Baixa" },
  { id: 2, emoji: "🔋", nome: "Média" },
  { id: 3, emoji: "⚡", nome: "Cheia" },
];

export function ComoEstouAgora({ onClose }: { onClose: () => void }) {
  const [rosto, setRosto] = useState<typeof ROSTOS[number] | null>(null);
  const [sensacao, setSensacao] = useState<typeof SENSACOES[number] | null>(null);
  const [energia, setEnergia] = useState<typeof ENERGIAS[number] | null>(null);

  const passo = !rosto ? 1 : !sensacao ? 2 : !energia ? 3 : 4;

  const reset = () => {
    setRosto(null);
    setSensacao(null);
    setEnergia(null);
  };

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1">Como estou agora?</h2>
      <p className="text-sm text-slate-600 font-medium mb-4 text-center max-w-md">
        Vamos fazer um check-in rapidinho do seu corpinho e coração.
      </p>

      {/* Indicador de passos */}
      <div className="flex gap-2 mb-6">
        {[1, 2, 3].map((p) => (
          <div
            key={p}
            className={`h-2 w-10 rounded-full transition-colors ${
              p <= passo ? "bg-primary" : "bg-slate-200"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {passo === 1 && (
          <motion.div
            key="p1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl"
          >
            <h3 className="font-black text-center text-slate-700 mb-3">
              1. Qual rostinho combina com você agora?
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {ROSTOS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setRosto(r)}
                  className="flex flex-col items-center gap-1 p-3 rounded-2xl bg-white border-2 border-slate-100 hover:border-slate-300 hover:scale-105 transition-all"
                >
                  <img src={r.img} alt={r.nome} className="w-16 h-16 object-contain" />
                  <span className="text-xs font-black text-slate-700">{r.nome}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {passo === 2 && (
          <motion.div
            key="p2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl"
          >
            <h3 className="font-black text-center text-slate-700 mb-3">
              2. Como seu corpinho está se sentindo?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {SENSACOES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSensacao(s)}
                  className="flex items-center gap-2 p-4 rounded-2xl bg-white border-2 border-slate-100 hover:border-slate-300 hover:scale-105 transition-all text-left"
                >
                  <span className="text-3xl" aria-hidden>{s.emoji}</span>
                  <span className="text-sm font-black text-slate-700">{s.nome}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {passo === 3 && (
          <motion.div
            key="p3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-md"
          >
            <h3 className="font-black text-center text-slate-700 mb-3">
              3. Quanta energia você tem agora?
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {ENERGIAS.map((e) => (
                <button
                  key={e.id}
                  onClick={() => setEnergia(e)}
                  className="flex flex-col items-center gap-1 p-5 rounded-2xl bg-white border-2 border-slate-100 hover:border-slate-300 hover:scale-105 transition-all"
                >
                  <span className="text-4xl" aria-hidden>{e.emoji}</span>
                  <span className="text-sm font-black text-slate-700">{e.nome}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {passo === 4 && rosto && sensacao && energia && (
          <motion.div
            key="resumo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-3xl p-6 shadow-xl border-4 max-w-md w-full text-center"
            style={{ borderColor: rosto.cor }}
          >
            <div className="flex items-center justify-center gap-2 mb-2 text-emerald-600">
              <Check size={22} /> <span className="font-black">Check-in feito!</span>
            </div>
            <img src={rosto.img} alt={rosto.nome} className="w-24 h-24 object-contain mx-auto mb-3" />
            <p className="text-slate-700 font-bold mb-3">
              Você está se sentindo <span style={{ color: rosto.cor }}>{rosto.nome.toLowerCase()}</span>,
              com {sensacao.nome.toLowerCase()} {sensacao.emoji} e energia {energia.nome.toLowerCase()} {energia.emoji}.
            </p>
            <p className="text-sm text-slate-500 font-medium">
              Conte para um adulto de confiança como você está. Isso ajuda muito! 💛
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-6 flex gap-3">
        {(rosto || sensacao || energia) && (
          <button
            onClick={reset}
            className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50"
          >
            <RotateCcw size={16} /> Começar de novo
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
