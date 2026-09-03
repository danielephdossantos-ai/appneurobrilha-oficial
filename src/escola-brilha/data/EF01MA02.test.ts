import { describe, expect, it } from "vitest";
import aula from "./EF01MA02";

describe("EF01MA02 — contagem exata e aproximada", () => {
  it("ensina estimativa como aproximação seguida de conferência", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/estimar|estimativa/i);
    expect(conteudo).toMatch(/contar para conferir|conte e confira|depois conte/i);
    const questao = aula.quiz.find((item) => item.pergunta.includes("perto de 10 sementes"));
    expect(questao?.opcoes[questao.correta]).toBe("Contar para conferir");
    expect(questao?.explicacao).toMatch(/aproximação.*total exato/i);
  });

  it("ensina comparação por correspondência e não pelo espaço ocupado", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/forme pares|pareamento/i);
    expect(conteudo).toMatch(/sobr(am|ar) objetos.*tem mais|tem mais.*sobr(am|ar) objetos/i);
    expect(conteudo).not.toMatch(/lado a lado e veja qual tem mais/i);
  });

  it("mantém coerentes os três grupos de três", () => {
    const visual = aula.atividadeGuiada.visual;
    expect(visual?.tipo).toBe("grupos");
    if (visual?.tipo !== "grupos") return;
    const total = visual.quantidadeGrupos * visual.itensPorGrupo;
    expect(total).toBe(9);
    expect(visual.opcoes[visual.correta]).toBe(total);
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

  it("evita transformar velocidade no objetivo da aprendizagem", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).not.toMatch(/contar rápido|mais rápido|muito mais rápido/i);
  });
});
