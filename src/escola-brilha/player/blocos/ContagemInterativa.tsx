import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, RotateCcw, CheckCircle2 } from "lucide-react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

type Props = {
  imagemUrl: string;
  quantidade: number;
  nomeItem: string;
  nomeItemPlural?: string;
  pergunta?: string;
};

/**
 * Exemplo interativo de CONTAGEM (1º Ano).
 * A criança toca em cada item, a contagem aparece grande e o professor
 * fala em voz alta "um... dois... três...". Ao contar tudo, o app fala
 * a resposta completa e destaca o total. Botão de reiniciar sempre
 * disponível. Nada de emoji — só imagem grande do Banco de Mídias.
 */
export function ContagemInterativa({
  imagemUrl,
  quantidade,
  nomeItem,
  nomeItemPlural,
  pergunta,
}: Props) {
  const plural = nomeItemPlural ?? `${nomeItem}s`;
  const perguntaTexto = pergunta ?? `Quantas ${plural} existem?`;

  const [contados, setContados] = useState<number[]>([]);
  const total = quantidade;
  const completo = contados.length === total;

  const itens = useMemo(
    () => Array.from({ length: total }, (_, i) => i),
    [total],
  );

  useEffect(() => () => stopSpeaking(), []);

  const nomeNumero = (n: number) => {
    const nomes = [
      "zero",
      "um",
      "dois",
      "três",
      "quatro",
      "cinco",
      "seis",
      "sete",
      "oito",
      "nove",
      "dez",
    ];
    return nomes[n] ?? String(n);
  };

  const contarItem = (idx: number) => {
    if (contados.includes(idx) || completo) return;
    const novo = [...contados, idx];
    setContados(novo);
    const n = novo.length;
    if (n === total) {
      // Fala a contagem completa e a resposta.
      speakChunked(
        `${nomeNumero(n)}. ${n} ${n === 1 ? nomeItem : plural}!`,
        { rate: 0.9 },
      );
    } else {
      speakChunked(nomeNumero(n), { rate: 0.9 });
    }
  };

  const falarPergunta = () => {
    stopSpeaking();
    speakChunked(perguntaTexto, { rate: 0.95 });
  };

  const reiniciar = () => {
    stopSpeaking();
    setContados([]);
  };

  return (
    <div className="rounded-3xl bg-white/95 text-[#0d1f55] p-4 sm:p-6 border-2 border-[#FBBF24]/40 shadow-inner">
      {/* Pergunta grande + botão de voz */}
      <div className="flex items-start gap-3 mb-4">
        <button
          onClick={falarPergunta}
          aria-label="Ouvir a pergunta"
          className="h-12 w-12 shrink-0 rounded-2xl bg-[#FBBF24] text-[#0d1f55] grid place-items-center active:scale-95 shadow"
        >
          <Volume2 className="h-6 w-6" />
        </button>
        <p className="text-2xl sm:text-3xl font-black leading-tight">
          {perguntaTexto}
        </p>
      </div>

      {/* Itens grandes — toque para contar */}
      <div className="rounded-2xl bg-[#FFF7DC] border-2 border-dashed border-[#FBBF24]/60 p-3 sm:p-6 mb-4">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6">
          {itens.map((idx) => {
            const pos = contados.indexOf(idx);
            const foiContado = pos !== -1;
            return (
              <motion.button
                key={idx}
                onClick={() => contarItem(idx)}
                whileTap={{ scale: 0.9 }}
                animate={foiContado ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 0.35 }}
                className="relative w-14 h-14 sm:w-32 sm:h-32 grid place-items-center active:scale-95"
                aria-label={`${nomeItem} ${idx + 1}`}
              >
                <img
                  src={imagemUrl}
                  alt={nomeItem}
                  className="w-full h-full object-contain drop-shadow-md"
                  draggable={false}
                />
                <AnimatePresence>
                  {foiContado && (
                    <motion.div
                      initial={{ scale: 0, y: -10 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 sm:-top-3 sm:-right-3 h-6 w-6 sm:h-14 sm:w-14 rounded-full bg-[#22C55E] text-white grid place-items-center text-sm sm:text-4xl font-black shadow-lg border-2 sm:border-4 border-white"
                    >
                      {pos + 1}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
        {!completo && (
          <p className="text-center text-sm sm:text-base font-bold text-[#0d1f55]/70 mt-4">
            👆 Toque em cada {nomeItem} para contar
          </p>
        )}
      </div>

      {/* Contador grande */}
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex-1 rounded-2xl bg-[#0d1f55] text-white p-4 text-center">
          <div className="text-[10px] font-black uppercase tracking-widest text-white/70">
            Contando
          </div>
          <div className="text-5xl sm:text-6xl font-black tabular-nums">
            {contados.length}
          </div>
        </div>
        <button
          onClick={reiniciar}
          disabled={contados.length === 0}
          className="h-16 w-16 rounded-2xl bg-white border-2 border-[#0d1f55]/20 text-[#0d1f55] grid place-items-center active:scale-95 disabled:opacity-30"
          aria-label="Reiniciar contagem"
        >
          <RotateCcw className="h-6 w-6" />
        </button>
      </div>

      {/* Resposta ao completar */}
      <AnimatePresence>
        {completo && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[#22C55E] text-white p-4 mt-3 flex items-center gap-3 shadow-lg"
          >
            <CheckCircle2 className="h-8 w-8 shrink-0" />
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-80">
                Resposta
              </div>
              <div className="text-2xl sm:text-3xl font-black">
                {total} {total === 1 ? nomeItem : plural}!
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
