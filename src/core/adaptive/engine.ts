

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

    // 1. Dificuldade (complexidade pedagógica)
    let difficulty = neuroAdj.complexityMultiplier;
    if (analysis.performanceLevel > 0.8) difficulty *= 1.25;
    if (analysis.frustration > 0.5) difficulty *= 0.6;
    if (analysis.fatigue > 0.6) difficulty *= 0.8;

    // 2. Quantidade (carga cognitiva por tela)
    let maxItems = neuroAdj.maxItemsPerScreen;
    if (analysis.fatigue > 0.5) maxItems = Math.max(1, Math.floor(maxItems * 0.5));
    if (analysis.distraction > 0.6) maxItems = Math.max(1, Math.floor(maxItems * 0.7));
    if (analysis.impulsivity > 0.7) maxItems = Math.max(1, Math.floor(maxItems * 0.6));

    // 3. Visual (escala e clareza)
    let visualScale = neuroAdj.visualScale * sensoryAdj.visualScale;
    if (analysis.distraction > 0.4) visualScale *= 1.2; // Aumenta elementos para prender atenção
    if (analysis.fatigue > 0.7) visualScale *= 1.1;
    
    let visualComplexity = neuroAdj.visualComplexity;
    if (analysis.distraction > 0.6 || analysis.fatigue > 0.6) visualComplexity = "low";

    // 4. Velocidade (ritmo da interface e tempo de resposta)
    let animationSpeed = neuroAdj.animationSpeed * sensoryAdj.speedMultiplier;
    if (analysis.fatigue > 0.5) animationSpeed *= 0.8;
    if (analysis.impulsivity > 0.6) animationSpeed *= 0.7; // Desacelera para reduzir erros impulsivos
    if (analysis.performanceLevel > 0.9) animationSpeed *= 1.2;

    let responseTimeLimit = neuroAdj.responseTimeLimit;
    if (analysis.fatigue > 0.4 && responseTimeLimit) responseTimeLimit *= 1.5; // Dá mais tempo se estiver cansado
    if (analysis.frustration > 0.5 && responseTimeLimit) responseTimeLimit = null; // Remove limite para reduzir pressão

    // 5. Reforços (intensidade e frequência)
    let reinforcementIntensity = neuroAdj.reinforcementIntensity;
    if (analysis.frustration > 0.4) reinforcementIntensity = "high";
    if (analysis.performanceLevel > 0.8 && reinforcementIntensity === "high") reinforcementIntensity = "standard";

    let reinforcementFrequency = neuroAdj.positiveReinforcementFrequency;
    if (analysis.frustration > 0.5 || analysis.fatigue > 0.5) reinforcementFrequency = "high";

    // 6. Estímulos (nível de animação e sons)
    let stimuliLevel = sensoryAdj.stimuliLevel;
    if (analysis.distraction > 0.7) stimuliLevel = "high"; // Estímulo forte para recuperar foco
    if (analysis.impulsivity > 0.6) stimuliLevel = "low"; // Estímulo baixo para evitar sobrecarga

    let animationIntensity = neuroAdj.animationIntensity;
    if (analysis.fatigue > 0.6) animationIntensity = "low";
    if (analysis.distraction > 0.5) animationIntensity = "none"; // Remove distrações animadas

    return {
      ...neuroAdj,
      ...sensoryAdj,
      difficulty,
      maxItemsPerScreen: maxItems,
      visualScale,
      visualComplexity,
      animationSpeed,
      responseTimeLimit,
      reinforcementIntensity,
      positiveReinforcementFrequency: reinforcementFrequency,
      stimuliLevel,
      animationIntensity,
      suggestedPath: emotionalPath,
      intervention,
      analysis
    };
  }

  static getSpacedRepetitionNeed(masteryLevel: string, lastSeen: Date, errors: number): boolean {
    const daysSinceLastSeen = (new Date().getTime() - lastSeen.getTime()) / (1000 * 3600 * 24);
    
    // Spaced Repetition Logic (Leitner System simplified)
    if (masteryLevel === "mastered" && daysSinceLastSeen > 30) return true;
    if (masteryLevel === "in-progress" && daysSinceLastSeen > 7) return true;
    if (errors > 3) return true; // Review needed if high error rate
    
    return false;
  }

  static detectFatigue(metrics: StudentBehaviorMetrics): boolean {
    // Detect fatigue based on response time variance and error clusters
    const avgResponse = metrics.responseTimeHistory.length > 0 
      ? metrics.responseTimeHistory.reduce((a, b) => a + b, 0) / metrics.responseTimeHistory.length 
      : 0;
    const highResponseTime = avgResponse > 15000; // Over 15s avg might indicate fatigue
    const errorSpike = metrics.totalErrors > 5;
    
    return highResponseTime || errorSpike;
  }
}

