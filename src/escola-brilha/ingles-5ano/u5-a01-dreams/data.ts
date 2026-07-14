// Inglês 5º Ano — Unit 1 "My Identity and My Dreams ⭐"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u5-a01-dreams",
  meta: {
    unitLabel: "Unit 1 · Lesson 1 — My Identity and My Dreams ⭐",
    headerKicker: "My English Portfolio — Level 2 · 5th Grade",
    coverKicker: "Quem sou eu & meus sonhos",
    coverTitle: "My Identity and My Dreams ⭐",
    coverSubtitle:
      "Falar de personalidade, talentos e o que queremos ser: I want to be… / I dream of… / I'm good at…",
    storyTitle: "My Big Dream",
    vocabularyTitle: "Dreams & Talents",
    speakingTargets: [
      "I want to be a doctor.",
      "I dream of traveling the world.",
      "I'm good at drawing.",
      "I like music.",
      "My favorite activity is soccer.",
      "My goal is to help people.",
    ],
    listeningIntro: "Ouça a Lily contar o sonho dela.",
    listeningQuestion: 'Lily disse: "I want to be a scientist." Ela quer ser o quê?',
    listeningOptions: ["Professora", "Cientista", "Cantora"],
    listeningCorrect: "Cientista",
    listeningWrongHint: '"Scientist" = cientista.',
    readingNarration:
      "WANT TO + verbo diz o que você QUER fazer/ser. DREAM OF + -ING mostra um sonho.",
    grammarNarration:
      "Verb TO BE (I am / She is) descreve quem você é. WANT TO + verbo mostra desejo. CAN mostra habilidade. Adjetivos vêm antes: a KIND person.",
    finalProjectIntro: "Seu livro dos sonhos! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY DREAM BOOK — by ${name}. Hi! My name is ${name}. I am creative and kind. I'm good at drawing. I want to be an artist. I dream of showing my art around the world. My goal is to make people happy. I can do it!`,
    finalProjectSectionTitle: "My Dream Book",
  },
  VOCAB: [
    { id: "dream", en: "Dream 💭", pt: "Sonho", img: IMG.RAINBOW },
    { id: "goal", en: "Goal 🎯", pt: "Objetivo", img: IMG.LILY },
    { id: "talent", en: "Talent 🌟", pt: "Talento", img: IMG.BEN },
    { id: "creative", en: "Creative 🎨", pt: "Criativo(a)", img: IMG.LILY },
    { id: "brave", en: "Brave 🦁", pt: "Corajoso(a)", img: IMG.BEN },
    { id: "doctor", en: "Doctor 👩‍⚕️", pt: "Médico(a)", img: IMG.HOSPITAL },
    { id: "artist", en: "Artist 🎨", pt: "Artista", img: IMG.LILY },
    { id: "scientist", en: "Scientist 🔬", pt: "Cientista", img: IMG.EMILY },
  ],
  STORY: [
    { img: IMG.LILY, en: "Hi! I'm Lily. I have a big dream.", pt: "Oi! Sou Lily. Tenho um grande sonho." },
    { img: IMG.LILY, en: "I want to be a scientist when I grow up.", pt: "Quero ser cientista quando crescer." },
    { img: IMG.EMILY, en: "I like experiments and I'm good at math.", pt: "Gosto de experimentos e sou boa em matemática." },
    { img: IMG.BEN, en: "My friend Ben wants to be a soccer player.", pt: "Meu amigo Ben quer ser jogador de futebol." },
    { img: IMG.BEN, en: "He is brave and he can run very fast!", pt: "Ele é corajoso e corre muito rápido!" },
    { img: IMG.BUDDY, en: "Buddy the robot dreams of exploring space.", pt: "Buddy, o robô, sonha em explorar o espaço." },
    { img: IMG.RAINBOW, en: "Every dream starts with a small step.", pt: "Todo sonho começa com um pequeno passo." },
    { img: IMG.FRIENDS, en: "What is YOUR dream?", pt: "Qual é o SEU sonho?" },
  ],
  DIALOG: [
    { who: "Lily", img: IMG.LILY, en: "Ben, what do you want to be?", pt: "Ben, o que você quer ser?" },
    { who: "Ben", img: IMG.BEN, en: "I want to be a soccer player. And you?", pt: "Quero ser jogador de futebol. E você?" },
    { who: "Lily", img: IMG.LILY, en: "I want to be a scientist. I love experiments.", pt: "Quero ser cientista. Amo experimentos." },
    { who: "Ben", img: IMG.BEN, en: "Cool! What are you good at?", pt: "Legal! No que você é boa?" },
    { who: "Lily", img: IMG.LILY, en: "I'm good at math and drawing.", pt: "Sou boa em matemática e desenho." },
    { who: "Ben", img: IMG.BEN, en: "I can run fast and I like teamwork.", pt: "Consigo correr rápido e gosto de trabalho em equipe." },
    { who: "Lily", img: IMG.LILY, en: "Follow your dream, Ben!", pt: "Siga seu sonho, Ben!" },
  ],
  READING: {
    title: "My Dream",
    img: IMG.RAINBOW,
    parts: [
      { en: "My name is Lily.", pt: "Meu nome é Lily.", highlight: ["is"] },
      { en: "I am creative and kind.", pt: "Sou criativa e gentil.", highlight: ["am"] },
      { en: "I want to be a scientist.", pt: "Quero ser cientista.", highlight: ["want to"] },
      { en: "I'm good at math.", pt: "Sou boa em matemática.", highlight: ["good at"] },
      { en: "I dream of helping the planet.", pt: "Sonho em ajudar o planeta.", highlight: ["dream of"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ to be a doctor.", answer: "want", hint: "Verbo WANT + TO.", options: ["want", "am", "have"] },
    { prompt: "She ______ good at singing.", answer: "is", hint: "TO BE 3ª pessoa.", options: ["is", "am", "have"] },
    { prompt: "I ______ run fast.", answer: "can", hint: "Verbo de habilidade.", options: ["can", "am", "want"] },
    { prompt: "My dream ______ big.", answer: "is", hint: "TO BE + adjetivo.", options: ["is", "have", "want"] },
    { prompt: "He is very ______. (corajoso)", answer: "brave", hint: "Adjetivo.", options: ["brave", "table", "run"] },
  ],
  QUIZ: [
    { q: "'Dream' significa:", options: [{ text: "Amigo" }, { text: "Sonho", correct: true }, { text: "Escola" }] },
    { q: "Complete: I ___ to be a teacher.", options: [{ text: "am" }, { text: "want", correct: true }, { text: "have" }] },
    { q: "'Talent' é:", options: [{ text: "Sonho" }, { text: "Talento", correct: true }, { text: "Aula" }] },
    { q: "Complete: She ___ good at math.", options: [{ text: "am" }, { text: "is", correct: true }, { text: "are" }] },
    { q: "'Scientist' é:", options: [{ text: "Cientista", correct: true }, { text: "Médico" }, { text: "Cantor" }] },
    { q: "Complete: I ___ draw!", options: [{ text: "am" }, { text: "can", correct: true }, { text: "want" }] },
    { q: "'Goal' é:", options: [{ text: "Objetivo", correct: true }, { text: "Portão" }, { text: "Nome" }] },
  ],
  REAL_LIFE: [
    { situation: "🎯 Falando seu sonho profissional.", answer: "I want to be a doctor." },
    { situation: "🌟 Falando um talento seu.", answer: "I'm good at drawing." },
    { situation: "💭 Compartilhando um sonho.", answer: "I dream of traveling the world." },
    { situation: "⚡ Falando uma habilidade.", answer: "I can run fast." },
    { situation: "❤️ Falando o que você gosta.", answer: "I like music and art." },
  ],
  GRAMMAR: {
    focus: "TO BE · WANT TO · CAN · Adjetivos",
    why:
      "Pra falar de quem você É, você usa TO BE. Pra falar de sonhos e desejos: WANT TO + verbo. Pra habilidades: CAN + verbo. Adjetivos descrevem: brave, creative, kind.",
    examples: [
      { en: "I am creative.", pt: "Sou criativo." },
      { en: "I want to be a pilot.", pt: "Quero ser piloto." },
      { en: "I can play the guitar.", pt: "Consigo tocar violão." },
      { en: "She is brave and smart.", pt: "Ela é corajosa e esperta." },
      { en: "I dream of helping people.", pt: "Sonho em ajudar pessoas." },
    ],
    errors: [
      { wrong: "I want be a doctor.", right: "I want TO be a doctor.", why: "Sempre WANT + TO." },
      { wrong: "I can to run fast.", right: "I CAN run fast.", why: "CAN nunca leva TO." },
      { wrong: "She are kind.", right: "She IS kind.", why: "She/He/It usa IS." },
    ],
  },
  SONG: {
    title: "I Have a Dream",
    hookPt: "Cante e celebre o seu sonho!",
    verses: [
      { en: "I have a dream, a shining star,", pt: "Tenho um sonho, uma estrela brilhante,", emoji: "⭐" },
      { en: "I want to travel very far.", pt: "Quero viajar muito longe.", emoji: "✈️" },
      { en: "I can do it, yes I can,", pt: "Eu consigo, sim, eu consigo,", emoji: "💪" },
      { en: "Follow the dream and take my hand!", pt: "Siga o sonho, pegue minha mão!", emoji: "🤝" },
      { en: "Doctor, artist, or a chef,", pt: "Médico, artista ou chef,", emoji: "👩‍🍳" },
      { en: "Every dream is worth a step!", pt: "Todo sonho vale um passo!", emoji: "🌟" },
    ],
  },
  HUNTER: {
    intro: "Escolha a palavra certa!",
    rounds: [
      { promptEn: "Complete: I ___ to be a pilot.", promptPt: "Complete: I ___ to be a pilot.", targetLabel: "want", objects: [
        { id: "a", label: "want", img: "", isTarget: true },
        { id: "b", label: "am", img: "" },
        { id: "c", label: "have", img: "" },
      ]},
      { promptEn: "'Talent' é:", promptPt: "'Talent' é:", targetLabel: "Talento", objects: [
        { id: "a", label: "Sonho", img: "" },
        { id: "b", label: "Talento", img: "", isTarget: true },
        { id: "c", label: "Objetivo", img: "" },
      ]},
      { promptEn: "Complete: I ___ dance!", promptPt: "Complete: I ___ dance!", targetLabel: "can", objects: [
        { id: "a", label: "am", img: "" },
        { id: "b", label: "can", img: "", isTarget: true },
        { id: "c", label: "want", img: "" },
      ]},
      { promptEn: "'Brave' é:", promptPt: "'Brave' é:", targetLabel: "Corajoso", objects: [
        { id: "a", label: "Corajoso", img: "", isTarget: true },
        { id: "b", label: "Triste", img: "" },
        { id: "c", label: "Rápido", img: "" },
      ]},
      { promptEn: "'Scientist' é:", promptPt: "'Scientist' é:", targetLabel: "Cientista", objects: [
        { id: "a", label: "Professor", img: "" },
        { id: "b", label: "Cientista", img: "", isTarget: true },
        { id: "c", label: "Médico", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares dos sonhos!",
    pairs: [
      { id: "a", en: "Dream 💭", pt: "Sonho", img: IMG.RAINBOW },
      { id: "b", en: "Doctor 👩‍⚕️", pt: "Médico", img: IMG.HOSPITAL },
      { id: "c", en: "Artist 🎨", pt: "Artista", img: IMG.LILY },
      { id: "d", en: "Scientist 🔬", pt: "Cientista", img: IMG.EMILY },
    ],
  },
  BOOK: {
    title: "My Dream Book",
    intro: "Seu livro pessoal dos sonhos!",
    pages: [
      { en: "Page 1 — This is me.", pt: "Pág. 1 — Este sou eu.", img: IMG.LILY, badge: "👤" },
      { en: "Page 2 — I am creative and kind.", pt: "Pág. 2 — Sou criativo e gentil.", img: IMG.LILY, badge: "💖" },
      { en: "Page 3 — I want to be a scientist.", pt: "Pág. 3 — Quero ser cientista.", img: IMG.EMILY, badge: "🔬" },
      { en: "Page 4 — I'm good at math and drawing.", pt: "Pág. 4 — Sou bom em mat. e desenho.", img: IMG.CLASSROOM, badge: "🎨" },
      { en: "Page 5 — I dream of helping the planet.", pt: "Pág. 5 — Sonho em ajudar o planeta.", img: IMG.RAINBOW, badge: "🌍" },
      { en: "The End — My dream is possible!", pt: "Fim — Meu sonho é possível!", img: IMG.FRIENDS, badge: "⭐" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "É o quarto dos sonhos. Toque nos itens!",
    img: IMG.CLASSROOM,
    items: [
      { en: "Book", pt: "Livro", emoji: "📖" },
      { en: "Telescope", pt: "Telescópio", emoji: "🔭" },
      { en: "Paint", pt: "Tinta", emoji: "🎨" },
      { en: "Trophy", pt: "Troféu", emoji: "🏆" },
      { en: "Globe", pt: "Globo", emoji: "🌍" },
      { en: "Star", pt: "Estrela", emoji: "⭐" },
    ],
  },
  CULTURE: {
    title: "Dreams Around the World 🌍",
    emoji: "🌟",
    paragraphs: [
      { en: "Malala Yousafzai dreamed of school for every girl. She won the Nobel Prize!", pt: "Malala sonhou com escola pra toda menina. Ganhou o Nobel!" },
      { en: "Ayrton Senna dreamed of being a Formula 1 champion. He became a legend.", pt: "Ayrton Senna sonhou em ser campeão de F1. Virou lenda." },
      { pt: "Seu sonho também pode mudar o mundo!" },
    ],
  },
};

export default lesson;
