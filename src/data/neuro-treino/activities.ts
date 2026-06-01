export interface NeuroActivity {
  id: string;
  title: string;
  category: string;
  description: string;
  therapeuticGoal: string;
  difficulty: number;
  type: 'microfone' | 'tracado' | 'visual' | 'emocional' | 'matching' | 'selection' | 'sequence' | 'interaction';
  content: {
    prompt: string;
    target: string;
    options: string[];
    icons?: string[];
    images?: string[];
    instructions?: string;
  };
}

export const NEURO_ACTIVITIES: Record<string, NeuroActivity[]> = {
  "Atenção Super Focada": [
    {
      id: "at-1",
      title: "Ache o Intruso",
      category: "Atenção Super Focada",
      description: "Rastreamento Perceptual Visual.",
      therapeuticGoal: "Foco sustentado, atenção seletiva e discriminação visual.",
      difficulty: 1,
      type: "visual",
      content: {
        prompt: "Clique no padrão animal isolado entre as matrizes robóticas.",
        target: "Carro",
        options: ["Maçã", "Banana", "Uva", "Carro"],
        images: ["🍎", "🍌", "🍇", "🚗"]
      }
    },
    {
      id: "at-2",
      title: "Alvo Móvel",
      category: "Atenção Super Focada",
      description: "Coordenação visuo-motora e tempo de reação.",
      therapeuticGoal: "Velocidade de processamento e coordenação visuo-motora.",
      difficulty: 2,
      type: "visual",
      content: {
        prompt: "Aperte no Pip assim que ele brilhar!",
        target: "Pip Brilhando",
        options: ["Pip Dormindo", "Pip Brilhando", "Pip Comendo"],
        images: ["😴", "✨", "🍎"]
      }
    }
  ],
  "Memória de Elefante": [
    {
      id: "me-1",
      title: "Sequência Neuro-Visual",
      category: "Memória de Elefante",
      description: "Memória operacional e de trabalho.",
      therapeuticGoal: "Memória operacional e de trabalho de curto prazo.",
      difficulty: 2,
      type: "sequence",
      content: {
        prompt: "Guarde a ordem: Sol, Lua, Estrela. O que vem depois do Sol?",
        target: "Lua",
        options: ["Sol", "Lua", "Estrela", "Nuvem"],
        images: ["☀️", "🌙", "⭐", "☁️"]
      }
    },
    {
      id: "me-2",
      title: "Guarde o Som",
      category: "Memória de Elefante",
      description: "Memória auditiva e retenção de comandos.",
      therapeuticGoal: "Retenção de comandos e discriminação auditiva.",
      difficulty: 2,
      type: "visual",
      content: {
        prompt: "O Pip disse: 'Peguem a bola e o dado'. O que o Pip pediu?",
        target: "Bola e Dado",
        options: ["Bola e Carro", "Bola e Dado", "Dado e Boneca", "Bola e Gato"],
        images: ["⚽🚗", "⚽🎲", "🎲🪆", "⚽🐱"]
      }
    }
  ],
  "Sons Iniciais": [
    {
      id: "sons-1",
      title: "Consciência Fonológica",
      category: "Sons Iniciais",
      description: "Identificação do som inicial das palavras.",
      therapeuticGoal: "Identificação do som inicial (aliteracional) das palavras.",
      difficulty: 1,
      type: "visual",
      content: {
        prompt: "Qual destes começa com o som 'AAAAA'?",
        target: "Abacaxi",
        options: ["Abacaxi", "Bola", "Copo", "Dado"],
        images: ["🍍", "⚽", "🥛", "🎲"]
      }
    },
    {
      id: "sons-2",
      title: "Traçado da Letra A",
      category: "Sons Iniciais",
      description: "Traçado Técnico da Letra 'A'.",
      therapeuticGoal: "Grafomotricidade, associação fonema-grafema e coordenação motora fina.",
      difficulty: 2,
      type: "tracado",
      content: {
        prompt: "Guie o dedo clicando nos números em sequência correta (1➔2➔3).",
        target: "Letra A",
        options: ["Desenhar"],
        images: ["✍️"]
      }
    }
  ],
  "Motorzinho dos Sons": [
    {
      id: "motor-1",
      title: "Assopro da Vela",
      category: "Motorzinho dos Sons",
      description: "Controle de Sopro Fonoaudiológico.",
      therapeuticGoal: "Praxias buco-faciais, controle do fluxo expiratório e suporte respiratório.",
      difficulty: 1,
      type: "microfone",
      content: {
        prompt: "Objetivo: Exercitar musculatura orbicular e controle de ar expiratório.",
        target: "Vela Apagada",
        options: ["Assoprar"],
        images: ["🕯️"]
      }
    },
    {
      id: "motor-2",
      title: "Estica o Som (Controle de Voz)",
      category: "Motorzinho dos Sons",
      description: "Modulação vocal e sustentação fonatória.",
      therapeuticGoal: "Modulação vocal, sustentação fonatória e controle de intensidade.",
      difficulty: 2,
      type: "microfone",
      content: {
        prompt: "Diga 'AAAAAA' por 5 segundos sem parar!",
        target: "Voz Longa",
        options: ["Cantar"],
        images: ["🎤"]
      }
    }
  ],
  "Rimas Divertidas": [
    {
      id: "rimas-1",
      title: "Pares Rimados",
      category: "Rimas Divertidas",
      description: "Processamento fonológico e percepção de regularidades sonoras.",
      therapeuticGoal: "Processamento fonológico e percepção de regularidades sonoras.",
      difficulty: 1,
      type: "visual",
      content: {
        prompt: "O Pip viu um GATO. O que rima com GATO?",
        target: "Rato",
        options: ["Rato", "Bolo", "Mão", "Céu"],
        images: ["🐭", "🎂", "✋", "☁️"]
      }
    },
    {
      id: "rimas-2",
      title: "Qual Palavra Não Rima?",
      category: "Rimas Divertidas",
      description: "Análise léxica-auditiva avançada.",
      therapeuticGoal: "Análise léxica-auditiva avançada.",
      difficulty: 2,
      type: "visual",
      content: {
        prompt: "Qual destas palavras NÃO rima com as outras?",
        target: "Céu",
        options: ["Pão", "Mão", "Cão", "Céu"],
        images: ["🍞", "✋", "🐶", "☁️"]
      }
    }
  ],
  "Regulação Emocional": [
    {
      id: "reg-1",
      title: "Âncora da Calma",
      category: "Regulação Emocional",
      description: "Biofeedback visual respiratório.",
      therapeuticGoal: "Autorregulação, biofeedback visual respiratório para crises e ansiedade.",
      difficulty: 1,
      type: "emocional",
      content: {
        prompt: "Respire com o Pip para encontrar sua calma.",
        target: "Calma",
        options: ["Respirar"],
        images: ["⚓"]
      }
    },
    {
      id: "reg-2",
      title: "Identificador de Emoções",
      category: "Regulação Emocional",
      description: "Nomeação de estados internos.",
      therapeuticGoal: "Nomeação de estados internos e validação socioemocional.",
      difficulty: 1,
      type: "emocional",
      content: {
        prompt: "Como você está se sentindo agora?",
        target: "Expressão",
        options: ["Feliz", "Triste", "Bravo", "Calmo"],
        images: ["😊", "😢", "😠", "😌"]
      }
    }
  ]
};
