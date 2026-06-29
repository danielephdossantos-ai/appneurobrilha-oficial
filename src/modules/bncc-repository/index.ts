/**
 * BNCCRepository — Single source of truth for BNCC skills metadata.
 *
 * Toda consulta BNCC (in-memory) deve passar exclusivamente por este módulo.
 * Os arquivos `engines/pedagogical-engine/bncc.ts` e
 * `engines/infinite-activity-engine/bncc-engine.ts` agora são apenas
 * shims de compatibilidade que re-exportam daqui.
 *
 * Não alterar interface pública: BNCCSkill, BNCC_SKILLS, BNCC_DATA,
 * getSkillsByLevel, getSkillByCode continuam disponíveis para os
 * consumidores existentes.
 */

export interface BNCCSkill {
  id: string;
  code: string;
  description: string;
  field:
    | "lingua-portuguesa"
    | "matematica"
    | "ciencias"
    | "geografia"
    | "historia"
    | "artes"
    | "educacao-fisica"
    | "psicomotricidade"
    | "socioemocional";
  level: number;
  domain?:
    | "alfabetizacao"
    | "matematica"
    | "leitura"
    | "interpretacao"
    | "coordenacao"
    | "gramatica"
    | "algebra"
    | "geometria"
    | "emocional"
    | "social"
    | "autonomia";
}

