import { useCallback, useEffect, useState } from "react";
import { ETAPAS, EtapaCurricular } from "../data/etapas";

type Progresso = Record<string, number>; // etapaId -> acertos

const STORAGE_PREFIX = "alfa-progresso:";

function load(childId: string): Progresso {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_PREFIX + childId) || "{}");
  } catch {
    return {};
  }
}

export function useProgressoAlfa(childId: string) {
  const [progresso, setProgresso] = useState<Progresso>(() => load(childId));

  useEffect(() => {
    setProgresso(load(childId));
  }, [childId]);

  const persistir = useCallback(
    (next: Progresso) => {
      setProgresso(next);
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_PREFIX + childId, JSON.stringify(next));
      }
    },
    [childId],
  );

  const registrarAcerto = useCallback(
    (etapaId: string) => {
      const atual = progresso[etapaId] ?? 0;
      persistir({ ...progresso, [etapaId]: atual + 1 });
    },
    [progresso, persistir],
  );

  const etapaDesbloqueada = useCallback(
    (etapa: EtapaCurricular) => {
      if (etapa.ordem === 1) return true;
      const anterior = ETAPAS.find((e) => e.ordem === etapa.ordem - 1)!;
      return (progresso[anterior.id] ?? 0) >= anterior.alvo;
    },
    [progresso],
  );

  const etapaConcluida = useCallback(
    (etapa: EtapaCurricular) => (progresso[etapa.id] ?? 0) >= etapa.alvo,
    [progresso],
  );

  return { progresso, registrarAcerto, etapaDesbloqueada, etapaConcluida };
}
