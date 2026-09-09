// Ingles 2º Ano — Unit 6 "Hobbies and Sports ⚽"
// "I can / I can't", esportes e hobbies

import __asset_lilyImg from "@/assets/ingles-1ano/u1-a01/lily.png.asset.json";
const lilyImg = __asset_lilyImg.url;
import benAsset from "@/assets/ingles-1ano/u1-a02/ben.png.asset.json";
import __asset_friendsImg from "@/assets/ingles-1ano/u1-a01/friends.png.asset.json";
const friendsImg = __asset_friendsImg.url;
import type { LessonData } from "../../ingles-1ano/types";

const LILY = lilyImg;
const BEN = benAsset.url;
const FRIENDS = friendsImg;

const lesson: LessonData = {
  slug: "u2-a06-hobbies",
  meta: {
    unitLabel: "Unit 6 · Lesson 1 — Hobbies and Sports ⚽",
    headerKicker: "My English Adventure — 2nd Grade",
    coverKicker: "Lesson 6",
    coverTitle: "Hobbies and Sports ⚽",
    coverSubtitle:
      "O que você sabe fazer? Vamos aprender esportes, hobbies e falar de habilidades em inglês!",
    storyTitle: "What Can You Do?",
    vocabularyTitle: "Sports & Hobbies",
    speakingTargets: [
      "I can play soccer.",
      "I can't swim.",
      "Can you dance?",
      "Yes, I can.",
      "No, I can't.",
      "I like to read.",
    ],
    listeningIntro: "Escute a Lily falando o que ela sabe fazer.",
    listeningQuestion: 'Lily disse: "I can dance." O que ela sabe fazer?',
    listeningOptions: ["Dançar 💃", "Nadar 🏊", "Cantar 🎤"],
    listeningCorrect: "Dançar 💃",
    listeningWrongHint: '"Dance" = dançar.',
    readingNarration:
      'Esportes: soccer, basketball, swim, run. Hobbies: read, draw, sing, dance. "I can" = eu sei/consigo. "I can\'t" = eu não sei.',
    grammarNarration:
      '"Can" mostra habilidade. Positivo: I can swim. Negativo: I can\'t swim (can + not = can\'t). Pergunta: Can you swim? Resposta: Yes, I can. / No, I can\'t.',
    finalProjectIntro: "Conte 3 coisas que você sabe fazer:",
    finalProjectPhrase: (name: string) =>
      `Hi! My name is ${name}. I can play soccer. I can dance. I can't swim yet, but I'm learning!`,
    finalProjectSectionTitle: "What I Can Do Book",
  },

  VOCAB: [
    { id: "soccer", en: "Play soccer ⚽", pt: "Jogar futebol", img: FRIENDS },
    { id: "basketball", en: "Play basketball 🏀", pt: "Basquete", img: FRIENDS },
    { id: "swim", en: "Swim 🏊", pt: "Nadar", img: LILY },
    { id: "run", en: "Run 🏃", pt: "Correr", img: BEN },
    { id: "dance", en: "Dance 💃", pt: "Dançar", img: LILY },
    { id: "sing", en: "Sing 🎤", pt: "Cantar", img: BEN },
    { id: "read", en: "Read 📖", pt: "Ler", img: LILY },
    { id: "draw", en: "Draw 🎨", pt: "Desenhar", img: BEN },
  ],

  STORY: [
    { img: FRIENDS, en: "It's a fun day at the park.", pt: "É um dia divertido no parque." },
    { img: BEN, en: "Ben can play soccer very well.", pt: "Ben joga futebol muito bem." },
    { img: LILY, en: "Lily can dance and sing.", pt: "Lily sabe dançar e cantar." },
    { img: LILY, en: "But she can't swim yet.", pt: "Mas ela ainda não sabe nadar." },
    { img: BEN, en: "Ben can swim! He teaches her.", pt: "Ben sabe nadar! Ele ensina ela." },
    { img: FRIENDS, en: "They can all run fast.", pt: "Todos sabem correr rápido." },
    { img: LILY, en: "Lily loves to read at home.", pt: "Lily ama ler em casa." },
    { img: BEN, en: "Ben loves to draw.", pt: "Ben ama desenhar." },
  ],

  DIALOG: [
    { who: "Ben", img: BEN, en: "Can you swim, Lily?", pt: "Você sabe nadar, Lily?" },
    { who: "Lily", img: LILY, en: "No, I can't. Can you?", pt: "Não, não sei. Você sabe?" },
    { who: "Ben", img: BEN, en: "Yes, I can! I love swimming.", pt: "Sim, sei! Amo nadar." },
    { who: "Lily", img: LILY, en: "Cool! I can dance. Can you?", pt: "Legal! Eu sei dançar. Você sabe?" },
    { who: "Ben", img: BEN, en: "A little. Let's play soccer!", pt: "Um pouco. Vamos jogar bola!" },
    { who: "Lily", img: LILY, en: "Yes! I can play too!", pt: "Sim! Também sei jogar!" },
  ],

  READING: {
    title: "What I Can Do",
    img: FRIENDS,
    parts: [
      { en: "I can play soccer.", pt: "Eu sei jogar futebol.", highlight: ["can"] },
      { en: "I can dance.", pt: "Eu sei dançar.", highlight: ["can"] },
      { en: "I can't swim.", pt: "Eu não sei nadar.", highlight: ["can't"] },
      { en: "I like to read books.", pt: "Eu gosto de ler livros.", highlight: ["like to"] },
      { en: "I love sports!", pt: "Eu amo esportes!", highlight: ["love"] },
    ],
  },

  WRITING: [
    { prompt: "I ______ play soccer. (⚽)", answer: "can", hint: "Habilidade positiva.", options: ["can", "can't", "am"] },
    { prompt: "I ______ swim yet. (❌)", answer: "can't", hint: "Habilidade negativa.", options: ["can't", "can", "do"] },
    { prompt: "______ you dance? (❓)", answer: "Can", hint: "Pergunta de habilidade.", options: ["Can", "Do", "Is"] },
    { prompt: "I like to ______ books. (📖)", answer: "read", hint: "Livros.", options: ["read", "run", "draw"] },
    { prompt: "She can ______ beautiful pictures. (🎨)", answer: "draw", hint: "Fazer arte.", options: ["draw", "swim", "sing"] },
  ],

  QUIZ: [
    { q: "Como digo 'Eu sei nadar'?", options: [{ text: "I can swim", correct: true }, { text: "I swim can" }, { text: "I am swim" }] },
    { q: "Negativo: Eu NÃO sei dançar.", options: [{ text: "I can't dance", correct: true }, { text: "I no dance" }, { text: "I don't can dance" }] },
    { q: "Como perguntar 'Você sabe cantar?'", options: [{ text: "Can you sing?", correct: true }, { text: "You sing can?" }, { text: "Do you sing?" }] },
    { q: "Resposta curta positiva:", options: [{ text: "Yes, I can", correct: true }, { text: "Yes, I do" }, { text: "Yes, I am" }] },
    { q: "Qual é esporte?", options: [{ text: "Read" }, { text: "Soccer", correct: true }, { text: "Sing" }] },
  ],

  REAL_LIFE: [
    { situation: "⚽ Amigo te chama pra jogar bola.", answer: "Yes, I can play soccer!" },
    { situation: "🏊 Piscina — você não sabe nadar.", answer: "Sorry, I can't swim." },
    { situation: "🎤 Alguém pergunta se você canta.", answer: "Yes, I can sing." },
    { situation: "🎨 Aula de arte.", answer: "I love to draw!" },
    { situation: "📖 Biblioteca.", answer: "I like to read books." },
  ],

  GRAMMAR: {
    focus: "Can / Can't (habilidade)",
    why:
      '"Can" mostra que você sabe/consegue fazer algo. Positivo: I can dance. Negativo: I can\'t dance (can\'t = cannot). Pergunta: Can you dance? Não precisa de "do".',
    examples: [
      { en: "I can swim.", pt: "Sei nadar." },
      { en: "I can't sing.", pt: "Não sei cantar." },
      { en: "Can you dance?", pt: "Você sabe dançar?" },
      { en: "Yes, I can.", pt: "Sim, sei." },
    ],
    errors: [
      { wrong: "I can to swim.", right: "I can swim.", why: 'Depois de "can" nunca vem "to".' },
      { wrong: "Do you can swim?", right: "Can you swim?", why: 'Pergunta com "can" começa com "Can".' },
    ],
  },

  SONG: {
    title: "Yes I Can!",
    hookPt: "Cante fazendo os gestos!",
    verses: [
      { en: "I can run,", pt: "Sei correr,", emoji: "🏃" },
      { en: "I can jump,", pt: "Sei pular,", emoji: "🤸" },
      { en: "I can dance,", pt: "Sei dançar,", emoji: "💃" },
      { en: "And say I can!", pt: "E dizer 'eu sei'!", emoji: "😊" },
      { en: "I can sing,", pt: "Sei cantar,", emoji: "🎤" },
      { en: "I can play,", pt: "Sei jogar,", emoji: "⚽" },
      { en: "I can learn,", pt: "Sei aprender,", emoji: "📖" },
      { en: "Every day!", pt: "Todo dia!", emoji: "🌟" },
    ],
  },

  HUNTER: {
    intro: "Que ação é essa? Toque na resposta!",
    rounds: [
      { promptEn: "Someone playing with a ball on grass.", promptPt: "Alguém com bola no gramado.", targetLabel: "Soccer",
        objects: [
          { id: "soccer", label: "Soccer ⚽", img: "", isTarget: true },
          { id: "swim", label: "Swim 🏊", img: "" },
          { id: "read", label: "Read 📖", img: "" },
        ] },
      { promptEn: "In the pool!", promptPt: "Na piscina!", targetLabel: "Swim",
        objects: [
          { id: "swim", label: "Swim 🏊", img: "", isTarget: true },
          { id: "sing", label: "Sing 🎤", img: "" },
          { id: "draw", label: "Draw 🎨", img: "" },
        ] },
      { promptEn: "With a microphone!", promptPt: "Com microfone!", targetLabel: "Sing",
        objects: [
          { id: "sing", label: "Sing 🎤", img: "", isTarget: true },
          { id: "run", label: "Run 🏃", img: "" },
          { id: "read", label: "Read 📖", img: "" },
        ] },
      { promptEn: "With a book!", promptPt: "Com um livro!", targetLabel: "Read",
        objects: [
          { id: "read", label: "Read 📖", img: "", isTarget: true },
          { id: "soccer", label: "Soccer ⚽", img: "" },
          { id: "swim", label: "Swim 🏊", img: "" },
        ] },
      { promptEn: "With pencils and paper!", promptPt: "Com lápis e papel!", targetLabel: "Draw",
        objects: [
          { id: "draw", label: "Draw 🎨", img: "", isTarget: true },
          { id: "run", label: "Run 🏃", img: "" },
          { id: "sing", label: "Sing 🎤", img: "" },
        ] },
    ],
  },

  PACK: {
    intro: "Faça a mala pro esporte! Toque só nos itens de esporte.",
    backpackImg: FRIENDS,
    items: [
      { id: "ball", en: "Ball", pt: "Bola", emoji: "⚽", belongs: true },
      { id: "sneaker", en: "Sneakers", pt: "Tênis", emoji: "👟", belongs: true },
      { id: "waterb", en: "Water bottle", pt: "Garrafa", emoji: "🚰", belongs: true },
      { id: "towel", en: "Towel", pt: "Toalha", emoji: "🏖️", belongs: true },
      { id: "cap", en: "Cap", pt: "Boné", emoji: "🧢", belongs: true },
      { id: "book", en: "Book", pt: "Livro", emoji: "📖", belongs: false },
      { id: "cake", en: "Cake", pt: "Bolo", emoji: "🎂", belongs: false },
      { id: "tv", en: "TV", pt: "TV", emoji: "📺", belongs: false },
    ],
  },

  COMMANDS: {
    intro: "Ouça a ação e toque no ícone certo!",
    rounds: [
      { promptEn: "Show me: swim!", promptPt: "Mostre: nadar!",
        actions: [
          { id: "swim", en: "Swim", pt: "Nadar", emoji: "🏊", isTarget: true },
          { id: "run", en: "Run", pt: "Correr", emoji: "🏃" },
          { id: "draw", en: "Draw", pt: "Desenhar", emoji: "🎨" },
        ] },
      { promptEn: "Show me: dance!", promptPt: "Mostre: dançar!",
        actions: [
          { id: "dance", en: "Dance", pt: "Dançar", emoji: "💃", isTarget: true },
          { id: "read", en: "Read", pt: "Ler", emoji: "📖" },
          { id: "swim", en: "Swim", pt: "Nadar", emoji: "🏊" },
        ] },
      { promptEn: "Show me: play soccer!", promptPt: "Mostre: jogar bola!",
        actions: [
          { id: "soccer", en: "Soccer", pt: "Futebol", emoji: "⚽", isTarget: true },
          { id: "sing", en: "Sing", pt: "Cantar", emoji: "🎤" },
          { id: "read", en: "Read", pt: "Ler", emoji: "📖" },
        ] },
      { promptEn: "Show me: read!", promptPt: "Mostre: ler!",
        actions: [
          { id: "read", en: "Read", pt: "Ler", emoji: "📖", isTarget: true },
          { id: "run", en: "Run", pt: "Correr", emoji: "🏃" },
          { id: "dance", en: "Dance", pt: "Dançar", emoji: "💃" },
        ] },
    ],
  },

  MEMORY: {
    intro: "Ache os pares habilidade ↔ imagem.",
    pairs: [
      { id: "soc", en: "Soccer ⚽", pt: "Futebol", img: FRIENDS },
      { id: "swim", en: "Swim 🏊", pt: "Nadar", img: LILY },
      { id: "sing", en: "Sing 🎤", pt: "Cantar", img: BEN },
      { id: "read", en: "Read 📖", pt: "Ler", img: LILY },
    ],
  },

  CULTURE: {
    title: "Sports Around the World 🌍",
    emoji: "🏆",
    paragraphs: [
      { en: "Soccer is the most popular sport in Brazil and in the world.", pt: "Futebol é o esporte mais popular no Brasil e no mundo." },
      { en: "In the USA, kids love basketball and baseball.", pt: "Nos EUA, as crianças amam basquete e beisebol." },
      { pt: "Qual é o SEU esporte favorito? 🏅" },
    ],
  },

  BOOK: {
    title: "What I Can Do Book",
    intro: "Uma habilidade por página. Vira e mostra pra família!",
    pages: [
      { en: "I can play soccer.", pt: "Sei jogar futebol.", img: FRIENDS, badge: "⚽" },
      { en: "I can dance.", pt: "Sei dançar.", img: LILY, badge: "💃" },
      { en: "I can sing.", pt: "Sei cantar.", img: BEN, badge: "🎤" },
      { en: "I can read.", pt: "Sei ler.", img: LILY, badge: "📖" },
      { en: "I can't swim yet.", pt: "Ainda não sei nadar.", img: LILY, badge: "🏊" },
      { en: "But I can learn!", pt: "Mas sei aprender!", img: BEN, badge: "🌟" },
    ],
  },

  VIRTUAL_ROOM: {
    intro: "Toque em cada esporte/hobby!",
    img: FRIENDS,
    items: [
      { en: "Soccer", pt: "Futebol", emoji: "⚽" },
      { en: "Basketball", pt: "Basquete", emoji: "🏀" },
      { en: "Swim", pt: "Nadar", emoji: "🏊" },
      { en: "Dance", pt: "Dançar", emoji: "💃" },
      { en: "Sing", pt: "Cantar", emoji: "🎤" },
      { en: "Read", pt: "Ler", emoji: "📖" },
    ],
  },
};

export default lesson;
