import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01";
import { aula02, aula03 } from "./aulas-atmosfera-tectonica";

export const unidade6: UnidadeGeoV1 = {
  slug: "unidade-6",
  numero: 6,
  titulo: "Terra e Universo",
  subtitulo: "Departamento 6 · Endereço Cósmico",
  descricao:
    "Sistema Solar, camadas da Terra, Via Láctea. Estrelas, planetas, satélites e galáxias. Onde você mora no cosmos.",
  corTema: "#6366f1",
  aulas: [aula01, aula02, aula03],
};
