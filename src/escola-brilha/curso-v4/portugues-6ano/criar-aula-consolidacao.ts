import type { AulaPortuguesV4 } from "../types";

type ConfigAula = {
  slug: string;
  titulo: string;
  icone: string;
  bncc: string[];
  tema: string;
  conceito: string;
  explicacao: string;
  exemplo: string;
  exemploAnalisado: string;
  pergunta: string;
  opcoes: [string, string, string];
  resposta: number;
  revisao: string[];
  missao: string;
};

/**
 * Mantém as aulas finais do 6º ano no mesmo contrato de 11 momentos das
 * dezesseis aulas anteriores, sem criar um player ou fluxo paralelo.
 */
export function criarAulaConsolidacao(config: ConfigAula): AulaPortuguesV4 {
  return {
    slug: config.slug,
    titulo: config.titulo,
    iconeTrilha: config.icone,
    bncc: config.bncc,
    duracaoMin: 25,
    momento01_motivacao: {
      titulo: `Novo setor: ${config.tema}`,
      historia: `Analista, o Labirinto da Linguagem abriu um novo setor. Para atravessá-lo, você precisa dominar ${config.conceito}. Nesta missão, vamos observar exemplos, testar escolhas e produzir uma mensagem clara.`,
      imagemUrl: "",
    },
    momento02_previsao: {
      instrucao: "Observe as pistas antes de abrir o arquivo.",
      bloco: {
        titulo: config.tema,
        capaImagemUrl: "",
        pistas: [
          { nome: "Pista 1: observe a função de cada palavra.", imagemUrl: "" },
          { nome: "Pista 2: confira como as partes se conectam.", imagemUrl: "" },
        ],
        recado: {
          rotulo: "Mapa da missão",
          icone: config.icone,
          linhas: [
            "OBSERVAR O EXEMPLO",
            "IDENTIFICAR A REGRA",
            "TESTAR A REGRA",
            "USAR EM UM TEXTO PRÓPRIO",
          ],
          estilo: "cartaz",
        },
        pergunta: `O que ajuda mais a compreender ${config.conceito}?`,
        hipoteses: [
          { texto: "Observar a função no contexto" },
          { texto: "Decorar sem ler a frase" },
          { texto: "Ignorar as palavras ao redor" },
        ],
        respostaCerta: 0,
        feedbackAcerto: "Certo. A função aparece quando analisamos o contexto.",
        feedbackErro: "Volte às pistas e observe a relação entre as partes.",
        dica: "Leia a frase inteira.",
      },
    },
    momento03_vocabulario: {
      instrucao: "Dicionário do setor.",
      cards: [
        { palavra: "Contexto", explicacao: "Conjunto de informações que ajuda a construir o sentido.", exemplo: config.exemplo, imagemUrl: "" },
        { palavra: "Função", explicacao: "Papel desempenhado por uma palavra ou trecho.", exemplo: config.exemploAnalisado, imagemUrl: "" },
      ],
    },
    momento04_leituraGuiada: {
      instrucao: "Leia com atenção e acompanhe a análise.",
      leitura: {
        titulo: config.conceito,
        imagemUrl: "",
        destacar: ["contexto", "função", "sentido"],
        paragrafos: [
          config.explicacao,
          `Exemplo: ${config.exemplo}`,
          `Análise: ${config.exemploAnalisado}`,
        ],
      },
    },
    momento05_compreensao: {
      instrucao: "Teste sua leitura.",
      perguntas: [
        {
          pergunta: config.pergunta,
          opcoes: config.opcoes,
          correta: config.resposta,
          feedbackAcerto: "Análise correta. Você aplicou a regra ao contexto.",
          feedbackErro: "Releia o exemplo analisado e compare as funções.",
          ondeEstaNoTexto: config.exemploAnalisado,
          dica: "Procure a opção que mantém o sentido.",
          reensino: config.explicacao,
        },
      ],
    },
    momento06_personagensCenario: {
      instrucao: "Analise a situação comunicativa.",
      perguntas: [],
    },
    momento07_sequencia: {
      instrucao: "Organize o procedimento de análise.",
      bloco: {
        instrucao: "Coloque as ações na ordem correta.",
        itens: [
          { id: "1", texto: "Ler a frase inteira.", imagemUrl: "" },
          { id: "2", texto: "Identificar as palavras ou partes principais.", imagemUrl: "" },
          { id: "3", texto: "Descobrir a função de cada parte.", imagemUrl: "" },
          { id: "4", texto: "Conferir o sentido produzido.", imagemUrl: "" },
        ],
        ordemCerta: ["1", "2", "3", "4"],
        feedbackAcerto: "Procedimento concluído.",
        feedbackErro: "Comece pela leitura completa, antes de separar as partes.",
        dica: "Do texto inteiro para os detalhes.",
      },
    },
    momento08_leituraIndependente: {
      instrucao: "Agora faça a análise sem ajuda.",
      leitura: {
        titulo: "Mensagem do Labirinto",
        imagemUrl: "",
        destacar: ["clareza", "ligação", "sentido"],
        paragrafos: [config.exemplo, config.exemploAnalisado],
      },
      perguntas: [
        {
          pergunta: config.pergunta,
          opcoes: config.opcoes,
          correta: config.resposta,
          feedbackAcerto: "Você identificou a relação correta.",
          feedbackErro: "Compare novamente as palavras destacadas.",
          dica: "Use o contexto.",
          reensino: config.explicacao,
        },
      ],
    },
    momento09_revisao: { pontos: config.revisao },
    momento10_avaliacao: {
      perguntas: [
        {
          pergunta: config.pergunta,
          opcoes: config.opcoes,
          correta: config.resposta,
          feedbackAcerto: "Missão concluída com precisão.",
          feedbackErro: "A regra precisa manter a clareza e o sentido do texto.",
          ondeEstaNoTexto: config.exemploAnalisado,
          dica: "Elimine as opções que quebram o sentido.",
          reensino: config.explicacao,
        },
      ],
    },
    momento11_missaoFamilia: {
      titulo: `Missão prática: ${config.tema}`,
      materiais: ["Papel", "Lápis"],
      passos: [config.missao, "Leia o resultado em voz alta.", "Revise se a mensagem ficou clara."],
      registro: "Fotografe o texto revisado ou guarde-o no caderno.",
    },
    recompensa: { xp: 900, moedas: 600 },
  };
}
