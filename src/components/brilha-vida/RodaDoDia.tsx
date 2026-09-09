import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, RotateCcw, Clock } from "lucide-react";

/**
 * Roda do Dia
 * A criança arrasta (ou toca em ordem) os momentos do dia para montar a sequência correta.
 * Versão por toque sequencial — mais simples e acessível.
 */

type Item = { id: string; emoji: string; nome: string; ordem: number };

const ITENS: Item[] = [
  { id: "acordar", emoji: "🌅", nome: "Acordar", ordem: 1 },
  { id: "cafe", emoji: "🥣", nome: "Café da manhã", ordem: 2 },
  { id: "escola", emoji: "🏫", nome: "Escola", ordem: 3 },
  { id: "almoco", emoji: "🍽️", nome: "Almoço", ordem: 4 },
  { id: "tarefa", emoji: "📚", nome: "Tarefa", ordem: 5 },
  { id: "brincar", emoji: "🎨", nome: "Brincar", ordem: 6 },
  { id: "jantar", emoji: "🍝", nome: "Jantar", ordem: 7 },
  { id: "dormir", emoji: "🛏️", nome: "Dormir", ordem: 8 },
];

function embaralhar<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function RodaDoDia({ onClose }: { onClose: () => void }) {
  const [pool, setPool] = useState<Item[]>(() => embaralhar(ITENS));
  const [linha, setLinha] = useState<Item[]>([]);
  const [feedback, setFeedback] = useState<"acerto" | "erro" | null>(null);

  const proximaOrdem = linha.length + 1;

  const tocar = (item: Item) => {
    if (item.ordem === proximaOrdem) {
      setLinha([...linha, item]);
      setPool(pool.filter((p) => p.id !== item.id));
      setFeedback("acerto");
      setTimeout(() => setFeedback(null), 600);
    } else {
      setFeedback("erro");
      setTimeout(() => setFeedback(null), 800);
    }
  };

  const reiniciar = () => {
    setPool(embaralhar(ITENS));
    setLinha([]);
    setFeedback(null);
  };

  const completo = linha.length === ITENS.length;

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] bg-gradient-to-b from-lilac/20 to-white">
      <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10">
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1 flex items-center gap-2">
        <Clock className="text-violet-500" /> Roda do Dia
      </h2>
      <p className="text-sm text-slate-600 font-medium mb-4 text-center max-w-md">
        Toque os momentos do dia na ordem certa, do despertar até dormir.
      </p>

      {/* Linha montada */}
      <div className="w-full max-w-3xl mb-4">
        <div className="text-xs font-black text-slate-500 mb-1 text-center">Minha rotina:</div>
        <div className="flex gap-2 flex-wrap justify-center min-h-[80px] p-3 bg-white/60 rounded-2xl border-2 border-dashed border-slate-200">
          {linha.length === 0 && (
            <span className="text-sm font-medium text-slate-400 self-center">Comece pelo primeiro momento do dia ☝️</span>
          )}
          <AnimatePresence>
            {linha.map((it) => (
              <motion.div
                key={it.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-1 px-3 py-2 bg-emerald-50 border-2 border-emerald-300 rounded-2xl"
              >
                <span className="text-2xl" aria-hidden>{it.emoji}</span>
                <span className="text-xs font-black text-emerald-700">{it.nome}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Pool de itens */}
      {!completo && (
        <div className="w-full max-w-2xl">
          <div className="text-xs font-black text-slate-500 mb-2 text-center">Escolha o próximo:</div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {pool.map((it) => (
              <button
                key={it.id}
                onClick={() => tocar(it)}
                className="flex flex-col items-center gap-1 p-3 rounded-2xl bg-white border-2 border-slate-200 hover:border-violet-300 hover:scale-105 transition-all"
              >
                <span className="text-3xl" aria-hidden>{it.emoji}</span>
                <span className="text-xs font-black text-slate-700">{it.nome}</span>
              </button>
            ))}
          </div>
        </div>
      )}

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
            {feedback === "acerto" ? "✅ Boa!" : "🤔 Esse vem depois, tente outro."}
          </motion.div>
        )}
        {completo && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 px-5 py-3 rounded-2xl bg-violet-100 text-violet-800 font-black text-center max-w-md"
          >
            🎉 Você montou toda a rotina! Bom trabalho!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-6 flex gap-3">
        <button onClick={reiniciar} className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50">
          <RotateCcw size={16} /> Embaralhar de novo
        </button>
        <button onClick={onClose} className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform flex items-center gap-2">
          <Check size={16} /> Pronto
        </button>
      </div>
    </div>
  );
}
