import { supabase } from "@/database/supabase/client";
import { orquestrarSessaoDiaria } from "./orchestrator";
import { saveRoutineItem } from "@/lib/routine.functions";

/**
 * Integração dos sistemas de planejamento com a rotina diária.
 * Registra as missões calculadas na tabela de routine_items.
 */
export async function injetarPlanosNaRotina(childId: string, date: string) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  // 1. Orquestrar Neuro-Treino (Sistema 2)
  const sessoesNeuro = await orquestrarSessaoDiaria(childId);
  
  for (const [idx, sessao] of sessoesNeuro.entries()) {
    await saveRoutineItem({
      data: {
        childId,
        title: `${sessao.emoji} ${sessao.nome}`,
        description: sessao.motivo,
        type: 'atividade_neurobrilha',
        startTime: idx === 0 ? "10:00" : "16:00",
        durationMinutes: 10,
        date,
        status: 'pendente',
        source: 'plano_neuro',
        sourceId: sessao.slug
      }
    });
  }

  // 2. Orquestrar Alfabetização (Sistema 1 - Placeholder para implementação completa)
  // TODO: Integrar com motor-pedagogico-data e buscar aula da semana atual
}
