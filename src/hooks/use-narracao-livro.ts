import { useCallback, useEffect, useRef, useState } from "react";

export interface OpcoesFala {
  pitch?: number;
  rate?: number;
  /** recebe o índice do caractere sendo falado (para acender a palavra) */
  onPalavra?: (charIndex: number) => void;
  onFim?: () => void;
}

/**
 * Narração infantil usando a voz do próprio aparelho (pt-BR), pausada e clara.
 */
export function useNarracao() {
  const [falando, setFalando] = useState(false);
  const [pausado, setPausado] = useState(false);
  const [disponivel, setDisponivel] = useState(false);
  const vozRef = useRef<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    setDisponivel(true);

    const escolherVoz = () => {
      const vozes = window.speechSynthesis.getVoices();
      vozRef.current =
        vozes.find((v) => v.lang.toLowerCase().startsWith("pt-br")) ??
        vozes.find((v) => v.lang.toLowerCase().startsWith("pt")) ??
        null;
    };

    escolherVoz();
    window.speechSynthesis.addEventListener("voiceschanged", escolherVoz);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", escolherVoz);
      window.speechSynthesis.cancel();
    };
  }, []);

  const falar = useCallback((texto: string, op: OpcoesFala = {}) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      op.onFim?.();
      return;
    }
    window.speechSynthesis.cancel();
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    fala.rate = op.rate ?? 0.85;
    fala.pitch = op.pitch ?? 1.15;
    if (vozRef.current) fala.voice = vozRef.current;
    fala.onstart = () => {
      setFalando(true);
      setPausado(false);
    };
    fala.onboundary = (e) => op.onPalavra?.(e.charIndex);
    fala.onend = () => {
      setFalando(false);
      op.onPalavra?.(-1);
      op.onFim?.();
    };
    fala.onerror = () => setFalando(false);
    window.speechSynthesis.speak(fala);
  }, []);

  const parar = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    setFalando(false);
    setPausado(false);
  }, []);

  const pausar = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.pause();
    setPausado(true);
  }, []);

  const continuar = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.resume();
    setPausado(false);
  }, []);

  return { falar, parar, pausar, continuar, falando, pausado, disponivel };
}
