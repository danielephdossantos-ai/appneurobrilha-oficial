import type { UnidadeGeografia } from "../../types";
import { aula01 } from "./aula-01-frente-e-tras";
import { aula02 } from "./aula-02-direita-e-esquerda";
import { aula03 } from "./aula-03-em-cima-e-embaixo";
import { aula04 } from "./aula-04-perto-e-longe";
import { aula05 } from "./aula-05-seguindo-o-caminho";

export const unidade2: UnidadeGeografia = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Explorando os Caminhos",
  subtitulo: "Frente, atrás, direita, esquerda, cima, baixo, perto e longe",
  descricao:
    "Brilha abre a bússola mágica e ensina a criança a se orientar no espaço com pequenas aventuras.",
  corTema: "#f59e0b",
  aulas: [aula01, aula02, aula03, aula04, aula05],
};
