/**
 * @deprecated Use `BNCCRepository` from `@/modules/bncc-repository` directly.
 * This module is now a shim that re-exports from the central repository to
 * preserve backward compatibility with existing imports.
 */
export { BNCCRepository, BNCC_SKILLS } from "@/modules/bncc-repository";
export type { BNCCSkill } from "@/modules/bncc-repository";
