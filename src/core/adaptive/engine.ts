

import { PedagogyEngine } from "../pedagogy/engine";
import { NeuroEngine, NeuroProfile, NeuroAdjustment } from "../neuro/engine";
import { EmotionalEngine, Emotion } from "../emotional/engine";
import { SensoryEngine, SensoryMode } from "../sensory/engine";
import { AdaptiveMotor, StudentBehaviorMetrics, AdaptiveAnalysis } from "./motor";

export class AdaptiveEngine {
  static orchestrateActivity(
    studentId: string,
    profile: NeuroProfile,
    currentEmotion: Emotion,
    metrics: StudentBehaviorMetrics,
    sensoryMode: SensoryMode = "foco"
  ) {
    const analysis = AdaptiveMotor.analyze(metrics);
    const intervention = AdaptiveMotor.getIntervention(analysis);
    
    const neuroAdj = NeuroEngine.getAdjustments(profile);
    const sensoryAdj = SensoryEngine.getModeConfig(sensoryMode);
    const emotionalPath = EmotionalEngine.getActivitySuggestion(currentEmotion);

    // Ajuste dinâmico de dificuldade baseado na análise em tempo real
    let difficultyMultiplier = neuroAdj.complexityMultiplier;
    
    // Se estiver perfomando bem, aumenta desafio
    if (analysis.performanceLevel > 0.8) {
      difficultyMultiplier *= 1.2;
    } 
    // Se houver frustração ou fadiga, reduz
    else if (analysis.frustration > 0.5 || analysis.fatigue > 0.5) {
      difficultyMultiplier *= 0.7;
    }

    // Ajuste de estímulos baseado em distração ou impulsividade
    let finalStimuli = sensoryAdj.stimuliLevel;
    if (analysis.distraction > 0.6) {
      finalStimuli = "high"; // Aumenta estímulo para recapturar atenção
    } else if (analysis.impulsivity > 0.6) {
      finalStimuli = "none"; // Remove distrações para forçar foco
    }

    return {
      ...neuroAdj,
      ...sensoryAdj,
      difficulty: difficultyMultiplier,
      stimuliLevel: finalStimuli,
      suggestedPath: emotionalPath,
      intervention,
      analysis, // Exporta análise para UI
      
      // Sobrescrita inteligente
      animationSpeed: neuroAdj.animationSpeed * sensoryAdj.speedMultiplier * (analysis.fatigue > 0.7 ? 0.8 : 1),
      visualScale: neuroAdj.visualScale * sensoryAdj.visualScale * (analysis.distraction > 0.5 ? 1.1 : 1),
      maxItems: analysis.fatigue > 0.6 ? Math.max(1, Math.floor(neuroAdj.maxItemsPerScreen / 2)) : neuroAdj.maxItemsPerScreen
    };
  }
}

