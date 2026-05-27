
import { ActivityType, DifficultyLevel } from "../../core/activity-engine/types";

export interface EarlyChildhoodWorld {
  id: string;
  name: string;
  theme: string;
  icon: string;
  color: string;
  trails: string[];
}

export interface EarlyChildhoodTrail {
  id: string;
  name: string;
  description: string;
  activitiesCount: number;
  skills: string[];
}

export const PRE1_DATA = {
  worlds: [
    { id: "world-colors", name: "Floresta das Cores", theme: "nature", icon: "🌲", color: "#4ade80", trails: ["trail-primary-colors", "trail-mixing"] },
    { id: "world-shapes", name: "Jardim das Formas", theme: "garden", icon: "🌸", color: "#f472b6", trails: ["trail-basic-shapes"] },
    { id: "world-animals", name: "Mundo dos Animais", theme: "safari", icon: "🦁", color: "#fbbf24", trails: ["trail-domestic", "trail-wild"] },
    { id: "world-emotions", name: "Ilha das Emoções", theme: "ocean", icon: "🏝️", color: "#60a5fa", trails: ["trail-feelings"] },
    { id: "world-attention", name: "Castelo da Atenção", theme: "medieval", icon: "🏰", color: "#a78bfa", trails: ["trail-focus"] },
    { id: "world-coordination", name: "Estação da Coordenação", theme: "space", icon: "🚀", color: "#f87171", trails: ["trail-motor"] }
  ],
  trails: [
    { id: "trail-primary-colors", name: "Cores Primárias", description: "Identificação de Vermelho, Azul e Amarelo", activitiesCount: 50, skills: ["EI03ET01"] },
    { id: "trail-basic-shapes", name: "Formas Geométricas", description: "Círculo, Quadrado e Triângulo", activitiesCount: 50, skills: ["EI03ET05"] },
    { id: "trail-feelings", name: "Reconhecendo Emoções", description: "Alegria, Tristeza, Raiva e Medo", activitiesCount: 40, skills: ["EI03EO01"] }
  ],
  mascot: {
    name: "Brilhante",
    phrases: {
      welcome: "Olá, amiguinho! Vamos brincar?",
      success: "Uau! Você conseguiu!",
      failure: "Tudo bem! Vamos tentar de novo?",
      encourage: "Você está indo muito bem!"
    }
  }
};

export const PRE2_DATA = {
  worlds: [
    { id: "world-letters", name: "Reino das Letras", theme: "castle", icon: "👑", color: "#818cf8", trails: ["trail-alphabet", "trail-vowels"] },
    { id: "world-sounds", name: "Planeta dos Sons", theme: "space", icon: "🪐", color: "#c084fc", trails: ["trail-phonemes"] },
    { id: "world-numbers", name: "Ilha dos Números", theme: "tropical", icon: "🏝️", color: "#fb923c", trails: ["trail-counting", "trail-quantities"] },
    { id: "world-syllables", name: "Trem das Sílabas", theme: "industrial", icon: "🚂", color: "#2dd4bf", trails: ["trail-simple-syllables"] },
    { id: "world-focus", name: "Cidade da Atenção", theme: "urban", icon: "🏙️", color: "#94a3b8", trails: ["trail-sustained-attention"] }
  ],
  trails: [
    { id: "trail-alphabet", name: "O Alfabeto Mágico", description: "Conhecendo todas as letras", activitiesCount: 100, skills: ["EI03LP01"] },
    { id: "trail-counting", name: "Contando Estrelas", description: "Números de 1 a 20", activitiesCount: 100, skills: ["EI03ET07"] }
  ]
};
