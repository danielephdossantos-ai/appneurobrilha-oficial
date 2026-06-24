import { useCallback } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

// TTS nativo do aparelho (Android / iOS / Desktop) — sem IA.
// Chunking automático para ler textos longos sem truncar.
export function useVoz() {
  const falar = useCallback(async (texto: string) => {
    await speakChunked(texto, { rate: 0.95, pitch: 1 });
  }, []);

  const parar = useCallback(() => {
    stopSpeaking();
  }, []);

  return { falar, parar };
}
