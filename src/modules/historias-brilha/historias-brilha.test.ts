import { describe, expect, it } from "vitest";
import { HISTORIAS_BRILHA } from "@/data/historias-brilha";

describe("Histórias Brilha", () => {
  it("entrega 98 histórias em seis níveis", () => {
    expect(HISTORIAS_BRILHA).toHaveLength(98);
    expect(new Set(HISTORIAS_BRILHA.map((h) => h.nivel))).toEqual(new Set([1, 2, 3, 4, 5, 6]));
  });
  it("tem ids únicos, texto e compreensão em todo o acervo", () => {
    expect(new Set(HISTORIAS_BRILHA.map((h) => h.id)).size).toBe(98);
    for (const historia of HISTORIAS_BRILHA) {
      expect(historia.paragrafos.join(" ").length).toBeGreaterThan(100);
      expect(historia.opcoes).toHaveLength(3);
      expect(historia.explicacao.length).toBeGreaterThan(20);
    }
  });
});
