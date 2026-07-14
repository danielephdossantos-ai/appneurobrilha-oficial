// Inglês 7º Ano — Unit 7 "Global Challenge 🌎" — Projeto integrador
// Revisão de tudo: Present Simple, Continuous, Past, Going To, Will,
// Comparatives, Superlatives, Should, Must, Modais.
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u7-a07-global",
  meta: {
    unitLabel: "Unit 7 · Final Mission — Global Challenge 🌎",
    headerKicker: "SPEB 1.0 · English Academy — 7th Grade",
    coverKicker: "International Mission · Portfolio · Review",
    coverTitle: "Global Challenge 🌎",
    coverSubtitle:
      "A missão final: os alunos da Academy participam de uma missão internacional. Você vai revisar tudo do 7º ano e montar seu English Portfolio Level 2.",
    storyTitle: "The International Mission",
    vocabularyTitle: "Global Skills Review",
    speakingTargets: [
      "I am from Brazil and I speak Portuguese and English.",
      "Last summer I traveled to Argentina.",
      "Right now, I am participating in a global mission.",
      "I'm going to help my international team.",
      "I will do my best to communicate clearly.",
      "Learning English is the most important skill for my future.",
    ],
    listeningIntro: "Ouça a mensagem oficial da missão internacional.",
    listeningQuestion:
      'Mission control: "You must speak only English and you should help your international team." O que é OBRIGATÓRIO?',
    listeningOptions: [
      "Falar somente inglês",
      "Ajudar o time internacional",
      "Trazer comida do seu país",
    ],
    listeningCorrect: "Falar somente inglês",
    listeningWrongHint: "MUST = obrigação forte. SHOULD = conselho.",
    readingNarration:
      "A missão internacional envolve LER mapas e placas, INTERPRETAR notícias, CONVERSAR com personagens de vários países e ESCREVER e-mails. Cada situação usa uma estrutura diferente do que você aprendeu no ano todo.",
    grammarNarration:
      "Revisão geral: Present Simple (rotina), Present Continuous (agora), Simple Past (ontem, ano passado), Going To (plano), Will (promessa), Comparatives (maior QUE), Superlatives (o MAIOR), Should (conselho), Must (obrigação), Can/Could/May (habilidade/possibilidade).",
    finalProjectIntro: "Vamos montar seu portfólio final. Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY ENGLISH PORTFOLIO — LEVEL 2 — Hi! My name is ${name} and this is my final portfolio for 7th grade. I use English every day for school and games (Present Simple). Right now, I am writing this text in English (Present Continuous). Last year I visited many new places and made new friends (Simple Past). Next year, I'm going to travel abroad and I will try to speak only English (Going to / Will). I think English is the most useful skill for my future — it's better than any other subject for connecting with the world. I should keep practicing every day, and I must never give up. See you at Level 3!`,
    finalProjectSectionTitle: "My English Portfolio — Level 2",
  },
  VOCAB: [
    { id: "mission", en: "Mission 🎯", pt: "Missão", img: IMG.AIRPORT },
    { id: "communication", en: "Communication 💬", pt: "Comunicação", img: IMG.FRIENDS },
    { id: "team", en: "Team 🤝", pt: "Equipe", img: IMG.FRIENDS },
    { id: "portfolio", en: "Portfolio 📁", pt: "Portfólio", img: IMG.LIBRARY },
    { id: "interview", en: "Interview 🎤", pt: "Entrevista", img: IMG.ANNA },
    { id: "presentation", en: "Presentation 📊", pt: "Apresentação", img: IMG.MUSEUM },
    { id: "email", en: "Email 📧", pt: "E-mail", img: IMG.CLASS },
    { id: "map", en: "Map 🗺️", pt: "Mapa", img: IMG.CITY_COVER },
  ],
  STORY: [
    { img: IMG.ANNA, en: "Ms. Anna: 'Congratulations! You reached the final mission.'", pt: "Ms. Anna: 'Parabéns! Vocês chegaram na missão final.'" },
    { img: IMG.AIRPORT, en: "The team boards an international flight — English only!", pt: "A equipe embarca em um voo internacional — só inglês!" },
    { img: IMG.KENJI, en: "Kenji reads the arrival signs and finds the exit.", pt: "Kenji lê as placas de chegada e encontra a saída." },
    { img: IMG.MAYA, en: "Maya interviews a local guide about the city.", pt: "Maya entrevista um guia local sobre a cidade." },
    { img: IMG.LUCAS, en: "Lucas writes an email to Ms. Anna about the trip.", pt: "Lucas escreve um e-mail pra Ms. Anna sobre a viagem." },
    { img: IMG.SOPHIE, en: "Sophie presents the team's discoveries — in English!", pt: "Sophie apresenta as descobertas da equipe — em inglês!" },
    { img: IMG.FRIENDS, en: "The team completed the mission. Level 2 unlocked!", pt: "A equipe cumpriu a missão. Nível 2 desbloqueado!" },
  ],
  DIALOG: [
    { who: "Guide", img: IMG.SOPHIE, en: "Welcome! Where are you from?", pt: "Bem-vindos! De onde vocês são?" },
    { who: "Lucas", img: IMG.LUCAS, en: "We are students from English Academy in Brazil.", pt: "Somos estudantes da English Academy no Brasil." },
    { who: "Guide", img: IMG.SOPHIE, en: "What did you do yesterday?", pt: "O que vocês fizeram ontem?" },
    { who: "Maya", img: IMG.MAYA, en: "We visited the museum and had lunch downtown.", pt: "Visitamos o museu e almoçamos no centro." },
    { who: "Guide", img: IMG.SOPHIE, en: "What are you going to do tomorrow?", pt: "O que vão fazer amanhã?" },
    { who: "Kenji", img: IMG.KENJI, en: "We're going to interview local scientists.", pt: "Vamos entrevistar cientistas locais." },
    { who: "Guide", img: IMG.SOPHIE, en: "Impressive! Your English is very good.", pt: "Impressionante! Seu inglês é muito bom." },
    { who: "Team", img: IMG.FRIENDS, en: "Thank you! We practice every day.", pt: "Obrigado! Praticamos todos os dias." },
  ],
  READING: {
    title: "Mission Log — Day One",
    img: IMG.AIRPORT,
    parts: [
      { en: "Today we arrived at the international airport at 9 AM.", pt: "Hoje chegamos ao aeroporto internacional às 9h.", highlight: ["arrived"] },
      { en: "We are speaking only English until the mission ends.", pt: "Estamos falando só inglês até a missão acabar.", highlight: ["are speaking"] },
      { en: "The city is bigger than our hometown, but the people are friendlier.", pt: "A cidade é maior que a nossa, mas as pessoas são mais amigáveis.", highlight: ["bigger", "friendlier"] },
      { en: "Tomorrow we're going to meet local students and exchange ideas.", pt: "Amanhã vamos conhecer estudantes locais e trocar ideias.", highlight: ["going to meet"] },
      { en: "I will write another entry tonight. Mission is going great!", pt: "Vou escrever outra entrada hoje à noite. A missão está indo ótima!", highlight: ["will write"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ from Brazil. (TO BE)", answer: "am", hint: "TO BE + I = am.", options: ["am", "is", "are"] },
    { prompt: "Right now, we ______ a mission. (Continuous)", answer: "are doing", hint: "'right now' → Continuous.", options: ["are doing", "do", "did"] },
    { prompt: "Yesterday I ______ the museum. (Past — visit)", answer: "visited", hint: "Regular + ed.", options: ["visited", "visit", "am visiting"] },
    { prompt: "Tomorrow I ______ interview a scientist. (plano)", answer: "am going to", hint: "Plano decidido.", options: ["am going to", "will", "was"] },
    { prompt: "I promise I ______ do my best. (promessa)", answer: "will", hint: "Promessa → WILL.", options: ["will", "am going to", "did"] },
    { prompt: "English is ______ than any other subject for me. (good, comparativo)", answer: "better", hint: "Irregular: good → better.", options: ["better", "gooder", "best"] },
    { prompt: "This mission is ______ of my life! (good, superlativo)", answer: "the best", hint: "Irregular: the best.", options: ["the best", "the goodest", "best more"] },
    { prompt: "You ______ speak clearly. (conselho)", answer: "should", hint: "Conselho = SHOULD.", options: ["should", "shouldn't", "mustn't"] },
    { prompt: "We ______ speak only English. (obrigação)", answer: "must", hint: "Obrigação forte = MUST.", options: ["must", "should", "may"] },
    { prompt: "Robots ______ help translate soon. (possibilidade)", answer: "may", hint: "Possibilidade = MAY.", options: ["may", "must", "can't"] },
  ],
  QUIZ: [
    { q: "Complete: I ___ English every day. (rotina)", options: [{ text: "am studying" }, { text: "study", correct: true }, { text: "studied" }] },
    { q: "Complete: Look! Sophie ___ a photo now.", options: [{ text: "takes" }, { text: "is taking", correct: true }, { text: "took" }] },
    { q: "Complete: Yesterday we ___ to the museum.", options: [{ text: "go" }, { text: "went", correct: true, explain: "GO irregular → went." }, { text: "goes" }] },
    { q: "Complete: Tomorrow I ___ study for the test. (plano)", options: [{ text: "am going to", correct: true }, { text: "was" }, { text: "did" }] },
    { q: "Superlativo de 'good':", options: [{ text: "gooder" }, { text: "the best", correct: true }, { text: "more good" }] },
    { q: "Conselho positivo:", options: [{ text: "mustn't" }, { text: "should", correct: true }, { text: "can't" }] },
    { q: "Obrigação forte:", options: [{ text: "may" }, { text: "must", correct: true }, { text: "should" }] },
    { q: "Possibilidade futura:", options: [{ text: "must" }, { text: "may", correct: true }, { text: "can't" }] },
    { q: "Comparativo de 'big':", options: [{ text: "more big" }, { text: "bigger", correct: true }, { text: "biggest" }] },
    { q: "Complete: OK, I ___ help you! (decisão agora)", options: [{ text: "am going to" }, { text: "will", correct: true }, { text: "helped" }] },
  ],
  REAL_LIFE: [
    { situation: "🎤 Se apresentando na missão internacional.", answer: "Hi, my name is Lucas. I am from Brazil and I speak Portuguese and English." },
    { situation: "📅 Contando o que você fez ontem.", answer: "Yesterday I visited a museum and I had lunch downtown." },
    { situation: "🚀 Falando dos planos de amanhã.", answer: "Tomorrow we are going to interview local students." },
    { situation: "🤝 Prometendo colaborar com o time.", answer: "I promise I will help my international team." },
    { situation: "🌍 Comparando duas cidades.", answer: "This city is bigger than my hometown, but mine is more peaceful." },
    { situation: "📧 Escrevendo pra sua professora.", answer: "Dear Ms. Anna, the mission is amazing. We are learning a lot!" },
  ],
  GRAMMAR: {
    focus: "General Review — Level 2",
    why:
      "Você chegou ao fim do 7º ano! Agora sabe usar 10 estruturas essenciais: Present Simple (rotina), Continuous (agora), Past (ontem), Going To (plano), Will (promessa/agora), Comparatives (mais X que), Superlatives (o mais X), Should (conselho), Must (obrigação) e modais Can/Could/May. Isso é o núcleo do nível A2 do CEFR.",
    examples: [
      { en: "I STUDY English every day. (rotina)", pt: "Estudo inglês todo dia." },
      { en: "I AM STUDYING English right now.", pt: "Estou estudando inglês agora." },
      { en: "I STUDIED English yesterday.", pt: "Estudei inglês ontem." },
      { en: "I AM GOING TO study tomorrow. I WILL do my best.", pt: "Vou estudar amanhã. Farei o meu melhor." },
      { en: "English is THE BEST tool for my future. I SHOULD practice, I MUST not give up.", pt: "Inglês é a melhor ferramenta pro meu futuro. Devo praticar, não posso desistir." },
    ],
    errors: [
      { wrong: "I am studying English every day.", right: "I STUDY English every day.", why: "Rotina → Simple Present, não Continuous." },
      { wrong: "Yesterday I go to the park.", right: "Yesterday I WENT to the park.", why: "'Yesterday' pede Simple Past." },
      { wrong: "She will to help.", right: "She WILL HELP.", why: "Depois de WILL, sem 'to'." },
      { wrong: "This is the more good day.", right: "This is THE BEST day.", why: "Irregular: good → the best." },
    ],
  },
  SONG: {
    title: "I Can Do This",
    hookPt: "Cante celebrando o fim do 7º ano!",
    verses: [
      { en: "I study every day, I did it yesterday,", pt: "Estudo todo dia, estudei ontem,", emoji: "📚" },
      { en: "I'm going to try, and I will find a way.", pt: "Vou tentar, e vou achar um jeito.", emoji: "💪" },
      { en: "English is the best, better than the rest,", pt: "Inglês é o melhor, melhor que os outros,", emoji: "🌟" },
      { en: "I can, I could, I may — I passed the test!", pt: "Posso, poderia, talvez — passei no teste!", emoji: "🎉" },
    ],
  },
  HUNTER: {
    intro: "Revisão relâmpago! Escolhe a forma certa em cada tempo.",
    rounds: [
      { promptEn: "Rotina: I ___ English every day", promptPt: "Rotina: I ___ English every day", targetLabel: "study", objects: [
        { id: "a", label: "study", img: "", isTarget: true },
        { id: "b", label: "am studying", img: "" },
        { id: "c", label: "studied", img: "" },
      ]},
      { promptEn: "Agora: Look! She ___ a photo", promptPt: "Agora: Look! She ___ a photo", targetLabel: "is taking", objects: [
        { id: "a", label: "takes", img: "" },
        { id: "b", label: "is taking", img: "", isTarget: true },
        { id: "c", label: "took", img: "" },
      ]},
      { promptEn: "Ontem: We ___ to the museum", promptPt: "Ontem: We ___ to the museum", targetLabel: "went", objects: [
        { id: "a", label: "went", img: "", isTarget: true },
        { id: "b", label: "go", img: "" },
        { id: "c", label: "are going", img: "" },
      ]},
      { promptEn: "Plano: Tomorrow I ___ study", promptPt: "Plano: Tomorrow I ___ study", targetLabel: "am going to", objects: [
        { id: "a", label: "will", img: "" },
        { id: "b", label: "am going to", img: "", isTarget: true },
        { id: "c", label: "study", img: "" },
      ]},
      { promptEn: "Superlativo de 'good':", promptPt: "Superlativo de 'good':", targetLabel: "the best", objects: [
        { id: "a", label: "the best", img: "", isTarget: true },
        { id: "b", label: "gooder", img: "" },
        { id: "c", label: "more good", img: "" },
      ]},
      { promptEn: "Obrigação forte:", promptPt: "Obrigação forte:", targetLabel: "must", objects: [
        { id: "a", label: "should", img: "" },
        { id: "b", label: "may", img: "" },
        { id: "c", label: "must", img: "", isTarget: true },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares tempo verbal → marcador!",
    pairs: [
      { id: "a", en: "Simple Present ⏰", pt: "every day", img: IMG.CLASS },
      { id: "b", en: "Continuous 👉", pt: "right now", img: IMG.KENJI },
      { id: "c", en: "Simple Past 📅", pt: "yesterday", img: IMG.MAYA },
      { id: "d", en: "Going To 🚀", pt: "tomorrow", img: IMG.AIRPORT },
    ],
  },
  BOOK: {
    title: "My English Portfolio — Level 2",
    intro: "O livro final que reúne tudo que você aprendeu.",
    pages: [
      { en: "Page 1 — Personal diary (rotina)", pt: "Pág. 1 — Diário pessoal (rotina)", img: IMG.LIBRARY, badge: "📓" },
      { en: "Page 2 — A memory of last year (passado)", pt: "Pág. 2 — Uma lembrança do ano passado", img: IMG.MAYA, badge: "📸" },
      { en: "Page 3 — Comparing two countries", pt: "Pág. 3 — Comparando dois países", img: IMG.CITY_COVER, badge: "🌍" },
      { en: "Page 4 — My plan for next year (going to)", pt: "Pág. 4 — Meu plano para o próximo ano", img: IMG.AIRPORT, badge: "🚀" },
      { en: "Page 5 — Green campaign (will)", pt: "Pág. 5 — Campanha verde", img: IMG.PARK, badge: "🌱" },
      { en: "Page 6 — Science presentation (modals)", pt: "Pág. 6 — Apresentação científica", img: IMG.HOSPITAL, badge: "🔬" },
      { en: "Page 7 — Self-assessment", pt: "Pág. 7 — Autoavaliação", img: IMG.ANNA, badge: "⭐" },
      { en: "The End — See you at Level 3!", pt: "Fim — Até o Nível 3!", img: IMG.SCHOOL, badge: "🎓" },
    ],
  },
  CULTURE: {
    title: "English — The Global Language 🌎",
    emoji: "🗣️",
    paragraphs: [
      { en: "About 1.5 billion people use English every day. It's the language of the internet, science, business and travel.", pt: "Cerca de 1,5 bilhão de pessoas usam inglês todo dia. É a língua da internet, ciência, negócios e viagem." },
      { en: "You reached CEFR A2 level — you can understand and share short texts, tell stories and make plans. Next year, we go deeper!", pt: "Você atingiu o A2 do CEFR — entende e compartilha textos curtos, conta histórias e faz planos. Ano que vem vamos mais fundo!" },
      { pt: "Parabéns por terminar o 7º ano da English Academy — você deu um salto real no seu inglês." },
    ],
  },
};

export default lesson;
