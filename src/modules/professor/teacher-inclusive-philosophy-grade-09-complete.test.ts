import { describe, it } from "vitest";
import { complementaryValues, philosophyAudit } from "./philosophy-test-helper";
const audit = philosophyAudit(9, "20260904660000_teacher_inclusive_lessons_philosophy_grade_09_complete.sql");
describe("Filosofia inclusiva complementar do 9º ano", () => {
  it("cobre sete códigos", audit.expectCoverage); it("usa fontes ativas", audit.expectSources);
  it("declara currículo complementar", () => audit.expectValues(complementaryValues));
  it("protege bioética e história", () => audit.expectValues(["no_partisan_propaganda", "no_ideological_test", "no_body_experiment", "no_diagnosis", "historical_non_graphic"]));
  it("protege dados e acesso", () => audit.expectValues(["no_health_disclosure", "no_genetic_disclosure", "privacy_preserving", "copyright_respect", "argument_map", "captions", "transcript"]));
});
