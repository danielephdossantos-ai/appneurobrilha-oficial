import { describe, expect, it } from "vitest";
import { getAula, listAulas } from "@/escola-brilha/registry";
import { gerarApostila, imagensDaAula, termosDaAula } from "./gerar-apostila";

const aula = getAula("EF01LP01")!;
const codigosPrimeiroAno = Array.from({ length: 26 }, (_, index) => `EF01LP${String(index + 1).padStart(2, "0")}`);

describe("apostila A4 da área do professor", () => {
  it("usa uma aula real de Português do 1º ano", () => {
    expect(aula).toBeTruthy();
    expect(aula.disciplina).toMatch(/portugu/i);
  });

  it("gera as quatro partes da apostila", () => {
    const a = gerarApostila(aula);
    const etiquetas = new Set(a.paginas.map((p) => p.etiqueta));
    expect(etiquetas).toEqual(
      new Set(["Guia do professor", "Folha do estudante"]),
    );
    expect(a.paginas.length).toBeGreaterThanOrEqual(9);
  });

  it("não coloca gabarito na folha da criança", () => {
    const a = gerarApostila(aula);
    const folhas = JSON.stringify(a.paginas.filter((p) => p.etiqueta === "Folha do estudante"));
    for (const ex of aula.exercicios.slice(0, 6)) {
      expect(folhas).not.toContain(ex.resposta);
    }
  });

  it("mantém dados pedagógicos e linguagem de aplicativo fora da folha da criança", () => {
    const a = gerarApostila(aula);
    const folhas = JSON.stringify(a.paginas.filter((p) => p.etiqueta === "Folha do estudante"));
    expect(folhas).not.toContain(aula.codigo);
    expect(folhas).not.toMatch(/BNCC|NeuroBrilha|escute|ouça|toque na|aplicativo/i);
  });

  it("gera no piloto apenas tarefas respondidas no papel", () => {
    const a = gerarApostila(aula);
    const folhas = a.paginas.filter((p) => p.etiqueta === "Folha do estudante");
    expect(folhas).toHaveLength(7);
    expect(folhas.flatMap((p) => p.blocos).map((b) => b.tipo)).toEqual([
      "escolha-visual",
      "marcar-som",
      "ligar-imagens",
      "tracado",
      "marcar-figura",
      "procurar-letras",
      "completar-unidade",
    ]);
  });

  it("mantém só duas folhas de explicação para o professor no piloto", () => {
    const a = gerarApostila(aula);
    expect(a.paginas.filter((p) => p.etiqueta === "Guia do professor")).toHaveLength(2);
    expect(a.paginas.some((p) => p.etiqueta === "Gabarito")).toBe(false);
  });

  it("transforma comandos do aplicativo em linguagem de atividade impressa", () => {
    const aulasConvertidas = listAulas().filter((item) =>
      /1º\s*ano/i.test(item.ano) && /(matem|portugu)/i.test(item.disciplina),
    );
    for (const aulaAtual of aulasConvertidas) {
      const texto = JSON.stringify(gerarApostila(aulaAtual).paginas).toLowerCase();
      expect(texto, aulaAtual.codigo).not.toMatch(/toque|clique|arraste|na tela|aplicativo|ouça o áudio|escute/);
    }
  });

  it("reserva a primeira folha do professor para a história", () => {
    const apostila = gerarApostila(getAula("EF01MA01")!);
    const primeira = apostila.paginas[0];
    expect(primeira?.etiqueta).toBe("Guia do professor");
    expect(primeira?.blocos).toEqual([expect.objectContaining({ tipo: "historia" })]);
  });

  it("gera treino pontilhado para G, B, P e S com cinco repetições", () => {
    const a = gerarApostila(aula);
    const tracado = a.paginas
      .flatMap((p) => p.blocos)
      .find((b) => b.tipo === "tracado");
    expect(tracado).toMatchObject({
      itens: ["G", "B", "P", "S"],
      repeticoes: 5,
      imagens: {
        G: expect.objectContaining({ legenda: "gato" }),
        B: expect.objectContaining({ legenda: "bola" }),
        P: expect.objectContaining({ legenda: "pato" }),
        S: expect.objectContaining({ legenda: "sol" }),
      },
    });
  });

  it("reaproveita apenas imagens que a aula já tem", () => {
    const imgs = imagensDaAula(aula);
    expect(imgs.length).toBeGreaterThan(0);
    for (const i of imgs) expect(i.url).toMatch(/^(https?:\/\/|\/|data:image)/);
  });

  it("aceita imagens extras do banco de mídia sem duplicar", () => {
    const extra = { url: "https://exemplo.test/gato.png", legenda: "Gato" };
    const a = gerarApostila(aula, [extra, extra]);
    const usos = JSON.stringify(a.paginas).split(extra.url).length - 1;
    expect(usos).toBeLessThanOrEqual(1);
  });

  it("extrai termos de busca do tema da aula", () => {
    expect(termosDaAula(aula).length).toBeGreaterThan(0);
  });

  it("replica o padrão premium nas 26 aulas de Português do 1º ano", () => {
    for (const codigo of codigosPrimeiroAno) {
      const aulaAtual = getAula(codigo);
      expect(aulaAtual, codigo).toBeTruthy();
      if (!aulaAtual) continue;
      const apostila = gerarApostila(aulaAtual);
      expect(apostila.paginas.filter((pagina) => pagina.etiqueta === "Guia do professor"), codigo).toHaveLength(2);
      expect(apostila.paginas.filter((pagina) => pagina.etiqueta === "Folha do estudante"), codigo).toHaveLength(7);
      expect(apostila.paginas.some((pagina) => pagina.etiqueta === "Gabarito"), codigo).toBe(false);
      expect(apostila.paginas.some((pagina) => pagina.etiqueta === "Carta para a família"), codigo).toBe(false);
    }
  });

  it("mantém linguagem de aplicativo fora das 26 apostilas infantis", () => {
    for (const codigo of codigosPrimeiroAno) {
      const aulaAtual = getAula(codigo);
      if (!aulaAtual) continue;
      const folhas = JSON.stringify(gerarApostila(aulaAtual).paginas.filter((pagina) => pagina.etiqueta === "Folha do estudante"));
      expect(folhas, codigo).not.toContain(codigo);
      expect(folhas, codigo).not.toMatch(/BNCC|NeuroBrilha|escute|ouça|toque na|aplicativo|gabarito/i);
    }
  });

  it("não usa atividade de pintar nas 26 apostilas", () => {
    for (const codigo of codigosPrimeiroAno) {
      const aulaAtual = getAula(codigo);
      if (!aulaAtual) continue;
      const folhas = JSON.stringify(gerarApostila(aulaAtual).paginas.filter((pagina) => pagina.etiqueta === "Folha do estudante"));
      expect(folhas, codigo).not.toMatch(/pinte|pintar|colorir|colorir-inicial/i);
    }
  });

  it("varia os formatos conforme o conteúdo da aula", () => {
    const tiposPorAula = new Set<string>();
    for (const codigo of ["EF01LP02", "EF01LP11", "EF01LP14", "EF01LP18"]) {
      const aulaAtual = getAula(codigo);
      if (!aulaAtual) continue;
      const tipos = gerarApostila(aulaAtual)
        .paginas
        .filter((pagina) => pagina.etiqueta === "Folha do estudante")
        .flatMap((pagina) => pagina.blocos.map((bloco) => bloco.tipo))
        .join(",");
      tiposPorAula.add(tipos);
    }
    expect(tiposPorAula.size).toBeGreaterThan(1);
  });
});

