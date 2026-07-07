import type { UnidadeGeografia } from "../../types";
import { aula01 } from "./aula-01-conhecendo-meu-bairro";
import { aula02 } from "./aula-02-quem-trabalha-no-bairro";
import { aula03 } from "./aula-03-cuidando-dos-espacos-publicos";
import { aula04 } from "./aula-04-como-as-pessoas-se-deslocam";
import { aula05 } from "./aula-05-construindo-um-bairro-melhor";

export const unidade3: UnidadeGeografia = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Descobrindo o Bairro",
  subtitulo: "Ruas, praças, comércio, serviços e comunidade",
  descricao:
    "O Bairro das Descobertas perdeu suas placas. Brilha reorganiza cada lugar, conhece profissões, aprende a cuidar da praça e a se deslocar com segurança.",
  corTema: "#3b82f6",
  aulas: [aula01, aula02, aula03, aula04, aula05],
};
