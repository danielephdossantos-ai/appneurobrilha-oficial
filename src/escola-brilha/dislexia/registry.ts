import type { TrilhaDlx } from "./types";
import {
  dlx01, dlx02, dlx03, dlx04, dlx05,
  dlx06, dlx07, dlx08, dlx09, dlx10,
} from "./fase1/aulas";
import {
  dlx11, dlx12, dlx13, dlx14, dlx15,
  dlx16, dlx17, dlx18, dlx19, dlx20,
} from "./fase2/aulas";

export const trilhaDislexia: TrilhaDlx = {
  slug: "dislexia",
  titulo: "Trilha da Leitura · Método Orton-Gillingham",
  descricao:
    "Programa clínico multissensorial para dislexia. 8 fases · 80 aulas. Começa pelo ouvido, chega à leitura fluente.",
  aulas: [
    dlx01, dlx02, dlx03, dlx04, dlx05,
    dlx06, dlx07, dlx08, dlx09, dlx10,
    dlx11, dlx12, dlx13, dlx14, dlx15,
    dlx16, dlx17, dlx18, dlx19, dlx20,
  ],
};

export function getAulaDlx(slug: string) {
  return trilhaDislexia.aulas.find((a) => a.slug === slug);
}
