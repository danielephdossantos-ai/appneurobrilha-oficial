import { describe, expect, it } from "vitest";
import { trilhaBibliotecaEncantada } from "@/escola-brilha/biblioteca-encantada/registry";
import { TEACHER_BIBLIOTECA_ENCANTADA_WORKBOOK } from "@/data/teacher-literacy-biblioteca-encantada-workbook";

describe("adaptação imprimível da Biblioteca Encantada", () => {
  it("cria uma apostila para cada uma das 60 aulas originais", () => {
    expect(trilhaBibliotecaEncantada.aulas).toHaveLength(60);
    expect(TEACHER_BIBLIOTECA_ENCANTADA_WORKBOOK).toHaveLength(60);
  });

  it("preserva título, objetivo, palavras e rota original", () => {
    for (const original of trilhaBibliotecaEncantada.aulas) {
      const adapted = TEACHER_BIBLIOTECA_ENCANTADA_WORKBOOK.find(item => item.id.endsWith(original.slug));
      expect(adapted?.title).toContain(original.titulo);
      expect(adapted?.summary).toBe(original.objetivo);
      expect(adapted?.source?.route).toBe(`/escola-brilha/biblioteca-encantada/${original.slug}`);
      expect(adapted?.pages).toHaveLength(4);
    }
  });

  it("mantém as aulas originais intactas", () => {
    expect(trilhaBibliotecaEncantada.aulas.every(aula => aula.cenas.length > 0)).toBe(true);
    expect(trilhaBibliotecaEncantada.aulas.every(aula => aula.palavrasAlvo.length > 0)).toBe(true);
  });
});
