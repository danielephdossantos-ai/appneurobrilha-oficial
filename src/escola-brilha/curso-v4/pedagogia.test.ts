import { describe, expect, it } from "vitest";
import type { CursoAny } from "./types";
import { getPerfilPedagogico } from "./pedagogia";

const cursoPortugues = {
  slug: "portugues-1ano",
  disciplina: "Língua Portuguesa",
  ano: "1º Ano",
  titulo: "As Chaves da Leitura",
  descricao: "Curso de leitura e escrita",
  corPrimaria: "#f59e0b",
  corSecundaria: "#1a1033",
  tipoAula: "portugues",
  unidades: [],
} satisfies CursoAny;

describe("getPerfilPedagogico", () => {
  it("returns a literacy-oriented profile for Portuguese courses", () => {
    const perfil = getPerfilPedagogico(cursoPortugues);

    expect(perfil?.titulo).toContain("Leitura guiada");
    expect(perfil?.pilares.map((p) => p.titulo)).toContain("Leitura guiada");
  });

  it("falls back to a generic profile for other disciplines", () => {
    const perfil = getPerfilPedagogico({
      ...cursoPortugues,
      disciplina: "Ciências",
      tipoAula: "geo-v1",
    });

    expect(perfil?.titulo).toContain("Observação");
    expect(perfil?.pilares.length).toBeGreaterThan(0);
  });
});
