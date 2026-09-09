import { describe, expect, it } from "vitest";
import aula from "./EF01MA11";

describe("EF01MA11 — localização espacial", () => {
  it("ensina que toda localização depende de um referencial", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/EM RELAÇÃO A um referencial/i);
    expect(conteudo).toMatch(/qual é o referencial/i);
  });

  it("diferencia posição lateral de distância", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/Ao lado indica posição lateral/i);
    expect(conteudo).toMatch(/Perto indica distância/i);
    expect(conteudo).not.toMatch(/Pertinho = ao lado/i);
  });

  it("não confunde fora com longe", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/Fora indica exterior.*perto indica distância/i);
    expect(conteudo).not.toMatch(/Longe da caixa.*FORA/i);
  });

  it("define o ponto de vista para direita e esquerda", () => {
    const conteudo = JSON.stringify(aula);
    expect(conteudo).toMatch(/direita e a esquerda da TELA/i);
    expect(conteudo).toMatch(/direita do personagem/i);
    expect(conteudo).toMatch(/Usando os lados da tela/i);
  });

  it("usa a imagem correta em cada minijogo de arrastar", () => {
    const borboleta = aula.interativas?.find((item) => item.titulo.includes("Borboleta sobre"));
    const coelho = aula.interativas?.find((item) => item.titulo.includes("Coelho ao lado"));
    expect(borboleta?.tipo).toBe("arrastar");
    expect(coelho?.tipo).toBe("arrastar");
    if (borboleta?.tipo !== "arrastar" || coelho?.tipo !== "arrastar") return;
    expect(borboleta.itemImagem).not.toBe(coelho.itemImagem);
    expect(borboleta.pares).toHaveLength(1);
    expect(coelho.pares).toHaveLength(1);
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
