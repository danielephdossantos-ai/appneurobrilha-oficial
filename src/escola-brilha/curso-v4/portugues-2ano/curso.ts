import type { CursoPortugues } from "../types";
import { unidadeDemo } from "./unidade-demo";

/**
 * Curso: Língua Portuguesa 2º Ano — "A Biblioteca Encantada"
 * -----------------------------------------------------------
 * Contrato novo AulaPortuguesV4. Player próprio em
 * `curso-v4/player-portugues/PlayerPortuguesV4.tsx`.
 *
 * Neste momento contém APENAS uma aula demo pra validar os 5 blocos
 * novos (leitura, previsão, vocabulário, ordenar sequência e quiz
 * texto). A Unidade 1 real será escrita depois que você aprovar
 * visualmente cada bloco.
 */
const curso: CursoPortugues = {
  slug: "portugues-2ano",
  disciplina: "Língua Portuguesa",
  ano: "2º Ano",
  titulo: "A Biblioteca Encantada",
  descricao:
    "Brilha encontra uma antiga biblioteca silenciosa. Pra despertar cada livro adormecido, precisa cumprir missões de leitura — observando, prevendo, lendo e explicando as histórias.",
  corPrimaria: "#a855f7",
  corSecundaria: "#1a0d3d",
  tipoAula: "portugues",
  unidades: [unidadeDemo],
};

export default curso;
