// Ingles 3º Ano — Unit 2 "My Amazing School 📚"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u3-a02-school",
  meta: {
    unitLabel: "Unit 2 · Lesson 2 — My Amazing School 📚",
    headerKicker: "My English Adventure — 3rd Grade",
    coverKicker: "Lesson 2",
    coverTitle: "My Amazing School 📚",
    coverSubtitle:
      "Vamos explorar a escola em inglês! Matérias, lugares, horários e o que a gente gosta (ou não gosta) de estudar.",
    storyTitle: "A Day at School",
    vocabularyTitle: "School Words",
    speakingTargets: [
      "I study English.",
      "My favorite subject is math.",
      "I have art on Monday.",
      "I like the library.",
      "My teacher is nice.",
      "We have homework every day.",
    ],
    listeningIntro: "Ouça o Ben falando das matérias favoritas dele.",
    listeningQuestion: 'Ben disse: "My favorite subject is science." Qual matéria ele mais gosta?',
    listeningOptions: ["Matemática", "Ciências", "Arte"],
    listeningCorrect: "Ciências",
    listeningWrongHint: '"Science" = ciências.',
    readingNarration:
      'No 3º ano começamos o Simple Present. "I study" (eu estudo), "She studies" (ela estuda) — com he/she/it a gente acrescenta um -S.',
    grammarNarration:
      'LIKE e LIKES: I like, You like, She LIKES, He LIKES. Regra do S na 3ª pessoa do singular.',
    finalProjectIntro: "Vamos montar sua School Magazine! Escreva seu nome e leia:",
    finalProjectPhrase: (name: string) =>
      `Hi! I am ${name}. I study English, math, and science. My favorite subject is art. I have English on Monday. I love my school!`,
    finalProjectSectionTitle: "My School Magazine",
  },
  VOCAB: [
    { id: "english", en: "English 🇬🇧", pt: "Inglês", img: IMG.CLASSROOM },
    { id: "math", en: "Math ➕", pt: "Matemática", img: IMG.SCHOOL },
    { id: "science", en: "Science 🔬", pt: "Ciências", img: IMG.CLASSROOM },
    { id: "art", en: "Art 🎨", pt: "Arte", img: IMG.RAINBOW },
    { id: "pe", en: "P.E. ⚽", pt: "Ed. Física", img: IMG.SCHOOL },
    { id: "library", en: "Library 📚", pt: "Biblioteca", img: IMG.CLASSROOM },
    { id: "playground", en: "Playground 🛝", pt: "Pátio", img: IMG.SCHOOL },
    { id: "computer", en: "Computer room 💻", pt: "Sala de informática", img: IMG.CLASSROOM },
    { id: "hw", en: "Homework 📝", pt: "Lição de casa", img: IMG.BACKPACK },
    { id: "teacher", en: "Teacher 👩‍🏫", pt: "Professora", img: IMG.EMILY },
    { id: "cm", en: "Classmates 👫", pt: "Colegas", img: IMG.FRIENDS },
  ],
  STORY: [
    { img: IMG.SCHOOL, en: "This is my school. I love it!", pt: "Esta é minha escola. Eu amo!" },
    { img: IMG.CLASSROOM, en: "I have English on Monday and Wednesday.", pt: "Tenho inglês na segunda e quarta." },
    { img: IMG.RAINBOW, en: "My favorite subject is art. I paint colorful pictures.", pt: "Minha matéria favorita é arte. Eu pinto quadros coloridos." },
    { img: IMG.CLASSROOM, en: "In the library, I read many books.", pt: "Na biblioteca, leio muitos livros." },
    { img: IMG.EMILY, en: "My teacher is Miss Emily. She is very nice.", pt: "Minha professora é a Emily. Ela é muito legal." },
    { img: IMG.BACKPACK, en: "After class, I do my homework.", pt: "Depois da aula, faço a lição." },
  ],
  DIALOG: [
    { who: "Ben", img: IMG.BEN, en: "Do you like school, Lily?", pt: "Você gosta da escola, Lily?" },
    { who: "Lily", img: IMG.LILY, en: "Yes, I love it! What's your favorite subject?", pt: "Sim, eu amo! Qual sua matéria favorita?" },
    { who: "Ben", img: IMG.BEN, en: "My favorite subject is science. I like experiments.", pt: "Minha favorita é ciências. Gosto de experiências." },
    { who: "Lily", img: IMG.LILY, en: "Cool! I like art. I paint every day.", pt: "Legal! Eu gosto de arte. Pinto todo dia." },
    { who: "Ben", img: IMG.BEN, en: "Do you have homework today?", pt: "Você tem lição hoje?" },
    { who: "Lily", img: IMG.LILY, en: "Yes, math homework. It's easy!", pt: "Sim, lição de matemática. É fácil!" },
  ],
  READING: {
    title: "My School Day",
    img: IMG.CLASSROOM,
    parts: [
      { en: "I study English every day.", pt: "Estudo inglês todo dia.", highlight: ["study"] },
      { en: "My favorite subject is art.", pt: "Minha matéria favorita é arte.", highlight: ["favorite subject"] },
      { en: "I have P.E. on Friday.", pt: "Tenho Ed. Física na sexta.", highlight: ["have"] },
      { en: "My teacher is Miss Emily.", pt: "Minha professora é a Emily.", highlight: ["teacher"] },
      { en: "I like the library.", pt: "Eu gosto da biblioteca.", highlight: ["like"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ English every day. (estudar)", answer: "study", hint: "Verbo com I sem S.", options: ["study", "studies", "studying"] },
    { prompt: "She ______ math. (gostar)", answer: "likes", hint: "3ª pessoa → -S.", options: ["likes", "like", "liking"] },
    { prompt: "My favorite subject ______ art.", answer: "is", hint: "TO BE.", options: ["is", "are", "am"] },
    { prompt: "I have English ______ Monday.", answer: "on", hint: "Dias da semana pedem ON.", options: ["on", "in", "at"] },
    { prompt: "The teacher is in the ______. (biblioteca)", answer: "library", hint: "Lugar de livros.", options: ["library", "playground", "kitchen"] },
  ],
  QUIZ: [
    { q: "Como se diz 'matéria favorita'?", options: [{ text: "Favorite subject", correct: true }, { text: "Favorite school" }, { text: "Favorite room" }] },
    { q: "Complete: She ___ English.", options: [{ text: "like" }, { text: "likes", correct: true }, { text: "liking" }] },
    { q: "'I have art on Monday' significa:", options: [{ text: "Tenho arte na segunda", correct: true }, { text: "Gosto de arte" }, { text: "Estou na arte" }] },
    { q: "Onde a gente lê livros?", options: [{ text: "Playground" }, { text: "Library", correct: true }, { text: "Kitchen" }] },
    { q: "Qual frase está correta?", options: [{ text: "He study math." }, { text: "He studies math.", correct: true }, { text: "He studying math." }] },
  ],
  REAL_LIFE: [
    { situation: "📚 Alguém pergunta: What's your favorite subject?", answer: "My favorite subject is ___." },
    { situation: "📅 Perguntam que dia você tem inglês.", answer: "I have English on Monday." },
    { situation: "👩‍🏫 Falando da professora.", answer: "My teacher is Miss ___." },
    { situation: "📝 Alguém pergunta se você tem lição.", answer: "Yes, I have homework." },
    { situation: "🛝 Onde você brinca no recreio?", answer: "I play in the playground." },
  ],
  GRAMMAR: {
    focus: "Simple Present + Like / Likes",
    why:
      'Simple Present descreve rotina. I/You/We/They + verbo. He/She/It + verbo + S. Ex.: I like → She likeS. I study → He studiES.',
    examples: [
      { en: "I like art.", pt: "Eu gosto de arte." },
      { en: "She likes science.", pt: "Ela gosta de ciências." },
      { en: "We study English.", pt: "Nós estudamos inglês." },
      { en: "He studies math.", pt: "Ele estuda matemática." },
    ],
    errors: [
      { wrong: "She like math.", right: "She likes math.", why: "3ª pessoa singular precisa do -S." },
      { wrong: "I likes school.", right: "I like school.", why: "Com I NÃO se coloca -S." },
    ],
  },
  SONG: {
    title: "School Days",
    hookPt: "Cante os dias e as matérias!",
    verses: [
      { en: "Monday, English, let's begin,", pt: "Segunda, inglês, vamos!", emoji: "🇬🇧" },
      { en: "Tuesday, math, we all jump in,", pt: "Terça, matemática!", emoji: "➕" },
      { en: "Wednesday, science, look and see,", pt: "Quarta, ciências,", emoji: "🔬" },
      { en: "Thursday, art, so colorful and free!", pt: "Quinta, arte, colorida!", emoji: "🎨" },
      { en: "Friday, P.E., run and play,", pt: "Sexta, Ed. Física!", emoji: "⚽" },
      { en: "School is fun, hip hip hooray!", pt: "Escola é legal!", emoji: "🎉" },
    ],
  },
  HUNTER: {
    intro: "Escolha a matéria certa pra cada situação!",
    rounds: [
      { promptEn: "You count numbers.", promptPt: "Você conta números.", targetLabel: "Math", objects: [
        { id: "a", label: "Math ➕", img: "", isTarget: true },
        { id: "b", label: "Art 🎨", img: "" },
        { id: "c", label: "P.E. ⚽", img: "" },
      ]},
      { promptEn: "You paint pictures.", promptPt: "Você pinta quadros.", targetLabel: "Art", objects: [
        { id: "a", label: "Science 🔬", img: "" },
        { id: "b", label: "Art 🎨", img: "", isTarget: true },
        { id: "c", label: "Math ➕", img: "" },
      ]},
      { promptEn: "You do experiments.", promptPt: "Você faz experiências.", targetLabel: "Science", objects: [
        { id: "a", label: "P.E. ⚽", img: "" },
        { id: "b", label: "English 🇬🇧" , img: "" },
        { id: "c", label: "Science 🔬", img: "", isTarget: true },
      ]},
      { promptEn: "You run and play sports.", promptPt: "Você corre e joga.", targetLabel: "P.E.", objects: [
        { id: "a", label: "P.E. ⚽", img: "", isTarget: true },
        { id: "b", label: "Library 📚", img: "" },
        { id: "c", label: "Art 🎨", img: "" },
      ]},
      { promptEn: "You read many books.", promptPt: "Você lê livros.", targetLabel: "Library", objects: [
        { id: "a", label: "Playground 🛝", img: "" },
        { id: "b", label: "Library 📚", img: "", isTarget: true },
        { id: "c", label: "Computer room 💻", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Ache os pares matéria ↔ imagem.",
    pairs: [
      { id: "art", en: "Art 🎨", pt: "Arte", img: IMG.RAINBOW },
      { id: "eng", en: "English 🇬🇧", pt: "Inglês", img: IMG.CLASSROOM },
      { id: "pe", en: "P.E. ⚽", pt: "Ed. Física", img: IMG.SCHOOL },
      { id: "hw", en: "Homework 📝", pt: "Lição", img: IMG.BACKPACK },
    ],
  },
  BOOK: {
    title: "My School Magazine",
    intro: "Cada página, um pedacinho da sua escola.",
    pages: [
      { en: "This is my school.", pt: "Esta é minha escola.", img: IMG.SCHOOL, badge: "🏫" },
      { en: "I study English and math.", pt: "Estudo inglês e matemática.", img: IMG.CLASSROOM, badge: "📚" },
      { en: "My favorite subject is art.", pt: "Matéria favorita: arte.", img: IMG.RAINBOW, badge: "🎨" },
      { en: "My teacher is Miss Emily.", pt: "Professora: Emily.", img: IMG.EMILY, badge: "👩‍🏫" },
      { en: "I love my classmates!", pt: "Amo meus colegas!", img: IMG.FRIENDS, badge: "💛" },
    ],
  },
  CULTURE: {
    title: "Schools Around the World 🌍",
    emoji: "🏫",
    paragraphs: [
      { en: "In Japan, kids clean the school themselves — no janitors!", pt: "No Japão, as crianças limpam a escola — sem faxineiros!" },
      { en: "In Finland, kids have short school days and lots of playtime.", pt: "Na Finlândia, dias curtos e muito recreio." },
      { pt: "Cada país tem uma escola diferente — e cada uma é especial! 🌟" },
    ],
  },
};

export default lesson;
