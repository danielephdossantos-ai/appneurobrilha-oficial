import { motion } from "framer-motion";

/**
 * DemoAnimado — pequena animação-demo (loop) mostrando visualmente
 * como fazer o exercício. Usa personagem kawaii simples em SVG + motion.
 * Não substitui vídeo profissional mas dá referência visual imediata
 * (importante pra crianças TEA que precisam ver o modelo antes de imitar).
 */
export type DemoTipo =
  | "grounding-ver"
  | "grounding-tocar"
  | "grounding-ouvir"
  | "grounding-cheirar"
  | "grounding-provar"
  | "butterfly"
  | "pmr-aperta"
  | "pmr-solta"
  | "intero-coracao"
  | "intero-respiracao"
  | "intero-barriga"
  | "intero-temperatura"
  | "intero-musculos";

function Cabeca({ expressao = "neutro" }: { expressao?: "neutro" | "olhosFechados" | "sorriso" }) {
  return (
    <g>
      {/* rosto */}
      <circle cx="0" cy="0" r="32" fill="#FFD9B3" stroke="#F4A261" strokeWidth="2" />
      {/* cabelo */}
      <path d="M -30 -10 Q -35 -35 0 -34 Q 35 -35 30 -10 L 28 -20 Q 0 -30 -28 -20 Z" fill="#4A3728" />
      {/* olhos */}
      {expressao === "olhosFechados" ? (
        <>
          <path d="M -12 -2 Q -8 2 -4 -2" stroke="#3B2E22" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 4 -2 Q 8 2 12 -2" stroke="#3B2E22" strokeWidth="2" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="-8" cy="-2" r="3" fill="#3B2E22" />
          <circle cx="8" cy="-2" r="3" fill="#3B2E22" />
          <circle cx="-7" cy="-3" r="1" fill="#fff" />
          <circle cx="9" cy="-3" r="1" fill="#fff" />
        </>
      )}
      {/* bochechas */}
      <circle cx="-14" cy="8" r="4" fill="#FFB0C1" opacity="0.6" />
      <circle cx="14" cy="8" r="4" fill="#FFB0C1" opacity="0.6" />
      {/* boca */}
      {expressao === "sorriso" ? (
        <path d="M -6 10 Q 0 16 6 10" stroke="#B84A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
      ) : (
        <path d="M -4 12 Q 0 14 4 12" stroke="#B84A5D" strokeWidth="2" fill="none" strokeLinecap="round" />
      )}
    </g>
  );
}

