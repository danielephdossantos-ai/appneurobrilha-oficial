import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Plus, Minus } from "lucide-react";
import { speakChunked } from "@/lib/native-tts";

type Props = {
  /** Operação: soma (+) mostra itens aparecendo; subtração (−) mostra sumindo. */
  operacao: "soma" | "subtracao";
  imagemUrl: string;
  itemPlural: string;
  a: number;
  b: number;
  /** Cor do card. */
  cor?: string;
  /** Se true, executa a animação automaticamente ao aparecer. */
  autoPlay?: boolean;
  /** Legenda opcional acima. */
  legenda?: string;
};

/**
 * Ensina + e − com imagens aparecendo (soma) ou sumindo (subtração).
 * Padrão obrigatório para Ed. Infantil, 1º e 2º Ano.
 */
export function OperacaoVisual({
  operacao,
  imagemUrl,
  itemPlural,
  a,
  b,
  cor = "#60A5FA",
  autoPlay = false,
  legenda,
}: Props) {
  const [fase, setFase] = useState<0 | 1 | 2>(0);
  // fase 0: só o A. fase 1: aplicou a operação. fase 2: mostra o resultado
  const resultado = operacao === "soma" ? a + b : Math.max(0, a - b);
  const visiveis =
    fase === 0 ? a : operacao === "soma" ? a + b : Math.max(0, a - b);

  useEffect(() => {
    if (!autoPlay) return;
    const t1 = setTimeout(() => rodar(), 500);
    return () => clearTimeout(t1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay]);

  function rodar() {
    setFase(0);
    speakChunked(`${a}`);
    setTimeout(() => {
      setFase(1);
      const acao =
        operacao === "soma"
          ? `Mais ${b}. Ficou ${resultado}!`
          : `Menos ${b}. Ficou ${resultado}!`;
      speakChunked(acao, { rate: 0.95 });
    }, 900);
    setTimeout(() => setFase(2), 1900);
  }

  function reiniciar() {
    setFase(0);
  }

  const sinal = operacao === "soma" ? "+" : "−";
  const Icone = operacao === "soma" ? Plus : Minus;

  return (
    <div
      className="rounded-3xl border-4 p-3"
      style={{ borderColor: cor, background: `${cor}18` }}
    >
      {legenda && (
        <div className="text-[11px] font-black uppercase tracking-widest text-white/80 text-center mb-2">
          {legenda}
        </div>
      )}
      <div className="text-center font-black text-2xl mb-2 flex items-center justify-center gap-2">
        <span>{a}</span>
        <Icone className="h-5 w-5" style={{ color: cor }} />
        <span>{b}</span>
        <span>=</span>
        <span
          className={`transition-all ${
            fase === 2 ? "scale-125 text-[#22C55E]" : "opacity-30"
          }`}
        >
          {fase === 2 ? resultado : "?"}
        </span>
      </div>

      {/* Área das imagens */}
      <div
        className="min-h-[110px] bg-white/50 rounded-2xl p-3 flex flex-wrap gap-2 items-center justify-center"
      >
        <AnimatePresence>
          {Array.from({ length: visiveis }).map((_, i) => {
            const eNovo = operacao === "soma" && fase >= 1 && i >= a;
            return (
              <motion.img
                key={`${fase}-${i}`}
                src={imagemUrl}
                alt=""
                initial={
                  eNovo
                    ? { scale: 0, opacity: 0, y: -30 }
                    : { scale: 1, opacity: 1 }
                }
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0, opacity: 0, rotate: -20 }}
                transition={{ duration: 0.5, delay: eNovo ? (i - a) * 0.15 : 0 }}
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain drop-shadow"
              />
            );
          })}
        </AnimatePresence>
      </div>

      <p className="text-center text-[11px] font-black uppercase tracking-widest text-white/70 mt-2">
        {fase === 0
          ? `Temos ${a} ${itemPlural}`
          : operacao === "soma"
            ? `Chegaram mais ${b}. Ficou ${resultado}!`
            : `Sumiram ${b}. Ficou ${resultado}!`}
      </p>

      <div className="flex justify-center gap-2 mt-2">
        <button
          type="button"
          onClick={rodar}
          className="inline-flex items-center gap-1 px-3 py-2 rounded-xl font-black text-sm text-white"
          style={{ background: cor }}
        >
          <Play className="h-4 w-4" /> {fase === 0 ? "Mostrar" : "De novo"}
        </button>
        {fase !== 0 && (
          <button
            type="button"
            onClick={reiniciar}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-xl font-black text-sm bg-white text-[#0d1f55]"
          >
            <RotateCcw className="h-4 w-4" /> Reiniciar
          </button>
        )}
      </div>
      {void sinal}
    </div>
  );
}
