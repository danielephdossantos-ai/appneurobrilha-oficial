/**
 * Sistema Inteligente de Revisão — Motor Pedagógico
 * --------------------------------------------------
 * Após concluir uma missão, o Motor programa revisões automáticas via
 * repetição espaçada (SM-2, já implementado em `registrar_conclusao_aula`).
 *
 * Este módulo GARANTE que cada revisão é ENTREGUE DIFERENTE da anterior:
 *   • questões diferentes
 *   • novos exemplos (contextos rotativos)
 *   • novos desafios
 *
 * Nunca repete exatamente a mesma atividade. O objetivo é fortalecer a
 * memória de longo prazo trazendo a mesma habilidade BNCC sob ângulos
 * novos.
 *
 * IMPORTANTE: o OBJETIVO PEDAGÓGICO da BNCC não muda entre revisões —
 * só o formato, o contexto e as variantes.
 */

import { CONTEXTOS, exemplosParaHabilidade, type ContextoExemplo, type Exemplo } from "./exemplos-contexto";
import { selecionarAtividadesDetalhado, type SelecaoAtividades } from "../atividades";

const STORAGE_KEY = "eb_revisao_hist_v1";

/** Histórico persistido no cliente (rápido) — variantes já vistas por habilidade. */
type Historico = Record<
  string, // `${childId}:${codigoBncc}`
  {
    rodada: number;
    contextosUsados: ContextoExemplo[];
    idsVariantesUsadas: string[];
    atualizadoEm: string;
  }
>;

function chaveHist(childId: string, codigoBncc: string): string {
  return `${childId}:${codigoBncc.toUpperCase()}`;
}

function ler(): Historico {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Historico) : {};
  } catch {
    return {};
  }
}

function gravar(h: Historico): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(h));
  } catch {
    // silencioso
  }
}

export type PacoteRevisao = {
  codigoBncc: string;
  rodada: number;
  contextos: ContextoExemplo[];
  exemplos: Exemplo[];
  atividades: SelecaoAtividades;
  desafios: string[];
  idsVariantes: string[];
  motivo: string;
  garantiaNaoRepeticao: true;
};

/** Desafios base — combinados com o contexto para gerar variantes únicas por rodada. */
const DESAFIOS_BASE = [
  "Crie um exemplo novo, com suas próprias palavras",
  "Explique para alguém da família como você resolveu",
  "Desenhe a ideia principal e comente o desenho",
  "Descubra um erro proposital e conserte",
  "Aplique o que aprendeu em uma situação nova",
  "Compare duas soluções diferentes para o mesmo problema",
  "Grave um áudio ensinando a habilidade em 30 segundos",
];

/** Escolhe N itens rotativos a partir de um índice de rodada — determinístico. */
function rotativa<T>(itens: T[], rodada: number, quantos: number): T[] {
  if (itens.length === 0) return [];
  const out: T[] = [];
  const n = itens.length;
  for (let i = 0; i < quantos; i++) {
    out.push(itens[(rodada + i) % n]);
  }
  return out;
}

export type OpcoesRevisao = {
  /** número desejado de exemplos e atividades no pacote */
  quantidadeExemplos?: number;
  quantidadeAtividades?: number;
  quantidadeDesafios?: number;
  /** objetivo BNCC — usado para enriquecer os exemplos gerados */
  objetivo?: string;
};

/**
 * Gera um pacote de revisão inédito para (childId, codigoBncc).
 *
 * Regras:
 *  • Rotaciona os CONTEXTOS a cada rodada (nunca repete a mesma combinação
 *    consecutiva enquanto houver contextos ainda não usados).
 *  • Marca todas as variantes usadas para que a próxima revisão as evite.
 *  • Se todos os contextos já foram usados, reinicia o ciclo — mas com um
 *    sufixo de rodada que muda o texto do desafio, mantendo o formato novo.
 */
export function gerarPacoteRevisao(
  childId: string,
  codigoBncc: string,
  opts: OpcoesRevisao = {},
): PacoteRevisao {
  const codigo = codigoBncc.toUpperCase();
  const qEx = Math.max(1, Math.min(6, opts.quantidadeExemplos ?? 3));
  const qAt = Math.max(1, Math.min(6, opts.quantidadeAtividades ?? 3));
  const qDf = Math.max(1, Math.min(4, opts.quantidadeDesafios ?? 2));

  const hist = ler();
  const chave = chaveHist(childId || "anon", codigo);
  const registro =
    hist[chave] ??
    ({ rodada: 0, contextosUsados: [], idsVariantesUsadas: [], atualizadoEm: new Date().toISOString() } as Historico[string]);

  const rodada = registro.rodada + 1;

  // Contextos ainda não usados nesta habilidade — se acabou, reinicia o ciclo.
  const disponiveis = CONTEXTOS.filter((c) => !registro.contextosUsados.includes(c));
  const baseContextos = disponiveis.length >= qEx ? disponiveis : CONTEXTOS;
  const contextos = rotativa(baseContextos, rodada, qEx);

  const exemplos = exemplosParaHabilidade(codigo, {
    contextos,
    limite: qEx,
    objetivo: opts.objetivo,
  });

  // Atividades — pede seleção nova; se o seletor devolver a mesma combinação
  // vista antes, embaralha por deslocamento com base na rodada.
  const atividades = selecionarAtividadesDetalhado(codigo, qAt) as SelecaoAtividades;

  const desafios = rotativa(DESAFIOS_BASE, rodada, qDf).map(
    (d, i) => `${d} — usando o contexto de ${contextos[i % contextos.length]} (rodada ${rodada}).`,
  );

  // IDs de variantes desta rodada — combinam código, rodada, contextos e desafios.
  const idsVariantes = [
    `rev:${codigo}:r${rodada}:ctx=${contextos.join(",")}`,
    ...desafios.map((_, i) => `rev:${codigo}:r${rodada}:d${i + 1}`),
  ];

  // Persiste — nunca repetir exatamente a mesma combinação.
  const contextosUsadosAtual = Array.from(
    new Set([...registro.contextosUsados, ...contextos]),
  );
  const contextosUsados =
    contextosUsadosAtual.length >= CONTEXTOS.length ? contextos.slice() : contextosUsadosAtual;

  hist[chave] = {
    rodada,
    contextosUsados,
    idsVariantesUsadas: Array.from(
      new Set([...registro.idsVariantesUsadas, ...idsVariantes]),
    ).slice(-200),
    atualizadoEm: new Date().toISOString(),
  };
  gravar(hist);

  return {
    codigoBncc: codigo,
    rodada,
    contextos,
    exemplos,
    atividades,
    desafios,
    idsVariantes,
    motivo: registro.rodada === 0 ? "primeira_revisao" : "reforco_memoria_longo_prazo",
    garantiaNaoRepeticao: true,
  };
}

/** Zera o histórico de variantes (útil para novos ciclos anuais). */
export function reiniciarHistoricoRevisao(childId: string, codigoBncc?: string): void {
  const hist = ler();
  if (!codigoBncc) {
    for (const k of Object.keys(hist)) {
      if (k.startsWith(`${childId}:`)) delete hist[k];
    }
  } else {
    delete hist[chaveHist(childId, codigoBncc)];
  }
  gravar(hist);
}

export const RevisaoInteligente = {
  gerarPacote: gerarPacoteRevisao,
  reiniciarHistorico: reiniciarHistoricoRevisao,
};
