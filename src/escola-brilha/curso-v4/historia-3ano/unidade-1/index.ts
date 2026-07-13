import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-o-que-e-municipio";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "O Meu Município",
  subtitulo: "Território, sede, zona urbana e zona rural",
  descricao:
    "Piloto do 3º Ano: introdução técnica ao conceito de município usando fotografia real, mapa cartográfico e infográficos. Restaura a primeira página do Grande Livro das Cidades.",
  corTema: "#0f766e",
  aulas: [aula01],
};
