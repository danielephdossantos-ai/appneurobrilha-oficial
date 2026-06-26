import { ActivityLesson } from "../../types/activity-lesson";

/* ─── Rimas (EF01LP09) — variantes neuro ─── */

export const RIMAS_TDAH: ActivityLesson = {
  id: "rimas-1ano-tdah",
  title: "Rimas",
  topic: "RIMAS",
  subject: "Língua Portuguesa — 1º Ano (EF01LP09) · TDAH",
  xp: 110,
  screens: {
    explicacao: {
      instruction: "Vamos brincar:",
      highlight: "RIMAS!",
      summary: "Som igual no fim = rima.",
      visual_emoji: "🎵",
    },
    exploracao: {
      instruction: "Escuta o fim:",
      pairs: [
        { left: "PATO 🦆", right: "GATO 🐱" },
        { left: "MÃO ✋", right: "PÃO 🍞" },
        { left: "FLOR 🌸", right: "COR 🎨" },
      ],
    },
    explicacao_curta: {
      text: "Termina igual? Rima!",
      highlights: ["fim igual"],
      tip: "PATO–GATO. Igual no fim!",
    },
    exemplo_visual: {
      title: "Veja:",
      sentences: [
        { text: "PATO termina -ATO.", emoji: "🦆" },
        { text: "GATO também.", emoji: "🐱" },
      ],
      conclusion: "Rima!",
    },
    praticar: {
      question: "Rima com",
      reference: "PÃO",
      options: [
        { text: "MÃO", isCorrect: true, color: "green" },
        { text: "BOLA", isCorrect: false, color: "red" },
      ],
    },
  },
};

export const RIMAS_TEA: ActivityLesson = {
  id: "rimas-1ano-tea",
  title: "Rimas",
  topic: "RIMAS",
  subject: "Língua Portuguesa — 1º Ano (EF01LP09) · TEA",
  xp: 110,
  screens: {
    explicacao: {
      instruction: "Passo 1 de 5. Vamos estudar:",
      highlight: "AS RIMAS",
      summary: "Rima acontece quando duas palavras terminam com o mesmo som. Sempre.",
      visual_emoji: "🎵",
    },
    exploracao: {
      instruction: "Passo 2 de 5. Observe as duplas que rimam.",
      pairs: [
        { left: "PATO", right: "GATO" },
        { left: "MÃO", right: "PÃO" },
        { left: "FLOR", right: "COR" },
      ],
    },
    explicacao_curta: {
      text: "Passo 3 de 5. Se o fim é igual, é rima. Esta regra é fixa.",
      highlights: ["mesmo som no final"],
      tip: "Final igual = rima.",
    },
    exemplo_visual: {
      title: "Passo 4 de 5. Observe o final:",
      sentences: [
        { text: "PATO termina com -ATO.", emoji: "🦆" },
        { text: "GATO termina com -ATO.", emoji: "🐱" },
      ],
      conclusion: "Por isso PATO e GATO rimam.",
    },
    praticar: {
      question: "Passo 5 de 5. Qual rima com",
      reference: "PÃO",
      options: [
        { text: "MÃO", isCorrect: true, color: "green" },
        { text: "BOLA", isCorrect: false, color: "blue" },
        { text: "CASA", isCorrect: false, color: "blue" },
      ],
    },
  },
};

export const RIMAS_DISLEXIA: ActivityLesson = {
  id: "rimas-1ano-dislexia",
  title: "Rimas",
  topic: "RIMAS",
  subject: "Língua Portuguesa — 1º Ano (EF01LP09) · Dislexia",
  xp: 110,
  screens: {
    explicacao: {
      instruction: "Escute o final:",
      highlight: "RI·MAS",
      summary: "Sons parecidos no fim das palavras.",
      visual_emoji: "🎵",
    },
    exploracao: {
      instruction: "Repita em voz alta:",
      pairs: [
        { left: "🦆 PA·TO", right: "🐱 GA·TO" },
        { left: "✋ MÃO", right: "🍞 PÃO" },
        { left: "🌸 FLOR", right: "🎨 COR" },
      ],
    },
    explicacao_curta: {
      text: "Som final igual = rima.",
      highlights: ["som final"],
      tip: "PA·TO / GA·TO → -ATO!",
    },
    exemplo_visual: {
      title: "Veja em sílabas:",
      sentences: [
        { text: "PA·TO → fim -ATO.", emoji: "🦆" },
        { text: "GA·TO → fim -ATO.", emoji: "🐱" },
      ],
      conclusion: "Fim igual: rima!",
    },
    praticar: {
      question: "Rima com",
      reference: "PÃO",
      options: [
        { text: "MÃO", isCorrect: true, color: "green" },
        { text: "BO·LA", isCorrect: false, color: "red" },
        { text: "CA·SA", isCorrect: false, color: "blue" },
      ],
    },
  },
};
