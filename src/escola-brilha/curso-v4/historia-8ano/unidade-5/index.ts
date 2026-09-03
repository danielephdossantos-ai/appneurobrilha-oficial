import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-haiti-hispanoamerica";
import { aula02 } from "./aula-02-estado-nacao-independencias";

export const unidade5: UnidadeGeoV1 = {
  slug: "unidade-5",
  numero: 5,
  titulo: "Haiti e Independências Hispano-Americanas",
  subtitulo: "Um continente se liberta",
  descricao:
    "Haiti abre o caminho. Bolívar e San Martín rasgam o império espanhol. Em vinte anos, a América Latina nasce como conjunto de repúblicas independentes.",
  corTema: "#155e75",
  aulas: [aula01, aula02],
};
