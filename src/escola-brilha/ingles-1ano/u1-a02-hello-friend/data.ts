// Dados da aula: Ingles 1º Ano — Unit 2, Aula 01 "Hello, my friend!"
// Foco: greetings expandidos (Good morning / afternoon / evening / Goodbye)
// + "Nice to meet you" e apresentação com nome. Personagem novo: Ben.

import airportAsset from "@/assets/ingles-1ano/u1-a02/airport.png.asset.json";
import benAsset from "@/assets/ingles-1ano/u1-a02/ben.png.asset.json";
import morningAsset from "@/assets/ingles-1ano/u1-a02/good-morning-scene.png.asset.json";
import afternoonAsset from "@/assets/ingles-1ano/u1-a02/good-afternoon.png.asset.json";
import eveningAsset from "@/assets/ingles-1ano/u1-a02/good-evening.png.asset.json";
import goodbyeAsset from "@/assets/ingles-1ano/u1-a02/goodbye.png.asset.json";
import niceToMeetAsset from "@/assets/ingles-1ano/u1-a02/nice-to-meet-you.png.asset.json";
import passportAsset from "@/assets/ingles-1ano/u1-a02/passport.png.asset.json";
import __asset_lilyImg from "@/assets/ingles-1ano/u1-a01/lily.png.asset.json";
const lilyImg = __asset_lilyImg.url;
import type { LessonData } from "../types";

const airport = airportAsset.url;
const benImg = benAsset.url;
const morningImg = morningAsset.url;
const afternoonImg = afternoonAsset.url;
const eveningImg = eveningAsset.url;
const goodbyeImg = goodbyeAsset.url;
const niceToMeetImg = niceToMeetAsset.url;
const passportImg = passportAsset.url;

