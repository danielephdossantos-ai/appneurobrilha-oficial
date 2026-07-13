import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";

/**
 * Curso: Ciências 1º Ano — "Missão Cientistas Iniciantes"
 * Padrão único do app (PlayerGeoV1 / 11 cenas travadas).
 * Storyline: 6 cristais do Laboratório Escola Brilha.
 */
const curso: CursoGeoV1 = {
  slug: "ciencias-1ano",
  disciplina: "Ciências",
  ano: "1º Ano",
  titulo: "Missão Cientistas Iniciantes",
  descricao:
    "Brilha e Aurora exploram o Laboratório Escola Brilha pra recuperar os 6 cristais iniciantes: Materiais, Corpo, Higiene, Dia e Noite, Tempo e Ritmos.",
  corPrimaria: "#a855f7",
  corSecundaria: "#1a0b2e",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6],
};

export default curso;
