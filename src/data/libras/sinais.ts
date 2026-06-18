// Dados do módulo LIBRAS (MVP enxuto)
// Imagens null = ainda não geradas (placeholder será mostrado)
import letraA from "@/assets/libras/letras/a.png";
import familiaMae from "@/assets/libras/familia/mae.png";

export type TrilhaSlug = "alfabeto" | "familia" | "cores";

export interface Sinal {
  id: string;
  nome: string;          // narrado via TTS (crianças não alfabetizadas)
  imagem: string | null; // imagem do sinal (mão/letra) ou da palavra
  nivel: 1 | 2 | 3;      // progressão
}

export interface Trilha {
  slug: TrilhaSlug;
  nome: string;
  descricao: string;
  cor: string;
  bg: string;
  sinais: Sinal[];
}

export const TRILHAS: Trilha[] = [
  {
    slug: "alfabeto",
    nome: "Alfabeto",
    descricao: "Letras A até J",
    cor: "text-sky-600",
    bg: "from-sky-100 to-cyan-100",
    sinais: [
      { id: "a", nome: "A", imagem: letraA, nivel: 1 },
      { id: "b", nome: "B", imagem: null, nivel: 1 },
      { id: "c", nome: "C", imagem: null, nivel: 1 },
      { id: "d", nome: "D", imagem: null, nivel: 2 },
      { id: "e", nome: "E", imagem: null, nivel: 2 },
      { id: "f", nome: "F", imagem: null, nivel: 2 },
      { id: "g", nome: "G", imagem: null, nivel: 3 },
      { id: "h", nome: "H", imagem: null, nivel: 3 },
      { id: "i", nome: "I", imagem: null, nivel: 3 },
      { id: "j", nome: "J", imagem: null, nivel: 3 },
    ],
  },
  {
    slug: "familia",
    nome: "Família",
    descricao: "Pessoas importantes",
    cor: "text-rose-600",
    bg: "from-rose-100 to-pink-100",
    sinais: [
      { id: "mae", nome: "Mãe", imagem: familiaMae, nivel: 1 },
      { id: "pai", nome: "Pai", imagem: null, nivel: 1 },
      { id: "irmao", nome: "Irmão", imagem: null, nivel: 2 },
      { id: "vovo", nome: "Vovó", imagem: null, nivel: 3 },
      { id: "vovoo", nome: "Vovô", imagem: null, nivel: 3 },
    ],
  },
  {
    slug: "cores",
    nome: "Cores",
    descricao: "Cores do mundo",
    cor: "text-amber-600",
    bg: "from-amber-100 to-yellow-100",
    sinais: [
      { id: "vermelho", nome: "Vermelho", imagem: null, nivel: 1 },
      { id: "azul", nome: "Azul", imagem: null, nivel: 1 },
      { id: "amarelo", nome: "Amarelo", imagem: null, nivel: 2 },
      { id: "verde", nome: "Verde", imagem: null, nivel: 2 },
      { id: "rosa", nome: "Rosa", imagem: null, nivel: 3 },
    ],
  },
];

export function getTrilha(slug: TrilhaSlug): Trilha | undefined {
  return TRILHAS.find((t) => t.slug === slug);
}

export function falar(texto: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texto);
    u.lang = "pt-BR";
    u.rate = 0.95;
    u.pitch = 1.15;
    window.speechSynthesis.speak(u);
  } catch {
    /* ignore */
  }
}
