import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const playerRoutes = [
  "src/routes/escola-brilha.aula-v4.$curso.$aula.tsx",
  "src/routes/escola-brilha.aula-pt-v4.$curso.$aula.tsx",
  "src/routes/escola-brilha.aula-geo-v1.$curso.$aula.tsx",
  "src/routes/escola-brilha.aula-arte-v1.$curso.$aula.tsx",
  "src/routes/escola-brilha.ingles-v1.$curso.$aula.tsx",
];

describe("continuidade do plano diário", () => {
  it("mantém a fila de até cinco atividades na Rotina", () => {
    const rotina = readFileSync(resolve(process.cwd(), "src/routes/rotina.tsx"), "utf8");
    const sync = readFileSync(resolve(process.cwd(), "src/modules/neuro-plano/sync.functions.ts"), "utf8");
    expect(sync).toContain("routineItems.slice(0, 5)");
    expect(rotina).toContain("sessionRoutes:");
    expect(rotina).toContain("sessionPlanItemIds:");
    expect(rotina).toContain("sessionPremiumItemIds:");
  });

  it.each(playerRoutes)("conclui e avança o plano em %s", (file) => {
    const source = readFileSync(resolve(process.cwd(), file), "utf8");
    expect(source).toContain("completePlanItem");
    expect(source).toContain("advancePlanFlow");
  });
});
