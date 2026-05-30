import { describe, it, expect } from 'vitest';
import { CognitiveAnalytics } from './CognitiveAnalytics';

describe('CognitiveAnalytics Engine', () => {
  const engine = new CognitiveAnalytics();

  it('should calculate base metrics correctly', () => {
    const analysis = engine.analyze([]);
    expect(analysis.cognitiveRadar.attention).toBeGreaterThan(0);
    expect(analysis.emotionalMap.engagement).toBeGreaterThan(0);
  });

  it('should detect fatigue when specific events are present', () => {
    const events = [
      { 
        child_id: '1', 
        event_type: 'fatigue_detected' as const, 
        timestamp: Date.now() 
      },
      { 
        child_id: '1', 
        event_type: 'fatigue_detected' as const, 
        timestamp: Date.now() + 1000 
      },
      { 
        child_id: '1', 
        event_type: 'fatigue_detected' as const, 
        timestamp: Date.now() + 2000 
      }
    ];

    const insights = engine.generateInsights(events);
    const fatigueInsight = insights.find(i => i.message.includes('cansaço'));
    expect(fatigueInsight).toBeDefined();
    expect(fatigueInsight?.type).toBe('warning');
  });
});
