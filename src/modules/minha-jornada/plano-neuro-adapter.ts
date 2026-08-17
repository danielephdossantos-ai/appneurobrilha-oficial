import { ItemNeuro, PlanoNeuroGerado } from "../modules/neuro-plano/builder";
import { JornadaItem } from "./types";

/**
 * Adaptador para converter o output do Plano Neuro para o contrato universal da Minha Jornada.
 */
export function adaptarPlanoNeuroParaJornada(
  childId: string,
  plano: PlanoNeuroGerado
): JornadaItem[] {
  if (!plano || !plano.itens) return [];

  return plano.itens.map((item) => {
    return {
      child_id: childId,
      source: "plano_neuro",
      source_id: `${item.slug}-${item.semana}-${item.dia_semana}-${item.ordem}`, // ID composto para garantir unicidade por sessão
      activity_type: "neuro_treino",
      title: item.nome,
      category: item.grupo,
      objective: item.objetivo,
      priority_score: 100 - (item.prioridade * 10), // Converte prioridade 1 (alta) para score alto (90)
      priority_reason: item.por_que,
      duration: item.minutos,
      week: item.semana,
      day: item.dia_semana,
      sequence_order: item.ordem,
      status: "pending",
      metadata: {
        emoji: item.emoji,
        rota: item.rota,
        slug_original: item.slug,
        prioridade_original: item.prioridade
      }
    };
  });
}
