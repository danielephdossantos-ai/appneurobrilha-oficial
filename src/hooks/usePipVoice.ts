import { useState } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

/**
 * Hook centralizado de voz do mascote.
 * Garante que TODA fala passe pelo normalizador pt-BR.
 */
export function usePipVoice() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const stop = () => {
    stopSpeaking();
    setIsSpeaking(false);
  };

  const speak = async (text: string, options?: { volume?: number; rate?: number; pitch?: number }) => {
    if (!text?.trim()) return;
    setIsSpeaking(true);
    // O speakChunked já chama internamente o sanitizeForSpeech -> normalizarFala
    await speakChunked(text, { 
      rate: options?.rate ?? 0.88, 
      pitch: options?.pitch ?? 1.0,
      volume: options?.volume ?? 1.0
    });
    setIsSpeaking(false);
  };

  return { speak, stop, isSpeaking };
}
