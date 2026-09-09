import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw } from "lucide-react";

import { url as imgTranquilo } from "@/assets/brilha-vida/emocoes/tranquilo.png.asset.json";
import { url as imgFeliz } from "@/assets/brilha-vida/emocoes/feliz.png.asset.json";

/**
 * Cantinho da Calma
 * Caixa de ferramentas de regulação. A criança escolhe uma estratégia
 * e recebe uma instrução curta + animação suave.
 */
type Estrategia = {
  id: string;
  emoji: string;
  nome: string;
  cor: string;
  bg: string;
  passos: string[];
};

const ESTRATEGIAS: Estrategia[] = [
  {
    id: "respirar",
    emoji: "🫁",
    nome: "Respirar fundo",
    cor: "#60a5fa",
    bg: "from-sky-100 to-sky-200",
    passos: [
      "Coloque a mão na barriga.",
      "Puxe o ar pelo nariz contando até 4.",
      "Solte devagarinho pela boca contando até 6.",
      "Repita 3 vezes.",
    ],
  },
  {
    id: "abraco",
    emoji: "🧸",
    nome: "Abraço apertado",
    cor: "#f472b6",
    bg: "from-pink-100 to-pink-200",
    passos: [
      "Pegue seu bichinho favorito ou cruze os braços.",
      "Aperte forte por 5 segundos.",
      "Solte devagar e sinta o corpo relaxar.",
      "Repita até se sentir melhor.",
    ],
  },
  {
    id: "agua",
    emoji: "💧",
    nome: "Beber água",
    cor: "#22d3ee",
    bg: "from-cyan-100 to-cyan-200",
    passos: [
      "Pegue um copo de água fresquinha.",
      "Beba devagar, em goles pequenos.",
      "Sinta a água descendo pela garganta.",
      "Respire fundo depois do último gole.",
    ],
  },
  {
    id: "desenhar",
    emoji: "🎨",
    nome: "Desenhar o sentimento",
    cor: "#a78bfa",
    bg: "from-violet-100 to-violet-200",
    passos: [
      "Pegue papel e lápis de cor.",
      "Desenhe o que você está sentindo.",
      "Use as cores que combinarem com o sentimento.",
      "Mostre depois para alguém que você confia.",
    ],
  },
  {
    id: "musica",
    emoji: "🎵",
    nome: "Música calma",
    cor: "#34d399",
    bg: "from-emerald-100 to-emerald-200",
    passos: [
      "Escolha uma música tranquila que você ama.",
      "Feche os olhinhos se quiser.",
      "Respire devagar enquanto escuta.",
      "Deixe o corpo balançar suavemente.",
    ],
  },
  {
    id: "contar",
    emoji: "🔢",
    nome: "Contar até 10",
    cor: "#fbbf24",
    bg: "from-amber-100 to-amber-200",
    passos: [
      "Feche a boquinha e respire pelo nariz.",
      "Conte bem devagar: 1… 2… 3…",
      "Vá até o 10 sem pressa nenhuma.",
      "Veja como o coração foi acalmando.",
    ],
  },
];

export function CantinhoCalma({ onClose }: { onClose: () => void }) {
  const [escolhida, setEscolhida] = useState<Estrategia | null>(null);

  return (
    <div
      className={`relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] overflow-hidden transition-colors duration-500 bg-gradient-to-b ${
        escolhida ? escolhida.bg : "from-slate-50 to-white"
      }`}
    >
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1">Cantinho da Calma</h2>
      <p className="text-sm text-slate-600 font-medium mb-6 text-center max-w-md">
        Escolha uma ferramenta para se acalmar. Você pode usar quantas precisar.
      </p>

      <AnimatePresence mode="wait">
        {!escolhida ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-2xl"
          >
            {ESTRATEGIAS.map((e) => (
              <button
                key={e.id}
                onClick={() => setEscolhida(e)}
                className="group flex flex-col items-center gap-2 p-5 rounded-3xl bg-white border-2 border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all hover:-translate-y-1"
                style={{ borderTopColor: e.cor, borderTopWidth: 6 }}
              >
                <span className="text-5xl" aria-hidden>
                  {e.emoji}
                </span>
                <span className="font-black text-sm text-slate-700 text-center leading-tight">
                  {e.nome}
                </span>
              </button>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={escolhida.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-6 shadow-xl border-4 max-w-md w-full text-center"
            style={{ borderColor: escolhida.cor }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-7xl mb-3"
              aria-hidden
            >
              {escolhida.emoji}
            </motion.div>
            <h3 className="font-black text-xl text-slate-800 mb-4">{escolhida.nome}</h3>
            <ol className="text-left space-y-2 mb-4">
              {escolhida.passos.map((passo, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.15 }}
                  className="flex gap-2 items-start text-sm text-slate-700 font-medium"
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-black"
                    style={{ background: escolhida.cor }}
                  >
                    {i + 1}
                  </span>
                  {passo}
                </motion.li>
              ))}
            </ol>
            <motion.img
              src={escolhida.id === "respirar" ? imgTranquilo : imgFeliz}
              alt=""
              aria-hidden
              width={80}
              height={80}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 object-contain mx-auto opacity-80"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-6 flex gap-3">
        {escolhida && (
          <button
            onClick={() => setEscolhida(null)}
            className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50"
          >
            <RotateCcw size={16} /> Outra ferramenta
          </button>
        )}
        <button
          onClick={onClose}
          className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
        >
          Já estou melhor
        </button>
      </div>
    </div>
  );
}