describe("Matemática do 1º ano", () => {
  const aulasMat = listAulas().filter((a) => /matem/i.test(a.disciplina) && /1º\s*ano/i.test(a.ano));

  it("converte todas as aulas de Matemática do 1º ano", () => {
    expect(aulasMat.length).toBeGreaterThanOrEqual(20);
    for (const aula of aulasMat) {
      const apostila = gerarApostila(aula);
      const guias = apostila.paginas.filter((p) => p.etiqueta === "Guia do professor");
      const estudante = apostila.paginas.filter((p) => p.etiqueta === "Folha do estudante");
      expect(guias).toHaveLength(2);
      expect(estudante.length).toBeGreaterThanOrEqual(7);
      expect(apostila.paginas.some((p) => p.etiqueta === "Gabarito")).toBe(false);
    }
  });

  it("mantém linguagem de aplicativo e pintura fora das folhas de Matemática", () => {
    for (const aula of aulasMat) {
      const texto = JSON.stringify(
        gerarApostila(aula).paginas.filter((p) => p.etiqueta === "Folha do estudante"),
      ).toLowerCase();
      for (const proibido of ["bncc", "neurobrilha", "escute", "ouça", "toque na", "aplicativo", "gabarito", "pinte", "colorir"]) {
        expect(texto).not.toContain(proibido);
      }
    }
  });

  it("informa o número e o que desenhar nas atividades de quantidade", () => {
    for (const aula of aulasMat) {
      const blocos = gerarApostila(aula).paginas.flatMap((pagina) => pagina.blocos);
      for (const bloco of blocos) {
        if (bloco.tipo !== "desenhar-quantidade") continue;
        for (const item of bloco.itens.filter((item) => item.objeto)) {
          expect(item.rotulo, aula.codigo).toMatch(new RegExp(`^Desenhe ${item.quantidade} \\S+`, "i"));
          expect(item.objeto, aula.codigo).toBeTruthy();
        }
      }
    }
  });
});
