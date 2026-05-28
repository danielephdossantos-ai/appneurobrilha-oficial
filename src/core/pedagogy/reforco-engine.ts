import { PedagogyService } from "./service";
import { PedagogicalActivity } from "./types";
import { NeuroAdjustment } from "../neuro/engine";

export interface LessonStep {
  type: "explanation" | "example" | "exercise" | "tip" | "premium_tip";
  text: string;
  difficulty?: "basic" | "intermediate" | "advanced";
  content?: any;
}

export interface ReforcoLesson {
  title: string;
  topic: string;
  category: string;
  levels: {
    basic: LessonStep[];
    intermediate: LessonStep[];
    advanced: LessonStep[];
  };
  premiumTips: string[];
  explanation: string;
  activityId?: string;
}

export class ReforcoEngine {
  static async generateLesson(topic: string = "Geral", adjustment?: NeuroAdjustment): Promise<ReforcoLesson> {
    const lowerTopic = (topic || "Geral").toLowerCase();
    
    // Tenta buscar no banco pedagógico primeiro
    try {
      const activities = await PedagogyService.getActivities();
      const match = activities.find(a => 
        a.titulo.toLowerCase().includes(lowerTopic) || 
        a.tags.some(t => t.toLowerCase().includes(lowerTopic))
      );

      if (match) {
        return this.mapActivityToLesson(match, adjustment);
      }
    } catch (e) {
      console.error("Erro ao buscar no banco pedagógico:", e);
    }
    
    // Fallback para geração estática
    let lesson: ReforcoLesson = {
      title: topic,
      topic: topic,
      category: "Geral",
      levels: {
        basic: [
          { type: "explanation", text: `Vamos começar com os conceitos fundamentais de ${topic}.` },
          { type: "example", text: "Imagine o seguinte cenário prático: [Conceito Base]" }
        ],
        intermediate: [
          { type: "explanation", text: `Agora que você já conhece o básico, vamos aprofundar em ${topic}.` },
          { type: "example", text: "Aqui o desafio aumenta um pouco, mas você consegue!" }
        ],
        advanced: [
          { type: "explanation", text: `Nível Mestre Brilha: Desafios complexos de ${topic}.` },
          { type: "example", text: "Neste nível, usamos todo o conhecimento acumulado." }
        ]
      },
      premiumTips: [
        "Use objetos concretos (como feijões ou tampinhas) para visualizar a quantidade.",
        "Divida o problema em partes menores para não sobrecarregar a memória de trabalho.",
        "Relacione o conteúdo com algo que a criança já ama (ex: contar heróis ou bonecas)."
      ],
      explanation: `Hoje vamos explorar ${topic} de uma forma divertida e prática!`
    };

    // Specific logic for Math/Tabuada
    if (lowerTopic.includes("tabuada") || lowerTopic.includes("multiplicação")) {
      lesson.category = "Matemática";
      const numMatch = topic.match(/\d+/);
      const baseNum = numMatch ? parseInt(numMatch[0]) : 2;
      
      lesson.title = `Domínio da Tabuada: ${baseNum}`;
      lesson.explanation = `A multiplicação é como uma "soma rápida". Em vez de somar ${baseNum} várias vezes, nós multiplicamos!`;
      
      lesson.levels.basic = [
        { type: "explanation", text: `Vamos começar com a base: ${baseNum} x 1 até ${baseNum} x 5.` },
        { type: "example", text: `${baseNum} x 2 é o mesmo que ${baseNum} + ${baseNum} = ${baseNum * 2}` },
        { type: "exercise", text: `Quanto é ${baseNum} x 3?`, content: { question: `${baseNum} x 3`, answer: baseNum * 3 } }
      ];
      
      lesson.levels.intermediate = [
        { type: "explanation", text: `Agora vamos subir o nível: ${baseNum} x 6 até ${baseNum} x 10.` },
        { type: "example", text: `Dica de Ouro: ${baseNum} x 10 é sempre o número ${baseNum} com um zero no final: ${baseNum * 10}!` },
        { type: "exercise", text: `Quanto é ${baseNum} x 7?`, content: { question: `${baseNum} x 7`, answer: baseNum * 7 } }
      ];

      lesson.levels.advanced = [
        { type: "explanation", text: `Desafio Brilha! Multiplicação complexa com ${baseNum}.` },
        { type: "example", text: `Se multiplicarmos ${baseNum} por 12, podemos fazer (${baseNum} x 10) + (${baseNum} x 2).` },
        { type: "exercise", text: `Quanto é ${baseNum} x 15?`, content: { question: `${baseNum} x 15`, answer: baseNum * 15 } }
      ];

      lesson.premiumTips.push(
        "A ordem dos fatores não altera o produto: 3x7 é o mesmo que 7x3!",
        `Para a tabuada do ${baseNum}, imagine pulando de ${baseNum} em ${baseNum} em uma trilha.`,
        "Tente cantar a tabuada para memorizar o ritmo dos números."
      );
    } 
    // Logic for Portuguese
    else if (lowerTopic.includes("verbo") || lowerTopic.includes("gramática") || lowerTopic.includes("ortografia")) {
      lesson.category = "Português";
      lesson.explanation = `As palavras são as ferramentas que usamos para construir nosso mundo. Vamos aprender a usá-las melhor!`;
      
      lesson.levels.basic = [
        { type: "explanation", text: "Toda ação tem um nome. Correr, pular, sorrir... esses são os verbos!" },
        { type: "exercise", text: "Qual destas palavras indica uma ação? (A) Cadeira (B) Pular" }
      ];
      
      lesson.levels.intermediate = [
        { type: "explanation", text: "Os verbos mudam se a ação já passou ou ainda vai acontecer." },
        { type: "example", text: "Eu como (agora) -> Eu comi (ontem) -> Eu comerei (amanhã)." }
      ];

      lesson.premiumTips.push(
        "Dica do Professor: Verbos que terminam em -AR costumam ser de ação física (Cantar, Dançar).",
        "Use o contexto da frase para descobrir o tempo do verbo (hoje, ontem, amanhã)."
      );
    }
    // Logic for Literacy
    else if (lowerTopic.includes("ler") || lowerTopic.includes("alfabetização") || lowerTopic.includes("leitura")) {
      lesson.category = "Alfabetização";
      lesson.explanation = "Ler é como ganhar um superpoder de entender mensagens secretas em todo lugar!";
      
      lesson.levels.basic = [
        { type: "explanation", text: "As letras se juntam para formar sons (sílabas)." },
        { type: "example", text: "B + A = BA. L + A = LA. B+A+L+A = BALA!" }
      ];

      lesson.premiumTips.push(
        "Siga as letras com o dedo para ajudar o cérebro a focar no som correto.",
        "Tente ler em voz alta para ouvir a melodia das palavras."
      );
    }

    // Adiciona selo de autenticidade BNCC/Sistema
    lesson.title = `[SISTEMA BNCC] ${lesson.title}`;
    
    return lesson;
  }

