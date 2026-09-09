import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-populacao-e-migracoes";
import { aula02 } from "./aula-02-culturas-brasileiras";
import { aula03 } from "./aula-03-poder-publico-participacao";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Nossa Gente: População e Migrações",
  subtitulo: "De onde viemos e por que a gente se muda pelo Brasil",
  descricao:
    "Brilha e Aurora exploram a formação do povo brasileiro — indígenas, africanos, europeus, asiáticos — e o movimento das migrações internas que espalharam nossa cultura de norte a sul.",
  corTema: "#ec4899",
  aulas: [aula01, aula02, aula03],
};
