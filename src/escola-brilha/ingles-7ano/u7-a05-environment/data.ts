// Inglês 7º Ano — Unit 5 "Environment and Sustainability 🌱"
// Future: Going To · Introdução ao WILL · Sustentabilidade
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u7-a05-environment",
  meta: {
    unitLabel: "Unit 5 · Lesson 1 — Environment and Sustainability 🌱",
    headerKicker: "SPEB 1.0 · English Academy — 7th Grade",
    coverKicker: "Climate · Recycling · Renewable energy · Wildlife",
    coverTitle: "Environment and Sustainability 🌱",
    coverSubtitle:
      "A Academy lança o Green Future Project. Aprenda a falar sobre planos com GOING TO e promessas com WILL.",
    storyTitle: "Green Future Project",
    vocabularyTitle: "Planet & Solutions",
    speakingTargets: [
      "I'm going to recycle plastic every week.",
      "We are going to plant trees at school.",
      "I will turn off the lights when I leave.",
      "The Earth will thank us for our actions.",
      "What are you going to do for the planet?",
      "I'll take shorter showers.",
    ],
    listeningIntro: "Ouça Maya apresentar o plano ambiental da turma.",
    listeningQuestion:
      'Maya: "Next month, we are going to plant fifty trees at school and I will bring my reusable bottle every day." O que a TURMA vai fazer no próximo mês?',
    listeningOptions: [
      "Comprar cinquenta livros",
      "Plantar cinquenta árvores",
      "Ir a um festival",
    ],
    listeningCorrect: "Plantar cinquenta árvores",
    listeningWrongHint: "'we are going to plant' = a gente vai plantar (plano).",
    readingNarration:
      "Textos ambientais falam de PLANOS (going to = decidido) e PROMESSAS/PREVISÕES (will = decisão do momento, previsão). Ex: 'I'm going to recycle' (já decidi). 'I'll help you carry that' (decidi agora).",
    grammarNarration:
      "GOING TO = plano que você JÁ tinha ('I'm going to travel next month'). WILL = decisão do momento, promessa ou previsão ('I'll help you'; 'It will rain'). Estrutura: TO BE + going to + verbo (I am going to recycle). WILL + verbo (I will recycle).",
    finalProjectIntro: "Vamos escrever seu plano verde. Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `GREEN FUTURE PROJECT — Hi! I'm ${name} and this is my green plan for the next year. I'm going to recycle plastic, paper and glass in my house. My family and I are going to plant three trees in our garden. I will always turn off lights and computers when I leave a room. I will take shorter showers to save water. I promise I won't use plastic bags anymore — I'll bring my own reusable bag. Small actions today will build a green future tomorrow. The Earth is our only home!`,
    finalProjectSectionTitle: "Green Future Project",
  },
  VOCAB: [
    { id: "climate", en: "Climate change 🌡️", pt: "Mudança climática", img: IMG.PARK },
    { id: "recycling", en: "Recycling ♻️", pt: "Reciclagem", img: IMG.BANK },
    { id: "pollution", en: "Pollution 🏭", pt: "Poluição", img: IMG.CITY_COVER },
    { id: "energy", en: "Renewable energy ☀️", pt: "Energia renovável", img: IMG.SCHOOL_CITY },
    { id: "wildlife", en: "Wildlife 🦁", pt: "Vida selvagem", img: IMG.MUSEUM },
    { id: "conservation", en: "Conservation 🌳", pt: "Conservação", img: IMG.PARK },
    { id: "nature", en: "Nature 🍃", pt: "Natureza", img: IMG.PARK },
    { id: "water", en: "Water 💧", pt: "Água", img: IMG.RESTAURANT },
  ],
  STORY: [
    { img: IMG.ANNA, en: "Ms. Anna: 'Our planet needs help. What are we going to do?'", pt: "Ms. Anna: 'Nosso planeta precisa de ajuda. O que vamos fazer?'" },
    { img: IMG.MAYA, en: "Maya: 'I'm going to bring a reusable bottle every day.'", pt: "Maya: 'Vou trazer uma garrafa reutilizável todo dia.'" },
    { img: IMG.LUCAS, en: "Lucas: 'My family is going to plant a tree this weekend.'", pt: "Lucas: 'Minha família vai plantar uma árvore neste fim de semana.'" },
    { img: IMG.KENJI, en: "Kenji: 'I'll turn off the lights when I leave. I promise!'", pt: "Kenji: 'Vou apagar as luzes quando sair. Prometo!'" },
    { img: IMG.SOPHIE, en: "Sophie: 'We'll all take shorter showers to save water.'", pt: "Sophie: 'Todos nós vamos tomar banhos mais curtos pra economizar água.'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'Small actions today will save the planet tomorrow.'", pt: "Ms. Anna: 'Pequenas ações hoje vão salvar o planeta amanhã.'" },
  ],
  DIALOG: [
    { who: "Ms. Anna", img: IMG.ANNA, en: "What are you going to do for the environment, Lucas?", pt: "O que você vai fazer pelo meio ambiente, Lucas?" },
    { who: "Lucas", img: IMG.LUCAS, en: "I'm going to recycle plastic and paper at home.", pt: "Vou reciclar plástico e papel em casa." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Great! And what will you do at school?", pt: "Ótimo! E o que vai fazer na escola?" },
    { who: "Lucas", img: IMG.LUCAS, en: "I'll bring my own water bottle. No more plastic cups!", pt: "Vou trazer minha garrafinha. Chega de copos plásticos!" },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Perfect. Do you think it will make a difference?", pt: "Perfeito. Acha que vai fazer diferença?" },
    { who: "Lucas", img: IMG.LUCAS, en: "Yes! If everyone helps, we will save the planet.", pt: "Sim! Se todos ajudarem, vamos salvar o planeta." },
  ],
  READING: {
    title: "Five Steps to a Greener Life",
    img: IMG.PARK,
    parts: [
      { en: "Climate change is real, but every small action helps.", pt: "A mudança climática é real, mas cada pequena ação ajuda.", highlight: ["Climate change", "every small action"] },
      { en: "First, you're going to reduce plastic — use a cloth bag.", pt: "Primeiro, você vai reduzir o plástico — use uma sacola de pano.", highlight: ["going to reduce"] },
      { en: "Second, you'll save water — take shorter showers.", pt: "Segundo, você vai economizar água — tome banhos mais curtos.", highlight: ["you'll save"] },
      { en: "Third, plant a tree. A tree will clean the air for 40 years.", pt: "Terceiro, plante uma árvore. Uma árvore limpa o ar por 40 anos.", highlight: ["A tree will clean"] },
      { en: "Together, we're going to build a green future.", pt: "Juntos, vamos construir um futuro verde.", highlight: ["we're going to"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ recycle every day. (plano decidido)", answer: "am going to", hint: "Plano decidido → GOING TO.", options: ["am going to", "will", "go"], explain: "Plano feito antes → GOING TO." },
    { prompt: "OK, I ______ help you! (decisão agora)", answer: "will", hint: "Decisão do momento → WILL.", options: ["will", "am going to", "go"] },
    { prompt: "Look at the clouds! It ______ rain. (previsão)", answer: "will", hint: "Previsão do momento → WILL.", options: ["will", "is going to", "rains"] },
    { prompt: "We ______ plant trees next Saturday. (plano)", answer: "are going to", hint: "Plano já feito → GOING TO.", options: ["are going to", "will", "plant"] },
    { prompt: "I promise I ______ turn off the lights.", answer: "will", hint: "Promessa → WILL.", options: ["will", "am going to", "won't"] },
    { prompt: "She ______ not use plastic bags anymore.", answer: "will", hint: "Decisão firme.", options: ["will", "is going to", "goes"] },
  ],
  QUIZ: [
    { q: "Plano DECIDIDO antes:", options: [{ text: "will" }, { text: "going to", correct: true, explain: "Going to = plano feito antes." }, { text: "Present Simple" }] },
    { q: "Decisão AGORA:", options: [{ text: "going to" }, { text: "will", correct: true }, { text: "Simple Past" }] },
    { q: "Complete: I ___ plant a tree next Sunday.", options: [{ text: "am going to", correct: true }, { text: "will" }, { text: "plant" }] },
    { q: "'Recycling' significa:", options: [{ text: "Poluir" }, { text: "Reciclar", correct: true }, { text: "Consumir" }] },
    { q: "Complete: OK, I ___ help you carry that.", options: [{ text: "will", correct: true, explain: "Decisão no momento → WILL." }, { text: "am going to" }, { text: "help" }] },
    { q: "'Wildlife' significa:", options: [{ text: "Vida selvagem", correct: true }, { text: "Vida marinha" }, { text: "Vida na cidade" }] },
    { q: "Negativo de 'I will go':", options: [{ text: "I don't will go" }, { text: "I won't go", correct: true }, { text: "I not go" }] },
    { q: "Complete: Look at the sky! It ___ rain.", options: [{ text: "will", correct: true }, { text: "is" }, { text: "rains" }] },
  ],
  REAL_LIFE: [
    { situation: "♻️ Falando do seu plano de reciclagem.", answer: "I'm going to recycle plastic every week." },
    { situation: "💧 Prometendo economizar água.", answer: "I will take shorter showers from now on." },
    { situation: "🌳 Plano com a família.", answer: "My family and I are going to plant a tree this Saturday." },
    { situation: "🔌 Decisão do momento.", answer: "OK, I'll turn off all the lights when I leave." },
    { situation: "🛍️ Recusando sacola plástica.", answer: "No, thanks. I'll use my reusable bag." },
  ],
  GRAMMAR: {
    focus: "Future: Going To · Introdução ao Will",
    why:
      "Existem 2 formas comuns pro futuro: GOING TO (plano JÁ decidido, agenda) e WILL (decisão AGORA, promessa, previsão). Escolher o certo mostra que você domina inglês real. GOING TO usa TO BE (am/is/are) + going to + verbo. WILL é sempre WILL + verbo (não muda com pessoa).",
    examples: [
      { en: "I'm going to travel next month. (plano)", pt: "Vou viajar mês que vem. (plano)" },
      { en: "The phone is ringing — I'll answer it. (agora)", pt: "O telefone tá tocando — eu atendo. (agora)" },
      { en: "Look! It's going to rain. (previsão com sinal)", pt: "Olha! Vai chover. (previsão com sinal)" },
      { en: "I promise I will help. (promessa)", pt: "Prometo que vou ajudar. (promessa)" },
    ],
    errors: [
      { wrong: "I will to help you.", right: "I WILL HELP you.", why: "Depois de WILL, verbo sem 'to'." },
      { wrong: "She wills go tomorrow.", right: "She WILL GO tomorrow.", why: "WILL nunca ganha -S." },
      { wrong: "I am going travel.", right: "I am GOING TO travel.", why: "Não esquecer o 'to' entre going e o verbo." },
      { wrong: "I don't will go.", right: "I WON'T go.", why: "Negativa: will + not = won't." },
    ],
  },
  SONG: {
    title: "Green Future",
    verses: [
      { en: "I'm going to plant, I'm going to save,", pt: "Vou plantar, vou economizar,", emoji: "🌳" },
      { en: "I'll be the change, I'll be brave.", pt: "Vou ser a mudança, vou ser corajoso.", emoji: "💪" },
      { en: "The Earth will smile if we all care,", pt: "A Terra vai sorrir se todos cuidarmos,", emoji: "🌍" },
      { en: "A green tomorrow — we'll get there!", pt: "Um amanhã verde — vamos chegar lá!", emoji: "🌱" },
    ],
  },
  HUNTER: {
    intro: "WILL ou GOING TO?",
    rounds: [
      { promptEn: "Plano decidido: 'já marquei viagem'", promptPt: "Plano decidido: 'já marquei viagem'", targetLabel: "going to", objects: [
        { id: "a", label: "going to", img: "", isTarget: true },
        { id: "b", label: "will", img: "" },
        { id: "c", label: "was", img: "" },
      ]},
      { promptEn: "Decisão do momento: 'OK, EU AJUDO'", promptPt: "Decisão do momento: 'OK, EU AJUDO'", targetLabel: "will", objects: [
        { id: "a", label: "going to", img: "" },
        { id: "b", label: "will", img: "", isTarget: true },
        { id: "c", label: "was", img: "" },
      ]},
      { promptEn: "Previsão com sinal: 'olha as nuvens'", promptPt: "Previsão com sinal: 'olha as nuvens'", targetLabel: "going to rain", objects: [
        { id: "a", label: "will rain", img: "" },
        { id: "b", label: "going to rain", img: "", isTarget: true },
        { id: "c", label: "rains", img: "" },
      ]},
      { promptEn: "Promessa: 'prometo que ajudo'", promptPt: "Promessa: 'prometo que ajudo'", targetLabel: "will help", objects: [
        { id: "a", label: "will help", img: "", isTarget: true },
        { id: "b", label: "going to help", img: "" },
        { id: "c", label: "helped", img: "" },
      ]},
      { promptEn: "Negativa de 'I will go':", promptPt: "Negativa de 'I will go':", targetLabel: "I won't go", objects: [
        { id: "a", label: "I don't will go", img: "" },
        { id: "b", label: "I not go", img: "" },
        { id: "c", label: "I won't go", img: "", isTarget: true },
      ]},
    ],
  },
  CULTURE: {
    title: "Global Environmental Movements 🌍",
    emoji: "🌱",
    paragraphs: [
      { en: "Fridays for Future was started by a young Swedish student — Greta Thunberg — in 2018.", pt: "Sextas pelo Futuro foi criado por uma jovem sueca — Greta Thunberg — em 2018." },
      { en: "Costa Rica gets over 99% of its electricity from renewable energy.", pt: "A Costa Rica gera mais de 99% da eletricidade dela com energia renovável." },
      { pt: "Falar inglês te conecta com o movimento ambiental global — a conversa é planetária." },
    ],
  },
};

export default lesson;
