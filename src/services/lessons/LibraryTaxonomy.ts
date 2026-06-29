import { supabase } from "@/integrations/supabase/client";

/**
 * LibraryTaxonomy
 * Estrutura hierárquica fixa da Biblioteca Pedagógica Nacional:
 *
 *   Etapa → Ano Escolar → Disciplina → Unidade Temática →
 *   Objeto do Conhecimento → Habilidade BNCC →
 *   Aulas → Atividades → Avaliações → Projetos →
 *   Revisões → Recuperação → Materiais Extras
 *
 * Apenas leitura do banco. Nada é gerado automaticamente.
 * Não altera nenhuma interface existente.
 */

export type TaxonomyLevel =
  | "etapa"
  | "ano_escolar"
  | "disciplina"
  | "unidade_tematica"
  | "objeto_conhecimento"
  | "habilidade_bncc"
  | "aulas"
  | "atividades"
  | "avaliacoes"
  | "projetos"
  | "revisoes"
  | "recuperacao"
  | "materiais_extras";

export const TAXONOMY_ORDER: TaxonomyLevel[] = [
  "etapa",
  "ano_escolar",
  "disciplina",
  "unidade_tematica",
  "objeto_conhecimento",
  "habilidade_bncc",
  "aulas",
  "atividades",
  "avaliacoes",
  "projetos",
  "revisoes",
  "recuperacao",
  "materiais_extras",
];

export interface TaxonomyNode {
  level: TaxonomyLevel;
  id: string;
  label: string;
  parentId?: string | null;
  codigoBncc?: string | null;
}

export const LibraryTaxonomy = {
  order: TAXONOMY_ORDER,

  nextLevel(level: TaxonomyLevel): TaxonomyLevel | null {
    const i = TAXONOMY_ORDER.indexOf(level);
    return i >= 0 && i < TAXONOMY_ORDER.length - 1 ? TAXONOMY_ORDER[i + 1] : null;
  },

  previousLevel(level: TaxonomyLevel): TaxonomyLevel | null {
    const i = TAXONOMY_ORDER.indexOf(level);
    return i > 0 ? TAXONOMY_ORDER[i - 1] : null;
  },

  async listEtapas(): Promise<TaxonomyNode[]> {
    const { data } = await supabase
      .from("bncc_levels")
      .select("id, nome")
      .order("nome");
    return (data ?? []).map((r: any) => ({
      level: "etapa",
      id: String(r.id),
      label: r.nome,
    }));
  },

  async listAnos(etapaId?: string): Promise<TaxonomyNode[]> {
    let q = supabase.from("bncc_anos").select("id, nome, etapa_id").order("nome");
    if (etapaId) q = q.eq("etapa_id", etapaId);
    const { data } = await q;
    return (data ?? []).map((r: any) => ({
      level: "ano_escolar",
      id: String(r.id),
      label: r.nome,
      parentId: r.etapa_id ?? null,
    }));
  },

  async listDisciplinas(anoId?: string): Promise<TaxonomyNode[]> {
    let q = supabase.from("bncc_componentes").select("id, nome, ano_id").order("nome");
    if (anoId) q = q.eq("ano_id", anoId);
    const { data } = await q;
    return (data ?? []).map((r: any) => ({
      level: "disciplina",
      id: String(r.id),
      label: r.nome,
      parentId: r.ano_id ?? null,
    }));
  },

  async listHabilidades(disciplinaId?: string): Promise<TaxonomyNode[]> {
    let q = supabase
      .from("bncc_habilidades")
      .select("id, codigo, descricao, componente_id")
      .order("codigo");
    if (disciplinaId) q = q.eq("componente_id", disciplinaId);
    const { data } = await q;
    return (data ?? []).map((r: any) => ({
      level: "habilidade_bncc",
      id: String(r.id),
      label: `${r.codigo} — ${r.descricao ?? ""}`.trim(),
      parentId: r.componente_id ?? null,
      codigoBncc: r.codigo,
    }));
  },

  async countByCodigoBncc(codigoBncc: string) {
    const tables = [
      "lesson_explanations",
      "lesson_activities",
      "assessment_repository",
      "lesson_reviews_full",
      "recovery_lessons",
      "lesson_resources",
    ] as const;
    const out: Record<string, number> = {};
    await Promise.all(
      tables.map(async (t) => {
        const { count } = await supabase
          .from(t as any)
          .select("*", { count: "exact", head: true })
          .eq("codigo_bncc", codigoBncc);
        out[t] = count ?? 0;
      }),
    );
    return out;
  },
};

export default LibraryTaxonomy;
