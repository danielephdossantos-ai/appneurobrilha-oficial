/**
 * Fase 1 do Contrato Português 1º ano — Motor adaptativo real no player.
 *
 * Responsabilidades:
 *  - registrar acerto/erro, tempo de resposta e nº de tentativas por questão,
 *    identificando o momento (m5, m6, m8, m9, m10...);
 *  - calcular o desempenho da AVALIAÇÃO (m10) e exigir >= 70% para concluir;
 *  - ligar nos motores já existentes (`useMetricasAula` / `precisaIntervir`)
 *    em vez de criar motor novo.
 *
 * O componente que responde (QuizTexto) só chama `registrar(...)`.
 */
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useMetricasAula, precisaIntervir } from "@/escola-brilha/player/personalizacao";

export const NOTA_MINIMA = 0.7;

export type RegistroQuestao = {
  id: string;
  momento: string;
  correta: boolean;
  tempoMs: number;
  tentativas: number;
};

type Ctx = {
  ativo: boolean;
  registrar: (r: RegistroQuestao) => void;
  registros: Record<string, RegistroQuestao>;
  /** Total de questões da avaliação declarado pelo player. */
  declararAvaliacao: (total: number) => void;
  totalAvaliacao: number;
  respondidasAvaliacao: number;
  acertosAvaliacao: number;
  /** 0..1 — proporção de acertos entre as questões já respondidas do m10. */
  notaAvaliacao: number;
  aprovado: boolean;
  /** Sinal do motor adaptativo: criança precisa de apoio agora. */
  intervir: boolean;
  motivoIntervencao?: string;
  reiniciarAvaliacao: () => void;
  /** Muda a cada reset — usado como `key` para remontar os quizzes. */
  tentativaAvaliacao: number;
};

const AdaptativoCtx = createContext<Ctx | null>(null);

export function useAdaptativo() {
  return useContext(AdaptativoCtx);
}

export function AdaptativoProvider({
  aulaSlug,
  childId,
  children,
}: {
  aulaSlug: string;
  childId?: string;
  children: React.ReactNode;
}) {
  const motor = useMetricasAula(childId, aulaSlug);
  const [registros, setRegistros] = useState<Record<string, RegistroQuestao>>({});
  const [totalAvaliacao, setTotalAvaliacao] = useState(0);
  const [tentativaAvaliacao, setTentativaAvaliacao] = useState(0);

  const declararAvaliacao = useCallback((total: number) => {
    setTotalAvaliacao((prev) => (prev === total ? prev : total));
  }, []);

  const registrar = useCallback(
    (r: RegistroQuestao) => {
      setRegistros((prev) => ({ ...prev, [r.id]: r }));
      // Alimenta o motor já existente (streaks, tempo médio, intervenção).
      motor.registrarResposta({
        bloco: r.momento,
        correta: r.correta,
        dificuldade: r.momento === "m10" ? "dificil" : "medio",
      });
    },
    [motor],
  );

  const reiniciarAvaliacao = useCallback(() => {
    setRegistros((prev) => {
      const novo: Record<string, RegistroQuestao> = {};
      for (const [k, v] of Object.entries(prev)) if (v.momento !== "m10") novo[k] = v;
      return novo;
    });
    motor.zerarSequencia();
    setTentativaAvaliacao((n) => n + 1);
  }, [motor]);

  const value = useMemo<Ctx>(() => {
    const daAvaliacao = Object.values(registros).filter((r) => r.momento === "m10");
    const acertos = daAvaliacao.filter((r) => r.correta).length;
    const base = Math.max(totalAvaliacao, daAvaliacao.length, 1);
    const nota = acertos / base;
    const sinal = precisaIntervir(motor.metricas);
    return {
      ativo: true,
      registrar,
      registros,
      declararAvaliacao,
      totalAvaliacao,
      respondidasAvaliacao: daAvaliacao.length,
      acertosAvaliacao: acertos,
      notaAvaliacao: nota,
      aprovado: daAvaliacao.length >= totalAvaliacao && totalAvaliacao > 0 && nota >= NOTA_MINIMA,
      intervir: sinal.intervir,
      motivoIntervencao: sinal.motivo,
      reiniciarAvaliacao,
      tentativaAvaliacao,
    };
  }, [
    registros,
    totalAvaliacao,
    registrar,
    declararAvaliacao,
    reiniciarAvaliacao,
    tentativaAvaliacao,
    motor.metricas,
  ]);

  return <AdaptativoCtx.Provider value={value}>{children}</AdaptativoCtx.Provider>;
}
