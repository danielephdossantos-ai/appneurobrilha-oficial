/**
 * CoverageAnalyzer
 *
 * Compara BNCC × LessonBlueprint × lesson_drafts × lesson_content e gera
 * relatório de cobertura pedagógica. Apenas leitura.
 */

import { supabase } from "@/integrations/supabase/client";
import { LessonBlueprint } from "./LessonBlueprint";

export interface CoverageFilters {
  etapa?: string;        // EI | EF | EM
  ano?: string;          // ex.: "1º Ano"
  disciplina?: string;   // ex.: "Matemática"
  area?: string;         // mapeada a partir de disciplina
}

export interface CoverageSegmentReport {
  segmento: string;
  total: number;
  com_blueprint: number;
  com_draft: number;
  publicadas: number;
  pendentes: number;
  sem_conteudo: number;
  percentual_cobertura: number;
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
  codigo_bncc: string;
  ano: string | null;
  disciplina: string | null;
}

const AREA_BY_DISCIPLINA: Record<string, string> = {
  "Matemática": "Matemática",
  "Português": "Linguagens",
  "Língua Portuguesa": "Linguagens",
  "Inglês": "Linguagens",
  "Arte": "Linguagens",
  "Educação Física": "Linguagens",
  "Ciências": "Ciências da Natureza",
  "História": "Ciências Humanas",
  "Geografia": "Ciências Humanas",
  "Ensino Religioso": "Ensino Religioso",
};

function etapaFromCodigo(codigo: string): string {
  const c = (codigo || "").toUpperCase();
  if (c.startsWith("EI")) return "EI";
  if (c.startsWith("EM")) return "EM";
  if (c.startsWith("EF")) return "EF";
  return "—";
}

function areaFromDisciplina(d: string | null): string {
  if (!d) return "—";
  return AREA_BY_DISCIPLINA[d] ?? d;
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
    let q = supabase
      .from("bncc_habilidades")
      .select("codigo_bncc, ano, disciplina");
    if (filters.ano) q = q.eq("ano", filters.ano);
    if (filters.disciplina) q = q.eq("disciplina", filters.disciplina);

    const { data, error: hErr } = await q;
    if (hErr) throw hErr;

    let universo: HabilidadeRow[] = (data ?? []) as HabilidadeRow[];
    if (filters.etapa) {
      universo = universo.filter((h) => etapaFromCodigo(h.codigo_bncc) === filters.etapa);
    }
    if (filters.area) {
      universo = universo.filter((h) => areaFromDisciplina(h.disciplina) === filters.area);
    }

    const codigos = universo.map((h) => h.codigo_bncc).filter(Boolean);
    const inList = codigos.length ? codigos : ["__none__"];

    const [draftsRes, contentRes] = await Promise.all([
      supabase.from("lesson_drafts").select("codigo_bncc, status").in("codigo_bncc", inList),
      supabase.from("lesson_content").select("codigo_bncc").in("codigo_bncc", inList),
    ]);
    if (draftsRes.error) throw draftsRes.error;
    if (contentRes.error) throw contentRes.error;

    const draftsByCode = new Map<string, Set<string>>();
    for (const d of draftsRes.data ?? []) {
      const set = draftsByCode.get(d.codigo_bncc) ?? new Set<string>();
      set.add(d.status);
      draftsByCode.set(d.codigo_bncc, set);
    }
    const publishedSet = new Set((contentRes.data ?? []).map((c) => c.codigo_bncc));

    if (universo.length > 0) {
      try { await LessonBlueprint.build(universo[0].codigo_bncc); } catch { /* tolerante */ }
    }

    const agg = emptySegment("Total");
    const buckets = {
      etapa: new Map<string, CoverageSegmentReport>(),
      ano: new Map<string, CoverageSegmentReport>(),
      disciplina: new Map<string, CoverageSegmentReport>(),
      area: new Map<string, CoverageSegmentReport>(),
    };
    const bump = (
      m: Map<string, CoverageSegmentReport>,
      key: string,
      patch: (s: CoverageSegmentReport) => void,
    ) => {
      const s = m.get(key) ?? emptySegment(key);
      patch(s);
      m.set(key, s);
    };

    for (const h of universo) {
      const statuses = draftsByCode.get(h.codigo_bncc);
      const hasDraft = !!statuses && statuses.size > 0;
      const hasPending = !!statuses?.has("pending");
      const isPublished = publishedSet.has(h.codigo_bncc);
      const hasBlueprint = true;
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
      bump(buckets.etapa, etapaFromCodigo(h.codigo_bncc), apply);
      bump(buckets.ano, h.ano ?? "—", apply);
      bump(buckets.disciplina, h.disciplina ?? "—", apply);
      bump(buckets.area, areaFromDisciplina(h.disciplina), apply);
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
