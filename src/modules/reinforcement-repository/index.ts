/**
 * ReinforcementRepository
 *
 * Dada uma dificuldade (código BNCC onde o aluno errou ou ficou pendente),
 * retorna automaticamente o pacote de reforço já cadastrado no banco:
 *   - aulas relacionadas      (lesson_content)
 *   - atividades relacionadas (lesson_activities)
 *   - revisões                (lesson_reviews_full)
 *   - desafios                (lesson_challenges)
 *
 * Nada é gerado em runtime — todo conteúdo vem do banco e está vinculado
 * pelo mesmo `codigo_bncc`. Se nada estiver cadastrado, devolve listas
 * vazias (a UI mostra a mensagem padrão "Aula ainda não cadastrada.").
 */

import { supabase } from "@/integrations/supabase/client";
import { LessonService } from "@/services/lessons/LessonService";
import {
  LessonChallengeService,
  type LessonChallenge,
} from "@/services/lessons/LessonChallenge";
import { LessonReviewService, type LessonReview } from "@/services/lessons/LessonReview";

export interface ReinforcementBundle {
  codigoBncc: string;
  aulas: Array<{ id: string; codigoBncc: string; titulo: string }>;
  atividades: Array<{
    id: string;
    codigoBncc: string;
    tipo: string;
    enunciado: string;
    instrucao: string;
  }>;
  revisao: LessonReview | null;
  desafios: LessonChallenge[];
}

async function listAulasByBNCC(codigoBncc: string) {
  const { data, error } = await supabase
    .from("lesson_content")
    .select("id, codigo_bncc, titulo")
    .eq("codigo_bncc", codigoBncc);
  if (error || !data) return [];
  return data.map((r) => ({
    id: r.id as string,
    codigoBncc: r.codigo_bncc as string,
    titulo: (r.titulo as string) ?? "",
  }));
}

async function listAtividadesByBNCC(codigoBncc: string) {
  const { data, error } = await supabase
    .from("lesson_activities")
    .select("id, codigo_bncc, tipo, enunciado, instrucao")
    .eq("codigo_bncc", codigoBncc)
    .order("ordem", { ascending: true });
  if (error || !data) return [];
  return data.map((r) => ({
    id: r.id as string,
    codigoBncc: r.codigo_bncc as string,
    tipo: (r.tipo as string) ?? "",
    enunciado: (r.enunciado as string) ?? "",
    instrucao: (r.instrucao as string) ?? "",
  }));
}

export const ReinforcementRepository = {
  /** Pacote completo de reforço para uma dificuldade. */
  async getBundle(codigoBncc: string): Promise<ReinforcementBundle> {
    const [aulas, atividades, revisao, desafios] = await Promise.all([
      listAulasByBNCC(codigoBncc),
      listAtividadesByBNCC(codigoBncc),
      LessonReviewService.get(codigoBncc),
      LessonChallengeService.list(codigoBncc),
    ]);
    return { codigoBncc, aulas, atividades, revisao, desafios };
  },

  /** Pacotes de reforço para várias dificuldades simultâneas. */
  async getBundles(codigos: string[]): Promise<ReinforcementBundle[]> {
    const unicos = Array.from(new Set(codigos.filter(Boolean)));
    return Promise.all(unicos.map((c) => this.getBundle(c)));
  },

  // Atalhos individuais (mesmo dado, granularidade fina)
  aulas: listAulasByBNCC,
  atividades: listAtividadesByBNCC,
  revisao: (c: string) => LessonReviewService.get(c),
  desafios: (c: string) => LessonChallengeService.list(c),

  /** Aula completa pronta para renderizar (sequência pedagógica). */
  aulaCompleta: (c: string) => LessonService.getAula(c),
};
