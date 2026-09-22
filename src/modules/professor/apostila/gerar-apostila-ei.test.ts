import { describe, expect, it } from "vitest";
import { gerarApostilaEI, listarAulasEI } from "./gerar-apostila-ei";

const PROIBIDAS = ["bncc", "neurobrilha", "escute", "gabarito", "tea", "tdah", "toque", "na tela", "arraste"];

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

  it("informa o número e o que desenhar nas atividades de quantidade", () => {
    for (const itemCatalogo of catalogo.filter((item) => item.disciplina === "Matemática")) {
      const apostila = gerarApostilaEI(itemCatalogo.chave)!;
      for (const bloco of apostila.paginas.flatMap((pagina) => pagina.blocos)) {
        if (bloco.tipo !== "desenhar-quantidade" || !bloco.itens.some((item) => item.quantidade > 1)) continue;
        for (const item of bloco.itens) {
          expect(item.rotulo, itemCatalogo.chave).toMatch(new RegExp(`^Desenhe ${item.quantidade} \\S+`, "i"));
          expect(item.objeto, itemCatalogo.chave).toBeTruthy();
        }
      }
    }
  });

  it("devolve null para chave inexistente", () => {
    expect(gerarApostilaEI("curso-inexistente__aula-x")).toBeNull();
  });

  it("usa a primeira folha do professor somente para a história", () => {
    for (const item of catalogo) {
      const primeira = gerarApostilaEI(item.chave)?.paginas[0];
      expect(primeira?.blocos).toEqual([expect.objectContaining({ tipo: "historia" })]);
    }
  });

  it("coloca modelo visual e atividade da criança junto de cada explicação", () => {
    for (const item of catalogo) {
      const guia = gerarApostilaEI(item.chave)?.paginas.filter((pagina) => pagina.etiqueta === "Guia do professor")[1];
      const pares = guia?.blocos.filter((bloco) => bloco.tipo === "explicacao-atividade") ?? [];
      expect(pares.length, item.chave).toBeGreaterThanOrEqual(2);
      for (const par of pares) {
        if (par.tipo !== "explicacao-atividade") continue;
        expect(par.explicacao.trim(), item.chave).not.toBe("");
        expect(par.atividade.trim(), item.chave).not.toBe("");
      }
    }
  });

  it("cria uma folha separada de apoio visual para cada explicação", () => {
    for (const item of catalogo) {
      const apostila = gerarApostilaEI(item.chave)!;
      const explicacoes = apostila.paginas
        .filter((pagina) => pagina.etiqueta === "Guia do professor")
        .flatMap((pagina) => pagina.blocos)
        .filter((bloco) => bloco.tipo === "explicacao-atividade");
      const apoios = apostila.paginas.filter((pagina) => pagina.etiqueta === "Apoio visual do professor");
      expect(apoios, item.chave).toHaveLength(explicacoes.length);
      expect(apoios.length, item.chave).toBeGreaterThanOrEqual(2);
      expect(apoios.every((pagina) => pagina.blocos.length === 1 && pagina.blocos[0]?.tipo === "apoio-visual")).toBe(true);
    }
  });
});
