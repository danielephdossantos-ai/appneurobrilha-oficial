
export interface BNCCSkill {
  id: string;
  code: string; // e.g., EF01MA01
  description: string;
  field: "lingua-portuguesa" | "matematica" | "ciencias" | "geografia" | "historia" | "artes" | "educacao-fisica" | "psicomotricidade";
  level: number; // 0 (Preschool), 1 to 9 (year)
  domain?: "alfabetizacao" | "matematica" | "leitura" | "interpretacao" | "coordenacao";
}

export const BNCC_SKILLS: BNCCSkill[] = [
  // Educação Infantil (Level 0)
  {
    id: "ei1",
    code: "EI03ET07",
    field: "matematica",
    level: 0,
    domain: "matematica",
    description: "Relacionar números às suas respectivas quantidades e identificar o antes, o depois e o entre em uma sequência.",
  },
  {
    id: "ei2",
    code: "EI03EF09",
    field: "lingua-portuguesa",
    level: 0,
    domain: "alfabetizacao",
    description: "Levantar hipóteses em relação à linguagem escrita, realizando registros de palavras e textos, por meio de escrita espontânea.",
  },
  {
    id: "ei3",
    code: "EI03CG05",
    field: "psicomotricidade",
    level: 0,
    domain: "coordenacao",
    description: "Coordenar suas habilidades manuais no atendimento a seus interesses e necessidades em situações diversas.",
  },

  // 1º Ano
  {
    id: "ef01ma01",
    code: "EF01MA01",
    field: "matematica",
    level: 1,
    domain: "matematica",
    description: "Utilizar números naturais como indicador de quantidade ou de ordem em diferentes situações cotidianas.",
  },
  {
    id: "ef01lp02",
    code: "EF01LP02",
    field: "lingua-portuguesa",
    level: 1,
    domain: "alfabetizacao",
    description: "Escrever, espontaneamente ou por ditado, palavras e frases de forma alfabética – usando letras/grafemas que representam fonemas.",
  },

  // 3º Ano
  {
    id: "ef03lp01",
    code: "EF03LP01",
    field: "lingua-portuguesa",
    level: 3,
    domain: "leitura",
    description: "Ler e compreender, silenciosamente e, em seguida, em voz alta, com autonomia e fluência, gêneros variados.",
  },
  {
    id: "ef03lp11",
    code: "EF03LP11",
    field: "lingua-portuguesa",
    level: 3,
    domain: "interpretacao",
    description: "Ler e compreender textos expositivos de divulgação científica para crianças.",
  },

  // 5º Ano
  {
    id: "ef05ma07",
    code: "EF05MA07",
    field: "matematica",
    level: 5,
    domain: "matematica",
    description: "Resolver e elaborar problemas de adição e subtração com números naturais e com números racionais.",
  },

  // 9º Ano
  {
    id: "ef09ma01",
    code: "EF09MA01",
    field: "matematica",
    level: 9,
    domain: "matematica",
    description: "Reconhecer que um número racional pode ser escrito na forma decimal e vice-versa e aplicar esse conhecimento em situações diversas.",
  },
  {
    id: "ef09lp03",
    code: "EF09LP03",
    field: "lingua-portuguesa",
    level: 9,
    domain: "interpretacao",
    description: "Analisar o posicionamento do autor em diferentes gêneros jornalísticos, comparando diferentes perspectivas.",
  }
];
