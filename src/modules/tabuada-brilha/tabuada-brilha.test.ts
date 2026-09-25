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

import { metodosPara, paraFala, explicacao } from "@/lib/tabuada-lousa";
describe("Lousa da tabuada", () => {
  it("todo método termina com o resultado certo e toda conta escrita está correta", () => {
    for (let a = 1; a <= 10; a++) for (let b = 1; b <= 10; b++) for (const m of metodosPara(a, b)) {
      expect(m.passos.at(-1)!.linha).toContain(String(a * b));
      for (const ps of m.passos) {
        const x = ps.linha.match(/^(\d+) × (\d+) = (\d+)$/); if (x) expect(+x[1] * +x[2]).toBe(+x[3]);
        const y = ps.linha.match(/^(\d+) ([+−]) (\d+) = (\d+)$/); if (y) expect(y[2] === "+" ? +y[1] + +y[3] : +y[1] - +y[3]).toBe(+y[4]);
      }
    }
  });
  it("lê a matemática corretamente", () => {
    expect(paraFala("7 × 8 = 56")).toBe("7 vezes 8 é igual a 56");
    expect(paraFala("90 − 9 = 81")).toBe("90 menos 9 é igual a 81");
  });
  it("gera explicações sem fim", () => {
    const vistos = new Set(Array.from({ length: 40 }, (_, i) => { const e = explicacao(7, i); return `${e.b}-${e.metodo.id}`; }));
    expect(vistos.size).toBeGreaterThan(10);
  });
});
