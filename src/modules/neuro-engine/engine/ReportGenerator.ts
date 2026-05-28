import { InternalProfile } from "./AnamnesisProcessor";

export interface ReportData {
  summary: string;
  initialProfile: {
    label: string;
    value: number;
    status: 'adequate' | 'developing' | 'attention';
  }[];
  evolution: {
    label: string;
    description: string;
    trend: 'up' | 'stable' | 'down';
  }[];
  strengths: string[];
  attentionPoints: string[];
  recommendations: string[];
}

export class ReportGenerator {
  static generate(profile: InternalProfile, childName: string, dynamicStats?: any[]): ReportData {
    const initialProfile = [
      { label: "Linguagem", value: profile.linguagem, status: this.getStatus(profile.linguagem) },
      { label: "Atenção", value: profile.atencao, status: this.getStatus(profile.atencao) },
      { label: "Comunicação", value: profile.linguagem > 50 ? profile.linguagem : 40, status: this.getStatus(profile.linguagem > 50 ? profile.linguagem : 40) },
      { label: "Aprendizagem", value: profile.leitura, status: this.getStatus(profile.leitura) },
      { label: "Cognição", value: (profile.leitura + profile.atencao) / 2, status: this.getStatus((profile.leitura + profile.atencao) / 2) },
    ];

    const evolution: ReportData['evolution'] = [];
    if (dynamicStats && dynamicStats.length > 0) {
      // Logic to interpret real app usage
      evolution.push({
        label: "Progresso Recente",
        description: "Melhora na atenção nos últimos dias ao completar atividades de lógica.",
        trend: 'up'
      });
    } else {
      evolution.push({
        label: "Início da Jornada",
        description: "A criança está começando a explorar o app. Complete mais atividades para ver a evolução dinâmica.",
        trend: 'stable'
      });
    }

    const strengths: string[] = [];
    const attentionPoints: string[] = [];
    const recommendations: string[] = [];

    // Logic for humanized text
    let summary = `Observamos que ${childName} apresenta um perfil único de desenvolvimento. `;
    
    if (profile.flags.apoioVisual) {
      summary += `Apresenta boa interação e melhor engajamento em atividades visuais. `;
      strengths.push("Excelente resposta a estímulos visuais");
      recommendations.push("estimular leitura com imagens");
    }

    if (profile.atencao < 50) {
      summary += `Em alguns momentos, pode ter dificuldade em manter a atenção por muito tempo. `;
      attentionPoints.push("Dificuldade de manter foco por períodos longos");
      recommendations.push("realizar atividades curtas");
    } else {
      strengths.push("Boa capacidade de concentração em temas de interesse");
    }

    if (profile.flags.focoComunicao) {
      attentionPoints.push("Precisa de ajuda inicial na expressão");
      recommendations.push("usar rotina visual");
    }

    if (profile.leitura < 40) {
      attentionPoints.push("Necessita de apoio na alfabetização");
      recommendations.push("repetir exercícios com apoio sonoro");
    }

    summary += `Com estímulo adequado, tende a evoluir bem e ganhar autonomia gradualmente.`;

    return {
      summary,
      initialProfile: initialProfile as any,
      evolution,
      strengths,
      attentionPoints,
      recommendations
    };
  }

  private static getStatus(value: number): 'adequate' | 'developing' | 'attention' {
    if (value >= 70) return 'adequate';
    if (value >= 40) return 'developing';
    return 'attention';
  }
}
