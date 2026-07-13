import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-o-que-faz-um-cientista";
import { aula02 } from "./aula-02-observar-com-os-sentidos";
import { aula03 } from "./aula-03-perguntas-e-hipoteses";
import { aula04 } from "./aula-04-experimentar";
import { aula05 } from "./aula-05-registrar-e-concluir";

export const unidade1: UnidadePortugues = {
  slug: "unidade-1",
  numero: 1,
  titulo: "O Método do Cientista",
  subtitulo: "Kit do Jovem Cientista",
  descricao:
    "Brilha descobre como trabalham os cientistas: observar, perguntar, testar e registrar as descobertas.",
  corTema: "#14b8a6",
  aulas: [aula01, aula02, aula03, aula04, aula05],
};
