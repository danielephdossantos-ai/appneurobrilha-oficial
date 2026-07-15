// Inglês 9º Ano — Unit 2 "Media, Technology & Digital Citizenship 💻"
// Passive Voice (introdução) · Reported Speech (continuação)
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u9-a02-digital-citizenship",
  meta: {
    unitLabel: "Unit 2 · Lesson 2 — Media, Technology & Digital Citizenship 💻",
    headerKicker: "SPEB 1.0 · English Academy — 9th Grade",
    coverKicker: "AI · Privacy · Fake News · Ethics",
    coverTitle: "Media, Technology & Digital Citizenship 💻",
    coverSubtitle:
      "Aprenda a navegar o mundo digital com ética, segurança e senso crítico — em inglês.",
    storyTitle: "The Digital Citizens Club",
    vocabularyTitle: "Digital World",
    speakingTargets: [
      "Fake news are shared very quickly online.",
      "My data is protected by strong passwords.",
      "She said that AI can help doctors.",
      "He told me privacy is a human right.",
      "I check my digital footprint every month.",
      "Cybersecurity is everyone's responsibility.",
    ],
    listeningIntro: "Ouça Kenji apresentar o clube de cidadania digital.",
    listeningQuestion:
      "Kenji disse: 'This app was built to check fake news.' O que isso significa?",
    listeningOptions: [
      "O app construiu notícias falsas",
      "O app foi construído para verificar notícias falsas",
      "O app vai construir notícias novas",
    ],
    listeningCorrect: "O app foi construído para verificar notícias falsas",
    listeningWrongHint: "'was built' = Passive Voice no passado: quem faz é o objeto do interesse.",
    readingNarration:
      "Cidadania digital é usar a tecnologia com respeito, segurança e ética. Proteger dados, checar informações antes de compartilhar e respeitar a privacidade de outras pessoas são atitudes básicas.",
    grammarNarration:
      "Passive Voice: BE + past participle. Quando quem faz não é o mais importante. 'The email was sent' — o e-mail foi enviado. Reported Speech: passa fala direta para indireta. 'I like coffee' → 'She said (that) she liked coffee'.",
    finalProjectIntro: "Crie sua Campanha de Cidadania Digital. Digite seu nome:",
    finalProjectPhrase: (name: string) =>
      `DIGITAL CITIZENSHIP CAMPAIGN — Hi! My name is ${name}. My message is simple: think before you click. Fake news are shared 6 times faster than true news, so we should always check the source before believing or sharing. Strong passwords protect our data, and privacy is a right. Artificial Intelligence is powerful, but it needs ethics. Being a good digital citizen is like being a good citizen in the street: respect, honesty and responsibility. The internet is what we make it — let's make it a safer place for everyone.`,
    finalProjectSectionTitle: "My Digital Citizenship Campaign",
  },
  VOCAB: [
    { id: "ai", en: "Artificial Intelligence 🤖", pt: "Inteligência Artificial", img: IMG.KENJI },
    { id: "cyber", en: "Cybersecurity 🔒", pt: "Cibersegurança", img: IMG.LUCAS },
    { id: "privacy", en: "Privacy 🕵️", pt: "Privacidade", img: IMG.SOPHIE },
    { id: "fake", en: "Fake News 📰", pt: "Notícias falsas", img: IMG.CITY_COVER },
    { id: "footprint", en: "Digital footprint 👣", pt: "Pegada digital", img: IMG.MAYA },
    { id: "online", en: "Online learning 💻", pt: "Ensino online", img: IMG.SCHOOL },
    { id: "innovation", en: "Innovation 💡", pt: "Inovação", img: IMG.ANNA },
    { id: "ethics", en: "Ethics ⚖️", pt: "Ética", img: IMG.FRIENDS },
    { id: "data", en: "Data 📊", pt: "Dados", img: IMG.SHOPPING_MALL },
    { id: "password", en: "Password 🔑", pt: "Senha", img: IMG.LUCAS },
  ],
  STORY: [
    { img: IMG.SCHOOL, en: "The Digital Citizens Club opens its first meeting.", pt: "O Clube dos Cidadãos Digitais abre sua primeira reunião." },
    { img: IMG.KENJI, en: "Kenji: 'This app was built to detect fake news.'", pt: "Kenji: 'Este app foi construído para detectar fake news.'" },
    { img: IMG.SOPHIE, en: "Sophie: 'My mom said privacy must be respected online.'", pt: "Sophie: 'Minha mãe disse que a privacidade deve ser respeitada online.'" },
    { img: IMG.MAYA, en: "Maya: 'Data is stolen every second — use strong passwords!'", pt: "Maya: 'Dados são roubados a cada segundo — use senhas fortes!'" },
    { img: IMG.LUCAS, en: "Lucas: 'He told me AI can help doctors diagnose faster.'", pt: "Lucas: 'Ele me disse que a IA pode ajudar médicos a diagnosticar mais rápido.'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'Innovation without ethics is dangerous.'", pt: "Ms. Anna: 'Inovação sem ética é perigosa.'" },
    { img: IMG.FRIENDS, en: "Together they design a Digital Citizenship Campaign.", pt: "Juntos, eles criam uma Campanha de Cidadania Digital." },
  ],
  DIALOG: [
    { who: "Kenji", img: IMG.KENJI, en: "Have you seen this fake news? It was shared 10,000 times.", pt: "Você viu essa fake news? Foi compartilhada 10 mil vezes." },
    { who: "Sophie", img: IMG.SOPHIE, en: "Really? The source was not checked.", pt: "Sério? A fonte não foi checada." },
    { who: "Kenji", img: IMG.KENJI, en: "Exactly. My teacher said we must check three sources.", pt: "Exato. Minha professora disse que devemos checar três fontes." },
    { who: "Sophie", img: IMG.SOPHIE, en: "She told us privacy is also important — never share personal data.", pt: "Ela nos disse que privacidade também é importante — nunca compartilhe dados pessoais." },
    { who: "Kenji", img: IMG.KENJI, en: "Let's post a warning about it online.", pt: "Vamos postar um alerta sobre isso online." },
    { who: "Sophie", img: IMG.SOPHIE, en: "Great! Ethics first, always.", pt: "Ótimo! Ética em primeiro lugar, sempre." },
  ],
  READING: {
    title: "Being a Good Digital Citizen",
    img: IMG.CITY_COVER,
    parts: [
      { en: "A digital citizen uses technology with ethics and respect.", pt: "Um cidadão digital usa a tecnologia com ética e respeito.", highlight: ["ethics"] },
      { en: "Fake news is a virus — check the source before you share.", pt: "Fake news é um vírus — cheque a fonte antes de compartilhar.", highlight: ["Fake news", "source"] },
      { en: "Privacy and data must be protected with strong passwords.", pt: "Privacidade e dados devem ser protegidos com senhas fortes.", highlight: ["Privacy", "data"] },
      { en: "Artificial Intelligence is powerful but needs human ethics.", pt: "IA é poderosa, mas precisa de ética humana.", highlight: ["Artificial Intelligence"] },
      { en: "Your digital footprint follows you — leave a good one.", pt: "Sua pegada digital te acompanha — deixe uma boa.", highlight: ["digital footprint"] },
    ],
  },
  WRITING: [
    { prompt: "The email ______ sent yesterday. (Passive Past)", answer: "was", hint: "Passiva no passado: WAS/WERE + past participle.", options: ["was", "is", "did"], explain: "Passive Voice passado: BE (was/were) + past participle." },
    { prompt: "The passwords ______ changed every month. (Passive Present)", answer: "are", hint: "Sujeito plural + passiva presente.", options: ["are", "is", "were"] },
    { prompt: "She said (that) she ______ Python. (Reported Speech)", answer: "liked", hint: "Reported: presente vira passado.", options: ["liked", "likes", "will like"], explain: "No Reported Speech, presente simples → passado simples." },
    { prompt: "He told me privacy ______ important. (Reported)", answer: "was", hint: "'is' vira 'was' no reported.", options: ["was", "is", "were"] },
    { prompt: "'Cybersecurity' significa:", answer: "Cibersegurança", hint: "Segurança na internet.", options: ["Cibersegurança", "Ciberespaço", "Cibernético"] },
    { prompt: "Fake news ______ shared faster than real news. (Passive)", answer: "are", hint: "News é plural em contexto.", options: ["are", "is", "was"] },
    { prompt: "'Digital footprint' significa:", answer: "Pegada digital", hint: "Rastro que você deixa online.", options: ["Pegada digital", "Pé digital", "Passo digital"] },
  ],
  QUIZ: [
    { q: "Complete: The website ___ built in 2020. (Passive)", options: [{ text: "was", correct: true, explain: "Passiva passado: WAS/WERE + past participle." }, { text: "is" }, { text: "did" }] },
    { q: "Complete: My data ___ protected by a password. (Passive)", options: [{ text: "is", correct: true }, { text: "was" }, { text: "did" }] },
    { q: "Reported: She said 'I love this app.' → She said she ___ that app.", options: [{ text: "loved", correct: true, explain: "Presente → passado no reported." }, { text: "loves" }, { text: "will love" }] },
    { q: "'Ethics' significa:", options: [{ text: "Ética", correct: true }, { text: "Étnico" }, { text: "Ético só" }] },
    { q: "'Privacy' significa:", options: [{ text: "Privacidade", correct: true }, { text: "Privado" }, { text: "Preferência" }] },
    { q: "Fake news deve ser:", options: [{ text: "Compartilhada rápido" }, { text: "Checada antes de qualquer coisa", correct: true }, { text: "Ignorada só" }] },
    { q: "'Artificial Intelligence' significa:", options: [{ text: "Inteligência Artificial", correct: true }, { text: "Artigo Inteligente" }, { text: "Arte Inteligente" }] },
    { q: "Melhor senha:", options: [{ text: "123456" }, { text: "Uma combinação longa de letras, números e símbolos", correct: true }, { text: "Seu nome" }] },
  ],
  REAL_LIFE: [
    { situation: "📰 Vendo uma notícia estranha.", answer: "This news must be checked before I share it." },
    { situation: "🔒 Sobre a senha.", answer: "My password is changed every month for security." },
    { situation: "🤖 Sobre IA.", answer: "My teacher said AI can help doctors, but it needs ethics." },
    { situation: "👣 Sobre pegada digital.", answer: "I check my digital footprint every month." },
    { situation: "🕵️ Recusando dar dados.", answer: "Sorry, my personal data is private — I can't share it." },
  ],
  GRAMMAR: {
    focus: "Passive Voice + Reported Speech",
    why:
      "Passiva: BE + past participle. Foco no que sofre a ação. 'The letter was written by John'. Reported Speech: quando você conta o que alguém disse. Verbos e tempos 'recuam' um passo (present → past, will → would, can → could).",
    examples: [
      { en: "The app IS USED by millions.", pt: "O app é usado por milhões." },
      { en: "The data WAS STOLEN yesterday.", pt: "Os dados foram roubados ontem." },
      { en: "She said (that) she LIKED Python.", pt: "Ela disse que gostava de Python." },
      { en: "He told me (that) privacy WAS a right.", pt: "Ele me disse que privacidade era um direito." },
    ],
    errors: [
      { wrong: "The email sent by me.", right: "The email WAS SENT by me.", why: "Falta o BE — passiva precisa de BE + past participle." },
      { wrong: "She said she likes coffee.", right: "She said she LIKED coffee.", why: "Reported → presente vira passado." },
      { wrong: "He said me that...", right: "He TOLD me that... / He SAID that...", why: "SAY não pede pessoa; TELL pede." },
      { wrong: "The data are protect.", right: "The data ARE PROTECTED.", why: "Passiva pede past participle (protected)." },
    ],
  },
  SONG: {
    title: "Digital Citizen Song",
    hookPt: "Cante o hino da cidadania digital.",
    verses: [
      { en: "Every click leaves a mark,", pt: "Cada clique deixa uma marca,", emoji: "👣" },
      { en: "Even in the digital dark.", pt: "Mesmo no escuro digital.", emoji: "🌙" },
      { en: "Check the source, use your mind,", pt: "Cheque a fonte, use a mente,", emoji: "🧠" },
      { en: "Safer web for humankind.", pt: "Web mais segura para a humanidade.", emoji: "🌐" },
    ],
  },
  HUNTER: {
    intro: "Passiva ou Reported? Escolha certo!",
    rounds: [
      { promptEn: "The email ___ sent yesterday.", promptPt: "The email ___ sent yesterday.", targetLabel: "was", objects: [
        { id: "a", label: "was", img: "", isTarget: true },
        { id: "b", label: "is", img: "" },
        { id: "c", label: "did", img: "" },
      ]},
      { promptEn: "The site ___ used by millions.", promptPt: "The site ___ used by millions.", targetLabel: "is", objects: [
        { id: "a", label: "is", img: "", isTarget: true },
        { id: "b", label: "was", img: "" },
        { id: "c", label: "were", img: "" },
      ]},
      { promptEn: "She said she ___ Python. (I like)", promptPt: "She said she ___ Python. (I like)", targetLabel: "liked", objects: [
        { id: "a", label: "likes", img: "" },
        { id: "b", label: "liked", img: "", isTarget: true },
        { id: "c", label: "will like", img: "" },
      ]},
      { promptEn: "'Privacy' =", promptPt: "'Privacy' =", targetLabel: "Privacidade", objects: [
        { id: "a", label: "Privacidade", img: "", isTarget: true },
        { id: "b", label: "Privado", img: "" },
        { id: "c", label: "Preferência", img: "" },
      ]},
      { promptEn: "'Fake news' =", promptPt: "'Fake news' =", targetLabel: "Notícias falsas", objects: [
        { id: "a", label: "Notícias novas", img: "" },
        { id: "b", label: "Notícias falsas", img: "", isTarget: true },
        { id: "c", label: "Notícias famosas", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares palavra → tradução:",
    pairs: [
      { id: "a", en: "AI 🤖", pt: "Inteligência Artificial", img: IMG.KENJI },
      { id: "b", en: "Privacy 🕵️", pt: "Privacidade", img: IMG.SOPHIE },
      { id: "c", en: "Ethics ⚖️", pt: "Ética", img: IMG.FRIENDS },
      { id: "d", en: "Fake News 📰", pt: "Notícias falsas", img: IMG.CITY_COVER },
    ],
  },
  BOOK: {
    title: "My Digital Citizenship Campaign",
    intro: "Sua campanha visual de cidadania digital.",
    pages: [
      { en: "Page 1 — Before you share, ___.", pt: "Pág. 1 — Antes de compartilhar, ___.", img: IMG.CITY_COVER, badge: "📰" },
      { en: "Page 2 — Protect your ___ (data).", pt: "Pág. 2 — Proteja seus ___ (dados).", img: IMG.LUCAS, badge: "🔒" },
      { en: "Page 3 — Respect other people's ___.", pt: "Pág. 3 — Respeite a ___ das outras pessoas.", img: IMG.SOPHIE, badge: "🕵️" },
      { en: "Page 4 — Use AI with ___.", pt: "Pág. 4 — Use IA com ___.", img: IMG.KENJI, badge: "⚖️" },
      { en: "The End — Think before you click!", pt: "Fim — Pense antes de clicar!", img: IMG.SCHOOL, badge: "🌟" },
    ],
  },
  CULTURE: {
    title: "Digital Rights Around the World 🌐",
    emoji: "💻",
    paragraphs: [
      { en: "The EU has the GDPR — one of the strictest data protection laws in the world.", pt: "A UE tem o GDPR — uma das leis de proteção de dados mais rigorosas do mundo." },
      { en: "In Brazil, LGPD (2020) protects the personal data of every citizen.", pt: "No Brasil, a LGPD (2020) protege os dados pessoais de todo cidadão." },
      { pt: "Cidadania digital não é opcional — é a nova alfabetização do século XXI." },
    ],
  },
};

export default lesson;
