import { describe, expect, it } from "vitest";
import { REAL_TEACHER_LITERACY_WORKBOOK } from "@/data/teacher-literacy-real-workbook";

describe("caderno real de alfabetização do professor", () => {
  it("usa as 13 mecânicas existentes no Neuro-Treino", () => {
    expect(REAL_TEACHER_LITERACY_WORKBOOK).toHaveLength(13);
    expect(new Set(REAL_TEACHER_LITERACY_WORKBOOK.map(item => item.source?.activityType)).size).toBe(13);
  });

  it("mantém origem, rota e quatro folhas por atividade", () => {
    for (const lesson of REAL_TEACHER_LITERACY_WORKBOOK) {
      expect(lesson.source?.app).toBe("Neuro-Treino");
      expect(lesson.source?.route).toBe("/primeiros-anos");
      expect(lesson.source?.location).toContain("Neuro-Treino → Primeiros Anos");
      expect(lesson.pages).toHaveLength(4);
      expect(lesson.pages.some(page => page.audience === "student")).toBe(true);
      expect(lesson.pages.some(page => page.audience === "teacher")).toBe(true);
    }
  });

  it("não reutiliza a folha genérica de modelagem como atividade principal", () => {
    const titles = REAL_TEACHER_LITERACY_WORKBOOK.flatMap(item => item.pages.map(page => page.title));
    expect(titles).not.toContain("Modelagem visual");
  });
});
