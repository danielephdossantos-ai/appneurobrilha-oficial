/**
 * Server function: gerarAulasSemana
 * Lê anamnese v2, BNCC, matriz pedagógica e mídias da criança e grava
 * 5 aulas (seg–sex) em public.aulas_semana via planWeek().
 */
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  planWeek,
  getSegundaDaSemana,
  type PerfilNeuro,
} from "@/modules/escola-brilha/engine/weekly-planner";

const inputSchema = z.object({
  childId: z.string().uuid(),
  semanaInicioIso: z.string().optional(), // YYYY-MM-DD da segunda; default = semana corrente
});

function inferPerfil(responses: any): PerfilNeuro {
  const raw = JSON.stringify(responses || {}).toLowerCase();
  if (raw.includes("tea") || raw.includes("autis")) return "TEA";
  if (raw.includes("tdah") || raw.includes("dficit")) return "TDAH";
  if (raw.includes("dislex")) return "Dislexia";
  return "Neurotipico";
}

export const gerarAulasSemana = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { childId } = data;

    // 1. Criança + anamnese
    const { data: child, error: childErr } = await supabase
      .from("children")
      .select("id, user_id, serie, idade, nome")
      .eq("id", childId)
      .maybeSingle();
    if (childErr) throw childErr;
    if (!child) throw new Error("Criança não encontrada");
    if (child.user_id !== userId) throw new Error("Sem permissão para esta criança");

    const { data: anamnese } = await supabase
      .from("anamnese_v2")
      .select("responses")
      .eq("child_id", childId)
      .maybeSingle();

    const perfil = inferPerfil(anamnese?.responses);
    const serie = (child as any).serie || "1º Ano";

    // 2. BNCC para a série
    const { data: habilidades } = await supabase
      .from("bncc_habilidades")
      .select("codigo, disciplina, descricao, ano")
      .eq("ano", serie)
      .limit(30);

    if (!habilidades || habilidades.length === 0) {
      // Fallback: pega qualquer 10 da BNCC pra não bloquear
      const { data: fallback } = await supabase
        .from("bncc_habilidades")
        .select("codigo, disciplina, descricao, ano")
        .limit(10);
      if (!fallback || fallback.length === 0) {
        throw new Error("Sem habilidades BNCC cadastradas para gerar aulas");
      }
      habilidades?.push(...fallback);
    }

    // 3. Matriz pedagógica
    const { data: matriz } = await supabase
      .from("pedagogical_activities_base")
      .select("id, serie, materia, tecnica, formato, codigo_bncc, titulo, descricao")
      .or(`serie.eq.${serie},serie.is.null`)
      .limit(200);

    // 4. Mídias aprovadas
    const { data: midias } = await supabase
      .from("rb_midias")
      .select("id, url, tipo, tags, titulo")
      .limit(100);

    // 5. Progresso (habilidades já dominadas — evita repetir)
    const { data: progresso } = await supabase
      .from("progresso_aluno")
      .select("codigo_bncc, dominio")
      .eq("aluno_id", childId);
    const jaDominadas = new Set(
      (progresso || [])
        .filter((p: any) => (p.dominio ?? 0) >= 0.8)
        .map((p: any) => p.codigo_bncc),
    );

    // 6. Plano
    const semanaInicio = data.semanaInicioIso
      ? new Date(data.semanaInicioIso + "T00:00:00")
      : getSegundaDaSemana();

    const plano = planWeek({
      childId,
      userId,
      perfil,
      serie,
      semanaInicio,
      habilidades: (habilidades || []) as any,
      matriz: (matriz || []) as any,
      midias: (midias || []) as any,
      jaDominadas,
    });

    if (plano.length === 0) {
      return { ok: true, criadas: 0, perfil, mensagem: "Sem habilidades novas a treinar." };
    }

    // 7. Upsert na tabela aulas_semana
    const { error: upErr } = await supabase
      .from("aulas_semana")
      .upsert(plano as any, { onConflict: "child_id,data" });
    if (upErr) throw upErr;

    return { ok: true, criadas: plano.length, perfil };
  });

export const listarAulasSemana = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) =>
    z
      .object({
        childId: z.string().uuid(),
        semanaInicioIso: z.string().optional(),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    const { supabase } = context;
    const inicio = data.semanaInicioIso
      ? new Date(data.semanaInicioIso + "T00:00:00")
      : getSegundaDaSemana();
    const fim = new Date(inicio);
    fim.setDate(fim.getDate() + 4);
    const fmt = (d: Date) => d.toISOString().slice(0, 10);

    const { data: aulas, error } = await supabase
      .from("aulas_semana")
      .select("*")
      .eq("child_id", data.childId)
      .gte("data", fmt(inicio))
      .lte("data", fmt(fim))
      .order("data");
    if (error) throw error;
    return aulas || [];
  });
