// Inglês 9º Ano — Unit 6 "Entrepreneurship and Leadership 💼"
// Revisão completa + comunicação formal
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u9-a06-entrepreneurship",
  meta: {
    unitLabel: "Unit 6 · Lesson 6 — Entrepreneurship and Leadership 💼",
    headerKicker: "SPEB 1.0 · English Academy — 9th Grade",
    coverKicker: "Business · Teamwork · Innovation · Leadership",
    coverTitle: "Entrepreneurship and Leadership 💼",
    coverSubtitle:
      "Aprenda a apresentar ideias, negociar e liderar equipes em inglês formal.",
    storyTitle: "Young Entrepreneurs Challenge",
    vocabularyTitle: "Business & Leadership",
    speakingTargets: [
      "Our team is developing a new project.",
      "The budget is limited, but the innovation is high.",
      "We would like to introduce our product.",
      "Could you please review our marketing plan?",
      "Leadership is about serving your team.",
      "The customer is at the center of our business.",
    ],
    listeningIntro: "Ouça Ms. Anna abrir o Young Entrepreneurs Challenge.",
    listeningQuestion:
      "Ms. Anna disse: 'We would like to hear your business proposals.' O tom é:",
    listeningOptions: [
      "Informal e casual",
      "Formal e educado",
      "Ríspido e imperativo",
    ],
    listeningCorrect: "Formal e educado",
    listeningWrongHint: "'We would like to' = 'Gostaríamos de' — expressão formal e educada.",
    readingNarration:
      "Empreender é criar valor. Um bom líder ouve a equipe, entende o cliente, planeja o orçamento e apresenta a ideia com clareza. Comunicação formal em inglês abre portas.",
    grammarNarration:
      "Revisão completa. Foco em comunicação formal: WOULD LIKE (gostaria), COULD YOU (você poderia), MAY I (posso), I APOLOGIZE (peço desculpas), THANK YOU FOR (obrigado por), I LOOK FORWARD TO (aguardo). Esses são pilares do inglês profissional.",
    finalProjectIntro: "Escreva seu pitch de empreendedorismo. Digite seu nome:",
    finalProjectPhrase: (name: string) =>
      `YOUNG ENTREPRENEURS PITCH — Good afternoon, everyone. My name is ${name} and I would like to introduce our project: an app that connects students with volunteer opportunities in their city. Our team believes that innovation with purpose is the future of business. We have prepared a small budget, a friendly design and a clear marketing plan focused on schools. Could you please give us five minutes of your attention? Leadership, teamwork and respect for the customer are our core values. Thank you for listening — we look forward to your questions.`,
    finalProjectSectionTitle: "My Young Entrepreneurs Pitch",
  },
  VOCAB: [
    { id: "business", en: "Business 💼", pt: "Negócio", img: IMG.SHOPPING_MALL },
    { id: "leadership", en: "Leadership 👑", pt: "Liderança", img: IMG.ANNA },
    { id: "teamwork", en: "Teamwork 🤝", pt: "Trabalho em equipe", img: IMG.FRIENDS },
    { id: "innovation", en: "Innovation 💡", pt: "Inovação", img: IMG.KENJI },
    { id: "project", en: "Project 📋", pt: "Projeto", img: IMG.CLASS },
    { id: "budget", en: "Budget 💰", pt: "Orçamento", img: IMG.LUCAS },
    { id: "marketing", en: "Marketing 📢", pt: "Marketing", img: IMG.SOPHIE },
    { id: "customer", en: "Customer 🛍️", pt: "Cliente", img: IMG.MAYA },
    { id: "pitch", en: "Pitch 🎤", pt: "Apresentação de ideia", img: IMG.SCHOOL },
    { id: "startup", en: "Startup 🚀", pt: "Startup", img: IMG.CITY_COVER },
  ],
  STORY: [
    { img: IMG.SCHOOL, en: "The Young Entrepreneurs Challenge starts today!", pt: "O Desafio dos Jovens Empreendedores começa hoje!" },
    { img: IMG.ANNA, en: "Ms. Anna: 'We would like to hear your business proposals.'", pt: "Ms. Anna: 'Gostaríamos de ouvir suas propostas de negócio.'" },
    { img: IMG.MAYA, en: "Maya: 'Our team is developing an app for volunteers.'", pt: "Maya: 'Nossa equipe está desenvolvendo um app para voluntários.'" },
    { img: IMG.KENJI, en: "Kenji: 'Could you please look at our marketing plan?'", pt: "Kenji: 'Vocês poderiam olhar nosso plano de marketing?'" },
    { img: IMG.SOPHIE, en: "Sophie: 'Our budget is small, but our idea is big.'", pt: "Sophie: 'Nosso orçamento é pequeno, mas a ideia é grande.'" },
    { img: IMG.LUCAS, en: "Lucas: 'The customer is at the center of our business.'", pt: "Lucas: 'O cliente é o centro do nosso negócio.'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'Excellent leadership! You would like to lead — and you can.'", pt: "Ms. Anna: 'Excelente liderança! Vocês querem liderar — e podem.'" },
  ],
  DIALOG: [
    { who: "Maya", img: IMG.MAYA, en: "Good morning. We would like to introduce our project.", pt: "Bom dia. Gostaríamos de apresentar nosso projeto." },
    { who: "Anna", img: IMG.ANNA, en: "Please, go ahead. What is your idea?", pt: "Por favor, prossiga. Qual é a ideia?" },
    { who: "Maya", img: IMG.MAYA, en: "An app that connects students to volunteer work.", pt: "Um app que conecta estudantes a trabalho voluntário." },
    { who: "Anna", img: IMG.ANNA, en: "Interesting. Could you show us your budget?", pt: "Interessante. Vocês poderiam mostrar o orçamento?" },
    { who: "Maya", img: IMG.MAYA, en: "Of course. It is small, but efficient.", pt: "Claro. É pequeno, mas eficiente." },
    { who: "Anna", img: IMG.ANNA, en: "Thank you for your presentation. Well done!", pt: "Obrigada pela apresentação. Muito bem!" },
  ],
  READING: {
    title: "What Makes a Young Leader?",
    img: IMG.CITY_COVER,
    parts: [
      { en: "A leader is not the one who commands; it is the one who serves.", pt: "Um líder não é quem manda; é quem serve.", highlight: ["leader"] },
      { en: "Good teamwork multiplies talent — nobody wins alone.", pt: "Bom trabalho em equipe multiplica talento — ninguém vence sozinho.", highlight: ["teamwork"] },
      { en: "A startup begins with a small idea and a strong purpose.", pt: "Uma startup começa com uma pequena ideia e um forte propósito.", highlight: ["startup"] },
      { en: "Marketing tells the world why your project matters.", pt: "Marketing conta ao mundo por que seu projeto importa.", highlight: ["Marketing"] },
      { en: "The customer is always the center of a good business.", pt: "O cliente é sempre o centro de um bom negócio.", highlight: ["customer"] },
    ],
  },
  WRITING: [
    { prompt: "We ______ like to introduce our project. (formal)", answer: "would", hint: "'Would like' = gostaríamos.", options: ["would", "will", "want"], explain: "'Would like' é a forma educada de 'want'." },
    { prompt: "______ you please review our plan?", answer: "Could", hint: "'Could you' = você poderia.", options: ["Could", "Do", "Will"] },
    { prompt: "'Teamwork' significa:", answer: "Trabalho em equipe", hint: "Team + work.", options: ["Trabalho em equipe", "Trabalho de time", "Trabalho de escola"] },
    { prompt: "Thank you ______ your attention.", answer: "for", hint: "'Thanks FOR' + coisa.", options: ["for", "of", "with"] },
    { prompt: "'Budget' significa:", answer: "Orçamento", hint: "Plano financeiro.", options: ["Orçamento", "Bônus", "Barganha"] },
    { prompt: "We look ______ to your feedback. (formal)", answer: "forward", hint: "'Look forward to' = aguardo.", options: ["forward", "backward", "up"] },
    { prompt: "'Customer' significa:", answer: "Cliente", hint: "Quem compra ou usa o serviço.", options: ["Cliente", "Costume", "Custódia"] },
  ],
  QUIZ: [
    { q: "Forma mais educada de pedir algo:", options: [{ text: "Give me the paper" }, { text: "Could you please give me the paper?", correct: true, explain: "'Could you please' é padrão formal." }, { text: "Give me now!" }] },
    { q: "'Leadership' significa:", options: [{ text: "Liderança", correct: true }, { text: "Leitura" }, { text: "Ligação" }] },
    { q: "'Innovation' significa:", options: [{ text: "Inovação", correct: true }, { text: "Invasão" }, { text: "Investigação" }] },
    { q: "Pitch = ", options: [{ text: "Apresentação curta de uma ideia/negócio", correct: true }, { text: "Piscina" }, { text: "Discussão longa" }] },
    { q: "'Marketing' significa:", options: [{ text: "Marketing / divulgação", correct: true }, { text: "Marcador" }, { text: "Marketing só de rua" }] },
    { q: "'We would like to...' significa:", options: [{ text: "Gostaríamos de...", correct: true }, { text: "Vamos..." }, { text: "Fizemos..." }] },
    { q: "'Budget' significa:", options: [{ text: "Orçamento", correct: true }, { text: "Botão" }, { text: "Balcão" }] },
    { q: "Bom líder:", options: [{ text: "Manda sem ouvir" }, { text: "Ouve a equipe e serve ao propósito comum", correct: true }, { text: "Faz tudo sozinho" }] },
  ],
  REAL_LIFE: [
    { situation: "🎤 Iniciando um pitch.", answer: "Good morning. We would like to introduce our project." },
    { situation: "📋 Pedindo revisão.", answer: "Could you please review our marketing plan?" },
    { situation: "💰 Sobre orçamento.", answer: "Our budget is small, but our impact will be big." },
    { situation: "🛍️ Focando no cliente.", answer: "The customer is at the center of our business." },
    { situation: "🙏 Fechando reunião.", answer: "Thank you for your attention. We look forward to your feedback." },
  ],
  GRAMMAR: {
    focus: "Revisão + Comunicação Formal",
    why:
      "Comunicação formal usa modais e frases padronizadas para transmitir respeito. WOULD LIKE (gostaria), COULD (poderia), MAY (posso), APOLOGIZE (peço desculpas), THANK YOU FOR (obrigado por), LOOK FORWARD TO (aguardo). Revise também tempos verbais e conectivos.",
    examples: [
      { en: "I WOULD LIKE to schedule a meeting.", pt: "Gostaria de agendar uma reunião." },
      { en: "COULD YOU please send me the document?", pt: "Você poderia me enviar o documento?" },
      { en: "MAY I ask a question?", pt: "Posso fazer uma pergunta?" },
      { en: "I LOOK FORWARD TO your response.", pt: "Aguardo sua resposta." },
    ],
    errors: [
      { wrong: "I would like schedule a meeting.", right: "I would like TO schedule a meeting.", why: "'Would like' pede TO + verbo." },
      { wrong: "Can you please to send it?", right: "COULD YOU please SEND it?", why: "Modais não pedem TO." },
      { wrong: "I look forward to hear from you.", right: "I look forward to HEARING from you.", why: "'Look forward to' + verbo-ING." },
      { wrong: "Thank you for send.", right: "Thank you for SENDING.", why: "'Thank you for' + verbo-ING." },
    ],
  },
  SONG: {
    title: "Leader's Anthem",
    hookPt: "Cante o hino da liderança.",
    verses: [
      { en: "We would like to change the world,", pt: "Gostaríamos de mudar o mundo,", emoji: "🌍" },
      { en: "With a team united, flag unfurled.", pt: "Com uma equipe unida, bandeira aberta.", emoji: "🤝" },
      { en: "Innovation lights our way,", pt: "Inovação ilumina nosso caminho,", emoji: "💡" },
      { en: "Leadership is here to stay.", pt: "Liderança veio para ficar.", emoji: "👑" },
    ],
  },
  HUNTER: {
    intro: "Escolha a forma mais formal!",
    rounds: [
      { promptEn: "Give me the pen. → mais educado", promptPt: "Give me the pen. → mais educado", targetLabel: "Could you please give me the pen?", objects: [
        { id: "a", label: "Could you please give me the pen?", img: "", isTarget: true },
        { id: "b", label: "Give me now!", img: "" },
        { id: "c", label: "You give pen.", img: "" },
      ]},
      { promptEn: "I want a coffee. → mais educado", promptPt: "I want a coffee. → mais educado", targetLabel: "I would like a coffee, please.", objects: [
        { id: "a", label: "I want coffee now.", img: "" },
        { id: "b", label: "I would like a coffee, please.", img: "", isTarget: true },
        { id: "c", label: "Coffee!", img: "" },
      ]},
      { promptEn: "Thanks. → formal", promptPt: "Thanks. → formal", targetLabel: "Thank you for your attention.", objects: [
        { id: "a", label: "Thank you for your attention.", img: "", isTarget: true },
        { id: "b", label: "Thx!", img: "" },
        { id: "c", label: "OK", img: "" },
      ]},
      { promptEn: "'Budget' =", promptPt: "'Budget' =", targetLabel: "Orçamento", objects: [
        { id: "a", label: "Orçamento", img: "", isTarget: true },
        { id: "b", label: "Bônus", img: "" },
        { id: "c", label: "Botão", img: "" },
      ]},
      { promptEn: "'Customer' =", promptPt: "'Customer' =", targetLabel: "Cliente", objects: [
        { id: "a", label: "Cliente", img: "", isTarget: true },
        { id: "b", label: "Costume", img: "" },
        { id: "c", label: "Custódia", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares palavra → tradução:",
    pairs: [
      { id: "a", en: "Leadership 👑", pt: "Liderança", img: IMG.ANNA },
      { id: "b", en: "Teamwork 🤝", pt: "Trabalho em equipe", img: IMG.FRIENDS },
      { id: "c", en: "Budget 💰", pt: "Orçamento", img: IMG.LUCAS },
      { id: "d", en: "Customer 🛍️", pt: "Cliente", img: IMG.MAYA },
    ],
  },
  BOOK: {
    title: "My Young Entrepreneurs Pitch",
    intro: "Seu pitch profissional em 5 páginas.",
    pages: [
      { en: "Page 1 — Our project is ___.", pt: "Pág. 1 — Nosso projeto é ___.", img: IMG.CLASS, badge: "📋" },
      { en: "Page 2 — Our team is ___.", pt: "Pág. 2 — Nossa equipe é ___.", img: IMG.FRIENDS, badge: "🤝" },
      { en: "Page 3 — Our budget is ___.", pt: "Pág. 3 — Nosso orçamento é ___.", img: IMG.LUCAS, badge: "💰" },
      { en: "Page 4 — Our customer is ___.", pt: "Pág. 4 — Nosso cliente é ___.", img: IMG.MAYA, badge: "🛍️" },
      { en: "The End — Thank you for your attention.", pt: "Fim — Obrigado pela atenção.", img: IMG.SCHOOL, badge: "🎤" },
    ],
  },
  CULTURE: {
    title: "Young Entrepreneurs 🚀",
    emoji: "💼",
    paragraphs: [
      { en: "Mark Zuckerberg was 19 when he created Facebook in his university dorm.", pt: "Mark Zuckerberg tinha 19 anos quando criou o Facebook no dormitório da universidade." },
      { en: "Steve Jobs and Steve Wozniak founded Apple in a garage when they were in their twenties.", pt: "Steve Jobs e Steve Wozniak fundaram a Apple numa garagem quando estavam nos 20." },
      { pt: "Empreender não tem idade — muitos jovens brasileiros criam startups ainda no Ensino Médio." },
    ],
  },
};

export default lesson;
