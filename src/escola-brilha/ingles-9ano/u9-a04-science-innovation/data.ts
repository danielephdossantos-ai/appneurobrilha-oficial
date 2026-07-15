// Inglês 9º Ano — Unit 4 "Science and Innovation 🚀"
// Relative Pronouns (who/which/that) · Revisão integrada dos tempos verbais
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u9-a04-science-innovation",
  meta: {
    unitLabel: "Unit 4 · Lesson 4 — Science and Innovation 🚀",
    headerKicker: "SPEB 1.0 · English Academy — 9th Grade",
    coverKicker: "Biotech · Energy · Space · Robotics",
    coverTitle: "Science and Innovation 🚀",
    coverSubtitle:
      "Descubra a ciência que muda o mundo e apresente suas descobertas em inglês.",
    storyTitle: "The Science Fair",
    vocabularyTitle: "Science & Innovation",
    speakingTargets: [
      "This is the scientist who discovered penicillin.",
      "That is the lab which develops vaccines.",
      "Robotics is a field that changes fast.",
      "Renewable energy protects the environment.",
      "Space exploration teaches us about the Earth.",
      "Genetics is the science of DNA.",
    ],
    listeningIntro: "Ouça Kenji abrir a Science Fair da Academy.",
    listeningQuestion:
      "Kenji disse: 'This is the robot that cleans our beaches.' O que é o robô?",
    listeningOptions: [
      "Um robô que limpa praias",
      "Um robô que constrói praias",
      "Uma praia com robôs",
    ],
    listeningCorrect: "Um robô que limpa praias",
    listeningWrongHint: "'that cleans our beaches' identifica o robô — pronome relativo THAT.",
    readingNarration:
      "A ciência transforma o mundo todos os dias. Biotecnologia salva vidas, energia renovável protege o clima, exploração espacial abre novas fronteiras. Estudar ciência é entender o presente e construir o futuro.",
    grammarNarration:
      "Relative Pronouns conectam duas ideias: WHO para pessoas ('the scientist who invented'), WHICH para coisas/animais ('the machine which works'), THAT para coisas e pessoas em frases mais informais.",
    finalProjectIntro: "Escreva sua apresentação de Science Fair. Digite seu nome:",
    finalProjectPhrase: (name: string) =>
      `SCIENCE FAIR PRESENTATION — Good morning! My name is ${name} and I will present a project that combines science and innovation. My project is about renewable energy, which is the future of our planet. I built a small solar panel that produces electricity for a lamp. The scientists who inspired me are Marie Curie and Nikola Tesla — people who never stopped asking questions. Science is not only for laboratories: it is for every home, every school and every mind. Thank you for watching my presentation, and I hope you feel as excited about science as I do.`,
    finalProjectSectionTitle: "My Science Fair Presentation",
  },
  VOCAB: [
    { id: "biotech", en: "Biotechnology 🧬", pt: "Biotecnologia", img: IMG.HOSPITAL },
    { id: "renewable", en: "Renewable energy ☀️", pt: "Energia renovável", img: IMG.PARK },
    { id: "genetics", en: "Genetics 🧬", pt: "Genética", img: IMG.KENJI },
    { id: "medicine", en: "Medicine 💊", pt: "Medicina", img: IMG.HOSPITAL },
    { id: "space", en: "Space exploration 🚀", pt: "Exploração espacial", img: IMG.CITY_COVER },
    { id: "robotics", en: "Robotics 🤖", pt: "Robótica", img: IMG.LUCAS },
    { id: "research", en: "Scientific research 🔬", pt: "Pesquisa científica", img: IMG.CLASS },
    { id: "environment", en: "Environment 🌳", pt: "Meio ambiente", img: IMG.PARK },
    { id: "innovation", en: "Innovation 💡", pt: "Inovação", img: IMG.SOPHIE },
    { id: "vaccine", en: "Vaccine 💉", pt: "Vacina", img: IMG.MAYA },
  ],
  STORY: [
    { img: IMG.SCHOOL, en: "The Academy Science Fair begins today.", pt: "A Feira de Ciências da Academy começa hoje." },
    { img: IMG.KENJI, en: "Kenji: 'This is the robot that cleans our beaches.'", pt: "Kenji: 'Este é o robô que limpa nossas praias.'" },
    { img: IMG.MAYA, en: "Maya: 'And here is the vaccine which saved millions.'", pt: "Maya: 'E aqui está a vacina que salvou milhões.'" },
    { img: IMG.SOPHIE, en: "Sophie: 'She is the scientist who won the Nobel Prize.'", pt: "Sophie: 'Ela é a cientista que ganhou o Nobel.'" },
    { img: IMG.LUCAS, en: "Lucas: 'This solar panel produces the energy that lights our lab.'", pt: "Lucas: 'Este painel solar produz a energia que ilumina nosso lab.'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'Science is the art of asking great questions.'", pt: "Ms. Anna: 'Ciência é a arte de fazer boas perguntas.'" },
    { img: IMG.HOSPITAL, en: "Together, they visit the biotech corner.", pt: "Juntos, visitam o corner de biotecnologia." },
  ],
  DIALOG: [
    { who: "Ms. Anna", img: IMG.ANNA, en: "What is the project that you liked most, Kenji?", pt: "Qual foi o projeto que você mais gostou, Kenji?" },
    { who: "Kenji", img: IMG.KENJI, en: "The robot which recycles plastic bottles. Amazing!", pt: "O robô que recicla garrafas plásticas. Incrível!" },
    { who: "Ms. Anna", img: IMG.ANNA, en: "And who is the person who designed it?", pt: "E quem é a pessoa que o projetou?" },
    { who: "Kenji", img: IMG.KENJI, en: "A high-school student who lives in São Paulo.", pt: "Um estudante do Ensino Médio que mora em São Paulo." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Innovation that starts young — that's our future.", pt: "Inovação que começa cedo — esse é o nosso futuro." },
    { who: "Kenji", img: IMG.KENJI, en: "I want to be a scientist that solves real problems.", pt: "Quero ser um cientista que resolve problemas reais." },
  ],
  READING: {
    title: "Science That Changes the World",
    img: IMG.HOSPITAL,
    parts: [
      { en: "Biotechnology creates vaccines that save millions of lives.", pt: "Biotecnologia cria vacinas que salvam milhões de vidas.", highlight: ["Biotechnology", "vaccines"] },
      { en: "Renewable energy uses sun, wind and water to protect the planet.", pt: "Energia renovável usa sol, vento e água para proteger o planeta.", highlight: ["Renewable energy"] },
      { en: "Robotics is the field that will transform our factories and hospitals.", pt: "Robótica é a área que vai transformar fábricas e hospitais.", highlight: ["Robotics"] },
      { en: "Space exploration teaches us who we are and where we are going.", pt: "Exploração espacial nos ensina quem somos e para onde vamos.", highlight: ["Space exploration"] },
      { en: "The scientists who dare to ask questions build tomorrow.", pt: "Os cientistas que ousam perguntar constroem o amanhã.", highlight: ["scientists", "who"] },
    ],
  },
  WRITING: [
    { prompt: "This is the scientist ______ discovered penicillin.", answer: "who", hint: "Pessoas → WHO.", options: ["who", "which", "what"], explain: "WHO se refere a pessoas em frases relativas." },
    { prompt: "That is the machine ______ produces solar energy.", answer: "which", hint: "Coisas → WHICH.", options: ["which", "who", "what"], explain: "WHICH se refere a coisas/animais." },
    { prompt: "Robotics is a field ______ changes fast.", answer: "that", hint: "THAT serve para coisas e pessoas.", options: ["that", "who", "what"] },
    { prompt: "'Vaccine' significa:", answer: "Vacina", hint: "Injeção que protege doenças.", options: ["Vacina", "Vasilhame", "Vazio"] },
    { prompt: "The lab ______ develops medicines is huge.", answer: "which", hint: "Lab = coisa → WHICH.", options: ["which", "who", "when"] },
    { prompt: "'Research' significa:", answer: "Pesquisa", hint: "Busca científica de respostas.", options: ["Pesquisa", "Reserva", "Recheio"] },
    { prompt: "The astronaut ______ walked on the Moon is famous.", answer: "who", hint: "Astronauta = pessoa.", options: ["who", "which", "what"] },
  ],
  QUIZ: [
    { q: "Complete: The doctor ___ helped me is very kind.", options: [{ text: "who", correct: true, explain: "Pessoas → WHO." }, { text: "which" }, { text: "what" }] },
    { q: "Complete: The car ___ my dad bought is red.", options: [{ text: "who" }, { text: "which", correct: true, explain: "Coisa → WHICH." }, { text: "what" }] },
    { q: "Complete: I like the song ___ is playing.", options: [{ text: "that", correct: true }, { text: "who" }, { text: "when" }] },
    { q: "'Biotechnology' significa:", options: [{ text: "Biotecnologia", correct: true }, { text: "Biografia" }, { text: "Biologia" }] },
    { q: "'Renewable energy' significa:", options: [{ text: "Energia renovável", correct: true }, { text: "Energia rara" }, { text: "Energia removível" }] },
    { q: "'Space exploration' significa:", options: [{ text: "Exploração espacial", correct: true }, { text: "Explosão espacial" }, { text: "Espaço explorado" }] },
    { q: "'Environment' significa:", options: [{ text: "Meio ambiente", correct: true }, { text: "Envelope" }, { text: "Entrega" }] },
    { q: "A base da ciência é:", options: [{ text: "Adivinhar" }, { text: "Fazer perguntas e testar respostas", correct: true }, { text: "Copiar" }] },
  ],
  REAL_LIFE: [
    { situation: "🔬 Sobre uma descoberta.", answer: "This is the vaccine which saved millions of lives." },
    { situation: "🤖 Sobre um invento.", answer: "That is the robot that helps in surgeries." },
    { situation: "☀️ Sobre sustentabilidade.", answer: "We should use renewable energy that doesn't harm the planet." },
    { situation: "🚀 Sobre o espaço.", answer: "The astronaut who traveled to Mars is my hero." },
    { situation: "🧬 Sobre pesquisa.", answer: "Scientific research is the field that changes our future." },
  ],
  GRAMMAR: {
    focus: "Relative Pronouns + Revisão dos Tempos",
    why:
      "Relative pronouns conectam duas frases em uma. WHO = pessoas. WHICH = coisas/animais. THAT = ambos (informal). Revisão dos tempos: Simple Past (I studied), Present Perfect (I have studied), Simple Present (I study), Future WILL/GOING TO (I will/am going to study).",
    examples: [
      { en: "The girl WHO won the prize is my sister.", pt: "A menina que ganhou o prêmio é minha irmã." },
      { en: "The book WHICH is on the table is mine.", pt: "O livro que está na mesa é meu." },
      { en: "The song THAT I love is old.", pt: "A música que eu amo é antiga." },
      { en: "Marie Curie WAS a scientist WHO discovered radium.", pt: "Marie Curie foi uma cientista que descobriu o rádio." },
    ],
    errors: [
      { wrong: "The girl which sings is my friend.", right: "The girl WHO/THAT sings is my friend.", why: "Pessoa → WHO ou THAT, não WHICH." },
      { wrong: "The book who I bought.", right: "The book WHICH/THAT I bought.", why: "Coisa → WHICH ou THAT." },
      { wrong: "Marie Curie was a scientist she discovered radium.", right: "Marie Curie was a scientist WHO discovered radium.", why: "Use o pronome relativo para conectar." },
      { wrong: "The lab what produces vaccines.", right: "The lab WHICH/THAT produces vaccines.", why: "'What' não é pronome relativo aqui." },
    ],
  },
  SONG: {
    title: "Science Anthem",
    hookPt: "Cante o hino da ciência.",
    verses: [
      { en: "The stars that shine, the seas that flow,", pt: "As estrelas que brilham, os mares que fluem,", emoji: "🌌" },
      { en: "Science is the seed that helps us grow.", pt: "Ciência é a semente que nos faz crescer.", emoji: "🌱" },
      { en: "The minds that ask, the hearts that dare,", pt: "As mentes que perguntam, os corações que ousam,", emoji: "🔬" },
      { en: "Build a future beyond compare.", pt: "Constroem um futuro sem igual.", emoji: "🚀" },
    ],
  },
  HUNTER: {
    intro: "WHO, WHICH ou THAT? Escolha certo!",
    rounds: [
      { promptEn: "The scientist ___ won the Nobel Prize.", promptPt: "The scientist ___ won the Nobel Prize.", targetLabel: "who", objects: [
        { id: "a", label: "who", img: "", isTarget: true },
        { id: "b", label: "which", img: "" },
        { id: "c", label: "what", img: "" },
      ]},
      { promptEn: "The car ___ my dad drives.", promptPt: "The car ___ my dad drives.", targetLabel: "which", objects: [
        { id: "a", label: "who", img: "" },
        { id: "b", label: "which", img: "", isTarget: true },
        { id: "c", label: "when", img: "" },
      ]},
      { promptEn: "The book ___ I love is a novel.", promptPt: "The book ___ I love is a novel.", targetLabel: "that", objects: [
        { id: "a", label: "who", img: "" },
        { id: "b", label: "that", img: "", isTarget: true },
        { id: "c", label: "where", img: "" },
      ]},
      { promptEn: "'Vaccine' =", promptPt: "'Vaccine' =", targetLabel: "Vacina", objects: [
        { id: "a", label: "Vacina", img: "", isTarget: true },
        { id: "b", label: "Vaso", img: "" },
        { id: "c", label: "Vaidade", img: "" },
      ]},
      { promptEn: "'Renewable' =", promptPt: "'Renewable' =", targetLabel: "Renovável", objects: [
        { id: "a", label: "Renovável", img: "", isTarget: true },
        { id: "b", label: "Removível", img: "" },
        { id: "c", label: "Reduzido", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares palavra → tradução:",
    pairs: [
      { id: "a", en: "Biotechnology 🧬", pt: "Biotecnologia", img: IMG.HOSPITAL },
      { id: "b", en: "Renewable ☀️", pt: "Renovável", img: IMG.PARK },
      { id: "c", en: "Robotics 🤖", pt: "Robótica", img: IMG.LUCAS },
      { id: "d", en: "Space 🚀", pt: "Espaço", img: IMG.CITY_COVER },
    ],
  },
  BOOK: {
    title: "My Science Fair Presentation",
    intro: "Sua apresentação de feira de ciências.",
    pages: [
      { en: "Page 1 — My project is about ___.", pt: "Pág. 1 — Meu projeto é sobre ___.", img: IMG.CLASS, badge: "🔬" },
      { en: "Page 2 — The scientist who inspires me is ___.", pt: "Pág. 2 — O cientista que me inspira é ___.", img: IMG.KENJI, badge: "🧬" },
      { en: "Page 3 — The device which I built ___.", pt: "Pág. 3 — O aparelho que eu construí ___.", img: IMG.LUCAS, badge: "🤖" },
      { en: "Page 4 — Science helps us ___.", pt: "Pág. 4 — Ciência nos ajuda a ___.", img: IMG.HOSPITAL, badge: "💡" },
      { en: "The End — Keep asking questions!", pt: "Fim — Continue perguntando!", img: IMG.CITY_COVER, badge: "🌟" },
    ],
  },
  CULTURE: {
    title: "Great Scientists 🔭",
    emoji: "🚀",
    paragraphs: [
      { en: "Marie Curie was the first person who won two Nobel Prizes — in Physics and Chemistry.", pt: "Marie Curie foi a primeira pessoa a ganhar dois Prêmios Nobel — em Física e Química." },
      { en: "Katherine Johnson was the mathematician whose calculations sent astronauts to the Moon.", pt: "Katherine Johnson foi a matemática cujos cálculos levaram astronautas à Lua." },
      { pt: "A ciência é feita por pessoas curiosas — e você também pode ser uma delas." },
    ],
  },
};

export default lesson;
