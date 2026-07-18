import type { UnidadeArteV1 } from "../../types";
import { aula01 } from "./aula-01-arqueologia-cor";
import { aula02 } from "./aula-02-voz-do-tempo";

export const unidade1: UnidadeArteV1 = {
  slug: "unidade-1-arqueologia-cor",
  numero: 1,
  titulo: "A Arqueologia da Cor e da Voz",
  subtitulo: "Decifrando os primeiros códigos visuais e sonoros da humanidade.",
  descricao:
    "Brilha encontra o Códice dos Impérios Perdidos. Você vira Investigador do Tempo: entende como pinturas rupestres, pigmentos naturais, fontes orais e patrimônio imaterial registraram a memória humana antes e além do alfabeto.",
  corTema: "#7c2d12",
  aulas: [aula01, aula02],
};
