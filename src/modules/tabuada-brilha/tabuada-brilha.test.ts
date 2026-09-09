import { describe, expect, it } from "vitest";
import { CONFIG_TABUADA, criarQuestaoTabuada } from "@/lib/tabuada-brilha";

describe("Tabuada Brilha", () => {
  it("separa as tabuadas em três níveis sem perder fatores", () => {
    expect(CONFIG_TABUADA.facil.fatores).toEqual([2, 5, 10]);
    expect(CONFIG_TABUADA.medio.fatores).toEqual([3, 4, 6]);
    expect(CONFIG_TABUADA.desafio.fatores).toEqual([7, 8, 9]);
  });
  it("gera contas corretas com explicação", () => {
    for (let rodada = 0; rodada < 30; rodada++) {
      const q = criarQuestaoTabuada("desafio", rodada);
      expect(q.resposta).toBe(q.a * q.b);
      expect(q.estrategia).toContain(String(q.resposta));
    }
  });
});
