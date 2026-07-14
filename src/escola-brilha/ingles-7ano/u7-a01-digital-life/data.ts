// Inglês 7º Ano — Unit 1 "My Digital Life 💻"
// Present Simple × Present Continuous · Tecnologia e segurança digital
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u7-a01-digital-life",
  meta: {
    unitLabel: "Unit 1 · Lesson 1 — My Digital Life 💻",
    headerKicker: "SPEB 1.0 · English Academy — 7th Grade",
    coverKicker: "Technology · Internet · Digital Safety",
    coverTitle: "My Digital Life 💻",
    coverSubtitle:
      "Você está criando seu primeiro perfil digital seguro. Aprenda vocabulário de internet e a diferença crucial entre Simple Present e Present Continuous.",
    storyTitle: "The Digital Citizenship Class",
    vocabularyTitle: "Internet & Devices",
    speakingTargets: [
      "I use the internet every day.",
      "I am using my smartphone right now.",
      "I have three social media apps.",
      "My password is strong and secret.",
      "I never share personal information online.",
      "She is chatting with a classmate.",
    ],
    listeningIntro: "Ouça Ms. Anna falando sobre segurança digital com a turma.",
    listeningQuestion:
      'Ms. Anna disse: "Kenji is checking his email, but he always uses a strong password." O que Kenji está fazendo AGORA?',
    listeningOptions: [
      "Está criando uma senha",
      "Está checando o e-mail",
      "Está desligando o computador",
    ],
    listeningCorrect: "Está checando o e-mail",
    listeningWrongHint: "'is checking' = está checando (Present Continuous — agora).",
    readingNarration:
      "Um texto sobre uso responsável da internet: sempre use senhas fortes, nunca compartilhe informações pessoais, e desconfie de mensagens de desconhecidos. Digital citizens protect themselves and respect others.",
    grammarNarration:
      "Simple Present = rotina, hábito, verdade (I USE the internet every day). Present Continuous = ação AGORA (I AM USING the internet right now). Fórmula do Continuous: TO BE (am/is/are) + verbo-ING.",
    finalProjectIntro: "Vamos escrever seu perfil digital seguro. Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `DIGITAL CITIZENSHIP GUIDE — Hi! My name is ${name}. I use the internet every day for school, music and games. I have two social media apps and my password is strong — it has letters, numbers and symbols. I never share my address, my phone number or personal photos with strangers online. Right now, I am writing this guide to help other students stay safe on the internet. Be smart, be kind, be safe!`,
    finalProjectSectionTitle: "Digital Citizenship Guide",
  },
  VOCAB: [
    { id: "internet", en: "Internet 🌐", pt: "Internet", img: IMG.CITY_COVER },
    { id: "social", en: "Social media 📱", pt: "Redes sociais", img: IMG.SOPHIE },
    { id: "app", en: "App 📲", pt: "Aplicativo", img: IMG.KENJI },
    { id: "password", en: "Password 🔒", pt: "Senha", img: IMG.PASSPORT },
    { id: "website", en: "Website 🖥️", pt: "Site", img: IMG.LIBRARY },
    { id: "email", en: "Email 📧", pt: "E-mail", img: IMG.MUSEUM },
    { id: "safety", en: "Online safety 🛡️", pt: "Segurança online", img: IMG.ANNA },
    { id: "smartphone", en: "Smartphone 📱", pt: "Smartphone", img: IMG.LUCAS },
    { id: "computer", en: "Computer 💻", pt: "Computador", img: IMG.CLASS },
    { id: "tablet", en: "Tablet 📱", pt: "Tablet", img: IMG.MAYA },
  ],
  STORY: [
    { img: IMG.SCHOOL, en: "Today's class at English Academy is about digital life.", pt: "A aula de hoje na English Academy é sobre vida digital." },
    { img: IMG.ANNA, en: "Ms. Anna asks: 'Who uses social media every day?'", pt: "Ms. Anna pergunta: 'Quem usa redes sociais todo dia?'" },
    { img: IMG.KENJI, en: "Kenji is checking his email on his tablet right now.", pt: "Kenji está checando o e-mail no tablet agora." },
    { img: IMG.MAYA, en: "Maya usually chats with her cousin in India after school.", pt: "Maya geralmente conversa com a prima na Índia depois da escola." },
    { img: IMG.SOPHIE, en: "Sophie says: 'My password has letters, numbers and symbols.'", pt: "Sophie diz: 'Minha senha tem letras, números e símbolos.'" },
    { img: IMG.LUCAS, en: "Lucas never shares his phone number online. Smart choice!", pt: "Lucas nunca compartilha o telefone online. Escolha inteligente!" },
    { img: IMG.ANNA, en: "Ms. Anna: 'A good digital citizen is safe AND kind.'", pt: "Ms. Anna: 'Um bom cidadão digital é seguro E gentil.'" },
  ],
  DIALOG: [
    { who: "Ms. Anna", img: IMG.ANNA, en: "What are you doing right now, Kenji?", pt: "O que você está fazendo agora, Kenji?" },
    { who: "Kenji", img: IMG.KENJI, en: "I am checking my school email.", pt: "Estou checando meu e-mail da escola." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Great. And what do you usually do online?", pt: "Ótimo. E o que você costuma fazer online?" },
    { who: "Kenji", img: IMG.KENJI, en: "I usually watch tutorials and play with friends.", pt: "Eu costumo ver tutoriais e jogar com amigos." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Do you have a strong password?", pt: "Você tem uma senha forte?" },
    { who: "Kenji", img: IMG.KENJI, en: "Yes! It has 10 characters, letters and numbers.", pt: "Sim! Tem 10 caracteres, letras e números." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Perfect. Never share your password with anyone.", pt: "Perfeito. Nunca compartilhe sua senha com ninguém." },
    { who: "Kenji", img: IMG.KENJI, en: "I promise! Safety first.", pt: "Prometo! Segurança em primeiro lugar." },
  ],
  READING: {
    title: "Be a Smart Digital Citizen",
    img: IMG.CITY_COVER,
    parts: [
      { en: "The internet is a wonderful place, but it can be dangerous too.", pt: "A internet é um lugar maravilhoso, mas também pode ser perigosa.", highlight: ["internet", "dangerous"] },
      { en: "Always use a strong password. Never share it with strangers.", pt: "Use sempre uma senha forte. Nunca compartilhe com estranhos.", highlight: ["strong password", "Never share"] },
      { en: "Do not post personal information like your address or phone number.", pt: "Não publique informações pessoais como seu endereço ou telefone.", highlight: ["personal information"] },
      { en: "Be kind online. Words on the internet are real words.", pt: "Seja gentil online. Palavras na internet são palavras reais.", highlight: ["Be kind"] },
      { en: "If something feels wrong, tell an adult right away.", pt: "Se algo parecer errado, avise um adulto imediatamente.", highlight: ["tell an adult"] },
    ],
  },
  WRITING: [
    { prompt: "I ______ the internet every day. (usar — hábito)", answer: "use", hint: "Rotina = Simple Present, 1ª pessoa.", options: ["use", "am using", "using"], explain: "Rotina/hábito pede Simple Present: 'I use'." },
    { prompt: "Right now, she ______ her email. (checar — agora)", answer: "is checking", hint: "Agora = Present Continuous (is + verbo-ING).", options: ["is checking", "checks", "check"], explain: "'Right now' pede Present Continuous: is + checking." },
    { prompt: "My password ______ strong.", answer: "is", hint: "TO BE 3ª pessoa singular.", options: ["is", "am", "are"] },
    { prompt: "We ______ playing an online game now.", answer: "are", hint: "'We' + Continuous = ARE + verb-ING.", options: ["are", "is", "am"] },
    { prompt: "Kenji usually ______ tutorials online.", answer: "watches", hint: "3ª pessoa singular no Simple Present ganha -s/-es.", options: ["watches", "watch", "is watching"] },
    { prompt: "Look! They ______ a new app.", answer: "are downloading", hint: "'Look!' indica ação agora → Continuous.", options: ["are downloading", "download", "downloads"] },
    { prompt: "You ______ share your password with anyone.", answer: "shouldn't", hint: "Conselho negativo forte.", options: ["shouldn't", "should", "must"] },
  ],
  QUIZ: [
    { q: "Complete: I ___ the internet every day.", options: [{ text: "am using" }, { text: "use", correct: true, explain: "Hábito diário → Simple Present." }, { text: "using" }] },
    { q: "Complete: Look! Sophie ___ a photo right now.", options: [{ text: "posts" }, { text: "post" }, { text: "is posting", correct: true, explain: "'Right now' → Present Continuous." }] },
    { q: "'Password' significa:", options: [{ text: "Site" }, { text: "Senha", correct: true }, { text: "Aplicativo" }] },
    { q: "Qual é a MELHOR senha?", options: [{ text: "123456" }, { text: "seu nome" }, { text: "Br@sil2027!", correct: true, explain: "Senha forte tem letras, números e símbolos." }] },
    { q: "Complete: They ___ a tutorial now.", options: [{ text: "watch" }, { text: "are watching", correct: true }, { text: "watches" }] },
    { q: "Kenji ___ his email every morning.", options: [{ text: "checks", correct: true, explain: "Rotina + 3ª pessoa → checks." }, { text: "is checking" }, { text: "check" }] },
    { q: "'Online safety' significa:", options: [{ text: "Segurança online", correct: true }, { text: "Velocidade da internet" }, { text: "Aplicativo novo" }] },
    { q: "Se algo parecer errado online, você deve:", options: [{ text: "Ignorar" }, { text: "Avisar um adulto", correct: true, explain: "Sempre contar pra um adulto de confiança." }, { text: "Compartilhar com amigos" }] },
  ],
  REAL_LIFE: [
    { situation: "🔒 Alguém pede sua senha.", answer: "I never share my password with anyone." },
    { situation: "📱 Descrevendo o que você usa.", answer: "I use my smartphone for school and music." },
    { situation: "📧 Descrevendo o que está fazendo agora.", answer: "Right now, I am checking my email." },
    { situation: "🛡️ Falando sobre segurança.", answer: "You shouldn't post personal information online." },
    { situation: "💻 Sua rotina digital.", answer: "I usually study with my computer after school." },
  ],
  GRAMMAR: {
    focus: "Simple Present × Present Continuous",
    why:
      "Simple Present é pra HÁBITOS e verdades (I play soccer every Sunday). Present Continuous é pra o que acontece AGORA (I am playing soccer right now). O erro clássico é usar Simple Present pra falar do momento — em inglês isso soa como rotina, não como agora.",
    examples: [
      { en: "I check my email every morning. (rotina)", pt: "Eu checo meu e-mail toda manhã. (rotina)" },
      { en: "I am checking my email right now. (agora)", pt: "Estou checando meu e-mail agora. (agora)" },
      { en: "She uses two apps. She is downloading a new one now.", pt: "Ela usa dois apps. Está baixando um novo agora." },
      { en: "We don't share passwords. We aren't sharing anything today.", pt: "Não compartilhamos senhas. Não estamos compartilhando nada hoje." },
    ],
    errors: [
      { wrong: "I am using the internet every day.", right: "I USE the internet every day.", why: "Rotina não usa Continuous." },
      { wrong: "Look! She post a photo.", right: "Look! She IS POSTING a photo.", why: "'Look!' sinaliza ação agora → Continuous." },
      { wrong: "He is having a smartphone.", right: "He HAS a smartphone.", why: "Verbos de posse (have) normalmente não vão pro Continuous." },
      { wrong: "I no use bad passwords.", right: "I DON'T use bad passwords.", why: "Negativa do Simple Present pede DON'T/DOESN'T." },
    ],
  },
  SONG: {
    title: "Safe Online",
    hookPt: "Cante lembrando das regras de segurança digital.",
    verses: [
      { en: "Every day I go online,", pt: "Todo dia entro online,", emoji: "🌐" },
      { en: "My password is strong, my data is mine.", pt: "Senha forte, meus dados são meus.", emoji: "🔒" },
      { en: "Right now I'm learning, right now I'm safe,", pt: "Agora estou aprendendo, agora estou seguro,", emoji: "🛡️" },
      { en: "Kind on the internet, in every place.", pt: "Gentil na internet, em cada lugar.", emoji: "💙" },
    ],
  },
  HUNTER: {
    intro: "Simple Present ou Continuous? Escolhe a forma certa!",
    rounds: [
      { promptEn: "I ___ the internet every day.", promptPt: "I ___ the internet every day.", targetLabel: "use", objects: [
        { id: "a", label: "am using", img: "" },
        { id: "b", label: "use", img: "", isTarget: true },
        { id: "c", label: "using", img: "" },
      ]},
      { promptEn: "Look! Sophie ___ a photo.", promptPt: "Look! Sophie ___ a photo.", targetLabel: "is posting", objects: [
        { id: "a", label: "posts", img: "" },
        { id: "b", label: "is posting", img: "", isTarget: true },
        { id: "c", label: "post", img: "" },
      ]},
      { promptEn: "Kenji ___ his email every morning.", promptPt: "Kenji ___ his email every morning.", targetLabel: "checks", objects: [
        { id: "a", label: "checks", img: "", isTarget: true },
        { id: "b", label: "is checking", img: "" },
        { id: "c", label: "check", img: "" },
      ]},
      { promptEn: "Right now, we ___ a new game.", promptPt: "Right now, we ___ a new game.", targetLabel: "are playing", objects: [
        { id: "a", label: "play", img: "" },
        { id: "b", label: "are playing", img: "", isTarget: true },
        { id: "c", label: "plays", img: "" },
      ]},
      { promptEn: "Best password:", promptPt: "Melhor senha:", targetLabel: "Br@sil2027!", objects: [
        { id: "a", label: "123456", img: "" },
        { id: "b", label: "your name", img: "" },
        { id: "c", label: "Br@sil2027!", img: "", isTarget: true },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares palavra em inglês → tradução!",
    pairs: [
      { id: "a", en: "Password 🔒", pt: "Senha", img: IMG.PASSPORT },
      { id: "b", en: "Website 🖥️", pt: "Site", img: IMG.LIBRARY },
      { id: "c", en: "Email 📧", pt: "E-mail", img: IMG.MUSEUM },
      { id: "d", en: "Smartphone 📱", pt: "Smartphone", img: IMG.LUCAS },
    ],
  },
  BOOK: {
    title: "My Digital Citizenship Guide",
    intro: "Seu guia pessoal de cidadania digital.",
    pages: [
      { en: "Page 1 — I use the internet for ___.", pt: "Pág. 1 — Uso a internet pra ___.", img: IMG.CITY_COVER, badge: "🌐" },
      { en: "Page 2 — My password is strong: it has ___.", pt: "Pág. 2 — Minha senha é forte: tem ___.", img: IMG.PASSPORT, badge: "🔒" },
      { en: "Page 3 — I never share ___.", pt: "Pág. 3 — Nunca compartilho ___.", img: IMG.ANNA, badge: "🛡️" },
      { en: "Page 4 — If something is wrong, I tell ___.", pt: "Pág. 4 — Se algo estiver errado, aviso ___.", img: IMG.FRIENDS, badge: "🚨" },
      { en: "The End — Be smart, be kind, be safe!", pt: "Fim — Seja esperto, gentil e seguro!", img: IMG.SCHOOL, badge: "🎓" },
    ],
  },
  CULTURE: {
    title: "Digital Citizenship 🌐",
    emoji: "💻",
    paragraphs: [
      { en: "Every country now teaches digital citizenship at school — it's a global skill.", pt: "Todo país agora ensina cidadania digital na escola — é uma habilidade global." },
      { en: "'Netiquette' means good manners on the internet: no CAPS (it means shouting), respect opinions and give credit.", pt: "'Netiquette' significa boas maneiras na internet: sem CAIXA ALTA (parece grito), respeitar opiniões e dar créditos." },
      { pt: "Ser um bom cidadão digital é tão importante quanto ser um bom cidadão na vida real." },
    ],
  },
};

export default lesson;
