import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import type { QuizItem } from "../../types";

export function Quiz({
  questoes,
  onFinish,
}: {
  questoes: QuizItem[];
  onFinish: (acertos: number) => void;
}) {
  const [i, setI] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [acertos, setAcertos] = useState(0);
  const q = questoes[i];

  const escolher = (idx: number) => {
    if (sel !== null) return;
    setSel(idx);
    if (idx === q.correta) setAcertos(acertos + 1);
  };

  const proxima = () => {
    if (i < questoes.length - 1) {
      setI(i + 1);
      setSel(null);
    } else {
      onFinish(acertos + (sel === q.correta ? 0 : 0));
    }
  };

  return (
    <div className="rounded-3xl bg-white text-[#0d1f55] p-6 border-2 border-white/40 shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-black uppercase tracking-widest text-[#4C9EFF]">
          Quiz · {i + 1} de {questoes.length}
        </span>
        <span className="text-xs font-black text-[#22C55E]">✓ {acertos}</span>
      </div>
      <p className="text-lg font-black leading-snug mb-4">{q.pergunta}</p>
      {q.visual && <QuizVisual visual={q.visual} />}
      <div className="space-y-2">
        {q.opcoes.map((op, idx) => {
          const isSel = sel === idx;
          const isCorrect = idx === q.correta;
          const revelou = sel !== null;
          return (
            <motion.button
              key={idx}
              onClick={() => escolher(idx)}
              whileTap={{ scale: 0.98 }}
              disabled={revelou}
              className={`w-full text-left p-4 rounded-2xl border-2 font-bold flex items-center gap-3 transition-colors ${
                revelou && isCorrect
                  ? "bg-[#22C55E]/15 border-[#22C55E] text-[#0d1f55]"
                  : revelou && isSel && !isCorrect
                    ? "bg-[#F43F5E]/15 border-[#F43F5E] text-[#0d1f55]"
                    : "bg-white border-[#0d1f55]/15 hover:border-[#4C9EFF]"
              }`}
            >
              <span className="flex-1">{op}</span>
              {revelou && isCorrect && <Check className="h-5 w-5 text-[#22C55E]" />}
              {revelou && isSel && !isCorrect && <X className="h-5 w-5 text-[#F43F5E]" />}
            </motion.button>
          );
        })}
      </div>
      {sel !== null && (
        <>
          <div className="mt-4 p-3 rounded-2xl bg-[#4C9EFF]/10 text-sm leading-relaxed">
            {q.explicacao}
          </div>
          <button
            onClick={proxima}
            className="mt-4 w-full h-12 rounded-2xl bg-[#0d1f55] text-white font-black flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            {i < questoes.length - 1 ? "Próxima" : "Ver resultado"}
            <ArrowRight className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
}

function QuizVisual({ visual }: { visual: NonNullable<QuizItem["visual"]> }) {
  if (visual.tipo === "itens") {
    return (
      <div className="mb-4 rounded-2xl bg-[#F8FAFC] border-2 border-[#0d1f55]/10 p-3">
        {visual.rotulo && (
          <p className="text-center text-sm font-black text-[#0d1f55] mb-2">
            {visual.rotulo} · {visual.quantidade}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-1.5">
          {Array.from({ length: visual.quantidade }).map((_, i) => (
            <img
              key={i}
              src={visual.imagemUrl}
              alt=""
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow"
            />
          ))}
        </div>
      </div>
    );
  }
  if (visual.tipo === "grupos") {
    return (
      <div className="mb-4 grid gap-2" style={{ gridTemplateColumns: `repeat(${Math.min(visual.grupos.length, 3)}, minmax(0, 1fr))` }}>
        {visual.grupos.map((g, i) => (
          <div
            key={i}
            className="rounded-2xl p-2 border-4"
            style={{ background: `${g.cor ?? "#4C9EFF"}18`, borderColor: g.cor ?? "#4C9EFF" }}
          >
            {g.rotulo && (
              <p className="text-center text-xs font-black text-[#0d1f55] mb-1 uppercase tracking-wide">
                {g.rotulo} · {g.quantidade}
              </p>
            )}
            <div className="flex flex-wrap justify-center gap-1">
              {Array.from({ length: g.quantidade }).map((_, k) => (
                <img key={k} src={g.imagemUrl} alt="" className="h-8 w-8 sm:h-10 sm:w-10 object-contain drop-shadow" />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  // comparar
  return (
    <div className="mb-4 grid gap-2 grid-cols-2">
      {visual.lados.map((l, i) => (
        <div
          key={i}
          className="rounded-2xl p-2 border-4"
          style={{ background: `${l.cor ?? "#4C9EFF"}18`, borderColor: l.cor ?? "#4C9EFF" }}
        >
          <p className="text-center text-xs font-black text-[#0d1f55] mb-1 uppercase tracking-wide">
            {l.rotulo} · {l.quantidade}
          </p>
          <div className="flex flex-wrap justify-center gap-1">
            {Array.from({ length: l.quantidade }).map((_, k) => (
              <img key={k} src={l.imagemUrl} alt="" className="h-8 w-8 sm:h-10 sm:w-10 object-contain drop-shadow" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
