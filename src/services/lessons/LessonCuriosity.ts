/**
 * LessonCuriosity — curiosidades por aula.
 *
 * Cada aula pode possuir várias curiosidades, totalmente independentes
 * da explicação. Tudo armazenado em public.lesson_curiosities.
 * Nada é gerado em runtime.
 */

import { supabase } from "@/integrations/supabase/client";

export interface LessonCuriosity {
  id: string;
  lessonId: string | null;
  codigoBncc: string;
  ordem: number;
  titulo: string;
  conteudo: string;
  fonte: string;
  imagemUrl: string;
}

type Row = {
  id: string;
  lesson_id: string | null;
  codigo_bncc: string;
  ordem: number | null;
  titulo: string | null;
  conteudo: string | null;
  fonte: string | null;
  imagem_url: string | null;
};

function mapRow(r: Row): LessonCuriosity {
  return {
    id: r.id,
    lessonId: r.lesson_id,
    codigoBncc: r.codigo_bncc,
    ordem: r.ordem ?? 0,
    titulo: r.titulo ?? "",
    conteudo: r.conteudo ?? "",
    fonte: r.fonte ?? "",
    imagemUrl: r.imagem_url ?? "",
  };
}

export const LessonCuriosityService = {
  /** Lista todas as curiosidades cadastradas para uma aula (por código BNCC). */
  async list(codigoBncc: string): Promise<LessonCuriosity[]> {
    const { data, error } = await supabase
      .from("lesson_curiosities" as never)
      .select("id, lesson_id, codigo_bncc, ordem, titulo, conteudo, fonte, imagem_url")
      .eq("codigo_bncc", codigoBncc)
      .order("ordem", { ascending: true });

    if (error || !data) return [];
    return (data as unknown as Row[]).map(mapRow);
  },

  async get(id: string): Promise<LessonCuriosity | null> {
    const { data, error } = await supabase
      .from("lesson_curiosities" as never)
      .select("id, lesson_id, codigo_bncc, ordem, titulo, conteudo, fonte, imagem_url")
      .eq("id", id)
      .maybeSingle();

    if (error || !data) return null;
    return mapRow(data as unknown as Row);
  },
};
