import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw, Users, Check } from "lucide-react";

import imgFeliz from "@/assets/brilha-vida/emocoes/feliz.png";
import imgTranquilo from "@/assets/brilha-vida/emocoes/tranquilo.png";

/**
 * Minha vez, sua vez
 * Treina o conceito de turno: dois personagens revezam ações.
 * A criança deve clicar SEMPRE no personagem da vez. Acertar = +1, errar = -1.
 */

type Jogador = {
  id: "voce" | "amigo";
  nome: string;
  img: string;
  cor: string;
};

const JOGADORES: Jogador[] = [
  { id: "voce", nome: "Você", img: imgFeliz, cor: "#ec4899" },
  { id: "amigo", nome: "Amigo", img: imgTranquilo, cor: "#22c55e" },
];

const ACOES = ["🎲 jogar o dado", "🎨 pintar", "📚 ler", "🪀 brincar", "🎵 cantar"];

export function MinhaVezSuaVez({ onClose }: { onClose: () => void }) {
  const [vez, setVez] = useState<"voce" | "amigo">("voce");
  const [acao, setAcao] = useState(ACOES[0]);
  const [pontos, setPontos] = useState(0);
  const [feedback, setFeedback] = useState<"acerto" | "erro" | null>(null);
  const [rodadas, setRodadas] = useState(0);

  const clicar = (id: "voce" | "amigo") => {
    if (id === vez) {
      setPontos((p) => p + 1);
      setFeedback("acerto");
    } else {
      setPontos((p) => Math.max(0, p - 1));
      setFeedback("erro");
    }
    setTimeout(() => {
      setFeedback(null);
      setVez((v) => (v === "voce" ? "amigo" : "voce"));
      setAcao(ACOES[Math.floor(Math.random() * ACOES.length)]);
      setRodadas((r) => r + 1);
    }, 900);
  };

  const reset = () => {
    setVez("voce");
    setPontos(0);
    setRodadas(0);
    setFeedback(null);
  };

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] overflow-hidden bg-gradient-to-b from-violet-50 to-white">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1 flex items-center gap-2">
        <Users className="text-violet-500" /> Minha vez, sua vez
      </h2>
      <p className="text-sm text-slate-600 font-medium mb-4 text-center max-w-md">
        Toque no personagem da vez para ele fazer a ação.
      </p>

      {/* Painel de turno */}
      <motion.div
        key={vez + acao}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl px-5 py-3 shadow-lg border-2 mb-6 text-center"
        style={{ borderColor: JOGADORES.find((j) => j.id === vez)!.cor }}
      >
        <div className="text-xs font-black text-slate-500 uppercase tracking-wider">É a vez de</div>
        <div className="text-lg font-black" style={{ color: JOGADORES.find((j) => j.id === vez)!.cor }}>
          {JOGADORES.find((j) => j.id === vez)!.nome} {acao}
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {JOGADORES.map((j) => {
          const ativo = vez === j.id;
          return (
            <motion.button
              key={j.id}
              onClick={() => clicar(j.id)}
              animate={ativo ? { scale: [1, 1.05, 1] } : { scale: 1 }}
              transition={{ duration: 1.5, repeat: ativo ? Infinity : 0 }}
              className="flex flex-col items-center gap-2 p-5 rounded-3xl bg-white border-4 transition-all hover:shadow-lg"
              style={{ borderColor: ativo ? j.cor : "#e2e8f0" }}
            >
              <img src={j.img} alt={j.nome} className="w-24 h-24 object-contain" />
              <span className="font-black text-slate-700">{j.nome}</span>
              {ativo && (
                <span className="text-xs font-black px-2 py-0.5 rounded-full text-white" style={{ background: j.cor }}>
                  Minha vez!
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`mt-4 px-5 py-2 rounded-full font-black ${
              feedback === "acerto" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
            }`}
          >
            {feedback === "acerto" ? "✅ Boa! Respeitou o turno." : "⏳ Espere, era a vez do outro."}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 flex gap-6 text-sm font-bold text-slate-600">
        <div>Pontos: <span className="text-emerald-600">{pontos}</span></div>
        <div>Rodadas: <span className="text-violet-600">{rodadas}</span></div>
      </div>

      <div className="mt-auto pt-6 flex gap-3">
        <button
          onClick={reset}
          className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50"
        >
          <RotateCcw size={16} /> Recomeçar
        </button>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform flex items-center gap-2"
        >
          <Check size={16} /> Pronto
        </button>
      </div>
    </div>
  );
}
