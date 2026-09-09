import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

/**
 * Subitizing perceptual (1–4): mostra o grupo por ~1.5s, esconde, e
 * pergunta "quantos você viu?". Base: Kaufman 1949, Clements 1999,
 * Dehaene "The Number Sense". Range travado em 1–4.
 */
export function SubitizingFlash({
  imagemUrl,
  quantidade,
  itemPlural,
  perguntaAudio,
  opcoes,
  feedbackAcerto,
  feedbackErro,
  duracaoFlashMs,
  onAcerto,
}: {
  imagemUrl: string;
  quantidade: number;
  itemPlural: string;
  perguntaAudio: string;
  opcoes: number[];
  feedbackAcerto: string;
  feedbackErro: string;
  duracaoFlashMs?: number;
  onAcerto: () => void;
}) {
  type Fase = "pronto" | "flash" | "pergunta" | "acerto" | "erro";
  const [fase, setFase] = useState<Fase>("pronto");
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => () => stopSpeaking(), []);

  // Tempo escala com a quantidade: criança que está aprendendo precisa
  // de tempo pra "ver" cada item. Base 2000ms + 800ms por item.
  const duracaoEfetiva =
    duracaoFlashMs ?? Math.max(2000, 1200 + quantidade * 800);

  const iniciar = () => {
    setMsg(null);
    setFase("flash");
    stopSpeaking();
    speakChunked("Olha!", { rate: 0.95, pitch: 1.15 });
    setTimeout(() => {
      setFase("pergunta");
      speakChunked(perguntaAudio, { rate: 0.9, pitch: 1.15 });
    }, duracaoEfetiva);
  };

  const escolher = (n: number) => {
    if (fase !== "pergunta") return;
    if (n === quantidade) {
      setFase("acerto");
      setMsg(feedbackAcerto);
      stopSpeaking();
      speakChunked(feedbackAcerto, { rate: 0.95, pitch: 1.15 });
      setTimeout(onAcerto, 900);
    } else {
      setFase("erro");
      setMsg(feedbackErro);
      stopSpeaking();
      speakChunked(feedbackErro, { rate: 0.9, pitch: 1.15 });
      // Deixa ver novamente
      setTimeout(() => setFase("pronto"), 1400);
    }
  };

  // Layout de dado/dominó para 1–4 (padrão canônico)
  const posicoes: Record<number, string[]> = {
    1: ["col-start-2 row-start-2"],
    2: ["col-start-1 row-start-1", "col-start-3 row-start-3"],
    3: ["col-start-1 row-start-1", "col-start-2 row-start-2", "col-start-3 row-start-3"],
    4: [
      "col-start-1 row-start-1",
      "col-start-3 row-start-1",
      "col-start-1 row-start-3",
      "col-start-3 row-start-3",
    ],
  };
  const layout = posicoes[quantidade] ?? posicoes[1];

  return (
    <div className="rounded-3xl bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 p-4 text-white">
      <div className="relative mx-auto aspect-square max-w-[280px] rounded-2xl bg-white/5 border-2 border-white/10 grid grid-cols-3 grid-rows-3 gap-2 p-4 overflow-hidden">
        <AnimatePresence>
          {fase === "flash" &&
            layout.map((cls, i) => (
              <motion.img
                key={i}
                src={imagemUrl}
                alt=""
                draggable={false}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.18, delay: i * 0.04 }}
                className={`${cls} w-full h-full object-contain drop-shadow-xl`}
              />
            ))}
        </AnimatePresence>
        {fase === "pronto" && (
          <div className="col-span-3 row-span-3 grid place-items-center">
            <button
              type="button"
              onClick={iniciar}
              className="rounded-full bg-yellow-300 text-purple-950 font-black px-6 py-3 shadow-xl active:scale-95"
            >
              👀 Ver
            </button>
          </div>
        )}
        {fase === "pergunta" && (
          <div className="col-span-3 row-span-3 grid place-items-center">
            <div className="text-6xl font-black tracking-widest">?</div>
          </div>
        )}
        {(fase === "acerto" || fase === "erro") && (
          <div className="col-span-3 row-span-3 grid place-items-center">
            <div className={`text-5xl ${fase === "acerto" ? "" : "grayscale"}`}>
              {fase === "acerto" ? "🎉" : "🔁"}
            </div>
          </div>
        )}
      </div>

      {fase === "pergunta" && (
        <div className="mt-4">
          <p className="text-center text-xs font-black uppercase tracking-widest text-yellow-200 mb-2">
            Quantos {itemPlural}?
          </p>
          <div className="grid grid-cols-3 gap-2">
            {opcoes.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => escolher(n)}
                className="rounded-2xl bg-white text-purple-900 font-black text-3xl py-4 shadow-lg active:scale-95"
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      )}

      {msg && (
        <p className="mt-3 text-center text-sm font-bold">
          {msg}
        </p>
      )}
    </div>
  );
}
