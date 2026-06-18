import { Lesson } from "../types/lesson";

export { MATH_1ANO_LESSON } from "./math-1ano";
export { PORTUGUES_1ANO_LESSON } from "./portugues-1ano";


export const PORTUGUES_2ANO_LESSON: Lesson = {
  id: "alfabetizacao-consolidacao",
  title: "Consolidando a Leitura",
  bncc_field: "lingua_portuguesa",
  skill_bncc: "EF02LP01",
  steps: [
    {
      id: "p1",
      phase: "explanation",
      type: "explanation",
      mascot: "pip",
      speech: "Leia a frase com atenção.",
      elements: [
        {
          id: "f1",
          type: "text",
          content: "O cachorro corre.",
          position: { x: 0, y: 0 },
          animation: "pop",
          delay: 0.5,
        },
      ],
    },
    {
      id: "p2",
      phase: "practice",
      type: "interaction",
      mascot: "pipa",
      speech: "Quem corre?",
      elements: [
        {
          id: "ref-f1",
          type: "text",
          content: "O cachorro corre.",
          position: { x: 0, y: -40 },
          animation: "fade",
          delay: 0.2,
        },
      ],
      interaction: {
        type: "click",
        correctAnswer: "Cachorro",
        options: ["Cachorro", "Gato", "Pássaro"],
      },
    },
    {
      id: "p3",
      phase: "practice",
      type: "interaction",
      mascot: "pip",
      speech: "Vamos formar a palavra BOLA. Qual sílaba falta?",
      elements: [
        {
          id: "bo",
          type: "text",
          content: "BO",
          position: { x: -30, y: 0 },
          animation: "pop",
          delay: 0.2,
        },
        {
          id: "la-gap",
          type: "text",
          content: "__",
          position: { x: 30, y: 0 },
          animation: "pop",
          delay: 0.4,
        },
      ],
      interaction: { type: "click", correctAnswer: "LA", options: ["LA", "MA", "PA"] },
    },
    {
      id: "p4",
      phase: "practice",
      type: "interaction",
      mascot: "pipa",
      speech: "Qual destas palavras está escrita corretamente?",
      interaction: { type: "click", correctAnswer: "CASA", options: ["CASA", "KAZA", "CAZA"] },
    },
    {
      id: "p5",
      phase: "practice",
      type: "interaction",
      mascot: "pip",
      speech: "Separe as sílabas da palavra JANELA.",
      interaction: {
        type: "click",
        correctAnswer: "JA-NE-LA",
        options: ["JA-NE-LA", "JAN-EL-A", "JANE-LA"],
      },
    },
  ],
};

/* MATH_1ANO_LESSON foi movida para ./math-1ano.ts (banco com 30 atividades + rotação). */



export const MATH_2ANO_LESSON: Lesson = {
  id: "matematica-2ano",
  title: "Matemática do 2º Ano",
  bncc_field: "matematica",
  skill_bncc: "EF02MA01",
  steps: [
    {
      id: "mt1",
      phase: "practice",
      type: "interaction",
      mascot: "pip",
      speech: "Qual é o resultado de 10 mais 5?",
      elements: [
        {
          id: "eq1",
          type: "text",
          content: "10 + 5 = ?",
          position: { x: 0, y: 0 },
          animation: "pop",
          delay: 0.2,
        },
      ],
      interaction: { type: "click", correctAnswer: "15", options: ["12", "15", "20"] },
    },
    {
      id: "mt2",
      phase: "practice",
      type: "interaction",
      mascot: "pipa",
      speech: "Temos 8 lápis e perdemos 3. Quantos restam?",
      elements: [
        {
          id: "eq2",
          type: "text",
          content: "8 - 3 = ?",
          position: { x: 0, y: 0 },
          animation: "pop",
          delay: 0.2,
        },
      ],
      interaction: { type: "click", correctAnswer: "5", options: ["4", "5", "6"] },
    },
    {
      id: "mt3",
      phase: "practice",
      type: "interaction",
      mascot: "pip",
      speech: "Qual número completa a sequência: 10, 20, 30...",
      interaction: { type: "click", correctAnswer: "40", options: ["35", "40", "50"] },
    },
    {
      id: "mt4",
      phase: "practice",
      type: "interaction",
      mascot: "pipa",
      speech: "Qual destes objetos é usado para medir o comprimento?",
      interaction: {
        type: "click",
        correctAnswer: "Régua",
        options: ["Régua", "Relógio", "Balança"],
      },
    },
    {
      id: "mt5",
      phase: "practice",
      type: "interaction",
      mascot: "pip",
      speech: "Observe o gráfico. Qual fruta é a favorita?",
      elements: [
        {
          id: "gr1",
          type: "text",
          content: "Maca: 5 | Banana: 3",
          position: { x: 0, y: 0 },
          animation: "pop",
          delay: 0.2,
        },
      ],
      interaction: { type: "click", correctAnswer: "Maçã", options: ["Maçã", "Banana"] },
    },
  ],
};

export const LANG_LESSON: Lesson = {
  id: "brincando-com-rimas",
  title: "Brincando com Rimas",
  bncc_field: "escuta_fala",
  skill_bncc: "EI03EF02",
  steps: [
    {
      id: "r1",
      phase: "explanation",
      type: "explanation",
      mascot: "pip",
      speech: "Vamos descobrir as rimas!",
      elements: [
        {
          id: "c",
          type: "text",
          content: "casa",
          position: { x: -60, y: 0 },
          animation: "bounce",
          delay: 0.3,
        },
        {
          id: "a",
          type: "text",
          content: "asa",
          position: { x: 60, y: 0 },
          animation: "bounce",
          delay: 0.7,
        },
      ],
    },
    {
      id: "r2",
      phase: "practice",
      type: "interaction",
      mascot: "pipa",
      speech: "O que rima com CASA?",
      elements: [
        {
          id: "ref",
          type: "text",
          content: "casa",
          position: { x: 0, y: 0 },
          animation: "pop",
          delay: 0.2,
        },
      ],
      interaction: { type: "click", correctAnswer: "asa", options: ["bola", "asa"] },
    },
  ],
};
