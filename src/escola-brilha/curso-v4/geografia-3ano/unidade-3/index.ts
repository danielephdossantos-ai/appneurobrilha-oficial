import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-rota-do-leite";
import { aula02 } from "./aula-02-feira-do-bairro";
import { aula03 } from "./aula-03-do-trigo-ao-pao";
import { aula04 } from "./aula-04-parceria-que-alimenta";

export const unidade3: UnidadeGeoV1 = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Campo e Cidade Trabalham Juntos",
  subtitulo: "Rota do Leite, Feira, Pão e a Grande Parceria do Município",
  descricao:
    "Brilha segue leite, verduras e trigo pelos caminhos que ligam o campo à cidade — fazenda, caminhão, fábrica, entreposto, mercado, feira e padaria — e descobre que campo e cidade dependem um do outro pra tudo funcionar.",
  corTema: "#10b981",
  aulas: [aula01, aula02, aula03, aula04],
};
