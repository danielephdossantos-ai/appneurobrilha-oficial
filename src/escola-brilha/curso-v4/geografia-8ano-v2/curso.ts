import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Geografia 8º Ano — Mundo Contemporâneo (v2)
 * 7 unidades · 11 cenas visuais interativas cada · linguagem adolescente.
 */
const curso: CursoGeoV1 = {
  slug: "geografia-8ano-v2",
  disciplina: "Geografia",
  ano: "8º Ano",
  titulo: "Mundo Contemporâneo",
  descricao:
    "Da América Latina à crise dos refugiados: 11 cenas visuais por aula, linguagem adolescente.",
  corPrimaria: "#dc2626",
  corSecundaria: "#7c2d12",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
