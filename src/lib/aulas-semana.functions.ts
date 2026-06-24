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
  semanaInicioIso: z.string().optional(),
});

function inferPerfil(responses: unknown): PerfilNeuro {
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
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const userId = context.userId;
    const { childId } = data;

    // 1. Criança + verificação de propriedade
    const { data: child, error: childErr } = await supabaseAdmin
      .from("children")
      .select("id, user_id, serie, idade, nome")
      .eq("id", childId)
      .maybeSingle();
    if (childErr) throw childErr;
    if (!child) throw new Error("Criança não encontrada");
    if (child.user_id !== userId) throw new Error("Sem permissão para esta criança");

    const { data: anamnese } = await supabaseAdmin
      .from("anamnese_v2")
      .select("responses")
      .eq("child_id", childId)
      .maybeSingle();

    const perfil = inferPerfil(anamnese?.responses);
    const serie = (child as { serie?: string }).serie || "1º Ano";

    // 2. BNCC para a série (com fallback)
    let habilidades: Array<{ codigo: string; disciplina: string; descricao: string; ano?: string | null }> = [];
    const { data: habsSerie } = await supabaseAdmin
      .from("bncc_habilidades")
      .select("codigo, disciplina, descricao, ano")
      .eq("ano", serie)
      .limit(30);
    habilidades = (habsSerie || []) as typeof habilidades;
    if (habilidades.length === 0) {
      const { data: fallback } = await supabaseAdmin
        .from("bncc_habilidades")
        .select("codigo, disciplina, descricao, ano")
        .limit(10);
      habilidades = (fallback || []) as typeof habilidades;
      if (habilidades.length === 0) {
        throw new Error("Sem habilidades BNCC cadastradas para gerar aulas");
      }
    }

    // 3. Matriz pedagógica
    const { data: matriz } = await supabaseAdmin
      .from("pedagogical_activities_base")
      .select("id, serie, materia, tecnica, formato, codigo_bncc, titulo, descricao")
      .or(`serie.eq.${serie},serie.is.null`)
      .limit(200);

    // 4. Mídias
    const { data: midias } = await supabaseAdmin
      .from("rb_midias")
      .select("id, url, tipo, tags, titulo")
      .limit(100);

    // 5. Progresso
    const { data: progresso } = await supabaseAdmin
      .from("progresso_aluno")
      .select("codigo_bncc, dominio")
      .eq("aluno_id", childId);
    const jaDominadas = new Set<string>(
      ((progresso || []) as Array<{ codigo_bncc: string | null; dominio: number | null }>)
        .filter((p) => (p.dominio ?? 0) >= 0.8 && p.codigo_bncc)
        .map((p) => p.codigo_bncc as string),
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
      habilidades,
      matriz: (matriz || []) as never,
      midias: (midias || []) as never,
      jaDominadas,
    });

    if (plano.length === 0) {
      return { ok: true, criadas: 0, perfil, mensagem: "Sem habilidades novas a treinar." };
    }

    // 7. Upsert
    const { error: upErr } = await supabaseAdmin
      .from("aulas_semana")
      .upsert(plano as never, { onConflict: "child_id,data" });
    if (upErr) throw upErr;

    return { ok: true, criadas: plano.length, perfil };
  });

export const listarAulasSemana = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) =>
    z.object({ childId: z.string().uuid(), semanaInicioIso: z.string().optional() }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const userId = context.userId;

    // Verifica propriedade
    const { data: child } = await supabaseAdmin
      .from("children")
      .select("user_id")
      .eq("id", data.childId)
      .maybeSingle();
    if (!child || (child as { user_id: string }).user_id !== userId) {
      throw new Error("Sem permissão para esta criança");
    }

    const inicio = data.semanaInicioIso
      ? new Date(data.semanaInicioIso + "T00:00:00")
      : getSegundaDaSemana();
    const fim = new Date(inicio);
    fim.setDate(fim.getDate() + 4);
    const fmt = (d: Date) => d.toISOString().slice(0, 10);

    const { data: aulas, error } = await supabaseAdmin
      .from("aulas_semana")
      .select("*")
      .eq("child_id", data.childId)
      .gte("data", fmt(inicio))
      .lte("data", fmt(fim))
      .order("data");
    if (error) throw error;
    return aulas || [];
  });
