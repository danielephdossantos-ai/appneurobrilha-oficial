/**
 * StudentProgress — registro de progresso do aluno.
 *
 * Registra por (child_id, codigo_bncc):
 *   - tempo_estudado_seg
 *   - atividades_concluidas
 *   - nota
 *   - erros / acertos
 *   - habilidades_dominadas / habilidades_pendentes
 *
 * Não altera nenhuma interface existente — apenas adiciona um serviço
 * para upsert/leitura/agregação no banco.
 */

import { supabase } from "@/integrations/supabase/client";

export interface StudentProgress {
  id: string;
  userId: string;
  childId: string;
  codigoBncc: string | null;
  tempoEstudadoSeg: number;
  atividadesConcluidas: number;
  nota: number;
  erros: number;
  acertos: number;
  habilidadesDominadas: string[];
  habilidadesPendentes: string[];
  metadata: Record<string, unknown>;
}

export interface ProgressDelta {
  tempoEstudadoSeg?: number;
  atividadesConcluidas?: number;
  nota?: number;
  erros?: number;
  acertos?: number;
  habilidadesDominadas?: string[];
  habilidadesPendentes?: string[];
  metadata?: Record<string, unknown>;
}

type Row = {
  id: string;
  user_id: string;
  child_id: string;
  codigo_bncc: string | null;
  tempo_estudado_seg: number | null;
  atividades_concluidas: number | null;
  nota: number | string | null;
  erros: number | null;
  acertos: number | null;
  habilidades_dominadas: string[] | null;
  habilidades_pendentes: string[] | null;
  metadata: unknown;
};

function mapRow(r: Row): StudentProgress {
  return {
    id: r.id,
    userId: r.user_id,
    childId: r.child_id,
    codigoBncc: r.codigo_bncc,
    tempoEstudadoSeg: r.tempo_estudado_seg ?? 0,
    atividadesConcluidas: r.atividades_concluidas ?? 0,
    nota: typeof r.nota === "string" ? Number(r.nota) : r.nota ?? 0,
    erros: r.erros ?? 0,
    acertos: r.acertos ?? 0,
    habilidadesDominadas: r.habilidades_dominadas ?? [],
    habilidadesPendentes: r.habilidades_pendentes ?? [],
    metadata: (r.metadata as Record<string, unknown>) ?? {},
  };
}

const COLS =
  "id, user_id, child_id, codigo_bncc, tempo_estudado_seg, atividades_concluidas, nota, erros, acertos, habilidades_dominadas, habilidades_pendentes, metadata";

function uniq(a: string[], b: string[]): string[] {
  return Array.from(new Set([...(a || []), ...(b || [])]));
}

function diff(a: string[], b: string[]): string[] {
  const set = new Set(b);
  return (a || []).filter((x) => !set.has(x));
}

export const StudentProgressService = {
  async get(childId: string, codigoBncc: string): Promise<StudentProgress | null> {
    const { data, error } = await supabase
      .from("student_progress" as never)
      .select(COLS)
      .eq("child_id", childId)
      .eq("codigo_bncc", codigoBncc)
      .maybeSingle();
    if (error || !data) return null;
    return mapRow(data as unknown as Row);
  },

  async listByChild(childId: string): Promise<StudentProgress[]> {
    const { data, error } = await supabase
      .from("student_progress" as never)
      .select(COLS)
      .eq("child_id", childId)
      .order("updated_at", { ascending: false });
    if (error || !data) return [];
    return (data as unknown as Row[]).map(mapRow);
  },

  /**
   * Registra/atualiza progresso para (child_id, codigo_bncc).
   * Soma contadores; substitui nota; mescla listas de habilidades.
   */
  async register(
    childId: string,
    codigoBncc: string,
    delta: ProgressDelta,
  ): Promise<StudentProgress | null> {
    const { data: userData } = await supabase.auth.getUser();
    const userId = userData.user?.id;
    if (!userId) return null;

    const current = await this.get(childId, codigoBncc);

    const dominadasNovas = delta.habilidadesDominadas ?? [];
    const pendentesNovas = delta.habilidadesPendentes ?? [];
    const dominadasFinal = uniq(current?.habilidadesDominadas ?? [], dominadasNovas);
    const pendentesFinal = diff(
      uniq(current?.habilidadesPendentes ?? [], pendentesNovas),
      dominadasFinal,
    );

    const payload = {
      user_id: userId,
      child_id: childId,
      codigo_bncc: codigoBncc,
      tempo_estudado_seg:
        (current?.tempoEstudadoSeg ?? 0) + (delta.tempoEstudadoSeg ?? 0),
      atividades_concluidas:
        (current?.atividadesConcluidas ?? 0) + (delta.atividadesConcluidas ?? 0),
      nota: delta.nota ?? current?.nota ?? 0,
      erros: (current?.erros ?? 0) + (delta.erros ?? 0),
      acertos: (current?.acertos ?? 0) + (delta.acertos ?? 0),
      habilidades_dominadas: dominadasFinal,
      habilidades_pendentes: pendentesFinal,
      metadata: { ...(current?.metadata ?? {}), ...(delta.metadata ?? {}) },
    };

    const { data, error } = await supabase
      .from("student_progress" as never)
      .upsert(payload, { onConflict: "child_id,codigo_bncc" })
      .select(COLS)
      .maybeSingle();

    if (error || !data) return null;
    return mapRow(data as unknown as Row);
  },

  /** Resumo agregando todas as linhas da criança. */
  async resumo(childId: string) {
    const rows = await this.listByChild(childId);
    return rows.reduce(
      (acc, r) => ({
        tempoEstudadoSeg: acc.tempoEstudadoSeg + r.tempoEstudadoSeg,
        atividadesConcluidas: acc.atividadesConcluidas + r.atividadesConcluidas,
        erros: acc.erros + r.erros,
        acertos: acc.acertos + r.acertos,
        habilidadesDominadas: uniq(acc.habilidadesDominadas, r.habilidadesDominadas),
        habilidadesPendentes: uniq(acc.habilidadesPendentes, r.habilidadesPendentes),
      }),
      {
        tempoEstudadoSeg: 0,
        atividadesConcluidas: 0,
        erros: 0,
        acertos: 0,
        habilidadesDominadas: [] as string[],
        habilidadesPendentes: [] as string[],
      },
    );
  },
};
