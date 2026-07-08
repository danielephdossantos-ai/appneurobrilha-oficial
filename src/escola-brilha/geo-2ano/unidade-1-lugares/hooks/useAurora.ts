import { useCallback, useEffect } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

/**
 * Aurora — voz narradora da aula.
 * Fala SÓ o que a gente pede explicitamente (intros de cena).
 * Nunca lê feedback de acerto/erro (regra travada do curso).
 */
export function useAurora() {
  useEffect(() => () => stopSpeaking(), []);

  const falar = useCallback((texto: string) => {
    speakChunked(texto, { rate: 0.95, pitch: 1.1 });
  }, []);

  const parar = useCallback(() => stopSpeaking(), []);

  return { falar, parar };
}
