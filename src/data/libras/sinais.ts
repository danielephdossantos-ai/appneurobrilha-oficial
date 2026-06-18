// Dados do módulo LIBRAS (MVP enxuto)
import letraA from "@/assets/libras/letras/a.png";
import letraB from "@/assets/libras/letras/b.png";
import letraC from "@/assets/libras/letras/c.png";
import letraD from "@/assets/libras/letras/d.png";
import letraE from "@/assets/libras/letras/e.png";
import letraF from "@/assets/libras/letras/f.png";
import letraG from "@/assets/libras/letras/g.png";
import letraH from "@/assets/libras/letras/h.png";
import letraI from "@/assets/libras/letras/i.png";
import letraJ from "@/assets/libras/letras/j.png";
import familiaMae from "@/assets/libras/familia/mae.png";
import familiaPai from "@/assets/libras/familia/pai.png";
import familiaIrmao from "@/assets/libras/familia/irmao.png";
import familiaVovo from "@/assets/libras/familia/vovo.png";
import familiaVovoo from "@/assets/libras/familia/vovoo.png";
import corVermelho from "@/assets/libras/cores/vermelho.png";
import corAzul from "@/assets/libras/cores/azul.png";
import corAmarelo from "@/assets/libras/cores/amarelo.png";
import corVerde from "@/assets/libras/cores/verde.png";
import corRosa from "@/assets/libras/cores/rosa.png";

export type TrilhaSlug = "alfabeto" | "familia" | "cores";

export interface Sinal {
  id: string;
  nome: string;
  imagem: string | null;
  nivel: 1 | 2 | 3;
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
      { id: "b", nome: "B", imagem: letraB, nivel: 1 },
      { id: "c", nome: "C", imagem: letraC, nivel: 1 },
      { id: "d", nome: "D", imagem: letraD, nivel: 2 },
      { id: "e", nome: "E", imagem: letraE, nivel: 2 },
      { id: "f", nome: "F", imagem: letraF, nivel: 2 },
      { id: "g", nome: "G", imagem: letraG, nivel: 3 },
      { id: "h", nome: "H", imagem: letraH, nivel: 3 },
      { id: "i", nome: "I", imagem: letraI, nivel: 3 },
      { id: "j", nome: "J", imagem: letraJ, nivel: 3 },
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
      { id: "pai", nome: "Pai", imagem: familiaPai, nivel: 1 },
      { id: "irmao", nome: "Irmão", imagem: familiaIrmao, nivel: 2 },
      { id: "vovo", nome: "Vovó", imagem: familiaVovo, nivel: 3 },
      { id: "vovoo", nome: "Vovô", imagem: familiaVovoo, nivel: 3 },
    ],
  },
  {
    slug: "cores",
    nome: "Cores",
    descricao: "Cores do mundo",
    cor: "text-amber-600",
    bg: "from-amber-100 to-yellow-100",
    sinais: [
      { id: "vermelho", nome: "Vermelho", imagem: corVermelho, nivel: 1 },
      { id: "azul", nome: "Azul", imagem: corAzul, nivel: 1 },
      { id: "amarelo", nome: "Amarelo", imagem: corAmarelo, nivel: 2 },
      { id: "verde", nome: "Verde", imagem: corVerde, nivel: 2 },
      { id: "rosa", nome: "Rosa", imagem: corRosa, nivel: 3 },
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
