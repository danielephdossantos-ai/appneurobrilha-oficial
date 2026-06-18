/**
 * Recompensas Educativas
 * Sistema que valoriza ESFORÇO, EVOLUÇÃO e PERSISTÊNCIA — não só acertos.
 *
 * Filosofia:
 *  - Acertar é só um dos sinais. Tentar de novo após errar vale ouro.
 *  - Evoluir em relação a si mesmo importa mais que comparar com outras crianças.
 *  - Voltar todo dia, mesmo errando, é o que constrói aprendizagem.
 *
 * Saída: lista de recompensas (xp, badges, mensagens) calculadas a partir
 * da sessão atual e do histórico recente.
 */

export interface RodadaResultado {
  acertou: boolean;
  tentativas: number;       // quantas tentativas até concluir a rodada (≥1)
  tempoSegundos: number;    // tempo gasto na rodada
  desistiu?: boolean;       // pulou/abandonou antes do fim
}

export interface SessaoResumo {
  rodadas: RodadaResultado[];
  precisaoAnterior?: number;   // 0..1 — média histórica antes desta sessão
  diasConsecutivos?: number;   // streak atual de dias praticando
}

export type TipoRecompensa =
  | "esforco"       // tentou de novo após errar
  | "evolucao"      // melhorou em relação a si mesmo
  | "persistencia"  // streak / não desistiu
  | "conclusao"    // terminou a sessão completa
  | "acerto";       // recompensa tradicional (peso menor)

export interface Recompensa {
  tipo: TipoRecompensa;
  xp: number;
  badge?: string;        // chave de badge desbloqueada (opcional)
  mensagem: string;      // feedback positivo p/ criança
}

// Pesos calibrados para que ESFORÇO + EVOLUÇÃO + PERSISTÊNCIA somem mais que ACERTO puro
const XP = {
  acerto: 5,
  tentativaExtra: 8,      // por tentativa extra após errar (cap)
  conclusao: 15,
  evolucaoLeve: 20,       // +5pp de precisão vs histórico
  evolucaoForte: 35,      // +15pp de precisão vs histórico
  streak3: 25,
  streak7: 60,
  sessaoSemDesistencia: 20,
} as const;

const CAP_TENTATIVAS_EXTRAS = 3;

/**
 * Calcula recompensas a partir da sessão atual.
 * NUNCA retorna lista vazia — sempre há algo a valorizar.
 */
export function calcularRecompensas(sessao: SessaoResumo): Recompensa[] {
  const out: Recompensa[] = [];
  const total = sessao.rodadas.length;
  if (total === 0) return out;

  const acertos = sessao.rodadas.filter((r) => r.acertou).length;
  const precisaoAtual = acertos / total;
  const tentativasExtras = sessao.rodadas.reduce(
    (s, r) => s + Math.max(0, Math.min(CAP_TENTATIVAS_EXTRAS, r.tentativas - 1)),
    0,
  );
  const desistiuAlguma = sessao.rodadas.some((r) => r.desistiu);

  // 1) ESFORÇO — recompensa por persistir após errar
  if (tentativasExtras > 0) {
    out.push({
      tipo: "esforco",
      xp: tentativasExtras * XP.tentativaExtra,
      mensagem: `Você tentou de novo ${tentativasExtras}x — isso é coragem!`,
    });
  }

  // 2) EVOLUÇÃO — comparado ao próprio histórico
  if (typeof sessao.precisaoAnterior === "number") {
    const delta = precisaoAtual - sessao.precisaoAnterior;
    if (delta >= 0.15) {
      out.push({
        tipo: "evolucao",
        xp: XP.evolucaoForte,
        badge: "evolucao-forte",
        mensagem: "Você melhorou MUITO em relação à última vez!",
      });
    } else if (delta >= 0.05) {
      out.push({
        tipo: "evolucao",
        xp: XP.evolucaoLeve,
        mensagem: "Você está melhorando — continua assim!",
      });
    }
  }

  // 3) PERSISTÊNCIA — streak de dias
  const dias = sessao.diasConsecutivos ?? 0;
  if (dias >= 7) {
    out.push({
      tipo: "persistencia",
      xp: XP.streak7,
      badge: "streak-7",
      mensagem: `${dias} dias seguidos! Você é incrível.`,
    });
  } else if (dias >= 3) {
    out.push({
      tipo: "persistencia",
      xp: XP.streak3,
      badge: "streak-3",
      mensagem: `${dias} dias seguidos praticando — mandou bem!`,
    });
  }

  // 4) CONCLUSÃO — terminou sem desistir
  if (!desistiuAlguma) {
    out.push({
      tipo: "conclusao",
      xp: XP.conclusao + XP.sessaoSemDesistencia,
      mensagem: "Você foi até o fim — orgulho!",
    });
  } else {
    // Mesmo desistindo, valoriza o que foi feito
    out.push({
      tipo: "conclusao",
      xp: Math.round(XP.conclusao / 2),
      mensagem: "Você tentou, e isso já vale muito.",
    });
  }

  // 5) ACERTOS — peso menor, só compõe o total
  if (acertos > 0) {
    out.push({
      tipo: "acerto",
      xp: acertos * XP.acerto,
      mensagem: `${acertos} resposta${acertos > 1 ? "s certas" : " certa"}!`,
    });
  }

  return out;
}

/** Soma o XP total de uma lista de recompensas. */
export function totalXP(recompensas: Recompensa[]): number {
  return recompensas.reduce((s, r) => s + r.xp, 0);
}

/** Lista das badges desbloqueadas (sem duplicatas). */
export function badgesGanhas(recompensas: Recompensa[]): string[] {
  return Array.from(new Set(recompensas.map((r) => r.badge).filter(Boolean) as string[]));
}
