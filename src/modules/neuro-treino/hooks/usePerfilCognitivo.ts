import { useCallback, useMemo } from "react";
import { useCognitiveMemory } from "./useCognitiveMemory";
import { cognitiveEngine, ActivityOutcome } from "../engine/CognitiveEngine";
import { CognitiveMetrics, CognitiveProfile } from "../types";

const METRICAS_BASE: CognitiveMetrics = {
  attention: 50,
  selfRegulation: 50,
  autonomy: 50,
  language: 50,
  memory: 50,
  coordination: 50,
  reading: 50,
  math: 50,
};

const PERFIL_BASE: CognitiveProfile = {
  child_id: "",
  frequent_errors: [],
  mastered_skills: [],
  fragile_skills: [],
  avg_focus_time: 0,
  preferred_stimuli: [],
  sensory_difficulty_level: 1,
  emotional_behavior_patterns: {},
  avg_response_speed: 0,
  pedagogical_evolution_score: 0,
};

/**
 * Perfil cognitivo individual por criança.
 * Atualiza automaticamente atenção, memória, linguagem, raciocínio
 * e funções executivas após cada atividade registrada.
 */
export function usePerfilCognitivo(childId?: string) {
  const { profile, history, recordScores, updateProfile, isLoadingProfile } =
    useCognitiveMemory(childId);

  const perfil: CognitiveProfile = useMemo(
    () => ({ ...PERFIL_BASE, ...(profile ?? {}), child_id: childId ?? "" }),
    [profile, childId],
  );

  const ultimaMetrica = useMemo<CognitiveMetrics>(() => {
    const last = history[history.length - 1];
    if (!last) return METRICAS_BASE;
    return {
      attention: last.attention_score,
      selfRegulation: last.self_regulation_score,
      autonomy: last.autonomy_score,
      language: last.language_score,
      memory: last.memory_score,
      coordination: last.coordination_score,
      reading: last.reading_score,
      math: last.math_score,
    };
  }, [history]);

  const niveis = useMemo(
    () => ({
      atencao: ultimaMetrica.attention,
      memoria: ultimaMetrica.memory,
      linguagem: ultimaMetrica.language,
      // Raciocínio: composto por memória + matemática + leitura
      raciocinio: Math.round(
        (ultimaMetrica.memory + ultimaMetrica.math + ultimaMetrica.reading) / 3,
      ),
      // Funções executivas: autorregulação + autonomia + atenção
      funcoesExecutivas: Math.round(
        (ultimaMetrica.selfRegulation + ultimaMetrica.autonomy + ultimaMetrica.attention) / 3,
      ),
    }),
    [ultimaMetrica],
  );

  const registrarAtividade = useCallback(
    async (outcome: ActivityOutcome) => {
      if (!childId) return;

      // 1. Recalcula métricas longitudinais
      const novasMetricas = cognitiveEngine.calculateNewScores(ultimaMetrica, [outcome]);

      // 2. Atualiza traços persistentes do perfil
      const updatesPerfil = cognitiveEngine.processProfileUpdate(perfil, [outcome]);

      await Promise.all([
        recordScores(novasMetricas),
        updateProfile({
          ...updatesPerfil,
          pedagogical_evolution_score: Math.round(
            (novasMetricas.attention +
              novasMetricas.memory +
              novasMetricas.language +
              novasMetricas.reading +
              novasMetricas.math) /
              5,
          ),
        }),
      ]);
    },
    [childId, perfil, ultimaMetrica, recordScores, updateProfile],
  );

  return {
    perfil,
    metricas: ultimaMetrica,
    niveis,
    historico: history,
    isLoading: isLoadingProfile,
    registrarAtividade,
  };
}
