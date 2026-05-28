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
  static generate(profile: InternalProfile, childName: string): ReportData {
    const scores = [
      { label: "Linguagem", value: profile.linguagem, status: this.getStatus(profile.linguagem) },
      { label: "Atenção", value: profile.atencao, status: this.getStatus(profile.atencao) },
      { label: "Cognitivo", value: (profile.leitura + profile.atencao) / 2, status: this.getStatus((profile.leitura + profile.atencao) / 2) },
      { label: "Comunicação", value: profile.linguagem > 50 ? profile.linguagem : 40, status: this.getStatus(profile.linguagem > 50 ? profile.linguagem : 40) },
      { label: "Aprendizagem", value: profile.leitura, status: this.getStatus(profile.leitura) },
    ];

    const strengths: string[] = [];
    const attentionPoints: string[] = [];
    const recommendations: string[] = [];

    // Logic for humanized text
    let summary = `Observamos que ${childName} apresenta um perfil único de desenvolvimento. `;
    
    if (profile.flags.apoioVisual) {
      summary += `Apresenta boa interação e melhor engajamento em atividades visuais. `;
      strengths.push("Excelente resposta a estímulos visuais");
      recommendations.push("estimular leitura com imagens e suportes visuais");
    }

    if (profile.atencao < 50) {
      summary += `Em alguns momentos, pode ter dificuldade em manter a atenção por muito tempo. `;
      attentionPoints.push("Tempo de foco reduzido em tarefas abstratas");
      recommendations.push("repetir atividades curtas para evitar fadiga");
    } else {
      strengths.push("Boa capacidade de concentração em temas de interesse");
    }

    if (profile.flags.focoComunicao) {
      attentionPoints.push("Necessidade de suporte na expressão verbal");
      recommendations.push("incentivar o uso de gestos combinados com palavras");
    }

    if (profile.leitura < 40) {
      attentionPoints.push("Fase inicial de alfabetização/decodificação");
      recommendations.push("utilizar rotina visual para organizar o dia");
    } else {
      strengths.push("Evolução positiva na compreensão de símbolos");
    }

    summary += `Com estímulo adequado e as adaptações presentes no app, tende a evoluir bem e ganhar autonomia gradualmente.`;

    return {
      summary,
      scores: scores as any,
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
