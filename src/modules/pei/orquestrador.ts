// ============================================================
// PEI — Orquestrador: lê perfil + BNCC, gera plano e persiste
// ============================================================
// Roda no cliente usando o supabase client (RLS scope auth.uid).
// Não usa server fn porque a middleware atual não expõe supabase
// autenticado — RLS já filtra por children.user_id.
// ============================================================

import { supabase } from "@/integrations/supabase/client";
import {
  gerarPlanoTrimestral,
  type BnccHabilidade,
  type PerfilCrianca,
  type PlanoGerado,
} from "./gerador";

export type GerarOpts = {
  anamneseId?: string | null;
  inicio?: Date;
  totalAulas?: number; // default 90
};

export type GerarResultado = {
  planoId: string;
  totalAulas: number;
  inicio: string;
  fim: string;
  tempoAulaMin: number;
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

async function carregarBncc(): Promise<BnccHabilidade[]> {
  const { data, error } = await supabase
    .from("bncc_habilidades")
    .select("id, codigo_bncc, disciplina, ano, titulo, objetivo")
    .order("ordem", { ascending: true })
    .limit(500);
  if (error) throw new Error(`Falha ao carregar BNCC: ${error.message}`);
  return (data ?? []) as BnccHabilidade[];
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
  const [perfil, habilidades] = await Promise.all([
    carregarPerfil(childId),
    carregarBncc(),
  ]);

  const plano: PlanoGerado = gerarPlanoTrimestral(perfil, habilidades, {
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

  // Insere em lotes de 50 (limite seguro p/ Data API)
  for (let i = 0; i < aulasRows.length; i += 50) {
    const lote = aulasRows.slice(i, i + 50);
    const { error } = await supabase.from("pei_aulas").insert(lote);
    if (error) {
      // Rollback manual: derruba o plano pra não ficar parcial
      await supabase.from("pei_planos").delete().eq("id", planoRow.id);
      throw new Error(`Falha ao inserir aulas (lote ${i}): ${error.message}`);
    }
  }

  return {
    planoId: planoRow.id,
    totalAulas: aulasRows.length,
    inicio: plano.trimestre_inicio,
    fim: plano.trimestre_fim,
    tempoAulaMin: plano.tempo_aula_min,
  };
}
