/**
 * Fila rotativa de atividades por lição.
 * - Persiste no localStorage a "cabeça" (próxima atividade a apresentar) por lesson.id.
 * - A cada atividade concluída, avança a cabeça (mod total).
 * - Resultado: a criança nunca recomeça do mesmo ponto; continua de onde parou.
 */

const KEY = (lessonId: string) => `escola-brilha:rot:${lessonId}`;

export function getRotationHead(lessonId: string, total: number): number {
  if (total <= 0) return 0;
  try {
    const raw = localStorage.getItem(KEY(lessonId));
    const n = raw ? parseInt(raw, 10) : 0;
    if (Number.isFinite(n) && n >= 0) return n % total;
  } catch {
    /* ignore */
  }
  return 0;
}

export function advanceRotationHead(lessonId: string, total: number): void {
  if (total <= 0) return;
  try {
    const cur = getRotationHead(lessonId, total);
    const next = (cur + 1) % total;
    localStorage.setItem(KEY(lessonId), String(next));
  } catch {
    /* ignore */
  }
}

/** Rotaciona um array a partir do índice `head`. */
export function rotateFrom<T>(arr: T[], head: number): T[] {
  if (arr.length === 0) return arr;
  const h = ((head % arr.length) + arr.length) % arr.length;
  return [...arr.slice(h), ...arr.slice(0, h)];
}
