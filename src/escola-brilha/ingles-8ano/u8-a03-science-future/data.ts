// Inglês 8º Ano — Unit 3 "Science, Technology and the Future 🤖"
// Future Will · Going To · First Conditional
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u8-a03-science-future",
  meta: {
    unitLabel: "Unit 3 · Lesson 1 — Science, Technology and the Future 🤖",
    headerKicker: "SPEB 1.0 · English Academy — 8th Grade",
    coverKicker: "AI · Robotics · Renewable Energy · Space",
    coverTitle: "Science, Technology and the Future 🤖",
    coverSubtitle:
      "Os alunos organizam uma Feira de Tecnologia do Futuro. Faça previsões e planos com Will, Going To e First Conditional.",
    storyTitle: "Future Tech Expo",
    vocabularyTitle: "Science & Innovation",
    speakingTargets: [
      "In 2050, robots will help doctors.",
      "We are going to build a solar car.",
      "If we save energy, we will help the planet.",
      "AI will change many jobs.",
      "I am going to study engineering.",
      "If humans travel to Mars, life will be different.",
    ],
    listeningIntro: "Ouça a apresentação da feira: 'Future Tech Expo'.",
    listeningQuestion:
      'Maya disse: "If we invest in renewable energy, our cities will be cleaner." O que Maya está fazendo?',
    listeningOptions: [
      "Contando um fato do passado",
      "Fazendo uma previsão condicional",
      "Descrevendo o presente",
    ],
    listeningCorrect: "Fazendo uma previsão condicional",
    listeningWrongHint: "'If + Simple Present + will' = First Conditional (previsão condicional).",
    readingNarration:
      "A tecnologia muda o mundo. Inteligência artificial já ajuda médicos. Energia renovável reduz poluição. Robôs fazem cirurgias. O futuro depende das nossas escolhas — e das suas ideias.",
    grammarNarration:
      "WILL = decisão espontânea ou previsão sem plano ('It will rain'). GOING TO = plano ou intenção ('I am going to study'). FIRST CONDITIONAL = If + Simple Present, ... will + verbo ('If we save energy, we will help the planet').",
    finalProjectIntro: "Vamos apresentar sua invenção. Digite seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY FUTURE TECH PROJECT — Presenter: ${name}. Welcome to my invention. In the next ten years, I am going to build a smart backpack that recycles plastic while you walk. If schools use my backpack, they will save the ocean. Artificial intelligence will help the backpack sort materials automatically. Solar panels will charge its battery. If every student in the world uses it, we will reduce plastic pollution by 40%. Science is not magic — it is imagination plus math plus courage. And I have all three!`,
    finalProjectSectionTitle: "My Future Tech Project",
  },
  VOCAB: [
    { id: "ai", en: "AI 🤖", pt: "Inteligência artificial", img: IMG.KENJI },
    { id: "robotics", en: "Robotics 🦾", pt: "Robótica", img: IMG.LUCAS },
    { id: "renewable", en: "Renewable energy ☀️", pt: "Energia renovável", img: IMG.PARK },
    { id: "biotech", en: "Biotechnology 🧬", pt: "Biotecnologia", img: IMG.HOSPITAL },
    { id: "innovation", en: "Innovation 💡", pt: "Inovação", img: IMG.SOPHIE },
    { id: "space", en: "Space exploration 🚀", pt: "Exploração espacial", img: IMG.CITY_COVER },
    { id: "invention", en: "Invention 🛠️", pt: "Invenção", img: IMG.CLASS },
    { id: "careers", en: "Future careers 💼", pt: "Profissões do futuro", img: IMG.MAYA },
  ],
  STORY: [
    { img: IMG.ANNA, en: "Ms. Anna: 'Welcome to Future Tech Expo!'", pt: "Ms. Anna: 'Bem-vindos à Future Tech Expo!'" },
    { img: IMG.KENJI, en: "Kenji: 'I am going to present a solar-powered drone.'", pt: "Kenji: 'Vou apresentar um drone solar.'" },
    { img: IMG.MAYA, en: "Maya: 'My invention will clean rivers automatically.'", pt: "Maya: 'Minha invenção vai limpar rios automaticamente.'" },
    { img: IMG.SOPHIE, en: "Sophie: 'If AI helps doctors, we will save lives.'", pt: "Sophie: 'Se a IA ajudar médicos, salvaremos vidas.'" },
    { img: IMG.LUCAS, en: "Lucas: 'Robots are going to work with humans, not against.'", pt: "Lucas: 'Robôs vão trabalhar COM humanos, não contra.'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'The future is what you build today!'", pt: "Ms. Anna: 'O futuro é o que vocês constroem hoje!'" },
  ],
  DIALOG: [
    { who: "Ms. Anna", img: IMG.ANNA, en: "What are you going to invent, Kenji?", pt: "O que você vai inventar, Kenji?" },
    { who: "Kenji", img: IMG.KENJI, en: "I'm going to build a solar drone for farmers.", pt: "Vou construir um drone solar pra agricultores." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "How will it help them?", pt: "Como ele vai ajudá-los?" },
    { who: "Kenji", img: IMG.KENJI, en: "If they use the drone, they will save water.", pt: "Se usarem o drone, vão economizar água." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Excellent! When will you start?", pt: "Excelente! Quando você começa?" },
    { who: "Kenji", img: IMG.KENJI, en: "I'll start next month. My team is ready!", pt: "Vou começar mês que vem. Meu time está pronto!" },
  ],
  READING: {
    title: "The World in 2050",
    img: IMG.CITY_COVER,
    parts: [
      { en: "By 2050, artificial intelligence will change almost every job.", pt: "Até 2050, a IA vai mudar quase todos os empregos.", highlight: ["artificial intelligence", "2050"] },
      { en: "Cars are going to be electric, autonomous and connected.", pt: "Carros vão ser elétricos, autônomos e conectados.", highlight: ["electric", "autonomous"] },
      { en: "If we protect nature now, our children will breathe clean air.", pt: "Se protegermos a natureza agora, nossos filhos vão respirar ar limpo.", highlight: ["protect", "clean air"] },
      { en: "Space exploration will bring new medicines and materials.", pt: "A exploração espacial vai trazer novos remédios e materiais.", highlight: ["Space exploration"] },
      { en: "The future is a science project — and you are on the team.", pt: "O futuro é um projeto científico — e você está no time.", highlight: ["team"] },
    ],
  },
  WRITING: [
    { prompt: "Tomorrow it ______ rain. (predict)", answer: "will", hint: "Previsão sem plano = WILL.", options: ["will", "is going to", "goes"], explain: "Previsão sem evidência específica → WILL." },
    { prompt: "I ______ study engineering next year. (plan)", answer: "am going to", hint: "Plano decidido = GOING TO.", options: ["am going to", "will", "am"] },
    { prompt: "If we save energy, we ______ help the planet.", answer: "will", hint: "First Conditional: if + present, ... will + verb.", options: ["will", "would", "are going to"] },
    { prompt: "Look at those clouds! It ______ rain.", answer: "is going to", hint: "Evidência agora → GOING TO.", options: ["is going to", "will", "rains"] },
    { prompt: "If AI helps doctors, more lives ______ be saved.", answer: "will", hint: "First Conditional: will + verb.", options: ["will", "would", "are"] },
    { prompt: "I ______ answer the phone!", answer: "will", hint: "Decisão espontânea = WILL.", options: ["will", "am going to", "go"] },
    { prompt: "'Renewable' significa:", answer: "Renovável", hint: "Energia que se renova (sol, vento).", options: ["Renovável", "Reciclável", "Realizável"] },
  ],
  QUIZ: [
    { q: "Previsão com evidência: 'Look at the clouds! It ___ rain.'", options: [{ text: "will" }, { text: "is going to", correct: true, explain: "Evidência agora → GOING TO." }, { text: "rains" }] },
    { q: "First Conditional: 'If we save energy, we ___ help the planet.'", options: [{ text: "would" }, { text: "will", correct: true }, { text: "are going" }] },
    { q: "Decisão espontânea: 'The phone is ringing! I ___ answer it.'", options: [{ text: "am going to" }, { text: "will", correct: true }, { text: "go" }] },
    { q: "Plano futuro: 'Next year I ___ study biology.'", options: [{ text: "am going to", correct: true }, { text: "will" }, { text: "study" }] },
    { q: "'AI' significa:", options: [{ text: "Automação Industrial" }, { text: "Inteligência Artificial", correct: true }, { text: "Ambiente Interativo" }] },
    { q: "Estrutura do First Conditional:", options: [{ text: "If + Simple Present, ... will + verb", correct: true }, { text: "If + past, ... would + verb" }, { text: "If + will, ... will" }] },
    { q: "'Renewable energy' inclui:", options: [{ text: "Petróleo e carvão" }, { text: "Sol, vento e água", correct: true }, { text: "Gasolina" }] },
    { q: "Robôs no futuro devem:", options: [{ text: "Substituir todo trabalho humano" }, { text: "Trabalhar junto com humanos", correct: true, explain: "Foco é colaboração, não substituição." }, { text: "Ser proibidos" }] },
  ],
  REAL_LIFE: [
    { situation: "🔮 Previsão sem plano.", answer: "In 2050, cars will be fully electric." },
    { situation: "📅 Plano seu.", answer: "I am going to study engineering next year." },
    { situation: "🌍 First Conditional.", answer: "If we recycle more, we will save the planet." },
    { situation: "🤖 Sobre IA.", answer: "AI will help doctors save more lives." },
    { situation: "🚀 Sobre o espaço.", answer: "Humans are going to live on Mars one day." },
  ],
  GRAMMAR: {
    focus: "Will × Going To × First Conditional",
    why:
      "WILL = decisão espontânea / previsão sem evidência ('I'll help you!'). GOING TO = plano decidido ANTES / previsão COM evidência ('I'm going to study medicine'). FIRST CONDITIONAL = condição real e provável: IF + Simple Present, ... WILL + verbo.",
    examples: [
      { en: "I'll answer the phone. (decisão agora)", pt: "Vou atender o telefone. (decisão agora)" },
      { en: "I'm going to study engineering. (plano)", pt: "Vou estudar engenharia. (plano)" },
      { en: "Look at those clouds — it's going to rain. (evidência)", pt: "Olha essas nuvens — vai chover. (evidência)" },
      { en: "If it rains, we WILL stay home. (First Conditional)", pt: "Se chover, ficaremos em casa. (First Conditional)" },
    ],
    errors: [
      { wrong: "If it will rain, we stay home.", right: "If it RAINS, we WILL stay home.", why: "First Conditional: IF + present, ... WILL + verb (sem 'will' no if)." },
      { wrong: "I will study medicine next year, I decided last month.", right: "I'M GOING TO study medicine next year.", why: "Plano decidido antes → GOING TO." },
      { wrong: "Look! It will rain.", right: "Look! It's GOING TO rain.", why: "Evidência visível → GOING TO." },
      { wrong: "The phone is ringing! I am going to answer.", right: "The phone is ringing! I'LL answer.", why: "Decisão no momento → WILL." },
    ],
  },
  SONG: {
    title: "Future Is Now",
    verses: [
      { en: "If we dream, the world will change,", pt: "Se sonharmos, o mundo vai mudar,", emoji: "🌍" },
      { en: "Robots and humans, side by side, arrange.", pt: "Robôs e humanos, lado a lado, se arranjam.", emoji: "🤖" },
      { en: "I'm going to build, I'm going to try,", pt: "Vou construir, vou tentar,", emoji: "🛠️" },
      { en: "The future is now — reach for the sky!", pt: "O futuro é agora — alcance o céu!", emoji: "🚀" },
    ],
  },
  HUNTER: {
    intro: "Will, Going To ou First Conditional?",
    rounds: [
      { promptEn: "The phone is ringing! I ___ answer.", promptPt: "The phone is ringing! I ___ answer.", targetLabel: "will", objects: [
        { id: "a", label: "will", isTarget: true }, { id: "b", label: "am going to" }, { id: "c", label: "go" },
      ]},
      { promptEn: "Look at the clouds — it ___ rain.", promptPt: "Look at the clouds — it ___ rain.", targetLabel: "is going to", objects: [
        { id: "a", label: "will" }, { id: "b", label: "is going to", isTarget: true }, { id: "c", label: "rains" },
      ]},
      { promptEn: "If it rains, we ___ stay home.", promptPt: "If it rains, we ___ stay home.", targetLabel: "will", objects: [
        { id: "a", label: "would" }, { id: "b", label: "will", isTarget: true }, { id: "c", label: "are" },
      ]},
      { promptEn: "Next year I ___ study biology (plan).", promptPt: "Next year I ___ study biology (plan).", targetLabel: "am going to", objects: [
        { id: "a", label: "am going to", isTarget: true }, { id: "b", label: "will" }, { id: "c", label: "study" },
      ]},
      { promptEn: "'Renewable' =", promptPt: "'Renewable' =", targetLabel: "Renovável", objects: [
        { id: "a", label: "Renovável", isTarget: true }, { id: "b", label: "Reciclável" }, { id: "c", label: "Reunível" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Palavra → tradução:",
    pairs: [
      { id: "a", en: "AI 🤖", pt: "Inteligência artificial", img: IMG.KENJI },
      { id: "b", en: "Robotics 🦾", pt: "Robótica", img: IMG.LUCAS },
      { id: "c", en: "Renewable ☀️", pt: "Renovável", img: IMG.PARK },
      { id: "d", en: "Space 🚀", pt: "Espaço", img: IMG.CITY_COVER },
    ],
  },
  BOOK: {
    title: "My Future Tech Project",
    intro: "Seu projeto para a Feira do Futuro.",
    pages: [
      { en: "Page 1 — My invention is ___.", pt: "Pág. 1 — Minha invenção é ___.", img: IMG.KENJI, badge: "💡" },
      { en: "Page 2 — It's going to solve ___.", pt: "Pág. 2 — Vai resolver ___.", img: IMG.PARK, badge: "🌍" },
      { en: "Page 3 — If people use it, they will ___.", pt: "Pág. 3 — Se as pessoas usarem, vão ___.", img: IMG.SOPHIE, badge: "✨" },
      { en: "Page 4 — I will present it on ___.", pt: "Pág. 4 — Vou apresentar em ___.", img: IMG.CLASS, badge: "🎤" },
      { en: "The End — The future starts today!", pt: "Fim — O futuro começa hoje!", img: IMG.SCHOOL, badge: "🚀" },
    ],
  },
  CULTURE: {
    title: "STEM Around the World 🔬",
    emoji: "🧪",
    paragraphs: [
      { en: "STEM = Science, Technology, Engineering, Math — a global movement to inspire young inventors.", pt: "STEM = Ciência, Tecnologia, Engenharia, Matemática — movimento global que inspira jovens inventores." },
      { en: "Countries like Finland and Singapore lead the world in STEM education.", pt: "Países como Finlândia e Singapura lideram o mundo em educação STEM." },
      { pt: "O Brasil também cresce em STEM — o próximo inventor pode ser você." },
    ],
  },
};

export default lesson;
