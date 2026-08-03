import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — O Enigma dos 4 Porquês
 * Fase: fase2 · BNCC: EF04LP01, EF05LP01
 */
export const aulaAulaExtraPorques: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase2",
  slug: "aula-extra-porques",
  titulo: "O Enigma dos 4 Porquês",
  iconeTrilha: "🔍",
  bncc: ["EF04LP01", "EF05LP01"],
  duracaoMin: 14,
  cenasLousa: [
    {
      tituloLousa: "Os dois mais usados",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "POR QUE (separado, sem acento) = PERGUNTA (início ou meio)",
          falaProfessor: "Se você está perguntando, os dois ficam separados: por que."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Por que você faltou? · Não sei por que ele saiu.",
          falaProfessor: "Pergunta direta e pergunta indireta: as duas usam 'por que' separado."
        },
        {
          id: "b3",
          tipo: "formula",
          cor: "verde",
          conteudo: "PORQUE (junto, sem acento) = RESPOSTA / CAUSA (= pois)",
          falaProfessor: "Ao responder, eles se unem: porque."
        },
        {
          id: "b4",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Faltei porque estava doente. (= pois)",
          falaProfessor: "Faltei pois estava doente. Trocou por 'pois'? É porque junto."
        }
      ],
      modoSocorro: {
        titulo: "Teste rápido",
        macete: "Cabe 'por qual motivo'? → por que. Cabe 'pois'? → porque."
      },
    },
    {
      tituloLousa: "Os dois do fim e do artigo",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "POR QUÊ (separado, com acento) = FIM de frase ou antes de ponto",
          falaProfessor: "Quando ele fica no fim, ganha chapéu: Você saiu por quê?"
        },
        {
          id: "b2",
          tipo: "formula",
          cor: "verde",
          conteudo: "O PORQUÊ (junto, com acento) = SUBSTANTIVO (= o motivo)",
          falaProfessor: "Se vier 'o', 'um', 'este' na frente, é substantivo: o porquê."
        },
        {
          id: "b3",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Você fez isso por quê? · Não entendi o porquê da briga.",
          falaProfessor: "Fim de frase: por quê. Com artigo: o porquê."
        },
        {
          id: "b4",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: escreva as 4 formas em um cartaz e cole na parede do estudo por 1 semana.",
          falaProfessor: "Pais, exposição visual repetida consolida essa regra melhor que exercício isolado."
        }
      ],
      desafioRelampago: {
        pergunta: "'Não sei ___ ela chorou.'",
        opcoes: ["porque", "por que", "o porquê"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Operação Porquê",
    historia: "Quatro agentes com o mesmo nome e missões diferentes. Vamos identificar cada um.",
  },
  momento09_revisao: {
    pontos: ["Por que = pergunta (por qual motivo)", "Porque = resposta (pois)", "Por quê = fim de frase, com acento", "O porquê = substantivo (o motivo)"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "'___ você não avisou?'",
        opcoes: ["Porque", "Por que"],
        correta: 1,
        feedbackAcerto: "Isso: pergunta, separado.",
        feedbackErro: "Pergunta = por que separado."
      },
      {
        pergunta: "'Cheguei tarde ___ o ônibus atrasou.'",
        opcoes: ["por que", "porque"],
        correta: 1,
        feedbackAcerto: "Certo: cabe 'pois'.",
        feedbackErro: "Resposta = porque junto."
      },
      {
        pergunta: "'Ele saiu e não disse ___.'",
        opcoes: ["por quê", "porque"],
        correta: 0,
        feedbackAcerto: "Perfeito: fim de frase leva acento.",
        feedbackErro: "No fim da frase: por quê."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Cartaz dos Porquês",
    materiais: ["Cartolina", "Canetinha"],
    passos: ["Faça um cartaz com as 4 formas e um exemplo de cada"],
    registro: "Foto do cartaz"
  },
  recompensa: { xp: 150, moedas: 80 }
};
