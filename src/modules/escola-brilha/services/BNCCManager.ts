import { BNCC_Field, Lesson } from "../types/lesson";

export interface SkillDefinition {
  code: string;
  field: BNCC_Field;
  method: "phonics" | "cra" | "neuro" | "vygotsky";
  title: string;
}

export const PORTUGUESE_SKILLS: SkillDefinition[] = [
  { code: "EF01LP01", field: "escuta_fala", method: "phonics", title: "Consciência Fonêmica" },
  { code: "EF01LP02", field: "escuta_fala", method: "phonics", title: "Escrita de Palavras" },
  // ... rest of LP01-LP10
];

export const MATH_SKILLS: SkillDefinition[] = [
  { code: "EF01MA01", field: "espacos_tempos", method: "cra", title: "Contagem de Objetos" },
  { code: "EF01MA02", field: "espacos_tempos", method: "cra", title: "Escrita de Números" },
  // ... rest of MA01-MA09
];

export const createBNCCObjective = (skill: SkillDefinition): Partial<Lesson> => {
  return {
    skill_bncc: skill.code,
    bncc_field: skill.field,
    title: skill.title,
  };
};
