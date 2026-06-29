/**
 * LessonSelector — escolhe QUAIS códigos BNCC devem ser exibidos.
 *
 * Arquitetura compartilhada por Escola Brilha e Reforço Brilha:
 *   1. Selector decide a lista de códigos BNCC (este arquivo).
 *   2. PedagogicalRepository / LessonService carrega a aula do banco.
 *   3. Renderer apenas exibe (sem inventar texto).
 *
 * Regras absolutas:
 *  - NUNCA gera aula. Só devolve códigos BNCC.
 *  - Se a aula correspondente não existir no banco, o renderer mostra
 *    "Aula ainda não cadastrada." (LESSON_NOT_FOUND_MESSAGE).
 */

import { supabase } from "@/integrations/supabase/client";
import { LessonService } from "./LessonService";

export type ReforcoMotivo =
  | "dificuldade"   // aula apareceu como ponto fraco no perfil cognitivo
  | "anamnese"      // recomendada pela anamnese inicial
  | "prova"         // vinculada a uma prova agendada
  | "reforco";      // revisão / repetição espaçada

export interface ReforcoSelecao {
  codigo_bncc: string;
  motivo: ReforcoMotivo;
  prioridade: number; // maior = mais urgente
}

type Row = { codigo_bncc: string };

async function rowsToBnccList(
  table: string,
  childId: string,
  column = "codigo_bncc",
  childColumn = "child_id",
): Promise<string[]> {
  try {
    const client = supabase as unknown as {
      from: (t: string) => {
        select: (c: string) => {
          eq: (
            c: string,
            v: string,
          ) => Promise<{ data: Row[] | null; error: unknown }>;
        };
      };
    };
    const { data, error } = await client
      .from(table)
      .select(column)
      .eq(childColumn, childId);
    if (error || !data) return [];
    return data
      .map((r) => (r as Record<string, unknown>)[column] as string)
      .filter(Boolean)
      .map((c) => c.toUpperCase());
  } catch {
    return [];
  }
}

export const LessonSelector = {
  /**
   * Seleção do Reforço Brilha. Combina sinais da criança
   * (dificuldades / anamnese / provas / reforço) e devolve códigos BNCC
   * ordenados por prioridade. NUNCA cria conteúdo.
   */
  async forReforco(childId: string): Promise<ReforcoSelecao[]> {
    if (!childId) return [];

    const [dificuldades, anamnese, provas, reforco] = await Promise.all([
      rowsToBnccList("child_skill_mastery", childId),
      rowsToBnccList("child_anamnesis", childId),
      rowsToBnccList("exam_mission_contents", childId),
      rowsToBnccList("spaced_repetition_schedule", childId),
    ]);

    const score = new Map<string, ReforcoSelecao>();
    const bump = (code: string, motivo: ReforcoMotivo, peso: number) => {
      const key = code.toUpperCase();
      const cur = score.get(key);
      if (!cur || peso > cur.prioridade) {
        score.set(key, { codigo_bncc: key, motivo, prioridade: peso });
      }
    };

    dificuldades.forEach((c) => bump(c, "dificuldade", 4));
    provas.forEach((c) => bump(c, "prova", 3));
    reforco.forEach((c) => bump(c, "reforco", 2));
    anamnese.forEach((c) => bump(c, "anamnese", 1));

    return Array.from(score.values()).sort(
      (a, b) => b.prioridade - a.prioridade,
    );
  },

  /** Filtra mantendo apenas códigos que existem em `lesson_content`. */
  async filterExisting<T extends { codigo_bncc: string }>(
    items: T[],
  ): Promise<T[]> {
    const checks = await Promise.all(
      items.map(async (i) => ((await LessonService.exists(i.codigo_bncc)) ? i : null)),
    );
    return checks.filter((x): x is T => !!x);
  },
};
