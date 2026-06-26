import { ActivityLesson } from "../../types/activity-lesson";

/* ─── Sílabas (EF01LP06) — variantes neuro ─── */

export const SILABAS_TDAH: ActivityLesson = {
  id: "silabas-1ano-tdah",
  title: "Sílabas",
  topic: "SÍLABAS",
  subject: "Língua Portuguesa — 1º Ano (EF01LP06) · TDAH",
  xp: 110,
  screens: {
    explicacao: {
      instruction: "Olha só:",
      highlight: "SÍLABAS!",
      summary: "Pedaço da palavra. Bate palma!",
      visual_emoji: "👏",
    },
    exploracao: {
      instruction: "Palma a cada pedaço:",
      pairs: [
        { left: "BO-LA", right: "2 ⚽" },
        { left: "CA-SA", right: "2 🏠" },
        { left: "BO-NE-CA", right: "3 🪆" },
      ],
    },
    explicacao_curta: {
      text: "1 palma = 1 sílaba.",
      highlights: ["palma = sílaba"],
      tip: "Bateu? Contou!",
    },
    exemplo_visual: {
      title: "Exemplo:",
      sentences: [
        { text: "BO + LA = BOLA.", emoji: "⚽" },
      ],
      conclusion: "2 palmas = 2 sílabas!",
    },
    praticar: {
      question: "Sílabas em",
      reference: "CASA",
      options: [
        { text: "2", isCorrect: true, color: "green" },
        { text: "3", isCorrect: false, color: "red" },
      ],
    },
  },
};

export const SILABAS_TEA: ActivityLesson = {
  id: "silabas-1ano-tea",
  title: "Sílabas",
  topic: "SÍLABAS",
  subject: "Língua Portuguesa — 1º Ano (EF01LP06) · TEA",
  xp: 110,
  screens: {
    explicacao: {
      instruction: "Passo 1 de 5. Vamos estudar:",
      highlight: "AS SÍLABAS",
      summary: "Sílaba é um pedaço da palavra. Cada palavra tem uma quantidade fixa de sílabas.",
      visual_emoji: "👏",
    },
    exploracao: {
      instruction: "Passo 2 de 5. Conte os pedaços de cada palavra.",
      pairs: [
        { left: "BO-LA", right: "2 sílabas" },
        { left: "CA-SA", right: "2 sílabas" },
        { left: "BO-NE-CA", right: "3 sílabas" },
      ],
    },
    explicacao_curta: {
      text: "Passo 3 de 5. Cada palma representa uma sílaba. Esta regra é sempre a mesma.",
      highlights: ["1 palma = 1 sílaba"],
      tip: "Conte as palmas.",
    },
    exemplo_visual: {
      title: "Passo 4 de 5. Observe:",
      sentences: [
        { text: "BO + LA = BOLA.", emoji: "⚽" },
        { text: "Duas palmas. Duas sílabas.", emoji: "👏" },
      ],
      conclusion: "Total: 2 sílabas.",
    },
    praticar: {
      question: "Passo 5 de 5. Quantas sílabas tem",
      reference: "CASA",
      options: [
        { text: "1", isCorrect: false, color: "blue" },
        { text: "2", isCorrect: true, color: "green" },
        { text: "3", isCorrect: false, color: "blue" },
      ],
    },
  },
};

export const SILABAS_DISLEXIA: ActivityLesson = {
  id: "silabas-1ano-dislexia",
  title: "Sílabas",
  topic: "SÍLABAS",
  subject: "Língua Portuguesa — 1º Ano (EF01LP06) · Dislexia",
  xp: 110,
  screens: {
    explicacao: {
      instruction: "Escute e divida:",
      highlight: "SÍ·LA·BAS",
      summary: "Pedacinhos da palavra. Bata palma em cada um.",
      visual_emoji: "👏",
    },
    exploracao: {
      instruction: "Diga e bata palma:",
      pairs: [
        { left: "⚽ BO·LA", right: "👏👏 (2)" },
        { left: "🏠 CA·SA", right: "👏👏 (2)" },
        { left: "🪆 BO·NE·CA", right: "👏👏👏 (3)" },
      ],
    },
    explicacao_curta: {
      text: "Bata palma = conte sílabas.",
      highlights: ["palma = sílaba"],
      tip: "BO·LA → BO (palma) LA (palma) = 2.",
    },
    exemplo_visual: {
      title: "Veja em pedaços:",
      sentences: [
        { text: "BO·LA → BO + LA.", emoji: "⚽" },
        { text: "Duas palmas, duas sílabas.", emoji: "👏" },
      ],
      conclusion: "BO·LA tem 2 sílabas.",
    },
    praticar: {
      question: "Quantas sílabas em",
      reference: "CA·SA",
      options: [
        { text: "2", isCorrect: true, color: "green" },
        { text: "1", isCorrect: false, color: "red" },
        { text: "3", isCorrect: false, color: "blue" },
      ],
    },
  },
};
