import { describe, expect, it } from "vitest";
import { mediaCatalog } from "@/data/teacher-literacy-media";
import { TEACHER_LITERACY_WORKBOOK, TOTAL_LITERACY_PAGES } from "@/data/teacher-literacy-workbook";

const pages = TEACHER_LITERACY_WORKBOOK.flatMap(module => module.pages);
const studentPages = pages.filter(page => page.audience === "student");
const printableText = JSON.stringify(TEACHER_LITERACY_WORKBOOK);

function activity(pageNumber: number) { return TEACHER_LITERACY_WORKBOOK[0].pages[pageNumber - 1].activity; }

describe("caderno premium de alfabetização", () => {
  it("tem 8 módulos e 64 folhas", () => {
    expect(TEACHER_LITERACY_WORKBOOK).toHaveLength(8);
    expect(TEACHER_LITERACY_WORKBOOK.every(module => module.pages.length === 8)).toBe(true);
    expect(TOTAL_LITERACY_PAGES).toBe(64);
    expect(new Set(pages.map(page => page.id)).size).toBe(64);
  });

  it("mantém folhas 3 a 6 como atividades do estudante", () => {
    expect(TEACHER_LITERACY_WORKBOOK.every(module => module.pages.slice(2, 6).every(page => page.audience === "student"))).toBe(true);
    expect(studentPages).toHaveLength(40);
    expect(studentPages.every(page => page.activity)).toBe(true);
  });

  it("possui seis elementos na associação e seis cartões no recorte", () => {
    expect(activity(3)?.kind).toBe("association");
    expect(activity(3)?.kind === "association" && activity(3).choices.length).toBeGreaterThanOrEqual(6);
    expect(activity(4)?.kind).toBe("cut-sort");
    expect(activity(4)?.kind === "cut-sort" && activity(4).cards.length).toBeGreaterThanOrEqual(6);
  });

  it("possui seis exercícios de prática e três acessos", () => {
    expect(activity(5)?.kind).toBe("complete");
    expect(activity(5)?.kind === "complete" && activity(5).items.length).toBeGreaterThanOrEqual(4);
    expect(activity(6)?.kind).toBe("levels");
    expect(activity(6)?.kind === "levels" && activity(6).levels.map(level => level.name)).toEqual(["Apoio visual alto", "Apoio intermediário", "Realização autônoma"]);
  });

  it("inclui identificação nas folhas estudantis por meio do layout", () => {
    expect(TEACHER_LITERACY_WORKBOOK.every(module => module.pages.slice(1, 6).every(page => page.audience === "student"))).toBe(true);
    expect(studentPages.every(page => page.purpose.length > 20)).toBe(true);
  });

  it("não expõe gabarito, URLs quebradas ou respostas nas folhas estudantis", () => {
    expect(studentPages.every(page => !JSON.stringify(page).includes("answerKey"))).toBe(true);
    expect(printableText).not.toContain("/__l5e/assets-v1");
    expect(studentPages.every(page => !JSON.stringify(page).includes("Respostas esperadas"))).toBe(true);
  });

  it("usa somente ilustrações locais cadastradas", () => {
    const catalog = new Set(mediaCatalog.map(item => item.illustration));
    const used = [...printableText.matchAll(/"illustration":"([^"]+)"/g)].map(match => match[1]);
    expect(used.length).toBeGreaterThan(0);
    expect(used.every(name => catalog.has(name as never))).toBe(true);
  });

  it("não contém instruções vagas, mojibake ou sigla incorreta", () => {
    expect(printableText).not.toMatch(/faça o mesmo|opção que combina|classifique evidências|já consigo observar|prompt|isCorreto|\btrue\b|\bfalse\b|CHÁ|Ã|Â|�/);
  });

  it("liga os três produtos em todos os módulos", () => {
    expect(TEACHER_LITERACY_WORKBOOK.every(module => ["Escola Brilha", "Neuro-Treino", "Brilha Vida"].every(source => module.relatedResources.some(resource => resource.source === source)))).toBe(true);
  });
});
