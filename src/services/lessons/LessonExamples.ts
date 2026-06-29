/**
 * LessonExamples — exemplos reais de uma aula.
 *
 * Regras:
 *  - Cada aula pode ter vários exemplos, todos em `public.lesson_examples`.
 *  - Exemplos são armazenados separadamente da aula (`lesson_content`) e
 *    separadamente da habilidade BNCC.
 *  - NUNCA reutilizar a descrição da habilidade BNCC como exemplo: este
 *    módulo só lê linhas da tabela; não constrói texto.
 *  - Se não houver exemplos cadastrados, retorna [].
 */

import { supabase } from "@/integrations/supabase/client";
import { LessonService } from "./LessonService";

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
}

interface Row {
  id: string;
  lesson_id: string;
  codigo_bncc: string;
  ordem: number | null;
  titulo: string | null;
  contexto: string | null;
  enunciado: string;
  resolucao: string | null;
  resposta: string | null;
  explicacao: string | null;
  imagem: string | null;
}

function mapRow(r: Row): LessonExample {
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
  };
}

const client = supabase as unknown as {
  from: (t: string) => {
    select: (c: string) => {
      eq: (c: string, v: string) => {
        order: (c: string) => Promise<{ data: Row[] | null; error: unknown }>;
      };
    };
  };
};

export const LessonExamplesService = {
  /** Todos os exemplos de uma aula, ordenados. */
  async list(codigoBncc: string): Promise<LessonExample[]> {
    const aula = await LessonService.getLesson(codigoBncc);
    if (!aula) return [];
    const { data, error } = await client
      .from("lesson_examples")
      .select("id,lesson_id,codigo_bncc,ordem,titulo,contexto,enunciado,resolucao,resposta,explicacao,imagem")
      .eq("lesson_id", aula.id)
      .order("ordem");
    if (error || !data) return [];
    return data.map(mapRow);
  },
};
