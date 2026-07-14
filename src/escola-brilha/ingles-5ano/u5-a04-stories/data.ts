// Inglês 5º Ano — Unit 4 "Stories and Adventures 📖"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u5-a04-stories",
  meta: {
    unitLabel: "Unit 4 · Lesson 4 — Stories and Adventures 📖",
    headerKicker: "My English Portfolio — Level 2 · 5th Grade",
    coverKicker: "Histórias, personagens & imaginação",
    coverTitle: "Stories and Adventures 📖",
    coverSubtitle:
      "Contar histórias com começo, meio e fim: First… Then… Next… Finally. E introdução ao passado simples: was, were, went, had.",
    storyTitle: "The Brave Hero",
    vocabularyTitle: "Story Words",
    speakingTargets: [
      "The story is about a hero.",
      "The hero lives in a forest.",
      "The dragon is scary.",
      "First, he was brave.",
      "Then, he went to the castle.",
      "Finally, he saved the day!",
    ],
    listeningIntro: "Ouça o começo da história.",
    listeningQuestion: '"The hero went to the castle." O herói foi pra onde?',
    listeningOptions: ["Floresta", "Castelo", "Cidade"],
    listeningCorrect: "Castelo",
    listeningWrongHint: '"Castle" = castelo.',
    readingNarration:
      "Uma boa história tem sequência: FIRST (primeiro), THEN (então), NEXT (depois), FINALLY (finalmente).",
    grammarNarration:
      "SIMPLE PAST fala de ontem: was/were (era/estava), went (foi), had (teve/tinha). Use os conectores First, Then, Next, Finally pra organizar.",
    finalProjectIntro: "Crie sua própria história! Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY STORY — by ${name}. First, a brave hero lived in a small village. Then, a dragon came to the forest. Next, the hero went to the castle with a magic sword. Finally, the hero and the dragon became friends. The end!`,
    finalProjectSectionTitle: "Create Your Own Story",
  },
  VOCAB: [
    { id: "hero", en: "Hero 🦸", pt: "Herói", img: IMG.BEN },
    { id: "villain", en: "Villain 😈", pt: "Vilão", img: IMG.EMILY },
    { id: "dragon", en: "Dragon 🐉", pt: "Dragão", img: IMG.BUDDY },
    { id: "castle", en: "Castle 🏰", pt: "Castelo", img: IMG.MUSEUM },
    { id: "forest", en: "Forest 🌲", pt: "Floresta", img: IMG.PARK },
    { id: "fairytale", en: "Fairy tale ✨", pt: "Conto de fadas", img: IMG.RAINBOW },
    { id: "mystery", en: "Mystery 🔍", pt: "Mistério", img: IMG.LIBRARY },
    { id: "adventure", en: "Adventure 🗺️", pt: "Aventura", img: IMG.CITY_COVER },
  ],
  STORY: [
    { img: IMG.BEN, en: "First, there was a brave hero named Leo.", pt: "Primeiro, havia um herói corajoso chamado Leo." },
    { img: IMG.PARK, en: "He lived in a green forest with his family.", pt: "Ele morava numa floresta verde com a família." },
    { img: IMG.BUDDY, en: "Then, a scary dragon came to the forest.", pt: "Então, um dragão assustador chegou à floresta." },
    { img: IMG.MUSEUM, en: "Next, Leo went to the old castle for help.", pt: "Depois, Leo foi ao castelo antigo pedir ajuda." },
    { img: IMG.EMILY, en: "A wise queen gave him a magic sword.", pt: "Uma rainha sábia deu a ele uma espada mágica." },
    { img: IMG.BEN, en: "Leo was brave and had a big heart.", pt: "Leo era corajoso e tinha um coração grande." },
    { img: IMG.BUDDY, en: "Finally, Leo and the dragon became friends!", pt: "Finalmente, Leo e o dragão viraram amigos!" },
    { img: IMG.FRIENDS, en: "The end. Every hero has a good story.", pt: "Fim. Todo herói tem uma boa história." },
  ],
  DIALOG: [
    { who: "Lily", img: IMG.LILY, en: "Ben, what's your favorite story?", pt: "Ben, qual sua história favorita?" },
    { who: "Ben", img: IMG.BEN, en: "I love adventure stories with heroes.", pt: "Amo histórias de aventura com heróis." },
    { who: "Lily", img: IMG.LILY, en: "Where does your hero live?", pt: "Onde seu herói mora?" },
    { who: "Ben", img: IMG.BEN, en: "He lives in a forest near a castle.", pt: "Ele mora numa floresta perto de um castelo." },
    { who: "Lily", img: IMG.LILY, en: "Who is the villain?", pt: "Quem é o vilão?" },
    { who: "Ben", img: IMG.BEN, en: "A big dragon! But they become friends.", pt: "Um dragão! Mas eles ficam amigos." },
    { who: "Lily", img: IMG.LILY, en: "Wow, what a beautiful story!", pt: "Uau, que história linda!" },
  ],
  READING: {
    title: "The Little Hero",
    img: IMG.MUSEUM,
    parts: [
      { en: "First, a hero was born in a village.", pt: "Primeiro, um herói nasceu num vilarejo.", highlight: ["First", "was"] },
      { en: "Then, he went to the forest.", pt: "Então, ele foi à floresta.", highlight: ["Then", "went"] },
      { en: "Next, he had a magic sword.", pt: "Depois, ele teve uma espada mágica.", highlight: ["Next", "had"] },
      { en: "The dragon was very big.", pt: "O dragão era muito grande.", highlight: ["was"] },
      { en: "Finally, the hero saved the day.", pt: "Finalmente, o herói salvou o dia.", highlight: ["Finally"] },
    ],
  },
  WRITING: [
    { prompt: "The hero ______ brave. (passado)", answer: "was", hint: "TO BE passado 3ª pessoa.", options: ["was", "is", "were"] },
    { prompt: "He ______ to the castle. (passado)", answer: "went", hint: "Passado de GO.", options: ["went", "go", "goes"] },
    { prompt: "He ______ a magic sword. (passado)", answer: "had", hint: "Passado de HAVE.", options: ["had", "has", "have"] },
    { prompt: "______, the hero was born.", answer: "First", hint: "Sequência 1.", options: ["First", "Finally", "Then"] },
    { prompt: "______, everyone was happy.", answer: "Finally", hint: "Sequência final.", options: ["First", "Finally", "Next"] },
  ],
  QUIZ: [
    { q: "'Hero' é:", options: [{ text: "Vilão" }, { text: "Herói", correct: true }, { text: "Dragão" }] },
    { q: "Passado de GO é:", options: [{ text: "goes" }, { text: "went", correct: true }, { text: "going" }] },
    { q: "Passado de HAVE é:", options: [{ text: "has" }, { text: "had", correct: true }, { text: "having" }] },
    { q: "'Castle' é:", options: [{ text: "Cidade" }, { text: "Castelo", correct: true }, { text: "Escola" }] },
    { q: "Complete: He ___ brave. (passado)", options: [{ text: "is" }, { text: "was", correct: true }, { text: "are" }] },
    { q: "'Adventure' é:", options: [{ text: "Aventura", correct: true }, { text: "Amizade" }, { text: "Comida" }] },
    { q: "Sequência final é:", options: [{ text: "First" }, { text: "Finally", correct: true }, { text: "Then" }] },
  ],
  REAL_LIFE: [
    { situation: "📖 Começando uma história.", answer: "First, there was a brave hero." },
    { situation: "🐉 Descrevendo o vilão.", answer: "The dragon was very big." },
    { situation: "🏰 Falando pra onde foi.", answer: "He went to the castle." },
    { situation: "🎁 Falando o que ele tinha.", answer: "He had a magic sword." },
    { situation: "✨ Terminando a história.", answer: "Finally, everyone was happy." },
  ],
  GRAMMAR: {
    focus: "Simple Past (was/were, went, had) + Sequência",
    why:
      "Pra contar história você fala no PASSADO: was/were, went, had. E organiza com First → Then → Next → Finally.",
    examples: [
      { en: "He was brave.", pt: "Ele era corajoso." },
      { en: "They were friends.", pt: "Eles eram amigos." },
      { en: "She went to the forest.", pt: "Ela foi à floresta." },
      { en: "He had a magic sword.", pt: "Ele tinha uma espada mágica." },
      { en: "First, then, next, finally.", pt: "Primeiro, então, depois, finalmente." },
    ],
    errors: [
      { wrong: "He goed to the castle.", right: "He WENT to the castle.", why: "Passado de GO = WENT (irregular)." },
      { wrong: "He was have a sword.", right: "He HAD a sword.", why: "Passado de HAVE = HAD." },
      { wrong: "They was friends.", right: "They WERE friends.", why: "They pede WERE." },
    ],
  },
  SONG: {
    title: "Once Upon a Time",
    hookPt: "Cante como um conto de fadas!",
    verses: [
      { en: "Once upon a time, a hero was brave,", pt: "Era uma vez, um herói corajoso,", emoji: "🦸" },
      { en: "He went to a castle and a life he saved.", pt: "Foi a um castelo e salvou uma vida.", emoji: "🏰" },
      { en: "First the forest, then the sea,", pt: "Primeiro a floresta, depois o mar,", emoji: "🌲" },
      { en: "Next the dragon, wild and free!", pt: "Depois o dragão, selvagem e livre!", emoji: "🐉" },
      { en: "Finally friends, hand in hand,", pt: "Por fim amigos, mão na mão,", emoji: "🤝" },
      { en: "That's the story of our land!", pt: "Essa é a história da nossa terra!", emoji: "✨" },
    ],
  },
  HUNTER: {
    intro: "Escolha a palavra certa!",
    rounds: [
      { promptEn: "'Hero' é:", promptPt: "'Hero' é:", targetLabel: "Herói", objects: [
        { id: "a", label: "Herói", img: "", isTarget: true },
        { id: "b", label: "Vilão", img: "" },
        { id: "c", label: "Dragão", img: "" },
      ]},
      { promptEn: "Passado de GO?", promptPt: "Passado de GO?", targetLabel: "went", objects: [
        { id: "a", label: "goes", img: "" },
        { id: "b", label: "went", img: "", isTarget: true },
        { id: "c", label: "going", img: "" },
      ]},
      { promptEn: "'Castle' é:", promptPt: "'Castle' é:", targetLabel: "Castelo", objects: [
        { id: "a", label: "Escola", img: "" },
        { id: "b", label: "Castelo", img: "", isTarget: true },
        { id: "c", label: "Floresta", img: "" },
      ]},
      { promptEn: "Complete: He ___ brave. (past)", promptPt: "Complete: He ___ brave. (past)", targetLabel: "was", objects: [
        { id: "a", label: "is", img: "" },
        { id: "b", label: "was", img: "", isTarget: true },
        { id: "c", label: "were", img: "" },
      ]},
      { promptEn: "Sequência final:", promptPt: "Sequência final:", targetLabel: "Finally", objects: [
        { id: "a", label: "First", img: "" },
        { id: "b", label: "Finally", img: "", isTarget: true },
        { id: "c", label: "Then", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares da história!",
    pairs: [
      { id: "a", en: "Hero 🦸", pt: "Herói", img: IMG.BEN },
      { id: "b", en: "Dragon 🐉", pt: "Dragão", img: IMG.BUDDY },
      { id: "c", en: "Castle 🏰", pt: "Castelo", img: IMG.MUSEUM },
      { id: "d", en: "Forest 🌲", pt: "Floresta", img: IMG.PARK },
    ],
  },
  BOOK: {
    title: "Create Your Own Story",
    intro: "Vira as páginas da sua história!",
    pages: [
      { en: "First — Once upon a time, a hero.", pt: "Primeiro — Era uma vez um herói.", img: IMG.BEN, badge: "🦸" },
      { en: "Then — He lived in a forest.", pt: "Então — Ele morava numa floresta.", img: IMG.PARK, badge: "🌲" },
      { en: "Next — A dragon came!", pt: "Depois — Um dragão chegou!", img: IMG.BUDDY, badge: "🐉" },
      { en: "He went to a big castle.", pt: "Ele foi a um grande castelo.", img: IMG.MUSEUM, badge: "🏰" },
      { en: "Finally — They became friends.", pt: "Finalmente — Viraram amigos.", img: IMG.FRIENDS, badge: "🤝" },
      { en: "The End!", pt: "Fim!", img: IMG.RAINBOW, badge: "✨" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "É a biblioteca das histórias! Toque nos objetos.",
    img: IMG.LIBRARY,
    items: [
      { en: "Book", pt: "Livro", emoji: "📖" },
      { en: "Sword", pt: "Espada", emoji: "⚔️" },
      { en: "Crown", pt: "Coroa", emoji: "👑" },
      { en: "Map", pt: "Mapa", emoji: "🗺️" },
      { en: "Dragon", pt: "Dragão", emoji: "🐉" },
      { en: "Magic wand", pt: "Varinha", emoji: "🪄" },
    ],
  },
  CULTURE: {
    title: "Stories From the World 🌍",
    emoji: "📚",
    paragraphs: [
      { en: "Cinderella is loved all over the world — a classic fairy tale!", pt: "Cinderela é amada no mundo todo — clássico!" },
      { en: "In Brazil, we have Saci-Pererê, a mischievous folk character.", pt: "No Brasil temos o Saci-Pererê, um personagem do folclore." },
      { pt: "Toda cultura tem suas histórias — elas nos ensinam valores." },
    ],
  },
};

export default lesson;
