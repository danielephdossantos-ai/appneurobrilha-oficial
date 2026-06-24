/**
 * Aulas da Semana — client module
 * Roda no navegador usando o supabase client com RLS (user_id = auth.uid()).
 * Não usamos createServerFn porque o server runtime do projeto usa Drizzle,
 * não o supabase-js. RLS garante o isolamento por responsável.
 */
import { supabase } from "@/integrations/supabase/client";
import {
  planWeek,
  getSegundaDaSemana,
  type PerfilNeuro,
} from "@/modules/escola-brilha/engine/weekly-planner";

function inferPerfil(responses: unknown): PerfilNeuro {
  const raw = JSON.stringify(responses || {}).toLowerCase();
  if (raw.includes("tea") || raw.includes("autis")) return "TEA";
  if (raw.includes("tdah") || raw.includes("dficit")) return "TDAH";
  if (raw.includes("dislex")) return "Dislexia";
  return "Neurotipico";
}

const fmt = (d: Date) => d.toISOString().slice(0, 10);

export interface GerarAulasResult {
  ok: true;
  criadas: number;
  perfil: PerfilNeuro;
  mensagem?: string;
}

export async function gerarAulasSemana(opts: {
  childId: string;
  semanaInicio?: Date;
}): Promise<GerarAulasResult> {
  const { childId } = opts;
  const semanaInicio = opts.semanaInicio || getSegundaDaSemana();

  const { data: userRes } = await supabase.auth.getUser();
  const userId = userRes.user?.id;
  if (!userId) throw new Error("Não autenticado");

  // 1. Criança
  const { data: child, error: childErr } = await supabase
    .from("children")
    .select("id, user_id, serie, idade, nome")
    .eq("id", childId)
    .maybeSingle();
  if (childErr) throw childErr;
  if (!child) throw new Error("Criança não encontrada");

  // 2. Anamnese
  const { data: anamnese } = await supabase
    .from("anamnese_v2")
    .select("responses")
    .eq("child_id", childId)
    .maybeSingle();
  const perfil = inferPerfil(anamnese?.responses);
  const serie = (child as { serie?: string | null }).serie || "1º Ano";

  // 3. BNCC (com fallback)
  type HabRow = { codigo_bncc: string; disciplina: string | null; titulo: string | null; objetivo: string | null; ano: string | null };
  let habRows: HabRow[] = [];
  const { data: habsSerie } = await supabase
    .from("bncc_habilidades")
    .select("codigo_bncc, disciplina, titulo, objetivo, ano")
    .eq("ano", serie)
    .limit(30);
  habRows = (habsSerie || []) as unknown as HabRow[];
  if (habRows.length === 0) {
    const { data: fb } = await supabase
      .from("bncc_habilidades")
      .select("codigo_bncc, disciplina, titulo, objetivo, ano")
      .limit(10);
    habRows = (fb || []) as unknown as HabRow[];
  }
  if (habRows.length === 0) {
    throw new Error("Sem habilidades BNCC cadastradas para gerar aulas");
  }
  const habilidades = habRows.map((h) => ({
    codigo: h.codigo_bncc,
    disciplina: h.disciplina || "Geral",
    descricao: h.titulo || h.objetivo || h.codigo_bncc,
    ano: h.ano,
  }));

  // 4. Matriz pedagógica
  const { data: matrizRaw } = await supabase
    .from("pedagogical_activities_base")
    .select("id, serie, materia, estrategia_pedagogica, titulo, objetivo_pedagogico, habilidade_bncc")
    .or(`serie.eq.${serie},serie.is.null`)
    .limit(200);
  const matriz = ((matrizRaw || []) as unknown as Array<{
    id: string; serie: string | null; materia: string | null;
    estrategia_pedagogica: string | null; titulo: string | null;
    objetivo_pedagogico: string | null; habilidade_bncc: string | null;
  }>).map((m) => ({
    id: m.id,
    serie: m.serie,
    materia: m.materia,
    tecnica: m.estrategia_pedagogica,
    formato: null,
    codigo_bncc: m.habilidade_bncc,
    titulo: m.titulo,
    descricao: m.objetivo_pedagogico,
  }));

  // 5. Mídias
  const { data: midias } = await supabase
    .from("rb_midias")
    .select("id, url, tipo, tags, titulo")
    .limit(100);

  // 6. Progresso (evita repetir o que já domina)
  const { data: progresso } = await supabase
    .from("progresso_aluno")
    .select("codigo_bncc, dominio")
    .eq("aluno_id", childId);
  const jaDominadas = new Set<string>(
    ((progresso || []) as Array<{ codigo_bncc: string | null; dominio: number | null }>)
      .filter((p) => (p.dominio ?? 0) >= 0.8 && p.codigo_bncc)
      .map((p) => p.codigo_bncc as string),
  );

  // 7. Planeja
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

  // 8. Upsert
  const { error: upErr } = await supabase
    .from("aulas_semana")
    .upsert(plano as never, { onConflict: "child_id,data" });
  if (upErr) throw upErr;

  return { ok: true, criadas: plano.length, perfil };
}

export async function listarAulasSemana(opts: {
  childId: string;
  semanaInicio?: Date;
}) {
  const inicio = opts.semanaInicio || getSegundaDaSemana();
  const fim = new Date(inicio);
  fim.setDate(fim.getDate() + 4);

  const { data, error } = await supabase
    .from("aulas_semana")
    .select("*")
    .eq("child_id", opts.childId)
    .gte("data", fmt(inicio))
    .lte("data", fmt(fim))
    .order("data");
  if (error) throw error;
  return data || [];
}
