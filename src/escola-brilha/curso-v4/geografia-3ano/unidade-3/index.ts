import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-rota-do-leite";
import { aula02 } from "./aula-02-feira-do-bairro";

export const unidade3: UnidadeGeoV1 = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Campo e Cidade Trabalham Juntos",
  subtitulo: "Rota do Leite, Feira do Bairro e a parceria de todo dia",
  descricao:
    "Brilha segue o leite e as verduras pelo caminho que ligam o campo à cidade — fazenda, caminhão, fábrica, entreposto, mercado e feira — e descobre que campo e cidade dependem um do outro pra tudo funcionar.",
  corTema: "#10b981",
  aulas: [aula01, aula02],
};
