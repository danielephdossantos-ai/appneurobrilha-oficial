import { supabase } from "@/integrations/supabase/client";
import { RelatedSkillsService } from "./RelatedSkills";

export interface PrerequisiteCheck {
  codigoBncc: string;
  prerequisitos: string[];
  pendentes: string[];
  dominados: string[];
  recomendarRevisao: boolean;
  revisoes: Array<{ codigo_bncc: string }>;
}

/**
 * Antes de iniciar uma aula, verifica habilidades anteriores (pré-requisitos)
 * e indica revisões para os códigos ainda não dominados pelo aluno.
 * Não gera conteúdo — apenas lê do banco.
 */
export const SkillPrerequisitesService = {
  async check(userId: string, codigoBncc: string): Promise<PrerequisiteCheck> {
    const anteriores = await RelatedSkillsService.anteriores(codigoBncc);
    const prerequisitos = anteriores.map((r) => r.related_codigo_bncc);

    if (prerequisitos.length === 0) {
      return {
        codigoBncc,
        prerequisitos: [],
        pendentes: [],
        dominados: [],
        recomendarRevisao: false,
        revisoes: [],
      };
    }

    const { data: progress } = await supabase
      .from("student_progress")
      .select("habilidades_dominadas")
      .eq("user_id", userId)
      .maybeSingle();

    const dominadasSet = new Set<string>(
      ((progress?.habilidades_dominadas as string[] | null) ?? []).map(String),
    );

    const dominados = prerequisitos.filter((c) => dominadasSet.has(c));
    const pendentes = prerequisitos.filter((c) => !dominadasSet.has(c));

    let revisoes: Array<{ codigo_bncc: string }> = [];
    if (pendentes.length > 0) {
      const { data } = await supabase
        .from("lesson_reviews_full")
        .select("codigo_bncc")
        .in("codigo_bncc", pendentes);
      revisoes = (data ?? []) as Array<{ codigo_bncc: string }>;
    }

    return {
      codigoBncc,
      prerequisitos,
      pendentes,
      dominados,
      recomendarRevisao: pendentes.length > 0,
      revisoes,
    };
  },
};

export default SkillPrerequisitesService;
