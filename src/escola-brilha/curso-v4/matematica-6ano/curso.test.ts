import { describe, expect, it } from "vitest";
import curso from "./curso";

const aulas = curso.unidades.flatMap((unidade) => unidade.aulas);

describe("Matemática 6º ano — integridade da trilha ativa", () => {
  it("mantém 7 unidades e 40 aulas ativas", () => {
    expect(curso.unidades).toHaveLength(7);
    expect(curso.unidades.map((unidade) => unidade.aulas.length)).toEqual([7, 6, 5, 5, 5, 3, 9]);
    expect(aulas).toHaveLength(40);
  });

  it("cobre todas as habilidades EF06MA01 a EF06MA34", () => {
    const cobertura = new Set(aulas.flatMap((aula) => aula.bncc));
    for (let numero = 1; numero <= 34; numero += 1) {
      expect(cobertura.has(`EF06MA${String(numero).padStart(2, "0")}`)).toBe(true);
    }
  });

  it("não possui slugs duplicados", () => {
    const slugs = aulas.map((aula) => aula.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("mantém avaliações com resposta válida", () => {
    for (const aula of aulas) {
      for (const pergunta of aula.momento10_avaliacao.perguntas) {
        expect(pergunta.correta).toBeGreaterThanOrEqual(0);
        expect(pergunta.correta).toBeLessThan(pergunta.opcoes.length);
      }
    }
  });
});
