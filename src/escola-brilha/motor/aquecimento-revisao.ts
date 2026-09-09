/**
 * Aquecimento — Revisão Espaçada no início da aula
 * ------------------------------------------------
 * Antes do Momento 1, a criança responde 3 itens vindos de aulas ANTERIORES
 * da mesma trilha (curso). A escolha segue a curva do esquecimento:
 *
 *   • 1 item da aula imediatamente anterior   (memória recente)
 *   • 1 item de ~3 aulas atrás                (consolidação)
 *   • 1 item de ~7 aulas atrás                (longo prazo)
 *
 * Se não houver histórico suficiente, completa com as aulas anteriores mais
 * próximas disponíveis. Na primeira aula do curso não há aquecimento.
 *
 * Itens ERRADOS voltam com prioridade na próxima aula (reforço dirigido) e só
 * saem da fila depois de 2 acertos — SM-2 simplificado no cliente.
 */

import { getCursoAny } from "../curso-v4/registry";

export type ItemAquecimento = {
  /** id estável: `${aulaSlug}#${indice}` */
  id: string;
  aulaSlug: string;
  aulaTitulo: string;
  /** quantas aulas atrás essa pergunta apareceu */
  distancia: number;
  pergunta: string;
  opcoes: string[];
  correta: number;
  feedbackAcerto: string;
  feedbackErro: string;
  /** true quando o item voltou porque a criança errou antes */
  reforco: boolean;
};

const STORAGE_KEY = "eb_aquecimento_v1";

type Estado = {
  /** id do item → acertos consecutivos pendentes (0 ou 1). Presente = ainda em reforço. */
  pendentes: Record<string, number>;
  /** aulaSlug → índice de rotação da última pergunta usada */
  rotacao: Record<string, number>;
};

function ler(): Estado {
  if (typeof window === "undefined") return { pendentes: {}, rotacao: {} };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const p = raw ? (JSON.parse(raw) as Partial<Estado>) : {};
    return { pendentes: p.pendentes ?? {}, rotacao: p.rotacao ?? {} };
  } catch {
    return { pendentes: {}, rotacao: {} };
  }
}

function gravar(e: Estado): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(e));
  } catch {
    /* silencioso */
  }
}

type PerguntaBruta = {
  pergunta?: string;
  opcoes?: string[];
  correta?: number;
  feedbackAcerto?: string;
  feedbackErro?: string;
};

type AulaBruta = {
  slug: string;
  titulo: string;
  momento10_avaliacao?: { perguntas?: PerguntaBruta[] };
  momento09_revisao?: { miniDesafio?: PerguntaBruta };
};

/** Lista, em ordem, todas as aulas de um curso (qualquer tipo). */
function aulasDoCurso(cursoSlug: string): AulaBruta[] {
  const curso = getCursoAny(cursoSlug) as unknown as
    | { unidades?: Array<{ aulas?: AulaBruta[] }> }
    | undefined;
  if (!curso?.unidades) return [];
  const out: AulaBruta[] = [];
  for (const u of curso.unidades) for (const a of u.aulas ?? []) out.push(a);
  return out;
}

/** Perguntas aproveitáveis de uma aula (avaliação final + mini-desafio). */
function perguntasDaAula(aula: AulaBruta): PerguntaBruta[] {
  const base = [...(aula.momento10_avaliacao?.perguntas ?? [])];
  if (aula.momento09_revisao?.miniDesafio) base.push(aula.momento09_revisao.miniDesafio);
  return base.filter(
    (p) =>
      !!p.pergunta &&
      Array.isArray(p.opcoes) &&
      p.opcoes.length >= 2 &&
      typeof p.correta === "number",
  );
}

function montarItem(
  aula: AulaBruta,
  idx: number,
  distancia: number,
  reforco: boolean,
): ItemAquecimento | null {
  const p = perguntasDaAula(aula)[idx];
  if (!p) return null;
  return {
    id: `${aula.slug}#${idx}`,
    aulaSlug: aula.slug,
    aulaTitulo: aula.titulo,
    distancia,
    // Tira numeração do tipo "3/5 — " que existe nas avaliações.
    pergunta: (p.pergunta as string).replace(/^\s*\d+\/\d+\s*[—–-]\s*/, ""),
    opcoes: p.opcoes as string[],
    correta: p.correta as number,
    feedbackAcerto: p.feedbackAcerto ?? "Isso mesmo!",
    feedbackErro: p.feedbackErro ?? "Quase! Olhe de novo com calma.",
    reforco,
  };
}

