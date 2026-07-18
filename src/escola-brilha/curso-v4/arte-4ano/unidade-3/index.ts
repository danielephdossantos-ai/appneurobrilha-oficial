import type { UnidadeArteV1 } from "../../types";
import { aula01 } from "./aula-01-engenharia-cores";

export const unidade3: UnidadeArteV1 = {
  slug: "unidade-3-engenharia-cores",
  numero: 3,
  titulo: "A Engenharia das Cores — Prismas, Pigmentos e Círculo Avançado",
  subtitulo: "Duas naturezas de cor: tinta e luz. Newton, Seurat e a mistura óptica.",
  descricao:
    "Brilha e Aurora exploram a diferença entre cor-pigmento (CMYK) e cor-luz (RGB), o círculo cromático avançado com cores terciárias e a mistura óptica do Pontilhismo de Seurat. Alunos viram designers ópticos.",
  corTema: "#7c3aed",
  aulas: [aula01],
};
