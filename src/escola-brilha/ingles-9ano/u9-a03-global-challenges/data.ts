// Inglês 9º Ano — Unit 3 "Global Challenges 🌍"
// First Conditional · Second Conditional · Modal Verbs (must/should/might/could)
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u9-a03-global-challenges",
  meta: {
    unitLabel: "Unit 3 · Lesson 3 — Global Challenges 🌍",
    headerKicker: "SPEB 1.0 · English Academy — 9th Grade",
    coverKicker: "Climate · Rights · Equality · Cooperation",
    coverTitle: "Global Challenges 🌍",
    coverSubtitle:
      "Do clima aos direitos humanos: aprenda a debater soluções e apresentar propostas em inglês.",
    storyTitle: "The Global Solutions Forum",
    vocabularyTitle: "Global Issues",
    speakingTargets: [
      "If we recycle more, we will reduce pollution.",
      "If I were president, I would invest in education.",
      "We must protect human rights.",
      "Countries should cooperate more.",
      "Migration might change our society.",
      "We could reduce poverty with better policies.",
    ],
    listeningIntro: "Ouça Sophie abrir o fórum global de soluções.",
    listeningQuestion:
      "Sophie disse: 'If we acted today, we would save many lives.' O que ela quis dizer?",
    listeningOptions: [
      "Se agirmos hoje, salvamos vidas amanhã (real)",
      "Se agíssemos hoje, salvaríamos muitas vidas (hipótese)",
      "Nós agimos hoje e salvamos vidas ontem",
    ],
    listeningCorrect: "Se agíssemos hoje, salvaríamos muitas vidas (hipótese)",
    listeningWrongHint: "Second Conditional = hipótese (If + past → would + verbo).",
    readingNarration:
      "Desafios globais como mudanças climáticas, migração, pobreza e direitos humanos não têm fronteiras. Precisam de cooperação, diversidade de ideias e coragem para debater.",
    grammarNarration:
      "First Conditional: situação real futura. IF + presente simples, WILL + verbo. 'If it rains, we will stay home'. Second Conditional: hipótese ou irreal. IF + past simple, WOULD + verbo. 'If I were rich, I would help everyone'. Modais: MUST (obrigação forte), SHOULD (conselho), MIGHT (possibilidade fraca), COULD (possibilidade / habilidade passada).",
    finalProjectIntro: "Escreva seu discurso no Fórum Global. Digite seu nome:",
    finalProjectPhrase: (name: string) =>
      `GLOBAL SOLUTIONS FORUM — Distinguished delegates, my name is ${name} and I represent the young voices of Brazil. Climate change, poverty and inequality are challenges that no country can solve alone. If we invest in sustainable development, we will protect the next generations. If I were a world leader, I would put education, health and human rights first — because dignity is not negotiable. We must cooperate, we should listen to science, and we could achieve real change if we work together. The future is not something that happens to us — it is something we build. Thank you.`,
    finalProjectSectionTitle: "My Global Solutions Speech",
  },
  VOCAB: [
    { id: "climate", en: "Climate change 🌡️", pt: "Mudanças climáticas", img: IMG.CITY_COVER },
    { id: "rights", en: "Human rights ⚖️", pt: "Direitos humanos", img: IMG.ANNA },
    { id: "poverty", en: "Poverty 🥺", pt: "Pobreza", img: IMG.MAYA },
    { id: "migration", en: "Migration 🧳", pt: "Migração", img: IMG.PASSPORT },
    { id: "diversity", en: "Diversity 🌈", pt: "Diversidade", img: IMG.FRIENDS },
    { id: "equality", en: "Equality ⚖️", pt: "Igualdade", img: IMG.SOPHIE },
    { id: "sustainable", en: "Sustainable development 🌱", pt: "Desenvolvimento sustentável", img: IMG.PARK },
    { id: "cooperation", en: "Global cooperation 🤝", pt: "Cooperação global", img: IMG.CLASS },
    { id: "policy", en: "Policy 📋", pt: "Política pública", img: IMG.LUCAS },
    { id: "leader", en: "Leader 👤", pt: "Líder", img: IMG.KENJI },
  ],
  STORY: [
    { img: IMG.SCHOOL, en: "The Global Solutions Forum opens at the Academy.", pt: "O Fórum Global de Soluções abre na Academy." },
    { img: IMG.SOPHIE, en: "Sophie: 'If we acted today, we would save many lives.'", pt: "Sophie: 'Se agíssemos hoje, salvaríamos muitas vidas.'" },
    { img: IMG.MAYA, en: "Maya: 'We must reduce plastic waste in our oceans.'", pt: "Maya: 'Precisamos reduzir o lixo plástico nos oceanos.'" },
    { img: IMG.KENJI, en: "Kenji: 'If I were president, I would invest in education.'", pt: "Kenji: 'Se eu fosse presidente, investiria em educação.'" },
    { img: IMG.LUCAS, en: "Lucas: 'Countries should cooperate — no one wins alone.'", pt: "Lucas: 'Países devem cooperar — ninguém vence sozinho.'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'Great debate! Use First and Second Conditionals wisely.'", pt: "Ms. Anna: 'Ótimo debate! Usem o First e o Second Conditional com sabedoria.'" },
    { img: IMG.FRIENDS, en: "The room applauds. Together, they draft a global proposal.", pt: "A sala aplaude. Juntos, redigem uma proposta global." },
  ],
  DIALOG: [
    { who: "Sophie", img: IMG.SOPHIE, en: "If governments invested more in education, would poverty go down?", pt: "Se os governos investissem mais em educação, a pobreza cairia?" },
    { who: "Kenji", img: IMG.KENJI, en: "Yes, it would. Studies prove it.", pt: "Sim, cairia. Estudos comprovam." },
    { who: "Sophie", img: IMG.SOPHIE, en: "And what should we do about climate change?", pt: "E o que devemos fazer sobre mudanças climáticas?" },
    { who: "Kenji", img: IMG.KENJI, en: "We must reduce emissions and protect forests.", pt: "Devemos reduzir emissões e proteger florestas." },
    { who: "Sophie", img: IMG.SOPHIE, en: "If we all cooperate, we might save the planet.", pt: "Se cooperarmos, talvez salvemos o planeta." },
    { who: "Kenji", img: IMG.KENJI, en: "Together we could change history.", pt: "Juntos podemos mudar a história." },
  ],
  READING: {
    title: "Global Challenges, Local Actions",
    img: IMG.CITY_COVER,
    parts: [
      { en: "Climate change affects every country — droughts, floods, heat.", pt: "Mudanças climáticas afetam todos os países — secas, enchentes, calor.", highlight: ["Climate change"] },
      { en: "Poverty and inequality still hurt millions of families.", pt: "Pobreza e desigualdade ainda ferem milhões de famílias.", highlight: ["Poverty"] },
      { en: "Migration is a global reality — respect must come first.", pt: "Migração é uma realidade global — respeito em primeiro lugar.", highlight: ["Migration"] },
      { en: "Sustainable development balances people, planet and profit.", pt: "Desenvolvimento sustentável equilibra pessoas, planeta e lucro.", highlight: ["Sustainable development"] },
      { en: "Global cooperation is not a dream — it is a necessity.", pt: "Cooperação global não é sonho — é necessidade.", highlight: ["Global cooperation"] },
    ],
  },
  WRITING: [
    { prompt: "If we ______ more trees, the air will be cleaner. (First Conditional)", answer: "plant", hint: "IF + presente + WILL.", options: ["plant", "will plant", "planted"], explain: "First Conditional: IF + presente simples + WILL + verbo." },
    { prompt: "If I ______ a leader, I would help the poor. (Second Conditional)", answer: "were", hint: "'If I were' é padrão formal.", options: ["were", "am", "will be"], explain: "Second Conditional: IF + past simple + WOULD. 'Were' para todas as pessoas." },
    { prompt: "We ______ recycle every day. (obrigação moral)", answer: "must", hint: "MUST = obrigação forte.", options: ["must", "might", "could"] },
    { prompt: "You ______ study more. (conselho)", answer: "should", hint: "SHOULD = conselho.", options: ["should", "must", "would"] },
    { prompt: "It ______ rain later — take an umbrella. (possibilidade)", answer: "might", hint: "MIGHT = talvez.", options: ["might", "must", "should"] },
    { prompt: "'Poverty' significa:", answer: "Pobreza", hint: "Falta de recursos básicos.", options: ["Pobreza", "Podridão", "Popularidade"] },
    { prompt: "'Sustainable development' significa:", answer: "Desenvolvimento sustentável", hint: "Crescimento que respeita o planeta.", options: ["Desenvolvimento sustentável", "Sustento diário", "Sustentação econômica"] },
  ],
  QUIZ: [
    { q: "First Conditional — Complete: If it ___ tomorrow, we will stay home.", options: [{ text: "rains", correct: true, explain: "IF + presente simples." }, { text: "will rain" }, { text: "rained" }] },
    { q: "Second Conditional — Complete: If I ___ rich, I would travel a lot.", options: [{ text: "were", correct: true, explain: "IF + past ('were' padrão)." }, { text: "am" }, { text: "will be" }] },
    { q: "MUST × SHOULD — 'You ___ wear a helmet on a motorcycle.' (obrigação legal)", options: [{ text: "must", correct: true, explain: "MUST = obrigação forte/legal." }, { text: "might" }, { text: "could" }] },
    { q: "MIGHT — Uso principal:", options: [{ text: "Ordem" }, { text: "Possibilidade fraca (talvez)", correct: true }, { text: "Passado" }] },
    { q: "'Human rights' significa:", options: [{ text: "Direitos humanos", correct: true }, { text: "Humanidade" }, { text: "Humanos direitos" }] },
    { q: "'Cooperation' significa:", options: [{ text: "Cooperação", correct: true }, { text: "Cópia" }, { text: "Copo" }] },
    { q: "'Equality' significa:", options: [{ text: "Igualdade", correct: true }, { text: "Igualzinho" }, { text: "Igualaria" }] },
    { q: "Melhor solução para desafios globais:", options: [{ text: "Cada um por si" }, { text: "Cooperação global e políticas sustentáveis", correct: true }, { text: "Ignorar" }] },
  ],
  REAL_LIFE: [
    { situation: "🌡️ Sobre o clima.", answer: "If we reduce emissions, we will slow down climate change." },
    { situation: "⚖️ Defendendo direitos.", answer: "Every person must have access to education and health." },
    { situation: "🥺 Sobre pobreza.", answer: "If governments invested more in education, poverty would decrease." },
    { situation: "🤝 Sobre cooperação.", answer: "Countries should work together to solve global problems." },
    { situation: "🌱 Propondo solução.", answer: "We could create more sustainable policies in every city." },
  ],
  GRAMMAR: {
    focus: "First & Second Conditional + Modal Verbs",
    why:
      "First Conditional (real, futuro): IF + presente simples, WILL + verbo. Second Conditional (hipótese/irreal): IF + past simple, WOULD + verbo (use 'were' com 'I'/'he'/'she'). Modais: MUST (obrigação forte), SHOULD (conselho), MIGHT (possibilidade fraca), COULD (possibilidade / habilidade passada).",
    examples: [
      { en: "If it RAINS, we WILL stay home. (real)", pt: "Se chover, ficamos em casa." },
      { en: "If I WERE you, I WOULD study more. (hipótese)", pt: "Se eu fosse você, estudaria mais." },
      { en: "You MUST respect human rights.", pt: "Você deve respeitar direitos humanos." },
      { en: "We SHOULD reduce plastic waste.", pt: "Deveríamos reduzir o lixo plástico." },
    ],
    errors: [
      { wrong: "If I will study, I will pass.", right: "If I STUDY, I will pass.", why: "Depois de IF (1º cond.) → presente simples." },
      { wrong: "If I was rich, I would travel.", right: "If I WERE rich, I would travel.", why: "2º Conditional formal: 'were' para todas as pessoas." },
      { wrong: "You must to study.", right: "You MUST STUDY.", why: "Modais não pedem TO." },
      { wrong: "She cans help.", right: "She CAN HELP.", why: "Modais não conjugam na 3ª pessoa." },
    ],
  },
  SONG: {
    title: "One World Anthem",
    hookPt: "Cante o hino da cooperação global.",
    verses: [
      { en: "If we tried, we would find a way,", pt: "Se tentássemos, encontraríamos um caminho,", emoji: "🌍" },
      { en: "One planet, one voice, one day.", pt: "Um planeta, uma voz, um dia.", emoji: "🎶" },
      { en: "We must stand up, we should be one,", pt: "Devemos nos levantar, sermos um,", emoji: "🤝" },
      { en: "Global peace has just begun.", pt: "A paz global apenas começou.", emoji: "🕊️" },
    ],
  },
  HUNTER: {
    intro: "Conditional ou Modal? Escolha certo!",
    rounds: [
      { promptEn: "If it ___ tomorrow, we will cancel the trip.", promptPt: "If it ___ tomorrow, we will cancel the trip.", targetLabel: "rains", objects: [
        { id: "a", label: "rains", img: "", isTarget: true },
        { id: "b", label: "will rain", img: "" },
        { id: "c", label: "rained", img: "" },
      ]},
      { promptEn: "If I ___ president, I would help everyone.", promptPt: "If I ___ president, I would help everyone.", targetLabel: "were", objects: [
        { id: "a", label: "am", img: "" },
        { id: "b", label: "were", img: "", isTarget: true },
        { id: "c", label: "will be", img: "" },
      ]},
      { promptEn: "You ___ wear a helmet. (obrigação)", promptPt: "You ___ wear a helmet. (obrigação)", targetLabel: "must", objects: [
        { id: "a", label: "must", img: "", isTarget: true },
        { id: "b", label: "might", img: "" },
        { id: "c", label: "could", img: "" },
      ]},
      { promptEn: "It ___ rain today. (talvez)", promptPt: "It ___ rain today. (talvez)", targetLabel: "might", objects: [
        { id: "a", label: "must", img: "" },
        { id: "b", label: "might", img: "", isTarget: true },
        { id: "c", label: "should", img: "" },
      ]},
      { promptEn: "'Equality' =", promptPt: "'Equality' =", targetLabel: "Igualdade", objects: [
        { id: "a", label: "Igualdade", img: "", isTarget: true },
        { id: "b", label: "Equipe", img: "" },
        { id: "c", label: "Igreja", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares palavra → tradução:",
    pairs: [
      { id: "a", en: "Climate change 🌡️", pt: "Mudanças climáticas", img: IMG.CITY_COVER },
      { id: "b", en: "Poverty 🥺", pt: "Pobreza", img: IMG.MAYA },
      { id: "c", en: "Migration 🧳", pt: "Migração", img: IMG.PASSPORT },
      { id: "d", en: "Sustainable 🌱", pt: "Sustentável", img: IMG.PARK },
    ],
  },
  BOOK: {
    title: "My Global Solutions Speech",
    intro: "Seu discurso para o Fórum Global.",
    pages: [
      { en: "Page 1 — If we ___, we will save the planet.", pt: "Pág. 1 — Se nós ___, salvaremos o planeta.", img: IMG.CITY_COVER, badge: "🌍" },
      { en: "Page 2 — If I were a leader, I would ___.", pt: "Pág. 2 — Se eu fosse líder, eu ___.", img: IMG.KENJI, badge: "👤" },
      { en: "Page 3 — We must respect ___.", pt: "Pág. 3 — Devemos respeitar ___.", img: IMG.ANNA, badge: "⚖️" },
      { en: "Page 4 — Countries should ___ more.", pt: "Pág. 4 — Países deveriam ___ mais.", img: IMG.FRIENDS, badge: "🤝" },
      { en: "The End — Together we can!", pt: "Fim — Juntos podemos!", img: IMG.SCHOOL, badge: "🌟" },
    ],
  },
  CULTURE: {
    title: "Youth Voices Around the World 🌎",
    emoji: "🕊️",
    paragraphs: [
      { en: "Greta Thunberg started a global climate movement when she was only 15.", pt: "Greta Thunberg começou um movimento climático global aos 15 anos." },
      { en: "Malala Yousafzai won the Nobel Peace Prize at 17 fighting for girls' education.", pt: "Malala Yousafzai ganhou o Nobel da Paz aos 17 lutando pela educação de meninas." },
      { pt: "Jovens de todo o mundo estão liderando debates globais — sua voz também importa." },
    ],
  },
};

export default lesson;
