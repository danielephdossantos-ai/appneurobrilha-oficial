/**
 * LessonService — ÚNICO ponto de leitura de aulas.
 *
 * Centraliza TODO acesso ao banco para conteúdo pedagógico:
 *   - aula                (lesson_content)
 *   - atividades          (atividade_guiada + atividade_pratica)
 *   - desafio             (desafio)
 *   - revisão             (revisao)
 *   - quiz                (quiz)
 *   - avaliação           (lesson_assessments)
 *   - adaptações          (lesson_adaptations)
 *   - exemplos            (lesson_examples)
 *   - recursos            (lesson_resources)
 *
 * Regras absolutas:
 *  - Identificação pelo código BNCC.
 *  - Nada gerado / concatenado em runtime.
 *  - Se não existir no banco, devolve null/[]. UI mostra "Aula ainda não cadastrada."
 *  - Nenhum outro módulo deve acessar diretamente o banco para conteúdo de aula.
 */

import { supabase } from "@/integrations/supabase/client";
import {
  getLessonByBNCC,
  getLessonByBNCCSync,
  useLessonByBNCC,
  clearLessonRepositoryCache,
  type LessonContent,
  type AtividadeItem,
  type QuizQuestao,
} from "@/modules/pedagogical-repository";

export const LESSON_NOT_FOUND_MESSAGE = "Aula ainda não cadastrada.";

// ----- Tipos auxiliares (avaliação / adaptação / exemplo / recurso) --------

export type AssessmentTipo = "diagnostica" | "formativa" | "final";

export interface AssessmentAlternativa {
  texto: string;
  correta: boolean;
  comentario: string;
}

export interface AssessmentQuestao {
  enunciado: string;
  alternativas: AssessmentAlternativa[];
  comentario_resposta: string;
}

export interface LessonAssessment {
  id: string;
  lessonId: string;
  codigoBncc: string;
  tipo: AssessmentTipo;
  titulo: string;
  descricao: string;
  questoes: AssessmentQuestao[];
}

export type AdaptacaoPerfil =
  | "tdah"
  | "tea"
  | "dislexia"
  | "deficiencia_intelectual"
  | "altas_habilidades";

export interface LessonAdaptation {
  id: string;
  lessonId: string;
  codigoBncc: string;
  perfil: AdaptacaoPerfil;
  objetivo: string;
  estrategias: string[];
  recursos: string[];
  ajustesAtividade: string[];
  orientacoesFamilia: string;
  observacoes: string;
}

export type LessonExampleCategoria =
  | "cotidiano"
  | "escola"
  | "familia"
  | "brincadeira"
  | "natureza"
  | "ciencia"
  | "matematica";

export interface LessonExample {
  id: string;
  lessonId: string;
  codigoBncc: string;
  ordem: number;
  titulo: string;
  contexto: string;
  enunciado: string;
  resolucao: string;
  resposta: string;
  explicacao: string;
  imagem: string | null;
  categoria: LessonExampleCategoria | null;
}

export type LessonResourceTipo =
  | "imagem"
  | "video"
  | "audio"
  | "animacao"
  | "pdf"
  | "link";

export interface LessonResource {
  id: string;
  lessonId: string;
  tipo: LessonResourceTipo;
  titulo: string | null;
  descricao: string | null;
  url: string;
  mimeType: string | null;
  duracaoSegundos: number | null;
  tamanhoBytes: number | null;
  thumbnailUrl: string | null;
  ordem: number;
  metadata: Record<string, unknown>;
}

// ---------- Mappers --------------------------------------------------------

function asStringArray(v: unknown): string[] {
  return Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];
}

function mapAssessment(r: any): LessonAssessment {
  return {
    id: r.id,
    lessonId: r.lesson_id,
    codigoBncc: r.codigo_bncc,
    tipo: r.tipo,
    titulo: r.titulo ?? "",
    descricao: r.descricao ?? "",
    questoes: Array.isArray(r.questoes) ? r.questoes : [],
  };
}

function mapAdaptation(r: any): LessonAdaptation {
  return {
    id: r.id,
    lessonId: r.lesson_id,
    codigoBncc: r.codigo_bncc,
    perfil: r.perfil,
    objetivo: r.objetivo ?? "",
    estrategias: asStringArray(r.estrategias),
    recursos: asStringArray(r.recursos),
    ajustesAtividade: asStringArray(r.ajustes_atividade),
    orientacoesFamilia: r.orientacoes_familia ?? "",
    observacoes: r.observacoes ?? "",
  };
}

function mapExample(r: any): LessonExample {
  return {
    id: r.id,
    lessonId: r.lesson_id,
    codigoBncc: r.codigo_bncc,
    ordem: r.ordem ?? 0,
    titulo: r.titulo ?? "",
    contexto: r.contexto ?? "",
    enunciado: r.enunciado,
    resolucao: r.resolucao ?? "",
    resposta: r.resposta ?? "",
    explicacao: r.explicacao ?? "",
    imagem: r.imagem,
    categoria: r.categoria ?? null,
  };
}

function mapResource(r: any): LessonResource {
  return {
    id: r.id,
    lessonId: r.lesson_id,
    tipo: r.tipo,
    titulo: r.titulo ?? null,
    descricao: r.descricao ?? null,
    url: r.url,
    mimeType: r.mime_type ?? null,
    duracaoSegundos: r.duracao_segundos ?? null,
    tamanhoBytes: r.tamanho_bytes ?? null,
    thumbnailUrl: r.thumbnail_url ?? null,
    ordem: r.ordem ?? 0,
    metadata: (r.metadata as Record<string, unknown>) ?? {},
  };
}

