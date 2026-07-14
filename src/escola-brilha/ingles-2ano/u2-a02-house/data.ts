// Ingles 2º Ano — Unit 2 "My House 🏠"
// Cômodos, móveis, "This is my ...", "There is a ... in the ..."

import lilyImg from "@/assets/ingles-1ano/u1-a01/lily.png";
import benAsset from "@/assets/ingles-1ano/u1-a02/ben.png.asset.json";
import roomAsset from "@/assets/ingles-1ano/u1-a03/room-colors.png.asset.json";
import type { LessonData } from "../../ingles-1ano/types";

const LILY = lilyImg;
const BEN = benAsset.url;
const ROOM = roomAsset.url;

const lesson: LessonData = {
  slug: "u2-a02-house",
  meta: {
    unitLabel: "Unit 2 · Lesson 1 — My House 🏠",
    headerKicker: "My English Adventure — 2nd Grade",
    coverKicker: "Lesson 2",
    coverTitle: "My House 🏠",
    coverSubtitle:
      "Bem-vindo à casa da Lily! Vamos aprender os cômodos, os móveis e como apresentar cada canto em inglês.",
    storyTitle: "Welcome to My House",
    vocabularyTitle: "Rooms & Furniture",
    speakingTargets: [
      "This is my house.",
      "This is my bedroom.",
      "There is a bed in my bedroom.",
      "The kitchen is big.",
      "I watch TV in the living room.",
      "I eat in the kitchen.",
    ],
    listeningIntro: "Lily vai te mostrar a casa dela. Ouça com atenção.",
    listeningQuestion: 'Lily disse: "I sleep in my bedroom." Onde ela dorme?',
    listeningOptions: ["No quarto 🛏️", "Na cozinha 🍳", "No banheiro 🚿"],
    listeningCorrect: "No quarto 🛏️",
    listeningWrongHint: '"Bedroom" = quarto (onde tem cama = bed).',
    readingNarration:
      'Cada cômodo tem um nome em inglês. "Bed" (cama) + "room" (cômodo) = bedroom. Repare como as palavras se juntam.',
    grammarNarration:
      'Duas fórmulas novas: "This is my ___" (Este é meu ___) pra apresentar; e "There is a ___ in the ___" (Há um ___ no ___) pra dizer o que tem em cada cômodo.',
    finalProjectIntro: "Escreva seu nome e faça o tour da sua casa:",
    finalProjectPhrase: (name: string) =>
      `Hello! My name is ${name}. This is my house. There is a bed in my bedroom. I watch TV in the living room. Welcome!`,
    finalProjectSectionTitle: "My House Tour Book",
  },

  VOCAB: [
    { id: "house", en: "House 🏠", pt: "Casa", img: ROOM },
    { id: "bedroom", en: "Bedroom 🛏️", pt: "Quarto", img: ROOM },
    { id: "kitchen", en: "Kitchen 🍳", pt: "Cozinha", img: ROOM },
    { id: "livingroom", en: "Living room 🛋️", pt: "Sala", img: ROOM },
    { id: "bathroom", en: "Bathroom 🚿", pt: "Banheiro", img: ROOM },
    { id: "bed", en: "Bed 🛏️", pt: "Cama", img: LILY },
    { id: "table", en: "Table 🍽️", pt: "Mesa", img: BEN },
    { id: "sofa", en: "Sofa 🛋️", pt: "Sofá", img: LILY },
  ],

  STORY: [
    { img: ROOM, en: "This is Lily's house. Welcome!", pt: "Esta é a casa da Lily. Bem-vindo!" },
    { img: ROOM, en: "This is the living room. There is a sofa and a TV.", pt: "Esta é a sala. Há um sofá e uma TV." },
    { img: ROOM, en: "This is the kitchen. There is a table and chairs.", pt: "Esta é a cozinha. Há uma mesa e cadeiras." },
    { img: LILY, en: "This is Lily's bedroom. There is a bed and a lamp.", pt: "Este é o quarto da Lily. Há uma cama e um abajur." },
    { img: ROOM, en: "The bathroom is small but clean.", pt: "O banheiro é pequeno mas limpo." },
    { img: BEN, en: "Ben's bedroom is upstairs. He has a big desk.", pt: "O quarto do Ben é no andar de cima. Ele tem uma mesa grande." },
    { img: ROOM, en: "The family eats dinner in the kitchen.", pt: "A família janta na cozinha." },
    { img: ROOM, en: "Good night! Lily goes to her bedroom.", pt: "Boa noite! Lily vai pro quarto dela." },
  ],

  DIALOG: [
    { who: "Ben", img: BEN, en: "Lily, can I see your house?", pt: "Lily, posso ver sua casa?" },
    { who: "Lily", img: LILY, en: "Sure! This is my living room.", pt: "Claro! Esta é minha sala." },
    { who: "Ben", img: BEN, en: "Wow, there is a big sofa!", pt: "Uau, tem um sofá grande!" },
    { who: "Lily", img: LILY, en: "Yes. And this is my bedroom.", pt: "Sim. E este é meu quarto." },
    { who: "Ben", img: BEN, en: "Is there a bed?", pt: "Tem uma cama?" },
    { who: "Lily", img: LILY, en: "Yes, there is a bed and a lamp.", pt: "Sim, tem uma cama e um abajur." },
    { who: "Ben", img: BEN, en: "Cool house!", pt: "Casa legal!" },
  ],

  READING: {
    title: "Welcome to My House",
    img: ROOM,
    parts: [
      { en: "This is my house.", pt: "Esta é minha casa.", highlight: ["This is"] },
      { en: "There is a sofa in the living room.", pt: "Há um sofá na sala.", highlight: ["There is"] },
      { en: "There is a table in the kitchen.", pt: "Há uma mesa na cozinha.", highlight: ["There is"] },
      { en: "There is a bed in my bedroom.", pt: "Há uma cama no meu quarto.", highlight: ["bed", "bedroom"] },
      { en: "I love my house!", pt: "Eu amo minha casa!", highlight: ["love"] },
    ],
  },

  WRITING: [
    { prompt: "There is a ______ in my bedroom. (🛏️)", answer: "bed", hint: "Onde a gente dorme.", options: ["bed", "sofa", "table"] },
    { prompt: "I cook in the ______. (🍳)", answer: "kitchen", hint: "Cômodo da comida.", options: ["kitchen", "bathroom", "bedroom"] },
    { prompt: "I watch TV in the ______ room. (🛋️)", answer: "living", hint: "Sala de estar.", options: ["living", "bath", "bed"] },
    { prompt: "This is ______ house. (🏠)", answer: "my", hint: "Pertence a mim.", options: ["my", "the", "a"] },
    { prompt: "There ______ a lamp on the table. (💡)", answer: "is", hint: "1 objeto = is.", options: ["is", "are", "am"] },
  ],

  QUIZ: [
    { q: "Onde tem uma cama?", options: [{ text: "Bedroom 🛏️", correct: true }, { text: "Kitchen 🍳" }, { text: "Bathroom 🚿" }] },
    { q: "Como digo 'sala'?", options: [{ text: "Bedroom" }, { text: "Living room", correct: true }, { text: "Kitchen" }] },
    { q: "Complete: This ___ my house.", options: [{ text: "is", correct: true }, { text: "are" }, { text: "am" }] },
    { q: "Complete: There is ___ sofa.", options: [{ text: "a", correct: true }, { text: "an" }, { text: "the" }] },
    { q: "Onde a família come?", options: [{ text: "Bathroom" }, { text: "Kitchen", correct: true }, { text: "Bedroom" }] },
  ],

  REAL_LIFE: [
    { situation: "🏠 Um amigo visita sua casa. Como você começa a apresentar?", answer: "Welcome! This is my house." },
    { situation: "🛏️ Você mostra seu quarto.", answer: "This is my bedroom. There is a bed." },
    { situation: "🍳 Sua mãe pergunta onde está o suco.", answer: "It is in the kitchen." },
    { situation: "🛋️ Você quer chamar pra ver TV.", answer: "Let's go to the living room." },
    { situation: "🚿 Alguém pergunta onde é o banheiro.", answer: "The bathroom is over there." },
  ],

  GRAMMAR: {
    focus: "This is my ___ / There is a ___ in the ___",
    why:
      'Pra apresentar algo usamos "This is my..." (Este é meu...). Pra dizer o que existe em um lugar usamos "There is a ___ in the ___" (Há um ___ no ___). Sempre "There IS" com 1 objeto e "There ARE" com vários.',
    examples: [
      { en: "This is my bedroom.", pt: "Este é meu quarto." },
      { en: "There is a sofa in the living room.", pt: "Há um sofá na sala." },
      { en: "There are two chairs in the kitchen.", pt: "Há duas cadeiras na cozinha." },
    ],
    errors: [
      { wrong: "This my bedroom.", right: "This is my bedroom.", why: 'Nunca esqueça o verbo "is".' },
      { wrong: "There is two beds.", right: "There are two beds.", why: '2 ou mais = "There ARE".' },
    ],
  },

  SONG: {
    title: "This Is My House",
    hookPt: "Cante apontando pros cômodos!",
    verses: [
      { en: "This is my house,", pt: "Esta é minha casa,", emoji: "🏠" },
      { en: "My cozy home,", pt: "Meu lar aconchegante,", emoji: "❤️" },
      { en: "Living room, kitchen,", pt: "Sala, cozinha,", emoji: "🛋️" },
      { en: "Bedroom of my own!", pt: "Quarto só meu!", emoji: "🛏️" },
      { en: "There is a bed,", pt: "Tem uma cama,", emoji: "🛏️" },
      { en: "There is a chair,", pt: "Tem uma cadeira,", emoji: "🪑" },
      { en: "This is my house,", pt: "Esta é minha casa,", emoji: "🏠" },
      { en: "Come in and share!", pt: "Entra e fica!", emoji: "🤗" },
    ],
  },

  HUNTER: {
    intro: "Em qual cômodo a gente faz isso? Toque na resposta certa!",
    rounds: [
      { promptEn: "Where do you sleep?", promptPt: "Onde você dorme?", targetLabel: "Bedroom",
        objects: [
          { id: "bedroom", label: "Bedroom 🛏️", img: "", isTarget: true },
          { id: "kitchen", label: "Kitchen 🍳", img: "" },
          { id: "bathroom", label: "Bathroom 🚿", img: "" },
        ] },
      { promptEn: "Where do you cook?", promptPt: "Onde você cozinha?", targetLabel: "Kitchen",
        objects: [
          { id: "kitchen", label: "Kitchen 🍳", img: "", isTarget: true },
          { id: "living", label: "Living room 🛋️", img: "" },
          { id: "bedroom", label: "Bedroom 🛏️", img: "" },
        ] },
      { promptEn: "Where do you take a shower?", promptPt: "Onde você toma banho?", targetLabel: "Bathroom",
        objects: [
          { id: "bathroom", label: "Bathroom 🚿", img: "", isTarget: true },
          { id: "kitchen", label: "Kitchen 🍳", img: "" },
          { id: "bedroom", label: "Bedroom 🛏️", img: "" },
        ] },
      { promptEn: "Where do you watch TV?", promptPt: "Onde você vê TV?", targetLabel: "Living room",
        objects: [
          { id: "living", label: "Living room 🛋️", img: "", isTarget: true },
          { id: "bath", label: "Bathroom 🚿", img: "" },
          { id: "kitchen", label: "Kitchen 🍳", img: "" },
        ] },
      { promptEn: "Where do you eat dinner?", promptPt: "Onde você janta?", targetLabel: "Kitchen",
        objects: [
          { id: "kitchen", label: "Kitchen 🍽️", img: "", isTarget: true },
          { id: "bed", label: "Bedroom 🛏️", img: "" },
          { id: "bath", label: "Bathroom 🚿", img: "" },
        ] },
    ],
  },

  PACK: {
    intro: "Arrume o quarto da Lily — toque só nos itens que ficam em um BEDROOM!",
    backpackImg: LILY,
    items: [
      { id: "bed", en: "Bed", pt: "Cama", emoji: "🛏️", belongs: true },
      { id: "lamp", en: "Lamp", pt: "Abajur", emoji: "💡", belongs: true },
      { id: "pillow", en: "Pillow", pt: "Travesseiro", emoji: "🛌", belongs: true },
      { id: "closet", en: "Closet", pt: "Armário", emoji: "👕", belongs: true },
      { id: "stove", en: "Stove", pt: "Fogão", emoji: "🍳", belongs: false },
      { id: "toilet", en: "Toilet", pt: "Vaso", emoji: "🚽", belongs: false },
      { id: "fridge", en: "Fridge", pt: "Geladeira", emoji: "🧊", belongs: false },
      { id: "sink", en: "Sink", pt: "Pia", emoji: "🚿", belongs: false },
    ],
  },

  COMMANDS: {
    intro: "Ouça o cômodo e mostre a ação certa que a gente faz lá!",
    rounds: [
      { promptEn: "In the bedroom you...", promptPt: "No quarto você...",
        actions: [
          { id: "sleep", en: "Sleep", pt: "Dormir", emoji: "😴", isTarget: true },
          { id: "cook", en: "Cook", pt: "Cozinhar", emoji: "🍳" },
          { id: "shower", en: "Shower", pt: "Banho", emoji: "🚿" },
        ] },
      { promptEn: "In the kitchen you...", promptPt: "Na cozinha você...",
        actions: [
          { id: "cook", en: "Cook", pt: "Cozinhar", emoji: "🍳", isTarget: true },
          { id: "sleep", en: "Sleep", pt: "Dormir", emoji: "😴" },
          { id: "watch", en: "Watch TV", pt: "Ver TV", emoji: "📺" },
        ] },
      { promptEn: "In the living room you...", promptPt: "Na sala você...",
        actions: [
          { id: "watch", en: "Watch TV", pt: "Ver TV", emoji: "📺", isTarget: true },
          { id: "sleep", en: "Sleep", pt: "Dormir", emoji: "😴" },
          { id: "shower", en: "Shower", pt: "Banho", emoji: "🚿" },
        ] },
      { promptEn: "In the bathroom you...", promptPt: "No banheiro você...",
        actions: [
          { id: "shower", en: "Shower", pt: "Banho", emoji: "🚿", isTarget: true },
          { id: "cook", en: "Cook", pt: "Cozinhar", emoji: "🍳" },
          { id: "sleep", en: "Sleep", pt: "Dormir", emoji: "😴" },
        ] },
    ],
  },

  MEMORY: {
    intro: "Encontre os pares: cômodo em inglês ↔ imagem.",
    pairs: [
      { id: "bed", en: "Bedroom 🛏️", pt: "Quarto", img: LILY },
      { id: "kit", en: "Kitchen 🍳", pt: "Cozinha", img: ROOM },
      { id: "liv", en: "Living room 🛋️", pt: "Sala", img: ROOM },
      { id: "bat", en: "Bathroom 🚿", pt: "Banheiro", img: BEN },
    ],
  },

  CULTURE: {
    title: "Homes Around the World 🌍",
    emoji: "🏠",
    paragraphs: [
      { en: "In the USA, many families live in houses with a yard.", pt: "Nos EUA, muitas famílias moram em casas com quintal." },
      { en: "In big cities like New York, people live in apartments.", pt: "Em cidades grandes como Nova York, as pessoas moram em apartamentos." },
      { pt: "No Brasil também tem os dois: casas e apartamentos. Como é a sua? 🏡" },
    ],
  },

  BOOK: {
    title: "My House Tour Book",
    intro: "Vira a página e passeia pela casa!",
    pages: [
      { en: "Welcome to my house!", pt: "Bem-vindo à minha casa!", img: ROOM, badge: "🏠" },
      { en: "This is the living room.", pt: "Esta é a sala.", img: ROOM, badge: "🛋️" },
      { en: "This is the kitchen.", pt: "Esta é a cozinha.", img: ROOM, badge: "🍳" },
      { en: "This is my bedroom.", pt: "Este é meu quarto.", img: LILY, badge: "🛏️" },
      { en: "This is the bathroom.", pt: "Este é o banheiro.", img: ROOM, badge: "🚿" },
      { en: "Thanks for visiting! Bye!", pt: "Obrigado pela visita! Tchau!", img: BEN, badge: "👋" },
    ],
  },

  VIRTUAL_ROOM: {
    intro: "Toque em cada cômodo da casa da Lily!",
    img: ROOM,
    items: [
      { en: "Bedroom", pt: "Quarto", emoji: "🛏️" },
      { en: "Kitchen", pt: "Cozinha", emoji: "🍳" },
      { en: "Living room", pt: "Sala", emoji: "🛋️" },
      { en: "Bathroom", pt: "Banheiro", emoji: "🚿" },
      { en: "Table", pt: "Mesa", emoji: "🍽️" },
      { en: "Sofa", pt: "Sofá", emoji: "🛋️" },
    ],
  },
};

export default lesson;
