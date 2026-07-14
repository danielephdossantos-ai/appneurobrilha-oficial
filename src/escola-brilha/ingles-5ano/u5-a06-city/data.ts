// Inglês 5º Ano — Unit 6 "Our Planet 🌱"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u5-a06-city",
  meta: {
    unitLabel: "Unit 6 · Lesson 6 — Our Planet 🌱",
    headerKicker: "My English Portfolio — Level 2 · 5th Grade",
    coverKicker: "Meio ambiente & cidadania",
    coverTitle: "Our Planet 🌱",
    coverSubtitle:
      "Cuidar do planeta — We must recycle. We mustn't waste water. Save the forest! Protect the ocean!",
    storyTitle: "Save the Forest!",
    vocabularyTitle: "Environment",
    speakingTargets: [
      "We must recycle paper and plastic.",
      "We mustn't waste water.",
      "Save the forest!",
      "Protect the animals!",
      "Pollution is a big problem.",
      "The planet needs our help.",
    ],
    listeningIntro: "Ouça a campanha ambiental.",
    listeningQuestion: 'A voz disse: "We must protect the forest." O que devemos fazer?',
    listeningOptions: ["destruir a floresta", "proteger a floresta", "cortar árvores"],
    listeningCorrect: "proteger a floresta",
    listeningWrongHint: '"Protect" = proteger.',
    readingNarration:
      "MUST = obrigação (é PRECISO fazer). MUSTN'T = proibição (NÃO pode fazer). Imperatives = ordens diretas: Save! Protect! Recycle! Don't waste!",
    grammarNarration:
      "MUST + verbo = obrigação forte (We MUST recycle). MUSTN'T + verbo = proibição (We MUSTN'T pollute). Imperativos: verbo no começo (Save the planet!) ou DON'T + verbo (Don't waste water!).",
    finalProjectIntro: "Vamos criar sua campanha verde! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `GREEN PLANET CAMPAIGN — by ${name}. Save our planet! We only have one Earth. We must recycle paper, plastic, and glass. We must save water and energy. We mustn't throw trash in the ocean. We mustn't waste food. Protect the animals! Save the forest! Together, we can build a better world. Green today, alive tomorrow!`,
    finalProjectSectionTitle: "My Green Planet Campaign",
  },
  VOCAB: [
    { id: "recycle", en: "Recycling ♻️", pt: "Reciclagem", img: IMG.PARK },
    { id: "pollution", en: "Pollution 🏭", pt: "Poluição", img: IMG.SHOPPING_MALL },
    { id: "forest", en: "Forest 🌲", pt: "Floresta", img: IMG.PARK },
    { id: "ocean", en: "Ocean 🌊", pt: "Oceano", img: IMG.PARK },
    { id: "climate", en: "Climate ☀️", pt: "Clima", img: IMG.RAINBOW },
    { id: "animals", en: "Animals 🐘", pt: "Animais", img: IMG.PARK },
    { id: "nature", en: "Nature 🌿", pt: "Natureza", img: IMG.PARK },
    { id: "sustainability", en: "Sustainability 🌱", pt: "Sustentabilidade", img: IMG.RAINBOW },
  ],
  STORY: [
    { img: IMG.LILY, en: "Hi! I'm Lily. Today I talk about our planet.", pt: "Oi! Sou Lily. Hoje falo do nosso planeta." },
    { img: IMG.PARK, en: "Our forests are home to many animals.", pt: "Nossas florestas são lar de muitos animais." },
    { img: IMG.PARK, en: "The ocean is huge and full of life.", pt: "O oceano é imenso e cheio de vida." },
    { img: IMG.SHOPPING_MALL, en: "But pollution is a big problem.", pt: "Mas a poluição é um problema grande." },
    { img: IMG.PARK, en: "We must recycle paper and plastic.", pt: "Precisamos reciclar papel e plástico." },
    { img: IMG.RAINBOW, en: "We mustn't waste water or energy.", pt: "Não podemos desperdiçar água ou energia." },
    { img: IMG.PARK, en: "Save the forest! Protect the animals!", pt: "Salve a floresta! Proteja os animais!" },
    { img: IMG.LILY, en: "What do YOU do to help the planet?", pt: "O que VOCÊ faz pra ajudar o planeta?" },
  ],
  DIALOG: [
    { who: "Ben", img: IMG.BEN, en: "Lily, why do you carry a bottle?", pt: "Lily, por que carrega uma garrafa?" },
    { who: "Lily", img: IMG.LILY, en: "We must save plastic. This is reusable.", pt: "Devemos evitar plástico. Esta é reutilizável." },
    { who: "Ben", img: IMG.BEN, en: "Cool! What else can we do?", pt: "Legal! O que mais podemos fazer?" },
    { who: "Lily", img: IMG.LILY, en: "We must recycle paper and glass.", pt: "Devemos reciclar papel e vidro." },
    { who: "Ben", img: IMG.BEN, en: "And we mustn't waste water!", pt: "E não podemos desperdiçar água!" },
    { who: "Lily", img: IMG.LILY, en: "Right! Save the planet, save our future.", pt: "Isso! Salve o planeta, salve nosso futuro." },
    { who: "Ben", img: IMG.BEN, en: "Let's start a green campaign at school!", pt: "Vamos começar uma campanha verde na escola!" },
  ],
  READING: {
    title: "Save Our Planet",
    img: IMG.PARK,
    parts: [
      { en: "The Earth is our home.", pt: "A Terra é nossa casa.", highlight: ["is"] },
      { en: "We must protect the forest.", pt: "Devemos proteger a floresta.", highlight: ["must"] },
      { en: "We mustn't pollute the ocean.", pt: "Não podemos poluir o oceano.", highlight: ["mustn't"] },
      { en: "Recycle paper and plastic!", pt: "Recicle papel e plástico!", highlight: ["Recycle"] },
      { en: "Save water every day.", pt: "Economize água todo dia.", highlight: ["Save"] },
    ],
  },
  WRITING: [
    { prompt: "We ______ recycle paper. (obrigação)", answer: "must", hint: "Obrigação positiva.", options: ["must", "mustn't", "can"] },
    { prompt: "We ______ waste water. (proibição)", answer: "mustn't", hint: "Proibição.", options: ["mustn't", "must", "should"] },
    { prompt: "______ the planet! (ordem)", answer: "Save", hint: "Imperativo.", options: ["Save", "Saved", "Saving"] },
    { prompt: "'Forest' significa:", answer: "floresta", hint: "Lugar com muitas árvores.", options: ["floresta", "oceano", "cidade"] },
    { prompt: "Don't ______ trash on the beach.", answer: "throw", hint: "Verbo 'jogar'.", options: ["throw", "throws", "thrown"] },
  ],
  QUIZ: [
    { q: "'Recycling' significa:", options: [{ text: "Poluição" }, { text: "Reciclagem", correct: true }, { text: "Clima" }] },
    { q: "Complete: We ___ save water.", options: [{ text: "must", correct: true }, { text: "mustn't" }, { text: "can't" }] },
    { q: "'Forest' é:", options: [{ text: "Oceano" }, { text: "Floresta", correct: true }, { text: "Cidade" }] },
    { q: "Complete: We ___ pollute the river.", options: [{ text: "must" }, { text: "mustn't", correct: true }, { text: "should" }] },
    { q: "'Pollution' é:", options: [{ text: "Poluição", correct: true }, { text: "Natureza" }, { text: "Chuva" }] },
    { q: "'Ocean' é:", options: [{ text: "Rio" }, { text: "Oceano", correct: true }, { text: "Lago" }] },
    { q: "Imperativo de 'salvar':", options: [{ text: "Save!", correct: true }, { text: "Saving" }, { text: "Saved" }] },
  ],
  REAL_LIFE: [
    { situation: "♻️ Falando de obrigação verde.", answer: "We must recycle paper and plastic." },
    { situation: "🚫 Alertando sobre proibição.", answer: "We mustn't waste water." },
    { situation: "🌲 Fazendo campanha.", answer: "Save the forest!" },
    { situation: "🐘 Protegendo animais.", answer: "Protect the animals!" },
    { situation: "🌊 Falando do oceano.", answer: "Don't throw trash in the ocean." },
  ],
  GRAMMAR: {
    focus: "Must / Mustn't · Imperatives",
    why:
      "MUST = obrigação forte. MUSTN'T = proibição. Imperativos são ordens diretas: verbo no começo (SAVE the planet!) ou DON'T + verbo (DON'T pollute!). Muito usados em campanhas e placas.",
    examples: [
      { en: "We must save water.", pt: "Devemos economizar água." },
      { en: "We mustn't waste energy.", pt: "Não podemos desperdiçar energia." },
      { en: "Recycle paper!", pt: "Recicle papel!" },
      { en: "Protect the animals!", pt: "Proteja os animais!" },
      { en: "Don't throw trash on the street.", pt: "Não jogue lixo na rua." },
    ],
    errors: [
      { wrong: "We must to recycle.", right: "We MUST recycle.", why: "MUST nunca leva TO." },
      { wrong: "We must not to pollute.", right: "We MUSTN'T pollute.", why: "MUSTN'T também sem TO." },
      { wrong: "To save the planet!", right: "SAVE the planet!", why: "Imperativo = verbo no início, sem TO." },
    ],
  },
  SONG: {
    title: "Green Planet",
    hookPt: "Cante pelo planeta!",
    verses: [
      { en: "We must save the trees and sea,", pt: "Devemos salvar árvores e mar,", emoji: "🌲" },
      { en: "This is where we all should be.", pt: "É onde todos devemos estar.", emoji: "🌍" },
      { en: "Don't pollute, don't waste, don't throw,", pt: "Não polua, não desperdice, não jogue,", emoji: "🚫" },
      { en: "Let the green forest grow!", pt: "Deixe a floresta verde crescer!", emoji: "🌱" },
      { en: "Recycle, reuse, reduce today,", pt: "Recicle, reuse, reduza hoje,", emoji: "♻️" },
      { en: "Save the planet, come and play!", pt: "Salve o planeta, venha brincar!", emoji: "⭐" },
    ],
  },
  HUNTER: {
    intro: "Escolha a palavra certa!",
    rounds: [
      { promptEn: "Complete: We ___ save water.", promptPt: "Complete: We ___ save water.", targetLabel: "must", objects: [
        { id: "a", label: "must", img: "", isTarget: true },
        { id: "b", label: "mustn't", img: "" },
        { id: "c", label: "should", img: "" },
      ]},
      { promptEn: "Complete: We ___ pollute.", promptPt: "Complete: We ___ pollute.", targetLabel: "mustn't", objects: [
        { id: "a", label: "must", img: "" },
        { id: "b", label: "mustn't", img: "", isTarget: true },
        { id: "c", label: "can", img: "" },
      ]},
      { promptEn: "'Forest' é:", promptPt: "'Forest' é:", targetLabel: "Floresta", objects: [
        { id: "a", label: "Oceano", img: "" },
        { id: "b", label: "Floresta", img: "", isTarget: true },
        { id: "c", label: "Praia", img: "" },
      ]},
      { promptEn: "'Recycling' é:", promptPt: "'Recycling' é:", targetLabel: "Reciclagem", objects: [
        { id: "a", label: "Reciclagem", img: "", isTarget: true },
        { id: "b", label: "Poluição", img: "" },
        { id: "c", label: "Clima", img: "" },
      ]},
      { promptEn: "Imperativo de salvar:", promptPt: "Imperativo de salvar:", targetLabel: "Save!", objects: [
        { id: "a", label: "Saving", img: "" },
        { id: "b", label: "Save!", img: "", isTarget: true },
        { id: "c", label: "Saved", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares do planeta!",
    pairs: [
      { id: "a", en: "Forest 🌲", pt: "Floresta", img: IMG.PARK },
      { id: "b", en: "Ocean 🌊", pt: "Oceano", img: IMG.PARK },
      { id: "c", en: "Recycling ♻️", pt: "Reciclagem", img: IMG.PARK },
      { id: "d", en: "Animals 🐘", pt: "Animais", img: IMG.PARK },
    ],
  },
  BOOK: {
    title: "My Green Planet Campaign",
    intro: "Sua campanha ambiental!",
    pages: [
      { en: "Page 1 — Save our planet!", pt: "Pág. 1 — Salve nosso planeta!", img: IMG.PARK, badge: "🌍" },
      { en: "Page 2 — We must recycle.", pt: "Pág. 2 — Devemos reciclar.", img: IMG.PARK, badge: "♻️" },
      { en: "Page 3 — We mustn't waste water.", pt: "Pág. 3 — Não podemos desperdiçar água.", img: IMG.RAINBOW, badge: "💧" },
      { en: "Page 4 — Protect the animals!", pt: "Pág. 4 — Proteja os animais!", img: IMG.PARK, badge: "🐘" },
      { en: "Page 5 — Save the forest and ocean!", pt: "Pág. 5 — Salve floresta e oceano!", img: IMG.PARK, badge: "🌊" },
      { en: "The End — Green today, alive tomorrow!", pt: "Fim — Verde hoje, vivo amanhã!", img: IMG.RAINBOW, badge: "🌱" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "Este é o parque. Toque nos elementos!",
    img: IMG.PARK,
    items: [
      { en: "Tree", pt: "Árvore", emoji: "🌳" },
      { en: "Bin", pt: "Lixeira", emoji: "🗑️" },
      { en: "Bottle", pt: "Garrafa", emoji: "🍶" },
      { en: "Animal", pt: "Animal", emoji: "🐿️" },
      { en: "Water", pt: "Água", emoji: "💧" },
      { en: "Sun", pt: "Sol", emoji: "☀️" },
    ],
  },
  CULTURE: {
    title: "Green Actions Around the World 🌎",
    emoji: "🌱",
    paragraphs: [
      { en: "In Sweden, more than 99% of trash is recycled or reused.", pt: "Na Suécia, mais de 99% do lixo é reciclado ou reaproveitado." },
      { en: "The Amazon Rainforest, in Brazil, is home to millions of species.", pt: "A Amazônia, no Brasil, abriga milhões de espécies." },
      { pt: "Pequenas ações locais salvam o planeta inteiro!" },
    ],
  },
};

export default lesson;
