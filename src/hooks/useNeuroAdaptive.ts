
import { useState, useEffect, useCallback, useMemo } from "react";
import { useAppState, Child, Diagnostico } from "@/core/store";
import { NeuroAdaptiveCore } from "@/engines/neuro-engine/core";
import { NeuroState, NeuroAdjustment, NeuroProfile } from "@/engines/neuro-engine/types";

const INITIAL_METRICS = {
  attention: {
    averageAttentionSpan: 60,
    focusScore: 1.0,
    distractionCount: 0,
    impulsivityRate: 0.1,
    hyperfocusDetected: false,
  },
  fatigue: {
    cognitiveLoad: 0.1,
    sessionDuration: 0,
    lastBreakTime: 0,
    needForBreak: false,
    fatigueLevel: 0.1,
  },
  sensory: {
    visualOverload: 0.1,
    auditorySensitivity: 0.1,
    sensoryTolerance: 1.0,
    stimulusReactivity: 0.1,
  },
  performance: {
    averageResponseTime: 5,
    accuracyRate: 1.0,
    errorFrequency: 0,
    helpRequests: 0,
  },
};

export function useNeuroAdaptive() {
  const { activeChild } = useAppState();
  const [metrics, setMetrics] = useState(INITIAL_METRICS);
  const [adjustment, setAdjustment] = useState<NeuroAdjustment | null>(null);

  // Mapear diagnóstico do DB para Perfil Neuro
  const profile = useMemo((): NeuroProfile => {
    if (!activeChild) return "Tipico";
    const diag = activeChild.diagnostico;
    const mapping: Record<Diagnostico, NeuroProfile> = {
      tea: "TEA",
      tdah: "TDAH",
      dislexia: "Dislexia",
      tod: "Tipico", // Pode ser refinado
      deficiencia_intelectual: "DeficienciaIntelectual",
      altas_habilidades: "Tipico", // Pode ser refinado
      neurotipico: "Tipico",
      discalculia: "Tipico",
      multiplo: "TEA",
      nenhum: "Tipico",
    };
    return mapping[diag] || "Tipico";
  }, [activeChild]);

  // Atualizar ajuste periodicamente ou quando métricas mudam
  useEffect(() => {
    const currentState: NeuroState = {
      profile,
      ...metrics,
      timestamp: Date.now(),
    };

    try {
      const { adjustment: newAdjustment } = NeuroAdaptiveCore.processState(currentState);
      setAdjustment(newAdjustment);
    } catch (error) {
      console.error("[useNeuroAdaptive] Error processing state:", error);
    }
  }, [profile, metrics]);

  // Simular passagem de tempo para fadiga
  useEffect(() => {
    const timer = setInterval(() => {
      setMetrics((prev) => ({
        ...prev,
        fatigue: {
          ...prev.fatigue,
          sessionDuration: prev.fatigue.sessionDuration + 10,
          fatigueLevel: Math.min(1.0, prev.fatigue.fatigueLevel + 0.005),
        },
      }));
    }, 10000); // a cada 10s

    return () => clearInterval(timer);
  }, []);

  const registerPerformance = useCallback((isCorrect: boolean, responseTime: number) => {
    setMetrics((prev) => {
      const newAccuracy = isCorrect 
        ? (prev.performance.accuracyRate * 0.9 + 0.1) 
        : (prev.performance.accuracyRate * 0.9);
      
      return {
        ...prev,
        performance: {
          ...prev.performance,
          accuracyRate: newAccuracy,
          averageResponseTime: (prev.performance.averageResponseTime + responseTime) / 2,
          errorFrequency: isCorrect ? prev.performance.errorFrequency : prev.performance.errorFrequency + 1,
        },
        // Ajustar carga cognitiva baseada no erro
        fatigue: {
          ...prev.fatigue,
          cognitiveLoad: isCorrect ? prev.fatigue.cognitiveLoad : Math.min(1.0, prev.fatigue.cognitiveLoad + 0.05),
        }
      };
    });
  }, []);

  const reportSensoryIssue = useCallback(() => {
    setMetrics((prev) => ({
      ...prev,
      sensory: {
        ...prev.sensory,
        visualOverload: Math.min(1.0, prev.sensory.visualOverload + 0.2),
        sensoryTolerance: Math.max(0, prev.sensory.sensoryTolerance - 0.2),
      }
    }));
  }, []);

  const requestHelp = useCallback(() => {
    setMetrics((prev) => ({
      ...prev,
      performance: {
        ...prev.performance,
        helpRequests: prev.performance.helpRequests + 1,
      }
    }));
  }, []);

  return {
    adjustment,
    metrics,
    registerPerformance,
    reportSensoryIssue,
    requestHelp,
    profile,
  };
}
