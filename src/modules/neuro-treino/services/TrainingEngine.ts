import { CognitiveExercise, CognitiveSkill, ExerciseResult } from "../types/training";

export class TrainingEngine {
  private static exercises: CognitiveExercise[] = [
    {
      id: "ex-atencao-1",
      skill: "atencao",
      title: "Radar de Estrelas",
      description: "Encontre a estrela diferente o mais rápido possível.",
      base_difficulty: 1,
      rules: { stimuli_count: 5, speed_factor: 1, duration_seconds: 60 },
    },
    {
      id: "ex-memoria-1",
      skill: "memoria",
      title: "Sequência Mágica",
      description: "Repita a sequência de cores apresentada.",
      base_difficulty: 1,
      rules: { stimuli_count: 3, speed_factor: 1, duration_seconds: 90 },
    },
  ];

  static getExerciseBySkill(skill: CognitiveSkill): CognitiveExercise | undefined {
    return this.exercises.find((ex) => ex.skill === skill);
  }

  static adaptDifficulty(
    currentResult: ExerciseResult,
    exercise: CognitiveExercise,
  ): CognitiveExercise["rules"] {
    let { stimuli_count, speed_factor, duration_seconds } = exercise.rules;

    // Se a precisão for alta (> 90%), aumenta a dificuldade
    if (currentResult.precision > 0.9) {
      stimuli_count += 1;
      speed_factor *= 1.1;
    }
    // Se for baixa (< 60%), reduz
    else if (currentResult.precision < 0.6) {
      stimuli_count = Math.max(exercise.rules.stimuli_count, stimuli_count - 1);
      speed_factor = Math.max(0.5, speed_factor * 0.9);
    }

    return { stimuli_count, speed_factor, duration_seconds };
  }

  static calculateScore(result: Omit<ExerciseResult, "score" | "id" | "timestamp">): number {
    const baseScore = result.precision * 1000;
    const timeBonus = Math.max(0, (60000 - result.duration_ms) / 100);
    const difficultyMultiplier = 1 + result.difficulty_level * 0.2;

    return Math.round((baseScore + timeBonus) * difficultyMultiplier);
  }
}
