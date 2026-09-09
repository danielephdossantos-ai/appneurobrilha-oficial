/**
 * Ensino personalizado — analisa continuamente o desempenho da criança
 * dentro da aula pra decidir se avança, retoma ou dispara intervenção
 * adaptativa. Cada criança aprende no próprio ritmo — não existe
 * progressão fixa.
 *
 * Sinais coletados por questão:
 *   - acerto (bool)
 *   - tempo de resposta (ms)
 *   - tentativas na mesma questão
 *   - nível de dificuldade (facil | medio | dificil | livre)
 *
 * Regras de dificuldade (qualquer uma dispara intervenção):
 *   - 2 erros consecutivos
 *   - 3+ tentativas numa mesma questão sem acertar
 *   - tempo médio > 30s por questão nas últimas 3 respostas
 */
import { useRef, useState, useCallback } from "react";

export type Dificuldade = "facil" | "medio" | "dificil" | "livre";

export type EventoResposta = {
  bloco: string;               // ex: "exercicios:facil"
  correta: boolean;
  tempoMs: number;
  tentativas: number;
  dificuldade: Dificuldade;
  em: string;                  // ISO
};

export type Metricas = {
  eventos: EventoResposta[];
  acertosSeguidos: number;
  errosSeguidos: number;
  tempoMedioMs: number;
  totalRespostas: number;
  totalAcertos: number;
  totalErros: number;
};

const VAZIO: Metricas = {
  eventos: [],
  acertosSeguidos: 0,
  errosSeguidos: 0,
  tempoMedioMs: 0,
  totalRespostas: 0,
  totalAcertos: 0,
  totalErros: 0,
};

function chave(childId: string | undefined, codigo: string) {
  return `eb:metrics:${childId ?? "anon"}:${codigo}`;
}

function ler(childId: string | undefined, codigo: string): Metricas {
  try {
    const raw = localStorage.getItem(chave(childId, codigo));
    if (!raw) return VAZIO;
    return { ...VAZIO, ...JSON.parse(raw) };
  } catch {
    return VAZIO;
  }
}

function gravar(childId: string | undefined, codigo: string, m: Metricas) {
  try {
    localStorage.setItem(chave(childId, codigo), JSON.stringify(m));
  } catch {
    /* silencioso */
  }
}

export function precisaIntervir(m: Metricas): { intervir: boolean; motivo?: string } {
  if (m.errosSeguidos >= 2) {
    return { intervir: true, motivo: "erros_seguidos" };
  }
  const ultimas = m.eventos.slice(-3);
  if (ultimas.length === 3) {
    const media = ultimas.reduce((s, e) => s + e.tempoMs, 0) / 3;
    if (media > 30_000) return { intervir: true, motivo: "tempo_alto" };
    if (ultimas.some((e) => e.tentativas >= 3 && !e.correta)) {
      return { intervir: true, motivo: "muitas_tentativas" };
    }
  }
  return { intervir: false };
}

export function useMetricasAula(childId: string | undefined, codigo: string) {
  const [m, setM] = useState<Metricas>(() => ler(childId, codigo));
  const inicioRef = useRef<number>(Date.now());
  const tentativasRef = useRef<number>(0);

  const marcarInicioQuestao = useCallback(() => {
    inicioRef.current = Date.now();
    tentativasRef.current = 0;
  }, []);

  const registrarTentativa = useCallback(() => {
    tentativasRef.current += 1;
  }, []);

  const registrarResposta = useCallback(
    (params: { bloco: string; correta: boolean; dificuldade: Dificuldade }) => {
      const tempoMs = Date.now() - inicioRef.current;
      const evento: EventoResposta = {
        ...params,
        tempoMs,
        tentativas: Math.max(1, tentativasRef.current + 1),
        em: new Date().toISOString(),
      };
      setM((prev) => {
        const eventos = [...prev.eventos, evento].slice(-40);
        const acertosSeguidos = evento.correta ? prev.acertosSeguidos + 1 : 0;
        const errosSeguidos = evento.correta ? 0 : prev.errosSeguidos + 1;
        const totalRespostas = prev.totalRespostas + 1;
        const totalAcertos = prev.totalAcertos + (evento.correta ? 1 : 0);
        const totalErros = prev.totalErros + (evento.correta ? 0 : 1);
        const somaTempo = eventos.reduce((s, e) => s + e.tempoMs, 0);
        const nova: Metricas = {
          eventos,
          acertosSeguidos,
          errosSeguidos,
          tempoMedioMs: Math.round(somaTempo / eventos.length),
          totalRespostas,
          totalAcertos,
          totalErros,
        };
        gravar(childId, codigo, nova);
        return nova;
      });
      return evento;
    },
    [childId, codigo],
  );

  const zerarSequencia = useCallback(() => {
    setM((prev) => {
      const nova = { ...prev, errosSeguidos: 0, acertosSeguidos: 0 };
      gravar(childId, codigo, nova);
      return nova;
    });
  }, [childId, codigo]);

  return {
    metricas: m,
    marcarInicioQuestao,
    registrarTentativa,
    registrarResposta,
    zerarSequencia,
  };
}
