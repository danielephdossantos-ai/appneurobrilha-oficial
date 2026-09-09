import { describe, it } from "vitest";
import { complementaryValues, philosophyAudit } from "./philosophy-test-helper";
const audit = philosophyAudit(8, "20260904650000_teacher_inclusive_lessons_philosophy_grade_08_complete.sql");
describe("Filosofia inclusiva complementar do 8º ano", () => {
  it("cobre sete códigos", audit.expectCoverage); it("usa fontes ativas", audit.expectSources);
  it("declara currículo complementar", () => audit.expectValues(complementaryValues));
  it("mantém precisão e neutralidade", () => audit.expectValues(["hegel_formula_caveat", "empiricism_rationalism_nuance", "no_partisan_propaganda", "right_to_revise"]));
  it("protege dados e acesso", () => audit.expectValues(["no_income_collection", "privacy_preserving", "no_diagnosis", "argument_map", "aac", "captions", "transcript"]));
});