export function DemoAnimado({ tipo, size = 160 }: { tipo: DemoTipo; size?: number }) {
  const commonSvg = {
    width: size,
    height: size,
    viewBox: "-100 -100 200 200",
  } as const;

  // === Grounding ===
  if (tipo === "grounding-ver") {
    return (
      <svg {...commonSvg}>
        <Cabeca />
        {/* olhos varrendo o ambiente */}
        <motion.g
          animate={{ x: [-6, 6, -6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="-8" cy="-2" r="3.5" fill="#3B2E22" />
          <circle cx="8" cy="-2" r="3.5" fill="#3B2E22" />
        </motion.g>
        <motion.text
          x="45"
          y="-30"
          fontSize="18"
          fill="#0EA5E9"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          👀
        </motion.text>
      </svg>
    );
  }

  if (tipo === "grounding-tocar") {
    return (
      <svg {...commonSvg}>
        <Cabeca expressao="sorriso" />
        <motion.g
          animate={{ x: [0, 30, 0], y: [40, 40, 40] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <text x="0" y="0" fontSize="36" textAnchor="middle">✋</text>
        </motion.g>
        <motion.text
          x="60"
          y="30"
          fontSize="16"
          fill="#10B981"
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          ✨
        </motion.text>
      </svg>
    );
  }

  if (tipo === "grounding-ouvir") {
    return (
      <svg {...commonSvg}>
        <Cabeca expressao="olhosFechados" />
        {/* ondas de som */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx="45"
            cy="0"
            r={10 + i * 10}
            fill="none"
            stroke="#A78BFA"
            strokeWidth="2"
            animate={{ opacity: [0, 0.8, 0], scale: [0.6, 1, 1.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        <text x="45" y="6" fontSize="22" textAnchor="middle">👂</text>
      </svg>
    );
  }

  if (tipo === "grounding-cheirar") {
    return (
      <svg {...commonSvg}>
        <Cabeca expressao="olhosFechados" />
        {[0, 1, 2].map((i) => (
          <motion.text
            key={i}
            x={-20 + i * 20}
            y="-50"
            fontSize="16"
            fill="#F59E0B"
            animate={{ y: [-40, -70, -40], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          >
            〰️
          </motion.text>
        ))}
      </svg>
    );
  }

  if (tipo === "grounding-provar") {
    return (
      <svg {...commonSvg}>
        <Cabeca expressao="sorriso" />
        <motion.text
          x="0"
          y="55"
          fontSize="32"
          textAnchor="middle"
          animate={{ y: [55, 20, 55], scale: [1, 1.2, 1] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          💧
        </motion.text>
      </svg>
    );
  }

  // === Butterfly Hug ===
  if (tipo === "butterfly") {
    return (
      <svg {...commonSvg}>
        <Cabeca expressao="olhosFechados" />
        {/* mãos cruzadas no peito, alternando batida */}
        <motion.text
          x="-14"
          y="55"
          fontSize="26"
          textAnchor="middle"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, times: [0, 0.25, 0.5] }}
        >
          🫲
        </motion.text>
        <motion.text
          x="14"
          y="55"
          fontSize="26"
          textAnchor="middle"
          animate={{ scale: [1, 1, 1, 1.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, times: [0, 0.4, 0.5, 0.75, 1] }}
        >
          🫱
        </motion.text>
        <text x="0" y="80" fontSize="12" fill="#A78BFA" textAnchor="middle" fontWeight="bold">
          esq → dir
        </text>
      </svg>
    );
  }

  // === PMR ===
  if (tipo === "pmr-aperta") {
    return (
      <svg {...commonSvg}>
        <motion.g
          animate={{ scale: [1, 0.85, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cabeca />
          <text x="0" y="60" fontSize="32" textAnchor="middle">✊</text>
        </motion.g>
        <text x="0" y="90" fontSize="14" fill="#DC2626" textAnchor="middle" fontWeight="bold">
          aperta 🗿
        </text>
      </svg>
    );
  }

  if (tipo === "pmr-solta") {
    return (
      <svg {...commonSvg}>
        <motion.g
          animate={{ scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cabeca expressao="sorriso" />
          <text x="0" y="60" fontSize="32" textAnchor="middle">🖐️</text>
        </motion.g>
        <text x="0" y="90" fontSize="14" fill="#10B981" textAnchor="middle" fontWeight="bold">
          solta 🍝
        </text>
      </svg>
    );
  }

  // === Interocepção ===
  if (tipo === "intero-coracao") {
    return (
      <svg {...commonSvg}>
        <Cabeca expressao="olhosFechados" />
        <motion.text
          x="0"
          y="60"
          fontSize="34"
          textAnchor="middle"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 0.9, repeat: Infinity }}
        >
          ❤️
        </motion.text>
      </svg>
    );
  }

  if (tipo === "intero-respiracao") {
    return (
      <svg {...commonSvg}>
        <motion.g
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cabeca expressao="olhosFechados" />
        </motion.g>
        <motion.text
          x="0"
          y="-50"
          fontSize="20"
          textAnchor="middle"
          animate={{ y: [-40, -70, -40], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🌬️
        </motion.text>
      </svg>
    );
  }

  if (tipo === "intero-barriga") {
    return (
      <svg {...commonSvg}>
        <Cabeca />
        <motion.text
          x="0"
          y="60"
          fontSize="34"
          textAnchor="middle"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          🫄
        </motion.text>
      </svg>
    );
  }

  if (tipo === "intero-temperatura") {
    return (
      <svg {...commonSvg}>
        <Cabeca />
        <motion.text
          x="0"
          y="55"
          fontSize="32"
          textAnchor="middle"
          animate={{ rotate: [-8, 8, -8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🌡️
        </motion.text>
      </svg>
    );
  }

  if (tipo === "intero-musculos") {
    return (
      <svg {...commonSvg}>
        <motion.g
          animate={{ scale: [1, 0.95, 1.05, 1] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        >
          <Cabeca expressao="sorriso" />
          <text x="0" y="60" fontSize="32" textAnchor="middle">💪</text>
        </motion.g>
      </svg>
    );
  }

  return null;
}
