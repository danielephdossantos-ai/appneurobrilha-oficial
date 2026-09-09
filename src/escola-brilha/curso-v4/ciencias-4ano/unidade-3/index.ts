import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-cadeia-alimentar";

export const unidade3: UnidadeGeoV1 = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Ecossistemas e Cadeia Alimentar",
  subtitulo: "Projeto: quem come quem na natureza",
  descricao:
    "Expedição de campo pra mapear produtores, consumidores e decompositores — e entender o fluxo de energia num ecossistema.",
  corTema: "#059669",
  aulas: [aula01],
};
