import type { UnidadeArteV1 } from "../../types";
import { aula01 } from "./aula-01-anamorfose";

export const unidade1: UnidadeArteV1 = {
  slug: "unidade-1-anamorfose",
  numero: 1,
  titulo: "A Geometria Secreta da Anamorfose",
  subtitulo: "Hackeando o espaço com Holbein, giz de calçada e espelhos cilíndricos.",
  descricao:
    "Brilha e Aurora abrem A Matriz da Percepção Visual. Descobrimos como geometria projetiva, ponto de vista secreto e espelhos cilíndricos permitem esconder mensagens em pinturas do século XVI — e salvar vidas hoje nas ruas.",
  corTema: "#1e3a8a",
  aulas: [aula01],
};
