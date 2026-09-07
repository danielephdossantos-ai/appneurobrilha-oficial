import { describe, expect, it } from "vitest";
import { cursoMatematicaMaternal } from "./matematica-maternal";

describe("Matemática Kawaii — Maternal", () => {
  const aulas = cursoMatematicaMaternal.unidades.flatMap((unidade) => unidade.aulas);

  it("mantém cinco aulas reais com sequência pedagógica completa", () => {
    expect(aulas).toHaveLength(5);

    for (const aula of aulas) {
      expect(aula.bncc.length).toBeGreaterThan(0);
      expect(aula.momentos).toHaveLength(11);
      expect(aula.momentos[0]?.tipo).toBe("boasVindas");
      expect(aula.momentos.at(-1)?.tipo).toBe("celebracao");
      expect(
        aula.momentos.some((momento) =>
          ["vocabularioVisual", "contarBolas", "ensinoMagnitude"].includes(momento.tipo),
        ),
      ).toBe(true);
      expect(aula.momentos.some((momento) => momento.tipo === "compreensaoImagem")).toBe(true);

      const primeiraPergunta = aula.momentos.findIndex(
        (momento) => momento.tipo === "compreensaoImagem" || momento.tipo === "compararGrupos",
      );
      expect(primeiraPergunta).toBeGreaterThanOrEqual(3);
    }
  });

  it("usa quatro alternativas coerentes em toda pergunta por imagem", () => {
    const perguntas = aulas.flatMap((aula) =>
      aula.momentos.filter((momento) => momento.tipo === "compreensaoImagem"),
    );

    expect(perguntas).toHaveLength(9);
    for (const pergunta of perguntas) {
      if (pergunta.tipo !== "compreensaoImagem") continue;
      expect(pergunta.perguntaAudio.trim()).not.toBe("");
      expect(pergunta.feedbackAcerto.trim()).not.toBe("");
      expect(pergunta.feedbackErro.trim()).not.toBe("");
      expect(pergunta.opcoes).toHaveLength(4);
      expect(pergunta.opcoes.filter((opcao) => opcao.correta)).toHaveLength(1);
      expect(new Set(pergunta.opcoes.map((opcao) => opcao.nome)).size).toBe(4);
      expect(pergunta.opcoes.every((opcao) => Boolean(opcao.imagemUrl))).toBe(true);
    }
  });
});
