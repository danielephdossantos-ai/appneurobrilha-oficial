/**
 * Desbloqueio + escalação dos Mascotes-Professores por criança.
 *
 * Regras:
 * - Pip (slug "default") já vem desbloqueado pra toda criança.
 * - Cada um dos outros 9 é comprado com BrilhoCoins (ver PRECOS_MASCOTES).
 * - A criança pode escolher qual mascote desbloqueado ensina cada disciplina,
 *   MAS o mesmo mascote não pode aparecer em duas disciplinas ao mesmo tempo.
 *
 * Persistência: localStorage por child_id (não polui o DB e roda offline).
 * Chaves:
 *   eb:mascotes-unlocked:<childId>  = string[]  (slugs desbloqueados, sem "default")
 *   eb:mascote-assign:<childId>     = Record<disciplina, mascoteSlug>
 */
import { DISCIPLINAS_OFICIAIS, PRECOS_MASCOTES } from "./mascotes-disciplina";

const KEY_UNLOCK = (childId: string) => `eb:mascotes-unlocked:${childId}`;
const KEY_ASSIGN = (childId: string) => `eb:mascote-assign:${childId}`;

function readJSON<T>(k: string, fallback: T): T {
  try {
    const raw = typeof window !== "undefined" ? window.localStorage.getItem(k) : null;
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function writeJSON(k: string, v: unknown) {
  try {
    window.localStorage.setItem(k, JSON.stringify(v));
  } catch {}
}

/** Slugs desbloqueados pela criança (Pip sempre incluso). */
export function getUnlockedMascotes(childId?: string | null): string[] {
  if (!childId) return ["default"];
  const arr = readJSON<string[]>(KEY_UNLOCK(childId), []);
  return Array.from(new Set(["default", ...arr]));
}

export function isMascoteUnlocked(childId: string, slug: string): boolean {
  return getUnlockedMascotes(childId).includes(slug);
}

/** Marca um mascote como desbloqueado (persiste local). */
export function marcarDesbloqueado(childId: string, slug: string) {
  if (slug === "default") return;
  const cur = getUnlockedMascotes(childId).filter((s) => s !== "default");
  if (cur.includes(slug)) return;
  writeJSON(KEY_UNLOCK(childId), [...cur, slug]);
}

/** true se a criança tem TODOS os 10 mascotes (Pip + 9 disciplinas). */
export function todosDesbloqueados(childId?: string | null): boolean {
  const un = new Set(getUnlockedMascotes(childId));
  return DISCIPLINAS_OFICIAIS.every((d) => un.has(d.slug));
}

/** Mapa disciplina → mascoteSlug escolhido pela criança (só entradas válidas). */
export function getAssignments(childId?: string | null): Record<string, string> {
  if (!childId) return {};
  const raw = readJSON<Record<string, string>>(KEY_ASSIGN(childId), {});
  const un = new Set(getUnlockedMascotes(childId));
  const out: Record<string, string> = {};
  for (const [disc, slug] of Object.entries(raw)) {
    if (un.has(slug)) out[disc] = slug;
  }
  return out;
}

/**
 * Define o mascote de uma disciplina. Garante NO-REPEAT:
 * se `slug` já estava atribuído a outra disciplina, essa outra volta ao padrão.
 * Retorna o mapa atualizado.
 */
export function setAssignment(
  childId: string,
  disciplina: string,
  mascoteSlug: string,
): Record<string, string> {
  const atual = getAssignments(childId);
  // remove esse mascote de qualquer outra disciplina
  for (const d of Object.keys(atual)) {
    if (atual[d] === mascoteSlug && d !== disciplina) delete atual[d];
  }
  atual[disciplina] = mascoteSlug;
  writeJSON(KEY_ASSIGN(childId), atual);
  return atual;
}

/** Mascote efetivo para uma disciplina (override → padrão). */
export function mascoteAtribuido(
  childId: string | null | undefined,
  disciplinaSlug: string,
): string | undefined {
  if (!childId) return undefined;
  return getAssignments(childId)[disciplinaSlug];
}

/** Preço de um mascote pelo slug (0 se não estiver no catálogo). */
export function precoDoMascote(slug: string): number {
  return PRECOS_MASCOTES[slug] ?? 0;
}
