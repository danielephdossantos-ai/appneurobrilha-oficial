import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-formacao-territorial";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Formação Territorial do Brasil",
  subtitulo: "De Tordesilhas ao mapa atual",
  descricao:
    "Brilha e Aurora seguem a rota dos bandeirantes e descobrem como o Brasil passou de uma faixa litorânea para um gigante continental de 8,5 milhões de km².",
  corTema: "#f59e0b",
  aulas: [aula01],
};
