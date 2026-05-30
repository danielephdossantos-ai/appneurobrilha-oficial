
import { ActivityTemplate } from "./types";

export const TEMPLATES: ActivityTemplate[] = [
  // MATEMÁTICA
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
    bnccCodes: ["EF02MA01", "EF01MA10"],
    baseDifficulty: "medium",
    cognitiveLoad: 4,
    minAge: 6,
    maxAge: 9,
    logic: "Ordenar itens de acordo com uma regra."
  },
  {
    id: "temp_comp_1",
    name: "Comparação de Quantidades",
    type: "selection",
    bnccCodes: ["EF01MA01", "EF02MA03"],
    baseDifficulty: "easy",
    cognitiveLoad: 3,
    minAge: 4,
    maxAge: 8,
    logic: "Identificar onde há mais ou menos objetos."
  },
  {
    id: "temp_money_1",
    name: "Sistema Monetário",
    type: "matching",
    bnccCodes: ["EF02MA20"],
    baseDifficulty: "medium",
    cognitiveLoad: 5,
    minAge: 7,
    maxAge: 10,
    logic: "Associar valores a moedas e cédulas."
  },

  // PORTUGUÊS
  {
    id: "temp_match_1",
    name: "Pareamento Palavra-Imagem",
    type: "matching",
    bnccCodes: ["EF01LP02", "EF02LP04"],
    baseDifficulty: "easy",
    cognitiveLoad: 3,
    minAge: 5,
    maxAge: 8,
    logic: "Ligar imagem ao nome ou som correspondente."
  },
  {
    id: "temp_syll_1",
    name: "Formação de Sílabas",
    type: "sequence",
    bnccCodes: ["EF01LP06", "EF01LP08"],
    baseDifficulty: "medium",
    cognitiveLoad: 4,
    minAge: 5,
    maxAge: 7,
    logic: "Ordenar sílabas para formar o nome do objeto."
  },

  // CIÊNCIAS
  {
    id: "temp_sci_body",
    name: "Corpo Humano",
    type: "selection",
    bnccCodes: ["EF01CI02"],
    baseDifficulty: "easy",
    cognitiveLoad: 3,
    minAge: 5,
    maxAge: 8,
    logic: "Identificar partes do corpo e suas funções."
  },
  {
    id: "temp_sci_animals",
    name: "Classificação Animal",
    type: "sorting",
    bnccCodes: ["EF02CI04"],
    baseDifficulty: "medium",
    cognitiveLoad: 4,
    minAge: 6,
    maxAge: 9,
    logic: "Separar animais por características (habitat, pele, alimentação)."
  },

  // GEOGRAFIA
  {
    id: "temp_geo_map",
    name: "Localização e Mapas",
    type: "selection",
    bnccCodes: ["EF01GE09"],
    baseDifficulty: "easy",
    cognitiveLoad: 3,
    minAge: 5,
    maxAge: 8,
    logic: "Identificar pontos de referência em um mapa simples."
  },

  // HISTÓRIA
  {
    id: "temp_his_fam",
    name: "História da Família",
    type: "matching",
    bnccCodes: ["EF01HI02"],
    baseDifficulty: "easy",
    cognitiveLoad: 2,
    minAge: 5,
    maxAge: 7,
    logic: "Identificar membros da família e graus de parentesco."
  },

  // ARTES
  {
    id: "temp_art_colors",
    name: "Teoria das Cores",
    type: "sorting",
    bnccCodes: ["EF01AR02"],
    baseDifficulty: "easy",
    cognitiveLoad: 2,
    minAge: 4,
    maxAge: 10,
    logic: "Agrupar objetos por cores primárias e secundárias."
  },

  // OFICINA CRIATIVA
  {
    id: "temp_cre_mosaic",
    name: "Mosaico de Formas",
    type: "creative",
    bnccCodes: ["EI03ET05", "EF01AR02"],
    baseDifficulty: "medium",
    cognitiveLoad: 4,
    minAge: 4,
    maxAge: 10,
    logic: "Completar um padrão visual usando formas e cores."
  },
  {
    id: "temp_cre_patterns",
    name: "Sequência de Cores",
    type: "sequence",
    bnccCodes: ["EI03ET07"],
    baseDifficulty: "easy",
    cognitiveLoad: 3,
    minAge: 3,
    maxAge: 6,
    logic: "Seguir a ordem lógica de cores para completar o colar."
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
