
export interface BNCCSkill {
  id: string;
  code: string; // e.g., EF01MA01
  description: string;
  field: "lingua-portuguesa" | "matematica" | "ciencias" | "geografia" | "historia" | "artes" | "educacao-fisica" | "psicomotricidade";
  level: number; // 0 (Preschool), 1 to 9 (year)
  domain?: "alfabetizacao" | "matematica" | "leitura" | "interpretacao" | "coordenacao" | "gramatica" | "algebra" | "geometria";
}

export const BNCC_SKILLS: BNCCSkill[] = [
  // Educação Infantil (Level 0)
  { id: "ei1", code: "EI03ET07", field: "matematica", level: 0, domain: "matematica", description: "Relacionar números às suas respectivas quantidades." },
  { id: "ei2", code: "EI03EF09", field: "lingua-portuguesa", level: 0, domain: "alfabetizacao", description: "Levantar hipóteses em relação à linguagem escrita." },

  // 1º Ano
  { id: "ef01ma01", code: "EF01MA01", field: "matematica", level: 1, domain: "matematica", description: "Utilizar números naturais como indicador de quantidade ou de ordem." },
  { id: "ef01lp02", code: "EF01LP02", field: "lingua-portuguesa", level: 1, domain: "alfabetizacao", description: "Escrever, espontaneamente ou por ditado, palavras e frases." },

  // 2º Ano
  { id: "ef02ma01", code: "EF02MA01", field: "matematica", level: 2, domain: "matematica", description: "Comparar e ordenar números naturais (até a ordem de centenas)." },
  { id: "ef02lp04", code: "EF02LP04", field: "lingua-portuguesa", level: 2, domain: "alfabetizacao", description: "Ler e escrever corretamente palavras com sílabas CV, V, CVC, CCV." },

  // 3º Ano
  { id: "ef03ma03", code: "EF03MA03", field: "matematica", level: 3, domain: "matematica", description: "Construir e utilizar fatos básicos da adição e da multiplicação." },
  { id: "ef03lp01", code: "EF03LP01", field: "lingua-portuguesa", level: 3, domain: "leitura", description: "Ler e compreender textos variados com autonomia e fluência." },

  // 4º Ano
  { id: "ef04ma01", code: "EF04MA01", field: "matematica", level: 4, domain: "matematica", description: "Ler, escrever e ordenar números naturais até a ordem das dezenas de milhar." },
  { id: "ef04lp01", code: "EF04LP01", field: "lingua-portuguesa", level: 4, domain: "gramatica", description: "Grafar palavras utilizando regras de acentuação gráfica." },

  // 5º Ano
  { id: "ef05ma01", code: "EF05MA01", field: "matematica", level: 5, domain: "matematica", description: "Ler, escrever e ordenar números naturais até a ordem das centenas de milhar." },
  { id: "ef05lp01", code: "EF05LP01", field: "lingua-portuguesa", level: 5, domain: "interpretacao", description: "Inferir o sentido de palavras ou expressões desconhecidas em textos." },

  // 6º Ano
  { id: "ef06ma01", code: "EF06MA01", field: "matematica", level: 6, domain: "matematica", description: "Resolver e elaborar problemas com números naturais, envolvendo as quatro operações." },
  { id: "ef06lp01", code: "EF06LP01", field: "lingua-portuguesa", level: 6, domain: "interpretacao", description: "Reconhecer a impossibilidade de uma neutralidade absoluta no relato de fatos." },

  // 7º Ano
  { id: "ef07ma01", code: "EF07MA01", field: "matematica", level: 7, domain: "matematica", description: "Resolver e elaborar problemas com números inteiros." },
  { id: "ef07lp01", code: "EF07LP01", field: "lingua-portuguesa", level: 7, domain: "gramatica", description: "Distinguir palavras derivadas por prefixação e sufixação." },

  // 8º Ano
  { id: "ef08ma01", code: "EF08MA01", field: "matematica", level: 8, domain: "matematica", description: "Efetuar cálculos com potências de expoentes inteiros e aplicar suas propriedades." },
  { id: "ef08lp01", code: "EF08LP01", field: "lingua-portuguesa", level: 8, domain: "interpretacao", description: "Identificar e comparar as ideias centrais de um texto." },

  // 9º Ano
  { id: "ef09ma01", code: "EF09MA01", field: "matematica", level: 9, domain: "matematica", description: "Resolver e elaborar problemas com números reais." },
  { id: "ef09lp01", code: "EF09LP01", field: "lingua-portuguesa", level: 9, domain: "interpretacao", description: "Analisar o funcionamento das linguagens nas diversas práticas sociais." }
];
