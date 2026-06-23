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
      const synth = window.speechSynthesis;
      synth.cancel();
      // Chunking: Chrome trunca utterances > ~200 chars / 15s. Quebrar em frases.
      const clean = text.replace(/\s+/g, " ").trim();
      const max = 160;
      const chunks: string[] = [];
      if (clean.length <= max) {
        chunks.push(clean);
      } else {
        const sentences = clean.split(/(?<=[.!?;])\s+|\n+/).map((s) => s.trim()).filter(Boolean);
        for (const s of sentences) {
          if (s.length <= max) { chunks.push(s); continue; }
          let rest = s;
          while (rest.length > max) {
            let cut = rest.lastIndexOf(",", max);
            if (cut < max / 2) cut = rest.lastIndexOf(" ", max);
            if (cut < max / 2) cut = max;
            chunks.push(rest.slice(0, cut).trim());
            rest = rest.slice(cut).trim();
          }
          if (rest) chunks.push(rest);
        }
      }
      let i = 0;
      setSpeaking(true);
      const next = () => {
        if (i >= chunks.length) { setSpeaking(false); return; }
        const u = new SpeechSynthesisUtterance(chunks[i++]);
        u.lang = opts?.lang || defaultLang;
        u.rate = opts?.rate ?? 1;
        u.pitch = opts?.pitch ?? 1;
        if (voiceRef.current) u.voice = voiceRef.current;
        u.onend = next;
        u.onerror = next;
        synth.speak(u);
      };
      next();
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
