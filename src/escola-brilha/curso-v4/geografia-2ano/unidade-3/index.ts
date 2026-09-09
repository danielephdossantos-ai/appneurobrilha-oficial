import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-do-campo-pra-mesa";
import { aula02 } from "./aula-02-quem-fez-esse-alimento";
import { aula03 } from "./aula-03-se-o-campo-parasse";
import { aula04 } from "./aula-04-a-cidade-ajuda-o-campo";

/**
 * Geografia 2º Ano — Unidade 3
 * "Campo e Cidade Trabalham Juntos"
 *
 * Fecha EF02GE07 e EF02GE08 mostrando a INTERDEPENDÊNCIA:
 * a rota do alimento (campo→cidade), a origem dos produtos,
 * a dependência da cidade e a mão-dupla (cidade→campo).
 * Usa exclusivamente os blocos travados do PlayerPortuguesV4.
 */
export const unidade3: UnidadePortugues = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Campo e Cidade Trabalham Juntos",
  subtitulo: "A rota do alimento e a amizade de mão dupla",
  descricao:
    "Brilha e Aurora seguem o caminho do leite e do tomate, descobrem a origem dos alimentos, veem o que acontece quando o campo para, e concluem: campo e cidade dependem um do outro.",
  corTema: "#0EA5E9",
  aulas: [aula01, aula02, aula03, aula04],
};
