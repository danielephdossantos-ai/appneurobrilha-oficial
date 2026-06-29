/**
 * LessonAssessment — avaliações pedagógicas de uma aula.
 *
 * Tipos:
 *   - "diagnostica" — antes da aula, mede o que a criança já sabe.
 *   - "formativa"  — durante a aula, mede progresso.
 *   - "final"      — depois da aula, mede domínio.
 *
 * Regras:
 *   - Todo conteúdo (enunciado, alternativas, gabarito e COMENTÁRIO da
 *     resposta) vem do banco (`public.lesson_assessments`). Nada é gerado
 *     em runtime, nada é concatenado.
 *   - Se não houver avaliação cadastrada para o tipo pedido, retorna null.
 *   - A UI não é alterada — este módulo só expõe leitura.
 */

import { supabase } from "@/integrations/supabase/client";
import { LessonService } from "./LessonService";

export type AssessmentTipo = "diagnostica" | "formativa" | "final";

export interface AssessmentAlternativa {
  texto: string;
  correta: boolean;
  /** Comentário pedagógico da alternativa (por que está certa/errada). */
  comentario: string;
}

export interface AssessmentQuestao {
  enunciado: string;
  alternativas: AssessmentAlternativa[];
  /** Comentário geral da resposta correta da questão. */
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

interface Row {
  id: string;
  lesson_id: string;
  codigo_bncc: string;
  tipo: AssessmentTipo;
  titulo: string;
  descricao: string;
  questoes: AssessmentQuestao[] | null;
}

function mapRow(row: Row): LessonAssessment {
  return {
    id: row.id,
    lessonId: row.lesson_id,
    codigoBncc: row.codigo_bncc,
    tipo: row.tipo,
    titulo: row.titulo ?? "",
    descricao: row.descricao ?? "",
    questoes: Array.isArray(row.questoes) ? row.questoes : [],
  };
}

const client = supabase as unknown as {
  from: (t: string) => {
    select: (c: string) => {
      eq: (c: string, v: string) => {
        eq: (c: string, v: string) => {
          maybeSingle: () => Promise<{ data: Row | null; error: unknown }>;
        };
        order: (c: string) => Promise<{ data: Row[] | null; error: unknown }>;
      };
    };
  };
};

export const LessonAssessmentService = {
  /** Avaliação de um tipo específico para a aula (por código BNCC). */
  async get(codigoBncc: string, tipo: AssessmentTipo): Promise<LessonAssessment | null> {
    const aula = await LessonService.getLesson(codigoBncc);
    if (!aula) return null;
    const { data, error } = await client
      .from("lesson_assessments")
      .select("id,lesson_id,codigo_bncc,tipo,titulo,descricao,questoes")
      .eq("lesson_id", aula.id)
      .eq("tipo", tipo)
      .maybeSingle();
    if (error || !data) return null;
    return mapRow(data);
  },

  /** Todas as avaliações da aula (diagnóstica, formativa, final). */
  async list(codigoBncc: string): Promise<LessonAssessment[]> {
    const aula = await LessonService.getLesson(codigoBncc);
    if (!aula) return [];
    const { data, error } = await client
      .from("lesson_assessments")
      .select("id,lesson_id,codigo_bncc,tipo,titulo,descricao,questoes")
      .eq("lesson_id", aula.id)
      .order("tipo");
    if (error || !data) return [];
    return data.map(mapRow);
  },

  getDiagnostica(codigoBncc: string) {
    return this.get(codigoBncc, "diagnostica");
  },
  getFormativa(codigoBncc: string) {
    return this.get(codigoBncc, "formativa");
  },
  getFinal(codigoBncc: string) {
    return this.get(codigoBncc, "final");
  },
};
