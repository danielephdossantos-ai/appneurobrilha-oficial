// Persistência do Currículo Anual (Lovable Cloud).
import { supabase } from "@/database/supabase/client";
import { gerarCurriculoAnual, type CurriculoGerado, type ItemCurriculo } from "./builder";
import { mirrorLegacyPlan, syncPremiumCompletion } from "@/modules/learning-plans/mirror";

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
  await syncPremiumCompletion("curriculo_anual_itens", itemId, concluido);
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

  // Preserva o progresso por aula. A posição no calendário pode mudar quando
  // entram aulas novas, mas uma aula já concluída nunca volta a ficar pendente.
  const antigo = await carregarCurriculo(input.childId);
  const concluidas = new Set<string>();
  if (antigo?.id) {
    const { data: itensAntigos } = await supabase
      .from(T_ITENS)
      .select("curso_slug,aula_slug,concluido")
      .eq("curriculo_id", antigo.id);
    for (const item of (itensAntigos as any[]) ?? []) {
      if (item.concluido) concluidas.add(`${item.curso_slug}/${item.aula_slug}`);
    }
    await supabase.from(T_ITENS).delete().eq("curriculo_id", antigo.id);
  }

  const dadosPlano = {
      child_id: input.childId,
      serie: plano.serie,
      ano_letivo: plano.ano_letivo,
      minutos_por_dia: plano.minutos_por_dia,
      dias_por_semana: plano.dias_por_semana,
      semanas_por_semestre: plano.semanas_por_semestre,
      base_anamnese: (risk ?? null) as any,
  } as any;
  const consultaPlano = antigo?.id
    ? supabase.from(T_PLANO).update(dadosPlano).eq("id", antigo.id).select("id").single()
    : supabase.from(T_PLANO).insert(dadosPlano).select("id").single();
  const { data: novo, error } = await consultaPlano;
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
    concluido: concluidas.has(`${i.curso_slug}/${i.aula_slug}`),
  }));
  for (let i = 0; i < rows.length; i += 500) {
    const { error: e } = await supabase.from(T_ITENS).insert(rows.slice(i, i + 500) as any);
    if (e) throw e;
  }

  // Espelha o currículo no contrato Premium sem quebrar as telas legadas.
  const { data: savedItems } = await supabase
    .from(T_ITENS)
    .select("*")
    .eq("curriculo_id", (novo as any).id)
    .order("semestre")
    .order("semana")
    .order("dia_semana")
    .order("ordem");
  await mirrorLegacyPlan({
    childId: input.childId,
    planType: "school",
    legacyPlanId: (novo as any).id,
    legacySource: "curriculo_anual_itens",
    weeksTotal: plano.semanas_por_semestre * 2,
    minutesPerDay: plano.minutos_por_dia,
    daysPerWeek: plano.dias_por_semana,
    grade: String(plano.serie),
    stage: "Ensino Fundamental",
    profileSnapshot: risk,
    items: ((savedItems as any[]) ?? []).map((i) => ({
      legacyItemId: i.id,
      week: (Number(i.semestre) - 1) * plano.semanas_por_semestre + Number(i.semana),
      day: Number(i.dia_semana),
      sequenceOrder: Number(i.ordem),
      itemRole: Number(i.prioridade) === 1 ? "reinforcement" : "teach",
      source: "escola_brilha",
      sourceId: `${i.curso_slug}/${i.aula_slug}`,
      title: i.titulo,
      route: i.rota,
      subject: i.disciplina,
      estimatedMinutes: Number(i.minutos ?? 10),
      status: i.concluido ? "completed" : "available",
      selectionReason: Number(i.prioridade) === 1 ? "Prioridade pedagógica definida pelo perfil e currículo" : "Sequência curricular da série",
      metadata: { curso_slug: i.curso_slug, aula_slug: i.aula_slug, prioridade: i.prioridade },
    })),
  });

  // horário padrão (17:00 de Seg a Sex) se ainda não existir
  await garantirHorariosPadrao(input.childId, plano.dias_por_semana);
  return plano;
}

/** Atualiza apenas quando o catálogo real mudou; mantém progresso e horários. */
export async function sincronizarCurriculoSeNecessario(
  childId: string,
  serie: string | number,
): Promise<boolean> {
  const salvo = await carregarCurriculo(childId);
  if (!salvo) return false;
  const risk = await buscarRiskAnamnese(childId);
  const esperado = gerarCurriculoAnual({
    serie,
    risk,
    minutosPorDia: salvo.minutos_por_dia,
    diasPorSemana: salvo.dias_por_semana,
    semanasPorSemestre: salvo.semanas_por_semestre,
    anoLetivo: salvo.ano_letivo,
  });
  const { data: atuais } = await supabase
    .from(T_ITENS)
    .select("curso_slug,aula_slug,titulo,rota")
    .eq("curriculo_id", salvo.id);
  const assinatura = (itens: Array<{ curso_slug: string; aula_slug: string; titulo: string; rota: string }>) =>
    itens.map((i) => `${i.curso_slug}/${i.aula_slug}|${i.titulo}|${i.rota}`).sort().join("\n");
  const canonicos = esperado.itens.map((i) => ({
    curso_slug: i.curso_slug, aula_slug: i.aula_slug, titulo: i.titulo, rota: i.rota,
  }));
  if (assinatura(((atuais as any[]) ?? [])) === assinatura(canonicos)) return false;
  await gerarESalvar({
    childId,
    serie,
    minutosPorDia: salvo.minutos_por_dia,
    diasPorSemana: salvo.dias_por_semana,
  });
  return true;
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
