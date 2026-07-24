import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Heart } from "lucide-react";
import { VozGuia } from "./shared/VozGuia";
import { DemoAnimado, type DemoTipo } from "./shared/DemoAnimado";

/**
 * Interocepção Guiada — percepção do estado interno do corpo.
 * Pré-requisito clínico para autorregulação em TEA/TDAH (Mahler, Craig).
 * Guia a criança a notar coração, respiração, barriga, temperatura e músculos.
 */

type Passo = {
  id: string;
  parte: string;
  emoji: string;
  demo: DemoTipo;
  narracao: string;
  pergunta: string;
  opcoes: { emoji: string; label: string; valor: string }[];
  dica: string;
};

const PASSOS: Passo[] = [
  {
    id: "coracao",
    parte: "O coração",
    emoji: "❤️",
    demo: "intero-coracao",
    narracao: "Coloque a sua mão bem no meio do peito. Fique quietinho e sinta as batidinhas do coração. Ele está devagarinho, normal, ou rápido?",
    pergunta: "Coloque a mão no peito. Como está seu coração?",
    opcoes: [
      { emoji: "🐢", label: "Devagarinho", valor: "lento" },
      { emoji: "🚶", label: "Normal", valor: "normal" },
      { emoji: "🏃", label: "Rápido", valor: "rapido" },
      { emoji: "❓", label: "Não sei", valor: "nao-sei" },
    ],
    dica: "Se estiver rápido, seu corpo está agitado. Vamos respirar fundo depois.",
  },
  {
    id: "respiracao",
    parte: "A respiração",
    emoji: "🌬️",
    demo: "intero-respiracao",
    narracao: "Agora preste atenção no ar entrando e saindo pelo seu nariz. A respiração está longa e calma, normal, ou curtinha e presa?",
    pergunta: "Preste atenção no ar entrando e saindo. Como está?",
    opcoes: [
      { emoji: "😌", label: "Longa e calma", valor: "calma" },
      { emoji: "😐", label: "Normal", valor: "normal" },
      { emoji: "😮‍💨", label: "Curta ou presa", valor: "curta" },
      { emoji: "❓", label: "Não sei", valor: "nao-sei" },
    ],
    dica: "Se está curta, o corpo pede uma pausa pra respirar.",
  },
  {
    id: "barriga",
    parte: "A barriga",
    emoji: "🫄",
    demo: "intero-barriga",
    narracao: "Coloque as duas mãos na barriga. Ela está tranquila, embrulhada, ou com fome?",
    pergunta: "Coloque a mão na barriga. Como ela está?",
    opcoes: [
      { emoji: "😊", label: "Tranquila", valor: "ok" },
      { emoji: "🤢", label: "Embrulhada", valor: "embrulhada" },
      { emoji: "🍽️", label: "Com fome", valor: "fome" },
      { emoji: "❓", label: "Não sei", valor: "nao-sei" },
    ],
    dica: "Barriga embrulhada às vezes é ansiedade. Comer ou beber água ajuda.",
  },
  {
    id: "temperatura",
    parte: "A temperatura",
    emoji: "🌡️",
    demo: "intero-temperatura",
    narracao: "Toque com uma mão no rosto e depois na outra mão. Você está com frio, com o corpo bom, ou está quente?",
    pergunta: "Toque no rosto e nas mãos. Como está a temperatura?",
    opcoes: [
      { emoji: "🥶", label: "Frio", valor: "frio" },
      { emoji: "😊", label: "Boa", valor: "ok" },
      { emoji: "🥵", label: "Quente", valor: "quente" },
      { emoji: "❓", label: "Não sei", valor: "nao-sei" },
    ],
    dica: "Rosto quente pode ser raiva ou vergonha. Uma água gelada ajuda.",
  },
  {
    id: "musculos",
    parte: "Os músculos",
    emoji: "💪",
    demo: "intero-musculos",
    narracao: "Repare nos seus ombros e nas suas mãos. Eles estão molinhos, normais, ou duros e tensos?",
    pergunta: "Repare nos ombros e nas mãos. Estão…",
    opcoes: [
      { emoji: "🧘", label: "Molinhos", valor: "moles" },
      { emoji: "😐", label: "Normais", valor: "normal" },
      { emoji: "😬", label: "Duros e tensos", valor: "tensos" },
      { emoji: "❓", label: "Não sei", valor: "nao-sei" },
    ],
    dica: "Corpo duro pede a atividade Espaguete e Estátua pra soltar.",
  },

];

