import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
const migrations = [630000, 640000, 650000, 660000].map((suffix, index) => `supabase/migrations/20260904${suffix}_teacher_inclusive_lessons_philosophy_grade_0${index + 6}_complete.sql`);
const sql = migrations.map((file) => readFileSync(resolve(process.cwd(), file), "utf8"));
const codes = sql.flatMap((content) => Array.from(content.matchAll(/\('(EF(?:06|07|08|09)FI\d{2})'/g), (match) => match[1]));
describe("Filosofia inclusiva complementar do 6º ao 9º ano", () => {
  it("possui 28 códigos internos sem duplicação", () => { expect(codes).toHaveLength(28); expect(new Set(codes).size).toBe(28); });
  it("cobre sete códigos em cada ano", () => { for (const year of [6, 7, 8, 9]) for (let i = 1; i <= 7; i++) expect(codes).toContain(`EF0${year}FI${String(i).padStart(2, "0")}`); });
  it("não se apresenta como BNCC oficial", () => { for (const content of sql) for (const value of ["curriculum_status','complementary", "code_authority','neurobrilha_internal", "not_official_bncc',true"]) expect(content).toContain(value); });
  it("mantém acessibilidade e privacidade", () => { for (const content of sql) for (const value of ["privacy_preserving", "no_forced_debate", "aac", "captions", "transcript", "copyright_respect"]) expect(content).toContain(value); });
});
