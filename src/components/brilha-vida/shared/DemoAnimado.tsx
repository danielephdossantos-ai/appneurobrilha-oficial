import { motion } from "framer-motion";
import pausaRespirar from "@/assets/brilha-vida/pausa-respirar.png.asset.json";
import cantinhoCalma from "@/assets/brilha-vida/cantinho-calma.png.asset.json";
import comoEstou from "@/assets/brilha-vida/como-estou.png.asset.json";
import diarioSentir from "@/assets/brilha-vida/diario-sentir.png.asset.json";
import bolhaBemestar from "@/assets/brilha-vida/bolha-bemestar.png.asset.json";
import feliz from "@/assets/brilha-vida/emocoes/feliz.png.asset.json";
import tranquilo from "@/assets/brilha-vida/emocoes/tranquilo.png.asset.json";
import confuso from "@/assets/brilha-vida/emocoes/confuso.png.asset.json";

/**
 * DemoAnimado — usa as ilustrações reais de criança do app (kawaii Pixar 2D)
 * com uma camada de animação (motion) por cima pra ilustrar cada exercício.
 * Substitui a cabeça vetorial anterior por personagens do mesmo universo
 * visual do Brilha Vida — coerente com o resto do app.
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

const IMG_POR_TIPO: Record<DemoTipo, { url: string; alt: string }> = {
  "grounding-ver": { url: comoEstou.url, alt: "criança observando" },
  "grounding-tocar": { url: comoEstou.url, alt: "criança tocando" },
  "grounding-ouvir": { url: cantinhoCalma.url, alt: "criança ouvindo" },
  "grounding-cheirar": { url: pausaRespirar.url, alt: "criança cheirando" },
  "grounding-provar": { url: feliz.url, alt: "criança provando" },
  "butterfly": { url: tranquilo.url, alt: "criança abraçada" },
  "pmr-aperta": { url: confuso.url, alt: "criança tensa" },
  "pmr-solta": { url: tranquilo.url, alt: "criança relaxada" },
  "intero-coracao": { url: pausaRespirar.url, alt: "sentindo o coração" },
  "intero-respiracao": { url: pausaRespirar.url, alt: "respirando" },
  "intero-barriga": { url: diarioSentir.url, alt: "sentindo a barriga" },
  "intero-temperatura": { url: bolhaBemestar.url, alt: "sentindo a temperatura" },
  "intero-musculos": { url: tranquilo.url, alt: "sentindo os músculos" },
};

export function DemoAnimado({ tipo, size = 160 }: { tipo: DemoTipo; size?: number }) {
  const img = IMG_POR_TIPO[tipo];

  // animação base do personagem varia por tipo
  const anim: Record<DemoTipo, Parameters<typeof motion.img>[0]["animate"]> = {
    "grounding-ver": { x: [-4, 4, -4] },
    "grounding-tocar": { rotate: [-3, 3, -3] },
    "grounding-ouvir": { scale: [1, 1.03, 1] },
    "grounding-cheirar": { scale: [1, 1.05, 1] },
    "grounding-provar": { y: [0, -3, 0] },
    "butterfly": { scale: [1, 1.04, 1] },
    "pmr-aperta": { scale: [1, 0.92, 1] },
    "pmr-solta": { scale: [1, 1.06, 1], rotate: [0, 2, -2, 0] },
    "intero-coracao": { scale: [1, 1.03, 1] },
    "intero-respiracao": { scale: [1, 1.08, 1] },
    "intero-barriga": { scale: [1, 1.04, 1] },
    "intero-temperatura": { rotate: [-2, 2, -2] },
    "intero-musculos": { scale: [1, 0.97, 1.03, 1] },
  };

  const dur: Record<DemoTipo, number> = {
    "grounding-ver": 2.4,
    "grounding-tocar": 1.6,
    "grounding-ouvir": 2,
    "grounding-cheirar": 3,
    "grounding-provar": 2.2,
    "butterfly": 1.8,
    "pmr-aperta": 1.5,
    "pmr-solta": 2.5,
    "intero-coracao": 0.9,
    "intero-respiracao": 4,
    "intero-barriga": 2.2,
    "intero-temperatura": 2,
    "intero-musculos": 2.8,
  };

  // overlay ilustrativo por tipo (emoji flutuante ou ondas)
  const overlay = () => {
    switch (tipo) {
      case "grounding-ver":
        return <FloatingEmoji emoji="🔍" size={size * 0.22} x={size * 0.32} y={-size * 0.28} />;
      case "grounding-tocar":
        return <FloatingEmoji emoji="✋" size={size * 0.24} x={size * 0.3} y={size * 0.05} />;
      case "grounding-ouvir":
        return <SoundWaves size={size} />;
      case "grounding-cheirar":
        return <FloatingEmoji emoji="🌸" size={size * 0.2} x={-size * 0.28} y={-size * 0.25} rise />;
      case "grounding-provar":
        return <FloatingEmoji emoji="💧" size={size * 0.22} x={size * 0.28} y={size * 0.1} />;
      case "butterfly":
        return <FloatingEmoji emoji="🦋" size={size * 0.24} x={0} y={-size * 0.3} rise />;
      case "pmr-aperta":
        return <FloatingEmoji emoji="✊" size={size * 0.22} x={size * 0.3} y={size * 0.15} />;
      case "pmr-solta":
        return <FloatingEmoji emoji="🍝" size={size * 0.22} x={size * 0.3} y={size * 0.15} />;
      case "intero-coracao":
        return <FloatingEmoji emoji="❤️" size={size * 0.24} x={size * 0.25} y={size * 0.05} pulse />;
      case "intero-respiracao":
        return <FloatingEmoji emoji="🌬️" size={size * 0.22} x={-size * 0.3} y={-size * 0.2} rise />;
      case "intero-barriga":
        return <FloatingEmoji emoji="🫄" size={size * 0.22} x={0} y={size * 0.2} />;
      case "intero-temperatura":
        return <FloatingEmoji emoji="🌡️" size={size * 0.22} x={size * 0.3} y={size * 0.1} />;
      case "intero-musculos":
        return <FloatingEmoji emoji="💪" size={size * 0.22} x={size * 0.3} y={size * 0.15} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <motion.img
        src={img.url}
        alt={img.alt}
        draggable={false}
        className="w-full h-full object-contain drop-shadow-md select-none pointer-events-none"
        animate={anim[tipo]}
        transition={{ duration: dur[tipo], repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 pointer-events-none">{overlay()}</div>
    </div>
  );
}

function FloatingEmoji({
  emoji,
  size,
  x,
  y,
  rise,
  pulse,
}: {
  emoji: string;
  size: number;
  x: number;
  y: number;
  rise?: boolean;
  pulse?: boolean;
}) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        fontSize: size,
        lineHeight: 1,
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
      }}
      animate={
        rise
          ? { y: [0, -12, 0], opacity: [0.6, 1, 0.6] }
          : pulse
          ? { scale: [1, 1.25, 1] }
          : { scale: [0.9, 1.1, 0.9] }
      }
      transition={{ duration: rise ? 2.4 : pulse ? 0.9 : 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      {emoji}
    </motion.div>
  );
}

function SoundWaves({ size }: { size: number }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-purple-400"
          style={{ width: size * 0.35, height: size * 0.35 }}
          animate={{ scale: [0.6, 1.4], opacity: [0.8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }}
        />
      ))}
      <div style={{ fontSize: size * 0.2 }}>👂</div>
    </div>
  );
}
