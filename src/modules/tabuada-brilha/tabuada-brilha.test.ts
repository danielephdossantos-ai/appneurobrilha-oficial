import { describe, expect, it } from "vitest";
import { ESTRATEGIAS, ORDEM_TABUADAS, criarRodada, opcoesPara, tabuadaLiberada } from "@/lib/tabuada-brilha";

describe("Tabuada Brilha", () => {
  it("tem estratégia para todas as tabuadas da ordem", () => {
    for (const n of ORDEM_TABUADAS) expect(ESTRATEGIAS[n].passos.length).toBeGreaterThan(0);
  });
  it("gera 3 opções distintas com a certa", () => {
    for (let a = 1; a <= 10; a++) for (let b = 1; b <= 10; b++) {
      const o = opcoesPara(a, b, a + b);
      expect(o).toHaveLength(3);
      expect(new Set(o).size).toBe(3);
      expect(o).toContain(a * b);
    }
  });
  it("rodada tem 5 contas e revisa primeiro as erradas", () => {
    const r = criarRodada(7, 3, ["7x8"]);
    expect(r).toHaveLength(5);
    expect(r[0].b).toBe(8);
    r.forEach((q) => expect(q.resposta).toBe(q.a * q.b));
  });
  it("libera em ordem", () => {
    expect(tabuadaLiberada(1, [])).toBe(true);
    expect(tabuadaLiberada(10, [])).toBe(false);
    expect(tabuadaLiberada(10, [1])).toBe(true);
  });
});
