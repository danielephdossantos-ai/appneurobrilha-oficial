import { useCallback, useEffect, useState } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

// Voz do Pip via TTS nativo do aparelho (Web Speech API) com chunking.
export function usePipVoice() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const stop = useCallback(() => {
    stopSpeaking();
    setIsSpeaking(false);
  }, []);

  const speak = useCallback(async (text: string, options?: { volume?: number; rate?: number; pitch?: number }) => {
    if (!text?.trim()) return;
    setIsSpeaking(true);
    await speakChunked(text, { 
      rate: options?.rate ?? 0.95, 
      pitch: options?.pitch ?? 1.05,
      volume: options?.volume ?? 1.0
    });
    setIsSpeaking(false);
  }, []);


  useEffect(() => () => stopSpeaking(), []);

  return { speak, stop, isSpeaking };
}
