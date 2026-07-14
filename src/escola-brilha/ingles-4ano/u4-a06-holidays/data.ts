// Inglês 4º Ano — Unit 6 "Holidays and Adventures ✈️"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u4-a06-holidays",
  meta: {
    unitLabel: "Unit 6 · Lesson 6 — Holidays and Adventures ✈️",
    headerKicker: "My English Adventure — 4th Grade",
    coverKicker: "Viagens, férias & lazer",
    coverTitle: "Holidays and Adventures ✈️",
    coverSubtitle:
      "Primeira aventura no passado! Introdução ao Simple Past com was/were, went, had — sempre em contexto.",
    storyTitle: "My Amazing Vacation",
    vocabularyTitle: "Travel Words",
    speakingTargets: [
      "I went to the beach.",
      "It was amazing!",
      "We had fun.",
      "I want to visit Japan.",
      "My favorite place is the mountains.",
      "The hotel was beautiful.",
    ],
    listeningIntro: "Ouça uma história de férias.",
    listeningQuestion: '"Last summer I went to the beach." Para onde ela foi?',
    listeningOptions: ["Montanhas", "Praia", "Cidade"],
    listeningCorrect: "Praia",
    listeningWrongHint: '"Beach" = praia.',
    readingNarration:
      'Primeira vez com Passado! WAS/WERE = era/foi. WENT = fui/foi (irregular de GO). HAD = tinha/teve (de HAVE). Sem se preocupar com regras ainda — só reconhecer no contexto!',
    grammarNarration:
      'PASSADO simples introdutório: I WAS happy. We WERE together. I WENT to the beach. We HAD fun. Nem toda regra agora — só entenda que fala do que já aconteceu.',
    finalProjectIntro: "Suas férias dos sonhos!",
    finalProjectPhrase: (name: string) =>
      `MY DREAM VACATION — by ${name}. I want to visit an amazing place. My dream vacation is a tropical beach with blue water. I want to try new food, meet friendly people, and take beautiful photos. It will be the best trip ever!`,
    finalProjectSectionTitle: "My Dream Vacation",
  },
  VOCAB: [
    { id: "be", en: "Beach 🏖️", pt: "Praia", img: IMG.RAINBOW },
    { id: "mo", en: "Mountains ⛰️", pt: "Montanhas", img: IMG.RAINBOW },
    { id: "ca", en: "Camping ⛺", pt: "Acampamento", img: IMG.RAINBOW },
    { id: "ho", en: "Hotel 🏨", pt: "Hotel", img: IMG.SCHOOL },
    { id: "ai", en: "Airplane ✈️", pt: "Avião", img: IMG.AIRPORT },
    { id: "tr", en: "Train 🚆", pt: "Trem", img: IMG.SCHOOL },
    { id: "bo", en: "Boat ⛵", pt: "Barco", img: IMG.RAINBOW },
    { id: "pa", en: "Passport 📔", pt: "Passaporte", img: IMG.PASSPORT },
  ],
  STORY: [
    { img: IMG.LILY, en: "Last summer, Lily went on vacation.", pt: "Verão passado, Lily saiu de férias." },
    { img: IMG.AIRPORT, en: "She took an airplane with her family.", pt: "Pegou um avião com a família." },
    { img: IMG.RAINBOW, en: "They went to a beautiful beach.", pt: "Foram pra uma praia linda." },
    { img: IMG.RAINBOW, en: "The water was warm and blue.", pt: "A água era quente e azul." },
    { img: IMG.SCHOOL, en: "The hotel was near the ocean.", pt: "O hotel ficava perto do oceano." },
    { img: IMG.FRIENDS, en: "They had fun swimming and playing.", pt: "Se divertiram nadando e brincando." },
    { img: IMG.PASSPORT, en: "Lily kept photos in her travel journal.", pt: "Lily guardou fotos no diário de viagem." },
    { img: IMG.LILY, en: "'Best vacation ever!' she said.", pt: "'Melhor férias da vida!', ela disse." },
  ],
  DIALOG: [
    { who: "Ben", img: IMG.BEN, en: "Where did you go on vacation?", pt: "Onde você foi de férias?" },
    { who: "Lily", img: IMG.LILY, en: "I went to the beach with my family.", pt: "Fui pra praia com a família." },
    { who: "Ben", img: IMG.BEN, en: "How was it?", pt: "Como foi?" },
    { who: "Lily", img: IMG.LILY, en: "It was amazing! We had so much fun.", pt: "Foi incrível! Nos divertimos muito." },
    { who: "Ben", img: IMG.BEN, en: "What do you want to visit next?", pt: "Aonde quer ir na próxima?" },
    { who: "Lily", img: IMG.LILY, en: "I want to visit the mountains.", pt: "Quero visitar as montanhas." },
    { who: "Ben", img: IMG.BEN, en: "Cool! Let's plan together!", pt: "Legal! Vamos planejar juntos!" },
  ],
  READING: {
    title: "My Summer Trip",
    img: IMG.AIRPORT,
    parts: [
      { en: "Last year I went to the beach.", pt: "Ano passado fui pra praia.", highlight: ["went"] },
      { en: "The weather was sunny.", pt: "O clima era ensolarado.", highlight: ["was"] },
      { en: "We had a big blue tent.", pt: "Tínhamos uma barraca azul grande.", highlight: ["had"] },
      { en: "My family was happy.", pt: "Minha família estava feliz.", highlight: ["was"] },
      { en: "I want to go again next year.", pt: "Quero ir de novo ano que vem.", highlight: ["want"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ to the beach. (passado de GO)", answer: "went", hint: "Passado irregular de GO.", options: ["went", "go", "going"] },
    { prompt: "It ______ amazing. (passado singular)", answer: "was", hint: "Passado de IS.", options: ["was", "were", "is"] },
    { prompt: "We ______ fun. (passado de HAVE)", answer: "had", hint: "Passado de HAVE.", options: ["had", "have", "has"] },
    { prompt: "They ______ happy. (passado plural)", answer: "were", hint: "Passado de ARE.", options: ["were", "was", "are"] },
    { prompt: "I want ______ visit Japan.", answer: "to", hint: "Depois de WANT sempre TO.", options: ["to", "at", "in"] },
  ],
  QUIZ: [
    { q: "'I went' significa:", options: [{ text: "Eu vou" }, { text: "Eu fui", correct: true }, { text: "Eu quero" }] },
    { q: "Complete: The hotel ___ nice.", options: [{ text: "was", correct: true }, { text: "were" }, { text: "is" }] },
    { q: "'Beach' é:", options: [{ text: "Montanha" }, { text: "Praia", correct: true }, { text: "Cidade" }] },
    { q: "Complete: We ___ a great time.", options: [{ text: "have" }, { text: "had", correct: true }, { text: "has" }] },
    { q: "'Airplane' é:", options: [{ text: "Trem" }, { text: "Avião", correct: true }, { text: "Barco" }] },
    { q: "Complete: They ___ tired.", options: [{ text: "was" }, { text: "were", correct: true }, { text: "are" }] },
    { q: "'Passport' é:", options: [{ text: "Mochila" }, { text: "Passaporte", correct: true }, { text: "Bilhete" }] },
  ],
  REAL_LIFE: [
    { situation: "🏖️ Contando onde foi.", answer: "I went to the beach." },
    { situation: "😍 Como foi a viagem.", answer: "It was amazing!" },
    { situation: "🎉 O que fizeram lá.", answer: "We had fun." },
    { situation: "🗺️ Onde quer ir depois.", answer: "I want to visit Japan." },
    { situation: "⛰️ Falando do lugar favorito.", answer: "My favorite place is the mountains." },
  ],
  GRAMMAR: {
    focus: "Introdução ao Simple Past (was/were, went, had)",
    why:
      'Passado simples pra falar do que JÁ aconteceu. Nesta unidade só reconhecemos 3 verbos comuns: WAS/WERE (era/foi), WENT (fui/foi), HAD (tinha/teve). Regras completas ficam pro 5º ano!',
    examples: [
      { en: "I was happy.", pt: "Eu estava feliz." },
      { en: "We were at the beach.", pt: "Estávamos na praia." },
      { en: "I went to school yesterday.", pt: "Fui pra escola ontem." },
      { en: "We had a party.", pt: "Tivemos uma festa." },
      { en: "It was fun!", pt: "Foi divertido!" },
    ],
    errors: [
      { wrong: "I goed to the beach.", right: "I WENT to the beach.", why: "GO é irregular → WENT." },
      { wrong: "We was happy.", right: "We WERE happy.", why: "WE / YOU / THEY → WERE." },
      { wrong: "She were tired.", right: "She WAS tired.", why: "HE / SHE / IT → WAS." },
    ],
  },
  SONG: {
    title: "Vacation Time",
    hookPt: "Cante lembrando das melhores férias!",
    verses: [
      { en: "I went to the beach, the sun was bright,", pt: "Fui pra praia, o sol tava forte,", emoji: "☀️" },
      { en: "We had so much fun from morning till night,", pt: "Nos divertimos do amanhecer ao anoitecer,", emoji: "🌊" },
      { en: "The ocean was blue, the sand was white,", pt: "Oceano azul, areia branca,", emoji: "🏖️" },
      { en: "Vacation memories — pure delight!", pt: "Memórias das férias — pura alegria!", emoji: "💖" },
      { en: "Where will I go next? I can't decide!", pt: "Onde vou depois? Não sei!", emoji: "🗺️" },
      { en: "Mountains, cities, or a boat ride?", pt: "Montanhas, cidades ou barco?", emoji: "⛵" },
    ],
  },
  HUNTER: {
    intro: "Escolha o passado certo!",
    rounds: [
      { promptEn: "Complete: I ___ to the beach.", promptPt: "Complete: I ___ to the beach.", targetLabel: "went", objects: [
        { id: "a", label: "went", img: "", isTarget: true },
        { id: "b", label: "go", img: "" },
        { id: "c", label: "going", img: "" },
      ]},
      { promptEn: "Complete: It ___ amazing.", promptPt: "Complete: It ___ amazing.", targetLabel: "was", objects: [
        { id: "a", label: "was", img: "", isTarget: true },
        { id: "b", label: "were", img: "" },
        { id: "c", label: "is", img: "" },
      ]},
      { promptEn: "Complete: We ___ fun.", promptPt: "Complete: We ___ fun.", targetLabel: "had", objects: [
        { id: "a", label: "had", img: "", isTarget: true },
        { id: "b", label: "have", img: "" },
        { id: "c", label: "has", img: "" },
      ]},
      { promptEn: "Complete: They ___ tired.", promptPt: "Complete: They ___ tired.", targetLabel: "were", objects: [
        { id: "a", label: "was", img: "" },
        { id: "b", label: "were", img: "", isTarget: true },
        { id: "c", label: "are", img: "" },
      ]},
      { promptEn: "'Airplane' é:", promptPt: "'Airplane' é:", targetLabel: "Avião", objects: [
        { id: "a", label: "Trem", img: "" },
        { id: "b", label: "Avião", img: "", isTarget: true },
        { id: "c", label: "Barco", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares de férias!",
    pairs: [
      { id: "a", en: "Beach 🏖️", pt: "Praia", img: IMG.RAINBOW },
      { id: "b", en: "Airplane ✈️", pt: "Avião", img: IMG.AIRPORT },
      { id: "c", en: "Hotel 🏨", pt: "Hotel", img: IMG.SCHOOL },
      { id: "d", en: "Passport 📔", pt: "Passaporte", img: IMG.PASSPORT },
    ],
  },
  BOOK: {
    title: "My Dream Vacation",
    intro: "Suas férias dos sonhos!",
    pages: [
      { en: "Chapter 1 — I choose a destination.", pt: "Cap. 1 — Escolho o destino.", img: IMG.AIRPORT, badge: "🗺️" },
      { en: "Chapter 2 — I pack my bag.", pt: "Cap. 2 — Faço a mala.", img: IMG.PASSPORT, badge: "🧳" },
      { en: "Chapter 3 — I take an airplane.", pt: "Cap. 3 — Pego um avião.", img: IMG.AIRPORT, badge: "✈️" },
      { en: "Chapter 4 — Arrive at the hotel.", pt: "Cap. 4 — Chego ao hotel.", img: IMG.SCHOOL, badge: "🏨" },
      { en: "Chapter 5 — Adventure time!", pt: "Cap. 5 — Aventura!", img: IMG.RAINBOW, badge: "🌟" },
      { en: "The End — Best trip ever!", pt: "Fim — Melhor viagem!", img: IMG.FRIENDS, badge: "💖" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "A mala pronta! Toque nos itens.",
    img: IMG.PASSPORT,
    items: [
      { en: "Passport", pt: "Passaporte", emoji: "📔" },
      { en: "Suitcase", pt: "Mala", emoji: "🧳" },
      { en: "Camera", pt: "Câmera", emoji: "📸" },
      { en: "Sunglasses", pt: "Óculos", emoji: "🕶️" },
      { en: "Map", pt: "Mapa", emoji: "🗺️" },
      { en: "Ticket", pt: "Passagem", emoji: "🎫" },
    ],
  },
  CULTURE: {
    title: "Amazing Places to Visit 🌍",
    emoji: "✈️",
    paragraphs: [
      { en: "Bora Bora has crystal blue water and pink sand!", pt: "Bora Bora tem água azul cristal e areia rosa!" },
      { en: "Iceland has volcanoes AND glaciers at the same time.", pt: "Islândia tem vulcões E geleiras ao mesmo tempo." },
      { pt: "Qual seria SUA viagem dos sonhos?" },
    ],
  },
};

export default lesson;
