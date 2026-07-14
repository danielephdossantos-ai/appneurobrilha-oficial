// Inglês 7º Ano — Unit 4 "Culture Around the World 🌍"
// Comparative & Superlative Adjectives · Culturas e tradições
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u7-a04-culture",
  meta: {
    unitLabel: "Unit 4 · Lesson 1 — Culture Around the World 🌍",
    headerKicker: "SPEB 1.0 · English Academy — 7th Grade",
    coverKicker: "Festivals · Traditions · Food · Music",
    coverTitle: "Culture Around the World 🌍",
    coverSubtitle:
      "A Academy está organizando uma feira cultural. Compare países e descubra tradições com adjetivos comparativos e superlativos.",
    storyTitle: "World Culture Fair",
    vocabularyTitle: "Festivals & Traditions",
    speakingTargets: [
      "Brazil is bigger than France.",
      "Japan is more traditional than the USA.",
      "The Amazon is the largest forest in the world.",
      "Diwali is one of the most beautiful festivals in India.",
      "Carnaval is louder than Christmas.",
      "Which country is the most interesting for you?",
    ],
    listeningIntro: "Ouça a apresentação de Lucas comparando o Brasil e a França.",
    listeningQuestion:
      'Lucas: "Brazil is bigger than France, but France has more castles." O que é MAIOR?',
    listeningOptions: [
      "A França",
      "O Brasil",
      "Os dois são iguais",
    ],
    listeningCorrect: "O Brasil",
    listeningWrongHint: "'bigger than France' = maior QUE a França → Brasil é maior.",
    readingNarration:
      "Textos culturais comparam lugares e tradições. Comparativos: adjetivo curto + ER + THAN (bigger than); adjetivo longo: MORE + adjetivo + THAN (more beautiful than). Superlativos: THE + adjetivo + EST (the biggest) ou THE MOST + adjetivo (the most beautiful).",
    grammarNarration:
      "Comparativo (compara 2): adjetivo CURTO + ER + THAN (small → smaller than). Adjetivo LONGO (2+ sílabas): MORE + adj + THAN (interesting → more interesting than). Superlativo (compara 3+): THE + adj + EST (the smallest) ou THE MOST + adj (the most interesting). Irregulares: good → better → the best; bad → worse → the worst.",
    finalProjectIntro: "Vamos escrever sua apresentação cultural. Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `WORLD CULTURE FAIR — Hi! I'm ${name}. Today I want to compare three amazing cultures. Brazil is bigger than Japan, but Japan is more traditional than most countries. India has the most colorful festival in the world — Diwali. France has the most famous museum, the Louvre. Each culture has something special. My favorite tradition is Carnaval because it's the loudest and happiest festival. Learning about other cultures makes us better citizens of the world!`,
    finalProjectSectionTitle: "World Culture Fair",
  },
  VOCAB: [
    { id: "festival", en: "Festival 🎉", pt: "Festival", img: IMG.SOPHIE },
    { id: "tradition", en: "Tradition 🏛️", pt: "Tradição", img: IMG.MUSEUM },
    { id: "holiday", en: "Holiday 🌞", pt: "Feriado", img: IMG.PARK },
    { id: "food", en: "Food 🍜", pt: "Comida", img: IMG.RESTAURANT },
    { id: "music", en: "Music 🎵", pt: "Música", img: IMG.LUCAS },
    { id: "dance", en: "Dance 💃", pt: "Dança", img: IMG.MAYA },
    { id: "culture", en: "Culture 🌍", pt: "Cultura", img: IMG.CITY_COVER },
    { id: "customs", en: "Customs 🎎", pt: "Costumes", img: IMG.KENJI },
  ],
  STORY: [
    { img: IMG.ANNA, en: "Ms. Anna: 'This week, each student presents their country.'", pt: "Ms. Anna: 'Esta semana, cada aluno apresenta seu país.'" },
    { img: IMG.LUCAS, en: "Lucas: 'Brazil is bigger than France. Carnaval is our biggest festival!'", pt: "Lucas: 'O Brasil é maior que a França. Carnaval é nosso maior festival!'" },
    { img: IMG.MAYA, en: "Maya: 'India has the most colorful festival — Diwali!'", pt: "Maya: 'A Índia tem o festival mais colorido — Diwali!'" },
    { img: IMG.KENJI, en: "Kenji: 'Japan is more traditional. Sushi is our most famous food.'", pt: "Kenji: 'O Japão é mais tradicional. Sushi é nossa comida mais famosa.'" },
    { img: IMG.SOPHIE, en: "Sophie: 'France has the best cheese and the tallest Eiffel Tower!'", pt: "Sophie: 'A França tem o melhor queijo e a Torre Eiffel mais alta!'" },
    { img: IMG.FRIENDS, en: "The World Culture Fair was a huge success.", pt: "A Feira Cultural foi um grande sucesso." },
  ],
  DIALOG: [
    { who: "Ms. Anna", img: IMG.ANNA, en: "Which country is bigger, Brazil or France?", pt: "Qual país é maior, Brasil ou França?" },
    { who: "Lucas", img: IMG.LUCAS, en: "Brazil is bigger than France.", pt: "O Brasil é maior que a França." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Which festival is the most famous in India?", pt: "Qual festival é o mais famoso na Índia?" },
    { who: "Maya", img: IMG.MAYA, en: "Diwali is the most famous festival in India.", pt: "Diwali é o festival mais famoso da Índia." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "What's the best food in Japan?", pt: "Qual é a melhor comida do Japão?" },
    { who: "Kenji", img: IMG.KENJI, en: "Sushi is the best, but ramen is also amazing!", pt: "Sushi é o melhor, mas ramen também é incrível!" },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Excellent presentations, class!", pt: "Excelentes apresentações, turma!" },
  ],
  READING: {
    title: "Festivals Around the World",
    img: IMG.PARK,
    parts: [
      { en: "Every country has its own special festivals and traditions.", pt: "Cada país tem seus festivais e tradições especiais.", highlight: ["festivals", "traditions"] },
      { en: "Carnaval in Brazil is one of the biggest street parties in the world.", pt: "Carnaval no Brasil é uma das maiores festas de rua do mundo.", highlight: ["biggest"] },
      { en: "Diwali in India is the most colorful festival — the festival of lights.", pt: "Diwali na Índia é o festival mais colorido — o festival das luzes.", highlight: ["most colorful"] },
      { en: "The Cherry Blossom Festival in Japan is more peaceful than most parties.", pt: "O Festival da Flor de Cerejeira no Japão é mais tranquilo que a maioria das festas.", highlight: ["more peaceful"] },
      { en: "Culture makes the world bigger, richer and more beautiful.", pt: "A cultura faz o mundo maior, mais rico e mais bonito.", highlight: ["bigger", "richer"] },
    ],
  },
  WRITING: [
    { prompt: "Brazil is ______ than France. (big)", answer: "bigger", hint: "Adjetivo curto (1 sílaba) + ER.", options: ["bigger", "more big", "biggest"], explain: "Adjetivo curto: big + er = bigger." },
    { prompt: "Diwali is the ______ festival in India. (colorful)", answer: "most colorful", hint: "Adjetivo longo → THE MOST + adj.", options: ["most colorful", "colorfullest", "more colorful"] },
    { prompt: "The Amazon is ______ river in South America. (long)", answer: "the longest", hint: "Superlativo curto: THE + adj + EST.", options: ["the longest", "the most long", "longer"] },
    { prompt: "Sushi is ______ than pizza for Kenji. (delicious — longo)", answer: "more delicious", hint: "Adjetivo longo: MORE + adj + THAN.", options: ["more delicious", "deliciouser", "most delicious"] },
    { prompt: "Health is ______ than money. (irregular: good)", answer: "better", hint: "'good' → better → best.", options: ["better", "gooder", "more good"] },
    { prompt: "This is the ______ day of my life! (irregular)", answer: "best", hint: "'good' superlativo = the best.", options: ["best", "goodest", "most good"] },
  ],
  QUIZ: [
    { q: "Comparativo de 'big':", options: [{ text: "more big" }, { text: "bigger", correct: true }, { text: "biggest" }] },
    { q: "Superlativo de 'small':", options: [{ text: "the smallest", correct: true }, { text: "the most small" }, { text: "smaller" }] },
    { q: "Comparativo de 'interesting':", options: [{ text: "interestinger" }, { text: "more interesting", correct: true, explain: "Adjetivo longo → MORE + adj." }, { text: "interestingest" }] },
    { q: "Superlativo de 'beautiful':", options: [{ text: "the beautifullest" }, { text: "the most beautiful", correct: true }, { text: "more beautiful" }] },
    { q: "Comparativo de 'good':", options: [{ text: "gooder" }, { text: "better", correct: true }, { text: "best" }] },
    { q: "Superlativo de 'bad':", options: [{ text: "the worst", correct: true, explain: "Irregular: bad → worse → worst." }, { text: "the baddest" }, { text: "worse" }] },
    { q: "'Diwali is the most colorful' significa:", options: [{ text: "É colorido" }, { text: "É o MAIS colorido", correct: true }, { text: "É menos colorido" }] },
    { q: "Complete: Brazil ___ than Portugal.", options: [{ text: "is bigger", correct: true }, { text: "biggest" }, { text: "is the biggest" }] },
  ],
  REAL_LIFE: [
    { situation: "🌍 Comparando países.", answer: "Brazil is bigger than France, but France is more famous for wine." },
    { situation: "🎉 Falando do maior festival do seu país.", answer: "Carnaval is the biggest festival in Brazil." },
    { situation: "🍜 Comparando comidas.", answer: "Sushi is more delicious than fast food for me." },
    { situation: "🏛️ Descrevendo uma tradição.", answer: "The Cherry Blossom Festival in Japan is the most peaceful." },
    { situation: "💃 Falando da sua dança preferida.", answer: "Samba is the happiest dance in the world." },
  ],
  GRAMMAR: {
    focus: "Comparative & Superlative Adjectives",
    why:
      "Comparamos coisas o tempo todo — cidades, pessoas, comidas. A regra depende do TAMANHO do adjetivo: curto (1 sílaba) ganha ER/EST; longo (2+ sílabas) usa MORE/THE MOST. Alguns são irregulares (good → better → best; bad → worse → worst) e precisam ser memorizados.",
    examples: [
      { en: "Brazil is BIGGER THAN France.", pt: "Brasil é maior que a França." },
      { en: "The Amazon is THE LONGEST river in the Americas.", pt: "O Amazonas é o maior rio das Américas." },
      { en: "This book is MORE INTERESTING THAN that one.", pt: "Este livro é mais interessante que aquele." },
      { en: "She's THE MOST TALENTED student in the class.", pt: "Ela é a aluna mais talentosa da turma." },
      { en: "Health is BETTER THAN money. It's THE BEST thing.", pt: "Saúde é melhor que dinheiro. É a melhor coisa." },
    ],
    errors: [
      { wrong: "Brazil is more big than France.", right: "Brazil is BIGGER than France.", why: "Adjetivo curto usa -ER, não 'more'." },
      { wrong: "She is the interestingest.", right: "She is THE MOST INTERESTING.", why: "Adjetivo longo usa THE MOST + adj." },
      { wrong: "This is more good.", right: "This is BETTER.", why: "'good' é irregular." },
      { wrong: "Kyoto is bigger that Rio.", right: "Kyoto is bigger THAN Rio.", why: "Comparativo pede 'than', não 'that'." },
    ],
  },
  SONG: {
    title: "Bigger, Better, Best",
    verses: [
      { en: "Brazil is bigger, Japan is older,", pt: "Brasil é maior, Japão é mais antigo,", emoji: "🌍" },
      { en: "France is famous, India is bolder.", pt: "França é famosa, Índia é mais ousada.", emoji: "🎨" },
      { en: "The world is wide, the world is one,", pt: "O mundo é vasto, o mundo é um,", emoji: "🤝" },
      { en: "Learn each culture — have some fun!", pt: "Aprenda cada cultura — se divirta!", emoji: "🎉" },
    ],
  },
  HUNTER: {
    intro: "Comparativo ou superlativo? Escolhe a forma certa!",
    rounds: [
      { promptEn: "Comparativo de 'big'", promptPt: "Comparativo de 'big'", targetLabel: "bigger", objects: [
        { id: "a", label: "more big", img: "" },
        { id: "b", label: "bigger", img: "", isTarget: true },
        { id: "c", label: "biggest", img: "" },
      ]},
      { promptEn: "Superlativo de 'beautiful'", promptPt: "Superlativo de 'beautiful'", targetLabel: "the most beautiful", objects: [
        { id: "a", label: "beautifullest", img: "" },
        { id: "b", label: "more beautiful", img: "" },
        { id: "c", label: "the most beautiful", img: "", isTarget: true },
      ]},
      { promptEn: "Comparativo de 'good'", promptPt: "Comparativo de 'good'", targetLabel: "better", objects: [
        { id: "a", label: "gooder", img: "" },
        { id: "b", label: "better", img: "", isTarget: true },
        { id: "c", label: "best", img: "" },
      ]},
      { promptEn: "Superlativo de 'bad'", promptPt: "Superlativo de 'bad'", targetLabel: "the worst", objects: [
        { id: "a", label: "the baddest", img: "" },
        { id: "b", label: "the worst", img: "", isTarget: true },
        { id: "c", label: "worse", img: "" },
      ]},
      { promptEn: "Comparativo de 'interesting'", promptPt: "Comparativo de 'interesting'", targetLabel: "more interesting", objects: [
        { id: "a", label: "interestinger", img: "" },
        { id: "b", label: "more interesting", img: "", isTarget: true },
        { id: "c", label: "most interesting", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares país → tradição famosa!",
    pairs: [
      { id: "a", en: "Brazil 🇧🇷", pt: "Carnaval", img: IMG.LUCAS },
      { id: "b", en: "India 🇮🇳", pt: "Diwali", img: IMG.MAYA },
      { id: "c", en: "Japan 🇯🇵", pt: "Cherry Blossom", img: IMG.KENJI },
      { id: "d", en: "France 🇫🇷", pt: "Bastille Day", img: IMG.SOPHIE },
    ],
  },
  CULTURE: {
    title: "Festivals from Every Continent 🎉",
    emoji: "🌏",
    paragraphs: [
      { en: "Diwali (India) uses lights and fireworks. Carnaval (Brazil) uses music and dance. Bastille Day (France) uses fireworks and parades.", pt: "Diwali (Índia) usa luzes e fogos. Carnaval (Brasil) usa música e dança. Dia da Bastilha (França) usa fogos e desfiles." },
      { en: "Every culture shows joy in different ways — but joy is the same everywhere.", pt: "Cada cultura mostra alegria de um jeito — mas alegria é igual em todo lugar." },
      { pt: "Respeitar culturas diferentes é uma habilidade tão importante quanto falar inglês." },
    ],
  },
};

export default lesson;
