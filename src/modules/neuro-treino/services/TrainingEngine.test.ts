import { describe, it, expect } from 'vitest';
import { TrainingEngine } from './TrainingEngine';
import { ExerciseResult, CognitiveExercise } from '../types/training';

describe('TrainingEngine', () => {
  const mockExercise: CognitiveExercise = {
    id: 'test-1',
    skill: 'atencao',
    title: 'Test',
    description: 'Test',
    base_difficulty: 1,
    rules: { stimuli_count: 5, speed_factor: 1, duration_seconds: 60 }
  };

  it('should calculate score correctly with precision and time bonus', () => {
    const result = {
      skill: 'atencao' as const,
      duration_ms: 30000, // 30s
      precision: 0.8, // 80%
      difficulty_level: 1
    };
    
    const score = TrainingEngine.calculateScore(result);
    expect(score).toBeGreaterThan(0);
    expect(score).toBe(Math.round(((0.8 * 1000) + (60000 - 30000) / 100) * 1.2));
  });

  it('should increase difficulty rules when precision is high', () => {
    const highPrecisionResult: ExerciseResult = {
      id: 'res-1',
      skill: 'atencao',
      score: 1000,
      duration_ms: 30000,
      precision: 0.95,
      difficulty_level: 1,
      timestamp: Date.now()
    };

    const newRules = TrainingEngine.adaptDifficulty(highPrecisionResult, mockExercise);
    expect(newRules.stimuli_count).toBe(mockExercise.rules.stimuli_count + 1);
    expect(newRules.speed_factor).toBeGreaterThan(mockExercise.rules.speed_factor);
  });
});
