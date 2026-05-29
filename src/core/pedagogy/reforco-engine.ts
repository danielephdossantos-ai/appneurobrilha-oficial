import { PedagogyService } from "./service";
import { PedagogicalActivity } from "./types";
import { NeuroAdjustment } from "../neuro/engine";
import { BNCC_SKILLS, BNCCSkill } from "./bncc";

export interface LessonStep {
  type: "explanation" | "example" | "exercise" | "tip" | "premium_tip";
  text: string;
  difficulty?: "basic" | "intermediate" | "advanced";
  content?: {
    options?: string[];
    answer?: string;
    type?: string;
    [key: string]: any;
  };
}

export interface ReforcoLesson {
  title: string;
  topic: string;
  category: string;
  bnccCode?: string;
  levels: {
    basic: LessonStep[];
    intermediate: LessonStep[];
    advanced: LessonStep[];
  };
  premiumTips: string[];
  explanation: string;
  activityId?: string;
  isSystem?: boolean;
}

export class ReforcoEngine {
  static async generateLesson(topic: string = "Geral", adjustment?: NeuroAdjustment, childInfo?: any): Promise<ReforcoLesson> {
    const lowerTopic = (topic || "Geral").toLowerCase();
    const childLevel = childInfo?.serie_num ?? 1; 
    const isInfantil = childLevel === 0 || (childInfo?.serie && childInfo.serie.toLowerCase().includes("infantil"));
    
    // Tenta buscar no banco pedagógico primeiro
    try {
      const activities = await PedagogyService.getActivities({
        materia: topic === "Geral" ? undefined : topic,
        serie: childInfo?.serie
      });
      
      console.log(`Busca no banco: Encontradas ${activities.length} atividades para ${topic} / ${childInfo?.serie}`);

      const match = activities.find(a => 
        a.titulo.toLowerCase().includes(lowerTopic) || 
        a.tags.some(t => t.toLowerCase().includes(lowerTopic)) ||
        a.materia.toLowerCase() === lowerTopic
      );

      if (match) {
        console.log("Atividade correspondente encontrada:", match.titulo);
        return this.mapActivityToLesson(match, adjustment, isInfantil);
      }
    } catch (e) {
      console.error("Erro ao buscar no banco pedagógico:", e);
    }

    // Busca habilidade BNCC correspondente
    const skill = this.findBestSkill(topic, childLevel);
    
    // Fallback para geração baseada em BNCC
    let lesson: ReforcoLesson = {
      title: skill ? `${skill.code}: ${topic}` : topic,
      topic: topic,
      category: skill?.field || "Geral",
      bnccCode: skill?.code,
      levels: {
        basic: [
          { type: "explanation", text: this.getExplanation(topic, "basic", childLevel, skill) },
          { type: "example", text: this.getExample(topic, "basic", childLevel) }
        ],
        intermediate: [
          { type: "explanation", text: this.getExplanation(topic, "intermediate", childLevel, skill) },
          { type: "example", text: this.getExample(topic, "intermediate", childLevel) }
        ],
        advanced: [
          { type: "explanation", text: this.getExplanation(topic, "advanced", childLevel, skill) },
          { type: "example", text: this.getExample(topic, "advanced", childLevel) }
        ]
      },
      premiumTips: this.getPremiumTips(topic, adjustment),
      explanation: skill ? `Habilidade BNCC ${skill.code}: ${skill.description}` : `Hoje vamos explorar ${topic} de uma forma divertida e prática!`,
      isSystem: true
    };

    // Specific logic for Math/Tabuada
    if (lowerTopic.includes("tabuada") || lowerTopic.includes("multiplicação")) {
      this.enrichTabuadaLesson(lesson, topic);
    } 
    
    lesson.title = `[ESCOLA BRILHA] ${lesson.title}`;
    return lesson;
  }

  private static findBestSkill(topic: string, level: number): BNCCSkill | undefined {
    const lowerTopic = topic.toLowerCase();
    const skill = BNCC_SKILLS.find(s => 
      s.level === level && 
      (lowerTopic.includes(s.field.toLowerCase()) || lowerTopic.includes(s.domain || ""))
    ) || BNCC_SKILLS.find(s => s.level === level);
    return skill;
  }

