// Inglês 5º Ano — Unit 1 "My Life, My Story 👤"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u5-a01-dreams",
  meta: {
    unitLabel: "Unit 1 · Lesson 1 — My Life, My Story 👤",
    headerKicker: "My English Portfolio — Level 2 · 5th Grade",
    coverKicker: "Apresentação pessoal & rotina",
    coverTitle: "My Life, My Story 👤",
    coverSubtitle:
      "Falar de rotina, hobbies, família e personalidade — I always study English. I usually play soccer on weekends.",
    storyTitle: "A Day in Lily's Life",
    vocabularyTitle: "Daily Routine & Hobbies",
    speakingTargets: [
      "I wake up at 7 o'clock.",
      "I always brush my teeth.",
      "I usually play soccer on weekends.",
      "My hobby is reading.",
      "My family is small and happy.",
      "I'm friendly and creative.",
    ],
    listeningIntro: "Ouça a Lily descrever a rotina dela.",
    listeningQuestion: 'Lily disse: "I always study English after school." Ela estuda inglês…',
    listeningOptions: ["antes da escola", "depois da escola", "nunca"],
    listeningCorrect: "depois da escola",
    listeningWrongHint: '"After school" = depois da escola.',
    readingNarration:
      "Simple Present descreve rotina. Adverbs of Frequency (always, usually, often, sometimes, never) mostram COM QUE frequência a ação acontece.",
    grammarNarration:
      "Simple Present: I play / She plays. O -s aparece só com he/she/it. Adverbs of frequency vêm ANTES do verbo (I ALWAYS play), mas DEPOIS de TO BE (She IS always happy).",
    finalProjectIntro: "Vamos criar seu perfil digital! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY DIGITAL PROFILE — Hi! My name is ${name}. I am 10 years old. I am friendly and creative. My family has four people. I wake up at 7 o'clock. I always study English and I usually play soccer on weekends. My hobby is reading. My favorite activity is drawing. This is my life!`,
    finalProjectSectionTitle: "My Digital Profile",
  },
  VOCAB: [
    { id: "wakeup", en: "Wake up ⏰", pt: "Acordar", img: IMG.LILY },
    { id: "brush", en: "Brush teeth 🪥", pt: "Escovar os dentes", img: IMG.LILY },
    { id: "breakfast", en: "Have breakfast 🍞", pt: "Tomar café", img: IMG.BAKERY },
    { id: "study", en: "Study 📚", pt: "Estudar", img: IMG.CLASSROOM },
    { id: "play", en: "Play 🎮", pt: "Brincar/jogar", img: IMG.BEN },
    { id: "hobby", en: "Hobby 🎨", pt: "Passatempo", img: IMG.LILY },
    { id: "family", en: "Family 👨‍👩‍👧", pt: "Família", img: IMG.FRIENDS },
    { id: "weekend", en: "Weekend 🎉", pt: "Fim de semana", img: IMG.PARK },
  ],
  STORY: [
    { img: IMG.LILY, en: "Hi! I'm Lily. This is a day of my life.", pt: "Oi! Sou a Lily. Este é um dia da minha vida." },
    { img: IMG.LILY, en: "I wake up at 7 o'clock every day.", pt: "Acordo às 7 todo dia." },
    { img: IMG.BAKERY, en: "I always have breakfast with my family.", pt: "Sempre tomo café com minha família." },
    { img: IMG.SCHOOL, en: "I go to school at 8 o'clock.", pt: "Vou para a escola às 8." },
    { img: IMG.CLASSROOM, en: "I usually study English after school.", pt: "Geralmente estudo inglês depois da aula." },
    { img: IMG.PARK, en: "On weekends, I often play in the park.", pt: "Nos finais de semana, costumo brincar no parque." },
    { img: IMG.FRIENDS, en: "My hobby is reading with my brother.", pt: "Meu hobby é ler com meu irmão." },
    { img: IMG.LILY, en: "What about YOUR day?", pt: "E o SEU dia?" },
  ],
  DIALOG: [
    { who: "Ben", img: IMG.BEN, en: "Hi Lily, what time do you wake up?", pt: "Oi Lily, que horas você acorda?" },
    { who: "Lily", img: IMG.LILY, en: "I wake up at 7 o'clock every day.", pt: "Acordo às 7 todo dia." },
    { who: "Ben", img: IMG.BEN, en: "Do you always have breakfast?", pt: "Você sempre toma café?" },
    { who: "Lily", img: IMG.LILY, en: "Yes, I always eat with my family.", pt: "Sim, sempre como com minha família." },
    { who: "Ben", img: IMG.BEN, en: "What do you do on weekends?", pt: "O que você faz nos finais de semana?" },
    { who: "Lily", img: IMG.LILY, en: "I usually play in the park and read books.", pt: "Costumo brincar no parque e ler livros." },
    { who: "Ben", img: IMG.BEN, en: "Cool! I sometimes play soccer.", pt: "Legal! Às vezes eu jogo futebol." },
  ],
  READING: {
    title: "My Daily Routine",
    img: IMG.LILY,
    parts: [
      { en: "My name is Lily.", pt: "Meu nome é Lily.", highlight: ["is"] },
      { en: "I wake up at seven.", pt: "Acordo às sete.", highlight: ["wake up"] },
      { en: "I always brush my teeth.", pt: "Sempre escovo os dentes.", highlight: ["always"] },
      { en: "I usually study after school.", pt: "Geralmente estudo depois da aula.", highlight: ["usually"] },
      { en: "On weekends, I play with my family.", pt: "Nos finais de semana, brinco com a família.", highlight: ["weekends"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ up at 7. (acordo)", answer: "wake", hint: "Verbo 'acordar'.", options: ["wake", "am", "have"] },
    { prompt: "She ______ soccer on Sundays.", answer: "plays", hint: "3ª pessoa: verbo + s.", options: ["plays", "play", "playing"] },
    { prompt: "I ______ brush my teeth. (sempre)", answer: "always", hint: "Adverb of frequency = 100%.", options: ["always", "never", "sometimes"] },
    { prompt: "My family ______ four people.", answer: "has", hint: "3ª pessoa singular de HAVE.", options: ["has", "have", "is"] },
    { prompt: "I ______ friendly and kind.", answer: "am", hint: "TO BE 1ª pessoa.", options: ["am", "is", "have"] },
  ],
  QUIZ: [
    { q: "'Wake up' significa:", options: [{ text: "Dormir" }, { text: "Acordar", correct: true }, { text: "Estudar" }] },
    { q: "Complete: She ___ English every day.", options: [{ text: "study" }, { text: "studies", correct: true }, { text: "studying" }] },
    { q: "'Weekend' é:", options: [{ text: "Semana" }, { text: "Fim de semana", correct: true }, { text: "Dia" }] },
    { q: "'Always' significa (frequência):", options: [{ text: "Nunca" }, { text: "Sempre", correct: true }, { text: "Às vezes" }] },
    { q: "Complete: I ___ friendly.", options: [{ text: "am", correct: true }, { text: "is" }, { text: "are" }] },
    { q: "'Hobby' é:", options: [{ text: "Passatempo", correct: true }, { text: "Escola" }, { text: "Amigo" }] },
    { q: "Complete: He ___ breakfast at 8.", options: [{ text: "have" }, { text: "has", correct: true }, { text: "having" }] },
  ],
  REAL_LIFE: [
    { situation: "⏰ Falando que horas você acorda.", answer: "I wake up at 7 o'clock." },
    { situation: "🍞 Dizendo o que faz de manhã.", answer: "I always have breakfast." },
    { situation: "🎨 Falando seu hobby.", answer: "My hobby is drawing." },
    { situation: "👨‍👩‍👧 Descrevendo sua família.", answer: "My family is small and happy." },
    { situation: "⚽ Falando o que faz no fim de semana.", answer: "I usually play soccer on weekends." },
  ],
  GRAMMAR: {
    focus: "Simple Present · Adverbs of Frequency · TO BE",
    why:
      "Simple Present serve pra falar de rotina e hábitos. Adverbs of frequency (always 100% → never 0%) mostram COM QUE frequência você faz algo. TO BE (am/is/are) descreve quem você É.",
    examples: [
      { en: "I wake up early.", pt: "Acordo cedo." },
      { en: "She plays piano.", pt: "Ela toca piano." },
      { en: "I always study English.", pt: "Sempre estudo inglês." },
      { en: "She is usually happy.", pt: "Ela geralmente está feliz." },
      { en: "We are a happy family.", pt: "Somos uma família feliz." },
    ],
    errors: [
      { wrong: "She play soccer.", right: "She PLAYS soccer.", why: "He/She/It → verbo + s." },
      { wrong: "I always am happy.", right: "I am ALWAYS happy.", why: "Frequência DEPOIS de TO BE." },
      { wrong: "He have a hobby.", right: "He HAS a hobby.", why: "HAVE vira HAS na 3ª pessoa." },
    ],
  },
  SONG: {
    title: "This Is My Day",
    hookPt: "Cante sua rotina!",
    verses: [
      { en: "Wake up, wake up, the sun is bright,", pt: "Acorda, acorda, o sol brilha,", emoji: "☀️" },
      { en: "Brush my teeth and start the light.", pt: "Escovo os dentes e começo o dia.", emoji: "🪥" },
      { en: "Breakfast, school, and then some play,", pt: "Café, escola e brincar,", emoji: "🍞" },
      { en: "This is my routine each day!", pt: "Essa é minha rotina!", emoji: "⏰" },
      { en: "On the weekend, family fun,", pt: "No fim de semana, diversão em família,", emoji: "🎉" },
      { en: "Reading, running in the sun!", pt: "Ler, correr no sol!", emoji: "📚" },
    ],
  },
  HUNTER: {
    intro: "Escolha a forma correta!",
    rounds: [
      { promptEn: "Complete: She ___ soccer.", promptPt: "Complete: She ___ soccer.", targetLabel: "plays", objects: [
        { id: "a", label: "play", img: "" },
        { id: "b", label: "plays", img: "", isTarget: true },
        { id: "c", label: "playing", img: "" },
      ]},
      { promptEn: "'Weekend' é:", promptPt: "'Weekend' é:", targetLabel: "Fim de semana", objects: [
        { id: "a", label: "Fim de semana", img: "", isTarget: true },
        { id: "b", label: "Semana", img: "" },
        { id: "c", label: "Hora" },
      ]},
      { promptEn: "Frequência 100%:", promptPt: "Frequência 100%:", targetLabel: "always", objects: [
        { id: "a", label: "never", img: "" },
        { id: "b", label: "always", img: "", isTarget: true },
        { id: "c", label: "sometimes", img: "" },
      ]},
      { promptEn: "'Hobby' é:", promptPt: "'Hobby' é:", targetLabel: "Passatempo", objects: [
        { id: "a", label: "Escola", img: "" },
        { id: "b", label: "Passatempo", img: "", isTarget: true },
        { id: "c", label: "Sonho", img: "" },
      ]},
      { promptEn: "Complete: He ___ breakfast.", promptPt: "Complete: He ___ breakfast.", targetLabel: "has", objects: [
        { id: "a", label: "have", img: "" },
        { id: "b", label: "has", img: "", isTarget: true },
        { id: "c", label: "is", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares da rotina!",
    pairs: [
      { id: "a", en: "Wake up ⏰", pt: "Acordar", img: IMG.LILY },
      { id: "b", en: "Breakfast 🍞", pt: "Café", img: IMG.BAKERY },
      { id: "c", en: "Study 📚", pt: "Estudar", img: IMG.CLASSROOM },
      { id: "d", en: "Weekend 🎉", pt: "Fim de semana", img: IMG.PARK },
    ],
  },
  BOOK: {
    title: "My Digital Profile",
    intro: "Um portfólio sobre você!",
    pages: [
      { en: "Page 1 — This is me.", pt: "Pág. 1 — Este sou eu.", img: IMG.LILY, badge: "👤" },
      { en: "Page 2 — I am friendly and creative.", pt: "Pág. 2 — Sou amigável e criativo.", img: IMG.FRIENDS, badge: "💖" },
      { en: "Page 3 — My family and my home.", pt: "Pág. 3 — Minha família e minha casa.", img: IMG.FRIENDS, badge: "🏠" },
      { en: "Page 4 — My daily routine.", pt: "Pág. 4 — Minha rotina.", img: IMG.CLASSROOM, badge: "⏰" },
      { en: "Page 5 — My hobbies and weekends.", pt: "Pág. 5 — Meus hobbies e fins de semana.", img: IMG.PARK, badge: "🎨" },
      { en: "The End — This is my story!", pt: "Fim — Essa é minha história!", img: IMG.LILY, badge: "⭐" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "Este é o quarto da Lily. Toque nos itens da rotina!",
    img: IMG.CLASSROOM,
    items: [
      { en: "Alarm clock", pt: "Despertador", emoji: "⏰" },
      { en: "Toothbrush", pt: "Escova de dentes", emoji: "🪥" },
      { en: "Book", pt: "Livro", emoji: "📖" },
      { en: "Backpack", pt: "Mochila", emoji: "🎒" },
      { en: "Soccer ball", pt: "Bola", emoji: "⚽" },
      { en: "Family photo", pt: "Foto da família", emoji: "🖼️" },
    ],
  },
  CULTURE: {
    title: "Routines Around the World 🌍",
    emoji: "🌎",
    paragraphs: [
      { en: "In Japan, students clean their own classrooms every day.", pt: "No Japão, os alunos limpam a sala de aula todo dia." },
      { en: "In Spain, many families have a 'siesta' (short nap) after lunch.", pt: "Na Espanha, muitas famílias fazem 'siesta' depois do almoço." },
      { pt: "Cada rotina conta uma história cultural!" },
    ],
  },
};

export default lesson;
