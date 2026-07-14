// Unit 4 — Hello, My Friend! (Expanded)
// Aprofunda cumprimentos com o cenário "English Airport", Ben chegando de avião,
// e o projeto "My English Passport" com carimbo por unidade concluída.
// Assets reaproveitados da Unit 2 (airport, ben, greetings, passport).

import airportAsset from "@/assets/ingles-1ano/u1-a02/airport.png.asset.json";
import benAsset from "@/assets/ingles-1ano/u1-a02/ben.png.asset.json";
import goodMorningAsset from "@/assets/ingles-1ano/u1-a02/good-morning-scene.png.asset.json";
import goodAfternoonAsset from "@/assets/ingles-1ano/u1-a02/good-afternoon.png.asset.json";
import goodEveningAsset from "@/assets/ingles-1ano/u1-a02/good-evening.png.asset.json";
import goodbyeAsset from "@/assets/ingles-1ano/u1-a02/goodbye.png.asset.json";
import niceToMeetAsset from "@/assets/ingles-1ano/u1-a02/nice-to-meet-you.png.asset.json";
import passportAsset from "@/assets/ingles-1ano/u1-a02/passport.png.asset.json";
import lilyImg from "@/assets/ingles-1ano/u1-a01/lily.png";
import type { LessonData } from "../types";

const AIRPORT = airportAsset.url;
const BEN = benAsset.url;
const MORNING = goodMorningAsset.url;
const AFTERNOON = goodAfternoonAsset.url;
const EVENING = goodEveningAsset.url;
const BYE = goodbyeAsset.url;
const NICE = niceToMeetAsset.url;
const PASSPORT = passportAsset.url;

