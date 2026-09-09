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
import { unidade10 } from "./unidade-10";

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
  unidades: [unidade7, unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade8, unidade9, unidade10],
  praticasCurriculares: [
    {
      emoji: "✏️",
      titulo: "Prática de escrita diária",
      descricao:
        "Fora do app, a criança deve exercitar a escrita todos os dias em papel — caderno, lousa e ditado. Esses minutos são essenciais para transformar a decodificação em escrita fluente.",
      itens: [
        "Caderno: copiar a frase do dia e depois inventar uma própria.",
        "Lousa: escrever palavras da semana com letra de imprensa.",
        "Ditado: professor fala sílabas, aluno escreve palavras e frases curtas.",
        "Rascunho: rabiscar ideias antes de passar a limpo no caderno.",
      ],
    },
    {
      emoji: "🗣️",
      titulo: "Conversa e oralidade em sala",
      descricao:
        "A oralidade é a base da alfabetização. Momentos de fala organizada ajudam a criança a ouvir, argumentar, recontar e construir frases antes de colocá-las no papel.",
      itens: [
        "Roda de conversa: tema do dia, cada um fala uma ideia.",
        "Reconto: criança conta a história lida com suas próprias palavras.",
        "Entrevista: perguntar e responder colegas usando frases completas.",
        "Apresentação: mostrar um desenho e explicar o que significa.",
      ],
    },
  ],
};

export default curso;
