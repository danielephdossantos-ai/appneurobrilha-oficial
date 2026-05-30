
import { BNCCSkill } from "./types";

export const BNCC_DATA: BNCCSkill[] = [
  { code: "EF01MA01", description: "Utilizar números naturais como indicador de quantidade ou de ordem em diferentes situações cotidianas.", field: "Matemática", level: 1 },
  { code: "EF01MA02", description: "Contar de maneira exata ou aproximada, utilizando diferentes estratégias.", field: "Matemática", level: 1 },
  { code: "EF01LP01", description: "Reconhecer que textos são lidos e escritos da esquerda para a direita e de cima para baixo.", field: "Língua Portuguesa", level: 1 },
  { code: "EF01LP02", description: "Escrever, espontaneamente ou por ditado, palavras e frases de forma alfabética.", field: "Língua Portuguesa", level: 1 },
  { code: "EF02MA01", description: "Comparar e ordenar números naturais pela compreensão de características do sistema de numeração decimal.", field: "Matemática", level: 2 },
  { code: "EF02LP04", description: "Ler e escrever corretamente palavras com sílabas CV, V, CVC, CCV.", field: "Língua Portuguesa", level: 2 }
];

export class BNCCEngine {
  static getSkillsByLevel(level: number): BNCCSkill[] {
    return BNCC_DATA.filter(skill => skill.level === level);
  }

  static getSkillByCode(code: string): BNCCSkill | undefined {
    return BNCC_DATA.find(skill => skill.code === code);
  }
}
