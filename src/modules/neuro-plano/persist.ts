// Persistência do Plano Neuro (Lovable Cloud).
import { supabase } from "@/database/supabase/client";
import type { PerfilScores, RiskMap } from "@/modules/anamnese/v2/types";
import { gerarPlanoNeuro, type PlanoNeuroGerado } from "./builder";

const T_PLANO = "neuro_plano" as any;
const T_ITENS = "neuro_plano_itens" as any;
const T_HORARIOS = "neuro_horarios" as any;

export interface PlanoNeuroSalvo {
  id: string;
  child_id: string;
  semanas: number;
  dias_por_semana: number;
  sessoes_por_dia: number;
  gerado_em: string;
}

export interface ItemNeuroSalvo {
  id: string;
  semana: number;
  dia_semana: number;
  ordem: number;
  slug: string;
  nome: string;
  emoji: string;
  grupo: string;
  objetivo: string | null;
  por_que: string | null;
  prioridade: number;
  rota: string;
  minutos: number;
  concluido: boolean;
}

export interface HorarioNeuro {
  dia_semana: number;
  hora: string;
  lembrete: boolean;
}

export async function buscarAnamnese(
  childId: string,
): Promise<{ scores: PerfilScores | null; risk: RiskMap | null }> {
  const { data } = await supabase
    .from("anamnese_v2" as any)
    .select("scores,risk_levels")
    .eq("child_id", childId)
    .maybeSingle();
  return {
    scores: ((data as any)?.scores as PerfilScores) ?? null,
    risk: ((data as any)?.risk_levels as RiskMap) ?? null,
  };
}

export async function carregarPlanoNeuro(childId: string): Promise<PlanoNeuroSalvo | null> {
  const { data } = await supabase.from(T_PLANO).select("*").eq("child_id", childId).maybeSingle();
  return (data as any) ?? null;
}

export async function carregarItensNeuro(
  childId: string,
  semana: number,
): Promise<ItemNeuroSalvo[]> {
  const { data } = await supabase
    .from(T_ITENS)
    .select("*")
    .eq("child_id", childId)
    .eq("semana", semana)
    .order("dia_semana", { ascending: true })
    .order("ordem", { ascending: true });
  return ((data as any[]) ?? []) as ItemNeuroSalvo[];
}

export async function contarProgressoNeuro(
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

export async function marcarItemNeuro(itemId: string, concluido: boolean): Promise<void> {
  await supabase
    .from(T_ITENS)
    .update({ concluido, concluido_em: concluido ? new Date().toISOString() : null } as any)
    .eq("id", itemId);
}

/** Gera (ou regenera) e salva o plano neuro da criança a partir da anamnese. */
export async function gerarESalvarNeuro(childId: string): Promise<PlanoNeuroGerado> {
  const { scores, risk } = await buscarAnamnese(childId);
  
  // Obter idade da criança
  const { data: child } = await supabase
    .from("profiles" as any)
    .select("age")
    .eq("id", childId)
    .single();
    
  const age = (child as any)?.age ?? 5;
  const plano = gerarPlanoNeuro({ scores, risk, age });

  const antigo = await carregarPlanoNeuro(childId);
  if (antigo?.id) {
    await supabase.from(T_ITENS).delete().eq("plano_id", antigo.id);
    await supabase.from(T_PLANO).delete().eq("id", antigo.id);
  }

  const { data: novo, error } = await supabase
    .from(T_PLANO)
    .insert({
      child_id: childId,
      semanas: plano.semanas,
      dias_por_semana: plano.dias_por_semana,
      sessoes_por_dia: plano.sessoes_por_dia,
      base_anamnese: (risk ?? null) as any,
    } as any)
    .select("id")
    .single();
  if (error) throw error;

  const rows = plano.itens.map((i) => ({
    plano_id: (novo as any).id,
    child_id: childId,
    semana: i.semana,
    dia_semana: i.dia_semana,
    ordem: i.ordem,
    slug: i.slug,
    nome: i.nome,
    emoji: i.emoji,
    grupo: i.grupo,
    objetivo: i.objetivo,
    por_que: i.por_que,
    prioridade: i.prioridade,
    rota: i.rota,
    minutos: i.minutos,
  }));
  for (let i = 0; i < rows.length; i += 500) {
    const { error: e } = await supabase.from(T_ITENS).insert(rows.slice(i, i + 500) as any);
    if (e) throw e;
  }

  await garantirHorariosNeuro(childId, plano.dias_por_semana);
  return plano;
}

export async function carregarHorariosNeuro(childId: string): Promise<HorarioNeuro[]> {
  const { data } = await supabase
    .from(T_HORARIOS)
    .select("dia_semana,hora,lembrete")
    .eq("child_id", childId)
    .order("dia_semana", { ascending: true });
  return ((data as any[]) ?? []) as HorarioNeuro[];
}

export async function garantirHorariosNeuro(childId: string, dias: number): Promise<void> {
  const atuais = await carregarHorariosNeuro(childId);
  if (atuais.length > 0) return;
  const rows = Array.from({ length: dias }, (_, i) => ({
    child_id: childId,
    dia_semana: i + 1,
    hora: "16:00",
    lembrete: true,
  }));
  await supabase.from(T_HORARIOS).insert(rows as any);
}

export async function salvarHorarioNeuro(
  childId: string,
  dia_semana: number,
  hora: string,
  lembrete: boolean,
): Promise<void> {
  await supabase
    .from(T_HORARIOS)
    .upsert({ child_id: childId, dia_semana, hora, lembrete } as any, {
      onConflict: "child_id,dia_semana",
    });
}

/** Espelha as sessões do dia na agenda da criança (study_agenda). */
export async function sincronizarAgendaNeuro(
  childId: string,
  itens: ItemNeuroSalvo[],
  hora: string,
): Promise<void> {
  const hoje = new Date().toISOString().slice(0, 10);
  await supabase
    .from("study_agenda")
    .delete()
    .eq("child_id", childId)
    .eq("category", "neuro")
    .eq("exam_date", hoje);
  if (itens.length === 0) return;
  const rows = itens.map((i) => ({
    child_id: childId,
    topic: `${i.emoji} ${i.nome}`,
    description: `Neuro Treino · ${i.grupo} · ${i.minutos} min`,
    exam_date: hoje,
    type: "estudo",
    category: "neuro",
    time_of_day: hora,
    completed: i.concluido,
  }));
  await supabase.from("study_agenda").insert(rows as any);
}
