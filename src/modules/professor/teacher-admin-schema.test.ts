import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const sql = readFileSync(resolve(process.cwd(), "supabase/migrations/20260902033000_teacher_admin_console.sql"), "utf8");

describe("console administrativo do professor", () => {
  it("protege todas as operações administrativas por função de admin", () => {
    expect(sql.match(/NOT public\.has_role\(auth\.uid\(\), 'admin'\)/g)?.length).toBeGreaterThanOrEqual(3);
    expect(sql).toContain("REVOKE ALL ON FUNCTION public.admin_list_teacher_accounts() FROM PUBLIC");
  });

  it("armazena código somente como hash e respeita a duração escolhida", () => {
    expect(sql).toContain("encode(digest(generated_code, 'sha256'), 'hex')");
    expect(sql).toContain("make_interval(days => code_row.duration_days)");
    expect(sql).toContain("duration_days BETWEEN 1 AND 730");
  });

  it("permite apenas suspensão ou renovação de uma conta existente", () => {
    expect(sql).toContain("requested_action NOT IN ('suspend', 'renew')");
    expect(sql).toContain("RAISE EXCEPTION 'TEACHER_NOT_FOUND'");
    expect(sql).toContain("SET status = 'suspended', access_source = 'admin_code'");
  });
});

