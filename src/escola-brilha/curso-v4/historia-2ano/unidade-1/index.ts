import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-ontem-hoje-amanha";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "O Tempo Conta Histórias",
  subtitulo: "Ontem, Hoje e Amanhã",
  descricao:
    "Investigar como as coisas mudam ou permanecem iguais ao longo do tempo e construir a primeira sala do museu: a Linha do Tempo da própria vida.",
  corTema: "#b45309",
  aulas: [aula01],
};
