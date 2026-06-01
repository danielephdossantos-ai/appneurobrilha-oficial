
export interface NeuroActivity {
  id: string;
  title: string;
  category: string;
  description: string;
  difficulty: number;
  type: 'matching' | 'selection' | 'sequence' | 'interaction';
  content: {
    prompt: string;
    target: string;
    options: string[];
    icons?: string[];
    images?: string[];
  };
}

export const NEURO_ACTIVITIES: Record<string, NeuroActivity[]> = {
  "Sons Iniciais": [
    {
      id: "sons-1",
      title: "O Som da Letra A",
      category: "Sons Iniciais",
      description: "Identifique objetos que começam com o som da letra A.",
      difficulty: 1,
      type: "selection",
      content: {
        prompt: "Ajude o Pip a encontrar tudo que começa com o som 'AAAAA'",
        target: "Avião",
        options: ["Avião", "Bola", "Gato", "Dado"],
        images: ["✈️", "⚽", "🐱", "🎲"]
      }
    },
    {
      id: "sons-2",
      title: "B de Banana!",
      category: "Sons Iniciais",
      description: "Reconhecimento do fonema inicial /b/.",
      difficulty: 1,
      type: "selection",
      content: {
        prompt: "Qual destes começa com o som 'BBBBB'?",
        target: "Bota",
        options: ["Carro", "Bota", "Sapo", "Ilha"],
        images: ["🚗", "🥾", "🐸", "🏝️"]
      }
    },
    {
      id: "sons-3",
      title: "Som de Bicho",
      category: "Sons Iniciais",
      description: "Associe o animal ao seu som inicial.",
      difficulty: 2,
      type: "matching",
      content: {
        prompt: "O 'Jacaré' começa com qual som?",
        target: "J",
        options: ["J", "L", "M", "N"],
        images: ["🐊", "🦁", "🐒", "🐘"]
      }
    },
    {
      id: "sons-4",
      title: "Mesa dos Sons",
      category: "Sons Iniciais",
      description: "Classificação de múltiplos objetos pelo som inicial.",
      difficulty: 2,
      type: "selection",
      content: {
        prompt: "O Pip quer lanchar! Escolha apenas o que começa com 'MMMMM'",
        target: "Maçã",
        options: ["Maçã", "Pão", "Suco", "Uva"],
        images: ["🍎", "🍞", "🧃", "🍇"]
      }
    }
  ],
  "Motorzinho dos Sons": [
     {
      id: "motor-1",
      title: "Vibração do V",
      category: "Motorzinho dos Sons",
      description: "Sentindo a vibração das cordas vocais no som /v/.",
      difficulty: 1,
      type: "interaction",
      content: {
        prompt: "Faça o som do ventilador: VVVVVVV! Qual destes começa assim?",
        target: "Vela",
        options: ["Vela", "Faca", "Copo", "Mão"],
        images: ["🕯️", "🔪", "🥛", "✋"]
      }
    }
  ],
  "Rimas": [
    {
      id: "rimas-1",
      title: "Rima com Pip",
      category: "Rimas",
      description: "Identificação de palavras que rimam.",
      difficulty: 1,
      type: "matching",
      content: {
        prompt: "O Pip gosta de Pular! O que rima com PULAR?",
        target: "Cantar",
        options: ["Cantar", "Doce", "Céu", "Sol"],
        images: ["🎤", "🍬", "☁️", "☀️"]
      }
    }
  ]
};
