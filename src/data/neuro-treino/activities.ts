
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
      title: "Rastreio Visual: Ache o Intruso",
      category: "Atenção Super Focada",
      description: "Foco seletivo e discriminação visual.",
      therapeuticGoal: "Desenvolver a atenção sustentada e a capacidade de filtrar estímulos irrelevantes.",
      difficulty: 1,
      type: "visual",
      content: {
        prompt: "Qual destes não pertence ao grupo?",
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
      therapeuticGoal: "Melhorar a velocidade de processamento e a precisão do movimento.",
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
      therapeuticGoal: "Expandir a capacidade de retenção de informações sequenciais a curto prazo.",
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
      therapeuticGoal: "Fortalecer a memória auditiva e a compreensão de enunciados verbais.",
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
      therapeuticGoal: "Desenvolver a consciência fonêmica e a habilidade de aliteração.",
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
      title: "Traçado do Alfabeto",
      category: "Sons Iniciais",
      description: "Grafomotricidade e associação fonema-grafema.",
      therapeuticGoal: "Integrar a percepção visual do grafema com o movimento motor da escrita.",
      difficulty: 2,
      type: "tracado",
      content: {
        prompt: "Vamos desenhar a letra 'A' no espaço!",
        target: "Letra A",
        options: ["Desenhar"],
        images: ["✍️"]
      }
    }
  ],
  "Motorzinho dos Sons": [
    {
      id: "motor-1",
      title: "Sopro Controlado",
      category: "Motorzinho dos Sons",
      description: "Controle do fluxo expiratório e suporte respiratório.",
      therapeuticGoal: "Melhorar a capacidade pulmonar e o controle motor orofacial para a fala.",
      difficulty: 1,
      type: "microfone",
      content: {
        prompt: "Assopre bem forte no microfone para apagar a vela!",
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
      therapeuticGoal: "Desenvolver o controle da intensidade e duração da emissão sonora.",
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
      title: "Caça-Rimas",
      category: "Rimas Divertidas",
      description: "Identificação de rimas e processamento auditivo.",
      therapeuticGoal: "Aprimorar a percepção de sons semelhantes no final das palavras.",
      difficulty: 1,
      type: "selection",
      content: {
        prompt: "O Pip viu um GATO. O que rima com GATO?",
        target: "Rato",
        options: ["Rato", "Bolo", "Mão", "Céu"],
        images: ["🐭", "🎂", "✋", "☁️"]
      }
    }
  ],
  "Regulação Emocional": [
    {
      id: "reg-1",
      title: "Respira Flor",
      category: "Regulação Emocional",
      description: "Auto-regulação e controle de ansiedade.",
      therapeuticGoal: "Ensinar técnicas de respiração profunda para acalmar o sistema nervoso.",
      difficulty: 1,
      type: "emocional",
      content: {
        prompt: "Cheire a flor (inspire) e assopre a vela (expire).",
        target: "Calma",
        options: ["Respirar"],
        images: ["🌸"]
      }
    },
    {
      id: "reg-2",
      title: "Termômetro dos Sentimentos",
      category: "Regulação Emocional",
      description: "Identificação de emoções e empatia.",
      therapeuticGoal: "Ajudar a criança a rotular e expressar suas próprias emoções.",
      difficulty: 1,
      type: "emocional",
      content: {
        prompt: "Como você está se sentindo hoje?",
        target: "Expressão",
        options: ["Feliz", "Triste", "Bravo", "Calmo"],
        images: ["😊", "😢", "😠", "😌"]
      }
    }
  ]
};
