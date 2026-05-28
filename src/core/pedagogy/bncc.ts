
export interface BNCCSkill {
  id: string;
  code: string; // e.g., EF01MA01
  description: string;
  field: "lingua-portuguesa" | "matematica" | "ciencias" | "geografia" | "historia" | "artes" | "educacao-fisica" | "psicomotricidade";
  level: number; // 0 (Preschool), 1 to 9 (year)
  domain?: "alfabetizacao" | "matematica" | "leitura" | "interpretacao" | "coordenacao" | "ortografia";
}

export const BNCC_SKILLS: BNCCSkill[] = [
  // Educação Infantil (Level 0) - Pré-Escola
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
    description: "Levantar hipóteses em relação à linguagem escrita, realizando registros de palavras e textos.",
  },
  {
    id: "ei3",
    code: "EI03CG05",
    field: "psicomotricidade",
    level: 0,
    domain: "coordenacao",
    description: "Coordenar suas habilidades manuais no atendimento a seus interesses e necessidades.",
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
    description: "Escrever, espontaneamente ou por ditado, palavras e frases de forma alfabética.",
  },

  // 2º Ano
  {
    id: "ef02ma01",
    code: "EF02MA01",
    field: "matematica",
    level: 2,
    domain: "matematica",
    description: "Comparar e ordenar números naturais (até a ordem de centenas) pela compreensão de características do sistema de numeração decimal.",
  },
  {
    id: "ef02lp04",
    code: "EF02LP04",
    field: "lingua-portuguesa",
    level: 2,
    domain: "leitura",
    description: "Ler e compreender, em colaboração com os colegas e com a ajuda do professor, listas, avisos, convites e receitas.",
  },

  // 3º Ano
  {
    id: "ef03ma03",
    code: "EF03MA03",
    field: "matematica",
    level: 3,
    domain: "matematica",
    description: "Construir e utilizar fatos básicos da adição e da multiplicação para o cálculo mental ou escrito.",
  },
  {
    id: "ef03lp01",
    code: "EF03LP01",
    field: "lingua-portuguesa",
    level: 3,
    domain: "leitura",
    description: "Ler e compreender, silenciosamente e, em seguida, em voz alta, com autonomia e fluência, gêneros variados.",
  },

  // 4º Ano
  {
    id: "ef04ma01",
    code: "EF04MA01",
    field: "matematica",
    level: 4,
    domain: "matematica",
    description: "Ler, escrever e ordenar números naturais até a ordem das dezenas de milhar.",
  },
  {
    id: "ef04lp03",
    code: "EF04LP03",
    field: "lingua-portuguesa",
    level: 4,
    domain: "ortografia",
    description: "Localizar palavras no dicionário para esclarecer dúvida sobre a escrita de palavras.",
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
  {
    id: "ef05lp01",
    code: "EF05LP01",
    field: "lingua-portuguesa",
    level: 5,
    domain: "leitura",
    description: "Participar de dispositivos de leitura, como clubes de leitura e rodas de conversa sobre livros lidos.",
  },

  // 6º Ano
  {
    id: "ef06ma01",
    code: "EF06MA01",
    field: "matematica",
    level: 6,
    domain: "matematica",
    description: "Resolver e elaborar problemas que envolvam cálculos com números naturais e com números racionais.",
  },
  {
    id: "ef06lp01",
    code: "EF06LP01",
    field: "lingua-portuguesa",
    level: 6,
    domain: "interpretacao",
    description: "Reconhecer a impossibilidade de uma neutralidade absoluta no relato de fatos e identificar diferentes perspectivas.",
  },

  // 7º Ano
  {
    id: "ef07ma01",
    code: "EF07MA01",
    field: "matematica",
    level: 7,
    domain: "matematica",
    description: "Resolver e elaborar problemas com números inteiros, envolvendo as operações fundamentais.",
  },

  // 8º Ano
  {
    id: "ef08ma01",
    code: "EF08MA01",
    field: "matematica",
    level: 8,
    domain: "matematica",
    description: "Efetuar cálculos com potências de expoentes inteiros e aplicar esse conhecimento na resolução de problemas.",
  },

  // 9º Ano
  {
    id: "ef09ma01",
    code: "EF09MA01",
    field: "matematica",
    level: 9,
    domain: "matematica",
    description: "Reconhecer que um número racional pode ser escrito na forma decimal e vice-versa.",
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
