// Inglês 5º Ano — Unit 2 "Our Amazing World 🌎"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u5-a02-world",
  meta: {
    unitLabel: "Unit 2 · Lesson 2 — Our Amazing World 🌎",
    headerKicker: "My English Portfolio — Level 2 · 5th Grade",
    coverKicker: "Países, culturas & idiomas",
    coverTitle: "Our Amazing World 🌎",
    coverSubtitle:
      "Falar de países, nacionalidades e idiomas: I am Brazilian. People speak English in the USA. Where is Japan?",
    storyTitle: "The Passport Adventure",
    vocabularyTitle: "Countries & Languages",
    speakingTargets: [
      "I am Brazilian.",
      "I speak Portuguese.",
      "People speak English in the USA.",
      "Where is Japan?",
      "Japan is in Asia.",
      "The flag is beautiful.",
    ],
    listeningIntro: "Ouça Ben falando a nacionalidade dele.",
    listeningQuestion: 'Ben disse: "I am American." Ele é de qual país?',
    listeningOptions: ["Brasil", "Estados Unidos", "Japão"],
    listeningCorrect: "Estados Unidos",
    listeningWrongHint: '"American" = dos Estados Unidos.',
    readingNarration:
      "Nacionalidades geralmente vêm do país: Brazil → Brazilian, Japan → Japanese, France → French.",
    grammarNarration:
      "TO BE mostra nacionalidade: I AM Brazilian. Pergunte com WHERE + IS: Where IS Italy? Nacionalidades começam com letra MAIÚSCULA.",
    finalProjectIntro: "Seu passaporte do mundo! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `WORLD PASSPORT — Name: ${name}. Nationality: Brazilian. Language: Portuguese. Continent: South America. I love to learn about other countries. I dream of visiting Japan, France, and the USA. The world is amazing!`,
    finalProjectSectionTitle: "World Passport",
  },
  VOCAB: [
    { id: "brazil", en: "Brazil 🇧🇷", pt: "Brasil", img: IMG.LILY },
    { id: "usa", en: "USA 🇺🇸", pt: "Estados Unidos", img: IMG.BEN },
    { id: "japan", en: "Japan 🇯🇵", pt: "Japão", img: IMG.BUDDY },
    { id: "france", en: "France 🇫🇷", pt: "França", img: IMG.EMILY },
    { id: "english", en: "English", pt: "Inglês (idioma)", img: IMG.TEACHER },
    { id: "portuguese", en: "Portuguese", pt: "Português", img: IMG.LILY },
    { id: "flag", en: "Flag 🚩", pt: "Bandeira", img: IMG.RAINBOW },
    { id: "continent", en: "Continent 🌍", pt: "Continente", img: IMG.CITY_COVER },
  ],
  STORY: [
    { img: IMG.LILY, en: "Hi! I'm Lily. I am Brazilian.", pt: "Oi! Sou Lily. Sou brasileira." },
    { img: IMG.LILY, en: "I speak Portuguese and a little English.", pt: "Falo português e um pouco de inglês." },
    { img: IMG.BEN, en: "Hi! I'm Ben. I am American. I speak English.", pt: "Oi! Sou Ben. Sou americano. Falo inglês." },
    { img: IMG.BUDDY, en: "I am Buddy the robot. I speak all languages!", pt: "Sou Buddy, o robô. Falo todos os idiomas!" },
    { img: IMG.PASSPORT, en: "Together we travel around the world.", pt: "Juntos viajamos pelo mundo." },
    { img: IMG.AIRPORT, en: "Today we go to Japan. People there speak Japanese.", pt: "Hoje vamos ao Japão. Lá falam japonês." },
    { img: IMG.RAINBOW, en: "Every country has a flag and a language.", pt: "Todo país tem bandeira e um idioma." },
    { img: IMG.FRIENDS, en: "The world is big and full of friends!", pt: "O mundo é grande e cheio de amigos!" },
  ],
  DIALOG: [
    { who: "Lily", img: IMG.LILY, en: "Ben, where are you from?", pt: "Ben, de onde você é?" },
    { who: "Ben", img: IMG.BEN, en: "I'm from the USA. I am American.", pt: "Sou dos EUA. Sou americano." },
    { who: "Lily", img: IMG.LILY, en: "I am Brazilian. I love my country!", pt: "Sou brasileira. Amo meu país!" },
    { who: "Ben", img: IMG.BEN, en: "Where is Brazil?", pt: "Onde fica o Brasil?" },
    { who: "Lily", img: IMG.LILY, en: "Brazil is in South America.", pt: "O Brasil fica na América do Sul." },
    { who: "Buddy", img: IMG.BUDDY, en: "People speak Portuguese in Brazil.", pt: "No Brasil se fala português." },
    { who: "Lily", img: IMG.LILY, en: "Yes! And Portuguese is beautiful.", pt: "Sim! E o português é lindo." },
  ],
  READING: {
    title: "My Country",
    img: IMG.RAINBOW,
    parts: [
      { en: "I am Brazilian.", pt: "Sou brasileiro(a).", highlight: ["am"] },
      { en: "Brazil is in South America.", pt: "O Brasil fica na América do Sul.", highlight: ["is in"] },
      { en: "People speak Portuguese here.", pt: "Aqui se fala português.", highlight: ["speak"] },
      { en: "Our flag has green, yellow and blue.", pt: "Nossa bandeira tem verde, amarelo e azul.", highlight: ["flag"] },
      { en: "I love my country!", pt: "Amo meu país!", highlight: ["love"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ Brazilian.", answer: "am", hint: "TO BE 1ª pessoa.", options: ["am", "is", "are"] },
    { prompt: "Japan ______ in Asia.", answer: "is", hint: "TO BE 3ª pessoa.", options: ["is", "am", "are"] },
    { prompt: "People ______ English in the USA.", answer: "speak", hint: "Verbo FALAR.", options: ["speak", "am", "are"] },
    { prompt: "______ is France? (pergunta)", answer: "Where", hint: "Pergunta de lugar.", options: ["Where", "What", "Who"] },
    { prompt: "The ______ is beautiful. (bandeira)", answer: "flag", hint: "Símbolo do país.", options: ["flag", "car", "book"] },
  ],
  QUIZ: [
    { q: "'Brazilian' é:", options: [{ text: "Brasileiro", correct: true }, { text: "Americano" }, { text: "Japonês" }] },
    { q: "Complete: I ___ Brazilian.", options: [{ text: "am", correct: true }, { text: "is" }, { text: "are" }] },
    { q: "'Flag' é:", options: [{ text: "Cidade" }, { text: "Bandeira", correct: true }, { text: "Idioma" }] },
    { q: "'Continent' é:", options: [{ text: "Continente", correct: true }, { text: "País" }, { text: "Cidade" }] },
    { q: "Complete: Where ___ Japan?", options: [{ text: "am" }, { text: "is", correct: true }, { text: "are" }] },
    { q: "'English' aqui é:", options: [{ text: "Idioma inglês", correct: true }, { text: "Escola" }, { text: "Cidade" }] },
    { q: "'People speak Portuguese' significa:", options: [{ text: "As pessoas falam português", correct: true }, { text: "As pessoas leem" }, { text: "As pessoas viajam" }] },
  ],
  REAL_LIFE: [
    { situation: "🌎 Dizendo sua nacionalidade.", answer: "I am Brazilian." },
    { situation: "🗣️ Dizendo o idioma que fala.", answer: "I speak Portuguese." },
    { situation: "❓ Perguntando onde fica um país.", answer: "Where is Japan?" },
    { situation: "🚩 Descrevendo a bandeira.", answer: "The flag is green and yellow." },
    { situation: "🌍 Falando o continente.", answer: "Brazil is in South America." },
  ],
  GRAMMAR: {
    focus: "TO BE + Nacionalidades + Where questions",
    why:
      "TO BE é o verbo pra nacionalidade: I AM Brazilian, She IS Japanese. Pra perguntar onde fica: WHERE + IS/ARE. Nacionalidades e países começam com MAIÚSCULA.",
    examples: [
      { en: "I am Brazilian.", pt: "Sou brasileiro." },
      { en: "She is Japanese.", pt: "Ela é japonesa." },
      { en: "Where is Italy?", pt: "Onde fica a Itália?" },
      { en: "People speak French in France.", pt: "Falam francês na França." },
      { en: "Brazil is in South America.", pt: "O Brasil está na América do Sul." },
    ],
    errors: [
      { wrong: "I am brazilian.", right: "I am Brazilian.", why: "Nacionalidade com MAIÚSCULA." },
      { wrong: "Where Japan is?", right: "WHERE IS Japan?", why: "IS vem antes do sujeito na pergunta." },
      { wrong: "People speaks English.", right: "People SPEAK English.", why: "People é plural." },
    ],
  },
  SONG: {
    title: "Around the World",
    hookPt: "Cante e conheça o mundo!",
    verses: [
      { en: "Around the world, so many friends,", pt: "Ao redor do mundo, tantos amigos,", emoji: "🌍" },
      { en: "Different flags, different lands.", pt: "Bandeiras e terras diferentes.", emoji: "🚩" },
      { en: "English, Portuguese, French, Japanese,", pt: "Inglês, português, francês, japonês,", emoji: "🗣️" },
      { en: "We can learn them all with ease!", pt: "Podemos aprender todos com facilidade!", emoji: "🎓" },
      { en: "North, South, East, and West,", pt: "Norte, Sul, Leste e Oeste,", emoji: "🧭" },
      { en: "Every country is the best!", pt: "Cada país é o melhor!", emoji: "🌟" },
    ],
  },
  HUNTER: {
    intro: "Escolha a palavra certa!",
    rounds: [
      { promptEn: "'Brazilian' é:", promptPt: "'Brazilian' é:", targetLabel: "Brasileiro", objects: [
        { id: "a", label: "Brasileiro", img: "", isTarget: true },
        { id: "b", label: "Americano", img: "" },
        { id: "c", label: "Japonês", img: "" },
      ]},
      { promptEn: "Complete: I ___ Brazilian.", promptPt: "Complete: I ___ Brazilian.", targetLabel: "am", objects: [
        { id: "a", label: "is", img: "" },
        { id: "b", label: "am", img: "", isTarget: true },
        { id: "c", label: "are", img: "" },
      ]},
      { promptEn: "'Flag' é:", promptPt: "'Flag' é:", targetLabel: "Bandeira", objects: [
        { id: "a", label: "País", img: "" },
        { id: "b", label: "Bandeira", img: "", isTarget: true },
        { id: "c", label: "Cidade", img: "" },
      ]},
      { promptEn: "Complete: Where ___ Japan?", promptPt: "Complete: Where ___ Japan?", targetLabel: "is", objects: [
        { id: "a", label: "am", img: "" },
        { id: "b", label: "are", img: "" },
        { id: "c", label: "is", img: "", isTarget: true },
      ]},
      { promptEn: "'Continent' é:", promptPt: "'Continent' é:", targetLabel: "Continente", objects: [
        { id: "a", label: "Idioma", img: "" },
        { id: "b", label: "Continente", img: "", isTarget: true },
        { id: "c", label: "Bandeira", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares de países!",
    pairs: [
      { id: "a", en: "Brazil 🇧🇷", pt: "Brasil", img: IMG.LILY },
      { id: "b", en: "USA 🇺🇸", pt: "EUA", img: IMG.BEN },
      { id: "c", en: "Japan 🇯🇵", pt: "Japão", img: IMG.BUDDY },
      { id: "d", en: "France 🇫🇷", pt: "França", img: IMG.EMILY },
    ],
  },
  BOOK: {
    title: "World Passport",
    intro: "Seu passaporte do mundo!",
    pages: [
      { en: "Page 1 — Name & country.", pt: "Pág. 1 — Nome e país.", img: IMG.PASSPORT, badge: "🛂" },
      { en: "Page 2 — I am Brazilian.", pt: "Pág. 2 — Sou brasileiro.", img: IMG.LILY, badge: "🇧🇷" },
      { en: "Page 3 — Japan is in Asia.", pt: "Pág. 3 — Japão fica na Ásia.", img: IMG.BUDDY, badge: "🇯🇵" },
      { en: "Page 4 — France is in Europe.", pt: "Pág. 4 — França fica na Europa.", img: IMG.EMILY, badge: "🇫🇷" },
      { en: "Page 5 — The world is amazing!", pt: "Pág. 5 — O mundo é incrível!", img: IMG.CITY_COVER, badge: "🌎" },
      { en: "The End — My passport!", pt: "Fim — Meu passaporte!", img: IMG.PASSPORT, badge: "⭐" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "É o aeroporto! Toque nos itens de viagem.",
    img: IMG.AIRPORT,
    items: [
      { en: "Passport", pt: "Passaporte", emoji: "🛂" },
      { en: "Suitcase", pt: "Mala", emoji: "🧳" },
      { en: "Map", pt: "Mapa", emoji: "🗺️" },
      { en: "Airplane", pt: "Avião", emoji: "✈️" },
      { en: "Flag", pt: "Bandeira", emoji: "🚩" },
      { en: "Camera", pt: "Câmera", emoji: "📷" },
    ],
  },
  CULTURE: {
    title: "Amazing Countries 🌍",
    emoji: "🌎",
    paragraphs: [
      { en: "Japan has cherry blossoms every spring — a beautiful pink!", pt: "O Japão tem as flores de cerejeira todo ano — um rosa lindo!" },
      { en: "France is famous for the Eiffel Tower in Paris.", pt: "A França é famosa pela Torre Eiffel em Paris." },
      { pt: "Cada país tem sua beleza. O Brasil tem floresta, praia e alegria!" },
    ],
  },
};

export default lesson;
