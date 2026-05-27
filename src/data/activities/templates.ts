
import { ActivityTemplate } from "../../core/activity-engine/types";

export const ACTIVITY_TEMPLATES: ActivityTemplate[] = [
  {
    id: "tpl-phonics-1",
    type: "multiple-choice",
    title: "Consciência Fonológica",
    instruction: "Qual é a primeira letra da palavra?",
    baseDifficulty: "easy",
    contentPool: ["p-001", "p-002", "p-003"],
    requiredSkills: ["EF01LP01"]
  },
  {
    id: "tpl-math-visual-1",
    type: "drag-drop",
    title: "Matemática Visual",
    instruction: "Arraste o número correto para a quantidade de frutas",
    baseDifficulty: "easy",
    contentPool: ["i-001", "i-002", "m-001", "m-002"],
    requiredSkills: ["EF01MA01"]
  },
  {
    id: "tpl-pairing-1",
    type: "pairing",
    title: "Percepção Visual",
    instruction: "Encontre os pares de animais",
    baseDifficulty: "medium",
    contentPool: ["i-003", "i-004"],
    requiredSkills: ["EF01CI04"]
  }
];
