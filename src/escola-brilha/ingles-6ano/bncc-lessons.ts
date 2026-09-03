import type { LessonData } from "../ingles-1ano/types";
import { IMG } from "./_assets";

type Config = {
  slug: string;
  unit: string;
  title: string;
  theme: string;
  codes: string[];
  objective: string;
  text: string[];
  vocabulary: Array<[string, string]>;
  grammar: string;
  examples: Array<[string, string]>;
  project: string;
};

const distractors = ["Não corresponde ao texto", "Informação não apresentada", "Conclusão sem pista textual"];

function makeLesson(c: Config): LessonData {
  const vocab = c.vocabulary.slice(0, 8);
  const first = vocab[0];
  return {
    slug: c.slug,
    bnccCodes: c.codes,
    meta: {
      unitLabel: `${c.unit} — ${c.title}`,
      headerKicker: `English Academy · 6th Grade · ${c.codes.join(" · ")}`,
      coverKicker: c.theme,
      coverTitle: c.title,
      coverSubtitle: c.objective,
      storyTitle: `Learning mission: ${c.title}`,
      vocabularyTitle: c.theme,
      speakingTargets: c.examples.map(([en]) => en),
      listeningIntro: `Ouça o diálogo e procure palavras conhecidas, cognatos e pistas do contexto.`,
      listeningQuestion: `Qual ideia combina com a missão “${c.title}”?`,
      listeningOptions: [c.objective, ...distractors],
      listeningCorrect: c.objective,
      listeningWrongHint: "Retome as palavras-chave e a finalidade da situação comunicativa.",
      readingNarration: `Antes de ler, observe título e organização. Durante a leitura, faça skimming para o assunto e scanning para detalhes. ${c.objective}`,
      grammarNarration: c.grammar,
      finalProjectIntro: `Produza a missão final “${c.project}”. Escreva seu nome:`,
      finalProjectPhrase: (name) => `${c.project.toUpperCase()} — By ${name}. ${c.text.join(" ")}`,
      finalProjectSectionTitle: c.project,
    },
    VOCAB: vocab.map(([en, pt], i) => ({ id: `v${i}`, en, pt, img: [IMG.CLASS, IMG.SCHOOL, IMG.LIBRARY, IMG.FRIENDS][i % 4] })),
    STORY: c.text.map((en, i) => ({ img: [IMG.CLASS, IMG.SCHOOL, IMG.LIBRARY, IMG.FRIENDS][i % 4], en, pt: `Pista ${i + 1}: identifique palavras conhecidas e confirme o sentido no contexto.` })),
    DIALOG: [
      { who: "Ms. Anna", img: IMG.ANNA, en: `What is our mission today?`, pt: "Qual é nossa missão hoje?" },
      { who: "Lucas", img: IMG.LUCAS, en: c.objective, pt: "Lucas explica o objetivo da atividade." },
      { who: "Ms. Anna", img: IMG.ANNA, en: "Can you show evidence from the text?", pt: "Você consegue mostrar uma pista do texto?" },
      { who: "Maya", img: IMG.MAYA, en: c.examples[0][0], pt: c.examples[0][1] },
      { who: "Ms. Anna", img: IMG.ANNA, en: "Good. Explain your choice to a classmate.", pt: "Ótimo. Explique sua escolha a um colega." },
    ],
    READING: {
      title: c.title,
      img: IMG.LIBRARY,
      parts: c.text.map((en, i) => ({ en, pt: `Trecho ${i + 1}: leia a ideia completa, não apenas palavras isoladas.`, highlight: en.split(" ").slice(0, 2) })),
    },
    WRITING: [
      { prompt: `Complete com a palavra do tema: ______`, answer: first[0], hint: first[1], options: [first[0], vocab[1][0], vocab[2][0], vocab[3][0]], explain: `“${first[0]}” significa “${first[1]}”.` },
      { prompt: "Escolha a frase que cumpre a missão.", answer: c.examples[0][0], hint: c.objective, options: [c.examples[0][0], ...distractors] },
      { prompt: "Qual etapa vem antes da versão final?", answer: "Plan, draft and revise", hint: "Planejar, rascunhar e revisar.", options: ["Plan, draft and revise", "Copy without reading", "Skip the purpose", "Ignore the reader"] },
      { prompt: "Como confirmar uma resposta de leitura?", answer: "Use evidence from the text", hint: "Volte ao texto.", options: ["Use evidence from the text", "Guess without reading", "Choose the longest option", "Ignore the title"] },
    ],
    QUIZ: [
      { q: "Qual é o objetivo principal desta aula?", options: [{ text: c.objective, correct: true, explain: "Esse é o foco BNCC da missão." }, ...distractors.map((text) => ({ text }))] },
      { q: "Uma estratégia adequada é:", options: [{ text: "Usar pistas do contexto", correct: true }, { text: "Traduzir letras isoladas" }, { text: "Ignorar o gênero" }, { text: "Responder sem evidência" }] },
      { q: "Ao encontrar palavra desconhecida, primeiro:", options: [{ text: "Observar contexto e palavras próximas", correct: true }, { text: "Abandonar a leitura" }, { text: "Inventar um sentido" }, { text: "Apagar o trecho" }] },
      { q: "Na produção, a melhor sequência é:", options: [{ text: "Planejar, produzir, revisar", correct: true }, { text: "Publicar sem ler" }, { text: "Copiar, apagar, desistir" }, { text: "Traduzir palavra por palavra" }] },
    ],
    REAL_LIFE: c.examples.map(([en, pt]) => ({ situation: pt, answer: en })),
    GRAMMAR: {
      focus: c.theme,
      why: c.grammar,
      examples: c.examples.map(([en, pt]) => ({ en, pt })),
      errors: [
        { wrong: "I no understand.", right: "I don't understand.", why: "A negativa no presente usa don't + verbo." },
        { wrong: "She are my friend.", right: "She is my friend.", why: "She combina com is." },
      ],
    },
    HUNTER: {
      intro: "Encontre a alternativa que usa a estratégia ensinada.",
      rounds: [{ promptEn: c.objective, promptPt: c.objective, targetLabel: c.examples[0][0], objects: [
        { id: "a", label: c.examples[0][0], img: "", isTarget: true },
        { id: "b", label: distractors[0], img: "" },
        { id: "c", label: distractors[1], img: "" },
        { id: "d", label: distractors[2], img: "" },
      ] }],
    },
    MEMORY: { intro: "Relacione inglês e português.", pairs: vocab.slice(0, 4).map(([en, pt], i) => ({ id: `p${i}`, en, pt, img: IMG.CLASS })) },
    BOOK: {
      title: c.project,
      intro: "Planeje, produza, confira e compartilhe.",
      pages: c.text.map((en, i) => ({ en, pt: `Parte ${i + 1} do projeto`, img: [IMG.SCHOOL, IMG.CLASS, IMG.LIBRARY][i % 3], badge: "📘" })),
    },
    CULTURE: { title: `${c.theme} 🌍`, emoji: "🌍", paragraphs: [{ en: c.text[0], pt: "Compare usos do inglês sem tratar uma cultura como superior a outra." }, { pt: "O inglês funciona como língua franca entre pessoas com repertórios e sotaques diversos." }] },
  };
}

