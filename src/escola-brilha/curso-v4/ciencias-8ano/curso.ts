import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Ciências 8º Ano — "Instituto de Ciências Aplicadas"
 * SPEB 1.0. Aluno como Pesquisador do Instituto em 7 setores:
 * Biologia Celular, Corpo Integrado, Física, Química,
 * Energia/Tecnologia, Terra/Universo, Projeto Científico Final.
 */
const curso: CursoGeoV1 = {
  slug: "ciencias-8ano",
  disciplina: "Ciências",
  ano: "8º Ano",
  titulo: "Instituto de Ciências Aplicadas",
  descricao:
    "Você integra o Instituto de Ciências Aplicadas. Sete setores conectam Biologia, Física, Química e Geociências em projetos de saúde, tecnologia e sustentabilidade.",
  corPrimaria: "#8b5cf6",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
