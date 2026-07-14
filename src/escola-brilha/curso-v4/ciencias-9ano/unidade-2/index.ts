import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Corpo Humano, Saúde e Biotecnologia",
  subtitulo: "Instituto 2 · Centro Biomédico",
  descricao:
    "Integração dos sistemas, imunidade, vacinas, doenças infecciosas e crônicas, biotecnologia e bioética.",
  corTema: "#dc2626",
  aulas: [aula01],
};
