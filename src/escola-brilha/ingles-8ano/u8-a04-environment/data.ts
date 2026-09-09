// Inglês 8º Ano — Unit 4 "Environment and Sustainability 🌱"
// Modal verbs (should, must, might) · First Conditional (continuação)
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u8-a04-environment",
  meta: {
    unitLabel: "Unit 4 · Lesson 1 — Environment and Sustainability 🌱",
    headerKicker: "SPEB 1.0 · English Academy — 8th Grade",
    coverKicker: "Climate · Biodiversity · Recycling · Carbon",
    coverTitle: "Environment and Sustainability 🌱",
    coverSubtitle:
      "A Academy inicia o projeto Eco Action. Use modais (should, must, might) e First Conditional para propor soluções ambientais.",
    storyTitle: "Eco Action Project",
    vocabularyTitle: "Environment",
    speakingTargets: [
      "We must protect the rainforest.",
      "You should recycle every day.",
      "It might rain more because of climate change.",
      "If we don't act, the planet will suffer.",
      "We can reduce our carbon footprint.",
      "Renewable resources are the future.",
    ],
    listeningIntro: "Ouça a apresentação do projeto Eco Action.",
    listeningQuestion:
      'Ms. Anna disse: "We must reduce plastic and we should plant more trees." O que ela está fazendo?',
    listeningOptions: [
      "Contando uma história do passado",
      "Dando obrigações e recomendações",
      "Fazendo perguntas",
    ],
    listeningCorrect: "Dando obrigações e recomendações",
    listeningWrongHint: "'Must' = obrigação forte; 'should' = recomendação.",
    readingNarration:
      "O aquecimento global ameaça florestas, oceanos e cidades. A boa notícia: cada ação conta. Reciclar, economizar energia, plantar árvores — pequenas atitudes que somam.",
    grammarNarration:
      "MUST = obrigação forte ('You must recycle'). SHOULD = recomendação ('You should walk more'). MIGHT = possibilidade ('It might rain'). Todos são seguidos por VERBO no infinitivo sem 'to'. First Conditional continua: If + Simple Present, ... will + verb.",
    finalProjectIntro: "Escreva seu plano ambiental. Digite seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY ECO ACTION PLAN — Eco Leader: ${name}. The planet needs our help. We must stop deforestation and we should reduce our carbon footprint every day. In my house, I have decided to save water — I might reduce my shower time to five minutes. If everyone in my street recycles, our neighborhood will have cleaner streets. If schools plant one tree per student, we will breathe better air. My promise: I will separate my garbage, save energy and speak up for the environment. Small actions, big future!`,
    finalProjectSectionTitle: "My Eco Action Plan",
  },
  VOCAB: [
    { id: "warming", en: "Global warming 🌡️", pt: "Aquecimento global", img: IMG.CITY_COVER },
    { id: "bio", en: "Biodiversity 🐆", pt: "Biodiversidade", img: IMG.PARK },
    { id: "deforest", en: "Deforestation 🪓", pt: "Desmatamento", img: IMG.MUSEUM },
    { id: "recycling", en: "Recycling ♻️", pt: "Reciclagem", img: IMG.LUCAS },
    { id: "sustain", en: "Sustainable dev. 🌍", pt: "Desenvolvimento sustentável", img: IMG.SOPHIE },
    { id: "carbon", en: "Carbon footprint 👣", pt: "Pegada de carbono", img: IMG.KENJI },
    { id: "conservation", en: "Conservation 🌳", pt: "Conservação", img: IMG.ANNA },
    { id: "renewable", en: "Renewable resources ☀️", pt: "Recursos renováveis", img: IMG.MAYA },
  ],
  STORY: [
    { img: IMG.ANNA, en: "Ms. Anna: 'Today we start our Eco Action Project.'", pt: "Ms. Anna: 'Hoje começamos nosso projeto Eco Action.'" },
    { img: IMG.MAYA, en: "Maya: 'We must stop wasting water at school.'", pt: "Maya: 'Precisamos parar de desperdiçar água na escola.'" },
    { img: IMG.KENJI, en: "Kenji: 'If we recycle every day, we will help a lot.'", pt: "Kenji: 'Se reciclarmos todo dia, ajudaremos muito.'" },
    { img: IMG.SOPHIE, en: "Sophie: 'We should plant more trees in the park.'", pt: "Sophie: 'Deveríamos plantar mais árvores no parque.'" },
    { img: IMG.LUCAS, en: "Lucas: 'The weather might get worse if we do nothing.'", pt: "Lucas: 'O clima pode piorar se não fizermos nada.'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'The Earth is our shared home!'", pt: "Ms. Anna: 'A Terra é nossa casa compartilhada!'" },
  ],
  DIALOG: [
    { who: "Ms. Anna", img: IMG.ANNA, en: "What must we do first, Maya?", pt: "O que devemos fazer primeiro, Maya?" },
    { who: "Maya", img: IMG.MAYA, en: "We must separate our garbage every day.", pt: "Precisamos separar o lixo todo dia." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Good. And what should we do at home?", pt: "Bom. E o que devemos fazer em casa?" },
    { who: "Maya", img: IMG.MAYA, en: "We should save water and turn off the lights.", pt: "Devemos economizar água e desligar as luzes." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "If we all help, the planet might recover.", pt: "Se todos ajudarmos, o planeta pode se recuperar." },
    { who: "Maya", img: IMG.MAYA, en: "Yes! Small actions, big change.", pt: "Sim! Pequenas ações, grande mudança." },
  ],
  READING: {
    title: "Small Actions, Big Impact",
    img: IMG.PARK,
    parts: [
      { en: "Every year, humans produce billions of tons of trash.", pt: "Todo ano, humanos produzem bilhões de toneladas de lixo.", highlight: ["billions of tons"] },
      { en: "You should recycle plastic, paper and glass at home.", pt: "Você deve reciclar plástico, papel e vidro em casa.", highlight: ["should recycle"] },
      { en: "We must protect forests — they are the lungs of Earth.", pt: "Precisamos proteger florestas — são os pulmões da Terra.", highlight: ["must protect", "lungs of Earth"] },
      { en: "If we save energy at home, we might slow global warming.", pt: "Se economizarmos energia em casa, podemos frear o aquecimento global.", highlight: ["save energy", "global warming"] },
      { en: "Every action counts. Every voice matters.", pt: "Cada ação conta. Cada voz importa.", highlight: ["Every action counts"] },
    ],
  },
  WRITING: [
    { prompt: "You ______ recycle plastic every day. (recommendation)", answer: "should", hint: "Recomendação = SHOULD.", options: ["should", "must", "might"], explain: "SHOULD dá conselho/recomendação." },
    { prompt: "We ______ stop deforestation now! (strong obligation)", answer: "must", hint: "Obrigação forte = MUST.", options: ["must", "should", "might"] },
    { prompt: "It ______ rain tomorrow. (possibility)", answer: "might", hint: "Possibilidade = MIGHT.", options: ["might", "must", "should"] },
    { prompt: "If we don't act, the planet ______ suffer. (First Conditional)", answer: "will", hint: "First Conditional: if + present, ... will.", options: ["will", "would", "might not"] },
    { prompt: "You ______ leave the lights on when you go out.", answer: "shouldn't", hint: "Conselho negativo = SHOULDN'T.", options: ["shouldn't", "mustn't", "might not"] },
    { prompt: "If everyone recycles, our city ______ cleaner.", answer: "will be", hint: "First Conditional + TO BE = will be.", options: ["will be", "would be", "is"] },
    { prompt: "'Deforestation' significa:", answer: "Desmatamento", hint: "Corte de florestas.", options: ["Desmatamento", "Desflorestação", "Desmontagem"] },
  ],
  QUIZ: [
    { q: "Recomendação: 'You ___ walk more.'", options: [{ text: "must" }, { text: "should", correct: true, explain: "SHOULD é conselho." }, { text: "might" }] },
    { q: "Obrigação forte: 'We ___ protect the forest.'", options: [{ text: "must", correct: true }, { text: "should" }, { text: "might" }] },
    { q: "Possibilidade: 'It ___ rain later.'", options: [{ text: "must" }, { text: "should" }, { text: "might", correct: true }] },
    { q: "'Recycling' significa:", options: [{ text: "Reciclagem", correct: true }, { text: "Rescisão" }, { text: "Reserva" }] },
    { q: "First Conditional: 'If we don't act, ___'", options: [{ text: "the planet suffered" }, { text: "the planet will suffer", correct: true }, { text: "the planet would suffer" }] },
    { q: "'Carbon footprint' é:", options: [{ text: "Pegada de dinossauro" }, { text: "Impacto de CO₂ que você gera", correct: true, explain: "Quanto carbono você emite no dia a dia." }, { text: "Sapato preto" }] },
    { q: "Após MUST/SHOULD/MIGHT vem:", options: [{ text: "verbo com 'to'" }, { text: "verbo no infinitivo SEM 'to'", correct: true }, { text: "verbo -ing" }] },
    { q: "Recurso RENOVÁVEL:", options: [{ text: "Petróleo" }, { text: "Solar e eólico", correct: true }, { text: "Carvão" }] },
  ],
  REAL_LIFE: [
    { situation: "♻️ Recomendando.", answer: "You should separate your garbage every day." },
    { situation: "🚫 Obrigação forte.", answer: "We must stop wasting water." },
    { situation: "☔ Possibilidade.", answer: "It might rain, so bring an umbrella." },
    { situation: "🌍 First Conditional.", answer: "If we plant more trees, our city will breathe better." },
    { situation: "🔌 Economia de energia.", answer: "You shouldn't leave the lights on when you leave." },
  ],
  GRAMMAR: {
    focus: "Modal Verbs & First Conditional (continuação)",
    why:
      "Modais SHOULD/MUST/MIGHT expressam RECOMENDAÇÃO / OBRIGAÇÃO / POSSIBILIDADE. Vêm SEMPRE antes do verbo, no infinitivo sem 'to'. First Conditional trabalha com condições reais e prováveis: IF + Simple Present, ... WILL + verbo.",
    examples: [
      { en: "You SHOULD recycle every day. (conselho)", pt: "Você DEVERIA reciclar todo dia. (conselho)" },
      { en: "We MUST protect the ocean. (obrigação)", pt: "Nós PRECISAMOS proteger o oceano. (obrigação)" },
      { en: "It MIGHT rain tomorrow. (possibilidade)", pt: "Pode chover amanhã. (possibilidade)" },
      { en: "If we act now, we WILL save the planet.", pt: "Se agirmos agora, salvaremos o planeta." },
    ],
    errors: [
      { wrong: "You should to recycle.", right: "You SHOULD RECYCLE.", why: "Depois de modal não vai 'to'." },
      { wrong: "We must protecting the forest.", right: "We MUST PROTECT the forest.", why: "Depois de modal vai verbo no infinitivo, não -ing." },
      { wrong: "If it will rain, we stay home.", right: "If it RAINS, we WILL stay home.", why: "'Will' não aparece na cláusula 'if'." },
      { wrong: "You mustn't should smoke.", right: "You SHOULDN'T smoke. / You MUSTN'T smoke.", why: "Nunca use dois modais juntos." },
    ],
  },
  SONG: {
    title: "Save Our Home",
    verses: [
      { en: "We must plant, we should care,", pt: "Devemos plantar, devemos cuidar,", emoji: "🌳" },
      { en: "Small green actions, everywhere.", pt: "Pequenas ações verdes, em todo lugar.", emoji: "♻️" },
      { en: "If we try, the world will bloom,", pt: "Se tentarmos, o mundo vai florir,", emoji: "🌸" },
      { en: "One Earth, one home — make room!", pt: "Uma Terra, um lar — abram espaço!", emoji: "🌍" },
    ],
  },
  HUNTER: {
    intro: "Modal ou First Conditional?",
    rounds: [
      { promptEn: "You ___ recycle (conselho).", promptPt: "You ___ recycle (conselho).", targetLabel: "should", objects: [
        { id: "a", label: "must", img: "" }, { id: "b", label: "should", isTarget: true, img: "" }, { id: "c", label: "might", img: "" },
      ]},
      { promptEn: "We ___ stop deforestation (obrigação forte).", promptPt: "We ___ stop deforestation (obrigação forte).", targetLabel: "must", objects: [
        { id: "a", label: "must", isTarget: true, img: "" }, { id: "b", label: "should", img: "" }, { id: "c", label: "might", img: "" },
      ]},
      { promptEn: "It ___ rain (possibilidade).", promptPt: "It ___ rain (possibilidade).", targetLabel: "might", objects: [
        { id: "a", label: "must", img: "" }, { id: "b", label: "should", img: "" }, { id: "c", label: "might", isTarget: true, img: "" },
      ]},
      { promptEn: "If we act, the planet ___ recover.", promptPt: "If we act, the planet ___ recover.", targetLabel: "will", objects: [
        { id: "a", label: "would", img: "" }, { id: "b", label: "will", isTarget: true, img: "" }, { id: "c", label: "should", img: "" },
      ]},
      { promptEn: "'Recycling' =", promptPt: "'Recycling' =", targetLabel: "Reciclagem", objects: [
        { id: "a", label: "Reciclagem", isTarget: true, img: "" }, { id: "b", label: "Reserva", img: "" }, { id: "c", label: "Redação", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Palavra → tradução:",
    pairs: [
      { id: "a", en: "Recycling ♻️", pt: "Reciclagem", img: IMG.LUCAS },
      { id: "b", en: "Deforestation 🪓", pt: "Desmatamento", img: IMG.MUSEUM },
      { id: "c", en: "Biodiversity 🐆", pt: "Biodiversidade", img: IMG.PARK },
      { id: "d", en: "Carbon footprint 👣", pt: "Pegada de carbono", img: IMG.KENJI },
    ],
  },
  BOOK: {
    title: "My Eco Action Plan",
    intro: "Seu plano verde pessoal.",
    pages: [
      { en: "Page 1 — I must ___.", pt: "Pág. 1 — Preciso ___.", img: IMG.ANNA, badge: "🚨" },
      { en: "Page 2 — I should ___.", pt: "Pág. 2 — Deveria ___.", img: IMG.SOPHIE, badge: "✅" },
      { en: "Page 3 — I might ___.", pt: "Pág. 3 — Talvez eu ___.", img: IMG.LUCAS, badge: "💡" },
      { en: "Page 4 — If everyone helps, we will ___.", pt: "Pág. 4 — Se todos ajudarem, vamos ___.", img: IMG.PARK, badge: "🌍" },
      { en: "The End — Small actions, big future.", pt: "Fim — Pequenas ações, grande futuro.", img: IMG.SCHOOL, badge: "🌱" },
    ],
  },
  CULTURE: {
    title: "The Amazon and the World 🌳",
    emoji: "🌎",
    paragraphs: [
      { en: "The Amazon rainforest produces 20% of the world's oxygen.", pt: "A Floresta Amazônica produz 20% do oxigênio do mundo." },
      { en: "COP conferences bring almost every country together to fight climate change.", pt: "As COPs reúnem quase todos os países para combater a mudança climática." },
      { pt: "O Brasil tem papel de destaque global na proteção ambiental." },
    ],
  },
};

export default lesson;
