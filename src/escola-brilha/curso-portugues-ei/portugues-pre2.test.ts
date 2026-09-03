import { describe, expect, it } from "vitest";
import { cursoPre2 } from "./portugues-pre2";

describe("Português EI — Pré II", () => {
  const aulas = cursoPre2.unidades.flatMap((unidade) => unidade.aulas);

  it("mantém nove aulas completas, identificadas e alinhadas à BNCC", () => {
    expect(aulas).toHaveLength(9);
    expect(new Set(aulas.map((aula) => aula.slug)).size).toBe(9);
    for (const aula of aulas) {
      expect(aula.bncc.length).toBeGreaterThan(0);
      expect(aula.momentos.length).toBeGreaterThanOrEqual(10);
    }
  });

  it("oferece quatro imagens e somente uma resposta correta em cada escolha", () => {
    const escolhas = aulas.flatMap((aula) =>
      aula.momentos.filter((momento) =>
        momento.tipo === "somInicial" || momento.tipo === "compreensaoImagem",
      ),
    );
    expect(escolhas).toHaveLength(24);
    for (const escolha of escolhas) {
      if (escolha.tipo !== "somInicial" && escolha.tipo !== "compreensaoImagem") continue;
      expect(escolha.opcoes).toHaveLength(4);
      expect(escolha.opcoes.filter((opcao) => opcao.correta)).toHaveLength(1);
      expect(new Set(escolha.opcoes.map((opcao) => opcao.nome)).size).toBe(4);
      expect(escolha.opcoes.every((opcao) => Boolean(opcao.imagemUrl))).toBe(true);
    }
  });

  it("evita ensinar nome de letra como fonema e a regra falsa de um som por letra", () => {
    const conteudo = aulas
      .flatMap((aula) => aula.momentos)
      .map((momento) => JSON.stringify(momento))
      .join(" ");
    expect(conteudo).not.toMatch(/som (BÊ|CÊ|DÊ|GÊ|PÊ|TÊ)/i);
    expect(conteudo).not.toMatch(/cada letra (faz|tem) (um|seu) som/i);
    expect(conteudo).not.toContain("tripa (dança)");
  });
});
