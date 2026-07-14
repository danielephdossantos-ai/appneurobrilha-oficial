// Inglês 5º Ano — Unit 5 "Stories Around the World 📚"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u5-a05-planet",
  meta: {
    unitLabel: "Unit 5 · Lesson 5 — Stories Around the World 📚",
    headerKicker: "My English Portfolio — Level 2 · 5th Grade",
    coverKicker: "Ler, interpretar & escrever histórias",
    coverTitle: "Stories Around the World 📚",
    coverSubtitle:
      "Contar histórias — First, Lily went to the forest. Then, she found a magic key. Finally, she opened the door.",
    storyTitle: "The Magic Key",
    vocabularyTitle: "Storytelling",
    speakingTargets: [
      "First, the hero went to the forest.",
      "Then, she found a treasure.",
      "Next, a dragon appeared!",
      "Finally, they became friends.",
      "The characters were brave.",
      "The setting was a dark cave.",
    ],
    listeningIntro: "Ouça o começo da história.",
    listeningQuestion: 'Lily disse: "Yesterday, I went to the forest." Ela foi para o…',
    listeningOptions: ["a praia", "a floresta", "o museu"],
    listeningCorrect: "a floresta",
    listeningWrongHint: '"Forest" = floresta.',
    readingNarration:
      "Simple Past conta fatos passados — algo que já aconteceu. Linking words (First, Then, Next, Finally) organizam o começo, meio e fim da história.",
    grammarNarration:
      "Simple Past: verbo regular + ED (walk → walked). Verbos irregulares: GO → WENT, HAVE → HAD, SEE → SAW, FIND → FOUND. Linking words: FIRST (começo), THEN/NEXT (meio), FINALLY (fim).",
    finalProjectIntro: "Vamos escrever sua história! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `WRITE YOUR OWN STORY — by ${name}. Title: The Magic Adventure. Characters: a brave girl and her dog. Setting: an old forest. First, the girl walked into the forest with her dog. Then, she found a shiny key on the ground. Next, they saw a small door under a tree. Finally, they opened the door and discovered a magic land!`,
    finalProjectSectionTitle: "Write Your Own Story",
  },
  VOCAB: [
    { id: "adventure", en: "Adventure 🗺️", pt: "Aventura", img: IMG.PARK },
    { id: "mystery", en: "Mystery 🕵️", pt: "Mistério", img: IMG.LIBRARY },
    { id: "fantasy", en: "Fantasy 🐉", pt: "Fantasia", img: IMG.RAINBOW },
    { id: "character", en: "Character 🧙", pt: "Personagem", img: IMG.LILY },
    { id: "setting", en: "Setting 🌲", pt: "Cenário", img: IMG.PARK },
    { id: "beginning", en: "Beginning 1️⃣", pt: "Começo", img: IMG.LIBRARY },
    { id: "middle", en: "Middle 2️⃣", pt: "Meio", img: IMG.LIBRARY },
    { id: "ending", en: "Ending 3️⃣", pt: "Final", img: IMG.LIBRARY },
  ],
  STORY: [
    { img: IMG.LILY, en: "Once upon a time, there was a girl called Lily.", pt: "Era uma vez uma menina chamada Lily." },
    { img: IMG.PARK, en: "First, Lily walked into a big forest.", pt: "Primeiro, Lily entrou numa floresta grande." },
    { img: IMG.PARK, en: "Then, she found a golden key on a rock.", pt: "Depois, achou uma chave dourada numa pedra." },
    { img: IMG.LIBRARY, en: "Next, she saw a small wooden door.", pt: "Em seguida, viu uma portinha de madeira." },
    { img: IMG.LIBRARY, en: "The door was old and mysterious.", pt: "A porta era velha e misteriosa." },
    { img: IMG.RAINBOW, en: "Lily used the key and opened the door.", pt: "Lily usou a chave e abriu a porta." },
    { img: IMG.RAINBOW, en: "Finally, she found a magic garden!", pt: "Por fim, achou um jardim mágico!" },
    { img: IMG.LILY, en: "And they lived happily ever after.", pt: "E foram felizes para sempre." },
  ],
  DIALOG: [
    { who: "Ben", img: IMG.BEN, en: "Lily, tell me a story!", pt: "Lily, me conta uma história!" },
    { who: "Lily", img: IMG.LILY, en: "OK! Once upon a time, there was a hero.", pt: "Tá! Era uma vez um herói." },
    { who: "Ben", img: IMG.BEN, en: "What happened first?", pt: "O que aconteceu primeiro?" },
    { who: "Lily", img: IMG.LILY, en: "First, the hero went to a dark cave.", pt: "Primeiro, o herói foi para uma caverna escura." },
    { who: "Ben", img: IMG.BEN, en: "And then?", pt: "E depois?" },
    { who: "Lily", img: IMG.LILY, en: "Then, he found a magic sword.", pt: "Depois, achou uma espada mágica." },
    { who: "Ben", img: IMG.BEN, en: "Wow! How did it end?", pt: "Uau! Como terminou?" },
    { who: "Lily", img: IMG.LILY, en: "Finally, he saved the kingdom!", pt: "Por fim, salvou o reino!" },
  ],
  READING: {
    title: "The Little Explorer",
    img: IMG.PARK,
    parts: [
      { en: "Once, a boy lived near a forest.", pt: "Um dia, um menino morava perto da floresta.", highlight: ["lived"] },
      { en: "First, he walked with his dog.", pt: "Primeiro, ele caminhou com o cachorro.", highlight: ["First", "walked"] },
      { en: "Then, they found a shiny stone.", pt: "Depois, acharam uma pedra brilhante.", highlight: ["Then", "found"] },
      { en: "Next, they saw a small cave.", pt: "Em seguida, viram uma caverna pequena.", highlight: ["Next", "saw"] },
      { en: "Finally, they returned home happy.", pt: "Por fim, voltaram pra casa felizes.", highlight: ["Finally", "returned"] },
    ],
  },
  WRITING: [
    { prompt: "Yesterday, I ______ to the park. (ir)", answer: "went", hint: "Passado de GO.", options: ["went", "go", "going"] },
    { prompt: "She ______ a key. (achar)", answer: "found", hint: "Passado de FIND.", options: ["found", "find", "finded"] },
    { prompt: "______, the hero walked. (primeiro)", answer: "First", hint: "Começo da história.", options: ["First", "Finally", "Then"] },
    { prompt: "The dog ______ happy. (era)", answer: "was", hint: "Passado de IS.", options: ["was", "were", "is"] },
    { prompt: "______, the story ends. (por fim)", answer: "Finally", hint: "Final.", options: ["Finally", "First", "Then"] },
  ],
  QUIZ: [
    { q: "'Adventure' significa:", options: [{ text: "Aventura", correct: true }, { text: "Mistério" }, { text: "Sonho" }] },
    { q: "Passado de GO:", options: [{ text: "goed" }, { text: "went", correct: true }, { text: "going" }] },
    { q: "'Character' é:", options: [{ text: "Cenário" }, { text: "Personagem", correct: true }, { text: "Final" }] },
    { q: "Passado de HAVE:", options: [{ text: "haved" }, { text: "had", correct: true }, { text: "has" }] },
    { q: "'Setting' significa:", options: [{ text: "Cenário", correct: true }, { text: "Herói" }, { text: "Final" }] },
    { q: "'Finally' é:", options: [{ text: "Primeiro" }, { text: "Por fim", correct: true }, { text: "Depois" }] },
    { q: "Passado de SEE:", options: [{ text: "seed" }, { text: "saw", correct: true }, { text: "sees" }] },
  ],
  REAL_LIFE: [
    { situation: "📖 Começando uma história.", answer: "First, the hero went to the forest." },
    { situation: "🗺️ Descrevendo o meio.", answer: "Then, she found a treasure." },
    { situation: "🐉 Adicionando um evento.", answer: "Next, a dragon appeared!" },
    { situation: "🎬 Terminando a história.", answer: "Finally, they became friends." },
    { situation: "🧙 Falando de um personagem.", answer: "The character was brave." },
  ],
  GRAMMAR: {
    focus: "Simple Past (intro) · Linking Words",
    why:
      "Simple Past conta o que ACONTECEU. Regulares: verbo + ED (walked, played). Irregulares mudam a forma: GO→WENT, HAVE→HAD, SEE→SAW, FIND→FOUND, BE→WAS/WERE. Linking words organizam: FIRST, THEN, NEXT, FINALLY.",
    examples: [
      { en: "Yesterday, I played in the park.", pt: "Ontem, brinquei no parque." },
      { en: "She went to school.", pt: "Ela foi para a escola." },
      { en: "He had a dog.", pt: "Ele tinha um cachorro." },
      { en: "First, she opened the door.", pt: "Primeiro, ela abriu a porta." },
      { en: "Finally, they were happy.", pt: "Por fim, eles estavam felizes." },
    ],
    errors: [
      { wrong: "Yesterday, I go to school.", right: "Yesterday, I WENT to school.", why: "Ontem é passado → WENT." },
      { wrong: "She finded a key.", right: "She FOUND a key.", why: "FIND é irregular." },
      { wrong: "Finally he go home.", right: "Finally he WENT home.", why: "Ação passada." },
    ],
  },
  SONG: {
    title: "Tell Me a Story",
    hookPt: "Cante uma história!",
    verses: [
      { en: "First, the hero took a stand,", pt: "Primeiro, o herói se posicionou,", emoji: "🦸" },
      { en: "Then, she traveled through the land.", pt: "Depois, viajou pela terra.", emoji: "🗺️" },
      { en: "Next, a dragon flew away,", pt: "Em seguida, um dragão voou,", emoji: "🐉" },
      { en: "Finally, she saved the day!", pt: "Por fim, salvou o dia!", emoji: "⭐" },
      { en: "Beginning, middle, and the end,", pt: "Começo, meio e fim,", emoji: "📖" },
      { en: "Every story is a friend!", pt: "Toda história é uma amiga!", emoji: "💖" },
    ],
  },
  HUNTER: {
    intro: "Escolha a palavra certa!",
    rounds: [
      { promptEn: "Passado de GO:", promptPt: "Passado de GO:", targetLabel: "went", objects: [
        { id: "a", label: "goed", img: "" },
        { id: "b", label: "went", img: "", isTarget: true },
        { id: "c", label: "going", img: "" },
      ]},
      { promptEn: "Passado de FIND:", promptPt: "Passado de FIND:", targetLabel: "found", objects: [
        { id: "a", label: "found", img: "", isTarget: true },
        { id: "b", label: "finded", img: "" },
        { id: "c", label: "finding", img: "" },
      ]},
      { promptEn: "Início da história:", promptPt: "Início da história:", targetLabel: "First", objects: [
        { id: "a", label: "Finally", img: "" },
        { id: "b", label: "First", img: "", isTarget: true },
        { id: "c", label: "Then", img: "" },
      ]},
      { promptEn: "'Character' é:", promptPt: "'Character' é:", targetLabel: "Personagem", objects: [
        { id: "a", label: "Cenário", img: "" },
        { id: "b", label: "Personagem", img: "", isTarget: true },
        { id: "c", label: "Aventura", img: "" },
      ]},
      { promptEn: "'Setting' é:", promptPt: "'Setting' é:", targetLabel: "Cenário", objects: [
        { id: "a", label: "Cenário", img: "", isTarget: true },
        { id: "b", label: "Personagem", img: "" },
        { id: "c", label: "Final", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares da história!",
    pairs: [
      { id: "a", en: "Adventure 🗺️", pt: "Aventura", img: IMG.PARK },
      { id: "b", en: "Mystery 🕵️", pt: "Mistério", img: IMG.LIBRARY },
      { id: "c", en: "Character 🧙", pt: "Personagem", img: IMG.LILY },
      { id: "d", en: "Fantasy 🐉", pt: "Fantasia", img: IMG.RAINBOW },
    ],
  },
  BOOK: {
    title: "Write Your Own Story",
    intro: "Escreva sua história!",
    pages: [
      { en: "Page 1 — Once upon a time…", pt: "Pág. 1 — Era uma vez…", img: IMG.LIBRARY, badge: "📖" },
      { en: "Page 2 — Meet the characters.", pt: "Pág. 2 — Conheça os personagens.", img: IMG.LILY, badge: "🧙" },
      { en: "Page 3 — First, the adventure began.", pt: "Pág. 3 — Primeiro, a aventura começou.", img: IMG.PARK, badge: "1️⃣" },
      { en: "Page 4 — Then, they faced a challenge.", pt: "Pág. 4 — Depois, enfrentaram um desafio.", img: IMG.RAINBOW, badge: "2️⃣" },
      { en: "Page 5 — Finally, they won!", pt: "Pág. 5 — Por fim, venceram!", img: IMG.RAINBOW, badge: "3️⃣" },
      { en: "The End — Happily ever after!", pt: "Fim — Felizes para sempre!", img: IMG.LILY, badge: "⭐" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "Esta é a biblioteca. Toque nos objetos!",
    img: IMG.LIBRARY,
    items: [
      { en: "Book", pt: "Livro", emoji: "📖" },
      { en: "Key", pt: "Chave", emoji: "🗝️" },
      { en: "Map", pt: "Mapa", emoji: "🗺️" },
      { en: "Dragon", pt: "Dragão", emoji: "🐉" },
      { en: "Castle", pt: "Castelo", emoji: "🏰" },
      { en: "Treasure", pt: "Tesouro", emoji: "💎" },
    ],
  },
  CULTURE: {
    title: "Famous Stories 📚",
    emoji: "🐉",
    paragraphs: [
      { en: "'Harry Potter' was written by J.K. Rowling in the UK.", pt: "'Harry Potter' foi escrito por J.K. Rowling no Reino Unido." },
      { en: "'The Little Prince' was written by a French author, Saint-Exupéry.", pt: "'O Pequeno Príncipe' foi escrito pelo francês Saint-Exupéry." },
      { pt: "Histórias conectam pessoas do mundo todo!" },
    ],
  },
};

export default lesson;
