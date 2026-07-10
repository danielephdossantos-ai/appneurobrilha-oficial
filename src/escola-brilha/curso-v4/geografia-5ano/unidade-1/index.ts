import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-populacao-crescimento";
import { aula02 } from "./aula-02-migracoes-internas";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "A Dinâmica Populacional e Crescimento",
  subtitulo: "Quantos somos, onde estamos, como crescemos",
  descricao:
    "Brilha investiga o Censo, a distribuição da população pelo Brasil e os grandes fluxos migratórios que formaram nosso país.",
  corTema: "#0ea5e9",
  aulas: [aula01, aula02],
};
