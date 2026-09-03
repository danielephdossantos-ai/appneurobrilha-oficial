import { describe, expect, it } from "vitest";
import curso from "./curso";

const aulas = curso.unidades.flatMap((unidade) => unidade.aulas);

describe("Matemática do 4º ano", () => {
  it("mantém o inventário final de 7 unidades e 58 aulas", () => {
    expect(curso.unidades).toHaveLength(7);
    expect(curso.unidades.map((unidade) => unidade.aulas.length)).toEqual([10, 8, 8, 8, 7, 9, 8]);
    expect(aulas).toHaveLength(58);
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

  it("cobre todas as habilidades EF04MA01 a EF04MA28", () => {
    const codigos = new Set(aulas.flatMap((aula) => aula.bncc));
    const ausentes = Array.from({ length: 28 }, (_, indice) => `EF04MA${String(indice + 1).padStart(2, "0")}`)
      .filter((codigo) => !codigos.has(codigo));
    expect(ausentes).toEqual([]);
  });

  it("não ensina operação por palavra-chave nem usa aposta infantil", () => {
    const conteudo = JSON.stringify(aulas).toLowerCase();
    expect(conteudo).not.toContain("palavra-chave");
    expect(conteudo).not.toContain("loteria");
    expect(conteudo).not.toContain("aposta");
  });

  it("mantém correta a troca em cadeia de 7.203 menos 3.478", () => {
    const missao = aulas.find((aula) => aula.slug === "u2-07-missao-final")!;
    expect(missao.momento05_modelagem.resposta).toBe("3.725");
    expect(missao.momento05_modelagem.passos.join(" ")).toContain("9 − 7 = 2");
  });

  it("distingue padrões de restos e operações inversas", () => {
    const restos = aulas.find((aula) => aula.slug === "u4-08-padroes-restos")!;
    const igualdade = aulas.find((aula) => aula.slug === "u2-08-equilibrio-igualdade")!;
    expect(restos.bncc).toEqual(["EF04MA12"]);
    expect(JSON.stringify(restos)).toContain("mesmo resto");
    expect(igualdade.bncc).toContain("EF04MA13");
  });

  it("não mistura códigos de estatística com multiplicação e divisão", () => {
    const unidadesOperacoes = curso.unidades.filter((unidade) => unidade.numero === 3 || unidade.numero === 4);
    const codigos = unidadesOperacoes.flatMap((unidade) => unidade.aulas).flatMap((aula) => aula.bncc);
    expect(codigos).not.toContain("EF04MA26");
    expect(codigos).not.toContain("EF04MA27");
  });

  it("ensina valor posicional em vez de colar ou apagar zeros", () => {
    const conteudo = JSON.stringify(curso.unidades.filter((unidade) => unidade.numero === 3 || unidade.numero === 4).flatMap((unidade) => unidade.aulas)).toLowerCase();
    expect(conteudo).not.toContain("colar zeros");
    expect(conteudo).not.toContain("apagar 2 zeros");
    expect(conteudo).not.toContain("tira 1 zero");
  });

  it("confere automaticamente contas explícitas nas avaliações", () => {
    const numero = (texto: string) => Number(texto.replace(/\./g, "").replace(",", ".").replace(/[^0-9.-]/g, ""));
    const falhas: string[] = [];
    const aulasAuditadas = curso.unidades.filter((unidade) => unidade.numero <= 2).flatMap((unidade) => unidade.aulas);
    for (const aula of aulasAuditadas) {
      for (const pergunta of aula.momento10_avaliacao.perguntas) {
        const soma = pergunta.pergunta.match(/([0-9][0-9.]*(?:\s*\+\s*[0-9][0-9.]*)+)/)?.[1];
        const binaria = pergunta.pergunta.match(/([0-9][0-9.]*)\s*([−×÷])\s*([0-9][0-9.]*)/);
        let esperado: number | undefined;
        if (soma) esperado = soma.split("+").reduce((total, parcela) => total + numero(parcela), 0);
        else if (binaria) {
          const a = numero(binaria[1]);
          const b = numero(binaria[3]);
          esperado = binaria[2] === "−" ? a - b : binaria[2] === "×" ? a * b : a / b;
        }
        if (esperado === undefined) continue;
        const resposta = numero(pergunta.opcoes[pergunta.correta]);
        if (Number.isFinite(resposta) && Math.abs(resposta - esperado) > 0.0001) {
          falhas.push(`${aula.slug}: ${pergunta.pergunta} → ${pergunta.opcoes[pergunta.correta]} (esperado ${esperado})`);
        }
      }
    }
    expect(falhas).toEqual([]);
  });

  it("mantém corretos os casos críticos de arredondamento e sequência", () => {
    const arredondar = aulas.find((aula) => aula.slug === "u1-07-arredondar")!;
    expect(arredondar.momento10_avaliacao.perguntas.map((pergunta) => pergunta.opcoes[pergunta.correta]))
      .toEqual(["300", "8.000", "5.000"]);
    const sequencias = aulas.find((aula) => aula.slug === "u1-08-sequencias-regularidades")!;
    expect(sequencias.momento10_avaliacao.perguntas.map((pergunta) => pergunta.opcoes[pergunta.correta]))
      .toEqual(["380", "+1.000", "5.200"]);
  });

  it("alinha frações e números decimais às habilidades corretas", () => {
    const ideia = aulas.find((aula) => aula.slug === "u5-01-ideia-de-fracao")!;
    const comparar = aulas.find((aula) => aula.slug === "u5-03-comparar-fracoes")!;
    expect(ideia.bncc).toEqual(["EF04MA09"]);
    expect(JSON.stringify(ideia)).toContain("reta numérica");
    expect(JSON.stringify(ideia)).toContain("1/100");
    expect(comparar.bncc).toEqual(["EF04MA09"]);
    expect(comparar.bncc).not.toContain("EF04MA10");
  });

  it("converte corretamente centímetros em metros", () => {
    const decimos = aulas.find((aula) => aula.slug === "u5-04-decimais-decimos")!;
    const missao = JSON.stringify(decimos.momento11_missaoFamilia);
    expect(missao).toContain("Divida cada medida por 100");
    expect(missao).toContain("30 cm = 0,30 m");
    expect(missao).not.toContain("Divida cada medida por 10 e escreva em metros");
  });

  it("mantém corretas as respostas decimais críticas da unidade 5", () => {
    const respostasPorPergunta = new Map(
      curso.unidades.find((unidade) => unidade.numero === 5)!.aulas
        .flatMap((aula) => aula.momento10_avaliacao.perguntas)
        .map((pergunta) => [pergunta.pergunta, pergunta.opcoes[pergunta.correta]]),
    );
    expect(respostasPorPergunta.get("0,4 + 0,3 = ?")).toBe("0,7");
    expect(respostasPorPergunta.get("R$ 3,25 + R$ 4,50 = ?")).toBe("R$ 7,75");
    expect(respostasPorPergunta.get("R$ 15,50 + R$ 4,25 = ?")).toBe("R$ 19,75");
    expect(respostasPorPergunta.get("0,3 + 0,5 = ?")).toBe("0,8");
    expect(respostasPorPergunta.get("R$ 20 − R$ 7,50 = ?")).toBe("R$ 12,50");
  });

  it("separa corretamente medidas, área, temperatura e dinheiro", () => {
    const unidade6 = curso.unidades.find((unidade) => unidade.numero === 6)!;
    const porSlug = new Map(unidade6.aulas.map((aula) => [aula.slug, aula]));
    expect(porSlug.get("u6-01-comprimento")!.bncc).toEqual(["EF04MA20"]);
    expect(porSlug.get("u6-02-massa")!.bncc).toEqual(["EF04MA20"]);
    expect(porSlug.get("u6-03-capacidade")!.bncc).toEqual(["EF04MA20"]);
    expect(porSlug.get("u6-06-perimetro")!.bncc).toEqual(["EF04MA20"]);
    expect(porSlug.get("u6-08-comparar-areas")!.bncc).toEqual(["EF04MA21"]);
    expect(porSlug.get("u6-09-temperatura")!.bncc).toEqual(["EF04MA23", "EF04MA24"]);
    expect(porSlug.get("u6-05-dinheiro")!.bncc).toEqual(["EF04MA25"]);
  });

  it("ensina área sem antecipar fórmula e temperatura com registros", () => {
    const area = aulas.find((aula) => aula.slug === "u6-08-comparar-areas")!;
    const temperatura = aulas.find((aula) => aula.slug === "u6-09-temperatura")!;
    const conteudoArea = JSON.stringify(area).toLowerCase();
    expect(conteudoArea).toContain("quadradinhos");
    expect(conteudoArea).toContain("sobrep");
    expect(conteudoArea).not.toContain("base × altura");
    expect(JSON.stringify(temperatura)).toContain("graus Celsius");
    expect(JSON.stringify(temperatura)).toContain("tabela");
    expect(temperatura.momento05_modelagem.resposta).toBe("8 °C");
  });

  it("alinha sólidos, ângulos e simetria às habilidades de geometria", () => {
    const solidos = aulas.find((aula) => aula.slug === "u7-01-poligonos")!;
    const angulos = aulas.find((aula) => aula.slug === "u7-02-angulos")!;
    const simetria = aulas.find((aula) => aula.slug === "u7-03-simetria")!;
    expect(solidos.bncc).toEqual(["EF04MA17"]);
    expect(JSON.stringify(solidos)).toContain("Prisma");
    expect(JSON.stringify(solidos)).toContain("Pirâmide");
    expect(angulos.bncc).toEqual(["EF04MA18"]);
    expect(simetria.bncc).toEqual(["EF04MA19"]);
    expect(JSON.stringify(simetria)).not.toContain("Só figuras REGULARES");
  });

  it("não confunde eventos equiprováveis nem ensina atalhos falsos de divisão", () => {
    const probabilidade = aulas.find((aula) => aula.slug === "u7-06-probabilidade")!;
    const missaoFinal = aulas.find((aula) => aula.slug === "u7-07-missao-final-reino")!;
    expect(JSON.stringify(probabilidade)).toContain("Mesma chance: 1 em 2");
    expect(JSON.stringify(probabilidade)).not.toContain("Provável (meio a meio)");
    expect(JSON.stringify(missaoFinal)).not.toContain("Div pela maior casa");
    expect(JSON.stringify(missaoFinal)).toContain("primeiro dividendo parcial possível");
  });

  it("mantém metadados e alternativas íntegros em todas as aulas", () => {
    for (const aula of aulas) {
      expect(aula.titulo.trim().length).toBeGreaterThan(0);
      expect(aula.bncc.length).toBeGreaterThan(0);
      aula.bncc.forEach((codigo) => expect(codigo).toMatch(/^EF04MA(?:0[1-9]|1[0-9]|2[0-8])$/));
      expect(aula.duracaoMin).toBeGreaterThanOrEqual(15);
      expect(aula.recompensa.xp).toBeGreaterThan(0);
      expect(aula.recompensa.moedas).toBeGreaterThan(0);
      for (const pergunta of aula.momento10_avaliacao.perguntas) {
        expect(new Set(pergunta.opcoes).size).toBe(pergunta.opcoes.length);
        expect(pergunta.opcoes.every((opcao) => opcao.trim().length > 0)).toBe(true);
      }
    }
  });
});
