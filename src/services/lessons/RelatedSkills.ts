import { supabase } from "@/integrations/supabase/client";

export type RelationKind =
  | "anterior"
  | "futuro"
  | "complementar"
  | "similar"
  | "competencia"
  | "objeto_conhecimento"
  | "unidade_tematica";

export interface RelatedSkill {
  codigo_bncc: string;
  related_codigo_bncc: string;
  kind: RelationKind;
  peso: number;
}

async function listByKind(codigoBncc: string, kind: RelationKind) {
  const { data } = await supabase
    .from("bncc_relationships")
    .select("codigo_bncc, related_codigo_bncc, kind, peso")
    .eq("codigo_bncc", codigoBncc)
    .eq("kind", kind)
    .order("peso", { ascending: false });
  return (data ?? []) as RelatedSkill[];
}

export const RelatedSkillsService = {
  anteriores: (codigo: string) => listByKind(codigo, "anterior"),
  posteriores: (codigo: string) => listByKind(codigo, "futuro"),
  complementares: (codigo: string) => listByKind(codigo, "complementar"),
  semelhantes: (codigo: string) => listByKind(codigo, "similar"),

  async all(codigoBncc: string) {
    const [anteriores, posteriores, complementares, semelhantes] = await Promise.all([
      listByKind(codigoBncc, "anterior"),
      listByKind(codigoBncc, "futuro"),
      listByKind(codigoBncc, "complementar"),
      listByKind(codigoBncc, "similar"),
    ]);
    return { anteriores, posteriores, complementares, semelhantes };
  },
};

export default RelatedSkillsService;
