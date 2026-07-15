// Inglês 9º Ano — Unit 7 (FINAL) "English for Life 🌎"
// Projeto Final Integrador — Revisão Geral do SPEB 1.0
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u9-a07-english-for-life",
  meta: {
    unitLabel: "Unit 7 · Lesson 7 — English for Life 🌎",
    headerKicker: "SPEB 1.0 · Final Unit — English Academy",
    coverKicker: "Airport · University · Interview · Presentation",
    coverTitle: "English for Life 🌎",
    coverSubtitle:
      "A grande simulação internacional. Use TODO o inglês que você aprendeu para viver situações reais.",
    storyTitle: "The International Simulation",
    vocabularyTitle: "Real-Life English",
    speakingTargets: [
      "Good morning, I would like to check in, please.",
      "I have a reservation under my name.",
      "I am a Brazilian student traveling to study.",
      "Could you tell me where the university office is?",
      "In my opinion, this experience will change my life.",
      "I would love to learn more about your culture.",
    ],
    listeningIntro: "Ouça uma agente do aeroporto internacional recebendo a turma.",
    listeningQuestion:
      "A agente disse: 'Could I see your passport, please?' O que ela pediu?",
    listeningOptions: [
      "Para você mostrar o passaporte",
      "Para você entregar a mala",
      "Para você comprar uma passagem",
    ],
    listeningCorrect: "Para você mostrar o passaporte",
    listeningWrongHint: "'Could I see your passport?' = 'Posso ver seu passaporte?'",
    readingNarration:
      "Chegou o momento. Você embarca numa simulação internacional: aeroporto, hotel, entrevista, universidade, reunião, turismo, notícias e debates. Use TODO o inglês do SPEB 1.0.",
    grammarNarration:
      "Revisão GERAL: To Be, Present Simple, Present Continuous, Simple Past, Past Continuous, Present Perfect, Future (Will / Going To), Passive Voice, First & Second Conditional, Reported Speech, Relative Pronouns, Modal Verbs (must, should, might, could), Connectors. Você já viu tudo — agora é usar!",
    finalProjectIntro: "Escreva a edição final do seu Portfólio. Digite seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY ENGLISH PORTFOLIO — FINAL EDITION — Hi! My name is ${name} and this is the last page of my SPEB 1.0 journey. In this portfolio you will find: a personal presentation, a simple CV, a cover letter, an opinion article, a book review, a science project, a social campaign, a career plan, an oral presentation and a learning diary. I have studied English for nine years, and today I can introduce myself, discuss my future, defend an opinion, read a news article and write a short essay. I have never spoken English abroad, but I am going to — because English is not just a subject; it is a bridge to the world. Thank you, teachers, family and friends. This is not the end — this is the real beginning.`,
    finalProjectSectionTitle: "My English Portfolio — Final Edition",
  },
  VOCAB: [
    { id: "airport", en: "Airport ✈️", pt: "Aeroporto", img: IMG.PASSPORT },
    { id: "hotel", en: "Hotel 🏨", pt: "Hotel", img: IMG.SHOPPING_MALL },
    { id: "interview", en: "Interview 🎤", pt: "Entrevista", img: IMG.ANNA },
    { id: "university", en: "University 🎓", pt: "Universidade", img: IMG.SCHOOL_CITY },
    { id: "meeting", en: "Meeting 💼", pt: "Reunião", img: IMG.CLASS },
    { id: "tourism", en: "Tourism 🗺️", pt: "Turismo", img: IMG.CITY_COVER },
    { id: "presentation", en: "Presentation 🎬", pt: "Apresentação", img: IMG.LUCAS },
    { id: "debate", en: "Debate 💬", pt: "Debate", img: IMG.FRIENDS },
    { id: "news", en: "News 📰", pt: "Notícias", img: IMG.KENJI },
    { id: "portfolio", en: "Portfolio 📁", pt: "Portfólio", img: IMG.SOPHIE },
  ],
  STORY: [
    { img: IMG.PASSPORT, en: "You arrive at an international airport for a study trip.", pt: "Você chega a um aeroporto internacional para uma viagem de estudos." },
    { img: IMG.ANNA, en: "Officer: 'Good morning. Could I see your passport, please?'", pt: "Agente: 'Bom dia. Posso ver seu passaporte, por favor?'" },
    { img: IMG.SHOPPING_MALL, en: "At the hotel: 'I have a reservation under my name.'", pt: "No hotel: 'Tenho uma reserva no meu nome.'" },
    { img: IMG.SCHOOL_CITY, en: "At the university, you introduce yourself in a class.", pt: "Na universidade, você se apresenta em uma aula." },
    { img: IMG.CLASS, en: "In a meeting, you defend your idea with connectors and modals.", pt: "Numa reunião, você defende sua ideia com conectivos e modais." },
    { img: IMG.CITY_COVER, en: "During a city tour, you ask for directions and take photos.", pt: "Durante um tour, você pergunta caminhos e tira fotos." },
    { img: IMG.SOPHIE, en: "In the end, you present your Final Portfolio to the world.", pt: "No fim, você apresenta seu Portfólio Final ao mundo." },
  ],
  DIALOG: [
    { who: "Officer", img: IMG.ANNA, en: "Welcome. What is the purpose of your visit?", pt: "Bem-vindo. Qual o motivo da sua visita?" },
    { who: "You", img: IMG.MAYA, en: "I am a student and I am here to attend a summer course.", pt: "Sou estudante e vim para um curso de verão." },
    { who: "Officer", img: IMG.ANNA, en: "How long will you stay?", pt: "Quanto tempo vai ficar?" },
    { who: "You", img: IMG.MAYA, en: "I will stay for two weeks.", pt: "Vou ficar por duas semanas." },
    { who: "Officer", img: IMG.ANNA, en: "Enjoy your trip! Do you need any help?", pt: "Aproveite a viagem! Precisa de ajuda?" },
    { who: "You", img: IMG.MAYA, en: "Yes, could you tell me where the taxi area is, please?", pt: "Sim, poderia me dizer onde é a área dos táxis, por favor?" },
  ],
  READING: {
    title: "English is a Bridge",
    img: IMG.CITY_COVER,
    parts: [
      { en: "English connects people who speak more than 7,000 languages.", pt: "O inglês conecta pessoas que falam mais de 7.000 idiomas.", highlight: ["English"] },
      { en: "At airports, hotels and universities, English opens doors every day.", pt: "Em aeroportos, hotéis e universidades, o inglês abre portas todo dia.", highlight: ["airports", "hotels", "universities"] },
      { en: "News, science and business travel first in English.", pt: "Notícias, ciência e negócios viajam primeiro em inglês.", highlight: ["News"] },
      { en: "Speaking English is not about being perfect — it is about being brave.", pt: "Falar inglês não é ser perfeito — é ser corajoso.", highlight: ["brave"] },
      { en: "You have studied for nine years — today you are ready.", pt: "Você estudou por nove anos — hoje está pronto.", highlight: ["ready"] },
    ],
  },
  WRITING: [
    { prompt: "Good morning, I ______ like to check in, please. (formal)", answer: "would", hint: "'Would like' = gostaria.", options: ["would", "will", "did"], explain: "'Would like' é a forma formal e educada." },
    { prompt: "I ______ a reservation under my name.", answer: "have", hint: "'I have a reservation.'", options: ["have", "am", "did"] },
    { prompt: "'Airport' significa:", answer: "Aeroporto", hint: "Onde os aviões pousam.", options: ["Aeroporto", "Areia", "Alto"] },
    { prompt: "Could you ______ me where the office is?", answer: "tell", hint: "TELL + pessoa + informação.", options: ["tell", "say", "speak"] },
    { prompt: "In my ______, English changes lives. (opinião)", answer: "opinion", hint: "'In my opinion' = na minha opinião.", options: ["opinion", "option", "operation"] },
    { prompt: "I ______ love to learn about your culture. (educado)", answer: "would", hint: "'Would love' = adoraria.", options: ["would", "will", "have"] },
    { prompt: "'Interview' significa:", answer: "Entrevista", hint: "Conversa formal para vaga/estudo.", options: ["Entrevista", "Entrega", "Entrada"] },
  ],
  QUIZ: [
    { q: "'I would like to check in' — no aeroporto/hotel significa:", options: [{ text: "Fazer o check-in", correct: true, explain: "'Check in' = registrar-se ao chegar." }, { text: "Sair" }, { text: "Pagar a conta" }] },
    { q: "'Interview' é usado em:", options: [{ text: "Entrevista de emprego/estudo", correct: true }, { text: "Cinema" }, { text: "Refeição" }] },
    { q: "'In my opinion...' significa:", options: [{ text: "Na minha opinião", correct: true }, { text: "Na minha opção" }, { text: "Na minha operação" }] },
    { q: "Melhor forma de pedir informação a um estrangeiro:", options: [{ text: "Onde é!!" }, { text: "Excuse me, could you tell me where ___ is, please?", correct: true, explain: "Formal + educado." }, { text: "Where?" }] },
    { q: "'Debate' significa:", options: [{ text: "Debate / discussão organizada", correct: true }, { text: "Debandada" }, { text: "Deboche" }] },
    { q: "'Portfolio' significa:", options: [{ text: "Portfólio / coleção de trabalhos", correct: true }, { text: "Porta" }, { text: "Porto" }] },
    { q: "Após 9 anos de inglês, o esperado é:", options: [{ text: "Não entender nada" }, { text: "Comunicar-se em situações do dia a dia (nível B1 inicial)", correct: true }, { text: "Falar como nativo" }] },
    { q: "Falar inglês é:", options: [{ text: "Ser perfeito" }, { text: "Ser corajoso e comunicar-se", correct: true }, { text: "Copiar" }] },
  ],
  REAL_LIFE: [
    { situation: "✈️ No aeroporto.", answer: "Good morning. I would like to check in, please. Here is my passport." },
    { situation: "🏨 No hotel.", answer: "Hi, I have a reservation under my name. Could I get the Wi-Fi password?" },
    { situation: "🎤 Numa entrevista.", answer: "I am a Brazilian student and I would love to be part of your program." },
    { situation: "🎓 Na universidade.", answer: "Excuse me, could you tell me where the international office is?" },
    { situation: "💬 Num debate.", answer: "In my opinion, education is the best investment for our future." },
  ],
  GRAMMAR: {
    focus: "Revisão Geral SPEB 1.0",
    why:
      "Você completou 9 anos de inglês! Revise: To Be, Present Simple, Present Continuous, Simple Past, Past Continuous, Present Perfect, Future (Will / Going To), Passive Voice, First & Second Conditional, Reported Speech, Relative Pronouns, Modal Verbs, Connectors. Nível esperado: B1 inicial (CEFR).",
    examples: [
      { en: "I AM a Brazilian student. (To Be)", pt: "Sou um estudante brasileiro." },
      { en: "I HAVE STUDIED English for 9 years. (Present Perfect)", pt: "Estudo inglês há 9 anos." },
      { en: "I WILL travel abroad next year. (Future Will)", pt: "Vou viajar para fora ano que vem." },
      { en: "If I WERE you, I WOULD start today. (2nd Conditional)", pt: "Se eu fosse você, começaria hoje." },
    ],
    errors: [
      { wrong: "I study English since 9 years.", right: "I HAVE STUDIED English FOR 9 years.", why: "Present Perfect + 'for' (duração)." },
      { wrong: "I will to travel.", right: "I WILL TRAVEL.", why: "Modais não pedem TO." },
      { wrong: "If I was you, I would go.", right: "If I WERE you, I would go.", why: "2º Conditional formal: 'were'." },
      { wrong: "She said me hello.", right: "She TOLD me hello. / She SAID hello.", why: "SAY não pede pessoa; TELL pede." },
    ],
  },
  SONG: {
    title: "SPEB 1.0 Anthem — Nine Years, One Voice",
    hookPt: "Hino de encerramento do SPEB 1.0.",
    verses: [
      { en: "From colors, animals and family names,", pt: "Das cores, animais e nomes da família,", emoji: "🌈" },
      { en: "To debates and future games.", pt: "Aos debates e jogos do futuro.", emoji: "🎮" },
      { en: "Nine long years, one bright voice,", pt: "Nove anos, uma voz brilhante,", emoji: "✨" },
      { en: "English gave me freedom of choice.", pt: "O inglês me deu liberdade de escolha.", emoji: "🌎" },
    ],
  },
  HUNTER: {
    intro: "Simulação: encontre a resposta certa em cada situação.",
    rounds: [
      { promptEn: "At the airport counter.", promptPt: "No balcão do aeroporto.", targetLabel: "I would like to check in, please.", objects: [
        { id: "a", label: "I would like to check in, please.", img: "", isTarget: true },
        { id: "b", label: "Check in NOW!", img: "" },
        { id: "c", label: "Where hotel?", img: "" },
      ]},
      { promptEn: "At the hotel reception.", promptPt: "Na recepção do hotel.", targetLabel: "I have a reservation under my name.", objects: [
        { id: "a", label: "I have a reservation under my name.", img: "", isTarget: true },
        { id: "b", label: "Room now!", img: "" },
        { id: "c", label: "Where taxi?", img: "" },
      ]},
      { promptEn: "In a job interview.", promptPt: "Numa entrevista.", targetLabel: "I would love to be part of your team.", objects: [
        { id: "a", label: "Give me job.", img: "" },
        { id: "b", label: "I would love to be part of your team.", img: "", isTarget: true },
        { id: "c", label: "Money please.", img: "" },
      ]},
      { promptEn: "'Airport' =", promptPt: "'Airport' =", targetLabel: "Aeroporto", objects: [
        { id: "a", label: "Aeroporto", img: "", isTarget: true },
        { id: "b", label: "Areia", img: "" },
        { id: "c", label: "Aviário", img: "" },
      ]},
      { promptEn: "'Portfolio' =", promptPt: "'Portfolio' =", targetLabel: "Portfólio", objects: [
        { id: "a", label: "Porta", img: "" },
        { id: "b", label: "Portfólio", img: "", isTarget: true },
        { id: "c", label: "Porto", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares palavra → tradução:",
    pairs: [
      { id: "a", en: "Airport ✈️", pt: "Aeroporto", img: IMG.PASSPORT },
      { id: "b", en: "Interview 🎤", pt: "Entrevista", img: IMG.ANNA },
      { id: "c", en: "University 🎓", pt: "Universidade", img: IMG.SCHOOL_CITY },
      { id: "d", en: "Portfolio 📁", pt: "Portfólio", img: IMG.SOPHIE },
    ],
  },
  BOOK: {
    title: "My English Portfolio — Final Edition",
    intro: "A edição final do seu portfólio pessoal.",
    pages: [
      { en: "Page 1 — Personal presentation.", pt: "Pág. 1 — Apresentação pessoal.", img: IMG.MAYA, badge: "👤" },
      { en: "Page 2 — Simple CV & cover letter.", pt: "Pág. 2 — Currículo simples e carta de apresentação.", img: IMG.ANNA, badge: "📄" },
      { en: "Page 3 — Opinion article & book review.", pt: "Pág. 3 — Artigo de opinião e resenha.", img: IMG.LIBRARY, badge: "✍️" },
      { en: "Page 4 — Science project & social campaign.", pt: "Pág. 4 — Projeto científico e campanha social.", img: IMG.KENJI, badge: "🔬" },
      { en: "Page 5 — Career plan & learning diary.", pt: "Pág. 5 — Plano de carreira e diário de aprendizagem.", img: IMG.SOPHIE, badge: "🎓" },
      { en: "The End — This is not the end. This is the real beginning.", pt: "Fim — Isto não é o fim. É o verdadeiro começo.", img: IMG.CITY_COVER, badge: "🌟" },
    ],
  },
  CULTURE: {
    title: "English in the Real World 🌍",
    emoji: "🎉",
    paragraphs: [
      { en: "English is the official language of aviation — every pilot in the world speaks it.", pt: "O inglês é a língua oficial da aviação — todo piloto do mundo fala." },
      { en: "More than 1.5 billion people speak English — most as a second language.", pt: "Mais de 1,5 bilhão de pessoas falam inglês — a maioria como segunda língua." },
      { pt: "Você acaba de fechar 9 anos do SPEB 1.0. O inglês agora é seu passaporte para o mundo — use com coragem." },
    ],
  },
};

export default lesson;
