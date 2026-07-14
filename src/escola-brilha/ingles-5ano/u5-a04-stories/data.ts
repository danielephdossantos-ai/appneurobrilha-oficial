// Inglês 5º Ano — Unit 4 "Science and Discoveries 🔬"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u5-a04-stories",
  meta: {
    unitLabel: "Unit 4 · Lesson 4 — Science and Discoveries 🔬",
    headerKicker: "My English Portfolio — Level 2 · 5th Grade",
    coverKicker: "Ciência, invenções & tecnologia",
    coverTitle: "Science and Discoveries 🔬",
    coverSubtitle:
      "Descrever ciência e invenções — The Earth orbits the Sun. First, we mix the water. Then, we add salt.",
    storyTitle: "Lily's Big Experiment",
    vocabularyTitle: "Science & Technology",
    speakingTargets: [
      "The Earth orbits the Sun.",
      "A robot uses energy.",
      "The scientist studies the planet.",
      "First, we mix. Then, we heat.",
      "The computer connects to the internet.",
      "Electricity powers the city.",
    ],
    listeningIntro: "Ouça a Lily explicar o experimento.",
    listeningQuestion: 'Lily disse: "First, I pour water. Then, I add salt." Qual passo vem PRIMEIRO?',
    listeningOptions: ["adicionar sal", "colocar água", "aquecer"],
    listeningCorrect: "colocar água",
    listeningWrongHint: '"First" = primeiro.',
    readingNarration:
      "Simple Present descreve fatos científicos — verdades gerais. Palavras de sequência (First, Then, Next, Finally) organizam os passos de um experimento.",
    grammarNarration:
      "Simple Present para fatos: The Earth ORBITS the Sun (fato eterno). Sequência: FIRST (primeiro), THEN (depois), NEXT (em seguida), FINALLY (por fim). Verbos de ação: mix, heat, pour, add, connect, test.",
    finalProjectIntro: "Vamos criar sua feira de ciências! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `YOUNG SCIENTIST FAIR — by ${name}. My experiment: How does a plant grow? First, I put soil in a pot. Then, I plant a seed. Next, I water it every day. The plant needs water and sunlight. Finally, after two weeks, the plant grows! Science is amazing!`,
    finalProjectSectionTitle: "My Young Scientist Fair",
  },
  VOCAB: [
    { id: "planet", en: "Planet 🪐", pt: "Planeta", img: IMG.RAINBOW },
    { id: "solar", en: "Solar System ☀️", pt: "Sistema Solar", img: IMG.RAINBOW },
    { id: "robot", en: "Robot 🤖", pt: "Robô", img: IMG.BUDDY },
    { id: "invention", en: "Invention 💡", pt: "Invenção", img: IMG.BUDDY },
    { id: "computer", en: "Computer 💻", pt: "Computador", img: IMG.BUDDY },
    { id: "internet", en: "Internet 🌐", pt: "Internet", img: IMG.BUDDY },
    { id: "scientist", en: "Scientist 🔬", pt: "Cientista", img: IMG.EMILY },
    { id: "energy", en: "Energy ⚡", pt: "Energia", img: IMG.RAINBOW },
  ],
  STORY: [
    { img: IMG.LILY, en: "Hi! I'm Lily, the young scientist!", pt: "Oi! Sou a Lily, a jovem cientista!" },
    { img: IMG.EMILY, en: "Today we do a big experiment.", pt: "Hoje faremos um experimento grande." },
    { img: IMG.CLASSROOM, en: "First, we pour water into a glass.", pt: "Primeiro, colocamos água num copo." },
    { img: IMG.CLASSROOM, en: "Then, we add salt and mix it.", pt: "Depois, adicionamos sal e mexemos." },
    { img: IMG.CLASSROOM, en: "Next, we test what happens.", pt: "Em seguida, testamos o que acontece." },
    { img: IMG.BUDDY, en: "The robot helps us measure the results.", pt: "O robô nos ajuda a medir os resultados." },
    { img: IMG.RAINBOW, en: "Finally, we discover something amazing!", pt: "Por fim, descobrimos algo incrível!" },
    { img: IMG.LILY, en: "What do YOU want to discover?", pt: "O que VOCÊ quer descobrir?" },
  ],
  DIALOG: [
    { who: "Lily", img: IMG.LILY, en: "Ben, look at my experiment!", pt: "Ben, olha meu experimento!" },
    { who: "Ben", img: IMG.BEN, en: "Wow! What are you doing?", pt: "Uau! O que está fazendo?" },
    { who: "Lily", img: IMG.LILY, en: "First, I mix water and salt.", pt: "Primeiro, misturo água e sal." },
    { who: "Ben", img: IMG.BEN, en: "And then?", pt: "E depois?" },
    { who: "Lily", img: IMG.LILY, en: "Then, I heat it with the lamp.", pt: "Depois, aqueço com a luz." },
    { who: "Ben", img: IMG.BEN, en: "Cool! Is this like a real scientist?", pt: "Legal! É como uma cientista de verdade?" },
    { who: "Lily", img: IMG.LILY, en: "Yes! Every discovery starts with an experiment.", pt: "Sim! Toda descoberta começa com um experimento." },
  ],
  READING: {
    title: "The Solar System",
    img: IMG.RAINBOW,
    parts: [
      { en: "The Sun is a big star.", pt: "O Sol é uma estrela grande.", highlight: ["is"] },
      { en: "Eight planets orbit the Sun.", pt: "Oito planetas orbitam o Sol.", highlight: ["orbit"] },
      { en: "Earth is our planet.", pt: "A Terra é nosso planeta.", highlight: ["Earth"] },
      { en: "A robot explores Mars.", pt: "Um robô explora Marte.", highlight: ["robot"] },
      { en: "Scientists study space every day.", pt: "Cientistas estudam o espaço todo dia.", highlight: ["study"] },
    ],
  },
  WRITING: [
    { prompt: "The Earth ______ the Sun. (orbitar)", answer: "orbits", hint: "3ª pessoa: verbo + s.", options: ["orbits", "orbit", "orbiting"] },
    { prompt: "______, we mix the water. (primeiro)", answer: "First", hint: "Sequência inicial.", options: ["First", "Finally", "Then"] },
    { prompt: "The scientist ______ new things.", answer: "discovers", hint: "3ª pessoa singular.", options: ["discovers", "discover", "discovering"] },
    { prompt: "The robot ______ energy to work.", answer: "needs", hint: "3ª pessoa.", options: ["needs", "need", "needing"] },
    { prompt: "______, we see the result. (por fim)", answer: "Finally", hint: "Última etapa.", options: ["Finally", "First", "Next"] },
  ],
  QUIZ: [
    { q: "'Planet' significa:", options: [{ text: "Estrela" }, { text: "Planeta", correct: true }, { text: "Lua" }] },
    { q: "Complete: The Earth ___ the Sun.", options: [{ text: "orbit" }, { text: "orbits", correct: true }, { text: "orbiting" }] },
    { q: "'Scientist' é:", options: [{ text: "Cientista", correct: true }, { text: "Médico" }, { text: "Cozinheiro" }] },
    { q: "'First' significa:", options: [{ text: "Por fim" }, { text: "Primeiro", correct: true }, { text: "Nunca" }] },
    { q: "'Invention' é:", options: [{ text: "Invenção", correct: true }, { text: "Ciência" }, { text: "Energia" }] },
    { q: "'Finally' significa:", options: [{ text: "Primeiro" }, { text: "Por fim", correct: true }, { text: "Depois" }] },
    { q: "'Energy' é:", options: [{ text: "Energia", correct: true }, { text: "Comida" }, { text: "Água" }] },
  ],
  REAL_LIFE: [
    { situation: "🌍 Falando sobre o planeta.", answer: "The Earth orbits the Sun." },
    { situation: "🤖 Descrevendo um robô.", answer: "The robot uses energy to work." },
    { situation: "🔬 Explicando um experimento passo 1.", answer: "First, I mix water and salt." },
    { situation: "⚡ Falando sobre energia.", answer: "Electricity powers the city." },
    { situation: "💡 Falando de uma invenção.", answer: "The computer is a great invention." },
  ],
  GRAMMAR: {
    focus: "Simple Present · Sequência · Verbos de ação",
    why:
      "Simple Present descreve fatos científicos (sempre verdadeiros). Palavras de sequência organizam experimentos: FIRST → THEN → NEXT → FINALLY. Verbos de ação científicos: mix (misturar), heat (aquecer), test (testar), discover (descobrir).",
    examples: [
      { en: "The Earth orbits the Sun.", pt: "A Terra orbita o Sol." },
      { en: "Water boils at 100°C.", pt: "A água ferve a 100°C." },
      { en: "First, mix the ingredients.", pt: "Primeiro, misture os ingredientes." },
      { en: "Then, heat the mixture.", pt: "Depois, aqueça a mistura." },
      { en: "Finally, observe the result.", pt: "Por fim, observe o resultado." },
    ],
    errors: [
      { wrong: "The Sun orbit the Earth.", right: "The Earth ORBITS the Sun.", why: "A Terra orbita o Sol, não o contrário; e 3ª pessoa leva -s." },
      { wrong: "First then mix, first heat.", right: "FIRST mix. THEN heat.", why: "Uma palavra de sequência por vez." },
      { wrong: "Water boil at 100°C.", right: "Water BOILS at 100°C.", why: "Fato → verbo + s." },
    ],
  },
  SONG: {
    title: "Little Scientist",
    hookPt: "Cante a ciência!",
    verses: [
      { en: "First, I mix, then I stir,", pt: "Primeiro misturo, depois mexo,", emoji: "🥄" },
      { en: "Science is happening, that's for sure!", pt: "A ciência acontece, com certeza!", emoji: "🔬" },
      { en: "Next, I heat and I discover,", pt: "Em seguida aqueço e descubro,", emoji: "🔥" },
      { en: "Finally, I have my answer!", pt: "Por fim, tenho a resposta!", emoji: "💡" },
      { en: "Planet Earth is turning round,", pt: "O planeta Terra está girando,", emoji: "🌍" },
      { en: "Amazing things can be found!", pt: "Coisas incríveis podem ser achadas!", emoji: "⭐" },
    ],
  },
  HUNTER: {
    intro: "Escolha a palavra certa!",
    rounds: [
      { promptEn: "Complete: The Earth ___ the Sun.", promptPt: "Complete: The Earth ___ the Sun.", targetLabel: "orbits", objects: [
        { id: "a", label: "orbit", img: "" },
        { id: "b", label: "orbits", img: "", isTarget: true },
        { id: "c", label: "orbiting", img: "" },
      ]},
      { promptEn: "Sequência inicial:", promptPt: "Sequência inicial:", targetLabel: "First", objects: [
        { id: "a", label: "Finally", img: "" },
        { id: "b", label: "First", img: "", isTarget: true },
        { id: "c", label: "Then", img: "" },
      ]},
      { promptEn: "'Scientist' é:", promptPt: "'Scientist' é:", targetLabel: "Cientista", objects: [
        { id: "a", label: "Médico", img: "" },
        { id: "b", label: "Cientista", img: "", isTarget: true },
        { id: "c", label: "Astronauta", img: "" },
      ]},
      { promptEn: "'Robot' é:", promptPt: "'Robot' é:", targetLabel: "Robô", objects: [
        { id: "a", label: "Robô", img: "", isTarget: true },
        { id: "b", label: "Carro", img: "" },
        { id: "c", label: "Casa", img: "" },
      ]},
      { promptEn: "Última etapa:", promptPt: "Última etapa:", targetLabel: "Finally", objects: [
        { id: "a", label: "First", img: "" },
        { id: "b", label: "Finally", img: "", isTarget: true },
        { id: "c", label: "Next", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares da ciência!",
    pairs: [
      { id: "a", en: "Planet 🪐", pt: "Planeta", img: IMG.RAINBOW },
      { id: "b", en: "Robot 🤖", pt: "Robô", img: IMG.BUDDY },
      { id: "c", en: "Scientist 🔬", pt: "Cientista", img: IMG.EMILY },
      { id: "d", en: "Computer 💻", pt: "Computador", img: IMG.BUDDY },
    ],
  },
  BOOK: {
    title: "My Young Scientist Fair",
    intro: "Sua feira de ciências!",
    pages: [
      { en: "Page 1 — I am a young scientist!", pt: "Pág. 1 — Sou um jovem cientista!", img: IMG.EMILY, badge: "🔬" },
      { en: "Page 2 — First, I collect materials.", pt: "Pág. 2 — Primeiro, junto materiais.", img: IMG.CLASSROOM, badge: "1️⃣" },
      { en: "Page 3 — Then, I mix and heat.", pt: "Pág. 3 — Depois, misturo e aqueço.", img: IMG.CLASSROOM, badge: "2️⃣" },
      { en: "Page 4 — Next, I test the result.", pt: "Pág. 4 — Em seguida, testo o resultado.", img: IMG.BUDDY, badge: "3️⃣" },
      { en: "Page 5 — Finally, I share my discovery.", pt: "Pág. 5 — Por fim, compartilho.", img: IMG.RAINBOW, badge: "💡" },
      { en: "The End — Science changes the world!", pt: "Fim — A ciência muda o mundo!", img: IMG.RAINBOW, badge: "⭐" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "Este é o laboratório. Toque nos objetos!",
    img: IMG.CLASSROOM,
    items: [
      { en: "Microscope", pt: "Microscópio", emoji: "🔬" },
      { en: "Test tube", pt: "Tubo de ensaio", emoji: "🧪" },
      { en: "Robot", pt: "Robô", emoji: "🤖" },
      { en: "Computer", pt: "Computador", emoji: "💻" },
      { en: "Bulb", pt: "Lâmpada", emoji: "💡" },
      { en: "Book", pt: "Livro", emoji: "📖" },
    ],
  },
  CULTURE: {
    title: "Great Inventions of the World 💡",
    emoji: "🔬",
    paragraphs: [
      { en: "Thomas Edison invented the light bulb in 1879.", pt: "Thomas Edison inventou a lâmpada em 1879." },
      { en: "The internet was created in the 1980s and changed the world.", pt: "A internet foi criada nos anos 1980 e mudou o mundo." },
      { pt: "Cada invenção começou com uma pergunta simples: 'e se…?'" },
    ],
  },
};

export default lesson;
