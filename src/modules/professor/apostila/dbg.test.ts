import { it } from "vitest";
import { getAula } from "@/escola-brilha/registry";
import { imagensDaAula } from "@/modules/professor/apostila/gerar-apostila";
import { paginasMatematica } from "@/modules/professor/apostila/gerar-apostila-matematica";
it("dbg", () => {
  const a = getAula("EF01MA01")!;
  console.log(JSON.stringify(a.codigo), a.disciplina, imagensDaAula(a).length);
  console.log(paginasMatematica(a, imagensDaAula(a))?.length);
});
