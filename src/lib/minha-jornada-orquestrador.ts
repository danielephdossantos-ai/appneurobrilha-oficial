import { supabase } from "@/integrations/supabase/client";
import { JornadaItem, JornadaSource } from "../modules/minha-jornada/types";

/**
 * Orquestrador central da Jornada Unificada.
 * Responsável por coletar, desduplicar e ordenar atividades de múltiplos motores.
 */

/**
 * Ponto de entrada para gerar/atualizar a jornada da criança.
 * Nesta Fase 2A, apenas a estrutura está presente.
 */
export async function gerarMinhaJornada(childId: string) {
  console.log(`[Orquestrador] Iniciando orquestração para child: ${childId}`);
  
  // 1. Obter dados da criança
  const { data: child } = await supabase
    .from("children")
    .select("idade, serie")
    .eq("id", childId)
    .single();

  if (!child) return { success: false, error: "Criança não encontrada" };

  return { 
    success: true, 
    message: "Infraestrutura pronta. Motores não conectados conforme Fase 2A." 
  };
}

/**
 * Tenta adicionar um item à jornada com lógica de desduplicação.
 */
export async function adicionarItemJornada(item: JornadaItem) {
  // Regra Neuro-Treino: Preservar regra idade < 8
  const idadeValida = await validarRegraIdade(item.child_id, item.source);
  if (!idadeValida && item.source === "neuro_treino") {
    console.warn(`[Orquestrador] Bloqueio Neuro-Treino: idade >= 8 para child ${item.child_id}`);
    return { success: false, error: "Idade não permitida para este motor" };
  }

  // A desduplicação real é garantida pela restrição UNIQUE(child_id, source, source_id) no banco,
  // mas aqui fazemos um upsert seguro.
  const { data, error } = await supabase
    .from("jornada_unificada" as any)
    .upsert({
      child_id: item.child_id,
      source: item.source,
      source_id: item.source_id,
      activity_type: item.activity_type,
      title: item.title,
      skill_id: item.skill_id,
      bncc_code: item.bncc_code,
      priority_score: item.priority_score,
      priority_reason: item.priority_reason,
      scheduled_date: item.scheduled_date,
      week: item.week,
      sequence_order: item.sequence_order,
      duration: item.duration,
      status: item.status,
      metadata: item.metadata || {}
    }, {
      onConflict: 'child_id,source,source_id'
    })
    .select()
    .single();

  if (error) {
    console.error("[Orquestrador] Erro ao adicionar item:", error);
    return { success: false, error };
  }

  return { success: true, data };
}

/**
 * Valida a regra de idade para o motor Neuro-Treino.
 */
async function validarRegraIdade(childId: string, source: JornadaSource): Promise<boolean> {
  if (source !== "neuro_treino") return true;

  const { data: child } = await supabase
    .from("children")
    .select("idade")
    .eq("id", childId)
    .single();

  if (!child) return false;
  
  // Regra: idade < 8 (Neuro-Treino permitido)
  return (child.idade || 0) < 8;
}

/**
 * Retorna a fila ordenada para exibição no frontend.
 */
export async function obterFilaJornada(childId: string) {
  const { data, error } = await supabase
    .from("jornada_unificada" as any)
    .select("*")
    .eq("child_id", childId)
    .order("scheduled_date", { ascending: true })
    .order("priority_score", { ascending: false })
    .order("sequence_order", { ascending: true });

  if (error) return [];
  return (data as unknown) as JornadaItem[];
}
