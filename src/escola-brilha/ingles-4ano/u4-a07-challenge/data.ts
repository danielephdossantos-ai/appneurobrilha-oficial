// Inglês 4º Ano — Unit 7 "English Challenge 🏆" — Grande final
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u4-a07-challenge",
  meta: {
    unitLabel: "Unit 7 · Lesson 7 — English Challenge 🏆",
    headerKicker: "My English Adventure — 4th Grade",
    coverKicker: "Grande projeto final",
    coverTitle: "English Challenge 🏆",
    coverSubtitle:
      "É o desafio final! Você usa TUDO: TO BE, HAVE/HAS, Simple Present, adverbs, There is/are, prepositions e Past.",
    storyTitle: "The Great English Challenge",
    vocabularyTitle: "Challenge Words",
    speakingTargets: [
      "I am a champion!",
      "I have great friends.",
      "I always try my best.",
      "There are new adventures.",
      "My city is amazing.",
      "I went, I saw, I learned!",
    ],
    listeningIntro: "Ouça o desafio final.",
    listeningQuestion: '"I am ready for the challenge!" O que ele está?',
    listeningOptions: ["Cansado", "Pronto", "Triste"],
    listeningCorrect: "Pronto",
    listeningWrongHint: '"Ready" = pronto.',
    readingNarration:
      'Grande revisão! Cada frase mistura tudo do 4º ano: TO BE, HAVE/HAS, Simple Present + adverbs, There is/are, prepositions e passado básico.',
    grammarNarration:
      'REVISÃO GERAL: I AM / SHE IS / WE ARE (TO BE). I HAVE / HE HAS (posse). Simple Present + always/usually/never. There is/are. Next to / in front of. WAS/WERE/WENT/HAD (passado básico).',
    finalProjectIntro: "Seu portfólio final! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY ENGLISH PORTFOLIO — ${name}. I am a 4th grade English champion! I have amazing friends. I always study hard. There are many things I love: my school, my city, and my family. Last month I went on an adventure. It was amazing! I am ready for the 5th grade!`,
    finalProjectSectionTitle: "My English Portfolio",
  },
  VOCAB: [
    { id: "ch", en: "Champion 🏆", pt: "Campeão", img: IMG.BEN },
    { id: "pr", en: "Proud 😊", pt: "Orgulhoso", img: IMG.LILY },
    { id: "re", en: "Ready 💪", pt: "Pronto", img: IMG.BEN },
    { id: "po", en: "Portfolio 📁", pt: "Portfólio", img: IMG.CLASSROOM },
    { id: "ad", en: "Adventure ⭐", pt: "Aventura", img: IMG.RAINBOW },
    { id: "le", en: "Learn 📚", pt: "Aprender", img: IMG.CLASSROOM },
    { id: "wi", en: "Win 🥇", pt: "Vencer", img: IMG.FRIENDS },
    { id: "dr", en: "Dream 💭", pt: "Sonho", img: IMG.LILY },
  ],
  STORY: [
    { img: IMG.LILY, en: "It's the last day of 4th grade English!", pt: "Último dia de inglês do 4º ano!" },
    { img: IMG.EMILY, en: "Teacher Emily says: 'Time for the Great Challenge!'", pt: "Prof. Emily: 'Hora do Grande Desafio!'" },
    { img: IMG.FRIENDS, en: "All the students are excited and ready.", pt: "Alunos animados e prontos." },
    { img: IMG.CLASSROOM, en: "They introduce themselves, describe friends, and share routines.", pt: "Se apresentam, descrevem amigos e rotinas." },
    { img: IMG.RAINBOW, en: "They talk about nature, cities, and healthy habits.", pt: "Falam de natureza, cidades e hábitos saudáveis." },
    { img: IMG.AIRPORT, en: "They share vacation stories: 'I went to the beach!'", pt: "Contam férias: 'Fui pra praia!'" },
    { img: IMG.PASSPORT, en: "Each student creates an English Portfolio.", pt: "Cada aluno cria um Portfólio de Inglês." },
    { img: IMG.LILY, en: "'We are 4th grade English CHAMPIONS!' they cheer!", pt: "'Somos CAMPEÕES do 4º ano!'", },
  ],
  DIALOG: [
    { who: "Emily", img: IMG.EMILY, en: "Are you ready for the challenge?", pt: "Prontos pro desafio?" },
    { who: "Lily", img: IMG.LILY, en: "Yes, we are! We studied a lot.", pt: "Sim! Estudamos muito." },
    { who: "Emily", img: IMG.EMILY, en: "Tell me about your best friend.", pt: "Fale do seu melhor amigo." },
    { who: "Lily", img: IMG.LILY, en: "My best friend is Ben. He is kind and funny.", pt: "Ben. Gentil e engraçado." },
    { who: "Emily", img: IMG.EMILY, en: "What did you do on vacation?", pt: "O que fez nas férias?" },
    { who: "Ben", img: IMG.BEN, en: "I went to the mountains with my family.", pt: "Fui pra montanha com a família." },
    { who: "Emily", img: IMG.EMILY, en: "Amazing! You are all champions!", pt: "Incrível! Todos são campeões!" },
  ],
  READING: {
    title: "My Portfolio",
    img: IMG.CLASSROOM,
    parts: [
      { en: "My name is Lily. I am nine years old.", pt: "Sou Lily. Nove anos.", highlight: ["am"] },
      { en: "I have a big family.", pt: "Tenho família grande.", highlight: ["have"] },
      { en: "I always study English.", pt: "Sempre estudo inglês.", highlight: ["always"] },
      { en: "There are amazing places in my city.", pt: "Há lugares incríveis na minha cidade.", highlight: ["There are"] },
      { en: "Last summer I went to the beach.", pt: "Verão passado fui pra praia.", highlight: ["went"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ ready. (TO BE)", answer: "am", hint: "I sempre AM.", options: ["am", "is", "are"] },
    { prompt: "She ______ two brothers.", answer: "has", hint: "3ª pessoa usa HAS.", options: ["has", "have", "is"] },
    { prompt: "I ______ study English.", answer: "always", hint: "100% do tempo.", options: ["always", "never", "no"] },
    { prompt: "There ______ many friends.", answer: "are", hint: "Plural = ARE.", options: ["are", "is", "am"] },
    { prompt: "Last year I ______ to the beach.", answer: "went", hint: "Passado de GO.", options: ["went", "go", "going"] },
  ],
  QUIZ: [
    { q: "Complete: I ___ nine years old.", options: [{ text: "am", correct: true }, { text: "is" }, { text: "are" }] },
    { q: "Complete: He ___ blue eyes.", options: [{ text: "have" }, { text: "has", correct: true }, { text: "is" }] },
    { q: "Complete: We ___ study English every day.", options: [{ text: "always", correct: true }, { text: "never" }, { text: "no" }] },
    { q: "Complete: There ___ many trees.", options: [{ text: "is" }, { text: "are", correct: true }, { text: "am" }] },
    { q: "'Next to' significa:", options: [{ text: "Atrás" }, { text: "Ao lado", correct: true }, { text: "Debaixo" }] },
    { q: "'I went' significa:", options: [{ text: "Vou" }, { text: "Fui", correct: true }, { text: "Ia" }] },
    { q: "'Champion' é:", options: [{ text: "Aluno" }, { text: "Campeão", correct: true }, { text: "Amigo" }] },
  ],
  REAL_LIFE: [
    { situation: "🏆 Se apresentando com orgulho.", answer: "I am a 4th grade champion!" },
    { situation: "💪 Contando o que sabe fazer.", answer: "I can speak English." },
    { situation: "📚 Falando dos amigos.", answer: "I have great friends." },
    { situation: "🗺️ Descrevendo sua cidade.", answer: "There are amazing places in my city." },
    { situation: "✈️ Contando uma viagem.", answer: "Last year I went to the beach." },
  ],
  GRAMMAR: {
    focus: "REVIEW — Todo o 4º ano em um só lugar",
    why:
      'Grande revisão! Cada regra do ano se combina numa história completa. TO BE (identidade), HAVE (posse), Simple Present (rotina), Adverbs (frequência), There is/are (existência), Prepositions (localização), Past (o que aconteceu).',
    examples: [
      { en: "I am ready.", pt: "Estou pronto." },
      { en: "She has a book.", pt: "Ela tem um livro." },
      { en: "I always try my best.", pt: "Sempre dou o meu melhor." },
      { en: "There are 20 students.", pt: "Há 20 alunos." },
      { en: "The library is next to the school.", pt: "Biblioteca ao lado da escola." },
      { en: "Last week I went camping.", pt: "Semana passada fui acampar." },
    ],
    errors: [
      { wrong: "She have a bike.", right: "She HAS a bike.", why: "3ª pessoa HAS." },
      { wrong: "I always am tired.", right: "I am ALWAYS tired.", why: "Advérbio depois do TO BE." },
      { wrong: "I goed home.", right: "I WENT home.", why: "GO é irregular → WENT." },
    ],
  },
  SONG: {
    title: "English Champion",
    hookPt: "Cante o hino da vitória!",
    verses: [
      { en: "I am a champion, strong and bright,", pt: "Sou campeão, forte e brilhante,", emoji: "🏆" },
      { en: "I speak English with all my might,", pt: "Falo inglês com toda força,", emoji: "💪" },
      { en: "I have friends and I have dreams,", pt: "Tenho amigos e sonhos,", emoji: "💭" },
      { en: "Life's amazing — or so it seems!", pt: "Vida incrível!", emoji: "⭐" },
      { en: "I went, I saw, I learned so much,", pt: "Fui, vi, aprendi tanto,", emoji: "📚" },
      { en: "English opens the world with just one touch!", pt: "Inglês abre o mundo!", emoji: "🌍" },
      { en: "Fifth grade — here I come at last,", pt: "5º ano — lá vou eu,", emoji: "🚀" },
      { en: "My 4th grade year was a total blast!", pt: "Meu 4º ano foi demais!", emoji: "🎉" },
    ],
  },
  HUNTER: {
    intro: "Grande revisão!",
    rounds: [
      { promptEn: "Complete: I ___ ready.", promptPt: "Complete: I ___ ready.", targetLabel: "am", objects: [
        { id: "a", label: "am", img: "", isTarget: true },
        { id: "b", label: "is", img: "" },
        { id: "c", label: "are", img: "" },
      ]},
      { promptEn: "Complete: She ___ a sister.", promptPt: "Complete: She ___ a sister.", targetLabel: "has", objects: [
        { id: "a", label: "have", img: "" },
        { id: "b", label: "has", img: "", isTarget: true },
        { id: "c", label: "is", img: "" },
      ]},
      { promptEn: "Complete: There ___ many books.", promptPt: "Complete: There ___ many books.", targetLabel: "are", objects: [
        { id: "a", label: "is", img: "" },
        { id: "b", label: "are", img: "", isTarget: true },
        { id: "c", label: "am", img: "" },
      ]},
      { promptEn: "Complete: I ___ to the beach yesterday.", promptPt: "Complete: I ___ to the beach yesterday.", targetLabel: "went", objects: [
        { id: "a", label: "went", img: "", isTarget: true },
        { id: "b", label: "go", img: "" },
        { id: "c", label: "going", img: "" },
      ]},
      { promptEn: "Complete: Turn ___ at the corner.", promptPt: "Complete: Turn ___ at the corner.", targetLabel: "right", objects: [
        { id: "a", label: "right", img: "", isTarget: true },
        { id: "b", label: "read", img: "" },
        { id: "c", label: "run", img: "" },
      ]},
      { promptEn: "'Champion' é:", promptPt: "'Champion' é:", targetLabel: "Campeão", objects: [
        { id: "a", label: "Aluno", img: "" },
        { id: "b", label: "Campeão", img: "", isTarget: true },
        { id: "c", label: "Amigo", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Grande revisão em pares!",
    pairs: [
      { id: "a", en: "Champion 🏆", pt: "Campeão", img: IMG.BEN },
      { id: "b", en: "Ready 💪", pt: "Pronto", img: IMG.LILY },
      { id: "c", en: "Adventure ⭐", pt: "Aventura", img: IMG.RAINBOW },
      { id: "d", en: "Learn 📚", pt: "Aprender", img: IMG.CLASSROOM },
    ],
  },
  BOOK: {
    title: "My English Portfolio",
    intro: "Seu portfólio final do 4º ano!",
    pages: [
      { en: "Page 1 — About Me.", pt: "Pág. 1 — Sobre Mim.", img: IMG.LILY, badge: "👤" },
      { en: "Page 2 — My Best Friend.", pt: "Pág. 2 — Melhor Amigo.", img: IMG.FRIENDS, badge: "👫" },
      { en: "Page 3 — My Healthy Routine.", pt: "Pág. 3 — Rotina Saudável.", img: IMG.MORNING, badge: "🍎" },
      { en: "Page 4 — My City Guide.", pt: "Pág. 4 — Guia da Cidade.", img: IMG.SCHOOL, badge: "🏙️" },
      { en: "Page 5 — My Vacation.", pt: "Pág. 5 — Minhas Férias.", img: IMG.AIRPORT, badge: "✈️" },
      { en: "Page 6 — My School Newspaper.", pt: "Pág. 6 — Jornal da Escola.", img: IMG.CLASSROOM, badge: "📰" },
      { en: "The End — 4th Grade Champion!", pt: "Fim — Campeão do 4º Ano!", img: IMG.RAINBOW, badge: "🏆" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "Sala do campeão! Toque nas conquistas.",
    img: IMG.CLASSROOM,
    items: [
      { en: "Portfolio", pt: "Portfólio", emoji: "📁" },
      { en: "Trophy", pt: "Troféu", emoji: "🏆" },
      { en: "Medal", pt: "Medalha", emoji: "🏅" },
      { en: "Diploma", pt: "Diploma", emoji: "🎓" },
      { en: "Books", pt: "Livros", emoji: "📚" },
      { en: "Star", pt: "Estrela", emoji: "⭐" },
    ],
  },
  CULTURE: {
    title: "You Are Ready for 5th Grade! 🌟",
    emoji: "🎓",
    paragraphs: [
      { en: "You finished 4th grade English! You can introduce yourself, describe people, give directions, and even talk about the past.", pt: "Você terminou o 4º ano! Sabe se apresentar, descrever pessoas, dar direções e falar do passado." },
      { en: "In 5th grade, you'll learn to tell longer stories and use past tense with confidence.", pt: "No 5º ano vai aprender a contar histórias mais longas e usar o passado com confiança." },
      { pt: "Parabéns, campeão(ã)! Nos vemos no 5º ano! 🚀" },
    ],
  },
};

export default lesson;
