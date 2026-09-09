import { useCallback, useEffect, useRef, useState } from "react";
import { loadSkillState } from "@/services/neuro-treino/neuroMetrics";
import {
  computeMastery,
  type PromptLevel,
  type PromptState,
  PROMPT_LABELS,
  PROMPT_HINTS,
} from "@/services/neuro-treino/promptingEngine";

const DEFAULT: PromptState = { level: 4, consecCorrect: 0, indepSessions: [] };

/**
 * Estado de prompting ABA por habilidade. Carrega do banco no mount e
 * mantém localmente. O `recordSkillAttempt` do neuroMetrics já persiste
 * atualizações; este hook expõe leitura + `applyLocal` para reflexo imediato
 * na UI antes do round-trip.
 */
export function useAbaPrompting(childId: string | undefined, skillCode: string | undefined) {
  const [state, setState] = useState<PromptState>(DEFAULT);
  const [loading, setLoading] = useState(true);
  const key = `${childId ?? ""}::${skillCode ?? ""}`;
  const keyRef = useRef<string>("");

  useEffect(() => {
    if (!childId || !skillCode) {
      setState(DEFAULT);
      setLoading(false);
      return;
    }
    if (keyRef.current === key) return;
    keyRef.current = key;
    setLoading(true);
    (async () => {
      const row = await loadSkillState(childId, skillCode);
      setState({
        level: ((row?.prompt_level as PromptLevel) ?? 4) as PromptLevel,
        consecCorrect: row?.consec_correct ?? 0,
        indepSessions: row?.indep_sessions ?? [],
      });
      setLoading(false);
    })();
  }, [childId, skillCode, key]);

  const applyLocal = useCallback((next: PromptState | null) => {
    if (next) setState(next);
  }, []);

  return {
    state,
    level: state.level,
    label: PROMPT_LABELS[state.level],
    hint: PROMPT_HINTS[state.level],
    mastery: computeMastery(state),
    loading,
    applyLocal,
  };
}
