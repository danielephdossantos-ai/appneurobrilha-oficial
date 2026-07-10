import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-tectonica-de-placas";
import { aula02 } from "./aula-02-vulcoes-e-terremotos";

export const unidade3: UnidadeGeoV1 = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Estrutura da Terra",
  subtitulo: "Camadas internas e placas tectônicas",
  descricao: "Brilha mergulha no interior do planeta e descobre as placas que se movem sob nossos pés.",
  corTema: "#dc2626",
  aulas: [aula01, aula02],
};
