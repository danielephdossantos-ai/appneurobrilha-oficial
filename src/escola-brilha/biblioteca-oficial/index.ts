/**
 * Biblioteca Oficial de Missões — Registry
 * ----------------------------------------
 * Carrega automaticamente todos os arquivos de missão em ./missoes/*.ts.
 * Bloqueia duplicidades (dois arquivos exportando o mesmo código BNCC).
 */

import type { MissaoOficial } from "./types";

const modules = import.meta.glob<{ default: MissaoOficial }>("./missoes/*.ts", { eager: true });

const registry: Record<string, MissaoOficial> = {};
const duplicidades: string[] = [];

for (const path in modules) {
  const missao = modules[path].default;
  if (!missao || !missao.codigo) continue;
  const chave = missao.codigo.toUpperCase();
  if (registry[chave]) {
    duplicidades.push(`${chave} duplicado em ${path}`);
    continue;
  }
  registry[chave] = { ...missao, codigo: chave };
}

if (duplicidades.length && typeof console !== "undefined") {
  // Nunca mesclar duplicados silenciosamente — sinalizar em dev.
  console.warn("[BibliotecaOficial] duplicidades ignoradas:", duplicidades);
}

export function getMissaoOficial(codigo: string): MissaoOficial | undefined {
  return registry[codigo.toUpperCase()];
}

export function hasMissaoOficial(codigo: string): boolean {
  return !!registry[codigo.toUpperCase()];
}

export function listMissoesOficiais(): MissaoOficial[] {
  return Object.values(registry).sort((a, b) => a.codigo.localeCompare(b.codigo));
}

export function listMissoesPorDisciplina(disciplina: string): MissaoOficial[] {
  const d = disciplina.toLowerCase();
  return listMissoesOficiais().filter((m) => m.disciplina.toLowerCase() === d);
}

export function listMissoesPorAno(ano: string): MissaoOficial[] {
  const a = ano.toLowerCase();
  return listMissoesOficiais().filter((m) => m.ano.toLowerCase() === a);
}

export function totalMissoesOficiais(): number {
  return Object.keys(registry).length;
}

/**
 * Biblioteca Nacional de Missões — árvore hierárquica oficial.
 *
 *   Etapa → Ano → Disciplina → Unidade Temática → Objeto de Conhecimento → Código BNCC → Missão
 *
 * Regra travada: cada código BNCC aparece uma única vez (garantido pelo registry).
 */
export type NoMissaoBiblioteca = {
  codigo: string;
  missao: MissaoOficial;
};
export type NoObjetoConhecimento = {
  objetoConhecimento: string;
  missoes: NoMissaoBiblioteca[];
};
export type NoUnidadeTematica = {
  unidadeTematica: string;
  objetosConhecimento: NoObjetoConhecimento[];
};
export type NoDisciplina = {
  disciplina: string;
  unidadesTematicas: NoUnidadeTematica[];
};
export type NoAno = {
  ano: string;
  disciplinas: NoDisciplina[];
};
export type NoEtapa = {
  etapa: string;
  anos: NoAno[];
};
export type BibliotecaNacionalMissoes = NoEtapa[];

const ORDEM_ETAPA: Record<string, number> = {
  "Educação Infantil": 0,
  "Ensino Fundamental": 1,
  "Ensino Médio": 2,
};

function grupoOrdenado<T, K extends string>(
  items: T[],
  key: (i: T) => K,
  cmp: (a: K, b: K) => number = (a, b) => a.localeCompare(b),
): Array<[K, T[]]> {
  const map = new Map<K, T[]>();
  for (const it of items) {
    const k = key(it);
    const arr = map.get(k) ?? [];
    arr.push(it);
    map.set(k, arr);
  }
  return [...map.entries()].sort(([a], [b]) => cmp(a, b));
}

export function getBibliotecaNacionalMissoes(): BibliotecaNacionalMissoes {
  const todas = listMissoesOficiais();
  return grupoOrdenado(
    todas,
    (m) => m.etapa,
    (a, b) => (ORDEM_ETAPA[a] ?? 99) - (ORDEM_ETAPA[b] ?? 99) || a.localeCompare(b),
  ).map(([etapa, porEtapa]) => ({
    etapa,
    anos: grupoOrdenado(porEtapa, (m) => m.ano).map(([ano, porAno]) => ({
      ano,
      disciplinas: grupoOrdenado(porAno, (m) => m.disciplina).map(([disciplina, porDisc]) => ({
        disciplina,
        unidadesTematicas: grupoOrdenado(porDisc, (m) => m.unidadeTematica).map(
          ([unidadeTematica, porUnid]) => ({
            unidadeTematica,
            objetosConhecimento: grupoOrdenado(porUnid, (m) => m.objetoConhecimento).map(
              ([objetoConhecimento, porObj]) => ({
                objetoConhecimento,
                missoes: porObj
                  .sort((a, b) => a.codigo.localeCompare(b.codigo))
                  .map((m) => ({ codigo: m.codigo, missao: m })),
              }),
            ),
          }),
        ),
      })),
    })),
  }));
}

/** Metadados oficiais da Biblioteca Nacional de Missões. */
export const BIBLIOTECA_NACIONAL_MISSOES = {
  hierarquia: [
    "Etapa",
    "Ano Escolar",
    "Disciplina",
    "Unidade Temática",
    "Objeto de Conhecimento",
    "Código BNCC",
    "Missão",
  ] as const,
  regra: "Cada código BNCC possui exatamente UMA missão. Duplicidades são rejeitadas no registry.",
  viewCobertura: "public.vw_biblioteca_nacional_missoes",
} as const;
