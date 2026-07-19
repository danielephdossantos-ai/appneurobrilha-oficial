// Dados da aula: Ingles 1º Ano — Unit 3, Aula 01 "My Colors Everywhere!"
// Foco: as 8 cores básicas em inglês (red, blue, yellow, green, orange, purple, black, white).
// Personagens: Lily + Brilha + cachorrinho.

import coverAsset from "@/assets/ingles-1ano/u1-a03/cover-rainbow.png.asset.json";
import roomAsset from "@/assets/ingles-1ano/u1-a03/room-colors.png.asset.json";
import dogAsset from "@/assets/ingles-1ano/u1-a03/dog-red-balloon.png.asset.json";
import __asset_lilyImg from "@/assets/ingles-1ano/u1-a01/lily.png.asset.json";
const lilyImg = __asset_lilyImg.url;
import type { LessonData } from "../types";

const coverImg = coverAsset.url;
const roomImg = roomAsset.url;
const dogImg = dogAsset.url;

// Swatches SVG por cor — sem custo de asset, sempre coerentes com a cor.
function swatch(hex: string, emoji: string, label?: string) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'>
    <rect width='240' height='240' rx='32' fill='${hex}'/>
    <text x='120' y='150' font-size='120' text-anchor='middle' dominant-baseline='middle'>${emoji}</text>
    ${label ? `<text x='120' y='215' font-size='26' text-anchor='middle' fill='${hex === "#ffffff" || hex === "#fde047" ? "#111" : "#fff"}' font-family='sans-serif' font-weight='900'>${label}</text>` : ""}
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const RED = swatch("#dc2626", "🍎", "RED");
const BLUE = swatch("#2563eb", "🌊", "BLUE");
const YELLOW = swatch("#fde047", "☀️", "YELLOW");
const GREEN = swatch("#16a34a", "🌳", "GREEN");
const ORANGE = swatch("#f97316", "🐠", "ORANGE");
const PURPLE = swatch("#7c3aed", "🌸", "PURPLE");
const BLACK = swatch("#111827", "🐈‍⬛", "BLACK");
const WHITE = swatch("#ffffff", "☁️", "WHITE");
const BANANA = swatch("#fde047", "🍌", "");

