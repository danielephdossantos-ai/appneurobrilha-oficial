import { useCallback, useEffect, useRef, useState } from "react";

// Reconhecimento de voz nativo (Web Speech API, pt-BR).
// Funciona em Chrome/Edge/Safari recentes. Não exige chave de API.

type AnyWindow = Window & {
  SpeechRecognition?: any;
  webkitSpeechRecognition?: any;
};

export type SpeechMatchResult = {
  transcript: string;
  matched: boolean;
  similarity: number;
};

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9 ]/g, "")
    .trim();
}

function levenshtein(a: string, b: string) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[a.length][b.length];
}

export function compareSpeech(spoken: string, target: string): SpeechMatchResult {
  const s = normalize(spoken);
  const t = normalize(target);
  if (!s || !t) return { transcript: spoken, matched: false, similarity: 0 };

  // Se a palavra-alvo aparece em qualquer trecho do que foi dito → aceita.
  if (s.includes(t)) return { transcript: spoken, matched: true, similarity: 1 };

  // Similaridade por trecho mais próximo
  const words = s.split(/\s+/);
  let best = 0;
  for (const w of words) {
    const dist = levenshtein(w, t);
    const sim = 1 - dist / Math.max(w.length, t.length);
    if (sim > best) best = sim;
  }
  // Tolerância: 0.6 = aceita pronúncia parcial / com erro de criança
  return { transcript: spoken, matched: best >= 0.6, similarity: best };
}

export function useSpeechMatcher() {
  const [isListening, setIsListening] = useState(false);
  const [supported, setSupported] = useState(true);
  const recRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as AnyWindow;
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
    setSupported(Boolean(SR));
  }, []);

  const listen = useCallback(
    (target: string, opts?: { timeoutMs?: number }) =>
      new Promise<SpeechMatchResult>((resolve) => {
        const w = window as AnyWindow;
        const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
        if (!SR) {
          resolve({ transcript: "", matched: false, similarity: 0 });
          return;
        }
        const rec = new SR();
        rec.lang = "pt-BR";
        rec.continuous = false;
        rec.interimResults = false;
        rec.maxAlternatives = 3;

        let resolved = false;
        const finish = (r: SpeechMatchResult) => {
          if (resolved) return;
          resolved = true;
          setIsListening(false);
          try {
            rec.stop();
          } catch {}
          resolve(r);
        };

        rec.onresult = (ev: any) => {
          const alts: string[] = [];
          for (let i = 0; i < ev.results[0].length; i++) alts.push(ev.results[0][i].transcript);
          // Pega o melhor entre as alternativas
          let best: SpeechMatchResult = {
            transcript: alts[0] || "",
            matched: false,
            similarity: 0,
          };
          for (const a of alts) {
            const cmp = compareSpeech(a, target);
            if (cmp.similarity > best.similarity) best = cmp;
            if (cmp.matched) {
              best = cmp;
              break;
            }
          }
          finish(best);
        };
        rec.onerror = (ev: any) => {
          console.error("[SpeechMatcher] erro:", ev?.error);
          finish({ transcript: "", matched: false, similarity: 0 });
        };
        rec.onend = () => {
          if (!resolved) finish({ transcript: "", matched: false, similarity: 0 });
        };

        recRef.current = rec;
        setIsListening(true);
        try {
          rec.start();
        } catch (e) {
          console.error("[SpeechMatcher] start falhou:", e);
          finish({ transcript: "", matched: false, similarity: 0 });
        }

        const timeout = opts?.timeoutMs ?? 6000;
        setTimeout(() => finish({ transcript: "", matched: false, similarity: 0 }), timeout);
      }),
    [],
  );

  const cancel = useCallback(() => {
    try {
      recRef.current?.abort?.();
    } catch {}
    setIsListening(false);
  }, []);

  return { listen, cancel, isListening, supported };
}
