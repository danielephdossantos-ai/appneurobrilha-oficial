import { describe, expect, it } from "vitest";
import { CATEGORIAS, GRUPOS, VARIATIONS } from "./variations";

describe("inventário do Neuro-Treino", () => {
  it("exibe cada categoria exatamente uma vez", () => {
    const exibidas = GRUPOS.flatMap((grupo) => grupo.slugs);
    const categorias = Object.keys(CATEGORIAS);

    expect(new Set(exibidas).size).toBe(exibidas.length);
    expect([...new Set(exibidas)].sort()).toEqual(categorias.sort());
  });

  it("mantém variações válidas e identificadores únicos em todas as categorias", () => {
    for (const [slug, variacoes] of Object.entries(VARIATIONS)) {
      expect(variacoes.length, `${slug} sem variações`).toBeGreaterThan(0);
      expect(
        new Set(variacoes.map((variacao) => variacao.id)).size,
        `${slug} possui IDs duplicados`,
      ).toBe(variacoes.length);
    }
  });

  it("oferece 30 exercícios auditivos distintos, graduados e com contrastes reais", () => {
    const exercicios = VARIATIONS["discriminacao-auditiva"];
    const assinaturas = exercicios.map(({ payload }) => `${payload.correta}|${payload.par1}|${payload.par2}`);

    expect(exercicios).toHaveLength(30);
    expect(new Set(assinaturas).size).toBe(30);
    expect(new Set(exercicios.map(({ payload }) => payload.nivel))).toEqual(new Set([1, 2, 3]));
    for (const { payload } of exercicios) {
      expect(payload.par1).not.toBe(payload.par2);
      expect([payload.par1, payload.par2]).toContain(payload.correta);
      expect(payload.pista).toBe(payload.correta.toLocaleLowerCase("pt-BR"));
    }
  });

  it("usa sons reais e progressão nas tarefas de memória auditiva", () => {
    const pares = VARIATIONS["pares-sonoros"];
    const sequencias = VARIATIONS["sequencia-auditiva"];
    const sonsPermitidos = new Set(["do", "re", "mi", "sol", "la"]);

    expect(pares).toHaveLength(30);
    expect(sequencias).toHaveLength(30);
    for (const { payload } of [...pares, ...sequencias]) {
      const sons = payload.sons ?? payload.seq;
      expect(sons.every((som: string) => sonsPermitidos.has(som))).toBe(true);
      expect(payload.nivel).toBeGreaterThanOrEqual(1);
      expect(payload.nivel).toBeLessThanOrEqual(3);
    }
  });

  it("mantém válidos os bancos de articulação, vocabulário e nomeação rápida", () => {
    for (const { payload } of VARIATIONS["articulacao-sons"]) {
      expect(payload.palavra).toBeTruthy();
      expect(payload.silabas).toContain(payload.silaba_foco);
    }
    for (const { payload } of VARIATIONS["vocabulario-semantico"]) {
      expect(payload.itens).toHaveLength(4);
      expect(new Set(payload.itens).size).toBe(4);
      expect(payload.itens).toContain(payload.intruso);
    }
    const nomes = VARIATIONS["nomeacao-rapida"].map(({ payload }) => payload.nome);
    expect(new Set(nomes).size).toBe(nomes.length);
    for (const { payload } of VARIATIONS["nomeacao-rapida"]) {
      expect(payload.bank).toHaveLength(12);
      expect(payload.opts).toContain(payload.nome);
    }
  });

  it("mantém atenção e memória em progressão adequada para crianças até 7 anos", () => {
    const diferentes = VARIATIONS["achar-diferente"];
    const memorias = VARIATIONS["memoria-visual"];
    const ordens = VARIATIONS["ordem-inversa"];
    const sinais = VARIATIONS["sinal-verde-vermelho"];

    expect(diferentes.map(({ payload }) => payload.grid.length)).toEqual([
      ...Array(10).fill(6), ...Array(10).fill(9), ...Array(10).fill(12),
    ]);
    expect(memorias.map(({ payload }) => payload.grid.length)).toEqual([
      ...Array(10).fill(3), ...Array(10).fill(4), ...Array(10).fill(5),
    ]);
    for (const { payload } of memorias) expect(payload.flashMs).toBeGreaterThanOrEqual(3000);
    for (const { payload } of ordens) {
      expect(payload.itens.length).toBeGreaterThanOrEqual(2);
      expect(payload.itens.length).toBeLessThanOrEqual(5);
      expect(payload.ordem).toEqual([...payload.itens].reverse());
    }
    for (const { payload } of sinais) {
      expect(payload.seq.some((item: { tipo: string }) => item.tipo === "verde")).toBe(true);
      expect(payload.seq.some((item: { tipo: string }) => item.tipo === "vermelho")).toBe(true);
    }
  });

  it("garante matemática inicial, troca de regra e planejamento reais", () => {
    const banquetes = VARIATIONS["banquete-dos-dinos"];
    const trocas = VARIATIONS["troca-troca-regras"];
    const pontes = VARIATIONS["ponte-de-blocos"];

    for (const { payload } of banquetes) {
      expect(payload.qtd).toBeGreaterThanOrEqual(1);
      expect(payload.qtd).toBeLessThanOrEqual(5);
      expect(payload.opts).toContain(payload.qtd);
    }
    for (const { payload } of trocas) {
      expect(payload.sequenciaRegras).toHaveLength(payload.rounds);
      expect(new Set(payload.sequenciaRegras)).toEqual(new Set(["cor", "forma"]));
      expect(payload.sequenciaRegras.some((regra: string, i: number, lista: string[]) => i > 0 && regra !== lista[i - 1])).toBe(true);
    }
    for (const { payload } of pontes) {
      expect(payload.ponte[payload.lacuna]).toBe(payload.correta);
      expect(payload.opts).toContain(payload.correta);
      expect(new Set(payload.opts).size).toBe(payload.opts.length);
    }
  });

  it("organiza progressão motora sem desafios excessivos para a faixa etária", () => {
    const ritmos = VARIATIONS["ritmo-batidas"];
    const alvos = VARIATIONS["alvo-movel"];
    const puzzles = VARIATIONS["quebra-cabeca-magico"];

    for (const { payload } of ritmos) {
      const limites = payload.nivel === 1 ? [1, 3] : payload.nivel === 2 ? [3, 4] : [4, 6];
      expect(payload.batidas).toBeGreaterThanOrEqual(limites[0]);
      expect(payload.batidas).toBeLessThanOrEqual(limites[1]);
    }
    expect(alvos.slice(0, 10).every(({ payload }) => payload.rounds === 3)).toBe(true);
    expect(alvos.slice(10, 20).every(({ payload }) => payload.rounds === 4)).toBe(true);
    expect(alvos.slice(20).every(({ payload }) => payload.rounds === 5)).toBe(true);
    for (const { payload } of puzzles) expect(payload.pecas).toBeLessThanOrEqual(12);
  });

  it("mantém alfabetização com quatro respostas únicas e gabaritos que formam palavras reais", () => {
    const categoriasComQuatroOpcoes = [
      "sons-iniciais",
      "rimas",
      "consciencia-fonologica",
      "consciencia-silabica",
      "palavra-imagem",
      "leitura-palavras",
      "completar-letra",
    ] as const;

    for (const slug of categoriasComQuatroOpcoes) {
      for (const { payload } of VARIATIONS[slug]) {
        const opcoes = payload.options ?? payload.opts;
        expect(opcoes, `${slug} sem opções`).toHaveLength(4);
        const normalizadas = opcoes.map((opcao: unknown) =>
          typeof opcao === "object" && opcao !== null ? JSON.stringify(opcao) : String(opcao),
        );
        expect(new Set(normalizadas).size, `${slug} com opção repetida`).toBe(4);
      }
    }

    for (const { payload } of VARIATIONS["completar-letra"]) {
      expect(payload.palavra.replace("_", payload.letra)).toBe(payload.resultado);
      expect(payload.resultado).not.toMatch(/^(CICU|BANA)$/);
    }
    for (const { payload } of VARIATIONS["pedacinhos-da-palavra"]) {
      expect(payload.silabas.join("")).toBe(payload.palavra);
    }
  });

  it("oferece treino graduado de orientação da escrita sem pressão de tempo", () => {
    const treinos = VARIATIONS["direcao-letras-numeros"];
    expect(treinos).toHaveLength(30);
    expect(new Set(treinos.map(({ payload }) => payload.simbolo))).toEqual(
      new Set(["b", "d", "p", "q", "2", "3", "5", "6", "7", "9"]),
    );
    for (const { payload } of treinos) {
      expect(payload.inicio).toBeTruthy();
      expect(payload.sentido).toBeTruthy();
      expect([1, 2]).toContain(payload.nivel);
    }
  });

  it("mantém comunicação, emoções e sopro com opções válidas e progressão", () => {
    for (const slug of ["onomatopeias-animadas", "paromatopeias-corpo", "expressao-emocao"] as const) {
      for (const { payload } of VARIATIONS[slug]) {
        const opcoes = payload.options ?? payload.opts;
        expect(opcoes).toHaveLength(4);
        expect(new Set(opcoes.map((opcao: unknown) => JSON.stringify(opcao))).size).toBe(4);
      }
    }
    for (const { payload } of VARIATIONS["triagem-categorias"]) {
      const caixas = new Set(payload.caixas.map((caixa: { nome: string }) => caixa.nome));
      expect(payload.itens.every((item: { cat: string }) => caixas.has(item.cat))).toBe(true);
    }
    const sopros = VARIATIONS["ritmo-e-sopro"];
    expect(sopros.slice(0, 10).every(({ payload }) => payload.holdSeconds === 2)).toBe(true);
    expect(sopros.slice(10, 20).every(({ payload }) => payload.holdSeconds === 3)).toBe(true);
    expect(sopros.slice(20).every(({ payload }) => payload.holdSeconds === 4)).toBe(true);
  });
});
