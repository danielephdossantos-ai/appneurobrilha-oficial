// Inglês 4º Ano — Unit 3 "Healthy Habits 🍎"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u4-a03-healthy",
  meta: {
    unitLabel: "Unit 3 · Lesson 3 — Healthy Habits 🍎",
    headerKicker: "My English Adventure — 4th Grade",
    coverKicker: "Saúde & qualidade de vida",
    coverTitle: "Healthy Habits 🍎",
    coverSubtitle:
      "Falar de saúde com Simple Present + Do/Does (perguntas e negativas).",
    storyTitle: "My Healthy Day",
    vocabularyTitle: "Health Words",
    speakingTargets: [
      "I always eat breakfast.",
      "She drinks water every day.",
      "We play sports.",
      "Do you exercise?",
      "He doesn't eat junk food.",
      "I sleep 9 hours a night.",
    ],
    listeningIntro: "Ouça a rotina saudável da Lily.",
    listeningQuestion: '"I drink 8 glasses of water." Quantos copos ela bebe?',
    listeningOptions: ["Cinco", "Oito", "Dez"],
    listeningCorrect: "Oito",
    listeningWrongHint: '"Eight" = oito.',
    readingNarration:
      'Do/Does ajudam a fazer PERGUNTAS e NEGATIVAS. DO com I/you/we/they. DOES com he/she/it.',
    grammarNarration:
      'Positivo: I eat / She eats. Negativo: I don\'t eat / She doesn\'t eat. Pergunta: Do you eat? / Does she eat? Depois de doesn\'t/does, o verbo volta ao original (sem -S).',
    finalProjectIntro: "Seu planner saudável! Escreva o nome:",
    finalProjectPhrase: (name: string) =>
      `HEALTHY WEEK PLANNER — ${name}. Monday: eat fruits. Tuesday: drink water. Wednesday: exercise. Thursday: sleep 9 hours. Friday: brush teeth. Saturday: play sports. Sunday: rest and read. I take care of my body every day!`,
    finalProjectSectionTitle: "Healthy Week Planner",
  },
  VOCAB: [
    { id: "b", en: "Breakfast 🥞", pt: "Café da manhã", img: IMG.MORNING },
    { id: "l", en: "Lunch 🍱", pt: "Almoço", img: IMG.CLASSROOM },
    { id: "d", en: "Dinner 🍽️", pt: "Jantar", img: IMG.EVENING },
    { id: "w", en: "Water 💧", pt: "Água", img: IMG.LILY },
    { id: "ex", en: "Exercise 🏃", pt: "Exercício", img: IMG.BEN },
    { id: "s", en: "Sleep 😴", pt: "Sono", img: IMG.LILY },
    { id: "h", en: "Hygiene 🧼", pt: "Higiene", img: IMG.LILY },
    { id: "v", en: "Vitamins 🍊", pt: "Vitaminas", img: IMG.RAINBOW },
  ],
  STORY: [
    { img: IMG.MORNING, en: "Lily wakes up at 7 am every day.", pt: "Lily acorda 7h todo dia." },
    { img: IMG.LILY, en: "She brushes her teeth and washes her face.", pt: "Escova os dentes e lava o rosto." },
    { img: IMG.MORNING, en: "She always eats a healthy breakfast: fruit, milk, and bread.", pt: "Sempre come café saudável: fruta, leite e pão." },
    { img: IMG.SCHOOL, en: "At school, she drinks water and eats lunch.", pt: "Na escola, bebe água e almoça." },
    { img: IMG.BEN, en: "In the afternoon, she plays sports with Ben.", pt: "À tarde, joga esportes com Ben." },
    { img: IMG.LILY, en: "She doesn't eat too much junk food.", pt: "Não come muita porcaria." },
    { img: IMG.EVENING, en: "At night, she has dinner with family.", pt: "À noite, janta com a família." },
    { img: IMG.LILY, en: "Lily sleeps 9 hours every night. Healthy life!", pt: "Lily dorme 9h toda noite. Vida saudável!" },
  ],
  DIALOG: [
    { who: "Ben", img: IMG.BEN, en: "Do you eat breakfast every day?", pt: "Você toma café todo dia?" },
    { who: "Lily", img: IMG.LILY, en: "Yes, I always do. It gives me energy.", pt: "Sim, sempre. Me dá energia." },
    { who: "Ben", img: IMG.BEN, en: "Does your brother exercise?", pt: "Seu irmão se exercita?" },
    { who: "Lily", img: IMG.LILY, en: "Yes, he does. He plays soccer.", pt: "Sim. Joga futebol." },
    { who: "Ben", img: IMG.BEN, en: "Do you drink soda?", pt: "Você toma refri?" },
    { who: "Lily", img: IMG.LILY, en: "No, I don't. I drink water and juice.", pt: "Não. Água e suco." },
    { who: "Ben", img: IMG.BEN, en: "Great habits!", pt: "Ótimos hábitos!" },
  ],
  READING: {
    title: "A Healthy Life",
    img: IMG.MORNING,
    parts: [
      { en: "I wake up early and drink water.", pt: "Acordo cedo e bebo água.", highlight: ["drink"] },
      { en: "I always eat fruit for breakfast.", pt: "Sempre como fruta no café.", highlight: ["eat"] },
      { en: "I don't eat too much candy.", pt: "Não como muito doce.", highlight: ["don't"] },
      { en: "I exercise three times a week.", pt: "Me exercito 3x na semana.", highlight: ["exercise"] },
      { en: "I sleep 9 hours every night.", pt: "Durmo 9h toda noite.", highlight: ["sleep"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ water every day. (beber)", answer: "drink", hint: "Verbo BEBER em inglês.", options: ["drink", "eat", "sleep"] },
    { prompt: "______ you exercise? (pergunta)", answer: "Do", hint: "Pergunta com I/you/we usa DO.", options: ["Do", "Does", "Is"] },
    { prompt: "She ______ eat vegetables. (negativo)", answer: "doesn't", hint: "3ª pessoa negativo.", options: ["doesn't", "don't", "isn't"] },
    { prompt: "He ______ sports. (jogar, 3ª pessoa)", answer: "plays", hint: "3ª pessoa + S.", options: ["plays", "play", "playing"] },
    { prompt: "I ______ 8 hours. (dormir)", answer: "sleep", hint: "Ação de dormir.", options: ["sleep", "wake", "eat"] },
  ],
  QUIZ: [
    { q: "'Breakfast' é:", options: [{ text: "Almoço" }, { text: "Café da manhã", correct: true }, { text: "Jantar" }] },
    { q: "Complete: ___ you eat fruit?", options: [{ text: "Do", correct: true }, { text: "Does" }, { text: "Is" }] },
    { q: "Complete: She ___ soda. (não bebe)", options: [{ text: "don't drink" }, { text: "doesn't drink", correct: true }, { text: "not drink" }] },
    { q: "'Water' é:", options: [{ text: "Água", correct: true }, { text: "Suco" }, { text: "Leite" }] },
    { q: "Complete: ___ he exercise?", options: [{ text: "Do" }, { text: "Does", correct: true }, { text: "Is" }] },
    { q: "'Sleep' significa:", options: [{ text: "Comer" }, { text: "Dormir", correct: true }, { text: "Correr" }] },
    { q: "'Exercise' é:", options: [{ text: "Descanso" }, { text: "Exercício", correct: true }, { text: "Comida" }] },
  ],
  REAL_LIFE: [
    { situation: "🍎 Falando o que come no café.", answer: "I eat fruit for breakfast." },
    { situation: "💧 Alguém pergunta se bebe água.", answer: "Yes, I drink water every day." },
    { situation: "🏃 Convidando pra fazer exercício.", answer: "Do you exercise with me?" },
    { situation: "❌ Falando o que não come.", answer: "I don't eat junk food." },
    { situation: "😴 Quantas horas dorme.", answer: "I sleep 9 hours a night." },
  ],
  GRAMMAR: {
    focus: "Simple Present + Do/Does (perguntas e negativas)",
    why:
      'Pra perguntar ou negar em Simple Present, precisamos de DO (I/you/we/they) ou DOES (he/she/it). Depois de does/doesn\'t, o verbo volta ao original (sem -S).',
    examples: [
      { en: "I eat breakfast. (positivo)", pt: "Como café." },
      { en: "I don't eat candy. (negativo)", pt: "Não como doce." },
      { en: "Do you drink water? (pergunta)", pt: "Você bebe água?" },
      { en: "She eats fruit. (positivo)", pt: "Ela come fruta." },
      { en: "She doesn't eat pizza. (negativo)", pt: "Ela não come pizza." },
      { en: "Does he exercise? (pergunta)", pt: "Ele se exercita?" },
    ],
    errors: [
      { wrong: "She don't eat.", right: "She DOESN'T eat.", why: "3ª pessoa usa DOESN'T." },
      { wrong: "Does she eats?", right: "Does she EAT?", why: "Depois de DOES, verbo sem -S." },
      { wrong: "You eats fruit?", right: "DO you eat fruit?", why: "Pergunta pede DO." },
    ],
  },
  SONG: {
    title: "Healthy Me",
    hookPt: "Cante e cuide da saúde!",
    verses: [
      { en: "Water, fruit, and sunshine bright,", pt: "Água, fruta e sol brilhante,", emoji: "☀️" },
      { en: "Sleep and exercise every night,", pt: "Sono e exercício toda noite,", emoji: "😴" },
      { en: "I don't eat candy all day long,", pt: "Não como doce o dia todo,", emoji: "❌" },
      { en: "Healthy habits make me strong!", pt: "Hábitos saudáveis me deixam forte!", emoji: "💪" },
      { en: "Do you drink water? Yes, I do!", pt: "Você bebe água? Sim!", emoji: "💧" },
      { en: "Does she exercise? Yes, she too!", pt: "Ela se exercita? Sim!", emoji: "🏃" },
    ],
  },
  HUNTER: {
    intro: "Escolha certo!",
    rounds: [
      { promptEn: "Complete: ___ you drink water?", promptPt: "Complete: ___ you drink water?", targetLabel: "Do", objects: [
        { id: "a", label: "Do", img: "", isTarget: true },
        { id: "b", label: "Does", img: "" },
        { id: "c", label: "Is", img: "" },
      ]},
      { promptEn: "Complete: She ___ eat candy.", promptPt: "Complete: She ___ eat candy.", targetLabel: "doesn't", objects: [
        { id: "a", label: "don't", img: "" },
        { id: "b", label: "doesn't", img: "", isTarget: true },
        { id: "c", label: "isn't", img: "" },
      ]},
      { promptEn: "'Water' é:", promptPt: "'Water' é:", targetLabel: "Água", objects: [
        { id: "a", label: "Leite", img: "" },
        { id: "b", label: "Água", img: "", isTarget: true },
        { id: "c", label: "Suco", img: "" },
      ]},
      { promptEn: "Complete: ___ he exercise?", promptPt: "Complete: ___ he exercise?", targetLabel: "Does", objects: [
        { id: "a", label: "Do", img: "" },
        { id: "b", label: "Does", img: "", isTarget: true },
        { id: "c", label: "Is", img: "" },
      ]},
      { promptEn: "'Sleep' é:", promptPt: "'Sleep' é:", targetLabel: "Dormir", objects: [
        { id: "a", label: "Correr", img: "" },
        { id: "b", label: "Dormir", img: "", isTarget: true },
        { id: "c", label: "Comer", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares saudáveis!",
    pairs: [
      { id: "a", en: "Breakfast 🥞", pt: "Café da manhã", img: IMG.MORNING },
      { id: "b", en: "Water 💧", pt: "Água", img: IMG.LILY },
      { id: "c", en: "Exercise 🏃", pt: "Exercício", img: IMG.BEN },
      { id: "d", en: "Sleep 😴", pt: "Sono", img: IMG.EVENING },
    ],
  },
  BOOK: {
    title: "Healthy Week Planner",
    intro: "Seu planner de saúde da semana!",
    pages: [
      { en: "Monday — Fruit day!", pt: "Segunda — Dia da fruta!", img: IMG.MORNING, badge: "🍎" },
      { en: "Tuesday — Water challenge!", pt: "Terça — Desafio da água!", img: IMG.LILY, badge: "💧" },
      { en: "Wednesday — Exercise day!", pt: "Quarta — Dia do exercício!", img: IMG.BEN, badge: "🏃" },
      { en: "Thursday — Sleep well!", pt: "Quinta — Durma bem!", img: IMG.EVENING, badge: "😴" },
      { en: "Friday — Brush teeth!", pt: "Sexta — Escove os dentes!", img: IMG.LILY, badge: "🪥" },
      { en: "Weekend — Play and rest!", pt: "Fim de semana — Brinque e descanse!", img: IMG.FRIENDS, badge: "🎉" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "A cozinha saudável! Toque nos itens.",
    img: IMG.CLASSROOM,
    items: [
      { en: "Apple", pt: "Maçã", emoji: "🍎" },
      { en: "Water bottle", pt: "Garrafa de água", emoji: "💧" },
      { en: "Vegetables", pt: "Legumes", emoji: "🥦" },
      { en: "Orange juice", pt: "Suco de laranja", emoji: "🍊" },
      { en: "Toothbrush", pt: "Escova de dente", emoji: "🪥" },
      { en: "Yoga mat", pt: "Colchonete", emoji: "🧘" },
    ],
  },
  CULTURE: {
    title: "Healthy Foods Around the World 🌍",
    emoji: "🥗",
    paragraphs: [
      { en: "In Japan, people eat a lot of fish and vegetables. It's very healthy!", pt: "No Japão, comem muito peixe e vegetais. Muito saudável!" },
      { en: "In Italy, the Mediterranean diet uses olive oil, tomatoes, and pasta.", pt: "Na Itália, a dieta mediterrânea usa azeite, tomate e macarrão." },
      { pt: "Cada país tem seus favoritos — mas todo mundo precisa de água, fruta e sono!" },
    ],
  },
};

export default lesson;
