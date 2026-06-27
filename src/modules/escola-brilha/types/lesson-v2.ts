/**
 * LessonV2 — nova arquitetura pedagógica de 9 telas.
 *
 * Regra de ouro: a habilidade BNCC é apenas o OBJETIVO de aprendizagem,
 * nunca o conteúdo da explicação. Toda tela deve ensinar.
 */

export type Discipline =
  | "Língua Portuguesa"
  | "Matemática"
  | "Ciências"
  | "História"
  | "Geografia"
  | "Arte"
  | "Língua Inglesa"
  | "Ensino Religioso"
  | "Educação Física";

export type ResumoFormat = "mindmap" | "table" | "flow" | "list" | "timeline" | "diagram";

export interface OptionV2 {
  text: string;
  isCorrect: boolean;
  /** Por que esta opção está errada/certa — explicação pedagógica obrigatória. */
  reason: string;
}

export interface MissaoScreen {
  /** Objetivo em linguagem do aluno — NUNCA o texto cru da BNCC. */
  studentObjective: string;
  contextEmoji: string;
  contextLine: string;
  whatYouWillDo: string[];
  heroImage?: string;
}

export interface ExploracaoScreen {
  provokingQuestion: string;
  observation: string;
  pairs: { left: string; right: string }[];
  heroImage?: string;
  caption?: string;
}

export interface ExplicacaoScreen {
  /** Conceito → Passo a passo → Exemplo → Aplicação → Resumo. */
  conceito: string;
  passoAPasso: { step: string; detail: string }[];
  exemplo: string;
  aplicacao: string;
  resumo: string;
}

export interface ExemploResolvidoScreen {
  question: string;
  resolution: { line: string; note?: string }[];
  answer: string;
  why: string;
  image?: string;
}

export interface PraticaGuiadaScreen {
  prompt: string;
  options: OptionV2[];
  hint: string;
}

export interface AtividadeScreen {
  items: { question: string; options: OptionV2[] }[];
}

export interface DesafioScreen {
  contextualScenario: string;
  question: string;
  options: OptionV2[];
}

export interface ResumoScreen {
  format: ResumoFormat;
  title: string;
  nodes: { label: string; detail?: string }[];
  takeaways: string[];
}

export interface DominioScreen {
  bnccCode: string;
  bnccObjective: string;
  recommendation: string;
}

export interface TemplateStepMeta {
  n: number;
  label: string;
  applied: boolean;
  source: string;
}

export interface TemplateMeta {
  slug: string;
  name: string;
  disciplina: string;
  steps: TemplateStepMeta[];
}

export interface LessonV2 {
  id: string;
  title: string;
  discipline: Discipline;
  grade: string;
  bnccCode: string;
  bnccObjective: string;
  xp: number;
  templateMeta?: TemplateMeta;
  screens: {
    missao: MissaoScreen;
    exploracao: ExploracaoScreen;
    explicacao: ExplicacaoScreen;
    exemplo: ExemploResolvidoScreen;
    guiada: PraticaGuiadaScreen;
    atividade: AtividadeScreen;
    desafio: DesafioScreen;
    resumo: ResumoScreen;
    dominio: DominioScreen;
  };
}


export const LESSON_V2_STEPS = [
  "missao",
  "exploracao",
  "explicacao",
  "exemplo",
  "guiada",
  "atividade",
  "desafio",
  "resumo",
  "dominio",
] as const;
export type LessonV2StepId = (typeof LESSON_V2_STEPS)[number];
