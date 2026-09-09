// Seletor automático de atividades por habilidade BNCC.
// Regras:
//  - infere disciplina + ano a partir do código BNCC (ex: EF01MA01 → ano=1, disciplina=MA)
//  - filtra o catálogo pelo anoMinimo e disciplina compatíveis
//  - garante variedade: 3–5 tipos distintos por missão
//  - determinístico: mesma habilidade sempre gera a mesma seleção (hash do código)

import { CATALOGO_ATIVIDADES, TipoAtividade, TODOS_TIPOS } from "./tipos";

const DISCIPLINA_MAP: Record<string, string> = {
  MA: "matematica",
  LP: "portugues",
  CI: "ciencias",
  HI: "historia",
  GE: "geografia",
  AR: "artes",
  EF: "educacao_fisica",
  ER: "religiao",
  LI: "portugues", // Língua Inglesa cai em portugues p/ filtro
};

export interface BnccInfo {
  etapa: "EI" | "EF" | "EM";
  ano: number; // 0 = Infantil, 1..9 = Fundamental
  disciplina: string;
}

export function parseBncc(codigo: string): BnccInfo {
  // Ex: EF01MA01, EI02EO01
  const etapa = (codigo.slice(0, 2) as BnccInfo["etapa"]) || "EF";
  const ano = parseInt(codigo.slice(2, 4), 10) || 0;
  const discSigla = codigo.slice(4, 6).toUpperCase();
  const disciplina = DISCIPLINA_MAP[discSigla] ?? "geral";
  return { etapa, ano: etapa === "EI" ? 0 : ano, disciplina };
}

function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export interface SelecaoAtividades {
  codigo: string;
  info: BnccInfo;
  tipos: TipoAtividade[];
}

/** Seleciona 3–5 tipos de atividade adequados à habilidade. */
export function selecionarAtividades(
  codigo: string,
  quantidade: number = 4
): SelecaoAtividades {
  const info = parseBncc(codigo);

  // 1. Filtro por ano mínimo + disciplina
  const compativeis = TODOS_TIPOS.filter((t) => {
    const meta = CATALOGO_ATIVIDADES[t];
    if (meta.anoMinimo > info.ano) return false;
    if (meta.disciplinas.length > 0 && !meta.disciplinas.includes(info.disciplina)) {
      // permite se for atividade genérica útil (múltipla escolha, V/F, ligar, memória)
      return false;
    }
    return true;
  });

  // 2. Sempre incluir base genérica adequada à idade
  const genericos: TipoAtividade[] = TODOS_TIPOS.filter((t) => {
    const meta = CATALOGO_ATIVIDADES[t];
    return meta.disciplinas.length === 0 && meta.anoMinimo <= info.ano;
  });

  const pool = Array.from(new Set([...genericos, ...compativeis]));

  // 3. Ordenação determinística por hash do código
  const seed = hash(codigo);
  const ranked = pool
    .map((t, i) => ({ t, r: hash(t + codigo) ^ seed ^ i }))
    .sort((a, b) => a.r - b.r)
    .map((x) => x.t);

  const n = Math.max(3, Math.min(quantidade, 5));
  return { codigo, info, tipos: ranked.slice(0, n) };
}

/** Retorna os metadados completos das atividades escolhidas. */
export function selecionarAtividadesDetalhado(codigo: string, quantidade?: number) {
  const sel = selecionarAtividades(codigo, quantidade);
  return {
    ...sel,
    detalhes: sel.tipos.map((t) => CATALOGO_ATIVIDADES[t]),
  };
}
