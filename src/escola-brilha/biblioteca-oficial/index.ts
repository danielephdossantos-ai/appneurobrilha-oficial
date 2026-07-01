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

export type { MissaoOficial } from "./types";
