import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Hook para usar o TTS nativo do dispositivo (Android/iOS/Desktop) via Web Speech API.
 * NÃO usa IA — usa o mecanismo de voz do próprio aparelho.
 */
export function useDeviceTTS(defaultLang: string = "pt-BR") {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    setSupported(true);

    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      // Prioriza voz pt-BR; cai para qualquer pt; cai para a primeira disponível
      voiceRef.current =
        voices.find((v) => v.lang?.toLowerCase() === defaultLang.toLowerCase()) ||
        voices.find((v) => v.lang?.toLowerCase().startsWith("pt")) ||
        voices[0] ||
        null;
    };
    pickVoice();
    window.speechSynthesis.onvoiceschanged = pickVoice;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [defaultLang]);

  const speak = useCallback(
    (text: string, opts?: { rate?: number; pitch?: number; lang?: string }) => {
      if (!supported || !text) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = opts?.lang || defaultLang;
      u.rate = opts?.rate ?? 1;
      u.pitch = opts?.pitch ?? 1;
      if (voiceRef.current) u.voice = voiceRef.current;
      u.onstart = () => setSpeaking(true);
      u.onend = () => setSpeaking(false);
      u.onerror = () => setSpeaking(false);
      window.speechSynthesis.speak(u);
    },
    [supported, defaultLang],
  );

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, [supported]);

  // Para a fala ao desmontar
  useEffect(() => {
    return () => {
      if (supported) window.speechSynthesis.cancel();
    };
  }, [supported]);

  return { speak, stop, speaking, supported };
}
