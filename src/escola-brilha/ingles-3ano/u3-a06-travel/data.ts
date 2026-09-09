// Ingles 3º Ano — Unit 6 "Time to Travel ✈️"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u3-a06-travel",
  meta: {
    unitLabel: "Unit 6 · Lesson 6 — Time to Travel ✈️",
    headerKicker: "My English Adventure — 3rd Grade",
    coverKicker: "Lesson 6",
    coverTitle: "Time to Travel ✈️",
    coverSubtitle:
      "Pega a mala e o passaporte! Vamos aprender a viajar em inglês — aeroporto, hotel, praia, montanha e como dizer o que a gente quer fazer.",
    storyTitle: "Lily's Dream Trip",
    vocabularyTitle: "Travel Words",
    speakingTargets: [
      "I want to travel.",
      "Where is the airport?",
      "Can I have a ticket?",
      "I can swim in the ocean.",
      "I can't drive a car.",
      "I want to go to the beach.",
    ],
    listeningIntro: "Ouça Lily planejando a viagem dos sonhos.",
    listeningQuestion: 'Lily disse: "I want to go to the beach." Aonde ela quer ir?',
    listeningOptions: ["Montanha", "Praia", "Aeroporto"],
    listeningCorrect: "Praia",
    listeningWrongHint: '"Beach" = praia.',
    readingNarration:
      'Duas novidades importantes: CAN / CAN\'T (poder / não poder) e WANT TO + verbo (querer fazer algo).',
    grammarNarration:
      'CAN = habilidade: "I can swim". CAN\'T = não sei/não posso: "I can\'t drive". WANT TO = desejo: "I want to travel" (Eu quero viajar).',
    finalProjectIntro: "Vamos criar seu Dream Trip! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `${name}'s Dream Trip: I want to travel to Hawaii! I can swim in the ocean. I want to eat pineapple on the beach. Can I have a ticket, please?`,
    finalProjectSectionTitle: "My Dream Trip",
  },
  VOCAB: [
    { id: "airport", en: "Airport ✈️", pt: "Aeroporto", img: IMG.AIRPORT },
    { id: "ticket", en: "Ticket 🎫", pt: "Passagem", img: IMG.PASSPORT },
    { id: "suitcase", en: "Suitcase 🧳", pt: "Mala", img: IMG.BACKPACK },
    { id: "hotel", en: "Hotel 🏨", pt: "Hotel", img: IMG.CLASSROOM },
    { id: "beach", en: "Beach 🏖️", pt: "Praia", img: IMG.RAINBOW },
    { id: "mountain", en: "Mountain 🏔️", pt: "Montanha", img: IMG.RAINBOW },
    { id: "train", en: "Train 🚆", pt: "Trem", img: IMG.AIRPORT },
    { id: "airplane", en: "Airplane 🛩️", pt: "Avião", img: IMG.AIRPORT },
    { id: "passport", en: "Passport 📔", pt: "Passaporte", img: IMG.PASSPORT },
  ],
  STORY: [
    { img: IMG.LILY, en: "Lily wants to travel to a new country.", pt: "Lily quer viajar pra um país novo." },
    { img: IMG.BACKPACK, en: "She packs her suitcase and passport.", pt: "Ela arruma a mala e o passaporte." },
    { img: IMG.AIRPORT, en: "At the airport, she buys a ticket.", pt: "No aeroporto, ela compra a passagem." },
    { img: IMG.AIRPORT, en: "She gets on the airplane. Ready to fly!", pt: "Ela entra no avião. Prontinha pra voar!" },
    { img: IMG.RAINBOW, en: "She arrives at the beach. She can swim!", pt: "Ela chega na praia. Ela sabe nadar!" },
    { img: IMG.LILY, en: "'What a wonderful trip!' she says.", pt: "'Que viagem maravilhosa!', ela diz." },
  ],
  DIALOG: [
    { who: "Lily", img: IMG.LILY, en: "Can I have a ticket to Rio, please?", pt: "Posso comprar uma passagem pro Rio?" },
    { who: "Ben", img: IMG.BEN, en: "Sure! When do you want to travel?", pt: "Claro! Quando quer viajar?" },
    { who: "Lily", img: IMG.LILY, en: "I want to travel on Friday.", pt: "Quero viajar na sexta." },
    { who: "Ben", img: IMG.BEN, en: "Can you swim?", pt: "Você sabe nadar?" },
    { who: "Lily", img: IMG.LILY, en: "Yes, I can swim! I love the beach.", pt: "Sim, sei nadar! Amo praia." },
    { who: "Ben", img: IMG.BEN, en: "Great! Here is your ticket. Have a nice trip!", pt: "Ótimo! Aqui sua passagem. Boa viagem!" },
  ],
  READING: {
    title: "My Trip",
    img: IMG.AIRPORT,
    parts: [
      { en: "I want to travel by plane.", pt: "Quero viajar de avião.", highlight: ["want to"] },
      { en: "I can swim in the ocean.", pt: "Sei nadar no mar.", highlight: ["can"] },
      { en: "I can't drive a car.", pt: "Não sei dirigir.", highlight: ["can't"] },
      { en: "Where is the airport?", pt: "Onde é o aeroporto?", highlight: ["Where is"] },
      { en: "Can I have a ticket, please?", pt: "Posso pegar uma passagem?", highlight: ["Can I have"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ swim in the ocean. (sei)", answer: "can", hint: "Habilidade.", options: ["can", "can't", "want"] },
    { prompt: "I ______ drive a car. (não sei)", answer: "can't", hint: "Negativa de can.", options: ["can't", "can", "don't"] },
    { prompt: "I want ______ travel to Paris.", answer: "to", hint: "Sempre WANT + TO + verbo.", options: ["to", "at", "in"] },
    { prompt: "Where ______ the airport?", answer: "is", hint: "TO BE singular.", options: ["is", "are", "am"] },
    { prompt: "______ I have a ticket?", answer: "Can", hint: "Pedido educado.", options: ["Can", "Am", "Do"] },
  ],
  QUIZ: [
    { q: "'I can swim' significa:", options: [{ text: "Eu sei nadar", correct: true }, { text: "Eu não sei nadar" }, { text: "Eu quero nadar" }] },
    { q: "Complete: I want ___ travel.", options: [{ text: "at" }, { text: "to", correct: true }, { text: "in" }] },
    { q: "Como pedir uma passagem?", options: [{ text: "Can I have a ticket?", correct: true }, { text: "Where is a ticket?" }, { text: "I ticket." }] },
    { q: "'Airport' significa:", options: [{ text: "Aeroporto", correct: true }, { text: "Hotel" }, { text: "Praia" }] },
    { q: "Qual meio de transporte anda em trilhos?", options: [{ text: "Airplane" }, { text: "Train", correct: true }, { text: "Bus" }] },
  ],
  REAL_LIFE: [
    { situation: "✈️ No aeroporto, você quer comprar passagem.", answer: "Can I have a ticket, please?" },
    { situation: "🏖️ Alguém pergunta pra onde você quer viajar.", answer: "I want to go to the beach." },
    { situation: "🏨 Chegou no hotel. Como pergunta o quarto?", answer: "Where is my room?" },
    { situation: "🌊 Perguntam se você sabe nadar.", answer: "Yes, I can swim!" },
    { situation: "🧳 Falando da mala.", answer: "This is my suitcase." },
  ],
  GRAMMAR: {
    focus: "Can / Can't + Want to",
    why:
      'CAN = habilidade ou permissão. CAN\'T = negativa. WANT TO + verbo = querer fazer algo. Depois de CAN ou WANT TO o verbo vai no infinitivo, sem -s.',
    examples: [
      { en: "I can swim.", pt: "Eu sei nadar." },
      { en: "She can't fly.", pt: "Ela não sabe voar." },
      { en: "I want to travel.", pt: "Eu quero viajar." },
      { en: "He wants to eat pizza.", pt: "Ele quer comer pizza." },
    ],
    errors: [
      { wrong: "I can to swim.", right: "I can swim.", why: "Depois de CAN NÃO usa TO." },
      { wrong: "I want travel.", right: "I want TO travel.", why: "WANT sempre pede TO." },
    ],
  },
  SONG: {
    title: "Let's Travel!",
    hookPt: "Cante fingindo pilotar um avião!",
    verses: [
      { en: "Pack my bag, pack my bag,", pt: "Arrumo a mala,", emoji: "🧳" },
      { en: "Get my ticket, wave a flag,", pt: "Pego a passagem,", emoji: "🎫" },
      { en: "On the airplane, up so high,", pt: "No avião lá em cima,", emoji: "🛩️" },
      { en: "I can travel, I can fly!", pt: "Sei viajar, sei voar!", emoji: "☁️" },
      { en: "Beach or mountain, near or far,", pt: "Praia ou montanha,", emoji: "🏖️" },
      { en: "I want to be a travel star!", pt: "Quero ser viajante!", emoji: "⭐" },
    ],
  },
  HUNTER: {
    intro: "O que você precisa pra viajar?",
    rounds: [
      { promptEn: "You need it to enter another country.", promptPt: "Precisa pra entrar em outro país.", targetLabel: "Passport", objects: [
        { id: "a", label: "Passport 📔", img: "", isTarget: true },
        { id: "b", label: "Pillow 🛏️", img: "" },
        { id: "c", label: "Candy 🍬", img: "" },
      ]},
      { promptEn: "You put your clothes in it.", promptPt: "Você põe as roupas nela.", targetLabel: "Suitcase", objects: [
        { id: "a", label: "Book 📖", img: "" },
        { id: "b", label: "Suitcase 🧳", img: "", isTarget: true },
        { id: "c", label: "Chair 🪑", img: "" },
      ]},
      { promptEn: "It flies in the sky.", promptPt: "Voa no céu.", targetLabel: "Airplane", objects: [
        { id: "a", label: "Train 🚆", img: "" },
        { id: "b", label: "Boat ⛵", img: "" },
        { id: "c", label: "Airplane 🛩️", img: "", isTarget: true },
      ]},
      { promptEn: "You sleep here on a trip.", promptPt: "Você dorme aqui na viagem.", targetLabel: "Hotel", objects: [
        { id: "a", label: "Airport ✈️", img: "" },
        { id: "b", label: "Hotel 🏨", img: "", isTarget: true },
        { id: "c", label: "Beach 🏖️", img: "" },
      ]},
      { promptEn: "You swim here.", promptPt: "Você nada aqui.", targetLabel: "Beach", objects: [
        { id: "a", label: "Mountain 🏔️", img: "" },
        { id: "b", label: "Beach 🏖️", img: "", isTarget: true },
        { id: "c", label: "Airport ✈️", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares da viagem.",
    pairs: [
      { id: "a", en: "Airport ✈️", pt: "Aeroporto", img: IMG.AIRPORT },
      { id: "p", en: "Passport 📔", pt: "Passaporte", img: IMG.PASSPORT },
      { id: "s", en: "Suitcase 🧳", pt: "Mala", img: IMG.BACKPACK },
      { id: "b", en: "Beach 🏖️", pt: "Praia", img: IMG.RAINBOW },
    ],
  },
  PACK: {
    intro: "Prepare a mala pra praia! Toque só no que vai levar.",
    backpackImg: IMG.BACKPACK,
    items: [
      { id: "sw", en: "Swimsuit", pt: "Maiô", emoji: "🩱", belongs: true },
      { id: "sun", en: "Sunglasses", pt: "Óculos de sol", emoji: "🕶️", belongs: true },
      { id: "hat", en: "Hat", pt: "Chapéu", emoji: "👒", belongs: true },
      { id: "ss", en: "Sunscreen", pt: "Protetor solar", emoji: "🧴", belongs: true },
      { id: "coat", en: "Winter coat", pt: "Casaco de frio", emoji: "🧥", belongs: false },
      { id: "boots", en: "Snow boots", pt: "Botas de neve", emoji: "🥾", belongs: false },
      { id: "sled", en: "Sled", pt: "Trenó", emoji: "🛷", belongs: false },
      { id: "book", en: "Book", pt: "Livro", emoji: "📖", belongs: true },
    ],
  },
  CULTURE: {
    title: "Amazing Places 🌍",
    emoji: "✈️",
    paragraphs: [
      { en: "In Hawaii, kids surf on big blue waves.", pt: "No Havaí, crianças surfam nas ondas azuis." },
      { en: "In Switzerland, people ski down the mountains in winter.", pt: "Na Suíça, esquiam nas montanhas no inverno." },
      { pt: "Cada lugar do mundo tem uma coisa mágica pra descobrir! 🌟" },
    ],
  },
};

export default lesson;
