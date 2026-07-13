import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-seguranca";

export const unidade3: UnidadeGeoV1 = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Casa Segura",
  subtitulo: "Cuidados para prevenir acidentes",
  descricao:
    "Recuperar o Cristal da Segurança: cortantes, quentes, elétricos e venenos — o que fazer em cada zona.",
  corTema: "#ef4444",
  aulas: [aula01],
};
