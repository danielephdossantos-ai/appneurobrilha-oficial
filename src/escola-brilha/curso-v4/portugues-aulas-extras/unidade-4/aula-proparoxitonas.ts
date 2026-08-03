import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — A Regra de Ouro das Proparoxítonas
 * Fase: fase2 · BNCC: EF04LP05, EF05LP06
 */
export const aulaAulaExtraProparoxitonas: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase2",
  slug: "aula-extra-proparoxitonas",
  titulo: "A Regra de Ouro das Proparoxítonas",
  iconeTrilha: "🏆",
  bncc: ["EF04LP05", "EF05LP06"],
  duracaoMin: 12,
  cenasLousa: [
    {
      tituloLousa: "Todas, sem exceção",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "TODA proparoxítona é acentuada. 100%. Sem exceção.",
          falaProfessor: "Se a força está na antepenúltima sílaba, põe acento. Não tem discussão."
        }
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "MÉ-di-co · LÂM-pa-da · SÁ-ba-do · Á-gua? não! · MÚ-si-ca · TÍ-mi-do",
          falaProfessor: "Médico, lâmpada, sábado, música, tímido: todas acentuadas."
        }
        {
          id: "b3",
          tipo: "texto",
          cor: "branco",
          conteudo: "Qual acento? Agudo (´) se o som é aberto; circunflexo (^) se é fechado.",
          falaProfessor: "Lâmpada é fechado: chapéu. Médico é aberto: risquinho."
        }
      ],
      modoSocorro: {
        titulo: "Regra de ouro",
        macete: "Achou proparoxítona? Já pode colocar o acento antes mesmo de pensar."
      },
    },
    {
      tituloLousa: "Como confirmar",
      blocos: [
        {
          id: "b1",
          tipo: "texto",
          cor: "verde",
          conteudo: "Passo 1: separe as sílabas. Passo 2: conte 3 do fim para o começo. Passo 3: se a força está lá, acentue.",
          falaProfessor: "Três passos, sempre os mesmos. Sepa-rar, contar, acentuar."
        }
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "ES-TÔ-MA-GO → es-TÔ-ma-go → 3ª do fim → acento!",
          falaProfessor: "Estômago: força no TÔ, terceira do fim. Acento garantido."
        }
        {
          id: "b3",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: peça 10 proparoxítonas ditadas e confira se todas receberam acento.",
          falaProfessor: "Pais, ditado curto e diário vale mais que lista gigante uma vez por mês."
        }
      ],
      desafioRelampago: {
        pergunta: "Qual está certa?",
        opcoes: ["arvore", "árvore"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "A regra que nunca falha",
    historia: "Existe uma regra de acentuação sem exceção nenhuma. Aprendeu, acertou para sempre.",
  },
  momento09_revisao: {
    pontos: ["Toda proparoxítona é acentuada", "Agudo = som aberto; circunflexo = som fechado", "Separe, conte 3 do fim, acentue"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "'Musica' está correta?",
        opcoes: ["Sim", "Não, é música"],
        correta: 1,
        feedbackAcerto: "Isso! Proparoxítona sempre acentua.",
        feedbackErro: "É música: proparoxítona sempre acentuada."
      },
      {
        pergunta: "'Lampada' precisa de acento?",
        opcoes: ["Não", "Sim: lâmpada"],
        correta: 1,
        feedbackAcerto: "Certo!",
        feedbackErro: "Lâmpada é proparoxítona: leva acento."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Ditado das proparoxítonas",
    materiais: ["Caderno"],
    passos: ["Peça 10 palavras ditadas e acentue todas"],
    registro: "Foto do ditado"
  },
  recompensa: { xp: 150, moedas: 80 }
};
