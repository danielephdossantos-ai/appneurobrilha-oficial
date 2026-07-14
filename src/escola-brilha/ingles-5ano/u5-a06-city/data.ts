// Inglês 5º Ano — Unit 6 "Around the City 🚦"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u5-a06-city",
  meta: {
    unitLabel: "Unit 6 · Lesson 6 — Around the City 🚦",
    headerKicker: "My English Portfolio — Level 2 · 5th Grade",
    coverKicker: "Cidade, serviços & deslocamento",
    coverTitle: "Around the City 🚦",
    coverSubtitle:
      "Pedir e dar direções na cidade: How can I get to…? Turn left. Take the bus. Go straight.",
    storyTitle: "The City Tour",
    vocabularyTitle: "City & Transport",
    speakingTargets: [
      "How can I get to the museum?",
      "Take the bus.",
      "Turn left at the corner.",
      "Go straight for two blocks.",
      "The library is next to the park.",
      "Cross the street at the crosswalk.",
    ],
    listeningIntro: "Ouça a orientação do Ben.",
    listeningQuestion: '"Turn left at the bakery." O que fazer na padaria?',
    listeningOptions: ["Virar à direita", "Virar à esquerda", "Seguir reto"],
    listeningCorrect: "Virar à esquerda",
    listeningWrongHint: '"Turn left" = vire à esquerda.',
    readingNarration:
      "Pra pedir caminho: HOW CAN I GET TO + lugar? Pra responder use imperativos: Turn, Go, Take.",
    grammarNarration:
      "Preposições de lugar: NEXT TO, IN FRONT OF, BEHIND, BETWEEN. Imperativos pra direção: GO, TURN, TAKE, CROSS. Pergunta com HOW.",
    finalProjectIntro: "Seu guia turístico! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY TOURIST GUIDE — by ${name}. Welcome to my city! To get to the museum, take the bus 42. Turn left at the bakery, then go straight two blocks. The library is next to the school. The park is in front of the hospital. Cross the street at the crosswalk. Enjoy your visit!`,
    finalProjectSectionTitle: "My Tourist Guide",
  },
  VOCAB: [
    { id: "traffic", en: "Traffic 🚦", pt: "Trânsito", img: IMG.CITY_COVER },
    { id: "crosswalk", en: "Crosswalk 🚸", pt: "Faixa de pedestre", img: IMG.CITY_COVER },
    { id: "bus", en: "Bus 🚌", pt: "Ônibus", img: IMG.BUS_STATION },
    { id: "subway", en: "Subway 🚇", pt: "Metrô", img: IMG.BUS_STATION },
    { id: "bicycle", en: "Bicycle 🚲", pt: "Bicicleta", img: IMG.PARK },
    { id: "hospital", en: "Hospital 🏥", pt: "Hospital", img: IMG.HOSPITAL },
    { id: "museum", en: "Museum 🖼️", pt: "Museu", img: IMG.MUSEUM },
    { id: "library", en: "Library 📚", pt: "Biblioteca", img: IMG.LIBRARY },
  ],
  STORY: [
    { img: IMG.LILY, en: "Lily is a tourist in a big city.", pt: "Lily é turista numa grande cidade." },
    { img: IMG.CITY_COVER, en: "She wants to visit the museum today.", pt: "Ela quer visitar o museu hoje." },
    { img: IMG.LILY, en: "'Excuse me, how can I get to the museum?'", pt: "'Com licença, como chego ao museu?'" },
    { img: IMG.BEN, en: "Ben says: 'Take the bus number 42.'", pt: "Ben diz: 'Pegue o ônibus 42.'" },
    { img: IMG.BAKERY, en: "'Then turn left at the bakery.'", pt: "'Depois vire à esquerda na padaria.'" },
    { img: IMG.MUSEUM, en: "'The museum is next to the library.'", pt: "'O museu fica ao lado da biblioteca.'" },
    { img: IMG.LILY, en: "'Thank you very much!' says Lily.", pt: "'Muito obrigada!' diz Lily." },
    { img: IMG.CITY_COVER, en: "The city is fun when you know the way.", pt: "A cidade é legal quando você sabe o caminho." },
  ],
  DIALOG: [
    { who: "Lily", img: IMG.LILY, en: "How can I get to the hospital?", pt: "Como chego ao hospital?" },
    { who: "Ben", img: IMG.BEN, en: "Take the subway, line 2.", pt: "Pegue o metrô, linha 2." },
    { who: "Lily", img: IMG.LILY, en: "And then?", pt: "E depois?" },
    { who: "Ben", img: IMG.BEN, en: "Get off at Central Station. Walk two blocks.", pt: "Desça na estação Central. Ande duas quadras." },
    { who: "Lily", img: IMG.LILY, en: "Where is the crosswalk?", pt: "Onde é a faixa de pedestre?" },
    { who: "Ben", img: IMG.BEN, en: "In front of the park. Be careful!", pt: "Em frente ao parque. Cuidado!" },
    { who: "Lily", img: IMG.LILY, en: "Thanks! You are a great guide.", pt: "Obrigada! Você é um ótimo guia." },
  ],
  READING: {
    title: "My City Tour",
    img: IMG.CITY_COVER,
    parts: [
      { en: "Take the bus to the city center.", pt: "Pegue o ônibus até o centro.", highlight: ["Take"] },
      { en: "Turn right at the traffic light.", pt: "Vire à direita no semáforo.", highlight: ["Turn"] },
      { en: "Go straight for two blocks.", pt: "Siga reto duas quadras.", highlight: ["Go straight"] },
      { en: "The museum is next to the library.", pt: "O museu fica ao lado da biblioteca.", highlight: ["next to"] },
      { en: "Cross at the crosswalk.", pt: "Atravesse na faixa.", highlight: ["Cross"] },
    ],
  },
  WRITING: [
    { prompt: "______ the bus. (pegue)", answer: "Take", hint: "Imperativo.", options: ["Take", "Is", "Am"] },
    { prompt: "______ left at the corner.", answer: "Turn", hint: "Vire.", options: ["Turn", "Go", "Take"] },
    { prompt: "The library is ______ the school. (ao lado)", answer: "next to", hint: "Preposição.", options: ["next to", "under", "behind"] },
    { prompt: "______ can I get to the museum?", answer: "How", hint: "Como.", options: ["How", "Who", "When"] },
    { prompt: "______ the street at the crosswalk. (atravesse)", answer: "Cross", hint: "Atravessar.", options: ["Cross", "Take", "Is"] },
  ],
  QUIZ: [
    { q: "'Turn left' é:", options: [{ text: "Vire à direita" }, { text: "Vire à esquerda", correct: true }, { text: "Siga reto" }] },
    { q: "'Bus' é:", options: [{ text: "Bicicleta" }, { text: "Ônibus", correct: true }, { text: "Metrô" }] },
    { q: "'Crosswalk' é:", options: [{ text: "Faixa de pedestre", correct: true }, { text: "Semáforo" }, { text: "Ponte" }] },
    { q: "Complete: ___ can I get to the park?", options: [{ text: "How", correct: true }, { text: "What" }, { text: "Who" }] },
    { q: "'Go straight' é:", options: [{ text: "Pare" }, { text: "Siga reto", correct: true }, { text: "Volte" }] },
    { q: "'Subway' é:", options: [{ text: "Metrô", correct: true }, { text: "Ônibus" }, { text: "Táxi" }] },
    { q: "'Next to' é:", options: [{ text: "Ao lado", correct: true }, { text: "Atrás" }, { text: "Em cima" }] },
  ],
  REAL_LIFE: [
    { situation: "❓ Perguntando como chegar.", answer: "How can I get to the museum?" },
    { situation: "🚌 Sugerindo transporte.", answer: "Take the bus number 42." },
    { situation: "↪️ Dando direção.", answer: "Turn left at the corner." },
    { situation: "📍 Localizando dois lugares.", answer: "The library is next to the park." },
    { situation: "🚸 Falando sobre segurança.", answer: "Cross at the crosswalk." },
  ],
  GRAMMAR: {
    focus: "Directions + Prepositions + How questions",
    why:
      "Pergunta HOW CAN I GET TO + lugar. Responde com imperativos (Take, Turn, Go, Cross) e preposições (next to, in front of, behind).",
    examples: [
      { en: "How can I get to the hospital?", pt: "Como chego ao hospital?" },
      { en: "Take the bus.", pt: "Pegue o ônibus." },
      { en: "Turn right at the bakery.", pt: "Vire à direita na padaria." },
      { en: "The park is in front of the mall.", pt: "O parque fica em frente ao shopping." },
      { en: "Go straight two blocks.", pt: "Siga reto duas quadras." },
    ],
    errors: [
      { wrong: "You turn left.", right: "Turn left.", why: "Imperativo não usa sujeito." },
      { wrong: "How I get to the park?", right: "HOW CAN I get to the park?", why: "Use CAN." },
      { wrong: "It is next the school.", right: "It is NEXT TO the school.", why: "Sempre NEXT TO." },
    ],
  },
  SONG: {
    title: "Around the Town",
    hookPt: "Cante e conheça a cidade!",
    verses: [
      { en: "Take the bus, take the train,", pt: "Pegue o ônibus, o trem,", emoji: "🚌" },
      { en: "Ride your bike in sun or rain.", pt: "Ande de bike no sol ou chuva.", emoji: "🚲" },
      { en: "Turn right, turn left, go straight ahead,", pt: "Direita, esquerda, siga reto,", emoji: "➡️" },
      { en: "Follow the streets that our friends said.", pt: "Siga as ruas que nos disseram.", emoji: "🗺️" },
      { en: "Next to, in front of, on the corner,", pt: "Ao lado, em frente, na esquina,", emoji: "📍" },
      { en: "Learning the city, we grow stronger!", pt: "Conhecendo a cidade, ficamos fortes!", emoji: "💪" },
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
      { promptEn: "'Bus' é:", promptPt: "'Bus' é:", targetLabel: "Ônibus", objects: [
        { id: "a", label: "Metrô", img: "" },
        { id: "b", label: "Ônibus", img: "", isTarget: true },
        { id: "c", label: "Bicicleta", img: "" },
      ]},
      { promptEn: "Complete: ___ can I get to the park?", promptPt: "Complete: ___ can I get to the park?", targetLabel: "How", objects: [
        { id: "a", label: "How", img: "", isTarget: true },
        { id: "b", label: "Who", img: "" },
        { id: "c", label: "What", img: "" },
      ]},
      { promptEn: "'Crosswalk' é:", promptPt: "'Crosswalk' é:", targetLabel: "Faixa de pedestre", objects: [
        { id: "a", label: "Faixa de pedestre", img: "", isTarget: true },
        { id: "b", label: "Semáforo", img: "" },
        { id: "c", label: "Estação", img: "" },
      ]},
      { promptEn: "'Next to' é:", promptPt: "'Next to' é:", targetLabel: "Ao lado", objects: [
        { id: "a", label: "Atrás", img: "" },
        { id: "b", label: "Ao lado", img: "", isTarget: true },
        { id: "c", label: "Em cima", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares da cidade!",
    pairs: [
      { id: "a", en: "Bus 🚌", pt: "Ônibus", img: IMG.BUS_STATION },
      { id: "b", en: "Hospital 🏥", pt: "Hospital", img: IMG.HOSPITAL },
      { id: "c", en: "Museum 🖼️", pt: "Museu", img: IMG.MUSEUM },
      { id: "d", en: "Library 📚", pt: "Biblioteca", img: IMG.LIBRARY },
    ],
  },
  BOOK: {
    title: "My Tourist Guide",
    intro: "Seu guia turístico!",
    pages: [
      { en: "Page 1 — Welcome to my city!", pt: "Pág. 1 — Bem-vindo à minha cidade!", img: IMG.CITY_COVER, badge: "🏙️" },
      { en: "Page 2 — Take the bus 42.", pt: "Pág. 2 — Pegue o ônibus 42.", img: IMG.BUS_STATION, badge: "🚌" },
      { en: "Page 3 — The museum on Main St.", pt: "Pág. 3 — O museu na rua Principal.", img: IMG.MUSEUM, badge: "🖼️" },
      { en: "Page 4 — The library next to the school.", pt: "Pág. 4 — Biblioteca ao lado da escola.", img: IMG.LIBRARY, badge: "📚" },
      { en: "Page 5 — Cross at the crosswalk!", pt: "Pág. 5 — Atravesse na faixa!", img: IMG.CITY_COVER, badge: "🚸" },
      { en: "The End — Enjoy your visit!", pt: "Fim — Aproveite a visita!", img: IMG.FRIENDS, badge: "⭐" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "É o mapa da cidade! Toque em cada lugar.",
    img: IMG.CITY_COVER,
    items: [
      { en: "Museum", pt: "Museu", emoji: "🖼️" },
      { en: "Library", pt: "Biblioteca", emoji: "📚" },
      { en: "Hospital", pt: "Hospital", emoji: "🏥" },
      { en: "Bus stop", pt: "Ponto de ônibus", emoji: "🚌" },
      { en: "Subway", pt: "Metrô", emoji: "🚇" },
      { en: "Crosswalk", pt: "Faixa", emoji: "🚸" },
    ],
  },
  CULTURE: {
    title: "Cities Around the World 🌍",
    emoji: "🚦",
    paragraphs: [
      { en: "New York has yellow taxis and the Statue of Liberty.", pt: "Nova York tem táxis amarelos e a Estátua da Liberdade." },
      { en: "London has red double-decker buses. Very famous!", pt: "Londres tem os famosos ônibus vermelhos de dois andares." },
      { pt: "Qual é o transporte mais comum da sua cidade?" },
    ],
  },
};

export default lesson;
