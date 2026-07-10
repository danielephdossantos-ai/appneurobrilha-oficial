import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Geografia 6º Ano — "Mestre do Planeta"
 * 7 unidades (1 aula cada) abrindo o Ensino Fundamental 2 de Geografia.
 */
const curso: CursoGeoV1 = {
  slug: "geografia-6ano",
  disciplina: "Geografia",
  ano: "6º Ano",
  titulo: "Mestre do Planeta",
  descricao:
    "Brilha e Aurora exploram a Terra no espaço, coordenadas globais, tectônica, relevo, clima, biomas e o papel humano no planeta.",
  corPrimaria: "#0ea5e9",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