const lesson: LessonData = {
  slug: "u1-a03-colors",
  meta: {
    unitLabel: "Unit 3 · Lesson 1 — My Colors Everywhere!",
    headerKicker: "My First English Adventure",
    coverKicker: "Lesson 3",
    coverTitle: "My Colors Everywhere!",
    coverSubtitle:
      "Um vento mágico levou todas as cores embora! Ajude Lily a encontrar RED, BLUE, YELLOW, GREEN e todas as outras cores em inglês.",
    storyTitle: "The Missing Colors",
    vocabularyTitle: "The 8 colors",
    speakingTargets: ["Red", "Blue", "Yellow", "Green", "Orange", "Purple", "Black", "White"],
    listeningIntro: "Ouça o narrador. Ele vai dizer o nome de UMA cor.",
    listeningQuestion: "Qual cor o narrador falou?",
    listeningOptions: ["Blue", "Yellow", "Green"],
    listeningCorrect: "Blue",
    listeningWrongHint: 'Ouve de novo. O narrador diz "BLUE" — igual ao mar 🌊.',
    readingNarration:
      "Vamos ler juntos. Este é um livro de cores. Uma maçã vermelha. Um sapo verde. Um patinho amarelo. Um peixe laranja. Cada cor tem um nome em inglês.",
    grammarNarration:
      'Em inglês a cor vem DEPOIS da palavra "IS". A gente diz: "The apple IS red." (A maçã É vermelha.) "The sun IS yellow." (O sol É amarelo.) Também dá pra dizer "I like blue." (Eu gosto de azul.)',
    finalProjectIntro:
      "Vamos montar seu MY COLOR BOOK! Escreve seu nome. Você vai apresentar o seu livrinho de cores:",
    finalProjectPhrase: (name: string) =>
      `Hello! My name is ${name}. This is my Color Book. I like red, blue and yellow!`,
    finalProjectSectionTitle: "Color Hunter!",
  },
  VOCAB: [
    { id: "red", en: "Red", pt: "Vermelho", img: RED },
    { id: "blue", en: "Blue", pt: "Azul", img: BLUE },
    { id: "yellow", en: "Yellow", pt: "Amarelo", img: YELLOW },
    { id: "green", en: "Green", pt: "Verde", img: GREEN },
    { id: "orange", en: "Orange", pt: "Laranja", img: ORANGE },
    { id: "purple", en: "Purple", pt: "Roxo", img: PURPLE },
    { id: "black", en: "Black", pt: "Preto", img: BLACK },
    { id: "white", en: "White", pt: "Branco", img: WHITE },
  ],
  STORY: [
    { img: coverImg, en: "Lily is painting a big rainbow.", pt: "Lily está pintando um grande arco-íris." },
    { img: WHITE, en: "A magic wind blows the colors away!", pt: "Um vento mágico leva as cores embora!" },
    { img: dogImg, en: "A dog has a RED balloon.", pt: "Um cachorro tem um balão VERMELHO." },
    { img: BLUE, en: "The sky is BLUE.", pt: "O céu é AZUL." },
    { img: YELLOW, en: "The sun is YELLOW.", pt: "O sol é AMARELO." },
    { img: GREEN, en: "The tree is GREEN.", pt: "A árvore é VERDE." },
    { img: ORANGE, en: "The fish is ORANGE.", pt: "O peixe é LARANJA." },
    { img: PURPLE, en: "The flower is PURPLE.", pt: "A flor é ROXA." },
  ],
  DIALOG: [
    { who: "Lily", img: lilyImg, en: "Oh no! The colors are gone!", pt: "Ah não! As cores sumiram!" },
    { who: "Brilha", img: coverImg, en: "Don't worry! Let's find the colors!", pt: "Não se preocupa! Vamos encontrar as cores!" },
    { who: "Dog", img: dogImg, en: "Look! My balloon is RED!", pt: "Olha! Meu balão é VERMELHO!" },
    { who: "Lily", img: lilyImg, en: "The sky is BLUE and the sun is YELLOW!", pt: "O céu é AZUL e o sol é AMARELO!" },
    { who: "Brilha", img: GREEN, en: "The tree is GREEN. We found them all!", pt: "A árvore é VERDE. Achamos todas!" },
  ],
  READING: {
    title: "My Color Book",
    img: roomImg,
    parts: [
      { en: "This is a RED apple.", pt: "Esta é uma maçã VERMELHA.", highlight: ["RED"] },
      { en: "This is a BLUE ball.", pt: "Esta é uma bola AZUL.", highlight: ["BLUE"] },
      { en: "This is a YELLOW duck.", pt: "Este é um patinho AMARELO.", highlight: ["YELLOW"] },
      { en: "This is a GREEN frog.", pt: "Este é um sapo VERDE.", highlight: ["GREEN"] },
      { en: "This is an ORANGE fish.", pt: "Este é um peixe LARANJA.", highlight: ["ORANGE"] },
      { en: "This is a PURPLE flower.", pt: "Esta é uma flor ROXA.", highlight: ["PURPLE"] },
      { en: "This is a BLACK cat.", pt: "Este é um gato PRETO.", highlight: ["BLACK"] },
      { en: "This is a WHITE cloud.", pt: "Esta é uma nuvem BRANCA.", highlight: ["WHITE"] },
    ],
  },
  WRITING: [
    {
      prompt: "The apple is ___ .",
      answer: "red",
      hint: "A cor da maçã 🍎.",
      options: ["red", "blue", "green"],
    },
    {
      prompt: "The sky is ___ .",
      answer: "blue",
      hint: "A cor do céu ☁️🌊.",
      options: ["blue", "yellow", "black"],
    },
    {
      prompt: "The sun is ___ .",
      answer: "yellow",
      hint: "A cor do sol ☀️.",
      options: ["yellow", "purple", "red"],
    },
    {
      prompt: "The frog is ___ .",
      answer: "green",
      hint: "A cor do sapo 🐸.",
      options: ["green", "orange", "white"],
    },
    {
      prompt: "The cat is ___ .",
      answer: "black",
      hint: "Cor bem escura, oposta de branco.",
      options: ["black", "white", "yellow"],
    },
  ],
  QUIZ: [
    {
      q: "What color is the apple?",
      qEn: "What color is the apple?",
      img: RED,
      options: [{ text: "Red", correct: true }, { text: "Blue" }, { text: "Green" }],
    },
    {
      q: "What color is the sun?",
      img: YELLOW,
      options: [{ text: "Yellow", correct: true }, { text: "Purple" }, { text: "Black" }],
    },
    {
      q: "Find something BLACK.",
      img: BLACK,
      options: [{ text: "Cat 🐈‍⬛", correct: true }, { text: "Sun ☀️" }, { text: "Sky 🌊" }],
    },
    {
      q: "The frog is ___",
      img: GREEN,
      options: [{ text: "Green", correct: true }, { text: "Orange" }, { text: "Purple" }],
    },
    {
      q: "What color is the banana?",
      img: BANANA,
      options: [{ text: "Yellow", correct: true }, { text: "Red" }, { text: "Blue" }],
    },
  ],
  REAL_LIFE: [
    { situation: "Olha ao redor: encontra alguma coisa VERMELHA (red).", answer: "It is red!" },
    { situation: "Encontra alguma coisa AZUL (blue).", answer: "It is blue!" },
    { situation: "Encontra alguma coisa VERDE (green).", answer: "It is green!" },
    { situation: "Encontra alguma coisa PRETA (black).", answer: "It is black!" },
    { situation: "Encontra alguma coisa BRANCA (white).", answer: "It is white!" },
  ],
  GRAMMAR: {
    focus: "The ___ is [color].",
    why: 'Em inglês, pra dizer a cor de uma coisa a gente usa "IS" (é) e a cor VEM DEPOIS. Exemplo: "The apple is red." (A maçã é vermelha.) Também dá pra dizer "I like blue." (Eu gosto de azul.)',
    examples: [
      { en: "The apple is red.", pt: "A maçã é vermelha." },
      { en: "The sky is blue.", pt: "O céu é azul." },
      { en: "The sun is yellow.", pt: "O sol é amarelo." },
      { en: "The cat is black.", pt: "O gato é preto." },
      { en: "I like green!", pt: "Eu gosto de verde!" },
    ],
    errors: [
      {
        wrong: "The red apple is.",
        right: "The apple is red.",
        why: 'A cor vem DEPOIS do "is", não antes.',
      },
      {
        wrong: "I like the blue.",
        right: "I like blue.",
        why: 'Pra dizer que gosta de uma cor, não precisa do "the".',
      },
    ],
  },

  // 🎵 Música
  SONG: {
    title: "The Rainbow Song",
    hookPt: "Ouça e cante junto! Cada verso mostra uma cor.",
    verses: [
      { en: "Red, red, look around!", pt: "Vermelho, vermelho, olhe em volta!", emoji: "🍎" },
      { en: "Red is everywhere in town!", pt: "Vermelho está em toda a cidade!", emoji: "🚒" },
      { en: "Blue, blue, in the sky!", pt: "Azul, azul, no céu!", emoji: "☁️" },
      { en: "Wave your hands way up high!", pt: "Balance as mãos bem alto!", emoji: "🙌" },
      { en: "Yellow sun, so bright and warm!", pt: "Sol amarelo, brilhante e quente!", emoji: "☀️" },
      { en: "Green like grass on my farm!", pt: "Verde como a grama da fazenda!", emoji: "🌳" },
      { en: "Orange, purple, black and white!", pt: "Laranja, roxo, preto e branco!", emoji: "🌈" },
      { en: "Colors make the world so bright!", pt: "Cores deixam o mundo brilhante!", emoji: "✨" },
    ],
  },

  // 🎮 Color Hunter
  HUNTER: {
    intro: 'A voz vai pedir uma cor. Toque no objeto que combina!',
    rounds: [
      {
        promptEn: "Find something BLUE.",
        promptPt: "Encontre algo AZUL.",
        targetLabel: "BLUE",
        objects: [
          { id: "sky", label: "sky", img: BLUE, isTarget: true },
          { id: "apple", label: "apple", img: RED },
          { id: "sun", label: "sun", img: YELLOW },
        ],
      },
      {
        promptEn: "Find something RED.",
        promptPt: "Encontre algo VERMELHO.",
        targetLabel: "RED",
        objects: [
          { id: "tree", label: "tree", img: GREEN },
          { id: "apple", label: "apple", img: RED, isTarget: true },
          { id: "cat", label: "cat", img: BLACK },
        ],
      },
      {
        promptEn: "Find something YELLOW.",
        promptPt: "Encontre algo AMARELO.",
        targetLabel: "YELLOW",
        objects: [
          { id: "flower", label: "flower", img: PURPLE },
          { id: "cloud", label: "cloud", img: WHITE },
          { id: "sun", label: "sun", img: YELLOW, isTarget: true },
        ],
      },
      {
        promptEn: "Find something GREEN.",
        promptPt: "Encontre algo VERDE.",
        targetLabel: "GREEN",
        objects: [
          { id: "tree", label: "tree", img: GREEN, isTarget: true },
          { id: "fish", label: "fish", img: ORANGE },
          { id: "sky", label: "sky", img: BLUE },
        ],
      },
      {
        promptEn: "Find something BLACK.",
        promptPt: "Encontre algo PRETO.",
        targetLabel: "BLACK",
        objects: [
          { id: "cloud", label: "cloud", img: WHITE },
          { id: "cat", label: "cat", img: BLACK, isTarget: true },
          { id: "banana", label: "banana", img: BANANA },
        ],
      },
    ],
  },

  // 🎨 Paint the Picture
  PAINT: {
    intro: "A voz vai dizer qual cor usar. Toque na cor certa pra pintar o desenho!",
    rounds: [
      {
        promptEn: "Paint the sun YELLOW.",
        promptPt: "Pinte o sol de AMARELO.",
        outlineEmoji: "☀️",
        correctHex: "#fde047",
        options: [
          { name: "Yellow", en: "Yellow", hex: "#fde047" },
          { name: "Blue", en: "Blue", hex: "#2563eb" },
          { name: "Red", en: "Red", hex: "#dc2626" },
          { name: "Green", en: "Green", hex: "#16a34a" },
        ],
      },
      {
        promptEn: "Paint the apple RED.",
        promptPt: "Pinte a maçã de VERMELHO.",
        outlineEmoji: "🍎",
        correctHex: "#dc2626",
        options: [
          { name: "Purple", en: "Purple", hex: "#7c3aed" },
          { name: "Red", en: "Red", hex: "#dc2626" },
          { name: "Orange", en: "Orange", hex: "#f97316" },
          { name: "Black", en: "Black", hex: "#111827" },
        ],
      },
      {
        promptEn: "Paint the tree GREEN.",
        promptPt: "Pinte a árvore de VERDE.",
        outlineEmoji: "🌳",
        correctHex: "#16a34a",
        options: [
          { name: "Green", en: "Green", hex: "#16a34a" },
          { name: "Yellow", en: "Yellow", hex: "#fde047" },
          { name: "Blue", en: "Blue", hex: "#2563eb" },
          { name: "Purple", en: "Purple", hex: "#7c3aed" },
        ],
      },
      {
        promptEn: "Paint the cloud WHITE.",
        promptPt: "Pinte a nuvem de BRANCA.",
        outlineEmoji: "☁️",
        correctHex: "#ffffff",
        options: [
          { name: "Black", en: "Black", hex: "#111827" },
          { name: "White", en: "White", hex: "#ffffff" },
          { name: "Orange", en: "Orange", hex: "#f97316" },
          { name: "Red", en: "Red", hex: "#dc2626" },
        ],
      },
    ],
  },

  // 🧠 Memory Game — 4 pares (8 cartas)
  MEMORY: {
    intro: "Vire as cartas de duas em duas. Encontre a palavra e o objeto da mesma cor.",
    pairs: [
      { id: "red", en: "Red", pt: "Vermelho", img: RED },
      { id: "blue", en: "Blue", pt: "Azul", img: BLUE },
      { id: "yellow", en: "Yellow", pt: "Amarelo", img: YELLOW },
      { id: "green", en: "Green", pt: "Verde", img: GREEN },
    ],
  },

  // 🏠 Quarto virtual — 8 cores escondidas
  VIRTUAL_ROOM: {
    intro: "Explore o quarto colorido da Lily. Toque em cada coisa quando encontrar!",
    img: roomImg,
    items: [
      { en: "Red apple", pt: "maçã vermelha", emoji: "🍎" },
      { en: "Blue ball", pt: "bola azul", emoji: "🔵" },
      { en: "Yellow duck", pt: "patinho amarelo", emoji: "🦆" },
      { en: "Green frog", pt: "sapo verde", emoji: "🐸" },
      { en: "Orange fish", pt: "peixe laranja", emoji: "🐠" },
      { en: "Purple flower", pt: "flor roxa", emoji: "🌸" },
      { en: "Black cat", pt: "gato preto", emoji: "🐈\u200d⬛" },
      { en: "White cloud", pt: "nuvem branca", emoji: "☁️" },
    ],
  },

  // 📖 My Color Book — livrinho página por página
  BOOK: {
    title: "My Color Book",
    intro: "Este é o SEU livrinho de cores! Passe página por página.",
    pages: [
      { en: "Red apple 🍎", pt: "Maçã vermelha", img: RED, badge: "Page 1" },
      { en: "Blue sky ☁️", pt: "Céu azul", img: BLUE, badge: "Page 2" },
      { en: "Yellow sun ☀️", pt: "Sol amarelo", img: YELLOW, badge: "Page 3" },
      { en: "Green tree 🌳", pt: "Árvore verde", img: GREEN, badge: "Page 4" },
      { en: "Orange fish 🐠", pt: "Peixe laranja", img: ORANGE, badge: "Page 5" },
      { en: "Purple flower 🌸", pt: "Flor roxa", img: PURPLE, badge: "Page 6" },
      { en: "Black cat 🐈\u200d⬛", pt: "Gato preto", img: BLACK, badge: "Page 7" },
      { en: "White cloud ☁️", pt: "Nuvem branca", img: WHITE, badge: "Page 8" },
    ],
  },
};

export default lesson;
