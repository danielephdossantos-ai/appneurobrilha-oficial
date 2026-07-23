import type { TrilhaDlx } from "./types";
import {
  dlx01, dlx02, dlx03, dlx04, dlx05,
  dlx06, dlx07, dlx08, dlx09, dlx10,
} from "./fase1/aulas";
import {
  dlx11, dlx12, dlx13, dlx14, dlx15,
  dlx16, dlx17, dlx18, dlx19, dlx20,
} from "./fase2/aulas";
import {
  dlx21, dlx22, dlx23, dlx24, dlx25,
  dlx26, dlx27, dlx28, dlx29, dlx30,
} from "./fase3/aulas";
import {
  dlx31, dlx32, dlx33, dlx34, dlx35,
  dlx36, dlx37, dlx38, dlx39, dlx40,
} from "./fase4/aulas";
import {
  dlx41, dlx42, dlx43, dlx44, dlx45,
  dlx46, dlx47, dlx48, dlx49, dlx50,
} from "./fase5/aulas";
import {
  dlx51, dlx52, dlx53, dlx54, dlx55,
  dlx56, dlx57, dlx58, dlx59, dlx60,
} from "./fase6/aulas";

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
    dlx21, dlx22, dlx23, dlx24, dlx25,
    dlx26, dlx27, dlx28, dlx29, dlx30,
    dlx31, dlx32, dlx33, dlx34, dlx35,
    dlx36, dlx37, dlx38, dlx39, dlx40,
    dlx41, dlx42, dlx43, dlx44, dlx45,
    dlx46, dlx47, dlx48, dlx49, dlx50,
    dlx51, dlx52, dlx53, dlx54, dlx55,
    dlx56, dlx57, dlx58, dlx59, dlx60,
  ],
};

export function getAulaDlx(slug: string) {
  return trilhaDislexia.aulas.find((a) => a.slug === slug);
}
