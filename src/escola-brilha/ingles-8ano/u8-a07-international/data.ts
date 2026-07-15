// Inglês 8º Ano — Unit 7 "International Challenge 🌎"
// Projeto Integrador · Revisão geral · My English Portfolio — Level 3
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u8-a07-international",
  meta: {
    unitLabel: "Unit 7 · Final Mission — International Challenge 🌎",
    headerKicker: "SPEB 1.0 · English Academy — 8th Grade",
    coverKicker: "Global Debate · Research · Portfolio",
    coverTitle: "International Challenge 🌎",
    coverSubtitle:
      "Missão final: use TUDO que aprendeu — Present Perfect, Past, Future, Conditionals, Reported Speech, Modais — pra resolver um desafio internacional.",
    storyTitle: "The International Challenge",
    vocabularyTitle: "Global Mission",
    speakingTargets: [
      "I have learned so much this year.",
      "If we work together, we will change the world.",
      "The report said that climate action is urgent.",
      "We should support young leaders everywhere.",
      "In the future, I am going to keep learning English.",
      "If I could speak to the world, I would ask for peace.",
    ],
    listeningIntro: "Ouça o pronunciamento de Ms. Anna abrindo o desafio.",
    listeningQuestion:
      'Ms. Anna disse: "You have grown so much this year. If you keep learning, you will become fluent." O que ela quer dizer?',
    listeningOptions: [
      "Eles só vão aprender depois",
      "Eles cresceram muito e continuando vão ficar fluentes",
      "Eles já são fluentes",
    ],
    listeningCorrect: "Eles cresceram muito e continuando vão ficar fluentes",
    listeningWrongHint: "'have grown' = Present Perfect (crescimento até agora); 'if you keep... you will' = First Conditional.",
    readingNarration:
      "O mundo enfrenta desafios: clima, desigualdade, tecnologia. Jovens ao redor do mundo usam suas vozes pra propor soluções. Sua vez chegou.",
    grammarNarration:
      "Revisão geral: Present Simple/Continuous, Past Simple/Continuous, Present Perfect, Will/Going To, First & Second Conditional, Reported Speech, Modais. Cada tempo tem sua função — use o certo pra ser entendido.",
    finalProjectIntro: "Escreva a página de abertura do seu portfólio. Digite seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY ENGLISH PORTFOLIO — LEVEL 3 — Author: ${name}. This year at English Academy has changed me. I have learned to talk about human rights, media, science, environment, literature and careers — all in English. I traveled with my words and I discovered that language is a bridge, not a wall. If more young people learned English well, they would share stronger voices with the world. In the future, I am going to keep reading, listening and speaking every day. I might not be perfect, but I am proud. My English journey continues — and my portfolio is only chapter three. See you in Level 4!`,
    finalProjectSectionTitle: "My English Portfolio — Level 3",
  },
  VOCAB: [
    { id: "challenge", en: "Challenge 🎯", pt: "Desafio", img: IMG.CITY_COVER },
    { id: "mission", en: "Mission 🚀", pt: "Missão", img: IMG.KENJI },
    { id: "research", en: "Research 🔬", pt: "Pesquisa", img: IMG.LIBRARY },
    { id: "debate", en: "Debate 💬", pt: "Debate", img: IMG.CLASS },
    { id: "solution", en: "Solution 💡", pt: "Solução", img: IMG.SOPHIE },
    { id: "portfolio", en: "Portfolio 📁", pt: "Portfólio", img: IMG.ANNA },
    { id: "global", en: "Global 🌍", pt: "Global", img: IMG.PASSPORT },
    { id: "future", en: "Future ✨", pt: "Futuro", img: IMG.MAYA },
  ],
  STORY: [
    { img: IMG.ANNA, en: "Ms. Anna: 'Team, your international mission starts now.'", pt: "Ms. Anna: 'Equipe, sua missão internacional começa agora.'" },
    { img: IMG.KENJI, en: "Kenji: 'I have researched clean energy for weeks.'", pt: "Kenji: 'Pesquisei energia limpa por semanas.'" },
    { img: IMG.MAYA, en: "Maya: 'If we present in English, more people will listen.'", pt: "Maya: 'Se apresentarmos em inglês, mais gente vai ouvir.'" },
    { img: IMG.SOPHIE, en: "Sophie: 'I would love to speak at a global summit.'", pt: "Sophie: 'Eu adoraria falar numa cúpula global.'" },
    { img: IMG.LUCAS, en: "Lucas: 'We must be ready — the world is watching.'", pt: "Lucas: 'Temos que estar prontos — o mundo está olhando.'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'You are ready. You are the change.'", pt: "Ms. Anna: 'Vocês estão prontos. Vocês são a mudança.'" },
  ],
  DIALOG: [
    { who: "Ms. Anna", img: IMG.ANNA, en: "What is your mission topic, Kenji?", pt: "Qual é o tema da sua missão, Kenji?" },
    { who: "Kenji", img: IMG.KENJI, en: "Clean energy for schools in poor communities.", pt: "Energia limpa pra escolas em comunidades pobres." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Have you finished your research?", pt: "Você terminou sua pesquisa?" },
    { who: "Kenji", img: IMG.KENJI, en: "Yes, and I have interviewed five experts.", pt: "Sim, e entrevistei cinco especialistas." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Wonderful! If your project wins, what will you do?", pt: "Maravilhoso! Se seu projeto ganhar, o que vai fazer?" },
    { who: "Kenji", img: IMG.KENJI, en: "I will donate part of the prize to a school in Brazil.", pt: "Vou doar parte do prêmio pra uma escola no Brasil." },
  ],
  READING: {
    title: "Young Voices Change the World",
    img: IMG.CITY_COVER,
    parts: [
      { en: "Greta Thunberg was 15 when she started her climate protest.", pt: "Greta Thunberg tinha 15 anos quando começou seu protesto pelo clima.", highlight: ["15", "climate protest"] },
      { en: "Malala Yousafzai has fought for girls' education since she was a teenager.", pt: "Malala Yousafzai luta pela educação de meninas desde adolescente.", highlight: ["fought", "education"] },
      { en: "Boyan Slat invented a machine to clean the oceans when he was 18.", pt: "Boyan Slat inventou uma máquina pra limpar oceanos aos 18 anos.", highlight: ["invented", "clean the oceans"] },
      { en: "If you have a voice, you can change your city, your country, your world.", pt: "Se você tem uma voz, pode mudar sua cidade, seu país, seu mundo.", highlight: ["change"] },
      { en: "The next great leader might be reading this right now.", pt: "O próximo grande líder pode estar lendo isso agora.", highlight: ["might"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ so much this year. (learn — Present Perfect)", answer: "have learned", hint: "'this year' + experiência = Present Perfect.", options: ["have learned", "learned", "learn"], explain: "Present Perfect: HAVE + learned." },
    { prompt: "If we work together, we ______ change the world.", answer: "will", hint: "First Conditional: will + verb.", options: ["will", "would", "are going to"] },
    { prompt: "She said that the report ______ true.", answer: "was", hint: "Reported speech: 'is' → 'was'.", options: ["was", "is", "were"] },
    { prompt: "If I ______ to speak to the world, I would ask for peace.", answer: "could", hint: "Second Conditional com 'could' hipotético.", options: ["could", "can", "will"] },
    { prompt: "In five years, I ______ study in another country.", answer: "am going to", hint: "Plano futuro = GOING TO.", options: ["am going to", "will", "would"] },
    { prompt: "You ______ never give up on your dreams.", answer: "should", hint: "Conselho forte.", options: ["should", "would", "are"] },
    { prompt: "'Portfolio' significa:", answer: "Portfólio", hint: "Coleção de trabalhos.", options: ["Portfólio", "Porta" , "Politiquinha"] },
  ],
  QUIZ: [
    { q: "Present Perfect: 'I ___ so much this year.'", options: [{ text: "learned" }, { text: "have learned", correct: true }, { text: "am learning" }] },
    { q: "First Conditional: 'If we work together, we ___ succeed.'", options: [{ text: "would" }, { text: "will", correct: true }, { text: "are" }] },
    { q: "Reported: 'The news ___ that the plan was good.'", options: [{ text: "say" }, { text: "said", correct: true }, { text: "is saying" }] },
    { q: "Second Conditional: 'If I ___ president, I would help schools.'", options: [{ text: "am" }, { text: "were", correct: true }, { text: "have" }] },
    { q: "Plano: 'Next year I ___ study abroad.'", options: [{ text: "am going to", correct: true }, { text: "will" }, { text: "study" }] },
    { q: "Past Continuous: 'I ___ TV when the news came.'", options: [{ text: "watched" }, { text: "was watching", correct: true }, { text: "watch" }] },
    { q: "'Debate' significa:", options: [{ text: "Debate", correct: true }, { text: "Data" }, { text: "Ditado" }] },
    { q: "O portfólio final é:", options: [{ text: "Uma prova escrita" }, { text: "Uma coleção dos seus melhores trabalhos", correct: true }, { text: "Um exame oral" }] },
  ],
  REAL_LIFE: [
    { situation: "🌟 Sobre seu crescimento.", answer: "I have learned so much English this year!" },
    { situation: "🌍 Se pudesse falar ao mundo.", answer: "If I could speak to the world, I would ask for peace." },
    { situation: "🚀 Seus planos.", answer: "Next year I am going to keep practicing English every day." },
    { situation: "💬 Num debate.", answer: "I strongly believe that education is the key to change." },
    { situation: "📁 Apresentando o portfólio.", answer: "This is my English Portfolio — Level 3. Welcome!" },
  ],
  GRAMMAR: {
    focus: "Revisão Geral — Todos os tempos",
    why:
      "Você já sabe: Present Simple/Continuous, Past Simple/Continuous, Present Perfect, Will, Going To, First & Second Conditional, Reported Speech, Modais. Neste desafio use CADA UM no contexto certo. O grande salto do 8º ano é imaginar (Second Conditional) e relatar (Reported Speech).",
    examples: [
      { en: "I HAVE STUDIED English for 8 years. (Present Perfect)", pt: "Estudo inglês há 8 anos." },
      { en: "If I HAD more time, I WOULD read more books. (Second Cond.)", pt: "Se tivesse mais tempo, leria mais livros." },
      { en: "She said the world NEEDED us. (Reported Speech)", pt: "Ela disse que o mundo precisava de nós." },
      { en: "If we ACT now, we WILL win. (First Conditional)", pt: "Se agirmos agora, venceremos." },
    ],
    errors: [
      { wrong: "I have studied English last year.", right: "I STUDIED English last year.", why: "Tempo definido → Simple Past." },
      { wrong: "If I would be you, I would help.", right: "If I WERE you, I would help.", why: "'Would' não aparece no 'if' do Second Conditional." },
      { wrong: "She said me the truth.", right: "She TOLD me the truth. / She SAID the truth.", why: "SAY não leva objeto direto de pessoa; TELL sim." },
      { wrong: "Next year I will study abroad, I planned it.", right: "Next year I'M GOING TO study abroad.", why: "Plano decidido antes → GOING TO." },
    ],
  },
  SONG: {
    title: "My English Journey",
    verses: [
      { en: "I have learned, I have grown,", pt: "Aprendi, cresci,", emoji: "🌱" },
      { en: "In English now I feel at home.", pt: "Em inglês agora me sinto em casa.", emoji: "🏠" },
      { en: "If I keep going, I will fly,", pt: "Se eu continuar, vou voar,", emoji: "🕊️" },
      { en: "Level 3, and reaching high!", pt: "Nível 3, alcançando o alto!", emoji: "🚀" },
    ],
  },
  HUNTER: {
    intro: "Escolha o tempo verbal certo!",
    rounds: [
      { promptEn: "I ___ English for 3 years (Present Perfect).", promptPt: "I ___ English for 3 years (Present Perfect).", targetLabel: "have studied", objects: [
        { id: "a", label: "studied", img: "" }, { id: "b", label: "have studied", isTarget: true, img: "" }, { id: "c", label: "study", img: "" },
      ]},
      { promptEn: "If I ___ rich, I would travel (Second Cond.).", promptPt: "If I ___ rich, I would travel.", targetLabel: "were", objects: [
        { id: "a", label: "am", img: "" }, { id: "b", label: "were", isTarget: true, img: "" }, { id: "c", label: "have", img: "" },
      ]},
      { promptEn: "Next year I ___ study abroad (plan).", promptPt: "Next year I ___ study abroad (plan).", targetLabel: "am going to", objects: [
        { id: "a", label: "will", img: "" }, { id: "b", label: "am going to", isTarget: true, img: "" }, { id: "c", label: "would", img: "" },
      ]},
      { promptEn: "She ___ that the world needed us (reported).", promptPt: "She ___ that the world needed us (reported).", targetLabel: "said", objects: [
        { id: "a", label: "says", img: "" }, { id: "b", label: "said", isTarget: true, img: "" }, { id: "c", label: "tell", img: "" },
      ]},
      { promptEn: "'Portfolio' =", promptPt: "'Portfolio' =", targetLabel: "Portfólio", objects: [
        { id: "a", label: "Portfólio", isTarget: true, img: "" }, { id: "b", label: "Retrato", img: "" }, { id: "c", label: "Política", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Palavra → tradução:",
    pairs: [
      { id: "a", en: "Challenge 🎯", pt: "Desafio", img: IMG.CITY_COVER },
      { id: "b", en: "Mission 🚀", pt: "Missão", img: IMG.KENJI },
      { id: "c", en: "Debate 💬", pt: "Debate", img: IMG.CLASS },
      { id: "d", en: "Portfolio 📁", pt: "Portfólio", img: IMG.ANNA },
    ],
  },
  BOOK: {
    title: "My English Portfolio — Level 3",
    intro: "A coleção do seu ano inteiro.",
    pages: [
      { en: "Page 1 — My opinion article: ___.", pt: "Pág. 1 — Meu artigo de opinião: ___.", img: IMG.LIBRARY, badge: "📝" },
      { en: "Page 2 — My news report: ___.", pt: "Pág. 2 — Minha reportagem: ___.", img: IMG.CITY_COVER, badge: "📰" },
      { en: "Page 3 — My narrative: ___.", pt: "Pág. 3 — Minha narrativa: ___.", img: IMG.SOPHIE, badge: "📖" },
      { en: "Page 4 — My environmental project: ___.", pt: "Pág. 4 — Meu projeto ambiental: ___.", img: IMG.PARK, badge: "🌱" },
      { en: "Page 5 — My career plan: ___.", pt: "Pág. 5 — Meu plano de carreira: ___.", img: IMG.KENJI, badge: "💼" },
      { en: "The End — See you in Level 4!", pt: "Fim — Até o Nível 4!", img: IMG.SCHOOL, badge: "🎓" },
    ],
  },
  CULTURE: {
    title: "English — Language of Opportunity 🌍",
    emoji: "🇺🇸",
    paragraphs: [
      { en: "English is spoken by over 1.5 billion people around the world.", pt: "Inglês é falado por mais de 1,5 bilhão de pessoas no mundo." },
      { en: "It's the official language of science, aviation, technology and diplomacy.", pt: "É a língua oficial de ciência, aviação, tecnologia e diplomacia." },
      { pt: "Saber inglês abre portas — literalmente pro mundo todo." },
    ],
  },
};

export default lesson;
