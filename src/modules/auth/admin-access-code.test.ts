import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const migration = readFileSync(
  resolve(process.cwd(), "supabase/migrations/20260910090000_admin_access_code.sql"),
  "utf8",
);

describe("acesso administrativo por código", () => {
  it("armazena somente o hash e exige usuário autenticado", () => {
    expect(migration).toContain("digest(upper(btrim(p_code)), 'sha256')");
    expect(migration).toContain("auth.uid()");
    expect(migration).not.toContain("NB-ADM-");
  });

  it("é de uso único e concede somente a função admin", () => {
    expect(migration).toContain("max_uses integer NOT NULL DEFAULT 1");
    expect(migration).toContain("'admin'::public.app_role");
    expect(migration).toContain("active = (use_count + 1) < max_uses");
  });

  it("não permite leitura direta dos códigos", () => {
    expect(migration).toContain("REVOKE ALL ON public.admin_access_codes FROM anon, authenticated");
  });
});
