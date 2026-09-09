import { describe, expect, it } from "vitest";
import aula from "./EF01MA03";

describe("EF01MA03 — comparação de quantidades", () => {
  it("mostra passarinhos e ninhos distintos na prática guiada", () => {
    const visual = aula.atividadeGuiada.visual;
    expect(visual?.tipo).toBe("comparar");
    if (visual?.tipo !== "comparar") return;
    expect(visual.lados).toHaveLength(2);
    expect(visual.lados[0].imagemUrl).not.toBe(visual.lados[1].imagemUrl);
    expect(visual.lados.map((lado) => lado.quantidade)).toEqual([4, 4]);
    expect(visual.opcoes[visual.correta]).toBe("Sim, mesma quantidade");
  });

  it("ensina estimativa como hipótese que precisa ser conferida", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/estimativa|estimar/i);
    expect(conteudo).toMatch(/depois cont(ar|e).*conferir|depois confirmar contando/i);
    expect(conteudo).not.toMatch(/olhe rápido e chute/i);
  });

  it("mantém o pareamento como critério de mesma quantidade", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/cada objeto.*par|forma um par/i);
    expect(conteudo).toMatch(/sem sobrar|não sobra/i);
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
