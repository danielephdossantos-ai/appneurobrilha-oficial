// Ingles 3º Ano — Unit 5 "My City 🚦"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u3-a05-city",
  meta: {
    unitLabel: "Unit 5 · Lesson 5 — My City 🚦",
    headerKicker: "My English Adventure — 3rd Grade",
    coverKicker: "Lesson 5",
    coverTitle: "My City 🚦",
    coverSubtitle:
      "Bora andar pela cidade em inglês! Ruas, parques, museus, hospitais — e aprender a pedir e dar direção.",
    storyTitle: "Ben in the City",
    vocabularyTitle: "City Places",
    speakingTargets: [
      "Where is the park?",
      "The park is next to the school.",
      "Go straight.",
      "Turn left at the bank.",
      "The bakery is on the corner.",
      "The hospital is in front of the museum.",
    ],
    listeningIntro: "Ouça Ben pedindo direção na cidade.",
    listeningQuestion: 'Ben disse: "Turn left at the bank." O que ele fez?',
    listeningOptions: ["Virou à esquerda", "Virou à direita", "Seguiu reto"],
    listeningCorrect: "Virou à esquerda",
    listeningWrongHint: '"Left" = esquerda, "right" = direita.',
    readingNarration:
      'Novidade: preposições de lugar (NEXT TO, IN FRONT OF, BEHIND, ON) e imperativos (GO, TURN, STOP) — comandos direto ao ponto.',
    grammarNarration:
      'Imperativos são ordens sem sujeito: "Go straight", "Turn left". Preposições dizem ONDE: next to (ao lado), in front of (em frente), behind (atrás), on (em cima).',
    finalProjectIntro: "Vamos criar seu City Map! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `${name}'s City Map: The park is next to the school. The bank is in front of the museum. Go straight and turn left to find the bakery!`,
    finalProjectSectionTitle: "My City Map",
  },
  VOCAB: [
    { id: "street", en: "Street 🛣️", pt: "Rua", img: IMG.SCHOOL },
    { id: "park", en: "Park 🌳", pt: "Parque", img: IMG.RAINBOW },
    { id: "museum", en: "Museum 🏛️", pt: "Museu", img: IMG.CLASSROOM },
    { id: "zoo", en: "Zoo 🦒", pt: "Zoológico", img: IMG.DOG },
    { id: "bank", en: "Bank 🏦", pt: "Banco", img: IMG.CLASSROOM },
    { id: "bakery", en: "Bakery 🥐", pt: "Padaria", img: IMG.MORNING },
    { id: "hospital", en: "Hospital 🏥", pt: "Hospital", img: IMG.BEN },
    { id: "bus", en: "Bus stop 🚌", pt: "Parada de ônibus", img: IMG.AIRPORT },
    { id: "school", en: "School 🏫", pt: "Escola", img: IMG.SCHOOL },
  ],
  STORY: [
    { img: IMG.SCHOOL, en: "Ben walks in his city every Saturday.", pt: "Ben anda pela cidade todo sábado." },
    { img: IMG.RAINBOW, en: "First, he goes to the park to play.", pt: "Primeiro, ele vai ao parque brincar." },
    { img: IMG.MORNING, en: "Then, he stops at the bakery to buy bread.", pt: "Depois, para na padaria pra comprar pão." },
    { img: IMG.CLASSROOM, en: "The museum is next to the bakery.", pt: "O museu fica ao lado da padaria." },
    { img: IMG.BEN, en: "The hospital is in front of the museum.", pt: "O hospital fica em frente ao museu." },
    { img: IMG.AIRPORT, en: "He takes the bus home. What a great day!", pt: "Ele pega o ônibus pra casa. Que dia legal!" },
  ],
  DIALOG: [
    { who: "Ben", img: IMG.BEN, en: "Excuse me, where is the park?", pt: "Com licença, onde é o parque?" },
    { who: "Lily", img: IMG.LILY, en: "Go straight and turn left.", pt: "Vá reto e vire à esquerda." },
    { who: "Ben", img: IMG.BEN, en: "Is it next to the school?", pt: "Fica ao lado da escola?" },
    { who: "Lily", img: IMG.LILY, en: "Yes! The park is next to the school.", pt: "Sim! O parque fica ao lado da escola." },
    { who: "Ben", img: IMG.BEN, en: "And the bakery?", pt: "E a padaria?" },
    { who: "Lily", img: IMG.LILY, en: "The bakery is on the corner. You can't miss it!", pt: "A padaria fica na esquina. Impossível errar!" },
  ],
  READING: {
    title: "Ben's City Walk",
    img: IMG.SCHOOL,
    parts: [
      { en: "The park is next to the school.", pt: "O parque fica ao lado da escola.", highlight: ["next to"] },
      { en: "The bakery is on the corner.", pt: "A padaria fica na esquina.", highlight: ["on the corner"] },
      { en: "The bank is in front of the museum.", pt: "O banco fica em frente ao museu.", highlight: ["in front of"] },
      { en: "Go straight.", pt: "Vá reto.", highlight: ["Go straight"] },
      { en: "Turn left at the hospital.", pt: "Vire à esquerda no hospital.", highlight: ["Turn left"] },
    ],
  },
  WRITING: [
    { prompt: "The park is ______ to the school. (ao lado)", answer: "next", hint: "Preposição de lugar.", options: ["next", "in", "on"] },
    { prompt: "Go ______ and turn right.", answer: "straight", hint: "Reto.", options: ["straight", "left", "back"] },
    { prompt: "Turn ______ at the bank. (esquerda)", answer: "left", hint: "Direção.", options: ["left", "right", "down"] },
    { prompt: "The bakery is on the ______. (esquina)", answer: "corner", hint: "Onde duas ruas se encontram.", options: ["corner", "roof", "sky"] },
    { prompt: "Where ______ the hospital?", answer: "is", hint: "TO BE no singular.", options: ["is", "are", "am"] },
  ],
  QUIZ: [
    { q: "Como se diz 'vire à esquerda'?", options: [{ text: "Turn right" }, { text: "Turn left", correct: true }, { text: "Go straight" }] },
    { q: "'Next to' significa:", options: [{ text: "Ao lado", correct: true }, { text: "Em frente" }, { text: "Atrás" }] },
    { q: "Onde compra pão?", options: [{ text: "Museum" }, { text: "Bakery", correct: true }, { text: "Zoo" }] },
    { q: "Complete: Where ___ the park?", options: [{ text: "am" }, { text: "is", correct: true }, { text: "are" }] },
    { q: "'Bus stop' é:", options: [{ text: "Parada de ônibus", correct: true }, { text: "Aeroporto" }, { text: "Parque" }] },
  ],
  REAL_LIFE: [
    { situation: "🚦 Alguém está perdido e pergunta do parque.", answer: "Go straight and turn left. The park is next to the school." },
    { situation: "🥐 Onde fica a padaria?", answer: "The bakery is on the corner." },
    { situation: "🏥 Alguém procura o hospital.", answer: "The hospital is in front of the museum." },
    { situation: "🚌 Onde pego o ônibus?", answer: "The bus stop is over there." },
    { situation: "🦒 Vamos ao zoológico?", answer: "Yes! Let's go to the zoo." },
  ],
  GRAMMAR: {
    focus: "Prepositions of Place + Imperatives",
    why:
      'Preposições: NEXT TO (ao lado), IN FRONT OF (em frente), BEHIND (atrás), ON (em cima), UNDER (embaixo). Imperativos são ordens: GO, TURN, STOP — sem sujeito.',
    examples: [
      { en: "The park is next to the school.", pt: "O parque fica ao lado da escola." },
      { en: "The bank is in front of the museum.", pt: "O banco fica em frente ao museu." },
      { en: "Go straight.", pt: "Vá reto." },
      { en: "Turn right at the bakery.", pt: "Vire à direita na padaria." },
    ],
    errors: [
      { wrong: "You go straight.", right: "Go straight.", why: "Imperativo não leva sujeito." },
      { wrong: "The park is next the school.", right: "The park is next TO the school.", why: "Sempre 'next TO'." },
    ],
  },
  SONG: {
    title: "Around My City",
    hookPt: "Cante mostrando as direções!",
    verses: [
      { en: "Go straight, go straight,", pt: "Reto, reto,", emoji: "⬆️" },
      { en: "Turn left, turn right,", pt: "Esquerda, direita,", emoji: "↔️" },
      { en: "The park is close,", pt: "O parque tá perto,", emoji: "🌳" },
      { en: "It's in my sight!", pt: "Já vi ele!", emoji: "👀" },
      { en: "The bakery smells,", pt: "A padaria cheira,", emoji: "🥐" },
      { en: "The bus goes by,", pt: "O ônibus passa,", emoji: "🚌" },
      { en: "My city is fun,", pt: "Minha cidade é legal,", emoji: "🏙️" },
      { en: "Under the sky!", pt: "Sob o céu!", emoji: "☀️" },
    ],
  },
  HUNTER: {
    intro: "Escolha o lugar certo!",
    rounds: [
      { promptEn: "You want to buy bread.", promptPt: "Você quer comprar pão.", targetLabel: "Bakery", objects: [
        { id: "a", label: "Bakery 🥐", img: "", isTarget: true },
        { id: "b", label: "Zoo 🦒", img: "" },
        { id: "c", label: "Museum 🏛️", img: "" },
      ]},
      { promptEn: "You want to see animals.", promptPt: "Ver animais.", targetLabel: "Zoo", objects: [
        { id: "a", label: "Bank 🏦", img: "" },
        { id: "b", label: "Zoo 🦒", img: "", isTarget: true },
        { id: "c", label: "Hospital 🏥", img: "" },
      ]},
      { promptEn: "You feel sick.", promptPt: "Está doente.", targetLabel: "Hospital", objects: [
        { id: "a", label: "Park 🌳", img: "" },
        { id: "b", label: "Bakery 🥐", img: "" },
        { id: "c", label: "Hospital 🏥", img: "", isTarget: true },
      ]},
      { promptEn: "You want to play outside.", promptPt: "Quer brincar lá fora.", targetLabel: "Park", objects: [
        { id: "a", label: "Park 🌳", img: "", isTarget: true },
        { id: "b", label: "Bank 🏦", img: "" },
        { id: "c", label: "Museum 🏛️", img: "" },
      ]},
      { promptEn: "You wait for the bus.", promptPt: "Espera o ônibus.", targetLabel: "Bus stop", objects: [
        { id: "a", label: "Museum 🏛️", img: "" },
        { id: "b", label: "Bus stop 🚌", img: "", isTarget: true },
        { id: "c", label: "Zoo 🦒", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares de lugares da cidade.",
    pairs: [
      { id: "p", en: "Park 🌳", pt: "Parque", img: IMG.RAINBOW },
      { id: "b", en: "Bakery 🥐", pt: "Padaria", img: IMG.MORNING },
      { id: "h", en: "Hospital 🏥", pt: "Hospital", img: IMG.BEN },
      { id: "z", en: "Zoo 🦒", pt: "Zoo", img: IMG.DOG },
    ],
  },
  COMMANDS: {
    intro: "Ouça o comando e mostre a direção!",
    rounds: [
      { promptEn: "Go straight!", promptPt: "Vá reto!", actions: [
        { id: "s", en: "Straight", pt: "Reto", emoji: "⬆️", isTarget: true },
        { id: "l", en: "Left", pt: "Esquerda", emoji: "⬅️" },
        { id: "r", en: "Right", pt: "Direita", emoji: "➡️" },
      ]},
      { promptEn: "Turn left!", promptPt: "Vire à esquerda!", actions: [
        { id: "l", en: "Left", pt: "Esquerda", emoji: "⬅️", isTarget: true },
        { id: "s", en: "Straight", pt: "Reto", emoji: "⬆️" },
        { id: "r", en: "Right", pt: "Direita", emoji: "➡️" },
      ]},
      { promptEn: "Turn right!", promptPt: "Vire à direita!", actions: [
        { id: "r", en: "Right", pt: "Direita", emoji: "➡️", isTarget: true },
        { id: "l", en: "Left", pt: "Esquerda", emoji: "⬅️" },
        { id: "st", en: "Stop", pt: "Pare", emoji: "🛑" },
      ]},
      { promptEn: "Stop!", promptPt: "Pare!", actions: [
        { id: "s", en: "Stop", pt: "Pare", emoji: "🛑", isTarget: true },
        { id: "g", en: "Go", pt: "Ir", emoji: "🟢" },
        { id: "l", en: "Left", pt: "Esquerda", emoji: "⬅️" },
      ]},
    ],
  },
  CULTURE: {
    title: "Streets Around the World 🌍",
    emoji: "🚦",
    paragraphs: [
      { en: "In London, red buses are famous — the double-deckers!", pt: "Em Londres, os ônibus vermelhos de dois andares são famosos!" },
      { en: "In New York, streets have numbers: 5th Street, 42nd Street.", pt: "Em Nova York, as ruas têm números: Rua 5, Rua 42." },
      { pt: "Cada cidade tem um jeitinho especial — a sua também! 🏙️" },
    ],
  },
};

export default lesson;
