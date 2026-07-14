// Inglês 6º Ano — Unit 1 "Welcome to English Academy 🎓"
// Salto de nível: apresentações, identidade, família, escola.
// Gramática: Verb TO BE, Subject Pronouns, Possessive Adjectives, Wh- Questions.
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u6-a01-academy",
  meta: {
    unitLabel: "Unit 1 · Lesson 1 — Welcome to English Academy 🎓",
    headerKicker: "SPEB 1.0 · English Academy — 6th Grade",
    coverKicker: "Personal information · Identity · Family",
    coverTitle: "Welcome to English Academy 🎓",
    coverSubtitle:
      "Você é o novo aluno da English Academy. Conheça Ms. Anna e estudantes de vários países. Aprenda a se apresentar de verdade — nome, idade, país, família, escola.",
    storyTitle: "First Day at English Academy",
    vocabularyTitle: "Personal Information & Countries",
    speakingTargets: [
      "Hello, my name is Lucas.",
      "I am from Brazil. I am Brazilian.",
      "I am twelve years old.",
      "I speak Portuguese and English.",
      "My father is a doctor. My mother is a teacher.",
      "Where are you from? How old are you?",
    ],
    listeningIntro: "Ouça Ms. Anna dando as boas-vindas à nova turma.",
    listeningQuestion:
      'Ms. Anna disse: "Kenji is from Japan and he speaks Japanese and English." O que é verdade sobre Kenji?',
    listeningOptions: [
      "Ele é do Brasil e fala português",
      "Ele é do Japão e fala japonês e inglês",
      "Ele é da França e fala francês",
    ],
    listeningCorrect: "Ele é do Japão e fala japonês e inglês",
    listeningWrongHint: '"Japan" = Japão · "Japanese" = japonês.',
    readingNarration:
      "Um perfil pessoal em inglês tem: nome (name), idade (age), país (country), nacionalidade (nationality), idiomas (languages) e ocupação (occupation). Wh- Questions começam com What, Where, Who, How old.",
    grammarNarration:
      "Verb TO BE: I AM · You/We/They ARE · He/She/It IS. Possessive adjectives (my, your, his, her, our, their) vêm ANTES do substantivo: 'My name is Lucas', 'Her mother is a teacher'. Wh- Questions: What is your name? Where are you from? How old are you?",
    finalProjectIntro: "Vamos criar seu perfil internacional! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY INTERNATIONAL PROFILE — Hello! My name is ${name}. I am 12 years old. I am from Brazil and I am Brazilian. I speak Portuguese and English. My family has four people: my father, my mother, my sister and me. My father is an engineer and my mother is a nurse. I study at English Academy and my favorite subject is English. Nice to meet you!`,
    finalProjectSectionTitle: "My International Profile",
  },
  VOCAB: [
    { id: "name", en: "Name 🪪", pt: "Nome", img: IMG.PASSPORT },
    { id: "age", en: "Age 🎂", pt: "Idade", img: IMG.MAYA },
    { id: "country", en: "Country 🌍", pt: "País", img: IMG.AIRPORT },
    { id: "nationality", en: "Nationality 🏳️", pt: "Nacionalidade", img: IMG.PASSPORT },
    { id: "language", en: "Language 🗣️", pt: "Idioma", img: IMG.KENJI },
    { id: "family", en: "Family 👨‍👩‍👧", pt: "Família", img: IMG.FRIENDS },
    { id: "father", en: "Father 👨", pt: "Pai", img: IMG.LUCAS },
    { id: "mother", en: "Mother 👩", pt: "Mãe", img: IMG.ANNA },
    { id: "occupation", en: "Occupation 💼", pt: "Profissão", img: IMG.ANNA },
    { id: "school", en: "School 🏫", pt: "Escola", img: IMG.SCHOOL },
  ],
  STORY: [
    { img: IMG.SCHOOL, en: "Welcome to English Academy! Today is your first day.", pt: "Bem-vindo à English Academy! Hoje é seu primeiro dia." },
    { img: IMG.ANNA, en: "Hello, class. My name is Ms. Anna. I am your English teacher.", pt: "Olá, turma. Meu nome é Ms. Anna. Sou sua professora de inglês." },
    { img: IMG.KENJI, en: "Hi, I am Kenji. I am from Japan. I speak Japanese and English.", pt: "Oi, sou o Kenji. Sou do Japão. Falo japonês e inglês." },
    { img: IMG.MAYA, en: "Nice to meet you. My name is Maya. I am from India. I am twelve.", pt: "Prazer. Meu nome é Maya. Sou da Índia. Tenho doze." },
    { img: IMG.SOPHIE, en: "Bonjour! I am Sophie, from France. My mother is a chef.", pt: "Bonjour! Sou a Sophie, da França. Minha mãe é chef." },
    { img: IMG.LUCAS, en: "Hey! I'm Lucas, from Brazil. My family has four people.", pt: "E aí! Sou o Lucas, do Brasil. Minha família tem quatro pessoas." },
    { img: IMG.ANNA, en: "Great! Now it's YOUR turn. Tell us: What is your name?", pt: "Ótimo! Agora é a SUA vez. Diz pra gente: qual é o seu nome?" },
  ],
  DIALOG: [
    { who: "Ms. Anna", img: IMG.ANNA, en: "Good morning! What is your name?", pt: "Bom dia! Qual é o seu nome?" },
    { who: "Lucas", img: IMG.LUCAS, en: "My name is Lucas. Nice to meet you.", pt: "Meu nome é Lucas. Prazer em conhecer." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Where are you from, Lucas?", pt: "De onde você é, Lucas?" },
    { who: "Lucas", img: IMG.LUCAS, en: "I am from Brazil. I am Brazilian.", pt: "Sou do Brasil. Sou brasileiro." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "How old are you?", pt: "Quantos anos você tem?" },
    { who: "Lucas", img: IMG.LUCAS, en: "I am twelve years old.", pt: "Tenho doze anos." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "What languages do you speak?", pt: "Que idiomas você fala?" },
    { who: "Lucas", img: IMG.LUCAS, en: "I speak Portuguese and a little English.", pt: "Falo português e um pouco de inglês." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Wonderful! Welcome to English Academy.", pt: "Maravilhoso! Bem-vindo à English Academy." },
  ],
  READING: {
    title: "Student Profile — Kenji Tanaka",
    img: IMG.KENJI,
    parts: [
      { en: "My name is Kenji Tanaka.", pt: "Meu nome é Kenji Tanaka.", highlight: ["My name is"] },
      { en: "I am from Tokyo, Japan.", pt: "Sou de Tóquio, no Japão.", highlight: ["I am from"] },
      { en: "I am Japanese and I am twelve years old.", pt: "Sou japonês e tenho doze anos.", highlight: ["Japanese", "twelve"] },
      { en: "My father is a doctor and my mother is a designer.", pt: "Meu pai é médico e minha mãe é designer.", highlight: ["My father", "my mother"] },
      { en: "I speak Japanese, English and a little Portuguese.", pt: "Falo japonês, inglês e um pouco de português.", highlight: ["speak"] },
      { en: "My favorite subject is Science. Nice to meet you!", pt: "Minha matéria favorita é Ciências. Prazer em conhecer!", highlight: ["favorite subject"] },
    ],
  },
  WRITING: [
    { prompt: "My name ______ Lucas. (verbo TO BE)", answer: "is", hint: "3ª pessoa singular do TO BE.", options: ["is", "am", "are"] },
    { prompt: "I ______ from Brazil.", answer: "am", hint: "TO BE com 'I' = am.", options: ["am", "is", "are"] },
    { prompt: "Where ______ you from?", answer: "are", hint: "TO BE com 'you' = are.", options: ["are", "is", "am"] },
    { prompt: "How ______ are you?", answer: "old", hint: "Perguntar idade: 'How OLD are you?'", options: ["old", "many", "much"] },
    { prompt: "______ mother is a teacher. (Ela)", answer: "Her", hint: "Possessivo de 'she' = HER.", options: ["Her", "His", "Your"] },
    { prompt: "Kenji is from Japan. He is ______.", answer: "Japanese", hint: "Nacionalidade do Japão.", options: ["Japanese", "Japan", "Japon"] },
    { prompt: "______ is your name?", answer: "What", hint: "Perguntar 'qual' = WHAT.", options: ["What", "Where", "How"] },
  ],
  QUIZ: [
    { q: "Complete: My name ___ Maya.", options: [{ text: "am" }, { text: "is", correct: true }, { text: "are" }] },
    { q: "Complete: We ___ students at English Academy.", options: [{ text: "is" }, { text: "am" }, { text: "are", correct: true }] },
    { q: "Kenji é do Japão. Nacionalidade dele:", options: [{ text: "Japan" }, { text: "Japanese", correct: true }, { text: "Japonês" }] },
    { q: "Pergunta 'De onde você é?' em inglês:", options: [{ text: "What is your name?" }, { text: "Where are you from?", correct: true }, { text: "How old are you?" }] },
    { q: "'Her' é possessivo de:", options: [{ text: "he" }, { text: "she", correct: true }, { text: "it" }] },
    { q: "Complete: ___ father is an engineer. (Meu)", options: [{ text: "Your" }, { text: "My", correct: true }, { text: "His" }] },
    { q: "'How old are you?' pergunta:", options: [{ text: "Seu nome" }, { text: "Sua idade", correct: true }, { text: "Seu país" }] },
    { q: "'Occupation' significa:", options: [{ text: "Profissão", correct: true }, { text: "País" }, { text: "Escola" }] },
  ],
  REAL_LIFE: [
    { situation: "🪪 Se apresentando pra um novo colega.", answer: "Hello, my name is Lucas. Nice to meet you." },
    { situation: "🌍 Dizendo de onde você é.", answer: "I am from Brazil. I am Brazilian." },
    { situation: "🎂 Falando sua idade.", answer: "I am twelve years old." },
    { situation: "🗣️ Falando os idiomas que você sabe.", answer: "I speak Portuguese and a little English." },
    { situation: "👨‍👩‍👧 Descrevendo sua família.", answer: "My family has four people. My father is an engineer and my mother is a nurse." },
    { situation: "🏫 Falando da sua escola.", answer: "I study at English Academy. My favorite subject is English." },
  ],
  GRAMMAR: {
    focus: "Verb TO BE · Subject Pronouns · Possessive Adjectives · Wh- Questions",
    why:
      "TO BE é o verbo mais importante do inglês — usamos pra dizer QUEM somos, COMO estamos e DE ONDE viemos. Os pronomes (I, you, he, she, it, we, they) mudam o TO BE (am/is/are). Possessivos (my, your, his, her, our, their) mostram de quem é algo. Wh- Questions abrem perguntas de informação (What/Where/Who/How old).",
    examples: [
      { en: "I AM Lucas. I AM from Brazil.", pt: "Sou o Lucas. Sou do Brasil." },
      { en: "She IS Maya. She IS from India.", pt: "Ela é a Maya. Ela é da Índia." },
      { en: "They ARE students at English Academy.", pt: "Eles são alunos da English Academy." },
      { en: "MY father is a doctor. HER mother is a chef.", pt: "MEU pai é médico. A mãe DELA é chef." },
      { en: "WHAT is your name? WHERE are you from? HOW OLD are you?", pt: "Qual é seu nome? De onde você é? Quantos anos você tem?" },
    ],
    errors: [
      { wrong: "I is from Brazil.", right: "I AM from Brazil.", why: "'I' sempre pede AM, nunca IS." },
      { wrong: "She are twelve.", right: "She IS twelve.", why: "3ª pessoa singular (he/she/it) pede IS." },
      { wrong: "How old you are?", right: "How old ARE YOU?", why: "Em pergunta, o TO BE vem ANTES do sujeito." },
      { wrong: "He mother is a teacher.", right: "HIS mother is a teacher.", why: "Antes do substantivo usamos possessivo (his), não pronome (he)." },
      { wrong: "I am Brazil.", right: "I am BRAZILIAN. / I am from Brazil.", why: "País ≠ nacionalidade. 'Brazil' é país; 'Brazilian' é nacionalidade." },
    ],
  },
  SONG: {
    title: "Hello, Nice to Meet You",
    hookPt: "Cante se apresentando!",
    verses: [
      { en: "Hello, hello, what is your name?", pt: "Olá, olá, qual é o seu nome?", emoji: "👋" },
      { en: "Where are you from? We're glad you came!", pt: "De onde você é? Que bom que veio!", emoji: "🌍" },
      { en: "I'm from Brazil, I'm from Japan,", pt: "Sou do Brasil, sou do Japão,", emoji: "🇧🇷" },
      { en: "We speak together, hand in hand.", pt: "Falamos juntos, de mãos dadas.", emoji: "🤝" },
      { en: "How old are you? I'm twelve, that's true,", pt: "Quantos anos? Doze, é verdade,", emoji: "🎂" },
      { en: "Nice to meet you, welcome too!", pt: "Prazer em conhecer, boas-vindas!", emoji: "🎓" },
    ],
  },
  HUNTER: {
    intro: "Escolha a forma correta do TO BE, do possessivo ou da nacionalidade!",
    rounds: [
      { promptEn: "Complete: I ___ from Brazil.", promptPt: "Complete: I ___ from Brazil.", targetLabel: "am", objects: [
        { id: "a", label: "is", img: "" },
        { id: "b", label: "am", img: "", isTarget: true },
        { id: "c", label: "are", img: "" },
      ]},
      { promptEn: "Complete: She ___ twelve years old.", promptPt: "Complete: She ___ twelve years old.", targetLabel: "is", objects: [
        { id: "a", label: "am", img: "" },
        { id: "b", label: "is", img: "", isTarget: true },
        { id: "c", label: "are", img: "" },
      ]},
      { promptEn: "Kenji é do Japão. Nacionalidade:", promptPt: "Kenji é do Japão. Nacionalidade:", targetLabel: "Japanese", objects: [
        { id: "a", label: "Japan", img: "" },
        { id: "b", label: "Japanese", img: "", isTarget: true },
        { id: "c", label: "Japon", img: "" },
      ]},
      { promptEn: "Pergunta 'De onde?' começa com:", promptPt: "Pergunta 'De onde?' começa com:", targetLabel: "Where", objects: [
        { id: "a", label: "What", img: "" },
        { id: "b", label: "Where", img: "", isTarget: true },
        { id: "c", label: "How", img: "" },
      ]},
      { promptEn: "Possessivo de 'she':", promptPt: "Possessivo de 'she':", targetLabel: "her", objects: [
        { id: "a", label: "his", img: "" },
        { id: "b", label: "her", img: "", isTarget: true },
        { id: "c", label: "your", img: "" },
      ]},
      { promptEn: "Complete: We ___ students.", promptPt: "Complete: We ___ students.", targetLabel: "are", objects: [
        { id: "a", label: "is", img: "" },
        { id: "b", label: "am", img: "" },
        { id: "c", label: "are", img: "", isTarget: true },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares de país → nacionalidade!",
    pairs: [
      { id: "a", en: "Brazil 🇧🇷", pt: "Brazilian", img: IMG.LUCAS },
      { id: "b", en: "Japan 🇯🇵", pt: "Japanese", img: IMG.KENJI },
      { id: "c", en: "India 🇮🇳", pt: "Indian", img: IMG.MAYA },
      { id: "d", en: "France 🇫🇷", pt: "French", img: IMG.SOPHIE },
    ],
  },
  BOOK: {
    title: "My International Profile",
    intro: "Seu primeiro portfólio da English Academy.",
    pages: [
      { en: "Page 1 — Hello! My name is ___.", pt: "Pág. 1 — Olá! Meu nome é ___.", img: IMG.PASSPORT, badge: "🪪" },
      { en: "Page 2 — I am ___ years old.", pt: "Pág. 2 — Tenho ___ anos.", img: IMG.MAYA, badge: "🎂" },
      { en: "Page 3 — I am from ___. I am ___.", pt: "Pág. 3 — Sou de ___. Sou ___.", img: IMG.AIRPORT, badge: "🌍" },
      { en: "Page 4 — I speak ___ and ___.", pt: "Pág. 4 — Falo ___ e ___.", img: IMG.KENJI, badge: "🗣️" },
      { en: "Page 5 — My family has ___ people.", pt: "Pág. 5 — Minha família tem ___ pessoas.", img: IMG.FRIENDS, badge: "👨‍👩‍👧" },
      { en: "Page 6 — I study at English Academy.", pt: "Pág. 6 — Estudo na English Academy.", img: IMG.SCHOOL, badge: "🏫" },
      { en: "The End — Nice to meet you!", pt: "Fim — Prazer em conhecer!", img: IMG.ANNA, badge: "🎓" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "Sala da English Academy. Toque nos itens e conheça os colegas!",
    img: IMG.CLASS,
    items: [
      { en: "Teacher", pt: "Professora (Ms. Anna)", emoji: "👩‍🏫" },
      { en: "Passport", pt: "Passaporte", emoji: "🪪" },
      { en: "World map", pt: "Mapa-múndi", emoji: "🗺️" },
      { en: "Backpack", pt: "Mochila", emoji: "🎒" },
      { en: "Notebook", pt: "Caderno", emoji: "📓" },
      { en: "Flag", pt: "Bandeira", emoji: "🏳️" },
    ],
  },
  CULTURE: {
    title: "Countries & Nationalities 🌍",
    emoji: "🌎",
    paragraphs: [
      { en: "In English, country and nationality are DIFFERENT words: Brazil → Brazilian, Japan → Japanese, France → French, India → Indian.", pt: "Em inglês, país e nacionalidade são palavras DIFERENTES: Brazil → Brazilian, Japan → Japanese, France → French, India → Indian." },
      { en: "When people meet, they usually say 'Nice to meet you' and shake hands (or bow in Japan).", pt: "Ao se conhecerem, as pessoas geralmente dizem 'Nice to meet you' e apertam as mãos (ou fazem reverência no Japão)." },
      { pt: "Se apresentar bem em inglês abre portas no mundo todo — é a primeira habilidade real de comunicação." },
    ],
  },
};

export default lesson;
