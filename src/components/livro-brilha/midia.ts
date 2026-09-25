import toca from "@/assets/livro/cen-toca.jpg";
import floresta from "@/assets/livro/cen-floresta.jpg";
import lagoa from "@/assets/livro/cen-lagoa.jpg";
import colina from "@/assets/livro/cen-colina.jpg";
import fofaAlegre from "@/assets/livro/fofa-alegre.png";
import fofaTriste from "@/assets/livro/fofa-triste.png";
import fofaCuriosa from "@/assets/livro/fofa-curiosa.png";
import tico from "@/assets/livro/tico.png";
import sapo from "@/assets/livro/sapo.png";
import borboleta from "@/assets/livro/borboleta.png";
import bola from "@/assets/livro/bola.png";
import flor from "@/assets/livro/flor.png";
import type { Expressao, Som, Voz } from "./tipos";

/** Biblioteca de cenários — cresce conforme novas histórias. */
const todosCenarios = import.meta.glob("@/assets/livro/cen-*.jpg", { eager: true, import: "default" }) as Record<string, string>;
/** Biblioteca de cenários: chave = nome do arquivo sem "cen-" (ex.: "fundo-mar"). */
export const cenarios: Record<string, string> = {
  ...Object.fromEntries(Object.entries(todosCenarios).map(([k, v]) => [k.split("/cen-")[1]!.replace(".jpg", ""), v])),
  toca, floresta, lagoa, colina,
};

const imagens: Record<string, string | Partial<Record<Expressao, string>>> = {
  fofa: { alegre: fofaAlegre, triste: fofaTriste, curiosa: fofaCuriosa },
  tico,
  sapo,
  borboleta,
  bola,
  flor,
};

export function imagem(chave: string, expressao: Expressao = "alegre"): string {
  const v = imagens[chave];
  if (!v) return "";
  if (typeof v === "string") return v;
  return v[expressao] ?? v.alegre ?? "";
}

/** Voz de cada personagem: altura e velocidade. */
export const vozes: Record<Voz, { pitch: number; rate: number }> = {
  narrador: { pitch: 1.1, rate: 0.85 },
  fofa: { pitch: 1.35, rate: 0.95 },
  tico: { pitch: 1.8, rate: 1.05 },
  sapo: { pitch: 0.55, rate: 0.8 },
  objeto: { pitch: 1.1, rate: 0.8 },
};

let ctx: AudioContext | null = null;
function audio() {
  if (typeof window === "undefined") return null;
  ctx ??= new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  return ctx;
}

function nota(freq: number, ini: number, dur: number, tipo: OscillatorType = "sine", vol = 0.18, ate?: number) {
  const a = audio();
  if (!a) return;
  const t = a.currentTime + ini;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = tipo;
  o.frequency.setValueAtTime(freq, t);
  if (ate) o.frequency.exponentialRampToValueAtTime(ate, t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(a.destination);
  o.start(t);
  o.stop(t + dur + 0.05);
}

/** Efeitos sonoros curtos, gerados no navegador. */
export function tocarSom(s: Som) {
  switch (s) {
    case "toque": return nota(660, 0, 0.12, "triangle", 0.12);
    case "virar": return nota(420, 0, 0.1, "triangle", 0.1, 620);
    case "palma": return nota(180, 0, 0.08, "square", 0.08, 90);
    case "pista": nota(520, 0, 0.18, "sine", 0.12); return nota(440, 0.18, 0.25, "sine", 0.12);
    case "acerto": nota(523, 0, 0.15, "triangle"); nota(659, 0.12, 0.15, "triangle"); return nota(784, 0.24, 0.3, "triangle");
    case "festa": [523, 659, 784, 1046].forEach((f, i) => nota(f, i * 0.1, 0.3, "triangle")); return;
    case "pio": nota(2200, 0, 0.09, "sine", 0.12, 3200); return nota(2400, 0.14, 0.1, "sine", 0.12, 3400);
    case "coaxar": nota(140, 0, 0.18, "sawtooth", 0.1, 90); return nota(150, 0.25, 0.22, "sawtooth", 0.1, 85);
  }
}
