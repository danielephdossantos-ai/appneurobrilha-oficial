import { describe, expect, it } from "vitest";
import { gerarApostilaEI, listarAulasEI } from "./gerar-apostila-ei";

const PROIBIDAS = ["bncc", "neurobrilha", "escute", "gabarito", "tea", "tdah"];

describe("apostilas da Educação Infantil (3 a 6 anos)", () => {
  const catalogo = listarAulasEI();

  it("lista as aulas de Português e Matemática infantis", () => {
    expect(catalogo.length).toBeGreaterThanOrEqual(30);
    expect(new Set(catalogo.map((a) => a.disciplina))).toEqual(
      new Set(["Língua Portuguesa", "Matemática"]),
    );
  });

  it("gera 2 folhas do professor e folhas de atividade em todas as aulas", () => {
    for (const item of catalogo) {
      const apostila = gerarApostilaEI(item.chave);
      expect(apostila, item.chave).not.toBeNull();
      const guias = apostila!.paginas.filter((p) => p.etiqueta === "Guia do professor");
      const estudante = apostila!.paginas.filter((p) => p.etiqueta === "Folha do estudante");
      expect(guias.length, item.chave).toBe(2);
      expect(estudante.length, item.chave).toBeGreaterThanOrEqual(3);
      expect(apostila!.paginas.some((p) => p.etiqueta === "Gabarito")).toBe(false);
    }
  });

  it("não escreve palavras proibidas nas folhas da criança", () => {
    for (const item of catalogo) {
      const apostila = gerarApostilaEI(item.chave)!;
      const texto = JSON.stringify(
        apostila.paginas.filter((p) => p.etiqueta === "Folha do estudante"),
      ).toLowerCase();
      for (const palavra of PROIBIDAS) expect(texto, `${item.chave}/${palavra}`).not.toContain(palavra);
    }
  });

  it("devolve null para chave inexistente", () => {
    expect(gerarApostilaEI("curso-inexistente__aula-x")).toBeNull();
  });
});
