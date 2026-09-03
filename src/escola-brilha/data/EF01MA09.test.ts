import { describe, expect, it } from "vitest";
import aula from "./EF01MA09";

describe("EF01MA09 — organização e ordenação por atributos", () => {
  it("corresponde à habilidade correta e não ensina dobro e metade", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/classificar/i);
    expect(conteudo).toMatch(/ordenar/i);
    expect(conteudo).not.toMatch(/dobro de/i);
    expect(conteudo).not.toMatch(/metade de/i);
  });

  it("ensina os cinco atributos previstos", () => {
    const conteudo = JSON.stringify(aula).toLowerCase();
    for (const atributo of ["cor", "forma", "tamanho", "espessura", "material"]) {
      expect(conteudo).toContain(atributo);
    }
  });

  it("diferencia classificação de ordenação", () => {
    expect(aula.explicacao).toMatch(/CLASSIFICAR.*formar grupos/i);
    expect(aula.explicacao).toMatch(/ORDENAR.*sequência/i);
    expect(aula.explicacao).toMatch(/cor.*não é matematicamente maior/i);
  });

  it("inclui interações para classificar, ordenar tamanho e ordenar espessura", () => {
    expect(aula.interativas?.map((item) => item.tipo)).toEqual(["arrastar", "ordenar", "ordenar"]);
    expect(aula.interativas?.map((item) => item.titulo)).toEqual([
      "Fase 1 · Classifique por tipo",
      "Fase 2 · Ordem de tamanho",
      "Fase 3 · Ordem de espessura",
    ]);
  });

  it("mantém todos os gabaritos dentro das alternativas", () => {
    const visitar = (valor: unknown): void => {
      if (!valor || typeof valor !== "object") return;
      const objeto = valor as Record<string, unknown>;
      if (Array.isArray(objeto.opcoes) && typeof objeto.correta === "number") {
        expect(objeto.correta).toBeGreaterThanOrEqual(0);
        expect(objeto.correta).toBeLessThan(objeto.opcoes.length);
      }
      Object.values(objeto).forEach(visitar);
    };
    visitar(aula);
  });
});