  static generateStudyRoutine(agendaTopic: string, adjustment?: NeuroAdjustment): Promise<ReforcoLesson> {
    // Este método simula a geração de rotina pelo SISTEMA, não por IA generativa pura
    // Ele usa o banco de dados BNCC (simulado aqui por lógica estruturada)
    return this.generateLesson(agendaTopic, adjustment);
  }

  private static mapActivityToLesson(activity: PedagogicalActivity, adjustment?: NeuroAdjustment): ReforcoLesson {
    const levels = {
      basic: [] as LessonStep[],
      intermediate: [] as LessonStep[],
      advanced: [] as LessonStep[]
    };

    // Mapeia baseado no nível de dificuldade da atividade
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

    // Se houver variações, distribui entre os níveis
    if (activity.variacoes && activity.variacoes.length > 0) {
      activity.variacoes.forEach((v: any, i: number) => {
        const targetLevel = i % 3 === 0 ? 'basic' : i % 3 === 1 ? 'intermediate' : 'advanced';
        levels[targetLevel].push({
          type: "exercise",
          text: v.enunciado || v.titulo || "Desafio extra",
          content: v
        });
      });
    }

    // Garante que nenhum nível fique vazio para a UI
    if (levels.basic.length === 0) levels.basic.push({ type: "explanation", text: "Vamos começar com o básico." });
    if (levels.intermediate.length === 0) levels.intermediate.push({ type: "explanation", text: "Subindo o nível agora." });
    if (levels.advanced.length === 0) levels.advanced.push({ type: "explanation", text: "Desafio mestre para você!" });

    return {
      title: activity.titulo,
      topic: activity.materia,
      category: activity.materia,
      levels,
      premiumTips: [
        activity.reforcoPositivo || "Excelente esforço!",
        activity.reforcoErro || "Quase lá! Tente de novo com calma.",
        `Adaptação: Reforços ${adjustment?.reinforcementIntensity || 'padrão'}, Previsibilidade ${adjustment?.predictabilityLevel || 'média'}.`,
        adjustment?.responseTimeLimit ? `Tempo sugerido: ${adjustment.responseTimeLimit}s por atividade.` : "Tempo livre para resposta."
      ],
      explanation: activity.objetivoPedagogico || "Aula personalizada do Banco Pedagógico.",
      activityId: activity.id
    };
  }
}
