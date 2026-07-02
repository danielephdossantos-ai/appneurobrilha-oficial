/**
 * Trilhas de Aprendizagem
 * ------------------------
 * Uma trilha = sequência oficial BNCC de uma disciplina.
 *
 * Cada trilha permite:
 *   • continuar de onde o aluno parou
 *   • visualizar evolução (percentual concluído)
 *   • identificar habilidades concluídas
 *   • identificar habilidades pendentes
 *   • sugerir automaticamente a próxima missão
 *
 * A ordem respeita integralmente a progressão da BNCC (ano → unidade
 * temática → código), reusando `bncc-sequencia.ts` como fonte única.
 * Nenhuma regra pedagógica é duplicada aqui.
 */

import { supabase } from "@/integrations/supabase/client";
import { proximaHabilidade, invalidarCacheSequencia, type HabSeq } from "../bncc-sequencia";

export type StatusMissao = "concluida" | "em_andamento" | "pendente" | "bloqueada";

export interface NoTrilha extends HabSeq {
  status: StatusMissao;
  percentual: number;              // 0-100
  nivelDominio: string;            // enum mastery_level
  ultimaVisitaEm: string | null;
  ehProxima: boolean;              // sugestão automática
  posicao: number;                 // 1-based dentro da trilha
}

export interface TrilhaDisciplina {
  disciplina: string;
  totalHabilidades: number;
  concluidas: number;
  emAndamento: number;
  pendentes: number;
  evolucaoPercentual: number;      // 0-100
  ultimaVisitaEm: string | null;
  continuarDe: NoTrilha | null;    // onde retomar (última visitada não concluída) — fallback: próxima pendente
  proximaSugerida: NoTrilha | null;
  nos: NoTrilha[];
}

// =====================================================================
// Fonte única da sequência BNCC (importada de bncc-sequencia)
// =====================================================================

// Recarrega mapa disciplina → lista ordenada. Reaproveita o cache do
// módulo de sequência através do primeiro item + próxima habilidade.
async function carregarPorDisciplina(): Promise<Map<string, HabSeq[]>> {
  // A função `proximaHabilidade` já popula o cache internamente na
  // primeira chamada. Fazemos uma leitura direta do banco também aqui,
  // porque precisamos da lista completa — não só do "próximo".
  const { data } = await supabase
    .from("bncc_habilidades")
    .select("codigo_bncc, titulo, ano, disciplina")
    .order("codigo_bncc", { ascending: true });

  const porDisc = new Map<string, HabSeq[]>();
  const vistos = new Set<string>();
  for (const r of data ?? []) {
    if (vistos.has(r.codigo_bncc)) continue;
    vistos.add(r.codigo_bncc);
    const disc = r.disciplina || "Geral";
    if (!porDisc.has(disc)) porDisc.set(disc, []);
    porDisc.get(disc)!.push({
      codigo: r.codigo_bncc,
      titulo: r.titulo ?? r.codigo_bncc,
      ano: r.ano || "",
      disciplina: disc,
      unidade: "",
    });
  }

  // Alinha a ordem à sequência oficial: usa `proximaHabilidade` para
  // percorrer a partir do primeiro código de cada disciplina.
  for (const [disc, lista] of porDisc) {
    if (lista.length === 0) continue;
    const primeiro = lista[0];
    const ordenada: HabSeq[] = [primeiro];
    let atual = primeiro.codigo;
    // limite de segurança
    for (let i = 0; i < lista.length + 5; i++) {
      const prox = await proximaHabilidade(atual);
      if (!prox || prox.disciplina !== disc) break;
      if (ordenada.some((h) => h.codigo === prox.codigo)) break;
      ordenada.push(prox);
      atual = prox.codigo;
    }
    // Anexa habilidades órfãs (não alcançadas pela sequência oficial)
    // para nunca esconder conteúdo da BNCC.
    const setOrd = new Set(ordenada.map((h) => h.codigo));
    for (const h of lista) if (!setOrd.has(h.codigo)) ordenada.push(h);
    porDisc.set(disc, ordenada);
  }

  return porDisc;
}

// =====================================================================
// Progresso do aluno
// =====================================================================

interface LinhaProgresso {
  codigo_bncc: string;
  concluida: boolean | null;
  percentual: number | null;
  nivel_dominio: string | null;
  ultima_visita_em: string | null;
}

async function carregarProgresso(childId: string): Promise<Map<string, LinhaProgresso>> {
  const { data } = await supabase
    .from("escola_progresso")
    .select("codigo_bncc, concluida, percentual, nivel_dominio, ultima_visita_em")
    .eq("child_id", childId);

  const mapa = new Map<string, LinhaProgresso>();
  for (const r of (data ?? []) as LinhaProgresso[]) mapa.set(r.codigo_bncc, r);
  return mapa;
}

