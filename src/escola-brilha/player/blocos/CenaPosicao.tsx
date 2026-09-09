import { motion } from "framer-motion";

/**
 * Motor de cenas espaciais compartilhado.
 * Renderiza a posição REAL do sujeito em relação à referência
 * (em cima, embaixo, dentro, fora, direita, esquerda, atrás, frente,
 * ao lado) e a variante "entre" (fila de três).
 *
 * Usado por PosicaoEspacial (interativa) e por Quiz / Níveis /
 * Atividade Guiada / Desafio via visual.tipo = "cena" | "cenaEntre".
 */

export type PosicaoTipo =
  | "cima"
  | "baixo"
  | "dentro"
  | "fora"
  | "direita"
  | "esquerda"
  | "atras"
  | "frente"
  | "aoLado";

export interface CenaDuplaSpec {
  referenciaImg: string;
  referenciaLabel?: string;
  sujeitoImg: string;
  sujeitoLabel?: string;
  posicao: PosicaoTipo;
}

export interface CenaEntreSpec {
  fila: Array<{ img: string; label: string }>;
}

export function CenaDuplaView({
  spec,
  compact = false,
}: {
  spec: CenaDuplaSpec;
  compact?: boolean;
}) {
  const { referenciaImg, referenciaLabel, sujeitoImg, sujeitoLabel, posicao } = spec;
  const h = compact ? "h-48 sm:h-56" : "h-64 sm:h-72";
  return (
    <div
      className={`relative mx-auto w-full max-w-md ${h} rounded-3xl overflow-hidden bg-gradient-to-b from-sky-100 to-emerald-100 border-4 border-white/60 shadow-inner`}
    >
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-emerald-600/40" />
      {renderLayout(posicao, sujeitoImg, sujeitoLabel, referenciaImg, referenciaLabel, compact)}
    </div>
  );
}

export function CenaEntreView({
  spec,
  compact = false,
}: {
  spec: CenaEntreSpec;
  compact?: boolean;
}) {
  const h = compact ? "h-44 sm:h-52" : "h-56 sm:h-64";
  return (
    <div
      className={`relative mx-auto w-full max-w-md ${h} rounded-3xl overflow-hidden bg-gradient-to-b from-sky-100 to-emerald-100 border-4 border-white/60 shadow-inner`}
    >
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-emerald-600/40" />
      <div className="absolute inset-0 flex items-end justify-center gap-3 sm:gap-6 pb-4">
        {spec.fila.map((it, i) => (
          <div key={i} className="flex flex-col items-center">
            <Piece src={it.img} label={it.label} size={compact ? "sm" : "md"} />
            {i === 1 && (
              <span className="mt-1 px-2 py-0.5 rounded-full bg-amber-400 text-[#0d1f55] text-[10px] font-black shadow">
                ENTRE
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- interno ---------------- */

export function Piece({
  src,
  label,
  size = "md",
  className = "",
  style,
}: {
  src: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
}) {
  const dims =
    size === "lg"
      ? "h-32 w-32 sm:h-40 sm:w-40"
      : size === "sm"
        ? "h-16 w-16 sm:h-20 sm:w-20"
        : "h-24 w-24 sm:h-28 sm:w-28";
  return (
    <div className={`flex flex-col items-center ${className}`} style={style}>
      <motion.img
        src={src}
        alt=""
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className={`${dims} object-contain drop-shadow-xl`}
        loading="lazy"
      />
      {label && (
        <span className="mt-1 px-2 py-0.5 rounded-full bg-white/95 text-[#0d1f55] text-[11px] font-black shadow">
          {label}
        </span>
      )}
    </div>
  );
}

function renderLayout(
  pos: PosicaoTipo,
  suj: string,
  sujLabel: string | undefined,
  ref: string,
  refLabel: string | undefined,
  compact: boolean,
) {
  const bigSize = compact ? "md" : "lg";
  const smallSize = compact ? "sm" : "md";
  switch (pos) {
    case "cima":
      return (
        <>
          <Piece src={suj} label={sujLabel} size={smallSize}
            className="absolute left-1/2 -translate-x-1/2 top-2" />
          <Piece src={ref} label={refLabel} size={bigSize}
            className="absolute left-1/2 -translate-x-1/2 bottom-4" />
        </>
      );
    case "baixo":
      return (
        <>
          <Piece src={ref} label={refLabel} size={bigSize}
            className="absolute left-1/2 -translate-x-1/2 top-2" />
          <Piece src={suj} label={sujLabel} size={smallSize}
            className="absolute left-1/2 -translate-x-1/2 bottom-4" />
        </>
      );
    case "dentro":
      return (
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="relative">
            <Piece src={ref} label={refLabel} size={bigSize} />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Piece src={suj} label={sujLabel} size="sm" />
            </div>
          </div>
        </div>
      );
    case "fora":
      return (
        <>
          <Piece src={ref} label={refLabel} size={bigSize}
            className="absolute left-6 bottom-4" />
          <Piece src={suj} label={sujLabel} size={smallSize}
            className="absolute right-6 bottom-4" />
        </>
      );
    case "direita":
      return (
        <>
          <Piece src={ref} label={refLabel} size={bigSize}
            className="absolute left-6 bottom-4" />
          <Piece src={suj} label={sujLabel} size={smallSize}
            className="absolute right-6 bottom-4" />
          <div className="absolute top-2 right-4 text-3xl">➡️</div>
        </>
      );
    case "esquerda":
      return (
        <>
          <Piece src={ref} label={refLabel} size={bigSize}
            className="absolute right-6 bottom-4" />
          <Piece src={suj} label={sujLabel} size={smallSize}
            className="absolute left-6 bottom-4" />
          <div className="absolute top-2 left-4 text-3xl">⬅️</div>
        </>
      );
    case "atras":
      return (
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-70">
              <Piece src={suj} label={sujLabel} size="sm" />
            </div>
            <Piece src={ref} label={refLabel} size={bigSize} />
          </div>
        </div>
      );
    case "frente":
      return (
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="relative">
            <Piece src={ref} label={refLabel} size={bigSize} />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              <Piece src={suj} label={sujLabel} size="sm" />
            </div>
          </div>
        </div>
      );
    case "aoLado":
      return (
        <div className="absolute inset-0 flex items-end justify-center gap-2">
          <Piece src={ref} label={refLabel} size={bigSize} />
          <Piece src={suj} label={sujLabel} size={smallSize} />
        </div>
      );
  }
}
