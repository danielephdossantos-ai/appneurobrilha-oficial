// Inglês 8º Ano — Unit 1 "Global Citizens 🌍"
// Present Perfect (introdução) · Simple Past × Present Perfect
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u8-a01-global-citizens",
  meta: {
    unitLabel: "Unit 1 · Lesson 1 — Global Citizens 🌍",
    headerKicker: "SPEB 1.0 · English Academy — 8th Grade",
    coverKicker: "Human Rights · Diversity · Community",
    coverTitle: "Global Citizens 🌍",
    coverSubtitle:
      "Você e a turma da Academy embarcam em uma campanha por diversidade e direitos humanos. Aprenda a falar de experiências com Present Perfect.",
    storyTitle: "The Global Citizen Campaign",
    vocabularyTitle: "Citizenship & Diversity",
    speakingTargets: [
      "I have joined a volunteer group.",
      "She has traveled to three countries.",
      "We have helped our community this year.",
      "Have you ever done volunteer work?",
      "Human rights are for everyone.",
      "Respect and inclusion make a better world.",
    ],
    listeningIntro: "Ouça Ms. Anna abrir a campanha 'Global Citizens'.",
    listeningQuestion:
      'Ms. Anna disse: "Maya has already helped in three community projects this year." O que isso significa?',
    listeningOptions: [
      "Maya vai ajudar em três projetos",
      "Maya já ajudou em três projetos este ano",
      "Maya ajudou uma vez no ano passado",
    ],
    listeningCorrect: "Maya já ajudou em três projetos este ano",
    listeningWrongHint: "'has already helped' = Present Perfect: ação passada com relevância AGORA.",
    readingNarration:
      "Cidadania global é sobre entender que somos parte de uma comunidade mundial. Respeito, inclusão, diversidade e direitos humanos são pilares. Um cidadão global age local e pensa global.",
    grammarNarration:
      "Present Perfect: HAVE/HAS + past participle (I have worked / She has gone). Usa pra experiências (Have you ever...?), ação recente com efeito agora (I have finished), tempo indefinido (already, just, yet, ever, never). Simple Past = tempo definido (yesterday, last week).",
    finalProjectIntro: "Escreva seu manifesto de cidadão global. Digite seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY GLOBAL CITIZEN MANIFESTO — Hi! My name is ${name}. I have learned that being a global citizen means caring about people, animals and the planet. This year I have joined a school project about diversity and I have helped clean my neighborhood twice. I have never been to another country, but I have friends from many cultures online. I believe that respect, inclusion and equality are basic human rights. Small actions change the world — and I want to be part of that change every day.`,
    finalProjectSectionTitle: "My Global Citizen Manifesto",
  },
  VOCAB: [
    { id: "rights", en: "Human rights ⚖️", pt: "Direitos humanos", img: IMG.CITY_COVER },
    { id: "diversity", en: "Diversity 🌈", pt: "Diversidade", img: IMG.FRIENDS },
    { id: "respect", en: "Respect 🤝", pt: "Respeito", img: IMG.ANNA },
    { id: "inclusion", en: "Inclusion 🫂", pt: "Inclusão", img: IMG.CLASS },
    { id: "community", en: "Community 🏘️", pt: "Comunidade", img: IMG.PARK },
    { id: "citizenship", en: "Citizenship 🌍", pt: "Cidadania", img: IMG.PASSPORT },
    { id: "volunteer", en: "Volunteer work 🙌", pt: "Trabalho voluntário", img: IMG.HOSPITAL },
    { id: "equality", en: "Equality ⚖️", pt: "Igualdade", img: IMG.SOPHIE },
    { id: "culture", en: "Culture 🎭", pt: "Cultura", img: IMG.MUSEUM },
    { id: "traditions", en: "Traditions 🎊", pt: "Tradições", img: IMG.MAYA },
  ],
  STORY: [
    { img: IMG.SCHOOL, en: "Today's Academy topic: what is a global citizen?", pt: "Tema da Academy hoje: o que é um cidadão global?" },
    { img: IMG.ANNA, en: "Ms. Anna: 'Have you ever helped your community?'", pt: "Ms. Anna: 'Você já ajudou sua comunidade?'" },
    { img: IMG.MAYA, en: "Maya: 'I have helped in three projects this year!'", pt: "Maya: 'Já ajudei em três projetos este ano!'" },
    { img: IMG.KENJI, en: "Kenji: 'I have never been abroad, but I read about many cultures.'", pt: "Kenji: 'Nunca fui pra fora, mas leio sobre muitas culturas.'" },
    { img: IMG.SOPHIE, en: "Sophie: 'My family has adopted a rescue dog from Ukraine.'", pt: "Sophie: 'Minha família adotou um cãozinho resgatado da Ucrânia.'" },
    { img: IMG.LUCAS, en: "Lucas: 'I have collected clothes for people in need.'", pt: "Lucas: 'Já coletei roupas pra pessoas necessitadas.'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'Small actions, global impact. Well done!'", pt: "Ms. Anna: 'Pequenas ações, impacto global. Muito bem!'" },
  ],
  DIALOG: [
    { who: "Ms. Anna", img: IMG.ANNA, en: "Have you ever done volunteer work, Maya?", pt: "Você já fez trabalho voluntário, Maya?" },
    { who: "Maya", img: IMG.MAYA, en: "Yes, I have. I have helped at a food bank.", pt: "Sim, já. Ajudei em um banco de alimentos." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "When did you start?", pt: "Quando você começou?" },
    { who: "Maya", img: IMG.MAYA, en: "I started last April, and I've been there five times.", pt: "Comecei em abril passado e já fui cinco vezes." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Wonderful. What have you learned?", pt: "Maravilhoso. O que você aprendeu?" },
    { who: "Maya", img: IMG.MAYA, en: "I have learned that we are stronger together.", pt: "Aprendi que somos mais fortes juntos." },
  ],
  READING: {
    title: "What Makes a Global Citizen?",
    img: IMG.CITY_COVER,
    parts: [
      { en: "A global citizen respects diversity and defends human rights.", pt: "Um cidadão global respeita a diversidade e defende direitos humanos.", highlight: ["global citizen", "human rights"] },
      { en: "You do not need to travel far — you can start in your own community.", pt: "Você não precisa viajar longe — pode começar na sua comunidade.", highlight: ["community"] },
      { en: "Volunteer work, inclusion and equality change lives.", pt: "Voluntariado, inclusão e igualdade mudam vidas.", highlight: ["Volunteer", "equality"] },
      { en: "Have you ever helped a neighbor? That's the first step.", pt: "Você já ajudou um vizinho? Esse é o primeiro passo.", highlight: ["Have you ever"] },
      { en: "Think global, act local — this is how the world gets better.", pt: "Pense global, aja local — é assim que o mundo melhora.", highlight: ["Think global, act local"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ ever seen such a beautiful place. (never)", answer: "have never", hint: "Present Perfect + never.", options: ["have never", "never", "didn't"], explain: "Present Perfect com 'never': HAVE + NEVER + past participle." },
    { prompt: "She ______ to three countries this year.", answer: "has traveled", hint: "3ª pessoa: HAS + past participle.", options: ["has traveled", "have traveled", "traveled"] },
    { prompt: "Have you ______ done volunteer work?", answer: "ever", hint: "'Have you ever...?' pergunta sobre experiência.", options: ["ever", "never", "already"] },
    { prompt: "We ______ our school garden last Saturday.", answer: "cleaned", hint: "Tempo definido → Simple Past.", options: ["cleaned", "have cleaned", "clean"], explain: "'Last Saturday' é tempo definido → Simple Past." },
    { prompt: "They ______ just finished the campaign.", answer: "have", hint: "'just' pede Present Perfect.", options: ["have", "did", "are"] },
    { prompt: "I ______ my project yet.", answer: "haven't finished", hint: "'yet' negativo → Present Perfect negativo.", options: ["haven't finished", "didn't finish", "not finished"] },
    { prompt: "'Equality' significa:", answer: "Igualdade", hint: "Um dos pilares dos direitos humanos.", options: ["Igualdade", "Igualzinho", "Igualaria"] },
  ],
  QUIZ: [
    { q: "Complete: I ___ helped in a community project.", options: [{ text: "have", correct: true, explain: "Present Perfect: HAVE + past participle." }, { text: "has" }, { text: "am" }] },
    { q: "Complete: She ___ to Japan twice.", options: [{ text: "have gone" }, { text: "has been", correct: true, explain: "Experiência com 3ª pessoa: HAS BEEN." }, { text: "went twice" }] },
    { q: "'Human rights' significa:", options: [{ text: "Direitos humanos", correct: true }, { text: "Humanidade" }, { text: "Humanos direitos" }] },
    { q: "Qual marcador é PRESENT PERFECT?", options: [{ text: "yesterday" }, { text: "last week" }, { text: "ever / never / already", correct: true }] },
    { q: "Complete: Have you ___ done volunteer work?", options: [{ text: "ever", correct: true }, { text: "yesterday" }, { text: "last year" }] },
    { q: "'Diversity' significa:", options: [{ text: "Diversão" }, { text: "Diversidade", correct: true }, { text: "Divergência" }] },
    { q: "Complete: We ___ our community garden last month.", options: [{ text: "have cleaned" }, { text: "cleaned", correct: true, explain: "Tempo definido → Simple Past." }, { text: "clean" }] },
    { q: "Ser um cidadão global significa:", options: [{ text: "Viajar o mundo todo" }, { text: "Respeitar e agir na sua comunidade e globalmente", correct: true }, { text: "Falar muitos idiomas" }] },
  ],
  REAL_LIFE: [
    { situation: "🤝 Falando de uma experiência.", answer: "I have helped in a community project this year." },
    { situation: "🌍 Sobre viagens.", answer: "I have never been abroad, but I want to travel one day." },
    { situation: "🫂 Sobre diversidade.", answer: "My school has students from many cultures and I respect all of them." },
    { situation: "⚖️ Sobre direitos.", answer: "Everyone has the right to education and respect." },
    { situation: "🙌 Convidando para ajudar.", answer: "Have you ever done volunteer work? Let's start together!" },
  ],
  GRAMMAR: {
    focus: "Present Perfect × Simple Past",
    why:
      "Present Perfect (HAVE/HAS + past participle) fala de experiência ou ação passada COM efeito no presente. Simple Past fala de um momento DEFINIDO no passado. Marcadores típicos do PP: ever, never, already, yet, just, this year, so far. Do Simple Past: yesterday, last week, in 2020, ago.",
    examples: [
      { en: "I HAVE VISITED three countries. (experiência)", pt: "Já visitei três países. (experiência)" },
      { en: "I VISITED Paris in 2022. (tempo definido)", pt: "Visitei Paris em 2022. (tempo definido)" },
      { en: "She HAS JUST FINISHED her project.", pt: "Ela acabou de terminar o projeto." },
      { en: "Have you EVER done volunteer work?", pt: "Você já fez trabalho voluntário?" },
    ],
    errors: [
      { wrong: "I have visited Paris last year.", right: "I VISITED Paris last year.", why: "'last year' é tempo definido → Simple Past." },
      { wrong: "She has went to Japan.", right: "She HAS GONE to Japan.", why: "Depois de HAS vai o past participle (gone), não went." },
      { wrong: "Have you ever went abroad?", right: "Have you ever BEEN abroad?", why: "'been' é o past participle de 'be' usado com 'ever' pra experiência." },
      { wrong: "I didn't finished yet.", right: "I HAVEN'T FINISHED yet.", why: "'yet' pede Present Perfect negativo." },
    ],
  },
  SONG: {
    title: "We Are the World",
    hookPt: "Cante celebrando cidadania e diversidade.",
    verses: [
      { en: "I have crossed borders in my mind,", pt: "Já cruzei fronteiras na minha mente,", emoji: "🌍" },
      { en: "I have met people of every kind.", pt: "Conheci pessoas de todo tipo.", emoji: "🫂" },
      { en: "Respect and love are what we need,", pt: "Respeito e amor é o que precisamos,", emoji: "❤️" },
      { en: "Global citizens, one human seed.", pt: "Cidadãos globais, uma só semente humana.", emoji: "🌱" },
    ],
  },
  HUNTER: {
    intro: "Present Perfect ou Simple Past? Escolha certo!",
    rounds: [
      { promptEn: "I ___ Paris in 2022.", promptPt: "I ___ Paris in 2022.", targetLabel: "visited", objects: [
        { id: "a", label: "have visited", img: "" },
        { id: "b", label: "visited", img: "", isTarget: true },
        { id: "c", label: "visit", img: "" },
      ]},
      { promptEn: "She ___ to Japan three times.", promptPt: "She ___ to Japan three times.", targetLabel: "has been", objects: [
        { id: "a", label: "was", img: "" },
        { id: "b", label: "has been", img: "", isTarget: true },
        { id: "c", label: "have been", img: "" },
      ]},
      { promptEn: "Have you ___ done volunteer work?", promptPt: "Have you ___ done volunteer work?", targetLabel: "ever", objects: [
        { id: "a", label: "yesterday", img: "" },
        { id: "b", label: "ever", img: "", isTarget: true },
        { id: "c", label: "last year", img: "" },
      ]},
      { promptEn: "We ___ our project yet.", promptPt: "We ___ our project yet.", targetLabel: "haven't finished", objects: [
        { id: "a", label: "didn't finish", img: "" },
        { id: "b", label: "haven't finished", img: "", isTarget: true },
        { id: "c", label: "not finished", img: "" },
      ]},
      { promptEn: "'Equality' =", promptPt: "'Equality' =", targetLabel: "Igualdade", objects: [
        { id: "a", label: "Igualdade", img: "", isTarget: true },
        { id: "b", label: "Equipe" },
        { id: "c", label: "Igreja" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares palavra → tradução:",
    pairs: [
      { id: "a", en: "Human rights ⚖️", pt: "Direitos humanos", img: IMG.CITY_COVER },
      { id: "b", en: "Diversity 🌈", pt: "Diversidade", img: IMG.FRIENDS },
      { id: "c", en: "Community 🏘️", pt: "Comunidade", img: IMG.PARK },
      { id: "d", en: "Volunteer 🙌", pt: "Voluntário", img: IMG.HOSPITAL },
    ],
  },
  BOOK: {
    title: "My Global Citizen Manifesto",
    intro: "Sua declaração como cidadão global.",
    pages: [
      { en: "Page 1 — I am part of the ___ community.", pt: "Pág. 1 — Faço parte da comunidade ___.", img: IMG.CITY_COVER, badge: "🌍" },
      { en: "Page 2 — I have helped by ___.", pt: "Pág. 2 — Já ajudei com ___.", img: IMG.HOSPITAL, badge: "🙌" },
      { en: "Page 3 — I respect ___.", pt: "Pág. 3 — Eu respeito ___.", img: IMG.FRIENDS, badge: "🤝" },
      { en: "Page 4 — My dream is ___.", pt: "Pág. 4 — Meu sonho é ___.", img: IMG.ANNA, badge: "✨" },
      { en: "The End — Think global, act local!", pt: "Fim — Pense global, aja local!", img: IMG.SCHOOL, badge: "🌟" },
    ],
  },
  CULTURE: {
    title: "Global Citizenship 🌍",
    emoji: "🤝",
    paragraphs: [
      { en: "The UN Declaration of Human Rights (1948) has 30 articles that protect every person in the world.", pt: "A Declaração da ONU dos Direitos Humanos (1948) tem 30 artigos que protegem cada pessoa no mundo." },
      { en: "December 10 is International Human Rights Day, celebrated in more than 190 countries.", pt: "10 de dezembro é o Dia Internacional dos Direitos Humanos, celebrado em mais de 190 países." },
      { pt: "Um cidadão global se importa com pessoas que nunca conheceu — porque somos todos parte da mesma família humana." },
    ],
  },
};

export default lesson;
