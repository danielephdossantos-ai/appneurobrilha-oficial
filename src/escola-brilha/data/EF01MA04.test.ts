import { describe, expect, it } from "vitest";
import aula from "./EF01MA04";

describe("EF01MA04 — contagem e registro até 100", () => {
  it("cobre coleções até 100 e ensina registro verbal e simbólico", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/até 100 objetos/i);
    expect(conteudo).toMatch(/registro (verbal e simbólico|simbólico)|algarismos/i);
    expect(conteudo).toMatch(/quinze.*15|15.*quinze/i);
  });

  it("mantém coerentes os três grupos de cinco da prática guiada", () => {
    const visual = aula.atividadeGuiada.visual;
    expect(visual?.tipo).toBe("grupos");
    if (visual?.tipo !== "grupos") return;
    const total = visual.quantidadeGrupos * visual.itensPorGrupo;
    expect(total).toBe(15);
    expect(visual.opcoes[visual.correta]).toBe(total);
    expect(aula.atividadeGuiada.resposta).toContain("15 laranjas");
  });

  it("ensina quatro grupos de dez como 40 e registra o resultado corretamente", () => {
    const questao = aula.quiz.find((item) => item.pergunta.includes("Quatro grupos de 10"));
    expect(questao).toBeDefined();
    expect(questao?.opcoes[questao.correta]).toBe("40");
    expect(questao?.visual?.tipo).toBe("grupos");
    if (questao?.visual?.tipo !== "grupos") return;
    expect(questao.visual.grupos.reduce((total, grupo) => total + grupo.quantidade, 0)).toBe(40);
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

  it("prioriza organização e precisão em vez de velocidade", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).not.toMatch(/muito mais rápido|contagem rápida|contar rápido e sem errar/i);
  });
});
