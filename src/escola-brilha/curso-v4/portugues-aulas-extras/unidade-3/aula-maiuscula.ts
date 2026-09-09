import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Letra Maiúscula: o Chapéu do Nome
 * Fase: fase1 · BNCC: EF01LP10, EF03LP03
 */
export const aulaAulaExtraMaiuscula: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  difficulty: "facil",
  slug: "aula-extra-maiuscula",
  titulo: "Letra Maiúscula: o Chapéu do Nome",
  iconeTrilha: "🔠",
  bncc: ["EF01LP10", "EF03LP03"],
  duracaoMin: 10,
  cenasLousa: [
    {
      tituloLousa: "Quando usar maiúscula",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "Maiúscula: início de frase, nomes próprios, cidades, países, meses em títulos",
          falaProfessor: "Começou a frase? Maiúscula. É nome de alguém ou de lugar? Maiúscula."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Maria mora em Recife. · O Brasil é grande. · Meu cão é o Bob.",
          falaProfessor: "Maria, Recife, Brasil, Bob: todos com letra grande."
        }
      ],
      modoSocorro: {
        titulo: "Macete",
        macete: "Se a palavra é o NOME de alguém ou de algum lugar, ela merece chapéu grande."
      },
    },
    {
      tituloLousa: "Quando NÃO usar",
      blocos: [
        {
          id: "b1",
          tipo: "texto",
          cor: "verde",
          conteudo: "Nomes comuns (menino, cidade, cachorro) ficam minúsculos. Dias da semana e meses também.",
          falaProfessor: "Cachorro é comum: minúsculo. Bob é o nome dele: maiúsculo."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "O menino Pedro tem um cachorro chamado Rex.",
          falaProfessor: "Menino e cachorro em minúsculo; Pedro e Rex em maiúsculo."
        },
        {
          id: "b3",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: escreva a frase 'Eu me chamo ___ e moro em ___' com a criança.",
          falaProfessor: "Pais, escrever o próprio nome corretamente dá pertencimento e orgulho."
        }
      ],
      desafioRelampago: {
        pergunta: "Qual está certo?",
        opcoes: ["eu moro em são paulo.", "Eu moro em São Paulo."],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Nome é importante",
    historia: "Nomes de pessoas, cidades e países usam chapéu grande: letra maiúscula.",
  },
  momento09_revisao: {
    pontos: ["Início de frase = maiúscula", "Nome próprio = maiúscula", "Nome comum = minúscula", "Depois do ponto final vem maiúscula"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual está certo?",
        opcoes: ["A gata Mel dormiu.", "a gata mel dormiu."],
        correta: 0,
        feedbackAcerto: "Perfeito!",
        feedbackErro: "Início de frase e nome próprio pedem maiúscula."
      },
      {
        pergunta: "'brasil' deve ser escrito:",
        opcoes: ["brasil", "Brasil"],
        correta: 1,
        feedbackAcerto: "Isso, é nome de país.",
        feedbackErro: "País é nome próprio: Brasil."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Ficha da família",
    materiais: ["Papel"],
    passos: ["Escreva o nome completo de 3 familiares com maiúsculas corretas"],
    registro: "Foto da ficha"
  },
  recompensa: { xp: 120, moedas: 60 }
};
