/**
 * LessonChallenge — desafios por aula.
 *
 * Cada desafio contém: objetivo, descrição, material, resposta,
 * explicação, pontuação, nível. Tudo armazenado em public.lesson_challenges.
 * Nada é gerado automaticamente.
 */

import { supabase } from "@/integrations/supabase/client";

export type ChallengeNivel = "muito_facil" | "facil" | "medio" | "dificil" | "avancado";

export interface LessonChallenge {
  id: string;
  lessonId: string | null;
  codigoBncc: string;
  ordem: number;
  titulo: string;
  objetivo: string;
  descricao: string;
  material: string[];
  resposta: string;
  explicacao: string;
  pontuacao: number;
  nivel: ChallengeNivel;
}

type Row = {
  id: string;
  lesson_id: string | null;
  codigo_bncc: string;
  ordem: number | null;
  titulo: string | null;
  objetivo: string | null;
  descricao: string | null;
  material: string[] | null;
  resposta: string | null;
  explicacao: string | null;
  pontuacao: number | null;
  nivel: string | null;
};

function mapRow(r: Row): LessonChallenge {
  return {
    id: r.id,
    lessonId: r.lesson_id,
    codigoBncc: r.codigo_bncc,
    ordem: r.ordem ?? 0,
    titulo: r.titulo ?? "",
    objetivo: r.objetivo ?? "",
    descricao: r.descricao ?? "",
    material: r.material ?? [],
    resposta: r.resposta ?? "",
    explicacao: r.explicacao ?? "",
    pontuacao: r.pontuacao ?? 0,
    nivel: (r.nivel as ChallengeNivel) ?? "medio",
  };
}

const COLS =
  "id, lesson_id, codigo_bncc, ordem, titulo, objetivo, descricao, material, resposta, explicacao, pontuacao, nivel";

export const LessonChallengeService = {
  /** Lista todos os desafios cadastrados para uma aula. */
  async list(codigoBncc: string): Promise<LessonChallenge[]> {
    const { data, error } = await supabase
      .from("lesson_challenges" as never)
      .select(COLS)
      .eq("codigo_bncc", codigoBncc)
      .order("ordem", { ascending: true });

    if (error || !data) return [];
    return (data as unknown as Row[]).map(mapRow);
  },

  async listByNivel(codigoBncc: string, nivel: ChallengeNivel): Promise<LessonChallenge[]> {
    const { data, error } = await supabase
      .from("lesson_challenges" as never)
      .select(COLS)
      .eq("codigo_bncc", codigoBncc)
      .eq("nivel", nivel)
      .order("ordem", { ascending: true });

    if (error || !data) return [];
    return (data as unknown as Row[]).map(mapRow);
  },

  async get(id: string): Promise<LessonChallenge | null> {
    const { data, error } = await supabase
      .from("lesson_challenges" as never)
      .select(COLS)
      .eq("id", id)
      .maybeSingle();

    if (error || !data) return null;
    return mapRow(data as unknown as Row);
  },
};
