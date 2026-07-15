// Inglês 9º Ano — Unit 1 "My Future Starts Now 🎯"
// Future with Will · Going To · Present Continuous (future) · Revisão
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u9-a01-my-future",
  meta: {
    unitLabel: "Unit 1 · Lesson 1 — My Future Starts Now 🎯",
    headerKicker: "SPEB 1.0 · English Academy — 9th Grade",
    coverKicker: "Goals · Career · Life Plans",
    coverTitle: "My Future Starts Now 🎯",
    coverSubtitle:
      "É o último ano do Ensino Fundamental. Hora de traçar metas e projetar seu futuro em inglês.",
    storyTitle: "Planning My Life",
    vocabularyTitle: "Goals & Career",
    speakingTargets: [
      "I will study medicine one day.",
      "I am going to take an English test next month.",
      "I am meeting my mentor tomorrow.",
      "My goal is to travel and study abroad.",
      "I want to develop new skills every year.",
      "What are you going to do after school?",
    ],
    listeningIntro: "Ouça Ms. Anna abrir a conversa sobre o futuro da turma.",
    listeningQuestion:
      "Ms. Anna disse: 'I'm going to open a career workshop next week.' O que ela quis dizer?",
    listeningOptions: [
      "Ela abriu um workshop de carreira semana passada",
      "Ela vai abrir um workshop de carreira na próxima semana",
      "Ela abre um workshop toda semana",
    ],
    listeningCorrect: "Ela vai abrir um workshop de carreira na próxima semana",
    listeningWrongHint: "'am/is/are going to' = plano futuro decidido.",
    readingNarration:
      "Planejar o futuro começa hoje. Definir metas claras, desenvolver habilidades e conhecer oportunidades ajuda você a construir a vida que quer. Estudo, esporte, arte, tecnologia — cada escolha abre um caminho.",
    grammarNarration:
      "Três formas de falar do futuro: WILL para decisões espontâneas e previsões (I will help you). GOING TO para planos e evidências (I am going to travel). Present Continuous com futuro para agendas fixas (I am meeting Dr. Silva tomorrow at 10).",
    finalProjectIntro: "Escreva seu Plano de Desenvolvimento Pessoal. Digite seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY FUTURE PORTFOLIO — Hi! My name is ${name}. In the next years I am going to finish High School and start university. I will study a subject that helps other people, because that's what makes me happy. I am also going to develop my English every day and travel to at least one country before I turn twenty. My main goals are: to be a responsible professional, to keep learning new skills and to make my family proud. The future belongs to those who prepare for it — and my future starts now.`,
    finalProjectSectionTitle: "My Future Portfolio",
  },
  VOCAB: [
    { id: "goals", en: "Goals 🎯", pt: "Metas", img: IMG.SCHOOL },
    { id: "career", en: "Career 💼", pt: "Carreira", img: IMG.ANNA },
    { id: "university", en: "University 🎓", pt: "Universidade", img: IMG.CLASS },
    { id: "highschool", en: "High school 🏫", pt: "Ensino Médio", img: IMG.SCHOOL_CITY },
    { id: "skills", en: "Skills 🛠️", pt: "Habilidades", img: IMG.KENJI },
    { id: "talents", en: "Talents ✨", pt: "Talentos", img: IMG.SOPHIE },
    { id: "opportunities", en: "Opportunities 🌟", pt: "Oportunidades", img: IMG.CITY_COVER },
    { id: "plans", en: "Future plans 🗓️", pt: "Planos futuros", img: IMG.MAYA },
    { id: "responsibilities", en: "Responsibilities 📋", pt: "Responsabilidades", img: IMG.LUCAS },
    { id: "decision", en: "Decision making 🤔", pt: "Tomada de decisão", img: IMG.FRIENDS },
  ],
  STORY: [
    { img: IMG.SCHOOL, en: "It's the final year of Fundamental. Time to plan the future.", pt: "É o último ano do Fundamental. Hora de planejar o futuro." },
    { img: IMG.ANNA, en: "Ms. Anna: 'What are you going to do after 9th grade?'", pt: "Ms. Anna: 'O que você vai fazer depois do 9º ano?'" },
    { img: IMG.MAYA, en: "Maya: 'I'm going to study biology. I love animals.'", pt: "Maya: 'Vou estudar biologia. Amo animais.'" },
    { img: IMG.KENJI, en: "Kenji: 'I will be an engineer and build sustainable cities.'", pt: "Kenji: 'Vou ser engenheiro e construir cidades sustentáveis.'" },
    { img: IMG.SOPHIE, en: "Sophie: 'I'm meeting a career mentor tomorrow.'", pt: "Sophie: 'Vou encontrar uma mentora de carreira amanhã.'" },
    { img: IMG.LUCAS, en: "Lucas: 'I want to develop new skills — coding and design.'", pt: "Lucas: 'Quero desenvolver habilidades novas — programação e design.'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'Great! Small steps today, big future tomorrow.'", pt: "Ms. Anna: 'Ótimo! Pequenos passos hoje, grande futuro amanhã.'" },
  ],
  DIALOG: [
    { who: "Ms. Anna", img: IMG.ANNA, en: "What are your plans after 9th grade, Maya?", pt: "Quais seus planos depois do 9º ano, Maya?" },
    { who: "Maya", img: IMG.MAYA, en: "I'm going to study at a technical high school.", pt: "Vou estudar em uma escola técnica." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "And what will you do after that?", pt: "E o que vai fazer depois disso?" },
    { who: "Maya", img: IMG.MAYA, en: "I'll probably go to university to study biology.", pt: "Provavelmente vou pra faculdade estudar biologia." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Are you meeting a counselor this week?", pt: "Você vai encontrar um orientador esta semana?" },
    { who: "Maya", img: IMG.MAYA, en: "Yes, I'm meeting her on Friday at 3.", pt: "Sim, vou encontrar ela sexta às 3." },
  ],
  READING: {
    title: "Planning Your Future in English",
    img: IMG.CITY_COVER,
    parts: [
      { en: "Your future starts with clear goals and honest self-knowledge.", pt: "Seu futuro começa com metas claras e autoconhecimento honesto.", highlight: ["clear goals"] },
      { en: "Identify your skills and talents — what do you do well?", pt: "Identifique suas habilidades e talentos — o que você faz bem?", highlight: ["skills", "talents"] },
      { en: "Discover opportunities in your city, online, and abroad.", pt: "Descubra oportunidades na sua cidade, online e no exterior.", highlight: ["opportunities"] },
      { en: "A good plan combines dreams with responsibilities.", pt: "Um bom plano combina sonhos com responsabilidades.", highlight: ["responsibilities"] },
      { en: "Decision making is a skill — practice it every day.", pt: "Tomar decisões é uma habilidade — pratique todo dia.", highlight: ["Decision making"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ study medicine one day. (decisão firme / previsão)", answer: "will", hint: "WILL = previsão / decisão espontânea.", options: ["will", "am", "did"], explain: "WILL usa-se para previsões e promessas sobre o futuro." },
    { prompt: "She ______ take an English test next month. (plano)", answer: "is going to", hint: "GOING TO = plano decidido.", options: ["is going to", "will", "goes"] },
    { prompt: "We ______ meeting our mentor tomorrow at 10. (agenda)", answer: "are", hint: "Present Continuous futuro: BE + verb-ing.", options: ["are", "will", "did"] },
    { prompt: "What ______ you do after 9th grade?", answer: "will", hint: "Pergunta aberta com WILL.", options: ["will", "did", "are"] },
    { prompt: "'Skills' significa:", answer: "Habilidades", hint: "Coisas que você aprende a fazer bem.", options: ["Habilidades", "Escolhas", "Estudos"] },
    { prompt: "I ______ probably travel abroad next year.", answer: "will", hint: "Previsão com 'probably' → WILL.", options: ["will", "am going", "am"] },
    { prompt: "'Career' significa:", answer: "Carreira", hint: "Trajetória profissional.", options: ["Carreira", "Carro", "Coragem"] },
  ],
  QUIZ: [
    { q: "Complete: I ___ help you carry those books! (decisão na hora)", options: [{ text: "will", correct: true, explain: "Decisão espontânea → WILL." }, { text: "am going to" }, { text: "am helping" }] },
    { q: "Complete: We ___ visit our grandma next Sunday. (plano)", options: [{ text: "will" }, { text: "are going to", correct: true, explain: "Plano decidido → GOING TO." }, { text: "visited" }] },
    { q: "Complete: I ___ my dentist tomorrow at 4pm. (agenda)", options: [{ text: "will meet" }, { text: "am meeting", correct: true, explain: "Agenda fixa → Present Continuous futuro." }, { text: "meet" }] },
    { q: "'Opportunities' significa:", options: [{ text: "Oportunidades", correct: true }, { text: "Oposições" }, { text: "Operações" }] },
    { q: "'Goals' significa:", options: [{ text: "Metas", correct: true }, { text: "Gols de futebol apenas" }, { text: "Coisas" }] },
    { q: "Complete: 'What are you ___ to do after school?'", options: [{ text: "going", correct: true }, { text: "will" }, { text: "did" }] },
    { q: "Melhor tradução de 'decision making':", options: [{ text: "Tomada de decisão", correct: true }, { text: "Decisão de fazer" }, { text: "Fazer decisão" }] },
    { q: "Traçar seu futuro exige:", options: [{ text: "Só sorte" }, { text: "Metas, habilidades e ação", correct: true }, { text: "Esperar acontecer" }] },
  ],
  REAL_LIFE: [
    { situation: "🎯 Falando de um plano.", answer: "I'm going to study English every day this year." },
    { situation: "🎓 Sobre a faculdade.", answer: "I will probably go to university to study engineering." },
    { situation: "📅 Sobre uma agenda.", answer: "I'm meeting my mentor tomorrow at 5 p.m." },
    { situation: "🛠️ Sobre habilidades.", answer: "I want to develop my communication and problem-solving skills." },
    { situation: "🤔 Perguntando ao amigo.", answer: "What are you going to do after 9th grade?" },
  ],
  GRAMMAR: {
    focus: "Future: Will × Going To × Present Continuous",
    why:
      "WILL: previsão, promessa, decisão na hora. GOING TO: plano/intenção já decidida, ou evidência (look at those clouds — it's going to rain). PRESENT CONTINUOUS futuro: compromissos com hora/data marcada (I'm having dinner with them on Friday).",
    examples: [
      { en: "I WILL call you later. (promessa)", pt: "Eu ligo pra você depois. (promessa)" },
      { en: "I AM GOING TO study French next year. (plano)", pt: "Vou estudar francês no ano que vem. (plano)" },
      { en: "I AM MEETING the doctor at 10. (agenda)", pt: "Tenho consulta com o médico às 10. (agenda)" },
      { en: "It WILL rain tomorrow. (previsão)", pt: "Vai chover amanhã. (previsão)" },
    ],
    errors: [
      { wrong: "I will to study medicine.", right: "I WILL STUDY medicine.", why: "Depois de WILL vai o verbo sem TO." },
      { wrong: "I am going travel next week.", right: "I am GOING TO travel next week.", why: "Estrutura é BE + GOING TO + verbo." },
      { wrong: "I meet the dentist tomorrow at 4.", right: "I AM MEETING the dentist tomorrow at 4.", why: "Agenda fixa → Present Continuous futuro." },
      { wrong: "She wills call.", right: "She WILL call.", why: "WILL não muda na 3ª pessoa." },
    ],
  },
  SONG: {
    title: "My Future Anthem",
    hookPt: "Cante seu manifesto pessoal.",
    verses: [
      { en: "I will build the life I dream,", pt: "Vou construir a vida dos meus sonhos,", emoji: "🎯" },
      { en: "I'm going to work as a team.", pt: "Vou trabalhar em equipe.", emoji: "🤝" },
      { en: "Skills and talents in my hand,", pt: "Habilidades e talentos na mão,", emoji: "✨" },
      { en: "My future is what I planned.", pt: "Meu futuro é o que eu planejei.", emoji: "🌟" },
    ],
  },
  HUNTER: {
    intro: "WILL, GOING TO ou PRESENT CONTINUOUS? Caça a forma certa!",
    rounds: [
      { promptEn: "OK, I ___ open the door for you.", promptPt: "OK, I ___ open the door for you.", targetLabel: "will", objects: [
        { id: "a", label: "will", img: "", isTarget: true },
        { id: "b", label: "am going to", img: "" },
        { id: "c", label: "am opening", img: "" },
      ]},
      { promptEn: "I ___ travel to Japan next summer. (plano)", promptPt: "I ___ travel to Japan next summer. (plano)", targetLabel: "am going to", objects: [
        { id: "a", label: "will", img: "" },
        { id: "b", label: "am going to", img: "", isTarget: true },
        { id: "c", label: "travel", img: "" },
      ]},
      { promptEn: "She ___ meeting the coach at 6 today. (agenda)", promptPt: "She ___ meeting the coach at 6 today. (agenda)", targetLabel: "is", objects: [
        { id: "a", label: "will", img: "" },
        { id: "b", label: "is", img: "", isTarget: true },
        { id: "c", label: "does", img: "" },
      ]},
      { promptEn: "'Career' =", promptPt: "'Career' =", targetLabel: "Carreira", objects: [
        { id: "a", label: "Carreira", img: "", isTarget: true },
        { id: "b", label: "Carrinho", img: "" },
        { id: "c", label: "Carga", img: "" },
      ]},
      { promptEn: "'Skills' =", promptPt: "'Skills' =", targetLabel: "Habilidades", objects: [
        { id: "a", label: "Escolhas", img: "" },
        { id: "b", label: "Habilidades", img: "", isTarget: true },
        { id: "c", label: "Escadas", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares palavra → tradução:",
    pairs: [
      { id: "a", en: "Goals 🎯", pt: "Metas", img: IMG.SCHOOL },
      { id: "b", en: "Career 💼", pt: "Carreira", img: IMG.ANNA },
      { id: "c", en: "Skills 🛠️", pt: "Habilidades", img: IMG.KENJI },
      { id: "d", en: "Opportunities 🌟", pt: "Oportunidades", img: IMG.CITY_COVER },
    ],
  },
  BOOK: {
    title: "My Future Portfolio",
    intro: "Seu portfólio de projetos e sonhos.",
    pages: [
      { en: "Page 1 — After 9th grade I will ___.", pt: "Pág. 1 — Depois do 9º ano vou ___.", img: IMG.SCHOOL, badge: "🎯" },
      { en: "Page 2 — My biggest goal is ___.", pt: "Pág. 2 — Minha maior meta é ___.", img: IMG.ANNA, badge: "🎓" },
      { en: "Page 3 — I'm developing ___ (skill).", pt: "Pág. 3 — Estou desenvolvendo ___ (habilidade).", img: IMG.KENJI, badge: "🛠️" },
      { en: "Page 4 — My mentor is ___.", pt: "Pág. 4 — Meu(inha) mentor(a) é ___.", img: IMG.SOPHIE, badge: "✨" },
      { en: "The End — My future starts now!", pt: "Fim — Meu futuro começa agora!", img: IMG.CITY_COVER, badge: "🌟" },
    ],
  },
  CULTURE: {
    title: "Life After 9th Grade Around the World 🌎",
    emoji: "🎓",
    paragraphs: [
      { en: "In the USA and UK, students choose electives that shape their careers as early as age 14.", pt: "Nos EUA e Reino Unido, alunos escolhem disciplinas eletivas que moldam a carreira já aos 14 anos." },
      { en: "In Germany, there is a dual system that combines school and internship in a real company.", pt: "Na Alemanha, existe o sistema dual que combina escola e estágio em empresa real." },
      { pt: "No Brasil, além do Ensino Médio regular, há opções técnicas, integradas e programas de intercâmbio — planejar cedo abre mais portas." },
    ],
  },
};

export default lesson;
