/**
 * lesson-builder-v2 — monta a aula nova de 9 telas (LessonV2) a partir do
 * código BNCC + título. Reaproveita os pacotes pedagógicos do gerador
 * 6º–9º atual como fonte de conteúdo, mas RESTRUTURA tudo no padrão novo.
 *
 * Regra absoluta: a tela "Explicação" jamais pode ser o texto cru da BNCC.
 * Se algum campo cair nessa armadilha, lançamos em dev.
 */

import { generateActivityLesson6a9 } from "../data/activity-lesson-generator-6a9";
import type { ActivityLesson, PraticarOption } from "../types/activity-lesson";
import type {
  Discipline,
  LessonV2,
  OptionV2,
  ResumoFormat,
} from "../types/lesson-v2";

type SubjectKey = "CI" | "MA" | "LP" | "HI" | "GE" | "LI" | "AR" | "EF" | "ER";

const SUBJECT_NAME: Record<SubjectKey, Discipline> = {
  CI: "Ciências",
  MA: "Matemática",
  LP: "Língua Portuguesa",
  HI: "História",
  GE: "Geografia",
  LI: "Língua Inglesa",
  AR: "Arte",
  EF: "Educação Física",
  ER: "Ensino Religioso",
};

const SUBJECT_RESUMO_FORMAT: Record<SubjectKey, ResumoFormat> = {
  CI: "diagram",
  MA: "flow",
  LP: "mindmap",
  HI: "timeline",
  GE: "table",
  LI: "list",
  AR: "mindmap",
  EF: "list",
  ER: "list",
};

const SUBJECT_CONTEXT_EMOJI: Record<SubjectKey, string> = {
  CI: "🔬",
  MA: "🧮",
  LP: "📖",
  HI: "🏛️",
  GE: "🗺️",
  LI: "🌐",
  AR: "🎨",
  EF: "⚽",
  ER: "🕊️",
};

function subjectFromCode(code: string): SubjectKey {
  const m = code.match(/^EF0[6789](CI|MA|LP|HI|GE|LI|AR|EF|ER)/i);
  return (m?.[1].toUpperCase() as SubjectKey) ?? "CI";
}

function gradeFromCode(code: string): string {
  const m = code.match(/^EF0([6789])/);
  return m ? `${m[1]}º Ano` : "6º Ano";
}

/** Constrói "Conceito → Passo a passo → Exemplo → Aplicação → Resumo" a partir
 *  do conteúdo curado do pack. Nunca usa o texto BNCC. */
function buildExplicacao(src: ActivityLesson, subject: SubjectKey) {
  const conceito = src.screens.explicacao_curta.text;
  const pairs = src.screens.exploracao.pairs.slice(0, 4);

  const passoAPasso = pairs.map((p, i) => ({
    step: `Passo ${i + 1} — ${p.left}`,
    detail: p.right,
  }));

  // Garante pelo menos 3 passos
  while (passoAPasso.length < 3) {
    const i = passoAPasso.length;
    passoAPasso.push({
      step: `Passo ${i + 1}`,
      detail:
        src.screens.exemplo_visual.sentences[i]?.text ??
        src.screens.explicacao.summary,
    });
  }

  const exemplo =
    src.screens.exemplo_visual.sentences.map((s) => s.text).join(" · ") ||
    src.screens.exemplo_visual.conclusion;

  const aplicacao =
    src.screens.explicacao_curta.tip ??
    `Use este conhecimento de ${SUBJECT_NAME[subject]} para ${src.screens.explicacao_curta.text.toLowerCase()}`;

  const resumo = src.screens.explicacao.summary;

  return { conceito, passoAPasso, exemplo, aplicacao, resumo };
}

function makeOptionsV2(
  options: PraticarOption[],
  shortText: string,
): OptionV2[] {
  return options.map((o) => ({
    text: o.text,
    isCorrect: o.isCorrect,
    reason: o.isCorrect
      ? `Correto! ${shortText}`
      : `Quase. Releia: ${shortText}`,
  }));
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => 0.5 - Math.random());
}

/** "Atividade" precisa de questões INDEPENDENTES. Sintetizamos a partir de
 *  pares e da pergunta principal para garantir 2-3 itens. */
function buildAtividade(src: ActivityLesson, shortText: string) {
  const items: { question: string; options: OptionV2[] }[] = [];

  // Item 1: pergunta principal (sem ajuda)
  items.push({
    question: src.screens.praticar.question,
    options: makeOptionsV2(src.screens.praticar.options, shortText),
  });

  // Item 2: gerado dos pares (associação)
  const pairs = src.screens.exploracao.pairs;
  if (pairs.length >= 2) {
    const target = pairs[0];
    const distractors = pairs.slice(1, 4);
    const opts: PraticarOption[] = shuffle([
      { text: target.right, isCorrect: true, color: "green" as const },
      ...distractors.map((d, i) => ({
        text: d.right,
        isCorrect: false,
        color: (["red", "orange", "blue"] as const)[i] ?? "blue",
      })),
    ]);
    items.push({
      question: `O que melhor descreve "${target.left}"?`,
      options: makeOptionsV2(opts, shortText),
    });
  }

  return { items };
}

