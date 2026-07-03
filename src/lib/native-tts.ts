// Helpers para TTS nativo (Web Speech API) com chunking.
// O Chrome desktop trunca utterances longas (~200 chars / 15s).
// Quebrar em frases curtas e enfileirar resolve.

export function pickPtBrVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang?.toLowerCase() === "pt-br") ||
    voices.find((v) => v.lang?.toLowerCase().startsWith("pt")) ||
    null
  );
}

/** Divide texto longo em pedaços de no máximo ~160 chars cortando em
 *  pontuação ou espaço para não travar a leitura no meio de uma palavra. */
export function chunkText(text: string, max = 160): string[] {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return [clean];
  // Primeiro corta em frases (. ! ? ; \n)
  const sentences = clean
    .split(/(?<=[.!?;])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
  const chunks: string[] = [];
  for (const s of sentences) {
    if (s.length <= max) {
      chunks.push(s);
      continue;
    }
    // Frase ainda grande: corta por vírgula
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
  return chunks;
}

export interface SpeakOpts {
  rate?: number;
  pitch?: number;
  volume?: number;
  onEnd?: () => void;
  /** Se true, enfileira sem cancelar o que já está falando. */
  queue?: boolean;
}

const activeSpeechResolvers = new Set<() => void>();
let speechRunId = 0;

function resolveActiveSpeech() {
  activeSpeechResolvers.forEach((resolve) => resolve());
  activeSpeechResolvers.clear();
}

/** Fala texto longo enfileirando utterances curtos.
 *  Por padrão cancela fala anterior; passe { queue: true } para enfileirar. */
export function speakChunked(text: string, opts: SpeakOpts = {}): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window) || !text?.trim()) {
      opts.onEnd?.();
      resolve();
      return;
    }
    const synth = window.speechSynthesis;
    if (!opts.queue) {
      speechRunId += 1;
      synth.cancel();
      resolveActiveSpeech();
    }
    const currentRunId = speechRunId;
    const chunks = chunkText(text);
    const voice = pickPtBrVoice();
    let i = 0;
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      activeSpeechResolvers.delete(finish);
      opts.onEnd?.();
      resolve();
    };
    activeSpeechResolvers.add(finish);
    const speakNext = () => {
      if (currentRunId !== speechRunId || finished) return;
      if (i >= chunks.length) {
        finish();
        return;
      }
      const chunk = chunks[i++];
      const u = new SpeechSynthesisUtterance(chunk);
      u.lang = "pt-BR";
      u.rate = opts.rate ?? 0.95;
      u.pitch = opts.pitch ?? 1;
      u.volume = opts.volume ?? 1;
      if (voice) u.voice = voice;
      let advanced = false;
      const timeout = window.setTimeout(
        () => {
          if (advanced) return;
          advanced = true;
          speakNext();
        },
        Math.max(2500, Math.ceil(chunk.length * 120)),
      );
      const advance = () => {
        if (advanced) return;
        advanced = true;
        window.clearTimeout(timeout);
        speakNext();
      };
      u.onend = advance;
      u.onerror = advance;
      synth.resume();
      synth.speak(u);
      synth.resume();
    };
    speakNext();
  });
}

export function stopSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    speechRunId += 1;
    window.speechSynthesis.cancel();
    resolveActiveSpeech();
  }
}
