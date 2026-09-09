import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Ciências 5º Ano — "Missão Planeta Vivo"
 * Fecha o Fundamental 1 com laboratórios de investigação:
 * ecossistemas, corpo humano, matéria, energia, universo e feira científica.
 */
const curso: CursoGeoV1 = {
  slug: "ciencias-5ano",
  disciplina: "Ciências",
  ano: "5º Ano",
  titulo: "Missão Planeta Vivo",
  descricao:
    "Última expedição do Fundamental 1. Aurora e Brilha lideram investigações mais sofisticadas: análise de gráficos, ecossistemas, corpo humano, transformações da matéria, energia, Terra no universo — e uma Feira Científica final.",
  corPrimaria: "#0f766e",
  corSecundaria: "#0b1220",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
