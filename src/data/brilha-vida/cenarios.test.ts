import { describe, expect, it } from "vitest";
import { CENAS_ELOGIO, CONFLITOS, HISTORIAS, SITUACOES_CUIDAR } from "./cenarios";

describe("conteúdo social do Brilha Vida", () => {
  it("mantém alternativas completas e pelo menos uma resposta construtiva", () => {
    for (const historia of HISTORIAS) {
      expect(historia.opcoes.length, historia.titulo).toBeGreaterThanOrEqual(3);
      expect(historia.opcoes.some((opcao) => opcao.certo), historia.titulo).toBe(true);
      expect(historia.opcoes.every((opcao) => opcao.texto && opcao.feedback), historia.titulo).toBe(true);
    }
    for (const situacao of SITUACOES_CUIDAR) {
      expect(situacao.acoes.length, situacao.texto).toBeGreaterThanOrEqual(3);
      expect(situacao.acoes.some((acao) => acao.certo), situacao.texto).toBe(true);
    }
    for (const cena of CENAS_ELOGIO) {
      expect(cena.opcoes.length, cena.texto).toBeGreaterThanOrEqual(3);
      expect(cena.opcoes.some((opcao) => opcao.bom), cena.texto).toBe(true);
    }
    for (const conflito of CONFLITOS) {
      expect(conflito.solucoes.length, conflito.problema).toBeGreaterThanOrEqual(3);
      expect(Math.max(...conflito.solucoes.map((solucao) => solucao.pontos)), conflito.problema).toBeGreaterThan(0);
    }
  });

  it("ensina limites de segurança em comida e segredos", () => {
    const texto = JSON.stringify(HISTORIAS).toLocaleLowerCase("pt-BR");
    expect(texto).toContain("alergias");
    expect(texto).toContain("adulto de confiança");
    expect(texto).toContain("segurança vem primeiro");
    expect(texto).toContain("quero provar ou não");
  });
});
