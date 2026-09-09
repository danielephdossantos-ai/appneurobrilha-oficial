import { cognitiveMemoryService } from "./CognitiveMemoryService";
import { CognitiveMetrics } from "../types";

export const seedCognitiveData = async (childId: string) => {
  // Seed Profile
  await cognitiveMemoryService.updateProfile(childId, {
    mastered_skills: ["BNCC-EI03EO01", "BNCC-EI03CG02", "Contagem 1-10"],
    fragile_skills: ["Subtração Simples", "Foco Prolongado"],
    avg_focus_time: 480, // 8 minutes
    avg_response_speed: 1200, // 1.2s
    pedagogical_evolution_score: 65,
    preferred_stimuli: ["visual", "musical"],
    sensory_difficulty_level: 2,
    frequent_errors: [
      { skill_code: "SUB-01", error_count: 5, last_error_at: new Date().toISOString() },
    ],
  });

  // Seed History (Longitudinal)
  const history: CognitiveMetrics[] = [
    {
      attention: 40,
      selfRegulation: 30,
      autonomy: 20,
      language: 45,
      memory: 50,
      coordination: 55,
      reading: 30,
      math: 25,
    },
    {
      attention: 45,
      selfRegulation: 35,
      autonomy: 25,
      language: 48,
      memory: 52,
      coordination: 58,
      reading: 35,
      math: 30,
    },
    {
      attention: 55,
      selfRegulation: 40,
      autonomy: 35,
      language: 55,
      memory: 60,
      coordination: 65,
      reading: 45,
      math: 40,
    },
    {
      attention: 65,
      selfRegulation: 50,
      autonomy: 45,
      language: 65,
      memory: 70,
      coordination: 75,
      reading: 60,
      math: 55,
    },
  ];

  for (let i = 0; i < history.length; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (history.length - i) * 7); // Weekly snapshots

    await cognitiveMemoryService.recordLongitudinalScores(childId, history[i], date);
  }
};