function statusDaLinha(p: LinhaProgresso | undefined): StatusMissao {
  if (!p) return "pendente";
  if (p.concluida) return "concluida";
  if ((p.percentual ?? 0) > 0 || p.ultima_visita_em) return "em_andamento";
  return "pendente";
}

// =====================================================================
// Build da trilha por disciplina
// =====================================================================

function montarTrilha(disciplina: string, nos: HabSeq[], prog: Map<string, LinhaProgresso>): TrilhaDisciplina {
  const enriquecidos: NoTrilha[] = nos.map((h, i) => {
    const p = prog.get(h.codigo);
    return {
      ...h,
      status: statusDaLinha(p),
      percentual: p?.percentual ?? 0,
      nivelDominio: p?.nivel_dominio ?? "nao_iniciada",
      ultimaVisitaEm: p?.ultima_visita_em ?? null,
      ehProxima: false,
      posicao: i + 1,
    };
  });

  const concluidas = enriquecidos.filter((n) => n.status === "concluida").length;
  const emAndamento = enriquecidos.filter((n) => n.status === "em_andamento").length;
  const pendentes = enriquecidos.filter((n) => n.status === "pendente").length;
  const total = enriquecidos.length;
  const evolucaoPercentual = total > 0 ? Math.round((concluidas / total) * 100) : 0;

  // Continuar de onde parou: última visitada não concluída
  const naoConcluidasVisitadas = enriquecidos
    .filter((n) => n.status === "em_andamento" && n.ultimaVisitaEm)
    .sort((a, b) => (b.ultimaVisitaEm || "").localeCompare(a.ultimaVisitaEm || ""));
  const continuarDe: NoTrilha | null =
    naoConcluidasVisitadas[0] ??
    enriquecidos.find((n) => n.status !== "concluida") ??
    null;

  // Próxima sugerida: primeira não concluída após a última concluída (respeita BNCC)
  let proximaSugerida: NoTrilha | null = null;
  const ultimaConcluidaIdx = (() => {
    for (let i = enriquecidos.length - 1; i >= 0; i--) {
      if (enriquecidos[i].status === "concluida") return i;
    }
    return -1;
  })();
  for (let i = ultimaConcluidaIdx + 1; i < enriquecidos.length; i++) {
    if (enriquecidos[i].status !== "concluida") {
      proximaSugerida = enriquecidos[i];
      break;
    }
  }
  if (!proximaSugerida) proximaSugerida = continuarDe;
  if (proximaSugerida) {
    const alvo = enriquecidos.find((n) => n.codigo === proximaSugerida!.codigo);
    if (alvo) alvo.ehProxima = true;
  }

  const ultimaVisitaEm = enriquecidos
    .map((n) => n.ultimaVisitaEm)
    .filter((x): x is string => !!x)
    .sort((a, b) => b.localeCompare(a))[0] ?? null;

  return {
    disciplina,
    totalHabilidades: total,
    concluidas,
    emAndamento,
    pendentes,
    evolucaoPercentual,
    ultimaVisitaEm,
    continuarDe,
    proximaSugerida,
    nos: enriquecidos,
  };
}

// =====================================================================
// Fachada
// =====================================================================

export const TrilhasAprendizagem = {
  /** Lista todas as trilhas (uma por disciplina) com progresso do aluno. */
  async todas(childId: string): Promise<TrilhaDisciplina[]> {
    const [porDisc, prog] = await Promise.all([
      carregarPorDisciplina(),
      carregarProgresso(childId),
    ]);
    const out: TrilhaDisciplina[] = [];
    for (const [disc, nos] of porDisc) out.push(montarTrilha(disc, nos, prog));
    out.sort((a, b) => a.disciplina.localeCompare(b.disciplina));
    return out;
  },

  /** Trilha específica de uma disciplina. */
  async da(childId: string, disciplina: string): Promise<TrilhaDisciplina | null> {
    const trilhas = await TrilhasAprendizagem.todas(childId);
    return trilhas.find((t) => t.disciplina === disciplina) ?? null;
  },

  /** Onde o aluno deve continuar (última missão visitada não concluída). */
  async continuarDe(childId: string, disciplina: string): Promise<NoTrilha | null> {
    const t = await TrilhasAprendizagem.da(childId, disciplina);
    return t?.continuarDe ?? null;
  },

  /** Próxima missão sugerida oficialmente (respeita BNCC). */
  async proximaSugerida(childId: string, disciplina: string): Promise<NoTrilha | null> {
    const t = await TrilhasAprendizagem.da(childId, disciplina);
    return t?.proximaSugerida ?? null;
  },

  /** Força recarga da sequência BNCC (invalida cache interno). */
  invalidarCache(): void {
    invalidarCacheSequencia();
  },
};

export type TrilhasAprendizagemAPI = typeof TrilhasAprendizagem;
