
import React, { useState } from 'react';
import { ActivityEngine } from '../core/activity-engine/engine';
import { RewardSystem } from '../core/rewards/reward-system';
import { ActivityContainer } from './activities/ActivityContainer';
import { AdaptiveMotor, StudentBehaviorMetrics } from '../core/adaptive/motor';
import { EmotionalEngine } from '../modules/emotional-engine/engine/emotional-engine';

export const pedagogicalSystem = {
  // Main entry point for the pedagogical system
  renderActivity: (onStateChange?: (state: any) => void) => {
    // This would typically be inside a React component, but for the demo/instruction:
    const [activity, setActivity] = useState(ActivityEngine.gerarAtividade());
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
      longPausesCount: 0
    });

    const analysis = AdaptiveMotor.analyze(metrics);
    const emotion = EmotionalEngine.detect(analysis);

    const handleComplete = (performance: any) => {
      // 1. Update Metrics
      const newMetrics = {
        ...metrics,
        totalHits: metrics.totalHits + (performance.success ? 1 : 0),
        totalErrors: metrics.totalErrors + (performance.success ? 0 : 1),
        consecutiveHits: performance.success ? metrics.consecutiveHits + 1 : 0,
        responseTimeHistory: [...metrics.responseTimeHistory, performance.timeSpent]
      };
      setMetrics(newMetrics);

      // 2. Add Rewards
      if (performance.success) {
        RewardSystem.addRewards(activity.reward.stars, activity.reward.coins, activity.reward.energy);
      }

      // 3. Generate Next Activity with adaptation
      const newAnalysis = AdaptiveMotor.analyze(newMetrics);
      setActivity(ActivityEngine.gerarAtividade(undefined, newAnalysis));
      
      if (onStateChange) onStateChange({ metrics: newMetrics, rewards: RewardSystem.getState() });
    };

    return (
      <ActivityContainer 
        activity={activity} 
        onComplete={handleComplete} 
        emotion={emotion}
      />
    );
  }
};
