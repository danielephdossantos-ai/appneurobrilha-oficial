
import { MockResponsibleData, PedagogicalAlert } from "../../data/responsible/mock-data";

export interface PedagogicalRecommendation {
  id: string;
  title: string;
  description: string;
  action: string;
  type: 'pedagogical' | 'sensory' | 'emotional';
}

export class ResponsibleIntelligence {
  static analyzePerformance(data: MockResponsibleData): {
    alerts: PedagogicalAlert[];
    recommendations: PedagogicalRecommendation[];
    focusTrend: 'up' | 'down' | 'stable';
  } {
    const recommendations: PedagogicalRecommendation[] = [];
    
    // Analyze Focus Trend
    const lastThreeSessions = data.focusSessions.slice(-3);
    const avgFocus = lastThreeSessions.reduce((acc, s) => acc + s.focusLevel, 0) / 3;
    const focusTrend: 'up' | 'down' | 'stable' = avgFocus > 0.7 ? 'up' : avgFocus < 0.4 ? 'down' : 'stable';

    // Generate Recommendations based on Skills
    const strugglingSkills = data.skills.filter(s => s.status === 'revisao-necessaria' || (s.status === 'em-progresso' && s.mastery < 50));
    
    if (strugglingSkills.length > 0) {
      recommendations.push({
        id: "rec1",
        title: "Reforço em " + strugglingSkills[0].name,
        description: "O aluno está encontrando dificuldades nesta área. Sugerimos atividades de pareamento visual para consolidar o conceito.",
        action: "Iniciar Reforço",
        type: 'pedagogical'
      });
    }

    // Generate Recommendations based on Emotions
    const frustrationCount = data.emotionalHistory.filter(e => e.emotion === 'frustrado').length;
    if (frustrationCount > 2) {
      recommendations.push({
        id: "rec2",
        title: "Ajuste Sensorial Necessário",
        description: "Detectamos picos de frustração recorrentes. Recomendamos mudar para o 'Modo Calmante' nas próximas sessões de lógica.",
        action: "Aplicar Configuração",
        type: 'sensory'
      });
    }

    // Analyze daily routine
    const incompleteTasks = data.dailyRoutine.filter(r => !r.completed).length;
    if (incompleteTasks > 2) {
      recommendations.push({
        id: "rec3",
        title: "Otimização de Rotina",
        description: "A carga de atividades hoje parece estar acima do ideal. Que tal reduzir a quantidade de micro-habilidades por bloco?",
        action: "Ajustar Metas",
        type: 'emotional'
      });
    }

    return {
      alerts: data.alerts,
      recommendations,
      focusTrend
    };
  }
}