function buildDesafio(src: ActivityLesson, subject: SubjectKey, shortText: string) {
  const realLifeOpener: Record<SubjectKey, string> = {
    CI: "Na sua casa, no quintal ou na escola",
    MA: "Numa situação do dia a dia",
    LP: "Lendo uma notícia ou um cartaz",
    HI: "Pensando no Brasil de hoje",
    GE: "Olhando o mapa da sua cidade",
    LI: "Conversando com alguém",
    AR: "Observando uma obra de arte",
    EF: "Durante uma atividade física",
    ER: "Convivendo com pessoas diferentes",
  };

  return {
    contextualScenario: `${realLifeOpener[subject]} você encontra este desafio:`,
    question: src.screens.praticar.question,
    options: makeOptionsV2(src.screens.praticar.options, shortText),
  };
}

function buildResumo(src: ActivityLesson, subject: SubjectKey) {
  const format = SUBJECT_RESUMO_FORMAT[subject];
  const nodes = src.screens.exploracao.pairs.slice(0, 6).map((p) => ({
    label: p.left,
    detail: p.right,
  }));
  const takeaways = [
    src.screens.explicacao.summary,
    src.screens.explicacao_curta.text,
    src.screens.exemplo_visual.conclusion,
  ].filter(Boolean);

  return {
    format,
    title: src.title,
    nodes,
    takeaways,
  };
}

/** Falha barulhentamente se a explicação acabou virando texto BNCC cru. */
function assertNoBnccLeak(lesson: LessonV2) {
  const objective = lesson.bnccObjective.trim().toLowerCase();
  if (!objective) return;
  const fields = [
    lesson.screens.explicacao.conceito,
    lesson.screens.explicacao.exemplo,
    lesson.screens.explicacao.aplicacao,
    lesson.screens.explicacao.resumo,
  ];
  for (const f of fields) {
    if (f.trim().toLowerCase() === objective) {
      throw new Error(
        `[lesson-builder-v2] explicação caiu no texto BNCC cru (${lesson.bnccCode}). ` +
          `Use um Template Pedagógico em vez do objetivo da BNCC.`,
      );
    }
  }
}

export function buildLessonV2(
  bnccCode: string,
  titulo: string,
  bnccObjective: string = "",
): LessonV2 | null {
  const src = generateActivityLesson6a9(bnccCode, titulo, bnccObjective);
  if (!src) return null;

  const subject = subjectFromCode(bnccCode);
  const discipline = SUBJECT_NAME[subject];
  const grade = gradeFromCode(bnccCode);
  const shortText = src.screens.explicacao_curta.text;

  const lesson: LessonV2 = {
    id: `v2:${bnccCode}`,
    title: src.title,
    discipline,
    grade,
    bnccCode,
    bnccObjective,
    xp: src.xp,
    screens: {
      missao: {
        studentObjective: `Você vai entender ${src.title.toLowerCase()} de um jeito que dá pra usar na vida real.`,
        contextEmoji: SUBJECT_CONTEXT_EMOJI[subject],
        contextLine: src.screens.explicacao.highlight,
        whatYouWillDo: [
          `Observar como ${src.topic.toLowerCase()} aparece no mundo`,
          `Aprender o conceito com exemplos`,
          `Resolver desafios na prática`,
        ],
        heroImage: src.screens.explicacao.image_url,
      },
      exploracao: {
        provokingQuestion: src.screens.exploracao.instruction,
        observation: src.screens.explicacao.summary,
        pairs: src.screens.exploracao.pairs.slice(0, 4),
        heroImage: src.screens.explicacao.image_url,
        caption: src.screens.explicacao.image_caption,
      },
      explicacao: buildExplicacao(src, subject),
      exemplo: {
        question: src.screens.exemplo_visual.title,
        resolution: src.screens.exemplo_visual.sentences.map((s) => ({
          line: s.text,
          note: s.emoji,
        })),
        answer: src.screens.exemplo_visual.conclusion,
        why: src.screens.explicacao_curta.text,
        image: src.screens.exemplo_visual.image_url,
      },
      guiada: {
        prompt: src.screens.praticar.question,
        options: makeOptionsV2(src.screens.praticar.options, shortText),
        hint: src.screens.explicacao_curta.tip ?? shortText,
      },
      atividade: buildAtividade(src, shortText),
      desafio: buildDesafio(src, subject, shortText),
      resumo: buildResumo(src, subject),
      dominio: {
        bnccCode,
        bnccObjective:
          bnccObjective ||
          `Habilidade ${bnccCode} — competência avaliada nesta aula.`,
        recommendation:
          "Se acertar todas: avance. Se errar alguma: revise o passo a passo.",
      },
    },
  };

  assertNoBnccLeak(lesson);
  return lesson;
}
