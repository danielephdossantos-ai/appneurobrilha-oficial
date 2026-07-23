import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useAppState, Child, Diagnostico } from "@/core/store";
import { NeuroAdaptiveCore } from "@/engines/neuro-engine/core";
import { NeuroState, NeuroAdjustment, NeuroProfile } from "@/engines/neuro-engine/types";
import { supabase } from "@/database/supabase/client";
import { recordSkillAttempt } from "@/services/neuro-treino/neuroMetrics";

export interface NeuroSkillInfo {
  skillCode: string;
  materia: string;
}

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
  const seededRef = useRef<string | null>(null);
  const [adjustment, setAdjustment] = useState<NeuroAdjustment>(
    () =>
      NeuroAdaptiveCore.processState({
        profile: "Tipico",
        ...INITIAL_METRICS,
        timestamp: Date.now(),
      }).adjustment,
  );

  // Mapear diagnóstico → perfil neuro
  const profile = useMemo((): NeuroProfile => {
    if (!activeChild) return "Tipico";
    const mapping: Record<Diagnostico, NeuroProfile> = {
      tea: "TEA",
      tdah: "TDAH",
      dislexia: "Dislexia",
      tod: "Tipico",
      deficiencia_intelectual: "DeficienciaIntelectual",
      altas_habilidades: "Tipico",
      neurotipico: "Tipico",
      discalculia: "Tipico",
      multiplo: "TEA",
      nenhum: "Tipico",
    };
    return mapping[activeChild.diagnostico] || "Tipico";
  }, [activeChild]);

  // Semear métricas iniciais com dados REAIS dos últimos logs da criança
  useEffect(() => {
    if (!activeChild || seededRef.current === activeChild.id) return;
    seededRef.current = activeChild.id;

    (async () => {
      const { data, error } = await supabase
        .from("activity_logs")
        .select("score, duration_ms, metadata, created_at")
        .eq("child_id", activeChild.id)
        .order("created_at", { ascending: false })
        .limit(20);

      if (error || !data || data.length === 0) return;

      const scores = data.map((d) => d.score ?? 1).filter((s) => s != null);
      const avgScore = scores.reduce((a, b) => a + b, 0) / Math.max(scores.length, 1);
      const avgDuration =
        data.reduce((a, b) => a + (b.duration_ms ?? 5000), 0) / data.length / 1000;
      const errorCount = scores.filter((s) => s < 0.5).length;
      const helpCount = data.filter(
        (d) => (d.metadata as { helpRequested?: boolean } | null)?.helpRequested,
      ).length;

      setMetrics((prev) => ({
        ...prev,
        performance: {
          averageResponseTime: Math.min(avgDuration, 60),
          accuracyRate: Math.max(0, Math.min(1, avgScore)),
          errorFrequency: errorCount,
          helpRequests: helpCount,
        },
        attention: {
          ...prev.attention,
          focusScore: Math.max(0.2, Math.min(1, avgScore)),
        },
      }));
    })();
  }, [activeChild]);

  // Recalcular ajuste quando perfil/métricas mudam
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

  // Simular fadiga ao longo do tempo
  useEffect(() => {
    const timer = setInterval(() => {
      setMetrics((prev) => ({
        ...prev,
        fatigue: {
          ...prev.fatigue,
          sessionDuration: prev.fatigue.sessionDuration + 10,
          fatigueLevel: Math.min(1.0, prev.fatigue.fatigueLevel + 0.005),
          needForBreak: prev.fatigue.fatigueLevel + 0.005 > 0.7,
        },
      }));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Persistir uma resposta da criança em activity_logs
  const persistLog = useCallback(
    async (params: {
      score: number;
      durationMs: number;
      activityId?: string;
      helpRequested?: boolean;
      isCorrect: boolean;
    }) => {
      if (!activeChild) return;
      const dayNumber = Math.floor((Date.now() - new Date(activeChild.id).getTime()) / 86400000);
      await supabase.from("activity_logs").insert({
        child_id: activeChild.id,
        score: params.score,
        duration_ms: params.durationMs,
        activity_id: params.activityId ?? null,
        day_number: Math.max(1, isNaN(dayNumber) ? 1 : dayNumber),
        metadata: {
          isCorrect: params.isCorrect,
          helpRequested: params.helpRequested ?? false,
          profile,
        },
      });
    },
    [activeChild, profile],
  );

  const registerPerformance = useCallback(
    (isCorrect: boolean, responseTime: number, activityId?: string) => {
      setMetrics((prev) => {
        const newAccuracy = isCorrect
          ? prev.performance.accuracyRate * 0.9 + 0.1
          : prev.performance.accuracyRate * 0.9;
        return {
          ...prev,
          performance: {
            ...prev.performance,
            accuracyRate: newAccuracy,
            averageResponseTime: (prev.performance.averageResponseTime + responseTime) / 2,
            errorFrequency: isCorrect
              ? prev.performance.errorFrequency
              : prev.performance.errorFrequency + 1,
          },
          fatigue: {
            ...prev.fatigue,
            cognitiveLoad: isCorrect
              ? prev.fatigue.cognitiveLoad
              : Math.min(1.0, prev.fatigue.cognitiveLoad + 0.05),
          },
        };
      });
      // Persiste de forma assíncrona (não bloqueia UI)
      void persistLog({
        score: isCorrect ? 1 : 0,
        durationMs: Math.round(responseTime * 1000),
        activityId,
        isCorrect,
      });
    },
    [persistLog],
  );

  const reportSensoryIssue = useCallback(() => {
    setMetrics((prev) => ({
      ...prev,
      sensory: {
        ...prev.sensory,
        visualOverload: Math.min(1.0, prev.sensory.visualOverload + 0.2),
        sensoryTolerance: Math.max(0, prev.sensory.sensoryTolerance - 0.2),
      },
    }));
  }, []);

  const requestHelp = useCallback(
    (activityId?: string) => {
      setMetrics((prev) => ({
        ...prev,
        performance: {
          ...prev.performance,
          helpRequests: prev.performance.helpRequests + 1,
        },
      }));
      void persistLog({
        score: 0.5,
        durationMs: 0,
        activityId,
        helpRequested: true,
        isCorrect: false,
      });
    },
    [persistLog],
  );

  return {
    adjustment,
    metrics,
    registerPerformance,
    reportSensoryIssue,
    requestHelp,
    profile,
  };
}
