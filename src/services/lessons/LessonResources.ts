import { supabase } from "@/integrations/supabase/client";
import { LessonService } from "./LessonService";

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

function mapRow(row: any): LessonResource {
  return {
    id: row.id,
    lessonId: row.lesson_id,
    tipo: row.tipo,
    titulo: row.titulo ?? null,
    descricao: row.descricao ?? null,
    url: row.url,
    mimeType: row.mime_type ?? null,
    duracaoSegundos: row.duracao_segundos ?? null,
    tamanhoBytes: row.tamanho_bytes ?? null,
    thumbnailUrl: row.thumbnail_url ?? null,
    ordem: row.ordem ?? 0,
    metadata: (row.metadata as Record<string, unknown>) ?? {},
  };
}

export class LessonResourcesService {
  static async list(codigoBncc: string): Promise<LessonResource[]> {
    const aula = await LessonService.getLesson(codigoBncc);
    if (!aula) return [];

    const { data, error } = await (supabase as any)
      .from("lesson_resources")
      .select("*")
      .eq("lesson_id", aula.id)
      .order("tipo", { ascending: true })
      .order("ordem", { ascending: true });

    if (error || !data) return [];
    return (data as any[]).map(mapRow);
  }

  static async listByTipo(
    codigoBncc: string,
    tipo: LessonResourceTipo,
  ): Promise<LessonResource[]> {
    const todos = await this.list(codigoBncc);
    return todos.filter((r) => r.tipo === tipo);
  }
}
