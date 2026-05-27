
export interface StudentBehaviorMetrics {
  repeatedErrors: number;
  consecutiveHits: number;
  totalErrors: number;
  totalHits: number;
  responseTimeHistory: number[];
  lastActionTime: number;
  sessionStartTime: number;
  abandoned: boolean;
  rapidClicksCount: number; // For impulsivity/frustration
  longPausesCount: number; // For distraction
}

export interface AdaptiveAnalysis {
  frustration: number; // 0 to 1
  fatigue: number; // 0 to 1
  impulsivity: number; // 0 to 1
  distraction: number; // 0 to 1
  abandonmentRisk: number; // 0 to 1
  performanceLevel: number; // 0 to 1
  focusLevel: number; // 0 to 1
}

export class AdaptiveMotor {
  static analyze(metrics: StudentBehaviorMetrics): AdaptiveAnalysis {
    const now = Date.now();
    const sessionDuration = (now - metrics.sessionStartTime) / 1000 / 60; // minutes
    
    // 1. Analisar Frustração
    // Baseada em erros repetidos e cliques rápidos após erro
    let frustration = 0;
    if (metrics.repeatedErrors > 2) frustration += 0.4;
    if (metrics.rapidClicksCount > 5) frustration += 0.3;
    if (metrics.totalErrors > metrics.totalHits * 2) frustration += 0.3;
    
    // 2. Analisar Fadiga
    // Baseada no tempo de sessão e aumento no tempo de resposta
    let fatigue = Math.min(sessionDuration / 30, 0.5); // Aumenta com o tempo (max 30min)
    const recentResponseTimes = metrics.responseTimeHistory.slice(-5);
    if (recentResponseTimes.length >= 3) {
      const avgRecent = recentResponseTimes.reduce((a, b) => a + b, 0) / recentResponseTimes.length;
      const avgTotal = metrics.responseTimeHistory.reduce((a, b) => a + b, 0) / metrics.responseTimeHistory.length;
      if (avgRecent > avgTotal * 1.5) fatigue += 0.3; // Ficando mais lento
    }

    // 3. Analisar Impulsividade
    // Baseada em tempos de resposta extremamente curtos (< 1s)
    const veryFastResponses = metrics.responseTimeHistory.filter(t => t < 1000).length;
    const impulsivity = Math.min(veryFastResponses / 10, 1);

    // 4. Analisar Distração
    // Baseada em longas pausas e baixa frequência de ações
    const distraction = Math.min(metrics.longPausesCount / 5, 1);

    // 5. Risco de Abandono
    // Combinação de fadiga, frustração e distrações
    const abandonmentRisk = Math.min((frustration * 0.4) + (fatigue * 0.3) + (distraction * 0.3), 1);

    // 6. Nível de Performance (Acertos consecutivos)
    const performanceLevel = Math.min(metrics.consecutiveHits / 10, 1);

    // 7. Nível de Foco
    const focusLevel = Math.max(0, 1 - (distraction * 0.6 + impulsivity * 0.4));

    return {
      frustration: Math.min(frustration, 1),
      fatigue: Math.min(fatigue, 1),
      impulsivity: Math.min(impulsivity, 1),
      distraction: Math.min(distraction, 1),
      abandonmentRisk: Math.min(abandonmentRisk, 1),
      performanceLevel,
      focusLevel
    };
  }

  static getIntervention(analysis: AdaptiveAnalysis): string | null {
    if (analysis.abandonmentRisk > 0.8) return "Sugerir pausa lúdica imediata";
    if (analysis.frustration > 0.7) return "Reduzir dificuldade e oferecer dica visual";
    if (analysis.fatigue > 0.6) return "Mudar para atividade de baixa estimulação";
    if (analysis.impulsivity > 0.7) return "Inserir barreira de confirmação (pense antes de clicar)";
    if (analysis.distraction > 0.6) return "Reforço sonoro de atenção ou mudança de estímulo";
    if (analysis.performanceLevel > 0.9) return "Aumentar desafio e complexidade";
    
    return null;
  }
}
