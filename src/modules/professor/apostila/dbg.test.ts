import { it } from "vitest";
import { listAulas } from "@/escola-brilha/registry";
import { gerarApostila, imagensDaAula } from "@/modules/professor/apostila/gerar-apostila";
it("dbg", () => {
  for (const a of listAulas().filter((x) => /matem/i.test(x.disciplina))) {
    const n = gerarApostila(a).paginas.filter((p) => p.etiqueta === "Folha do estudante").length;
    if (n < 7) console.log(a.codigo, n, imagensDaAula(a).map((i) => i.url.slice(0, 40)));
  }
});
