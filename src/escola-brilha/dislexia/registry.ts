import type { TrilhaDlx } from "./types";
import {
  dlx01,
  dlx02,
  dlx03,
  dlx04,
  dlx05,
  dlx06,
  dlx07,
  dlx08,
  dlx09,
  dlx10,
} from "./fase1/aulas";

export const trilhaDislexia: TrilhaDlx = {
  slug: "dislexia",
  titulo: "Trilha da Leitura · Método Orton-Gillingham",
  descricao:
    "Programa clínico multissensorial para dislexia. 8 fases · 80 aulas. Começa pelo ouvido, chega à leitura fluente.",
  aulas: [dlx01, dlx02, dlx03, dlx04, dlx05, dlx06, dlx07, dlx08, dlx09, dlx10],
};

export function getAulaDlx(slug: string) {
  return trilhaDislexia.aulas.find((a) => a.slug === slug);
}
