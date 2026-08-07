import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";
import { aula02 } from "./aula-02-sistema-circulatorio";
import { aula03 } from "./aula-03-cardapio-equilibrado";
import { aula04 } from "./aula-04-disturbios-nutricionais";

export const unidade3: UnidadeGeoV1 = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Corpo Humano por Dentro",
  subtitulo: "Sistemas que trabalham em equipe",
  descricao:
    "Como coração, pulmões e sistema digestivo trabalham juntos pra manter você vivo — e o papel da alimentação nesse processo.",
  corTema: "#e11d48",
  aulas: [aula01, aula02, aula03, aula04],
};
