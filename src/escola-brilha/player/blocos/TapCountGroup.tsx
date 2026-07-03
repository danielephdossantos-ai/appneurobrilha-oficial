import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

/**
 * Grupo contável universal — a criança toca em cada imagem e o
 * professor fala em voz alta "um, dois, três..." Salvo no sistema
 * para ser reutilizado por TODAS as atividades com imagens
 * (contagem, quiz, exemplos, revisão, futuras).
 *
 * Sem emoji. Usa apenas as imagens do Banco de Mídias que forem
 * passadas via `imagemUrl`.
 */
export function TapCountGroup({
  imagemUrl,
  quantidade,
  itemSingular = "item",
  itemPlural,
  size = "md",
  rotulo,
}: {
  imagemUrl: string;
  quantidade: number;
  itemSingular?: string;
  itemPlural?: string;
  size?: "sm" | "md" | "lg";
  rotulo?: string;
}) {
  const plural = itemPlural ?? `${itemSingular}s`;
  const [contados, setContados] = useState<number[]>([]);
  const completo = contados.length === quantidade;

  useEffect(() => () => stopSpeaking(), []);
  // Reset se a quantidade mudar
  useEffect(() => setContados([]), [quantidade, imagemUrl]);

  const nomes = [
    "zero","um","dois","três","quatro","cinco",
    "seis","sete","oito","nove","dez","onze","doze",
    "treze","quatorze","quinze","dezesseis","dezessete",
    "dezoito","dezenove","vinte",
  ];
  const nomeNumero = (n: number) => nomes[n] ?? String(n);

  const contar = (idx: number) => {
    if (contados.includes(idx) || completo) return;
    const novo = [...contados, idx];
    setContados(novo);
    const n = novo.length;
    stopSpeaking();
    if (n === quantidade) {
      speakChunked(
        `${nomeNumero(n)}. Total: ${n} ${n === 1 ? itemSingular : plural}!`,
        { rate: 0.9 },
      );
    } else {
      speakChunked(nomeNumero(n), { rate: 0.95 });
    }
  };

  const reiniciar = () => {
    stopSpeaking();
    setContados([]);
  };

  const dim =
    size === "lg"
      ? "w-20 h-20 sm:w-24 sm:h-24"
      : size === "sm"
        ? "w-10 h-10 sm:w-12 sm:h-12"
        : "w-14 h-14 sm:w-16 sm:h-16";

  const badge =
    size === "lg"
      ? "h-9 w-9 text-xl"
      : size === "sm"
        ? "h-5 w-5 text-[10px]"
        : "h-6 w-6 text-xs";

  return (
    <div className="rounded-2xl bg-white/10 border-2 border-white/20 p-3">
      {rotulo && (
        <div className="text-xs font-black uppercase tracking-wider text-white/70 text-center mb-2">
          {rotulo}
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {Array.from({ length: quantidade }).map((_, idx) => {
          const pos = contados.indexOf(idx);
          const foiContado = pos !== -1;
          return (
            <motion.button
              key={idx}
              type="button"
              onClick={() => contar(idx)}
              whileTap={{ scale: 0.9 }}
              animate={foiContado ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`relative grid place-items-center active:scale-95 ${dim}`}
              aria-label={`${itemSingular} ${idx + 1}`}
            >
              <img
                src={imagemUrl}
                alt=""
                draggable={false}
                className="w-full h-full object-contain drop-shadow"
              />
              <AnimatePresence>
                {foiContado && (
                  <motion.div
                    initial={{ scale: 0, y: -6 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0 }}
                    className={`absolute -top-1 -right-1 rounded-full bg-[#22C55E] text-white grid place-items-center font-black shadow border-2 border-white ${badge}`}
                  >
                    {pos + 1}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-2 mt-3">
        <div className="flex-1 rounded-xl bg-[#0d1f55] text-white px-3 py-1.5 text-center">
          <span className="text-[9px] font-black uppercase tracking-widest text-white/60 mr-2">
            Contando
          </span>
          <span className="text-2xl font-black tabular-nums">
            {contados.length}
          </span>
          <span className="text-white/50 font-black">/{quantidade}</span>
        </div>
        <button
          type="button"
          onClick={reiniciar}
          disabled={contados.length === 0}
          className="h-9 w-9 rounded-xl bg-white/90 text-[#0d1f55] grid place-items-center active:scale-95 disabled:opacity-30"
          aria-label="Reiniciar contagem"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>
      {!completo && contados.length === 0 && (
        <p className="text-center text-[11px] font-bold text-white/70 mt-2">
          Toque em cada imagem para contar
        </p>
      )}
    </div>
  );
}