const SKILLS: BNCCSkill[] = [
  // Educação Infantil
  { id: "ei1", code: "EI03ET07", field: "matematica", level: 0, domain: "matematica", description: "Relacionar números às suas respectivas quantidades." },
  { id: "ei2", code: "EI03EF09", field: "lingua-portuguesa", level: 0, domain: "alfabetizacao", description: "Levantar hipóteses em relação à linguagem escrita." },
  { id: "ei3", code: "EI03ET05", field: "matematica", level: 0, domain: "geometria", description: "Classificar objetos e figuras de acordo com seus atributos." },
  { id: "ei4", code: "EI03ET03", field: "ciencias", level: 0, domain: "matematica", description: "Identificar e manipular materiais e objetos de diferentes texturas." },

  // 1º Ano
  { id: "ef01ma01", code: "EF01MA01", field: "matematica", level: 1, domain: "matematica", description: "Utilizar números naturais como indicador de quantidade ou de ordem." },
  { id: "ef01lp02", code: "EF01LP02", field: "lingua-portuguesa", level: 1, domain: "alfabetizacao", description: "Escrever, espontaneamente ou por ditado, palavras e frases." },
  { id: "ef01ci02", code: "EF01CI02", field: "ciencias", level: 1, domain: "coordenacao", description: "Localizar, nomear e representar as partes do corpo humano." },
  { id: "ef01ge09", code: "EF01GE09", field: "geografia", level: 1, domain: "algebra", description: "Utilizar pontos de referência para a localização no espaço." },
  { id: "ef01hi02", code: "EF01HI02", field: "historia", level: 1, domain: "gramatica", description: "Identificar a relação entre as pessoas e os lugares." },
  { id: "ef01ar02", code: "EF01AR02", field: "artes", level: 1, domain: "interpretacao", description: "Explorar e reconhecer elementos constitutivos das artes visuais." },

  // 2º Ano
  { id: "ef02ma01", code: "EF02MA01", field: "matematica", level: 2, domain: "matematica", description: "Comparar e ordenar números naturais (até a ordem de centenas)." },
  { id: "ef02lp04", code: "EF02LP04", field: "lingua-portuguesa", level: 2, domain: "alfabetizacao", description: "Ler e escrever corretamente palavras com sílabas simples." },
  { id: "ef02ci04", code: "EF02CI04", field: "ciencias", level: 2, domain: "matematica", description: "Descrever características de plantas e animais." },
  { id: "ef02ma20", code: "EF02MA20", field: "matematica", level: 2, domain: "algebra", description: "Estabelecer a equivalência de valores entre moedas e cédulas." },
  { id: "ef02ge01", code: "EF02GE01", field: "geografia", level: 2, domain: "interpretacao", description: "Descrever elementos das paisagens e seus processos de transformação." },
  { id: "ef02hi01", code: "EF02HI01", field: "historia", level: 2, domain: "coordenacao", description: "Reconhecer espaços de convivência e o papel das pessoas." },

  // 3º Ano
  { id: "ef03ma03", code: "EF03MA03", field: "matematica", level: 3, domain: "matematica", description: "Construir e utilizar fatos básicos da adição e da multiplicação." },
  { id: "ef03lp01", code: "EF03LP01", field: "lingua-portuguesa", level: 3, domain: "leitura", description: "Ler e compreender textos variados com autonomia e fluência." },
  { id: "ef03ci04", code: "EF03CI04", field: "ciencias", level: 3, domain: "algebra", description: "Identificar características e estados físicos da matéria." },
  { id: "ef03ge04", code: "EF03GE04", field: "geografia", level: 3, domain: "matematica", description: "Explicar como os processos naturais alteram as paisagens." },
  { id: "ef03hi04", code: "EF03HI04", field: "historia", level: 3, domain: "interpretacao", description: "Identificar patrimônios históricos e culturais da cidade." },

  // 4º Ano
  { id: "ef04ma01", code: "EF04MA01", field: "matematica", level: 4, domain: "matematica", description: "Ler, escrever e ordenar números naturais até dezenas de milhar." },
  { id: "ef04lp01", code: "EF04LP01", field: "lingua-portuguesa", level: 4, domain: "gramatica", description: "Grafar palavras utilizando regras de acentuação gráfica." },
  { id: "ef04ci04", code: "EF04CI04", field: "ciencias", level: 4, domain: "coordenacao", description: "Analisar o ciclo da matéria e o fluxo de energia nos ecossistemas." },
  { id: "ef04ge05", code: "EF04GE05", field: "geografia", level: 4, domain: "algebra", description: "Distinguir unidades político-administrativas oficiais do Brasil." },
  { id: "ef04hi01", code: "EF04HI01", field: "historia", level: 4, domain: "interpretacao", description: "Reconhecer a história como resultado da ação do ser humano." },

  // 5º Ano
  { id: "ef05ma01", code: "EF05MA01", field: "matematica", level: 5, domain: "matematica", description: "Ler, escrever e ordenar números naturais até centenas de milhar." },
  { id: "ef05lp01", code: "EF05LP01", field: "lingua-portuguesa", level: 5, domain: "interpretacao", description: "Inferir o sentido de palavras desconhecidas em textos." },
  { id: "ef05ci01", code: "EF05CI01", field: "ciencias", level: 5, domain: "matematica", description: "Explorar fenômenos físicos e químicos." },
  { id: "ef05ge03", code: "EF05GE03", field: "geografia", level: 5, domain: "algebra", description: "Identificar as formas e funções das cidades." },
  { id: "ef05hi01", code: "EF05HI01", field: "historia", level: 5, domain: "gramatica", description: "Identificar os mecanismos de organização do poder e das sociedades." },

  // 6º–9º
  { id: "ef06ma01", code: "EF06MA01", field: "matematica", level: 6, domain: "matematica", description: "Resolver e elaborar problemas com números naturais." },
  { id: "ef06lp01", code: "EF06LP01", field: "lingua-portuguesa", level: 6, domain: "interpretacao", description: "Reconhecer a impossibilidade de neutralidade absoluta." },
  { id: "ef07ma01", code: "EF07MA01", field: "matematica", level: 7, domain: "matematica", description: "Resolver e elaborar problemas com números inteiros." },
  { id: "ef07lp01", code: "EF07LP01", field: "lingua-portuguesa", level: 7, domain: "gramatica", description: "Distinguir palavras derivadas por prefixação e sufixação." },
  { id: "ef08ma01", code: "EF08MA01", field: "matematica", level: 8, domain: "matematica", description: "Efetuar cálculos com potências de expoentes inteiros." },
  { id: "ef08lp01", code: "EF08LP01", field: "lingua-portuguesa", level: 8, domain: "interpretacao", description: "Identificar e comparar as ideias centrais de um texto." },
  { id: "ef09ma01", code: "EF09MA01", field: "matematica", level: 9, domain: "matematica", description: "Resolver e elaborar problemas com números reais." },
  { id: "ef09lp01", code: "EF09LP01", field: "lingua-portuguesa", level: 9, domain: "interpretacao", description: "Analisar o funcionamento das linguagens nas práticas sociais." },

  // Socioemocional (Brilha Vida)
  { id: "se_emo", code: "BV-EMO", field: "socioemocional", level: 0, domain: "emocional", description: "Identificar e expressar sentimentos e emoções próprias e dos outros." },
  { id: "se_emp", code: "BV-EMP", field: "socioemocional", level: 1, domain: "social", description: "Praticar a empatia e o respeito às diferenças no convívio social." },
  { id: "se_aut", code: "BV-AUT", field: "socioemocional", level: 2, domain: "autonomia", description: "Desenvolver estratégias de autocontrole e regulação emocional." },
  { id: "se_con", code: "BV-CON", field: "socioemocional", level: 3, domain: "social", description: "Resolver conflitos por meio do diálogo e cooperação." },
];

const BY_CODE = new Map<string, BNCCSkill>(SKILLS.map((s) => [s.code, s]));
const BY_LEVEL = new Map<number, BNCCSkill[]>();
for (const s of SKILLS) {
  const arr = BY_LEVEL.get(s.level) ?? [];
  arr.push(s);
  BY_LEVEL.set(s.level, arr);
}

export const BNCCRepository = {
  all(): BNCCSkill[] {
    return SKILLS.slice();
  },
  getByCode(code: string): BNCCSkill | undefined {
    return BY_CODE.get(code);
  },
  getByLevel(level: number): BNCCSkill[] {
    return (BY_LEVEL.get(level) ?? []).slice();
  },
  getByField(field: BNCCSkill["field"]): BNCCSkill[] {
    return SKILLS.filter((s) => s.field === field);
  },
  has(code: string): boolean {
    return BY_CODE.has(code);
  },
} as const;

// Backwards-compatible aliases (DO NOT add new data here — edit SKILLS above).
export const BNCC_SKILLS: readonly BNCCSkill[] = SKILLS;
