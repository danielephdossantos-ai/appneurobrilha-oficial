import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Ciências 4º Ano — "Expedição Científica Terra Viva"
 * Aurora = orientadora, Brilha = pesquisador júnior.
 * 7 unidades de investigação real (fotografia + infográfico).
 */
const curso: CursoGeoV1 = {
  slug: "ciencias-4ano",
  disciplina: "Ciências",
  ano: "4º Ano",
  titulo: "Expedição Científica Terra Viva",
  descricao:
    "Você entra na Equipe de Pesquisa Científica Escola Brilha. Aurora é a orientadora, Brilha é o pesquisador júnior, e você faz parte da equipe. Cada unidade é uma investigação real: observação de campo, dados, hipóteses e conclusões.",
  corPrimaria: "#0f766e",
  corSecundaria: "#0b1220",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
