import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Ciências 9º Ano — "Centro Nacional de Pesquisa Científica"
 * SPEB 1.0. Aluno como Pesquisador em 7 institutos: Genética, Biomédico,
 * Química, Física, Espaço, Sustentabilidade e TCC Júnior.
 */
const curso: CursoGeoV1 = {
  slug: "ciencias-9ano",
  disciplina: "Ciências",
  ano: "9º Ano",
  titulo: "Centro Nacional de Pesquisa Científica",
  descricao:
    "Você integra o Centro Nacional de Pesquisa. Sete institutos integram Biologia, Química, Física, Geociências e Sustentabilidade em projetos científicos reais.",
  corPrimaria: "#6d28d9",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
