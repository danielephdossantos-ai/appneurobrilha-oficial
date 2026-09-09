/**
 * @deprecated Use `BNCCRepository` from `@/modules/bncc-repository`.
 * Kept as a shim so existing imports (`BNCCEngine`, `BNCC_DATA`) keep working.
 * All data now comes from the central BNCCRepository.
 */
import { BNCCRepository } from "@/modules/bncc-repository";
import type { BNCCSkill } from "./types";

const toLocal = (s: { code: string; description: string; field: string; level: number }): BNCCSkill => ({
  code: s.code,
  description: s.description,
  field: s.field,
  level: s.level,
});

export const BNCC_DATA: BNCCSkill[] = BNCCRepository.all().map(toLocal);

export class BNCCEngine {
  static getSkillsByLevel(level: number): BNCCSkill[] {
    return BNCCRepository.getByLevel(level).map(toLocal);
  }

  static getSkillByCode(code: string): BNCCSkill | undefined {
    const s = BNCCRepository.getByCode(code);
    return s ? toLocal(s) : undefined;
  }
}
