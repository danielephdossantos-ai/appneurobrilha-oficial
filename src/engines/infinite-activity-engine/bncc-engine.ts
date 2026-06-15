import { BNCC_SKILLS, BNCCSkill as LegacyBNCCSkill } from "../pedagogical-engine/bncc";
import { BNCCSkill } from "./types";

// Convert legacy to new format if needed, but let's just map it
export const BNCC_DATA: BNCCSkill[] = BNCC_SKILLS.map((s) => ({
  code: s.code,
  description: s.description,
  field: s.field,
  level: s.level,
}));

export class BNCCEngine {
  static getSkillsByLevel(level: number): BNCCSkill[] {
    return BNCC_DATA.filter((skill) => skill.level === level);
  }

  static getSkillByCode(code: string): BNCCSkill | undefined {
    return BNCC_DATA.find((skill) => skill.code === code);
  }
}
