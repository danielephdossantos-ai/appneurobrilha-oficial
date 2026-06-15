import { Skill } from "./types";

export const PORTUGUESE_SKILLS: Skill[] = [
  {
    id: "lp-p1-01",
    bnccCode: "EI03LP01",
    title: "Expressão Oral e Escuta",
    description:
      "Expressar ideias, desejos e sentimentos sobre suas vivências, por meio da linguagem oral e escrita (escrita não convencional).",
    objectives: ["Identificar sentimentos", "Relatar experiências", "Ouvir com atenção"],
    examples: ["Contar uma história curta", "Desenhar e explicar o desenho"],
    neuroStrategies: ["Uso de cards visuais", "Repetição rítmica", "Ambiente de baixa estimulação"],
    activityTypes: ["Oralidade", "Desenho Livre", "Contação de Histórias"],
    difficulty: 1,
    grade: "Pré 1",
    estimatedTime: 15,
    idealCognitiveProfile: ["Neurotipico", "TEA", "TDAH"],
    prerequisites: [],
  },
  {
    id: "lp-1-01",
    bnccCode: "EF01LP01",
    title: "Alfabetização e Fonética",
    description:
      "Reconhecer que textos são lidos e escritos da esquerda para a direita e de cima para baixo.",
    objectives: ["Direcionalidade da escrita", "Identificação de letras"],
    examples: ["Seguir o dedo na leitura", "Identificar a primeira letra do nome"],
    neuroStrategies: ["Marcadores visuais de direção", "Feedback tátil", "Alta previsibilidade"],
    activityTypes: ["Traçado de letras", "Leitura guiada"],
    difficulty: 2,
    grade: "1º ano",
    estimatedTime: 20,
    idealCognitiveProfile: ["Neurotipico", "Dislexia"],
    prerequisites: ["lp-p1-01"],
  },
];

export const MATH_SKILLS: Skill[] = [
  {
    id: "mat-p1-01",
    bnccCode: "EI03ET07",
    title: "Contagem e Quantidade",
    description:
      "Relacionar números às suas respectivas quantidades e identificar o antes, o depois e o entre em uma sequência.",
    objectives: ["Contar até 10", "Relacionar número e objeto"],
    examples: ["Agrupar 5 blocos", "Identificar o número 3"],
    neuroStrategies: [
      "Material concreto",
      "Reforço visual intenso",
      "Quantidade reduzida de itens",
    ],
    activityTypes: ["Agrupamento", "Jogos de contar"],
    difficulty: 1,
    grade: "Pré 1",
    estimatedTime: 15,
    idealCognitiveProfile: ["Neurotipico", "DeficienciaIntelectual"],
    prerequisites: [],
  },
];

// Add more subjects following the same pattern
export const SCIENCE_SKILLS: Skill[] = [
  {
    id: "cie-1-01",
    bnccCode: "EF01CI01",
    title: "Corpo Humano",
    description:
      "Comparar características físicas entre os colegas, reconhecendo a diversidade e a importância da valorização de cada um.",
    objectives: ["Identificar partes do corpo", "Respeitar diferenças"],
    examples: ["Auto-retrato", "Jogo de espelho"],
    neuroStrategies: ["Uso de espelhos", "Animações suaves", "Estímulos sensoriais controlados"],
    activityTypes: ["Observação", "Arte Corporal"],
    difficulty: 1,
    grade: "1º ano",
    estimatedTime: 25,
    idealCognitiveProfile: ["Neurotipico", "TEA"],
    prerequisites: [],
  },
];

export const ALL_SKILLS: Skill[] = [
  ...PORTUGUESE_SKILLS,
  ...MATH_SKILLS,
  ...SCIENCE_SKILLS,
  // ... rest of subjects
];
