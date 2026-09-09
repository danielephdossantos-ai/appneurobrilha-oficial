// Revisão espaçada leve (Fase F).
// Mantém janela rolante das últimas palavras usadas por sessão/childId para
// evitar previsibilidade e reintroduzir palavras já treinadas.
//
// Não é um algoritmo Anki: é um filtro anti-repetição que sempre garante que
// haja pool suficiente. Persistência apenas em memória (sessão) — a intenção
// é reduzir monotonia, não sobrepor a progressão pedagógica.

const JANELA = 8; // palavras evitadas
const MINIMO_POOL = 3; // se restar menos, aceita repetição

const usadasPorCrianca = new Map<string, string[]>();
let childAtual = "default";

export function setChildAtualSRS(id: string) {
  childAtual = id || "default";
  if (!usadasPorCrianca.has(childAtual)) usadasPorCrianca.set(childAtual, []);
}

export function marcarUsada(palavra: string) {
  const arr = usadasPorCrianca.get(childAtual) ?? [];
  const novo = [palavra, ...arr.filter((p) => p !== palavra)].slice(0, JANELA);
  usadasPorCrianca.set(childAtual, novo);
}

export function filtrarComSRS<T extends { palavra: string }>(pool: T[]): T[] {
  const usadas = new Set(usadasPorCrianca.get(childAtual) ?? []);
  const fresco = pool.filter((p) => !usadas.has(p.palavra));
  return fresco.length >= MINIMO_POOL ? fresco : pool;
}
