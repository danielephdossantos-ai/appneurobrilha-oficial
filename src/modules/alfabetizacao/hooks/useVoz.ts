import { useCallback, useRef } from "react";

// TTS nativo do aparelho (Android / iOS / Desktop) — sem IA.
// Usa a Web Speech API (window.speechSynthesis) com voz pt-BR.

function pickPtBrVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang?.toLowerCase() === "pt-br") ||
    voices.find((v) => v.lang?.toLowerCase().startsWith("pt")) ||
    null
  );
}

export function useVoz() {
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  const falar = useCallback(async (texto: string) => {
    if (!texto?.trim()) return;
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(texto);
      u.lang = "pt-BR";
      u.rate = 0.95;
      u.pitch = 1;
      const v = pickPtBrVoice();
      if (v) u.voice = v;
      utterRef.current = u;
      window.speechSynthesis.speak(u);
    } catch (e) {
      console.error("[useVoz] erro:", e);
    }
  }, []);

  const parar = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }, []);

  return { falar, parar };
}
