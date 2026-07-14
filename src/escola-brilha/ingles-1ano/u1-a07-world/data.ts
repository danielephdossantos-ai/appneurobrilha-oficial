// Unit 7 — My World Around Me 🌍
// Revisão geral do 1º ano: Greetings + Colors + Animals + Family + School
// + Body/Feelings. Projeto: My First English Adventure Book.

import lilyImg from "@/assets/ingles-1ano/u1-a01/lily.png";
import teacherImg from "@/assets/ingles-1ano/u1-a01/teacher.png";
import friendsImg from "@/assets/ingles-1ano/u1-a01/friends.png";
import schoolCoverImg from "@/assets/ingles-1ano/u1-a01/school.png";
import benAsset from "@/assets/ingles-1ano/u1-a02/ben.png.asset.json";
import rainbowAsset from "@/assets/ingles-1ano/u1-a03/cover-rainbow.png.asset.json";
import dogAsset from "@/assets/ingles-1ano/u1-a03/dog-red-balloon.png.asset.json";
import roomColorsAsset from "@/assets/ingles-1ano/u1-a03/room-colors.png.asset.json";
import classroomImg from "@/assets/ingles-1ano/u1-a05/classroom.png";
import backpackImg from "@/assets/ingles-1ano/u1-a05/backpack-open.png";
import teacherEmilyImg from "@/assets/ingles-1ano/u1-a05/teacher-emily.png";
import buddyImg from "@/assets/ingles-1ano/u1-a06/buddy.png";
import type { LessonData } from "../types";

const LILY = lilyImg;
const TEACHER = teacherImg;
const FRIENDS = friendsImg;
const SCHOOL = schoolCoverImg;
const BEN = benAsset.url;
const RAINBOW = rainbowAsset.url;
const DOG = dogAsset.url;
const ROOM = roomColorsAsset.url;
const CLASSROOM = classroomImg;
const BACKPACK = backpackImg;
const EMILY = teacherEmilyImg;
const BUDDY = buddyImg;

