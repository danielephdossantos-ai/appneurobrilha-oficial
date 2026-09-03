import { describe, expect, it } from "vitest";
import aula from "./EF01MA06";

describe("EF01MA06 — fatos básicos da adição", () => {
  it("mostra exatamente 3 + 2 e marca 5 na atividade guiada", () => {
    const visual = aula.atividadeGuiada.visual;
    expect(visual?.tipo).toBe("comparar");
    if (visual?.tipo !== "comparar") return;
    expect(visual.lados.map((lado) => lado.quantidade)).toEqual([3, 2]);
    expect(visual.opcoes[visual.correta]).toBe("5");
    expect(aula.atividadeGuiada.resposta).toContain("3 + 2 = 5");
  });

  it("exibe somente os dois grupos da fase de 2 + 3", () => {
    const fase = aula.interativas?.find(
      (item) => item.tipo === "contarQuiz" && item.pergunta === "2 + 3 = ?",
    );
    expect(fase?.tipo).toBe("contarQuiz");
    if (fase?.tipo !== "contarQuiz") return;
    expect(fase.grupos.map((grupo) => grupo.quantidade)).toEqual([2, 3]);
    expect(fase.opcoes[fase.correta]).toBe("5");
  });

  it("ensina juntar, acrescentar e contar para a frente", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/juntar/i);
    expect(conteudo).toMatch(/acrescentar/i);
    expect(conteudo).toMatch(/número maior.*conte para a frente/i);
  });

  it("constrói fatos com zero, dobros e troca de ordem", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/5 \+ 0 = 5/);
    expect(conteudo).toMatch(/2 \+ 2 = 4/);
    expect(conteudo).toMatch(/3 \+ 2 = 2 \+ 3/);
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
