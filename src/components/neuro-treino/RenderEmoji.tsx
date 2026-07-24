import {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ArrowUpLeft,
  ArrowDownRight,
  ArrowDownLeft,
  CornerUpLeft,
  CornerUpRight,
  RotateCcw,
} from "lucide-react";
import { emojiImg, objetoImg, semEmoji } from "@/data/neuro-treino/objetos";

// Mapeia emojis abstratos (formas/cores) → cor sólida para chip CSS
const SHAPE_COLOR: Record<string, string> = {
  "🔴": "#ef4444",
  "🟠": "#f97316",
  "🟡": "#facc15",
  "🟢": "#22c55e",
  "🔵": "#3b82f6",
  "🟣": "#a855f7",
  "🟤": "#92400e",
  "⚫": "#0f172a",
  "⚪": "#f1f5f9",
  "🟥": "#ef4444",
  "🟧": "#f97316",
  "🟨": "#facc15",
  "🟩": "#22c55e",
  "🟦": "#3b82f6",
  "🟪": "#a855f7",
  "🟫": "#92400e",
  "⬛": "#0f172a",
  "⬜": "#f1f5f9",
};
// Formas geométricas
const SHAPE_KIND: Record<string, "circle" | "square" | "triangle" | "diamond"> = {
  "🔴": "circle",
  "🟠": "circle",
  "🟡": "circle",
  "🟢": "circle",
  "🔵": "circle",
  "🟣": "circle",
  "🟤": "circle",
  "⚫": "circle",
  "⚪": "circle",
  "🟥": "square",
  "🟧": "square",
  "🟨": "square",
  "🟩": "square",
  "🟦": "square",
  "🟪": "square",
  "🟫": "square",
  "⬛": "square",
  "⬜": "square",
  "🔺": "triangle",
  "🔻": "triangle",
  "🔷": "diamond",
  "🔶": "diamond",
  "🔸": "diamond",
  "🔹": "diamond",
};
const SHAPE_OUTLINE: Record<string, string> = {
  "🔺": "#ef4444",
  "🔻": "#ef4444",
  "🔷": "#3b82f6",
  "🔹": "#3b82f6",
  "🔶": "#f97316",
  "🔸": "#f97316",
};

const ARROWS: Record<string, React.ComponentType<{ className?: string }>> = {
  "⬆️": ArrowUp,
  "⬇️": ArrowDown,
  "⬅️": ArrowLeft,
  "➡️": ArrowRight,
  "↗️": ArrowUpRight,
  "↖️": ArrowUpLeft,
  "↘️": ArrowDownRight,
  "↙️": ArrowDownLeft,
  "↪️": CornerUpRight,
  "↩️": CornerUpLeft,
  "⤴️": ArrowUpRight,
  "⤵️": ArrowDownRight,
  "🔄": RotateCcw,
  "🌀": RotateCcw,
};

export interface RenderEmojiProps {
  e?: string;
  /** classes para o wrapper (define tamanho via w-/h-) */
  className?: string;
  /** label opcional (mostrado se nada for renderizado visualmente) */
  label?: string;
  /** força esconder fallback de texto */
  hideText?: boolean;
}

/**
 * Render universal seguro: imagem premium → forma colorida → ícone Lucide → texto limpo.
 * Nunca exibe emoji cru.
 */
export function RenderEmoji({ e, className = "w-16 h-16", label, hideText }: RenderEmojiProps) {
  if (!e && !label) return null;
  const raw = (e ?? "").trim();
  const img = emojiImg(raw) ?? objetoImg(raw) ?? objetoImg(label);

  if (img) {
    return (
      <img
        src={img}
        alt={label ?? semEmoji(raw)}
        loading="lazy"
        className={`${className} object-contain drop-shadow-sm`}
      />
    );
  }

  // Formas geométricas coloridas
  const kind = SHAPE_KIND[raw];
  if (kind) {
    const color = SHAPE_COLOR[raw] ?? SHAPE_OUTLINE[raw] ?? "#64748b";
    if (kind === "circle")
      return (
        <div className={`${className} rounded-full shadow-md`} style={{ background: color }} />
      );
    if (kind === "square")
      return <div className={`${className} rounded-lg shadow-md`} style={{ background: color }} />;
    if (kind === "triangle")
      return (
        <div className={`${className} flex items-center justify-center`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <polygon points="50,10 90,90 10,90" fill={color} />
          </svg>
        </div>
      );
    if (kind === "diamond")
      return (
        <div className={`${className} flex items-center justify-center`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <polygon points="50,5 95,50 50,95 5,50" fill={color} />
          </svg>
        </div>
      );
  }

  // Setas e símbolos via Lucide
  const Arrow = ARROWS[raw];
  if (Arrow) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <Arrow className="w-3/4 h-3/4" />
      </div>
    );
  }

  // Fallback: chip de texto limpo (nunca emoji bruto)
  const txt = label ?? semEmoji(raw);
  if (hideText || !txt) {
    return <div className={`${className} rounded-xl bg-muted/60`} />;
  }
  return (
    <div
      className={`${className} flex items-center justify-center px-2 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20`}
    >
      <span className="font-black text-primary text-xs md:text-sm text-center leading-tight">
        {txt}
      </span>
    </div>
  );
}
