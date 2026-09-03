import { describe, expect, it } from "vitest";
import curso from "./curso";

const aulas = curso.unidades.flatMap((unidade) => unidade.aulas);

describe("Matemática do 3º ano", () => {
  it("cobre todas as habilidades EF03MA01 a EF03MA28", () => {
    const codigos = new Set(aulas.flatMap((aula) => aula.bncc));
    for (let numero = 1; numero <= 28; numero += 1) {
      expect(codigos.has(`EF03MA${String(numero).padStart(2, "0")}`)).toBe(true);
    }
  });

  it("mantém slugs únicos e os 11 momentos pedagógicos", () => {
    expect(new Set(aulas.map((aula) => aula.slug)).size).toBe(aulas.length);
    for (const aula of aulas) {
      for (let momento = 1; momento <= 11; momento += 1) {
        const chave = `momento${String(momento).padStart(2, "0")}_`;
        expect(Object.keys(aula).some((nome) => nome.startsWith(chave))).toBe(true);
      }
      expect(aula.momento10_avaliacao.perguntas.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("mantém índices de respostas dentro das alternativas", () => {
    for (const aula of aulas) {
      for (const pergunta of aula.momento10_avaliacao.perguntas) {
        expect(pergunta.correta).toBeGreaterThanOrEqual(0);
        expect(pergunta.correta).toBeLessThan(pergunta.opcoes.length);
      }
    }
  });

  it("mantém a resposta das escolhas entre as opções apresentadas", () => {
    const visitar = (valor: unknown): void => {
      if (!valor || typeof valor !== "object") return;
      const objeto = valor as Record<string, unknown>;
      if (objeto.tipo === "escolhaVisual") {
        const opcoes = (objeto.opcoes as Array<{ nome: string }>).map((opcao) => opcao.nome);
        expect(opcoes).toContain(objeto.respostaCerta);
      }
      Object.values(objeto).forEach(visitar);
    };
    aulas.forEach(visitar);
  });

  it("evita coleções grandes que ficam pequenas no celular", () => {
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

  it("não usa jogos de aposta como exemplo infantil", () => {
    const conteudo = JSON.stringify(aulas).toLowerCase();
    expect(conteudo).not.toContain("loteria");
    expect(conteudo).not.toContain("aposta");
    expect(conteudo).not.toContain("nevar no deserto");
  });

  it("não ensina escolha de operação por palavra-chave", () => {
    const conteudo = JSON.stringify(aulas).toLowerCase();
    expect(conteudo).not.toContain("palavra-chave");
    expect(conteudo).not.toMatch(/["'](ao todo|a mais|total|ficaram)["']\s*[→=]\s*(soma|subtra)/);
  });

  it("ensina de verdade as três lacunas que foram completadas", () => {
    const porCodigo = (codigo: string) => aulas.find((aula) => aula.bncc.includes(codigo));
    expect(JSON.stringify(porCodigo("EF03MA04"))).toContain("Complete uma dezena");
    expect(JSON.stringify(porCodigo("EF03MA11"))).toContain("mesmo valor");
    expect(JSON.stringify(porCodigo("EF03MA21"))).toContain("quadrados do mesmo tamanho");
  });

  it("mapeia divisão e partes iguais às habilidades corretas", () => {
    const unidadeDivisao = curso.unidades.find((unidade) => unidade.numero === 4);
    expect(unidadeDivisao).toBeDefined();
    expect(unidadeDivisao!.aulas.some((aula) => aula.bncc.includes("EF03MA08"))).toBe(true);
    expect(unidadeDivisao!.aulas.some((aula) => aula.bncc.includes("EF03MA09"))).toBe(true);
    expect(unidadeDivisao!.aulas.every((aula) => !aula.bncc.includes("EF03MA10"))).toBe(true);
  });

  it("mapeia sólidos, figuras planas e congruência corretamente", () => {
    const porSlug = (slug: string) => aulas.find((aula) => aula.slug === slug)!;
    expect(porSlug("u6-02-solidos").bncc).toEqual(expect.arrayContaining(["EF03MA13", "EF03MA14"]));
    expect(porSlug("u6-01-figuras-planas").bncc).toContain("EF03MA15");
    expect(porSlug("u6-06-congruencia").bncc).toEqual(["EF03MA16"]);
  });

  it("traz exemplo concreto em cada etapa de explicação", () => {
    const faltas: string[] = [];
    for (const aula of aulas) {
      aula.momento04_explicacao.etapas.forEach((etapa, indice) => {
        if (!etapa.exemploReal) faltas.push(`${aula.slug}#${indice + 1}`);
      });
    }
    expect(faltas).toEqual([]);
  });

  it("não oferece feedback genérico nas avaliações", () => {
    const genericos: string[] = [];
    for (const aula of aulas) {
      aula.momento10_avaliacao.perguntas.forEach((pergunta, indice) => {
        const limpar = (texto: string) => texto.toLowerCase().replace(/[^a-zá-ú]/g, "").trim();
        if (["certo", "correto", "parabéns"].includes(limpar(pergunta.feedbackAcerto))) genericos.push(`${aula.slug}#${indice + 1}:acerto`);
        if (["tente novamente", "errado", "incorreto"].includes(limpar(pergunta.feedbackErro))) genericos.push(`${aula.slug}#${indice + 1}:erro`);
      });
    }
    expect(genericos).toEqual([]);
  });
});
