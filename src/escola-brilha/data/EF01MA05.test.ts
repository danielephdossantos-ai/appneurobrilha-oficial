import { describe, expect, it } from "vitest";
import aula from "./EF01MA05";

describe("EF01MA05 — comparação de números", () => {
  it("mostra 12 e 9 corretamente na prática guiada", () => {
    const visual = aula.atividadeGuiada.visual;
    expect(visual?.tipo).toBe("comparar");
    if (visual?.tipo !== "comparar") return;
    expect(visual.lados.map((lado) => lado.quantidade)).toEqual([12, 9]);
    expect(visual.opcoes[visual.correta]).toBe("Caixa A · 12");
    expect(aula.atividadeGuiada.resposta).toContain("12 > 9");
  });

  it("ensina números de duas ordens comparando dezenas antes das unidades", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/compare primeiro as dezenas/i);
    expect(conteudo).toMatch(/42.*4 dezenas.*38.*3 dezenas/i);
    expect(conteudo).toMatch(/dezenas (forem|são) iguais.*unidades/i);
  });

  it("ensina a leitura dos sinais sem analogia falsa de posição em fila", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/esquerda para a direita/i);
    expect(conteudo).not.toMatch(/quem está na frente é o maior/i);
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
