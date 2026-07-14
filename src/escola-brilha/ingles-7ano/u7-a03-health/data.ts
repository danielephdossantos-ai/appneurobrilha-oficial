// Inglês 7º Ano — Unit 3 "Health and Lifestyle 🏃"
// Should/Shouldn't · Must/Mustn't · Conselhos e hábitos saudáveis
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u7-a03-health",
  meta: {
    unitLabel: "Unit 3 · Lesson 1 — Health and Lifestyle 🏃",
    headerKicker: "SPEB 1.0 · English Academy — 7th Grade",
    coverKicker: "Exercise · Nutrition · Sleep · Mental Health",
    coverTitle: "Health and Lifestyle 🏃",
    coverSubtitle:
      "A Academy está criando uma campanha de vida saudável. Aprenda a dar conselhos com SHOULD e regras com MUST.",
    storyTitle: "Healthy Life Campaign",
    vocabularyTitle: "Body, Habits & Feelings",
    speakingTargets: [
      "You should exercise every day.",
      "You shouldn't eat too much sugar.",
      "We must sleep eight hours.",
      "You mustn't skip breakfast.",
      "I feel stressed. What should I do?",
      "You should take a break and breathe.",
    ],
    listeningIntro: "Ouça a Ms. Anna dando conselhos de saúde pra turma.",
    listeningQuestion:
      'Ms. Anna: "You should drink two liters of water every day and you mustn\'t skip breakfast." Qual é o CONSELHO forte (obrigação)?',
    listeningOptions: [
      "Beber dois litros de água",
      "Não pular o café da manhã",
      "Assistir menos TV",
    ],
    listeningCorrect: "Não pular o café da manhã",
    listeningWrongHint: "MUSTN'T = obrigação NEGATIVA (proibido). SHOULD = conselho.",
    readingNarration:
      "Textos sobre saúde física e mental usam verbos modais pra orientar: SHOULD (conselho), MUSTN'T (proibição), NEED TO (necessidade). Bons hábitos são: dormir bem, comer variado, se exercitar, cuidar da mente.",
    grammarNarration:
      "SHOULD = conselho ('you should sleep more'). SHOULDN'T = conselho pra NÃO fazer. MUST = obrigação forte ('doctors must wash hands'). MUSTN'T = proibição ('you mustn't smoke'). Depois de should/must sempre vem verbo no infinitivo SEM 'to'.",
    finalProjectIntro: "Vamos criar sua campanha de vida saudável. Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `HEALTHY LIFE CAMPAIGN — Hi! My name is ${name} and this is my healthy life plan. Every day I should drink at least two liters of water, sleep eight hours and exercise for thirty minutes. I shouldn't eat too much sugar or spend too much time on my phone. When I feel stressed, I should talk to my family and take deep breaths. My mind and my body are a team — I must take care of both. A healthy life starts with small daily habits!`,
    finalProjectSectionTitle: "Healthy Life Campaign",
  },
  VOCAB: [
    { id: "exercise", en: "Exercise 🏋️", pt: "Exercício", img: IMG.LUCAS },
    { id: "nutrition", en: "Nutrition 🥗", pt: "Nutrição", img: IMG.BAKERY },
    { id: "stress", en: "Stress 😰", pt: "Estresse", img: IMG.MAYA },
    { id: "sleep", en: "Sleep 😴", pt: "Sono", img: IMG.SOPHIE },
    { id: "habits", en: "Healthy habits 💪", pt: "Hábitos saudáveis", img: IMG.KENJI },
    { id: "mental", en: "Mental health 🧠", pt: "Saúde mental", img: IMG.ANNA },
    { id: "routine", en: "Routine 📅", pt: "Rotina", img: IMG.SCHOOL },
    { id: "water", en: "Water 💧", pt: "Água", img: IMG.RESTAURANT },
  ],
  STORY: [
    { img: IMG.ANNA, en: "Ms. Anna: 'This month we're studying healthy lifestyles.'", pt: "Ms. Anna: 'Este mês estudamos estilos de vida saudáveis.'" },
    { img: IMG.KENJI, en: "Kenji: 'I sleep only five hours. I feel tired every day.'", pt: "Kenji: 'Durmo só cinco horas. Fico cansado todo dia.'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'You should sleep at least eight hours, Kenji.'", pt: "Ms. Anna: 'Você deve dormir pelo menos oito horas, Kenji.'" },
    { img: IMG.MAYA, en: "Maya: 'I feel stressed with school. What should I do?'", pt: "Maya: 'Fico estressada com a escola. O que devo fazer?'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'You should breathe deeply and talk to someone.'", pt: "Ms. Anna: 'Você deve respirar fundo e conversar com alguém.'" },
    { img: IMG.LUCAS, en: "Lucas: 'I always exercise on weekends. It helps a lot!'", pt: "Lucas: 'Sempre me exercito nos fins de semana. Ajuda muito!'" },
    { img: IMG.FRIENDS, en: "The class decides to launch a Healthy Life Campaign!", pt: "A turma decide lançar uma Campanha de Vida Saudável!" },
  ],
  DIALOG: [
    { who: "Maya", img: IMG.MAYA, en: "Ms. Anna, I feel stressed before tests.", pt: "Ms. Anna, fico estressada antes das provas." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "You should sleep well the night before.", pt: "Você deve dormir bem na noite anterior." },
    { who: "Maya", img: IMG.MAYA, en: "What else should I do?", pt: "O que mais devo fazer?" },
    { who: "Ms. Anna", img: IMG.ANNA, en: "You should eat breakfast and drink water.", pt: "Você deve tomar café e beber água." },
    { who: "Maya", img: IMG.MAYA, en: "And what shouldn't I do?", pt: "E o que não devo fazer?" },
    { who: "Ms. Anna", img: IMG.ANNA, en: "You shouldn't study all night. You mustn't skip meals.", pt: "Não deve estudar a noite toda. Não pode pular refeições." },
    { who: "Maya", img: IMG.MAYA, en: "Thank you! I feel better already.", pt: "Obrigada! Já me sinto melhor." },
  ],
  READING: {
    title: "Seven Healthy Habits",
    img: IMG.HOSPITAL,
    parts: [
      { en: "You should drink at least two liters of water every day.", pt: "Você deve beber pelo menos dois litros de água por dia.", highlight: ["should drink"] },
      { en: "You should eat fruits and vegetables at every meal.", pt: "Você deve comer frutas e legumes em toda refeição.", highlight: ["fruits and vegetables"] },
      { en: "You must sleep 8 hours. Sleep is medicine for the brain.", pt: "Você deve dormir 8 horas. Sono é remédio pro cérebro.", highlight: ["must sleep"] },
      { en: "You shouldn't spend too many hours on screens.", pt: "Você não deve passar muitas horas em telas.", highlight: ["shouldn't spend"] },
      { en: "You mustn't ignore your feelings. Talk to someone you trust.", pt: "Você não pode ignorar seus sentimentos. Fale com alguém em quem confia.", highlight: ["mustn't ignore"] },
    ],
  },
  WRITING: [
    { prompt: "You ______ drink more water. (conselho)", answer: "should", hint: "Conselho positivo.", options: ["should", "shouldn't", "mustn't"], explain: "SHOULD = conselho positivo." },
    { prompt: "You ______ eat so much sugar. (conselho negativo)", answer: "shouldn't", hint: "Conselho pra NÃO fazer.", options: ["shouldn't", "should", "must"] },
    { prompt: "Doctors ______ wash their hands. (regra forte)", answer: "must", hint: "Obrigação forte = MUST.", options: ["must", "should", "can"] },
    { prompt: "You ______ smoke here. (proibido)", answer: "mustn't", hint: "Proibição = MUSTN'T.", options: ["mustn't", "shouldn't", "don't"] },
    { prompt: "I feel tired. I should ______ more.", answer: "sleep", hint: "Depois de should → infinitivo sem 'to'.", options: ["sleep", "to sleep", "sleeping"] },
    { prompt: "You should ______ eight hours a night.", answer: "sleep", hint: "Infinitivo puro.", options: ["sleep", "sleeps", "slept"] },
  ],
  QUIZ: [
    { q: "Conselho positivo:", options: [{ text: "mustn't" }, { text: "should", correct: true, explain: "SHOULD é o conselho básico." }, { text: "can't" }] },
    { q: "Proibição forte:", options: [{ text: "should" }, { text: "shouldn't" }, { text: "mustn't", correct: true }] },
    { q: "'You should sleep 8 hours' significa:", options: [{ text: "Você é obrigado" }, { text: "É bom que você durma 8h", correct: true }, { text: "Você não deve dormir" }] },
    { q: "Complete: You ___ skip breakfast.", options: [{ text: "shouldn't", correct: true, explain: "Conselho pra não fazer." }, { text: "should" }, { text: "must" }] },
    { q: "'Mental health' significa:", options: [{ text: "Saúde mental", correct: true }, { text: "Saúde muscular" }, { text: "Saúde do coração" }] },
    { q: "Depois de 'should' vem:", options: [{ text: "verbo -ing" }, { text: "infinitivo sem 'to'", correct: true }, { text: "infinitivo com 'to'" }] },
    { q: "Complete: Doctors ___ wash their hands.", options: [{ text: "must", correct: true }, { text: "should" }, { text: "can" }] },
    { q: "'Nutrition' significa:", options: [{ text: "Nutrição", correct: true }, { text: "Ginástica" }, { text: "Descanso" }] },
  ],
  REAL_LIFE: [
    { situation: "😴 Amigo diz que dorme 4 horas.", answer: "You should sleep at least 8 hours." },
    { situation: "🥤 Alguém toma refrigerante todo dia.", answer: "You shouldn't drink so much soda." },
    { situation: "😰 Você está estressado antes da prova.", answer: "I should breathe deeply and take a break." },
    { situation: "🚭 Regra do hospital.", answer: "You mustn't smoke inside the hospital." },
    { situation: "💧 Conselho de saúde básico.", answer: "You should drink two liters of water every day." },
  ],
  GRAMMAR: {
    focus: "Should / Shouldn't · Must / Mustn't",
    why:
      "Modais dão FORÇA ao que você diz. SHOULD é conselho amigável (é bom). MUST é obrigação forte (é preciso). MUSTN'T é PROIBIÇÃO (não pode). SHOULDN'T é conselho pra não fazer (não é bom). Depois de modal, o verbo vem SEMPRE no infinitivo SEM 'to'.",
    examples: [
      { en: "You SHOULD exercise three times a week.", pt: "Você deve se exercitar três vezes por semana." },
      { en: "You SHOULDN'T eat too much sugar.", pt: "Você não deve comer muito açúcar." },
      { en: "Doctors MUST wash their hands.", pt: "Médicos precisam lavar as mãos." },
      { en: "You MUSTN'T smoke in the hospital.", pt: "Você não pode fumar no hospital." },
    ],
    errors: [
      { wrong: "You should to sleep more.", right: "You SHOULD SLEEP more.", why: "Depois de modal, verbo sem 'to'." },
      { wrong: "You shouldn't eating sugar.", right: "You SHOULDN'T EAT sugar.", why: "Infinitivo puro, não -ing." },
      { wrong: "He musts wash his hands.", right: "He MUST wash his hands.", why: "Modais nunca ganham -S na 3ª pessoa." },
      { wrong: "You not should skip breakfast.", right: "You SHOULDN'T skip breakfast.", why: "Negativa: SHOULD + NOT = shouldn't." },
    ],
  },
  SONG: {
    title: "You Should, You Must",
    verses: [
      { en: "You should sleep, you should run,", pt: "Você deve dormir, deve correr,", emoji: "🏃" },
      { en: "You should have a lot of fun.", pt: "Deve se divertir muito.", emoji: "😄" },
      { en: "You mustn't skip your breakfast plate,", pt: "Não pode pular o prato do café,", emoji: "🍳" },
      { en: "A healthy life will feel so great!", pt: "Vida saudável vai ser incrível!", emoji: "💪" },
    ],
  },
  HUNTER: {
    intro: "Should, shouldn't, must ou mustn't?",
    rounds: [
      { promptEn: "Conselho: 'É bom dormir 8h'", promptPt: "Conselho: 'É bom dormir 8h'", targetLabel: "should", objects: [
        { id: "a", label: "should", img: "", isTarget: true },
        { id: "b", label: "shouldn't", img: "" },
        { id: "c", label: "mustn't", img: "" },
      ]},
      { promptEn: "Proibido: 'não pode fumar'", promptPt: "Proibido: 'não pode fumar'", targetLabel: "mustn't", objects: [
        { id: "a", label: "should", img: "" },
        { id: "b", label: "shouldn't", img: "" },
        { id: "c", label: "mustn't", img: "", isTarget: true },
      ]},
      { promptEn: "'Não é bom' comer açúcar demais:", promptPt: "'Não é bom' comer açúcar demais:", targetLabel: "shouldn't", objects: [
        { id: "a", label: "shouldn't", img: "", isTarget: true },
        { id: "b", label: "must" , img: "" },
        { id: "c", label: "should", img: "" },
      ]},
      { promptEn: "Obrigação forte: 'médicos LAVAM as mãos'", promptPt: "Obrigação forte: 'médicos LAVAM as mãos'", targetLabel: "must", objects: [
        { id: "a", label: "should", img: "" },
        { id: "b", label: "must", img: "", isTarget: true },
        { id: "c", label: "mustn't", img: "" },
      ]},
    ],
  },
  CULTURE: {
    title: "Wellness Around the World 🌍",
    emoji: "🧘",
    paragraphs: [
      { en: "In Japan, many people practice 'radio taiso' — 3 minutes of daily exercise on the radio.", pt: "No Japão, muitos praticam 'radio taiso' — 3 minutos de exercício diário no rádio." },
      { en: "In India, yoga is more than exercise: it's mind + body + breath.", pt: "Na Índia, yoga é mais que exercício: é mente + corpo + respiração." },
      { pt: "Todo país tem tradições de vida saudável. Aprender inglês te ajuda a conhecer as melhores!" },
    ],
  },
};

export default lesson;
