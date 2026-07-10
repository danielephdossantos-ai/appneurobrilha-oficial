import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Geografia 7º Ano — Território Brasileiro
 * 7 unidades, 11 cenas visuais interativas cada, linguagem adolescente.
 */
const curso: CursoGeoV1 = {
  slug: "geografia-7ano-v2",
  disciplina: "Geografia",
  ano: "7º Ano",
  titulo: "Território Brasileiro",
  descricao:
    "Da formação territorial do Brasil às commodities atuais: 11 cenas visuais por aula, linguagem adolescente.",
  corPrimaria: "#16a34a",
  corSecundaria: "#065f46",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
