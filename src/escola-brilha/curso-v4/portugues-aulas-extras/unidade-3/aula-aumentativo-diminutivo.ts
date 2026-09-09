import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Aumentativo e Diminutivo
 * Fase: fase1 · BNCC: EF03LP07
 */
export const aulaAulaExtraAumentativoDiminutivo: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  difficulty: "medio",
  slug: "aula-extra-aumentativo-diminutivo",
  titulo: "Aumentativo e Diminutivo",
  iconeTrilha: "🔍",
  bncc: ["EF03LP07"],
  duracaoMin: 12,
  cenasLousa: [
    {
      tituloLousa: "Diminutivo: -INHO e -ZINHO",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "Diminutivo = coisa pequena ou carinho (-inho, -zinha)",
          falaProfessor: "Gatinho é gato pequeno... ou gato muito amado!"
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "gato → gatinho · casa → casinha · pé → pezinho · flor → florzinha",
          falaProfessor: "Gatinho, casinha, pezinho, florzinha."
        }
      ],
      modoSocorro: {
        titulo: "Cuidado",
        macete: "Depois de vogal tônica ou consoante use -zinho: cafezinho, florzinha."
      },
    },
    {
      tituloLousa: "Aumentativo: -ÃO e -ZÃO",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "verde",
          conteudo: "Aumentativo = coisa grande (-ão, -zão)",
          falaProfessor: "Gatão é um gato enorme. Casarão é uma casa gigante!"
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "gato → gatão · casa → casarão · nariz → narigão · rapaz → rapazão",
          falaProfessor: "Gatão, casarão, narigão, rapazão."
        },
        {
          id: "b3",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: brinque de aumentar e diminuir objetos da casa (colher/colherzinha/colherão).",
          falaProfessor: "Pais, esse jogo amplia vocabulário e percepção de sufixos."
        }
      ],
      desafioRelampago: {
        pergunta: "Diminutivo de CAFÉ:",
        opcoes: ["cafeinho", "cafezinho"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Encolhe e cresce",
    historia: "Com um pedacinho no fim da palavra a gente aumenta ou diminui as coisas.",
  },
  momento09_revisao: {
    pontos: ["-inho / -zinho = diminutivo", "-ão / -zão = aumentativo", "Diminutivo também mostra carinho", "Casa → casinha / casarão"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Aumentativo de CASA:",
        opcoes: ["casinha", "casarão"],
        correta: 1,
        feedbackAcerto: "Isso!",
        feedbackErro: "Casarão é o aumentativo de casa."
      },
      {
        pergunta: "Diminutivo de FLOR:",
        opcoes: ["florinha", "florzinha"],
        correta: 1,
        feedbackAcerto: "Certo, depois de R usamos -zinha.",
        feedbackErro: "Flor termina em R: florzinha."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Grande e pequeno",
    materiais: ["Objetos da casa"],
    passos: ["Escolha 5 objetos e diga o diminutivo e o aumentativo de cada"],
    registro: "Vídeo da brincadeira"
  },
  recompensa: { xp: 120, moedas: 60 }
};
