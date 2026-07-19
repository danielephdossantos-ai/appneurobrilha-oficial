import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-duvida-metodica";

export const unidade1: UnidadeGeoV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "A Dúvida que Fundou a Modernidade",
  subtitulo: "Descartes: cogito, ceticismo metódico e o Gênio Maligno (EF08FI01)",
  descricao:
    "Descartes se tranca num quarto com uma vela e decide duvidar de TUDO — sentidos, escola, religião, matemática — até chegar a uma única certeza indestrutível: penso, logo existo.",
  corTema: "#38bdf8",
  aulas: [aula01],
};
