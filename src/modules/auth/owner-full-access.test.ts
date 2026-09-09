import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("acesso integral da conta proprietária", () => {
  const migration = readFileSync(
    resolve(process.cwd(), "supabase/migrations/20260908061000_owner_full_family_teacher_access.sql"),
    "utf8",
  );
  const routing = readFileSync(resolve(process.cwd(), "src/lib/account-routing.ts"), "utf8");

  it("concede administração e perfil docente permanente no banco", () => {
    expect(migration).toContain("neurobrilha@gmail.com");
    expect(migration).toContain("INSERT INTO public.user_roles");
    expect(migration).toContain("INSERT INTO public.teacher_profiles");
    expect(migration).toContain("2099-12-31 23:59:59+00");
  });

  it("reaplica o acesso em conta nova e em conta já existente", () => {
    expect(migration).toContain("CREATE TRIGGER ensure_neurobrilha_owner_access_trigger");
    expect(migration).toContain("FROM auth.users");
  });

  it("permite ao administrador escolher Família ou Professor", () => {
    expect(routing).toContain('accountType === "teacher"');
    expect(routing).toContain('accountType === "family"');
    expect(routing).toContain('return "/admin"');
  });
});
