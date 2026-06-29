/**
 * LessonAdaptations — adaptações pedagógicas por perfil neuro.
 *
 * Perfis suportados:
 *  - "tdah"                    — TDAH
 *  - "tea"                     — TEA
 *  - "dislexia"                — Dislexia
 *  - "deficiencia_intelectual" — Deficiência Intelectual
 *  - "altas_habilidades"       — Altas Habilidades / Superdotação
 *
 * Regras:
 *  - Cada adaptação é armazenada SEPARADAMENTE em `public.lesson_adaptations`
 *    (uma linha por aula × perfil). Nenhuma adaptação fica embutida em
 *    `lesson_content`.
 *  - Tudo vem do banco; nada é gerado / concatenado em runtime.
 *  - Se não houver adaptação cadastrada, retorna null / [].
 *  - UI não é alterada — só leitura.
 */

import { supabase } from "@/integrations/supabase/client";
import { LessonService } from "./LessonService";

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

interface Row {
  id: string;
  lesson_id: string;
  codigo_bncc: string;
  perfil: AdaptacaoPerfil;
  objetivo: string | null;
  estrategias: string[] | null;
  recursos: string[] | null;
  ajustes_atividade: string[] | null;
  orientacoes_familia: string | null;
  observacoes: string | null;
}

function asStringArray(v: unknown): string[] {
  return Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];
}

function mapRow(r: Row): LessonAdaptation {
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

const COLS =
  "id,lesson_id,codigo_bncc,perfil,objetivo,estrategias,recursos,ajustes_atividade,orientacoes_familia,observacoes";

export const LessonAdaptationsService = {
  async get(codigoBncc: string, perfil: AdaptacaoPerfil): Promise<LessonAdaptation | null> {
    const aula = await LessonService.getLesson(codigoBncc);
    if (!aula) return null;
    const { data, error } = await client
      .from("lesson_adaptations")
      .select(COLS)
      .eq("lesson_id", aula.id)
      .eq("perfil", perfil)
      .maybeSingle();
    if (error || !data) return null;
    return mapRow(data);
  },

  async list(codigoBncc: string): Promise<LessonAdaptation[]> {
    const aula = await LessonService.getLesson(codigoBncc);
    if (!aula) return [];
    const { data, error } = await client
      .from("lesson_adaptations")
      .select(COLS)
      .eq("lesson_id", aula.id)
      .order("perfil");
    if (error || !data) return [];
    return data.map(mapRow);
  },
};
