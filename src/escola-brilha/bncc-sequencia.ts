import { supabase } from "@/integrations/supabase/client";

/**
 * Sequência oficial de aprendizagem BNCC.
 *
 * Regra (definida pelo produto):
 *  1. Após concluir uma habilidade, buscar a próxima da MESMA DISCIPLINA
 *     dentro do MESMO ANO e da MESMA UNIDADE TEMÁTICA.
 *  2. Se acabou a unidade temática, ir para a próxima unidade do mesmo ano.
 *  3. Se acabou o ano, ir para o próximo ano da mesma disciplina.
 *  4. Nunca aleatório — sempre a próxima na ordem canônica.
 *
 * Fonte de dados: exclusivamente a tabela `bncc_habilidades`.
 */

export type HabSeq = {
  codigo: string;
  titulo: string;
  ano: string;
  disciplina: string;
  unidade: string;
};

const ORDEM_ANOS: string[] = [
  "Educação Infantil",
  "1º Ano",
  "2º Ano",
  "3º Ano",
  "4º Ano",
  "5º Ano",
  "6º Ano",
  "7º Ano",
  "8º Ano",
  "9º Ano",
  "Ensino Médio",
];

// Expande faixas como "1º ao 5º Ano" → cada ano individual.
function expandirAno(ano: string): string[] {
  const a = (ano || "").trim();
  const direto = ORDEM_ANOS.find((s) => s === a);
  if (direto) return [direto];
  const m = a.match(/(\d)[ºo]?\s*ao\s*(\d)[ºo]?\s*Ano/i);
  if (m) {
    const [ini, fim] = [parseInt(m[1]!, 10), parseInt(m[2]!, 10)];
    const out: string[] = [];
    for (let i = ini; i <= fim; i++) out.push(`${i}º Ano`);
    return out;
  }
  return [a];
}

// Deriva a Unidade Temática oficial da BNCC a partir do código.
function componenteDoCodigo(codigo: string): string {
  const m = codigo.match(/^(EI|EF|EM)\d{2,4}([A-Z]{2,3})\d+/);
  return m?.[2] ?? "";
}

function unidadeTematica(codigo: string, disciplina: string): string {
  const comp = componenteDoCodigo(codigo);
  const num = parseInt(codigo.match(/(\d+)$/)?.[1] ?? "0", 10);
  if (comp === "LP") {
    if (codigo.startsWith("EI")) return "Escuta, fala, pensamento e imaginação";
    if (num <= 10) return "Leitura / Escuta";
    if (num <= 20) return "Produção de textos";
    if (num <= 25) return "Oralidade";
    return "Análise linguística e semiótica";
  }
  if (comp === "MA") {
    if (num <= 5) return "Números";
    if (num <= 10) return "Álgebra";
    if (num <= 18) return "Geometria";
    if (num <= 24) return "Grandezas e Medidas";
    return "Probabilidade e Estatística";
  }
  if (comp === "CI") {
    if (num <= 5) return "Matéria e Energia";
    if (num <= 10) return "Vida e Evolução";
    return "Terra e Universo";
  }
  if (comp === "HI") return "Mundos pessoais, sociais e históricos";
  if (comp === "GE") return "O sujeito, o lugar e o mundo";
  if (comp === "AR") return "Linguagens artísticas";
  if (comp === "EF" && codigo.startsWith("EF")) return "Práticas corporais";
  if (comp === "LI") return "Oralidade / Leitura / Escrita";
  if (comp === "ER") return "Identidades, alteridades e crenças";
  if (comp === "EF") return "O eu, o outro e o nós";
  if (comp === "TS") return "Traços, sons, cores e formas";
  if (comp === "ET") return "Escuta, fala, pensamento e imaginação";
  if (comp === "CG") return "Corpo, gestos e movimentos";
  if (comp === "EO") return "Espaços, tempos, quantidades, relações e transformações";
  return disciplina || "Componente Curricular";
}

// Cache em memória para não bater no banco a cada aula concluída.
let cacheSequencia: Map<string, HabSeq[]> | null = null;
let cachePromise: Promise<Map<string, HabSeq[]>> | null = null;

async function carregarSequencia(): Promise<Map<string, HabSeq[]>> {
  if (cacheSequencia) return cacheSequencia;
  if (cachePromise) return cachePromise;

  cachePromise = (async () => {
    const { data } = await supabase
      .from("bncc_habilidades")
      .select("codigo_bncc, titulo, ano, disciplina")
      .order("codigo_bncc", { ascending: true });

    // Dedup por código, expandir faixas de ano.
    const vistos = new Set<string>();
    const linhas: HabSeq[] = [];
    for (const r of data ?? []) {
      if (vistos.has(r.codigo_bncc)) continue;
      vistos.add(r.codigo_bncc);
      const disc = r.disciplina || "Geral";
      const uni = unidadeTematica(r.codigo_bncc, disc);
      for (const ano of expandirAno(r.ano || "")) {
        linhas.push({
          codigo: r.codigo_bncc,
          titulo: r.titulo ?? r.codigo_bncc,
          ano,
          disciplina: disc,
          unidade: uni,
        });
      }
    }

    // Agrupar por disciplina e ordenar por (ano → unidade → número do código).
    const porDisc = new Map<string, HabSeq[]>();
    for (const h of linhas) {
      if (!porDisc.has(h.disciplina)) porDisc.set(h.disciplina, []);
      porDisc.get(h.disciplina)!.push(h);
    }
    for (const [disc, lista] of porDisc) {
      lista.sort((a, b) => {
        const ai = ORDEM_ANOS.indexOf(a.ano);
        const bi = ORDEM_ANOS.indexOf(b.ano);
        if (ai !== bi) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
        if (a.unidade !== b.unidade) return a.unidade.localeCompare(b.unidade);
        const na = parseInt(a.codigo.match(/(\d+)$/)?.[1] ?? "0", 10);
        const nb = parseInt(b.codigo.match(/(\d+)$/)?.[1] ?? "0", 10);
        if (na !== nb) return na - nb;
        return a.codigo.localeCompare(b.codigo);
      });
      porDisc.set(disc, lista);
    }

    cacheSequencia = porDisc;
    return porDisc;
  })();

  return cachePromise;
}

/**
 * Retorna a PRÓXIMA habilidade oficial após `codigo`.
 * Respeita: mesma disciplina → mesma unidade temática → mesmo ano →
 * próxima unidade → próximo ano. Nunca aleatório.
 * Retorna `null` quando o aluno chegou ao fim da trilha da disciplina.
 */
export async function proximaHabilidade(codigo: string): Promise<HabSeq | null> {
  const mapa = await carregarSequencia();
  for (const lista of mapa.values()) {
    const idx = lista.findIndex((h) => h.codigo === codigo);
    if (idx === -1) continue;
    // A ordem interna da lista já é: ano → unidade → código.
    // Basta pegar o próximo item da mesma disciplina.
    const prox = lista[idx + 1];
    return prox ?? null;
  }
  return null;
}

export function invalidarCacheSequencia() {
  cacheSequencia = null;
  cachePromise = null;
}
