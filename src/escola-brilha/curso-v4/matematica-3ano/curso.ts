import type { Curso } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Matemática 3º Ano — "A Cidade dos Números"
 * -------------------------------------------------
 *  U1 · Números até 1.000 e valor posicional     (EF03MA01–03)
 *  U2 · Adição e subtração com reagrupamento     (EF03MA05–08)
 *  U3 · Multiplicação e tabuadas                 (EF03MA07, 09)
 *  U4 · Divisão                                  (EF03MA10)
 *  U5 · Medidas                                  (EF03MA17–24)
 *  U6 · Geometria, simetria e localização        (EF03MA12–15)
 *  U7 · Estatística/probabilidade + missão final (EF03MA25–28)
 */
const curso: Curso = {
  slug: "matematica-3ano",
  disciplina: "Matemática",
  ano: "3º Ano",
  titulo: "A Cidade dos Números",
  descricao:
    "A Vila dos Números cresceu e virou CIDADE. Brilha explora prédios (centenas), ruas (dezenas) e moradores (unidades) para dominar contagem, contas, medidas, geometria e dados até o fim do 3º ano.",
  corPrimaria: "#2563eb",
  corSecundaria: "#0d1f55",
  tipoAula: "matematica",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
