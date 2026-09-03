import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";
import { aula02 } from "./aula-02-saude-respeito-prevencao";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Corpo Humano: Integração dos Sistemas",
  subtitulo: "Setor 2 · Centro Biomédico Virtual",
  descricao:
    "Sistema nervoso, endócrino, reprodutor, puberdade, saúde física e emocional, prevenção de doenças.",
  corTema: "#ec4899",
  aulas: [aula01, aula02],
};
