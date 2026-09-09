import { describe, expect, it } from "vitest";
import { normalizarResposta, PALAVRAS_SOLETRACAO } from "@/data/soletracao-brilha";
describe("Soletração Brilha", () => {
  it("possui pelo menos 500 palavras únicas e válidas", () => {
    expect(PALAVRAS_SOLETRACAO.length).toBeGreaterThanOrEqual(500);
    expect(new Set(PALAVRAS_SOLETRACAO.map((p) => p.palavra)).size).toBe(PALAVRAS_SOLETRACAO.length);
    expect(PALAVRAS_SOLETRACAO.every((p) => /^[a-záàâãéêíóôõúüç]+$/i.test(p.palavra))).toBe(true);
  });
  it("normaliza espaços e caixa sem apagar acentos", () => { expect(normalizarResposta("  Maçã ")).toBe("maçã"); });
});
