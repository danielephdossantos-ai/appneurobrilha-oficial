import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-balao-das-comunidades";
import { aula02 } from "./aula-02-de-onde-vem";
import { aula03 } from "./aula-03-mapa-vivo";

export const unidade2: UnidadeGeoV1 = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Campo, Cidade e Comunidades",
  subtitulo: "Diário de Viagem Antropológico do Balão",
  descricao:
    "Brilha e Aurora sobrevoam o município de balão para conhecer as comunidades tradicionais — indígenas, quilombolas e ribeirinhos — depois rastreiam a rota dos alimentos até a feira da cidade e por fim viram cartógrafos que representam o município em foto, maquete e mapa.",
  corTema: "#0ea5e9",
  aulas: [aula01, aula02, aula03],
};
