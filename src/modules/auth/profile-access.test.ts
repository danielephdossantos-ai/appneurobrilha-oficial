import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const read = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");
const migration = read("supabase/migrations/20260911090000_separate_admin_family_teacher_access.sql");
const auth = read("src/routes/auth.tsx");
const routing = read("src/lib/account-routing.ts");
const guard = read("src/modules/auth/components/ProfileAccessGuard.tsx");
const home = read("src/routes/index.tsx");
const teacherArea = read("src/routes/area-professor.tsx");
const teacherShell = read("src/components/teacher/TeacherShell.tsx");
const layout = read("src/components/Layout.tsx");

 describe("separacao de acessos do Bloco 1", () => {
  it("concede admin por email no banco e remove somente o fluxo administrativo", () => {
    expect(migration).toContain("lower(email) = 'neurobrilha@gmail.com'");
    expect(migration).toContain("INSERT INTO public.user_roles");
    expect(migration).toContain("ON CONFLICT (user_id, role) DO NOTHING");
    expect(migration).toContain("DROP FUNCTION IF EXISTS public.redeem_admin_access_code(text)");
    expect(migration).toContain("DROP TABLE IF EXISTS public.admin_access_codes");
    expect(migration).not.toContain("teacher_access_codes");
    expect(migration).not.toContain("teacher_student_invite_codes");
  });

  it("usa email e senha e role admin, sem campo ou RPC administrativo", () => {
    expect(auth).toContain("Sou administradora");
    expect(auth).toContain('.eq("role", "admin")');
    expect(auth).not.toContain("Código administrativo");
    expect(auth).not.toContain("redeem_admin_access_code");
    expect(auth).not.toContain("adminCode");
  });

  it("mantem professor na Home quando navega para fora da area docente", () => {
    expect(routing).toContain("requestedNext && !requestedNext.startsWith(\"/admin\")");
    expect(home).not.toContain("resolveAccountDestination");
    expect(home).not.toContain('navigate({ href: target, replace: true })');
    expect(teacherShell).toContain("Ir para o aplicativo e aulas");
    expect(layout).toContain('to: "/area-professor"');
  });

  it("protege area docente, familia e administrador por perfil do banco", () => {
    expect(guard).toContain('from("user_roles")');
    expect(guard).toContain('from("teacher_profiles")');
    expect(guard).toContain('"/painel-pais"');
    expect(guard).toContain('"/anamnese"');
    expect(guard).toContain('"/area-professor"');
    expect(guard).toContain('account_type === "teacher"');
    expect(teacherArea).toContain('from("teacher_profiles")');
  });
});
