import { describe, expect, it } from "vitest";
import aula from "./EF01MA10";

describe("EF01MA10 — padrões e sequências", () => {
  it("não confunde contagem de figuras iguais com sequência crescente", () => {
    expect(aula.exemploResolvido.enunciado).toMatch(/girassol.*tulipa/i);
    expect(aula.exemploResolvido.resposta).toMatch(/bloco.*girassol.*tulipa/i);
    expect(aula.exemploResolvido.passos.join(" ")).not.toMatch(/cada posição aumenta 1/i);
  });

  it("ensina padrões repetitivos e sequências numéricas recursivas", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/menor bloco que se repete/i);
    expect(conteudo).toMatch(/cada número é obtido a partir do anterior/i);
    expect(conteudo).toMatch(/2, 4, 6, 8.*acrescentar 2/i);
  });

  it("trabalha lacuna interna e confere os dois lados", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/6 \+ 2 = 8.*8 \+ 2 = 10/i);
    expect(conteudo).toMatch(/elemento anterior.*seguinte/i);
  });

  it("mantém texto, imagem e gabarito da prática guiada coerentes", () => {
    const visual = aula.atividadeGuiada.visual;
    expect(aula.atividadeGuiada.enunciado).toContain("2 — 4 — 6 — __ — 10");
    expect(aula.atividadeGuiada.resposta).toContain("8");
    expect(visual?.tipo).toBe("grupos");
    if (visual?.tipo !== "grupos" || !("opcoes" in visual)) return;
    expect(visual.opcoes[visual.correta]).toBe(8);
  });

  it("usa imagens correspondentes para triângulo, círculo, maçã e banana", () => {
    const conteudo = JSON.stringify(aula.desafio);
    expect(conteudo).toMatch(/triangulo/i);
    expect(conteudo).toMatch(/circulo/i);
    expect(conteudo).toMatch(/banana/i);
    expect(conteudo).not.toMatch(/pera/i);
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
