import type { Curso } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Matemática 3º Ano — "A Cidade dos Números"
 * -------------------------------------------------
 * Evolução narrativa da "Vila dos Números" (2º ano). A Vila cresceu e
 * virou CIDADE: agora existem prédios (centenas), ruas (dezenas) e
 * moradores (unidades). Toda a matemática de 3º ano acontece nesse
 * cenário, ligada ao BNCC.
 *
 * Progressão (7 unidades previstas):
 *  U1 · Números até 1.000 e valor posicional     (EF03MA01–03)  ← esta
 *  U2 · Adição e subtração com reagrupamento     (EF03MA05–08)
 *  U3 · Multiplicação e tabuadas                 (EF03MA07, 09)
 *  U4 · Divisão                                  (EF03MA10)
 *  U5 · Medidas                                  (EF03MA17–22)
 *  U6 · Geometria e simetria                     (EF03MA13–16)
 *  U7 · Estatística/probabilidade + missão final (EF03MA25–28)
 */
const curso: Curso = {
  slug: "matematica-3ano",
  disciplina: "Matemática",
  ano: "3º Ano",
  titulo: "A Cidade dos Números",
  descricao:
    "A Vila dos Números cresceu e virou CIDADE. Agora Brilha explora prédios (centenas), ruas (dezenas) e moradores (unidades) para aprender a contar, comparar, ordenar e pensar até 1.000 — como um matemático de verdade.",
  corPrimaria: "#2563eb",
  corSecundaria: "#0d1f55",
  tipoAula: "matematica",
  unidades: [unidade1],
};

export default curso;
