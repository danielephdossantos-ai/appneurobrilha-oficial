import { describe, it } from "vitest";
import { complementaryValues, philosophyAudit } from "./philosophy-test-helper";
const audit = philosophyAudit(6, "20260904630000_teacher_inclusive_lessons_philosophy_grade_06_complete.sql");
describe("Filosofia inclusiva complementar do 6º ano", () => {
  it("cobre sete códigos", audit.expectCoverage); it("usa fontes ativas", audit.expectSources);
  it("declara currículo complementar", () => audit.expectValues([...complementaryValues, "currículo complementar"]));
  it("protege diálogo e privacidade", () => audit.expectValues(["no_forced_debate", "no_belief_disclosure", "privacy_preserving", "no_ridicule", "right_to_revise"]));
  it("preserva autoria e acesso", () => audit.expectValues(["historical_non_graphic", "copyright_respect", "argument_map", "aac", "captions", "transcript", "assistive_technology"]));
});