/**
 * Monta o aquecimento de 3 itens para (cursoSlug, aulaSlug).
 * Retorna [] quando é a primeira aula ou não há perguntas anteriores.
 */
export function montarAquecimento(
  cursoSlug: string,
  aulaSlug: string,
  quantos = 3,
): ItemAquecimento[] {
  const aulas = aulasDoCurso(cursoSlug);
  const idxAtual = aulas.findIndex((a) => a.slug === aulaSlug);
  if (idxAtual <= 0) return [];

  const anteriores = aulas.slice(0, idxAtual); // ordem original
  const estado = ler();
  const itens: ItemAquecimento[] = [];
  const usados = new Set<string>();
  const aulasUsadas = new Set<string>();

  // 1) Prioridade máxima: itens que a criança ERROU antes (fila de reforço).
  const pendentes = Object.keys(estado.pendentes);
  for (const id of pendentes) {
    if (itens.length >= quantos) break;
    const [slug, qi] = id.split("#");
    const aula = anteriores.find((a) => a.slug === slug);
    if (!aula || aulasUsadas.has(slug)) continue;
    const item = montarItem(aula, Number(qi), idxAtual - anteriores.indexOf(aula), true);
    if (item) {
      itens.push(item);
      usados.add(item.id);
      aulasUsadas.add(slug);
    }
  }

  // 2) Curva do esquecimento: 1 / 3 / 7 aulas atrás.
  const OFFSETS = [1, 3, 7, 2, 4, 5, 6, 8, 9, 10];
  for (const off of OFFSETS) {
    if (itens.length >= quantos) break;
    const pos = idxAtual - off;
    if (pos < 0) continue;
    const aula = anteriores[pos];
    if (!aula || aulasUsadas.has(aula.slug)) continue;
    const pool = perguntasDaAula(aula);
    if (!pool.length) continue;
    const rot = (estado.rotacao[aula.slug] ?? -1) + 1;
    const item = montarItem(aula, rot % pool.length, off, false);
    if (item && !usados.has(item.id)) {
      itens.push(item);
      usados.add(item.id);
      aulasUsadas.add(aula.slug);
      estado.rotacao[aula.slug] = rot;
    }
  }

  // 3) Fallback: qualquer aula anterior ainda não usada (da mais recente pra trás).
  for (let p = anteriores.length - 1; p >= 0 && itens.length < quantos; p--) {
    const aula = anteriores[p];
    if (aulasUsadas.has(aula.slug)) continue;
    const pool = perguntasDaAula(aula);
    if (!pool.length) continue;
    const rot = (estado.rotacao[aula.slug] ?? -1) + 1;
    const item = montarItem(aula, rot % pool.length, idxAtual - p, false);
    if (item && !usados.has(item.id)) {
      itens.push(item);
      usados.add(item.id);
      aulasUsadas.add(aula.slug);
      estado.rotacao[aula.slug] = rot;
    }
  }

  gravar(estado);
  return itens.slice(0, quantos);
}

/**
 * Registra o resultado de um item do aquecimento.
 * Erro → entra (ou continua) na fila de reforço.
 * Acerto → precisa de 2 acertos consecutivos para sair da fila.
 */
export function registrarRespostaAquecimento(itemId: string, acertou: boolean): void {
  const estado = ler();
  if (!acertou) {
    estado.pendentes[itemId] = 0;
  } else if (itemId in estado.pendentes) {
    const n = (estado.pendentes[itemId] ?? 0) + 1;
    if (n >= 2) delete estado.pendentes[itemId];
    else estado.pendentes[itemId] = n;
  }
  gravar(estado);
}

/** Limpa a fila de reforço (novo ciclo/ano). */
export function reiniciarAquecimento(): void {
  gravar({ pendentes: {}, rotacao: {} });
}
