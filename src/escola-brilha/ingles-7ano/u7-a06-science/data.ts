// Inglês 7º Ano — Unit 6 "Science and Innovation 🚀"
// Modal Verbs (Can, Could, May) · Sequência de ideias · Ciência e inovação
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u7-a06-science",
  meta: {
    unitLabel: "Unit 6 · Lesson 1 — Science and Innovation 🚀",
    headerKicker: "SPEB 1.0 · English Academy — 7th Grade",
    coverKicker: "AI · Space · Robots · Inventions",
    coverTitle: "Science and Innovation 🚀",
    coverSubtitle:
      "A Academy participa da Young Scientist Expo. Aprenda a explicar processos com CAN/COULD/MAY e conectores de sequência.",
    storyTitle: "Young Scientist Expo",
    vocabularyTitle: "Science, AI & Space",
    speakingTargets: [
      "Robots can do repetitive tasks.",
      "Artificial intelligence may change the world.",
      "First, we mix the two liquids. Then, we observe.",
      "You could try a different approach.",
      "Astronauts can travel to the space station.",
      "This experiment may take one hour.",
    ],
    listeningIntro: "Ouça a apresentação de Kenji sobre robôs.",
    listeningQuestion:
      'Kenji: "Robots can do dangerous work, and in the future they may help doctors in surgeries." O que os robôs PODEM fazer HOJE (habilidade)?',
    listeningOptions: [
      "Ajudar em cirurgias no futuro",
      "Fazer trabalhos perigosos",
      "Substituir todos os humanos",
    ],
    listeningCorrect: "Fazer trabalhos perigosos",
    listeningWrongHint: "'can do' = podem/conseguem fazer (habilidade real). 'may help' = talvez ajudem (possibilidade).",
    readingNarration:
      "Textos científicos costumam usar CAN (habilidade/possibilidade real), COULD (possibilidade passada ou educada), MAY (possibilidade futura). E conectores de sequência: FIRST, THEN, AFTER THAT, FINALLY.",
    grammarNarration:
      "CAN = habilidade / possibilidade real (Robots CAN work 24 hours). COULD = passado de CAN, sugestão educada (You COULD try). MAY = possibilidade (AI MAY change medicine). Todos são modais: verbo depois SEMPRE no infinitivo sem 'to'. Sequência: First, Then, After That, Finally.",
    finalProjectIntro: "Vamos escrever sua apresentação científica. Escreva seu nome:",
    finalProjectPhrase: (name: string) =>
      `YOUNG SCIENTIST EXPO — Hi! I'm ${name} and today I present my experiment. FIRST, I collected two plants and put them in different rooms. THEN, one plant received sunlight and the other didn't. AFTER THAT, I measured them every day for two weeks. FINALLY, I discovered that the plant with sunlight grew three times faster. Plants CAN produce their own food using light — this process is called photosynthesis. In the future, science MAY help us grow food in space. Science is the language of discovery!`,
    finalProjectSectionTitle: "Young Scientist Expo",
  },
  VOCAB: [
    { id: "ai", en: "Artificial Intelligence 🤖", pt: "Inteligência Artificial", img: IMG.KENJI },
    { id: "space", en: "Space 🚀", pt: "Espaço", img: IMG.MUSEUM },
    { id: "robot", en: "Robot 🤖", pt: "Robô", img: IMG.LUCAS },
    { id: "invention", en: "Invention 💡", pt: "Invenção", img: IMG.SOPHIE },
    { id: "experiment", en: "Experiment 🧪", pt: "Experimento", img: IMG.HOSPITAL },
    { id: "laboratory", en: "Laboratory 🔬", pt: "Laboratório", img: IMG.CLASS },
    { id: "discovery", en: "Discovery 🔍", pt: "Descoberta", img: IMG.MAYA },
    { id: "research", en: "Research 📚", pt: "Pesquisa", img: IMG.LIBRARY },
  ],
  STORY: [
    { img: IMG.ANNA, en: "Ms. Anna: 'Today we start the Young Scientist Expo!'", pt: "Ms. Anna: 'Hoje começamos a Feira do Jovem Cientista!'" },
    { img: IMG.KENJI, en: "Kenji: 'My project is about robots. Robots can help doctors!'", pt: "Kenji: 'Meu projeto é sobre robôs. Eles podem ajudar médicos!'" },
    { img: IMG.MAYA, en: "Maya: 'First I chose two plants, then I compared their growth.'", pt: "Maya: 'Primeiro escolhi duas plantas, depois comparei o crescimento.'" },
    { img: IMG.SOPHIE, en: "Sophie: 'AI may help us translate every language soon.'", pt: "Sophie: 'A IA pode nos ajudar a traduzir todo idioma em breve.'" },
    { img: IMG.LUCAS, en: "Lucas: 'You could send a small camera to Mars for cheap!'", pt: "Lucas: 'Dá pra mandar uma câmera pequena pra Marte barato!'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'Amazing projects, young scientists!'", pt: "Ms. Anna: 'Projetos incríveis, jovens cientistas!'" },
  ],
  DIALOG: [
    { who: "Ms. Anna", img: IMG.ANNA, en: "Kenji, can you explain your experiment?", pt: "Kenji, você pode explicar seu experimento?" },
    { who: "Kenji", img: IMG.KENJI, en: "Sure! First, I built a small robot with sensors.", pt: "Claro! Primeiro, montei um robô pequeno com sensores." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "And then?", pt: "E depois?" },
    { who: "Kenji", img: IMG.KENJI, en: "Then, I programmed it to move around obstacles.", pt: "Depois, programei pra andar desviando de obstáculos." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "What can this robot do in real life?", pt: "O que esse robô pode fazer na vida real?" },
    { who: "Kenji", img: IMG.KENJI, en: "It could help visually impaired people walk safely.", pt: "Poderia ajudar pessoas com deficiência visual a andar em segurança." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Brilliant! Science may change many lives.", pt: "Brilhante! A ciência pode mudar muitas vidas." },
  ],
  READING: {
    title: "How to Do a Science Experiment",
    img: IMG.HOSPITAL,
    parts: [
      { en: "A good scientist follows steps carefully.", pt: "Um bom cientista segue passos com cuidado.", highlight: ["scientist", "steps"] },
      { en: "First, ask a clear question about the world.", pt: "Primeiro, faça uma pergunta clara sobre o mundo.", highlight: ["First"] },
      { en: "Then, make a hypothesis — a possible answer.", pt: "Depois, faça uma hipótese — uma resposta possível.", highlight: ["Then", "hypothesis"] },
      { en: "After that, test your idea with an experiment.", pt: "Em seguida, teste sua ideia com um experimento.", highlight: ["After that", "experiment"] },
      { en: "Finally, record the results and share your discovery.", pt: "Por fim, registre os resultados e compartilhe a descoberta.", highlight: ["Finally", "discovery"] },
    ],
  },
  WRITING: [
    { prompt: "Robots ______ do dangerous work. (habilidade)", answer: "can", hint: "Habilidade real = CAN.", options: ["can", "may", "could"], explain: "CAN = habilidade real." },
    { prompt: "AI ______ change the future. (possibilidade)", answer: "may", hint: "Possibilidade futura → MAY.", options: ["may", "can", "must"] },
    { prompt: "You ______ try a different method. (sugestão educada)", answer: "could", hint: "Sugestão educada → COULD.", options: ["could", "must", "can't"] },
    { prompt: "______, mix the two liquids.", answer: "First", hint: "Sequência 1º passo.", options: ["First", "Finally", "Then"] },
    { prompt: "______, observe the reaction for 5 minutes.", answer: "Then", hint: "Sequência 2º passo.", options: ["Then", "First", "Finally"] },
    { prompt: "______, write your conclusion.", answer: "Finally", hint: "Último passo.", options: ["Finally", "First", "Then"] },
  ],
  QUIZ: [
    { q: "Habilidade real:", options: [{ text: "may" }, { text: "can", correct: true }, { text: "must" }] },
    { q: "Possibilidade futura:", options: [{ text: "must" }, { text: "may", correct: true }, { text: "can't" }] },
    { q: "Sugestão educada:", options: [{ text: "must" }, { text: "could", correct: true, explain: "COULD é mais gentil que CAN." }, { text: "won't" }] },
    { q: "'Discovery' significa:", options: [{ text: "Descoberta", correct: true }, { text: "Discussão" }, { text: "Discriminação" }] },
    { q: "Complete: ___, add water to the mix.", options: [{ text: "Finally" }, { text: "First", correct: true }, { text: "After that" }] },
    { q: "Depois de 'can' vem:", options: [{ text: "verbo -ing" }, { text: "infinitivo SEM 'to'", correct: true }, { text: "infinitivo COM 'to'" }] },
    { q: "'Laboratory' significa:", options: [{ text: "Biblioteca" }, { text: "Laboratório", correct: true }, { text: "Escritório" }] },
    { q: "'Astronauts ___ travel to space.'", options: [{ text: "can", correct: true }, { text: "must" }, { text: "should" }] },
  ],
  REAL_LIFE: [
    { situation: "🤖 Explicando o que um robô sabe fazer.", answer: "This robot can move around obstacles by itself." },
    { situation: "🔬 Sugerindo uma alternativa educada.", answer: "You could try heating the water first." },
    { situation: "🚀 Falando de uma possibilidade futura.", answer: "AI may help doctors discover new medicines." },
    { situation: "🧪 Explicando um experimento passo a passo.", answer: "First, mix the two liquids. Then, wait five minutes. Finally, observe the reaction." },
    { situation: "💡 Descrevendo uma invenção.", answer: "This invention can save a lot of energy." },
  ],
  GRAMMAR: {
    focus: "Modal Verbs (Can, Could, May) · Sequence Words",
    why:
      "Modais mostram INTENÇÃO/POSSIBILIDADE. CAN = habilidade real e agora. COULD = passado de can OU sugestão gentil. MAY = talvez, possibilidade futura. Modais nunca mudam com pessoa (NUNCA 'she cans') e o verbo vem SEMPRE no infinitivo sem 'to'. Sequência (First, Then, After That, Finally) organiza processos científicos.",
    examples: [
      { en: "Robots CAN work 24 hours a day.", pt: "Robôs conseguem trabalhar 24h por dia." },
      { en: "COULD you help me with the microscope?", pt: "Você poderia me ajudar com o microscópio?" },
      { en: "AI MAY replace boring tasks in the future.", pt: "A IA talvez substitua tarefas chatas no futuro." },
      { en: "FIRST heat the water. THEN add salt. FINALLY stir.", pt: "Primeiro esquente a água. Depois adicione sal. Por fim mexa." },
    ],
    errors: [
      { wrong: "She cans use a computer.", right: "She CAN use a computer.", why: "Modais nunca ganham -S." },
      { wrong: "AI may to change medicine.", right: "AI MAY CHANGE medicine.", why: "Depois de modal, sem 'to'." },
      { wrong: "You could to try.", right: "You COULD TRY.", why: "Depois de modal, sem 'to'." },
      { wrong: "Firstly heat, secondly add.", right: "FIRST heat, THEN add.", why: "Em processos usamos First, Then, After that, Finally." },
    ],
  },
  SONG: {
    title: "Science Can",
    verses: [
      { en: "Robots can build, AI can learn,", pt: "Robôs constroem, IA aprende,", emoji: "🤖" },
      { en: "Rockets can fly, engines can turn.", pt: "Foguetes voam, motores giram.", emoji: "🚀" },
      { en: "First we imagine, then we create,", pt: "Primeiro imaginamos, depois criamos,", emoji: "💡" },
      { en: "Finally we change the world — that's fate!", pt: "Por fim mudamos o mundo — é o destino!", emoji: "🌟" },
    ],
  },
  HUNTER: {
    intro: "Escolha o modal certo!",
    rounds: [
      { promptEn: "Habilidade real: 'robôs TRABALHAM 24h'", promptPt: "Habilidade real: 'robôs TRABALHAM 24h'", targetLabel: "can", objects: [
        { id: "a", label: "can", img: "", isTarget: true },
        { id: "b", label: "may", img: "" },
        { id: "c", label: "must", img: "" },
      ]},
      { promptEn: "Possibilidade futura: 'talvez a IA mude'", promptPt: "Possibilidade futura: 'talvez a IA mude'", targetLabel: "may", objects: [
        { id: "a", label: "can", img: "" },
        { id: "b", label: "may", img: "", isTarget: true },
        { id: "c", label: "must", img: "" },
      ]},
      { promptEn: "Sugestão educada: 'você poderia tentar'", promptPt: "Sugestão educada: 'você poderia tentar'", targetLabel: "could", objects: [
        { id: "a", label: "must", img: "" },
        { id: "b", label: "could", img: "", isTarget: true },
        { id: "c", label: "won't", img: "" },
      ]},
      { promptEn: "1º passo do experimento:", promptPt: "1º passo do experimento:", targetLabel: "First", objects: [
        { id: "a", label: "Finally", img: "" },
        { id: "b", label: "First", img: "", isTarget: true },
        { id: "c", label: "Then", img: "" },
      ]},
      { promptEn: "Último passo:", promptPt: "Último passo:", targetLabel: "Finally", objects: [
        { id: "a", label: "First", img: "" },
        { id: "b", label: "Then", img: "" },
        { id: "c", label: "Finally", img: "", isTarget: true },
      ]},
    ],
  },
  MEMORY: {
    intro: "Pares modal → significado!",
    pairs: [
      { id: "a", en: "Can 💪", pt: "Habilidade real", img: IMG.LUCAS },
      { id: "b", en: "Could 🙏", pt: "Sugestão educada", img: IMG.SOPHIE },
      { id: "c", en: "May 🤔", pt: "Possibilidade", img: IMG.KENJI },
      { id: "d", en: "Must ⚠️", pt: "Obrigação forte", img: IMG.ANNA },
    ],
  },
  CULTURE: {
    title: "Young Scientists Around the World 🔬",
    emoji: "🧑‍🔬",
    paragraphs: [
      { en: "Malala Yousafzai (Pakistan) won the Nobel Prize at 17. Greta Thunberg (Sweden) changed climate policy at 15.", pt: "Malala Yousafzai (Paquistão) ganhou o Nobel aos 17. Greta Thunberg (Suécia) mudou a política climática aos 15." },
      { en: "In science, English is the common language — 95% of research papers are written in English.", pt: "Em ciência, o inglês é a língua comum — 95% dos artigos são escritos em inglês." },
      { pt: "Falar inglês te dá acesso à ciência global — e à chance de contribuir com ela." },
    ],
  },
};

export default lesson;
