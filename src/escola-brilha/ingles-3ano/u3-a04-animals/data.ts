// Ingles 3º Ano — Unit 4 "Animals Around the World 🦁"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u3-a04-animals",
  meta: {
    unitLabel: "Unit 4 · Lesson 4 — Animals Around the World 🦁",
    headerKicker: "My English Adventure — 3rd Grade",
    coverKicker: "Lesson 4",
    coverTitle: "Animals Around the World 🦁",
    coverSubtitle:
      "Vamos viajar por selvas, oceanos, desertos e fazendas conhecendo animais em inglês. Aprendemos onde eles moram e como falar sobre eles.",
    storyTitle: "Explorer Ben",
    vocabularyTitle: "Animals & Habitats",
    speakingTargets: [
      "The lion lives in the savanna.",
      "Fish live in the ocean.",
      "There is a monkey in the jungle.",
      "There are camels in the desert.",
      "The cow lives on the farm.",
      "My pet is a dog.",
    ],
    listeningIntro: "Ouça Ben explorando o mundo dos animais.",
    listeningQuestion: 'Ben disse: "The lion lives in the savanna." Onde vive o leão?',
    listeningOptions: ["No oceano", "Na savana", "No deserto"],
    listeningCorrect: "Na savana",
    listeningWrongHint: '"Savanna" = savana, onde vive o leão.',
    readingNarration:
      'Novidade do 3º ano: THERE IS (singular) e THERE ARE (plural). Servem pra dizer o que existe em um lugar.',
    grammarNarration:
      'THERE IS + 1 coisa (a lion, a fish). THERE ARE + 2+ coisas (two lions, many fish). Simples: 1 = IS, muitos = ARE.',
    finalProjectIntro: "Vamos criar seu Animal Explorer Book! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `Explorer ${name}'s Journal: There are lions in the savanna. There is a monkey in the jungle. Fish live in the ocean. My favorite animal is the dolphin!`,
    finalProjectSectionTitle: "Animal Explorer Book",
  },
  VOCAB: [
    { id: "lion", en: "Lion 🦁", pt: "Leão", img: IMG.DOG },
    { id: "monkey", en: "Monkey 🐒", pt: "Macaco", img: IMG.FRIENDS },
    { id: "fish", en: "Fish 🐟", pt: "Peixe", img: IMG.RAINBOW },
    { id: "camel", en: "Camel 🐪", pt: "Camelo", img: IMG.AIRPORT },
    { id: "cow", en: "Cow 🐄", pt: "Vaca", img: IMG.MORNING },
    { id: "dog", en: "Dog 🐶", pt: "Cachorro", img: IMG.DOG },
    { id: "cat", en: "Cat 🐱", pt: "Gato", img: IMG.LILY },
    { id: "jungle", en: "Jungle 🌴", pt: "Selva", img: IMG.RAINBOW },
    { id: "ocean", en: "Ocean 🌊", pt: "Oceano", img: IMG.RAINBOW },
    { id: "desert", en: "Desert 🏜️", pt: "Deserto", img: IMG.AIRPORT },
    { id: "farm", en: "Farm 🚜", pt: "Fazenda", img: IMG.MORNING },
  ],
  STORY: [
    { img: IMG.RAINBOW, en: "In the jungle, there are monkeys in the trees.", pt: "Na selva, há macacos nas árvores." },
    { img: IMG.DOG, en: "In the savanna, the lion is the king.", pt: "Na savana, o leão é o rei." },
    { img: IMG.AIRPORT, en: "In the desert, there are camels walking on the sand.", pt: "No deserto, camelos andam na areia." },
    { img: IMG.RAINBOW, en: "In the ocean, there are many colorful fish.", pt: "No oceano, muitos peixes coloridos." },
    { img: IMG.MORNING, en: "On the farm, there are cows and horses.", pt: "Na fazenda, há vacas e cavalos." },
    { img: IMG.LILY, en: "At home, my pet is a cat. Her name is Mia.", pt: "Em casa, meu bicho é uma gata. O nome dela é Mia." },
  ],
  DIALOG: [
    { who: "Ben", img: IMG.BEN, en: "Do you have a pet, Lily?", pt: "Você tem bicho, Lily?" },
    { who: "Lily", img: IMG.LILY, en: "Yes, I have a cat. Her name is Mia.", pt: "Sim, tenho uma gata chamada Mia." },
    { who: "Ben", img: IMG.BEN, en: "Cool! Where do lions live?", pt: "Legal! Onde vivem os leões?" },
    { who: "Lily", img: IMG.LILY, en: "Lions live in the savanna.", pt: "Os leões vivem na savana." },
    { who: "Ben", img: IMG.BEN, en: "And fish?", pt: "E os peixes?" },
    { who: "Lily", img: IMG.LILY, en: "Fish live in the ocean and in rivers.", pt: "Peixes vivem no oceano e em rios." },
  ],
  READING: {
    title: "Animal Homes",
    img: IMG.RAINBOW,
    parts: [
      { en: "There is a lion in the savanna.", pt: "Há um leão na savana.", highlight: ["There is"] },
      { en: "There are monkeys in the jungle.", pt: "Há macacos na selva.", highlight: ["There are"] },
      { en: "Fish live in the ocean.", pt: "Peixes vivem no oceano.", highlight: ["live"] },
      { en: "Camels live in the desert.", pt: "Camelos vivem no deserto.", highlight: ["desert"] },
      { en: "Cows live on the farm.", pt: "Vacas vivem na fazenda.", highlight: ["farm"] },
    ],
  },
  WRITING: [
    { prompt: "There ______ a lion in the savanna.", answer: "is", hint: "Singular: 1 leão.", options: ["is", "are", "am"] },
    { prompt: "There ______ many fish in the ocean.", answer: "are", hint: "Plural: many.", options: ["are", "is", "am"] },
    { prompt: "The monkey lives in the ______.", answer: "jungle", hint: "Floresta tropical.", options: ["jungle", "ocean", "desert"] },
    { prompt: "The camel lives in the ______.", answer: "desert", hint: "Areia e calor.", options: ["desert", "farm", "ocean"] },
    { prompt: "My pet is a ______. (cachorro)", answer: "dog", hint: "Late au au!", options: ["dog", "cow", "fish"] },
  ],
  QUIZ: [
    { q: "Onde vive o leão?", options: [{ text: "Savanna", correct: true }, { text: "Ocean" }, { text: "Farm" }] },
    { q: "Complete: There ___ many fish.", options: [{ text: "is" }, { text: "are", correct: true }, { text: "am" }] },
    { q: "Complete: There ___ a monkey.", options: [{ text: "is", correct: true }, { text: "are" }, { text: "am" }] },
    { q: "'Farm' significa:", options: [{ text: "Selva" }, { text: "Fazenda", correct: true }, { text: "Deserto" }] },
    { q: "Qual animal vive no oceano?", options: [{ text: "Camel" }, { text: "Cow" }, { text: "Fish", correct: true }] },
  ],
  REAL_LIFE: [
    { situation: "🐶 Alguém pergunta seu bicho de estimação.", answer: "My pet is a dog." },
    { situation: "🦁 Onde vive o leão?", answer: "The lion lives in the savanna." },
    { situation: "🐟 Falando dos peixes.", answer: "Fish live in the ocean." },
    { situation: "🐒 Falando dos macacos.", answer: "There are monkeys in the jungle." },
    { situation: "🐪 Falando do camelo.", answer: "The camel lives in the desert." },
  ],
  GRAMMAR: {
    focus: "There is / There are",
    why:
      'THERE IS = há UM (singular). THERE ARE = há VÁRIOS (plural). "There is a cat" (Há um gato). "There are three cats" (Há três gatos).',
    examples: [
      { en: "There is a dog on the farm.", pt: "Há um cachorro na fazenda." },
      { en: "There are two lions in the savanna.", pt: "Há dois leões na savana." },
      { en: "There is a fish in the tank.", pt: "Há um peixe no aquário." },
      { en: "There are many monkeys in the jungle.", pt: "Há muitos macacos na selva." },
    ],
    errors: [
      { wrong: "There is many fish.", right: "There are many fish.", why: "Many = plural → ARE." },
      { wrong: "There are a cat.", right: "There is a cat.", why: "A cat = 1 → IS." },
    ],
  },
  SONG: {
    title: "Animal Homes",
    hookPt: "Faça o som de cada bicho!",
    verses: [
      { en: "In the jungle, monkeys play,", pt: "Na selva, macacos brincam,", emoji: "🐒" },
      { en: "In the savanna, lions stay,", pt: "Na savana, leões ficam,", emoji: "🦁" },
      { en: "In the ocean, fish swim by,", pt: "No oceano, peixes nadam,", emoji: "🐟" },
      { en: "In the desert, camels sigh!", pt: "No deserto, camelos!", emoji: "🐪" },
      { en: "On the farm, the cows say moo,", pt: "Na fazenda, muuu!", emoji: "🐄" },
      { en: "Animals everywhere — for me and you!", pt: "Bichos por toda parte!", emoji: "🌍" },
    ],
  },
  HUNTER: {
    intro: "Onde vive cada animal?",
    rounds: [
      { promptEn: "Where does the lion live?", promptPt: "Onde vive o leão?", targetLabel: "Savanna", objects: [
        { id: "a", label: "Ocean 🌊", img: "" },
        { id: "b", label: "Savanna 🌾", img: "", isTarget: true },
        { id: "c", label: "Desert 🏜️", img: "" },
      ]},
      { promptEn: "Where do fish live?", promptPt: "Onde vivem os peixes?", targetLabel: "Ocean", objects: [
        { id: "a", label: "Farm 🚜", img: "" },
        { id: "b", label: "Ocean 🌊", img: "", isTarget: true },
        { id: "c", label: "Jungle 🌴", img: "" },
      ]},
      { promptEn: "Where does the camel live?", promptPt: "Onde vive o camelo?", targetLabel: "Desert", objects: [
        { id: "a", label: "Desert 🏜️", img: "", isTarget: true },
        { id: "b", label: "Ocean 🌊", img: "" },
        { id: "c", label: "Jungle 🌴", img: "" },
      ]},
      { promptEn: "Where do monkeys live?", promptPt: "Onde vivem os macacos?", targetLabel: "Jungle", objects: [
        { id: "a", label: "Farm 🚜", img: "" },
        { id: "b", label: "Desert 🏜️", img: "" },
        { id: "c", label: "Jungle 🌴", img: "", isTarget: true },
      ]},
      { promptEn: "Where does the cow live?", promptPt: "Onde vive a vaca?", targetLabel: "Farm", objects: [
        { id: "a", label: "Farm 🚜", img: "", isTarget: true },
        { id: "b", label: "Ocean 🌊", img: "" },
        { id: "c", label: "Savanna 🌾", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Encontre pares animal ↔ imagem.",
    pairs: [
      { id: "l", en: "Lion 🦁", pt: "Leão", img: IMG.DOG },
      { id: "m", en: "Monkey 🐒", pt: "Macaco", img: IMG.FRIENDS },
      { id: "f", en: "Fish 🐟", pt: "Peixe", img: IMG.RAINBOW },
      { id: "d", en: "Dog 🐶", pt: "Cachorro", img: IMG.LILY },
    ],
  },
  CULTURE: {
    title: "Amazing Animals 🌏",
    emoji: "🐾",
    paragraphs: [
      { en: "The Amazon in Brazil has more than 2,000 kinds of fish!", pt: "A Amazônia tem mais de 2.000 tipos de peixes!" },
      { en: "In Australia, kangaroos jump on the fields.", pt: "Na Austrália, cangurus pulam pelos campos." },
      { pt: "Cada país tem animais únicos — cuidar da natureza é cuidar deles! 🌍" },
    ],
  },
};

export default lesson;
