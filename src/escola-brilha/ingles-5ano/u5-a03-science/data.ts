// Inglês 5º Ano — Unit 3 "Science and Technology 🔬💻"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u5-a03-science",
  meta: {
    unitLabel: "Unit 3 · Lesson 3 — Science and Technology 🔬💻",
    headerKicker: "My English Portfolio — Level 2 · 5th Grade",
    coverKicker: "Ciência, invenções & tecnologia",
    coverTitle: "Science and Technology 🔬💻",
    coverSubtitle:
      "Falar de invenções e o que máquinas e cientistas fazem: The robot can walk. I use the computer. Scientists study space.",
    storyTitle: "Buddy the Genius Robot",
    vocabularyTitle: "Science Words",
    speakingTargets: [
      "I use the computer every day.",
      "The robot can walk and talk.",
      "Scientists study the planet.",
      "The internet is very useful.",
      "I love experiments.",
      "Space is huge!",
    ],
    listeningIntro: "Ouça Buddy contar o que ele faz.",
    listeningQuestion: 'Buddy disse: "I can dance and I can sing." O que ele CONSEGUE fazer?',
    listeningOptions: ["Nadar e correr", "Dançar e cantar", "Cozinhar e ler"],
    listeningCorrect: "Dançar e cantar",
    listeningWrongHint: '"Dance and sing" = dançar e cantar.',
    readingNarration:
      "Use CAN pra habilidade da máquina/pessoa. Use SIMPLE PRESENT pra rotinas científicas: Scientists STUDY.",
    grammarNarration:
      "CAN mostra capacidade: The robot CAN walk. SIMPLE PRESENT descreve o que acontece sempre: Scientists STUDY the planet. Verbos comuns: use, study, help, work.",
    finalProjectIntro: "Sua feira de invenções! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `YOUNG INVENTOR FAIR — by ${name}. Hi! I am a young inventor. I use the computer to research. My invention is a robot friend. It can help kids study, talk, and play games. Scientists work hard, and so do I. Science makes the world better!`,
    finalProjectSectionTitle: "Young Inventor Fair",
  },
  VOCAB: [
    { id: "computer", en: "Computer 💻", pt: "Computador", img: IMG.CLASSROOM },
    { id: "internet", en: "Internet 🌐", pt: "Internet", img: IMG.RAINBOW },
    { id: "robot", en: "Robot 🤖", pt: "Robô", img: IMG.BUDDY },
    { id: "scientist", en: "Scientist 👩‍🔬", pt: "Cientista", img: IMG.EMILY },
    { id: "experiment", en: "Experiment 🧪", pt: "Experimento", img: IMG.EMILY },
    { id: "space", en: "Space 🚀", pt: "Espaço", img: IMG.RAINBOW },
    { id: "planet", en: "Planet 🪐", pt: "Planeta", img: IMG.CITY_COVER },
    { id: "energy", en: "Energy ⚡", pt: "Energia", img: IMG.RAINBOW },
  ],
  STORY: [
    { img: IMG.BUDDY, en: "This is Buddy — a genius robot!", pt: "Este é Buddy — um robô gênio!" },
    { img: IMG.BUDDY, en: "Buddy can walk, talk, and even dance.", pt: "Buddy consegue andar, falar e até dançar." },
    { img: IMG.LILY, en: "Lily uses the computer to program him.", pt: "Lily usa o computador pra programar ele." },
    { img: IMG.EMILY, en: "Miss Emily is a scientist. She teaches technology.", pt: "Miss Emily é cientista. Ensina tecnologia." },
    { img: IMG.EMILY, en: "Scientists do experiments every day.", pt: "Cientistas fazem experimentos todo dia." },
    { img: IMG.RAINBOW, en: "One day Buddy will travel to space!", pt: "Um dia Buddy vai viajar pro espaço!" },
    { img: IMG.BEN, en: "Ben loves the internet and video games.", pt: "Ben ama internet e videogame." },
    { img: IMG.FRIENDS, en: "Science and friends: the perfect team!", pt: "Ciência e amigos: o time perfeito!" },
  ],
  DIALOG: [
    { who: "Lily", img: IMG.LILY, en: "Buddy, what can you do?", pt: "Buddy, o que você consegue fazer?" },
    { who: "Buddy", img: IMG.BUDDY, en: "I can walk, talk, and dance!", pt: "Consigo andar, falar e dançar!" },
    { who: "Ben", img: IMG.BEN, en: "Can you play video games?", pt: "Você joga videogame?" },
    { who: "Buddy", img: IMG.BUDDY, en: "Yes, I can! I love games.", pt: "Sim! Amo jogos." },
    { who: "Lily", img: IMG.LILY, en: "Scientists study space. What planet do you like?", pt: "Cientistas estudam o espaço. Que planeta você gosta?" },
    { who: "Buddy", img: IMG.BUDDY, en: "I love Mars — the red planet.", pt: "Amo Marte — o planeta vermelho." },
    { who: "Ben", img: IMG.BEN, en: "Technology is amazing!", pt: "Tecnologia é incrível!" },
  ],
  READING: {
    title: "Technology Helps Us",
    img: IMG.CLASSROOM,
    parts: [
      { en: "I use the computer at school.", pt: "Uso o computador na escola.", highlight: ["use"] },
      { en: "The internet helps me study.", pt: "A internet me ajuda a estudar.", highlight: ["helps"] },
      { en: "Robots can do many jobs.", pt: "Robôs conseguem fazer muitos trabalhos.", highlight: ["can"] },
      { en: "Scientists study the planet.", pt: "Cientistas estudam o planeta.", highlight: ["study"] },
      { en: "Technology makes life easier.", pt: "A tecnologia facilita a vida.", highlight: ["makes"] },
    ],
  },
  WRITING: [
    { prompt: "The robot ______ walk.", answer: "can", hint: "Verbo de habilidade.", options: ["can", "is", "have"] },
    { prompt: "I ______ the computer daily.", answer: "use", hint: "Verbo USAR.", options: ["use", "am", "have"] },
    { prompt: "Scientists ______ the planet.", answer: "study", hint: "Verbo ESTUDAR.", options: ["study", "is", "sings"] },
    { prompt: "Buddy ______ dance!", answer: "can", hint: "Habilidade.", options: ["can", "am", "have"] },
    { prompt: "The ______ is on Mars. (planeta)", answer: "planet", hint: "Mars é um…", options: ["planet", "school", "friend"] },
  ],
  QUIZ: [
    { q: "'Robot' é:", options: [{ text: "Escola" }, { text: "Robô", correct: true }, { text: "Computador" }] },
    { q: "Complete: I ___ the computer.", options: [{ text: "am" }, { text: "use", correct: true }, { text: "is" }] },
    { q: "'Scientist' é:", options: [{ text: "Cientista", correct: true }, { text: "Professor" }, { text: "Médico" }] },
    { q: "Complete: The robot ___ talk.", options: [{ text: "is" }, { text: "can", correct: true }, { text: "am" }] },
    { q: "'Space' é:", options: [{ text: "Escola" }, { text: "Espaço", correct: true }, { text: "Cidade" }] },
    { q: "'Experiment' é:", options: [{ text: "Experimento", correct: true }, { text: "Amigo" }, { text: "Bandeira" }] },
    { q: "'Energy' é:", options: [{ text: "Energia", correct: true }, { text: "Comida" }, { text: "Casa" }] },
  ],
  REAL_LIFE: [
    { situation: "💻 Falando o que você usa.", answer: "I use the computer." },
    { situation: "🤖 Descrevendo o que o robô faz.", answer: "The robot can walk and talk." },
    { situation: "🧪 Falando o que cientistas fazem.", answer: "Scientists study nature." },
    { situation: "🚀 Falando sobre o espaço.", answer: "Space is huge and beautiful." },
    { situation: "🌐 Falando sobre a internet.", answer: "The internet is very useful." },
  ],
  GRAMMAR: {
    focus: "CAN / CAN'T + Simple Present (verbos de ação)",
    why:
      "CAN mostra o que a máquina ou pessoa CONSEGUE fazer. SIMPLE PRESENT (use, study, help) descreve o que ela FAZ com frequência.",
    examples: [
      { en: "The robot can walk.", pt: "O robô consegue andar." },
      { en: "It can't fly.", pt: "Ele não consegue voar." },
      { en: "I use the computer.", pt: "Eu uso o computador." },
      { en: "Scientists study space.", pt: "Cientistas estudam o espaço." },
      { en: "The internet helps us.", pt: "A internet nos ajuda." },
    ],
    errors: [
      { wrong: "The robot cans walk.", right: "The robot CAN walk.", why: "CAN nunca tem -S." },
      { wrong: "He use the computer.", right: "He USES the computer.", why: "He/She/It pede -S." },
      { wrong: "I no can fly.", right: "I CAN'T fly.", why: "Negativo = CAN'T." },
    ],
  },
  SONG: {
    title: "The Robot Song",
    hookPt: "Cante como um robô!",
    verses: [
      { en: "I am a robot, I can walk,", pt: "Sou um robô, sei andar,", emoji: "🤖" },
      { en: "I can dance, and I can talk!", pt: "Sei dançar e sei falar!", emoji: "💃" },
      { en: "Scientists study day and night,", pt: "Cientistas estudam dia e noite,", emoji: "🔬" },
      { en: "Technology, it shines so bright.", pt: "Tecnologia brilha forte.", emoji: "💡" },
      { en: "Computers help us learn and play,", pt: "Computadores ajudam a aprender e brincar,", emoji: "💻" },
      { en: "Science makes a better day!", pt: "Ciência faz o dia melhor!", emoji: "🌟" },
    ],
  },
  HUNTER: {
    intro: "Escolha a palavra certa!",
    rounds: [
      { promptEn: "'Robot' é:", promptPt: "'Robot' é:", targetLabel: "Robô", objects: [
        { id: "a", label: "Robô", img: "", isTarget: true },
        { id: "b", label: "Escola", img: "" },
        { id: "c", label: "Amigo", img: "" },
      ]},
      { promptEn: "Complete: The robot ___ dance.", promptPt: "Complete: The robot ___ dance.", targetLabel: "can", objects: [
        { id: "a", label: "is", img: "" },
        { id: "b", label: "can", img: "", isTarget: true },
        { id: "c", label: "am", img: "" },
      ]},
      { promptEn: "'Scientist' é:", promptPt: "'Scientist' é:", targetLabel: "Cientista", objects: [
        { id: "a", label: "Piloto", img: "" },
        { id: "b", label: "Cientista", img: "", isTarget: true },
        { id: "c", label: "Chef", img: "" },
      ]},
      { promptEn: "Complete: I ___ the computer.", promptPt: "Complete: I ___ the computer.", targetLabel: "use", objects: [
        { id: "a", label: "am", img: "" },
        { id: "b", label: "use", img: "", isTarget: true },
        { id: "c", label: "is", img: "" },
      ]},
      { promptEn: "'Space' é:", promptPt: "'Space' é:", targetLabel: "Espaço", objects: [
        { id: "a", label: "Espaço", img: "", isTarget: true },
        { id: "b", label: "Escola", img: "" },
        { id: "c", label: "Loja", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares de ciência!",
    pairs: [
      { id: "a", en: "Robot 🤖", pt: "Robô", img: IMG.BUDDY },
      { id: "b", en: "Scientist 👩‍🔬", pt: "Cientista", img: IMG.EMILY },
      { id: "c", en: "Computer 💻", pt: "Computador", img: IMG.CLASSROOM },
      { id: "d", en: "Planet 🪐", pt: "Planeta", img: IMG.CITY_COVER },
    ],
  },
  BOOK: {
    title: "Young Inventor Fair",
    intro: "Sua feira de invenções!",
    pages: [
      { en: "Page 1 — I am an inventor.", pt: "Pág. 1 — Sou um inventor.", img: IMG.LILY, badge: "🔧" },
      { en: "Page 2 — My robot friend, Buddy.", pt: "Pág. 2 — Meu robô amigo, Buddy.", img: IMG.BUDDY, badge: "🤖" },
      { en: "Page 3 — Buddy can help kids study.", pt: "Pág. 3 — Buddy ajuda crianças a estudar.", img: IMG.CLASSROOM, badge: "📚" },
      { en: "Page 4 — Scientists work every day.", pt: "Pág. 4 — Cientistas trabalham todo dia.", img: IMG.EMILY, badge: "🔬" },
      { en: "Page 5 — Space is our next home.", pt: "Pág. 5 — Espaço é nossa próxima casa.", img: IMG.RAINBOW, badge: "🚀" },
      { en: "The End — I love science!", pt: "Fim — Amo ciência!", img: IMG.FRIENDS, badge: "⭐" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "É o laboratório! Toque em cada item.",
    img: IMG.CLASSROOM,
    items: [
      { en: "Microscope", pt: "Microscópio", emoji: "🔬" },
      { en: "Computer", pt: "Computador", emoji: "💻" },
      { en: "Test tube", pt: "Tubo de ensaio", emoji: "🧪" },
      { en: "Robot", pt: "Robô", emoji: "🤖" },
      { en: "Rocket", pt: "Foguete", emoji: "🚀" },
      { en: "Battery", pt: "Bateria", emoji: "🔋" },
    ],
  },
  CULTURE: {
    title: "Great Inventors 💡",
    emoji: "🔬",
    paragraphs: [
      { en: "Thomas Edison invented the light bulb — brilliant!", pt: "Thomas Edison inventou a lâmpada — genial!" },
      { en: "Marie Curie was a scientist who studied radiation.", pt: "Marie Curie foi cientista e estudou a radiação." },
      { pt: "No Brasil, Santos Dumont ajudou a criar o avião. Ciência muda o mundo!" },
    ],
  },
};

export default lesson;
