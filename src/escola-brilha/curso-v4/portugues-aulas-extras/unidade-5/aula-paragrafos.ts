import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Estrutura de Parágrafos
 * Fase: fase2 · BNCC: EF05LP24, EF05LP26
 */
export const aulaAulaExtraParagrafos: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase2",
  slug: "aula-extra-paragrafos",
  titulo: "Estrutura de Parágrafos",
  iconeTrilha: "📝",
  bncc: ["EF05LP24", "EF05LP26"],
  duracaoMin: 14,
  cenasLousa: [
    {
      tituloLousa: "As três partes",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "INÍCIO: apresenta o assunto (1 a 2 frases)",
          falaProfessor: "O primeiro parágrafo responde: sobre o que eu vou falar?"
        },
        {
          id: "b2",
          tipo: "formula",
          cor: "verde",
          conteudo: "MEIO: explica, dá exemplos e argumentos (o maior)",
          falaProfessor: "No meio você explica e prova o que disse. É a parte mais longa."
        },
        {
          id: "b3",
          tipo: "formula",
          cor: "azul",
          conteudo: "FIM: conclui, dá a opinião ou a solução",
          falaProfessor: "No fim você fecha a ideia. Nunca abra assunto novo no final."
        },
        {
          id: "b4",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: peça a criança contar o dia dela em 3 partes: começo, meio e fim.",
          falaProfessor: "Pais, oralidade estruturada vira escrita estruturada."
        }
      ],
      modoSocorro: {
        titulo: "Fórmula rápida",
        macete: "1 parágrafo = 1 ideia. Frase-chave + explicação + exemplo."
      },
    },
    {
      tituloLousa: "Montando um parágrafo",
      blocos: [
        {
          id: "b1",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Frase-chave: 'Brincar ao ar livre faz bem.'\nExplicação: 'Ao correr, a criança gasta energia e dorme melhor.'\nExemplo: 'Meu irmão dorme mais cedo quando joga bola.'",
          falaProfessor: "Veja: uma ideia, uma explicação e um exemplo. Parágrafo pronto."
        },
        {
          id: "b2",
          tipo: "texto",
          cor: "branco",
          conteudo: "Conectivos ajudam: além disso, por exemplo, por isso, portanto.",
          falaProfessor: "Use conectivos para ligar as frases e o texto fluir."
        }
      ],
      desafioRelampago: {
        pergunta: "Qual parte apresenta o assunto?",
        opcoes: ["Fim", "Início", "Meio"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "O esqueleto do texto",
    historia: "Todo texto bom tem começo, meio e fim. Vamos montar esse esqueleto na lousa.",
  },
  momento09_revisao: {
    pontos: ["Início apresenta", "Meio explica com exemplos", "Fim conclui", "1 parágrafo = 1 ideia", "Use conectivos"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Onde entram os exemplos?",
        opcoes: ["No início", "No meio"],
        correta: 1,
        feedbackAcerto: "Isso!",
        feedbackErro: "Exemplos sustentam o meio do texto."
      },
      {
        pergunta: "Pode abrir assunto novo na conclusão?",
        opcoes: ["Sim", "Não"],
        correta: 1,
        feedbackAcerto: "Certo: conclusão fecha.",
        feedbackErro: "Conclusão não abre assunto novo."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Meu dia em 3 partes",
    materiais: ["Caderno"],
    passos: ["Escreva um texto de 3 parágrafos sobre o seu dia"],
    registro: "Foto do texto"
  },
  recompensa: { xp: 160, moedas: 90 }
};
