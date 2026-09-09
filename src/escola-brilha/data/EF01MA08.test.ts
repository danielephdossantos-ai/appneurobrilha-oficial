import { describe, expect, it } from "vitest";
import aula from "./EF01MA08";

describe("EF01MA08 — problemas de adição e subtração", () => {
  it("ensina a analisar começo, mudança e pergunta sem regra de palavra-chave", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/o que havia no começo/i);
    expect(conteudo).toMatch(/o que a pergunta quer saber/i);
    expect(conteudo).toMatch(/não escolha a conta olhando apenas uma palavra/i);
    expect(conteudo).not.toMatch(/ganhar sempre é soma/i);
    expect(conteudo).not.toMatch(/perder é sempre subtração/i);
  });

  it("trabalha as quatro ideias: juntar, acrescentar, separar e retirar", () => {
    const conteudo = JSON.stringify(aula);
    for (const ideia of ["juntar", "acrescentar", "separar", "retirar"]) {
      expect(conteudo.toLowerCase()).toContain(ideia);
    }
  });

  it("inclui cálculo com números de duas ordens", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/12 \+ 5 = 17/);
    expect(conteudo).toMatch(/18 − 6 = 12/);
  });

  it("inclui elaboração de problema e resposta esperada", () => {
    const exercicio = aula.exercicios.find((item) => /Crie uma história/i.test(item.enunciado));
    expect(exercicio).toBeDefined();
    expect(exercicio?.resposta).toContain("total 13");
  });

  it("usa imagem de cenoura nas três etapas do problema das cenouras", () => {
    const etapas = aula.interativas?.filter((item) => item.titulo.startsWith("Fase 3")) ?? [];
    expect(etapas).toHaveLength(3);
    expect(JSON.stringify(etapas)).toContain("cenoura");
    expect(JSON.stringify(etapas)).not.toContain("castanha");
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
