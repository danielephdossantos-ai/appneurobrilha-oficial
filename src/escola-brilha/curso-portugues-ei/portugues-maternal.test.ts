import { describe, expect, it } from "vitest";
import { cursoMaternal } from "./portugues-maternal";

describe("Português EI — Maternal", () => {
  const aulas = cursoMaternal.unidades.flatMap((unidade) => unidade.aulas);

  it("mantém as nove aulas publicadas com BNCC e momentos", () => {
    expect(aulas).toHaveLength(9);
    expect(new Set(aulas.map((aula) => aula.slug)).size).toBe(9);
    for (const aula of aulas) {
      expect(aula.bncc.length).toBeGreaterThan(0);
      expect(aula.momentos.length).toBeGreaterThanOrEqual(10);
    }
  });

  it("usa quatro imagens e uma resposta correta nas escolhas", () => {
    const escolhas = aulas.flatMap((aula) =>
      aula.momentos.filter((momento) =>
        momento.tipo === "somInicial" || momento.tipo === "compreensaoImagem",
      ),
    );
    expect(escolhas).toHaveLength(19);
    for (const escolha of escolhas) {
      if (escolha.tipo !== "somInicial" && escolha.tipo !== "compreensaoImagem") continue;
      expect(escolha.opcoes).toHaveLength(4);
      expect(escolha.opcoes.filter((opcao) => opcao.correta)).toHaveLength(1);
      expect(new Set(escolha.opcoes.map((opcao) => opcao.nome)).size).toBe(4);
      expect(escolha.opcoes.every((opcao) => Boolean(opcao.imagemUrl))).toBe(true);
    }
  });

  it("não ensina o nome da letra como se fosse o som inicial", () => {
    const falas = aulas
      .flatMap((aula) => aula.momentos)
      .map((momento) => JSON.stringify(momento))
      .join(" ");
    expect(falas).not.toMatch(/som (BÊ|CÊ)/i);
  });
});
