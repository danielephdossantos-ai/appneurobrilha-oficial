import { describe, expect, it } from "vitest";
import { cursosEI } from "@/escola-brilha/curso-portugues-ei/registry";
import { TEACHER_LITERACY_EI_WORKBOOK } from "@/data/teacher-literacy-ei-workbook";

describe("adaptação imprimível das aulas reais de Português EI", () => {
  const originalLessons = cursosEI.flatMap(course => course.unidades.flatMap(unit => unit.aulas));

  it("cria exatamente uma apostila para cada aula original", () => {
    expect(TEACHER_LITERACY_EI_WORKBOOK).toHaveLength(originalLessons.length);
  });

  it("preserva título, BNCC, origem e rota da aula original", () => {
    for (const original of originalLessons) {
      const adapted = TEACHER_LITERACY_EI_WORKBOOK.find(item => item.id.endsWith(original.slug));
      expect(adapted).toBeDefined();
      expect(adapted?.title).toContain(original.titulo);
      expect(adapted?.source?.bncc).toBe(original.bncc.join(" · "));
      expect(adapted?.source?.app).toBe("Escola Brilha");
      expect(adapted?.source?.route).toContain(original.slug);
    }
  });

  it("não altera os objetos das aulas originais", () => {
    expect(originalLessons.every(lesson => lesson.momentos.length > 0)).toBe(true);
    expect(TEACHER_LITERACY_EI_WORKBOOK.every(item => item.pages.length === 4)).toBe(true);
  });
});
