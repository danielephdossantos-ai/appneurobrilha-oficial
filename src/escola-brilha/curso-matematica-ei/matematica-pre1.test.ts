import { describe, expect, it } from "vitest";
import { cursoMatematicaPre1 } from "./matematica-pre1";
import { getCursoMatEIBySerie } from "./registry";

describe("Matemática Kawaii — Pré I", () => {
  const aulas = cursoMatematicaPre1.unidades.flatMap((unidade) => unidade.aulas);

  it("publica cinco aulas próprias do Pré I no registro", () => {
    expect(getCursoMatEIBySerie("pre1")?.slug).toBe("matematica-ei-pre1");
    expect(aulas).toHaveLength(5);
    expect(new Set(aulas.map((aula) => aula.slug)).size).toBe(5);
    expect(aulas.every((aula) => aula.slug.startsWith("mat-pre1-"))).toBe(true);
  });

  it("mantém ensino, prática, BNCC e fechamento em todas as aulas", () => {
    for (const aula of aulas) {
      expect(aula.bncc.length).toBeGreaterThan(0);
      expect(aula.momentos).toHaveLength(11);
      expect(aula.momentos[0]?.tipo).toBe("boasVindas");
      expect(aula.momentos.at(-1)?.tipo).toBe("celebracao");
      expect(aula.momentos.some((momento) => momento.tipo === "historiaIlustrada")).toBe(true);
      expect(aula.momentos.some((momento) => momento.tipo === "compreensaoImagem")).toBe(true);
      expect(aula.baseCientifica?.trim()).toBeTruthy();
    }
  });

  it("usa quatro alternativas e uma única resposta correta nas escolhas por imagem", () => {
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
