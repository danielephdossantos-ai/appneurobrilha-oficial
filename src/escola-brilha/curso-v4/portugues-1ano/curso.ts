import type { CursoPortugues } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";
import { unidade8 } from "./unidade-8";
import { unidade9 } from "./unidade-9";

/**
 * Curso: Língua Portuguesa 1º Ano — "As Chaves da Leitura"
 * Professora-guia: Aurora, a Guardiã das Letras.
 * Contrato AulaPortuguesV4 (player-portugues).
 */
const curso: CursoPortugues = {
  slug: "portugues-1ano",
  disciplina: "Língua Portuguesa",
  ano: "1º Ano",
  titulo: "As Chaves da Leitura",
  descricao:
    "Aurora entrega à criança as chaves da leitura: o alfabeto, as sílabas, as frases, os textos do dia a dia, as histórias e a poesia. Uma chave por unidade até ler sozinho.",
  corPrimaria: "#f59e0b",
  corSecundaria: "#1a1033",
  tipoAula: "portugues",
  // Fase 6 — consciência fonêmica ABRE o curso (pré-requisito da decodificação).
  unidades: [unidade7, unidade1, unidade2, unidade3, unidade4, unidade5, unidade6],
};

export default curso;
