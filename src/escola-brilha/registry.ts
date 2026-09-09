import type { Aula } from "./types";

/**
 * Auto-registro de todas as aulas escritas à mão em src/escola-brilha/data/*.ts.
 * Cada arquivo deve fazer `export default { ... } satisfies Aula`.
 */
const modules = import.meta.glob<{ default: Aula }>("./data/*.ts", { eager: true });

const registry: Record<string, Aula> = {};
for (const path in modules) {
  const aula = modules[path].default;
  if (aula && aula.codigo) registry[aula.codigo.toUpperCase()] = aula;
}

export function getAula(codigo: string): Aula | undefined {
  return registry[codigo.toUpperCase()];
}

export function listAulas(): Aula[] {
  return Object.values(registry).sort((a, b) => a.codigo.localeCompare(b.codigo));
}

export function hasAula(codigo: string): boolean {
  return !!registry[codigo.toUpperCase()];
}
