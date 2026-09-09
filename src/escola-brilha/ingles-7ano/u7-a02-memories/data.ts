// Inglês 7º Ano — Unit 2 "Memories and Experiences 📸"
// Simple Past — regular & irregular verbs · Contar experiências
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u7-a02-memories",
  meta: {
    unitLabel: "Unit 2 · Lesson 1 — Memories and Experiences 📸",
    headerKicker: "SPEB 1.0 · English Academy — 7th Grade",
    coverKicker: "Vacations · Trips · Birthdays · Adventures",
    coverTitle: "Memories and Experiences 📸",
    coverSubtitle:
      "Os alunos da Academy compartilham lembranças de viagens e aniversários. Aprenda a contar histórias no passado com verbos regulares e irregulares.",
    storyTitle: "Share Your Best Memory",
    vocabularyTitle: "Trips & Celebrations",
    speakingTargets: [
      "Last summer I visited my grandparents.",
      "We went to the beach and swam in the sea.",
      "I ate delicious food on my birthday.",
      "She traveled to Japan two years ago.",
      "Did you have fun on your last vacation?",
      "Yes, I had a wonderful time.",
    ],
    listeningIntro: "Ouça Maya contar sobre a viagem dela pra Índia.",
    listeningQuestion:
      'Maya disse: "Last July, I visited my grandparents in Mumbai and we ate mango every day." O que ela FEZ?',
    listeningOptions: [
      "Visitou os avós e comeu manga",
      "Foi pra escola em Mumbai",
      "Estudou inglês em Londres",
    ],
    listeningCorrect: "Visitou os avós e comeu manga",
    listeningWrongHint: "'visited' e 'ate' são passado (visited = visitou, ate = comeu).",
    readingNarration:
      "Textos no passado geralmente têm marcadores de tempo: yesterday, last week, two years ago, in 2019. Verbos regulares levam -ed (visit → visited). Irregulares mudam (go → went, eat → ate, have → had).",
    grammarNarration:
      "Simple Past afirmativo: verbo regular + ED (walked, played, visited) ou verbo irregular (went, ate, had, saw, made). Negativo: DIDN'T + verbo no infinitivo (I didn't go). Pergunta: DID + sujeito + verbo (Did you go?). Repare: depois de DID/DIDN'T o verbo VOLTA ao infinitivo.",
    finalProjectIntro: "Vamos escrever seu álbum de lembranças. Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY MEMORY ALBUM — Hi! My name is ${name}. Last vacation was amazing. I traveled with my family to the beach. We stayed there for a week. Every morning we swam in the sea and ate fresh fish for lunch. On my birthday, my grandmother baked a chocolate cake and all my cousins sang for me. We took many photos and I made new friends. It was one of the best experiences of my life. I want to go back next year!`,
    finalProjectSectionTitle: "My Memory Album",
  },
  VOCAB: [
    { id: "vacation", en: "Vacation 🏖️", pt: "Férias", img: IMG.PARK },
    { id: "trip", en: "Trip ✈️", pt: "Viagem", img: IMG.AIRPORT },
    { id: "weekend", en: "Weekend 📅", pt: "Fim de semana", img: IMG.FRIENDS },
    { id: "adventure", en: "Adventure 🧗", pt: "Aventura", img: IMG.LUCAS },
    { id: "birthday", en: "Birthday 🎂", pt: "Aniversário", img: IMG.MAYA },
    { id: "celebration", en: "Celebration 🎉", pt: "Comemoração", img: IMG.SOPHIE },
    { id: "memories", en: "Memories 📸", pt: "Lembranças", img: IMG.FRIENDS },
    { id: "family", en: "Family 👨‍👩‍👧", pt: "Família", img: IMG.FRIENDS },
  ],
  STORY: [
    { img: IMG.ANNA, en: "Ms. Anna: 'Today, share the best memory of last year.'", pt: "Ms. Anna: 'Hoje, compartilhem a melhor lembrança do ano passado.'" },
    { img: IMG.KENJI, en: "Kenji: 'Last summer I visited Kyoto with my parents.'", pt: "Kenji: 'No verão passado visitei Kyoto com meus pais.'" },
    { img: IMG.MAYA, en: "Maya: 'I went to India and ate mango every day!'", pt: "Maya: 'Fui pra Índia e comi manga todo dia!'" },
    { img: IMG.SOPHIE, en: "Sophie: 'My family and I traveled to the Alps and skied.'", pt: "Sophie: 'Minha família e eu viajamos aos Alpes e esquiamos.'" },
    { img: IMG.LUCAS, en: "Lucas: 'On my birthday, my grandma made a huge cake.'", pt: "Lucas: 'No meu aniversário, minha vó fez um bolo enorme.'" },
    { img: IMG.FRIENDS, en: "Everyone had wonderful memories to share.", pt: "Todos tinham lembranças maravilhosas pra compartilhar." },
  ],
  DIALOG: [
    { who: "Ms. Anna", img: IMG.ANNA, en: "Where did you go last vacation, Sophie?", pt: "Aonde você foi nas últimas férias, Sophie?" },
    { who: "Sophie", img: IMG.SOPHIE, en: "I went to the Alps with my family.", pt: "Eu fui aos Alpes com minha família." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "What did you do there?", pt: "O que você fez lá?" },
    { who: "Sophie", img: IMG.SOPHIE, en: "We skied every day and ate cheese fondue.", pt: "Esquiamos todo dia e comemos fondue de queijo." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Did you have a good time?", pt: "Você se divertiu?" },
    { who: "Sophie", img: IMG.SOPHIE, en: "Yes, I had an amazing time. I took many photos.", pt: "Sim, foi incrível. Tirei muitas fotos." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Wonderful! Now write about it.", pt: "Maravilhoso! Agora escreva sobre isso." },
  ],
  READING: {
    title: "Maya's Trip to India",
    img: IMG.MAYA,
    parts: [
      { en: "Last July, my family and I traveled to Mumbai.", pt: "Em julho passado, minha família e eu viajamos pra Mumbai.", highlight: ["Last July", "traveled"] },
      { en: "We stayed at my grandparents' house for three weeks.", pt: "Ficamos na casa dos meus avós por três semanas.", highlight: ["stayed"] },
      { en: "Every morning we ate fresh fruits and drank chai tea.", pt: "Toda manhã comíamos frutas frescas e tomávamos chá chai.", highlight: ["ate", "drank"] },
      { en: "One day, my cousin took me to a beautiful temple.", pt: "Um dia, meu primo me levou a um templo lindo.", highlight: ["took"] },
      { en: "I felt so happy. It was a magical vacation.", pt: "Me senti muito feliz. Foram férias mágicas.", highlight: ["felt", "was"] },
    ],
  },
  WRITING: [
    { prompt: "Last year I ______ to the beach. (go)", answer: "went", hint: "'go' é irregular: passado = went.", options: ["went", "goed", "going"], explain: "GO é irregular. Passado: WENT." },
    { prompt: "She ______ pizza yesterday. (eat)", answer: "ate", hint: "'eat' é irregular: ate.", options: ["ate", "eated", "eat"] },
    { prompt: "We ______ football last weekend. (play)", answer: "played", hint: "Verbo regular ganha -ED.", options: ["played", "plaied", "play"] },
    { prompt: "I ______ my grandmother two months ago. (visit)", answer: "visited", hint: "Regular: visit + ed.", options: ["visited", "visit", "visiting"] },
    { prompt: "They ______ a great time on the trip. (have)", answer: "had", hint: "'have' irregular = had.", options: ["had", "haved", "have"] },
    { prompt: "______ you enjoy the party?", answer: "Did", hint: "Pergunta no passado começa com DID.", options: ["Did", "Do", "Does"] },
    { prompt: "I ______ go to school yesterday.", answer: "didn't", hint: "Negativa no passado: DIDN'T + verbo.", options: ["didn't", "don't", "no"] },
  ],
  QUIZ: [
    { q: "Passado de 'go':", options: [{ text: "goed" }, { text: "went", correct: true, explain: "GO é irregular." }, { text: "gone" }] },
    { q: "Passado de 'visit':", options: [{ text: "visit" }, { text: "visited", correct: true }, { text: "visitted" }] },
    { q: "Complete: We ___ pizza last night.", options: [{ text: "eat" }, { text: "ate", correct: true }, { text: "eated" }] },
    { q: "Complete: ___ you have fun yesterday?", options: [{ text: "Do" }, { text: "Did", correct: true, explain: "Pergunta no passado usa DID." }, { text: "Does" }] },
    { q: "Complete: I ___ go to the party.", options: [{ text: "don't" }, { text: "didn't", correct: true }, { text: "no went" }] },
    { q: "Passado de 'have':", options: [{ text: "haved" }, { text: "had", correct: true }, { text: "has" }] },
    { q: "'Two years ago' significa:", options: [{ text: "Daqui a dois anos" }, { text: "Dois anos atrás", correct: true }, { text: "Todo ano" }] },
    { q: "Complete: Sophie ___ to the Alps.", options: [{ text: "goed" }, { text: "went", correct: true }, { text: "go" }] },
  ],
  REAL_LIFE: [
    { situation: "🏖️ Falando das últimas férias.", answer: "Last vacation I went to the beach with my family." },
    { situation: "🎂 Descrevendo seu último aniversário.", answer: "On my birthday I ate a big cake and got nice presents." },
    { situation: "✈️ Contando uma viagem.", answer: "We traveled to Rio de Janeiro and visited the beach." },
    { situation: "📸 Falando de uma lembrança feliz.", answer: "I had a wonderful time with my grandparents last summer." },
    { situation: "❓ Perguntando sobre férias de um amigo.", answer: "Did you have fun on your last vacation?" },
  ],
  GRAMMAR: {
    focus: "Simple Past — Regular & Irregular Verbs",
    why:
      "Usamos o Simple Past pra relatar ações COMPLETADAS no passado — ontem, semana passada, em 2020. Regulares recebem -ED (walk → walked). Irregulares não seguem regra e precisam ser MEMORIZADOS (go → went, eat → ate, have → had, see → saw, make → made). Depois de DID/DIDN'T o verbo volta ao infinitivo.",
    examples: [
      { en: "I VISITED my grandma last Sunday.", pt: "Visitei minha vó no domingo passado." },
      { en: "She WENT to Paris two years ago.", pt: "Ela foi a Paris dois anos atrás." },
      { en: "We DIDN'T go to school yesterday.", pt: "Não fomos à escola ontem." },
      { en: "DID you eat pizza last night?", pt: "Você comeu pizza ontem à noite?" },
    ],
    errors: [
      { wrong: "I goed to the beach.", right: "I WENT to the beach.", why: "'go' é irregular — não leva -ED." },
      { wrong: "She didn't went home.", right: "She DIDN'T GO home.", why: "Depois de DIDN'T o verbo volta ao infinitivo." },
      { wrong: "Did you ate pizza?", right: "DID you EAT pizza?", why: "Depois de DID, verbo no infinitivo." },
      { wrong: "I eated apples yesterday.", right: "I ATE apples yesterday.", why: "'eat' é irregular." },
    ],
  },
  SONG: {
    title: "Yesterday I Went",
    verses: [
      { en: "Yesterday I went, yesterday I saw,", pt: "Ontem eu fui, ontem eu vi,", emoji: "📸" },
      { en: "Yesterday I ate, and asked for more.", pt: "Ontem eu comi e pedi mais.", emoji: "🎂" },
      { en: "Last summer I traveled far away,", pt: "No verão passado viajei pra longe,", emoji: "✈️" },
      { en: "I had the best time, day by day.", pt: "Foi o melhor tempo, dia após dia.", emoji: "🌞" },
    ],
  },
  HUNTER: {
    intro: "Escolha o passado correto!",
    rounds: [
      { promptEn: "Passado de 'go':", promptPt: "Passado de 'go':", targetLabel: "went", objects: [
        { id: "a", label: "goed", img: "" },
        { id: "b", label: "went", img: "", isTarget: true },
        { id: "c", label: "gone", img: "" },
      ]},
      { promptEn: "Passado de 'eat':", promptPt: "Passado de 'eat':", targetLabel: "ate", objects: [
        { id: "a", label: "eated", img: "" },
        { id: "b", label: "eat", img: "" },
        { id: "c", label: "ate", img: "", isTarget: true },
      ]},
      { promptEn: "Passado de 'play':", promptPt: "Passado de 'play':", targetLabel: "played", objects: [
        { id: "a", label: "played", img: "", isTarget: true },
        { id: "b", label: "plaied", img: "" },
        { id: "c", label: "playd", img: "" },
      ]},
      { promptEn: "Passado de 'have':", promptPt: "Passado de 'have':", targetLabel: "had", objects: [
        { id: "a", label: "haved", img: "" },
        { id: "b", label: "had", img: "", isTarget: true },
        { id: "c", label: "has", img: "" },
      ]},
      { promptEn: "Passado de 'see':", promptPt: "Passado de 'see':", targetLabel: "saw", objects: [
        { id: "a", label: "seed", img: "" },
        { id: "b", label: "saw", img: "", isTarget: true },
        { id: "c", label: "seen", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares presente → passado!",
    pairs: [
      { id: "a", en: "go → went", pt: "ir → foi", img: IMG.AIRPORT },
      { id: "b", en: "eat → ate", pt: "comer → comeu", img: IMG.MAYA },
      { id: "c", en: "have → had", pt: "ter → teve", img: IMG.LUCAS },
      { id: "d", en: "see → saw", pt: "ver → viu", img: IMG.SOPHIE },
    ],
  },
  BOOK: {
    title: "My Memory Album",
    intro: "Um álbum das suas melhores lembranças.",
    pages: [
      { en: "Page 1 — Last vacation I went to ___.", pt: "Pág. 1 — Nas últimas férias fui pra ___.", img: IMG.AIRPORT, badge: "✈️" },
      { en: "Page 2 — We ate ___ every day.", pt: "Pág. 2 — Comíamos ___ todo dia.", img: IMG.MAYA, badge: "🍽️" },
      { en: "Page 3 — On my birthday I got ___.", pt: "Pág. 3 — No meu aniversário ganhei ___.", img: IMG.LUCAS, badge: "🎂" },
      { en: "Page 4 — My best memory: ___.", pt: "Pág. 4 — Minha melhor lembrança: ___.", img: IMG.FRIENDS, badge: "📸" },
      { en: "The End — What a great year!", pt: "Fim — Que ano incrível!", img: IMG.SCHOOL, badge: "🌟" },
    ],
  },
  CULTURE: {
    title: "Photo Albums Around the World 📸",
    emoji: "🖼️",
    paragraphs: [
      { en: "In many English-speaking countries, families keep photo albums of every year — a tradition since the 1800s.", pt: "Em muitos países de língua inglesa, famílias guardam álbuns de fotos de cada ano — tradição desde 1800." },
      { en: "In Japan, people often bow when they take group photos. In Brazil, they usually smile big and say 'X'.", pt: "No Japão, as pessoas fazem reverência em fotos de grupo. No Brasil, sorriem grande e dizem 'X'." },
      { pt: "Fotos são cápsulas do tempo — em qualquer idioma, ajudam a lembrar de bons momentos." },
    ],
  },
};

export default lesson;
