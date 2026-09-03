import { describe, expect, it } from "vitest";
import aula from "./EF01MA07";

describe("EF01MA07 — composição e decomposição", () => {
  it("mostra 3 + 2 e marca 5 na atividade guiada", () => {
    const visual = aula.atividadeGuiada.visual;
    expect(visual?.tipo).toBe("comparar");
    if (visual?.tipo !== "comparar") return;
    expect(visual.lados.map((lado) => lado.quantidade)).toEqual([3, 2]);
    expect(visual.opcoes[visual.correta]).toBe("5");
    expect(aula.atividadeGuiada.resposta).toContain("3 + 2 = 5");
  });

  it("ensina composição como partes formando um todo e decomposição como separação", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/compor.*juntar.*partes.*todo/i);
    expect(conteudo).toMatch(/decompor.*separar.*todo.*partes/i);
  });

  it("trabalha números de duas ordens com dezena e unidades", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/14.*1 dezena.*4 unidades/i);
    expect(conteudo).toMatch(/14 = 10 \+ 4/);
    expect(conteudo).toMatch(/17 = 10 \+ 7/);
  });

  it("mantém a fase 5 dentro da composição por diferentes adições", () => {
    const fase = aula.interativas?.find(
      (item) => item.tipo === "operacao" && item.titulo === "Fase 5 · O Baú Misterioso",
    );
    expect(fase?.tipo).toBe("operacao");
    if (fase?.tipo !== "operacao") return;
    expect(fase.operacao).toBe("soma");
    expect([fase.a, fase.b]).toEqual([6, 4]);
    expect(fase.legenda).toBe("6 + 4 = 10");
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
