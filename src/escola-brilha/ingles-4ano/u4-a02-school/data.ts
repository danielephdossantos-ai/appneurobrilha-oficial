// Inglês 4º Ano — Unit 2 "School Projects 📚"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u4-a02-school",
  meta: {
    unitLabel: "Unit 2 · Lesson 2 — School Projects 📚",
    headerKicker: "My English Adventure — 4th Grade",
    coverKicker: "Vida escolar & projetos",
    coverTitle: "School Projects 📚",
    coverSubtitle:
      "Vamos falar da vida escolar com Simple Present + Adverbs of Frequency (always, usually, sometimes, never).",
    storyTitle: "Our School Newspaper",
    vocabularyTitle: "School Words",
    speakingTargets: [
      "Today we have Science.",
      "Our project is about animals.",
      "I always do my homework.",
      "I usually study English.",
      "We sometimes work in groups.",
      "I never forget my books.",
    ],
    listeningIntro: "Ouça a rotina da escola.",
    listeningQuestion: '"On Mondays we have Math." Que dia tem Matemática?',
    listeningOptions: ["Terça", "Segunda", "Sexta"],
    listeningCorrect: "Segunda",
    listeningWrongHint: '"Monday" = segunda-feira.',
    readingNarration:
      'Adverbs of Frequency ficam ANTES do verbo principal (I always study), mas DEPOIS de TO BE (She is always happy).',
    grammarNarration:
      'Simple Present pra rotina: I study / She studies. Adverbs de frequência mostram COM QUE FREQUÊNCIA: always (100%), usually (80%), sometimes (50%), never (0%).',
    finalProjectIntro: "Seu jornal escolar! Escreva o nome do editor:",
    finalProjectPhrase: (name: string) =>
      `SCHOOL NEWSPAPER — Editor: ${name}. Today we have amazing news. Our project is about the school garden. Students always work together. Teachers usually help us. We never give up. English class is our favorite!`,
    finalProjectSectionTitle: "School Newspaper",
  },
  VOCAB: [
    { id: "math", en: "Math ➕", pt: "Matemática", img: IMG.CLASSROOM },
    { id: "sci", en: "Science 🔬", pt: "Ciências", img: IMG.SCHOOL },
    { id: "art", en: "Art 🎨", pt: "Arte", img: IMG.CLASSROOM },
    { id: "comp", en: "Computer 💻", pt: "Computação", img: IMG.CLASSROOM },
    { id: "hw", en: "Homework 📝", pt: "Dever de casa", img: IMG.BACKPACK },
    { id: "proj", en: "Project 📊", pt: "Projeto", img: IMG.CLASSROOM },
    { id: "book", en: "Book 📖", pt: "Livro", img: IMG.CLASSROOM },
    { id: "pen", en: "Pen ✏️", pt: "Caneta", img: IMG.BACKPACK },
  ],
  STORY: [
    { img: IMG.SCHOOL, en: "It's Monday morning at school!", pt: "É segunda de manhã na escola!" },
    { img: IMG.CLASSROOM, en: "Today we have Math and Science.", pt: "Hoje temos Matemática e Ciências." },
    { img: IMG.EMILY, en: "Teacher Emily says: 'We start a new project today!'", pt: "Prof. Emily: 'Começamos um projeto novo hoje!'" },
    { img: IMG.CLASSROOM, en: "Our project is about the solar system.", pt: "Nosso projeto é sobre o sistema solar." },
    { img: IMG.FRIENDS, en: "We always work in groups.", pt: "Sempre trabalhamos em grupo." },
    { img: IMG.BACKPACK, en: "Ben usually brings colored pens.", pt: "Ben geralmente traz canetas coloridas." },
    { img: IMG.LILY, en: "Lily sometimes helps with drawings.", pt: "Lily às vezes ajuda com os desenhos." },
    { img: IMG.CLASSROOM, en: "We never forget: teamwork is the best!", pt: "Nunca esquecemos: trabalho em equipe é o melhor!" },
  ],
  DIALOG: [
    { who: "Ben", img: IMG.BEN, en: "What subject do we have first?", pt: "Que matéria temos primeiro?" },
    { who: "Lily", img: IMG.LILY, en: "We have Science.", pt: "Ciências." },
    { who: "Ben", img: IMG.BEN, en: "What is our project about?", pt: "Sobre o que é o projeto?" },
    { who: "Lily", img: IMG.LILY, en: "It is about plants and animals.", pt: "Sobre plantas e animais." },
    { who: "Ben", img: IMG.BEN, en: "Do you always do your homework?", pt: "Você sempre faz o dever?" },
    { who: "Lily", img: IMG.LILY, en: "Yes, I always do it after school.", pt: "Sim, sempre depois da aula." },
    { who: "Ben", img: IMG.BEN, en: "Great! Let's start our project.", pt: "Ótimo! Bora começar o projeto." },
  ],
  READING: {
    title: "My School Week",
    img: IMG.CLASSROOM,
    parts: [
      { en: "I always go to school at 7 am.", pt: "Sempre vou à escola às 7h.", highlight: ["always"] },
      { en: "On Mondays we have Math and Art.", pt: "Segunda tem Mate e Arte.", highlight: ["Mondays"] },
      { en: "We usually study in the library.", pt: "Geralmente estudamos na biblioteca.", highlight: ["usually"] },
      { en: "I sometimes work with my friends.", pt: "Às vezes trabalho com amigos.", highlight: ["sometimes"] },
      { en: "I never forget my homework.", pt: "Nunca esqueço o dever.", highlight: ["never"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ do my homework. (100%)", answer: "always", hint: "100% = sempre.", options: ["always", "never", "sometimes"] },
    { prompt: "She ______ Math. (estudar, 3ª pessoa)", answer: "studies", hint: "Termina em -Y → -IES.", options: ["studies", "study", "studys"] },
    { prompt: "We ______ have Art on Fridays.", answer: "usually", hint: "80% = geralmente.", options: ["usually", "never", "always"] },
    { prompt: "He ______ his book. (esquecer)", answer: "forgets", hint: "3ª pessoa + S.", options: ["forgets", "forget", "forgeting"] },
    { prompt: "I ______ eat in class. (nunca)", answer: "never", hint: "0% = nunca.", options: ["never", "always", "usually"] },
  ],
  QUIZ: [
    { q: "'Always' significa:", options: [{ text: "Nunca" }, { text: "Sempre", correct: true }, { text: "Às vezes" }] },
    { q: "Complete: She ___ Math on Mondays.", options: [{ text: "study" }, { text: "studies", correct: true }, { text: "studys" }] },
    { q: "'Homework' é:", options: [{ text: "Dever de casa", correct: true }, { text: "Aula extra" }, { text: "Recreio" }] },
    { q: "'Never' significa:", options: [{ text: "Sempre" }, { text: "Nunca", correct: true }, { text: "Geralmente" }] },
    { q: "Complete: We ___ our project every week.", options: [{ text: "do", correct: true }, { text: "does" }, { text: "doing" }] },
    { q: "'Science' é:", options: [{ text: "Arte" }, { text: "Ciências", correct: true }, { text: "Matemática" }] },
    { q: "Complete: He ___ English homework.", options: [{ text: "does", correct: true }, { text: "do" }, { text: "doing" }] },
  ],
  REAL_LIFE: [
    { situation: "📚 Perguntam que matéria você tem hoje.", answer: "Today we have Science." },
    { situation: "📊 Falando do seu projeto.", answer: "Our project is about animals." },
    { situation: "📝 Falando com que frequência estuda.", answer: "I always study English." },
    { situation: "👫 Trabalho em grupo.", answer: "We usually work together." },
    { situation: "❌ Algo que você nunca faz.", answer: "I never forget my homework." },
  ],
  GRAMMAR: {
    focus: "Simple Present + Adverbs of Frequency",
    why:
      'Rotina = Simple Present. Adverbs de frequência mostram COM QUE FREQUÊNCIA algo acontece. Ficam antes do verbo, mas depois de TO BE.',
    examples: [
      { en: "I always study English.", pt: "Sempre estudo inglês." },
      { en: "She usually reads at night.", pt: "Ela geralmente lê à noite." },
      { en: "We sometimes play soccer.", pt: "Às vezes jogamos futebol." },
      { en: "He is always happy.", pt: "Ele está sempre feliz. (depois do TO BE)" },
      { en: "They never miss class.", pt: "Nunca faltam." },
    ],
    errors: [
      { wrong: "She study Math.", right: "She STUDIES Math.", why: "3ª pessoa termina em -Y → -IES." },
      { wrong: "I always am happy.", right: "I am ALWAYS happy.", why: "Advérbio DEPOIS do TO BE." },
      { wrong: "He usually eat pizza.", right: "He usually EATS pizza.", why: "3ª pessoa + S." },
    ],
  },
  SONG: {
    title: "School Week Song",
    hookPt: "Cante os dias da semana!",
    verses: [
      { en: "Monday, Tuesday, Wednesday too,", pt: "Segunda, terça, quarta também,", emoji: "📅" },
      { en: "Thursday, Friday — school we do!", pt: "Quinta, sexta — escola!", emoji: "🏫" },
      { en: "I always come with a smile,", pt: "Sempre venho com um sorriso,", emoji: "😊" },
      { en: "Learning English is my style!", pt: "Aprender inglês é meu estilo!", emoji: "🎓" },
      { en: "Math and Science, Art and more,", pt: "Mate e Ciências, Arte e mais,", emoji: "📚" },
      { en: "Every day I love to explore!", pt: "Todo dia amo explorar!", emoji: "🔍" },
    ],
  },
  HUNTER: {
    intro: "Escolha certo!",
    rounds: [
      { promptEn: "Complete: I ___ study English.", promptPt: "Complete: I ___ study English.", targetLabel: "always", objects: [
        { id: "a", label: "always", img: "", isTarget: true },
        { id: "b", label: "have", img: "" },
        { id: "c", label: "is", img: "" },
      ]},
      { promptEn: "Complete: She ___ Math.", promptPt: "Complete: She ___ Math.", targetLabel: "studies", objects: [
        { id: "a", label: "study", img: "" },
        { id: "b", label: "studies", img: "", isTarget: true },
        { id: "c", label: "studys", img: "" },
      ]},
      { promptEn: "'Homework' é:", promptPt: "'Homework' é:", targetLabel: "Dever de casa", objects: [
        { id: "a", label: "Recreio", img: "" },
        { id: "b", label: "Dever de casa", img: "", isTarget: true },
        { id: "c", label: "Aula extra", img: "" },
      ]},
      { promptEn: "Complete: We ___ have Art on Fridays.", promptPt: "Complete: We ___ have Art on Fridays.", targetLabel: "usually", objects: [
        { id: "a", label: "usually", img: "", isTarget: true },
        { id: "b", label: "never", img: "" },
        { id: "c", label: "no", img: "" },
      ]},
      { promptEn: "'Science' é:", promptPt: "'Science' é:", targetLabel: "Ciências", objects: [
        { id: "a", label: "Arte", img: "" },
        { id: "b", label: "Ciências", img: "", isTarget: true },
        { id: "c", label: "Ed. Física", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares de escola!",
    pairs: [
      { id: "a", en: "Math ➕", pt: "Matemática", img: IMG.CLASSROOM },
      { id: "b", en: "Science 🔬", pt: "Ciências", img: IMG.SCHOOL },
      { id: "c", en: "Homework 📝", pt: "Dever", img: IMG.BACKPACK },
      { id: "d", en: "Project 📊", pt: "Projeto", img: IMG.CLASSROOM },
    ],
  },
  BOOK: {
    title: "School Newspaper",
    intro: "Seu jornal escolar!",
    pages: [
      { en: "Front Page — Today at school.", pt: "Capa — Hoje na escola.", img: IMG.SCHOOL, badge: "📰" },
      { en: "News 1 — New Science project!", pt: "Notícia 1 — Novo projeto de Ciências!", img: IMG.CLASSROOM, badge: "🔬" },
      { en: "News 2 — Art exhibition on Friday.", pt: "Notícia 2 — Expo de arte sexta.", img: IMG.CLASSROOM, badge: "🎨" },
      { en: "News 3 — Math champions!", pt: "Notícia 3 — Campeões de Mate!", img: IMG.CLASSROOM, badge: "🏆" },
      { en: "Editorial — Teamwork is our power.", pt: "Editorial — Equipe é nosso poder.", img: IMG.FRIENDS, badge: "💪" },
      { en: "The End — See you next week!", pt: "Fim — Até semana que vem!", img: IMG.SCHOOL, badge: "⭐" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "Sala de aula! Toque em cada objeto.",
    img: IMG.CLASSROOM,
    items: [
      { en: "Book", pt: "Livro", emoji: "📖" },
      { en: "Pen", pt: "Caneta", emoji: "✏️" },
      { en: "Notebook", pt: "Caderno", emoji: "📓" },
      { en: "Computer", pt: "Computador", emoji: "💻" },
      { en: "Board", pt: "Lousa", emoji: "📋" },
      { en: "Backpack", pt: "Mochila", emoji: "🎒" },
    ],
  },
  CULTURE: {
    title: "Schools Around the World 🌍",
    emoji: "🏫",
    paragraphs: [
      { en: "In Japan, students clean the classroom every day. It's part of school!", pt: "No Japão, alunos limpam a sala todo dia. Faz parte da escola!" },
      { en: "In Finland, schools have short days but a lot of play time.", pt: "Na Finlândia, dias curtos e muito tempo de brincar." },
      { pt: "Cada país tem um jeito — mas todos amam aprender!" },
    ],
  },
};

export default lesson;
