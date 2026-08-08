// Persistência + cache reutilizável do Plano Anual.
// - Mesmo perfil (idade + série + risco) → mesmo template, mesmo plano.
// - Se já tem template no Supabase, clona pra criança nova sem recalcular.
import { supabase } from "@/database/supabase/client";
import type { AnamneseV2Responses, RiskMap } from "@/modules/anamnese/v2/types";
import { gerarPlanoAnual, type PlanoAnualGerado, idadeParaSerie } from "./generator";

/**
 * Hash determinístico do perfil pedagógico.
 * Duas crianças com mesma idade + mesmo risco recebem o mesmo plano.
 */
export function perfilHash(idade: number, serie: string, risk?: RiskMap): string {
  // Ordena chaves do risk pra o hash não depender da ordem do JSON.
  const riskKeys = risk ? Object.keys(risk).sort() : [];
  const riskStr = riskKeys.map((k) => `${k}:${(risk as any)[k]}`).join("|");
  const raw = `v1|${idade}|${serie}|${riskStr}`;
  // Hash simples (djb2) — 8 hex chars, suficiente pra cache do app.
  let h = 5381;
  for (let i = 0; i < raw.length; i++) h = ((h << 5) + h + raw.charCodeAt(i)) | 0;
  return `p_${(h >>> 0).toString(16)}`;
}

async function buscarTemplate(hash: string): Promise<PlanoAnualGerado | null> {
  const { data } = await supabase
    .from("plano_anual_templates" as any)
    .select("payload")
    .eq("hash", hash)
    .maybeSingle();
  return (data as any)?.payload ?? null;
}

async function salvarTemplate(
  hash: string,
  idade: number,
  serie: string,
  plano: PlanoAnualGerado,
): Promise<void> {
  await supabase
    .from("plano_anual_templates" as any)
    .upsert({ hash, idade, serie, payload: plano as any }, { onConflict: "hash" });
}

async function salvarInstancia(
  childId: string,
  hash: string,
  plano: PlanoAnualGerado,
): Promise<string> {
  // Limpa plano antigo da criança (se existir)
  const { data: existente } = await supabase
    .from("plano_anual")
    .select("id")
    .eq("child_id", childId)
    .maybeSingle();
  if (existente?.id) {
    await supabase.from("plano_anual_itens").delete().eq("plano_id", existente.id);
    await supabase.from("plano_anual").delete().eq("id", existente.id);
  }

  const { data: novo, error } = await supabase
    .from("plano_anual")
    .insert({
      child_id: childId,
      idade: plano.idade,
      serie: plano.serie,
      minutos_por_dia: plano.minutos_por_dia,
      dias_por_semana: plano.dias_por_semana,
      semanas_totais: plano.semanas_totais,
      base_anamnese: plano.base_anamnese as any,
      template_hash: hash,
    } as any)
    .select("id")
    .single();
  if (error) throw error;

  // Salva itens em lotes de 500 pra não estourar payload.
  const itens = plano.blocos.map((b) => ({
    plano_id: novo.id,
    child_id: childId,
    semana: b.semana,
    dia_semana: b.dia_semana,
    ordem: b.ordem,
    fonte: b.fonte,
    categoria: b.categoria,
    titulo: b.titulo,
    descricao: b.descricao,
    rota: b.rota,
    minutos: b.minutos,
    prioridade: b.prioridade,
  }));
  for (let i = 0; i < itens.length; i += 500) {
    const lote = itens.slice(i, i + 500);
    const { error: e } = await supabase.from("plano_anual_itens").insert(lote as any);
    if (e) throw e;
  }
  return novo.id;
}

export interface SalvarPlanoInput {
  childId: string;
  idade: number;
  serie?: string;
  responses?: AnamneseV2Responses;
  risk?: RiskMap;
}

/**
 * Gera (ou reutiliza) e persiste o plano anual da criança.
 * Retorna o plano final salvo.
 */
export async function salvarPlanoParaCrianca(
  input: SalvarPlanoInput,
): Promise<PlanoAnualGerado> {
  const idade = Math.max(3, Math.min(7, input.idade));
  const serie = input.serie || idadeParaSerie(idade);
  const hash = perfilHash(idade, serie, input.risk);

  // 1. Tenta reutilizar template
  let plano = await buscarTemplate(hash);
  if (!plano) {
    plano = gerarPlanoAnual({ idade, serie, risk: input.risk, responses: input.responses });
    await salvarTemplate(hash, idade, serie, plano);
  }

  // 2. Salva instância da criança
  await salvarInstancia(input.childId, hash, plano);

  // 3. Incrementa contador de uso do template (best-effort).
  try {
    const { data: cur } = await supabase
      .from("plano_anual_templates" as any)
      .select("usos")
      .eq("hash", hash)
      .maybeSingle();
    const usos = ((cur as any)?.usos ?? 0) + 1;
    await supabase
      .from("plano_anual_templates" as any)
      .update({ usos } as any)
      .eq("hash", hash);
  } catch {
    /* noop */
  }

  return plano;
}
