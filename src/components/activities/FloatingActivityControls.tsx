import { SkipForward, Shuffle } from "lucide-react";

interface FloatingActivityControlsProps {
  /** Callback quando a criança quer pular a explicação/aula atual e ir direto à atividade. */
  onSkip?: () => void;
  /** Callback quando a criança quer trocar de atividade (sair da atual). */
  onChange?: () => void;
  /** Rótulo personalizado do botão "pular". */
  skipLabel?: string;
  /** Rótulo personalizado do botão "trocar". */
  changeLabel?: string;
  /** Esconder temporariamente (ex: durante celebração). */
  hidden?: boolean;
}

/**
 * Botões flutuantes fixos no canto inferior direito, presentes em todas as
 * atividades do app. Permitem à criança/responsável pular a explicação ou
 * trocar de atividade a qualquer momento, sem precisar voltar pela navegação.
 */
export function FloatingActivityControls({
  onSkip,
  onChange,
  skipLabel = "Pular explicação",
  changeLabel = "Trocar atividade",
  hidden = false,
}: FloatingActivityControlsProps) {
  if (hidden || (!onSkip && !onChange)) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 items-end pointer-events-none">
      {onSkip && (
        <button
          type="button"
          onClick={onSkip}
          className="pointer-events-auto flex items-center gap-2 rounded-full bg-primary text-primary-foreground shadow-glow px-4 py-2.5 text-sm font-bold hover:scale-105 active:scale-95 transition-transform border-2 border-white/40"
          aria-label={skipLabel}
        >
          <SkipForward className="h-4 w-4" />
          <span className="hidden sm:inline">{skipLabel}</span>
        </button>
      )}
      {onChange && (
        <button
          type="button"
          onClick={onChange}
          className="pointer-events-auto flex items-center gap-2 rounded-full bg-card text-foreground shadow-lg px-4 py-2.5 text-sm font-bold hover:scale-105 active:scale-95 transition-transform border-2 border-border"
          aria-label={changeLabel}
        >
          <Shuffle className="h-4 w-4" />
          <span className="hidden sm:inline">{changeLabel}</span>
        </button>
      )}
    </div>
  );
}
