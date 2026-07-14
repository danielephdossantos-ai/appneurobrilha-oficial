// Ingles 2º Ano — Unit 5 "My Community 🏘️"
// Lugares do bairro, profissões, "Where is...?", "It's next to..."

import lilyImg from "@/assets/ingles-1ano/u1-a01/lily.png";
import benAsset from "@/assets/ingles-1ano/u1-a02/ben.png.asset.json";
import schoolImg from "@/assets/ingles-1ano/u1-a01/school.png";
import teacherImg from "@/assets/ingles-1ano/u1-a01/teacher.png";
import type { LessonData } from "../../ingles-1ano/types";

const LILY = lilyImg;
const BEN = benAsset.url;
const SCHOOL = schoolImg;
const TEACHER = teacherImg;

const lesson: LessonData = {
  slug: "u2-a05-community",
  meta: {
    unitLabel: "Unit 5 · Lesson 1 — My Community 🏘️",
    headerKicker: "My English Adventure — 2nd Grade",
    coverKicker: "Lesson 5",
    coverTitle: "My Community 🏘️",
    coverSubtitle:
      "Bairro, lojas e profissões em inglês. Vamos aprender pra onde ir e quem trabalha lá!",
    storyTitle: "A Walk in the Neighborhood",
    vocabularyTitle: "Places & Jobs",
    speakingTargets: [
      "Where is the school?",
      "The school is next to the park.",
      "I go to the supermarket.",
      "He is a doctor.",
      "She is a teacher.",
      "Thank you!",
    ],
    listeningIntro: "Escute a Lily andando pelo bairro.",
    listeningQuestion: 'Lily disse: "The school is next to the park." Onde fica a escola?',
    listeningOptions: ["Ao lado do parque 🌳", "Dentro do hospital 🏥", "Longe da cidade"],
    listeningCorrect: "Ao lado do parque 🌳",
    listeningWrongHint: '"Next to" = ao lado de.',
    readingNarration:
      'Lugares: school, park, hospital, supermarket, bakery. Profissões: teacher, doctor, baker, police officer.',
    grammarNarration:
      'Perguntar onde: "Where is the ___?" Responder posição: "It\'s next to ___" (ao lado), "in front of" (na frente), "behind" (atrás).',
    finalProjectIntro: "Descreva o seu bairro:",
    finalProjectPhrase: (name: string) =>
      `Hi! My name is ${name}. In my neighborhood there is a school, a park and a bakery. My mom is a teacher. I love my community!`,
    finalProjectSectionTitle: "My Neighborhood Book",
  },

  VOCAB: [
    { id: "school", en: "School 🏫", pt: "Escola", img: SCHOOL },
    { id: "park", en: "Park 🌳", pt: "Parque", img: SCHOOL },
    { id: "hospital", en: "Hospital 🏥", pt: "Hospital", img: SCHOOL },
    { id: "market", en: "Supermarket 🛒", pt: "Mercado", img: SCHOOL },
    { id: "bakery", en: "Bakery 🥐", pt: "Padaria", img: SCHOOL },
    { id: "teacher", en: "Teacher 👩‍🏫", pt: "Professor(a)", img: TEACHER },
    { id: "doctor", en: "Doctor 👨‍⚕️", pt: "Médico(a)", img: BEN },
    { id: "baker", en: "Baker 👨‍🍳", pt: "Padeiro(a)", img: LILY },
  ],

  STORY: [
    { img: SCHOOL, en: "This is Lily's neighborhood.", pt: "Este é o bairro da Lily." },
    { img: SCHOOL, en: "The school is next to the park.", pt: "A escola fica ao lado do parque." },
    { img: TEACHER, en: "Miss Emily is a teacher there.", pt: "A senhora Emily é professora lá." },
    { img: SCHOOL, en: "The hospital is in front of the supermarket.", pt: "O hospital fica na frente do mercado." },
    { img: BEN, en: "Ben's dad is a doctor.", pt: "O pai do Ben é médico." },
    { img: LILY, en: "Lily buys bread at the bakery.", pt: "Lily compra pão na padaria." },
    { img: SCHOOL, en: "The bakery is behind her house.", pt: "A padaria fica atrás da casa dela." },
    { img: SCHOOL, en: "Lily loves her community!", pt: "Lily ama seu bairro!" },
  ],

  DIALOG: [
    { who: "Ben", img: BEN, en: "Where is the park?", pt: "Onde é o parque?" },
    { who: "Lily", img: LILY, en: "It's next to the school.", pt: "É ao lado da escola." },
    { who: "Ben", img: BEN, en: "And the hospital?", pt: "E o hospital?" },
    { who: "Lily", img: LILY, en: "In front of the supermarket.", pt: "Na frente do mercado." },
    { who: "Ben", img: BEN, en: "Who works there?", pt: "Quem trabalha lá?" },
    { who: "Lily", img: LILY, en: "My uncle. He is a doctor.", pt: "Meu tio. Ele é médico." },
    { who: "Ben", img: BEN, en: "Cool! Thanks!", pt: "Legal! Valeu!" },
  ],

  READING: {
    title: "My Neighborhood",
    img: SCHOOL,
    parts: [
      { en: "This is my school.", pt: "Esta é minha escola.", highlight: ["school"] },
      { en: "The park is next to the school.", pt: "O parque fica ao lado da escola.", highlight: ["next to"] },
      { en: "My mom is a teacher.", pt: "Minha mãe é professora.", highlight: ["teacher"] },
      { en: "The hospital is near my house.", pt: "O hospital fica perto da minha casa.", highlight: ["near"] },
      { en: "I love my neighborhood!", pt: "Eu amo meu bairro!", highlight: ["love"] },
    ],
  },

  WRITING: [
    { prompt: "The park is ______ to the school. (📍)", answer: "next", hint: "Ao lado.", options: ["next", "in", "on"] },
    { prompt: "She is a ______. (👩‍🏫)", answer: "teacher", hint: "Ensina na escola.", options: ["teacher", "doctor", "baker"] },
    { prompt: "He works at the hospital. He is a ______. (👨‍⚕️)", answer: "doctor", hint: "Cuida da saúde.", options: ["doctor", "baker", "teacher"] },
    { prompt: "I buy bread at the ______. (🥐)", answer: "bakery", hint: "Faz pão.", options: ["bakery", "hospital", "park"] },
    { prompt: "______ is the school?", answer: "Where", hint: "Palavra de lugar.", options: ["Where", "What", "Who"] },
  ],

  QUIZ: [
    { q: "Como digo 'ao lado de'?", options: [{ text: "Next to", correct: true }, { text: "Behind" }, { text: "Under" }] },
    { q: "Quem ensina na escola?", options: [{ text: "Doctor" }, { text: "Teacher", correct: true }, { text: "Baker" }] },
    { q: "Onde compramos pão?", options: [{ text: "Hospital" }, { text: "Bakery", correct: true }, { text: "Park" }] },
    { q: "Complete: ______ is the park?", options: [{ text: "Where", correct: true }, { text: "What" }, { text: "How" }] },
    { q: "Quem trabalha no hospital?", options: [{ text: "Doctor", correct: true }, { text: "Teacher" }, { text: "Baker" }] },
  ],

  REAL_LIFE: [
    { situation: "🏫 Alguém pergunta onde fica a escola.", answer: "The school is next to the park." },
    { situation: "🥐 Você quer comprar pão.", answer: "I'm going to the bakery." },
    { situation: "👨‍⚕️ Alguém pergunta a profissão do seu pai.", answer: "My dad is a doctor." },
    { situation: "🌳 Convite pra brincar.", answer: "Let's go to the park!" },
    { situation: "🏥 Você não está bem.", answer: "I need to go to the hospital." },
  ],

  GRAMMAR: {
    focus: "Where is ___? / next to, in front of, behind",
    why:
      'Pra perguntar onde algo está: "Where is the ___?" Pra responder onde: usamos preposições — next to (ao lado), in front of (na frente), behind (atrás), near (perto).',
    examples: [
      { en: "Where is the school?", pt: "Onde é a escola?" },
      { en: "It's next to the park.", pt: "É ao lado do parque." },
      { en: "The hospital is behind the market.", pt: "O hospital é atrás do mercado." },
    ],
    errors: [
      { wrong: "Where the school is?", right: "Where is the school?", why: 'A ordem é: Where + is + sujeito.' },
      { wrong: "It's next the park.", right: "It's next to the park.", why: 'Sempre "next TO".' },
    ],
  },

  SONG: {
    title: "In My Neighborhood",
    hookPt: "Cante andando pela casa!",
    verses: [
      { en: "In my neighborhood,", pt: "No meu bairro,", emoji: "🏘️" },
      { en: "There is a school,", pt: "Tem uma escola,", emoji: "🏫" },
      { en: "There is a park,", pt: "Tem um parque,", emoji: "🌳" },
      { en: "And it's so cool!", pt: "E é muito legal!", emoji: "😎" },
      { en: "The doctor helps,", pt: "O médico ajuda,", emoji: "👨‍⚕️" },
      { en: "The teacher teaches,", pt: "A professora ensina,", emoji: "👩‍🏫" },
      { en: "The baker makes,", pt: "O padeiro faz,", emoji: "🥐" },
      { en: "Yummy peaches!", pt: "Pêssegos gostosos!", emoji: "🍑" },
    ],
  },

  HUNTER: {
    intro: "Aonde ir? Toque no lugar certo!",
    rounds: [
      { promptEn: "You need bread. Go to...", promptPt: "Você precisa de pão. Vá pra...", targetLabel: "Bakery",
        objects: [
          { id: "bakery", label: "Bakery 🥐", img: "", isTarget: true },
          { id: "hospital", label: "Hospital 🏥", img: "" },
          { id: "park", label: "Park 🌳", img: "" },
        ] },
      { promptEn: "You are sick. Go to...", promptPt: "Você está doente. Vá pra...", targetLabel: "Hospital",
        objects: [
          { id: "hospital", label: "Hospital 🏥", img: "", isTarget: true },
          { id: "bakery", label: "Bakery 🥐", img: "" },
          { id: "market", label: "Supermarket 🛒", img: "" },
        ] },
      { promptEn: "You want to play. Go to...", promptPt: "Quer brincar. Vá pra...", targetLabel: "Park",
        objects: [
          { id: "park", label: "Park 🌳", img: "", isTarget: true },
          { id: "hospital", label: "Hospital 🏥", img: "" },
          { id: "school", label: "School 🏫", img: "" },
        ] },
      { promptEn: "You need food. Go to...", promptPt: "Precisa de comida. Vá pra...", targetLabel: "Supermarket",
        objects: [
          { id: "market", label: "Supermarket 🛒", img: "", isTarget: true },
          { id: "park", label: "Park 🌳", img: "" },
          { id: "hospital", label: "Hospital 🏥", img: "" },
        ] },
      { promptEn: "You want to learn. Go to...", promptPt: "Quer aprender. Vá pra...", targetLabel: "School",
        objects: [
          { id: "school", label: "School 🏫", img: "", isTarget: true },
          { id: "bakery", label: "Bakery 🥐", img: "" },
          { id: "park", label: "Park 🌳", img: "" },
        ] },
    ],
  },

  PACK: {
    intro: "Quem é da comunidade? Toque só nas PROFISSÕES!",
    backpackImg: TEACHER,
    items: [
      { id: "teacher", en: "Teacher", pt: "Professor", emoji: "👩‍🏫", belongs: true },
      { id: "doctor", en: "Doctor", pt: "Médico", emoji: "👨‍⚕️", belongs: true },
      { id: "baker", en: "Baker", pt: "Padeiro", emoji: "👨‍🍳", belongs: true },
      { id: "police", en: "Police officer", pt: "Policial", emoji: "👮", belongs: true },
      { id: "firefighter", en: "Firefighter", pt: "Bombeiro", emoji: "👨‍🚒", belongs: true },
      { id: "dog", en: "Dog", pt: "Cachorro", emoji: "🐶", belongs: false },
      { id: "cake", en: "Cake", pt: "Bolo", emoji: "🎂", belongs: false },
      { id: "ball", en: "Ball", pt: "Bola", emoji: "⚽", belongs: false },
    ],
  },

  COMMANDS: {
    intro: "Ouça a situação e toque na profissão certa!",
    rounds: [
      { promptEn: "Who teaches you?", promptPt: "Quem te ensina?",
        actions: [
          { id: "teacher", en: "Teacher", pt: "Professor", emoji: "👩‍🏫", isTarget: true },
          { id: "doctor", en: "Doctor", pt: "Médico", emoji: "👨‍⚕️" },
          { id: "baker", en: "Baker", pt: "Padeiro", emoji: "👨‍🍳" },
        ] },
      { promptEn: "Who makes bread?", promptPt: "Quem faz pão?",
        actions: [
          { id: "baker", en: "Baker", pt: "Padeiro", emoji: "👨‍🍳", isTarget: true },
          { id: "police", en: "Police", pt: "Polícia", emoji: "👮" },
          { id: "doctor", en: "Doctor", pt: "Médico", emoji: "👨‍⚕️" },
        ] },
      { promptEn: "Who helps you when you are sick?", promptPt: "Quem ajuda quando você está doente?",
        actions: [
          { id: "doctor", en: "Doctor", pt: "Médico", emoji: "👨‍⚕️", isTarget: true },
          { id: "baker", en: "Baker", pt: "Padeiro", emoji: "👨‍🍳" },
          { id: "teacher", en: "Teacher", pt: "Professor", emoji: "👩‍🏫" },
        ] },
      { promptEn: "Who keeps us safe?", promptPt: "Quem cuida da segurança?",
        actions: [
          { id: "police", en: "Police officer", pt: "Policial", emoji: "👮", isTarget: true },
          { id: "baker", en: "Baker", pt: "Padeiro", emoji: "👨‍🍳" },
          { id: "teacher", en: "Teacher", pt: "Professor", emoji: "👩‍🏫" },
        ] },
    ],
  },

  MEMORY: {
    intro: "Ache os pares lugar ↔ profissão.",
    pairs: [
      { id: "school", en: "School 🏫", pt: "Escola", img: SCHOOL },
      { id: "teacher", en: "Teacher 👩‍🏫", pt: "Professora", img: TEACHER },
      { id: "hospital", en: "Hospital 🏥", pt: "Hospital", img: BEN },
      { id: "bakery", en: "Bakery 🥐", pt: "Padaria", img: LILY },
    ],
  },

  CULTURE: {
    title: "Communities Around the World 🌍",
    emoji: "🏘️",
    paragraphs: [
      { en: "In small towns, people often know their neighbors.", pt: "Em cidades pequenas, as pessoas costumam conhecer os vizinhos." },
      { en: "In big cities, communities can be big and diverse.", pt: "Em cidades grandes, as comunidades podem ser grandes e diversas." },
      { pt: "Você conhece seus vizinhos? Ajudar o próximo é o que forma uma comunidade! 🤝" },
    ],
  },

  BOOK: {
    title: "My Neighborhood Book",
    intro: "Cada página é um lugar do meu bairro.",
    pages: [
      { en: "This is my school.", pt: "Esta é minha escola.", img: SCHOOL, badge: "🏫" },
      { en: "This is my park.", pt: "Este é meu parque.", img: SCHOOL, badge: "🌳" },
      { en: "This is the bakery.", pt: "Esta é a padaria.", img: LILY, badge: "🥐" },
      { en: "This is the hospital.", pt: "Este é o hospital.", img: BEN, badge: "🏥" },
      { en: "My teacher is amazing.", pt: "Minha professora é incrível.", img: TEACHER, badge: "👩‍🏫" },
      { en: "I love my neighborhood!", pt: "Amo meu bairro!", img: SCHOOL, badge: "❤️" },
    ],
  },

  VIRTUAL_ROOM: {
    intro: "Toque em cada lugar/pessoa do bairro!",
    img: SCHOOL,
    items: [
      { en: "School", pt: "Escola", emoji: "🏫" },
      { en: "Park", pt: "Parque", emoji: "🌳" },
      { en: "Hospital", pt: "Hospital", emoji: "🏥" },
      { en: "Bakery", pt: "Padaria", emoji: "🥐" },
      { en: "Teacher", pt: "Professor", emoji: "👩‍🏫" },
      { en: "Doctor", pt: "Médico", emoji: "👨‍⚕️" },
    ],
  },
};

export default lesson;
