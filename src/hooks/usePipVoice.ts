import { useCallback, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { speakWithElevenLabs } from "@/lib/elevenlabs-tts.functions";

// Cache em memória para não regenerar áudio idêntico
const audioCache = new Map<string, string>();

export function usePipVoice() {
  const speakFn = useServerFn(speakWithElevenLabs);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsSpeaking(false);
  }, []);

  const speak = useCallback(
    async (text: string) => {
      if (!text.trim()) return;
      stop();
      try {
        setIsSpeaking(true);
        let base64 = audioCache.get(text);
        if (!base64) {
          const res = await speakFn({ data: { text } });
          if (!res?.audio) {
            console.error("[PipVoice] sem áudio:", res?.error);
            setIsSpeaking(false);
            return;
          }
          base64 = res.audio;
          audioCache.set(text, base64);
        }
        const audio = new Audio(`data:audio/mpeg;base64,${base64}`);
        audioRef.current = audio;
        audio.onended = () => setIsSpeaking(false);
        audio.onerror = () => setIsSpeaking(false);
        await audio.play();
      } catch (e) {
        console.error("[PipVoice] falha play:", e);
        setIsSpeaking(false);
      }
    },
    [speakFn, stop],
  );

  return { speak, stop, isSpeaking };
}
