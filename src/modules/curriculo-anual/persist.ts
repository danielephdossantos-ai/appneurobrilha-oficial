// Persistência do Currículo Anual (Lovable Cloud).
import { supabase } from "@/database/supabase/client";
import { gerarCurriculoAnual, type CurriculoGerado, type ItemCurriculo } from "./builder";

const T_PLANO = "curriculo_anual" as any;
const T_ITENS = "curriculo_anual_itens" as any;
const T_HORARIOS = "curriculo_horarios" as any;

export interface CurriculoSalvo {
  id: string;
  child_id: string;
  serie: string;
  ano_letivo: number;
  minutos_por_dia: number;
  dias_por_semana: number;
  semanas_por_semestre: number;
  gerado_em: string;
}

export interface ItemSalvo extends ItemCurriculo {
  id: string;
  concluido: boolean;
}

export interface HorarioSalvo {
  dia_semana: number;
  hora: string;
  lembrete: boolean;
}

export async function buscarRiskAnamnese(childId: string): Promise<Record<string, unknown> | null> {
  const { data } = await supabase
    .from("anamnese_v2" as any)
    .select("risk_levels")
    .eq("child_id", childId)
    .maybeSingle();
  return ((data as any)?.risk_levels as Record<string, unknown>) ?? null;
}

export async function carregarCurriculo(childId: string): Promise<CurriculoSalvo | null> {
  const { data } = await supabase.from(T_PLANO).select("*").eq("child_id", childId).maybeSingle();
  return (data as any) ?? null;
}

export async function carregarItens(
  childId: string,
  semestre: number,
  semana: number,
): Promise<ItemSalvo[]> {
  const { data } = await supabase
    .from(T_ITENS)
    .select("*")
    .eq("child_id", childId)
    .eq("semestre", semestre)
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

export interface GerarParaCriancaInput {
  childId: string;
  serie: string | number;
  minutosPorDia?: number;
  diasPorSemana?: number;
}

/** Gera (ou regenera) e salva o currículo anual da criança. */
export async function gerarESalvar(input: GerarParaCriancaInput): Promise<CurriculoGerado> {
  const risk = await buscarRiskAnamnese(input.childId);
  const plano = gerarCurriculoAnual({
    serie: input.serie,
    risk,
    minutosPorDia: input.minutosPorDia,
    diasPorSemana: input.diasPorSemana,
  });

  // limpa plano anterior
  const antigo = await carregarCurriculo(input.childId);
  if (antigo?.id) {
    await supabase.from(T_ITENS).delete().eq("curriculo_id", antigo.id);
    await supabase.from(T_PLANO).delete().eq("id", antigo.id);
  }

  const { data: novo, error } = await supabase
    .from(T_PLANO)
    .insert({
      child_id: input.childId,
      serie: plano.serie,
      ano_letivo: plano.ano_letivo,
      minutos_por_dia: plano.minutos_por_dia,
      dias_por_semana: plano.dias_por_semana,
      semanas_por_semestre: plano.semanas_por_semestre,
      base_anamnese: (risk ?? null) as any,
    } as any)
    .select("id")
    .single();
  if (error) throw error;

  const rows = plano.itens.map((i) => ({
    curriculo_id: (novo as any).id,
    child_id: input.childId,
    semestre: i.semestre,
    semana: i.semana,
    dia_semana: i.dia_semana,
    ordem: i.ordem,
    disciplina: i.disciplina,
    curso_slug: i.curso_slug,
    aula_slug: i.aula_slug,
    titulo: i.titulo,
    rota: i.rota,
    minutos: i.minutos,
    prioridade: i.prioridade,
  }));
  for (let i = 0; i < rows.length; i += 500) {
    const { error: e } = await supabase.from(T_ITENS).insert(rows.slice(i, i + 500) as any);
    if (e) throw e;
  }

  // horário padrão (17:00 de Seg a Sex) se ainda não existir
  await garantirHorariosPadrao(input.childId, plano.dias_por_semana);
  return plano;
}

export async function carregarHorarios(childId: string): Promise<HorarioSalvo[]> {
  const { data } = await supabase
    .from(T_HORARIOS)
    .select("dia_semana,hora,lembrete")
    .eq("child_id", childId)
    .order("dia_semana", { ascending: true });
  return ((data as any[]) ?? []) as HorarioSalvo[];
}

export async function garantirHorariosPadrao(childId: string, dias: number): Promise<void> {
  const atuais = await carregarHorarios(childId);
  if (atuais.length > 0) return;
  const rows = Array.from({ length: dias }, (_, i) => ({
    child_id: childId,
    dia_semana: i + 1,
    hora: "17:00",
    lembrete: true,
  }));
  await supabase.from(T_HORARIOS).insert(rows as any);
}

export async function salvarHorario(
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

/**
 * Espelha as aulas do dia na agenda da criança (study_agenda),
 * para aparecerem nos lembretes diários já existentes.
 */
export async function sincronizarAgendaDoDia(
  childId: string,
  itens: ItemSalvo[],
  hora: string,
): Promise<void> {
  const hoje = new Date().toISOString().slice(0, 10);
  await supabase
    .from("study_agenda")
    .delete()
    .eq("child_id", childId)
    .eq("category", "curriculo")
    .eq("exam_date", hoje);
  if (itens.length === 0) return;
  const rows = itens.map((i) => ({
    child_id: childId,
    topic: `${i.disciplina}: ${i.titulo}`,
    description: `Aula do currículo anual · ${i.minutos} min`,
    exam_date: hoje,
    type: "estudo",
    category: "curriculo",
    time_of_day: hora,
    completed: i.concluido,
  }));
  await supabase.from("study_agenda").insert(rows as any);
}
