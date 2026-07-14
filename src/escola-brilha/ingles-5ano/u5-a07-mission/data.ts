// Inglês 5º Ano — Unit 7 "English Challenge 🌟" (Portfolio Final)
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u5-a07-mission",
  meta: {
    unitLabel: "Unit 7 · Lesson 7 — English Challenge 🌟",
    headerKicker: "My English Portfolio — Level 2 · 5th Grade",
    coverKicker: "Projeto final · Portfolio Level 2",
    coverTitle: "English Challenge 🌟",
    coverSubtitle:
      "O grande desafio final! Revise TO BE, Simple Present, Simple Past, Can, Should, Must, There is/are e prepositions — e construa seu My English Portfolio.",
    storyTitle: "The Big Challenge",
    vocabularyTitle: "Full Review",
    speakingTargets: [
      "I am ten years old and I'm creative.",
      "I always study English after school.",
      "Yesterday, I went to the park.",
      "I can play soccer, but I can't swim yet.",
      "You should eat fruits every day.",
      "We must protect the planet.",
      "There is a big museum in my city.",
    ],
    listeningIntro: "Ouça a mensagem final da professora.",
    listeningQuestion: 'A professora disse: "You must complete your English portfolio!" Ela quer que você…',
    listeningOptions: ["desista", "complete o portfólio", "durma"],
    listeningCorrect: "complete o portfólio",
    listeningWrongHint: '"Complete" = completar.',
    readingNarration:
      "Revisão total: TO BE, Simple Present, Simple Past, Can/Should/Must, There is/are, prepositions, adverbs of frequency. Você tem tudo pra brilhar!",
    grammarNarration:
      "Todos os pilares do 5º ano juntos: TO BE (I AM), Simple Present (I PLAY / She PLAYS), Simple Past (I WENT), CAN (habilidade), SHOULD (conselho), MUST (obrigação), THERE IS/ARE (existência), prepositions (in, on, next to). Você está pronto para o 6º ano!",
    finalProjectIntro: "Vamos construir seu MY ENGLISH PORTFOLIO — Level 2! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY ENGLISH PORTFOLIO — LEVEL 2 · by ${name}. 📝 About me: I am ${name}. I am creative and friendly. ⏰ My routine: I always wake up at 7 and I usually study English after school. 🌍 My travel: There is a beautiful beach next to my city. ⚽ Health: I can play soccer and I should drink water every day. 🔬 Science: First, I mix. Then, I heat. Finally, I discover! 📚 My story: Yesterday, I went to a magic forest and I found a golden key. 🌱 Green: We must recycle and we mustn't waste water. 🌟 I am ready for the 6th grade!`,
    finalProjectSectionTitle: "My English Portfolio — Level 2",
  },
  VOCAB: [
    { id: "routine", en: "Routine ⏰", pt: "Rotina", img: IMG.LILY },
    { id: "travel", en: "Travel ✈️", pt: "Viagem", img: IMG.AIRPORT },
    { id: "health", en: "Health 💪", pt: "Saúde", img: IMG.HOSPITAL },
    { id: "science", en: "Science 🔬", pt: "Ciência", img: IMG.EMILY },
    { id: "story", en: "Story 📖", pt: "História", img: IMG.LIBRARY },
    { id: "planet", en: "Planet 🌍", pt: "Planeta", img: IMG.PARK },
    { id: "challenge", en: "Challenge 🌟", pt: "Desafio", img: IMG.RAINBOW },
    { id: "portfolio", en: "Portfolio 📚", pt: "Portfólio", img: IMG.LIBRARY },
  ],
  STORY: [
    { img: IMG.EMILY, en: "Welcome to the English Challenge!", pt: "Bem-vindo ao Desafio de Inglês!" },
    { img: IMG.LILY, en: "I am Lily. I am 10 and I am ready!", pt: "Eu sou Lily. Tenho 10 anos e estou pronta!" },
    { img: IMG.CLASSROOM, en: "I always study English after school.", pt: "Sempre estudo inglês depois da aula." },
    { img: IMG.AIRPORT, en: "There is a big airport in my city.", pt: "Tem um aeroporto grande na minha cidade." },
    { img: IMG.BEN, en: "I can play soccer, but I can't ski.", pt: "Sei jogar futebol, mas não sei esquiar." },
    { img: IMG.HOSPITAL, en: "You should eat fruits every day.", pt: "Você deve comer frutas todo dia." },
    { img: IMG.PARK, en: "We must protect our planet.", pt: "Devemos proteger nosso planeta." },
    { img: IMG.LIBRARY, en: "Yesterday, I read a great story.", pt: "Ontem, li uma ótima história." },
    { img: IMG.RAINBOW, en: "Now, I am ready for the 6th grade!", pt: "Agora, estou pronta pro 6º ano!" },
  ],
  DIALOG: [
    { who: "Emily", img: IMG.EMILY, en: "Class, this is your final challenge!", pt: "Turma, este é o desafio final!" },
    { who: "Lily", img: IMG.LILY, en: "I want to show my portfolio.", pt: "Quero mostrar meu portfólio." },
    { who: "Emily", img: IMG.EMILY, en: "Great! Tell me about yourself.", pt: "Ótimo! Fale sobre você." },
    { who: "Lily", img: IMG.LILY, en: "I am 10. I always study English.", pt: "Tenho 10 anos. Sempre estudo inglês." },
    { who: "Ben", img: IMG.BEN, en: "Yesterday, I went to the park with my dog.", pt: "Ontem, fui ao parque com meu cachorro." },
    { who: "Emily", img: IMG.EMILY, en: "Beautiful! What must we do for the planet?", pt: "Lindo! O que devemos fazer pelo planeta?" },
    { who: "Lily", img: IMG.LILY, en: "We must recycle and save water.", pt: "Devemos reciclar e economizar água." },
    { who: "Emily", img: IMG.EMILY, en: "You are all ready for the 6th grade!", pt: "Vocês estão prontos pro 6º ano!" },
  ],
  READING: {
    title: "My Level 2 Journey",
    img: IMG.RAINBOW,
    parts: [
      { en: "I am proud of my English.", pt: "Estou orgulhoso do meu inglês.", highlight: ["am"] },
      { en: "I can talk about my routine.", pt: "Sei falar da minha rotina.", highlight: ["can"] },
      { en: "I went to many amazing places.", pt: "Fui a muitos lugares incríveis.", highlight: ["went"] },
      { en: "I should keep practicing every day.", pt: "Devo continuar praticando todo dia.", highlight: ["should"] },
      { en: "We must protect our planet together.", pt: "Devemos proteger nosso planeta juntos.", highlight: ["must"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ 10 years old. (TO BE)", answer: "am", hint: "1ª pessoa.", options: ["am", "is", "are"] },
    { prompt: "Yesterday, I ______ to school. (ir/passado)", answer: "went", hint: "Passado de GO.", options: ["went", "go", "goes"] },
    { prompt: "I ______ play soccer. (habilidade)", answer: "can", hint: "Habilidade.", options: ["can", "should", "must"] },
    { prompt: "You ______ eat fruits. (conselho)", answer: "should", hint: "Conselho.", options: ["should", "must", "can't"] },
    { prompt: "We ______ recycle. (obrigação forte)", answer: "must", hint: "Obrigação.", options: ["must", "should", "can"] },
    { prompt: "There ______ a big park.", answer: "is", hint: "Singular.", options: ["is", "are", "am"] },
    { prompt: "The book is ______ the table. (em cima)", answer: "on", hint: "Preposição.", options: ["on", "in", "next"] },
  ],
  QUIZ: [
    { q: "Complete: I ___ friendly.", options: [{ text: "am", correct: true }, { text: "is" }, { text: "are" }] },
    { q: "Complete: She ___ soccer every day.", options: [{ text: "plays", correct: true }, { text: "play" }, { text: "playing" }] },
    { q: "Passado de GO:", options: [{ text: "goed" }, { text: "went", correct: true }, { text: "going" }] },
    { q: "Complete: I ___ swim.", options: [{ text: "am" }, { text: "can", correct: true }, { text: "should" }] },
    { q: "Complete: You ___ eat vegetables.", options: [{ text: "should", correct: true }, { text: "shouldn't" }, { text: "can't" }] },
    { q: "Complete: We ___ pollute the ocean.", options: [{ text: "must" }, { text: "mustn't", correct: true }, { text: "should" }] },
    { q: "Complete: There ___ two hotels.", options: [{ text: "is" }, { text: "are", correct: true }, { text: "am" }] },
    { q: "'Always' significa:", options: [{ text: "Sempre", correct: true }, { text: "Nunca" }, { text: "Às vezes" }] },
  ],
  REAL_LIFE: [
    { situation: "👤 Se apresentando.", answer: "I am 10 years old and I am creative." },
    { situation: "⏰ Falando sua rotina.", answer: "I always wake up at 7 o'clock." },
    { situation: "📖 Contando algo de ontem.", answer: "Yesterday, I went to the library." },
    { situation: "⚽ Falando uma habilidade.", answer: "I can play soccer, but I can't ski." },
    { situation: "🥗 Dando um conselho.", answer: "You should drink water." },
    { situation: "🌱 Falando de obrigação verde.", answer: "We must recycle every day." },
    { situation: "🏨 Descrevendo sua cidade.", answer: "There is a big museum next to the park." },
  ],
  GRAMMAR: {
    focus: "Revisão total · TO BE · Simple Present · Simple Past · Can · Should · Must · There is/are · Prepositions",
    why:
      "Você aprendeu 8 pilares do inglês. TO BE (identidade), Simple Present (rotina), Simple Past (passado), CAN (habilidade), SHOULD (conselho), MUST (obrigação), THERE IS/ARE (existência), prepositions (localização). Com isso você fala, ouve, lê e escreve em inglês!",
    examples: [
      { en: "I am creative. (TO BE)", pt: "Sou criativo." },
      { en: "She plays piano. (Simple Present)", pt: "Ela toca piano." },
      { en: "I went to the park. (Simple Past)", pt: "Fui ao parque." },
      { en: "I can swim. (CAN)", pt: "Sei nadar." },
      { en: "You should sleep well. (SHOULD)", pt: "Você deve dormir bem." },
      { en: "We must recycle. (MUST)", pt: "Devemos reciclar." },
      { en: "There is a park. There are two hotels. (THERE IS/ARE)", pt: "Tem um parque. Tem dois hotéis." },
    ],
    errors: [
      { wrong: "She play soccer.", right: "She PLAYS soccer.", why: "3ª pessoa → +s." },
      { wrong: "Yesterday, I go home.", right: "Yesterday, I WENT home.", why: "Yesterday = passado." },
      { wrong: "I can to swim.", right: "I CAN swim.", why: "CAN nunca leva TO." },
    ],
  },
  SONG: {
    title: "I Did It!",
    hookPt: "Cante sua conquista!",
    verses: [
      { en: "I am ready, I am strong,", pt: "Estou pronto, sou forte,", emoji: "💪" },
      { en: "I can sing an English song!", pt: "Sei cantar em inglês!", emoji: "🎵" },
      { en: "Yesterday, I learned a lot,", pt: "Ontem, aprendi muito,", emoji: "📚" },
      { en: "Now I show what I have got!", pt: "Agora mostro o que sei!", emoji: "⭐" },
      { en: "Must protect and should care,", pt: "Devo proteger e cuidar,", emoji: "🌱" },
      { en: "English magic everywhere!", pt: "Magia do inglês em todo lugar!", emoji: "🌟" },
    ],
  },
  HUNTER: {
    intro: "Escolha a forma correta!",
    rounds: [
      { promptEn: "Complete: I ___ friendly.", promptPt: "Complete: I ___ friendly.", targetLabel: "am", objects: [
        { id: "a", label: "am", img: "", isTarget: true },
        { id: "b", label: "is", img: "" },
        { id: "c", label: "are", img: "" },
      ]},
      { promptEn: "Passado de GO:", promptPt: "Passado de GO:", targetLabel: "went", objects: [
        { id: "a", label: "goed", img: "" },
        { id: "b", label: "went", img: "", isTarget: true },
        { id: "c", label: "going", img: "" },
      ]},
      { promptEn: "Habilidade:", promptPt: "Habilidade:", targetLabel: "can", objects: [
        { id: "a", label: "must", img: "" },
        { id: "b", label: "can", img: "", isTarget: true },
        { id: "c", label: "should", img: "" },
      ]},
      { promptEn: "Conselho positivo:", promptPt: "Conselho positivo:", targetLabel: "should", objects: [
        { id: "a", label: "should", img: "", isTarget: true },
        { id: "b", label: "shouldn't", img: "" },
        { id: "c", label: "can't", img: "" },
      ]},
      { promptEn: "Obrigação forte:", promptPt: "Obrigação forte:", targetLabel: "must", objects: [
        { id: "a", label: "can", img: "" },
        { id: "b", label: "must", img: "", isTarget: true },
        { id: "c", label: "should", img: "" },
      ]},
      { promptEn: "Complete: There ___ 3 hotels.", promptPt: "Complete: There ___ 3 hotels.", targetLabel: "are", objects: [
        { id: "a", label: "is", img: "" },
        { id: "b", label: "are", img: "", isTarget: true },
        { id: "c", label: "am", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares finais! Encontre o vocabulário do 5º ano.",
    pairs: [
      { id: "a", en: "Routine ⏰", pt: "Rotina", img: IMG.LILY },
      { id: "b", en: "Travel ✈️", pt: "Viagem", img: IMG.AIRPORT },
      { id: "c", en: "Health 💪", pt: "Saúde", img: IMG.HOSPITAL },
      { id: "d", en: "Planet 🌍", pt: "Planeta", img: IMG.PARK },
    ],
  },
  BOOK: {
    title: "My English Portfolio — Level 2",
    intro: "Seu portfólio final do 5º ano!",
    pages: [
      { en: "Page 1 — About me and my routine.", pt: "Pág. 1 — Sobre mim e minha rotina.", img: IMG.LILY, badge: "👤" },
      { en: "Page 2 — My travel guide.", pt: "Pág. 2 — Meu guia de viagem.", img: IMG.AIRPORT, badge: "✈️" },
      { en: "Page 3 — My healthy challenge.", pt: "Pág. 3 — Meu desafio saudável.", img: IMG.BEN, badge: "💪" },
      { en: "Page 4 — My science fair.", pt: "Pág. 4 — Minha feira de ciências.", img: IMG.EMILY, badge: "🔬" },
      { en: "Page 5 — My original story.", pt: "Pág. 5 — Minha história original.", img: IMG.LIBRARY, badge: "📖" },
      { en: "Page 6 — My green campaign.", pt: "Pág. 6 — Minha campanha verde.", img: IMG.PARK, badge: "🌱" },
      { en: "The End — Ready for the 6th grade!", pt: "Fim — Pronto pro 6º ano!", img: IMG.RAINBOW, badge: "🌟" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "Este é o palco do portfólio. Toque nos itens do 5º ano!",
    img: IMG.CLASSROOM,
    items: [
      { en: "Clock", pt: "Relógio (rotina)", emoji: "⏰" },
      { en: "Passport", pt: "Passaporte (viagem)", emoji: "🛂" },
      { en: "Apple", pt: "Maçã (saúde)", emoji: "🍎" },
      { en: "Microscope", pt: "Microscópio (ciência)", emoji: "🔬" },
      { en: "Book", pt: "Livro (história)", emoji: "📖" },
      { en: "Leaf", pt: "Folha (planeta)", emoji: "🌱" },
      { en: "Trophy", pt: "Troféu (desafio)", emoji: "🏆" },
    ],
  },
  CULTURE: {
    title: "Ready for the World 🌎",
    emoji: "🌟",
    paragraphs: [
      { en: "English is spoken by more than 1.5 billion people around the world.", pt: "O inglês é falado por mais de 1,5 bilhão de pessoas no mundo." },
      { en: "You are now part of a global community of learners!", pt: "Agora você faz parte de uma comunidade global de aprendizes!" },
      { pt: "No 6º ano você vai aprofundar e ler textos maiores. Bem-vindo aos Anos Finais!" },
    ],
  },
};

export default lesson;
