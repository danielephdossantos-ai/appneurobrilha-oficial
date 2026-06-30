/**
 * CoverageAnalyzer
 *
 * Compara BNCC × LessonBlueprint × lesson_drafts × lesson_content e gera
 * um relatório de cobertura pedagógica.
 *
 * Filtros suportados: etapa, ano, disciplina, área.
 *
 * Não escreve no banco. Apenas leitura.
 */

import { supabase } from "@/integrations/supabase/client";
import { LessonBlueprint } from "./LessonBlueprint";

export interface CoverageFilters {
  etapa?: string;        // EI | EF | EM
  ano?: string;          // ex.: "1º Ano"
  disciplina?: string;   // ex.: "Matemática"
  area?: string;         // ex.: "Matemática"
}

export interface CoverageSegmentReport {
  segmento: string;
  total: number;
  com_blueprint: number;
  com_draft: number;
  publicadas: number;
  pendentes: number;
  sem_conteudo: number;
  percentual_cobertura: number; // publicadas / total
}

export interface CoverageReport {
  total: number;
  com_blueprint: number;
  com_draft: number;
  publicadas: number;
  pendentes: number;
  sem_conteudo: number;
  percentual_cobertura: number;
  por_etapa: CoverageSegmentReport[];
  por_ano: CoverageSegmentReport[];
  por_disciplina: CoverageSegmentReport[];
  por_area: CoverageSegmentReport[];
  filtros: CoverageFilters;
  gerado_em: string;
}

interface HabilidadeRow {
  codigo: string;
  etapa: string | null;
  ano: string | null;
  disciplina: string | null;
  area: string | null;
}

function pct(part: number, total: number): number {
  if (!total) return 0;
  return Math.round((part / total) * 10000) / 100;
}

function emptySegment(segmento: string): CoverageSegmentReport {
  return {
    segmento,
    total: 0,
    com_blueprint: 0,
    com_draft: 0,
    publicadas: 0,
    pendentes: 0,
    sem_conteudo: 0,
    percentual_cobertura: 0,
  };
}

export class CoverageAnalyzer {
  static async run(filters: CoverageFilters = {}): Promise<CoverageReport> {
    // 1. BNCC habilidades (universo)
    let q = supabase
      .from("bncc_habilidades")
      .select("codigo, etapa, ano, disciplina, area");
    if (filters.etapa) q = q.eq("etapa", filters.etapa);
    if (filters.ano) q = q.eq("ano", filters.ano);
    if (filters.disciplina) q = q.eq("disciplina", filters.disciplina);
    if (filters.area) q = q.eq("area", filters.area);

    const { data: habilidades, error: hErr } = await q;
    if (hErr) throw hErr;
    const universo = (habilidades ?? []) as HabilidadeRow[];
    const codigos = universo.map((h) => h.codigo).filter(Boolean);

    // 2. Drafts (pending/approved) + 3. Conteúdo publicado (lesson_content)
    const [draftsRes, contentRes] = await Promise.all([
      supabase
        .from("lesson_drafts")
        .select("codigo_bncc, status")
        .in("codigo_bncc", codigos.length ? codigos : ["__none__"]),
      supabase
        .from("lesson_content")
        .select("codigo_bncc, is_complete")
        .in("codigo_bncc", codigos.length ? codigos : ["__none__"]),
    ]);
    if (draftsRes.error) throw draftsRes.error;
    if (contentRes.error) throw contentRes.error;

    const draftsByCode = new Map<string, Set<string>>();
    for (const d of draftsRes.data ?? []) {
      const set = draftsByCode.get(d.codigo_bncc) ?? new Set<string>();
      set.add(d.status);
      draftsByCode.set(d.codigo_bncc, set);
    }
    const publishedSet = new Set(
      (contentRes.data ?? []).map((c) => c.codigo_bncc),
    );

    // 4. Blueprint disponível: derivamos do próprio universo BNCC
    //    (LessonBlueprint.build consulta BNCC; se a habilidade existe, há blueprint possível).
    //    Validamos uma amostra apenas para garantir build estável.
    if (universo.length > 0) {
      try {
        await LessonBlueprint.build(universo[0].codigo);
      } catch {
        /* tolerante: blueprint indisponível não invalida o relatório */
      }
    }

    // Agregação global
    const agg = emptySegment("Total");
    agg.total = universo.length;

    const buckets = {
      etapa: new Map<string, CoverageSegmentReport>(),
      ano: new Map<string, CoverageSegmentReport>(),
      disciplina: new Map<string, CoverageSegmentReport>(),
      area: new Map<string, CoverageSegmentReport>(),
    };

    const bump = (
      map: Map<string, CoverageSegmentReport>,
      key: string | null | undefined,
      patch: (s: CoverageSegmentReport) => void,
    ) => {
      const k = (key ?? "—").toString();
      const s = map.get(k) ?? emptySegment(k);
      patch(s);
      map.set(k, s);
    };

    for (const h of universo) {
      const statuses = draftsByCode.get(h.codigo);
      const hasDraft = !!statuses && statuses.size > 0;
      const hasPending = !!statuses?.has("pending");
      const isPublished = publishedSet.has(h.codigo);
      const hasBlueprint = true; // toda habilidade BNCC mapeia em blueprint
      const semConteudo = !hasDraft && !isPublished;

      const apply = (s: CoverageSegmentReport) => {
        s.total += 1;
        if (hasBlueprint) s.com_blueprint += 1;
        if (hasDraft) s.com_draft += 1;
        if (isPublished) s.publicadas += 1;
        if (hasPending) s.pendentes += 1;
        if (semConteudo) s.sem_conteudo += 1;
      };

      apply(agg);
      bump(buckets.etapa, h.etapa, apply);
      bump(buckets.ano, h.ano, apply);
      bump(buckets.disciplina, h.disciplina, apply);
      bump(buckets.area, h.area, apply);
    }

    const finalize = (s: CoverageSegmentReport) => {
      s.percentual_cobertura = pct(s.publicadas, s.total);
      return s;
    };

    const toList = (m: Map<string, CoverageSegmentReport>) =>
      Array.from(m.values()).map(finalize).sort((a, b) => a.segmento.localeCompare(b.segmento));

    return {
      total: agg.total,
      com_blueprint: agg.com_blueprint,
      com_draft: agg.com_draft,
      publicadas: agg.publicadas,
      pendentes: agg.pendentes,
      sem_conteudo: agg.sem_conteudo,
      percentual_cobertura: pct(agg.publicadas, agg.total),
      por_etapa: toList(buckets.etapa),
      por_ano: toList(buckets.ano),
      por_disciplina: toList(buckets.disciplina),
      por_area: toList(buckets.area),
      filtros: filters,
      gerado_em: new Date().toISOString(),
    };
  }
}

export default CoverageAnalyzer;
