// Lightweight TTS wrapper around the Web Speech API.
// Future: swap implementation for ElevenLabs server function.

export interface TTSHandle {
  stop: () => void;
}

export function speak(
  text: string,
  opts?: { lang?: string; rate?: number; onWord?: (charIndex: number, word: string) => void; onEnd?: () => void },
): TTSHandle {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    opts?.onEnd?.();
    return { stop: () => {} };
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = opts?.lang ?? "pt-BR";
  u.rate = opts?.rate ?? 0.9;
  u.pitch = 1.05;
  if (opts?.onWord) {
    u.onboundary = (e) => {
      if (e.name === "word") {
        const sub = text.slice(e.charIndex).split(/\s+/)[0] ?? "";
        opts.onWord!(e.charIndex, sub);
      }
    };
  }
  u.onend = () => opts?.onEnd?.();
  window.speechSynthesis.speak(u);
  return {
    stop: () => window.speechSynthesis.cancel(),
  };
}
