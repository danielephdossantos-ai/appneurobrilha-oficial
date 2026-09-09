import { describe, expect, it } from "vitest";
import { CURSO_ALFABETIZACAO_PROFESSOR } from "@/data/curso-alfabetizacao-professor";
describe("Curso de alfabetização docente",()=>{it("cobre diagnóstico, ensino, inclusão e intervenção",()=>{expect(CURSO_ALFABETIZACAO_PROFESSOR).toHaveLength(8);const texto=JSON.stringify(CURSO_ALFABETIZACAO_PROFESSOR).toLowerCase();for(const termo of ["diagnóstico","fonológica","alfabético","fluência","ortografia","compreensão","inclusivas","intervenção"])expect(texto).toContain(termo);});});
