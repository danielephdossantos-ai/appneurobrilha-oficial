import type { AulaV4 } from "../../types";

export const aula05_missao: AulaV4 = {
  slug: "u3-05-missao",
  titulo: "Missão — Detetive dos Divisores",
  iconeTrilha: "🏅",
  bncc: ["EF06MA04", "EF06MA05", "EF06MA06"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Fechando a Unidade",
    historia: "{NOME}, você já sabe múltiplos, divisores, primos, MMC e MDC. Hoje: missão de detetive.",
  },

  momento02_exploracao: {
    instrucao: "Kit consolidado.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Resumo",
        cabecalhos: ["Ferramenta", "Truque"],
        linhas: [
          { rotulo: "Múltiplos", valores: ["Múltiplos", "n × 1, n × 2, n × 3…"] },
          { rotulo: "Divisores", valores: ["Divisores", "Resto zero"] },
          { rotulo: "Primos", valores: ["Primos", "Só 2 divisores"] },
          { rotulo: "MMC", valores: ["MMC", "Todos primos, maior expoente"] },
          { rotulo: "MDC", valores: ["MDC", "Comuns, menor expoente"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Fatoração pode resolver TUDO?",
    pista: "MMC, MDC, simplificação, divisibilidade…",
    revelacao: "Sim. Fatoração é o alicerce.",
  },

  momento04_explicacao: {
    titulo: "Estratégia integrada",
    etapas: [
      {
        texto: "Quando ciclos periódicos precisam coincidir pela primeira vez, o MMC pode representar esse encontro.",
        exemploReal: {
          contexto: "Dois relógios batem a cada 4 e 6 segundos.",
          visualMat: {
            tipo: "tabela",
            titulo: "Fatoração",
            cabecalhos: ["Número", "Fatoração"],
            linhas: [
              { rotulo: "4", valores: ["4", "2²"] },
              { rotulo: "6", valores: ["6", "2 × 3"] },
              { rotulo: "MMC", valores: ["2² × 3", "12"] },
            ],
          },
          destaque: "Batem juntos a cada MMC(4,6) = 12 s.",
        },
      },
      {
        texto: "Quando quantidades devem ser divididas em partes iguais do maior tamanho possível, o MDC pode ser adequado.",
        exemploReal: {
          contexto: "Cortar duas fitas de 24 e 36 cm em pedaços iguais e MAIORES possíveis.",
          visualMat: {
            tipo: "tabela",
            titulo: "Fatoração comum",
            cabecalhos: ["Número", "Fatoração"],
            linhas: [
              { rotulo: "24", valores: ["24", "2³ × 3"] },
              { rotulo: "36", valores: ["36", "2² × 3²"] },
              { rotulo: "MDC", valores: ["2² × 3", "12"] },
            ],
          },
          destaque: "Pedaços de MDC(24,36) = 12 cm.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "MMC(15, 20).",
    resposta: "60",
    passos: ["15 = 3 × 5.", "20 = 2² × 5.", "MMC = 2² × 3 × 5 = 60."],
  },

  momento06_praticaGuiada: {
    enunciado: "Qual é primo?",
    dica: "Divisores?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "19" }, { nome: "21" }, { nome: "25" }],
      respostaCerta: "19",
      feedbackAcerto: "🎯 19 só tem 1 e 19.",
      feedbackErro: "21 = 3·7, 25 = 5².",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "MDC(18, 30)?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6" }, { nome: "2" }, { nome: "90" }],
      respostaCerta: "6",
      feedbackAcerto: "🎯 18 = 2·3², 30 = 2·3·5 → MDC = 2·3 = 6.",
      feedbackErro: "Fatore os dois.",
    },
  },

  momento08_aplicacao: {
    contexto: "Duas luzes começam piscando juntas. Uma pisca a cada 8 segundos e a outra a cada 12 segundos.",
    problema: "Depois de quantos segundos piscarão juntas novamente?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "24 segundos" }, { nome: "20 segundos" }, { nome: "96 segundos" }],
      respostaCerta: "24 segundos",
      feedbackAcerto: "🎯 MMC(8,12) = 24 segundos.",
      feedbackErro: "Os múltiplos comuns começam em 24: 8×3 e 12×2.",
    },
  },

  momento09_revisao: {
    pontos: ["Você virou Detetive dos Divisores.", "Escolha MMC ou MDC pela relação entre as quantidades, não por uma palavra isolada."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Múltiplos de 4:", opcoes: ["0,4,8,12…", "1,4,7,10…", "4,5,6…"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "×1, ×2…" },
      { pergunta: "MMC(3, 4):", opcoes: ["12", "6", "7"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Primos entre si." },
      { pergunta: "1 é primo?", opcoes: ["Não", "Sim"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Só 1 divisor." },
      { pergunta: "MDC(9, 12):", opcoes: ["3", "1", "36"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Comum: 3." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma Detetive",
    materiais: ["Papel"],
    passos: ["Escreva 2 situações reais: uma de MMC, outra de MDC.", "Resolva."],
    registro: "📸 Foto do diploma.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Detetive dos Divisores" },
};
