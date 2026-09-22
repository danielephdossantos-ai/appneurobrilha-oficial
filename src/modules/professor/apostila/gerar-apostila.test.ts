import { describe, expect, it } from "vitest";
import { getAula } from "@/escola-brilha/registry";
import { gerarApostila, imagensDaAula, termosDaAula } from "./gerar-apostila";

const aula = getAula("EF01LP01")!;

describe("apostila A4 da área do professor", () => {
  it("usa uma aula real de Português do 1º ano", () => {
    expect(aula).toBeTruthy();
    expect(aula.disciplina).toMatch(/portugu/i);
  });

  it("gera as quatro partes da apostila", () => {
    const a = gerarApostila(aula);
    const etiquetas = new Set(a.paginas.map((p) => p.etiqueta));
    expect(etiquetas).toEqual(
      new Set(["Guia do professor", "Folha do estudante", "Gabarito", "Carta para a família"]),
    );
    expect(a.paginas.length).toBeGreaterThanOrEqual(5);
  });

  it("não coloca gabarito na folha da criança", () => {
    const a = gerarApostila(aula);
    const folhas = JSON.stringify(a.paginas.filter((p) => p.etiqueta === "Folha do estudante"));
    for (const ex of aula.exercicios.slice(0, 6)) {
      expect(folhas).not.toContain(ex.resposta);
    }
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
});
