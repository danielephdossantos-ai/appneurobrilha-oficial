import { useCallback, useEffect, useState } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

// Voz do Pip via TTS nativo do aparelho (Web Speech API) com chunking.
export function usePipVoice() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const stop = useCallback(() => {
    stopSpeaking();
    setIsSpeaking(false);
  }, []);

  const speak = useCallback(async (text: string) => {
    if (!text?.trim()) return;
    setIsSpeaking(true);
    await speakChunked(text, { rate: 0.95, pitch: 1.05 });
    setIsSpeaking(false);
  }, []);

  useEffect(() => () => stopSpeaking(), []);

  return { speak, stop, isSpeaking };
}
