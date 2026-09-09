import React, { useState } from "react";
import { ActivityEngine } from "@/engines/pedagogical-engine/engine";
import { RewardSystem } from "@/engines/reward-engine/reward-system";
import { ActivityContainer } from "./activities/ActivityContainer";
import { AdaptiveMotor, StudentBehaviorMetrics } from "@/engines/adaptive-engine/motor";
import { EmotionalEngine } from "@/engines/regulation-engine/emotional-engine";
import { SoftCelebration } from "./rewards/SoftCelebration";
import { useGamification } from "@/hooks/useGamification";
import { OfflineEngine } from "@/engines/offline";

export const pedagogicalSystem = {
  // Main entry point for the pedagogical system
  renderActivity: (childId?: string, onStateChange?: (state: any) => void) => {
    const [activity, setActivity] = useState(ActivityEngine.gerarAtividade());
    const [showCelebration, setShowCelebration] = useState(false);
    const [lastReward, setLastReward] = useState({ stars: 0, coins: 0 });
    const { updateRewards } = useGamification(childId);

    const [metrics, setMetrics] = useState<StudentBehaviorMetrics>({
      repeatedErrors: 0,
      consecutiveHits: 0,
      totalErrors: 0,
      totalHits: 0,
      responseTimeHistory: [],
      lastActionTime: Date.now(),
      sessionStartTime: Date.now(),
      abandoned: false,
      rapidClicksCount: 0,
      longPausesCount: 0,
    });

    const analysis = AdaptiveMotor.analyze(metrics);
    const emotion = EmotionalEngine.detect(analysis);

    const handleComplete = async (performance: any) => {
      const newMetrics = {
        ...metrics,
        totalHits: metrics.totalHits + (performance.success ? 1 : 0),
        totalErrors: metrics.totalErrors + (performance.success ? 0 : 1),
        consecutiveHits: performance.success ? metrics.consecutiveHits + 1 : 0,
        responseTimeHistory: [...metrics.responseTimeHistory, performance.timeSpent],
      };
      setMetrics(newMetrics);

      if (performance.success) {
        const rewards = RewardSystem.calculateRewards({
          accuracy: performance.accuracy || 1,
          timeInZone: analysis.fatigue < 0.7,
          attempts: performance.attempts || 1,
          wasCalm: analysis.frustration < 0.3,
        });

        setLastReward({ stars: rewards.stars, coins: rewards.coins });
        setShowCelebration(true);

        if (childId) {
          await updateRewards(rewards.stars, rewards.coins, rewards.xp);

          // Salvar resultado da atividade offline-first
          await OfflineEngine.queueAction("activity_result", {
            child_id: childId,
            template_id: activity.id,
            score: performance.accuracy || 1,
            time_spent_seconds: Math.round(performance.timeSpent / 1000),
            errors_count: performance.errors || 0,
            completion_data: performance,
            created_at: new Date().toISOString(),
          });
        }
      }

      const newAnalysis = AdaptiveMotor.analyze(newMetrics);
      setActivity(ActivityEngine.gerarAtividade(undefined, newAnalysis));

      if (onStateChange) onStateChange({ metrics: newMetrics, rewards: RewardSystem.getState() });
    };

    return (
      <>
        <ActivityContainer activity={activity} onComplete={handleComplete} emotion={emotion} />
        <SoftCelebration
          isVisible={showCelebration}
          type="stars"
          amount={lastReward.stars}
          onComplete={() => setShowCelebration(false)}
        />
      </>
    );
  },
};
