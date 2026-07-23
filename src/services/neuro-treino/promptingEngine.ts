// Engine puro de hierarquia ABA de prompting (com fading).
// 4 níveis: 1=físico, 2=gestual, 3=verbal, 4=independente.
// Regra: 3 acertos seguidos → sobe um nível (menos ajuda). 1 erro → desce um nível (mais ajuda).
// Mastery: 8/10 no nível 4 em 3 sessões consecutivas.

export type PromptLevel = 1 | 2 | 3 | 4;

export const PROMPT_LABELS: Record<PromptLevel, string> = {
  1: "Físico",
  2: "Gestual",
  3: "Verbal",
  4: "Independente",
};

export const PROMPT_HINTS: Record<PromptLevel, string> = {
  1: "Toque junto com a criança (ajuda física completa).",
  2: "Aponte para a resposta (dica gestual).",
  3: "Fale a resposta em voz alta (dica verbal).",
  4: "Sem dica — a criança resolve sozinha.",
};

export interface PromptState {
  level: PromptLevel;
  consecCorrect: number;
  indepSessions: { hits: number; total: number; at: string }[];
}

export function nextPromptState(prev: PromptState, isCorrect: boolean): PromptState {
  const currentConsec = isCorrect ? prev.consecCorrect + 1 : 0;
  let level: PromptLevel = prev.level;

  if (!isCorrect && prev.level > 1) {
    level = (prev.level - 1) as PromptLevel;
  } else if (isCorrect && currentConsec >= 3 && prev.level < 4) {
    level = (prev.level + 1) as PromptLevel;
  }

  const consecCorrect = level !== prev.level ? 0 : currentConsec;
  return { level, consecCorrect, indepSessions: prev.indepSessions };
}

export interface MasteryStatus {
  achieved: boolean;
  qualifyingSessions: number; // out of 3
  detail: string;
}

/**
 * Mastery: 8/10 no nível 4 em 3 sessões consecutivas.
 * Uma "sessão" aqui é registrada por dia calendário no vetor indepSessions.
 */
export function computeMastery(state: PromptState): MasteryStatus {
  if (state.level < 4) {
    return {
      achieved: false,
      qualifyingSessions: 0,
      detail: `Ainda no nível ${PROMPT_LABELS[state.level]}`,
    };
  }
  const last3 = state.indepSessions.slice(-3);
  const qualifying = last3.filter((s) => s.total >= 10 && s.hits / s.total >= 0.8).length;
  return {
    achieved: qualifying >= 3 && last3.length >= 3,
    qualifyingSessions: qualifying,
    detail:
      qualifying >= 3
        ? "Habilidade dominada — pronto para avançar."
        : `${qualifying}/3 sessões independentes ≥ 80%`,
  };
}

/**
 * Registra o resultado no vetor indepSessions. Se hoje já existe, acumula.
 */
export function recordIndependentAttempt(
  sessions: PromptState["indepSessions"],
  isCorrect: boolean,
): PromptState["indepSessions"] {
  const today = new Date().toISOString().slice(0, 10);
  const copy = [...sessions];
  const idx = copy.findIndex((s) => s.at.slice(0, 10) === today);
  if (idx >= 0) {
    copy[idx] = {
      ...copy[idx],
      hits: copy[idx].hits + (isCorrect ? 1 : 0),
      total: copy[idx].total + 1,
    };
  } else {
    copy.push({ hits: isCorrect ? 1 : 0, total: 1, at: new Date().toISOString() });
  }
  // manter só as últimas 6 sessões para não crescer sem limite
  return copy.slice(-6);
}
