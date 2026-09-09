// Ingles 3º Ano — Unit 7 "English Adventure 🌟" — Final Adventure
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u3-a07-adventure",
  meta: {
    unitLabel: "Unit 7 · Lesson 7 — English Adventure 🌟",
    headerKicker: "My English Adventure — 3rd Grade",
    coverKicker: "Final Adventure",
    coverTitle: "English Adventure 🌟",
    coverSubtitle:
      "É hora da grande aventura final! Tudo o que aprendemos aparece numa única história — verbo TO BE, Simple Present, There is/are, Can, Want to.",
    storyTitle: "The Great English Adventure",
    vocabularyTitle: "Adventure Words",
    speakingTargets: [
      "I am ready for adventure!",
      "I can travel the world.",
      "There are many friends here.",
      "I want to explore.",
      "I like adventure.",
      "This is my English journal.",
    ],
    listeningIntro: "Ouça a introdução da grande aventura.",
    listeningQuestion: 'Lily disse: "I want to explore the world." O que ela quer?',
    listeningOptions: ["Dormir", "Explorar o mundo", "Comer"],
    listeningCorrect: "Explorar o mundo",
    listeningWrongHint: '"Explore the world" = explorar o mundo.',
    readingNarration:
      'Aqui a gente revisa TUDO: TO BE, Simple Present, There is/are, Can, Want to. Repare como as frases juntam várias regras!',
    grammarNarration:
      'Grande revisão! TO BE (I am/is/are). Simple Present (I like/she likes). There is/There are. Can (habilidade). Want to + verbo (desejo). Tudo junto agora!',
    finalProjectIntro: "É o seu diário final! Escreva seu nome e leia sua aventura:",
    finalProjectPhrase: (name: string) =>
      `Hello! My name is ${name}. I am a young explorer. I can speak English. I want to travel the world. There are many friends on my journey. This is my English Adventure Journal!`,
    finalProjectSectionTitle: "My English Adventure Journal",
  },
  VOCAB: [
    { id: "adv", en: "Adventure 🌟", pt: "Aventura", img: IMG.RAINBOW },
    { id: "exp", en: "Explore 🔍", pt: "Explorar", img: IMG.AIRPORT },
    { id: "j", en: "Journal 📔", pt: "Diário", img: IMG.PASSPORT },
    { id: "map", en: "Map 🗺️", pt: "Mapa", img: IMG.CLASSROOM },
    { id: "f", en: "Friends 👫", pt: "Amigos", img: IMG.FRIENDS },
    { id: "w", en: "World 🌎", pt: "Mundo", img: IMG.AIRPORT },
    { id: "d", en: "Dream 💭", pt: "Sonho", img: IMG.LILY },
    { id: "e", en: "English 🇬🇧", pt: "Inglês", img: IMG.CLASSROOM },
  ],
  STORY: [
    { img: IMG.LILY, en: "Lily and Ben are ready for their biggest adventure.", pt: "Lily e Ben estão prontos pra maior aventura." },
    { img: IMG.PASSPORT, en: "They pack their journals and passports.", pt: "Eles guardam diários e passaportes." },
    { img: IMG.AIRPORT, en: "First stop: the airport. They can travel now!", pt: "Primeira parada: aeroporto. Podem viajar!" },
    { img: IMG.RAINBOW, en: "In the jungle, there are monkeys and colorful birds.", pt: "Na selva, macacos e pássaros coloridos." },
    { img: IMG.SCHOOL, en: "In a new city, they visit museums and parks.", pt: "Numa nova cidade, museus e parques." },
    { img: IMG.FRIENDS, en: "They meet new friends and speak English everywhere.", pt: "Fazem novos amigos e falam inglês em todo lugar." },
    { img: IMG.MORNING, en: "They eat healthy food to have energy.", pt: "Comem comida saudável pra ter energia." },
    { img: IMG.LILY, en: "'What an amazing English Adventure!' they say.", pt: "'Que aventura incrível!', dizem." },
  ],
  DIALOG: [
    { who: "Ben", img: IMG.BEN, en: "Lily, are you ready for our adventure?", pt: "Lily, pronta pra aventura?" },
    { who: "Lily", img: IMG.LILY, en: "Yes! I am ready. I can speak English!", pt: "Sim! Estou pronta. Sei falar inglês!" },
    { who: "Ben", img: IMG.BEN, en: "Where do you want to go first?", pt: "Aonde quer ir primeiro?" },
    { who: "Lily", img: IMG.LILY, en: "I want to go to the jungle. There are so many animals!", pt: "Quero ir pra selva. Tem tantos animais!" },
    { who: "Ben", img: IMG.BEN, en: "Do you like adventure?", pt: "Você gosta de aventura?" },
    { who: "Lily", img: IMG.LILY, en: "Yes, I love it. This is my dream!", pt: "Amo. É meu sonho!" },
    { who: "Ben", img: IMG.BEN, en: "Let's write everything in our journal!", pt: "Vamos escrever tudo no diário!" },
  ],
  READING: {
    title: "The Great Adventure",
    img: IMG.RAINBOW,
    parts: [
      { en: "I am an explorer.", pt: "Sou explorador.", highlight: ["am"] },
      { en: "I can speak English.", pt: "Sei falar inglês.", highlight: ["can"] },
      { en: "There are amazing places to visit.", pt: "Há lugares incríveis pra visitar.", highlight: ["There are"] },
      { en: "I want to travel the world.", pt: "Quero viajar o mundo.", highlight: ["want to"] },
      { en: "My friends and I like adventure.", pt: "Meus amigos e eu gostamos de aventura.", highlight: ["like"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ an explorer. (TO BE)", answer: "am", hint: "TO BE com I.", options: ["am", "is", "are"] },
    { prompt: "I ______ speak English. (poder)", answer: "can", hint: "Habilidade.", options: ["can", "want", "is"] },
    { prompt: "There ______ many animals. (plural)", answer: "are", hint: "Plural.", options: ["are", "is", "am"] },
    { prompt: "I want ______ travel.", answer: "to", hint: "WANT sempre + TO.", options: ["to", "at", "in"] },
    { prompt: "She ______ adventure. (gostar, 3ª pessoa)", answer: "likes", hint: "3ª pessoa singular com S.", options: ["likes", "like", "liking"] },
  ],
  QUIZ: [
    { q: "Complete: I ___ ready. (TO BE)", options: [{ text: "am", correct: true }, { text: "is" }, { text: "are" }] },
    { q: "Complete: There ___ two friends.", options: [{ text: "is" }, { text: "are", correct: true }, { text: "am" }] },
    { q: "Como se diz 'Eu quero viajar'?", options: [{ text: "I want travel." }, { text: "I want to travel.", correct: true }, { text: "I to travel." }] },
    { q: "'I can swim' significa:", options: [{ text: "Eu sei nadar", correct: true }, { text: "Eu quero nadar" }, { text: "Eu não nado" }] },
    { q: "Complete: He ___ English. (gostar)", options: [{ text: "like" }, { text: "likes", correct: true }, { text: "liking" }] },
    { q: "Onde vive o leão? (revisão)", options: [{ text: "Ocean" }, { text: "Savanna", correct: true }, { text: "Farm" }] },
    { q: "'Turn left' significa:", options: [{ text: "Vá reto" }, { text: "Vire à esquerda", correct: true }, { text: "Pare" }] },
  ],
  REAL_LIFE: [
    { situation: "🌟 Alguém pergunta se você está pronto.", answer: "Yes, I am ready!" },
    { situation: "🔍 Falando o que você quer fazer.", answer: "I want to explore." },
    { situation: "🌎 Perguntam se você gosta de aventura.", answer: "Yes, I love adventure." },
    { situation: "👫 Apresentando seus amigos de viagem.", answer: "These are my friends." },
    { situation: "📔 Falando do seu diário.", answer: "This is my English journal." },
  ],
  GRAMMAR: {
    focus: "REVIEW — TO BE + Simple Present + There is/are + Can + Want to",
    why:
      'Grande revisão! Toda frase completa em inglês usa uma dessas regras. Junte-as e você fala qualquer coisa: sujeito + verbo (TO BE ou de ação) + complemento.',
    examples: [
      { en: "I am ready.", pt: "Estou pronto." },
      { en: "She likes English.", pt: "Ela gosta de inglês." },
      { en: "There are many friends.", pt: "Há muitos amigos." },
      { en: "I can travel.", pt: "Sei viajar." },
      { en: "I want to explore.", pt: "Quero explorar." },
    ],
    errors: [
      { wrong: "I is ready.", right: "I am ready.", why: "Com I sempre AM." },
      { wrong: "She like it.", right: "She likes it.", why: "3ª pessoa singular pede -S." },
      { wrong: "I want explore.", right: "I want TO explore.", why: "WANT sempre + TO." },
      { wrong: "There is two friends.", right: "There are two friends.", why: "Plural = ARE." },
    ],
  },
  SONG: {
    title: "English Adventure",
    hookPt: "Cante alto e comemore o fim do 3º ano!",
    verses: [
      { en: "I am ready, I am strong,", pt: "Tô pronto, tô forte,", emoji: "💪" },
      { en: "English with me all along,", pt: "Inglês comigo sempre,", emoji: "🇬🇧" },
      { en: "I can speak, I can play,", pt: "Sei falar, sei brincar,", emoji: "🎤" },
      { en: "I can dream in a brand new way!", pt: "Sei sonhar de um jeito novo!", emoji: "💭" },
      { en: "There are friends around the world,", pt: "Há amigos no mundo todo,", emoji: "🌍" },
      { en: "Boys and girls, flags unfurled,", pt: "Meninos, meninas,", emoji: "🚩" },
      { en: "I want to travel far and wide,", pt: "Quero viajar longe,", emoji: "✈️" },
      { en: "English is my perfect guide!", pt: "Inglês é meu guia!", emoji: "⭐" },
    ],
  },
  HUNTER: {
    intro: "Revisão! Escolha a frase certa.",
    rounds: [
      { promptEn: "Complete: I ___ eight.", promptPt: "Complete: I ___ eight.", targetLabel: "am", objects: [
        { id: "a", label: "am", img: "", isTarget: true },
        { id: "b", label: "is", img: "" },
        { id: "c", label: "are", img: "" },
      ]},
      { promptEn: "Complete: She ___ pizza.", promptPt: "Complete: She ___ pizza.", targetLabel: "likes", objects: [
        { id: "a", label: "like", img: "" },
        { id: "b", label: "likes", img: "", isTarget: true },
        { id: "c", label: "liking", img: "" },
      ]},
      { promptEn: "Complete: There ___ 5 monkeys.", promptPt: "Complete: There ___ 5 monkeys.", targetLabel: "are", objects: [
        { id: "a", label: "is", img: "" },
        { id: "b", label: "are", img: "", isTarget: true },
        { id: "c", label: "am", img: "" },
      ]},
      { promptEn: "Complete: I ___ swim.", promptPt: "Complete: I ___ swim.", targetLabel: "can", objects: [
        { id: "a", label: "can", img: "", isTarget: true },
        { id: "b", label: "am", img: "" },
        { id: "c", label: "to", img: "" },
      ]},
      { promptEn: "Complete: I want ___ travel.", promptPt: "Complete: I want ___ travel.", targetLabel: "to", objects: [
        { id: "a", label: "to", img: "", isTarget: true },
        { id: "b", label: "at", img: "" },
        { id: "c", label: "in", img: "" },
      ]},
      { promptEn: "Where do lions live?", promptPt: "Onde vive o leão?", targetLabel: "Savanna", objects: [
        { id: "a", label: "Ocean 🌊", img: "" },
        { id: "b", label: "Savanna 🌾", img: "", isTarget: true },
        { id: "c", label: "Desert 🏜️", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Grande revisão em pares!",
    pairs: [
      { id: "a", en: "Adventure 🌟", pt: "Aventura", img: IMG.RAINBOW },
      { id: "j", en: "Journal 📔", pt: "Diário", img: IMG.PASSPORT },
      { id: "w", en: "World 🌎", pt: "Mundo", img: IMG.AIRPORT },
      { id: "f", en: "Friends 👫", pt: "Amigos", img: IMG.FRIENDS },
    ],
  },
  BOOK: {
    title: "My English Adventure Journal",
    intro: "O seu diário final! Vira as páginas e reveja tudo.",
    pages: [
      { en: "Chapter 1 — I am me!", pt: "Cap. 1 — Eu sou eu!", img: IMG.LILY, badge: "🌟" },
      { en: "Chapter 2 — My school and my friends.", pt: "Cap. 2 — Escola e amigos.", img: IMG.CLASSROOM, badge: "📚" },
      { en: "Chapter 3 — I live healthy.", pt: "Cap. 3 — Vida saudável.", img: IMG.MORNING, badge: "🍎" },
      { en: "Chapter 4 — Animals of the world.", pt: "Cap. 4 — Animais do mundo.", img: IMG.DOG, badge: "🦁" },
      { en: "Chapter 5 — In my city.", pt: "Cap. 5 — Na minha cidade.", img: IMG.SCHOOL, badge: "🚦" },
      { en: "Chapter 6 — Time to travel!", pt: "Cap. 6 — Viajar!", img: IMG.AIRPORT, badge: "✈️" },
      { en: "The End — I speak English!", pt: "Fim — Eu falo inglês!", img: IMG.RAINBOW, badge: "🏅" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "É a sala do explorador. Toque em cada item pra revisar o que aprendemos!",
    img: IMG.CLASSROOM,
    items: [
      { en: "Journal", pt: "Diário", emoji: "📔" },
      { en: "Map", pt: "Mapa", emoji: "🗺️" },
      { en: "Passport", pt: "Passaporte", emoji: "📔" },
      { en: "Suitcase", pt: "Mala", emoji: "🧳" },
      { en: "Photos", pt: "Fotos", emoji: "📸" },
      { en: "Star medal", pt: "Medalha", emoji: "🏅" },
    ],
  },
  CULTURE: {
    title: "You Speak English! 🌍",
    emoji: "🏅",
    paragraphs: [
      { en: "You just finished 3rd grade English! You can talk, read, write, and understand.", pt: "Você acabou o inglês do 3º ano! Sabe falar, ler, escrever e entender." },
      { en: "English opens doors to friends, music, movies and travel around the world.", pt: "Inglês abre portas pra amigos, música, filmes e viagens." },
      { pt: "Parabéns, explorador(a)! O próximo passo é o 4º ano — te espero lá! 🌟" },
    ],
  },
};

export default lesson;
