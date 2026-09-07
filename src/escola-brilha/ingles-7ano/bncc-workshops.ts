import type { LessonData } from "../ingles-1ano/types";
import { IMG } from "./_assets";

type Workshop = {
  slug: string; title: string; codes: string[]; objective: string;
  text: string[]; vocab: Array<[string, string]>; rules: string;
  examples: Array<[string, string]>; project: string;
};

const wrong = ["Ignorar o contexto", "Responder sem evidência", "Copiar sem compreender"];

function workshop(w: Workshop): LessonData {
  return {
    slug: w.slug,
    bnccCodes: w.codes,
    meta: {
      unitLabel: `BNCC Workshop — ${w.title}`,
      headerKicker: `English Academy · 7th Grade · ${w.codes.join(" · ")}`,
      coverKicker: "Real communication · Guided practice · Final production",
      coverTitle: w.title,
      coverSubtitle: w.objective,
      storyTitle: `Mission: ${w.title}`,
      vocabularyTitle: "Words and strategies",
      speakingTargets: w.examples.map(([en]) => en),
      listeningIntro: "Ouça uma vez para entender o contexto e outra vez para confirmar informações-chave.",
      listeningQuestion: `Qual ação demonstra a habilidade praticada em “${w.title}”?`,
      listeningOptions: [w.objective, ...wrong],
      listeningCorrect: w.objective,
      listeningWrongHint: "Procure finalidade, interlocutores, palavras-chave e evidências.",
      readingNarration: `Observe título, início, fim e palavras repetidas. Depois relacione as partes e procure a informação necessária. ${w.objective}`,
      grammarNarration: w.rules,
      finalProjectIntro: `Planeje, produza e revise “${w.project}”. Digite seu nome:`,
      finalProjectPhrase: (name) => `${w.project.toUpperCase()} — By ${name}. ${w.text.join(" ")}`,
      finalProjectSectionTitle: w.project,
    },
    VOCAB: w.vocab.map(([en, pt], i) => ({ id: `v${i}`, en, pt, img: [IMG.CLASS, IMG.LIBRARY, IMG.SCHOOL, IMG.FRIENDS][i % 4] })),
    STORY: w.text.map((en, i) => ({ img: [IMG.CLASS, IMG.LIBRARY, IMG.SCHOOL, IMG.FRIENDS][i % 4], en, pt: `Parte ${i + 1}: encontre a função dessa informação no texto completo.` })),
    DIALOG: [
      { who: "Ms. Anna", img: IMG.ANNA, en: "What do we already know about this topic?", pt: "O que já sabemos sobre este tema?" },
      { who: "Kenji", img: IMG.KENJI, en: w.examples[0][0], pt: w.examples[0][1] },
      { who: "Maya", img: IMG.MAYA, en: "Which words support your answer?", pt: "Quais palavras sustentam sua resposta?" },
      { who: "Lucas", img: IMG.LUCAS, en: w.examples[1][0], pt: w.examples[1][1] },
      { who: "Ms. Anna", img: IMG.ANNA, en: "Compare ideas respectfully and improve your answer.", pt: "Compare ideias com respeito e melhore sua resposta." },
    ],
    READING: { title: w.title, img: IMG.LIBRARY, parts: w.text.map((en, i) => ({ en, pt: `Parágrafo ${i + 1}: identifique ideia-chave e conexão com o seguinte.`, highlight: en.split(" ").slice(0, 3) })) },
    WRITING: [
      { prompt: "Qual é a primeira etapa de uma produção responsável?", answer: "Define purpose and audience", hint: "Objetivo e público orientam escolhas.", options: ["Define purpose and audience", ...wrong] },
      { prompt: "Como organizar informações relacionadas?", answer: "Use paragraphs and headings", hint: "Crie unidades de sentido.", options: ["Use paragraphs and headings", "Mix every idea", "Remove the title", "Skip revision"] },
      { prompt: "Qual resposta apresenta evidência?", answer: w.examples[0][0], hint: w.examples[0][1], options: [w.examples[0][0], ...wrong] },
      { prompt: "Antes de publicar, é necessário:", answer: "Review meaning and form", hint: "Revise conteúdo e linguagem.", options: ["Review meaning and form", "Ignore the reader", "Delete evidence", "Change the topic"] },
    ],
    QUIZ: [
      { q: "Qual é o objetivo desta oficina?", options: [{ text: w.objective, correct: true }, ...wrong.map((text) => ({ text }))] },
      { q: "Uma boa resposta de compreensão precisa de:", options: [{ text: "Evidência do texto", correct: true }, { text: "Um palpite" }, { text: "A opção maior" }, { text: "Tradução isolada" }] },
      { q: "Na interação oral colaborativa, devemos:", options: [{ text: "Ouvir, responder e pedir esclarecimento", correct: true }, { text: "Interromper sempre" }, { text: "Ridicularizar sotaques" }, { text: "Evitar perguntas" }] },
      { q: "A sequência de escrita adequada é:", options: [{ text: "Planejar, produzir, revisar", correct: true }, { text: "Copiar e publicar" }, { text: "Publicar e planejar" }, { text: "Traduzir sem contexto" }] },
    ],
    REAL_LIFE: w.examples.map(([answer, situation]) => ({ situation, answer })),
    GRAMMAR: {
      focus: w.title,
      why: w.rules,
      examples: w.examples.map(([en, pt]) => ({ en, pt })),
      errors: [
        { wrong: "Yesterday I go to school.", right: "Yesterday I went to school.", why: "Um fato concluído no passado pede simple past." },
        { wrong: "People speaks English the same way.", right: "People speak English in different ways.", why: "Há variação natural de sotaque, vocabulário e uso." },
      ],
    },
    HUNTER: { intro: "Escolha a estratégia adequada.", rounds: [{ promptEn: w.objective, promptPt: w.objective, targetLabel: w.examples[0][0], objects: [
      { id: "a", label: w.examples[0][0], img: "", isTarget: true },
      { id: "b", label: wrong[0], img: "" }, { id: "c", label: wrong[1], img: "" }, { id: "d", label: wrong[2], img: "" },
    ] }] },
    MEMORY: { intro: "Relacione conceito e significado.", pairs: w.vocab.slice(0, 4).map(([en, pt], i) => ({ id: `p${i}`, en, pt, img: IMG.CLASS })) },
    BOOK: { title: w.project, intro: "Planeje e registre sua aprendizagem.", pages: w.text.map((en, i) => ({ en, pt: `Seção ${i + 1}`, img: [IMG.CLASS, IMG.LIBRARY][i % 2], badge: "📘" })) },
    CULTURE: { title: "English, identities and respect", emoji: "🌍", paragraphs: [{ en: w.text[0], pt: "Observe contexto, identidade e diversidade." }, { pt: "Não existe um único sotaque legítimo: inteligibilidade e respeito orientam a comunicação." }] },
  };
}

