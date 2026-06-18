/**
 * Metas Semanais
 * Gera objetivos realistas baseados no perfil e desempenho da criança.
 *
 * Princípios:
 *  - Não exigir além do que a criança consegue: metas dimensionadas pela
 *    média histórica + um pequeno desafio (stretch ~15-25%).
 *  - Balancear quantidade (engajamento) e qualidade (precisão).
 *  - Endereçar competências fracas com pelo menos 1 meta dedicada.
 *  - Respeitar idade/série: crianças menores recebem metas menores.
 */
import {
  type PerfilCrianca,
  type DesempenhoAtividade,
  taxaAcerto,
} from "./trilhaAutomatica";
import type { CompetenciaCognitiva } from "../data/biblioteca-bncc";

export type TipoMeta =
  | "volume"      // Nº de atividades concluídas
  | "precisao"    // % de acertos
  | "competencia" // dominar X em uma competência específica
  | "consistencia"; // dias ativos na semana

export interface MetaSemanal {
  id: string;
  tipo: TipoMeta;
  titulo: string;
  descricao: string;
  alvo: number;        // valor a alcançar (ex: 20 atividades, 75% precisão)
  unidade: string;     // "atividades" | "%" | "dias"
  competencia?: CompetenciaCognitiva;
  dificuldade: "facil" | "media" | "desafio";
}

export interface ResumoSemanal {
  atividadesPorSemana: number;       // média histórica
  precisaoMedia: number;             // 0..1
  diasAtivosUltimaSemana: number;    // 0..7
}

const ALVO_DIAS_POR_IDADE = (idade: number) => {
  if (idade <= 5) return 3;
  if (idade <= 7) return 4;
  if (idade <= 9) return 5;
  return 5;
};

const ALVO_BASE_VOLUME_POR_IDADE = (idade: number) => {
  if (idade <= 5) return 8;
  if (idade <= 7) return 14;
  if (idade <= 9) return 20;
  return 25;
};

/** Calcula resumo agregado a partir do desempenho registrado. */
export function resumirDesempenho(
  perfil: PerfilCrianca,
  diasJanela = 7,
): ResumoSemanal {
  const agora = Date.now();
  const limite = agora - diasJanela * 24 * 60 * 60 * 1000;
  const recentes: DesempenhoAtividade[] = Object.values(perfil.desempenho).filter(
    (d) => d.ultimaInteracao >= limite,
  );

  const tentativas = recentes.reduce((s, d) => s + d.tentativas, 0);
  const acertos = recentes.reduce((s, d) => s + d.acertos, 0);
  const diasUnicos = new Set(
    recentes.map((d) => new Date(d.ultimaInteracao).toDateString()),
  ).size;

  return {
    atividadesPorSemana: tentativas,
    precisaoMedia: tentativas > 0 ? acertos / tentativas : 0,
    diasAtivosUltimaSemana: diasUnicos,
  };
}

/** Aplica um “stretch” realista — 15% se vai bem, 25% se está baixo. */
function aplicarStretch(base: number, precisao: number): number {
  const fator = precisao >= 0.75 ? 1.15 : 1.25;
  return Math.max(1, Math.round(base * fator));
}

/**
 * Gera metas semanais para a criança.
 * Retorna 3-4 metas equilibradas entre volume, precisão, competência e consistência.
 */
export function gerarMetasSemanais(perfil: PerfilCrianca): MetaSemanal[] {
  const resumo = resumirDesempenho(perfil);
  const metas: MetaSemanal[] = [];

  // 1) VOLUME — quantas atividades por semana
  const baseVolume =
    resumo.atividadesPorSemana > 0
      ? resumo.atividadesPorSemana
      : ALVO_BASE_VOLUME_POR_IDADE(perfil.idade);
  const alvoVolume = aplicarStretch(baseVolume, resumo.precisaoMedia);
  metas.push({
    id: "meta-volume",
    tipo: "volume",
    titulo: "Praticar com frequência",
    descricao: `Concluir ${alvoVolume} atividades esta semana.`,
    alvo: alvoVolume,
    unidade: "atividades",
    dificuldade: alvoVolume > baseVolume * 1.2 ? "desafio" : "media",
  });

  // 2) PRECISÃO — acertar mais
  const basePrec = Math.max(0.5, resumo.precisaoMedia);
  const alvoPrec = Math.min(0.95, Math.round((basePrec + 0.05) * 100) / 100);
  metas.push({
    id: "meta-precisao",
    tipo: "precisao",
    titulo: "Acertar mais",
    descricao: `Manter ${Math.round(alvoPrec * 100)}% de acerto nas atividades.`,
    alvo: Math.round(alvoPrec * 100),
    unidade: "%",
    dificuldade: alvoPrec - resumo.precisaoMedia >= 0.1 ? "desafio" : "facil",
  });

  // 3) COMPETÊNCIA — reforçar a mais fraca
  const fraca = perfil.competenciasFracas?.[0];
  if (fraca) {
    metas.push({
      id: `meta-comp-${fraca}`,
      tipo: "competencia",
      titulo: `Treinar ${fraca.replace(/_/g, " ")}`,
      descricao: `Dominar pelo menos 2 atividades novas de ${fraca.replace(/_/g, " ")}.`,
      alvo: 2,
      unidade: "atividades",
      competencia: fraca,
      dificuldade: "media",
    });
  }

  // 4) CONSISTÊNCIA — dias ativos por semana
  const alvoDias = ALVO_DIAS_POR_IDADE(perfil.idade);
  metas.push({
    id: "meta-consistencia",
    tipo: "consistencia",
    titulo: "Manter a rotina",
    descricao: `Praticar em ${alvoDias} dias diferentes esta semana.`,
    alvo: alvoDias,
    unidade: "dias",
    dificuldade:
      resumo.diasAtivosUltimaSemana < alvoDias - 1 ? "desafio" : "facil",
  });

  return metas;
}

/**
 * Avalia progresso de uma meta dado o desempenho atual da semana.
 * Retorna progresso 0..1.
 */
export function progressoMeta(
  meta: MetaSemanal,
  resumo: ResumoSemanal,
  contagemPorCompetencia?: Record<string, number>,
): number {
  switch (meta.tipo) {
    case "volume":
      return Math.min(1, resumo.atividadesPorSemana / meta.alvo);
    case "precisao":
      return Math.min(1, (resumo.precisaoMedia * 100) / meta.alvo);
    case "consistencia":
      return Math.min(1, resumo.diasAtivosUltimaSemana / meta.alvo);
    case "competencia": {
      const c = meta.competencia
        ? contagemPorCompetencia?.[meta.competencia] ?? 0
        : 0;
      return Math.min(1, c / meta.alvo);
    }
  }
}
