// Ingles 2º Ano — Unit 3 "Food Time 🍎"
// Comidas, gostos, "I like / I don't like", "Do you like ...?"

import lilyImg from "@/assets/ingles-1ano/u1-a01/lily.png";
import benAsset from "@/assets/ingles-1ano/u1-a02/ben.png.asset.json";
import morningImg from "@/assets/ingles-1ano/u1-a01/good-morning.png";
import type { LessonData } from "../../ingles-1ano/types";

const LILY = lilyImg;
const BEN = benAsset.url;
const FOOD = morningImg;

const lesson: LessonData = {
  slug: "u2-a03-food",
  meta: {
    unitLabel: "Unit 3 · Lesson 1 — Food Time 🍎",
    headerKicker: "My English Adventure — 2nd Grade",
    coverKicker: "Lesson 3",
    coverTitle: "Food Time 🍎",
    coverSubtitle:
      "Comidas, frutas e bebidas em inglês! Vamos aprender a dizer o que a gente ama e o que não gosta.",
    storyTitle: "Lily's Snack Time",
    vocabularyTitle: "Food & Drinks",
    speakingTargets: [
      "I like apples.",
      "I don't like fish.",
      "Do you like pizza?",
      "Yes, I do.",
      "No, I don't.",
      "I love chocolate!",
    ],
    listeningIntro: "Escute a Lily falando sobre a comida dela.",
    listeningQuestion: 'Lily disse: "I love apples." O que ela ama?',
    listeningOptions: ["Maçã 🍎", "Peixe 🐟", "Pizza 🍕"],
    listeningCorrect: "Maçã 🍎",
    listeningWrongHint: '"Apple" = maçã. "Love" = amar.',
    readingNarration:
      'Palavras de comida: apple, banana, pizza, milk, water, chocolate. Repare que "I like" = eu gosto, "I don\'t like" = eu não gosto.',
    grammarNarration:
      '"Like" = gostar. Positivo: I like pizza. Negativo: I don\'t like fish. Pergunta: Do you like pizza? Resposta curta: Yes, I do. / No, I don\'t.',
    finalProjectIntro: "Faça seu cardápio favorito:",
    finalProjectPhrase: (name: string) =>
      `Hi! My name is ${name}. I like apples and pizza. I don't like fish. I love chocolate!`,
    finalProjectSectionTitle: "My Favorite Food Book",
  },

  VOCAB: [
    { id: "apple", en: "Apple 🍎", pt: "Maçã", img: FOOD },
    { id: "banana", en: "Banana 🍌", pt: "Banana", img: FOOD },
    { id: "pizza", en: "Pizza 🍕", pt: "Pizza", img: FOOD },
    { id: "milk", en: "Milk 🥛", pt: "Leite", img: FOOD },
    { id: "water", en: "Water 💧", pt: "Água", img: FOOD },
    { id: "chocolate", en: "Chocolate 🍫", pt: "Chocolate", img: FOOD },
    { id: "bread", en: "Bread 🍞", pt: "Pão", img: FOOD },
    { id: "fish", en: "Fish 🐟", pt: "Peixe", img: FOOD },
  ],

  STORY: [
    { img: FOOD, en: "It's snack time! Lily is hungry.", pt: "É hora do lanche! Lily está com fome." },
    { img: LILY, en: "She likes apples and bananas.", pt: "Ela gosta de maçãs e bananas." },
    { img: BEN, en: "Ben likes pizza and chocolate.", pt: "Ben gosta de pizza e chocolate." },
    { img: FOOD, en: "Mom says: 'Drink water, please!'", pt: "Mamãe diz: 'Beba água, por favor!'" },
    { img: LILY, en: "Lily doesn't like fish.", pt: "Lily não gosta de peixe." },
    { img: BEN, en: "Ben doesn't like milk.", pt: "Ben não gosta de leite." },
    { img: FOOD, en: "They love bread with butter!", pt: "Eles amam pão com manteiga!" },
    { img: FOOD, en: "Yummy! Snack time is the best!", pt: "Delícia! Hora do lanche é o melhor!" },
  ],

  DIALOG: [
    { who: "Ben", img: BEN, en: "Lily, do you like pizza?", pt: "Lily, você gosta de pizza?" },
    { who: "Lily", img: LILY, en: "Yes, I do! I love pizza.", pt: "Sim! Eu amo pizza." },
    { who: "Ben", img: BEN, en: "Do you like fish?", pt: "Você gosta de peixe?" },
    { who: "Lily", img: LILY, en: "No, I don't. I don't like fish.", pt: "Não. Eu não gosto de peixe." },
    { who: "Ben", img: BEN, en: "Me neither. I like apples.", pt: "Eu também não. Eu gosto de maçãs." },
    { who: "Lily", img: LILY, en: "Me too! Let's eat!", pt: "Eu também! Vamos comer!" },
  ],

  READING: {
    title: "My Favorite Food",
    img: FOOD,
    parts: [
      { en: "I like apples.", pt: "Eu gosto de maçãs.", highlight: ["like"] },
      { en: "I like bananas.", pt: "Eu gosto de bananas.", highlight: ["like"] },
      { en: "I don't like fish.", pt: "Eu não gosto de peixe.", highlight: ["don't like"] },
      { en: "I love chocolate!", pt: "Eu amo chocolate!", highlight: ["love"] },
      { en: "I drink water every day.", pt: "Eu bebo água todo dia.", highlight: ["drink"] },
    ],
  },

  WRITING: [
    { prompt: "I ______ pizza. (❤️)", answer: "like", hint: "Verbo de gostar.", options: ["like", "don't", "am"] },
    { prompt: "I ______ like fish. (❌)", answer: "don't", hint: "Negativo.", options: ["don't", "like", "am"] },
    { prompt: "______ you like apples? (❓)", answer: "Do", hint: "Palavra de pergunta.", options: ["Do", "Is", "Are"] },
    { prompt: "I drink ______. (💧)", answer: "water", hint: "Bebida transparente.", options: ["water", "bread", "fish"] },
    { prompt: "I love ______. (🍫)", answer: "chocolate", hint: "Doce marrom.", options: ["chocolate", "fish", "water"] },
  ],

  QUIZ: [
    { q: "Como digo 'Eu gosto de maçã'?", options: [{ text: "I like apple", correct: true }, { text: "I am apple" }, { text: "I apple like" }] },
    { q: "Negativo: Eu NÃO gosto de peixe.", options: [{ text: "I like fish" }, { text: "I don't like fish", correct: true }, { text: "I no like fish" }] },
    { q: "Como perguntar 'Você gosta de pizza?'", options: [{ text: "You like pizza?" }, { text: "Do you like pizza?", correct: true }, { text: "Is you pizza?" }] },
    { q: "Resposta curta positiva:", options: [{ text: "Yes, I do", correct: true }, { text: "Yes, I like" }, { text: "Yes, I am" }] },
    { q: "Qual é fruta?", options: [{ text: "Pizza" }, { text: "Banana", correct: true }, { text: "Fish" }] },
  ],

  REAL_LIFE: [
    { situation: "🍕 Alguém te oferece pizza.", answer: "Yes, please! I love pizza." },
    { situation: "🐟 Sua mãe fez peixe e você não gosta.", answer: "Sorry, I don't like fish." },
    { situation: "🍎 Alguém pergunta 'Do you like fruits?'", answer: "Yes, I like apples and bananas." },
    { situation: "💧 Você está com sede.", answer: "Can I have some water, please?" },
    { situation: "🍫 Alguém te dá chocolate.", answer: "Thank you! I love chocolate!" },
  ],

  GRAMMAR: {
    focus: "I like / I don't like / Do you like?",
    why:
      '"Like" = gostar. Positivo: I like ___. Negativo: I don\'t like ___ (don\'t = do not). Pergunta: Do you like ___? Resposta: Yes, I do. / No, I don\'t.',
    examples: [
      { en: "I like pizza.", pt: "Eu gosto de pizza." },
      { en: "I don't like fish.", pt: "Eu não gosto de peixe." },
      { en: "Do you like apples?", pt: "Você gosta de maçãs?" },
      { en: "Yes, I do.", pt: "Sim, gosto." },
    ],
    errors: [
      { wrong: "I no like fish.", right: "I don't like fish.", why: 'Negativo em inglês usa "don\'t", não "no".' },
      { wrong: "You like pizza?", right: "Do you like pizza?", why: 'Perguntas com "like" começam com "Do".' },
    ],
  },

  SONG: {
    title: "Yummy Yummy Food",
    hookPt: "Cante batendo palmas!",
    verses: [
      { en: "I like apples,", pt: "Eu gosto de maçãs,", emoji: "🍎" },
      { en: "I like bread,", pt: "Eu gosto de pão,", emoji: "🍞" },
      { en: "I love pizza,", pt: "Eu amo pizza,", emoji: "🍕" },
      { en: "Yummy in my head!", pt: "Delícia na cabeça!", emoji: "😋" },
      { en: "I don't like fish,", pt: "Não gosto de peixe,", emoji: "🐟" },
      { en: "But I like cheese,", pt: "Mas gosto de queijo,", emoji: "🧀" },
      { en: "Water, water,", pt: "Água, água,", emoji: "💧" },
      { en: "More, please!", pt: "Mais, por favor!", emoji: "🥤" },
    ],
  },

  HUNTER: {
    intro: "Toque na comida certa!",
    rounds: [
      { promptEn: "Find an apple!", promptPt: "Ache a maçã!", targetLabel: "Apple",
        objects: [
          { id: "apple", label: "Apple 🍎", img: "", isTarget: true },
          { id: "fish", label: "Fish 🐟", img: "" },
          { id: "milk", label: "Milk 🥛", img: "" },
        ] },
      { promptEn: "Find a drink!", promptPt: "Ache uma bebida!", targetLabel: "Water",
        objects: [
          { id: "pizza", label: "Pizza 🍕", img: "" },
          { id: "water", label: "Water 💧", img: "", isTarget: true },
          { id: "bread", label: "Bread 🍞", img: "" },
        ] },
      { promptEn: "Find something sweet!", promptPt: "Ache algo doce!", targetLabel: "Chocolate",
        objects: [
          { id: "chocolate", label: "Chocolate 🍫", img: "", isTarget: true },
          { id: "fish", label: "Fish 🐟", img: "" },
          { id: "bread", label: "Bread 🍞", img: "" },
        ] },
      { promptEn: "Find a fruit!", promptPt: "Ache uma fruta!", targetLabel: "Banana",
        objects: [
          { id: "banana", label: "Banana 🍌", img: "", isTarget: true },
          { id: "pizza", label: "Pizza 🍕", img: "" },
          { id: "milk", label: "Milk 🥛", img: "" },
        ] },
      { promptEn: "Find bread!", promptPt: "Ache o pão!", targetLabel: "Bread",
        objects: [
          { id: "bread", label: "Bread 🍞", img: "", isTarget: true },
          { id: "apple", label: "Apple 🍎", img: "" },
          { id: "water", label: "Water 💧", img: "" },
        ] },
    ],
  },

  PACK: {
    intro: "Prepare o lanche saudável — toque só nas comidas boas pro café da manhã!",
    backpackImg: FOOD,
    items: [
      { id: "apple", en: "Apple", pt: "Maçã", emoji: "🍎", belongs: true },
      { id: "banana", en: "Banana", pt: "Banana", emoji: "🍌", belongs: true },
      { id: "milk", en: "Milk", pt: "Leite", emoji: "🥛", belongs: true },
      { id: "bread", en: "Bread", pt: "Pão", emoji: "🍞", belongs: true },
      { id: "cheese", en: "Cheese", pt: "Queijo", emoji: "🧀", belongs: true },
      { id: "cake", en: "Cake", pt: "Bolo", emoji: "🎂", belongs: false },
      { id: "candy", en: "Candy", pt: "Bala", emoji: "🍬", belongs: false },
      { id: "soda", en: "Soda", pt: "Refri", emoji: "🥤", belongs: false },
    ],
  },

  COMMANDS: {
    intro: "Ouça a instrução e toque na comida certa!",
    rounds: [
      { promptEn: "Show me an apple!", promptPt: "Mostre uma maçã!",
        actions: [
          { id: "apple", en: "Apple", pt: "Maçã", emoji: "🍎", isTarget: true },
          { id: "fish", en: "Fish", pt: "Peixe", emoji: "🐟" },
          { id: "water", en: "Water", pt: "Água", emoji: "💧" },
        ] },
      { promptEn: "Show me pizza!", promptPt: "Mostre pizza!",
        actions: [
          { id: "pizza", en: "Pizza", pt: "Pizza", emoji: "🍕", isTarget: true },
          { id: "bread", en: "Bread", pt: "Pão", emoji: "🍞" },
          { id: "banana", en: "Banana", pt: "Banana", emoji: "🍌" },
        ] },
      { promptEn: "Show me chocolate!", promptPt: "Mostre chocolate!",
        actions: [
          { id: "choc", en: "Chocolate", pt: "Chocolate", emoji: "🍫", isTarget: true },
          { id: "milk", en: "Milk", pt: "Leite", emoji: "🥛" },
          { id: "fish", en: "Fish", pt: "Peixe", emoji: "🐟" },
        ] },
      { promptEn: "Show me water!", promptPt: "Mostre água!",
        actions: [
          { id: "water", en: "Water", pt: "Água", emoji: "💧", isTarget: true },
          { id: "pizza", en: "Pizza", pt: "Pizza", emoji: "🍕" },
          { id: "bread", en: "Bread", pt: "Pão", emoji: "🍞" },
        ] },
    ],
  },

  MEMORY: {
    intro: "Ache os pares: comida em inglês ↔ imagem.",
    pairs: [
      { id: "apple", en: "Apple 🍎", pt: "Maçã", img: FOOD },
      { id: "pizza", en: "Pizza 🍕", pt: "Pizza", img: FOOD },
      { id: "milk", en: "Milk 🥛", pt: "Leite", img: LILY },
      { id: "bread", en: "Bread 🍞", pt: "Pão", img: BEN },
    ],
  },

  CULTURE: {
    title: "Food Around the World 🌍",
    emoji: "🍽️",
    paragraphs: [
      { en: "In Italy, people eat a lot of pizza and pasta.", pt: "Na Itália, come-se muita pizza e macarrão." },
      { en: "In Japan, people love sushi and rice.", pt: "No Japão, o povo ama sushi e arroz." },
      { pt: "No Brasil, temos arroz, feijão e frutas incríveis! 🥭" },
    ],
  },

  BOOK: {
    title: "My Favorite Food Book",
    intro: "Uma comida por página. Vira e descobre!",
    pages: [
      { en: "I like apples.", pt: "Eu gosto de maçãs.", img: FOOD, badge: "🍎" },
      { en: "I like pizza.", pt: "Eu gosto de pizza.", img: FOOD, badge: "🍕" },
      { en: "I love chocolate.", pt: "Eu amo chocolate.", img: FOOD, badge: "🍫" },
      { en: "I drink water.", pt: "Eu bebo água.", img: FOOD, badge: "💧" },
      { en: "I don't like fish.", pt: "Eu não gosto de peixe.", img: LILY, badge: "🐟" },
      { en: "Yummy! Bon appétit!", pt: "Delícia! Bom apetite!", img: BEN, badge: "😋" },
    ],
  },

  VIRTUAL_ROOM: {
    intro: "É hora do lanche! Toque em cada comida da mesa!",
    img: FOOD,
    items: [
      { en: "Apple", pt: "Maçã", emoji: "🍎" },
      { en: "Banana", pt: "Banana", emoji: "🍌" },
      { en: "Pizza", pt: "Pizza", emoji: "🍕" },
      { en: "Milk", pt: "Leite", emoji: "🥛" },
      { en: "Water", pt: "Água", emoji: "💧" },
      { en: "Chocolate", pt: "Chocolate", emoji: "🍫" },
    ],
  },
};

export default lesson;