const lesson: LessonData = {
  slug: "u1-a04-passport",
  meta: {
    unitLabel: "Unit 4 · Lesson 1 — Ben arrives at English Airport ✈️",
    headerKicker: "My First English Adventure",
    coverKicker: "Lesson 4",
    coverTitle: "Ben's First Day!",
    coverSubtitle:
      "Um avião pousou no English Airport. Um novo amigo chamado Ben chegou! Vamos cumprimentá-lo em inglês em vários momentos do dia.",
    storyTitle: "Ben's First Day",
    vocabularyTitle: "Greetings for every moment",
    speakingTargets: [
      "Hello!",
      "Good morning!",
      "Good afternoon!",
      "Good evening!",
      "My name is...",
      "Nice to meet you!",
      "Goodbye!",
    ],
    listeningIntro: "Ouça o diálogo entre Ben e Lily.",
    listeningQuestion: "Qual cumprimento a Lily usou primeiro?",
    listeningOptions: ["Hello!", "Goodbye!", "Good night!"],
    listeningCorrect: "Hello!",
    listeningWrongHint: 'Escute de novo. Lily disse "Hello!" quando conheceu o Ben.',
    readingNarration:
      "Vamos ler juntos. Cada frase é usada em um momento do dia. De manhã, a gente diz Good morning. À tarde, Good afternoon. À noite ao chegar, Good evening. Ao se despedir, Goodbye.",
    grammarNarration:
      'Em inglês, pra dizer nosso nome usamos "My name is..." (Meu nome é...). Quando conhecemos alguém pela primeira vez, dizemos "Nice to meet you." (Prazer em conhecer). A outra pessoa responde "Nice to meet you too." (Prazer em conhecer você também.)',
    finalProjectIntro:
      "Você ganhou o SEU passaporte de inglês! Escreve seu nome, ele fica no passaporte e você pode se apresentar:",
    finalProjectPhrase: (name: string) =>
      `Hello! My name is ${name}. Nice to meet you!`,
    finalProjectSectionTitle: "My English Passport",
  },
  VOCAB: [
    { id: "hello", en: "Hello", pt: "Olá", img: BEN },
    { id: "morning", en: "Good morning", pt: "Bom dia", img: MORNING },
    { id: "afternoon", en: "Good afternoon", pt: "Boa tarde", img: AFTERNOON },
    { id: "evening", en: "Good evening", pt: "Boa noite (ao chegar)", img: EVENING },
    { id: "nice", en: "Nice to meet you", pt: "Prazer em conhecer", img: NICE },
    { id: "goodbye", en: "Goodbye", pt: "Tchau", img: BYE },
  ],
  STORY: [
    { img: AIRPORT, en: "This is the English Airport.", pt: "Este é o Aeroporto do Inglês." },
    { img: AIRPORT, en: "A big plane is landing.", pt: "Um grande avião está pousando." },
    { img: BEN, en: "Ben gets off the plane.", pt: "Ben desce do avião." },
    { img: BEN, en: 'Ben says: "Hello!"', pt: 'Ben diz: "Olá!"' },
    { img: lilyImg, en: 'Lily says: "Hello, Ben!"', pt: 'Lily diz: "Olá, Ben!"' },
    { img: NICE, en: 'Ben: "Nice to meet you!"', pt: '"Prazer em te conhecer!"' },
    { img: NICE, en: 'Lily: "Nice to meet you too!"', pt: '"Prazer em te conhecer também!"' },
    { img: BYE, en: "At the end of the day: Goodbye!", pt: "No fim do dia: Tchau!" },
  ],
  DIALOG: [
    { who: "Ben", img: BEN, en: "Hello! My name is Ben.", pt: "Olá! Meu nome é Ben." },
    { who: "Lily", img: lilyImg, en: "Hello, Ben! My name is Lily.", pt: "Olá, Ben! Meu nome é Lily." },
    { who: "Ben", img: BEN, en: "Nice to meet you!", pt: "Prazer em te conhecer!" },
    { who: "Lily", img: lilyImg, en: "Nice to meet you too!", pt: "Prazer em te conhecer também!" },
    { who: "Ben", img: BYE, en: "Goodbye, Lily. See you tomorrow!", pt: "Tchau, Lily. Até amanhã!" },
    { who: "Lily", img: lilyImg, en: "Goodbye, Ben!", pt: "Tchau, Ben!" },
  ],
  READING: {
    title: "Greetings in a Day",
    img: AIRPORT,
    parts: [
      { en: "Good morning! ☀️", pt: "Bom dia!", highlight: ["Good morning"] },
      { en: "Good afternoon! 🌤️", pt: "Boa tarde!", highlight: ["Good afternoon"] },
      { en: "Good evening! 🌙", pt: "Boa noite (ao chegar)!", highlight: ["Good evening"] },
      { en: "Hello! My name is Ben.", pt: "Olá! Meu nome é Ben.", highlight: ["Hello", "name"] },
      { en: "Nice to meet you!", pt: "Prazer em te conhecer!", highlight: ["Nice to meet you"] },
      { en: "Goodbye! 👋", pt: "Tchau!", highlight: ["Goodbye"] },
    ],
  },
  WRITING: [
    {
      prompt: "___! My name is Ben.",
      answer: "Hello",
      hint: "Cumprimento usado ao encontrar alguém 👋.",
      options: ["Hello", "Goodbye", "Sun"],
    },
    {
      prompt: "My ___ is Lily.",
      answer: "name",
      hint: "É o que a gente usa pra dizer quem somos.",
      options: ["name", "school", "book"],
    },
    {
      prompt: "___ morning! ☀️",
      answer: "Good",
      hint: "Junta com morning pra formar bom dia.",
      options: ["Good", "Bad", "Nice"],
    },
    {
      prompt: "Nice to ___ you!",
      answer: "meet",
      hint: "Verbo de conhecer alguém.",
      options: ["meet", "eat", "sleep"],
    },
    {
      prompt: "___! See you tomorrow!",
      answer: "Goodbye",
      hint: "Cumprimento usado ao ir embora 👋.",
      options: ["Goodbye", "Hello", "Good morning"],
    },
  ],
  QUIZ: [
    {
      q: "O que significa Hello?",
      img: BEN,
      options: [
        { text: "Tchau" },
        { text: "Olá", correct: true },
        { text: "Obrigado" },
      ],
    },
    {
      q: "Como se diz Tchau em inglês?",
      img: BYE,
      options: [
        { text: "Hello" },
        { text: "Goodbye", correct: true },
        { text: "Morning" },
      ],
    },
    {
      q: "Complete: My ___ is Ben.",
      options: [
        { text: "school" },
        { text: "name", correct: true },
        { text: "book" },
      ],
    },
    {
      q: "Quando usamos Good Morning?",
      img: MORNING,
      options: [
        { text: "Pela manhã ☀️", correct: true },
        { text: "À noite 🌙" },
        { text: "Ao dormir" },
      ],
    },
    {
      q: 'A resposta certa pra "Nice to meet you!" é:',
      img: NICE,
      options: [
        { text: "Goodbye!" },
        { text: "Nice to meet you too!", correct: true },
        { text: "Hello!" },
      ],
    },
  ],
  REAL_LIFE: [
    { situation: "🏫 Chegou na escola de manhã. O que você diz pro professor?", answer: "Good morning, teacher!" },
    { situation: "👵 Foi visitar a vovó à tarde. Cumprimente ela.", answer: "Good afternoon, Grandma!" },
    { situation: "🎂 Chegou numa festa de noite. Cumprimente todo mundo.", answer: "Good evening, everyone!" },
    { situation: "🤝 Conheceu um amigo novo. O que fala?", answer: "Hello! Nice to meet you!" },
    { situation: "🚪 Fim da aula, hora de ir embora. Se despede.", answer: "Goodbye! See you tomorrow!" },
  ],
  GRAMMAR: {
    focus: "My name is [name]. / Nice to meet you.",
    why: 'Pra se apresentar em inglês, dizemos "My name is" + seu nome. Quando o outro se apresenta, respondemos "Nice to meet you!" (Prazer em te conhecer). Se o outro disser isso primeiro, respondemos "Nice to meet you TOO!" (também).',
    examples: [
      { en: "My name is Lily.", pt: "Meu nome é Lily." },
      { en: "My name is Ben.", pt: "Meu nome é Ben." },
      { en: "Nice to meet you!", pt: "Prazer em te conhecer!" },
      { en: "Nice to meet you too!", pt: "Prazer em te conhecer também!" },
    ],
    errors: [
      {
        wrong: "I name Lily.",
        right: "My name is Lily.",
        why: 'Precisa do "My" + "is". Não é "I name".',
      },
      {
        wrong: "Nice meet you.",
        right: "Nice to meet you.",
        why: 'Não esqueça do "to" no meio.',
      },
    ],
  },

  // 🎵 Música
  SONG: {
    title: "The Greeting Song",
    hookPt: "A música dos cumprimentos do dia. Cante junto!",
    verses: [
      { en: "Hello, hello, how are you?", pt: "Olá, olá, como vai?", emoji: "👋" },
      { en: "Hello, hello, nice to meet you!", pt: "Olá, olá, prazer em te conhecer!", emoji: "🤝" },
      { en: "Good morning, good morning!", pt: "Bom dia, bom dia!", emoji: "☀️" },
      { en: "Let's all smile today!", pt: "Vamos todos sorrir hoje!", emoji: "😊" },
      { en: "Good afternoon, good afternoon!", pt: "Boa tarde, boa tarde!", emoji: "🌤️" },
      { en: "Time to play and learn today!", pt: "Hora de brincar e aprender!", emoji: "🎈" },
      { en: "Goodbye, goodbye, see you soon!", pt: "Tchau, tchau, até logo!", emoji: "👋" },
      { en: "Have a happy, happy day!", pt: "Tenha um dia feliz, feliz!", emoji: "💖" },
    ],
  },

  // 🎮 Match the Greeting (Hunter format)
  HUNTER: {
    intro: "A voz diz uma situação. Toque no cumprimento certo!",
    rounds: [
      {
        promptEn: "It's morning. What do you say?",
        promptPt: "É de manhã. O que você diz?",
        targetLabel: "Good morning",
        objects: [
          { id: "morning", label: "Good morning", img: MORNING, isTarget: true },
          { id: "evening", label: "Good evening", img: EVENING },
          { id: "bye", label: "Goodbye", img: BYE },
        ],
      },
      {
        promptEn: "You meet a new friend. What do you say?",
        promptPt: "Você conhece um amigo novo. O que diz?",
        targetLabel: "Nice to meet you",
        objects: [
          { id: "bye", label: "Goodbye", img: BYE },
          { id: "nice", label: "Nice to meet you", img: NICE, isTarget: true },
          { id: "afternoon", label: "Good afternoon", img: AFTERNOON },
        ],
      },
      {
        promptEn: "It's time to go home. What do you say?",
        promptPt: "Hora de ir pra casa. O que você diz?",
        targetLabel: "Goodbye",
        objects: [
          { id: "morning", label: "Good morning", img: MORNING },
          { id: "hello", label: "Hello", img: BEN },
          { id: "bye", label: "Goodbye", img: BYE, isTarget: true },
        ],
      },
      {
        promptEn: "It's afternoon at school. What do you say?",
        promptPt: "É de tarde na escola. O que você diz?",
        targetLabel: "Good afternoon",
        objects: [
          { id: "afternoon", label: "Good afternoon", img: AFTERNOON, isTarget: true },
          { id: "evening", label: "Good evening", img: EVENING },
          { id: "morning", label: "Good morning", img: MORNING },
        ],
      },
      {
        promptEn: "You arrive at a party at night. What do you say?",
        promptPt: "Você chega numa festa à noite. O que diz?",
        targetLabel: "Good evening",
        objects: [
          { id: "morning", label: "Good morning", img: MORNING },
          { id: "evening", label: "Good evening", img: EVENING, isTarget: true },
          { id: "bye", label: "Goodbye", img: BYE },
        ],
      },
    ],
  },

  // 🧠 Memory — pares cumprimento ↔ cena
  MEMORY: {
    intro: "Vire as cartas. Encontre o cumprimento e a cena do mesmo momento do dia.",
    pairs: [
      { id: "morning", en: "Good morning", pt: "Bom dia", img: MORNING },
      { id: "afternoon", en: "Good afternoon", pt: "Boa tarde", img: AFTERNOON },
      { id: "evening", en: "Good evening", pt: "Boa noite", img: EVENING },
      { id: "bye", en: "Goodbye", pt: "Tchau", img: BYE },
    ],
  },

  // 🏠 Missão — Ben conhece 6 personagens
  VIRTUAL_ROOM: {
    intro: "Ben quer cumprimentar todo mundo no aeroporto! Toque em cada personagem.",
    img: AIRPORT,
    items: [
      { en: "Hello, teacher!", pt: "Olá, professor!", emoji: "👩\u200d🏫" },
      { en: "Good morning, pilot!", pt: "Bom dia, piloto!", emoji: "🧑\u200d✈️" },
      { en: "Nice to meet you, friend!", pt: "Prazer, amigo!", emoji: "🧒" },
      { en: "Good afternoon, grandma!", pt: "Boa tarde, vovó!", emoji: "👵" },
      { en: "Hello, doctor!", pt: "Olá, doutor!", emoji: "👨\u200d⚕️" },
      { en: "Goodbye, Ben!", pt: "Tchau, Ben!", emoji: "👋" },
    ],
  },

  // 📖 My English Passport
  BOOK: {
    title: "My English Passport",
    intro: "Este é o SEU passaporte. Cada página guarda um cumprimento aprendido!",
    pages: [
      { en: "Hello! 👋", pt: "Olá!", img: PASSPORT, badge: "Stamp 1" },
      { en: "Good morning! ☀️", pt: "Bom dia!", img: MORNING, badge: "Stamp 2" },
      { en: "Good afternoon! 🌤️", pt: "Boa tarde!", img: AFTERNOON, badge: "Stamp 3" },
      { en: "Good evening! 🌙", pt: "Boa noite!", img: EVENING, badge: "Stamp 4" },
      { en: "Nice to meet you! 🤝", pt: "Prazer em te conhecer!", img: NICE, badge: "Stamp 5" },
      { en: "My name is ______.", pt: "Meu nome é ______.", img: BEN, badge: "Stamp 6" },
      { en: "Goodbye! 👋", pt: "Tchau!", img: BYE, badge: "Stamp 7" },
    ],
  },
};

export default lesson;
