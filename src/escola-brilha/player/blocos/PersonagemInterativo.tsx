import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { speakChunked } from "@/lib/native-tts";

/**
 * Personagem que reage ao toque: pula, fala uma saudação com a voz nativa
 * e mostra um balãozinho de fala. Usado nos blocos de explicação ativa
 * pra dar vida aos mascotes (o usuário reclamou que tocar não fazia nada).
 */

type MascoteInfo = { key: string; fala: string; label: string };

// Frases faladas por cada mascote — curtas, animadas, em pt-BR.
const MASCOTES: Array<{ regex: RegExp; info: MascoteInfo }> = [
  { regex: /\besquilo\b/i, info: { key: "esquilo", fala: "Oi! Eu sou o esquilo. Vamos juntos?", label: "Esquilo" } },
  { regex: /\bbrilha\b/i, info: { key: "brilha", fala: "Oi! Eu sou o Brilha, sua estrelinha da floresta!", label: "Brilha" } },
  { regex: /\bcoruja\b/i, info: { key: "coruja", fala: "Uhuu! Sou a Coruja Sábia. Bora aprender?", label: "Coruja Sábia" } },
  { regex: /\blupi\b/i, info: { key: "lupi", fala: "Oi! Eu sou o Lupi, o coelhinho saltitante!", label: "Lupi" } },
  { regex: /\bfifi\b/i, info: { key: "fifi", fala: "Oi! Eu sou a Fifi, a raposinha brincalhona!", label: "Fifi" } },
  { regex: /\bt[eé]o\b/i, info: { key: "teo", fala: "Olá! Sou o Téo, a tartaruga calminha.", label: "Téo" } },
  { regex: /\bpiu\b/i, info: { key: "piu", fala: "Piu piu! Eu sou o Piu, o passarinho!", label: "Piu" } },
];

function detectarMascote(dicas: string[]): MascoteInfo {
  const texto = dicas.filter(Boolean).join(" ");
  for (const m of MASCOTES) {
    if (m.regex.test(texto)) return m.info;
  }
  return { key: "generic", fala: "Oi! Tá comigo? Vamos juntos!", label: "Amigo" };
}

export function PersonagemInterativo({
  imagem,
  imagemAlt,
  contexto,
  tamanho = "md",
}: {
  imagem: string;
  imagemAlt?: string;
  /** Textos adicionais que podem ajudar a identificar o mascote. */
  contexto?: string;
  tamanho?: "sm" | "md" | "lg";
}) {
  const info = detectarMascote([imagemAlt ?? "", contexto ?? ""]);
  const [tocado, setTocado] = useState(0);
  const [mostrarBalao, setMostrarBalao] = useState(false);

  const size =
    tamanho === "sm" ? "max-h-24" : tamanho === "lg" ? "max-h-56" : "max-h-40";

  const reagir = () => {
    setTocado((n) => n + 1);
    setMostrarBalao(true);
    speakChunked(info.fala, { rate: 1, pitch: 1.1 });
    window.setTimeout(() => setMostrarBalao(false), 3200);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {mostrarBalao && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full max-w-[220px] rounded-2xl bg-white text-[#0d1f55] px-3 py-2 shadow-xl border-2 border-[#FFC93C] z-10"
          >
            <div className="text-[10px] font-black uppercase tracking-widest text-[#FFC93C] mb-0.5">
              {info.label}
            </div>
            <div className="text-sm font-black leading-snug">{info.fala}</div>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 bg-white border-b-2 border-r-2 border-[#FFC93C] rotate-45" />
          </motion.div>
        )}

        <motion.button
          type="button"
          onClick={reagir}
          aria-label={`Tocar em ${info.label} pra ouvir`}
          key={tocado}
          animate={
            tocado
              ? { rotate: [0, -8, 8, -6, 6, 0], y: [0, -14, 0, -8, 0] }
              : {}
          }
          transition={{ duration: 0.7, ease: "easeInOut" }}
          whileTap={{ scale: 0.94 }}
          className="rounded-2xl bg-white/10 border-2 border-white/20 p-3 active:border-[#FFC93C] focus:outline-none focus:ring-2 focus:ring-[#FFC93C]"
        >
          <img
            src={imagem}
            alt={imagemAlt ?? info.label}
            loading="lazy"
            className={`${size} w-auto object-contain drop-shadow-xl pointer-events-none`}
          />
        </motion.button>
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-white/60" data-no-tts>
        <Volume2 className="h-3 w-3" />
        Toque em {info.label} pra ouvir
      </div>
    </div>
  );
}
