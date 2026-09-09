import { expect } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

export function philosophyAudit(year: 6 | 7 | 8 | 9, migration: string) {
  const sql = readFileSync(resolve(process.cwd(), `supabase/migrations/${migration}`), "utf8");
  const pattern = new RegExp(`\\('(?<code>EF0${year}FI\\d{2})','(?<source>[^']+)','(?<title>[^']+)'`, "g");
  const rows = Array.from(sql.matchAll(pattern), (match) => match.groups!);
  return {
    sql,
    rows,
    expectCoverage() {
      expect(rows).toHaveLength(7);
      for (let i = 1; i <= 7; i++) expect(rows.filter((row) => row.code === `EF0${year}FI${String(i).padStart(2, "0")}`)).toHaveLength(1);
    },
    expectSources() {
      for (const row of rows) {
        const source = resolve(process.cwd(), row.source);
        expect(existsSync(source)).toBe(true);
        expect(readFileSync(source, "utf8")).toContain(row.code);
      }
    },
    expectValues(values: string[]) {
      for (const value of values) expect(sql).toContain(value);
    },
  };
}

export const complementaryValues = [
  "curriculum_status','complementary",
  "code_authority','neurobrilha_internal",
  "not_official_bncc',true",
  "Filosofia (componente complementar)",
];
