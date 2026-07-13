import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-o-que-faz-um-cientista";

export const unidade1: UnidadePortugues = {
  slug: "unidade-1",
  numero: 1,
  titulo: "O Método do Cientista",
  subtitulo: "Kit do Jovem Cientista",
  descricao:
    "Brilha descobre como trabalham os cientistas: observar, perguntar, testar e registrar as descobertas.",
  corTema: "#14b8a6",
  aulas: [aula01],
};
