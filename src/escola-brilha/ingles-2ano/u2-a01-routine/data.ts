// Ingles 2º Ano — Unit 1 "Welcome Back! My Daily Routine" ☀️
// Rotina diária: wake up, brush teeth, eat breakfast, go to school, come home, go to bed.

import __asset_lilyImg from "@/assets/ingles-1ano/u1-a01/lily.png.asset.json";
const lilyImg = __asset_lilyImg.url;
import benAsset from "@/assets/ingles-1ano/u1-a02/ben.png.asset.json";
import __asset_teacherImg from "@/assets/ingles-1ano/u1-a01/teacher.png.asset.json";
const teacherImg = __asset_teacherImg.url;
import __asset_schoolImg from "@/assets/ingles-1ano/u1-a01/school.png.asset.json";
const schoolImg = __asset_schoolImg.url;
import __asset_morningImg from "@/assets/ingles-1ano/u1-a01/good-morning.png.asset.json";
const morningImg = __asset_morningImg.url;
import type { LessonData } from "../../ingles-1ano/types";

const LILY = lilyImg;
const BEN = benAsset.url;
const TEACHER = teacherImg;
const SCHOOL = schoolImg;
const MORNING = morningImg;

const lesson: LessonData = {
  slug: "u2-a01-routine",
  meta: {
    unitLabel: "Unit 1 · Lesson 1 — Welcome Back! My Daily Routine ☀️",
    headerKicker: "My English Adventure — 2nd Grade",
    coverKicker: "Lesson 1",
    coverTitle: "My Daily Routine ☀️",
    coverSubtitle:
      "Lily e Ben voltaram das férias! Vamos aprender a contar tudo o que a gente faz do café da manhã até a hora de dormir — em inglês.",
    storyTitle: "Lily's Day",
    vocabularyTitle: "Daily Routine Words",
    speakingTargets: [
      "I wake up early.",
      "I brush my teeth.",
      "I eat breakfast.",
      "I go to school.",
      "I come home.",
      "I go to bed.",
    ],
    listeningIntro: "Ouça a Lily contando o dia dela.",
    listeningQuestion: 'Lily disse: "I wake up at 7." O que ela faz às 7?',
    listeningOptions: ["Vai dormir 😴", "Acorda ⏰", "Come 🍳"],
    listeningCorrect: "Acorda ⏰",
    listeningWrongHint: '"Wake up" = acordar. Escute de novo.',
    readingNarration:
      'Vamos ler a rotina da Lily. Repare como cada frase começa com "I" (eu) e depois vem um verbo de ação: wake up, brush, eat, go...',
    grammarNarration:
      'No 2º ano a gente começa a montar frases inteiras. Fórmula da rotina: I + ação + o quê. Exemplo: I brush my teeth. I = eu, brush = escovo, my teeth = meus dentes. Sempre nessa ordem!',
    finalProjectIntro:
      "Vamos escrever seu próprio livrinho da rotina. Escreve seu nome e conta o que você faz de manhã:",
    finalProjectPhrase: (name: string) =>
      `Hello! My name is ${name}. I wake up early. I brush my teeth. I eat breakfast. Then I go to school!`,
    finalProjectSectionTitle: "My Daily Routine Book",
  },

  VOCAB: [
    { id: "wakeup", en: "Wake up ⏰", pt: "Acordar", img: MORNING },
    { id: "getdressed", en: "Get dressed 👕", pt: "Se vestir", img: LILY },
    { id: "brush", en: "Brush my teeth 🪥", pt: "Escovar os dentes", img: LILY },
    { id: "wash", en: "Wash my face 💧", pt: "Lavar o rosto", img: BEN },
    { id: "breakfast", en: "Eat breakfast 🍳", pt: "Tomar café", img: MORNING },
    { id: "goschool", en: "Go to school 🎒", pt: "Ir à escola", img: SCHOOL },
    { id: "comehome", en: "Come home 🏠", pt: "Voltar pra casa", img: BEN },
    { id: "gobed", en: "Go to bed 🛏️", pt: "Ir dormir", img: LILY },
  ],

  STORY: [
    { img: MORNING, en: "It's morning. Lily wakes up early.", pt: "É de manhã. Lily acorda cedo." },
    { img: LILY, en: "She gets dressed for school.", pt: "Ela se veste para a escola." },
    { img: LILY, en: "She brushes her teeth and washes her face.", pt: "Ela escova os dentes e lava o rosto." },
    { img: MORNING, en: "She eats breakfast with her family.", pt: "Ela toma café com a família." },
    { img: SCHOOL, en: "Then she goes to school.", pt: "Depois ela vai para a escola." },
    { img: TEACHER, en: "At school, she learns and plays with friends.", pt: "Na escola, ela aprende e brinca com os amigos." },
    { img: BEN, en: "Ben comes home in the afternoon.", pt: "Ben volta pra casa à tarde." },
    { img: LILY, en: "At night, Lily goes to bed. Good night!", pt: "À noite, Lily vai dormir. Boa noite!" },
  ],

  DIALOG: [
    { who: "Ben", img: BEN, en: "Hi Lily! What time do you wake up?", pt: "Oi Lily! Que horas você acorda?" },
    { who: "Lily", img: LILY, en: "I wake up at seven o'clock.", pt: "Eu acordo às sete horas." },
    { who: "Ben", img: BEN, en: "And what do you do next?", pt: "E o que você faz depois?" },
    { who: "Lily", img: LILY, en: "I brush my teeth and eat breakfast.", pt: "Eu escovo os dentes e tomo café." },
    { who: "Ben", img: BEN, en: "Do you go to school?", pt: "Você vai pra escola?" },
    { who: "Lily", img: LILY, en: "Yes! I go to school at eight.", pt: "Sim! Eu vou pra escola às oito." },
    { who: "Ben", img: BEN, en: "Cool! I go to school too.", pt: "Legal! Eu também vou pra escola." },
  ],

  READING: {
    title: "My Day",
    img: MORNING,
    parts: [
      { en: "I wake up early.", pt: "Eu acordo cedo.", highlight: ["wake up"] },
      { en: "I brush my teeth.", pt: "Eu escovo os dentes.", highlight: ["brush"] },
      { en: "I eat breakfast.", pt: "Eu tomo café.", highlight: ["eat"] },
      { en: "I go to school.", pt: "Eu vou pra escola.", highlight: ["go to school"] },
      { en: "I come home.", pt: "Eu volto pra casa.", highlight: ["come home"] },
      { en: "I go to bed.", pt: "Eu vou dormir.", highlight: ["go to bed"] },
    ],
  },

  WRITING: [
    {
      prompt: "I ______ up early. (⏰)",
      answer: "wake",
      hint: "Ação de sair do sono.",
      options: ["wake", "eat", "go"],
    },
    {
      prompt: "I brush my ______. (🪥)",
      answer: "teeth",
      hint: "A gente escova depois de comer.",
      options: ["teeth", "hands", "hair"],
    },
    {
      prompt: "I eat ______. (🍳)",
      answer: "breakfast",
      hint: "Refeição da manhã.",
      options: ["breakfast", "bed", "school"],
    },
    {
      prompt: "I ______ to school. (🎒)",
      answer: "go",
      hint: "Verbo de movimento.",
      options: ["go", "wash", "come"],
    },
    {
      prompt: "At night I go to ______. (🛏️)",
      answer: "bed",
      hint: "Lugar de dormir.",
      options: ["bed", "school", "home"],
    },
  ],

  QUIZ: [
    {
      q: "O que é 'wake up'?",
      options: [{ text: "Acordar ⏰", correct: true }, { text: "Dormir 😴" }, { text: "Comer 🍳" }],
    },
    {
      q: "Como digo 'escovar os dentes'?",
      options: [
        { text: "Wash my face" },
        { text: "Brush my teeth", correct: true },
        { text: "Go to bed" },
      ],
    },
    {
      q: "Complete: I ___ breakfast. 🍳",
      options: [{ text: "go" }, { text: "eat", correct: true }, { text: "wake" }],
    },
    {
      q: "O que Lily faz depois da escola?",
      options: [
        { text: "She wakes up" },
        { text: "She comes home", correct: true },
        { text: "She brushes her teeth" },
      ],
    },
    {
      q: "Qual é a ordem certa da manhã?",
      options: [
        { text: "Wake up → Brush teeth → Eat breakfast → Go to school", correct: true },
        { text: "Go to bed → Eat → Wake up → School" },
        { text: "School → Wake up → Breakfast → Home" },
      ],
    },
  ],

  REAL_LIFE: [
    { situation: "⏰ Alguém te pergunta: 'What time do you wake up?'", answer: "I wake up at seven." },
    { situation: "🪥 Sua mãe pergunta se você já escovou os dentes.", answer: "Yes, I brush my teeth." },
    { situation: "🎒 A professora quer saber como você vem pra escola.", answer: "I go to school by bus." },
    { situation: "🍳 Café da manhã — o que você diz que come?", answer: "I eat bread and milk." },
    { situation: "🛏️ Hora de dormir. Como você se despede?", answer: "Good night! I go to bed." },
  ],

  GRAMMAR: {
    focus: "I + verbo de ação + complemento",
    why:
      'No 2º ano montamos frases completas. Toda frase da rotina começa com "I" (eu), depois vem o verbo (wake up, brush, eat, go) e por último o que ou onde. Nunca esqueça a ordem: I + ação + o quê.',
    examples: [
      { en: "I wake up early.", pt: "Eu acordo cedo." },
      { en: "I brush my teeth.", pt: "Eu escovo meus dentes." },
      { en: "I go to school.", pt: "Eu vou pra escola." },
      { en: "I come home.", pt: "Eu volto pra casa." },
    ],
    errors: [
      {
        wrong: "Wake up I early.",
        right: "I wake up early.",
        why: 'A frase sempre começa com quem faz — "I" vem primeiro.',
      },
      {
        wrong: "I brush teeth my.",
        right: "I brush my teeth.",
        why: '"My" (meu) vem antes do que é seu: my teeth, my face, my hair.',
      },
    ],
  },

  // 🎵 Música da rotina
  SONG: {
    title: "This Is My Day",
    hookPt: "Cante e faça os gestos da rotina!",
    verses: [
      { en: "I wake up, wake up,", pt: "Eu acordo, acordo,", emoji: "⏰" },
      { en: "Early in the morning,", pt: "Cedinho de manhã,", emoji: "🌅" },
      { en: "I brush my teeth,", pt: "Escovo meus dentes,", emoji: "🪥" },
      { en: "And wash my face!", pt: "E lavo o rosto!", emoji: "💧" },
      { en: "I eat, I eat,", pt: "Eu como, eu como,", emoji: "🍳" },
      { en: "A yummy breakfast,", pt: "Um café gostoso,", emoji: "🥞" },
      { en: "Then off to school,", pt: "Depois pra escola,", emoji: "🎒" },
      { en: "With all my friends!", pt: "Com meus amigos!", emoji: "👫" },
    ],
  },

  // 🎮 Mini Game 1 — Ordem certa da rotina (HUNTER: escolher o próximo passo)
  HUNTER: {
    intro: "Qual é o PRÓXIMO passo da rotina? Toque na resposta certa!",
    rounds: [
      {
        promptEn: "First I wake up. What's next?",
        promptPt: "Primeiro eu acordo. O que vem depois?",
        targetLabel: "Brush my teeth",
        objects: [
          { id: "brush", label: "Brush my teeth 🪥", img: "", isTarget: true },
          { id: "bed", label: "Go to bed 🛏️", img: "" },
          { id: "home", label: "Come home 🏠", img: "" },
        ],
      },
      {
        promptEn: "After I brush my teeth, I...",
        promptPt: "Depois de escovar os dentes, eu...",
        targetLabel: "Eat breakfast",
        objects: [
          { id: "bed", label: "Go to bed 🛏️", img: "" },
          { id: "breakfast", label: "Eat breakfast 🍳", img: "", isTarget: true },
          { id: "school", label: "Go to school 🎒", img: "" },
        ],
      },
      {
        promptEn: "After breakfast, I...",
        promptPt: "Depois do café da manhã, eu...",
        targetLabel: "Go to school",
        objects: [
          { id: "school", label: "Go to school 🎒", img: "", isTarget: true },
          { id: "bed", label: "Go to bed 🛏️", img: "" },
          { id: "wake", label: "Wake up ⏰", img: "" },
        ],
      },
      {
        promptEn: "School ends. Then I...",
        promptPt: "A escola acaba. Depois eu...",
        targetLabel: "Come home",
        objects: [
          { id: "wake", label: "Wake up ⏰", img: "" },
          { id: "home", label: "Come home 🏠", img: "", isTarget: true },
          { id: "brush", label: "Brush my teeth 🪥", img: "" },
        ],
      },
      {
        promptEn: "It's night. Time to...",
        promptPt: "É noite. Hora de...",
        targetLabel: "Go to bed",
        objects: [
          { id: "breakfast", label: "Eat breakfast 🍳", img: "" },
          { id: "school", label: "Go to school 🎒", img: "" },
          { id: "bed", label: "Go to bed 🛏️", img: "", isTarget: true },
        ],
      },
    ],
  },

  // 🎮 Mini Game 2 — Mochila da rotina (PACK)
  PACK: {
    intro: "Você vai pra escola. Toque só nos itens que você usa na rotina da manhã!",
    backpackImg: SCHOOL,
    items: [
      { id: "toothbrush", en: "Toothbrush", pt: "Escova de dente", emoji: "🪥", belongs: true },
      { id: "soap", en: "Soap", pt: "Sabonete", emoji: "🧼", belongs: true },
      { id: "clothes", en: "Clothes", pt: "Roupa", emoji: "👕", belongs: true },
      { id: "backpack", en: "Backpack", pt: "Mochila", emoji: "🎒", belongs: true },
      { id: "breakfast", en: "Breakfast", pt: "Café da manhã", emoji: "🥞", belongs: true },
      { id: "pillow", en: "Pillow", pt: "Travesseiro", emoji: "🛏️", belongs: false },
      { id: "tv", en: "TV", pt: "TV", emoji: "📺", belongs: false },
      { id: "cake", en: "Cake", pt: "Bolo", emoji: "🎂", belongs: false },
    ],
  },

  // 🎮 Mini Game 3 — Simon Says da rotina (COMMANDS)
  COMMANDS: {
    intro: "Ouça o comando e mostre a ação certa!",
    rounds: [
      {
        promptEn: "Show me: wake up!",
        promptPt: "Mostre: acordar!",
        actions: [
          { id: "wake", en: "Wake up", pt: "Acordar", emoji: "⏰", isTarget: true },
          { id: "bed", en: "Go to bed", pt: "Dormir", emoji: "🛏️" },
          { id: "eat", en: "Eat", pt: "Comer", emoji: "🍳" },
        ],
      },
      {
        promptEn: "Show me: brush my teeth!",
        promptPt: "Mostre: escovar os dentes!",
        actions: [
          { id: "wash", en: "Wash face", pt: "Lavar rosto", emoji: "💧" },
          { id: "brush", en: "Brush teeth", pt: "Escovar dentes", emoji: "🪥", isTarget: true },
          { id: "dress", en: "Get dressed", pt: "Se vestir", emoji: "👕" },
        ],
      },
      {
        promptEn: "Show me: eat breakfast!",
        promptPt: "Mostre: tomar café!",
        actions: [
          { id: "school", en: "Go to school", pt: "Ir à escola", emoji: "🎒" },
          { id: "breakfast", en: "Eat breakfast", pt: "Café", emoji: "🥞", isTarget: true },
          { id: "bed", en: "Go to bed", pt: "Dormir", emoji: "🛏️" },
        ],
      },
      {
        promptEn: "Show me: go to school!",
        promptPt: "Mostre: ir pra escola!",
        actions: [
          { id: "school", en: "Go to school", pt: "Escola", emoji: "🎒", isTarget: true },
          { id: "home", en: "Come home", pt: "Casa", emoji: "🏠" },
          { id: "wake", en: "Wake up", pt: "Acordar", emoji: "⏰" },
        ],
      },
      {
        promptEn: "Show me: go to bed!",
        promptPt: "Mostre: ir dormir!",
        actions: [
          { id: "bed", en: "Go to bed", pt: "Dormir", emoji: "🛏️", isTarget: true },
          { id: "eat", en: "Eat", pt: "Comer", emoji: "🍳" },
          { id: "brush", en: "Brush teeth", pt: "Escovar", emoji: "🪥" },
        ],
      },
    ],
  },

  // 🧠 Memory — ação ↔ imagem/emoji
  MEMORY: {
    intro: "Ache os pares: a ação em inglês e a imagem.",
    pairs: [
      { id: "wake", en: "Wake up ⏰", pt: "Acordar", img: MORNING },
      { id: "school", en: "Go to school 🎒", pt: "Ir à escola", img: SCHOOL },
      { id: "home", en: "Come home 🏠", pt: "Voltar pra casa", img: BEN },
      { id: "bed", en: "Go to bed 🛏️", pt: "Dormir", img: LILY },
    ],
  },

  // 🌍 Curiosidade
  CULTURE: {
    title: "Breakfast Around the World 🌍",
    emoji: "🥞",
    paragraphs: [
      {
        en: "In the USA and UK, kids often eat cereal, toast or pancakes for breakfast.",
        pt: "Nos EUA e Reino Unido, as crianças costumam comer cereal, torrada ou panqueca no café.",
      },
      {
        en: "In Brazil, we love bread, cheese, fruits and milk.",
        pt: "No Brasil, a gente adora pão, queijo, frutas e leite.",
      },
      {
        pt: "Diferente, né? Mas todo mundo precisa de café da manhã pra ter energia! 💪",
      },
    ],
  },

  // 📖 Livrinho — My Daily Routine Book
  BOOK: {
    title: "My Daily Routine Book",
    intro: "Uma página pra cada momento do dia. Aperte 'Próxima' pra virar!",
    pages: [
      { en: "In the morning, I wake up.", pt: "De manhã, eu acordo.", img: MORNING, badge: "☀️" },
      { en: "I brush my teeth and wash my face.", pt: "Eu escovo os dentes e lavo o rosto.", img: LILY, badge: "🪥" },
      { en: "I eat a yummy breakfast.", pt: "Eu tomo um café gostoso.", img: MORNING, badge: "🍳" },
      { en: "I go to school with my friends.", pt: "Eu vou pra escola com meus amigos.", img: SCHOOL, badge: "🎒" },
      { en: "I come home in the afternoon.", pt: "Eu volto pra casa à tarde.", img: BEN, badge: "🏠" },
      { en: "At night, I go to bed. Good night!", pt: "À noite, eu vou dormir. Boa noite!", img: LILY, badge: "🛏️" },
    ],
  },

  // 🧩 Missão Final — dia inteiro da Lily
  VIRTUAL_ROOM: {
    intro: "É o dia da Lily! Toque em cada momento na ordem certa da manhã até a noite.",
    img: MORNING,
    items: [
      { en: "Wake up", pt: "Acordar", emoji: "⏰" },
      { en: "Brush teeth", pt: "Escovar dentes", emoji: "🪥" },
      { en: "Eat breakfast", pt: "Café da manhã", emoji: "🍳" },
      { en: "Go to school", pt: "Escola", emoji: "🎒" },
      { en: "Come home", pt: "Voltar pra casa", emoji: "🏠" },
      { en: "Go to bed", pt: "Dormir", emoji: "🛏️" },
    ],
  },
};

export default lesson;
