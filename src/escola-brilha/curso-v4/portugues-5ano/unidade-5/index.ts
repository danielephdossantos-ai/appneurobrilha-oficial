import type { UnidadePortugues } from "../../types";
import { aula1 as aula01 } from "./aula-01-planejar-o-texto";
import { aula2 as aula02 } from "./aula-02-paragrafo-e-topico-frasal";
import { aula3 as aula03 } from "./aula-03-conectivos-e-coesao";
import { aula4 as aula04 } from "./aula-04-revisar-e-publicar";

export const unidade5: UnidadePortugues = {
  numero: 5,
  titulo: "A Fábrica de Textos",
  subtitulo: "Escrever com autoria",
  descricao: "Do planejamento à revisão: como construir parágrafos e conectar ideias com clareza.",
  corTema: "#155e75",
  slug: "unidade-5-fabrica-textos",
  aulas: [aula01, aula02, aula03, aula04],
};