export const BNCC_WORKSHOPS_7ANO: LessonData[] = [
  workshop({
    slug: "u7-a08-oral-reading-lab", title: "Oral & Reading Investigation 🎧🔎",
    codes: ["EF07LI01", "EF07LI03", "EF07LI04", "EF07LI06", "EF07LI07", "EF07LI08", "EF07LI09", "EF07LI10", "EF07LI11"],
    objective: "Colaborar oralmente e compreender textos orais, escritos e digitais usando conhecimentos prévios, contexto, finalidade, palavras-chave, relações entre parágrafos e fontes confiáveis.",
    text: ["Title: Students Create a Community Library.", "The first paragraph presents the problem: many children have limited access to books.", "The next paragraphs explain the student campaign, its partners and collection dates.", "The final paragraph invites readers to participate and identifies the school website as the official source."],
    vocab: [["prior knowledge", "conhecimento prévio"], ["context", "contexto"], ["purpose", "finalidade"], ["interlocutor", "interlocutor"], ["keyword", "palavra-chave"], ["paragraph", "parágrafo"], ["reliable source", "fonte confiável"], ["evidence", "evidência"]],
    rules: "Antes de ouvir ou ler, ative conhecimentos prévios. Identifique quem fala, para quem, onde e com qual finalidade. Faça leitura rápida pelo título, primeiras e últimas frases e palavras repetidas; depois relacione parágrafos e busque dados específicos. Em pesquisa digital, confira autoria, instituição, data e evidências.",
    examples: [["The purpose is to invite the community to donate books.", "Conclusão apoiada pelo convite final."], ["According to paragraph three, donations end on Friday.", "Informação específica localizada."], ["I agree because the text shows...", "Opinião compartilhada com evidência."]], project: "Reliable Source Reading Report",
  }),
  workshop({
    slug: "u7-a09-life-story-studio", title: "Life Story Studio 🎙️✍️",
    codes: ["EF07LI02", "EF07LI05", "EF07LI12", "EF07LI13", "EF07LI14", "EF07LI15", "EF07LI16", "EF07LI18"],
    objective: "Entrevistar, narrar e escrever acontecimentos do passado, planejando público e formato, organizando parágrafos e usando passado simples e contínuo, conectores e pronúncia de -ed.",
    text: ["When Ana was ten, she moved to a new town.", "She was walking to her new school when she met Jo.", "They talked, discovered a shared interest in science and became friends.", "Later, Ana created a school science club; her first difficult day became an important beginning."],
    vocab: [["interview", "entrevista"], ["timeline", "linha do tempo"], ["biography", "biografia"], ["while", "enquanto"], ["when", "quando"], ["because", "porque"], ["before", "antes"], ["after", "depois"]],
    rules: "Planeje público, finalidade, layout e suporte; agrupe cada etapa da vida em parágrafos ou tópicos. Use simple past para fatos concluídos e past continuous para uma ação em andamento interrompida ou contextual: She was walking when she met Jo. O -ed tem três pronúncias: /t/ em worked, /d/ em played e /ɪd/ em wanted.",
    examples: [["What happened when you started school?", "Pergunta aberta para entrevista."], ["She was studying when the idea appeared.", "Ação em andamento e acontecimento pontual."], ["First she planned, then she created the club.", "Conectores organizam sequência."]], project: "Interview Biography",
  }),
  workshop({
    slug: "u7-a10-language-and-world", title: "Language, Meaning & World 🌐",
    codes: ["EF07LI17", "EF07LI19", "EF07LI20", "EF07LI21", "EF07LI22", "EF07LI23"],
    objective: "Interpretar palavras polissêmicas pelo contexto, distinguir pronomes sujeito e objeto, usar can/could e analisar o inglês global valorizando suas variedades.",
    text: ["The word bank can mean a financial institution or the side of a river; context selects the meaning.", "I invited her, and she invited me: she and I are subjects; her and me are objects.", "Today I can present in English; two years ago I could only say a few words.", "English connects speakers worldwide, and accents and varieties express histories and identities rather than errors."],
    vocab: [["meaning", "significado"], ["context", "contexto"], ["subject", "sujeito"], ["object", "objeto"], ["ability", "habilidade"], ["global language", "língua global"], ["accent", "sotaque"], ["variation", "variação"]],
    rules: "Palavras podem ter sentidos diferentes: use a frase e o gênero para decidir. Pronomes sujeito (I, he, she, we, they) fazem a ação; objeto (me, him, her, us, them) recebem a ação. Can expressa habilidade presente e could, passada. Variação de sotaque e vocabulário é natural e não autoriza preconceito linguístico.",
    examples: [["She helped me, and I thanked her.", "She/I são sujeitos; me/her são objetos."], ["I can swim now, but I couldn't swim at five.", "Habilidade presente e passada."], ["Different accents can be clear and valid.", "Inteligibilidade não exige imitar um único sotaque."]], project: "English Varieties Awareness Guide",
  }),
];
