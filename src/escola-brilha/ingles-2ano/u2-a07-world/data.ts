// Ingles 2º Ano — Unit 7 "Around the World 🌍"
// Revisão global do 2º ano: rotina, casa, comida, roupa, comunidade, hobbies.

import __asset_lilyImg from "@/assets/ingles-1ano/u1-a01/lily.png.asset.json";
const lilyImg = __asset_lilyImg.url;
import benAsset from "@/assets/ingles-1ano/u1-a02/ben.png.asset.json";
import airportAsset from "@/assets/ingles-1ano/u1-a02/airport.png.asset.json";
import __asset_friendsImg from "@/assets/ingles-1ano/u1-a01/friends.png.asset.json";
const friendsImg = __asset_friendsImg.url;
import __asset_morningImg from "@/assets/ingles-1ano/u1-a01/good-morning.png.asset.json";
const morningImg = __asset_morningImg.url;
import type { LessonData } from "../../ingles-1ano/types";

const LILY = lilyImg;
const BEN = benAsset.url;
const AIRPORT = airportAsset.url;
const FRIENDS = friendsImg;
const MORNING = morningImg;

const lesson: LessonData = {
  slug: "u2-a07-world",
  meta: {
    unitLabel: "Unit 7 · Lesson 1 — Around the World 🌍",
    headerKicker: "My English Adventure — 2nd Grade",
    coverKicker: "Lesson 7 · FINAL",
    coverTitle: "Around the World 🌍",
    coverSubtitle:
      "Grande viagem final! Vamos revisar TUDO que aprendemos e conhecer amigos de outros países.",
    storyTitle: "Lily and Ben's World Trip",
    vocabularyTitle: "Global Review",
    speakingTargets: [
      "Hello! I'm from Brazil.",
      "I like pizza.",
      "I can dance.",
      "My house is big.",
      "It's sunny today.",
      "Nice to meet you!",
    ],
    listeningIntro: "Ouça amigos do mundo se apresentando.",
    listeningQuestion: 'Alice disse: "I\'m from the USA." De onde ela é?',
    listeningOptions: ["EUA 🇺🇸", "Brasil 🇧🇷", "Japão 🇯🇵"],
    listeningCorrect: "EUA 🇺🇸",
    listeningWrongHint: '"USA" = Estados Unidos.',
    readingNarration:
      'Revisão: "I\'m from ___" (sou de ___), "I like ___", "I can ___", "It\'s ___" (tempo), "This is my ___". Tudo junto!',
    grammarNarration:
      'Revisão do 2º ano: I am / I like / I can / I have / This is / There is. São as 6 fórmulas mais importantes. Se souber essas, você fala em inglês em qualquer lugar do mundo!',
    finalProjectIntro: "Se apresente pro mundo:",
    finalProjectPhrase: (name: string) =>
      `Hello, world! My name is ${name}. I'm from Brazil. I like pizza and I can dance. My house is nice and my community is fun. Nice to meet you!`,
    finalProjectSectionTitle: "My English Passport Book",
  },

  VOCAB: [
    { id: "brazil", en: "Brazil 🇧🇷", pt: "Brasil", img: AIRPORT },
    { id: "usa", en: "USA 🇺🇸", pt: "EUA", img: AIRPORT },
    { id: "uk", en: "UK 🇬🇧", pt: "Reino Unido", img: AIRPORT },
    { id: "japan", en: "Japan 🇯🇵", pt: "Japão", img: AIRPORT },
    { id: "hello", en: "Hello 👋", pt: "Oi", img: FRIENDS },
    { id: "friend", en: "Friend 🤝", pt: "Amigo", img: FRIENDS },
    { id: "world", en: "World 🌍", pt: "Mundo", img: AIRPORT },
    { id: "trip", en: "Trip ✈️", pt: "Viagem", img: AIRPORT },
  ],

  STORY: [
    { img: AIRPORT, en: "Lily and Ben are at the airport.", pt: "Lily e Ben estão no aeroporto." },
    { img: LILY, en: "They travel around the world!", pt: "Eles viajam pelo mundo!" },
    { img: FRIENDS, en: "In the USA they meet Alice.", pt: "Nos EUA conhecem a Alice." },
    { img: MORNING, en: "Alice says: 'I like pancakes for breakfast.'", pt: "Alice diz: 'Gosto de panqueca no café.'" },
    { img: FRIENDS, en: "In the UK they meet Tom.", pt: "No Reino Unido conhecem o Tom." },
    { img: BEN, en: "Tom says: 'It's rainy today.'", pt: "Tom diz: 'Está chovendo hoje.'" },
    { img: FRIENDS, en: "In Japan they meet Yuki.", pt: "No Japão conhecem a Yuki." },
    { img: LILY, en: "Yuki says: 'I can speak two languages!'", pt: "Yuki diz: 'Sei falar duas línguas!'" },
  ],

  DIALOG: [
    { who: "Alice", img: FRIENDS, en: "Hi! I'm Alice. I'm from the USA.", pt: "Oi! Sou Alice. Sou dos EUA." },
    { who: "Lily", img: LILY, en: "Nice to meet you! I'm from Brazil.", pt: "Prazer! Sou do Brasil." },
    { who: "Alice", img: FRIENDS, en: "Do you like pizza?", pt: "Você gosta de pizza?" },
    { who: "Lily", img: LILY, en: "Yes, I love it! Can you dance samba?", pt: "Sim, amo! Você sabe dançar samba?" },
    { who: "Alice", img: FRIENDS, en: "No, I can't. But I can dance ballet.", pt: "Não sei. Mas sei balé." },
    { who: "Lily", img: LILY, en: "Cool! Teach me!", pt: "Legal! Me ensina!" },
  ],

  READING: {
    title: "Hello, World!",
    img: AIRPORT,
    parts: [
      { en: "I'm from Brazil.", pt: "Sou do Brasil.", highlight: ["from"] },
      { en: "I like Brazilian food.", pt: "Gosto de comida brasileira.", highlight: ["like"] },
      { en: "I can speak Portuguese.", pt: "Sei falar português.", highlight: ["can"] },
      { en: "I'm learning English.", pt: "Estou aprendendo inglês.", highlight: ["learning"] },
      { en: "Hello, world! Nice to meet you!", pt: "Oi, mundo! Prazer!", highlight: ["Nice to meet you"] },
    ],
  },

  WRITING: [
    { prompt: "I'm ______ Brazil. (🇧🇷)", answer: "from", hint: "Origem.", options: ["from", "in", "at"] },
    { prompt: "I ______ pizza. (❤️)", answer: "like", hint: "Gostar.", options: ["like", "am", "can"] },
    { prompt: "I ______ dance. (💃)", answer: "can", hint: "Habilidade.", options: ["can", "like", "am"] },
    { prompt: "It's ______ today. (☀️)", answer: "sunny", hint: "Tempo com sol.", options: ["sunny", "chair", "pizza"] },
    { prompt: "Nice to ______ you! (🤝)", answer: "meet", hint: "Conhecer.", options: ["meet", "eat", "sleep"] },
  ],

  QUIZ: [
    { q: "Como se apresentar?", options: [{ text: "Hello, I'm Lily", correct: true }, { text: "Hello, is Lily" }, { text: "Lily hello" }] },
    { q: "'Sou do Brasil' em inglês:", options: [{ text: "I from Brazil" }, { text: "I'm from Brazil", correct: true }, { text: "I am Brazil" }] },
    { q: "Como digo 'Prazer em conhecer'?", options: [{ text: "Nice to meet you", correct: true }, { text: "Nice meeting" }, { text: "Meet nice" }] },
    { q: "Habilidade: 'Sei nadar' = ?", options: [{ text: "I can swim", correct: true }, { text: "I swim" }, { text: "I like swim" }] },
    { q: "Tempo: 'Está chovendo' = ?", options: [{ text: "It's rain" }, { text: "It's raining", correct: true }, { text: "Rain today" }] },
  ],

  REAL_LIFE: [
    { situation: "🌍 Você conhece alguém de outro país.", answer: "Hi! Nice to meet you. I'm from Brazil." },
    { situation: "🍕 Alguém pergunta o que você gosta de comer.", answer: "I like pizza and fruits." },
    { situation: "⚽ Alguém pergunta o que você sabe fazer.", answer: "I can play soccer and dance." },
    { situation: "🏠 Alguém pergunta como é sua casa.", answer: "My house is big. There is a big living room." },
    { situation: "✈️ Fim da viagem — despedida.", answer: "Goodbye! See you soon!" },
  ],

  GRAMMAR: {
    focus: "Revisão: I'm / I like / I can / It's / This is / There is",
    why:
      'Estas são as 6 fórmulas mestres do 2º ano. Com elas você fala de você, gostos, habilidades, tempo, apresentações e coisas que existem. É a base de TUDO em inglês!',
    examples: [
      { en: "I'm from Brazil.", pt: "Sou do Brasil." },
      { en: "I like pizza.", pt: "Gosto de pizza." },
      { en: "I can dance.", pt: "Sei dançar." },
      { en: "It's sunny.", pt: "Está ensolarado." },
      { en: "This is my house.", pt: "Esta é minha casa." },
      { en: "There is a park nearby.", pt: "Há um parque perto." },
    ],
    errors: [
      { wrong: "I like to pizza.", right: "I like pizza.", why: 'Com comida, não use "to" depois de "like".' },
      { wrong: "I from Brazil.", right: "I\'m from Brazil.", why: 'Sempre precisa do "am" (\'m).' },
    ],
  },

  SONG: {
    title: "Hello, World!",
    hookPt: "Última música do ano — abraça o mundo!",
    verses: [
      { en: "Hello, hello,", pt: "Oi, oi,", emoji: "👋" },
      { en: "Hello, world!", pt: "Oi, mundo!", emoji: "🌍" },
      { en: "I'm from Brazil,", pt: "Sou do Brasil,", emoji: "🇧🇷" },
      { en: "I'm a happy girl/boy!", pt: "Sou feliz!", emoji: "😊" },
      { en: "I like pizza,", pt: "Gosto de pizza,", emoji: "🍕" },
      { en: "I can dance,", pt: "Sei dançar,", emoji: "💃" },
      { en: "This is my chance,", pt: "Essa é minha chance,", emoji: "🌟" },
      { en: "To speak English — YES!", pt: "De falar inglês — SIM!", emoji: "🎉" },
    ],
  },

  HUNTER: {
    intro: "Grande revisão! Toque na resposta certa.",
    rounds: [
      { promptEn: "'I like ___' — food you love!", promptPt: "'Eu gosto de ___' — comida!", targetLabel: "Pizza",
        objects: [
          { id: "pizza", label: "Pizza 🍕", img: "", isTarget: true },
          { id: "chair", label: "Chair 🪑", img: "" },
          { id: "run", label: "Run 🏃", img: "" },
        ] },
      { promptEn: "Weather word:", promptPt: "Palavra de tempo:", targetLabel: "Sunny",
        objects: [
          { id: "sunny", label: "Sunny ☀️", img: "", isTarget: true },
          { id: "table", label: "Table 🍽️", img: "" },
          { id: "sing", label: "Sing 🎤", img: "" },
        ] },
      { promptEn: "Ability:", promptPt: "Habilidade:", targetLabel: "Dance",
        objects: [
          { id: "dance", label: "Dance 💃", img: "", isTarget: true },
          { id: "apple", label: "Apple 🍎", img: "" },
          { id: "cold", label: "Cold ❄️", img: "" },
        ] },
      { promptEn: "Place in the neighborhood:", promptPt: "Lugar do bairro:", targetLabel: "School",
        objects: [
          { id: "school", label: "School 🏫", img: "", isTarget: true },
          { id: "banana", label: "Banana 🍌", img: "" },
          { id: "swim", label: "Swim 🏊", img: "" },
        ] },
      { promptEn: "Room of the house:", promptPt: "Cômodo:", targetLabel: "Kitchen",
        objects: [
          { id: "kitchen", label: "Kitchen 🍳", img: "", isTarget: true },
          { id: "trip", label: "Trip ✈️", img: "" },
          { id: "shorts", label: "Shorts 🩳", img: "" },
        ] },
    ],
  },

  PACK: {
    intro: "Você vai viajar pelo mundo! O que levar na mala?",
    backpackImg: AIRPORT,
    items: [
      { id: "passport", en: "Passport", pt: "Passaporte", emoji: "🛂", belongs: true },
      { id: "camera", en: "Camera", pt: "Câmera", emoji: "📷", belongs: true },
      { id: "clothes", en: "Clothes", pt: "Roupas", emoji: "👕", belongs: true },
      { id: "book", en: "Phrase book", pt: "Livro de frases", emoji: "📖", belongs: true },
      { id: "toothbrush", en: "Toothbrush", pt: "Escova", emoji: "🪥", belongs: true },
      { id: "sofa", en: "Sofa", pt: "Sofá", emoji: "🛋️", belongs: false },
      { id: "fridge", en: "Fridge", pt: "Geladeira", emoji: "🧊", belongs: false },
      { id: "bed", en: "Bed", pt: "Cama", emoji: "🛏️", belongs: false },
    ],
  },

  COMMANDS: {
    intro: "Grande desafio final! Escolha a fórmula certa!",
    rounds: [
      { promptEn: "How to say 'I'm from Brazil'?", promptPt: "Como dizer 'Sou do Brasil'?",
        actions: [
          { id: "ok", en: "I'm from Brazil", pt: "Certo!", emoji: "✅", isTarget: true },
          { id: "no1", en: "I from Brazil", pt: "Errado", emoji: "❌" },
          { id: "no2", en: "I am Brazil", pt: "Errado", emoji: "❌" },
        ] },
      { promptEn: "How to say 'I like pizza'?", promptPt: "Como dizer 'Gosto de pizza'?",
        actions: [
          { id: "ok", en: "I like pizza", pt: "Certo!", emoji: "✅", isTarget: true },
          { id: "no1", en: "I liking pizza", pt: "Errado", emoji: "❌" },
          { id: "no2", en: "I am pizza", pt: "Errado", emoji: "❌" },
        ] },
      { promptEn: "How to say 'I can dance'?", promptPt: "Como dizer 'Sei dançar'?",
        actions: [
          { id: "ok", en: "I can dance", pt: "Certo!", emoji: "✅", isTarget: true },
          { id: "no1", en: "I can to dance", pt: "Errado", emoji: "❌" },
          { id: "no2", en: "I dance can", pt: "Errado", emoji: "❌" },
        ] },
      { promptEn: "How to say 'It's raining'?", promptPt: "Como dizer 'Está chovendo'?",
        actions: [
          { id: "ok", en: "It's raining", pt: "Certo!", emoji: "✅", isTarget: true },
          { id: "no1", en: "It rain", pt: "Errado", emoji: "❌" },
          { id: "no2", en: "Is rain", pt: "Errado", emoji: "❌" },
        ] },
    ],
  },

  MEMORY: {
    intro: "Ache os pares — revisão global!",
    pairs: [
      { id: "brazil", en: "Brazil 🇧🇷", pt: "Brasil", img: AIRPORT },
      { id: "pizza", en: "Pizza 🍕", pt: "Pizza", img: MORNING },
      { id: "dance", en: "Dance 💃", pt: "Dançar", img: LILY },
      { id: "friend", en: "Friend 🤝", pt: "Amigo", img: FRIENDS },
    ],
  },

  CULTURE: {
    title: "One World, Many Cultures 🌍",
    emoji: "🤝",
    paragraphs: [
      { en: "There are more than 190 countries in the world.", pt: "Existem mais de 190 países no mundo." },
      { en: "English is spoken in many countries — a global language!", pt: "O inglês é falado em muitos países — uma língua global!" },
      { pt: "Agora você faz parte desse mundo em inglês! Parabéns! 🎉" },
    ],
  },

  BOOK: {
    title: "My English Passport Book",
    intro: "Seu passaporte para o mundo em inglês!",
    pages: [
      { en: "Hello! I'm from Brazil.", pt: "Oi! Sou do Brasil.", img: AIRPORT, badge: "🇧🇷" },
      { en: "I like Brazilian food.", pt: "Gosto de comida brasileira.", img: MORNING, badge: "🍕" },
      { en: "I can play soccer.", pt: "Sei jogar futebol.", img: FRIENDS, badge: "⚽" },
      { en: "My house is cozy.", pt: "Minha casa é aconchegante.", img: LILY, badge: "🏠" },
      { en: "It's sunny in my city.", pt: "Está ensolarado na minha cidade.", img: MORNING, badge: "☀️" },
      { en: "Nice to meet you, world!", pt: "Prazer, mundo!", img: BEN, badge: "🌍" },
    ],
  },

  VIRTUAL_ROOM: {
    intro: "Grande revisão! Toque em cada bandeira/tema aprendido!",
    img: AIRPORT,
    items: [
      { en: "Brazil", pt: "Brasil", emoji: "🇧🇷" },
      { en: "USA", pt: "EUA", emoji: "🇺🇸" },
      { en: "Food", pt: "Comida", emoji: "🍕" },
      { en: "Sports", pt: "Esportes", emoji: "⚽" },
      { en: "House", pt: "Casa", emoji: "🏠" },
      { en: "Weather", pt: "Tempo", emoji: "☀️" },
    ],
  },
};

export default lesson;
