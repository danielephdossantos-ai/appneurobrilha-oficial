// Inglês 9º Ano — Unit 5 "Literature and Critical Reading 📚"
// Linking Words · Connectors · Coesão textual
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u9-a05-literature",
  meta: {
    unitLabel: "Unit 5 · Lesson 5 — Literature and Critical Reading 📚",
    headerKicker: "SPEB 1.0 · English Academy — 9th Grade",
    coverKicker: "Novel · Poem · Review · Interpretation",
    coverTitle: "Literature and Critical Reading 📚",
    coverSubtitle:
      "Explore romances, poemas e resenhas em inglês. Aprenda a interpretar e escrever com coesão.",
    storyTitle: "Literature Club",
    vocabularyTitle: "Literature & Reading",
    speakingTargets: [
      "The novel is exciting because the plot is fast.",
      "However, the ending is sad.",
      "The main character is brave, therefore he wins.",
      "Moreover, the theme is about friendship.",
      "In addition, the language is beautiful.",
      "In conclusion, I recommend this book.",
    ],
    listeningIntro: "Ouça Sophie apresentar seu livro favorito no Literature Club.",
    listeningQuestion:
      "Sophie disse: 'The plot is fast; however, the ending is sad.' O que 'however' significa?",
    listeningOptions: [
      "'no entanto' (contraste)",
      "'portanto' (conclusão)",
      "'além disso' (adição)",
    ],
    listeningCorrect: "'no entanto' (contraste)",
    listeningWrongHint: "HOWEVER introduz uma ideia oposta ou contrastante.",
    readingNarration:
      "Literatura é a arte de contar histórias que emocionam, ensinam e transformam. Ler bons livros amplia o mundo, e escrever uma resenha ajuda a organizar suas ideias.",
    grammarNarration:
      "Linking Words conectam ideias: AND (adição), BUT/HOWEVER (contraste), SO/THEREFORE (conclusão), BECAUSE (causa), MOREOVER/IN ADDITION (soma), FIRST/THEN/FINALLY (sequência), IN CONCLUSION (fecho).",
    finalProjectIntro: "Escreva sua resenha literária. Digite seu nome:",
    finalProjectPhrase: (name: string) =>
      `LITERARY REVIEW — Book: 'The Little Prince' — by Antoine de Saint-Exupéry. Reviewed by ${name}. This short novel tells the story of a boy who lives on a tiny planet and travels the universe meeting strange grown-ups. First, the language is simple and beautiful. Moreover, the plot has adventure and philosophy at the same time. However, some parts are very sad, because they show how adults forget the essential. The main character is kind, curious and honest — therefore, he touches every reader. In conclusion, this is a book that everyone should read at least once in life. I give it five stars.`,
    finalProjectSectionTitle: "My Literary Review",
  },
  VOCAB: [
    { id: "novel", en: "Novel 📕", pt: "Romance", img: IMG.LIBRARY },
    { id: "bio", en: "Biography 📘", pt: "Biografia", img: IMG.ANNA },
    { id: "short", en: "Short story 📖", pt: "Conto", img: IMG.MAYA },
    { id: "poem", en: "Poem ✍️", pt: "Poema", img: IMG.SOPHIE },
    { id: "review", en: "Review ⭐", pt: "Resenha", img: IMG.KENJI },
    { id: "character", en: "Character 👤", pt: "Personagem", img: IMG.LUCAS },
    { id: "plot", en: "Plot 🎬", pt: "Enredo", img: IMG.CLASS },
    { id: "theme", en: "Theme 🎯", pt: "Tema", img: IMG.SCHOOL },
    { id: "author", en: "Author ✒️", pt: "Autor", img: IMG.ANNA },
    { id: "chapter", en: "Chapter 📄", pt: "Capítulo", img: IMG.ROOM },
  ],
  STORY: [
    { img: IMG.LIBRARY, en: "The Literature Club meets every Wednesday.", pt: "O Literature Club se reúne toda quarta-feira." },
    { img: IMG.SOPHIE, en: "Sophie: 'I read a novel and, moreover, wrote a review.'", pt: "Sophie: 'Li um romance e, além disso, escrevi uma resenha.'" },
    { img: IMG.MAYA, en: "Maya: 'The plot is fast; however, the ending is sad.'", pt: "Maya: 'O enredo é rápido; no entanto, o final é triste.'" },
    { img: IMG.KENJI, en: "Kenji: 'The theme is friendship, therefore I loved it.'", pt: "Kenji: 'O tema é amizade, portanto amei.'" },
    { img: IMG.LUCAS, en: "Lucas: 'The main character is brave and, in addition, kind.'", pt: "Lucas: 'O personagem principal é corajoso e, além disso, gentil.'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'Great connectors! Your writing sounds mature.'", pt: "Ms. Anna: 'Ótimos conectivos! Sua escrita soa madura.'" },
    { img: IMG.CLASS, en: "The club plans a Literary Magazine for the school.", pt: "O clube planeja uma Revista Literária para a escola." },
  ],
  DIALOG: [
    { who: "Sophie", img: IMG.SOPHIE, en: "Have you finished the novel I recommended?", pt: "Você terminou o romance que recomendei?" },
    { who: "Kenji", img: IMG.KENJI, en: "Yes, and it was amazing. However, the middle is slow.", pt: "Sim, foi incrível. No entanto, o meio é lento." },
    { who: "Sophie", img: IMG.SOPHIE, en: "I agree. Moreover, the ending surprised me.", pt: "Concordo. Além disso, o final me surpreendeu." },
    { who: "Kenji", img: IMG.KENJI, en: "The main character is brave, so I liked him.", pt: "O personagem principal é corajoso, então gostei dele." },
    { who: "Sophie", img: IMG.SOPHIE, en: "In conclusion, we should write a review together.", pt: "Em conclusão, devemos escrever uma resenha juntos." },
    { who: "Kenji", img: IMG.KENJI, en: "Deal! Let's start tonight.", pt: "Combinado! Vamos começar hoje à noite." },
  ],
  READING: {
    title: "Why Read Literature?",
    img: IMG.LIBRARY,
    parts: [
      { en: "A novel lets you live many lives without leaving your room.", pt: "Um romance te permite viver muitas vidas sem sair do quarto.", highlight: ["novel"] },
      { en: "A poem is a photograph of an emotion in a few lines.", pt: "Um poema é uma fotografia de uma emoção em poucas linhas.", highlight: ["poem"] },
      { en: "The character speaks with your voice; the plot moves with your heart.", pt: "O personagem fala com sua voz; o enredo se move com seu coração.", highlight: ["character", "plot"] },
      { en: "A good review helps others discover great authors.", pt: "Uma boa resenha ajuda outros a descobrirem grandes autores.", highlight: ["review"] },
      { en: "Literature is critical thinking with a beautiful voice.", pt: "Literatura é pensamento crítico com uma voz linda.", highlight: ["Literature"] },
    ],
  },
  WRITING: [
    { prompt: "The plot is fast; ______, the ending is sad. (contraste)", answer: "however", hint: "HOWEVER = no entanto.", options: ["however", "moreover", "because"], explain: "HOWEVER conecta ideias contrastantes." },
    { prompt: "I love this novel ______ the characters are amazing. (causa)", answer: "because", hint: "BECAUSE = porque.", options: ["because", "however", "therefore"] },
    { prompt: "The plot is fast; ______, I finished it in one day. (conclusão)", answer: "therefore", hint: "THEREFORE = portanto.", options: ["therefore", "but", "although"] },
    { prompt: "The story is short. ______, it is deep. (adição)", answer: "Moreover", hint: "MOREOVER = além disso.", options: ["Moreover", "Because", "But"] },
    { prompt: "'Author' significa:", answer: "Autor", hint: "Quem escreve o livro.", options: ["Autor", "Ator", "Auto"] },
    { prompt: "______ conclusion, I recommend this book.", answer: "In", hint: "'IN conclusion' = 'Em conclusão'.", options: ["In", "On", "At"] },
    { prompt: "'Plot' significa:", answer: "Enredo", hint: "A história que se desenrola.", options: ["Enredo", "Praça", "Preço"] },
  ],
  QUIZ: [
    { q: "'However' significa:", options: [{ text: "No entanto", correct: true, explain: "Contraste — ideia oposta." }, { text: "Portanto" }, { text: "Porque" }] },
    { q: "'Therefore' significa:", options: [{ text: "Portanto", correct: true, explain: "Conclusão / consequência." }, { text: "Porém" }, { text: "Também" }] },
    { q: "'Moreover' significa:", options: [{ text: "Além disso", correct: true }, { text: "Depois disso" }, { text: "Menos que" }] },
    { q: "'Novel' significa:", options: [{ text: "Romance (livro)", correct: true }, { text: "Novo" }, { text: "Novela" }] },
    { q: "'Character' significa:", options: [{ text: "Personagem", correct: true }, { text: "Caracol" }, { text: "Caracter" }] },
    { q: "'Plot' significa:", options: [{ text: "Enredo", correct: true }, { text: "Ponto" }, { text: "Praça" }] },
    { q: "'Review' significa:", options: [{ text: "Resenha / análise", correct: true }, { text: "Revisar apenas" }, { text: "Revista" }] },
    { q: "A boa resenha:", options: [{ text: "Só copia o livro" }, { text: "Apresenta a obra e uma opinião fundamentada", correct: true }, { text: "Só reclama" }] },
  ],
  REAL_LIFE: [
    { situation: "📕 Recomendando um livro.", answer: "You should read this novel; moreover, the ending is surprising." },
    { situation: "✍️ Sobre um poema.", answer: "The poem is short, but very deep." },
    { situation: "🎬 Sobre o enredo.", answer: "The plot is fast, therefore I finished the book in one day." },
    { situation: "👤 Sobre um personagem.", answer: "The main character is brave and, in addition, very kind." },
    { situation: "⭐ Fechando resenha.", answer: "In conclusion, I recommend this book to every teenager." },
  ],
  GRAMMAR: {
    focus: "Linking Words & Connectors",
    why:
      "Conectivos transformam frases soltas em texto coeso. AND (soma), BUT/HOWEVER (contraste), BECAUSE (causa), SO/THEREFORE (consequência), MOREOVER/IN ADDITION (adição), FIRST/THEN/FINALLY (sequência), IN CONCLUSION (fecho).",
    examples: [
      { en: "I like the book AND the movie.", pt: "Gosto do livro e do filme." },
      { en: "It is short, HOWEVER it is deep.", pt: "É curto, no entanto é profundo." },
      { en: "I loved it BECAUSE the plot is fast.", pt: "Amei porque o enredo é rápido." },
      { en: "It's an amazing book; THEREFORE, I recommend it.", pt: "É um livro incrível; portanto, recomendo." },
    ],
    errors: [
      { wrong: "I love the book, however I love the movie.", right: "I love the book, AND I love the movie.", why: "'However' é contraste — aqui é adição." },
      { wrong: "Because it is short, so I read fast.", right: "BECAUSE it is short, I read fast. / It is short, SO I read fast.", why: "Não use BECAUSE e SO juntos na mesma ideia." },
      { wrong: "In conclusion is a great book.", right: "IN CONCLUSION, IT is a great book.", why: "Adicione vírgula e sujeito." },
      { wrong: "Moreover, but the story is nice.", right: "MOREOVER, the story is nice.", why: "Não misture 'moreover' com 'but'." },
    ],
  },
  SONG: {
    title: "Reader's Song",
    hookPt: "Cante o hino do leitor.",
    verses: [
      { en: "First, I open a page,", pt: "Primeiro, abro a página,", emoji: "📖" },
      { en: "Then, I meet the sage.", pt: "Depois, encontro o sábio.", emoji: "🧙" },
      { en: "Moreover, dreams appear,", pt: "Além disso, sonhos aparecem,", emoji: "💭" },
      { en: "In conclusion, worlds are near.", pt: "Em conclusão, mundos ficam perto.", emoji: "🌍" },
    ],
  },
  HUNTER: {
    intro: "Escolha o conectivo certo!",
    rounds: [
      { promptEn: "It is short, ___ it is deep.", promptPt: "It is short, ___ it is deep.", targetLabel: "however", objects: [
        { id: "a", label: "however", img: "", isTarget: true },
        { id: "b", label: "moreover", img: "" },
        { id: "c", label: "because", img: "" },
      ]},
      { promptEn: "I love it ___ the plot is fast.", promptPt: "I love it ___ the plot is fast.", targetLabel: "because", objects: [
        { id: "a", label: "because", img: "", isTarget: true },
        { id: "b", label: "however", img: "" },
        { id: "c", label: "in addition", img: "" },
      ]},
      { promptEn: "The book is nice; ___, I recommend it.", promptPt: "The book is nice; ___, I recommend it.", targetLabel: "therefore", objects: [
        { id: "a", label: "therefore", img: "", isTarget: true },
        { id: "b", label: "but", img: "" },
        { id: "c", label: "because", img: "" },
      ]},
      { promptEn: "'Novel' =", promptPt: "'Novel' =", targetLabel: "Romance", objects: [
        { id: "a", label: "Novo", img: "" },
        { id: "b", label: "Romance", img: "", isTarget: true },
        { id: "c", label: "Novela", img: "" },
      ]},
      { promptEn: "'Plot' =", promptPt: "'Plot' =", targetLabel: "Enredo", objects: [
        { id: "a", label: "Enredo", img: "", isTarget: true },
        { id: "b", label: "Praça", img: "" },
        { id: "c", label: "Ponto", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares palavra → tradução:",
    pairs: [
      { id: "a", en: "Novel 📕", pt: "Romance", img: IMG.LIBRARY },
      { id: "b", en: "Poem ✍️", pt: "Poema", img: IMG.SOPHIE },
      { id: "c", en: "Character 👤", pt: "Personagem", img: IMG.LUCAS },
      { id: "d", en: "Plot 🎬", pt: "Enredo", img: IMG.CLASS },
    ],
  },
  BOOK: {
    title: "My Literary Review",
    intro: "Sua resenha literária ilustrada.",
    pages: [
      { en: "Page 1 — The book is ___ (title).", pt: "Pág. 1 — O livro é ___ (título).", img: IMG.LIBRARY, badge: "📕" },
      { en: "Page 2 — The main character is ___.", pt: "Pág. 2 — O personagem principal é ___.", img: IMG.LUCAS, badge: "👤" },
      { en: "Page 3 — The plot is ___; however, ___.", pt: "Pág. 3 — O enredo é ___; no entanto, ___.", img: IMG.CLASS, badge: "🎬" },
      { en: "Page 4 — In conclusion, I ___ this book.", pt: "Pág. 4 — Em conclusão, eu ___ este livro.", img: IMG.KENJI, badge: "⭐" },
      { en: "The End — Keep reading!", pt: "Fim — Continue lendo!", img: IMG.SCHOOL, badge: "🌟" },
    ],
  },
  CULTURE: {
    title: "Literature in English 📚",
    emoji: "✒️",
    paragraphs: [
      { en: "Shakespeare wrote 39 plays and 154 sonnets — his English still influences the world.", pt: "Shakespeare escreveu 39 peças e 154 sonetos — o inglês dele ainda influencia o mundo." },
      { en: "J.K. Rowling wrote the first Harry Potter chapter on a train, on a paper napkin.", pt: "J.K. Rowling escreveu o primeiro capítulo de Harry Potter num trem, num guardanapo." },
      { pt: "A literatura em inglês é vasta — clássicos, contos, poemas, quadrinhos e até fanfics de todos os continentes." },
    ],
  },
};

export default lesson;
