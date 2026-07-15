// Dados da aula-piloto "Numbers 1–10" da Numbers Academy.
// Cada aula segue os 16 momentos: intro, objetivo, aquecimento, explicação,
// pronúncia, vocabulário em contexto, listening, speaking, reading, writing,
// situação real, mini game, desafio, curiosidade, quiz e missão final.

export type NumberItem = {
  n: number;
  en: string;      // "one"
  pt: string;      // "um"
  ipa: string;     // "/wʌn/"
  syllables: string[]; // ["one"] ou ["se","ven"]
};

export const NUMBERS_1_10: NumberItem[] = [
  { n: 1,  en: "one",   pt: "um",    ipa: "/wʌn/",   syllables: ["one"] },
  { n: 2,  en: "two",   pt: "dois",  ipa: "/tuː/",   syllables: ["two"] },
  { n: 3,  en: "three", pt: "três",  ipa: "/θriː/",  syllables: ["three"] },
  { n: 4,  en: "four",  pt: "quatro",ipa: "/fɔːr/",  syllables: ["four"] },
  { n: 5,  en: "five",  pt: "cinco", ipa: "/faɪv/",  syllables: ["five"] },
  { n: 6,  en: "six",   pt: "seis",  ipa: "/sɪks/",  syllables: ["six"] },
  { n: 7,  en: "seven", pt: "sete",  ipa: "/ˈsɛv.ən/", syllables: ["se", "ven"] },
  { n: 8,  en: "eight", pt: "oito",  ipa: "/eɪt/",   syllables: ["eight"] },
  { n: 9,  en: "nine",  pt: "nove",  ipa: "/naɪn/",  syllables: ["nine"] },
  { n: 10, en: "ten",   pt: "dez",   ipa: "/tɛn/",   syllables: ["ten"] },
];

