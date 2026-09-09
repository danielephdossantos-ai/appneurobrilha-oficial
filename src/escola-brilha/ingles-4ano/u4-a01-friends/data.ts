// Inglês 4º Ano — Unit 1 "My Life and My Friends 👨‍👩‍👧‍👦"
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u4-a01-friends",
  meta: {
    unitLabel: "Unit 1 · Lesson 1 — My Life and My Friends 👨‍👩‍👧‍👦",
    headerKicker: "My English Adventure — 4th Grade",
    coverKicker: "Apresentações & amizade",
    coverTitle: "My Life and My Friends 👨‍👩‍👧‍👦",
    coverSubtitle:
      "Agora falamos sobre nós e nossos amigos com frases completas: TO BE + HAVE/HAS + adjetivos de personalidade e aparência.",
    storyTitle: "Meet My Best Friend",
    vocabularyTitle: "Friendship Words",
    speakingTargets: [
      "My best friend is Ben.",
      "He is funny and kind.",
      "She has long hair.",
      "My birthday is in May.",
      "We study together.",
      "I like playing with my friends.",
    ],
    listeningIntro: "Ouça a Lily apresentando o melhor amigo.",
    listeningQuestion: 'Lily disse: "My best friend is nine years old." Quantos anos ele tem?',
    listeningOptions: ["Sete", "Nove", "Dez"],
    listeningCorrect: "Nove",
    listeningWrongHint: '"Nine" = nove.',
    readingNarration:
      'Repare como usamos IS/ARE pra descrever pessoas e HAS pra dizer o que alguém TEM. São duas ferramentas diferentes!',
    grammarNarration:
      'TO BE descreve como a pessoa É (She IS kind). HAVE/HAS descreve o que a pessoa TEM (She HAS long hair). Adjetivos vêm antes do substantivo: a FUNNY boy.',
    finalProjectIntro: "Seu livro do melhor amigo! Escreva o nome:",
    finalProjectPhrase: (name: string) =>
      `This is my best friend book. My name is ${name}. My best friend is amazing. He/She is kind and funny. He/She has beautiful eyes. We play, study, and laugh together. Friendship is a treasure!`,
    finalProjectSectionTitle: "My Best Friend Book",
  },
  VOCAB: [
    { id: "best", en: "Best friend 👫", pt: "Melhor amigo(a)", img: IMG.FRIENDS },
    { id: "kind", en: "Kind 💖", pt: "Gentil", img: IMG.LILY },
    { id: "funny", en: "Funny 😂", pt: "Engraçado(a)", img: IMG.BEN },
    { id: "smart", en: "Smart 🧠", pt: "Inteligente", img: IMG.EMILY },
    { id: "tall", en: "Tall 📏", pt: "Alto(a)", img: IMG.TEACHER },
    { id: "short", en: "Short 📐", pt: "Baixo(a)", img: IMG.LILY },
    { id: "birthday", en: "Birthday 🎂", pt: "Aniversário", img: IMG.RAINBOW },
    { id: "family", en: "Family 👨‍👩‍👧", pt: "Família", img: IMG.FRIENDS },
  ],
  STORY: [
    { img: IMG.LILY, en: "Hi! I'm Lily and I want to tell you about my best friend.", pt: "Oi! Sou Lily e quero falar do meu melhor amigo." },
    { img: IMG.BEN, en: "His name is Ben. He is nine years old.", pt: "Ele se chama Ben. Tem nove anos." },
    { img: IMG.BEN, en: "Ben is funny and very smart.", pt: "Ben é engraçado e muito inteligente." },
    { img: IMG.BEN, en: "He has short brown hair and green eyes.", pt: "Ele tem cabelo curto castanho e olhos verdes." },
    { img: IMG.RAINBOW, en: "His birthday is in October. We always have a party!", pt: "Aniversário dele é em outubro. Sempre tem festa!" },
    { img: IMG.SCHOOL, en: "We study together at school every day.", pt: "Estudamos juntos na escola todo dia." },
    { img: IMG.FRIENDS, en: "His hobbies are soccer, video games, and drawing.", pt: "Hobbies dele: futebol, videogame e desenho." },
    { img: IMG.FRIENDS, en: "Ben is my best friend forever!", pt: "Ben é meu melhor amigo pra sempre!" },
  ],
  DIALOG: [
    { who: "Lily", img: IMG.LILY, en: "Ben, tell me about your family.", pt: "Ben, me conta sobre sua família." },
    { who: "Ben", img: IMG.BEN, en: "I have a mom, a dad, and one sister.", pt: "Tenho mãe, pai e uma irmã." },
    { who: "Lily", img: IMG.LILY, en: "How old is your sister?", pt: "Quantos anos tem sua irmã?" },
    { who: "Ben", img: IMG.BEN, en: "She is seven. She has long black hair.", pt: "Ela tem sete. Cabelo longo preto." },
    { who: "Lily", img: IMG.LILY, en: "What are your hobbies?", pt: "Quais seus hobbies?" },
    { who: "Ben", img: IMG.BEN, en: "I like reading, drawing and playing soccer.", pt: "Gosto de ler, desenhar e jogar futebol." },
    { who: "Lily", img: IMG.LILY, en: "Cool! You are a great friend.", pt: "Legal! Você é um ótimo amigo." },
  ],
  READING: {
    title: "My Best Friend",
    img: IMG.FRIENDS,
    parts: [
      { en: "My best friend is Ben.", pt: "Meu melhor amigo é Ben.", highlight: ["is"] },
      { en: "He is funny and kind.", pt: "Ele é engraçado e gentil.", highlight: ["is"] },
      { en: "He has brown hair.", pt: "Ele tem cabelo castanho.", highlight: ["has"] },
      { en: "His birthday is in October.", pt: "Aniversário em outubro.", highlight: ["is"] },
      { en: "We study together every day.", pt: "Estudamos juntos todo dia.", highlight: ["study"] },
    ],
  },
  WRITING: [
    { prompt: "She ______ nice. (TO BE)", answer: "is", hint: "3ª pessoa TO BE.", options: ["is", "am", "are"] },
    { prompt: "He ______ long hair. (ter)", answer: "has", hint: "HE/SHE/IT usa HAS.", options: ["has", "have", "is"] },
    { prompt: "I ______ two brothers.", answer: "have", hint: "I usa HAVE.", options: ["have", "has", "am"] },
    { prompt: "My friend is ______. (engraçado)", answer: "funny", hint: "Adjetivo pra pessoa divertida.", options: ["funny", "food", "car"] },
    { prompt: "We ______ best friends.", answer: "are", hint: "WE usa ARE.", options: ["are", "is", "am"] },
  ],
  QUIZ: [
    { q: "Complete: She ___ kind.", options: [{ text: "is", correct: true }, { text: "am" }, { text: "are" }] },
    { q: "Complete: He ___ blue eyes.", options: [{ text: "have" }, { text: "has", correct: true }, { text: "is" }] },
    { q: "'Funny' significa:", options: [{ text: "Alto" }, { text: "Engraçado", correct: true }, { text: "Triste" }] },
    { q: "Complete: I ___ a big family.", options: [{ text: "has" }, { text: "have", correct: true }, { text: "am" }] },
    { q: "'Best friend' é:", options: [{ text: "Vizinho" }, { text: "Melhor amigo", correct: true }, { text: "Primo" }] },
    { q: "Complete: We ___ classmates.", options: [{ text: "is" }, { text: "am" }, { text: "are", correct: true }] },
    { q: "'Birthday' significa:", options: [{ text: "Aniversário", correct: true }, { text: "Segunda-feira" }, { text: "Escola" }] },
  ],
  REAL_LIFE: [
    { situation: "👋 Apresentando seu melhor amigo.", answer: "This is my best friend, Ben." },
    { situation: "🎂 Falando quando é seu aniversário.", answer: "My birthday is in May." },
    { situation: "😊 Descrevendo alguém gentil.", answer: "She is very kind." },
    { situation: "👀 Descrevendo aparência.", answer: "He has short hair." },
    { situation: "📚 Falando o que vocês fazem juntos.", answer: "We study together." },
  ],
  GRAMMAR: {
    focus: "TO BE (revisão) + HAVE/HAS + Adjetivos",
    why:
      'Pra descrever alguém você combina 3 ferramentas: TO BE (como a pessoa É), HAVE/HAS (o que a pessoa TEM) e adjetivos (características). Isso te deixa falar sobre qualquer pessoa.',
    examples: [
      { en: "She is my sister.", pt: "Ela é minha irmã." },
      { en: "He is tall and funny.", pt: "Ele é alto e engraçado." },
      { en: "I have two friends.", pt: "Tenho dois amigos." },
      { en: "She has blue eyes.", pt: "Ela tem olhos azuis." },
      { en: "We are best friends.", pt: "Somos melhores amigos." },
    ],
    errors: [
      { wrong: "She have blue eyes.", right: "She HAS blue eyes.", why: "He/She/It pede HAS." },
      { wrong: "He is have tall.", right: "He IS tall.", why: "Adjetivo usa TO BE, não HAVE." },
      { wrong: "I has a sister.", right: "I HAVE a sister.", why: "I sempre HAVE." },
    ],
  },
  SONG: {
    title: "Best Friends Forever",
    hookPt: "Cante pensando no seu melhor amigo!",
    verses: [
      { en: "My best friend is by my side,", pt: "Meu melhor amigo tá do meu lado,", emoji: "👫" },
      { en: "Together we laugh, together we ride,", pt: "Juntos rimos, juntos andamos,", emoji: "🚲" },
      { en: "He is funny, she is kind,", pt: "Ele é engraçado, ela é gentil,", emoji: "💖" },
      { en: "Best friends of every kind!", pt: "Melhores amigos de todo tipo!", emoji: "🌟" },
      { en: "We have dreams and we have fun,", pt: "Temos sonhos e diversão,", emoji: "☀️" },
      { en: "Best friends forever, number one!", pt: "Melhores amigos pra sempre, número 1!", emoji: "🏆" },
    ],
  },
  HUNTER: {
    intro: "Escolha a palavra ou frase certa!",
    rounds: [
      { promptEn: "Complete: She ___ funny.", promptPt: "Complete: She ___ funny.", targetLabel: "is", objects: [
        { id: "a", label: "is", img: "", isTarget: true },
        { id: "b", label: "am", img: "" },
        { id: "c", label: "are", img: "" },
      ]},
      { promptEn: "Complete: He ___ short hair.", promptPt: "Complete: He ___ short hair.", targetLabel: "has", objects: [
        { id: "a", label: "have", img: "" },
        { id: "b", label: "has", img: "", isTarget: true },
        { id: "c", label: "is", img: "" },
      ]},
      { promptEn: "Como se diz 'gentil'?", promptPt: "Como se diz 'gentil'?", targetLabel: "Kind", objects: [
        { id: "a", label: "Tall 📏", img: "" },
        { id: "b", label: "Kind 💖", img: "", isTarget: true },
        { id: "c", label: "Fast ⚡", img: "" },
      ]},
      { promptEn: "Complete: I ___ two friends.", promptPt: "Complete: I ___ two friends.", targetLabel: "have", objects: [
        { id: "a", label: "have", img: "", isTarget: true },
        { id: "b", label: "has", img: "" },
        { id: "c", label: "is", img: "" },
      ]},
      { promptEn: "'Birthday' é:", promptPt: "'Birthday' é:", targetLabel: "Aniversário", objects: [
        { id: "a", label: "Escola", img: "" },
        { id: "b", label: "Aniversário", img: "", isTarget: true },
        { id: "c", label: "Família", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Encontre os pares de amizade!",
    pairs: [
      { id: "a", en: "Kind 💖", pt: "Gentil", img: IMG.LILY },
      { id: "b", en: "Funny 😂", pt: "Engraçado", img: IMG.BEN },
      { id: "c", en: "Smart 🧠", pt: "Inteligente", img: IMG.EMILY },
      { id: "d", en: "Best friend 👫", pt: "Melhor amigo", img: IMG.FRIENDS },
    ],
  },
  BOOK: {
    title: "My Best Friend Book",
    intro: "O livro do seu melhor amigo. Vira as páginas!",
    pages: [
      { en: "Chapter 1 — This is my best friend.", pt: "Cap. 1 — Este é meu melhor amigo.", img: IMG.BEN, badge: "👫" },
      { en: "Chapter 2 — He is funny and kind.", pt: "Cap. 2 — Ele é engraçado e gentil.", img: IMG.LILY, badge: "💖" },
      { en: "Chapter 3 — He has brown hair and green eyes.", pt: "Cap. 3 — Cabelo castanho e olhos verdes.", img: IMG.FRIENDS, badge: "👀" },
      { en: "Chapter 4 — His birthday is in October.", pt: "Cap. 4 — Aniversário em outubro.", img: IMG.RAINBOW, badge: "🎂" },
      { en: "Chapter 5 — We study and play together.", pt: "Cap. 5 — Estudamos e brincamos juntos.", img: IMG.SCHOOL, badge: "📚" },
      { en: "The End — Best friends forever!", pt: "Fim — Melhores amigos pra sempre!", img: IMG.FRIENDS, badge: "⭐" },
    ],
  },
  VIRTUAL_ROOM: {
    intro: "É o quarto da amizade! Toque nos itens que representam seu melhor amigo.",
    img: IMG.CLASSROOM,
    items: [
      { en: "Photo", pt: "Foto", emoji: "📸" },
      { en: "Birthday card", pt: "Cartão de aniversário", emoji: "🎂" },
      { en: "Toys", pt: "Brinquedos", emoji: "🧸" },
      { en: "Book", pt: "Livro", emoji: "📖" },
      { en: "Soccer ball", pt: "Bola", emoji: "⚽" },
      { en: "Drawing", pt: "Desenho", emoji: "🎨" },
    ],
  },
  CULTURE: {
    title: "Friendship Around the World 🌍",
    emoji: "💖",
    paragraphs: [
      { en: "In every country, friends are important. In the USA, kids celebrate 'National Best Friends Day' on June 8th!", pt: "Em todo país, amigos são importantes. Nos EUA, tem o 'Dia do Melhor Amigo' em 8 de junho!" },
      { en: "In Japan, friends often exchange small gifts to show they care.", pt: "No Japão, amigos trocam pequenos presentes." },
      { pt: "Amizade é universal — em qualquer idioma, ela alegra a vida!" },
    ],
  },
};

export default lesson;
