// Dados da aula: Ingles 1º Ano — Unit 1, Aula 01 "Hello!"
// Método SPEB: Ver → Ouvir → Repetir → Ler → Escrever → Conversar → Jogar → Revisar → Usar.

import helloImg from "@/assets/ingles-1ano/u1-a01/hello-wave.png";
import lilyImg from "@/assets/ingles-1ano/u1-a01/lily.png";
import teacherImg from "@/assets/ingles-1ano/u1-a01/teacher.png";
import friendsImg from "@/assets/ingles-1ano/u1-a01/friends.png";
import morningImg from "@/assets/ingles-1ano/u1-a01/good-morning.png";
import schoolImg from "@/assets/ingles-1ano/u1-a01/school.png";
import type { LessonData } from "../types";

const lesson: LessonData = {
  slug: "u1-a01-hello",
  meta: {
    unitLabel: "Unit 1 · Lesson 1 — Hello!",
    headerKicker: "My First English Adventure",
    coverKicker: "Lesson 1",
    coverTitle: "Hello, friend!",
    coverSubtitle: "Hoje você vai aprender a cumprimentar e dizer seu nome em inglês.",
    storyTitle: "Meet Lily!",
    vocabularyTitle: "New words",
    speakingTargets: ["Hello", "Good morning", "My name is Lily"],
    listeningIntro: "Ouça o diálogo entre a professora e a Lily.",
    listeningQuestion: "Pergunta de compreensão: qual é o nome da menina?",
    listeningOptions: ["Ana", "Lily", "Mia"],
    listeningCorrect: "Lily",
    listeningWrongHint: 'Ouve outra vez: ela diz "My name is Lily".',
    readingNarration:
      'Vamos ler juntos. A Lily é uma menina. Ela vai para a escola. Ela diz "Hello". A professora responde "Good morning".',
    grammarNarration:
      'Por que dizemos "My name is"? Em inglês, MY quer dizer MEU. NAME é NOME. IS é a palavrinha que junta as duas ideias. Sempre juntas: MY NAME IS mais o seu nome.',
    finalProjectIntro: "Se apresenta em inglês! Escreve seu nome e depois diz alto:",
    finalProjectPhrase: (name: string) => `Hello! My name is ${name}. Nice to meet you!`,
    finalProjectSectionTitle: "Introduce yourself!",
  },
  VOCAB: [
    { id: "hello", en: "Hello", pt: "Olá", img: helloImg },
    { id: "hi", en: "Hi", pt: "Oi", img: helloImg },
    { id: "name", en: "Name", pt: "Nome", img: lilyImg },
    { id: "teacher", en: "Teacher", pt: "Professora", img: teacherImg },
    { id: "friend", en: "Friend", pt: "Amigo(a)", img: friendsImg },
    { id: "morning", en: "Good morning", pt: "Bom dia", img: morningImg },
  ],
  STORY: [
    { img: schoolImg, en: "This is a school.", pt: "Isto é uma escola." },
    { img: lilyImg, en: "Her name is Lily.", pt: "O nome dela é Lily." },
    { img: helloImg, en: "Lily says: Hello!", pt: "Lily diz: Olá!" },
    { img: teacherImg, en: "The teacher smiles.", pt: "A professora sorri." },
    { img: friendsImg, en: "Lily has a new friend.", pt: "Lily tem uma amiga nova." },
  ],
  DIALOG: [
    { who: "Teacher", img: teacherImg, en: "Good morning! What is your name?", pt: "Bom dia! Qual é o seu nome?" },
    { who: "Lily", img: lilyImg, en: "Hello! My name is Lily.", pt: "Olá! Meu nome é Lily." },
    { who: "Teacher", img: teacherImg, en: "Nice to meet you, Lily!", pt: "Prazer em te conhecer, Lily!" },
    { who: "Lily", img: lilyImg, en: "Nice to meet you too!", pt: "Prazer em te conhecer também!" },
  ],
  READING: {
    title: "Lily's First Day",
    img: schoolImg,
    parts: [
      { en: "Lily is a girl.", pt: "Lily é uma menina.", highlight: ["girl"] },
      { en: "She goes to school.", pt: "Ela vai para a escola.", highlight: ["school"] },
      { en: "She says: Hello!", pt: "Ela diz: Olá!", highlight: ["Hello"] },
      { en: "The teacher says: Good morning!", pt: "A professora diz: Bom dia!", highlight: ["Good morning"] },
    ],
  },
  WRITING: [
    { prompt: "___! My name is Lily.", answer: "Hello", hint: "É como a gente cumprimenta alguém.", options: ["Hello", "Bye", "Cat"] },
    { prompt: "Good ___!", answer: "morning", hint: "Falamos isso de manhã.", options: ["morning", "night", "apple"] },
    { prompt: "My ___ is Lily.", answer: "name", hint: "É como você se chama.", options: ["name", "friend", "dog"] },
  ],
  QUIZ: [
    {
      q: "Como se diz OLÁ em inglês?",
      qEn: "How do you say OLÁ in English?",
      img: helloImg,
      options: [{ text: "Hello", correct: true }, { text: "Cat" }, { text: "Book" }],
    },
    {
      q: "O que significa 'Good morning'?",
      options: [{ text: "Boa noite" }, { text: "Bom dia", correct: true }, { text: "Tchau" }],
    },
    {
      q: "Complete: 'My ___ is Lily.'",
      img: lilyImg,
      options: [{ text: "name", correct: true }, { text: "school" }, { text: "sun" }],
    },
    {
      q: "Quem diz 'Good morning'?",
      options: [
        { text: "A professora quando você chega de manhã", correct: true },
        { text: "Ninguém" },
        { text: "Só à noite" },
      ],
    },
  ],
  REAL_LIFE: [
    { situation: "Você chega na escola de manhã. O que você diz?", answer: "Good morning!" },
    { situation: "Um amigo novo pergunta seu nome. O que você responde?", answer: "My name is ___." },
    { situation: "Você encontra um amigo no parque. Como cumprimenta?", answer: "Hi!" },
  ],
  GRAMMAR: {
    focus: "My name is…",
    why: "Em inglês, quando falamos NOSSO nome usamos 'MY NAME IS' + nome. É como dizer 'MEU NOME É' em português.",
    examples: [
      { en: "My name is Lily.", pt: "Meu nome é Lily." },
      { en: "My name is João.", pt: "Meu nome é João." },
      { en: "My name is Ana.", pt: "Meu nome é Ana." },
    ],
    errors: [
      { wrong: "Me name is Lily.", right: "My name is Lily.", why: "'Me' não vira 'meu'. Usamos 'MY'." },
      { wrong: "My name Lily.", right: "My name IS Lily.", why: "Nunca esquece o 'IS' no meio." },
    ],
  },
};

export default lesson;
