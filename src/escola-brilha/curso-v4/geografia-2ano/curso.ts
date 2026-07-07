import type { CursoGeografia } from "../types";
import { unidade1 } from "./unidade-1";

const curso: CursoGeografia = {
  slug: "geografia-2ano",
  disciplina: "Geografia",
  ano: "2º Ano",
  titulo: "Expedição GeoBrilha",
  descricao:
    "Cada aula é uma expedição investigativa: com o GeoScanner de Aurora, a criança observa fotografias reais, marca pistas e descobre POR QUE os lugares são como são.",
  corPrimaria: "#10b981",
  corSecundaria: "#022c22",
  tipoAula: "geografia",
  unidades: [unidade1],
};

export default curso;
