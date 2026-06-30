/**
 * LessonAuditRoutine
 * ------------------------------------------------------------------
 * Rotina de auditoria de TODAS as aulas publicadas.
 *
 * Para cada aula em `lesson_content` verifica a existência de:
 *   - lesson_content (a própria linha)
 *   - lesson_examples       (>=1)
 *   - lesson_quizzes        (>=1)
 *   - lesson_challenges     (>=1)
 *   - lesson_reviews_full   (>=1)  -> revisão
 *   - lesson_assessments    (>=1)  -> avaliação
 *   - lesson_adaptations    (>=1)  -> adaptação
 *   - lesson_explanations   (>=1)  -> explicação complementar
 *   - lesson_curiosities    (>=1)  -> curiosidade
 *
 * Caso QUALQUER item esteja ausente:
 *   - marca `lesson_content.is_complete = false`
 *   - grava `missing_sections` e `audit_report`
 *   - registra no relatório técnico final
 *
 * Esta rotina NUNCA:
 *   - remove a aula
 *   - gera, edita ou completa conteúdo
 *   - publica ou despublica nada
 *
 * É somente leitura + marcação de estado.
 */

import { supabase } from "@/integrations/supabase/client";

export const AUDIT_REQUIRED_SECTIONS = [
  "lesson_examples",
  "lesson_quizzes",
  "lesson_challenges",
  "lesson_reviews_full",
  "lesson_assessments",
  "lesson_adaptations",
  "lesson_explanations",
  "lesson_curiosities",
] as const;

export type AuditRequiredSection = (typeof AUDIT_REQUIRED_SECTIONS)[number];

export interface LessonAuditEntry {
  lesson_id: string;
  codigo_bncc: string;
  titulo: string | null;
  ano: string | null;
  disciplina: string | null;
  counts: Record<string, number>;
  missing_sections: string[];
  is_complete: boolean;
  audited_at: string;
}

export interface LessonAuditReport {
  audited_at: string;
  total_lessons: number;
  complete: number;
  incomplete: number;
  percent_complete: number;
  missing_by_section: Record<string, number>;
  incomplete_lessons: LessonAuditEntry[];
  entries: LessonAuditEntry[];
}

async function countFor(
  table: AuditRequiredSection,
  codigoBncc: string,
): Promise<number> {
  const { count, error } = await supabase
    .from(table)
    .select("*", { count: "exact", head: true })
    .eq("codigo_bncc", codigoBncc);
  if (error) {
    console.warn(`[LessonAuditRoutine] count fail ${table}/${codigoBncc}`, error.message);
    return 0;
  }
  return count ?? 0;
}

async function auditOne(lesson: {
  id: string;
  codigo_bncc: string;
  titulo: string | null;
  ano: string | null;
  disciplina: string | null;
}): Promise<LessonAuditEntry> {
  const counts: Record<string, number> = { lesson_content: 1 };
  const missing: string[] = [];

  for (const tbl of AUDIT_REQUIRED_SECTIONS) {
    const n = await countFor(tbl, lesson.codigo_bncc);
    counts[tbl] = n;
    if (n === 0) missing.push(tbl);
  }

  const isComplete = missing.length === 0;
  const auditedAt = new Date().toISOString();

  const entry: LessonAuditEntry = {
    lesson_id: lesson.id,
    codigo_bncc: lesson.codigo_bncc,
    titulo: lesson.titulo,
    ano: lesson.ano,
    disciplina: lesson.disciplina,
    counts,
    missing_sections: missing,
    is_complete: isComplete,
    audited_at: auditedAt,
  };

  // Marca estado — NUNCA remove a aula.
  const { error: upErr } = await supabase
    .from("lesson_content")
    .update({
      is_complete: isComplete,
      missing_sections: missing,
      audited_at: auditedAt,
      audit_report: entry as unknown as Record<string, unknown>,
    })
    .eq("id", lesson.id);

  if (upErr) {
    console.warn(
      `[LessonAuditRoutine] marca incompleto falhou (${lesson.codigo_bncc})`,
      upErr.message,
    );
  }

  return entry;
}

export const LessonAuditRoutine = {
  REQUIRED_SECTIONS: AUDIT_REQUIRED_SECTIONS,

  /**
   * Audita TODAS as aulas publicadas (lesson_content).
   * Retorna um relatório técnico consolidado.
   */
  async run(): Promise<LessonAuditReport> {
    const startedAt = new Date().toISOString();

    // Paginação simples para evitar limite default de 1000.
    const pageSize = 500;
    let from = 0;
    const lessons: Array<{
      id: string;
      codigo_bncc: string;
      titulo: string | null;
      ano: string | null;
      disciplina: string | null;
    }> = [];

    for (;;) {
      const { data, error } = await supabase
        .from("lesson_content")
        .select("id, codigo_bncc, titulo, ano, disciplina")
        .order("codigo_bncc", { ascending: true })
        .range(from, from + pageSize - 1);
      if (error) throw new Error(`lesson_content read failed: ${error.message}`);
      if (!data || data.length === 0) break;
      lessons.push(...(data as typeof lessons));
      if (data.length < pageSize) break;
      from += pageSize;
    }

    const entries: LessonAuditEntry[] = [];
    const missingBySection: Record<string, number> = {
      lesson_content: 0,
      ...Object.fromEntries(AUDIT_REQUIRED_SECTIONS.map((s) => [s, 0])),
    };

    for (const lesson of lessons) {
      const entry = await auditOne(lesson);
      entries.push(entry);
      for (const sec of entry.missing_sections) {
        missingBySection[sec] = (missingBySection[sec] ?? 0) + 1;
      }
    }

    const incompleteLessons = entries.filter((e) => !e.is_complete);
    const total = entries.length;
    const complete = total - incompleteLessons.length;
    const percent = total === 0 ? 0 : Math.round((complete / total) * 1000) / 10;

    return {
      audited_at: startedAt,
      total_lessons: total,
      complete,
      incomplete: incompleteLessons.length,
      percent_complete: percent,
      missing_by_section: missingBySection,
      incomplete_lessons: incompleteLessons,
      entries,
    };
  },

  /**
   * Audita uma única aula pelo codigo_bncc.
   */
  async runOne(codigoBncc: string): Promise<LessonAuditEntry | null> {
    const { data, error } = await supabase
      .from("lesson_content")
      .select("id, codigo_bncc, titulo, ano, disciplina")
      .eq("codigo_bncc", codigoBncc)
      .maybeSingle();
    if (error) throw new Error(`lesson_content read failed: ${error.message}`);
    if (!data) return null;
    return auditOne(data as Parameters<typeof auditOne>[0]);
  },
};

export default LessonAuditRoutine;
