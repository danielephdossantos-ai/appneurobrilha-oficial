// Ingles 3º Ano — Unit 1 "Welcome to My World 🌎"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u3-a01-welcome",
  meta: {
    unitLabel: "Unit 1 · Lesson 1 — Welcome to My World 🌎",
    headerKicker: "My English Adventure — 3rd Grade",
    coverKicker: "Lesson 1",
    coverTitle: "Welcome to My World 🌎",
    coverSubtitle:
      "No 3º ano a gente se apresenta com frases completas — nome, idade, cidade, aniversário e coisas favoritas. Vem conhecer novos amigos!",
    storyTitle: "Meet Lily and Ben",
    vocabularyTitle: "About Me Words",
    speakingTargets: [
      "My name is Ana.",
      "I am eight years old.",
      "I live in Brazil.",
      "My birthday is in May.",
      "My favorite color is blue.",
      "This is my friend, Ben.",
    ],
    listeningIntro: "Ouça Lily se apresentando com frases completas.",
    listeningQuestion: 'Lily disse: "I am nine years old." Quantos anos ela tem?',
    listeningOptions: ["6 anos", "9 anos", "12 anos"],
    listeningCorrect: "9 anos",
    listeningWrongHint: '"Nine" = nove.',
    readingNarration:
      'Toda apresentação em inglês tem 3 partes: nome (My name is…), idade (I am…) e onde mora (I live in…). Reparou como o verbo TO BE aparece em quase toda frase?',
    grammarNarration:
      'O verbo TO BE muda de forma: I AM, You ARE, He/She IS. E os possessivos: MY (meu), YOUR (seu), HIS (dele), HER (dela). Vamos praticar!',
    finalProjectIntro: "Vamos criar o seu Profile Card! Escreva seu nome e leia a apresentação:",
    finalProjectPhrase: (name: string) =>
      `Hello! My name is ${name}. I am eight years old. I live in Brazil. My favorite color is blue. Nice to meet you!`,
    finalProjectSectionTitle: "My Profile Card",
  },
  VOCAB: [
    { id: "name", en: "Name 📛", pt: "Nome", img: IMG.LILY },
    { id: "age", en: "Age 🎂", pt: "Idade", img: IMG.MORNING },
    { id: "bday", en: "Birthday 🎉", pt: "Aniversário", img: IMG.RAINBOW },
    { id: "country", en: "Country 🌎", pt: "País", img: IMG.AIRPORT },
    { id: "city", en: "City 🏙️", pt: "Cidade", img: IMG.SCHOOL },
    { id: "friend", en: "Friend 🤝", pt: "Amigo", img: IMG.FRIENDS },
    { id: "family", en: "Family 👨‍👩‍👧", pt: "Família", img: IMG.MORNING },
    { id: "color", en: "Favorite color 🎨", pt: "Cor favorita", img: IMG.RAINBOW },
    { id: "animal", en: "Favorite animal 🐶", pt: "Animal favorito", img: IMG.DOG },
    { id: "food", en: "Favorite food 🍕", pt: "Comida favorita", img: IMG.MORNING },
  ],
  STORY: [
    { img: IMG.HELLO, en: "Hi! My name is Lily. I am nine years old.", pt: "Oi! Meu nome é Lily. Tenho nove anos." },
    { img: IMG.LILY, en: "I live in São Paulo, Brazil.", pt: "Eu moro em São Paulo, no Brasil." },
    { img: IMG.RAINBOW, en: "My birthday is in July. My favorite color is pink.", pt: "Meu aniversário é em julho. Minha cor favorita é rosa." },
    { img: IMG.BEN, en: "This is my friend Ben. He is nine, too.", pt: "Este é meu amigo Ben. Ele também tem nove anos." },
    { img: IMG.DOG, en: "His favorite animal is a dog.", pt: "O animal favorito dele é o cachorro." },
    { img: IMG.FRIENDS, en: "We are friends and we love English!", pt: "Somos amigos e amamos inglês!" },
  ],
  DIALOG: [
    { who: "Ben", img: IMG.BEN, en: "Hi! What's your name?", pt: "Oi! Qual é seu nome?" },
    { who: "Lily", img: IMG.LILY, en: "My name is Lily. And you?", pt: "Meu nome é Lily. E você?" },
    { who: "Ben", img: IMG.BEN, en: "I am Ben. How old are you?", pt: "Sou Ben. Quantos anos você tem?" },
    { who: "Lily", img: IMG.LILY, en: "I am nine years old. Where are you from?", pt: "Tenho nove anos. De onde você é?" },
    { who: "Ben", img: IMG.BEN, en: "I am from Brazil. I live in Rio.", pt: "Sou do Brasil. Moro no Rio." },
    { who: "Lily", img: IMG.LILY, en: "Nice to meet you, Ben!", pt: "Prazer em conhecer, Ben!" },
  ],
  READING: {
    title: "About Me",
    img: IMG.LILY,
    parts: [
      { en: "My name is Lily.", pt: "Meu nome é Lily.", highlight: ["My name is"] },
      { en: "I am nine years old.", pt: "Tenho nove anos.", highlight: ["I am"] },
      { en: "I live in Brazil.", pt: "Moro no Brasil.", highlight: ["I live in"] },
      { en: "My favorite color is pink.", pt: "Minha cor favorita é rosa.", highlight: ["favorite color"] },
      { en: "This is my friend Ben.", pt: "Este é meu amigo Ben.", highlight: ["This is my friend"] },
    ],
  },
  WRITING: [
    { prompt: "My name ______ Lily.", answer: "is", hint: "TO BE na 3ª pessoa singular.", options: ["is", "am", "are"] },
    { prompt: "I ______ eight years old.", answer: "am", hint: "TO BE com I.", options: ["am", "is", "are"] },
    { prompt: "I live ______ Brazil.", answer: "in", hint: "Usamos IN com países.", options: ["in", "on", "at"] },
    { prompt: "This is ______ friend Ben. (meu)", answer: "my", hint: "Possessivo de I.", options: ["my", "your", "his"] },
    { prompt: "______ favorite color is blue. (dela)", answer: "Her", hint: "Possessivo de she.", options: ["Her", "His", "My"] },
  ],
  QUIZ: [
    { q: "Como perguntamos a idade?", options: [{ text: "How old are you?", correct: true }, { text: "Where are you?" }, { text: "What's your name?" }] },
    { q: "Complete: I ___ from Brazil.", options: [{ text: "is" }, { text: "am", correct: true }, { text: "are" }] },
    { q: "Como se diz 'meu amigo'?", options: [{ text: "His friend" }, { text: "My friend", correct: true }, { text: "Your friend" }] },
    { q: "'She is nine' significa:", options: [{ text: "Ela tem nove", correct: true }, { text: "Eu tenho nove" }, { text: "Eles têm nove" }] },
    { q: "Qual frase apresenta um amigo?", options: [{ text: "This is my friend Ben.", correct: true }, { text: "I go to school." }, { text: "I eat breakfast." }] },
  ],
  REAL_LIFE: [
    { situation: "🤝 Você conheceu alguém novo. Como se apresenta?", answer: "Hi! My name is ___. Nice to meet you." },
    { situation: "🎂 Alguém pergunta sua idade.", answer: "I am ___ years old." },
    { situation: "🌎 Alguém pergunta de onde você é.", answer: "I am from Brazil. I live in ___." },
    { situation: "🎨 Perguntam sua cor favorita.", answer: "My favorite color is ___." },
    { situation: "👫 Apresentando um amigo.", answer: "This is my friend ___." },
  ],
  GRAMMAR: {
    focus: "Verb TO BE + Possessivos (my, your, his, her)",
    why:
      'TO BE muda com o pronome: I AM, You ARE, He/She IS. Possessivos indicam de quem é a coisa: MY (meu), YOUR (seu), HIS (dele), HER (dela).',
    examples: [
      { en: "I am from Brazil.", pt: "Eu sou do Brasil." },
      { en: "You are my friend.", pt: "Você é meu amigo." },
      { en: "She is nine years old.", pt: "Ela tem nove anos." },
      { en: "His name is Ben.", pt: "O nome dele é Ben." },
    ],
    errors: [
      { wrong: "I is nine.", right: "I am nine.", why: "Com I usamos AM, nunca IS." },
      { wrong: "She my friend.", right: "She is my friend.", why: "Frase precisa do verbo IS." },
      { wrong: "His name is Lily.", right: "Her name is Lily.", why: "Lily é menina → HER." },
    ],
  },
  SONG: {
    title: "This Is Me!",
    hookPt: "Cante mostrando você mesmo!",
    verses: [
      { en: "My name is me,", pt: "Meu nome sou eu,", emoji: "📛" },
      { en: "I'm proud to be,", pt: "Tenho orgulho,", emoji: "✨" },
      { en: "I live in Brazil,", pt: "Moro no Brasil,", emoji: "🌎" },
      { en: "So happy and free!", pt: "Feliz e livre!", emoji: "🎉" },
      { en: "My favorite color,", pt: "Minha cor favorita,", emoji: "🎨" },
      { en: "My favorite food,", pt: "Comida favorita,", emoji: "🍕" },
      { en: "This is my world,", pt: "Esse é meu mundo,", emoji: "🌟" },
      { en: "It feels so good!", pt: "É muito bom!", emoji: "💛" },
    ],
  },
  HUNTER: {
    intro: "Escolha a resposta correta pra cada pergunta!",
    rounds: [
      { promptEn: "What's your name?", promptPt: "Qual é seu nome?", targetLabel: "My name is Lily.", objects: [
        { id: "a", label: "My name is Lily.", img: "", isTarget: true },
        { id: "b", label: "I am ten.", img: "" },
        { id: "c", label: "I live in Brazil.", img: "" },
      ]},
      { promptEn: "How old are you?", promptPt: "Quantos anos?", targetLabel: "I am nine years old.", objects: [
        { id: "a", label: "My name is Ben.", img: "" },
        { id: "b", label: "I am nine years old.", img: "", isTarget: true },
        { id: "c", label: "I like pizza.", img: "" },
      ]},
      { promptEn: "Where are you from?", promptPt: "De onde você é?", targetLabel: "I am from Brazil.", objects: [
        { id: "a", label: "It is blue.", img: "" },
        { id: "b", label: "I am from Brazil.", img: "", isTarget: true },
        { id: "c", label: "This is my friend.", img: "" },
      ]},
      { promptEn: "What is your favorite color?", promptPt: "Cor favorita?", targetLabel: "My favorite color is blue.", objects: [
        { id: "a", label: "My favorite color is blue.", img: "", isTarget: true },
        { id: "b", label: "I am eight.", img: "" },
        { id: "c", label: "I live in Rio.", img: "" },
      ]},
      { promptEn: "Who is this?", promptPt: "Quem é este?", targetLabel: "This is my friend Ben.", objects: [
        { id: "a", label: "I am nine.", img: "" },
        { id: "b", label: "This is my friend Ben.", img: "", isTarget: true },
        { id: "c", label: "It's a dog.", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Encontre os pares: pergunta ↔ resposta.",
    pairs: [
      { id: "n", en: "Name", pt: "Nome", img: IMG.LILY },
      { id: "b", en: "Birthday", pt: "Aniversário", img: IMG.RAINBOW },
      { id: "f", en: "Friend", pt: "Amigo", img: IMG.FRIENDS },
      { id: "c", en: "Country", pt: "País", img: IMG.AIRPORT },
    ],
  },
  BOOK: {
    title: "My Profile Card",
    intro: "Vira as páginas — cada uma conta uma parte de você.",
    pages: [
      { en: "Hello! My name is Lily.", pt: "Oi! Meu nome é Lily.", img: IMG.LILY, badge: "📛" },
      { en: "I am nine years old.", pt: "Tenho nove anos.", img: IMG.RAINBOW, badge: "🎂" },
      { en: "I live in Brazil.", pt: "Moro no Brasil.", img: IMG.AIRPORT, badge: "🌎" },
      { en: "My favorite color is pink.", pt: "Cor favorita: rosa.", img: IMG.RAINBOW, badge: "🎨" },
      { en: "This is my friend Ben.", pt: "Este é meu amigo Ben.", img: IMG.BEN, badge: "🤝" },
    ],
  },
  CULTURE: {
    title: "Introducing Yourself Around the World 🌎",
    emoji: "🤝",
    paragraphs: [
      { en: "In English-speaking countries, people shake hands and say 'Nice to meet you'.", pt: "Em países de língua inglesa, as pessoas apertam a mão e dizem 'Nice to meet you'." },
      { en: "In Brazil, we hug and give kisses on the cheek!", pt: "No Brasil, a gente abraça e dá beijinho no rosto!" },
      { pt: "Cada cultura tem um jeito diferente de dizer oi — e todos são legais! 💛" },
    ],
  },
};

export default lesson;
