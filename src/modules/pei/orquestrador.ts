// ============================================================
// PEI — Orquestrador: lê perfil + BNCC + sinais adaptativos,
// gera plano e persiste. Roda no cliente (RLS auth.uid).
// ============================================================

import { supabase } from "@/integrations/supabase/client";
import {
  gerarPlanoTrimestral,
  serieParaIdade,
  type AulaBnccRef,
  type AdaptacaoCtx,
  type PerfilCrianca,
  type PlanoGerado,
} from "./gerador";

export type GerarOpts = {
  anamneseId?: string | null;
  inicio?: Date;
  totalAulas?: number;
};

export type GerarResultado = {
  planoId: string;
  totalAulas: number;
  inicio: string;
  fim: string;
  tempoAulaMin: number;
  adaptacao: AdaptacaoCtx;
};

async function carregarPerfil(childId: string): Promise<PerfilCrianca> {
  const { data, error } = await supabase
    .from("children")
    .select("idade, serie, diagnostico, tempo_atencao_min, hiperfoco, niveis")
    .eq("id", childId)
    .single();
  if (error) throw new Error(`Falha ao carregar perfil: ${error.message}`);
  return {
    idade: data.idade,
    serie: data.serie,
    diagnostico: data.diagnostico,
    tempoAtencaoMin: data.tempo_atencao_min,
    hiperfoco: data.hiperfoco,
    niveis: (data.niveis as PerfilCrianca["niveis"]) ?? null,
  };
}

async function carregarAulasBncc(serie: string): Promise<AulaBnccRef[]> {
  // Tenta filtrar pela série; se vier vazio, traz todas (gerador trata).
  const { data, error } = await supabase
    .from("aulas_bncc")
    .select("id, codigo_bncc, serie, disciplina, titulo, descricao, ordem")
    .eq("ativo", true)
    .eq("serie", serie)
    .order("ordem", { ascending: true })
    .limit(500);
  if (error) throw new Error(`Falha ao carregar aulas BNCC: ${error.message}`);
  if ((data ?? []).length === 0) {
    const { data: fb, error: fbErr } = await supabase
      .from("aulas_bncc")
      .select("id, codigo_bncc, serie, disciplina, titulo, descricao, ordem")
      .eq("ativo", true)
      .order("ordem", { ascending: true })
      .limit(500);
    if (fbErr) throw new Error(`Falha ao carregar BNCC fallback: ${fbErr.message}`);
    return (fb ?? []) as AulaBnccRef[];
  }
  return (data ?? []) as AulaBnccRef[];
}

// ---- SINAIS ADAPTATIVOS -----------------------------------------

// 1) Habilidades para reforço: mastery < 0.6
async function carregarReforco(childId: string): Promise<string[]> {
  const { data, error } = await supabase
    .from("child_skill_mastery")
    .select("skill_code, mastery_level")
    .eq("child_id", childId)
    .lt("mastery_level", 0.6)
    .limit(50);
  if (error) {
    console.warn("[PEI] reforço indisponível:", error.message);
    return [];
  }
  return (data ?? [])
    .map((r) => r.skill_code)
    .filter((c): c is string => !!c);
}

// 2) Fadiga: pausas recomendadas nos últimos 7 dias
async function detectarFadiga(childId: string): Promise<boolean> {
  // fatigue_metrics não tem child_id direto; via daily_sessions.
  const seteDias = new Date(Date.now() - 7 * 86400 * 1000).toISOString();
  const { data: sess } = await supabase
    .from("daily_sessions")
    .select("id")
    .eq("child_id", childId)
    .gte("created_at", seteDias)
    .limit(50);
  const ids = (sess ?? []).map((s) => s.id);
  if (ids.length === 0) return false;
  const { data: fm, error } = await supabase
    .from("fatigue_metrics")
    .select("recommended_pause")
    .in("session_id", ids);
  if (error) {
    console.warn("[PEI] fadiga indisponível:", error.message);
    return false;
  }
  const pausas = (fm ?? []).filter((r) => r.recommended_pause).length;
  return pausas >= 3;
}

