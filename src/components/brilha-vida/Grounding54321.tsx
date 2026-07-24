import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, RotateCcw, Eye, Ear, Hand, Coffee, Wind } from "lucide-react";

/**
 * Grounding 5-4-3-2-1 — técnica clínica de aterramento sensorial
 * Padrão-ouro para picos de ansiedade e crises sensoriais (TEA/TDAH).
 * Referência: Betty Erickson / trauma-informed care.
 */

type Etapa = {
  n: number;
  sentido: string;
  instrucao: string;
  icone: JSX.Element;
  cor: string;
  exemplos: string[];
};

const ETAPAS: Etapa[] = [
  {
    n: 5,
    sentido: "ver",
    instrucao: "Olhe ao redor e encontre 5 coisas que você consegue VER",
    icone: <Eye className="w-8 h-8" />,
    cor: "from-sky-300 to-sky-500",
    exemplos: ["uma janela", "um brinquedo", "a cor da parede", "suas mãos", "uma luz"],
  },
  {
    n: 4,
    sentido: "tocar",
    instrucao: "Toque em 4 coisas diferentes e sinta a textura",
    icone: <Hand className="w-8 h-8" />,
    cor: "from-emerald-300 to-emerald-500",
    exemplos: ["a roupa que está usando", "o chão com os pés", "um tecido macio", "algo duro"],
  },
  {
    n: 3,
    sentido: "ouvir",
    instrucao: "Fique quietinho e escute 3 sons que você consegue OUVIR",
    icone: <Ear className="w-8 h-8" />,
    cor: "from-lilac/60 to-lilac",
    exemplos: ["sua respiração", "algum barulho lá fora", "o silêncio da sala"],
  },
  {
    n: 2,
    sentido: "cheirar",
    instrucao: "Respire fundo e sinta 2 cheiros no ar",
    icone: <Coffee className="w-8 h-8" />,
    cor: "from-amber-300 to-amber-500",
    exemplos: ["o cheiro do lugar onde está", "o cheiro da sua roupa ou das suas mãos"],
  },
  {
    n: 1,
    sentido: "provar",
    instrucao: "Sinta 1 sabor na sua boca (ou tome um gole de água)",
    icone: <Wind className="w-8 h-8" />,
    cor: "from-rose-300 to-rose-500",
    exemplos: ["água", "o gosto da sua boca agora"],
  },
];

export function Grounding54321({ onClose }: { onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const [marcados, setMarcados] = useState<number[]>([]);
  const [concluido, setConcluido] = useState(false);

  const etapa = ETAPAS[idx];
  const totalMarcados = marcados.length;
  const metaAtual = etapa?.n ?? 0;

  const marcar = () => {
    if (totalMarcados < metaAtual) {
      setMarcados([...marcados, totalMarcados + 1]);
    }
  };

  const proxima = () => {
    if (idx < ETAPAS.length - 1) {
      setIdx(idx + 1);
      setMarcados([]);
    } else {
      setConcluido(true);
    }
  };

  const reiniciar = () => {
    setIdx(0);
    setMarcados([]);
    setConcluido(false);
  };

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-sky-50 via-white to-emerald/5 rounded-[2rem] overflow-hidden">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive transition-colors z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1">5-4-3-2-1</h2>
      <p className="text-sm text-slate-500 mb-4 font-medium">Volte pro agora usando seus sentidos</p>

      {!concluido ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="w-full max-w-md"
          >
            <div className={`relative rounded-3xl p-6 bg-gradient-to-br ${etapa.cor} text-white shadow-xl mb-4`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-white/25 rounded-2xl">{etapa.icone}</div>
                <div className="text-6xl font-black drop-shadow-md">{etapa.n}</div>
              </div>
              <p className="text-lg font-bold leading-tight">{etapa.instrucao}</p>
            </div>

            <div className="bg-white rounded-2xl p-4 border-2 border-slate-100 mb-4">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Pode ser…
              </p>
              <ul className="text-sm text-slate-700 space-y-1">
                {etapa.exemplos.map((ex) => (
                  <li key={ex}>• {ex}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center gap-2 mb-4">
              {Array.from({ length: etapa.n }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: i < totalMarcados ? [1, 1.3, 1] : 1 }}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-black text-lg ${
                    i < totalMarcados
                      ? "bg-emerald-500 border-emerald-600 text-white"
                      : "bg-white border-slate-300 text-slate-400"
                  }`}
                >
                  {i < totalMarcados ? "✓" : i + 1}
                </motion.div>
              ))}
            </div>

            <div className="flex gap-2">
              {totalMarcados < metaAtual ? (
                <button
                  onClick={marcar}
                  className="flex-1 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-[1.02] transition-transform"
                >
                  Achei mais 1
                </button>
              ) : (
                <button
                  onClick={proxima}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:scale-[1.02] transition-transform"
                >
                  Próximo sentido <ArrowRight size={18} />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white rounded-3xl p-8 border-2 border-emerald/20 shadow-xl max-w-sm"
        >
          <div className="text-6xl mb-3">🌟</div>
          <div className="text-2xl font-black text-slate-800 mb-2">Você voltou pro agora</div>
          <p className="text-sm text-slate-600 mb-5">
            Percebeu como o corpo já respira mais devagar? Você usou seus sentidos pra sair da tempestade.
          </p>
          <div className="flex gap-2">
            <button
              onClick={reiniciar}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow"
            >
              <RotateCcw size={16} /> De novo
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold"
            >
              Sair
            </button>
          </div>
        </motion.div>
      )}

      <p className="mt-6 text-[10px] text-slate-400 text-center max-w-xs">
        Base clínica: técnica 5-4-3-2-1 (grounding sensorial), trauma-informed care.
      </p>
    </div>
  );
}