  private static getExplanation(topic: string, diff: string, level: number, skill?: BNCCSkill): string {
    if (level === 0) {
      return `Olá, amiguinho! Vamos brincar de descobrir ${topic}? É muito legal! Observe as cores e as formas mágicas!`;
    }
    if (level >= 6) {
      return `Nesta unidade sobre ${topic}, analisaremos os fundamentos teóricos e aplicações práticas conforme a BNCC.`;
    }
    return `Vamos aprender sobre ${topic}. É um assunto muito importante para o seu dia a dia!`;
  }

  private static getExample(topic: string, diff: string, level: number): string {
    if (level === 0) return "Olha só esses desenhos lindos! Vamos usar os olhos de detetive para encontrar os pares!";
    return `Exemplo de ${topic}: imagine que estamos organizando uma biblioteca escolar.`;
  }

  private static getPremiumTips(topic: string, adjustment?: NeuroAdjustment): string[] {
    const tips = [
      "Divida o conteúdo em pequenos blocos de 10 minutos.",
      "Use cores diferentes para destacar palavras-chave.",
      "Faça pausas ativas (pular corda, polichinelo) entre os níveis."
    ];
    if (adjustment?.predictabilityLevel === 'high') {
      tips.push("Mantenha a rotina previsível: primeiro a explicação, depois o exemplo.");
    }
    return tips;
  }

  private static enrichTabuadaLesson(lesson: ReforcoLesson, topic: string) {
    const numMatch = topic.match(/\d+/);
    const baseNum = numMatch ? parseInt(numMatch[0]) : 2;
    lesson.category = "Matemática";
    lesson.title = `Domínio da Tabuada: ${baseNum}`;
    
    lesson.levels.basic.push({ 
      type: "exercise", 
      text: `Quanto é ${baseNum} x 2?`, 
      content: { options: [`${baseNum*2}`, `${baseNum*2+1}`, `${baseNum*2-1}`], answer: `${baseNum*2}` } 
    });
  }

  static generateStudyRoutine(agendaTopic: string, adjustment?: NeuroAdjustment, childInfo?: any): Promise<ReforcoLesson> {
    return this.generateLesson(agendaTopic, adjustment, childInfo);
  }

  private static mapActivityToLesson(activity: PedagogicalActivity, adjustment?: NeuroAdjustment, isInfantil: boolean = false): ReforcoLesson {
    const levels = {
      basic: [] as LessonStep[],
      intermediate: [] as LessonStep[],
      advanced: [] as LessonStep[]
    };

    const mainLevel = activity.nivelDificuldade === 'simples' ? 'basic' : 
                      activity.nivelDificuldade === 'intermediario' ? 'intermediate' : 'advanced';

    levels[mainLevel].push({
      type: "explanation",
      text: activity.objetivoPedagogico || activity.titulo
    });

    if (activity.estrategiaPedagogica) {
      levels[mainLevel].push({
        type: "example",
        text: activity.estrategiaPedagogica
      });
    }

    if (activity.variacoes && activity.variacoes.length > 0) {
      activity.variacoes.forEach((v: any, i: number) => {
        const targetLevel = i % 3 === 0 ? 'basic' : i % 3 === 1 ? 'intermediate' : 'advanced';
        levels[targetLevel].push({
          type: "exercise",
          text: v.enunciado || v.titulo || (isInfantil ? "Desafio Visual" : "Desafio extra"),
          content: v
        });
      });
    }

    if (levels.basic.length === 0) levels.basic.push({ type: "explanation", text: isInfantil ? "Vamos começar nossa brincadeira!" : "Vamos começar com o básico." });
    if (levels.intermediate.length === 0) levels.intermediate.push({ type: "explanation", text: isInfantil ? "Olha só que legal!" : "Subindo o nível agora." });
    if (levels.advanced.length === 0) levels.advanced.push({ type: "explanation", text: isInfantil ? "Você é um mestre!" : "Desafio mestre para você!" });

    return {
      title: activity.titulo,
      topic: activity.materia,
      category: activity.materia,
      levels,
      premiumTips: [
        activity.reforcoPositivo || "Excelente esforço!",
        activity.reforcoErro || "Quase lá! Tente de novo com calma.",
      ],
      explanation: activity.objetivoPedagogico || "Aula personalizada do Banco Pedagógico.",
      activityId: activity.id,
      isSystem: true
    };
  }
}
