// Inglês 4º Ano — Unit 4 "Amazing Nature 🌳"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u4-a04-nature",
  meta: {
    unitLabel: "Unit 4 · Lesson 4 — Amazing Nature 🌳",
    headerKicker: "My English Adventure — 4th Grade",
    coverKicker: "Natureza & meio ambiente",
    coverTitle: "Amazing Nature 🌳",
    coverSubtitle:
      "Vamos explorar florestas, rios e oceanos com There is / There are + plurais.",
    storyTitle: "The Amazing Forest",
    vocabularyTitle: "Nature Words",
    speakingTargets: [
      "There are many trees.",
      "The river is clean.",
      "We recycle plastic.",
      "There is a monkey in the tree.",
      "The ocean is beautiful.",
      "We protect nature.",
    ],
    listeningIntro: "Ouça uma expedição na floresta.",
    listeningQuestion: '"There are 5 monkeys in the tree." Quantos macacos?',
    listeningOptions: ["Três", "Cinco", "Sete"],
    listeningCorrect: "Cinco",
    listeningWrongHint: '"Five" = cinco.',
    readingNarration:
      'There is + singular (There is A river). There are + plural (There are TREES). Plural regular: -s. Alguns: leaf → leaves.',
    grammarNarration:
      'There is = tem UM (singular). There are = tem VÁRIOS (plural). Plurais normalmente ganham -S; alguns mudam (child → children, leaf → leaves).',
    finalProjectIntro: "Seu diário da natureza!",
    finalProjectPhrase: (name: string) =>
      `NATURE EXPLORER JOURNAL — Explorer: ${name}. Today I visited the forest. There are tall trees and colorful birds. There is a clean river. I saw plants and animals. We must protect nature. Recycle, plant trees, and love the Earth!`,
    finalProjectSectionTitle: "Nature Explorer Journal",
  },
  VOCAB: [
    { id: "for", en: "Forest 🌲", pt: "Floresta", img: IMG.RAINBOW },
    { id: "riv", en: "River 🏞️", pt: "Rio", img: IMG.RAINBOW },
    { id: "oc", en: "Ocean 🌊", pt: "Oceano", img: IMG.RAINBOW },
    { id: "mou", en: "Mountains ⛰️", pt: "Montanhas", img: IMG.RAINBOW },
    { id: "we", en: "Weather ☀️", pt: "Clima", img: IMG.MORNING },
    { id: "pl", en: "Plants 🌿", pt: "Plantas", img: IMG.RAINBOW },
    { id: "an", en: "Animals 🦁", pt: "Animais", img: IMG.DOG },
    { id: "re", en: "Recycling ♻️", pt: "Reciclagem", img: IMG.RAINBOW },
  ],
  STORY: [
    { img: IMG.RAINBOW, en: "Today we visit the Amazing Forest!", pt: "Hoje visitamos a Floresta Incrível!" },
    { img: IMG.RAINBOW, en: "There are tall trees everywhere.", pt: "Tem árvores altas em todo lugar." },
    { img: IMG.DOG, en: "There is a monkey playing in a tree.", pt: "Tem um macaco brincando na árvore." },
    { img: IMG.RAINBOW, en: "The river is clean and full of fish.", pt: "O rio é limpo e cheio de peixes." },
    { img: IMG.RAINBOW, en: "There are colorful flowers and green leaves.", pt: "Flores coloridas e folhas verdes." },
    { img: IMG.BEN, en: "Ben says: 'We must protect nature!'", pt: "Ben diz: 'Precisamos proteger a natureza!'" },
    { img: IMG.LILY, en: "Lily picks up plastic to recycle.", pt: "Lily pega plástico pra reciclar." },
    { img: IMG.RAINBOW, en: "Our planet is beautiful. Let's take care of it!", pt: "Nosso planeta é lindo. Vamos cuidar!" },
  ],
  DIALOG: [
    { who: "Lily", img: IMG.LILY, en: "Look, Ben! There are birds!", pt: "Olha, Ben! Tem pássaros!" },
    { who: "Ben", img: IMG.BEN, en: "How many birds do you see?", pt: "Quantos pássaros?" },
    { who: "Lily", img: IMG.LILY, en: "I see six colorful birds.", pt: "Vejo seis pássaros coloridos." },
    { who: "Ben", img: IMG.BEN, en: "Is the river clean?", pt: "O rio tá limpo?" },
    { who: "Lily", img: IMG.LILY, en: "Yes, it is. There are many fish.", pt: "Sim. Tem muitos peixes." },
    { who: "Ben", img: IMG.BEN, en: "We need to recycle at home.", pt: "Temos que reciclar em casa." },
    { who: "Lily", img: IMG.LILY, en: "Yes! Nature needs our help.", pt: "Sim! Natureza precisa da nossa ajuda." },
  ],
  READING: {
    title: "In the Forest",
    img: IMG.RAINBOW,
    parts: [
      { en: "There is a big forest near my city.", pt: "Tem uma grande floresta perto da cidade.", highlight: ["There is"] },
      { en: "There are many trees and animals.", pt: "Tem muitas árvores e animais.", highlight: ["There are"] },
      { en: "The river is clean and cold.", pt: "O rio é limpo e frio.", highlight: ["is"] },
      { en: "Plants are green and healthy.", pt: "As plantas são verdes e saudáveis.", highlight: ["are"] },
      { en: "We recycle to protect nature.", pt: "Reciclamos pra proteger.", highlight: ["recycle"] },
    ],
  },
  WRITING: [
    { prompt: "There ______ a river. (singular)", answer: "is", hint: "Singular = IS.", options: ["is", "are", "am"] },
    { prompt: "There ______ many trees. (plural)", answer: "are", hint: "Plural = ARE.", options: ["are", "is", "am"] },
    { prompt: "We ______ plastic. (reciclar)", answer: "recycle", hint: "Verbo reciclar.", options: ["recycle", "read", "run"] },
    { prompt: "There are five ______. (crianças)", answer: "children", hint: "Plural irregular de child.", options: ["children", "childs", "childrens"] },
    { prompt: "The forest ______ beautiful.", answer: "is", hint: "Singular TO BE.", options: ["is", "are", "am"] },
  ],
  QUIZ: [
    { q: "Complete: There ___ a bird.", options: [{ text: "is", correct: true }, { text: "are" }, { text: "am" }] },
    { q: "Complete: There ___ 3 dogs.", options: [{ text: "is" }, { text: "are", correct: true }, { text: "am" }] },
    { q: "'Forest' é:", options: [{ text: "Cidade" }, { text: "Floresta", correct: true }, { text: "Praia" }] },
    { q: "Plural de 'child':", options: [{ text: "childs" }, { text: "children", correct: true }, { text: "childrens" }] },
    { q: "'Recycling' é:", options: [{ text: "Reciclagem", correct: true }, { text: "Correria" }, { text: "Descanso" }] },
    { q: "'Ocean' é:", options: [{ text: "Rio" }, { text: "Oceano", correct: true }, { text: "Lago" }] },
    { q: "Plural de 'leaf':", options: [{ text: "leafs" }, { text: "leaves", correct: true }, { text: "leafes" }] },
  ],
  REAL_LIFE: [
    { situation: "🌳 Descrevendo o parque.", answer: "There are many trees." },
    { situation: "🏞️ Falando do rio.", answer: "The river is clean." },
    { situation: "♻️ Explicando o que faz.", answer: "We recycle plastic." },
    { situation: "🦁 Contando animais.", answer: "There are five monkeys." },
    { situation: "🌍 Falando do planeta.", answer: "We protect nature." },
  ],
  GRAMMAR: {
    focus: "There is / There are + Plural nouns",
    why:
      'THERE IS pra UM (singular). THERE ARE pra MUITOS (plural). A maioria dos plurais ganha -S; alguns são irregulares (child → children, leaf → leaves, foot → feet).',
    examples: [
      { en: "There is a tree.", pt: "Tem uma árvore." },
      { en: "There are many trees.", pt: "Tem muitas árvores." },
      { en: "There is one river.", pt: "Tem um rio." },
      { en: "There are five children.", pt: "Tem cinco crianças." },
      { en: "There are leaves on the floor.", pt: "Há folhas no chão." },
    ],
    errors: [
      { wrong: "There is many trees.", right: "There ARE many trees.", why: "Plural pede ARE." },
      { wrong: "There are a river.", right: "There IS a river.", why: "Singular pede IS." },
      { wrong: "Two childs.", right: "Two CHILDREN.", why: "CHILD é irregular." },
    ],
  },
  SONG: {
    title: "Amazing Nature",
    hookPt: "Cante amando a natureza!",
    verses: [
      { en: "There are trees so tall and green,", pt: "Árvores altas e verdes,", emoji: "🌳" },
      { en: "Prettiest forest ever seen,", pt: "Floresta mais linda já vista,", emoji: "🌲" },
      { en: "There is a river, cool and clear,", pt: "Tem um rio, fresco e claro,", emoji: "🏞️" },
      { en: "Nature's music we can hear!", pt: "Música da natureza a gente ouve!", emoji: "🎵" },
      { en: "Recycle, plant, and love the Earth,", pt: "Recicle, plante e ame a Terra,", emoji: "♻️" },
      { en: "Protect our home for all it's worth!", pt: "Proteja nosso lar!", emoji: "🌍" },
    ],
  },
  HUNTER: {
    intro: "Escolha certo!",
    rounds: [
      { promptEn: "Complete: There ___ a tree.", promptPt: "Complete: There ___ a tree.", targetLabel: "is", objects: [
        { id: "a", label: "is", img: "", isTarget: true },
        { id: "b", label: "are", img: "" },
        { id: "c", label: "am", img: "" },
      ]},
      { promptEn: "Complete: There ___ five monkeys.", promptPt: "Complete: There ___ five monkeys.", targetLabel: "are", objects: [
        { id: "a", label: "is", img: "" },
        { id: "b", label: "are", img: "", isTarget: true },
        { id: "c", label: "am", img: "" },
      ]},
      { promptEn: "'Forest' é:", promptPt: "'Forest' é:", targetLabel: "Floresta", objects: [
        { id: "a", label: "Cidade", img: "" },
        { id: "b", label: "Floresta", img: "", isTarget: true },
        { id: "c", label: "Casa", img: "" },
      ]},
      { promptEn: "Plural de 'child':", promptPt: "Plural de 'child':", targetLabel: "children", objects: [
        { id: "a", label: "childs", img: "" },
        { id: "b", label: "children", img: "", isTarget: true },
        { id: "c", label: "childrens", img: "" },
      ]},
      { promptEn: "'Recycling' é:", promptPt: "'Recycling' é:", targetLabel: "Reciclagem", objects: [
        { id: "a", label: "Corrida", img: "" },
        { id: "b", label: "Reciclagem", img: "", isTarget: true },
        { id: "c", label: "Cozinha", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares da natureza!",
    pairs: [
      { id: "a", en: "Forest 🌲", pt: "Floresta", img: IMG.RAINBOW },
      { id: "b", en: "River 🏞️", pt: "Rio", img: IMG.RAINBOW },
      { id: "c", en: "Ocean 🌊", pt: "Oceano", img: IMG.RAINBOW },
      { id: "d", en: "Animals 🦁", pt: "Animais", img: IMG.DOG },
    ],
  },
  BOOK: {
    title: "Nature Explorer Journal",
    intro: "Seu diário de explorador da natureza!",
    pages: [
      { en: "Day 1 — I visited the forest.", pt: "Dia 1 — Visitei a floresta.", img: IMG.RAINBOW, badge: "🌲" },
      { en: "Day 2 — Saw a clean river.", pt: "Dia 2 — Vi um rio limpo.", img: IMG.RAINBOW, badge: "🏞️" },
      { en: "Day 3 — The ocean is huge!", pt: "Dia 3 — O oceano é enorme!", img: IMG.RAINBOW, badge: "🌊" },
      { en: "Day 4 — Climbed the mountains.", pt: "Dia 4 — Subi montanhas.", img: IMG.RAINBOW, badge: "⛰️" },
      { en: "Day 5 — Recycled at home.", pt: "Dia 5 — Reciclei em casa.", img: IMG.RAINBOW, badge: "♻️" },
      { en: "Final — I love nature!", pt: "Final — Amo natureza!", img: IMG.RAINBOW, badge: "💚" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "A floresta virtual! Toque nos elementos.",
    img: IMG.RAINBOW,
    items: [
      { en: "Tree", pt: "Árvore", emoji: "🌳" },
      { en: "River", pt: "Rio", emoji: "🏞️" },
      { en: "Bird", pt: "Pássaro", emoji: "🐦" },
      { en: "Monkey", pt: "Macaco", emoji: "🐒" },
      { en: "Flower", pt: "Flor", emoji: "🌸" },
      { en: "Recycle bin", pt: "Lixeira reciclável", emoji: "♻️" },
    ],
  },
  CULTURE: {
    title: "Nature Wonders 🌍",
    emoji: "🌎",
    paragraphs: [
      { en: "The Amazon rainforest, in Brazil, is the largest in the world!", pt: "A Floresta Amazônica é a maior do mundo!" },
      { en: "The Pacific Ocean covers 1/3 of our planet.", pt: "O Oceano Pacífico cobre 1/3 do planeta." },
      { pt: "Reciclar UMA garrafa economiza energia por 6 horas! Cada ação conta." },
    ],
  },
};

export default lesson;
