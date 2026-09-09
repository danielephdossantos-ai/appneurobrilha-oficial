import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-estado-laico";
import { aula02 } from "./aula-02-liberdade-politicas-publicas";

export const unidade5: UnidadeGeoV1 = {
  slug: "unidade-5",
  numero: 5,
  titulo: "Estado Laico e Limites",
  subtitulo: "Estado laico e liberdade de consciência (EF08ER05–EF08ER06)",
  descricao: "Debater limites na esfera pública e analisar ações que promovem liberdade de consciência, crença e convicção.",
  corTema: "#10b981",
  aulas: [aula01, aula02],
};
