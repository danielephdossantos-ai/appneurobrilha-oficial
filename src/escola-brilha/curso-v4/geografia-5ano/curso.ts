import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Geografia 5º Ano — "Explorador Eco-Cidadão"
 * 7 unidades (1 aula cada) fechando o Ensino Fundamental 1 de Geografia.
 */
const curso: CursoGeoV1 = {
  slug: "geografia-5ano",
  disciplina: "Geografia",
  ano: "5º Ano",
  titulo: "Explorador Eco-Cidadão",
  descricao:
    "Brilha e Aurora fecham o Fundamental 1: entendem população, cidades gigantes, mapas temáticos, energia, água, lixo e o que é ser um cidadão do planeta.",
  corPrimaria: "#059669",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
