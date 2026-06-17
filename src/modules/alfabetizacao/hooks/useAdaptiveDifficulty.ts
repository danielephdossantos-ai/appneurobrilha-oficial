// Adaptação automática de dificuldade por criança.
// - Janela móvel das últimas N respostas (padrão 6).
// - Sequência de acertos para subir, sequência de erros para descer.
// - Persistente por childId no localStorage.

import { useCallback, useEffect, useRef, useState } from "react";

export type Dificuldade = 1 | 2 | 3;

interface Estado {
  nivel: Dificuldade;
  streakOk: number;
  streakErr: number;
  ultimas: boolean[]; // true = acerto
}

const STORAGE = "alfa-dificuldade:";
const JANELA = 6;
const SUBIR_APOS = 4; // 4 acertos seguidos
const DESCER_APOS = 3; // 3 erros em janela curta
const REL_ERRO_PCT = 0.6; // ou >60% de erros na janela

function estadoInicial(): Estado {
  return { nivel: 1, streakOk: 0, streakErr: 0, ultimas: [] };
}

function load(childId: string): Estado {
  if (typeof window === "undefined") return estadoInicial();
  try {
    const raw = localStorage.getItem(STORAGE + childId);
    if (!raw) return estadoInicial();
    const v = JSON.parse(raw);
    return { ...estadoInicial(), ...v };
  } catch {
    return estadoInicial();
  }
}

export function useAdaptiveDifficulty(childId: string) {
  const [estado, setEstado] = useState<Estado>(() => load(childId));
  const ref = useRef(estado);
  ref.current = estado;

  useEffect(() => {
    setEstado(load(childId));
  }, [childId]);

  const persistir = useCallback(
    (next: Estado) => {
      ref.current = next;
      setEstado(next);
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE + childId, JSON.stringify(next));
      }
    },
    [childId],
  );

  const registrar = useCallback(
    (acerto: boolean) => {
      const atual = ref.current;
      const ultimas = [...atual.ultimas, acerto].slice(-JANELA);
      let nivel = atual.nivel;
      let streakOk = acerto ? atual.streakOk + 1 : 0;
      let streakErr = acerto ? 0 : atual.streakErr + 1;

      // Subir
      if (streakOk >= SUBIR_APOS && nivel < 3) {
        nivel = (nivel + 1) as Dificuldade;
        streakOk = 0;
      }
      // Descer (erros seguidos OU taxa alta de erro na janela)
      const taxaErro =
        ultimas.length >= 4
          ? ultimas.filter((x) => !x).length / ultimas.length
          : 0;
      if ((streakErr >= DESCER_APOS || taxaErro >= REL_ERRO_PCT) && nivel > 1) {
        nivel = (nivel - 1) as Dificuldade;
        streakErr = 0;
      }

      persistir({ nivel, streakOk, streakErr, ultimas });
      return nivel;
    },
    [persistir],
  );

  const resetar = useCallback(() => persistir(estadoInicial()), [persistir]);

  return {
    nivel: estado.nivel,
    streakOk: estado.streakOk,
    streakErr: estado.streakErr,
    registrar,
    resetar,
  };
}
