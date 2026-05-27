
export interface BNCCSkill {
  id: string;
  code: string; // e.g., EF01MA01
  description: string;
  field: "lingua-portuguesa" | "matematica" | "ciencias" | "geografia" | "historia" | "artes" | "educacao-fisica";
  level: number; // 1 to 9 (year)
}

export const BNCC_SKILLS: BNCCSkill[] = [
  {
    id: "1",
    code: "EF01MA01",
    field: "matematica",
    level: 1,
    description: "Utilizar números naturais como indicador de quantidade ou de ordem em diferentes situações cotidianas e reconhecer situações em que os números não indicam contagem nem ordem, mas sim código de identificação.",
  },
  {
    id: "2",
    code: "EF01LP01",
    field: "lingua-portuguesa",
    level: 1,
    description: "Reconhecer que textos são lidos e escritos da esquerda para a direita e de cima para baixo do papel.",
  },
  // ... more skills can be added
];
