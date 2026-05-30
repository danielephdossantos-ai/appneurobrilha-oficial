import { AnamnesisData, NeuroProfile } from "../types";

export class AnamnesisEngine {
  static interpret(data: AnamnesisData): NeuroProfile {
    const scores = {
      pedagogical: (data.pedagogical.reading_ability + data.pedagogical.writing_ability) / 2,
      cognitive: (data.cognitive.attention + data.cognitive.memory + data.cognitive.focus) / 3,
      sensory: (data.sensory.auditory_sensitivity + data.sensory.visual_sensitivity + data.sensory.tactile_sensitivity) / 3,
      behavioral: data.behavioral.routine_stability,
    };

    const adaptation_rules = {
      visual_clutter_reduction: data.sensory.visual_sensitivity > 70 || data.cognitive.attention < 40,
      audio_reinforcement_needed: data.sensory.auditory_sensitivity < 30 || data.pedagogical.reading_ability < 40,
      session_duration_limit_minutes: data.cognitive.focus < 50 ? 15 : 30,
      break_frequency_minutes: data.cognitive.impulsivity > 60 ? 10 : 20,
    };

    const strengths = [];
    if (data.cognitive.memory > 80) strengths.push("Memória excepcional");
    if (data.pedagogical.math_level === 'advanced') strengths.push("Raciocínio lógico avançado");
    
    const focus_areas = [];
    if (data.cognitive.attention < 50) focus_areas.push("Treino de atenção sustentada");
    if (data.sensory.general_sensitivity > 75) focus_areas.push("Regulação sensorial");

    return {
      scores,
      adaptation_rules,
      strengths,
      focus_areas
    };
  }
}
