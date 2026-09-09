import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-consumo-residuos";

export const unidade6: UnidadeGeoV1 = {
  slug: "unidade-6",
  numero: 6,
  titulo: "Consumo, Resíduos e Tecnologia",
  subtitulo: "Pra onde vai o lixo?",
  descricao:
    "Lixão × aterro sanitário, reciclagem, compostagem e logística reversa — como a tecnologia ajuda a tratar o que a gente joga fora.",
  corTema: "#dc2626",
  aulas: [aula01],
};
