import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";

/**
 * Bolha de Bem-Estar
 * A criança pressiona e solta a bolha em ciclos de 4s para inflar / 6s para esvaziar.
 * Foco em proprioceção e respiração ritmada — sem áudio.
 */
export function BolhaBemEstar({ onClose }: { onClose: () => void }) {
  const [pressionando, setPressionando] = useState(false);
  const [tamanho, setTamanho] = useState(0); // 0..100
  const [ciclos, setCiclos] = useState(0);
  const ultimaPressao = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      setTamanho((t) => {
        if (pressionando) return Math.min(100, t + 2.5);
        return Math.max(0, t - 1.7);
      });
    }, 100);
    return () => clearInterval(id);
  }, [pressionando]);

  useEffect(() => {
    if (ultimaPressao.current && !pressionando && tamanho < 5) {
      setCiclos((c) => c + 1);
    }
    ultimaPressao.current = pressionando;
  }, [pressionando, tamanho]);

  const corCiclo = ciclos < 3 ? "#60a5fa" : ciclos < 6 ? "#a78bfa" : "#34d399";

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] bg-gradient-to-b from-sky-50 to-violet-50">
      <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10">
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1 flex items-center gap-2">
        <Sparkles className="text-sky-500" /> Bolha de Bem-Estar
      </h2>
      <p className="text-sm text-slate-600 font-medium mb-2 text-center max-w-md">
        Aperte e segure a bolha enquanto puxa o ar. Solte e expire bem devagar.
      </p>
      <div className="text-xs font-black text-slate-500 mb-6">
        Ciclos completos: <span className="text-sky-600">{ciclos}</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <motion.button
          onPointerDown={() => setPressionando(true)}
          onPointerUp={() => setPressionando(false)}
          onPointerLeave={() => setPressionando(false)}
          aria-label="Segurar bolha"
          className="relative rounded-full select-none touch-none"
          animate={{
            width: 120 + tamanho * 2.2,
            height: 120 + tamanho * 2.2,
            background: `radial-gradient(circle at 30% 30%, white, ${corCiclo} 80%)`,
            boxShadow: `0 0 ${40 + tamanho}px ${corCiclo}55`,
          }}
          transition={{ duration: 0.1 }}
        >
          <span className="absolute inset-0 flex items-center justify-center font-black text-white drop-shadow text-lg">
            {pressionando ? "Inspire…" : tamanho > 5 ? "Segure" : "Toque e segure"}
          </span>
        </motion.button>

        <div className="mt-8 w-64 h-3 rounded-full bg-white shadow-inner overflow-hidden">
          <motion.div className="h-full rounded-full" animate={{ width: `${tamanho}%`, background: corCiclo }} />
        </div>
      </div>

      <div className="mt-6 text-center max-w-md">
        <p className="text-sm font-bold text-slate-600">
          {ciclos >= 6
            ? "💚 Que calma boa! Você pode parar quando quiser."
            : ciclos >= 3
            ? "💜 Continue assim, seu corpinho está relaxando."
            : "💙 Faça pelo menos 3 ciclos. Você está indo muito bem!"}
        </p>
      </div>

      <div className="mt-auto pt-6">
        <button onClick={onClose} className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform">
          Pronto
        </button>
      </div>
    </div>
  );
}
