import type { Unidade } from "../../types";
import { aula01_cacaAsFormas } from "./aula-01-caca-as-formas";
import { aula02_explorandoSolidos } from "./aula-02-explorando-solidos";
import { aula03_caminhosLocalizacao } from "./aula-03-caminhos-localizacao";
import { aula04_medindoOMundo } from "./aula-04-medindo-o-mundo";
import { aula05_missaoFinal } from "./aula-05-missao-final";

/**
 * Unidade 6 — "Exploradores das Formas e Medidas"
 * -------------------------------------------------
 * Progressão: formas planas → sólidos → localização →
 *             medidas & tempo → missão final.
 * BNCC integrada: EF02MA12–19 (Geometria e Grandezas e Medidas).
 * 5 aulas fechadas.
 */
export const unidade6: Unidade = {
  slug: "unidade-6-exploradores-formas-medidas",
  numero: 6,
  titulo: "Exploradores das Formas e Medidas",
  subtitulo: "Formas, sólidos, caminhos, medidas e tempo",
  descricao:
    "Brilha desbrava a Cidade das Descobertas. Cada bairro ensina um novo jeito de ver o mundo: formas na praça, sólidos na estação, caminhos no correio, medidas no parque e horas na torre do relógio.",
  corTema: "#a855f7",
  aulas: [
    aula01_cacaAsFormas,
    aula02_explorandoSolidos,
    aula03_caminhosLocalizacao,
    aula04_medindoOMundo,
    aula05_missaoFinal,
  ],
};
