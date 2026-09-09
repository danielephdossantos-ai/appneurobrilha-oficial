// Inglês 5º Ano — Unit 3 "Healthy Life and Sports ⚽"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u5-a03-science",
  meta: {
    unitLabel: "Unit 3 · Lesson 3 — Healthy Life and Sports ⚽",
    headerKicker: "My English Portfolio — Level 2 · 5th Grade",
    coverKicker: "Saúde, alimentação & esportes",
    coverTitle: "Healthy Life and Sports ⚽",
    coverSubtitle:
      "Falar de saúde e hábitos — I can run fast. You should eat fruits. You shouldn't eat too much candy.",
    storyTitle: "Ben's Healthy Day",
    vocabularyTitle: "Health & Sports",
    speakingTargets: [
      "I can run very fast.",
      "You should eat fruits every day.",
      "You shouldn't drink too much soda.",
      "I play soccer twice a week.",
      "My favorite sport is basketball.",
      "Exercise is good for you.",
    ],
    listeningIntro: "Ouça o médico dar um conselho.",
    listeningQuestion: 'O médico disse: "You should eat vegetables every day." Ele recomenda…',
    listeningOptions: ["comer doces", "comer vegetais", "não comer nada"],
    listeningCorrect: "comer vegetais",
    listeningWrongHint: '"Vegetables" = vegetais.',
    readingNarration:
      "CAN mostra habilidade (I CAN run). SHOULD é conselho — o que é RECOMENDADO fazer. SHOULDN'T = o que você NÃO DEVE fazer.",
    grammarNarration:
      "CAN + verbo = habilidade / permissão. SHOULD + verbo = conselho positivo (você deveria). SHOULDN'T + verbo = conselho negativo (você não deveria). Depois de CAN e SHOULD, o verbo vem SEM 'to'.",
    finalProjectIntro: "Vamos criar seu desafio saudável! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `HEALTHY CHALLENGE — by ${name}. Hello! I want to be healthy. I can play soccer and I can run fast. You should eat fruits and vegetables every day. You should drink water. You shouldn't eat too much candy. Exercise is important! Take my challenge: 30 minutes of sport every day!`,
    finalProjectSectionTitle: "My Healthy Challenge",
  },
  VOCAB: [
    { id: "food", en: "Healthy food 🥗", pt: "Comida saudável", img: IMG.BAKERY },
    { id: "exercise", en: "Exercise 🏃", pt: "Exercício", img: IMG.BEN },
    { id: "soccer", en: "Soccer ⚽", pt: "Futebol", img: IMG.BEN },
    { id: "basketball", en: "Basketball 🏀", pt: "Basquete", img: IMG.BEN },
    { id: "body", en: "Body 💪", pt: "Corpo", img: IMG.BEN },
    { id: "doctor", en: "Doctor 👩‍⚕️", pt: "Médico(a)", img: IMG.HOSPITAL },
    { id: "hospital", en: "Hospital 🏥", pt: "Hospital", img: IMG.HOSPITAL },
    { id: "water", en: "Water 💧", pt: "Água", img: IMG.RAINBOW },
  ],
  STORY: [
    { img: IMG.BEN, en: "Hi! I'm Ben. I love sports!", pt: "Oi! Sou Ben. Amo esportes!" },
    { img: IMG.BEN, en: "I can play soccer and basketball.", pt: "Sei jogar futebol e basquete." },
    { img: IMG.BEN, en: "I can run very fast!", pt: "Consigo correr muito rápido!" },
    { img: IMG.BAKERY, en: "For breakfast, I eat fruits and drink milk.", pt: "No café da manhã, como frutas e bebo leite." },
    { img: IMG.HOSPITAL, en: "The doctor says: 'You should drink water!'", pt: "O médico diz: 'Você deve beber água!'" },
    { img: IMG.HOSPITAL, en: "'You shouldn't eat too much candy.'", pt: "'Você não deve comer muito doce.'" },
    { img: IMG.BEN, en: "Exercise every day. Be healthy!", pt: "Se exercite todo dia. Seja saudável!" },
    { img: IMG.BEN, en: "What sport do YOU like?", pt: "Qual esporte VOCÊ gosta?" },
  ],
  DIALOG: [
    { who: "Lily", img: IMG.LILY, en: "Ben, what sport do you like?", pt: "Ben, qual esporte você gosta?" },
    { who: "Ben", img: IMG.BEN, en: "I love soccer! I can kick very hard.", pt: "Amo futebol! Chuto bem forte." },
    { who: "Lily", img: IMG.LILY, en: "Cool! I play basketball twice a week.", pt: "Legal! Jogo basquete duas vezes por semana." },
    { who: "Ben", img: IMG.BEN, en: "You should drink water after exercise.", pt: "Você deve beber água depois do exercício." },
    { who: "Lily", img: IMG.LILY, en: "Yes! And you shouldn't eat junk food.", pt: "Sim! E não deve comer besteira." },
    { who: "Ben", img: IMG.BEN, en: "I always eat fruits and vegetables.", pt: "Sempre como frutas e vegetais." },
    { who: "Lily", img: IMG.LILY, en: "Great! Healthy body, happy life!", pt: "Ótimo! Corpo saudável, vida feliz!" },
  ],
  READING: {
    title: "Be Healthy!",
    img: IMG.BEN,
    parts: [
      { en: "My name is Ben.", pt: "Meu nome é Ben.", highlight: ["is"] },
      { en: "I can play soccer.", pt: "Sei jogar futebol.", highlight: ["can"] },
      { en: "You should eat fruits.", pt: "Você deve comer frutas.", highlight: ["should"] },
      { en: "You shouldn't drink soda.", pt: "Você não deve beber refrigerante.", highlight: ["shouldn't"] },
      { en: "Exercise is good for your body.", pt: "Exercício é bom pro corpo.", highlight: ["Exercise"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ swim very well.", answer: "can", hint: "Habilidade.", options: ["can", "am", "have"] },
    { prompt: "You ______ eat vegetables. (conselho +)", answer: "should", hint: "Conselho positivo.", options: ["should", "shouldn't", "can"] },
    { prompt: "You ______ smoke. (conselho -)", answer: "shouldn't", hint: "Conselho negativo.", options: ["shouldn't", "should", "can"] },
    { prompt: "'Soccer' significa:", answer: "futebol", hint: "Esporte com bola nos pés.", options: ["futebol", "basquete", "tênis"] },
    { prompt: "The ______ works at the hospital.", answer: "doctor", hint: "Profissional de saúde.", options: ["doctor", "teacher", "chef"] },
  ],
  QUIZ: [
    { q: "'Healthy' significa:", options: [{ text: "Doente" }, { text: "Saudável", correct: true }, { text: "Cansado" }] },
    { q: "Complete: You ___ eat fruits.", options: [{ text: "should", correct: true }, { text: "shouldn't" }, { text: "can't" }] },
    { q: "'Exercise' é:", options: [{ text: "Exercício", correct: true }, { text: "Escola" }, { text: "Sonho" }] },
    { q: "Complete: I ___ run fast.", options: [{ text: "am" }, { text: "can", correct: true }, { text: "should" }] },
    { q: "'Doctor' é:", options: [{ text: "Professor" }, { text: "Médico", correct: true }, { text: "Cozinheiro" }] },
    { q: "Complete: You ___ eat candy all day.", options: [{ text: "should" }, { text: "shouldn't", correct: true }, { text: "can" }] },
    { q: "'Water' é:", options: [{ text: "Água", correct: true }, { text: "Comida" }, { text: "Suco" }] },
  ],
  REAL_LIFE: [
    { situation: "⚽ Falando qual esporte pratica.", answer: "I play soccer twice a week." },
    { situation: "💪 Falando uma habilidade física.", answer: "I can run very fast." },
    { situation: "🥗 Dando um conselho de saúde.", answer: "You should eat fruits every day." },
    { situation: "🚫 Alertando sobre algo ruim.", answer: "You shouldn't drink too much soda." },
    { situation: "🏥 Descrevendo o médico.", answer: "The doctor works at the hospital." },
  ],
  GRAMMAR: {
    focus: "Can / Can't · Should / Shouldn't",
    why:
      "CAN = habilidade (I can swim). CAN'T = não sei fazer. SHOULD = conselho (é bom fazer). SHOULDN'T = não é bom fazer. Depois de todos eles, o verbo vem sem TO.",
    examples: [
      { en: "I can ride a bike.", pt: "Sei andar de bicicleta." },
      { en: "She can't play piano.", pt: "Ela não sabe tocar piano." },
      { en: "You should drink water.", pt: "Você deve beber água." },
      { en: "You shouldn't sleep late.", pt: "Você não deve dormir tarde." },
      { en: "He should eat vegetables.", pt: "Ele deve comer vegetais." },
    ],
    errors: [
      { wrong: "I can to swim.", right: "I CAN swim.", why: "CAN nunca leva TO." },
      { wrong: "You should to eat.", right: "You SHOULD eat.", why: "SHOULD nunca leva TO." },
      { wrong: "She cans play.", right: "She CAN play.", why: "CAN nunca ganha -s." },
    ],
  },
  SONG: {
    title: "Move Your Body",
    hookPt: "Cante e se mexa!",
    verses: [
      { en: "Move your body, feel the beat,", pt: "Mexa o corpo, sinta o ritmo,", emoji: "💃" },
      { en: "Eat some fruits, they're so sweet.", pt: "Coma frutas, são doces.", emoji: "🍎" },
      { en: "You should run, you should play,", pt: "Você deve correr, você deve brincar,", emoji: "🏃" },
      { en: "Be healthy every day!", pt: "Seja saudável todo dia!", emoji: "💪" },
      { en: "Drink some water, it's the best,", pt: "Beba água, é o melhor,", emoji: "💧" },
      { en: "Sleep at night to get some rest!", pt: "Durma à noite pra descansar!", emoji: "😴" },
    ],
  },
  HUNTER: {
    intro: "Escolha a forma correta!",
    rounds: [
      { promptEn: "Complete: I ___ swim.", promptPt: "Complete: I ___ swim.", targetLabel: "can", objects: [
        { id: "a", label: "am", img: "" },
        { id: "b", label: "can", img: "", isTarget: true },
        { id: "c", label: "have", img: "" },
      ]},
      { promptEn: "Complete: You ___ eat fruits.", promptPt: "Complete: You ___ eat fruits.", targetLabel: "should", objects: [
        { id: "a", label: "should", img: "", isTarget: true },
        { id: "b", label: "shouldn't", img: "" },
        { id: "c", label: "am", img: "" },
      ]},
      { promptEn: "Complete: You ___ smoke.", promptPt: "Complete: You ___ smoke.", targetLabel: "shouldn't", objects: [
        { id: "a", label: "should", img: "" },
        { id: "b", label: "shouldn't", img: "", isTarget: true },
        { id: "c", label: "can", img: "" },
      ]},
      { promptEn: "'Doctor' é:", promptPt: "'Doctor' é:", targetLabel: "Médico", objects: [
        { id: "a", label: "Médico", img: "", isTarget: true },
        { id: "b", label: "Professor", img: "" },
        { id: "c", label: "Cozinheiro", img: "" },
      ]},
      { promptEn: "'Water' é:", promptPt: "'Water' é:", targetLabel: "Água", objects: [
        { id: "a", label: "Suco", img: "" },
        { id: "b", label: "Água", img: "", isTarget: true },
        { id: "c", label: "Leite", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares de saúde!",
    pairs: [
      { id: "a", en: "Doctor 👩‍⚕️", pt: "Médico", img: IMG.HOSPITAL },
      { id: "b", en: "Soccer ⚽", pt: "Futebol", img: IMG.BEN },
      { id: "c", en: "Water 💧", pt: "Água", img: IMG.RAINBOW },
      { id: "d", en: "Food 🥗", pt: "Comida", img: IMG.BAKERY },
    ],
  },
  BOOK: {
    title: "My Healthy Challenge",
    intro: "Seu desafio saudável!",
    pages: [
      { en: "Page 1 — Be healthy, be happy!", pt: "Pág. 1 — Seja saudável, seja feliz!", img: IMG.BEN, badge: "💪" },
      { en: "Page 2 — I can play soccer.", pt: "Pág. 2 — Sei jogar futebol.", img: IMG.BEN, badge: "⚽" },
      { en: "Page 3 — You should eat fruits.", pt: "Pág. 3 — Coma frutas.", img: IMG.BAKERY, badge: "🥗" },
      { en: "Page 4 — You shouldn't eat candy.", pt: "Pág. 4 — Evite doces.", img: IMG.BAKERY, badge: "🚫" },
      { en: "Page 5 — Drink water and exercise.", pt: "Pág. 5 — Beba água e se exercite.", img: IMG.RAINBOW, badge: "💧" },
      { en: "The End — Healthy body, happy life!", pt: "Fim — Corpo saudável, vida feliz!", img: IMG.BEN, badge: "⭐" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "Este é o hospital. Toque nos itens!",
    img: IMG.HOSPITAL,
    items: [
      { en: "Doctor", pt: "Médico", emoji: "👩‍⚕️" },
      { en: "Bandage", pt: "Curativo", emoji: "🩹" },
      { en: "Apple", pt: "Maçã", emoji: "🍎" },
      { en: "Water", pt: "Água", emoji: "💧" },
      { en: "Ball", pt: "Bola", emoji: "⚽" },
      { en: "Bed", pt: "Cama", emoji: "🛏️" },
    ],
  },
  CULTURE: {
    title: "Sports Around the World 🌎",
    emoji: "⚽",
    paragraphs: [
      { en: "Soccer is the most popular sport in Brazil and in the world.", pt: "Futebol é o esporte mais popular no Brasil e no mundo." },
      { en: "In the USA, kids love baseball and basketball.", pt: "Nos EUA, as crianças amam beisebol e basquete." },
      { pt: "Praticar esportes deixa o corpo e a mente saudáveis!" },
    ],
  },
};

export default lesson;