export const BNCC_LESSONS_6ANO: LessonData[] = [
  makeLesson({
    slug: "u6-a02-classroom-communication", unit: "Unit 2 · Lesson 2", title: "Classroom Communication 🗣️", theme: "Oral interaction · Classroom language · Pronunciation",
    codes: ["EF06LI03", "EF06LI04", "EF06LI16", "EF06LI18", "EF06LI21"],
    objective: "Pedir esclarecimento, compreender o assunto por pistas, usar expressões de sala e reconhecer comandos e diferenças de pronúncia.",
    text: ["Open your book and work with a partner.", "Sorry, I don't understand. Could you repeat, please?", "The words music and música look similar, but their pronunciation is different.", "Listen, compare, ask and confirm meaning."],
    vocabulary: [["Could you repeat, please?", "Pode repetir, por favor?"], ["What does it mean?", "O que significa?"], ["Open", "Abra"], ["Close", "Feche"], ["Listen", "Escute"], ["Repeat", "Repita"], ["Partner", "Dupla"], ["Meaning", "Significado"]],
    grammar: "O imperativo usa o verbo sem sujeito para comandos e instruções: Open, Listen, Write. Para pedir ajuda com respeito, use Could you repeat? ou What does ... mean? Compare sons, sílabas fortes e cognatos sem presumir pronúncia igual ao português.",
    examples: [["Could you repeat, please?", "Peça repetição com respeito."], ["What does 'schedule' mean?", "Pergunte o significado."], ["Listen and circle the answer.", "Reconheça a instrução."]], project: "Classroom Survival Guide",
  }),
  makeLesson({
    slug: "u6-a03-reading-lab", unit: "Unit 3 · Lesson 3", title: "Reading Strategy Lab 🔎", theme: "Purpose · Skimming · Scanning · Dictionary · Digital learning",
    codes: ["EF06LI07", "EF06LI08", "EF06LI09", "EF06LI10", "EF06LI11", "EF06LI12"],
    objective: "Prever a finalidade, identificar assunto e informações específicas, usar dicionário bilíngue e ambientes digitais e compartilhar interpretações.",
    text: ["SCHOOL SCIENCE FAIR — Friday, 3 p.m., in the school gym.", "Bring a reusable bottle and your student badge.", "The title and layout show that this text is an event poster.", "Scanning finds the date and place; a dictionary entry confirms meaning and word class."],
    vocabulary: [["purpose", "finalidade"], ["title", "título"], ["keyword", "palavra-chave"], ["entry", "verbete"], ["definition", "definição"], ["word class", "classe gramatical"], ["source", "fonte"], ["evidence", "evidência"]],
    grammar: "Skimming é leitura rápida para captar assunto; scanning busca um dado específico. No dicionário, confira palavra-guia, classe, acepção e exemplo. Em aplicativo ou site, use fonte adequada e registre as palavras no contexto.",
    examples: [["The text is a poster for a school event.", "Identifique gênero e finalidade."], ["The fair is on Friday at 3 p.m.", "Localize data e horário."], ["I think the poster is useful because...", "Compartilhe interpretação com evidência."]], project: "Reading Strategy Card",
  }),
  makeLesson({
    slug: "u6-a04-writing-workshop", unit: "Unit 4 · Lesson 4", title: "Writing Workshop ✍️", theme: "Brainstorming · Organization · Authorship",
    codes: ["EF06LI13", "EF06LI14", "EF06LI15"],
    objective: "Listar e organizar ideias e produzir um texto em inglês adequado ao tema, objetivo, gênero e leitor.",
    text: ["Goal: create a photo caption about your school routine.", "Brainstorm: place, people, action, time and feeling.", "Organize the ideas: opening, useful details and closing.", "Draft, check meaning and spelling, revise, then share."],
    vocabulary: [["brainstorm", "lista inicial de ideias"], ["audience", "leitor/público"], ["purpose", "objetivo"], ["draft", "rascunho"], ["revise", "revisar"], ["caption", "fotolegenda"], ["routine", "rotina"], ["share", "compartilhar"]],
    grammar: "Escrever é processo: definir objetivo e leitor, listar ideias, selecionar as relevantes, ordenar, redigir e revisar. Use frases no presente para falar de si, família, amigos, preferências e rotina.",
    examples: [["This is my school library. I read here on Tuesdays.", "Fotolegenda com lugar, ação e tempo."], ["I like science because we do experiments.", "Preferência acompanhada de motivo."], ["First I plan; then I write and revise.", "Sequência do processo de escrita."]], project: "My School Photo Caption",
  }),
  makeLesson({
    slug: "u6-a05-actions-and-family", unit: "Unit 5 · Lesson 5", title: "Actions Now & Family Links ⏱️", theme: "Present continuous · Genitive case",
    codes: ["EF06LI20", "EF06LI22"],
    objective: "Descrever ações em andamento com o presente contínuo e relações de pertencimento ou parentesco com apóstrofo + s.",
    text: ["Maya is reading in the library now.", "Lucas is talking to Kenji, and Sophie is writing.", "Maya's notebook is blue. Lucas's sister is in the photo.", "The apostrophe marks a relationship; am, is or are plus -ing marks an action in progress."],
    vocabulary: [["reading", "lendo"], ["writing", "escrevendo"], ["talking", "conversando"], ["now", "agora"], ["notebook", "caderno"], ["sister", "irmã"], ["belonging", "pertencimento"], ["in progress", "em andamento"]],
    grammar: "Presente contínuo: sujeito + am/is/are + verbo-ing. Use-o para ações acontecendo agora. Genitivo: nome + 's + elemento relacionado, como Maya's notebook e Lucas's sister; não confunda esse 's com is sem observar o substantivo seguinte.",
    examples: [["They are studying now.", "Ação em andamento com they + are."], ["Kenji's backpack is open.", "A mochila pertence a Kenji."], ["Anna's student is speaking.", "A relação é indicada por 's."]], project: "What Is Happening?",
  }),
  makeLesson({
    slug: "u6-a06-english-around-us", unit: "Unit 6 · Lesson 6", title: "English Around Us 🌎", theme: "English in the world · Brazil · Cultural products",
    codes: ["EF06LI24", "EF06LI25", "EF06LI26"],
    objective: "Investigar onde o inglês é língua materna ou oficial, identificar sua presença no Brasil e avaliar criticamente produtos culturais em circulação.",
    text: ["English is used officially in countries with different histories, cultures and accents.", "In Brazil, English appears in technology, sports, advertising, music titles, menus and public signs.", "A borrowed word may change pronunciation or meaning when Brazilian communities use it.", "Cultural products carry viewpoints: ask who created them, for whom, and which voices are represented or absent."],
    vocabulary: [["official language", "língua oficial"], ["first language", "língua materna"], ["lingua franca", "língua franca"], ["loanword", "palavra emprestada"], ["advertising", "publicidade"], ["viewpoint", "ponto de vista"], ["audience", "público"], ["representation", "representação"]],
    grammar: "Inglês não pertence a um único país ou sotaque. Investigue fontes e diferencie língua materna, oficial e franca. Ao analisar palavras e produtos culturais, observe circulação, adaptação, interesses, estereótipos e vozes representadas.",
    examples: [["English is an official language in several countries.", "Pesquise país e função social da língua."], ["The word 'shopping' has a specific use in Brazilian Portuguese.", "Analise um anglicismo no contexto local."], ["This product shows one viewpoint, but other voices are missing.", "Faça avaliação cultural fundamentada."]], project: "English Around Us Map",
  }),
];
