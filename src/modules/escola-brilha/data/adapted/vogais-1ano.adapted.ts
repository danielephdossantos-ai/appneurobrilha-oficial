import { ActivityLesson } from "../../types/activity-lesson";

/* ─── Vogais (EF01LP04) — variantes neuro ─── */

export const VOGAIS_TDAH: ActivityLesson = {
  id: "vogais-1ano-tdah",
  title: "Vogais",
  topic: "VOGAIS",
  subject: "Língua Portuguesa — 1º Ano (EF01LP04) · TDAH",
  xp: 100,
  screens: {
    explicacao: {
      instruction: "Olha só:",
      highlight: "AS VOGAIS!",
      summary: "Vogais são 5: A E I O U.",
      visual_emoji: "🅰️",
    },
    exploracao: {
      instruction: "Uma vogal de cada vez.",
      pairs: [
        { left: "A", right: "ABELHA 🐝" },
        { left: "E", right: "ELEFANTE 🐘" },
        { left: "U", right: "UVA 🍇" },
      ],
    },
    explicacao_curta: {
      text: "Toda palavra tem vogal.",
      highlights: ["A E I O U"],
      tip: "Conte nos dedos: 5!",
    },
    exemplo_visual: {
      title: "Veja:",
      sentences: [
        { text: "ABELHA → A.", emoji: "🐝" },
        { text: "UVA → U.", emoji: "🍇" },
      ],
      conclusion: "Cada palavra começa com uma vogal.",
    },
    praticar: {
      question: "Primeira vogal de",
      reference: "ELEFANTE",
      options: [
        { text: "E", isCorrect: true, color: "green" },
        { text: "A", isCorrect: false, color: "red" },
      ],
    },
  },
};

export const VOGAIS_TEA: ActivityLesson = {
  id: "vogais-1ano-tea",
  title: "Vogais",
  topic: "VOGAIS",
  subject: "Língua Portuguesa — 1º Ano (EF01LP04) · TEA",
  xp: 100,
  screens: {
    explicacao: {
      instruction: "Passo 1 de 5. Vamos aprender:",
      highlight: "AS VOGAIS",
      summary: "Existem cinco vogais: A, E, I, O, U. Sempre as mesmas cinco.",
      visual_emoji: "🅰️",
    },
    exploracao: {
      instruction: "Passo 2 de 5. Observe cada vogal e a palavra.",
      pairs: [
        { left: "A", right: "ABELHA" },
        { left: "E", right: "ELEFANTE" },
        { left: "I", right: "IGREJA" },
        { left: "O", right: "OVO" },
        { left: "U", right: "UVA" },
      ],
    },
    explicacao_curta: {
      text: "Passo 3 de 5. Toda palavra tem pelo menos uma vogal. Esta regra não muda.",
      highlights: ["A, E, I, O, U"],
      tip: "Total de vogais: 5.",
    },
    exemplo_visual: {
      title: "Passo 4 de 5. Observe:",
      sentences: [
        { text: "ABELHA começa com a vogal A.", emoji: "🐝" },
        { text: "UVA começa com a vogal U.", emoji: "🍇" },
      ],
      conclusion: "Cada palavra começa com uma vogal específica.",
    },
    praticar: {
      question: "Passo 5 de 5. Qual é a primeira vogal de",
      reference: "ELEFANTE",
      options: [
        { text: "A", isCorrect: false, color: "blue" },
        { text: "E", isCorrect: true, color: "green" },
        { text: "O", isCorrect: false, color: "blue" },
      ],
    },
  },
};

export const VOGAIS_DISLEXIA: ActivityLesson = {
  id: "vogais-1ano-dislexia",
  title: "Vogais",
  topic: "VOGAIS",
  subject: "Língua Portuguesa — 1º Ano (EF01LP04) · Dislexia",
  xp: 100,
  screens: {
    explicacao: {
      instruction: "Escute e veja:",
      highlight: "A · E · I · O · U",
      summary: "Cinco vogais. Toque para ouvir cada som.",
      visual_emoji: "🅰️",
    },
    exploracao: {
      instruction: "Veja a letra e a imagem.",
      pairs: [
        { left: "A", right: "🐝 A·BE·LHA" },
        { left: "E", right: "🐘 E·LE·FAN·TE" },
        { left: "I", right: "⛪ I·GRE·JA" },
        { left: "O", right: "🥚 O·VO" },
        { left: "U", right: "🍇 U·VA" },
      ],
    },
    explicacao_curta: {
      text: "Vogal = som aberto.",
      highlights: ["A E I O U"],
      tip: "Diga em voz alta: AAA, EEE, III, OOO, UUU.",
    },
    exemplo_visual: {
      title: "Veja com sílabas:",
      sentences: [
        { text: "A·BE·LHA — começa com A.", emoji: "🐝" },
        { text: "U·VA — começa com U.", emoji: "🍇" },
      ],
      conclusion: "A vogal vem primeiro.",
    },
    praticar: {
      question: "Primeira vogal de",
      reference: "E·LE·FAN·TE",
      options: [
        { text: "E", isCorrect: true, color: "green" },
        { text: "A", isCorrect: false, color: "red" },
        { text: "O", isCorrect: false, color: "blue" },
      ],
    },
  },
};
