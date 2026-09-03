import { describe, expect, it } from "vitest";
import curso from "./curso";

describe("Português — 1º ano", () => {
  const aulas = curso.unidades.flatMap((unidade) => unidade.aulas);

  it("mantém as dez unidades e aulas publicadas com identificadores únicos", () => {
    expect(curso.unidades).toHaveLength(10);
    expect(aulas.length).toBeGreaterThanOrEqual(40);
    expect(new Set(curso.unidades.map((unidade) => unidade.slug)).size).toBe(10);
    expect(new Set(aulas.map((aula) => aula.slug)).size).toBe(aulas.length);
  });

  it("não usa explicações falsas sobre a relação entre letras e sons", () => {
    const conteudo = JSON.stringify(curso);
    expect(conteudo).not.toMatch(/cada letra (tem|faz) (um|seu) som/i);
    expect(conteudo).not.toMatch(/consoante (não fala|precisa .* ganhar voz)/i);
    expect(conteudo).not.toMatch(/vogal dá voz/i);
    expect(conteudo).not.toMatch(/AC, que não fala/i);
  });

  it("mantém completas as cinco aulas de sílabas e formação de palavras", () => {
    const unidadeSilabas = curso.unidades.find((unidade) =>
      unidade.slug.includes("fabrica-de-silabas"),
    );
    expect(unidadeSilabas?.aulas).toHaveLength(5);
    const conteudo = JSON.stringify(unidadeSilabas);
    expect(conteudo).not.toContain("CASSA");
    expect(conteudo).not.toMatch(/escrita certa/i);
  });

  it("mantém os índices das respostas dentro das alternativas disponíveis", () => {
    const visitar = (valor: unknown): void => {
      if (!valor || typeof valor !== "object") return;
      const objeto = valor as Record<string, unknown>;
      if (Array.isArray(objeto.opcoes) && typeof objeto.correta === "number") {
        expect(objeto.correta).toBeGreaterThanOrEqual(0);
        expect(objeto.correta).toBeLessThan(objeto.opcoes.length);
      }
      Object.values(objeto).forEach(visitar);
    };
    visitar(curso);
  });

  it("ensina frases, ordem direta e entonação sem regras absolutas falsas", () => {
    const unidade = curso.unidades.find((item) => item.slug.includes("palavras-viram-frases"));
    expect(unidade?.aulas).toHaveLength(5);
    const conteudo = JSON.stringify(unidade);
    expect(conteudo).not.toMatch(/toda frase termina com ponto/i);
    expect(conteudo).not.toMatch(/quem faz a ação vem primeiro/i);
    expect(conteudo).not.toMatch(/no fim grita/i);
    expect(conteudo).not.toMatch(/voz alta e rápida/i);
  });

  it("mantém os gêneros textuais com modelos de escrita correspondentes", () => {
    const unidade = curso.unidades.find((item) => item.slug.includes("textos-do-dia-a-dia"));
    expect(unidade?.aulas).toHaveLength(5);
    const convite = unidade?.aulas.find((aula) => aula.slug.includes("convite"));
    const cartaz = unidade?.aulas.find((aula) => aula.slug.includes("cartaz"));
    expect(JSON.stringify(convite)).toContain('"formato":"convite"');
    expect(JSON.stringify(cartaz)).toContain('"formato":"cartaz"');
    const conteudo = JSON.stringify(unidade);
    expect(conteudo).not.toMatch(/todo bilhete tem/i);
    expect(conteudo).not.toMatch(/todo convite tem/i);
  });

  it("ensina narrativa sem transformar estruturas frequentes em regras universais", () => {
    const unidade = curso.unidades.find((item) => item.slug.includes("era-uma-vez"));
    expect(unidade?.aulas).toHaveLength(4);
    const conteudo = JSON.stringify(unidade);
    expect(conteudo).not.toMatch(/toda história tem COMEÇO.*MEIO.*problema.*FIM.*solução/i);
    expect(conteudo).not.toMatch(/personagem.*aparece do começo ao fim/i);
    expect(conteudo).not.toMatch(/secundário é quem ajuda/i);
    expect(conteudo).not.toMatch(/texto sempre dá pistas/i);
  });

  it("mantém corretos os conceitos e pares sonoros da unidade de poesia oral", () => {
    const unidade = curso.unidades.find((item) => item.slug.includes("poesia-cantiga"));
    expect(unidade?.aulas).toHaveLength(4);
    const conteudo = JSON.stringify(unidade);
    expect(conteudo).not.toMatch(/FLOR termina em OL como SOL/i);
    expect(conteudo).not.toMatch(/parlenda é um textinho de tradição oral com rima/i);
    expect(conteudo).not.toMatch(/duas palavras que rimam já viram um poeminha/i);
    expect(conteudo).toContain("FLOR");
    expect(conteudo).toContain("AMOR");
  });

  it("distingue fonemas de letras e sílabas na consciência fonêmica", () => {
    const unidade = curso.unidades.find((item) => item.slug.includes("ouvido-magico"));
    expect(unidade?.aulas).toHaveLength(4);
    const conteudo = JSON.stringify(unidade);
    expect(conteudo).not.toContain('"fonemas":["s","o","l"]');
    expect(conteudo).not.toContain('"fonemas":["c","a","s","a"]');
    expect(conteudo).not.toMatch(/uma palma para cada som/i);
    expect(conteudo).not.toMatch(/termina com \/l\//i);
  });

  it("ensina investigação e diagramas com verificação e sem regras visuais falsas", () => {
    const unidade = curso.unidades.find((item) => item.slug.includes("reporter-brilha"));
    expect(unidade?.aulas).toHaveLength(3);
    const conteudo = JSON.stringify(unidade);
    expect(conteudo).not.toMatch(/história = inventada/i);
    expect(conteudo).not.toMatch(/voz sobe no fim/i);
    expect(conteudo).not.toMatch(/seta.*sempre aponta para o próximo/i);
    expect(conteudo).not.toMatch(/dá pra entender só de olhar/i);
    expect(conteudo).toMatch(/fonte confiável/i);
  });

  it("trabalha combinados, registro e reconto sem promessas ou estruturas absolutas", () => {
    const unidade = curso.unidades.find((item) => item.slug.includes("combinados-e-historias"));
    expect(unidade?.aulas).toHaveLength(3);
    const conteudo = JSON.stringify(unidade);
    expect(conteudo).not.toMatch(/guardar.*para sempre/i);
    expect(conteudo).not.toMatch(/toda história tem começo, problema e fim/i);
    expect(conteudo).not.toMatch(/personagem.*quem aparece na história/i);
    expect(conteudo).not.toMatch(/combinado sempre começa/i);
  });

  it("ensina palavras frequentes e fluência sem memorização visual ou pressão por velocidade", () => {
    const unidade = curso.unidades.find((item) => item.slug.includes("palavras-teimosas"));
    expect(unidade?.aulas).toHaveLength(3);
    const conteudo = JSON.stringify(unidade);
    expect(conteudo).toContain("Palavras Frequentes");
    expect(conteudo).toMatch(/precisão.*compreensão|compreensão.*precisão/i);
    expect(conteudo).not.toMatch(/não se monta.*juntando os sons/i);
    expect(conteudo).not.toMatch(/guarda.*palavra inteira/i);
    expect(conteudo).not.toMatch(/porque juntando os sons não sai/i);
    expect(conteudo).not.toMatch(/ler rápido/i);
  });

  it("mantém todas as alternativas visuais alinhadas aos respectivos textos", () => {
    const visitar = (valor: unknown): void => {
      if (!valor || typeof valor !== "object") return;
      const objeto = valor as Record<string, unknown>;
      if (Array.isArray(objeto.opcoesImagens)) {
        expect(Array.isArray(objeto.opcoes)).toBe(true);
        expect(objeto.opcoesImagens).toHaveLength((objeto.opcoes as unknown[]).length);
      }
      Object.values(objeto).forEach(visitar);
    };
    visitar(curso);
  });
});
