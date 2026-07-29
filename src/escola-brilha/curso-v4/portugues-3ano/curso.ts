import type { CursoPortugues } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";

/**
 * Curso: Língua Portuguesa 3º Ano — "O Clube dos Detetives da Palavra"
 * --------------------------------------------------------------------
 * Faixa de 8 anos: a criança já decodifica — agora precisa COMPREENDER,
 * ESCREVER com regra e REVISAR o próprio texto.
 *
 * Visual: skin "tween" do PlayerPortuguesV4 (grafite + neon), pensado
 * para quem cresceu e não se identifica mais com o visual infantil.
 */
const curso: CursoPortugues = {
  slug: "portugues-3ano",
  disciplina: "Língua Portuguesa",
  ano: "3º Ano",
  titulo: "O Clube dos Detetives da Palavra",
  descricao:
    "Aurora abre as portas de um clube secreto de investigação. Cada caso só é resolvido com leitura atenta, ortografia precisa e uma boa redação — quem lê bem, descobre tudo.",
  corPrimaria: "#22d3ee",
  corSecundaria: "#0b1020",
  tipoAula: "portugues",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6],
};

export default curso;
