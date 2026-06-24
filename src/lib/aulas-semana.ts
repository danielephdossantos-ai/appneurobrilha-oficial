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

export function normalizeSerie(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const s = String(raw).trim();
  if (!s) return null;
  // Já formatado: "1º Ano", "Educação Infantil", etc
  if (/º\s*ano/i.test(s) || /infantil|médio|medio|fundamental/i.test(s)) return s;
  // Número puro: "7" → "7º Ano"
  const n = s.match(/^(\d{1,2})$/);
  if (n) return `${n[1]}º Ano`;
  // "7 ano" / "7o ano" → "7º Ano"
  const m = s.match(/^(\d{1,2})\s*[ºo°]?\s*ano/i);
  if (m) return `${m[1]}º Ano`;
  return s;
}

function getSerieNumber(serie: string): number | null {
  const match = serie.match(/(\d{1,2})/);
  if (!match) return null;
  const n = Number(match[1]);
  return Number.isFinite(n) ? n : null;
}

export function getAnoFilters(serie: string): string[] {
  const lower = serie.toLowerCase();
  if (lower.includes("infantil") || lower.includes("pré") || lower.includes("pre")) {
    return ["Educação Infantil"];
  }
  if (lower.includes("médio") || lower.includes("medio")) {
    return ["Ensino Médio"];
  }

  const n = getSerieNumber(serie);
  if (!n) return [serie];

  const filters = [`${n}º Ano`];
  if (n >= 1 && n <= 2) filters.push("1º ao 2º Ano");
  if (n >= 1 && n <= 5) filters.push("1º ao 5º Ano");
  if (n >= 3 && n <= 5) filters.push("3º ao 5º Ano");
  if (n >= 6 && n <= 7) filters.push("6º ao 7º Ano");
  if (n >= 6 && n <= 9) filters.push("6º ao 9º Ano");
  if (n >= 8 && n <= 9) filters.push("8º ao 9º Ano");
  return Array.from(new Set(filters));
}

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
  const serie = normalizeSerie((child as { serie?: string | null }).serie) || "1º Ano";

  // 3. BNCC (série exata + habilidades de faixa, ex.: 6º ao 9º Ano)
  type HabRow = { codigo_bncc: string; disciplina: string | null; titulo: string | null; objetivo: string | null; ano: string | null };
  let habRows: HabRow[] = [];
  const anoFilters = getAnoFilters(serie);
  const { data: habsSerie } = await supabase
    .from("bncc_habilidades")
    .select("codigo_bncc, disciplina, titulo, objetivo, ano")
    .in("ano", anoFilters)
    .order("codigo_bncc", { ascending: true })
    .limit(1000);
  habRows = (habsSerie || []) as unknown as HabRow[];
  if (habRows.length === 0) {
    const { data: fb } = await supabase
      .from("bncc_habilidades")
      .select("codigo_bncc, disciplina, titulo, objetivo, ano")
      .order("codigo_bncc", { ascending: true })
      .limit(1000);
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
  const habByCodigo = new Map(habilidades.map((h) => [h.codigo, h]));

  // 3b. Trilha anual fixa — semana do calendário escolar correspondente
  const ANCHOR = new Date("2026-02-02T00:00:00Z"); // primeira segunda do ano letivo
  const diffWeeks = Math.floor((semanaInicio.getTime() - ANCHOR.getTime()) / (7 * 24 * 60 * 60 * 1000));
  const semanaEscolar = ((diffWeeks % 40) + 40) % 40 + 1;
  const { data: trilhaRows } = await supabase
    .from("trilha_anual")
    .select("dia, ordem_no_dia, codigo_bncc, ano")
    .in("ano", anoFilters)
    .eq("semana", semanaEscolar)
    .eq("ordem_no_dia", 1)
    .order("dia", { ascending: true });
  const trilhaSemana = ((trilhaRows || []) as Array<{ dia: number; codigo_bncc: string }>)
    .map((t) => {
      const h = habByCodigo.get(t.codigo_bncc);
      if (!h) return null;
      return { dia: t.dia, habilidade: h };
    })
    .filter((x): x is { dia: number; habilidade: typeof habilidades[number] } => x !== null);

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

  // 7. Planeja (usa trilha fixa quando disponível)
  const plano = planWeek({
    childId,
    userId,
    perfil,
    serie,
    semanaInicio,
    habilidades,
    trilhaSemana,
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
