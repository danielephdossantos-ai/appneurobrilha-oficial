import { describe, expect, it } from "vitest";
import migration from "../../../supabase/migrations/20260902023000_teacher_access_foundation.sql?raw";

describe("fundação segura da Área do Professor", () => {
  it("mantém perfis, códigos e vínculos em tabelas separadas", () => {
    expect(migration).toContain("public.teacher_profiles");
    expect(migration).toContain("public.teacher_access_codes");
    expect(migration).toContain("public.teacher_student_links");
  });

  it("protege todas as tabelas com RLS", () => {
    for (const table of ["teacher_profiles", "teacher_access_codes", "teacher_student_links", "teacher_student_invite_codes"]) {
      expect(migration).toContain(`ALTER TABLE public.${table} ENABLE ROW LEVEL SECURITY`);
    }
  });

  it("usa convite descartável e autorização do responsável para conectar aluno", () => {
    expect(migration).toContain("teacher_generate_student_invites");
    expect(migration).toContain("guardian_redeem_student_invite");
    expect(migration).toContain("redeemed_at IS NOT NULL");
    expect(migration).toContain("CHILD_NOT_OWNED");
  });

  it("armazena somente hash do código e limita a geração ao administrador", () => {
    expect(migration).toContain("code_hash text NOT NULL UNIQUE");
    expect(migration).toContain("digest(normalized, 'sha256')");
    expect(migration).toContain("NOT public.has_role(auth.uid(), 'admin')");
  });

  it("exige consentimento do responsável para vincular uma criança", () => {
    expect(migration).toContain("guardian_user_id = auth.uid()");
    expect(migration).toContain("c.id = child_id AND c.user_id = auth.uid()");
    expect(migration).toContain("valid_until >= current_date");
  });
});
