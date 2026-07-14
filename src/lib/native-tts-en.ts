// English TTS helper (en-US preferred, en-GB fallback).
// Reaproveita a lógica de chunking do native-tts pt-BR.

import { sanitizeForSpeech, chunkText } from "./native-tts";

export function pickEnVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  const scored = voices
    .filter((v) => v.lang?.toLowerCase().startsWith("en"))
    .sort((a, b) => {
      const score = (v: SpeechSynthesisVoice) => {
        let s = 0;
        const lang = v.lang?.toLowerCase() ?? "";
        if (lang === "en-us") s += 10;
        else if (lang === "en-gb") s += 8;
        else if (lang.startsWith("en-")) s += 5;
        const name = (v.name || "").toLowerCase();
        // Preferir vozes femininas comuns (mais amigáveis pra crianças)
        if (/samantha|jenny|aria|zira|female|karen|serena|moira|tessa/i.test(name)) s += 3;
        if (v.localService) s += 1;
        return -s;
      };
      return score(a) - score(b);
    });
  return scored[0] ?? null;
}

export interface SpeakEnOpts {
  rate?: number;
  pitch?: number;
  onEnd?: () => void;
  queue?: boolean;
}

let enRunId = 0;
const enResolvers = new Set<() => void>();
let lastEnText = "";
let lastEnAt = 0;

export function stopSpeakingEn() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  enRunId += 1;
  window.speechSynthesis.cancel();
  enResolvers.forEach((r) => r());
  enResolvers.clear();
  lastEnText = "";
  lastEnAt = 0;
}

/** Fala texto em inglês. Por padrão cancela fala anterior. */
export function speakEnglish(text: string, opts: SpeakEnOpts = {}): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window) || !text?.trim()) {
      opts.onEnd?.();
      resolve();
      return;
    }
    const synth = window.speechSynthesis;
    const normalized = text.trim();
    const now = Date.now();
    // Dedupe: mesma fala pedida em <1.2s (StrictMode / re-render duplo)
    // evita "I am am am" quando useEffect dispara 2x seguido.
    if (!opts.queue && normalized === lastEnText && now - lastEnAt < 1200) {
      opts.onEnd?.();
      resolve();
      return;
    }
    lastEnText = normalized;
    lastEnAt = now;
    if (!opts.queue) {
      enRunId += 1;
      synth.cancel();
      enResolvers.forEach((r) => r());
      enResolvers.clear();
    }
    const runId = enRunId;
    // Sanitiza emojis mas mantém pontuação em inglês
    const chunks = chunkText(sanitizeForSpeech(text), 120);
    const voice = pickEnVoice();
    let i = 0;
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      enResolvers.delete(finish);
      opts.onEnd?.();
      resolve();
    };
    enResolvers.add(finish);
    if (chunks.length === 0) return finish();

    const next = () => {
      if (runId !== enRunId || done) return;
      if (i >= chunks.length) return finish();
      const chunk = chunks[i++];
      const u = new SpeechSynthesisUtterance(chunk);
      u.lang = voice?.lang || "en-US";
      u.rate = opts.rate ?? 0.85; // um pouco mais devagar pra crianças
      u.pitch = opts.pitch ?? 1.05;
      if (voice) u.voice = voice;
      let advanced = false;
      const to = window.setTimeout(() => {
        if (advanced) return;
        advanced = true;
        next();
      }, Math.max(2500, Math.ceil(chunk.length * 140)));
      const adv = () => {
        if (advanced) return;
        advanced = true;
        window.clearTimeout(to);
        next();
      };
      u.onend = adv;
      u.onerror = adv;
      synth.resume();
      synth.speak(u);
      synth.resume();
    };
    next();
  });
}

/** Warm-up: dispara loadVoices no primeiro clique da página. */
export function warmupEnVoices() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.getVoices();
    // Alguns browsers só carregam vozes após um onvoiceschanged
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  } catch {
    /* ignore */
  }
}
