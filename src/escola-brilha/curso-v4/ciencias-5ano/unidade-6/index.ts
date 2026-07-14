import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade6: UnidadeGeoV1 = {
  slug: "unidade-6",
  numero: 6,
  titulo: "Terra, Universo e Clima",
  subtitulo: "Nosso lugar no cosmos e o tempo lá fora",
  descricao:
    "O sistema solar, a Terra vista do espaço, as fases da Lua e os fenômenos do clima e do tempo atmosférico.",
  corTema: "#7c3aed",
  aulas: [aula01],
};
