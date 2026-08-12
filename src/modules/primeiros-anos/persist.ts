// Persistência do Plano Primeiros Anos (Lovable Cloud).
import { supabase } from "@/integrations/supabase/client";
import {
  gerarPlanoPrimeirosAnos,
  precisaDoPlano,
  type AulaPlano,
  type PlanoPrimeirosAnos,
} from "./builder";

const T_PLANO = "primeiros_anos_plano" as any;
const T_ITENS = "primeiros_anos_itens" as any;

export interface PlanoSalvo {
  id: string;
  child_id: string;
  idade: number;
  etapa: string;
  motivo: string | null;
  minutos_por_dia: number;
  dias_por_semana: number;
  semanas_totais: number;
  gerado_em: string;
}

export interface ItemSalvo extends AulaPlano {
  id: string;
  concluido: boolean;
}

/** Respostas do Step 6 (escolar) da anamnese v2 — usadas para detectar quem não lê. */
export async function buscarStep6(childId: string): Promise<Record<string, unknown> | null> {
  const { data } = await supabase
    .from("anamnese_v2" as any)
    .select("responses")
    .eq("child_id", childId)
    .maybeSingle();
  const r = (data as any)?.responses;
  if (!r) return null;
  // responses pode ser { step6: {...} } ou plano.
  return (r.step6 as Record<string, unknown>) ?? (r as Record<string, unknown>);
}

export async function carregarPlano(childId: string): Promise<PlanoSalvo | null> {
  const { data } = await supabase.from(T_PLANO).select("*").eq("child_id", childId).maybeSingle();
  return ((data as any) ?? null) as PlanoSalvo | null;
}

export async function carregarItensDaSemana(childId: string, semana: number): Promise<ItemSalvo[]> {
  const { data } = await supabase
    .from(T_ITENS)
    .select("*")
    .eq("child_id", childId)
    .eq("semana", semana)
    .order("dia_semana", { ascending: true })
    .order("ordem", { ascending: true });
  return ((data as any[]) ?? []) as ItemSalvo[];
}

export async function contarProgresso(
  childId: string,
): Promise<{ total: number; concluidas: number }> {
  const total = await supabase
    .from(T_ITENS)
    .select("id", { count: "exact", head: true })
    .eq("child_id", childId);
  const feitas = await supabase
    .from(T_ITENS)
    .select("id", { count: "exact", head: true })
    .eq("child_id", childId)
    .eq("concluido", true);
  return { total: total.count ?? 0, concluidas: feitas.count ?? 0 };
}

export async function marcarItem(itemId: string, concluido: boolean): Promise<void> {
  await supabase
    .from(T_ITENS)
    .update({ concluido, concluido_em: concluido ? new Date().toISOString() : null } as any)
    .eq("id", itemId);
}

export interface GerarInput {
  childId: string;
  idade: number;
  minutosPorDia?: number;
  diasPorSemana?: number;
}

/** Gera (ou regenera) e salva o plano anual de alfabetização da criança. */
export async function gerarESalvar(input: GerarInput): Promise<PlanoPrimeirosAnos> {
  const step6 = await buscarStep6(input.childId);
  const plano = gerarPlanoPrimeirosAnos({
    idade: input.idade,
    step6,
    minutosPorDia: input.minutosPorDia,
    diasPorSemana: input.diasPorSemana,
  });

  const antigo = await carregarPlano(input.childId);
  if (antigo?.id) {
    await supabase.from(T_ITENS).delete().eq("plano_id", antigo.id);
    await supabase.from(T_PLANO).delete().eq("id", antigo.id);
  }

  const { data: novo, error } = await supabase
    .from(T_PLANO)
    .insert({
      child_id: input.childId,
      idade: plano.idade,
      etapa: plano.etapa,
      motivo: plano.motivo,
      minutos_por_dia: plano.minutos_por_dia,
      dias_por_semana: plano.dias_por_semana,
      semanas_totais: plano.semanas_totais,
      base_anamnese: (step6 ?? null) as any,
    } as any)
    .select("id")
    .single();
  if (error) throw error;

  const rows = plano.aulas.map((a) => ({
    plano_id: (novo as any).id,
    child_id: input.childId,
    semana: a.semana,
    dia_semana: a.dia_semana,
    ordem: a.ordem,
    trilha: a.trilha,
    trilha_label: a.trilha_label,
    fase: a.fase,
    aula_slug: a.aula_slug,
    titulo: a.titulo,
    rota: a.rota,
    minutos: a.minutos,
    prioridade: a.prioridade,
  }));
  for (let i = 0; i < rows.length; i += 500) {
    const { error: e } = await supabase.from(T_ITENS).insert(rows.slice(i, i + 500) as any);
    if (e) throw e;
  }
  return plano;
}

/**
 * Se a criança tem 7+ e a anamnese indica que ainda não lê, o plano
 * de alfabetização entra automaticamente na rotina dela.
 */
export async function garantirPlanoSeNecessario(
  childId: string,
  idade: number,
): Promise<PlanoSalvo | null> {
  const existente = await carregarPlano(childId);
  if (existente) return existente;
  const step6 = await buscarStep6(childId);
  const { precisa } = precisaDoPlano(idade, step6);
  if (!precisa) return null;
  await gerarESalvar({ childId, idade });
  return carregarPlano(childId);
}

/** Espelha as aulas do dia na agenda de estudo da criança. */
export async function sincronizarAgendaDoDia(
  childId: string,
  itens: ItemSalvo[],
  hora = "17:00",
): Promise<void> {
  const hoje = new Date().toISOString().slice(0, 10);
  await supabase
    .from("study_agenda")
    .delete()
    .eq("child_id", childId)
    .eq("category", "primeiros-anos")
    .eq("exam_date", hoje);
  if (itens.length === 0) return;
  const rows = itens.map((i) => ({
    child_id: childId,
    topic: `${i.trilha_label}: ${i.titulo}`,
    description: `Plano de alfabetização · ${i.minutos} min`,
    exam_date: hoje,
    type: "estudo",
    category: "primeiros-anos",
    time_of_day: hora,
    completed: i.concluido,
  }));
  await supabase.from("study_agenda").insert(rows as any);
}
