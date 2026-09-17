import { describe, expect, it } from "vitest";
import {
  criarConsultaExataRecursos,
  criarContextoTutor,
  paginasObrigatoriasDaAula,
  tituloPadraoMissao,
  validarMissaoEscolar,
  type RascunhoMissaoEscolar,
} from "./apoio-escolar-v2";

const base: RascunhoMissaoEscolar = {
  tipo: "prova",
  materia: "Matemática",
  conteudos: ["frações"],
  dataEntrega: "2026-09-29",
  serie: "7º ano",
};

describe("Apoio Escolar V2", () => {
  it.each(["prova", "tarefa", "trabalho"] as const)("aceita a missão %s", (tipo) => {
    expect(validarMissaoEscolar({ ...base, tipo }, "2026-09-17")).toEqual([]);
  });

  it("rejeita data impossível, ano incompleto e data passada", () => {
    expect(validarMissaoEscolar({ ...base, dataEntrega: "2026-02-30" }, "2026-01-01")).toHaveLength(1);
    expect(validarMissaoEscolar({ ...base, dataEntrega: "0026-09-29" }, "2026-09-17")).toHaveLength(1);
    expect(validarMissaoEscolar({ ...base, dataEntrega: "2026-09-16" }, "2026-09-17")).toHaveLength(1);
  });

  it("exige matéria e conteúdo específico", () => {
    const erros = validarMissaoEscolar({ ...base, materia: "", conteudos: [" "] }, "2026-09-17");
    expect(erros.map((erro) => erro.campo)).toEqual(["materia", "conteudos"]);
  });

  it("cria título coerente para cada missão", () => {
    expect(tituloPadraoMissao(base)).toBe("Prova de Matemática");
    expect(tituloPadraoMissao({ ...base, tipo: "tarefa", titulo: "Lista de verbos" })).toBe("Lista de verbos");
  });

  it("pesquisa pelo conteúdo exato em vez de usar somente a matéria", () => {
    expect(criarConsultaExataRecursos(base)).toBe(
      "frações Matemática 7º ano aula explicada exercícios",
    );
  });

  it("prende o Tutor à matéria e ao conteúdo cadastrados", () => {
    const contexto = criarContextoTutor(base);
    expect(contexto).toContain("MATÉRIA OBRIGATÓRIA: Matemática");
    expect(contexto).toContain("CONTEÚDOS OBRIGATÓRIOS: frações");
    expect(contexto).toContain("SÉRIE: 7º ano");
  });

  it("define oito páginas pedagógicas obrigatórias", () => {
    const paginas = paginasObrigatoriasDaAula();
    expect(paginas).toHaveLength(8);
    expect(paginas.map((pagina) => pagina.ordem)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(paginas.at(-1)?.tipo).toBe("correcao");
  });
});
