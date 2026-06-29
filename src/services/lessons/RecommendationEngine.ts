import { supabase } from "@/integrations/supabase/client";
import { RelationshipEngine } from "./RelationshipEngine";
import { LessonChallengeService } from "./LessonChallenge";
import { RecoveryLessonsService } from "./RecoveryLessons";

export interface Recommendation {
  proximaAula: { codigo_bncc: string; titulo: string | null } | null;
  revisao: { id: string; codigo_bncc: string } | null;
  atividadeComplementar: { id: string; codigo_bncc: string; titulo: string | null } | null;
  desafio: { id: string; codigo_bncc: string; titulo: string | null } | null;
  conteudoRelacionado: Array<{ codigo_bncc: string; tipo: string }>;
}

export const RecommendationEngine = {
  async afterLesson(codigoBncc: string): Promise<Recommendation> {
    const [posteriores, similares, revisao, atividade, desafios] = await Promise.all([
      RelationshipEngine.list(codigoBncc, "posterior").catch(() => []),
      RelationshipEngine.list(codigoBncc, "similar").catch(() => []),
      supabase
        .from("lesson_reviews_full" as any)
        .select("id, codigo_bncc")
        .eq("codigo_bncc", codigoBncc)
        .limit(1)
        .maybeSingle(),
      supabase
        .from("lesson_activities" as any)
        .select("id, codigo_bncc, titulo")
        .eq("codigo_bncc", codigoBncc)
        .order("ordem", { ascending: true })
        .limit(1)
        .maybeSingle(),
      LessonChallengeService.list(codigoBncc).catch(() => []),
    ]);

    let proximaAula: Recommendation["proximaAula"] = null;
    const nextCode = (posteriores as any[])[0]?.codigo_bncc_destino;
    if (nextCode) {
      const { data } = await supabase
        .from("lesson_content" as any)
        .select("codigo_bncc, titulo")
        .eq("codigo_bncc", nextCode)
        .maybeSingle();
      proximaAula = data
        ? { codigo_bncc: (data as any).codigo_bncc, titulo: (data as any).titulo ?? null }
        : { codigo_bncc: nextCode, titulo: null };
    }

    let revisaoRec: Recommendation["revisao"] = null;
    if ((revisao as any)?.data) {
      revisaoRec = { id: (revisao as any).data.id, codigo_bncc: (revisao as any).data.codigo_bncc };
    } else {
      const fallback = await RecoveryLessonsService.list(codigoBncc).catch(() => []);
      if (fallback[0]) revisaoRec = { id: fallback[0].id, codigo_bncc: fallback[0].codigo_bncc };
    }

    const atividadeRec = (atividade as any)?.data
      ? {
          id: (atividade as any).data.id,
          codigo_bncc: (atividade as any).data.codigo_bncc,
          titulo: (atividade as any).data.titulo ?? null,
        }
      : null;

    const desafio = desafios[0]
      ? { id: desafios[0].id, codigo_bncc: desafios[0].codigo_bncc, titulo: desafios[0].titulo ?? null }
      : null;

    const conteudoRelacionado = (similares as any[]).map((r) => ({
      codigo_bncc: r.codigo_bncc_destino,
      tipo: "similar",
    }));

    return {
      proximaAula,
      revisao: revisaoRec,
      atividadeComplementar: atividadeRec,
      desafio,
      conteudoRelacionado,
    };
  },
};
