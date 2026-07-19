// Unit 6 — My Body and My Feelings 😊
// Partes do corpo + emoções. Projeto: My Happy Body Book.
// Módulos: 11 fixos + SONG (Head, Hands & Feet) + HUNTER (Feelings Match)
// + PACK (Build Buddy) + COMMANDS (Simon Says) + MEMORY + CULTURE
// + BOOK (My Happy Body Book) + VIRTUAL_ROOM (Missão Final).

import __asset_buddyAsset from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
const buddyAsset = __asset_buddyAsset.url;
import __asset_lilyImg from "@/assets/ingles-1ano/u1-a01/lily.png.asset.json";
const lilyImg = __asset_lilyImg.url;
import benAsset from "@/assets/ingles-1ano/u1-a02/ben.png.asset.json";
import __asset_teacherEmilyAsset from "@/assets/ingles-1ano/u1-a05/teacher-emily.png.asset.json";
const teacherEmilyAsset = __asset_teacherEmilyAsset.url;
import parkAsset from "@/assets/ingles-1ano/u1-a05/school.png"; // fallback cena externa
import type { LessonData } from "../types";

const BUDDY = buddyAsset;
const LILY = lilyImg;
const BEN = benAsset.url;
const EMILY = teacherEmilyAsset;
const PARK = parkAsset;

