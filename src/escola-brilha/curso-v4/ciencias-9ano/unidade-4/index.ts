import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";

export const unidade4: UnidadeGeoV1 = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Física Aplicada ao Cotidiano",
  subtitulo: "Instituto 4 · Centro de Física Experimental",
  descricao:
    "Movimento, Leis de Newton, trabalho, potência, energia, ondas, som, luz e óptica.",
  corTema: "#f59e0b",
  aulas: [aula01],
};
