import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-planejar-pesquisa";
import { aula02 } from "./aula-02-verbete-enciclopedia";
import { aula03 } from "./aula-03-tabelas-e-graficos";
import { aula04 } from "./aula-04-revisar-e-publicar";

/**
 * Unidade 8 — A Expedição da Pesquisa
 * -------------------------------------------------------------
 * Campo das práticas de estudo e pesquisa: planejar a pesquisa,
 * escolher fontes confiáveis, produzir verbete de enciclopédia
 * infantil, ler e escrever tabelas/gráficos em relatórios e,
 * por fim, revisar em conjunto, editar e apresentar oralmente.
 */
export const unidade8: UnidadePortugues = {
  slug: "unidade-8",
  numero: 8,
  titulo: "A Expedição da Pesquisa",
  subtitulo: "Perguntar, investigar, organizar e apresentar",
  descricao:
    "Nesta expedição o explorador aprende a transformar curiosidade em pergunta de pesquisa, separar fonte confiável de boato, escrever verbetes de enciclopédia, ler e produzir tabelas e gráficos em relatórios e apresentar a descoberta para a turma depois de revisar com os colegas.",
  corTema: "#22c55e",
  aulas: [aula01, aula02, aula03, aula04],
};
