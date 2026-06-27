import { PedagogyService } from "./service";
import { PedagogicalActivity } from "./types";
import { NeuroAdjustment } from "@/engines/adaptive-engine/engine";
import { gerarAulaReforco } from "@/lib/reforco-aula-ia.functions";

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
  static async generateLesson(topic: string, adjustment?: NeuroAdjustment): Promise<ReforcoLesson> {
    console.log("[ReforcoEngine] Generating lesson for:", topic, "with adjustment:", adjustment);
    const lowerTopic = topic.toLowerCase();

    try {
      const r = await gerarAulaReforco({ data: { topic } });
      if (r.ok && r.lesson) {
        return r.lesson as ReforcoLesson;
      }
    } catch (e) {
      console.error("Erro ao gerar aula com IA:", e);
    }

    // Tenta buscar no banco pedagógico primeiro
    try {
      const activities = await PedagogyService.getActivities();
      const match = activities.find(
        (a) =>
          a.titulo.toLowerCase().includes(lowerTopic) ||
          a.tags.some((t) => t.toLowerCase().includes(lowerTopic)),
      );

      if (match) {
        return this.mapActivityToLesson(match, adjustment);
      }
    } catch (e) {
      console.error("Erro ao buscar no banco pedagógico:", e);
    }

    // Fallback estruturado somente se a IA falhar
    const lesson: ReforcoLesson = {
      title: topic,
      topic: topic,
      category: "Geral",
      levels: {
        basic: [
          { type: "explanation", text: `Vou pegar uma parte pequena de ${topic} e ensinar com exemplo. Primeiro, observe o que a pergunta pede; depois separe as informações importantes; por fim resolva uma etapa por vez.` },
          { type: "example", text: `Exemplo de estudo: se o tema é ${topic}, leia o enunciado, circule a palavra principal, escreva o que já sabe e faça uma tentativa curta antes de ver a resposta.` },
          { type: "exercise", text: `Explique com suas palavras qual é a primeira coisa que você precisa observar em ${topic}.`, content: { question: `Qual é o primeiro passo?`, answer: "Ler com calma e achar a informação principal.", explanation: "Quando achamos a informação principal, o cérebro não tenta resolver tudo de uma vez." } },
        ],
        intermediate: [
          {
            type: "explanation",
            text: `Agora vamos resolver ${topic} em 3 passos: identificar o pedido, escolher a estratégia e conferir se a resposta combina com a pergunta.`,
          },
          { type: "example", text: `Exemplo resolvido: pergunta → “o que devo descobrir?”; estratégia → “qual regra ou conta uso?”; conferência → “minha resposta faz sentido?”` },
          { type: "exercise", text: `Monte uma pergunta sobre ${topic} e responda usando os 3 passos.`, content: { question: "Quais são os 3 passos?", answer: "Pedido, estratégia e conferência.", explanation: "Esses passos evitam chute e ajudam a criança explicar como pensou." } },
        ],
        advanced: [
          { type: "explanation", text: `No desafio, você precisa explicar o raciocínio. Uma resposta boa não é só o resultado: ela mostra o caminho usado para chegar lá.` },
          { type: "example", text: `Modelo de resposta: “Eu percebi que a pergunta queria ____. Usei ____ porque ____. Então a resposta é ____.”` },
          { type: "exercise", text: `Complete o modelo de resposta para uma questão de ${topic}.`, content: { question: "Por que explicar o caminho é importante?", answer: "Porque mostra que eu entendi e ajuda a corrigir erros.", explanation: "Quando a criança explica, ela transforma tentativa em aprendizagem." } },
        ],
      },
      premiumTips: [
        "Faça uma resposta curta usando: eu observei, eu usei, eu conferi.",
        "Se errar, procure em qual passo o erro aconteceu: leitura, estratégia ou conferência.",
        "Treine uma questão por vez e só avance quando conseguir explicar o porquê.",
      ],
      explanation: `Aula emergencial de ${topic}: você vai aprender a ler o pedido, resolver por etapas e explicar o raciocínio.`,
    };

    // Specific logic for Math/Tabuada
    if (lowerTopic.includes("tabuada") || lowerTopic.includes("multiplicação")) {
      lesson.category = "Matemática";
      const numMatch = topic.match(/\d+/);
      const baseNum = numMatch ? parseInt(numMatch[0]) : 2;

      lesson.title = `Domínio da Tabuada: ${baseNum}`;
      lesson.explanation = `A multiplicação é como uma "soma rápida". Em vez de somar ${baseNum} várias vezes, nós multiplicamos!`;

      lesson.levels.basic = [
        {
          type: "explanation",
          text: `Vamos começar com a base: ${baseNum} x 1 até ${baseNum} x 5.`,
        },
        {
          type: "example",
          text: `${baseNum} x 2 é o mesmo que ${baseNum} + ${baseNum} = ${baseNum * 2}`,
        },
        {
          type: "exercise",
          text: `Quanto é ${baseNum} x 3?`,
          content: { question: `${baseNum} x 3`, answer: baseNum * 3 },
        },
      ];

      lesson.levels.intermediate = [
        {
          type: "explanation",
          text: `Agora vamos subir o nível: ${baseNum} x 6 até ${baseNum} x 10.`,
        },
        {
          type: "example",
          text: `Dica de Ouro: ${baseNum} x 10 é sempre o número ${baseNum} com um zero no final: ${baseNum * 10}!`,
        },
        {
          type: "exercise",
          text: `Quanto é ${baseNum} x 7?`,
          content: { question: `${baseNum} x 7`, answer: baseNum * 7 },
        },
      ];

      lesson.levels.advanced = [
        { type: "explanation", text: `Desafio Brilha! Multiplicação complexa com ${baseNum}.` },
        {
          type: "example",
          text: `Se multiplicarmos ${baseNum} por 12, podemos fazer (${baseNum} x 10) + (${baseNum} x 2).`,
        },
        {
          type: "exercise",
          text: `Quanto é ${baseNum} x 15?`,
          content: { question: `${baseNum} x 15`, answer: baseNum * 15 },
        },
      ];

      lesson.premiumTips.push(
        "A ordem dos fatores não altera o produto: 3x7 é o mesmo que 7x3!",
        `Para a tabuada do ${baseNum}, imagine pulando de ${baseNum} em ${baseNum} em uma trilha.`,
        "Tente cantar a tabuada para memorizar o ritmo dos números.",
      );
    }
    // Logic for Portuguese
    else if (
      lowerTopic.includes("verbo") ||
      lowerTopic.includes("gramática") ||
      lowerTopic.includes("ortografia")
    ) {
      lesson.category = "Português";
      lesson.explanation = `As palavras são as ferramentas que usamos para construir nosso mundo. Vamos aprender a usá-las melhor!`;

      lesson.levels.basic = [
        {
          type: "explanation",
          text: "Toda ação tem um nome. Correr, pular, sorrir... esses são os verbos!",
        },
        { type: "exercise", text: "Qual destas palavras indica uma ação? (A) Cadeira (B) Pular" },
      ];

      lesson.levels.intermediate = [
        {
          type: "explanation",
          text: "Os verbos mudam se a ação já passou ou ainda vai acontecer.",
        },
        { type: "example", text: "Eu como (agora) -> Eu comi (ontem) -> Eu comerei (amanhã)." },
      ];

      lesson.premiumTips.push(
        "Dica do Professor: Verbos que terminam em -AR costumam ser de ação física (Cantar, Dançar).",
        "Use o contexto da frase para descobrir o tempo do verbo (hoje, ontem, amanhã).",
      );
    }
    // Logic for Literacy
    else if (
      lowerTopic.includes("ler") ||
      lowerTopic.includes("alfabetização") ||
      lowerTopic.includes("leitura")
    ) {
      lesson.category = "Alfabetização";
      lesson.explanation =
        "Ler é como ganhar um superpoder de entender mensagens secretas em todo lugar!";

      lesson.levels.basic = [
        { type: "explanation", text: "As letras se juntam para formar sons (sílabas)." },
        { type: "example", text: "B + A = BA. L + A = LA. B+A+L+A = BALA!" },
      ];

      lesson.premiumTips.push(
        "Siga as letras com o dedo para ajudar o cérebro a focar no som correto.",
        "Tente ler em voz alta para ouvir a melodia das palavras.",
      );
    }

    return lesson;
  }

  static generateStudyRoutine(
    agendaTopic: string,
    adjustment?: NeuroAdjustment,
  ): Promise<ReforcoLesson> {
    // Este método simula a geração de rotina pelo SISTEMA, não por IA generativa pura
    // Ele usa o banco de dados BNCC (simulado aqui por lógica estruturada)
    return this.generateLesson(agendaTopic, adjustment);
  }

  private static mapActivityToLesson(
    activity: PedagogicalActivity,
    adjustment?: NeuroAdjustment,
  ): ReforcoLesson {
    const levels = {
      basic: [] as LessonStep[],
      intermediate: [] as LessonStep[],
      advanced: [] as LessonStep[],
    };

    // Mapeia baseado no nível de dificuldade da atividade
    const mainLevel =
      activity.nivelDificuldade === "simples"
        ? "basic"
        : activity.nivelDificuldade === "intermediario"
          ? "intermediate"
          : "advanced";

    levels[mainLevel].push({
      type: "explanation",
      text: activity.objetivoPedagogico || activity.titulo,
    });

    if (activity.estrategiaPedagogica) {
      levels[mainLevel].push({
        type: "example",
        text: activity.estrategiaPedagogica,
      });
    }

    // Se houver variações, distribui entre os níveis
    if (activity.variacoes && activity.variacoes.length > 0) {
      activity.variacoes.forEach((v: any, i: number) => {
        const targetLevel = i % 3 === 0 ? "basic" : i % 3 === 1 ? "intermediate" : "advanced";
        levels[targetLevel].push({
          type: "exercise",
          text: v.enunciado || v.titulo || "Desafio extra",
          content: v,
        });
      });
    }

    // Garante que nenhum nível fique vazio para a UI
    if (levels.basic.length === 0)
      levels.basic.push({ type: "explanation", text: "Vamos começar com o básico." });
    if (levels.intermediate.length === 0)
      levels.intermediate.push({ type: "explanation", text: "Subindo o nível agora." });
    if (levels.advanced.length === 0)
      levels.advanced.push({ type: "explanation", text: "Desafio mestre para você!" });

    return {
      title: activity.titulo,
      topic: activity.materia,
      category: activity.materia,
      levels,
      premiumTips: [
        activity.reforcoPositivo || "Excelente esforço!",
        activity.reforcoErro || "Quase lá! Tente de novo com calma.",
        `Adaptação: Reforços ${adjustment?.reinforcementIntensity || "padrão"}, Previsibilidade ${adjustment?.predictabilityLevel || "média"}.`,
        adjustment?.responseTimeLimit
          ? `Tempo sugerido: ${adjustment.responseTimeLimit}s por atividade.`
          : "Tempo livre para resposta.",
      ],
      explanation: activity.objetivoPedagogico || "Aula personalizada do Banco Pedagógico.",
      activityId: activity.id,
    };
  }
}
