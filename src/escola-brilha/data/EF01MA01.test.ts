import { describe, expect, it } from "vitest";
import aula from "./EF01MA01";

describe("EF01MA01 — usos dos números", () => {
  it("mantém o gabarito de todas as questões dentro das alternativas", () => {
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

  it("distingue quantidade, ordem e identificação sem classificar senha de atendimento como identificação", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toContain("Quantidade");
    expect(conteudo).toContain("Ordem");
    expect(conteudo).toContain("Identificação");
    expect(conteudo).not.toMatch(/senha.*identifica|senha.*identificação/i);
    expect(conteudo).toContain("Ônibus 43");
  });

  it("mantém o exemplo de contagem coerente com a resposta", () => {
    expect(aula.exemploResolvido.interativo?.quantidade).toBe(4);
    expect(aula.exemploResolvido.resposta).toContain("4 maçãs");
  });

  it("mantém o pódio com três posições únicas e Ana em primeiro lugar", () => {
    const visual = aula.atividadeGuiada.visual;
    expect(visual?.tipo).toBe("podio");
    if (visual?.tipo !== "podio") return;
    expect(visual.participantes).toHaveLength(3);
    expect(new Set(visual.participantes.map((item) => item.posicao)).size).toBe(3);
    expect(visual.participantes.find((item) => item.posicao === 1)?.nome).toBe("Ana");
    expect(visual.respostaCerta).toBe("Ana");
  });
});
