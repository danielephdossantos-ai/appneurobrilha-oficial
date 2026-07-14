// Inglês 5º Ano — Unit 5 "Healthy Planet 🌱"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u5-a05-planet",
  meta: {
    unitLabel: "Unit 5 · Lesson 5 — Healthy Planet 🌱",
    headerKicker: "My English Portfolio — Level 2 · 5th Grade",
    coverKicker: "Sustentabilidade & meio ambiente",
    coverTitle: "Healthy Planet 🌱",
    coverSubtitle:
      "Falar de reciclagem e cuidados com a Terra: We recycle paper. We must save water. Don't throw trash on the ground!",
    storyTitle: "Save the Planet",
    vocabularyTitle: "Eco Words",
    speakingTargets: [
      "We recycle paper.",
      "We must save water.",
      "The Earth is our home.",
      "Don't throw trash on the ground!",
      "Animals need clean water.",
      "The forest is beautiful.",
    ],
    listeningIntro: "Ouça a Lily falando o que fazer.",
    listeningQuestion: 'Lily disse: "We must recycle plastic." O que temos que fazer?',
    listeningOptions: ["Comprar plástico", "Reciclar plástico", "Jogar plástico"],
    listeningCorrect: "Reciclar plástico",
    listeningWrongHint: '"Recycle" = reciclar.',
    readingNarration:
      "MUST mostra obrigação: We MUST save water. MUSTN'T proíbe: We MUSTN'T waste water.",
    grammarNarration:
      "MUST = temos que (dever). MUSTN'T = não pode. Imperativos dão ordens direto: Recycle! Save water! Don't pollute!",
    finalProjectIntro: "Sua campanha ecológica! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `ECO ACTION CAMPAIGN — by ${name}. Save our planet! We must recycle paper, plastic, and glass. We must save water and energy. We mustn't throw trash on the ground. Animals need clean water. The Earth is our only home. Take action — every small step counts!`,
    finalProjectSectionTitle: "Eco Action Campaign",
  },
  VOCAB: [
    { id: "recycle", en: "Recycling ♻️", pt: "Reciclagem", img: IMG.RAINBOW },
    { id: "pollution", en: "Pollution 🏭", pt: "Poluição", img: IMG.CITY_COVER },
    { id: "nature", en: "Nature 🌿", pt: "Natureza", img: IMG.PARK },
    { id: "environment", en: "Environment 🌍", pt: "Meio ambiente", img: IMG.PARK },
    { id: "animals", en: "Animals 🐾", pt: "Animais", img: IMG.BUDDY },
    { id: "water", en: "Water 💧", pt: "Água", img: IMG.RAINBOW },
    { id: "forest", en: "Forest 🌲", pt: "Floresta", img: IMG.PARK },
    { id: "climate", en: "Climate 🌦️", pt: "Clima", img: IMG.RAINBOW },
  ],
  STORY: [
    { img: IMG.LILY, en: "Lily loves nature. She has a mission!", pt: "Lily ama a natureza. Ela tem uma missão!" },
    { img: IMG.PARK, en: "Today the class visits the forest.", pt: "Hoje a turma visita a floresta." },
    { img: IMG.EMILY, en: "Miss Emily says: 'We must protect this place.'", pt: "Miss Emily diz: 'Devemos proteger esse lugar.'" },
    { img: IMG.BEN, en: "Ben picks up plastic from the ground.", pt: "Ben pega plástico do chão." },
    { img: IMG.RAINBOW, en: "Buddy explains recycling: paper, plastic, glass.", pt: "Buddy explica a reciclagem: papel, plástico, vidro." },
    { img: IMG.RAINBOW, en: "We must save water — animals need it too!", pt: "Devemos economizar água — animais também precisam!" },
    { img: IMG.FRIENDS, en: "Every small action helps the planet.", pt: "Toda pequena ação ajuda o planeta." },
    { img: IMG.PARK, en: "The Earth is our home. Let's take care!", pt: "A Terra é nossa casa. Vamos cuidar!" },
  ],
  DIALOG: [
    { who: "Lily", img: IMG.LILY, en: "Ben, do you recycle at home?", pt: "Ben, você recicla em casa?" },
    { who: "Ben", img: IMG.BEN, en: "Yes! We separate paper and plastic.", pt: "Sim! Separamos papel e plástico." },
    { who: "Lily", img: IMG.LILY, en: "We must save water too.", pt: "A gente também tem que economizar água." },
    { who: "Ben", img: IMG.BEN, en: "I turn off the tap when I brush my teeth.", pt: "Fecho a torneira ao escovar os dentes." },
    { who: "Lily", img: IMG.LILY, en: "Great! Animals need clean water.", pt: "Ótimo! Animais precisam de água limpa." },
    { who: "Buddy", img: IMG.BUDDY, en: "Don't throw trash in the river!", pt: "Não jogue lixo no rio!" },
    { who: "Ben", img: IMG.BEN, en: "The planet is our home!", pt: "O planeta é nossa casa!" },
  ],
  READING: {
    title: "Our Green Planet",
    img: IMG.PARK,
    parts: [
      { en: "We must recycle paper.", pt: "Temos que reciclar papel.", highlight: ["must"] },
      { en: "We must save water.", pt: "Temos que economizar água.", highlight: ["must"] },
      { en: "We mustn't pollute the river.", pt: "Não podemos poluir o rio.", highlight: ["mustn't"] },
      { en: "Animals need a clean forest.", pt: "Animais precisam de uma floresta limpa.", highlight: ["need"] },
      { en: "The Earth is our only home.", pt: "A Terra é nossa única casa.", highlight: ["is"] },
    ],
  },
  WRITING: [
    { prompt: "We ______ save water. (dever)", answer: "must", hint: "Obrigação.", options: ["must", "am", "have"] },
    { prompt: "We ______ pollute. (proibido)", answer: "mustn't", hint: "Proibido.", options: ["mustn't", "must", "have"] },
    { prompt: "Please, ______ the plastic! (recicle)", answer: "recycle", hint: "Imperativo.", options: ["recycle", "is", "are"] },
    { prompt: "The ______ is our home. (Terra)", answer: "Earth", hint: "Nosso planeta.", options: ["Earth", "Chair", "Book"] },
    { prompt: "Animals need clean ______. (água)", answer: "water", hint: "Líquido essencial.", options: ["water", "car", "book"] },
  ],
  QUIZ: [
    { q: "'Recycle' é:", options: [{ text: "Reciclar", correct: true }, { text: "Poluir" }, { text: "Comprar" }] },
    { q: "Complete: We ___ save water.", options: [{ text: "must", correct: true }, { text: "am" }, { text: "is" }] },
    { q: "'Nature' é:", options: [{ text: "Cidade" }, { text: "Natureza", correct: true }, { text: "Casa" }] },
    { q: "'Pollution' é:", options: [{ text: "Poluição", correct: true }, { text: "Estrela" }, { text: "Chuva" }] },
    { q: "Complete: We ___ throw trash on the ground.", options: [{ text: "must" }, { text: "mustn't", correct: true }, { text: "am" }] },
    { q: "'Forest' é:", options: [{ text: "Floresta", correct: true }, { text: "Praia" }, { text: "Cidade" }] },
    { q: "'Environment' é:", options: [{ text: "Meio ambiente", correct: true }, { text: "Casa" }, { text: "Escola" }] },
  ],
  REAL_LIFE: [
    { situation: "♻️ Falando sobre reciclagem.", answer: "We recycle paper and plastic." },
    { situation: "💧 Alertando sobre a água.", answer: "We must save water." },
    { situation: "🚫 Proibindo poluir.", answer: "We mustn't pollute the river." },
    { situation: "🐾 Falando dos animais.", answer: "Animals need a clean forest." },
    { situation: "🌍 Slogan da campanha.", answer: "The Earth is our home!" },
  ],
  GRAMMAR: {
    focus: "MUST / MUSTN'T + Imperativos",
    why:
      "MUST expressa obrigação forte: We MUST save water. MUSTN'T proíbe: We MUSTN'T pollute. IMPERATIVO dá ordem direta: Recycle! Save! Protect!",
    examples: [
      { en: "We must recycle.", pt: "Temos que reciclar." },
      { en: "We mustn't waste water.", pt: "Não podemos desperdiçar água." },
      { en: "Save the forest!", pt: "Salve a floresta!" },
      { en: "Don't throw trash!", pt: "Não jogue lixo!" },
      { en: "Turn off the light.", pt: "Apague a luz." },
    ],
    errors: [
      { wrong: "We must to save water.", right: "We MUST save water.", why: "MUST não usa TO." },
      { wrong: "We no must pollute.", right: "We MUSTN'T pollute.", why: "Negativo = MUSTN'T." },
      { wrong: "You throw not trash.", right: "DON'T throw trash.", why: "Imperativo negativo = DON'T." },
    ],
  },
  SONG: {
    title: "Save Our Planet",
    hookPt: "Cante e proteja a Terra!",
    verses: [
      { en: "Save our planet, save the seas,", pt: "Salve o planeta, salve os mares,", emoji: "🌊" },
      { en: "Save the animals, save the trees.", pt: "Salve os animais, salve as árvores.", emoji: "🌳" },
      { en: "Recycle paper, save the water,", pt: "Recicle papel, economize água,", emoji: "💧" },
      { en: "Every action makes it better!", pt: "Cada ação melhora!", emoji: "✨" },
      { en: "We must care, we must be kind,", pt: "Devemos cuidar, devemos ser gentis,", emoji: "💚" },
      { en: "The Earth is one — one of a kind!", pt: "A Terra é única!", emoji: "🌍" },
    ],
  },
  HUNTER: {
    intro: "Escolha a palavra certa!",
    rounds: [
      { promptEn: "'Recycle' é:", promptPt: "'Recycle' é:", targetLabel: "Reciclar", objects: [
        { id: "a", label: "Reciclar", img: "", isTarget: true },
        { id: "b", label: "Poluir", img: "" },
        { id: "c", label: "Comprar", img: "" },
      ]},
      { promptEn: "Complete: We ___ save water.", promptPt: "Complete: We ___ save water.", targetLabel: "must", objects: [
        { id: "a", label: "must", img: "", isTarget: true },
        { id: "b", label: "am", img: "" },
        { id: "c", label: "is", img: "" },
      ]},
      { promptEn: "'Pollution' é:", promptPt: "'Pollution' é:", targetLabel: "Poluição", objects: [
        { id: "a", label: "Poluição", img: "", isTarget: true },
        { id: "b", label: "Ciência", img: "" },
        { id: "c", label: "Amor", img: "" },
      ]},
      { promptEn: "Complete: We ___ pollute.", promptPt: "Complete: We ___ pollute.", targetLabel: "mustn't", objects: [
        { id: "a", label: "must", img: "" },
        { id: "b", label: "mustn't", img: "", isTarget: true },
        { id: "c", label: "am", img: "" },
      ]},
      { promptEn: "'Forest' é:", promptPt: "'Forest' é:", targetLabel: "Floresta", objects: [
        { id: "a", label: "Praia", img: "" },
        { id: "b", label: "Floresta", img: "", isTarget: true },
        { id: "c", label: "Cidade", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares do planeta!",
    pairs: [
      { id: "a", en: "Recycling ♻️", pt: "Reciclagem", img: IMG.RAINBOW },
      { id: "b", en: "Forest 🌲", pt: "Floresta", img: IMG.PARK },
      { id: "c", en: "Water 💧", pt: "Água", img: IMG.RAINBOW },
      { id: "d", en: "Animals 🐾", pt: "Animais", img: IMG.BUDDY },
    ],
  },
  BOOK: {
    title: "Eco Action Campaign",
    intro: "Sua campanha pelo planeta!",
    pages: [
      { en: "Page 1 — The Earth is our home.", pt: "Pág. 1 — A Terra é nossa casa.", img: IMG.PARK, badge: "🌍" },
      { en: "Page 2 — We must recycle.", pt: "Pág. 2 — Temos que reciclar.", img: IMG.RAINBOW, badge: "♻️" },
      { en: "Page 3 — We must save water.", pt: "Pág. 3 — Devemos economizar água.", img: IMG.RAINBOW, badge: "💧" },
      { en: "Page 4 — Don't pollute the river!", pt: "Pág. 4 — Não polua o rio!", img: IMG.PARK, badge: "🚫" },
      { en: "Page 5 — Animals need us.", pt: "Pág. 5 — Animais precisam de nós.", img: IMG.BUDDY, badge: "🐾" },
      { en: "The End — Take action!", pt: "Fim — Aja agora!", img: IMG.FRIENDS, badge: "⭐" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "É o centro de reciclagem! Toque nos itens.",
    img: IMG.PARK,
    items: [
      { en: "Paper", pt: "Papel", emoji: "📄" },
      { en: "Plastic", pt: "Plástico", emoji: "🥤" },
      { en: "Glass", pt: "Vidro", emoji: "🍾" },
      { en: "Tree", pt: "Árvore", emoji: "🌳" },
      { en: "Water drop", pt: "Gota d'água", emoji: "💧" },
      { en: "Trash can", pt: "Lixeira", emoji: "🗑️" },
    ],
  },
  CULTURE: {
    title: "Green Heroes Around the World 🌱",
    emoji: "🌍",
    paragraphs: [
      { en: "Greta Thunberg speaks for the climate. Kids can change the world!", pt: "Greta Thunberg fala pelo clima. Crianças mudam o mundo!" },
      { en: "The Amazon Rainforest, in Brazil, is called 'the lungs of the planet'.", pt: "A Floresta Amazônica, no Brasil, é 'o pulmão do planeta'." },
      { pt: "Cada país tem que cuidar da natureza. Comece pela sua casa!" },
    ],
  },
};

export default lesson;
