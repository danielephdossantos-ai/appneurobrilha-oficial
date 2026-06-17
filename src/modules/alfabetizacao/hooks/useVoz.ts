import { useCallback, useRef } from "react";
import { speakWithElevenLabs } from "@/lib/elevenlabs-tts.functions";

// Cache simples em memória pra evitar refazer TTS de strings repetidas.
const cache = new Map<string, string>();

export function useVoz() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const falar = useCallback(async (texto: string) => {
    if (!texto?.trim()) return;
    try {
      // Para qualquer áudio em andamento
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      let base64 = cache.get(texto);
      if (!base64) {
        const res = await speakWithElevenLabs({ data: { text: texto } });
        if (!res?.audio) {
          // Fallback: Web Speech API
          if (typeof window !== "undefined" && "speechSynthesis" in window) {
            const u = new SpeechSynthesisUtterance(texto);
            u.lang = "pt-BR";
            u.rate = 0.9;
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(u);
          }
          return;
        }
        base64 = res.audio;
        cache.set(texto, base64);
      }

      const audio = new Audio(`data:audio/mpeg;base64,${base64}`);
      audioRef.current = audio;
      await audio.play().catch(() => {});
    } catch (e) {
      console.error("[useVoz] erro:", e);
    }
  }, []);

  const parar = useCallback(() => {
    audioRef.current?.pause();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }, []);

  return { falar, parar };
}
