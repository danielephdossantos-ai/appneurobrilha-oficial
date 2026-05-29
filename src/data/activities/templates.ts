
import { ActivityTemplate } from "@/engines/pedagogical-engine/types";

export const ACTIVITY_TEMPLATES: ActivityTemplate[] = [
  // Educação Infantil
  {
    id: "tpl-ei-count-1",
    type: "multiple-choice",
    title: "Contagem Visual",
    instruction: "Quantas frutas você vê?",
    baseDifficulty: "easy",
    contentPool: ["ei-001", "ei-002"],
    requiredSkills: ["EI03ET07"]
  },
  
  // 1º Ano
  {
    id: "tpl-ef1-phonics-1",
    type: "multiple-choice",
    title: "Alfabetização Inicial",
    instruction: "Qual é esta palavra?",
    baseDifficulty: "easy",
    contentPool: ["ef1-001", "ef1-002"],
    requiredSkills: ["EF01LP02"]
  },

  // 3º Ano
  {
    id: "tpl-ef3-reading-1",
    type: "reading",
    title: "Leitura Fluente",
    instruction: "Leia a frase em voz alta",
    baseDifficulty: "medium",
    contentPool: ["ef3-001"],
    requiredSkills: ["EF03LP01"]
  },

  // 5º Ano
  {
    id: "tpl-ef5-interpret-1",
    type: "multiple-choice",
    title: "Interpretação de Texto",
    instruction: "Sobre o que fala o texto?",
    baseDifficulty: "hard",
    contentPool: ["ef5-001"],
    requiredSkills: ["EF05LP01"]
  },

  // 9º Ano
  {
    id: "tpl-ef9-algebra-1",
    type: "multiple-choice",
    title: "Álgebra Avançada",
    instruction: "Resolva a equação de segundo grau",
    baseDifficulty: "hard",
    contentPool: ["ef9-001"],
    requiredSkills: ["EF09MA01"]
  }
];
