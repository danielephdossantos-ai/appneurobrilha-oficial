// Helpers para TTS nativo (Web Speech API) com chunking.
// O Chrome desktop trunca utterances longas (~200 chars / 15s).
// Quebrar em frases curtas e enfileirar resolve.

/**
 * Remove emojis, pictogramas e símbolos decorativos antes de falar.
 * O TTS lê emoji ("🏫" vira "escola") o que polui a narração e às vezes
 * duplica palavras (título "🏫 — ESCOLA" ficava "escola escola").
 * Também converte separadores visuais (— · • | →) em pausa curta.
 */
export function normalizeLiteracyTextForSpeech(text: string): string {
  if (!text) return "";
  let out = text;

  // Em telas de alfabetização, "R." deve soar como resposta, não como a letra erre.
  out = out.replace(/\bR\s*[:.]\s*/gi, "Resposta: ");

  // Runs de letras romanas maiúsculas (II, III, VI, IX, XX...) são lidas como
  // números pelo TTS. Em contexto de alfabetização isso vira "três", "seis"…
  // Convertemos em letras minúsculas elongadas com acento para forçar leitura fonética.
  const somVogalElongada: Record<string, string> = {
    A: "ááááá", E: "êêêê", I: "iiiii", O: "óóóó", U: "uuuuu",
    Á: "ááááá", É: "êêêê", Í: "iiiii", Ó: "óóóó", Ú: "uuuuu",
    Ã: "ãããã", Õ: "õõõõ", Ê: "êêêê", Ô: "óóóó", Î: "iiiii", Û: "uuuuu",
  };
  out = out.replace(/\b([A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ])\1{1,}\b/g, (_, ch) => {
    const upper = ch.toUpperCase();
    return somVogalElongada[upper] ?? ch.toLowerCase().repeat(4);
  });

  // O Web Speech costuma se perder quando uma palavra aparece silabada
  // com espaços/hífens (ex.: BOR-BO-LE-TA ou bo bo le ta). Para a voz do
  // professor, juntamos palavras de treino conhecidas sem alterar o visual.
  const replacements: Array<[RegExp, string]> = [
    [/\b(?:bor|bo)\s*[-·]?\s*bo\s*[-·]?\s*le\s*[-·]?\s*ta\b/gi, "borboleta"],
    [/\bdi\s*[-·]?\s*nos\s*[-·]?\s*sau\s*[-·]?\s*ro\b/gi, "dinossauro"],
    [/\bca\s*[-·]?\s*chor\s*[-·]?\s*ro\b/gi, "cachorro"],
    [/\bpas\s*[-·]?\s*sa\s*[-·]?\s*ri\s*[-·]?\s*nho\b/gi, "passarinho"],
    [/\ba\s*[-·]?\s*be\s*[-·]?\s*lha\b/gi, "abelha"],
    [/\bbo\s*[-·]?\s*la\b/gi, "bola"],
    [/\bca\s*[-·]?\s*sa\b/gi, "casa"],
    [/\bga\s*[-·]?\s*to\b/gi, "gato"],
    [/\bpa\s*[-·]?\s*to\b/gi, "pato"],
    [/\bsa\s*[-·]?\s*po\b/gi, "sapo"],
    [/\blu\s*[-·]?\s*a\b/gi, "lua"],
    [/\bso\s*[-·]?\s*l\b/gi, "sol"],
  ];

  replacements.forEach(([pattern, replacement]) => {
    out = out.replace(pattern, replacement);
  });

  return out;
}

export function sanitizeForSpeech(text: string): string {
  if (!text) return "";
  let out = normalizeLiteracyTextForSpeech(text);
  // Remove qualquer símbolo/pictograma/emoji unicode
  out = out.replace(/\p{Extended_Pictographic}/gu, " ");
  out = out.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, " ");
  // Separadores decorativos viram vírgula pra dar respiro
  out = out.replace(/[—–·•|→←↔✦✧★☆]/g, ",");
  // Colapsa espaços e vírgulas duplicadas
  out = out.replace(/\s*,\s*,+/g, ",");
  out = out.replace(/\s+/g, " ").replace(/\s+([,.!?;:])/g, "$1").trim();
  // Remove vírgula no fim
  out = out.replace(/[,\s]+$/g, "");
  return out;
}



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
let lastPtText = "";
let lastPtAt = 0;

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
    const normalized = text.trim();
    const now = Date.now();
    if (!opts.queue && normalized === lastPtText && now - lastPtAt < 1200) {
      opts.onEnd?.();
      resolve();
      return;
    }
    lastPtText = normalized;
    lastPtAt = now;
    if (!opts.queue) {
      speechRunId += 1;
      synth.cancel();
      resolveActiveSpeech();
    }
    const currentRunId = speechRunId;
    const chunks = chunkText(sanitizeForSpeech(text));
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
    if (chunks.length === 0) {
      finish();
      return;
    }
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
