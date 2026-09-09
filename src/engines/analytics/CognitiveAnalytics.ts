import {
  NeuroAnalyticsEvent,
  CognitiveMetrics,
  EmotionalMetrics,
  Insight,
} from "../../modules/relatorios/types";

export class CognitiveAnalytics {
  analyze(events: NeuroAnalyticsEvent[]): {
    cognitiveRadar: CognitiveMetrics;
    emotionalMap: EmotionalMetrics;
  } {
    // In a real scenario, this would compute metrics from event logs
    // Simplified logic for simulation:
    const focusEvents = events.filter(
      (e) => e.event_type === "focus_lost" || e.event_type === "focus_gained",
    );
    const attentionScore = this.calculateAttention(focusEvents);

    return {
      cognitiveRadar: {
        attention: attentionScore,
        memory: 78,
        executive: 65,
        language: 82,
        math: 55,
        autonomy: 70,
        fatigue_index: this.calculateFatigue(events),
        focus_score: attentionScore,
        inhibitory_control: 60,
        working_memory: 72,
        cognitive_flexibility: 68,
      },
      emotionalMap: {
        frustration: 12,
        engagement: 85,
        calm: 75,
        joy: 90,
        anxiety: 5,
      },
    };
  }

  private calculateAttention(events: NeuroAnalyticsEvent[]): number {
    // Simplified: more focus_gained than focus_lost = higher attention
    return 75; // Base
  }

  private calculateFatigue(events: NeuroAnalyticsEvent[]): number {
    // Calculation based on session duration and error rate spikes
    return 20;
  }

  generateInsights(events: NeuroAnalyticsEvent[]): Insight[] {
    const insights: Insight[] = [];

    // Example logic for fatigue detection
    const fatigueEvents = events.filter((e) => e.event_type === "fatigue_detected");
    if (fatigueEvents.length > 2) {
      insights.push({
        id: crypto.randomUUID(),
        type: "warning",
        category: "neuro",
        severity: "medium",
        message:
          "Detectamos cansaço mental recorrente no final do dia. Considere sessões mais curtas.",
        created_at: new Date().toISOString(),
      });
    }

    return insights;
  }
}
