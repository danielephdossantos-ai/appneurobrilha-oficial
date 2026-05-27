import { CognitiveMetrics, CognitiveProfile } from "../types";

export interface ActivityOutcome {
  skillCode: string;
  materia: string;
  success: boolean;
  responseTime: number; // ms
  focusDuration: number; // s
  emotionalState?: string;
  sensoryDifficulty?: number;
}

export class CognitiveEngine {
  /**
   * Calculates new scores based on previous state and recent outcomes.
   * This is a simplified version of the neuro-pedagogical logic.
   */
  calculateNewScores(
    currentScores: CognitiveMetrics,
    outcomes: ActivityOutcome[]
  ): CognitiveMetrics {
    const updated = { ...currentScores };
    
    outcomes.forEach(outcome => {
      // Logic for adjusting scores based on performance
      const weight = 0.1; // Learning rate
      const impact = outcome.success ? 1 : -0.5;
      
      // Map materia/skills to score categories
      if (outcome.materia === 'reading' || outcome.materia === 'portugues') {
        updated.reading = Math.min(100, Math.max(0, updated.reading + (impact * weight)));
        updated.language = Math.min(100, Math.max(0, updated.language + (impact * weight * 0.5)));
      } else if (outcome.materia === 'math' || outcome.materia === 'matematica') {
        updated.math = Math.min(100, Math.max(0, updated.math + (impact * weight)));
      }
      
      // Universal traits
      updated.attention = Math.min(100, Math.max(0, updated.attention + (outcome.focusDuration > 60 ? 0.2 : -0.1)));
      updated.memory = Math.min(100, Math.max(0, updated.memory + (outcome.success ? 0.1 : 0)));
    });
    
    return updated;
  }

  /**
   * Updates the cognitive profile attributes based on history.
   */
  processProfileUpdate(
    currentProfile: CognitiveProfile,
    newOutcomes: ActivityOutcome[]
  ): Partial<CognitiveProfile> {
    const frequentErrors = [...currentProfile.frequent_errors];
    const masteredSkills = new Set(currentProfile.mastered_skills);
    const fragileSkills = new Set(currentProfile.fragile_skills);
    
    let totalFocus = 0;
    let totalResponseSpeed = 0;

    newOutcomes.forEach(outcome => {
      totalFocus += outcome.focusDuration;
      totalResponseSpeed += outcome.responseTime;

      if (!outcome.success) {
        const existingError = frequentErrors.find(e => e.skill_code === outcome.skillCode);
        if (existingError) {
          existingError.error_count++;
          existingError.last_error_at = new Date().toISOString();
        } else {
          frequentErrors.push({
            skill_code: outcome.skillCode,
            error_count: 1,
            last_error_at: new Date().toISOString()
          });
        }
        
        // Move to fragile skills if errors are high
        const errorCount = frequentErrors.find(e => e.skill_code === outcome.skillCode)?.error_count || 0;
        if (errorCount > 3) {
          fragileSkills.add(outcome.skillCode);
          masteredSkills.delete(outcome.skillCode);
        }
      } else {
        // Potential mastery
        masteredSkills.add(outcome.skillCode);
        fragileSkills.delete(outcome.skillCode);
      }
    });

    return {
      frequent_errors: frequentErrors,
      mastered_skills: Array.from(masteredSkills),
      fragile_skills: Array.from(fragileSkills),
      avg_focus_time: newOutcomes.length > 0 
        ? (currentProfile.avg_focus_time + (totalFocus / newOutcomes.length)) / 2 
        : currentProfile.avg_focus_time,
      avg_response_speed: newOutcomes.length > 0
        ? (currentProfile.avg_response_speed + (totalResponseSpeed / newOutcomes.length)) / 2
        : currentProfile.avg_response_speed
    };
  }
}

export const cognitiveEngine = new CognitiveEngine();
