import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Ciências 7º Ano — "Centro de Pesquisas da Vida e da Terra"
 * SPEB 1.0. Aluno como Pesquisador Júnior em 7 departamentos:
 * Organização da Vida, Diversidade, Corpo Humano, Ecologia,
 * Matéria, Energia/Terra/Universo, Congresso Científico Final.
 */
const curso: CursoGeoV1 = {
  slug: "ciencias-7ano",
  disciplina: "Ciências",
  ano: "7º Ano",
  titulo: "Centro de Pesquisas da Vida e da Terra",
  descricao:
    "Você é Pesquisador Júnior no Centro de Pesquisas. Sete departamentos com fotografia científica real, microscopia e vídeos: célula, biodiversidade, corpo humano, ecologia, química, universo e Congresso Final.",
  corPrimaria: "#0ea5e9",
  corSecundaria: "#020617",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
