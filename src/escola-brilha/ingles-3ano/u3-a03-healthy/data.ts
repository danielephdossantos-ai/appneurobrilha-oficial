// Ingles 3º Ano — Unit 3 "My Healthy Life 🍎"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u3-a03-healthy",
  meta: {
    unitLabel: "Unit 3 · Lesson 3 — My Healthy Life 🍎",
    headerKicker: "My English Adventure — 3rd Grade",
    coverKicker: "Lesson 3",
    coverTitle: "My Healthy Life 🍎",
    coverSubtitle:
      "Saúde é vida! Vamos aprender a falar em inglês sobre comidas saudáveis, exercícios, água, sono e cuidados com o corpo.",
    storyTitle: "Lily's Healthy Day",
    vocabularyTitle: "Healthy Words",
    speakingTargets: [
      "I eat healthy food.",
      "I drink water every day.",
      "I play soccer after school.",
      "I don't eat too much candy.",
      "I sleep eight hours.",
      "I go to the dentist twice a year.",
    ],
    listeningIntro: "Ouça a rotina saudável da Lily.",
    listeningQuestion: 'Lily disse: "I drink water every day." O que ela faz todo dia?',
    listeningOptions: ["Come doce", "Bebe água", "Assiste TV"],
    listeningCorrect: "Bebe água",
    listeningWrongHint: '"Water" = água.',
    readingNarration:
      'No 3º ano usamos MUITO o Simple Present pra falar de hábitos. E aparece o DO/DON\'T pra negar.',
    grammarNarration:
      'DO / DON\'T: negativa e pergunta no presente. "I don\'t eat candy" (Eu NÃO como doce). "Do you like fruit?" (Você gosta de fruta?)',
    finalProjectIntro: "Vamos criar seu Healthy Week Challenge! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `${name}'s Healthy Week: I eat fruits every day. I drink water. I play sports. I sleep eight hours. I don't eat too much candy!`,
    finalProjectSectionTitle: "Healthy Week Challenge",
  },
  VOCAB: [
    { id: "fruit", en: "Fruit 🍎", pt: "Fruta", img: IMG.MORNING },
    { id: "veg", en: "Vegetable 🥕", pt: "Vegetal", img: IMG.MORNING },
    { id: "water", en: "Water 💧", pt: "Água", img: IMG.CLASSROOM },
    { id: "milk", en: "Milk 🥛", pt: "Leite", img: IMG.MORNING },
    { id: "exercise", en: "Exercise 🏃", pt: "Exercício", img: IMG.SCHOOL },
    { id: "sleep", en: "Sleep 😴", pt: "Dormir", img: IMG.LILY },
    { id: "sports", en: "Sports ⚽", pt: "Esportes", img: IMG.FRIENDS },
    { id: "dentist", en: "Dentist 🦷", pt: "Dentista", img: IMG.EMILY },
    { id: "doctor", en: "Doctor 👨‍⚕️", pt: "Médico", img: IMG.BEN },
    { id: "candy", en: "Candy 🍬", pt: "Doce", img: IMG.RAINBOW },
  ],
  STORY: [
    { img: IMG.MORNING, en: "Every morning, Lily eats fruits for breakfast.", pt: "Toda manhã, Lily come frutas no café." },
    { img: IMG.CLASSROOM, en: "She drinks water at school.", pt: "Ela bebe água na escola." },
    { img: IMG.SCHOOL, en: "In the afternoon, she plays soccer with friends.", pt: "À tarde, ela joga futebol com amigos." },
    { img: IMG.MORNING, en: "She eats vegetables at dinner.", pt: "Ela come vegetais no jantar." },
    { img: IMG.RAINBOW, en: "She doesn't eat too much candy.", pt: "Ela não come muito doce." },
    { img: IMG.LILY, en: "At night, she sleeps eight hours. Sweet dreams!", pt: "À noite, dorme oito horas. Bons sonhos!" },
  ],
  DIALOG: [
    { who: "Doctor", img: IMG.BEN, en: "Do you eat fruits every day?", pt: "Você come frutas todo dia?" },
    { who: "Lily", img: IMG.LILY, en: "Yes, I do! I love apples and bananas.", pt: "Sim! Adoro maçãs e bananas." },
    { who: "Doctor", img: IMG.BEN, en: "Do you drink water?", pt: "Você bebe água?" },
    { who: "Lily", img: IMG.LILY, en: "Yes, I drink a lot of water.", pt: "Sim, bebo bastante água." },
    { who: "Doctor", img: IMG.BEN, en: "Do you eat candy?", pt: "Você come doce?" },
    { who: "Lily", img: IMG.LILY, en: "No, I don't. Only on birthdays!", pt: "Não. Só em aniversários!" },
  ],
  READING: {
    title: "My Healthy Habits",
    img: IMG.MORNING,
    parts: [
      { en: "I eat fruits every day.", pt: "Eu como frutas todo dia.", highlight: ["fruits"] },
      { en: "I drink water, not soda.", pt: "Eu bebo água, não refrigerante.", highlight: ["water"] },
      { en: "I play sports after school.", pt: "Faço esporte depois da escola.", highlight: ["sports"] },
      { en: "I don't eat too much candy.", pt: "Eu não como muito doce.", highlight: ["don't"] },
      { en: "I sleep eight hours a night.", pt: "Durmo oito horas por noite.", highlight: ["sleep"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ water every day.", answer: "drink", hint: "Verbo de beber.", options: ["drink", "eat", "sleep"] },
    { prompt: "I ______ eat too much candy. (negativa)", answer: "don't", hint: "Negativa com I.", options: ["don't", "doesn't", "not"] },
    { prompt: "She ______ eat vegetables. (negativa)", answer: "doesn't", hint: "3ª pessoa singular negativa.", options: ["doesn't", "don't", "not"] },
    { prompt: "______ you like fruit? (pergunta)", answer: "Do", hint: "Pergunta no presente com you.", options: ["Do", "Does", "Are"] },
    { prompt: "I ______ soccer after school.", answer: "play", hint: "Verbo de jogar.", options: ["play", "sleep", "eat"] },
  ],
  QUIZ: [
    { q: "Como se pergunta 'Você bebe água?'", options: [{ text: "Do you drink water?", correct: true }, { text: "Are you water?" }, { text: "You water?" }] },
    { q: "'I don't eat candy' significa:", options: [{ text: "Eu não como doce", correct: true }, { text: "Eu como doce" }, { text: "Eu gosto de doce" }] },
    { q: "Complete: She ___ eat vegetables.", options: [{ text: "don't" }, { text: "doesn't", correct: true }, { text: "not" }] },
    { q: "Qual é hábito saudável?", options: [{ text: "Sleep 8 hours", correct: true }, { text: "Eat only candy" }, { text: "Never drink water" }] },
    { q: "'Exercise' significa:", options: [{ text: "Exercício", correct: true }, { text: "Comida" }, { text: "Água" }] },
  ],
  REAL_LIFE: [
    { situation: "🍎 Alguém pergunta o que você come no café.", answer: "I eat fruit and bread." },
    { situation: "💧 Perguntam se você bebe água.", answer: "Yes, I drink water every day." },
    { situation: "⚽ Perguntam se você faz esporte.", answer: "Yes, I play soccer." },
    { situation: "🦷 No dentista, ele pergunta se você come doce.", answer: "No, I don't eat much candy." },
    { situation: "😴 Perguntam quantas horas você dorme.", answer: "I sleep eight hours." },
  ],
  GRAMMAR: {
    focus: "Simple Present + Do / Don't",
    why:
      'Pra negar: I/You/We/They + DON\'T + verbo. He/She/It + DOESN\'T + verbo. Pra perguntar: DO/DOES + sujeito + verbo?',
    examples: [
      { en: "I don't eat candy.", pt: "Eu não como doce." },
      { en: "She doesn't drink soda.", pt: "Ela não bebe refri." },
      { en: "Do you play sports?", pt: "Você faz esporte?" },
      { en: "Does he like fruit?", pt: "Ele gosta de fruta?" },
    ],
    errors: [
      { wrong: "She don't eat.", right: "She doesn't eat.", why: "3ª pessoa singular usa DOESN'T." },
      { wrong: "Do she like it?", right: "Does she like it?", why: "Com she/he/it, pergunta com DOES." },
    ],
  },
  SONG: {
    title: "Healthy Me!",
    hookPt: "Cante batendo palma!",
    verses: [
      { en: "Fruits and veggies, yum yum yum,", pt: "Frutas e vegetais!", emoji: "🍎" },
      { en: "Drink some water, that's my chum,", pt: "Bebo água,", emoji: "💧" },
      { en: "Run and jump, play a lot,", pt: "Corro e pulo,", emoji: "🏃" },
      { en: "Sleep at night — sweet dreams I've got!", pt: "Durmo à noite,", emoji: "😴" },
      { en: "No too much candy, no no no,", pt: "Muito doce não,", emoji: "🚫" },
      { en: "Healthy body, watch me grow!", pt: "Corpo saudável!", emoji: "💪" },
    ],
  },
  HUNTER: {
    intro: "Qual é o hábito saudável?",
    rounds: [
      { promptEn: "Best drink for you every day.", promptPt: "Melhor bebida diária.", targetLabel: "Water", objects: [
        { id: "a", label: "Water 💧", img: "", isTarget: true },
        { id: "b", label: "Soda 🥤", img: "" },
        { id: "c", label: "Candy juice 🍬", img: "" },
      ]},
      { promptEn: "Healthy food.", promptPt: "Comida saudável.", targetLabel: "Fruit", objects: [
        { id: "a", label: "Chips 🍟", img: "" },
        { id: "b", label: "Fruit 🍎", img: "", isTarget: true },
        { id: "c", label: "Cake 🎂", img: "" },
      ]},
      { promptEn: "Good habit at night.", promptPt: "Bom hábito à noite.", targetLabel: "Sleep 8 hours", objects: [
        { id: "a", label: "Watch TV all night 📺", img: "" },
        { id: "b", label: "Sleep 8 hours 😴", img: "", isTarget: true },
        { id: "c", label: "Eat candy 🍬", img: "" },
      ]},
      { promptEn: "Good after school.", promptPt: "Bom depois da escola.", targetLabel: "Play sports", objects: [
        { id: "a", label: "Play sports ⚽", img: "", isTarget: true },
        { id: "b", label: "Sit all day 🛋️", img: "" },
        { id: "c", label: "Eat only sweets 🍭", img: "" },
      ]},
      { promptEn: "Who checks your teeth?", promptPt: "Quem cuida dos dentes?", targetLabel: "Dentist", objects: [
        { id: "a", label: "Teacher 👩‍🏫", img: "" },
        { id: "b", label: "Dentist 🦷", img: "", isTarget: true },
        { id: "c", label: "Chef 👨‍🍳", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Encontre os pares de saúde.",
    pairs: [
      { id: "fr", en: "Fruit 🍎", pt: "Fruta", img: IMG.MORNING },
      { id: "wt", en: "Water 💧", pt: "Água", img: IMG.CLASSROOM },
      { id: "sp", en: "Sports ⚽", pt: "Esportes", img: IMG.SCHOOL },
      { id: "sl", en: "Sleep 😴", pt: "Dormir", img: IMG.LILY },
    ],
  },
  PACK: {
    intro: "Monte a mochila SAUDÁVEL. Toque só no que faz bem!",
    backpackImg: IMG.BACKPACK,
    items: [
      { id: "apple", en: "Apple", pt: "Maçã", emoji: "🍎", belongs: true },
      { id: "water", en: "Water bottle", pt: "Garrafa d'água", emoji: "💧", belongs: true },
      { id: "sandwich", en: "Sandwich", pt: "Sanduíche", emoji: "🥪", belongs: true },
      { id: "carrot", en: "Carrot", pt: "Cenoura", emoji: "🥕", belongs: true },
      { id: "candy", en: "Candy", pt: "Doce", emoji: "🍬", belongs: false },
      { id: "soda", en: "Soda", pt: "Refri", emoji: "🥤", belongs: false },
      { id: "chips", en: "Chips", pt: "Batata frita", emoji: "🍟", belongs: false },
      { id: "cake", en: "Cake", pt: "Bolo", emoji: "🎂", belongs: false },
    ],
  },
  CULTURE: {
    title: "Healthy Food Around the World 🌍",
    emoji: "🥗",
    paragraphs: [
      { en: "In Japan, people eat lots of fish, rice and vegetables.", pt: "No Japão, comem muito peixe, arroz e vegetais." },
      { en: "In Italy, salads with tomatoes and olive oil are popular.", pt: "Na Itália, saladas com tomate e azeite são populares." },
      { pt: "Cada país tem uma comida saudável diferente — a variedade é boa pro corpo! 💪" },
    ],
  },
};

export default lesson;