const db = supabase as any;

// ---------- Service --------------------------------------------------------

export const LessonService = {
  // ----- Aula -----
  getLesson(codigoBncc: string): Promise<LessonContent | null> {
    return getLessonByBNCC(codigoBncc);
  },
  getLessonSync(codigoBncc: string): LessonContent | null {
    return getLessonByBNCCSync(codigoBncc);
  },

  // ----- Atividades / desafio / revisão / quiz -----
  async getAtividades(codigoBncc: string): Promise<AtividadeItem[]> {
    const a = await getLessonByBNCC(codigoBncc);
    if (!a) return [];
    return [...(a.atividade_guiada ?? []), ...(a.atividade_pratica ?? [])];
  },
  async getDesafio(codigoBncc: string): Promise<AtividadeItem | null> {
    const a = await getLessonByBNCC(codigoBncc);
    return a?.desafio ?? null;
  },
  async getRevisao(codigoBncc: string): Promise<string | null> {
    const a = await getLessonByBNCC(codigoBncc);
    return a?.revisao ?? null;
  },
  async getQuiz(codigoBncc: string): Promise<QuizQuestao[]> {
    const a = await getLessonByBNCC(codigoBncc);
    return a?.quiz ?? [];
  },
  async getRespostas(codigoBncc: string): Promise<string[]> {
    const a = await getLessonByBNCC(codigoBncc);
    return a?.respostas ?? [];
  },

  // ----- Avaliação (lesson_assessments) -----
  async getAssessment(
    codigoBncc: string,
    tipo: AssessmentTipo,
  ): Promise<LessonAssessment | null> {
    const a = await getLessonByBNCC(codigoBncc);
    if (!a) return null;
    const { data, error } = await db
      .from("lesson_assessments")
      .select("id,lesson_id,codigo_bncc,tipo,titulo,descricao,questoes")
      .eq("lesson_id", a.id)
      .eq("tipo", tipo)
      .maybeSingle();
    if (error || !data) return null;
    return mapAssessment(data);
  },
  async getAssessments(codigoBncc: string): Promise<LessonAssessment[]> {
    const a = await getLessonByBNCC(codigoBncc);
    if (!a) return [];
    const { data, error } = await db
      .from("lesson_assessments")
      .select("id,lesson_id,codigo_bncc,tipo,titulo,descricao,questoes")
      .eq("lesson_id", a.id)
      .order("tipo");
    if (error || !data) return [];
    return (data as any[]).map(mapAssessment);
  },

  // ----- Adaptações (lesson_adaptations) -----
  async getAdaptation(
    codigoBncc: string,
    perfil: AdaptacaoPerfil,
  ): Promise<LessonAdaptation | null> {
    const a = await getLessonByBNCC(codigoBncc);
    if (!a) return null;
    const { data, error } = await db
      .from("lesson_adaptations")
      .select(
        "id,lesson_id,codigo_bncc,perfil,objetivo,estrategias,recursos,ajustes_atividade,orientacoes_familia,observacoes",
      )
      .eq("lesson_id", a.id)
      .eq("perfil", perfil)
      .maybeSingle();
    if (error || !data) return null;
    return mapAdaptation(data);
  },
  async getAdaptations(codigoBncc: string): Promise<LessonAdaptation[]> {
    const a = await getLessonByBNCC(codigoBncc);
    if (!a) return [];
    const { data, error } = await db
      .from("lesson_adaptations")
      .select(
        "id,lesson_id,codigo_bncc,perfil,objetivo,estrategias,recursos,ajustes_atividade,orientacoes_familia,observacoes",
      )
      .eq("lesson_id", a.id)
      .order("perfil");
    if (error || !data) return [];
    return (data as any[]).map(mapAdaptation);
  },

  // ----- Exemplos (lesson_examples) -----
  async getExamples(codigoBncc: string): Promise<LessonExample[]> {
    const a = await getLessonByBNCC(codigoBncc);
    if (!a) return [];
    const { data, error } = await db
      .from("lesson_examples")
      .select(
        "id,lesson_id,codigo_bncc,ordem,titulo,contexto,enunciado,resolucao,resposta,explicacao,imagem",
      )
      .eq("lesson_id", a.id)
      .order("ordem");
    if (error || !data) return [];
    return (data as any[]).map(mapExample);
  },

  // ----- Recursos (lesson_resources) -----
  async getResources(codigoBncc: string): Promise<LessonResource[]> {
    const a = await getLessonByBNCC(codigoBncc);
    if (!a) return [];
    const { data, error } = await db
      .from("lesson_resources")
      .select("*")
      .eq("lesson_id", a.id)
      .order("tipo", { ascending: true })
      .order("ordem", { ascending: true });
    if (error || !data) return [];
    return (data as any[]).map(mapResource);
  },
  async getResourcesByTipo(
    codigoBncc: string,
    tipo: LessonResourceTipo,
  ): Promise<LessonResource[]> {
    const todos = await this.getResources(codigoBncc);
    return todos.filter((r) => r.tipo === tipo);
  },

  // ----- Existência -----
  async exists(codigoBncc: string): Promise<boolean> {
    const key = (codigoBncc || "").trim().toUpperCase();
    if (!key) return false;
    const { data, error } = await db
      .from("lesson_content")
      .select("id")
      .eq("codigo_bncc", key)
      .maybeSingle();
    if (error) return false;
    return !!data;
  },

  clearCache: clearLessonRepositoryCache,
  useLesson: useLessonByBNCC,
};

export type { LessonContent, AtividadeItem, QuizQuestao };
