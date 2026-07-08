import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-conhecendo-meu-municipio";
import { aula02 } from "./aula-02-servicos-do-municipio";
import { aula03 } from "./aula-03-transportes-e-comunicacao";
import { aula04 } from "./aula-04-riscos-e-cuidados";

/**
 * Geografia 2º Ano — Unidade 2
 * "Conhecendo Meu Município"
 *
 * Cobre EF02GE05, EF02GE06, EF02GE07 e EF02GE08 usando
 * exclusivamente os blocos travados do PlayerPortuguesV4.
 */
export const unidade2: UnidadePortugues = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Conhecendo Meu Município",
  subtitulo: "Cidade, campo, serviços, transportes e cuidados",
  descricao:
    "Brilha e Aurora abrem o mapa do município e descobrem: as duas zonas (urbana + rural), os serviços e trabalhadores, os meios de transporte e comunicação, e como se cuidar dos riscos do dia a dia.",
  corTema: "#0EA5E9",
  aulas: [aula01, aula02, aula03, aula04],
};
