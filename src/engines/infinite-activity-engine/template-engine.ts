
import { ActivityTemplate } from "./types";

export const TEMPLATES: ActivityTemplate[] = [
  {
    id: "temp_sel_1",
    name: "Seleção Simples",
    type: "selection",
    bnccCodes: ["EF01MA01", "EF01MA02"],
    baseDifficulty: "easy",
    cognitiveLoad: 2,
    minAge: 4,
    maxAge: 7,
    logic: "Escolha um objeto alvo entre várias opções."
  },
  {
    id: "temp_seq_1",
    name: "Sequência Lógica",
    type: "sequence",
    bnccCodes: ["EF02MA01"],
    baseDifficulty: "medium",
    cognitiveLoad: 4,
    minAge: 6,
    maxAge: 9,
    logic: "Ordenar itens de acordo com uma regra."
  },
  {
    id: "temp_match_1",
    name: "Pareamento",
    type: "matching",
    bnccCodes: ["EF01LP02", "EF02LP04"],
    baseDifficulty: "easy",
    cognitiveLoad: 3,
    minAge: 5,
    maxAge: 8,
    logic: "Ligar imagem ao nome ou som correspondente."
  }
];

export class TemplateEngine {
  static findTemplatesBySkill(bnccCode: string, age: number): ActivityTemplate[] {
    return TEMPLATES.filter(t => 
      t.bnccCodes.includes(bnccCode) && 
      age >= t.minAge && 
      age <= t.maxAge
    );
  }

  static getRandomTemplate(templates: ActivityTemplate[]): ActivityTemplate {
    return templates[Math.floor(Math.random() * templates.length)];
  }
}
