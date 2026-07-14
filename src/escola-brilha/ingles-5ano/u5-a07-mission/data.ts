// Inglês 5º Ano — Unit 7 "English Mission 🏆" (revisão final)
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u5-a07-mission",
  meta: {
    unitLabel: "Unit 7 · Lesson 7 — English Mission 🏆",
    headerKicker: "My English Portfolio — Level 2 · 5th Grade",
    coverKicker: "Grande missão integradora",
    coverTitle: "English Mission 🏆",
    coverSubtitle:
      "Lily, Ben e Buddy viajam pelo mundo revisando tudo: TO BE, Simple Present, Simple Past, CAN, MUST, WANT TO, direções e sequência.",
    storyTitle: "The Great English Mission",
    vocabularyTitle: "Mission Words",
    speakingTargets: [
      "I am ready for the mission.",
      "We must save the planet.",
      "I can speak English!",
      "First, we went to Brazil.",
      "Turn left at the library.",
      "I want to help people.",
    ],
    listeningIntro: "Ouça o briefing da missão.",
    listeningQuestion: '"First, we go to the museum." Pra onde vamos primeiro?',
    listeningOptions: ["Escola", "Museu", "Hospital"],
    listeningCorrect: "Museu",
    listeningWrongHint: '"Museum" = museu.',
    readingNarration:
      "Missão final: revisar TUDO. Você já sabe descrever, contar história, dar direção e falar de sonhos. Mostre o que aprendeu!",
    grammarNarration:
      "REVISÃO GERAL: TO BE (am/is/are, was/were) · Simple Present (I use, She uses) · Simple Past (went, had) · CAN/CAN'T · MUST/MUSTN'T · WANT TO · Prepositions (next to, in front of) · Directions (Turn, Go, Take) · Sequência (First, Then, Next, Finally).",
    finalProjectIntro: "Seu portfólio final de inglês! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY ENGLISH PORTFOLIO — LEVEL 2 — by ${name}. My name is ${name}. I am Brazilian. I speak Portuguese and English. I am creative and kind. I want to be a scientist. I can run and I can draw. I dream of traveling the world. We must save water and recycle. Take the bus to the museum. Turn left at the bakery. Once upon a time, a brave hero saved the planet. The End!`,
    finalProjectSectionTitle: "My English Portfolio — Level 2",
  },
  VOCAB: [
    { id: "mission", en: "Mission 🎯", pt: "Missão", img: IMG.RAINBOW },
    { id: "team", en: "Team 👥", pt: "Time", img: IMG.FRIENDS },
    { id: "world", en: "World 🌎", pt: "Mundo", img: IMG.CITY_COVER },
    { id: "hero", en: "Hero 🦸", pt: "Herói", img: IMG.BEN },
    { id: "adventure", en: "Adventure 🗺️", pt: "Aventura", img: IMG.AIRPORT },
    { id: "friends", en: "Friends 👫", pt: "Amigos", img: IMG.FRIENDS },
    { id: "portfolio", en: "Portfolio 📁", pt: "Portfólio", img: IMG.CLASSROOM },
    { id: "champion", en: "Champion 🏆", pt: "Campeão", img: IMG.LILY },
  ],
  STORY: [
    { img: IMG.LILY, en: "The team is ready for the great English mission!", pt: "O time está pronto pra grande missão de inglês!" },
    { img: IMG.BEN, en: "Lily is brave. Ben is fast. Buddy is smart.", pt: "Lily é corajosa. Ben é rápido. Buddy é esperto." },
    { img: IMG.AIRPORT, en: "First, they went to Brazil.", pt: "Primeiro, foram ao Brasil." },
    { img: IMG.PARK, en: "Then, they saved the forest.", pt: "Então, salvaram a floresta." },
    { img: IMG.BUS_STATION, en: "Next, they took the bus in the big city.", pt: "Depois, pegaram o ônibus na grande cidade." },
    { img: IMG.MUSEUM, en: "They visited the museum and the library.", pt: "Visitaram o museu e a biblioteca." },
    { img: IMG.BUDDY, en: "Finally, Buddy invented a new energy!", pt: "Finalmente, Buddy inventou uma nova energia!" },
    { img: IMG.FRIENDS, en: "Mission complete — we are English champions!", pt: "Missão concluída — somos campeões de inglês!" },
  ],
  DIALOG: [
    { who: "Lily", img: IMG.LILY, en: "Team, are you ready?", pt: "Time, prontos?" },
    { who: "Ben", img: IMG.BEN, en: "Yes! I can run fast!", pt: "Sim! Consigo correr rápido!" },
    { who: "Buddy", img: IMG.BUDDY, en: "I can speak all languages!", pt: "Falo todos os idiomas!" },
    { who: "Lily", img: IMG.LILY, en: "We must save the planet.", pt: "Devemos salvar o planeta." },
    { who: "Ben", img: IMG.BEN, en: "First, recycle. Then, save water.", pt: "Primeiro, reciclar. Depois, economizar água." },
    { who: "Buddy", img: IMG.BUDDY, en: "Finally, teach other kids!", pt: "Por fim, ensinar outras crianças!" },
    { who: "Lily", img: IMG.LILY, en: "Let's go, English champions!", pt: "Vamos lá, campeões do inglês!" },
  ],
  READING: {
    title: "Our Mission",
    img: IMG.RAINBOW,
    parts: [
      { en: "We are the team.", pt: "Somos o time.", highlight: ["are"] },
      { en: "We can speak English.", pt: "Sabemos falar inglês.", highlight: ["can"] },
      { en: "We must protect nature.", pt: "Devemos proteger a natureza.", highlight: ["must"] },
      { en: "We want to change the world.", pt: "Queremos mudar o mundo.", highlight: ["want to"] },
      { en: "Finally, we are champions!", pt: "Por fim, somos campeões!", highlight: ["Finally"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ Brazilian.", answer: "am", hint: "TO BE.", options: ["am", "is", "have"] },
    { prompt: "She ______ to school every day.", answer: "goes", hint: "Simple present 3ª pessoa.", options: ["goes", "go", "went"] },
    { prompt: "We ______ to the park yesterday.", answer: "went", hint: "Passado de GO.", options: ["went", "go", "goes"] },
    { prompt: "I ______ speak English!", answer: "can", hint: "Habilidade.", options: ["can", "am", "is"] },
    { prompt: "We ______ save water.", answer: "must", hint: "Dever.", options: ["must", "am", "want"] },
  ],
  QUIZ: [
    { q: "Complete: I ___ Brazilian.", options: [{ text: "am", correct: true }, { text: "is" }, { text: "are" }] },
    { q: "Passado de GO:", options: [{ text: "goed" }, { text: "went", correct: true }, { text: "going" }] },
    { q: "Complete: The robot ___ walk.", options: [{ text: "is" }, { text: "can", correct: true }, { text: "am" }] },
    { q: "Complete: We ___ recycle.", options: [{ text: "am" }, { text: "must", correct: true }, { text: "is" }] },
    { q: "'Adventure' é:", options: [{ text: "Aventura", correct: true }, { text: "Escola" }, { text: "Comida" }] },
    { q: "Sequência final:", options: [{ text: "First" }, { text: "Finally", correct: true }, { text: "Then" }] },
    { q: "'How can I get to…' é:", options: [{ text: "Como chego a…", correct: true }, { text: "O que é isso?" }, { text: "Quem é?" }] },
    { q: "'I want to be' é:", options: [{ text: "Quero ser", correct: true }, { text: "Sou" }, { text: "Tenho" }] },
  ],
  REAL_LIFE: [
    { situation: "👋 Apresentando o time.", answer: "This is my team!" },
    { situation: "💪 Falando o que consegue.", answer: "I can speak English." },
    { situation: "🌱 Falando obrigação ecológica.", answer: "We must recycle." },
    { situation: "📖 Contando o começo da história.", answer: "First, we went to Brazil." },
    { situation: "🏆 Comemorando a missão.", answer: "We are English champions!" },
  ],
  GRAMMAR: {
    focus: "Revisão Geral do 5º Ano",
    why:
      "Você aprendeu MUITO! TO BE (I am, She is), Simple Present (I use), Simple Past (went, had), CAN, MUST, WANT TO, direções, sequência, preposições. Hora de juntar tudo!",
    examples: [
      { en: "I am creative and I want to be a scientist.", pt: "Sou criativo e quero ser cientista." },
      { en: "I can speak English. I use it every day.", pt: "Sei falar inglês. Uso todo dia." },
      { en: "Yesterday I went to the park.", pt: "Ontem fui ao parque." },
      { en: "We must save water. Don't pollute!", pt: "Devemos economizar água. Não polua!" },
      { en: "First, turn left. Then, go straight.", pt: "Primeiro vire à esquerda. Depois siga reto." },
    ],
    errors: [
      { wrong: "I want be a doctor.", right: "I want TO be a doctor.", why: "WANT + TO." },
      { wrong: "He can to swim.", right: "He CAN swim.", why: "CAN sem TO." },
      { wrong: "She goed home.", right: "She WENT home.", why: "Passado de GO = WENT." },
    ],
  },
  SONG: {
    title: "English Champions",
    hookPt: "Cante e celebre a missão cumprida!",
    verses: [
      { en: "We are the team, we're on a mission,", pt: "Somos o time, estamos em missão,", emoji: "🎯" },
      { en: "English words, our new tradition!", pt: "Palavras em inglês, nova tradição!", emoji: "🇺🇸" },
      { en: "I can, you can, we can too,", pt: "Eu posso, você pode, nós podemos,", emoji: "💪" },
      { en: "Speak the language — old and new.", pt: "Falar a língua — velha e nova.", emoji: "🗣️" },
      { en: "First we tried, then we learned,", pt: "Primeiro tentamos, depois aprendemos,", emoji: "📚" },
      { en: "Finally the medal, well-earned!", pt: "Por fim a medalha, merecida!", emoji: "🏆" },
    ],
  },
  HUNTER: {
    intro: "Missão final — escolha certo!",
    rounds: [
      { promptEn: "Complete: I ___ Brazilian.", promptPt: "Complete: I ___ Brazilian.", targetLabel: "am", objects: [
        { id: "a", label: "am", img: "", isTarget: true },
        { id: "b", label: "is", img: "" },
        { id: "c", label: "are", img: "" },
      ]},
      { promptEn: "Passado de GO?", promptPt: "Passado de GO?", targetLabel: "went", objects: [
        { id: "a", label: "goes", img: "" },
        { id: "b", label: "went", img: "", isTarget: true },
        { id: "c", label: "going", img: "" },
      ]},
      { promptEn: "Complete: I ___ speak English!", promptPt: "Complete: I ___ speak English!", targetLabel: "can", objects: [
        { id: "a", label: "am", img: "" },
        { id: "b", label: "can", img: "", isTarget: true },
        { id: "c", label: "have", img: "" },
      ]},
      { promptEn: "Complete: We ___ save water.", promptPt: "Complete: We ___ save water.", targetLabel: "must", objects: [
        { id: "a", label: "must", img: "", isTarget: true },
        { id: "b", label: "am", img: "" },
        { id: "c", label: "is", img: "" },
      ]},
      { promptEn: "Sequência final:", promptPt: "Sequência final:", targetLabel: "Finally", objects: [
        { id: "a", label: "First", img: "" },
        { id: "b", label: "Then", img: "" },
        { id: "c", label: "Finally", img: "", isTarget: true },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares campeões!",
    pairs: [
      { id: "a", en: "Mission 🎯", pt: "Missão", img: IMG.RAINBOW },
      { id: "b", en: "Champion 🏆", pt: "Campeão", img: IMG.LILY },
      { id: "c", en: "Team 👥", pt: "Time", img: IMG.FRIENDS },
      { id: "d", en: "World 🌎", pt: "Mundo", img: IMG.CITY_COVER },
    ],
  },
  BOOK: {
    title: "My English Portfolio — Level 2",
    intro: "Seu portfólio final. Vire as páginas!",
    pages: [
      { en: "Page 1 — About me.", pt: "Pág. 1 — Sobre mim.", img: IMG.LILY, badge: "👤" },
      { en: "Page 2 — My dreams.", pt: "Pág. 2 — Meus sonhos.", img: IMG.RAINBOW, badge: "⭐" },
      { en: "Page 3 — A country I love.", pt: "Pág. 3 — Um país que amo.", img: IMG.PASSPORT, badge: "🌎" },
      { en: "Page 4 — My story.", pt: "Pág. 4 — Minha história.", img: IMG.MUSEUM, badge: "📖" },
      { en: "Page 5 — My eco campaign.", pt: "Pág. 5 — Minha campanha eco.", img: IMG.PARK, badge: "🌱" },
      { en: "Page 6 — My tourist guide.", pt: "Pág. 6 — Meu guia turístico.", img: IMG.CITY_COVER, badge: "🗺️" },
      { en: "The End — I am an English champion!", pt: "Fim — Sou campeão do inglês!", img: IMG.FRIENDS, badge: "🏆" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "É a sala dos troféus! Toque em cada conquista.",
    img: IMG.CLASSROOM,
    items: [
      { en: "Trophy", pt: "Troféu", emoji: "🏆" },
      { en: "Medal", pt: "Medalha", emoji: "🥇" },
      { en: "Certificate", pt: "Certificado", emoji: "📜" },
      { en: "Star", pt: "Estrela", emoji: "⭐" },
      { en: "Book", pt: "Livro", emoji: "📖" },
      { en: "Globe", pt: "Globo", emoji: "🌍" },
    ],
  },
  CULTURE: {
    title: "English Around the World 🌍",
    emoji: "🇺🇸",
    paragraphs: [
      { en: "English is spoken in over 60 countries — it's a super language!", pt: "O inglês é falado em mais de 60 países — é uma super língua!" },
      { en: "Learning English opens doors to travel, science, music and friendship.", pt: "Aprender inglês abre portas pra viagem, ciência, música e amizade." },
      { pt: "Parabéns por chegar até aqui! Você já é um pequeno cidadão do mundo." },
    ],
  },
};

export default lesson;
