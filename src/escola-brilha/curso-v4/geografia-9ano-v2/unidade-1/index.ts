import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-globalizacao";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Globalização e Mundo Contemporâneo",
  subtitulo: "Redes, fluxos e a era conectada",
  descricao:
    "Como o mundo virou uma rede única? Contêineres, cabos submarinos, multinacionais e as vozes que criticam a globalização.",
  corTema: "#0ea5e9",
  aulas: [aula01],
};
