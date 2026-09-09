// Ingles 2º Ano — Unit 4 "Clothes and Weather 👕☀️"
// Roupas, tempo, "It's sunny / I'm wearing..."

import __asset_lilyImg from "@/assets/ingles-1ano/u1-a01/lily.png.asset.json";
const lilyImg = __asset_lilyImg.url;
import benAsset from "@/assets/ingles-1ano/u1-a02/ben.png.asset.json";
import __asset_morningImg from "@/assets/ingles-1ano/u1-a01/good-morning.png.asset.json";
const morningImg = __asset_morningImg.url;
import type { LessonData } from "../../ingles-1ano/types";

const LILY = lilyImg;
const BEN = benAsset.url;
const WEATHER = morningImg;

const lesson: LessonData = {
  slug: "u2-a04-clothes",
  meta: {
    unitLabel: "Unit 4 · Lesson 1 — Clothes and Weather 👕☀️",
    headerKicker: "My English Adventure — 2nd Grade",
    coverKicker: "Lesson 4",
    coverTitle: "Clothes and Weather 👕☀️",
    coverSubtitle:
      "O tempo mudou! Vamos aprender a falar do clima e escolher a roupa certa em inglês.",
    storyTitle: "What Should I Wear?",
    vocabularyTitle: "Clothes & Weather",
    speakingTargets: [
      "It's sunny today.",
      "It's raining.",
      "It's cold.",
      "I'm wearing a T-shirt.",
      "I'm wearing shorts.",
      "Put on your jacket!",
    ],
    listeningIntro: "Escute a Lily falando do tempo.",
    listeningQuestion: 'Lily disse: "It\'s raining." Como está o tempo?',
    listeningOptions: ["Chuva ☔", "Sol ☀️", "Neve ❄️"],
    listeningCorrect: "Chuva ☔",
    listeningWrongHint: '"Rain" = chuva. "Raining" = chovendo.',
    readingNarration:
      'Palavras do tempo: sunny (ensolarado), rainy (chuvoso), cold (frio), hot (quente). Roupas: T-shirt, shorts, jacket, boots.',
    grammarNarration:
      '"It\'s ___" pra falar do tempo: It\'s sunny. It\'s cold. "I\'m wearing ___" pra dizer o que está vestindo: I\'m wearing a T-shirt.',
    finalProjectIntro: "Descreva o seu look de hoje:",
    finalProjectPhrase: (name: string) =>
      `Hi! My name is ${name}. Today it's sunny. I'm wearing a T-shirt and shorts. I like this weather!`,
    finalProjectSectionTitle: "My Weather Diary",
  },

  VOCAB: [
    { id: "sunny", en: "Sunny ☀️", pt: "Ensolarado", img: WEATHER },
    { id: "rainy", en: "Rainy ☔", pt: "Chuvoso", img: WEATHER },
    { id: "cold", en: "Cold ❄️", pt: "Frio", img: WEATHER },
    { id: "hot", en: "Hot 🌡️", pt: "Quente", img: WEATHER },
    { id: "tshirt", en: "T-shirt 👕", pt: "Camiseta", img: LILY },
    { id: "shorts", en: "Shorts 🩳", pt: "Bermuda", img: BEN },
    { id: "jacket", en: "Jacket 🧥", pt: "Jaqueta", img: LILY },
    { id: "boots", en: "Boots 🥾", pt: "Botas", img: BEN },
  ],

  STORY: [
    { img: WEATHER, en: "Today it's sunny and hot.", pt: "Hoje está ensolarado e quente." },
    { img: LILY, en: "Lily wears a T-shirt and shorts.", pt: "Lily veste camiseta e bermuda." },
    { img: WEATHER, en: "But look! It starts to rain.", pt: "Mas olha! Começa a chover." },
    { img: BEN, en: "Ben puts on his jacket.", pt: "Ben coloca a jaqueta." },
    { img: LILY, en: "Lily puts on her boots.", pt: "Lily calça as botas." },
    { img: WEATHER, en: "Now it's cold and rainy.", pt: "Agora está frio e chuvoso." },
    { img: BEN, en: "They run home fast!", pt: "Eles correm pra casa rápido!" },
    { img: WEATHER, en: "Weather changes fast — always check!", pt: "O tempo muda rápido — sempre olhe!" },
  ],

  DIALOG: [
    { who: "Ben", img: BEN, en: "How's the weather today?", pt: "Como está o tempo hoje?" },
    { who: "Lily", img: LILY, en: "It's sunny and warm.", pt: "Está ensolarado e quentinho." },
    { who: "Ben", img: BEN, en: "What are you wearing?", pt: "O que você tá vestindo?" },
    { who: "Lily", img: LILY, en: "I'm wearing a T-shirt and shorts.", pt: "Estou de camiseta e bermuda." },
    { who: "Ben", img: BEN, en: "Nice! Let's go to the park!", pt: "Legal! Vamos pro parque!" },
    { who: "Lily", img: LILY, en: "Wait, take a jacket. It might rain.", pt: "Espera, leva jaqueta. Pode chover." },
  ],

  READING: {
    title: "Today's Weather",
    img: WEATHER,
    parts: [
      { en: "It's sunny today.", pt: "Está ensolarado hoje.", highlight: ["sunny"] },
      { en: "I'm wearing a T-shirt.", pt: "Estou de camiseta.", highlight: ["wearing"] },
      { en: "It's raining now.", pt: "Está chovendo agora.", highlight: ["raining"] },
      { en: "I need my jacket.", pt: "Preciso da minha jaqueta.", highlight: ["jacket"] },
      { en: "It's cold in winter.", pt: "Faz frio no inverno.", highlight: ["cold"] },
    ],
  },

  WRITING: [
    { prompt: "It's ______ today. (☀️)", answer: "sunny", hint: "Muito sol.", options: ["sunny", "cold", "rainy"] },
    { prompt: "I'm ______ a T-shirt. (👕)", answer: "wearing", hint: "Vestindo.", options: ["wearing", "eating", "going"] },
    { prompt: "Put on your ______. (🧥)", answer: "jacket", hint: "Casaco pra frio.", options: ["jacket", "T-shirt", "shorts"] },
    { prompt: "It's ______. Take an umbrella! (☔)", answer: "raining", hint: "Água caindo.", options: ["raining", "sunny", "hot"] },
    { prompt: "In winter it's very ______. (❄️)", answer: "cold", hint: "Baixa temperatura.", options: ["cold", "hot", "sunny"] },
  ],

  QUIZ: [
    { q: "Como digo 'está chovendo'?", options: [{ text: "It's raining", correct: true }, { text: "It's sunny" }, { text: "It's cold" }] },
    { q: "Frio → o que vestir?", options: [{ text: "Shorts" }, { text: "Jacket", correct: true }, { text: "T-shirt" }] },
    { q: "Complete: I'm ______ a jacket.", options: [{ text: "wearing", correct: true }, { text: "eat" }, { text: "go" }] },
    { q: "Como digo 'quente'?", options: [{ text: "Hot", correct: true }, { text: "Cold" }, { text: "Rainy" }] },
    { q: "Dia de sol → o que calçar?", options: [{ text: "Boots" }, { text: "Sandals ou tênis", correct: true }, { text: "Jacket" }] },
  ],

  REAL_LIFE: [
    { situation: "☀️ Amigo pergunta como está o tempo.", answer: "It's sunny and warm." },
    { situation: "☔ Começou a chover.", answer: "Oh no, it's raining. I need an umbrella." },
    { situation: "❄️ Sua mãe manda vestir agasalho.", answer: "OK, I'll wear my jacket." },
    { situation: "👕 Alguém pergunta o que você tá vestindo.", answer: "I'm wearing a T-shirt and jeans." },
    { situation: "🥾 Dia chuvoso — que sapato usar?", answer: "I wear my boots." },
  ],

  GRAMMAR: {
    focus: "It's ___ (tempo) / I'm wearing ___ (roupa)",
    why:
      '"It\'s ___" descreve o tempo (clima): It\'s sunny. It\'s raining. "I\'m wearing ___" descreve a roupa que você tá usando AGORA: I\'m wearing a T-shirt.',
    examples: [
      { en: "It's cold.", pt: "Está frio." },
      { en: "It's raining.", pt: "Está chovendo." },
      { en: "I'm wearing a jacket.", pt: "Estou de jaqueta." },
      { en: "She is wearing boots.", pt: "Ela está de botas." },
    ],
    errors: [
      { wrong: "It cold today.", right: "It's cold today.", why: 'Precisa do "\'s" (= is).' },
      { wrong: "I wear a jacket now.", right: "I'm wearing a jacket now.", why: 'Ação agora = "I\'m + verbo-ing".' },
    ],
  },

  SONG: {
    title: "How's the Weather?",
    hookPt: "Cante olhando pela janela!",
    verses: [
      { en: "How's the weather,", pt: "Como está o tempo,", emoji: "🌦️" },
      { en: "How's the weather today?", pt: "Como está o tempo hoje?", emoji: "❓" },
      { en: "Is it sunny?", pt: "Está sol?", emoji: "☀️" },
      { en: "Is it rainy?", pt: "Está chuva?", emoji: "☔" },
      { en: "Is it cold or hot today?", pt: "Frio ou calor hoje?", emoji: "🌡️" },
      { en: "I put on my jacket,", pt: "Eu visto a jaqueta,", emoji: "🧥" },
      { en: "I put on my boots,", pt: "Eu calço as botas,", emoji: "🥾" },
      { en: "Ready for the weather too!", pt: "Pronto pro tempo também!", emoji: "😊" },
    ],
  },

  HUNTER: {
    intro: "Que roupa combina com o tempo? Toque na certa!",
    rounds: [
      { promptEn: "It's cold! Wear...", promptPt: "Está frio! Vista...", targetLabel: "Jacket",
        objects: [
          { id: "jacket", label: "Jacket 🧥", img: "", isTarget: true },
          { id: "shorts", label: "Shorts 🩳", img: "" },
          { id: "tshirt", label: "T-shirt 👕", img: "" },
        ] },
      { promptEn: "It's hot! Wear...", promptPt: "Está calor! Vista...", targetLabel: "T-shirt",
        objects: [
          { id: "tshirt", label: "T-shirt 👕", img: "", isTarget: true },
          { id: "jacket", label: "Jacket 🧥", img: "" },
          { id: "boots", label: "Boots 🥾", img: "" },
        ] },
      { promptEn: "It's raining! Wear...", promptPt: "Está chovendo! Calce...", targetLabel: "Boots",
        objects: [
          { id: "boots", label: "Boots 🥾", img: "", isTarget: true },
          { id: "tshirt", label: "T-shirt 👕", img: "" },
          { id: "shorts", label: "Shorts 🩳", img: "" },
        ] },
      { promptEn: "It's sunny! Wear...", promptPt: "Está ensolarado! Vista...", targetLabel: "Shorts",
        objects: [
          { id: "shorts", label: "Shorts 🩳", img: "", isTarget: true },
          { id: "jacket", label: "Jacket 🧥", img: "" },
          { id: "boots", label: "Boots 🥾", img: "" },
        ] },
      { promptEn: "It's snowing! Wear...", promptPt: "Nevando! Vista...", targetLabel: "Jacket",
        objects: [
          { id: "jacket", label: "Jacket 🧥", img: "", isTarget: true },
          { id: "shorts", label: "Shorts 🩳", img: "" },
          { id: "tshirt", label: "T-shirt 👕", img: "" },
        ] },
    ],
  },

  PACK: {
    intro: "Faz a mala pra praia! Toque só nos itens de praia (dia quente).",
    backpackImg: WEATHER,
    items: [
      { id: "tshirt", en: "T-shirt", pt: "Camiseta", emoji: "👕", belongs: true },
      { id: "shorts", en: "Shorts", pt: "Bermuda", emoji: "🩳", belongs: true },
      { id: "hat", en: "Hat", pt: "Chapéu", emoji: "🧢", belongs: true },
      { id: "sunglasses", en: "Sunglasses", pt: "Óculos", emoji: "🕶️", belongs: true },
      { id: "flipflop", en: "Sandals", pt: "Chinelo", emoji: "🩴", belongs: true },
      { id: "jacket", en: "Jacket", pt: "Jaqueta", emoji: "🧥", belongs: false },
      { id: "boots", en: "Boots", pt: "Botas", emoji: "🥾", belongs: false },
      { id: "gloves", en: "Gloves", pt: "Luvas", emoji: "🧤", belongs: false },
    ],
  },

  COMMANDS: {
    intro: "Ouça o tempo e mostre a roupa certa!",
    rounds: [
      { promptEn: "It's cold — put on a...", promptPt: "Está frio — vista uma...",
        actions: [
          { id: "jacket", en: "Jacket", pt: "Jaqueta", emoji: "🧥", isTarget: true },
          { id: "shorts", en: "Shorts", pt: "Bermuda", emoji: "🩳" },
          { id: "tshirt", en: "T-shirt", pt: "Camiseta", emoji: "👕" },
        ] },
      { promptEn: "It's raining — put on...", promptPt: "Chuva — calce...",
        actions: [
          { id: "boots", en: "Boots", pt: "Botas", emoji: "🥾", isTarget: true },
          { id: "tshirt", en: "T-shirt", pt: "Camiseta", emoji: "👕" },
          { id: "shorts", en: "Shorts", pt: "Bermuda", emoji: "🩳" },
        ] },
      { promptEn: "It's sunny — wear...", promptPt: "Sol — vista...",
        actions: [
          { id: "shorts", en: "Shorts", pt: "Bermuda", emoji: "🩳", isTarget: true },
          { id: "jacket", en: "Jacket", pt: "Jaqueta", emoji: "🧥" },
          { id: "boots", en: "Boots", pt: "Botas", emoji: "🥾" },
        ] },
      { promptEn: "It's hot — wear a...", promptPt: "Calor — vista uma...",
        actions: [
          { id: "tshirt", en: "T-shirt", pt: "Camiseta", emoji: "👕", isTarget: true },
          { id: "jacket", en: "Jacket", pt: "Jaqueta", emoji: "🧥" },
          { id: "boots", en: "Boots", pt: "Botas", emoji: "🥾" },
        ] },
    ],
  },

  MEMORY: {
    intro: "Ache os pares tempo ↔ roupa.",
    pairs: [
      { id: "sunny", en: "Sunny ☀️", pt: "Sol", img: WEATHER },
      { id: "rain", en: "Rainy ☔", pt: "Chuva", img: WEATHER },
      { id: "jacket", en: "Jacket 🧥", pt: "Jaqueta", img: LILY },
      { id: "boots", en: "Boots 🥾", pt: "Botas", img: BEN },
    ],
  },

  CULTURE: {
    title: "Seasons Around the World 🌍",
    emoji: "🍂",
    paragraphs: [
      { en: "In the USA and UK, there are 4 seasons: spring, summer, fall, winter.", pt: "Nos EUA e Reino Unido há 4 estações: primavera, verão, outono, inverno." },
      { en: "In many places in Brazil, it's warm almost all year!", pt: "Em muitos lugares do Brasil, faz calor quase o ano todo!" },
      { pt: "Que tempo faz na sua cidade hoje? 🌤️" },
    ],
  },

  BOOK: {
    title: "My Weather Diary",
    intro: "Uma página, um dia.",
    pages: [
      { en: "Monday: It's sunny.", pt: "Segunda: Está ensolarado.", img: WEATHER, badge: "☀️" },
      { en: "Tuesday: It's rainy.", pt: "Terça: Está chuvoso.", img: WEATHER, badge: "☔" },
      { en: "Wednesday: It's cold.", pt: "Quarta: Está frio.", img: WEATHER, badge: "❄️" },
      { en: "Thursday: I wear a jacket.", pt: "Quinta: Uso jaqueta.", img: LILY, badge: "🧥" },
      { en: "Friday: I wear shorts.", pt: "Sexta: Uso bermuda.", img: BEN, badge: "🩳" },
      { en: "Weekend: Weather is fun!", pt: "Fim de semana: Tempo é divertido!", img: WEATHER, badge: "🌈" },
    ],
  },

  VIRTUAL_ROOM: {
    intro: "Toque em cada tipo de tempo e roupa!",
    img: WEATHER,
    items: [
      { en: "Sunny", pt: "Sol", emoji: "☀️" },
      { en: "Rainy", pt: "Chuva", emoji: "☔" },
      { en: "Cold", pt: "Frio", emoji: "❄️" },
      { en: "T-shirt", pt: "Camiseta", emoji: "👕" },
      { en: "Jacket", pt: "Jaqueta", emoji: "🧥" },
      { en: "Boots", pt: "Botas", emoji: "🥾" },
    ],
  },
};

export default lesson;
