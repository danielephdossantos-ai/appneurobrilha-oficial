import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Home } from "lucide-react";
import { REGRAS_CASA as REGRAS } from "@/data/brilha-vida/cenarios";

/**
 * Regras da Casa — 30 combinados pra marcar conforme a criança cumpre.
 */

export function RegrasCasa({ onClose }: { onClose: () => void }) {
  const [marcadas, setMarcadas] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setMarcadas((prev) => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  const estrelas = Math.min(5, Math.floor((marcadas.size / REGRAS.length) * 5));

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1 flex items-center gap-2">
        <Home className="text-amber-500" /> Regras da Casa
      </h2>
      <p className="text-sm text-slate-600 font-medium mb-4 text-center max-w-md">
        Marque cada combinado que você cumpriu hoje. Ganhe estrelinhas!
      </p>

      {/* Estrelas */}
      <div className="flex gap-1 mb-4 text-3xl">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.span
            key={i}
            animate={{ scale: i <= estrelas ? 1.1 : 1 }}
            className={i <= estrelas ? "" : "opacity-30 grayscale"}
            aria-hidden
          >
            ⭐
          </motion.span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-2xl">
        {REGRAS.map((r) => {
          const ativa = marcadas.has(r.id);
          return (
            <button
              key={r.id}
              onClick={() => toggle(r.id)}
              className={`flex items-center gap-3 p-3 rounded-2xl border-2 text-left transition-all ${
                ativa
                  ? "bg-emerald-50 border-emerald-300"
                  : "bg-white border-slate-200 hover:border-amber-300"
              }`}
            >
              <span className="text-3xl" aria-hidden>{r.emoji}</span>
              <span
                className={`flex-1 font-black text-sm ${
                  ativa ? "text-emerald-700 line-through" : "text-slate-700"
                }`}
              >
                {r.texto}
              </span>
              <span
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                  ativa ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-300"
                }`}
              >
                {ativa && <Check size={14} />}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {marcadas.size === REGRAS.length && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 px-5 py-3 rounded-2xl bg-emerald-100 text-emerald-800 font-black text-center max-w-md"
          >
            🎉 Você cumpriu todos os combinados! Está brilhando!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-6 flex gap-3">
        <button
          onClick={() => setMarcadas(new Set())}
          className="px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50"
        >
          Limpar
        </button>
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
