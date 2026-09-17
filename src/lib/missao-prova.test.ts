import { describe, expect, it } from "vitest";
import {
  criarContextoPedagogicoMissaoProva,
  criarPaginasMissaoProva,
  validarDataFutura,
} from "./missao-prova";

const aula = {
  titulo: "Verbos em ação",
  objetivo: "Reconhecer e conjugar verbos em frases.",
  conceitos_essenciais: ["Verbo indica ação ou estado", "O tempo verbal localiza a ação"],
  explicacao: "Verbos variam conforme a pessoa e o tempo em que a ação acontece.",
  exemplos_resolvidos: ["Eu estudo está no presente.", "Eu estudei está no passado."],
  pratica_guiada: ["Encontre o verbo da frase.", "Identifique o tempo verbal."],
  exercicios_independentes: ["Conjugue estudar no presente.", "Passe a frase para o passado."],
  revisao: ["O que é verbo?", "Quais tempos verbais estudamos?"],
  correcao_explicada: ["Estudo é presente porque acontece agora.", "Estudei é passado porque já aconteceu."],
};

describe("Missão Prova", () => {
  it("cria uma aula completa com no mínimo seis páginas", () => {
    expect(criarPaginasMissaoProva(aula)).toHaveLength(8);
  });

  it("rejeita ano com menos de quatro dígitos e aceita data futura válida", () => {
    expect(validarDataFutura("0026-09-25", "2026-09-17")).toBe(false);
    expect(validarDataFutura("2026-09-25", "2026-09-17")).toBe(true);
    expect(validarDataFutura("2026-02-30", "2026-01-01")).toBe(false);
  });

  it("mantém Português e verbos no mesmo contexto pedagógico", () => {
    const prompt = criarContextoPedagogicoMissaoProva("Português", ["verbos"]);
    expect(prompt).toContain("MATÉRIA OBRIGATÓRIA: Português");
    expect(prompt).toContain("CONTEÚDOS OBRIGATÓRIOS: verbos");
    expect(prompt).not.toContain("Matemática");
  });

  it("mantém Matemática e tabuada sem conteúdo de Português", () => {
    const prompt = criarContextoPedagogicoMissaoProva("Matemática", ["tabuada"]);
    expect(prompt).toContain("MATÉRIA OBRIGATÓRIA: Matemática");
    expect(prompt).toContain("CONTEÚDOS OBRIGATÓRIOS: tabuada");
    expect(prompt).not.toContain("Português");
    expect(prompt).not.toContain("verbos");
  });
});