export function InteroceptionScan({ onClose }: { onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarDica, setMostrarDica] = useState(false);
  const [concluido, setConcluido] = useState(false);
  const [pausa, setPausa] = useState(3);
  const pausaRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const passo = PASSOS[idx];

  // pausa forçada de 3s antes de mostrar as opções, pra criança sentir de verdade
  useEffect(() => {
    setPausa(3);
    setMostrarDica(false);
    if (pausaRef.current) clearInterval(pausaRef.current);
    pausaRef.current = setInterval(() => {
      setPausa((p) => {
        if (p <= 1) {
          if (pausaRef.current) clearInterval(pausaRef.current);
          return 0;
        }
        return p - 1;
      });
    }, 1000);
    return () => {
      if (pausaRef.current) clearInterval(pausaRef.current);
    };
  }, [idx]);

  const responder = (valor: string) => {
    setRespostas({ ...respostas, [passo.id]: valor });
    setMostrarDica(true);
  };

  const proximo = () => {
    if (idx < PASSOS.length - 1) {
      setIdx(idx + 1);
    } else {
      setConcluido(true);
    }
  };

  const reiniciar = () => {
    setIdx(0);
    setRespostas({});
    setMostrarDica(false);
    setConcluido(false);
  };

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-rose-50 via-white to-sky-50 rounded-[2rem] overflow-hidden">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive transition-colors z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1 flex items-center gap-2">
        <Heart className="text-rose-500" /> Escuta do Corpo
      </h2>
      <p className="text-sm text-slate-500 mb-4 font-medium text-center max-w-xs">
        Vamos sentir o que o corpo está falando por dentro.
      </p>

      {!concluido ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-md"
          >
            <div className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-xl mb-3">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-5xl">{passo.emoji}</div>
                <div className="flex-1">
                  <div className="text-xs font-black text-primary uppercase tracking-widest">
                    {idx + 1} de {PASSOS.length}
                  </div>
                  <div className="text-xl font-black text-slate-800">{passo.parte}</div>
                </div>
                <div className="rounded-2xl bg-rose-50 p-1">
                  <DemoAnimado tipo={passo.demo} size={90} />
                </div>
              </div>
              <p className="text-slate-700 font-medium mb-3">{passo.pergunta}</p>
              <div className="mb-4"><VozGuia texto={passo.narracao} /></div>


              {pausa > 0 ? (
                <div className="text-center py-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Feche os olhos e sinta
                  </div>
                  <div className="text-5xl font-black text-slate-700 tabular-nums">{pausa}</div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {passo.opcoes.map((op) => {
                    const selecionada = respostas[passo.id] === op.valor;
                    return (
                      <button
                        key={op.valor}
                        onClick={() => responder(op.valor)}
                        className={`p-3 rounded-2xl border-2 text-left transition-all ${
                          selecionada
                            ? "bg-primary/10 border-primary shadow-inner"
                            : "bg-white border-slate-200 hover:border-primary/40"
                        }`}
                      >
                        <div className="text-3xl mb-1">{op.emoji}</div>
                        <div className="text-sm font-bold text-slate-800">{op.label}</div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {mostrarDica && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-3 mb-3 text-sm text-slate-700"
              >
                <span className="font-bold text-amber-700">💡 Dica: </span>
                {passo.dica}
              </motion.div>
            )}

            {mostrarDica && (
              <button
                onClick={proximo}
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-500 text-white rounded-2xl font-bold shadow-lg"
              >
                {idx < PASSOS.length - 1 ? "Próxima parte" : "Ver o resumo"} <ArrowRight size={18} />
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white rounded-3xl p-6 border-2 border-emerald/20 shadow-xl"
        >
          <div className="text-center mb-4">
            <div className="text-5xl mb-2">🧭</div>
            <div className="text-xl font-black text-slate-800">Você escutou seu corpo</div>
            <p className="text-sm text-slate-500 mt-1">Veja o que ele contou hoje:</p>
          </div>

          <ul className="space-y-2 mb-5">
            {PASSOS.map((p) => {
              const respVal = respostas[p.id];
              const op = p.opcoes.find((o) => o.valor === respVal);
              return (
                <li
                  key={p.id}
                  className="flex items-center gap-3 bg-slate-50 rounded-xl p-2"
                >
                  <span className="text-2xl">{p.emoji}</span>
                  <span className="text-sm font-bold text-slate-700 flex-1">{p.parte}</span>
                  <span className="text-sm font-bold text-primary">
                    {op ? `${op.emoji} ${op.label}` : "—"}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="flex gap-2">
            <button
              onClick={reiniciar}
              className="flex-1 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow"
            >
              Sentir de novo
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
        Base clínica: interocepção guiada (Mahler, Craig) — pré-requisito da autorregulação.
      </p>
    </div>
  );
}
