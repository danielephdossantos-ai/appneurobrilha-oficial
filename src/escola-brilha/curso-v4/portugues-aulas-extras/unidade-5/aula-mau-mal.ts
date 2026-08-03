import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Mau x Mal
 * Fase: fase2 · BNCC: EF05LP01
 */
export const aulaAulaExtraMauMal: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase2",
  slug: "aula-extra-mau-mal",
  titulo: "Mau x Mal",
  iconeTrilha: "😈",
  bncc: ["EF05LP01"],
  duracaoMin: 12,
  cenasLousa: [
    {
      tituloLousa: "MAU = oposto de BOM",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "MAU (com U) = adjetivo, contrário de BOM",
          falaProfessor: "Se cabe 'bom', use mau com U."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Ele é um mau aluno. (bom aluno) · Que mau humor!",
          falaProfessor: "Mau aluno, bom aluno. Encaixou? Mau com U."
        }
      ],
      modoSocorro: {
        titulo: "Truque das vogais",
        macete: "MaU ↔ bOM (as duas terminam em som de U/O). MaL ↔ bEM (as duas com L/M de bem)."
      },
    },
    {
      tituloLousa: "MAL = oposto de BEM",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "verde",
          conteudo: "MAL (com L) = advérbio, contrário de BEM",
          falaProfessor: "Se cabe 'bem', use mal com L."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Ele dormiu mal. (dormiu bem) · Falou mal do amigo.",
          falaProfessor: "Dormiu mal, dormiu bem. Encaixou? Mal com L."
        },
        {
          id: "b3",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: cole um lembrete: MAU=BOM, MAL=BEM.",
          falaProfessor: "Pais, o par de opostos é o atalho mental mais confiável nessa dupla."
        }
      ],
      desafioRelampago: {
        pergunta: "'Ele se comportou ___ na festa.'",
        opcoes: ["mau", "mal"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Vilão ou advérbio",
    historia: "MAU e MAL soam igual, mas um é qualidade de vilão e o outro é jeito de fazer algo.",
  },
  momento09_revisao: {
    pontos: ["Mau = contrário de bom (adjetivo)", "Mal = contrário de bem (advérbio)", "Teste: troque por bom ou bem"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "'Que ___ cheiro!'",
        opcoes: ["mal", "mau"],
        correta: 1,
        feedbackAcerto: "Isso: cabe 'bom cheiro'.",
        feedbackErro: "Cabe bom: mau."
      },
      {
        pergunta: "'Fui ___ na prova.'",
        opcoes: ["mau", "mal"],
        correta: 1,
        feedbackAcerto: "Certo: cabe 'fui bem'.",
        feedbackErro: "Cabe bem: mal."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Opostos na parede",
    materiais: ["Papel"],
    passos: ["Escreva 2 frases com MAU e 2 com MAL usando o teste bom/bem"],
    registro: "Foto do papel"
  },
  recompensa: { xp: 160, moedas: 90 }
};
