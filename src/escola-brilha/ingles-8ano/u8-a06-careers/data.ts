// Inglês 8º Ano — Unit 6 "Careers and Entrepreneurship 💼"
// Second Conditional (introdução) · Modais para aconselhamento
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u8-a06-careers",
  meta: {
    unitLabel: "Unit 6 · Lesson 1 — Careers and Entrepreneurship 💼",
    headerKicker: "SPEB 1.0 · English Academy — 8th Grade",
    coverKicker: "Career · Company · Interview · Leadership",
    coverTitle: "Careers and Entrepreneurship 💼",
    coverSubtitle:
      "A Academy organiza uma Feira de Profissões. Aprenda a falar de planos, dar conselhos e imaginar o que faria com Second Conditional.",
    storyTitle: "Career Fair",
    vocabularyTitle: "Work & Business",
    speakingTargets: [
      "If I had my own company, I would help people.",
      "You could learn a new skill online.",
      "In the interview, be confident and honest.",
      "Teamwork is more important than titles.",
      "A good leader listens carefully.",
      "I would love to be an engineer one day.",
    ],
    listeningIntro: "Ouça Ms. Anna abrir a Career Fair.",
    listeningQuestion:
      'Kenji disse: "If I had more time, I would start my own tech company." O que ele quer dizer?',
    listeningOptions: [
      "Ele já tem uma empresa",
      "Ele imagina uma situação hipotética (Second Conditional)",
      "Ele terá a empresa ano que vem",
    ],
    listeningCorrect: "Ele imagina uma situação hipotética (Second Conditional)",
    listeningWrongHint: "'If I had ... I would ...' = Second Conditional = imaginação/hipótese.",
    readingNarration:
      "Todo profissional começa com curiosidade e coragem. Escolher uma carreira envolve pesquisar, testar, errar e recomeçar. Habilidades importantes: comunicação, trabalho em equipe, liderança, empatia.",
    grammarNarration:
      "SECOND CONDITIONAL (situação IMAGINÁRIA/HIPOTÉTICA): IF + Simple Past, ... WOULD + verbo. 'If I HAD a million dollars, I WOULD travel the world.' No 'if' usamos 'were' pra todas as pessoas em inglês formal: 'If I WERE you'.",
    finalProjectIntro: "Vamos preparar sua entrevista. Digite seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY CAREER PLAN — Candidate: ${name}. Good morning. My name is ${name} and I am 13 years old. My dream job is to become a software engineer. I love solving problems and I have good teamwork skills. If I had the chance to work at any company, I would choose one that helps students learn. In five years, I would like to lead a small tech team. I am going to study math, coding and English every day. If I were the CEO, I would treat every employee with respect. My strongest skills are curiosity, focus and kindness. Thank you for this opportunity.`,
    finalProjectSectionTitle: "My Career Plan",
  },
  VOCAB: [
    { id: "career", en: "Career 💼", pt: "Carreira", img: IMG.CITY_COVER },
    { id: "business", en: "Business 📊", pt: "Negócio", img: IMG.SOPHIE },
    { id: "company", en: "Company 🏢", pt: "Empresa", img: IMG.SHOPPING_MALL },
    { id: "interview", en: "Interview 🎤", pt: "Entrevista", img: IMG.ANNA },
    { id: "resume", en: "Resume 📄", pt: "Currículo", img: IMG.KENJI },
    { id: "skills", en: "Skills ⚡", pt: "Habilidades", img: IMG.LUCAS },
    { id: "leadership", en: "Leadership 👑", pt: "Liderança", img: IMG.MAYA },
    { id: "teamwork", en: "Teamwork 🤝", pt: "Trabalho em equipe", img: IMG.FRIENDS },
  ],
  STORY: [
    { img: IMG.ANNA, en: "Ms. Anna: 'Welcome to the Academy Career Fair!'", pt: "Ms. Anna: 'Bem-vindos à Feira de Profissões da Academy!'" },
    { img: IMG.KENJI, en: "Kenji: 'If I had my own tech company, I would help schools.'", pt: "Kenji: 'Se eu tivesse minha própria empresa de tecnologia, ajudaria escolas.'" },
    { img: IMG.MAYA, en: "Maya: 'I would be a doctor to help my community.'", pt: "Maya: 'Eu seria médica pra ajudar minha comunidade.'" },
    { img: IMG.SOPHIE, en: "Sophie: 'If I were older, I would open a bookstore.'", pt: "Sophie: 'Se eu fosse mais velha, abriria uma livraria.'" },
    { img: IMG.LUCAS, en: "Lucas: 'Teamwork is more important than any title.'", pt: "Lucas: 'Trabalho em equipe é mais importante que qualquer cargo.'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'Every big dream starts small!'", pt: "Ms. Anna: 'Todo grande sonho começa pequeno!'" },
  ],
  DIALOG: [
    { who: "Ms. Anna", img: IMG.ANNA, en: "If you could choose any job, what would it be?", pt: "Se você pudesse escolher qualquer profissão, qual seria?" },
    { who: "Kenji", img: IMG.KENJI, en: "I would love to be a software engineer.", pt: "Adoraria ser engenheiro de software." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "What skills would you need?", pt: "Que habilidades você precisaria?" },
    { who: "Kenji", img: IMG.KENJI, en: "Math, English, teamwork and creativity.", pt: "Matemática, inglês, trabalho em equipe e criatividade." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Great answer. Would you work abroad?", pt: "Boa resposta. Você trabalharia fora?" },
    { who: "Kenji", img: IMG.KENJI, en: "If I had the chance, I would try Japan or Canada.", pt: "Se tivesse a chance, tentaria Japão ou Canadá." },
  ],
  READING: {
    title: "The Skills of the Future",
    img: IMG.CITY_COVER,
    parts: [
      { en: "Future jobs will need creativity, empathy and adaptability.", pt: "Empregos futuros vão exigir criatividade, empatia e adaptabilidade.", highlight: ["creativity", "empathy", "adaptability"] },
      { en: "Technical skills matter, but soft skills matter even more.", pt: "Habilidades técnicas importam, mas habilidades socioemocionais importam ainda mais.", highlight: ["soft skills"] },
      { en: "If you learn to work in teams, you will succeed anywhere.", pt: "Se você aprender a trabalhar em equipe, terá sucesso em qualquer lugar.", highlight: ["work in teams"] },
      { en: "A leader is not someone who commands, but someone who inspires.", pt: "Líder não é quem manda, é quem inspira.", highlight: ["leader", "inspires"] },
      { en: "Your career is a journey — pack curiosity and courage.", pt: "Sua carreira é uma jornada — leve curiosidade e coragem.", highlight: ["journey"] },
    ],
  },
  WRITING: [
    { prompt: "If I ______ a million dollars, I would travel. (have)", answer: "had", hint: "Second Conditional: IF + Simple Past.", options: ["had", "have", "would have"], explain: "Second Conditional: no 'if' vai o Simple Past (had)." },
    { prompt: "If I ______ you, I would study harder. (be)", answer: "were", hint: "'If I WERE you' — expressão fixa.", options: ["were", "was", "am"] },
    { prompt: "I ______ love to be a teacher.", answer: "would", hint: "'Would love' = adoraria (desejo hipotético).", options: ["would", "will", "am"] },
    { prompt: "In an interview you ______ be confident.", answer: "should", hint: "Conselho = SHOULD.", options: ["should", "must", "would"] },
    { prompt: "If she ______ more time, she would start a business.", answer: "had", hint: "Second Conditional.", options: ["had", "has", "have"] },
    { prompt: "A good leader ______ listen carefully.", answer: "should", hint: "Recomendação.", options: ["should", "would", "must not"] },
    { prompt: "'Teamwork' significa:", answer: "Trabalho em equipe", hint: "Team + work.", options: ["Trabalho em equipe", "Time de futebol", "Tarefa"] },
  ],
  QUIZ: [
    { q: "Second Conditional: 'If I ___ rich, I would help others.'", options: [{ text: "am" }, { text: "was" }, { text: "were", correct: true, explain: "Em inglês formal: 'If I WERE'." }] },
    { q: "'Interview' significa:", options: [{ text: "Entrevista", correct: true }, { text: "Currículo" }, { text: "Reunião" }] },
    { q: "Second Conditional: 'If I had money, I ___ travel.'", options: [{ text: "will" }, { text: "would", correct: true }, { text: "am going to" }] },
    { q: "'Leadership' significa:", options: [{ text: "Liderança", correct: true }, { text: "Loja" }, { text: "Liberdade" }] },
    { q: "Estrutura do Second Conditional:", options: [{ text: "IF + Simple Present, ... will + verb" }, { text: "IF + Simple Past, ... would + verb", correct: true }, { text: "IF + Past Perfect, ... would have + verb" }] },
    { q: "'Resume' significa:", options: [{ text: "Resumir" }, { text: "Currículo", correct: true }, { text: "Retomar" }] },
    { q: "Melhor habilidade em entrevista:", options: [{ text: "Falar rápido" }, { text: "Escutar e responder com clareza", correct: true }, { text: "Falar sobre outros" }] },
    { q: "'Teamwork' é essencial porque:", options: [{ text: "Você não precisa pensar" }, { text: "Sozinho vamos rápido, juntos vamos longe", correct: true }, { text: "Você comanda todo mundo" }] },
  ],
  REAL_LIFE: [
    { situation: "💭 Sonho profissional.", answer: "I would love to be a software engineer." },
    { situation: "🎤 Numa entrevista.", answer: "You should be confident and speak clearly." },
    { situation: "🤝 Falando de equipe.", answer: "Teamwork makes the dream work." },
    { situation: "💡 Hipótese (Second Conditional).", answer: "If I had my own company, I would help students learn." },
    { situation: "👑 Sobre liderança.", answer: "A good leader listens more than they speak." },
  ],
  GRAMMAR: {
    focus: "Second Conditional & Modais de aconselhamento",
    why:
      "Second Conditional serve pra imaginar situações HIPOTÉTICAS ou IRREAIS no presente: IF + Simple Past, ... WOULD + verbo. Em inglês formal usamos WERE pra todas as pessoas no if ('If I were you'). Modais SHOULD/COULD dão conselhos e possibilidades.",
    examples: [
      { en: "If I HAD a car, I WOULD drive to school.", pt: "Se eu tivesse carro, iria dirigindo pra escola." },
      { en: "If I WERE you, I WOULD study English every day.", pt: "Se eu fosse você, estudaria inglês todo dia." },
      { en: "You SHOULD be honest in interviews.", pt: "Você deveria ser honesto em entrevistas." },
      { en: "You COULD learn a lot from online courses.", pt: "Você poderia aprender muito com cursos online." },
    ],
    errors: [
      { wrong: "If I would have money, I travel.", right: "If I HAD money, I WOULD travel.", why: "'Would' não vai no 'if' do Second Conditional." },
      { wrong: "If I was you, I would study.", right: "If I WERE you, I would study.", why: "Inglês formal usa 'were' pra todas as pessoas." },
      { wrong: "You should to be confident.", right: "You SHOULD BE confident.", why: "Depois de SHOULD/COULD não vai 'to'." },
      { wrong: "I would to travel the world.", right: "I WOULD TRAVEL the world.", why: "'Would' + verbo no infinitivo sem 'to'." },
    ],
  },
  SONG: {
    title: "If I Could",
    verses: [
      { en: "If I could build a great career,", pt: "Se eu pudesse construir uma grande carreira,", emoji: "💼" },
      { en: "I would choose to serve and care.", pt: "Escolheria servir e cuidar.", emoji: "❤️" },
      { en: "A resume is more than words,", pt: "Um currículo é mais que palavras,", emoji: "📄" },
      { en: "It's the story of my worth.", pt: "É a história do meu valor.", emoji: "✨" },
    ],
  },
  HUNTER: {
    intro: "Second Conditional ou modal?",
    rounds: [
      { promptEn: "If I ___ rich, I would help people.", promptPt: "If I ___ rich, I would help people.", targetLabel: "were", objects: [
        { id: "a", label: "am", img: "" }, { id: "b", label: "were", isTarget: true, img: "" }, { id: "c", label: "have", img: "" },
      ]},
      { promptEn: "If I had money, I ___ travel.", promptPt: "If I had money, I ___ travel.", targetLabel: "would", objects: [
        { id: "a", label: "will", img: "" }, { id: "b", label: "would", isTarget: true, img: "" }, { id: "c", label: "am going to", img: "" },
      ]},
      { promptEn: "You ___ be confident in interviews.", promptPt: "You ___ be confident in interviews.", targetLabel: "should", objects: [
        { id: "a", label: "should", isTarget: true, img: "" }, { id: "b", label: "would", img: "" }, { id: "c", label: "were", img: "" },
      ]},
      { promptEn: "'Interview' =", promptPt: "'Interview' =", targetLabel: "Entrevista", objects: [
        { id: "a", label: "Entrevista", isTarget: true, img: "" }, { id: "b", label: "Currículo", img: "" }, { id: "c", label: "Reunião", img: "" },
      ]},
      { promptEn: "You ___ learn online (possibilidade).", promptPt: "You ___ learn online (possibilidade).", targetLabel: "could", objects: [
        { id: "a", label: "would", img: "" }, { id: "b", label: "could", isTarget: true, img: "" }, { id: "c", label: "must", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Palavra → tradução:",
    pairs: [
      { id: "a", en: "Career 💼", pt: "Carreira", img: IMG.CITY_COVER },
      { id: "b", en: "Interview 🎤", pt: "Entrevista", img: IMG.ANNA },
      { id: "c", en: "Skills ⚡", pt: "Habilidades", img: IMG.LUCAS },
      { id: "d", en: "Teamwork 🤝", pt: "Trabalho em equipe", img: IMG.FRIENDS },
    ],
  },
  BOOK: {
    title: "My Career Plan",
    intro: "Seu plano profissional pessoal.",
    pages: [
      { en: "Page 1 — My dream job is ___.", pt: "Pág. 1 — Meu emprego dos sonhos é ___.", img: IMG.KENJI, badge: "💭" },
      { en: "Page 2 — My best skills are ___.", pt: "Pág. 2 — Minhas melhores habilidades são ___.", img: IMG.LUCAS, badge: "⚡" },
      { en: "Page 3 — If I had my own company, I would ___.", pt: "Pág. 3 — Se eu tivesse minha empresa, eu ___.", img: IMG.SOPHIE, badge: "🏢" },
      { en: "Page 4 — In five years, I would like to ___.", pt: "Pág. 4 — Em cinco anos, eu gostaria de ___.", img: IMG.MAYA, badge: "🎯" },
      { en: "The End — Big dreams, small steps.", pt: "Fim — Grandes sonhos, pequenos passos.", img: IMG.SCHOOL, badge: "🌟" },
    ],
  },
  CULTURE: {
    title: "Careers Around the World 🌍",
    emoji: "💼",
    paragraphs: [
      { en: "Studies show most kids today will work in jobs that don't exist yet.", pt: "Estudos mostram que a maioria das crianças hoje vai trabalhar em profissões que ainda não existem." },
      { en: "The most valuable skills globally: communication, teamwork and problem solving.", pt: "As habilidades mais valorizadas globalmente: comunicação, trabalho em equipe e resolução de problemas." },
      { pt: "Não escolhemos só uma profissão — construímos uma trajetória." },
    ],
  },
};

export default lesson;
