import { supabase } from "@/integrations/supabase/client";

export type BnccRelationKind =
  | "similar"
  | "anterior"
  | "futuro"
  | "competencia"
  | "objeto_conhecimento"
  | "unidade_tematica";

export interface BnccRelationship {
  id: string;
  codigo_bncc: string;
  related_codigo_bncc: string;
  kind: BnccRelationKind;
  peso: number;
  metadata: unknown | null;
}

export const RelationshipEngine = {
  async list(codigoBncc: string, kind?: BnccRelationKind): Promise<BnccRelationship[]> {
    let q = supabase
      .from("bncc_relationships")
      .select("*")
      .eq("codigo_bncc", codigoBncc)
      .order("peso", { ascending: false });
    if (kind) q = q.eq("kind", kind);
    const { data, error } = await q;
    if (error) throw error;
    return (data as BnccRelationship[]) ?? [];
  },

  similares: (c: string) => RelationshipEngine.list(c, "similar"),
  anteriores: (c: string) => RelationshipEngine.list(c, "anterior"),
  futuros: (c: string) => RelationshipEngine.list(c, "futuro"),
  competencias: (c: string) => RelationshipEngine.list(c, "competencia"),
  objetosConhecimento: (c: string) => RelationshipEngine.list(c, "objeto_conhecimento"),
  unidadesTematicas: (c: string) => RelationshipEngine.list(c, "unidade_tematica"),

  async graph(codigoBncc: string) {
    const all = await RelationshipEngine.list(codigoBncc);
    return {
      similares: all.filter((r) => r.kind === "similar"),
      anteriores: all.filter((r) => r.kind === "anterior"),
      futuros: all.filter((r) => r.kind === "futuro"),
      competencias: all.filter((r) => r.kind === "competencia"),
      objetosConhecimento: all.filter((r) => r.kind === "objeto_conhecimento"),
      unidadesTematicas: all.filter((r) => r.kind === "unidade_tematica"),
    };
  },
};
