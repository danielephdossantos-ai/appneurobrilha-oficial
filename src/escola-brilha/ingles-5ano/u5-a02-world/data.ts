// Inglês 5º Ano — Unit 2 "Amazing Places 🌍"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u5-a02-world",
  meta: {
    unitLabel: "Unit 2 · Lesson 2 — Amazing Places 🌍",
    headerKicker: "My English Portfolio — Level 2 · 5th Grade",
    coverKicker: "Países, cidades & viagens",
    coverTitle: "Amazing Places 🌍",
    coverSubtitle:
      "Descrever lugares e roteiros — There is a museum in Rio. The hotel is next to the beach.",
    storyTitle: "Ben's Trip",
    vocabularyTitle: "Places & Travel",
    speakingTargets: [
      "There is a museum near the park.",
      "There are two hotels in the city.",
      "The airport is far from here.",
      "The beach is next to the hotel.",
      "Where is the museum?",
      "It's in front of the library.",
    ],
    listeningIntro: "Ouça Ben descrever a cidade dele.",
    listeningQuestion: 'Ben disse: "There is a big museum next to my hotel." O museu fica…',
    listeningOptions: ["longe do hotel", "ao lado do hotel", "dentro do hotel"],
    listeningCorrect: "ao lado do hotel",
    listeningWrongHint: '"Next to" = ao lado de.',
    readingNarration:
      "THERE IS (singular) e THERE ARE (plural) apresentam o que existe num lugar. Prepositions of place mostram ONDE: in, on, next to, in front of, behind, between.",
    grammarNarration:
      "THERE IS + coisa no singular / THERE ARE + coisas no plural. Perguntas: IS THERE…? / ARE THERE…? Prepositions of place: IN (dentro), ON (em cima), NEXT TO (ao lado), IN FRONT OF (na frente), BEHIND (atrás).",
    finalProjectIntro: "Vamos criar seu guia de viagem! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `TRAVEL GUIDE — by ${name}. Welcome to my city! There are many amazing places. There is a big museum in the center. The museum is next to the library. There is a beautiful beach near the hotel. The airport is far from the city. Take a bus and visit us!`,
    finalProjectSectionTitle: "My Travel Guide",
  },
  VOCAB: [
    { id: "country", en: "Country 🌎", pt: "País", img: IMG.PASSPORT },
    { id: "capital", en: "Capital 🏛️", pt: "Capital", img: IMG.MUSEUM },
    { id: "landmark", en: "Landmark 🗿", pt: "Ponto turístico", img: IMG.MUSEUM },
    { id: "airport", en: "Airport ✈️", pt: "Aeroporto", img: IMG.AIRPORT },
    { id: "hotel", en: "Hotel 🏨", pt: "Hotel", img: IMG.SHOPPING_MALL },
    { id: "museum", en: "Museum 🖼️", pt: "Museu", img: IMG.MUSEUM },
    { id: "beach", en: "Beach 🏖️", pt: "Praia", img: IMG.PARK },
    { id: "transport", en: "Transport 🚕", pt: "Transporte", img: IMG.BUS_STATION },
  ],
  STORY: [
    { img: IMG.BEN, en: "Hi! I'm Ben. I love traveling!", pt: "Oi! Sou Ben. Adoro viajar!" },
    { img: IMG.AIRPORT, en: "First, I go to the airport with my family.", pt: "Primeiro, vou ao aeroporto com a família." },
    { img: IMG.PASSPORT, en: "I always take my passport. It's important!", pt: "Sempre levo o passaporte. É importante!" },
    { img: IMG.SHOPPING_MALL, en: "We stay in a nice hotel near the beach.", pt: "Ficamos num hotel legal perto da praia." },
    { img: IMG.MUSEUM, en: "There is a big museum in the city center.", pt: "Tem um museu grande no centro." },
    { img: IMG.PARK, en: "There are two beautiful beaches.", pt: "Tem duas praias lindas." },
    { img: IMG.BUS_STATION, en: "We take a bus to visit landmarks.", pt: "Pegamos ônibus pra visitar pontos turísticos." },
    { img: IMG.BEN, en: "Where would YOU like to travel?", pt: "Pra onde VOCÊ queria viajar?" },
  ],
  DIALOG: [
    { who: "Lily", img: IMG.LILY, en: "Ben, where are you going on vacation?", pt: "Ben, pra onde vai nas férias?" },
    { who: "Ben", img: IMG.BEN, en: "I'm going to Rio de Janeiro!", pt: "Vou pro Rio de Janeiro!" },
    { who: "Lily", img: IMG.LILY, en: "Cool! Is there a beach near your hotel?", pt: "Legal! Tem praia perto do hotel?" },
    { who: "Ben", img: IMG.BEN, en: "Yes, there is! The beach is next to the hotel.", pt: "Sim, tem! A praia fica ao lado do hotel." },
    { who: "Lily", img: IMG.LILY, en: "Are there any museums?", pt: "Tem museus?" },
    { who: "Ben", img: IMG.BEN, en: "Yes, there are two big museums.", pt: "Sim, tem dois museus grandes." },
    { who: "Lily", img: IMG.LILY, en: "Amazing! Send me photos!", pt: "Incrível! Manda foto!" },
  ],
  READING: {
    title: "My City",
    img: IMG.MUSEUM,
    parts: [
      { en: "This is my city.", pt: "Esta é minha cidade.", highlight: ["is"] },
      { en: "There is a big park.", pt: "Tem um parque grande.", highlight: ["There is"] },
      { en: "There are three museums.", pt: "Tem três museus.", highlight: ["There are"] },
      { en: "The hotel is next to the beach.", pt: "O hotel fica ao lado da praia.", highlight: ["next to"] },
      { en: "The airport is far from here.", pt: "O aeroporto é longe daqui.", highlight: ["far from"] },
    ],
  },
  WRITING: [
    { prompt: "There ______ a museum in the city. (singular)", answer: "is", hint: "1 coisa = IS.", options: ["is", "are", "am"] },
    { prompt: "There ______ two hotels here.", answer: "are", hint: "2+ = ARE.", options: ["are", "is", "am"] },
    { prompt: "The park is ______ the school. (ao lado)", answer: "next to", hint: "Preposição de lugar.", options: ["next to", "in", "on"] },
    { prompt: "______ is the airport?", answer: "Where", hint: "Pergunta de lugar.", options: ["Where", "What", "Who"] },
    { prompt: "The book is ______ the table. (em cima)", answer: "on", hint: "Superfície.", options: ["on", "in", "under"] },
  ],
  QUIZ: [
    { q: "'Country' significa:", options: [{ text: "Cidade" }, { text: "País", correct: true }, { text: "Bairro" }] },
    { q: "Complete: There ___ a beach.", options: [{ text: "are" }, { text: "is", correct: true }, { text: "am" }] },
    { q: "'Airport' é:", options: [{ text: "Aeroporto", correct: true }, { text: "Estação" }, { text: "Museu" }] },
    { q: "Complete: There ___ 3 museums.", options: [{ text: "is" }, { text: "are", correct: true }, { text: "am" }] },
    { q: "'Next to' significa:", options: [{ text: "Longe de" }, { text: "Ao lado de", correct: true }, { text: "Atrás de" }] },
    { q: "'Museum' é:", options: [{ text: "Museu", correct: true }, { text: "Hotel" }, { text: "Parque" }] },
    { q: "'Where' pergunta:", options: [{ text: "Quando" }, { text: "Onde", correct: true }, { text: "Como" }] },
  ],
  REAL_LIFE: [
    { situation: "🏨 Descrevendo seu hotel.", answer: "The hotel is next to the beach." },
    { situation: "🖼️ Falando o que tem na cidade.", answer: "There is a big museum." },
    { situation: "✈️ Perguntando onde fica o aeroporto.", answer: "Where is the airport?" },
    { situation: "🏖️ Descrevendo uma praia.", answer: "There are two beautiful beaches." },
    { situation: "🚌 Falando de transporte.", answer: "I take a bus to the museum." },
  ],
  GRAMMAR: {
    focus: "There is / There are · Prepositions of Place · Where",
    why:
      "Pra dizer que ALGO EXISTE num lugar: THERE IS (1) / THERE ARE (2+). Prepositions of place mostram ONDE está: IN, ON, NEXT TO, IN FRONT OF, BEHIND, BETWEEN. Pra perguntar onde: WHERE IS…?",
    examples: [
      { en: "There is a park.", pt: "Tem um parque." },
      { en: "There are two hotels.", pt: "Tem dois hotéis." },
      { en: "The bag is on the table.", pt: "A bolsa está em cima da mesa." },
      { en: "The dog is next to the sofa.", pt: "O cachorro está ao lado do sofá." },
      { en: "Where is the museum?", pt: "Onde fica o museu?" },
    ],
    errors: [
      { wrong: "There is two hotels.", right: "There ARE two hotels.", why: "Plural pede ARE." },
      { wrong: "The book is in the table.", right: "The book is ON the table.", why: "Superfície = ON." },
      { wrong: "Where the museum is?", right: "Where IS the museum?", why: "Verbo TO BE antes do sujeito." },
    ],
  },
  SONG: {
    title: "Around the World",
    hookPt: "Cante e viaje pelo mundo!",
    verses: [
      { en: "There is a park, there is a sea,", pt: "Tem um parque, tem um mar,", emoji: "🌊" },
      { en: "There are places to visit for free.", pt: "Tem lugares pra visitar de graça.", emoji: "🗺️" },
      { en: "Airport, hotel, museum too,", pt: "Aeroporto, hotel, museu também,", emoji: "✈️" },
      { en: "Amazing places waiting for you!", pt: "Lugares incríveis te esperando!", emoji: "🌍" },
      { en: "Next to the beach, behind the tree,", pt: "Ao lado da praia, atrás da árvore,", emoji: "🌴" },
      { en: "The world is big, come travel with me!", pt: "O mundo é grande, viaje comigo!", emoji: "🧳" },
    ],
  },
  HUNTER: {
    intro: "Escolha a palavra certa!",
    rounds: [
      { promptEn: "Complete: There ___ a museum.", promptPt: "Complete: There ___ a museum.", targetLabel: "is", objects: [
        { id: "a", label: "is", img: "", isTarget: true },
        { id: "b", label: "are", img: "" },
        { id: "c", label: "am", img: "" },
      ]},
      { promptEn: "Complete: There ___ 5 hotels.", promptPt: "Complete: There ___ 5 hotels.", targetLabel: "are", objects: [
        { id: "a", label: "is", img: "" },
        { id: "b", label: "are", img: "", isTarget: true },
        { id: "c", label: "am", img: "" },
      ]},
      { promptEn: "'Airport' é:", promptPt: "'Airport' é:", targetLabel: "Aeroporto", objects: [
        { id: "a", label: "Aeroporto", img: "", isTarget: true },
        { id: "b", label: "Hotel", img: "" },
        { id: "c", label: "Museu", img: "" },
      ]},
      { promptEn: "'Next to' é:", promptPt: "'Next to' é:", targetLabel: "Ao lado de", objects: [
        { id: "a", label: "Atrás de", img: "" },
        { id: "b", label: "Ao lado de", img: "", isTarget: true },
        { id: "c", label: "Dentro de", img: "" },
      ]},
      { promptEn: "Complete: ___ is the beach?", promptPt: "Complete: ___ is the beach?", targetLabel: "Where", objects: [
        { id: "a", label: "What", img: "" },
        { id: "b", label: "Where", img: "", isTarget: true },
        { id: "c", label: "Who", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares de lugares!",
    pairs: [
      { id: "a", en: "Airport ✈️", pt: "Aeroporto", img: IMG.AIRPORT },
      { id: "b", en: "Museum 🖼️", pt: "Museu", img: IMG.MUSEUM },
      { id: "c", en: "Beach 🏖️", pt: "Praia", img: IMG.PARK },
      { id: "d", en: "Hotel 🏨", pt: "Hotel", img: IMG.SHOPPING_MALL },
    ],
  },
  BOOK: {
    title: "My Travel Guide",
    intro: "Seu guia de viagem pessoal!",
    pages: [
      { en: "Page 1 — Welcome to my city!", pt: "Pág. 1 — Bem-vindo à minha cidade!", img: IMG.CITY_COVER, badge: "🌎" },
      { en: "Page 2 — There is a big museum.", pt: "Pág. 2 — Tem um museu grande.", img: IMG.MUSEUM, badge: "🖼️" },
      { en: "Page 3 — There are two beaches.", pt: "Pág. 3 — Tem duas praias.", img: IMG.PARK, badge: "🏖️" },
      { en: "Page 4 — The hotel is next to the beach.", pt: "Pág. 4 — O hotel é ao lado da praia.", img: IMG.SHOPPING_MALL, badge: "🏨" },
      { en: "Page 5 — Take a bus at the station.", pt: "Pág. 5 — Pegue ônibus na estação.", img: IMG.BUS_STATION, badge: "🚌" },
      { en: "The End — Come visit us!", pt: "Fim — Venha nos visitar!", img: IMG.PASSPORT, badge: "✈️" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "Este é o hotel. Toque nos objetos de viagem!",
    img: IMG.SHOPPING_MALL,
    items: [
      { en: "Suitcase", pt: "Mala", emoji: "🧳" },
      { en: "Passport", pt: "Passaporte", emoji: "🛂" },
      { en: "Camera", pt: "Câmera", emoji: "📷" },
      { en: "Map", pt: "Mapa", emoji: "🗺️" },
      { en: "Ticket", pt: "Passagem", emoji: "🎫" },
      { en: "Hat", pt: "Chapéu", emoji: "👒" },
    ],
  },
  CULTURE: {
    title: "Landmarks of the World 🗿",
    emoji: "🌍",
    paragraphs: [
      { en: "The Eiffel Tower is in Paris, France. It is 330 meters tall!", pt: "A Torre Eiffel fica em Paris, França. Tem 330 metros!" },
      { en: "The Christ the Redeemer is in Rio de Janeiro, Brazil.", pt: "O Cristo Redentor fica no Rio de Janeiro, Brasil." },
      { pt: "Cada país tem um ponto turístico único!" },
    ],
  },
};

export default lesson;
