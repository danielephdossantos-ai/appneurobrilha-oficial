// Inglês 4º Ano — Unit 5 "Around My City 🏙️"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u4-a05-city",
  meta: {
    unitLabel: "Unit 5 · Lesson 5 — Around My City 🏙️",
    headerKicker: "My English Adventure — 4th Grade",
    coverKicker: "Cidade & localização",
    coverTitle: "Around My City 🏙️",
    coverSubtitle:
      "Aprender a pedir e dar direções: prepositions of place + imperativos (Go straight, Turn right).",
    storyTitle: "Lost in the City",
    vocabularyTitle: "City Places",
    speakingTargets: [
      "Where is the museum?",
      "It is next to the library.",
      "Go straight.",
      "Turn right.",
      "The bakery is on the corner.",
      "The hospital is in front of the park.",
    ],
    listeningIntro: "Ouça alguém dando direções.",
    listeningQuestion: '"Turn left at the bakery." O que fazer na padaria?',
    listeningOptions: ["Virar à direita", "Virar à esquerda", "Seguir reto"],
    listeningCorrect: "Virar à esquerda",
    listeningWrongHint: '"Turn left" = vire à esquerda.',
    readingNarration:
      'Prepositions de lugar: NEXT TO (ao lado), IN FRONT OF (em frente), BEHIND (atrás), BETWEEN (entre), ON THE CORNER (na esquina).',
    grammarNarration:
      'Pra dar ordem/direção use IMPERATIVO: verbo direto sem sujeito. GO straight (siga reto), TURN right (vire à direita), STOP (pare), CROSS the street (atravesse).',
    finalProjectIntro: "Seu guia da cidade!",
    finalProjectPhrase: (name: string) =>
      `MY CITY GUIDE — by ${name}. Welcome! There are amazing places here. The museum is on Main Street. Turn right at the bakery, then go straight. The library is next to the school. Come and enjoy my beautiful city!`,
    finalProjectSectionTitle: "My City Guide",
  },
  VOCAB: [
    { id: "h", en: "Hospital 🏥", pt: "Hospital", img: IMG.HOSPITAL },
    { id: "m", en: "Museum 🖼️", pt: "Museu", img: IMG.MUSEUM },
    { id: "l", en: "Library 📚", pt: "Biblioteca", img: IMG.LIBRARY },
    { id: "bs", en: "Bus station 🚌", pt: "Rodoviária", img: IMG.BUS_STATION },
    { id: "sm", en: "Shopping mall 🏬", pt: "Shopping", img: IMG.SHOPPING_MALL },
    { id: "ba", en: "Bakery 🥖", pt: "Padaria", img: IMG.BAKERY },
    { id: "ci", en: "Cinema 🎬", pt: "Cinema", img: IMG.CINEMA },
    { id: "re", en: "Restaurant 🍽️", pt: "Restaurante", img: IMG.RESTAURANT },
  ],
  STORY: [
    { img: IMG.LILY, en: "Lily is new in town and looks for the museum.", pt: "Lily é nova na cidade e procura o museu." },
    { img: IMG.CITY_COVER, en: "She asks a friend: 'Excuse me, where is the museum?'", pt: "Ela pergunta: 'Com licença, onde é o museu?'" },
    { img: IMG.BEN, en: "Ben says: 'Go straight two blocks.'", pt: "Ben: 'Siga reto duas quadras.'" },
    { img: IMG.BAKERY, en: "'Then turn right at the bakery.'", pt: "'Depois vire à direita na padaria.'" },
    { img: IMG.LIBRARY, en: "'The museum is next to the library.'", pt: "'O museu fica ao lado da biblioteca.'" },
    { img: IMG.LILY, en: "'Thank you very much!' says Lily.", pt: "'Muito obrigada!' diz Lily." },
    { img: IMG.MUSEUM, en: "Lily finds the museum easily!", pt: "Lily encontra o museu fácil!" },
    { img: IMG.CITY_COVER, en: "The city is fun when you know the way.", pt: "A cidade é legal quando você sabe o caminho." },
  ],
  DIALOG: [
    { who: "Lily", img: IMG.LILY, en: "Excuse me, where is the hospital?", pt: "Com licença, onde é o hospital?" },
    { who: "Ben", img: IMG.BEN, en: "It is in front of the park.", pt: "Fica em frente ao parque." },
    { who: "Lily", img: IMG.LILY, en: "Is it far?", pt: "É longe?" },
    { who: "Ben", img: IMG.BEN, en: "No. Go straight and turn left.", pt: "Não. Siga reto e vire à esquerda." },
    { who: "Lily", img: IMG.LILY, en: "And the bus station?", pt: "E a rodoviária?" },
    { who: "Ben", img: IMG.BEN, en: "It is next to the shopping mall.", pt: "Fica ao lado do shopping." },
    { who: "Lily", img: IMG.LILY, en: "Thanks! You are a great guide.", pt: "Obrigada! Você é um ótimo guia." },
  ],
  READING: {
    title: "My Neighborhood",
    img: IMG.CITY_COVER,
    parts: [
      { en: "The library is next to the school.", pt: "A biblioteca fica ao lado da escola.", highlight: ["next to"] },
      { en: "The bakery is on the corner.", pt: "A padaria fica na esquina.", highlight: ["corner"] },
      { en: "The park is in front of my house.", pt: "O parque fica em frente à minha casa.", highlight: ["in front of"] },
      { en: "Go straight to find the museum.", pt: "Siga reto pra achar o museu.", highlight: ["Go straight"] },
      { en: "Turn right at the hospital.", pt: "Vire à direita no hospital.", highlight: ["Turn right"] },
    ],
  },
  WRITING: [
    { prompt: "The library is ______ the school. (ao lado)", answer: "next to", hint: "Ao lado de.", options: ["next to", "under", "behind"] },
    { prompt: "______ straight two blocks. (siga)", answer: "Go", hint: "Verbo IR imperativo.", options: ["Go", "Turn", "Stop"] },
    { prompt: "______ right at the corner. (vire)", answer: "Turn", hint: "Verbo VIRAR.", options: ["Turn", "Go", "Cross"] },
    { prompt: "The park is ______ the school. (em frente)", answer: "in front of", hint: "Em frente a.", options: ["in front of", "under", "on"] },
    { prompt: "Where ______ the museum?", answer: "is", hint: "Pergunta com WHERE.", options: ["is", "are", "am"] },
  ],
  QUIZ: [
    { q: "'Turn left' significa:", options: [{ text: "Vire à direita" }, { text: "Vire à esquerda", correct: true }, { text: "Siga reto" }] },
    { q: "'Next to' significa:", options: [{ text: "Atrás" }, { text: "Ao lado", correct: true }, { text: "Debaixo" }] },
    { q: "'Museum' é:", options: [{ text: "Museu", correct: true }, { text: "Escola" }, { text: "Cinema" }] },
    { q: "Complete: ___ is the library?", options: [{ text: "What" }, { text: "Where", correct: true }, { text: "When" }] },
    { q: "'Go straight' é:", options: [{ text: "Siga reto", correct: true }, { text: "Pare" }, { text: "Volte" }] },
    { q: "'Bakery' é:", options: [{ text: "Farmácia" }, { text: "Padaria", correct: true }, { text: "Padeiro" }] },
    { q: "'In front of' é:", options: [{ text: "Atrás" }, { text: "Em frente a", correct: true }, { text: "Perto" }] },
  ],
  REAL_LIFE: [
    { situation: "🗺️ Perguntando onde fica algo.", answer: "Where is the museum?" },
    { situation: "📍 Indicando direção pra alguém.", answer: "Go straight and turn right." },
    { situation: "🏛️ Localizando dois lugares.", answer: "It is next to the library." },
    { situation: "🚌 Precisa ir pra rodoviária.", answer: "Where is the bus station?" },
    { situation: "🙏 Agradecendo a indicação.", answer: "Thank you very much!" },
  ],
  GRAMMAR: {
    focus: "Prepositions of Place + Imperatives",
    why:
      'PREPOSITIONS mostram ONDE (next to, in front of, behind, between). IMPERATIVE dá ordens/instruções: verbo direto, sem sujeito. Perfeito pra direções.',
    examples: [
      { en: "The park is next to the school.", pt: "O parque fica ao lado da escola." },
      { en: "The bank is in front of the mall.", pt: "O banco fica em frente ao shopping." },
      { en: "Go straight.", pt: "Siga reto." },
      { en: "Turn right at the corner.", pt: "Vire à direita na esquina." },
      { en: "Stop at the traffic light.", pt: "Pare no semáforo." },
    ],
    errors: [
      { wrong: "The park is next the school.", right: "next TO the school.", why: "Sempre 'next TO'." },
      { wrong: "You turn right.", right: "Turn right.", why: "Imperativo não usa sujeito." },
      { wrong: "In front the park.", right: "In front OF the park.", why: "'In front OF'." },
    ],
  },
  SONG: {
    title: "Around the City",
    hookPt: "Cante e conheça a cidade!",
    verses: [
      { en: "Turn right, turn left, go straight ahead,", pt: "Vire à direita, esquerda, siga reto,", emoji: "➡️" },
      { en: "Follow the streets that our friends said,", pt: "Siga as ruas que nossos amigos disseram,", emoji: "🗺️" },
      { en: "Museum, library, hospital too,", pt: "Museu, biblioteca, hospital,", emoji: "🏥" },
      { en: "So many places to visit — it's true!", pt: "Muitos lugares pra visitar!", emoji: "🏙️" },
      { en: "Next to, in front of, on the corner,", pt: "Ao lado, em frente, na esquina,", emoji: "📍" },
      { en: "Learning the city, we grow warmer!", pt: "Conhecendo a cidade!", emoji: "❤️" },
    ],
  },
  HUNTER: {
    intro: "Escolha o caminho certo!",
    rounds: [
      { promptEn: "'Turn right' é:", promptPt: "'Turn right' é:", targetLabel: "Vire à direita", objects: [
        { id: "a", label: "Vire à direita", img: "", isTarget: true },
        { id: "b", label: "Vire à esquerda", img: "" },
        { id: "c", label: "Siga reto", img: "" },
      ]},
      { promptEn: "'Museum' é:", promptPt: "'Museum' é:", targetLabel: "Museu", objects: [
        { id: "a", label: "Escola", img: "" },
        { id: "b", label: "Museu", img: "", isTarget: true },
        { id: "c", label: "Padaria", img: "" },
      ]},
      { promptEn: "'Next to' é:", promptPt: "'Next to' é:", targetLabel: "Ao lado", objects: [
        { id: "a", label: "Atrás", img: "" },
        { id: "b", label: "Ao lado", img: "", isTarget: true },
        { id: "c", label: "Em cima", img: "" },
      ]},
      { promptEn: "Complete: ___ straight.", promptPt: "Complete: ___ straight.", targetLabel: "Go", objects: [
        { id: "a", label: "Go", img: "", isTarget: true },
        { id: "b", label: "Turn", img: "" },
        { id: "c", label: "Stop", img: "" },
      ]},
      { promptEn: "'Library' é:", promptPt: "'Library' é:", targetLabel: "Biblioteca", objects: [
        { id: "a", label: "Livraria", img: "" },
        { id: "b", label: "Biblioteca", img: "", isTarget: true },
        { id: "c", label: "Hospital", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares da cidade!",
    pairs: [
      { id: "a", en: "Hospital 🏥", pt: "Hospital", img: IMG.SCHOOL },
      { id: "b", en: "Museum 🖼️", pt: "Museu", img: IMG.CLASSROOM },
      { id: "c", en: "Library 📚", pt: "Biblioteca", img: IMG.CLASSROOM },
      { id: "d", en: "Bakery 🥖", pt: "Padaria", img: IMG.SCHOOL },
    ],
  },
  BOOK: {
    title: "My City Guide",
    intro: "Seu guia da cidade!",
    pages: [
      { en: "Welcome to my city!", pt: "Bem-vindo à minha cidade!", img: IMG.SCHOOL, badge: "🏙️" },
      { en: "The museum — Main Street.", pt: "O museu — Rua Principal.", img: IMG.CLASSROOM, badge: "🖼️" },
      { en: "The library — next to the school.", pt: "A biblioteca — ao lado da escola.", img: IMG.CLASSROOM, badge: "📚" },
      { en: "The bakery — on the corner.", pt: "A padaria — na esquina.", img: IMG.SCHOOL, badge: "🥖" },
      { en: "The park — in front of my house.", pt: "O parque — em frente à minha casa.", img: IMG.RAINBOW, badge: "🌳" },
      { en: "Come visit! It's amazing!", pt: "Venha visitar! É incrível!", img: IMG.SCHOOL, badge: "⭐" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "O mapa virtual! Toque em cada lugar.",
    img: IMG.SCHOOL,
    items: [
      { en: "Museum", pt: "Museu", emoji: "🖼️" },
      { en: "Library", pt: "Biblioteca", emoji: "📚" },
      { en: "Hospital", pt: "Hospital", emoji: "🏥" },
      { en: "Bakery", pt: "Padaria", emoji: "🥖" },
      { en: "Cinema", pt: "Cinema", emoji: "🎬" },
      { en: "Restaurant", pt: "Restaurante", emoji: "🍽️" },
    ],
  },
  CULTURE: {
    title: "Cities Around the World 🌍",
    emoji: "🗽",
    paragraphs: [
      { en: "New York has yellow taxis and the Empire State Building!", pt: "Nova York tem táxis amarelos e o Empire State!" },
      { en: "London has red buses and Big Ben.", pt: "Londres tem ônibus vermelhos e Big Ben." },
      { pt: "Toda cidade tem seus símbolos. Qual o da SUA cidade?" },
    ],
  },
};

export default lesson;
