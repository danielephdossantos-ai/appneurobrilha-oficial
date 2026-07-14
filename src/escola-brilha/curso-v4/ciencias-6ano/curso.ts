import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Ciências 6º Ano — "Academia Científica Escola Brilha"
 * 7 laboratórios de pesquisa com fotografia real + vídeos científicos.
 */
const curso: CursoGeoV1 = {
  slug: "ciencias-6ano",
  disciplina: "Ciências",
  ano: "6º Ano",
  titulo: "Academia Científica Escola Brilha",
  descricao:
    "Você foi aprovado na Academia. Sete laboratórios de pesquisa: método, célula, ecossistemas, matéria, energia, planeta e projeto integrador. Fotografia científica real + vídeos.",
  corPrimaria: "#0ea5e9",
  corSecundaria: "#020617",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;

