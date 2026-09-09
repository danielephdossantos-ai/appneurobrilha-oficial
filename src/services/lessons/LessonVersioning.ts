/**
 * LessonVersioning
 * ------------------------------------------------------------------
 * Histórico imutável de aulas publicadas.
 *
 *  - publishWithVersion(draftId, reason): publica draft pendente e grava
 *    snapshot em `lesson_versions` como is_current=true.
 *  - restoreVersion(versionId, reason): cria um NOVO draft pendente a
 *    partir do snapshot; admin precisa aprovar (não sobrescreve nada).
 *  - listVersions(codigoBncc): histórico completo (admin) ou versão
 *    atual (autenticado), conforme RLS.
 *  - getCurrent(codigoBncc): versão atual.
 *
 * O player continua lendo de `lesson_content` (sempre a versão atual
 * aprovada). Este serviço NÃO substitui o player nem altera
 * `approve_lesson_draft()`.
 */

import { supabase } from "@/integrations/supabase/client";

export interface LessonVersionRow {
  id: string;
  codigo_bncc: string;
  version: number;
  titulo: string | null;
  ano: string | null;
  disciplina: string | null;
  payload: unknown;
  draft_id: string | null;
  lesson_id: string | null;
  author: string | null;
  reviewer: string | null;
  change_reason: string | null;
  is_current: boolean;
  published_at: string;
}

export const LessonVersioning = {
  async publishWithVersion(draftId: string, changeReason?: string) {
    const { data, error } = await supabase.rpc("publish_lesson_with_version", {
      _draft_id: draftId,
      _change_reason: changeReason ?? undefined,
    });
    if (error) throw new Error(error.message);
    const row = Array.isArray(data) ? data[0] : data;
    return row as { version: number; version_id: string; lesson_id: string };
  },

  async restoreVersion(versionId: string, changeReason = "restore") {
    const { data, error } = await supabase.rpc("restore_lesson_version", {
      _version_id: versionId,
      _change_reason: changeReason,
    });
    if (error) throw new Error(error.message);
    return data as string; // new pending draft id
  },

  async listVersions(codigoBncc: string): Promise<LessonVersionRow[]> {
    const { data, error } = await supabase
      .from("lesson_versions")
      .select("*")
      .eq("codigo_bncc", codigoBncc)
      .order("version", { ascending: false });
    if (error) throw new Error(error.message);
    return (data ?? []) as LessonVersionRow[];
  },

  async getCurrent(codigoBncc: string): Promise<LessonVersionRow | null> {
    const { data, error } = await supabase
      .from("lesson_versions")
      .select("*")
      .eq("codigo_bncc", codigoBncc)
      .eq("is_current", true)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return (data as LessonVersionRow | null) ?? null;
  },
};

export default LessonVersioning;
