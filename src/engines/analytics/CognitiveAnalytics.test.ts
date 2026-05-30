import { describe, it, expect } from 'vitest';
import { CognitiveAnalytics } from './CognitiveAnalytics';
import { NeuroAnalyticsEvent } from "../../modules/relatorios/types";

describe('CognitiveAnalytics Engine', () => {
  const engine = new CognitiveAnalytics();

  it('should calculate base metrics correctly', () => {
    const analysis = engine.analyze([]);
    expect(analysis.cognitiveRadar.attention).toBeGreaterThan(0);
    expect(analysis.emotionalMap.engagement).toBeGreaterThan(0);
  });

  it('should detect fatigue when specific events are present', () => {
    const events: NeuroAnalyticsEvent[] = [
      { 
        child_id: '11111111-1111-1111-1111-111111111111', 
        event_type: 'fatigue_detected' as const, 
        timestamp: Date.now(),
        metadata: {}
      },
      { 
        child_id: '11111111-1111-1111-1111-111111111111', 
        event_type: 'fatigue_detected' as const, 
        timestamp: Date.now() + 1000,
        metadata: {}
      },
      { 
        child_id: '11111111-1111-1111-1111-111111111111', 
        event_type: 'fatigue_detected' as const, 
        timestamp: Date.now() + 2000,
        metadata: {}
      }
    ];

    const insights = engine.generateInsights(events);
    const fatigueInsight = insights.find(i => i.message.includes('cansaço'));
    expect(fatigueInsight).toBeDefined();
    expect(fatigueInsight?.type).toBe('warning');
  });
});
