import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";
import { aula02, aula03 } from "./aulas-materia-transformacoes";

export const unidade3: UnidadeGeoV1 = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Química das Transformações",
  subtitulo: "Instituto 3 · Laboratório de Química Aplicada",
  descricao:
    "Estrutura atômica, tabela periódica, ligações, reações químicas, balanceamento, ácidos e bases.",
  corTema: "#0891b2",
  aulas: [aula01, aula02, aula03],
};