const lesson: LessonData = {
  slug: "u1-a06-body",
  meta: {
    unitLabel: "Unit 6 · Lesson 1 — My Body and My Feelings 😊",
    headerKicker: "My First English Adventure",
    coverKicker: "Lesson 6",
    coverTitle: "Meet Buddy — the Feeling Robot 🤖",
    coverSubtitle:
      "Lily e Ben encontram Buddy, um robô que perdeu peças do corpo e esqueceu como demonstrar emoções. Vamos ajudar ele em inglês!",
    storyTitle: "Buddy Learns About Feelings",
    vocabularyTitle: "My Body & Feelings Words",
    speakingTargets: [
      "I have two eyes.",
      "I have one nose.",
      "Touch your head.",
      "I am happy.",
      "I am sad.",
      "I am tired.",
      "How are you today?",
    ],
    listeningIntro: 'Ouça o comando e escolha o que fazer.',
    listeningQuestion: 'Buddy disse: "Touch your nose." O que você faz?',
    listeningOptions: ["Tocar o nariz 👃", "Tocar o pé 🦶", "Tocar a orelha 👂"],
    listeningCorrect: "Tocar o nariz 👃",
    listeningWrongHint: 'Escute de novo. "Touch your nose" = "toque seu nariz".',
    readingNarration:
      "Vamos ler juntos a apresentação do Buddy. Ele fala o nome, mostra o corpo e diz como está se sentindo.",
    grammarNarration:
      'Pra dizer o que a gente tem no corpo usamos "I have..." (eu tenho). Pra dizer como está a gente usa "I am..." (eu estou). Exemplos: I have two eyes. / I am happy.',
    finalProjectIntro:
      'Você ajudou o Buddy a conhecer o corpo e as emoções! Agora escreve seu nome e diga:',
    finalProjectPhrase: (name: string) =>
      `Hello! My name is ${name}. I have two eyes, two ears and I am happy today!`,
    finalProjectSectionTitle: "My Happy Body Book",
  },

  VOCAB: [
    { id: "head", en: "Head", pt: "Cabeça", img: BUDDY },
    { id: "eyes", en: "Eyes", pt: "Olhos", img: BUDDY },
    { id: "ears", en: "Ears", pt: "Orelhas", img: BUDDY },
    { id: "nose", en: "Nose", pt: "Nariz", img: BUDDY },
    { id: "mouth", en: "Mouth", pt: "Boca", img: BUDDY },
    { id: "hands", en: "Hands", pt: "Mãos", img: BUDDY },
    { id: "feet", en: "Feet", pt: "Pés", img: BUDDY },
    { id: "arms", en: "Arms", pt: "Braços", img: BUDDY },
    { id: "legs", en: "Legs", pt: "Pernas", img: BUDDY },
    { id: "happy", en: "Happy 😊", pt: "Feliz", img: LILY },
    { id: "sad", en: "Sad 😢", pt: "Triste", img: BUDDY },
    { id: "angry", en: "Angry 😡", pt: "Bravo(a)", img: LILY },
    { id: "tired", en: "Tired 😴", pt: "Cansado(a)", img: BEN },
    { id: "surprised", en: "Surprised 😲", pt: "Surpreso(a)", img: LILY },
    { id: "excited", en: "Excited ❤️", pt: "Animado(a)", img: BEN },
  ],

  STORY: [
    { img: PARK, en: "Lily and Ben are playing in the park.", pt: "Lily e Ben estão brincando no parque." },
    { img: BUDDY, en: 'They meet a robot named Buddy.', pt: 'Eles encontram um robô chamado Buddy.' },
    { img: BUDDY, en: '"Hello! I need your help!"', pt: '"Olá! Eu preciso da ajuda de vocês!"' },
    { img: LILY, en: '"Let\'s help Buddy!"', pt: '"Vamos ajudar o Buddy!"' },
    { img: BUDDY, en: 'Buddy is sad. 😢', pt: 'Buddy está triste. 😢' },
    { img: LILY, en: '"Are you sad?"', pt: '"Você está triste?"' },
    { img: BUDDY, en: '"Yes, I am."', pt: '"Sim, estou."' },
    { img: BEN, en: "Ben makes a funny joke.", pt: "Ben faz uma brincadeira engraçada." },
    { img: BUDDY, en: 'Buddy smiles. "Now I am happy!" 😊', pt: 'Buddy sorri. "Agora estou feliz!"' },
    { img: PARK, en: "They all play together in the park.", pt: "Todos brincam juntos no parque." },
  ],

  DIALOG: [
    { who: "Buddy", img: BUDDY, en: "Hello! I am Buddy.", pt: "Olá! Eu sou o Buddy." },
    { who: "Lily", img: LILY, en: "Hi Buddy! How are you?", pt: "Oi Buddy! Como você está?" },
    { who: "Buddy", img: BUDDY, en: "I am sad. 😢", pt: "Estou triste." },
    { who: "Ben", img: BEN, en: "Why are you sad?", pt: "Por que você está triste?" },
    { who: "Buddy", img: BUDDY, en: "I lost my eyes and my hands!", pt: "Perdi meus olhos e minhas mãos!" },
    { who: "Lily", img: LILY, en: "Don't worry! We can help.", pt: "Não se preocupe! A gente pode ajudar." },
    { who: "Buddy", img: BUDDY, en: "Thank you! Now I am happy! 😊", pt: "Obrigado! Agora estou feliz!" },
  ],

  READING: {
    title: "Hello! My name is Buddy.",
    img: BUDDY,
    parts: [
      { en: "Hello!", pt: "Olá!", highlight: ["Hello"] },
      { en: "My name is Buddy.", pt: "Meu nome é Buddy.", highlight: ["name"] },
      { en: "I have two eyes.", pt: "Eu tenho dois olhos.", highlight: ["two eyes"] },
      { en: "I have two ears.", pt: "Eu tenho duas orelhas.", highlight: ["two ears"] },
      { en: "I have one nose.", pt: "Eu tenho um nariz.", highlight: ["one nose"] },
      { en: "Today I am happy!", pt: "Hoje eu estou feliz!", highlight: ["happy"] },
    ],
  },

  WRITING: [
    {
      prompt: "I have two ______. (👀)",
      answer: "eyes",
      hint: "A gente enxerga com eles.",
      options: ["eyes", "feet", "nose"],
    },
    {
      prompt: "I have one ______. (👃)",
      answer: "nose",
      hint: "Serve pra cheirar.",
      options: ["nose", "hands", "ears"],
    },
    {
      prompt: "Touch your ______. (✋)",
      answer: "hands",
      hint: "A gente usa pra bater palma.",
      options: ["hands", "legs", "mouth"],
    },
    {
      prompt: "I am ______. (😊)",
      answer: "happy",
      hint: "Emoção de alegria.",
      options: ["happy", "sad", "tired"],
    },
    {
      prompt: "I am ______. (😴)",
      answer: "tired",
      hint: "Quando a gente quer dormir.",
      options: ["tired", "excited", "angry"],
    },
  ],

  QUIZ: [
    {
      q: "What is this? 👃",
      options: [
        { text: "Ear" },
        { text: "Nose", correct: true },
        { text: "Hand" },
      ],
    },
    {
      q: "How do you feel? 😊",
      options: [
        { text: "Happy", correct: true },
        { text: "Sad" },
        { text: "Angry" },
      ],
    },
    {
      q: "Touch your... ✋",
      options: [
        { text: "Hands", correct: true },
        { text: "Eyes" },
        { text: "Feet" },
      ],
    },
    {
      q: "Complete: I am ______. 😴",
      options: [
        { text: "Tired", correct: true },
        { text: "Happy" },
        { text: "Angry" },
      ],
    },
    {
      q: "How many eyes do you have?",
      options: [
        { text: "One" },
        { text: "Two", correct: true },
        { text: "Three" },
      ],
    },
  ],

  REAL_LIFE: [
    { situation: "🎂 Você ganhou um presente. Como se sente?", answer: "I am happy." },
    { situation: "😢 Seu brinquedo quebrou. Como se sente?", answer: "I am sad." },
    { situation: "🛏️ Você jogou o dia inteiro. Como se sente à noite?", answer: "I am tired." },
    { situation: "🎉 Amanhã é sua festa. Como se sente?", answer: "I am excited!" },
    { situation: "👋 Alguém te pergunta 'How are you?'. Responda.", answer: "I am fine, thank you!" },
  ],

  GRAMMAR: {
    focus: 'I have ___ / I am ___',
    why:
      'Pra falar do CORPO usamos "I have" (eu tenho): I have two eyes. Pra falar de EMOÇÃO usamos "I am" (eu estou): I am happy. Não misture os dois.',
    examples: [
      { en: "I have two hands.", pt: "Eu tenho duas mãos." },
      { en: "I have one mouth.", pt: "Eu tenho uma boca." },
      { en: "I am happy.", pt: "Estou feliz." },
      { en: "I am tired.", pt: "Estou cansado(a)." },
    ],
    errors: [
      {
        wrong: "I am two eyes.",
        right: "I have two eyes.",
        why: 'Pra falar de partes do corpo use "I have", não "I am".',
      },
      {
        wrong: "I have happy.",
        right: "I am happy.",
        why: 'Emoções vão com "I am", não com "I have".',
      },
    ],
  },

  // 🎵 Head, Hands & Feet
  SONG: {
    title: "Head, Hands and Feet",
    hookPt: "A música do corpo — faça os gestos junto!",
    verses: [
      { en: "Head, shoulders,", pt: "Cabeça, ombros,", emoji: "👤" },
      { en: "Hands and feet,", pt: "Mãos e pés,", emoji: "✋" },
      { en: "Smile and laugh,", pt: "Sorria e ria,", emoji: "😄" },
      { en: "Life is sweet!", pt: "A vida é doce!", emoji: "🍭" },
      { en: "Happy, happy,", pt: "Feliz, feliz,", emoji: "😊" },
      { en: "Clap your hands!", pt: "Bata palma!", emoji: "👏" },
      { en: "Jump together,", pt: "Pule junto,", emoji: "🤸" },
      { en: "With your friends!", pt: "Com seus amigos!", emoji: "👫" },
    ],
  },

  // 🎮 Mini Game 2 — Feelings Match (via HUNTER: situação → emoção certa)
  HUNTER: {
    intro: "Olhe a situação. Qual é a emoção certa? Toque no rosto!",
    rounds: [
      {
        promptEn: "🎂 Birthday party! How does she feel?",
        promptPt: "🎂 Festa de aniversário! Como ela se sente?",
        targetLabel: "Happy",
        objects: [
          { id: "happy", label: "Happy 😊", img: "", isTarget: true },
          { id: "sad", label: "Sad 😢", img: "", isTarget: false },
          { id: "angry", label: "Angry 😡", img: "", isTarget: false },
        ],
      },
      {
        promptEn: "💔 Broken toy. How does he feel?",
        promptPt: "💔 Brinquedo quebrado. Como ele se sente?",
        targetLabel: "Sad",
        objects: [
          { id: "happy", label: "Happy 😊", img: "", isTarget: false },
          { id: "sad", label: "Sad 😢", img: "", isTarget: true },
          { id: "excited", label: "Excited ❤️", img: "", isTarget: false },
        ],
      },
      {
        promptEn: "🛏️ Long day playing. How does she feel?",
        promptPt: "🛏️ Um dia longo de brincar. Como ela se sente?",
        targetLabel: "Tired",
        objects: [
          { id: "tired", label: "Tired 😴", img: "", isTarget: true },
          { id: "angry", label: "Angry 😡", img: "", isTarget: false },
          { id: "surprised", label: "Surprised 😲", img: "", isTarget: false },
        ],
      },
      {
        promptEn: "🎁 A surprise gift! How does he feel?",
        promptPt: "🎁 Um presente surpresa! Como ele se sente?",
        targetLabel: "Surprised",
        objects: [
          { id: "sad", label: "Sad 😢", img: "", isTarget: false },
          { id: "surprised", label: "Surprised 😲", img: "", isTarget: true },
          { id: "tired", label: "Tired 😴", img: "", isTarget: false },
        ],
      },
      {
        promptEn: "🎉 Tomorrow is the school trip! How does she feel?",
        promptPt: "🎉 Amanhã é o passeio da escola! Como ela se sente?",
        targetLabel: "Excited",
        objects: [
          { id: "excited", label: "Excited ❤️", img: "", isTarget: true },
          { id: "tired", label: "Tired 😴", img: "", isTarget: false },
          { id: "angry", label: "Angry 😡", img: "", isTarget: false },
        ],
      },
      {
        promptEn: "😤 Someone broke the line. How does he feel?",
        promptPt: "😤 Alguém furou a fila. Como ele se sente?",
        targetLabel: "Angry",
        objects: [
          { id: "happy", label: "Happy 😊", img: "", isTarget: false },
          { id: "angry", label: "Angry 😡", img: "", isTarget: true },
          { id: "surprised", label: "Surprised 😲", img: "", isTarget: false },
        ],
      },
    ],
  },

  // 🎮 Mini Game 1 — Build Buddy (PACK: só peças do corpo entram)
  PACK: {
    intro: "Buddy perdeu as peças! Toque só nas partes do corpo pra montar ele. Coisas que não são do corpo ficam de fora.",
    backpackImg: BUDDY,
    items: [
      { id: "head", en: "Head", pt: "Cabeça", emoji: "👤", belongs: true },
      { id: "eyes", en: "Eyes", pt: "Olhos", emoji: "👀", belongs: true },
      { id: "ears", en: "Ears", pt: "Orelhas", emoji: "👂", belongs: true },
      { id: "nose", en: "Nose", pt: "Nariz", emoji: "👃", belongs: true },
      { id: "mouth", en: "Mouth", pt: "Boca", emoji: "👄", belongs: true },
      { id: "hands", en: "Hands", pt: "Mãos", emoji: "✋", belongs: true },
      { id: "feet", en: "Feet", pt: "Pés", emoji: "🦶", belongs: true },
      { id: "pizza", en: "Pizza", pt: "Pizza", emoji: "🍕", belongs: false },
      { id: "car", en: "Car", pt: "Carro", emoji: "🚗", belongs: false },
      { id: "book", en: "Book", pt: "Livro", emoji: "📚", belongs: false },
    ],
  },

  // 🎮 Mini Game 3 — Simon Says (COMMANDS)
  COMMANDS: {
    intro: 'Buddy diz "Simon says..." — toque na ação certa!',
    rounds: [
      {
        promptEn: "Touch your nose.",
        promptPt: "Toque seu nariz.",
        actions: [
          { id: "nose", en: "Touch nose", pt: "Tocar nariz", emoji: "👃", isTarget: true },
          { id: "ears", en: "Touch ears", pt: "Tocar orelhas", emoji: "👂" },
          { id: "feet", en: "Touch feet", pt: "Tocar pés", emoji: "🦶" },
        ],
      },
      {
        promptEn: "Touch your head.",
        promptPt: "Toque sua cabeça.",
        actions: [
          { id: "hands", en: "Touch hands", pt: "Tocar mãos", emoji: "✋" },
          { id: "head", en: "Touch head", pt: "Tocar cabeça", emoji: "👤", isTarget: true },
          { id: "mouth", en: "Touch mouth", pt: "Tocar boca", emoji: "👄" },
        ],
      },
      {
        promptEn: "Raise your hands.",
        promptPt: "Levante as mãos.",
        actions: [
          { id: "raise", en: "Raise hands", pt: "Levantar mãos", emoji: "🙌", isTarget: true },
          { id: "clap", en: "Clap hands", pt: "Bater palma", emoji: "👏" },
          { id: "sit", en: "Sit down", pt: "Sentar", emoji: "🪑" },
        ],
      },
      {
        promptEn: "Stamp your feet.",
        promptPt: "Bata os pés.",
        actions: [
          { id: "jump", en: "Jump", pt: "Pular", emoji: "🤸" },
          { id: "stamp", en: "Stamp feet", pt: "Bater os pés", emoji: "🦶", isTarget: true },
          { id: "smile", en: "Smile", pt: "Sorrir", emoji: "😊" },
        ],
      },
      {
        promptEn: "Show me your mouth.",
        promptPt: "Mostre sua boca.",
        actions: [
          { id: "eyes", en: "Show eyes", pt: "Mostrar olhos", emoji: "👀" },
          { id: "mouth", en: "Show mouth", pt: "Mostrar boca", emoji: "👄", isTarget: true },
          { id: "nose", en: "Show nose", pt: "Mostrar nariz", emoji: "👃" },
        ],
      },
      {
        promptEn: "Point to your ears.",
        promptPt: "Aponte para suas orelhas.",
        actions: [
          { id: "ears", en: "Point ears", pt: "Apontar orelhas", emoji: "👂", isTarget: true },
          { id: "head", en: "Point head", pt: "Apontar cabeça", emoji: "👤" },
          { id: "hands", en: "Point hands", pt: "Apontar mãos", emoji: "✋" },
        ],
      },
      {
        promptEn: "Clap your hands.",
        promptPt: "Bata palma.",
        actions: [
          { id: "clap", en: "Clap hands", pt: "Bater palma", emoji: "👏", isTarget: true },
          { id: "stamp", en: "Stamp feet", pt: "Bater os pés", emoji: "🦶" },
          { id: "raise", en: "Raise hands", pt: "Levantar mãos", emoji: "🙌" },
        ],
      },
    ],
  },

  // 🧠 Memory — pares palavra ↔ imagem do corpo/emoção
  MEMORY: {
    intro: "Vire as cartas. Encontre a palavra e o rosto que combinam!",
    pairs: [
      { id: "happy", en: "Happy 😊", pt: "Feliz", img: LILY },
      { id: "sad", en: "Sad 😢", pt: "Triste", img: BUDDY },
      { id: "tired", en: "Tired 😴", pt: "Cansado", img: BEN },
      { id: "excited", en: "Excited ❤️", pt: "Animada", img: EMILY },
    ],
  },

  // 🌍 Curiosidade Cultural
  CULTURE: {
    title: "Head, Shoulders, Knees and Toes 🎵",
    emoji: "🇬🇧",
    paragraphs: [
      {
        en: "In many English-speaking countries, teachers use songs with movements to teach body parts.",
        pt: "Em muitos países de língua inglesa, professores usam músicas com movimentos pra ensinar as partes do corpo.",
      },
      {
        en: '"Head, Shoulders, Knees and Toes" is one of the most famous.',
        pt: '"Head, Shoulders, Knees and Toes" é uma das mais famosas.',
      },
      {
        pt: "Cantar e fazer gestos ao mesmo tempo ajuda o cérebro a lembrar as palavras novas — por isso a gente aprende brincando!",
      },
    ],
  },

  // 🧩 Missão Final — Buddy pronto pra festa
  VIRTUAL_ROOM: {
    intro: "Buddy está pronto pra uma grande festa! Toque em cada parte do corpo e ajude ele a se sentir feliz.",
    img: BUDDY,
    items: [
      { en: "Touch the head", pt: "Toque a cabeça", emoji: "👤" },
      { en: "Touch the eyes", pt: "Toque os olhos", emoji: "👀" },
      { en: "Touch the ears", pt: "Toque as orelhas", emoji: "👂" },
      { en: "Touch the nose", pt: "Toque o nariz", emoji: "👃" },
      { en: "Touch the mouth", pt: "Toque a boca", emoji: "👄" },
      { en: "Touch the hands", pt: "Toque as mãos", emoji: "✋" },
      { en: "Touch the feet", pt: "Toque os pés", emoji: "🦶" },
      { en: "Make Buddy happy!", pt: "Deixe o Buddy feliz!", emoji: "😊" },
    ],
  },

  // 📒 Projeto — My Happy Body Book
  BOOK: {
    title: "My Happy Body Book",
    intro: "Este é o SEU livro do corpo. Cada página guarda uma parte especial de você!",
    pages: [
      { en: "My Head 👤", pt: "Minha cabeça", img: BUDDY, badge: "Page 1" },
      { en: "My Eyes 👀", pt: "Meus olhos", img: BUDDY, badge: "Page 2" },
      { en: "My Ears 👂", pt: "Minhas orelhas", img: BUDDY, badge: "Page 3" },
      { en: "My Nose 👃", pt: "Meu nariz", img: BUDDY, badge: "Page 4" },
      { en: "My Mouth 👄", pt: "Minha boca", img: BUDDY, badge: "Page 5" },
      { en: "My Hands ✋", pt: "Minhas mãos", img: LILY, badge: "Page 6" },
      { en: "My Feet 🦶", pt: "Meus pés", img: BEN, badge: "Page 7" },
      { en: "My Feelings 😊", pt: "Meus sentimentos", img: LILY, badge: "Page 8" },
    ],
  },
};

export default lesson;