const lesson: LessonData = {
  slug: "u1-a07-world",
  meta: {
    unitLabel: "Unit 7 · Lesson 1 — My World Around Me 🌍",
    headerKicker: "My First English Adventure",
    coverKicker: "Lesson 7 · Grand Review",
    coverTitle: "My First English Adventure 🏰",
    coverSubtitle:
      "Lily, Ben, Buddy e a professora Emily chamam você pra Grande Aventura do Inglês. Sete desafios até o castelo da estrela dourada!",
    storyTitle: "The Great English Adventure",
    vocabularyTitle: "All My English Words",
    speakingTargets: [
      "Hello! My name is...",
      "I like blue.",
      "It is a dog.",
      "This is my family.",
      "This is my book.",
      "I am happy!",
      "Goodbye! See you tomorrow!",
    ],
    listeningIntro: "Ouça o pequeno diálogo e responda.",
    listeningQuestion: '👧 "Hello! What\'s your name?"  👦 "My name is Ben." — Qual é o nome do menino?',
    listeningOptions: ["Ben", "Lily", "Buddy"],
    listeningCorrect: "Ben",
    listeningWrongHint: 'Escute de novo. Ele diz "My name is Ben".',
    readingNarration:
      "Vamos ler junto a história 'My Happy Day' da Lily. Ela mostra a mochila, o livro, os amigos e diz como se sente.",
    grammarNarration:
      'Neste ano você aprendeu 3 frases-chave: "My name is..." pra dizer seu nome, "I like..." pra dizer o que gosta, e "I am..." pra dizer como está. Junte tudo!',
    finalProjectIntro:
      "Você completou o 1º Ano! Escreva seu nome e a Lily vai apresentar você em inglês:",
    finalProjectPhrase: (name: string) =>
      `Hello! My name is ${name}. I like blue. I have a book. I am happy today!`,
    finalProjectSectionTitle: "My First English Adventure Book",
  },

  VOCAB: [
    { id: "hello", en: "Hello!", pt: "Olá!", img: LILY },
    { id: "goodbye", en: "Goodbye!", pt: "Tchau!", img: BEN },
    { id: "red", en: "Red", pt: "Vermelho", img: DOG },
    { id: "blue", en: "Blue", pt: "Azul", img: ROOM },
    { id: "yellow", en: "Yellow", pt: "Amarelo", img: RAINBOW },
    { id: "green", en: "Green", pt: "Verde", img: RAINBOW },
    { id: "dog", en: "Dog", pt: "Cachorro", img: DOG },
    { id: "cat", en: "Cat 🐱", pt: "Gato", img: FRIENDS },
    { id: "mother", en: "Mother 👩", pt: "Mãe", img: LILY },
    { id: "father", en: "Father 👨", pt: "Pai", img: TEACHER },
    { id: "book", en: "Book", pt: "Livro", img: CLASSROOM },
    { id: "backpack", en: "Backpack", pt: "Mochila", img: BACKPACK },
    { id: "pencil", en: "Pencil ✏️", pt: "Lápis", img: CLASSROOM },
    { id: "happy", en: "Happy 😊", pt: "Feliz", img: LILY },
    { id: "sad", en: "Sad 😢", pt: "Triste", img: BUDDY },
  ],

  STORY: [
    { img: SCHOOL, en: "Today is a big day!", pt: "Hoje é um grande dia!" },
    { img: LILY, en: 'Lily says: "Are you ready?"', pt: 'Lily diz: "Você está pronto?"' },
    { img: BEN, en: 'Ben answers: "Let\'s go!"', pt: 'Ben responde: "Vamos lá!"' },
    { img: RAINBOW, en: "First challenge: colors! The city needs colors again.", pt: "Primeiro desafio: cores! A cidade precisa das cores de volta." },
    { img: DOG, en: "Then the animals: a dog appears in the park.", pt: "Depois os animais: um cachorro aparece no parque." },
    { img: FRIENDS, en: "The family opens the door. Mother, father and friends!", pt: "A família abre a porta. Mãe, pai e amigos!" },
    { img: CLASSROOM, en: "At school: open your book, take your pencil.", pt: "Na escola: abra o livro, pegue o lápis." },
    { img: BUDDY, en: 'Buddy asks: "How are you today?"', pt: 'Buddy pergunta: "Como você está hoje?"' },
    { img: LILY, en: '"I am happy!" 😊', pt: '"Estou feliz!"' },
    { img: SCHOOL, en: "You reached the golden star castle! ⭐🏰", pt: "Você chegou ao castelo da estrela dourada!" },
  ],

  DIALOG: [
    { who: "Lily", img: LILY, en: "Hello!", pt: "Olá!" },
    { who: "Ben", img: BEN, en: "Hello!", pt: "Olá!" },
    { who: "Lily", img: LILY, en: "What's your name?", pt: "Qual é o seu nome?" },
    { who: "Ben", img: BEN, en: "My name is Ben.", pt: "Meu nome é Ben." },
    { who: "Lily", img: LILY, en: "Nice to meet you!", pt: "Prazer em te conhecer!" },
    { who: "Ben", img: BEN, en: "Nice to meet you too!", pt: "O prazer é meu!" },
    { who: "Buddy", img: BUDDY, en: "How are you today?", pt: "Como você está hoje?" },
    { who: "Lily", img: LILY, en: "I am happy! And you?", pt: "Estou feliz! E você?" },
    { who: "Buddy", img: BUDDY, en: "I am happy too! 😊", pt: "Também estou feliz!" },
  ],

  READING: {
    title: "My Happy Day",
    img: LILY,
    parts: [
      { en: "Hello!", pt: "Olá!", highlight: ["Hello"] },
      { en: "My name is Lily.", pt: "Meu nome é Lily.", highlight: ["name"] },
      { en: "Today I go to school.", pt: "Hoje eu vou pra escola.", highlight: ["school"] },
      { en: "I have my backpack.", pt: "Eu tenho minha mochila.", highlight: ["backpack"] },
      { en: "My book is blue.", pt: "Meu livro é azul.", highlight: ["blue", "book"] },
      { en: "I see my teacher.", pt: "Eu vejo minha professora.", highlight: ["teacher"] },
      { en: "I see my friends.", pt: "Eu vejo meus amigos.", highlight: ["friends"] },
      { en: "I am happy!", pt: "Estou feliz!", highlight: ["happy"] },
      { en: "Goodbye! See you tomorrow!", pt: "Tchau! Até amanhã!", highlight: ["Goodbye"] },
    ],
  },

  WRITING: [
    {
      prompt: "Complete: My name is ______.",
      answer: "Lily",
      hint: "Nome da personagem principal.",
      options: ["Lily", "book", "red"],
    },
    {
      prompt: "Organize: happy / am / I",
      answer: "I am happy",
      hint: 'Comece com "I".',
      options: ["I am happy", "happy I am", "am happy I"],
    },
    {
      prompt: "Organize: blue / My / book / is",
      answer: "My book is blue",
      hint: 'Comece com "My".',
      options: ["My book is blue", "Book is my blue", "Blue is my book"],
    },
    {
      prompt: "Complete: It is a ______. 🐶",
      answer: "dog",
      hint: "O animal que faz au-au.",
      options: ["dog", "cat", "book"],
    },
    {
      prompt: "Complete: I like ______. 💙",
      answer: "blue",
      hint: "Cor do céu.",
      options: ["blue", "red", "green"],
    },
  ],

  QUIZ: [
    {
      q: "What color is the sun? ☀️",
      options: [
        { text: "Yellow", correct: true },
        { text: "Blue" },
        { text: "Green" },
      ],
    },
    {
      q: "Who is this? 👩",
      options: [
        { text: "Mother", correct: true },
        { text: "Teacher" },
        { text: "Sister" },
      ],
    },
    {
      q: "What is this? 🐶",
      options: [
        { text: "Cat" },
        { text: "Dog", correct: true },
        { text: "Bird" },
      ],
    },
    {
      q: "How are you today? 😊",
      options: [
        { text: "I am happy.", correct: true },
        { text: "I am a book." },
        { text: "I am red." },
      ],
    },
    {
      q: "Complete: My name ______ Ana.",
      options: [
        { text: "is", correct: true },
        { text: "am" },
        { text: "are" },
      ],
    },
  ],

  REAL_LIFE: [
    { situation: "👋 Você chega na escola e vê a professora. O que diz?", answer: "Good morning, teacher!" },
    { situation: "🤝 Um amigo novo pergunta seu nome. Responda.", answer: "My name is ___. Nice to meet you!" },
    { situation: "🎨 Perguntam sua cor favorita.", answer: "I like blue." },
    { situation: "🐶 Você mostra o cachorro pro seu amigo.", answer: "Look! It is a dog." },
    { situation: "👨‍👩‍👧 Alguém pergunta sobre sua família.", answer: "This is my mother and my father." },
    { situation: "😊 Alguém pergunta 'How are you?'", answer: "I am happy, thank you!" },
    { situation: "👋 O sino toca e a aula acabou.", answer: "Goodbye! See you tomorrow!" },
  ],

  GRAMMAR: {
    focus: "My name is... / I like... / I am...",
    why:
      'Três frases-chave do 1º ano: "My name is ___" pra se apresentar, "I like ___" pra dizer o que gosta, "I am ___" pra dizer como está. Com elas você já conversa!',
    examples: [
      { en: "My name is Ana.", pt: "Meu nome é Ana." },
      { en: "I like red.", pt: "Eu gosto de vermelho." },
      { en: "I am happy.", pt: "Estou feliz." },
      { en: "This is my mother.", pt: "Esta é minha mãe." },
      { en: "It is a dog.", pt: "É um cachorro." },
    ],
    errors: [
      {
        wrong: "My name Ana.",
        right: "My name is Ana.",
        why: 'Não esqueça o "is" no meio.',
      },
      {
        wrong: "I am like blue.",
        right: "I like blue.",
        why: 'Depois de "I like" já vem a coisa que você gosta.',
      },
      {
        wrong: "I have happy.",
        right: "I am happy.",
        why: 'Emoções vão com "I am".',
      },
    ],
  },

  // 🎵 Música Final — Hello, my friend
  SONG: {
    title: "Hello, My Friend",
    hookPt: "A música do 1º ano — cante e dance com a gente!",
    verses: [
      { en: "Hello, my friend,", pt: "Olá, meu amigo,", emoji: "👋" },
      { en: "Come and play,", pt: "Vem brincar,", emoji: "🎈" },
      { en: "Learning English", pt: "Aprender inglês", emoji: "📚" },
      { en: "Every day!", pt: "Todo dia!", emoji: "☀️" },
      { en: "Red and blue,", pt: "Vermelho e azul,", emoji: "🎨" },
      { en: "Dog and cat,", pt: "Cachorro e gato,", emoji: "🐶" },
      { en: "My family,", pt: "Minha família,", emoji: "👨‍👩‍👧" },
      { en: "Imagine that!", pt: "Imagina só!", emoji: "✨" },
      { en: "Book and pencil,", pt: "Livro e lápis,", emoji: "✏️" },
      { en: "School is fun,", pt: "A escola é divertida,", emoji: "🏫" },
      { en: "English learning", pt: "Aprender inglês", emoji: "🌟" },
      { en: "Has begun!", pt: "Começou!", emoji: "🚀" },
    ],
  },

  // 🎮 Mini Game — Spin & Speak (via HUNTER: categoria sorteada → palavra certa)
  HUNTER: {
    intro: "A roleta girou! Toque na palavra que combina com a categoria.",
    rounds: [
      {
        promptEn: "🎨 Colors — Which one is a color?",
        promptPt: "🎨 Cores — Qual é uma cor?",
        targetLabel: "Blue",
        objects: [
          { id: "blue", label: "Blue 💙", img: "", isTarget: true },
          { id: "dog", label: "Dog 🐶", img: "", isTarget: false },
          { id: "book", label: "Book 📚", img: "", isTarget: false },
        ],
      },
      {
        promptEn: "🐶 Animals — Which one is an animal?",
        promptPt: "🐶 Animais — Qual é um animal?",
        targetLabel: "Cat",
        objects: [
          { id: "red", label: "Red ❤️", img: "", isTarget: false },
          { id: "cat", label: "Cat 🐱", img: "", isTarget: true },
          { id: "pencil", label: "Pencil ✏️", img: "", isTarget: false },
        ],
      },
      {
        promptEn: "👨‍👩‍👧 Family — Who is in the family?",
        promptPt: "👨‍👩‍👧 Família — Quem é da família?",
        targetLabel: "Mother",
        objects: [
          { id: "mother", label: "Mother 👩", img: "", isTarget: true },
          { id: "bird", label: "Bird 🐦", img: "", isTarget: false },
          { id: "green", label: "Green 💚", img: "", isTarget: false },
        ],
      },
      {
        promptEn: "🏫 School — Which one is at school?",
        promptPt: "🏫 Escola — Qual coisa é da escola?",
        targetLabel: "Backpack",
        objects: [
          { id: "backpack", label: "Backpack 🎒", img: "", isTarget: true },
          { id: "father", label: "Father 👨", img: "", isTarget: false },
          { id: "yellow", label: "Yellow 💛", img: "", isTarget: false },
        ],
      },
      {
        promptEn: "😊 Feelings — Which one is a feeling?",
        promptPt: "😊 Sentimentos — Qual é um sentimento?",
        targetLabel: "Happy",
        objects: [
          { id: "happy", label: "Happy 😊", img: "", isTarget: true },
          { id: "dog", label: "Dog 🐶", img: "", isTarget: false },
          { id: "book", label: "Book 📚", img: "", isTarget: false },
        ],
      },
      {
        promptEn: "👋 Greetings — Which one is a greeting?",
        promptPt: "👋 Cumprimentos — Qual é um cumprimento?",
        targetLabel: "Hello",
        objects: [
          { id: "hello", label: "Hello! 👋", img: "", isTarget: true },
          { id: "sad", label: "Sad 😢", img: "", isTarget: false },
          { id: "red", label: "Red ❤️", img: "", isTarget: false },
        ],
      },
    ],
  },

  // 🎮 Mini Game — English Treasure Hunt (PACK: só coisas do inglês entram no baú)
  PACK: {
    intro: "Cace o tesouro! Toque só nas coisas que você aprendeu em inglês. As outras ficam de fora.",
    backpackImg: BACKPACK,
    items: [
      { id: "book", en: "Book", pt: "Livro", emoji: "📚", belongs: true },
      { id: "dog", en: "Dog", pt: "Cachorro", emoji: "🐶", belongs: true },
      { id: "red-ball", en: "Red ball", pt: "Bola vermelha", emoji: "🔴", belongs: true },
      { id: "mother", en: "Mother", pt: "Mãe", emoji: "👩", belongs: true },
      { id: "pencil", en: "Pencil", pt: "Lápis", emoji: "✏️", belongs: true },
      { id: "happy", en: "Happy face", pt: "Rosto feliz", emoji: "😊", belongs: true },
      { id: "ufo", en: "UFO", pt: "OVNI", emoji: "🛸", belongs: false },
      { id: "cactus", en: "Cactus", pt: "Cacto", emoji: "🌵", belongs: false },
      { id: "robot-toy", en: "Wrench", pt: "Chave inglesa", emoji: "🔧", belongs: false },
    ],
  },

  // 🎮 Mini Game — English Champion via COMMANDS estilo TPR final
  COMMANDS: {
    intro: 'A professora Emily dá os comandos da revisão. Toque na ação certa!',
    rounds: [
      {
        promptEn: "Open your book.",
        promptPt: "Abra o livro.",
        actions: [
          { id: "open-book", en: "Open book", pt: "Abrir livro", emoji: "📖", isTarget: true },
          { id: "close-book", en: "Close book", pt: "Fechar livro", emoji: "📕" },
          { id: "sit", en: "Sit down", pt: "Sentar", emoji: "🪑" },
        ],
      },
      {
        promptEn: "Take your pencil.",
        promptPt: "Pegue o lápis.",
        actions: [
          { id: "backpack", en: "Grab backpack", pt: "Pegar mochila", emoji: "🎒" },
          { id: "pencil", en: "Take pencil", pt: "Pegar lápis", emoji: "✏️", isTarget: true },
          { id: "book", en: "Take book", pt: "Pegar livro", emoji: "📚" },
        ],
      },
      {
        promptEn: "Stand up.",
        promptPt: "Fique em pé.",
        actions: [
          { id: "stand", en: "Stand up", pt: "Ficar em pé", emoji: "🧍", isTarget: true },
          { id: "sit", en: "Sit down", pt: "Sentar", emoji: "🪑" },
          { id: "clap", en: "Clap", pt: "Bater palma", emoji: "👏" },
        ],
      },
      {
        promptEn: "Touch your head.",
        promptPt: "Toque a cabeça.",
        actions: [
          { id: "head", en: "Touch head", pt: "Tocar cabeça", emoji: "👤", isTarget: true },
          { id: "nose", en: "Touch nose", pt: "Tocar nariz", emoji: "👃" },
          { id: "hands", en: "Touch hands", pt: "Tocar mãos", emoji: "✋" },
        ],
      },
      {
        promptEn: "Say hello to your friend.",
        promptPt: "Diga olá pro seu amigo.",
        actions: [
          { id: "hello", en: "Wave hello", pt: "Acenar", emoji: "👋", isTarget: true },
          { id: "cry", en: "Cry", pt: "Chorar", emoji: "😢" },
          { id: "eat", en: "Eat", pt: "Comer", emoji: "🍎" },
        ],
      },
      {
        promptEn: "Show me the color blue.",
        promptPt: "Mostre a cor azul.",
        actions: [
          { id: "red", en: "Red", pt: "Vermelho", emoji: "❤️" },
          { id: "blue", en: "Blue", pt: "Azul", emoji: "💙", isTarget: true },
          { id: "yellow", en: "Yellow", pt: "Amarelo", emoji: "💛" },
        ],
      },
      {
        promptEn: "Point to the dog.",
        promptPt: "Aponte pro cachorro.",
        actions: [
          { id: "cat", en: "Cat", pt: "Gato", emoji: "🐱" },
          { id: "dog", en: "Dog", pt: "Cachorro", emoji: "🐶", isTarget: true },
          { id: "bird", en: "Bird", pt: "Pássaro", emoji: "🐦" },
        ],
      },
      {
        promptEn: "Say goodbye.",
        promptPt: "Diga tchau.",
        actions: [
          { id: "hello", en: "Hello", pt: "Olá", emoji: "👋" },
          { id: "goodbye", en: "Goodbye", pt: "Tchau", emoji: "🫶", isTarget: true },
          { id: "run", en: "Run", pt: "Correr", emoji: "🏃" },
        ],
      },
    ],
  },

  // 🧠 Memory — pares por categoria
  MEMORY: {
    intro: "Vire as cartas. Encontre a palavra e a imagem que combinam!",
    pairs: [
      { id: "dog", en: "Dog 🐶", pt: "Cachorro", img: DOG },
      { id: "backpack", en: "Backpack 🎒", pt: "Mochila", img: BACKPACK },
      { id: "teacher", en: "Teacher 👩‍🏫", pt: "Professora", img: EMILY },
      { id: "friends", en: "Friends 👫", pt: "Amigos", img: FRIENDS },
      { id: "happy", en: "Happy 😊", pt: "Feliz", img: LILY },
      { id: "colors", en: "Colors 🌈", pt: "Cores", img: RAINBOW },
    ],
  },

  // 🌍 Curiosidade Cultural
  CULTURE: {
    title: "How kids learn English around the world 🌍",
    emoji: "🌍",
    paragraphs: [
      {
        en: "Kids in English-speaking countries also learn with songs, stories, games and play.",
        pt: "As crianças que vivem em países de língua inglesa também aprendem por meio de músicas, histórias, brincadeiras e jogos.",
      },
      {
        en: "Playing is one of the best ways to learn a new language.",
        pt: "Brincar é uma das formas mais eficientes de aprender um idioma novo.",
      },
      {
        pt: "Cada vez que você canta, dança ou brinca em inglês, seu cérebro guarda as palavras com mais força — igualzinho às crianças do mundo todo!",
      },
    ],
  },

  // 🧩 Missão Final — Grande Jornada + Baú do Conhecimento
  VIRTUAL_ROOM: {
    intro: "Grande Jornada do Inglês! Cumpra cada passo e abra o Baú do Conhecimento no final.",
    img: SCHOOL,
    items: [
      { en: "Say hello to your friend", pt: "Diga olá pro seu amigo", emoji: "👋" },
      { en: "Say your name", pt: "Diga seu nome", emoji: "🗣️" },
      { en: "Show your backpack", pt: "Mostre sua mochila", emoji: "🎒" },
      { en: "Choose your favorite color", pt: "Escolha sua cor favorita", emoji: "🎨" },
      { en: "Point to an animal", pt: "Aponte pra um animal", emoji: "🐶" },
      { en: "Introduce your family", pt: "Apresente sua família", emoji: "👨‍👩‍👧" },
      { en: "Say how you feel today", pt: "Diga como você está hoje", emoji: "😊" },
      { en: "Open the Treasure Chest", pt: "Abra o Baú do Conhecimento", emoji: "🏆" },
    ],
  },
};

export default lesson;
