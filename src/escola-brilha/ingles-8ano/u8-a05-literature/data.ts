// Inglês 8º Ano — Unit 5 "Literature and Storytelling 📚"
// Past Continuous · Simple Past × Past Continuous
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u8-a05-literature",
  meta: {
    unitLabel: "Unit 5 · Lesson 1 — Literature and Storytelling 📚",
    headerKicker: "SPEB 1.0 · English Academy — 8th Grade",
    coverKicker: "Novel · Poem · Character · Plot",
    coverTitle: "Literature and Storytelling 📚",
    coverSubtitle:
      "A Academy realiza o Young Writers Festival. Aprenda a contar histórias usando Past Continuous e Simple Past juntos.",
    storyTitle: "Young Writers Festival",
    vocabularyTitle: "Literature",
    speakingTargets: [
      "I was reading when the phone rang.",
      "The character was walking through the forest.",
      "The plot of the novel is exciting.",
      "She wrote a beautiful short story.",
      "The setting was a small English village.",
      "The main conflict is between two friends.",
    ],
    listeningIntro: "Ouça Ms. Anna abrir o festival de escritores.",
    listeningQuestion:
      'Sophie leu: "While I was walking to school, I saw a strange man." O que aconteceu?',
    listeningOptions: [
      "Ela viu o homem antes de andar",
      "Ela estava andando (ação em progresso) quando viu o homem (ação curta)",
      "O homem estava andando com ela",
    ],
    listeningCorrect: "Ela estava andando (ação em progresso) quando viu o homem (ação curta)",
    listeningWrongHint: "Past Continuous (was walking) = ação longa; Simple Past (saw) = ação curta que interrompe.",
    readingNarration:
      "Boas histórias têm personagens (characters), enredo (plot), cenário (setting) e conflito (conflict). Escritores usam Past Continuous para descrever cenários e Simple Past para as ações principais.",
    grammarNarration:
      "Past Continuous = TO BE (was/were) + verbo-ING. Usa pra ação em progresso no passado ('I was reading'). Combinado com Simple Past mostra ação longa interrompida por ação curta: 'I WAS READING when the phone RANG.'",
    finalProjectIntro: "Vamos escrever sua história curta. Digite seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY SHORT STORY — Author: ${name}. It was a rainy Saturday afternoon. I was reading in my room when I heard a strange noise from the garden. My cat was sleeping on my lap. I walked slowly to the window. A small bird was struggling in the wet grass. I ran outside and rescued it. While I was drying its feathers, my grandmother arrived with warm bread. She smiled and said, "You have the heart of a hero." That day I learned that kindness is the greatest story we can tell. The End.`,
    finalProjectSectionTitle: "My Short Story",
  },
  VOCAB: [
    { id: "novel", en: "Novel 📖", pt: "Romance/Livro", img: IMG.LIBRARY },
    { id: "bio", en: "Biography 👤", pt: "Biografia", img: IMG.ANNA },
    { id: "poem", en: "Poem 📜", pt: "Poema", img: IMG.SOPHIE },
    { id: "short", en: "Short story ✍️", pt: "Conto", img: IMG.KENJI },
    { id: "character", en: "Character 🎭", pt: "Personagem", img: IMG.LUCAS },
    { id: "plot", en: "Plot 📈", pt: "Enredo", img: IMG.CLASS },
    { id: "setting", en: "Setting 🏞️", pt: "Cenário", img: IMG.PARK },
    { id: "conflict", en: "Conflict ⚔️", pt: "Conflito", img: IMG.MAYA },
  ],
  STORY: [
    { img: IMG.ANNA, en: "Ms. Anna: 'Welcome to the Young Writers Festival!'", pt: "Ms. Anna: 'Bem-vindos ao Young Writers Festival!'" },
    { img: IMG.SOPHIE, en: "Sophie: 'I was writing about a magical forest.'", pt: "Sophie: 'Eu estava escrevendo sobre uma floresta mágica.'" },
    { img: IMG.KENJI, en: "Kenji: 'My character was climbing a mountain when he met a wolf.'", pt: "Kenji: 'Meu personagem estava escalando uma montanha quando encontrou um lobo.'" },
    { img: IMG.MAYA, en: "Maya: 'The setting of my poem is old India.'", pt: "Maya: 'O cenário do meu poema é a Índia antiga.'" },
    { img: IMG.LUCAS, en: "Lucas: 'The plot has a big surprise!'", pt: "Lucas: 'O enredo tem uma grande surpresa!'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'Every writer has a unique voice.'", pt: "Ms. Anna: 'Cada escritor tem uma voz única.'" },
  ],
  DIALOG: [
    { who: "Ms. Anna", img: IMG.ANNA, en: "What were you doing when you got the idea?", pt: "O que você estava fazendo quando teve a ideia?" },
    { who: "Sophie", img: IMG.SOPHIE, en: "I was walking in the park when I saw a red bird.", pt: "Eu estava andando no parque quando vi um pássaro vermelho." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Wonderful! Who is your main character?", pt: "Maravilhoso! Quem é seu personagem principal?" },
    { who: "Sophie", img: IMG.SOPHIE, en: "A young girl who dreams of flying.", pt: "Uma menina que sonha em voar." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "And the setting?", pt: "E o cenário?" },
    { who: "Sophie", img: IMG.SOPHIE, en: "A hidden village in the mountains.", pt: "Uma vila escondida nas montanhas." },
  ],
  READING: {
    title: "The Storm at Night",
    img: IMG.CITY_COVER,
    parts: [
      { en: "It was raining hard when I opened the door.", pt: "Estava chovendo forte quando abri a porta.", highlight: ["was raining", "opened"] },
      { en: "The wind was howling and the trees were dancing.", pt: "O vento uivava e as árvores dançavam.", highlight: ["was howling", "were dancing"] },
      { en: "Suddenly, a small dog appeared at my feet.", pt: "De repente, um cãozinho apareceu aos meus pés.", highlight: ["appeared"] },
      { en: "While I was drying him, he looked into my eyes.", pt: "Enquanto eu o secava, ele olhou nos meus olhos.", highlight: ["was drying", "looked"] },
      { en: "That night, I learned that stories can begin anywhere.", pt: "Naquela noite, aprendi que histórias podem começar em qualquer lugar.", highlight: ["learned"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ when the phone rang. (read)", answer: "was reading", hint: "Ação em progresso interrompida = Past Continuous.", options: ["was reading", "read", "reading"], explain: "'Was reading' descreve ação longa; 'rang' é a ação curta." },
    { prompt: "They ______ in the park when it started to rain. (walk)", answer: "were walking", hint: "'They' + Past Continuous = WERE + verb-ING.", options: ["were walking", "was walking", "walked"] },
    { prompt: "While she ______ dinner, the doorbell rang. (cook)", answer: "was cooking", hint: "'While + Past Continuous'.", options: ["was cooking", "cooked", "cook"] },
    { prompt: "The character ______ through the forest. (walk)", answer: "was walking", hint: "Descrição do cenário → Past Continuous.", options: ["was walking", "walked", "walks"] },
    { prompt: "Suddenly, a wolf ______. (appear)", answer: "appeared", hint: "Ação curta que interrompe = Simple Past.", options: ["appeared", "was appearing", "appear"] },
    { prompt: "The novel ______ very exciting.", answer: "was", hint: "Descrição = Past Simple do TO BE.", options: ["was", "were", "is"] },
    { prompt: "'Plot' significa:", answer: "Enredo", hint: "A sequência de eventos.", options: ["Enredo", "Personagem", "Cenário"] },
  ],
  QUIZ: [
    { q: "'I ___ TV when he arrived.'", options: [{ text: "watch" }, { text: "was watching", correct: true, explain: "Ação em progresso interrompida por ação curta." }, { text: "watched" }] },
    { q: "'The plot' significa:", options: [{ text: "O cenário" }, { text: "O enredo", correct: true }, { text: "O personagem" }] },
    { q: "Fórmula do Past Continuous:", options: [{ text: "was/were + verb-ing", correct: true }, { text: "have + past participle" }, { text: "will + verb" }] },
    { q: "'While I was cooking, the phone ___.'", options: [{ text: "rang", correct: true, explain: "Ação curta que interrompe = Simple Past." }, { text: "was ringing" }, { text: "rings" }] },
    { q: "'Setting' é:", options: [{ text: "Ambiente/cenário da história", correct: true }, { text: "Título" }, { text: "Personagem" }] },
    { q: "'They were playing when it started to rain.' — quem jogou primeiro?", options: [{ text: "Eles estavam jogando quando começou a chover", correct: true }, { text: "Choveu antes deles jogarem" }, { text: "Não é possível saber" }] },
    { q: "'Character' significa:", options: [{ text: "Cenário" }, { text: "Personagem", correct: true }, { text: "Título" }] },
    { q: "Passado de 'read' (livro):", options: [{ text: "readed" }, { text: "read (pronúncia 'red')", correct: true, explain: "'read' é irregular: escrita igual, pronúncia diferente." }, { text: "was read" }] },
  ],
  REAL_LIFE: [
    { situation: "📖 Descrevendo o que fazia.", answer: "I was reading a book when my friend called." },
    { situation: "🌳 Descrevendo o cenário.", answer: "The setting was a small village in the mountains." },
    { situation: "🎭 Falando do personagem.", answer: "The main character is a brave young girl." },
    { situation: "⚔️ Sobre conflito.", answer: "The conflict is between the hero and the dragon." },
    { situation: "✍️ Começando um conto.", answer: "It was raining hard when the story began." },
  ],
  GRAMMAR: {
    focus: "Past Continuous & Simple Past × Past Continuous",
    why:
      "Past Continuous = ação LONGA em progresso no passado (was/were + verbo-ING). Simple Past = ação curta e completa. Juntos: a AÇÃO LONGA aparece em Past Continuous e é INTERROMPIDA por AÇÃO CURTA em Simple Past. Marcadores: WHILE (para a longa), WHEN (para a curta).",
    examples: [
      { en: "I WAS READING when the phone RANG.", pt: "Eu estava lendo quando o telefone tocou." },
      { en: "While she WAS COOKING, we WATCHED TV.", pt: "Enquanto ela cozinhava, a gente assistia TV." },
      { en: "It WAS RAINING all afternoon yesterday.", pt: "Choveu (estava chovendo) a tarde toda ontem." },
      { en: "They WERE PLAYING when it STARTED to rain.", pt: "Estavam jogando quando começou a chover." },
    ],
    errors: [
      { wrong: "I was read when he called.", right: "I WAS READING when he called.", why: "Past Continuous = was/were + verb-ING (não infinitivo)." },
      { wrong: "While I was cooking, I was hearing a noise.", right: "While I was cooking, I HEARD a noise.", why: "A interrupção é curta → Simple Past." },
      { wrong: "They was playing football.", right: "They WERE playing football.", why: "'They' = WERE, não WAS." },
      { wrong: "I readed a book yesterday.", right: "I READ a book yesterday.", why: "'read' é irregular (escreve igual)." },
    ],
  },
  SONG: {
    title: "Story in the Rain",
    verses: [
      { en: "It was raining, I was reading,", pt: "Chovia, eu lia,", emoji: "🌧️" },
      { en: "When the story I was needing,", pt: "Quando a história que eu precisava,", emoji: "📖" },
      { en: "Appeared right at my door,", pt: "Apareceu bem na minha porta,", emoji: "🚪" },
      { en: "A tale to love and to explore.", pt: "Um conto pra amar e explorar.", emoji: "✨" },
    ],
  },
  HUNTER: {
    intro: "Past Continuous ou Simple Past?",
    rounds: [
      { promptEn: "I ___ TV when he arrived.", promptPt: "I ___ TV when he arrived.", targetLabel: "was watching", objects: [
        { id: "a", label: "watched" }, { id: "b", label: "was watching", isTarget: true }, { id: "c", label: "watch" },
      ]},
      { promptEn: "While I was reading, the phone ___.", promptPt: "While I was reading, the phone ___.", targetLabel: "rang", objects: [
        { id: "a", label: "was ringing" }, { id: "b", label: "rang", isTarget: true }, { id: "c", label: "rings" },
      ]},
      { promptEn: "They ___ football at 5 pm yesterday.", promptPt: "They ___ football at 5 pm yesterday.", targetLabel: "were playing", objects: [
        { id: "a", label: "were playing", isTarget: true }, { id: "b", label: "was playing" }, { id: "c", label: "played" },
      ]},
      { promptEn: "'Plot' =", promptPt: "'Plot' =", targetLabel: "Enredo", objects: [
        { id: "a", label: "Enredo", isTarget: true }, { id: "b", label: "Personagem" }, { id: "c", label: "Título" },
      ]},
      { promptEn: "Suddenly, a wolf ___.", promptPt: "Suddenly, a wolf ___.", targetLabel: "appeared", objects: [
        { id: "a", label: "was appearing" }, { id: "b", label: "appeared", isTarget: true }, { id: "c", label: "appears" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Termo literário → tradução:",
    pairs: [
      { id: "a", en: "Character 🎭", pt: "Personagem", img: IMG.LUCAS },
      { id: "b", en: "Plot 📈", pt: "Enredo", img: IMG.CLASS },
      { id: "c", en: "Setting 🏞️", pt: "Cenário", img: IMG.PARK },
      { id: "d", en: "Conflict ⚔️", pt: "Conflito", img: IMG.MAYA },
    ],
  },
  BOOK: {
    title: "My Short Story",
    intro: "Sua história — página por página.",
    pages: [
      { en: "Page 1 — It was ___ o'clock. I was ___.", pt: "Pág. 1 — Eram ___ horas. Eu estava ___.", img: IMG.ROOM, badge: "🕰️" },
      { en: "Page 2 — Suddenly, ___ appeared.", pt: "Pág. 2 — De repente, ___ apareceu.", img: IMG.KENJI, badge: "⚡" },
      { en: "Page 3 — The character was ___.", pt: "Pág. 3 — O personagem estava ___.", img: IMG.LUCAS, badge: "🎭" },
      { en: "Page 4 — In the end, ___.", pt: "Pág. 4 — No fim, ___.", img: IMG.LIBRARY, badge: "📖" },
      { en: "The End — Every story matters.", pt: "Fim — Toda história importa.", img: IMG.SCHOOL, badge: "✨" },
    ],
  },
  CULTURE: {
    title: "Famous English Writers 📚",
    emoji: "✒️",
    paragraphs: [
      { en: "William Shakespeare wrote 37 plays that changed English forever.", pt: "Shakespeare escreveu 37 peças que mudaram o inglês pra sempre." },
      { en: "J.K. Rowling wrote Harry Potter — a global phenomenon translated into 80+ languages.", pt: "J.K. Rowling escreveu Harry Potter — fenômeno global traduzido em 80+ línguas." },
      { pt: "Escritores criam mundos e nos ensinam a olhar o nosso com mais atenção." },
    ],
  },
};

export default lesson;
