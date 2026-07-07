import type { CursoPortugues } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Língua Portuguesa 2º Ano — "A Biblioteca Encantada"
 * -----------------------------------------------------------
 * Contrato AulaPortuguesV4. Player próprio em
 * `curso-v4/player-portugues/PlayerPortuguesV4.tsx`.
 *
 * As unidades são adicionadas uma a uma conforme a criança avança
 * na história. Cada unidade é uma nova ala da Biblioteca Encantada.
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
  unidades: [unidade1],
};

export default curso;
