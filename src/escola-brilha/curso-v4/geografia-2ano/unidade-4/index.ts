import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-central-de-rotas";
import { aula02 } from "./aula-02-seguranca-no-transito";
import { aula03 } from "./aula-03-comunicacao-ontem-hoje";
import { aula04 } from "./aula-04-atlas-conectado";

/**
 * Geografia 2º Ano — Unidade 4
 * "Caminhos, Transportes e Comunicação"
 *
 * Central de Rotas + Segurança no trânsito + Evolução da
 * comunicação + Atlas conectado. Usa exclusivamente os blocos
 * travados do PlayerPortuguesV4 (mesmo padrão das unidades 1-3).
 */
export const unidade4: UnidadePortugues = {
  slug: "unidade-4",
  numero: 4,
  titulo: "Caminhos, Transportes e Comunicação",
  subtitulo: "Guardião das rotas e das mensagens do município",
  descricao:
    "Brilha vira Guardião das Rotas: descobre o melhor transporte pra cada trajeto, treina segurança no trânsito, faz o upgrade da comunicação de ontem pra hoje e conecta tudo no Atlas do Município.",
  corTema: "#F59E0B",
  aulas: [aula01, aula02, aula03, aula04],
};
