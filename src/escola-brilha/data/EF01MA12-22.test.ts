import { describe, expect, it } from "vitest";
import ma12 from "./EF01MA12";
import ma13 from "./EF01MA13";
import ma14 from "./EF01MA14";
import ma15 from "./EF01MA15";
import ma16 from "./EF01MA16";
import ma17 from "./EF01MA17";
import ma18 from "./EF01MA18";
import ma19 from "./EF01MA19";
import ma20 from "./EF01MA20";
import ma21 from "./EF01MA21";
import ma22 from "./EF01MA22";

const aulas = [ma12, ma13, ma14, ma15, ma16, ma17, ma18, ma19, ma20, ma21, ma22];

describe("EF01MA12–EF01MA22 — auditoria conjunta", () => {
  it("mantém a sequência completa de códigos", () => {
    expect(aulas.map((aula) => aula.codigo)).toEqual(
      Array.from({ length: 11 }, (_, indice) => `EF01MA${indice + 12}`),
    );
  });

  it("EF01MA12 preserva os lados do corpo e ensina referencial", () => {
    const conteudo = JSON.stringify(ma12);
    expect(conteudo).toMatch(/Continua sendo a mão direita/i);
    expect(conteudo).toMatch(/ponto de referência/i);
    expect(conteudo).not.toMatch(/direita e esquerda TROCAM/i);
  });

  it("EF01MA13 usa vocabulário geométrico correto", () => {
    const conteudo = JSON.stringify(ma13);
    expect(conteudo).toMatch(/6 faces planas quadradas/i);
    expect(conteudo).toMatch(/duas bases circulares paralelas/i);
    expect(conteudo).toMatch(/uma base circular.*um vértice/i);
    expect(conteudo).not.toMatch(/6 lados iguais/i);
  });

  it("EF01MA14 distingue figura plana de objeto espacial", () => {
    const conteudo = JSON.stringify(ma14);
    expect(conteudo).toMatch(/bola é uma esfera/i);
    expect(conteudo).toMatch(/face plana de uma moeda.*círculo/i);
  });

  it("EF01MA15 ensina estimar, testar e medir", () => {
    const conteudo = JSON.stringify(ma15);
    expect(conteudo).toMatch(/estime, depois teste/i);
    expect(conteudo).toMatch(/tamanho sozinho não garante maior massa/i);
    expect(conteudo).toMatch(/copinhos iguais/i);
  });

  it("EF01MA16 não impõe rotina única e relaciona relógios", () => {
    const conteudo = JSON.stringify(ma16);
    expect(conteudo).toMatch(/Rotinas variam/i);
    expect(conteudo).toMatch(/relógio analógico/i);
    expect(conteudo).toMatch(/relógio digital/i);
  });

  it("EF01MA17 trata semana como ciclo e admite layouts de calendário", () => {
    const conteudo = JSON.stringify(ma17);
    expect(conteudo).toMatch(/7 dias.*ciclo/i);
    expect(conteudo).toMatch(/domingo ou segunda-feira na primeira coluna/i);
  });

  it("EF01MA18 verifica a validade das datas", () => {
    const conteudo = JSON.stringify(ma18);
    expect(conteudo).toMatch(/Nem todo mês tem 31 dias/i);
    expect(conteudo).toMatch(/ano bissexto/i);
  });

  it("EF01MA19 compara unidades corretamente e inclui R$ 200", () => {
    const conteudo = JSON.stringify(ma19);
    expect(conteudo).toMatch(/100 centavos formam 1 real/i);
    expect(conteudo).toMatch(/R\$ 200/);
    expect(conteudo).toMatch(/mesma unidade/i);
  });

  it("EF01MA20 define a experiência e corrige eventos incertos", () => {
    const conteudo = JSON.stringify(ma20);
    expect(conteudo).toMatch(/experiência bem definida/i);
    expect(ma20.atividadeGuiada.resposta).toContain("Possível");
    expect(conteudo).not.toMatch(/Lua sempre aparece à noite/i);
  });

  it("EF01MA21 ensina leitura completa e cálculos com dados", () => {
    const conteudo = JSON.stringify(ma21);
    expect(conteudo).toMatch(/título, categorias, escala e unidade/i);
    expect(conteudo).toMatch(/total somando.*diferença subtraindo/i);
  });

  it("EF01MA22 ensina coleta confiável de até duas variáveis", () => {
    const conteudo = JSON.stringify(ma22);
    expect(conteudo).toMatch(/categorias de resposta que não se confundem/i);
    expect(conteudo).toMatch(/uma resposta de cada participante/i);
    expect(conteudo).toMatch(/duas variáveis/i);
  });

  it("mantém todos os índices de gabarito válidos", () => {
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
});
