import { useCallback, useEffect, useRef, useState } from "react";

// Voz do Pip via TTS nativo do aparelho (Web Speech API) — sem IA.

function pickPtBrVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang?.toLowerCase() === "pt-br") ||
    voices.find((v) => v.lang?.toLowerCase().startsWith("pt")) ||
    null
  );
}

export function usePipVoice() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  const speak = useCallback(
    async (text: string) => {
      if (!text?.trim()) return;
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
      try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "pt-BR";
        u.rate = 0.95;
        u.pitch = 1.05;
        const v = pickPtBrVoice();
        if (v) u.voice = v;
        u.onend = () => setIsSpeaking(false);
        u.onerror = () => setIsSpeaking(false);
        utterRef.current = u;
        setIsSpeaking(true);
        window.speechSynthesis.speak(u);
      } catch (e) {
        console.error("[PipVoice] erro:", e);
        setIsSpeaking(false);
      }
    },
    [],
  );

  useEffect(() => () => stop(), [stop]);

  return { speak, stop, isSpeaking };
}
