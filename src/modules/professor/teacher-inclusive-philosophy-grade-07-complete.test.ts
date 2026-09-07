import { describe, it } from "vitest";
import { complementaryValues, philosophyAudit } from "./philosophy-test-helper";
const audit = philosophyAudit(7, "20260904640000_teacher_inclusive_lessons_philosophy_grade_07_complete.sql");
describe("Filosofia inclusiva complementar do 7º ano", () => {
  it("cobre sete códigos", audit.expectCoverage); it("usa fontes ativas", audit.expectSources);
  it("declara currículo complementar", () => audit.expectValues(complementaryValues));
  it("protege neutralidade e dados", () => audit.expectValues(["no_forced_debate", "no_partisan_vote", "no_belief_disclosure", "no_income_collection", "privacy_preserving"]));
  it("preserva direitos e acesso", () => audit.expectValues(["human_rights_framework", "copyright_respect", "argument_map", "timeline", "aac", "captions", "transcript"]));
});
