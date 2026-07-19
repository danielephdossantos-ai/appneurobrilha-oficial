// Unit 5 — My School 🏫
// Objetos, lugares e pessoas da escola. Projeto: My First School Tour.
// Módulos usados: 11 fixos + SONG + HUNTER (Classroom Explorer)
// + COMMANDS (Follow the Teacher) + PACK (Pack My Backpack)
// + MEMORY + CULTURE + BOOK (My School Album) + VIRTUAL_ROOM (Missão Final).

import __asset_schoolAsset from "@/assets/ingles-1ano/u1-a05/school.png.asset.json";
const schoolAsset = __asset_schoolAsset.url;
import __asset_classroomAsset from "@/assets/ingles-1ano/u1-a05/classroom.png.asset.json";
const classroomAsset = __asset_classroomAsset.url;
import __asset_backpackOpenAsset from "@/assets/ingles-1ano/u1-a05/backpack-open.png.asset.json";
const backpackOpenAsset = __asset_backpackOpenAsset.url;
import __asset_teacherEmilyAsset from "@/assets/ingles-1ano/u1-a05/teacher-emily.png.asset.json";
const teacherEmilyAsset = __asset_teacherEmilyAsset.url;
import __asset_lilyImg from "@/assets/ingles-1ano/u1-a01/lily.png.asset.json";
const lilyImg = __asset_lilyImg.url;
import benAsset from "@/assets/ingles-1ano/u1-a02/ben.png.asset.json";
import type { LessonData } from "../types";

const SCHOOL = schoolAsset;
const CLASSROOM = classroomAsset;
const BACKPACK_OPEN = backpackOpenAsset;
const EMILY = teacherEmilyAsset;
const BEN = benAsset.url;
const LILY = lilyImg;