export const NUMBERS_1_10_LESSON = {
  slug: "1-10",
  title: "Numbers 1–10",
  descricao: "Contar de 1 a 10 em inglês — ouvir, falar, ler e escrever.",
  intro: {
    scene: "Lily e Ben chegam a uma feira colorida cheia de frutas.",
    dialogo: [
      { who: "Vendedor", en: "Hello! How many apples do you want?", pt: "Olá! Quantas maçãs você quer?" },
      { who: "Lily",     en: "Hmm... I don't know the numbers yet!", pt: "Hmm... eu ainda não sei os números!" },
      { who: "Ben",      en: "Let's learn them together!", pt: "Vamos aprender juntos!" },
    ],
  },
  objectives: [
    "Reconhecer os números de 1 a 10 em inglês.",
    "Contar objetos em voz alta.",
    "Perguntar e responder quantidades.",
    "Escrever números por extenso.",
  ],
  explanation: {
    teacher: "Emily",
    text: "Usamos os números para contar pessoas, brinquedos, animais, dinheiro, idade e muito mais.",
    examples: [
      { emoji: "👦", en: "One boy",    pt: "Um menino" },
      { emoji: "🐶", en: "Two dogs",   pt: "Dois cachorros" },
      { emoji: "🍌", en: "Three bananas", pt: "Três bananas" },
      { emoji: "🎈", en: "Four balloons", pt: "Quatro balões" },
      { emoji: "⭐", en: "Five stars", pt: "Cinco estrelas" },
    ],
  },
  vocabInContext: [
    { emoji: "📚", en: "Three books",   pt: "Três livros" },
    { emoji: "✏️", en: "Five pencils",  pt: "Cinco lápis" },
    { emoji: "🐱", en: "Two cats",      pt: "Dois gatos" },
    { emoji: "🎈", en: "Ten balloons",  pt: "Dez balões" },
  ],
  listening: [
    { audio: "I have four apples.",  correct: 4, options: [2, 3, 4, 5] },
    { audio: "I see seven stars.",   correct: 7, options: [5, 6, 7, 8] },
    { audio: "There are ten balloons.", correct: 10, options: [8, 9, 10, 6] },
  ],
  speaking: [
    { prompt: "How many pencils?", answerNumber: 5, answerEn: "Five pencils", answerPt: "Cinco lápis", emoji: "✏️" },
    { prompt: "How many apples?",  answerNumber: 3, answerEn: "Three apples", answerPt: "Três maçãs",  emoji: "🍎" },
    { prompt: "How many dogs?",    answerNumber: 2, answerEn: "Two dogs",     answerPt: "Dois cachorros", emoji: "🐶" },
  ],
  reading: {
    text: [
      { en: "Hello! My name is Tom.", pt: "Olá! Meu nome é Tom." },
      { en: "I have two sisters.",    pt: "Eu tenho duas irmãs." },
      { en: "I have one dog.",        pt: "Eu tenho um cachorro." },
      { en: "I am eight years old.",  pt: "Eu tenho oito anos." },
    ],
    questions: [
      { q: "How many sisters does Tom have?", qPt: "Quantas irmãs o Tom tem?", correct: 2, options: [1, 2, 3, 4] },
      { q: "How many dogs does Tom have?",    qPt: "Quantos cachorros o Tom tem?", correct: 1, options: [1, 2, 3, 0] },
      { q: "How old is Tom?",                 qPt: "Quantos anos o Tom tem?", correct: 8, options: [6, 7, 8, 9] },
    ],
  },
  writing: [
    { sentence: "I have ___ books.",   sentencePt: "Eu tenho ___ livros.",  emoji: "📚📚📚📚📚📚", correctEn: "six",   correctN: 6 },
    { sentence: "I see ___ stars.",    sentencePt: "Eu vejo ___ estrelas.", emoji: "⭐⭐⭐⭐",       correctEn: "four",  correctN: 4 },
    { sentence: "There are ___ cats.", sentencePt: "Há ___ gatos.",         emoji: "🐱🐱🐱🐱🐱🐱🐱", correctEn: "seven", correctN: 7 },
  ],
  realSituation: {
    place: "No supermercado",
    dialogo: [
      { who: "Caixa", en: "Good morning! How many bananas?", pt: "Bom dia! Quantas bananas?" },
      { who: "Você",  en: "Three bananas, please.",           pt: "Três bananas, por favor.", speak: true },
      { who: "Caixa", en: "And how many apples?",             pt: "E quantas maçãs?" },
      { who: "Você",  en: "Five apples, please.",             pt: "Cinco maçãs, por favor.", speak: true },
      { who: "Caixa", en: "Here you are. Thank you!",         pt: "Aqui está. Obrigado!" },
    ],
  },
  curiosity:
    "Nos países de língua inglesa, os números aparecem em placas, ônibus, telefones, endereços e preços. Saber contar de 1 a 10 já resolve muitas situações do dia a dia!",
  quiz: [
    { type: "listening", q: "Ouça e escolha:", audio: "eight", correct: 8, options: [6, 7, 8, 9] },
    { type: "reading",   q: "'I have nine pencils.' — quantos lápis?", qEn: "I have nine pencils.", correct: 9, options: [7, 8, 9, 10] },
    { type: "translation", q: "Como se diz '4' em inglês?", correctEn: "four", options: ["four", "five", "for", "fore"], optionsPt: ["quatro", "cinco", "por", "à frente"] },
    { type: "count",     q: "Conte os balões:", emoji: "🎈🎈🎈🎈🎈🎈🎈", correct: 7, options: [5, 6, 7, 8] },
  ],
  finalMission: {
    title: "Mercado Virtual",
    instruction: "Compre exatamente estes itens. Fale ou toque para contar.",
    shopping: [
      { emoji: "🍎", en: "apples",  pt: "maçãs",    quantity: 4 },
      { emoji: "🍌", en: "bananas", pt: "bananas",  quantity: 2 },
      { emoji: "🍊", en: "oranges", pt: "laranjas", quantity: 6 },
    ],
    badge: "🏆 Number Master",
  },
};
