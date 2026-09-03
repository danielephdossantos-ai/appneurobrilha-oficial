import { describe, expect, it } from "vitest";
import curso from "./curso";

const aulas = curso.unidades.flatMap((unidade) => unidade.aulas);

describe("Matemática do 2º ano — integridade curricular", () => {
  it("cobre todas as 23 habilidades EF02MA", () => {
    const codigos = new Set(aulas.flatMap((aula) => aula.bncc));
    for (let numero = 1; numero <= 23; numero += 1) {
      expect(codigos.has(`EF02MA${String(numero).padStart(2, "0")}`)).toBe(true);
    }
  });

  it("não possui slugs duplicados", () => {
    const slugs = aulas.map((aula) => aula.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("mantém os 11 momentos e ao menos três perguntas de avaliação", () => {
    for (const aula of aulas) {
      for (let momento = 1; momento <= 11; momento += 1) {
        expect(aula[`momento${String(momento).padStart(2, "0")}_${[
          "motivacao", "exploracao", "descoberta", "explicacao", "modelagem", "praticaGuiada",
          "praticaIndependente", "aplicacao", "revisao", "avaliacao", "missaoFamilia",
        ][momento - 1]}` as keyof typeof aula]).toBeDefined();
      }
      expect(aula.momento10_avaliacao.perguntas.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("mantém todos os gabaritos numéricos dentro das alternativas", () => {
    const visitar = (valor: unknown): void => {
      if (!valor || typeof valor !== "object") return;
      const objeto = valor as Record<string, unknown>;
      if (Array.isArray(objeto.opcoes) && typeof objeto.correta === "number") {
        expect(objeto.correta).toBeGreaterThanOrEqual(0);
        expect(objeto.correta).toBeLessThan(objeto.opcoes.length);
      }
      Object.values(objeto).forEach(visitar);
    };
    aulas.forEach(visitar);
  });

  it("inclui ensino explícito das quatro lacunas encontradas", () => {
    const texto = JSON.stringify(aulas);
    expect(texto).toMatch(/terça parte/i);
    expect(texto).toMatch(/elementos ausentes|completa a sequência/i);
    expect(texto).toMatch(/Equivalente significa mesmo valor/i);
    expect(texto).toMatch(/muito provável.*pouco provável.*impossível/i);
  });

  it("não usa pressão de velocidade nem palavras-chave como regra de operação", () => {
    const texto = JSON.stringify(aulas);
    expect(texto).not.toMatch(/responda RÁPIDO/i);
    expect(texto).not.toMatch(/Rápido! [0-9]/i);
    expect(texto).not.toMatch(/cronômetro/i);
    expect(texto).not.toMatch(/palavras como.*indicam SOMA/i);
    expect(texto).not.toMatch(/Sempre subtraia o MENOR do MAIOR/i);
  });

  it("evita renderizar dezenas de figuras minúsculas no celular", () => {
    const visitar = (valor: unknown): void => {
      if (!valor || typeof valor !== "object") return;
      const objeto = valor as Record<string, unknown>;
      if ((objeto.tipo === "grupoItens" || objeto.tipo === "tapContar") && typeof objeto.quantidade === "number") {
        expect(objeto.quantidade).toBeLessThanOrEqual(20);
      }
      Object.values(objeto).forEach(visitar);
    };
    aulas.forEach(visitar);
  });
});