const lesson: LessonData = {
  slug: "u1-a05-school",
  meta: {
    unitLabel: "Unit 5 · Lesson 1 — My School 🏫",
    headerKicker: "My First English Adventure",
    coverKicker: "Lesson 5",
    coverTitle: "Welcome to My School!",
    coverSubtitle:
      "Lily chega à Bright School pro primeiro dia de aula. Vamos conhecer a professora Emily, a sala, o livro, o lápis e a mochila — tudo em inglês!",
    storyTitle: "Lily's First School Day",
    vocabularyTitle: "My School Words",
    speakingTargets: [
      "This is a book.",
      "This is a pencil.",
      "This is my backpack.",
      "I am a student.",
      "Hello, teacher!",
      "Open your book.",
      "Sit down.",
    ],
    listeningIntro: "Ouça a professora Emily. Escolha o que ela pediu.",
    listeningQuestion: 'A professora disse: "Open your book." O que você faz?',
    listeningOptions: ["Abrir o livro 📖", "Fechar a porta 🚪", "Sentar na cadeira 🪑"],
    listeningCorrect: "Abrir o livro 📖",
    listeningWrongHint: 'Escute de novo. "Open your book" quer dizer "Abra seu livro".',
    readingNarration:
      "Vamos ler juntos a apresentação da Lily. Ela fala o nome, mostra a escola, a professora e o livro dela.",
    grammarNarration:
      'Em inglês, pra apontar uma coisa perto usamos "This is a..." (isto é um/uma). Pra dizer que a coisa é sua, usamos "This is MY..." (isto é meu/minha). Exemplo: This is a book. → This is MY book.',
    finalProjectIntro:
      'Você fez o tour da escola! Agora escreve seu nome e diga:',
    finalProjectPhrase: (name: string) =>
      `Hello! My name is ${name}. I am a student at Bright School!`,
    finalProjectSectionTitle: "My First School Tour",
  },

  VOCAB: [
    { id: "school", en: "School", pt: "Escola", img: SCHOOL },
    { id: "book", en: "Book", pt: "Livro", img: CLASSROOM },
    { id: "pencil", en: "Pencil", pt: "Lápis", img: CLASSROOM },
    { id: "notebook", en: "Notebook", pt: "Caderno", img: CLASSROOM },
    { id: "backpack", en: "Backpack", pt: "Mochila", img: BACKPACK_OPEN },
    { id: "chair", en: "Chair", pt: "Cadeira", img: CLASSROOM },
    { id: "window", en: "Window", pt: "Janela", img: CLASSROOM },
    { id: "door", en: "Door", pt: "Porta", img: CLASSROOM },
    { id: "teacher", en: "Teacher", pt: "Professora", img: EMILY },
    { id: "student", en: "Student", pt: "Aluno(a)", img: LILY },
    { id: "crayon", en: "Crayon", pt: "Giz de cera", img: CLASSROOM },
    { id: "eraser", en: "Eraser", pt: "Borracha", img: CLASSROOM },
    { id: "ruler", en: "Ruler", pt: "Régua", img: CLASSROOM },
  ],

  STORY: [
    { img: SCHOOL, en: "Lily arrives at Bright School.", pt: "Lily chega à Bright School." },
    { img: BEN, en: 'Ben says: "Hello, Lily!"', pt: 'Ben diz: "Olá, Lily!"' },
    { img: LILY, en: 'Lily: "Hello, Ben! Welcome to school!"', pt: '"Olá, Ben! Bem-vindo à escola!"' },
    { img: EMILY, en: 'Teacher Emily: "Come with me!"', pt: 'Professora Emily: "Venham comigo!"' },
    { img: CLASSROOM, en: "They enter the classroom.", pt: "Eles entram na sala de aula." },
    { img: EMILY, en: '"Good morning, class!"', pt: '"Bom dia, turma!"' },
    { img: EMILY, en: '"Open your book."', pt: '"Abram seus livros."' },
    { img: EMILY, en: '"Take your pencil."', pt: '"Peguem seu lápis."' },
    { img: LILY, en: "Lily draws a sun. Ben draws a tree.", pt: "Lily desenha um sol. Ben desenha uma árvore." },
    { img: EMILY, en: '"Great job, everyone!"', pt: '"Ótimo trabalho, pessoal!"' },
  ],

  DIALOG: [
    { who: "Emily", img: EMILY, en: "Good morning, class!", pt: "Bom dia, turma!" },
    { who: "Lily", img: LILY, en: "Good morning, teacher!", pt: "Bom dia, professora!" },
    { who: "Emily", img: EMILY, en: "Open your book.", pt: "Abra seu livro." },
    { who: "Ben", img: BEN, en: "Yes, teacher!", pt: "Sim, professora!" },
    { who: "Emily", img: EMILY, en: "Take your pencil.", pt: "Pegue seu lápis." },
    { who: "Lily", img: LILY, en: "This is my pencil. It is blue.", pt: "Este é meu lápis. É azul." },
    { who: "Emily", img: EMILY, en: "Great job! Sit down, please.", pt: "Muito bem! Sentem-se, por favor." },
  ],

  READING: {
    title: "Hello! I am Lily.",
    img: SCHOOL,
    parts: [
      { en: "Hello!", pt: "Olá!", highlight: ["Hello"] },
      { en: "I am Lily.", pt: "Eu sou a Lily.", highlight: ["I am"] },
      { en: "This is my school.", pt: "Esta é a minha escola.", highlight: ["This is", "school"] },
      { en: "This is my teacher.", pt: "Esta é minha professora.", highlight: ["teacher"] },
      { en: "This is my book.", pt: "Este é meu livro.", highlight: ["book"] },
      { en: "I like my school!", pt: "Eu gosto da minha escola!", highlight: ["like"] },
    ],
  },

  WRITING: [
    {
      prompt: "This is my ______. (📚)",
      answer: "book",
      hint: "Coisa que a gente lê 📖.",
      options: ["book", "chair", "door"],
    },
    {
      prompt: "This is my ______. (✏️)",
      answer: "pencil",
      hint: "Serve pra escrever ✏️.",
      options: ["pencil", "window", "teacher"],
    },
    {
      prompt: "This is my ______. (🎒)",
      answer: "backpack",
      hint: "A gente carrega nas costas.",
      options: ["backpack", "eraser", "notebook"],
    },
    {
      prompt: "I am a ______.",
      answer: "student",
      hint: "Quem aprende na escola.",
      options: ["student", "teacher", "door"],
    },
    {
      prompt: "Hello, ______!",
      answer: "teacher",
      hint: "Quem ensina a turma 👩‍🏫.",
      options: ["teacher", "backpack", "ruler"],
    },
  ],

  QUIZ: [
    {
      q: "What is this? 📚",
      options: [
        { text: "Pencil" },
        { text: "Book", correct: true },
        { text: "Chair" },
      ],
    },
    {
      q: "Who teaches the class? 👩‍🏫",
      options: [
        { text: "Student" },
        { text: "Teacher", correct: true },
        { text: "Friend" },
      ],
    },
    {
      q: "Where do we put our books? 🎒",
      options: [
        { text: "Backpack", correct: true },
        { text: "Window" },
        { text: "Chair" },
      ],
    },
    {
      q: 'Teacher says: "Open your book." What do you do?',
      options: [
        { text: "Fecho a porta 🚪" },
        { text: "Abro o livro 📖", correct: true },
        { text: "Fecho a janela 🪟" },
      ],
    },
    {
      q: "Complete: I am a ______.",
      options: [
        { text: "door" },
        { text: "student", correct: true },
        { text: "pencil" },
      ],
    },
  ],

  REAL_LIFE: [
    { situation: "🏫 Primeiro dia de aula. Cumprimente a professora.", answer: "Good morning, teacher!" },
    { situation: "📖 A professora pede pra abrir o livro. Diga o que ela pediu.", answer: "Open your book." },
    { situation: "🎒 Mostre sua mochila pra um amigo novo.", answer: "This is my backpack." },
    { situation: "✏️ Você não achou seu lápis. Como pede ajuda?", answer: "Where is my pencil?" },
    { situation: "🪑 A professora pede pra sentar.", answer: "Sit down, please." },
  ],

  GRAMMAR: {
    focus: 'This is a ___. / This is MY ___.',
    why:
      'Pra apontar uma coisa perto usamos "This is a" (isto é um/uma). Se a coisa é sua, trocamos "a" por "MY" (meu/minha). "A" e "MY" NUNCA aparecem juntos.',
    examples: [
      { en: "This is a book.", pt: "Isto é um livro." },
      { en: "This is MY book.", pt: "Este é meu livro." },
      { en: "This is a pencil.", pt: "Isto é um lápis." },
      { en: "This is MY teacher.", pt: "Esta é minha professora." },
    ],
    errors: [
      {
        wrong: "This is a my book.",
        right: "This is my book.",
        why: 'Não use "a" e "my" juntos. Escolhe um.',
      },
      {
        wrong: "This is book.",
        right: "This is a book.",
        why: 'Precisa do "a" antes do objeto no singular.',
      },
    ],
  },

  SONG: {
    title: "Welcome to School!",
    hookPt: "A música da chegada à escola. Cante junto com gestos!",
    verses: [
      { en: "Welcome to school!", pt: "Bem-vindo à escola!", emoji: "🏫" },
      { en: "Welcome today!", pt: "Bem-vindo hoje!", emoji: "☀️" },
      { en: "Bring your backpack,", pt: "Traga sua mochila,", emoji: "🎒" },
      { en: "Let's learn and play!", pt: "Vamos aprender e brincar!", emoji: "🎉" },
      { en: "Open your book,", pt: "Abra seu livro,", emoji: "📖" },
      { en: "Take your pen,", pt: "Pegue sua caneta,", emoji: "🖊️" },
      { en: "Learning English,", pt: "Aprendendo inglês,", emoji: "🇬🇧" },
      { en: "Again and again!", pt: "De novo e de novo!", emoji: "🔁" },
    ],
  },

  // 🎮 Mini Game 1 — Classroom Explorer (Hunter)
  HUNTER: {
    intro: "A professora vai pedir um objeto. Toque no objeto certo!",
    rounds: [
      {
        promptEn: "Find the pencil.",
        promptPt: "Encontre o lápis.",
        targetLabel: "Pencil",
        objects: [
          { id: "chair", label: "Chair 🪑", img: "", isTarget: false },
          { id: "pencil", label: "Pencil ✏️", img: "", isTarget: true },
          { id: "door", label: "Door 🚪", img: "", isTarget: false },
        ],
      },
      {
        promptEn: "Find the backpack.",
        promptPt: "Encontre a mochila.",
        targetLabel: "Backpack",
        objects: [
          { id: "book", label: "Book 📚", img: "", isTarget: false },
          { id: "backpack", label: "Backpack 🎒", img: BACKPACK_OPEN, isTarget: true },
          { id: "window", label: "Window 🪟", img: "", isTarget: false },
        ],
      },
      {
        promptEn: "Find the ruler.",
        promptPt: "Encontre a régua.",
        targetLabel: "Ruler",
        objects: [
          { id: "eraser", label: "Eraser 🧽", img: "", isTarget: false },
          { id: "ruler", label: "Ruler 📏", img: "", isTarget: true },
          { id: "crayon", label: "Crayon 🖍️", img: "", isTarget: false },
        ],
      },
      {
        promptEn: "Find the chair.",
        promptPt: "Encontre a cadeira.",
        targetLabel: "Chair",
        objects: [
          { id: "chair", label: "Chair 🪑", img: "", isTarget: true },
          { id: "notebook", label: "Notebook 📝", img: "", isTarget: false },
          { id: "door", label: "Door 🚪", img: "", isTarget: false },
        ],
      },
      {
        promptEn: "Find the teacher.",
        promptPt: "Encontre a professora.",
        targetLabel: "Teacher",
        objects: [
          { id: "student", label: "Student 👦", img: LILY, isTarget: false },
          { id: "teacher", label: "Teacher 👩‍🏫", img: EMILY, isTarget: true },
          { id: "backpack", label: "Backpack 🎒", img: BACKPACK_OPEN, isTarget: false },
        ],
      },
    ],
  },

  // 🎮 Mini Game 3 — Follow the Teacher (TPR)
  COMMANDS: {
    intro: "A professora Emily vai dar um comando. Toque na ação certa!",
    rounds: [
      {
        promptEn: "Stand up.",
        promptPt: "Levante-se.",
        actions: [
          { id: "stand", en: "Stand up", pt: "Levantar", emoji: "🧍", isTarget: true },
          { id: "sit", en: "Sit down", pt: "Sentar", emoji: "🪑" },
          { id: "open", en: "Open book", pt: "Abrir livro", emoji: "📖" },
        ],
      },
      {
        promptEn: "Sit down.",
        promptPt: "Sente-se.",
        actions: [
          { id: "close", en: "Close book", pt: "Fechar livro", emoji: "📕" },
          { id: "sit", en: "Sit down", pt: "Sentar", emoji: "🪑", isTarget: true },
          { id: "listen", en: "Listen", pt: "Escutar", emoji: "👂" },
        ],
      },
      {
        promptEn: "Open your book.",
        promptPt: "Abra seu livro.",
        actions: [
          { id: "open", en: "Open book", pt: "Abrir livro", emoji: "📖", isTarget: true },
          { id: "stand", en: "Stand up", pt: "Levantar", emoji: "🧍" },
          { id: "look", en: "Look", pt: "Olhar", emoji: "👀" },
        ],
      },
      {
        promptEn: "Close your book.",
        promptPt: "Feche seu livro.",
        actions: [
          { id: "open", en: "Open book", pt: "Abrir livro", emoji: "📖" },
          { id: "close", en: "Close book", pt: "Fechar livro", emoji: "📕", isTarget: true },
          { id: "sit", en: "Sit down", pt: "Sentar", emoji: "🪑" },
        ],
      },
      {
        promptEn: "Listen.",
        promptPt: "Escute.",
        actions: [
          { id: "look", en: "Look", pt: "Olhar", emoji: "👀" },
          { id: "listen", en: "Listen", pt: "Escutar", emoji: "👂", isTarget: true },
          { id: "repeat", en: "Repeat", pt: "Repetir", emoji: "🗣️" },
        ],
      },
      {
        promptEn: "Repeat after me.",
        promptPt: "Repita depois de mim.",
        actions: [
          { id: "repeat", en: "Repeat", pt: "Repetir", emoji: "🗣️", isTarget: true },
          { id: "close", en: "Close book", pt: "Fechar livro", emoji: "📕" },
          { id: "stand", en: "Stand up", pt: "Levantar", emoji: "🧍" },
        ],
      },
    ],
  },

  // 🎮 Mini Game 2 — Pack My Backpack
  PACK: {
    intro: "Arrume a mochila da Lily! Toque só nos materiais escolares — os outros ficam de fora.",
    backpackImg: BACKPACK_OPEN,
    items: [
      { id: "book", en: "Book", pt: "Livro", emoji: "📚", belongs: true },
      { id: "notebook", en: "Notebook", pt: "Caderno", emoji: "📝", belongs: true },
      { id: "pencil", en: "Pencil", pt: "Lápis", emoji: "✏️", belongs: true },
      { id: "crayon", en: "Crayon", pt: "Giz de cera", emoji: "🖍️", belongs: true },
      { id: "eraser", en: "Eraser", pt: "Borracha", emoji: "🧽", belongs: true },
      { id: "pizza", en: "Pizza", pt: "Pizza", emoji: "🍕", belongs: false },
      { id: "ball", en: "Soccer ball", pt: "Bola", emoji: "⚽", belongs: false },
      { id: "cat", en: "Cat", pt: "Gato", emoji: "🐱", belongs: false },
    ],
  },

  // 🧠 Memory — pares palavra ↔ imagem/emoji
  MEMORY: {
    intro: "Vire as cartas. Encontre a palavra e o objeto da escola!",
    pairs: [
      { id: "book", en: "Book", pt: "Livro", img: CLASSROOM },
      { id: "backpack", en: "Backpack", pt: "Mochila", img: BACKPACK_OPEN },
      { id: "teacher", en: "Teacher", pt: "Professora", img: EMILY },
      { id: "school", en: "School", pt: "Escola", img: SCHOOL },
    ],
  },

  // 🌍 Curiosidade Cultural
  CULTURE: {
    title: "Lockers vs Backpacks 🎒",
    emoji: "🇺🇸",
    paragraphs: [
      {
        en: "In the United States, students have a locker at school.",
        pt: "Nos Estados Unidos, os alunos têm um armário (locker) na escola pra guardar os materiais.",
      },
      {
        en: "In Brazil, students carry a backpack all day.",
        pt: "No Brasil, os alunos costumam carregar a mochila o dia inteiro.",
      },
      {
        pt: "Legal, né? A palavra locker vem de lock (fechadura), porque cada armário tem um cadeado.",
      },
    ],
  },

  // 🧩 Missão Final — Preparar a sala da professora Emily
  VIRTUAL_ROOM: {
    intro: "A professora Emily precisa preparar a sala. Toque em cada objeto pra deixar tudo pronto!",
    img: CLASSROOM,
    items: [
      { en: "Open the door", pt: "Abrir a porta", emoji: "🚪" },
      { en: "Open the window", pt: "Abrir a janela", emoji: "🪟" },
      { en: "Put the book on the desk", pt: "Colocar o livro na mesa", emoji: "📚" },
      { en: "Take the pencil", pt: "Pegar o lápis", emoji: "✏️" },
      { en: "Put the notebook", pt: "Pôr o caderno", emoji: "📝" },
      { en: "Place the chair", pt: "Colocar a cadeira", emoji: "🪑" },
      { en: "Get the ruler", pt: "Pegar a régua", emoji: "📏" },
      { en: "Take the eraser", pt: "Pegar a borracha", emoji: "🧽" },
    ],
  },

  // 📒 Projeto — My School Album (livrinho)
  BOOK: {
    title: "My School Album",
    intro: "Este é o SEU álbum da escola. Cada página guarda uma coisa importante!",
    pages: [
      { en: "My school 🏫", pt: "Minha escola", img: SCHOOL, badge: "Page 1" },
      { en: "My classroom 🪑", pt: "Minha sala de aula", img: CLASSROOM, badge: "Page 2" },
      { en: "My teacher 👩‍🏫", pt: "Minha professora", img: EMILY, badge: "Page 3" },
      { en: "My backpack 🎒", pt: "Minha mochila", img: BACKPACK_OPEN, badge: "Page 4" },
      { en: "My friend 👦", pt: "Meu amigo", img: BEN, badge: "Page 5" },
      { en: "Me at school 👧", pt: "Eu na escola", img: LILY, badge: "Page 6" },
    ],
  },
};

export default lesson;
