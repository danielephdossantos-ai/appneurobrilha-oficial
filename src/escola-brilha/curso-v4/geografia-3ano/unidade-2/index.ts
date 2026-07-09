import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-balao-das-comunidades";
import { aula02 } from "./aula-02-de-onde-vem";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Campo, Cidade e Comunidades",
  subtitulo: "Diário de Viagem Antropológico do Balão",
  descricao:
    "Brilha e Aurora sobrevoam o município de balão para conhecer as comunidades tradicionais — indígenas, quilombolas e ribeirinhos — e depois rastreiam a rota dos alimentos que saem da fazenda, da horta e da roça até chegarem à feira da cidade.",
  corTema: "#0ea5e9",
  aulas: [aula01, aula02],
};
