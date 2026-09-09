import { ActivityType, DifficultyLevel } from "@/engines/pedagogical-engine/types";

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
    {
      id: "world-colors",
      name: "Floresta das Cores",
      theme: "nature",
      icon: "🌲",
      color: "#4ade80",
      trails: ["trail-primary-colors", "trail-mixing"],
    },
    {
      id: "world-shapes",
      name: "Jardim das Formas",
      theme: "garden",
      icon: "🌸",
      color: "#f472b6",
      trails: ["trail-basic-shapes"],
    },
    {
      id: "world-animals",
      name: "Mundo dos Animais",
      theme: "safari",
      icon: "🦁",
      color: "#fbbf24",
      trails: ["trail-domestic", "trail-wild"],
    },
    {
      id: "world-emotions",
      name: "Ilha das Emoções",
      theme: "ocean",
      icon: "🏝️",
      color: "#60a5fa",
      trails: ["trail-feelings"],
    },
    {
      id: "world-attention",
      name: "Castelo da Atenção",
      theme: "medieval",
      icon: "🏰",
      color: "#a78bfa",
      trails: ["trail-focus"],
    },
    {
      id: "world-coordination",
      name: "Estação da Coordenação",
      theme: "space",
      icon: "🚀",
      color: "#f87171",
      trails: ["trail-motor"],
    },
  ],
  trails: [
    {
      id: "trail-primary-colors",
      name: "Cores Primárias",
      description: "Identificação de Vermelho, Azul e Amarelo",
      activitiesCount: 50,
      skills: ["EI03ET01"],
    },
    {
      id: "trail-basic-shapes",
      name: "Formas Geométricas",
      description: "Círculo, Quadrado e Triângulo",
      activitiesCount: 50,
      skills: ["EI03ET05"],
    },
    {
      id: "trail-feelings",
      name: "Reconhecendo Emoções",
      description: "Alegria, Tristeza, Raiva e Medo",
      activitiesCount: 40,
      skills: ["EI03EO01"],
    },
  ],
  mascot: {
    name: "Brilhante",
    phrases: {
      welcome: "Olá, amiguinho! Vamos brincar?",
      success: "Uau! Você conseguiu!",
      failure: "Tudo bem! Vamos tentar de novo?",
      encourage: "Você está indo muito bem!",
    },
  },
};

export const PRE2_DATA = {
  worlds: [
    {
      id: "world-letters",
      name: "Reino das Letras",
      theme: "castle",
      icon: "👑",
      color: "#818cf8",
      trails: ["trail-alphabet", "trail-vowels", "trail-initial-sounds"],
    },
    {
      id: "world-sounds",
      name: "Planeta dos Sons",
      theme: "space",
      icon: "🪐",
      color: "#c084fc",
      trails: ["trail-phonemes", "trail-auditory-memory"],
    },
    {
      id: "world-numbers",
      name: "Ilha dos Números",
      theme: "tropical",
      icon: "🏝️",
      color: "#fb923c",
      trails: ["trail-counting-20", "trail-quantities-advanced"],
    },
    {
      id: "world-syllables",
      name: "Trem das Sílabas",
      theme: "industrial",
      icon: "🚂",
      color: "#2dd4bf",
      trails: ["trail-simple-syllables", "trail-completing-syllables"],
    },
    {
      id: "world-focus",
      name: "Cidade da Atenção",
      theme: "urban",
      icon: "🏙️",
      color: "#94a3b8",
      trails: ["trail-sustained-attention", "trail-visual-perception"],
    },
    {
      id: "world-imagination",
      name: "Laboratório da Imaginação",
      theme: "steampunk",
      icon: "🧪",
      color: "#f43f5e",
      trails: ["trail-logical-sequence", "trail-emotions-pre2"],
    },
  ],
  trails: [
    {
      id: "trail-alphabet",
      name: "O Alfabeto Mágico",
      description: "Domínio completo do alfabeto",
      activitiesCount: 150,
      skills: ["EI03LP01", "EI03LP02"],
    },
    {
      id: "trail-vowels",
      name: "Vogais em Aventura",
      description: "Reconhecimento e traçado das vogais",
      activitiesCount: 80,
      skills: ["EI03LP01"],
    },
    {
      id: "trail-initial-sounds",
      name: "Sons Iniciais",
      description: "Identificação do som inicial das palavras",
      activitiesCount: 120,
      skills: ["EI03LP02"],
    },
    {
      id: "trail-phonemes",
      name: "Consciência Fonológica",
      description: "Brincando com os sons das letras",
      activitiesCount: 150,
      skills: ["EI03LP03", "EI03LP04"],
    },
    {
      id: "trail-auditory-memory",
      name: "Memória de Elefante",
      description: "Exercícios de memória auditiva e comandos",
      activitiesCount: 100,
      skills: ["EI03LP03"],
    },
    {
      id: "trail-counting-20",
      name: "Contando até 20",
      description: "Sequência numérica e reconhecimento",
      activitiesCount: 120,
      skills: ["EI03ET07"],
    },
    {
      id: "trail-quantities-advanced",
      name: "Mestre das Quantidades",
      description: "Associação número-quantidade complexa",
      activitiesCount: 100,
      skills: ["EI03ET07"],
    },
    {
      id: "trail-simple-syllables",
      name: "Estação Sílabas",
      description: "Introdução às sílabas simples",
      activitiesCount: 150,
      skills: ["EI03LP04"],
    },
    {
      id: "trail-completing-syllables",
      name: "Completando Palavras",
      description: "Identificação de sílabas faltantes",
      activitiesCount: 120,
      skills: ["EI03LP04"],
    },
    {
      id: "trail-sustained-attention",
      name: "Foco Total",
      description: "Atividades para aumentar o tempo de concentração",
      activitiesCount: 100,
      skills: ["EI03EO02"],
    },
    {
      id: "trail-visual-perception",
      name: "Olhos de Águia",
      description: "Diferenças, semelhanças e labirintos",
      activitiesCount: 120,
      skills: ["EI03ET05"],
    },
    {
      id: "trail-logical-sequence",
      name: "Histórias em Ordem",
      description: "Sequência lógica temporal e de fatos",
      activitiesCount: 100,
      skills: ["EI03ET01"],
    },
    {
      id: "trail-emotions-pre2",
      name: "Coração Sabido",
      description: "Regulação emocional e empatia",
      activitiesCount: 80,
      skills: ["EI03EO01", "EI03EO04"],
    },
  ],
};
