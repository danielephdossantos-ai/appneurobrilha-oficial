import { describe, expect, it } from "vitest";
import { cursoMatematicaPre2 } from "./matematica-pre2";
import { getCursoMatEIBySerie } from "./registry";

describe("Matemática Kawaii — Pré II", () => {
  const aulas = cursoMatematicaPre2.unidades.flatMap((unidade) => unidade.aulas);

  it("publica cinco aulas próprias do Pré II", () => {
    expect(getCursoMatEIBySerie("pre2")?.slug).toBe("matematica-ei-pre2");
    expect(aulas).toHaveLength(5);
    expect(new Set(aulas.map((aula) => aula.slug)).size).toBe(5);
    expect(aulas.every((aula) => aula.slug.startsWith("mat-pre2-"))).toBe(true);
  });

  it("fica acima do Pré I e mantém a sequência pedagógica completa", () => {
    for (const aula of aulas) {
      expect(aula.bncc.length).toBeGreaterThan(0);
      expect(aula.momentos).toHaveLength(11);
      expect(aula.momentos[0]?.tipo).toBe("boasVindas");
      expect(aula.momentos.at(-1)?.tipo).toBe("celebracao");
      expect(aula.momentos.some((momento) => momento.tipo === "historiaIlustrada")).toBe(true);
      expect(aula.momentos.some((momento) => momento.tipo === "compreensaoImagem")).toBe(true);
      expect(aula.baseCientifica?.trim()).toBeTruthy();
    }
    const quantidades = aulas.flatMap((aula) =>
      aula.momentos.flatMap((momento) => {
        if (momento.tipo === "contarBolas") return [momento.quantidade];
        if (momento.tipo === "compreensaoImagem") {
          return momento.opcoes.map((opcao) => opcao.quantidade ?? 0);
        }
        return [];
      }),
    );
    expect(Math.max(...quantidades)).toBe(10);
  });

  it("mantém quatro opções e uma única resposta correta", () => {
    const perguntas = aulas.flatMap((aula) =>
      aula.momentos.filter((momento) => momento.tipo === "compreensaoImagem"),
    );
    expect(perguntas.length).toBeGreaterThanOrEqual(5);
    for (const pergunta of perguntas) {
      if (pergunta.tipo !== "compreensaoImagem") continue;
      expect(pergunta.opcoes).toHaveLength(4);
      expect(pergunta.opcoes.filter((opcao) => opcao.correta)).toHaveLength(1);
      expect(new Set(pergunta.opcoes.map((opcao) => opcao.nome)).size).toBe(4);
      expect(pergunta.feedbackAcerto.trim()).not.toBe("");
      expect(pergunta.feedbackErro.trim()).not.toBe("");
    }
  });
});