// 3) Log da adaptação aplicada
async function registrarAdaptacao(
  childId: string,
  ctx: AdaptacaoCtx,
  tempoAula: number,
) {
  const trigger = [
    ctx.fadigaAlta ? "fadiga_alta" : null,
    ctx.habilidadesParaReforco.length > 0
      ? `reforco:${ctx.habilidadesParaReforco.length}`
      : null,
  ]
    .filter(Boolean)
    .join("|") || "perfil_base";
  const action = `plano_gerado:tempo_aula=${tempoAula}min`;
  const { error } = await supabase.from("adaptation_logs").insert({
    child_id: childId,
    trigger_reason: trigger,
    action_taken: action,
  });
  if (error) console.warn("[PEI] log adaptação falhou:", error.message);
}

async function expirarPlanosAnteriores(childId: string) {
  await supabase
    .from("pei_planos")
    .update({ status: "substituido" })
    .eq("child_id", childId)
    .eq("status", "ativo");
}

export async function gerarESalvarPlanoTrimestral(
  childId: string,
  opts: GerarOpts = {},
): Promise<GerarResultado> {
  const perfil = await carregarPerfil(childId);
  const serie = serieParaIdade(perfil.idade);

  const [aulasBncc, reforco, fadigaAlta] = await Promise.all([
    carregarAulasBncc(serie),
    carregarReforco(childId),
    detectarFadiga(childId),
  ]);

  const ctx: AdaptacaoCtx = {
    fadigaAlta,
    habilidadesParaReforco: reforco,
  };

  const plano: PlanoGerado = gerarPlanoTrimestral(perfil, aulasBncc, ctx, {
    inicio: opts.inicio,
    totalAulas: opts.totalAulas ?? 90,
  });

  await expirarPlanosAnteriores(childId);

  const { data: planoRow, error: planoErr } = await supabase
    .from("pei_planos")
    .insert({
      child_id: childId,
      anamnese_id: opts.anamneseId ?? null,
      trimestre_inicio: plano.trimestre_inicio,
      trimestre_fim: plano.trimestre_fim,
      perfil_snapshot: plano.perfil_snapshot as never,
      tempo_aula_min: plano.tempo_aula_min,
      total_aulas: plano.aulas.length,
      status: "ativo",
    })
    .select("id")
    .single();
  if (planoErr || !planoRow) {
    throw new Error(`Falha ao criar plano: ${planoErr?.message ?? "desconhecido"}`);
  }

  const hoje = new Date().toISOString().slice(0, 10);
  const aulasRows = plano.aulas.map((a) => ({
    plano_id: planoRow.id,
    child_id: childId,
    data_prevista: a.data_prevista,
    ordem: a.ordem,
    titulo: a.titulo,
    objetivo: a.objetivo,
    bncc_codigos: a.bncc_codigos,
    atividades: a.atividades as never,
    tempo_total_min: a.tempo_total_min,
    status: a.data_prevista <= hoje ? "disponivel" : "bloqueada",
  }));

  for (let i = 0; i < aulasRows.length; i += 50) {
    const lote = aulasRows.slice(i, i + 50);
    const { error } = await supabase.from("pei_aulas").insert(lote);
    if (error) {
      await supabase.from("pei_planos").delete().eq("id", planoRow.id);
      throw new Error(`Falha ao inserir aulas (lote ${i}): ${error.message}`);
    }
  }

  await registrarAdaptacao(childId, ctx, plano.tempo_aula_min);

  return {
    planoId: planoRow.id,
    totalAulas: aulasRows.length,
    inicio: plano.trimestre_inicio,
    fim: plano.trimestre_fim,
    tempoAulaMin: plano.tempo_aula_min,
    adaptacao: ctx,
  };
}
