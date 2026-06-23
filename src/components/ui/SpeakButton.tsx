import { useDeviceTTS } from "@/hooks/useDeviceTTS";
import { Volume2, Square } from "lucide-react";

interface Props {
  text: string;
  label?: string;
  className?: string;
  size?: "sm" | "md";
}

/**
 * Botão "Ouvir": usa a voz NATIVA do dispositivo (Android/iOS/Desktop).
 * Não envia o texto para nenhuma IA.
 */
export function SpeakButton({ text, label = "Ouvir", className = "", size = "md" }: Props) {
  const { speak, stop, speaking, supported } = useDeviceTTS();
  if (!supported) return null;

  const sizes =
    size === "sm"
      ? "text-[10px] px-2 py-1 gap-1"
      : "text-xs px-3 py-1.5 gap-1.5";

  return (
    <button
      type="button"
      onClick={() => (speaking ? stop() : speak(text))}
      aria-pressed={speaking}
      aria-label={speaking ? "Parar leitura" : `${label} (voz do aparelho)`}
      className={[
        "inline-flex items-center font-bold uppercase tracking-wider rounded-full transition-colors",
        speaking
          ? "bg-rose-100 text-rose-700 hover:bg-rose-200"
          : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
        sizes,
        className,
      ].join(" ")}
    >
      {speaking ? <Square className="h-3 w-3 fill-current" /> : <Volume2 className="h-3 w-3" />}
      {speaking ? "Parar" : label}
    </button>
  );
}