const lesson: LessonData = {
  slug: "u1-a02-hello-friend",
  meta: {
    unitLabel: "Unit 2 · Lesson 1 — Hello, my friend!",
    headerKicker: "My First English Adventure",
    coverKicker: "Lesson 2",
    coverTitle: "Hello, my friend!",
    coverSubtitle:
      "Hoje você chega no English Airport, conhece o Ben e aprende como cumprimentar em cada hora do dia.",
    storyTitle: "English Airport",
    vocabularyTitle: "New greetings",
    speakingTargets: [
      "Good morning",
      "Good afternoon",
      "Good evening",
      "Goodbye",
      "Nice to meet you",
    ],
    listeningIntro: "Ouça a conversa entre Lily e Ben no aeroporto.",
    listeningQuestion: "Pergunta: como Ben cumprimenta Lily?",
    listeningOptions: ["Good night", "Nice to meet you", "Goodbye"],
    listeningCorrect: "Nice to meet you",
    listeningWrongHint: 'Ouve de novo: Ben diz "Nice to meet you".',
    readingNarration:
      "Vamos ler juntos. Ben é um menino novo. Ele chega no aeroporto de manhã. Ele diz Good morning. À tarde ele diz Good afternoon. À noite ele diz Good evening. Quando vai embora, diz Goodbye.",
    grammarNarration:
      'Em inglês, cada hora do dia tem um "Good" diferente. De manhã: Good MORNING. À tarde: Good AFTERNOON. À noite: Good EVENING. Quando você vai embora, diz GOODBYE, que é como dizer "tchau".',
    finalProjectIntro:
      "Vamos praticar tudo junto! Escreve seu nome. Você vai cumprimentar o Ben como se fosse de manhã:",
    finalProjectPhrase: (name: string) =>
      `Good morning, Ben! My name is ${name}. Nice to meet you!`,
    finalProjectSectionTitle: "Meet Ben!",
  },
  VOCAB: [
    { id: "morning", en: "Good morning", pt: "Bom dia", img: morningImg },
    { id: "afternoon", en: "Good afternoon", pt: "Boa tarde", img: afternoonImg },
    { id: "evening", en: "Good evening", pt: "Boa noite (chegando)", img: eveningImg },
    { id: "goodbye", en: "Goodbye", pt: "Tchau", img: goodbyeImg },
    { id: "nice", en: "Nice to meet you", pt: "Prazer em te conhecer", img: niceToMeetImg },
    { id: "friend", en: "Friend", pt: "Amigo(a)", img: benImg },
  ],
  STORY: [
    { img: airport, en: "This is the English Airport.", pt: "Este é o Aeroporto do Inglês." },
    { img: benImg, en: "A new boy arrives. His name is Ben.", pt: "Um menino novo chega. O nome dele é Ben." },
    { img: morningImg, en: "It is morning. Ben says: Good morning!", pt: "É de manhã. Ben diz: Bom dia!" },
    { img: lilyImg, en: "Lily smiles and answers: Hello, Ben!", pt: "Lily sorri e responde: Olá, Ben!" },
    { img: niceToMeetImg, en: "They shake hands: Nice to meet you!", pt: "Eles se cumprimentam: Prazer em te conhecer!" },
    { img: goodbyeImg, en: "At the end of the day, they say: Goodbye!", pt: "No fim do dia, eles dizem: Tchau!" },
  ],
  DIALOG: [
    { who: "Ben", img: benImg, en: "Good morning! My name is Ben.", pt: "Bom dia! Meu nome é Ben." },
    { who: "Lily", img: lilyImg, en: "Hello, Ben! My name is Lily.", pt: "Olá, Ben! Meu nome é Lily." },
    { who: "Ben", img: benImg, en: "Nice to meet you, Lily!", pt: "Prazer em te conhecer, Lily!" },
    { who: "Lily", img: lilyImg, en: "Nice to meet you too. Goodbye!", pt: "Prazer em te conhecer também. Tchau!" },
    { who: "Ben", img: benImg, en: "Goodbye, Lily! See you tomorrow.", pt: "Tchau, Lily! Até amanhã." },
  ],
  READING: {
    title: "Ben at the Airport",
    img: airport,
    parts: [
      { en: "Ben is a new friend.", pt: "Ben é um amigo novo.", highlight: ["friend"] },
      { en: "In the morning he says: Good morning!", pt: "De manhã ele diz: Bom dia!", highlight: ["Good morning"] },
      { en: "In the afternoon he says: Good afternoon!", pt: "À tarde ele diz: Boa tarde!", highlight: ["Good afternoon"] },
      { en: "In the evening he says: Good evening!", pt: "De noitinha ele diz: Boa noite (chegando)!", highlight: ["Good evening"] },
      { en: "When he leaves, he says: Goodbye!", pt: "Quando vai embora, diz: Tchau!", highlight: ["Goodbye"] },
    ],
  },
  WRITING: [
    {
      prompt: "___! (às 8 da manhã)",
      answer: "Good morning",
      hint: "É o cumprimento da manhã.",
      options: ["Good morning", "Good evening", "Goodbye"],
    },
    {
      prompt: "___! (às 3 da tarde)",
      answer: "Good afternoon",
      hint: "É o cumprimento da tarde.",
      options: ["Good afternoon", "Good morning", "Goodbye"],
    },
    {
      prompt: "Ben is going home. He says: ___!",
      answer: "Goodbye",
      hint: "É como dizer tchau.",
      options: ["Goodbye", "Hello", "Good morning"],
    },
    {
      prompt: "Você acabou de conhecer alguém. Você diz: ___ to meet you!",
      answer: "Nice",
      hint: "Uma palavrinha carinhosa que quer dizer 'legal / prazer'.",
      options: ["Nice", "Good", "Bad"],
    },
  ],
  QUIZ: [
    {
      q: "Qual cumprimento usamos de MANHÃ?",
      qEn: "Which greeting do we use in the MORNING?",
      img: morningImg,
      options: [{ text: "Good morning", correct: true }, { text: "Goodbye" }, { text: "Good evening" }],
    },
    {
      q: "Qual cumprimento usamos à TARDE?",
      qEn: "Which greeting do we use in the AFTERNOON?",
      img: afternoonImg,
      options: [{ text: "Good afternoon", correct: true }, { text: "Good morning" }, { text: "Goodbye" }],
    },
    {
      q: "O que Ben diz quando vai embora?",
      img: goodbyeImg,
      options: [{ text: "Goodbye", correct: true }, { text: "Hello" }, { text: "Good morning" }],
    },
    {
      q: "Você conhece uma pessoa nova. O que você diz?",
      img: niceToMeetImg,
      options: [
        { text: "Nice to meet you", correct: true },
        { text: "Goodbye" },
        { text: "Good evening" },
      ],
    },
    {
      q: "Complete: 'My ___ is Ben.'",
      img: benImg,
      options: [{ text: "name", correct: true }, { text: "friend" }, { text: "school" }],
    },
  ],
  REAL_LIFE: [
    { situation: "Você chega na escola às 8h. Cumprimenta a professora:", answer: "Good morning!" },
    { situation: "Você encontra um amigo depois do almoço:", answer: "Good afternoon!" },
    { situation: "Você chega numa festa à noitinha:", answer: "Good evening!" },
    { situation: "Você acabou de conhecer o Ben:", answer: "Hi Ben! Nice to meet you." },
    { situation: "A aula acabou e você vai pra casa:", answer: "Goodbye! See you tomorrow." },
  ],
  GRAMMAR: {
    focus: "Good morning / afternoon / evening",
    why: 'Em inglês, "GOOD" quer dizer BOM ou BOA. A gente muda só a palavra do lado: MORNING (manhã), AFTERNOON (tarde), EVENING (noitinha). E "GOODBYE" já é uma palavra só, que quer dizer TCHAU.',
    examples: [
      { en: "Good morning, Ben!", pt: "Bom dia, Ben!" },
      { en: "Good afternoon, Lily!", pt: "Boa tarde, Lily!" },
      { en: "Good evening, teacher!", pt: "Boa noite (chegando), professora!" },
      { en: "Goodbye, friends!", pt: "Tchau, amigos!" },
    ],
    errors: [
      {
        wrong: "Good night! (chegando de manhã)",
        right: "Good morning!",
        why: '"Good night" só usa quando vai DORMIR. De manhã é "Good morning".',
      },
      {
        wrong: "Nice meet you.",
        right: "Nice to meet you.",
        why: 'Não pode esquecer o "TO" no meio.',
      },
    ],
  },
};

export default lesson;
