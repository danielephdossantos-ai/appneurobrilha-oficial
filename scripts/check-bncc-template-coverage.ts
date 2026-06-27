/**
 * Checagem de cobertura BNCC × Template Pedagógico.
 *
 * Verifica que TODO código BNCC do 6º–9º (LP, MA, CI, HI, GE) em
 * `aulas_bncc` possui EXATAMENTE UM registro em `bncc_template_map`.
 *
 * Saída:
 *  - Exit 0  → cobertura 100% (1:1).
 *  - Exit 1  → faltantes ou duplicados; grava relatório em
 *              `reports/bncc-template-coverage.json` e imprime resumo.
 *
 * Uso:  bunx tsx scripts/check-bncc-template-coverage.ts
 *       (também roda no CI antes do deploy)
 */

import { createClient } from "@supabase/supabase-js";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const SUPABASE_URL =
  process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
// Prioriza SERVICE_ROLE para CI (tabela aulas_bncc tem RLS só para
// authenticated). Cai para anon/publishable se rodando local com login.
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.SUPABASE_PUBLISHABLE_KEY ??
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ??
  process.env.SUPABASE_ANON_KEY ??
  process.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("[coverage] SUPABASE_URL / PUBLISHABLE_KEY ausentes no env");
  process.exit(2);
}

const FUND2_REGEX = /^EF0[6789](LP|MA|CI|HI|GE)/;
const REPORT_PATH = "reports/bncc-template-coverage.json";

async function fetchAll<T>(
  table: string,
  select: string,
): Promise<T[]> {
  const sb = createClient(SUPABASE_URL!, SUPABASE_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const all: T[] = [];
  const page = 1000;
  for (let from = 0; ; from += page) {
    const { data, error } = await sb
      .from(table)
      .select(select)
      .range(from, from + page - 1);
    if (error) throw new Error(`${table}: ${error.message}`);
    if (!data || data.length === 0) break;
    all.push(...(data as T[]));
    if (data.length < page) break;
  }
  return all;
}

interface AulaRow {
  codigo_bncc: string;
}
interface MapRow {
  bncc_code: string;
}

async function main() {
  const [aulas, maps] = await Promise.all([
    fetchAll<AulaRow>("aulas_bncc", "codigo_bncc"),
    fetchAll<MapRow>("bncc_template_map", "bncc_code"),
  ]);

  const aulasFund2 = new Set(
    aulas.map((a) => a.codigo_bncc).filter((c) => FUND2_REGEX.test(c)),
  );

  const mapCount = new Map<string, number>();
  for (const m of maps) {
    mapCount.set(m.bncc_code, (mapCount.get(m.bncc_code) ?? 0) + 1);
  }

  const faltantes: string[] = [];
  const duplicados: Array<{ code: string; count: number }> = [];

  for (const code of aulasFund2) {
    const n = mapCount.get(code) ?? 0;
    if (n === 0) faltantes.push(code);
    else if (n > 1) duplicados.push({ code, count: n });
  }

  const ok = faltantes.length === 0 && duplicados.length === 0;
  const report = {
    generatedAt: new Date().toISOString(),
    totalAulasFund2: aulasFund2.size,
    totalMapeados: aulasFund2.size - faltantes.length,
    faltantes: faltantes.sort(),
    duplicados,
    ok,
  };

  mkdirSync(dirname(REPORT_PATH), { recursive: true });
  writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2), "utf-8");

  console.log(
    `[coverage] aulas Fund2=${aulasFund2.size}  mapeados=${report.totalMapeados}  faltantes=${faltantes.length}  duplicados=${duplicados.length}`,
  );
  console.log(`[coverage] relatório: ${REPORT_PATH}`);

  if (!ok) {
    if (faltantes.length) {
      console.error(
        `[coverage] FALTANTES (${faltantes.length}):`,
        faltantes.slice(0, 20).join(", ") +
          (faltantes.length > 20 ? " ..." : ""),
      );
    }
    if (duplicados.length) {
      console.error(`[coverage] DUPLICADOS:`, duplicados);
    }
    process.exit(1);
  }

  console.log("[coverage] OK — cobertura 1:1 (6º–9º LP/MA/CI/HI/GE).");
}

main().catch((e) => {
  console.error("[coverage] falhou:", e);
  process.exit(2);
});
