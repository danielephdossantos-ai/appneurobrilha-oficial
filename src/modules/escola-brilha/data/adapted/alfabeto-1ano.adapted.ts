import { ActivityLesson } from "../../types/activity-lesson";

/* ─── Alfabeto (EF01LP01) — variantes neuro ─── */

export const ALFABETO_TDAH: ActivityLesson = {
  id: "alfabeto-1ano-tdah",
  title: "Alfabeto",
  topic: "ALFABETO",
  subject: "Língua Portuguesa — 1º Ano (EF01LP01) · TDAH",
  xp: 100,
  screens: {
    explicacao: {
      instruction: "Vamos ver:",
      highlight: "O ALFABETO!",
      summary: "São 26 letras. Forma todas as palavras.",
      visual_emoji: "🔤",
    },
    exploracao: {
      instruction: "Letra → palavra.",
      pairs: [
        { left: "B", right: "BOLA ⚽" },
        { left: "C", right: "CASA 🏠" },
        { left: "F", right: "FLOR 🌸" },
      ],
    },
    explicacao_curta: {
      text: "Junta letras = palavra.",
      highlights: ["26 letras"],
      tip: "Letra + Letra = PALAVRA!",
    },
    exemplo_visual: {
      title: "Exemplo:",
      sentences: [
        { text: "C+A+S+A = CASA.", emoji: "🏠" },
      ],
      conclusion: "Letras viram palavras!",
    },
    praticar: {
      question: "Começa com qual letra",
      reference: "BOLA",
      options: [
        { text: "B", isCorrect: true, color: "green" },
        { text: "D", isCorrect: false, color: "red" },
      ],
    },
  },
};

export const ALFABETO_TEA: ActivityLesson = {
  id: "alfabeto-1ano-tea",
  title: "Alfabeto",
  topic: "ALFABETO",
  subject: "Língua Portuguesa — 1º Ano (EF01LP01) · TEA",
  xp: 100,
  screens: {
    explicacao: {
      instruction: "Passo 1 de 5. Vamos conhecer:",
      highlight: "O ALFABETO",
      summary: "O alfabeto tem 26 letras. Sempre a mesma quantidade.",
      visual_emoji: "🔤",
    },
    exploracao: {
      instruction: "Passo 2 de 5. Veja cada letra e a palavra.",
      pairs: [
        { left: "B", right: "BOLA" },
        { left: "C", right: "CASA" },
        { left: "D", right: "DADO" },
        { left: "F", right: "FLOR" },
      ],
    },
    explicacao_curta: {
      text: "Passo 3 de 5. Letras se juntam para formar palavras. Esta é a regra.",
      highlights: ["26 letras"],
      tip: "Ordem fixa: A, B, C, D...",
    },
    exemplo_visual: {
      title: "Passo 4 de 5. Observe a sequência:",
      sentences: [
        { text: "C, A, S, A formam a palavra CASA.", emoji: "🏠" },
      ],
      conclusion: "A ordem das letras forma a palavra.",
    },
    praticar: {
      question: "Passo 5 de 5. Com qual letra começa",
      reference: "BOLA",
      options: [
        { text: "A", isCorrect: false, color: "blue" },
        { text: "B", isCorrect: true, color: "green" },
        { text: "D", isCorrect: false, color: "blue" },
      ],
    },
  },
};

export const ALFABETO_DISLEXIA: ActivityLesson = {
  id: "alfabeto-1ano-dislexia",
  title: "Alfabeto",
  topic: "ALFABETO",
  subject: "Língua Portuguesa — 1º Ano (EF01LP01) · Dislexia",
  xp: 100,
  screens: {
    explicacao: {
      instruction: "Escute as letras:",
      highlight: "A · B · C ...",
      summary: "26 letrinhas. Cada uma tem um som.",
      visual_emoji: "🔤",
    },
    exploracao: {
      instruction: "Letra e imagem da palavra.",
      pairs: [
        { left: "B", right: "⚽ BO·LA" },
        { left: "C", right: "🏠 CA·SA" },
        { left: "D", right: "🎲 DA·DO" },
        { left: "F", right: "🌸 FLOR" },
      ],
    },
    explicacao_curta: {
      text: "Cada letra = um som.",
      highlights: ["som de cada letra"],
      tip: "Diga: Bê, Cê, Dê, Efe...",
    },
    exemplo_visual: {
      title: "Veja em pedaços:",
      sentences: [
        { text: "CA + SA = CA·SA.", emoji: "🏠" },
      ],
      conclusion: "Sons juntos viram palavra!",
    },
    praticar: {
      question: "Som inicial de",
      reference: "BO·LA",
      options: [
        { text: "B", isCorrect: true, color: "green" },
        { text: "D", isCorrect: false, color: "red" },
        { text: "A", isCorrect: false, color: "blue" },
      ],
    },
  },
};
