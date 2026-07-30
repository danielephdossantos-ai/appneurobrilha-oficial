import type { CursoPortugues } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

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
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
  praticasCurriculares: [
    {
      emoji: "✏️",
      titulo: "Prática de escrita diária",
      descricao:
        "Fora do app, o 2º ano precisa escrever todos os dias em papel. É assim que a ortografia da aula vira automatismo e a letra ganha fluência.",
      itens: [
        "Caderno: copiar a frase do dia e depois escrever duas frases próprias.",
        "Ditado: 5 palavras da regra da semana (M antes de P/B, R/RR, S/SS/Ç) + 1 frase.",
        "Bilhete ou lista de verdade uma vez por semana (recado, compras, convite).",
        "Revisão: reler o que escreveu e conferir maiúscula, ponto e espaço entre palavras.",
      ],
    },
    {
      emoji: "🗣️",
      titulo: "Conversa e oralidade em sala",
      descricao:
        "Aos 7 anos a criança já pode organizar a fala com começo, meio e fim. A oralidade sustenta a compreensão leitora e a produção de texto.",
      itens: [
        "Roda de conversa: cada um fala uma ideia e escuta sem interromper.",
        "Reconto: contar a história lida na ordem certa, com os personagens.",
        "Entrevista: perguntar a um colega ou familiar e anotar as respostas.",
        "Apresentação: mostrar o texto que escreveu e explicar por que escolheu o tema.",
      ],
    },
    {
      emoji: "📖",
      titulo: "Leitura em voz alta todo dia",
      descricao:
        "A fluência do 2º ano se constrói relendo. Cinco minutos por dia de leitura em voz alta, com um adulto ouvindo, valem mais que uma hora por semana.",
      itens: [
        "Reler 3 vezes o mesmo trecho curto e comparar o tempo.",
        "Ler para alguém da casa e contar o que entendeu.",
        "Biblioteca: escolher um livro por semana e levar para casa.",
        "Ler placas, rótulos e bilhetes do dia a dia em voz alta.",
      ],
    },
  ],
};


export default curso;
