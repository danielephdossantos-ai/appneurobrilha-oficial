/**
 * Trilhas de Aprendizagem Automáticas
 * Seleciona a próxima atividade com base no desempenho da criança
 * e nas habilidades ainda não dominadas (pré-requisitos atendidos).
 */
import {
  BIBLIOTECA_BNCC,
  type AtividadeBNCC,
  type CompetenciaCognitiva,
} from "../data/biblioteca-bncc";

export interface DesempenhoAtividade {
  atividadeId: string;
  acertos: number;
  tentativas: number;
  ultimaInteracao: number; // timestamp
}

export interface PerfilCrianca {
  idade: number;
  serie: string;
  desempenho: Record<string, DesempenhoAtividade>;
  competenciasFracas?: CompetenciaCognitiva[];
}

export interface TrilhaItem {
  atividade: AtividadeBNCC;
  motivo: string;
  prioridade: number; // maior = mais prioritário
}

const LIMIAR_DOMINIO = 0.8; // 80% de acerto = dominada
const MIN_TENTATIVAS = 3;

export function taxaAcerto(d?: DesempenhoAtividade): number {
  if (!d || d.tentativas === 0) return 0;
  return d.acertos / d.tentativas;
}

export function atividadeDominada(perfil: PerfilCrianca, id: string): boolean {
  const d = perfil.desempenho[id];
  if (!d || d.tentativas < MIN_TENTATIVAS) return false;
  return taxaAcerto(d) >= LIMIAR_DOMINIO;
}

export function preRequisitosAtendidos(perfil: PerfilCrianca, a: AtividadeBNCC): boolean {
  return a.preRequisitos.every((id) => atividadeDominada(perfil, id));
}

/**
 * Calcula o desempenho geral (0..1) — usado para ajustar dificuldade alvo.
 */
export function desempenhoGeral(perfil: PerfilCrianca): number {
  const arr = Object.values(perfil.desempenho);
  if (arr.length === 0) return 0.5;
  const soma = arr.reduce((s, d) => s + taxaAcerto(d), 0);
  return soma / arr.length;
}

/**
 * Dificuldade alvo dinâmica:
 * - desempenho alto (≥0.85) → +1
 * - desempenho baixo (≤0.5) → -1
 */
export function dificuldadeAlvo(perfil: PerfilCrianca, base = 2): 1 | 2 | 3 | 4 | 5 {
  const g = desempenhoGeral(perfil);
  let n = base;
  if (g >= 0.85) n = Math.min(5, base + 1);
  else if (g <= 0.5) n = Math.max(1, base - 1);
  return n as 1 | 2 | 3 | 4 | 5;
}

/**
 * Monta a trilha automática ordenada por prioridade.
 * Filtros: idade, série, pré-requisitos, não-dominada.
 * Pontuação considera: dificuldade próxima do alvo, competência fraca, novidade.
 */
export function gerarTrilhaAutomatica(perfil: PerfilCrianca, limite = 5): TrilhaItem[] {
  const alvo = dificuldadeAlvo(perfil);
  const fracas = new Set(perfil.competenciasFracas ?? []);

  const candidatos = BIBLIOTECA_BNCC.filter((a) => {
    if (perfil.idade < a.faixaEtaria.min || perfil.idade > a.faixaEtaria.max) return false;
    if (atividadeDominada(perfil, a.id)) return false;
    if (!preRequisitosAtendidos(perfil, a)) return false;
    return true;
  });

  const itens: TrilhaItem[] = candidatos.map((a) => {
    const d = perfil.desempenho[a.id];
    const distDif = Math.abs(a.nivelDificuldade - alvo); // 0 melhor
    const bonusFraca = a.competenciasCognitivas.some((c) => fracas.has(c)) ? 2 : 0;
    const bonusSerie = a.serie === perfil.serie ? 1 : 0;
    const bonusNovidade = !d ? 1 : 0;
    const penalErro = d && taxaAcerto(d) < 0.4 ? 1 : 0; // ainda errando muito → revisar antes
    const prioridade = 5 - distDif + bonusFraca + bonusSerie + bonusNovidade + penalErro;

    const motivos: string[] = [];
    if (bonusNovidade) motivos.push("nova");
    else if (penalErro) motivos.push("reforço");
    if (bonusFraca) motivos.push("competência a desenvolver");
    if (distDif === 0) motivos.push(`dificuldade ideal (${alvo})`);

    return {
      atividade: a,
      prioridade,
      motivo: motivos.join(" • ") || "progressão natural",
    };
  });

  return itens.sort((a, b) => b.prioridade - a.prioridade).slice(0, limite);
}

/**
 * Retorna a próxima atividade recomendada (ou null se nada disponível).
 */
export function proximaAtividade(perfil: PerfilCrianca): TrilhaItem | null {
  return gerarTrilhaAutomatica(perfil, 1)[0] ?? null;
}

/**
 * Registra desempenho após uma rodada.
 */
export function registrarDesempenho(
  perfil: PerfilCrianca,
  atividadeId: string,
  acertou: boolean,
): PerfilCrianca {
  const atual = perfil.desempenho[atividadeId] ?? {
    atividadeId,
    acertos: 0,
    tentativas: 0,
    ultimaInteracao: 0,
  };
  const novo: DesempenhoAtividade = {
    atividadeId,
    acertos: atual.acertos + (acertou ? 1 : 0),
    tentativas: atual.tentativas + 1,
    ultimaInteracao: Date.now(),
  };
  return { ...perfil, desempenho: { ...perfil.desempenho, [atividadeId]: novo } };
}
