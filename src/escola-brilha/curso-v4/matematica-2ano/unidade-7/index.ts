import type { Unidade } from "../../types";
import { aula01_coletandoInformacoes } from "./aula-01-coletando-informacoes";
import { aula02_descobrindoGraficos } from "./aula-02-descobrindo-graficos";
import { aula03_comparandoInformacoes } from "./aula-03-comparando-informacoes";
import { aula04_descobrindoPadroes } from "./aula-04-descobrindo-padroes";
import { aula05_missaoFinal } from "./aula-05-missao-final";

/**
 * Unidade 7 — "Cientistas dos Gráficos e das Descobertas"
 * --------------------------------------------------------
 * Progressão: coletar dados → gráfico de colunas → comparar →
 *             padrões e sequências → grande missão final do curso.
 * BNCC integrada: EF02MA09, EF02MA10, EF02MA22, EF02MA23.
 * 5 aulas fechadas.
 */
export const unidade7: Unidade = {
  slug: "unidade-7-cientistas-graficos",
  numero: 7,
  titulo: "Cientistas dos Gráficos e das Descobertas",
  subtitulo: "Coletar, organizar, comparar e descobrir padrões",
  descricao:
    "Brilha entra no Centro de Pesquisas Matemáticas. Cada tabela, cada gráfico e cada padrão descoberto acende uma estrela no Observatório — até virar Grande Cientista da Matemática.",
  corTema: "#0ea5e9",
  aulas: [
    aula01_coletandoInformacoes,
    aula02_descobrindoGraficos,
    aula03_comparandoInformacoes,
    aula04_descobrindoPadroes,
    aula05_missaoFinal,
  ],
};
