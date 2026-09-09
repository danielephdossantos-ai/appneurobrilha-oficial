/**
 * LessonExplanation — explicações pedagógicas em 3 níveis, armazenadas separadamente.
 * Identificação pelo lesson_id (resolvido via código BNCC). Nada gerado dinamicamente.
 * Habilidade BNCC NUNCA é reaproveitada como conteúdo da explicação.
 */

import { supabase } from "@/integrations/supabase/client";
import { getLessonByBNCC } from "@/modules/pedagogical-repository";

export type ExplanationNivel = "infantil" | "intermediaria" | "detalhada";

export interface LessonExplanation {
  id: string;
  lessonId: string;
  codigoBncc: string;
  nivel: ExplanationNivel;
  titulo: string;
  conteudo: string;
  exemplos: string[];
  ordem: number;
}

const db = supabase as any;

function map(r: any): LessonExplanation {
  return {
    id: r.id,
    lessonId: r.lesson_id,
    codigoBncc: r.codigo_bncc,
    nivel: r.nivel,
    titulo: r.titulo ?? "",
    conteudo: r.conteudo ?? "",
    exemplos: Array.isArray(r.exemplos) ? r.exemplos : [],
    ordem: r.ordem ?? 0,
  };
}

export const LessonExplanationService = {
  async list(codigoBncc: string): Promise<LessonExplanation[]> {
    const a = await getLessonByBNCC(codigoBncc);
    if (!a) return [];
    const { data, error } = await db
      .from("lesson_explanations")
      .select("id,lesson_id,codigo_bncc,nivel,titulo,conteudo,exemplos,ordem")
      .eq("lesson_id", a.id)
      .order("nivel");
    if (error || !data) return [];
    return (data as any[]).map(map);
  },

  async get(
    codigoBncc: string,
    nivel: ExplanationNivel,
  ): Promise<LessonExplanation | null> {
    const a = await getLessonByBNCC(codigoBncc);
    if (!a) return null;
    const { data, error } = await db
      .from("lesson_explanations")
      .select("id,lesson_id,codigo_bncc,nivel,titulo,conteudo,exemplos,ordem")
      .eq("lesson_id", a.id)
      .eq("nivel", nivel)
      .maybeSingle();
    if (error || !data) return null;
    return map(data);
  },
};
