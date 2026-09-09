import { ActivityTemplate } from "./types";

export const TEMPLATES: ActivityTemplate[] = [
  // MATEMÁTICA
  {
    id: "temp_sel_1",
    name: "Seleção Simples",
    type: "selection",
    bnccCodes: ["EF01MA01", "EF01MA02", "EF04MA01", "EF05MA01"],
    baseDifficulty: "easy",
    cognitiveLoad: 2,
    minAge: 4,
    maxAge: 12,
    logic: "Escolha um objeto alvo entre várias opções.",
  },
  {
    id: "temp_seq_1",
    name: "Sequência Lógica",
    type: "sequence",
    bnccCodes: ["EF02MA01", "EF01MA10", "EF03MA03", "EF06MA01"],
    baseDifficulty: "medium",
    cognitiveLoad: 4,
    minAge: 6,
    maxAge: 14,
    logic: "Ordenar itens de acordo com uma regra.",
  },
  {
    id: "temp_comp_1",
    name: "Comparação de Quantidades",
    type: "selection",
    bnccCodes: ["EF01MA01", "EF02MA03", "EF07MA01", "EF08MA01", "EF09MA01"],
    baseDifficulty: "easy",
    cognitiveLoad: 3,
    minAge: 4,
    maxAge: 16,
    logic: "Identificar onde há mais ou menos objetos.",
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
    logic: "Associar valores a moedas e cédulas.",
  },

  // PORTUGUÊS
  {
    id: "temp_match_1",
    name: "Pareamento Palavra-Imagem",
    type: "matching",
    bnccCodes: ["EF01LP02", "EF02LP04", "EI03EF09", "EF03LP01"],
    baseDifficulty: "easy",
    cognitiveLoad: 3,
    minAge: 4,
    maxAge: 10,
    logic: "Ligar imagem ao nome ou som correspondente.",
  },
  {
    id: "temp_syll_1",
    name: "Formação de Sílabas",
    type: "sequence",
    bnccCodes: ["EF01LP06", "EF01LP08", "EF04LP01", "EF07LP01"],
    baseDifficulty: "medium",
    cognitiveLoad: 4,
    minAge: 5,
    maxAge: 13,
    logic: "Ordenar sílabas para formar o nome do objeto.",
  },
  {
    id: "temp_interp_1",
    name: "Interpretação Básica",
    type: "selection",
    bnccCodes: ["EF05LP01", "EF06LP01", "EF08LP01", "EF09LP01"],
    baseDifficulty: "medium",
    cognitiveLoad: 6,
    minAge: 9,
    maxAge: 16,
    logic: "Escolher a resposta correta sobre um tema ou imagem.",
  },

  // CIÊNCIAS
  {
    id: "temp_sci_body",
    name: "Corpo Humano",
    type: "selection",
    bnccCodes: ["EF01CI02", "EI03ET03"],
    baseDifficulty: "easy",
    cognitiveLoad: 3,
    minAge: 5,
    maxAge: 8,
    logic: "Identificar partes do corpo e suas funções.",
  },
  {
    id: "temp_sci_animals",
    name: "Classificação Animal",
    type: "sorting",
    bnccCodes: ["EF02CI04", "EF04CI04"],
    baseDifficulty: "medium",
    cognitiveLoad: 4,
    minAge: 6,
    maxAge: 10,
    logic: "Separar animais por características (habitat, pele, alimentação).",
  },
  {
    id: "temp_sci_matter",
    name: "Estados Físicos",
    type: "matching",
    bnccCodes: ["EF03CI04", "EF05CI01"],
    baseDifficulty: "medium",
    cognitiveLoad: 5,
    minAge: 8,
    maxAge: 12,
    logic: "Associar materiais aos seus estados físicos (sólido, líquido, gasoso).",
  },

  // GEOGRAFIA
  {
    id: "temp_geo_map",
    name: "Localização e Mapas",
    type: "selection",
    bnccCodes: ["EF01GE09", "EF04GE05"],
    baseDifficulty: "easy",
    cognitiveLoad: 3,
    minAge: 5,
    maxAge: 12,
    logic: "Identificar pontos de referência em um mapa simples.",
  },
  {
    id: "temp_geo_landscape",
    name: "Paisagens e Transformação",
    type: "matching",
    bnccCodes: ["EF02GE01", "EF03GE04", "EF05GE03"],
    baseDifficulty: "medium",
    cognitiveLoad: 4,
    minAge: 7,
    maxAge: 12,
    logic: "Comparar paisagens naturais e urbanas.",
  },

  // HISTÓRIA
  {
    id: "temp_his_fam",
    name: "História da Família",
    type: "matching",
    bnccCodes: ["EF01HI02", "EF02HI01"],
    baseDifficulty: "easy",
    cognitiveLoad: 2,
    minAge: 5,
    maxAge: 9,
    logic: "Identificar membros da família e graus de parentesco.",
  },
  {
    id: "temp_his_timeline",
    name: "Patrimônio e História",
    type: "sequence",
    bnccCodes: ["EF03HI04", "EF04HI01", "EF05HI01"],
    baseDifficulty: "medium",
    cognitiveLoad: 5,
    minAge: 8,
    maxAge: 13,
    logic: "Ordenar fatos históricos ou identificar patrimônios culturais.",
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
    logic: "Agrupar objetos por cores primárias e secundárias.",
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
    logic: "Completar um padrão visual usando formas e cores.",
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
    logic: "Seguir a ordem lógica de cores para completar o colar.",
  },

  // BRILHA VIDA (SOCIOEMOCIONAL)
  {
    id: "temp_bv_emo",
    name: "Termômetro das Emoções",
    type: "emotion-match",
    bnccCodes: ["BV-EMO", "BV-AUT"],
    baseDifficulty: "easy",
    cognitiveLoad: 2,
    minAge: 3,
    maxAge: 12,
    logic: "Associar o rosto ou situação ao sentimento correspondente.",
  },
  {
    id: "temp_bv_story",
    name: "História Social Brilha",
    type: "social-story",
    bnccCodes: ["BV-EMP", "BV-CON"],
    baseDifficulty: "medium",
    cognitiveLoad: 4,
    minAge: 4,
    maxAge: 14,
    logic: "Escolher a melhor atitude para uma situação de convivência.",
  },
];

export class TemplateEngine {
  static findTemplatesBySkill(bnccCode: string, age: number): ActivityTemplate[] {
    return TEMPLATES.filter(
      (t) => t.bnccCodes.includes(bnccCode) && age >= t.minAge && age <= t.maxAge,
    );
  }

  static getRandomTemplate(templates: ActivityTemplate[]): ActivityTemplate {
    return templates[Math.floor(Math.random() * templates.length)];
  }
}
