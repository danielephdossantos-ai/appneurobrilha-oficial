import { describe, expect, it } from "vitest";
import curso from "./curso";

const aulas = curso.unidades.flatMap((unidade) => unidade.aulas);
const unidade1 = curso.unidades.find((unidade) => unidade.numero === 1)!;

describe("Matemática do 5º ano", () => {
  it("mantém o inventário final de 7 unidades e 53 aulas", () => {
    expect(curso.unidades).toHaveLength(7);
    expect(curso.unidades.map((unidade) => unidade.aulas.length)).toEqual([7, 11, 6, 6, 8, 7, 8]);
    expect(aulas).toHaveLength(53);
  });

  it("cobre todas as habilidades EF05MA01 a EF05MA25", () => {
    const codigos = new Set(aulas.flatMap((aula) => aula.bncc));
    const ausentes = Array.from({ length: 25 }, (_, indice) => `EF05MA${String(indice + 1).padStart(2, "0")}`)
      .filter((codigo) => !codigos.has(codigo));
    expect(ausentes).toEqual([]);
  });

  it("mantém slugs únicos e os 11 momentos pedagógicos", () => {
    expect(new Set(aulas.map((aula) => aula.slug)).size).toBe(aulas.length);
    for (const aula of aulas) {
      for (let momento = 1; momento <= 11; momento += 1) {
        const prefixo = `momento${String(momento).padStart(2, "0")}_`;
        expect(Object.keys(aula).some((chave) => chave.startsWith(prefixo))).toBe(true);
      }
      expect(aula.momento10_avaliacao.perguntas.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("mantém respostas e índices dentro das alternativas", () => {
    const visitar = (valor: unknown): void => {
      if (!valor || typeof valor !== "object") return;
      const objeto = valor as Record<string, unknown>;
      if (objeto.tipo === "escolhaVisual") {
        const opcoes = (objeto.opcoes as Array<{ nome: string }>).map((opcao) => opcao.nome);
        expect(opcoes).toContain(objeto.respostaCerta);
      }
      Object.values(objeto).forEach(visitar);
    };
    aulas.forEach((aula) => {
      aula.momento10_avaliacao.perguntas.forEach((pergunta) => {
        expect(pergunta.correta).toBeGreaterThanOrEqual(0);
        expect(pergunta.correta).toBeLessThan(pergunta.opcoes.length);
      });
      visitar(aula);
    });
  });

  it("não atribui números naturais às habilidades de decimais ou igualdade", () => {
    expect(unidade1.aulas).toHaveLength(7);
    unidade1.aulas.forEach((aula) => expect(aula.bncc).toEqual(["EF05MA01"]));
    const arredondar = unidade1.aulas.find((aula) => aula.slug === "u1-04-arredondar")!;
    const sequencias = unidade1.aulas.find((aula) => aula.slug === "u1-05-sequencias")!;
    expect(arredondar.bncc).not.toContain("EF05MA02");
    expect(sequencias.bncc).not.toContain("EF05MA10");
  });

  it("distingue seis algarismos do início da classe dos milhões", () => {
    const contagem = unidade1.aulas.find((aula) => aula.slug === "u1-01-contagem-ate-milhao")!;
    const conteudo = JSON.stringify(contagem);
    expect(conteudo).toContain("até 999.999 mora em 6 casas");
    expect(conteudo).toContain("1.000.000 tem 7 algarismos");
    expect(conteudo).toContain("classe dos milhões");
  });

  it("mantém corretas as respostas críticas da unidade 1", () => {
    const respostas = new Map(
      unidade1.aulas.flatMap((aula) => aula.momento10_avaliacao.perguntas)
        .map((pergunta) => [pergunta.pergunta, pergunta.opcoes[pergunta.correta]]),
    );
    expect(respostas.get("215.340 + 132.220 = ?")).toBe("347.560");
    expect(respostas.get("216.300 __ 216.030")).toBe(">");
    expect(respostas.get("Arredonde 3.257 para a centena.")).toBe("3.300");
    expect(respostas.get("Sequência 100 · 200 · 400 · 800 · ___")).toBe("1.600");
  });

  it("confere os resultados de todas as contas passo a passo", () => {
    const falhas: string[] = [];
    const visitar = (valor: unknown, slug: string): void => {
      if (!valor || typeof valor !== "object") return;
      const objeto = valor as Record<string, unknown>;
      if ((objeto.tipo === "contaPassoAPasso" || "contaPassoAPasso" in objeto) && "operacao" in objeto) {
        const operandos = objeto.operandos as number[];
        const operacao = objeto.operacao as string;
        const esperado = operacao === "soma"
          ? operandos.reduce((total, numero) => total + numero, 0)
          : operacao === "sub" ? operandos[0] - operandos[1]
            : operacao === "mult" ? operandos.reduce((produto, numero) => produto * numero, 1)
              : operacao === "div" ? Math.floor(operandos[0] / operandos[1])
              : undefined;
        if (esperado !== undefined && objeto.resultado !== esperado) {
          falhas.push(`${slug}: resultado ${objeto.resultado} deveria ser ${esperado}`);
        }
      }
      Object.values(objeto).forEach((item) => visitar(item, slug));
    };
    aulas.forEach((aula) => visitar(aula, aula.slug));
    expect(falhas).toEqual([]);
  });

  it("ensina problemas pelo sentido e trocas pelo valor posicional", () => {
    const problemas = aulas.find((aula) => aula.slug === "u2-05-problemas")!;
    const trocas = aulas.find((aula) => aula.slug === "u2-04-subtracao-com-troca")!;
    const missao = aulas.find((aula) => aula.slug === "u2-06-missao-final")!;
    expect(JSON.stringify(problemas)).toContain("A situação decide, não uma palavra isolada");
    expect(trocas.momento05_modelagem.enunciado).toContain("Subtraia");
    expect(JSON.stringify(trocas)).toContain("valor posicional");
    expect(JSON.stringify(missao)).not.toContain("D 7 vira 7");
  });

  it("alinha multiplicação à EF05MA08 e ensina potências de 10 pelo valor posicional", () => {
    const unidade3 = curso.unidades.find((unidade) => unidade.numero === 3)!;
    unidade3.aulas.forEach((aula) => {
      expect(aula.bncc).toContain("EF05MA08");
      expect(aula.bncc).not.toContain("EF05MA07");
    });
    const conteudo = JSON.stringify(unidade3.aulas).toLowerCase();
    expect(conteudo).not.toContain("+1 zero");
    expect(conteudo).not.toContain("+2 zeros");
    expect(conteudo).not.toContain("junte 3 zeros");
    expect(conteudo).not.toContain("coloque um 0 no fim");
    expect(conteudo).toContain("valor posicional");
  });

  it("alinha divisão à EF05MA08 e preserva quociente e resto", () => {
    const unidade4 = curso.unidades.find((unidade) => unidade.numero === 4)!;
    unidade4.aulas.forEach((aula) => {
      expect(aula.bncc).toContain("EF05MA08");
      expect(aula.bncc).not.toContain("EF05MA07");
    });
    const resto = unidade4.aulas.find((aula) => aula.slug === "u4-02-divisao-com-resto")!;
    expect(resto.momento05_modelagem.resposta).toBe("q=20, r=3");
    expect(JSON.stringify(resto)).toContain("4×20+3=83");
  });

  it("estima divisão pelo divisor inteiro e ensina conferência", () => {
    const doisDigitos = aulas.find((aula) => aula.slug === "u4-04-divisao-por-2-digitos")!;
    const missao = aulas.find((aula) => aula.slug === "u4-06-missao-final")!;
    expect(JSON.stringify(doisDigitos)).not.toContain("use a 1ª casa do divisor");
    expect(JSON.stringify(doisDigitos)).toContain("múltiplos do divisor inteiro");
    expect(JSON.stringify(missao)).toContain("divisor × quociente + resto");
    expect(JSON.stringify(missao)).not.toContain("Se souber a tabuada, você sabe dividir");
  });

  it("alinha frações e decimais às habilidades correspondentes", () => {
    const equivalentes = aulas.find((aula) => aula.slug === "u5-01-fracoes-equivalentes")!;
    const comparar = aulas.find((aula) => aula.slug === "u5-02-comparar-fracoes")!;
    const decimais = aulas.find((aula) => aula.slug === "u5-05-decimais-milesimos")!;
    const operar = aulas.find((aula) => aula.slug === "u5-06-operar-decimais")!;
    expect(equivalentes.bncc).toEqual(["EF05MA04"]);
    expect(comparar.bncc).toEqual(["EF05MA05"]);
    expect(decimais.bncc).toEqual(["EF05MA02", "EF05MA03"]);
    expect(operar.bncc).toEqual(["EF05MA07", "EF05MA08"]);
  });

  it("explica MMC, preserva valor decimal e evita arredondamento monetário oculto", () => {
    const denominadores = aulas.find((aula) => aula.slug === "u5-04-soma-diferente-denom")!;
    const operar = aulas.find((aula) => aula.slug === "u5-06-operar-decimais")!;
    const missao = aulas.find((aula) => aula.slug === "u5-08-missao-final")!;
    expect(JSON.stringify(denominadores)).toContain("mínimo múltiplo comum");
    expect(JSON.stringify(denominadores)).toContain("Múltiplos de 5");
    expect(JSON.stringify(operar)).not.toContain("ignore vírgula");
    expect(JSON.stringify(operar)).toContain("245 centésimos");
    expect(missao.momento08_aplicacao.interacao.tipo).toBe("escolhaVisual");
    if (missao.momento08_aplicacao.interacao.tipo === "escolhaVisual") {
      expect(missao.momento08_aplicacao.interacao.respostaCerta).toBe("R$ 90,00");
    }
  });

  it("distingue área de perímetro conforme a EF05MA20", () => {
    const area = aulas.find((aula) => aula.slug === "u6-05-area")!;
    const conteudo = JSON.stringify(area);
    expect(area.bncc).toEqual(["EF05MA20"]);
    expect(conteudo).toContain("mesmo perímetro e áreas diferentes");
    expect(conteudo).toContain("mesma área e perímetros diferentes");
    expect(conteudo).toContain("unidades quadradas");
  });

  it("mede volume por cubos unitários e mantém a conta tridimensional completa", () => {
    const volume = aulas.find((aula) => aula.slug === "u6-06-volume")!;
    expect(volume.bncc).toEqual(["EF05MA21"]);
    expect(JSON.stringify(volume)).toContain("cubos unitários");
    expect(volume.momento05_modelagem.contaPassoAPasso?.operandos).toEqual([10, 5, 4]);
    expect(volume.momento05_modelagem.contaPassoAPasso?.resultado).toBe(200);
    expect(volume.momento05_modelagem.resposta).toBe("200 cm³");
  });

  it("alinha localização, polígonos e ampliação às habilidades de geometria", () => {
    const plano = aulas.find((aula) => aula.slug === "u7-01-plano-cartesiano")!;
    const ampliacao = aulas.find((aula) => aula.slug === "u7-02-ampliacao-reducao")!;
    const angulos = aulas.find((aula) => aula.slug === "u7-03-angulos-transferidor")!;
    const poligonos = aulas.find((aula) => aula.slug === "u7-04-poligonos-regulares")!;
    expect(plano.bncc).toEqual(["EF05MA14", "EF05MA15"]);
    expect(JSON.stringify(plano)).not.toContain("(−2, 4)");
    expect(ampliacao.bncc).toEqual(["EF05MA18"]);
    expect(angulos.bncc).toEqual(["EF05MA17"]);
    expect(poligonos.bncc).toEqual(["EF05MA17"]);
  });

  it("inclui planificações reais na EF05MA16", () => {
    const planificacoes = aulas.find((aula) => aula.slug === "u7-08-planificacoes")!;
    expect(planificacoes.bncc).toEqual(["EF05MA16"]);
    expect(JSON.stringify(planificacoes)).toContain("6 quadrados");
    expect(JSON.stringify(planificacoes)).toContain("2 triângulos e 3 retângulos");
    expect(JSON.stringify(planificacoes)).toContain("1 quadrado e 4 triângulos");
  });

  it("liga pesquisa a gráficos e usa experimento probabilístico infantil", () => {
    const graficos = aulas.find((aula) => aula.slug === "u7-05-graficos")!;
    const probabilidade = aulas.find((aula) => aula.slug === "u7-06-probabilidade")!;
    expect(graficos.bncc).toEqual(["EF05MA24", "EF05MA25"]);
    expect(JSON.stringify(probabilidade)).not.toContain("Baralho de 52 cartas");
    expect(JSON.stringify(probabilidade)).toContain("4/20 = 1/5");
  });

  it("inclui o bloco completo de contagem e álgebra EF05MA09 a EF05MA13", () => {
    const porCodigo = new Map(aulas.flatMap((aula) => aula.bncc.map((codigo) => [codigo, aula])));
    expect(porCodigo.get("EF05MA09")?.slug).toBe("u2-07-principio-multiplicativo");
    expect(porCodigo.get("EF05MA10")?.slug).toBe("u2-08-equivalencia-igualdade");
    expect(porCodigo.get("EF05MA11")?.slug).toBe("u2-09-termo-desconhecido");
    expect(porCodigo.get("EF05MA12")?.slug).toBe("u2-10-proporcionalidade-direta");
    expect(porCodigo.get("EF05MA13")?.slug).toBe("u2-11-partilha-desigual");
  });
});
