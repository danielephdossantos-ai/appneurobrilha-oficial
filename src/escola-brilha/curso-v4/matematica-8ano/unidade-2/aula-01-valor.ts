import type { AulaV4 } from "../../types";

/**
 * Aula 01 · U2 — Valor numérico de uma expressão algébrica.
 * Padrão piloto: passo a passo interativo + Professor + armadilha do sinal.
 */
export const aula01_valor: AulaV4 = {
  slug: "u2-01-valor",
  titulo: "Valor numérico de uma expressão",
  iconeTrilha: "🔤",
  bncc: ["EF08MA06"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Uma letra é um número disfarçado",
    historia:
      "{NOME}, na Álgebra a letra x pode virar 2, 5, −3 ou qualquer número. Descobrir o valor da expressão QUANDO você já sabe o x se chama VALOR NUMÉRICO. É a base de tudo em Álgebra.",
  },

  momento02_exploracao: {
    instrucao: "Substitua a letra pelo número e calcule respeitando a ordem das operações.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Substituindo x = 3",
        cabecalhos: ["Expressão", "Substituindo", "Valor"],
        linhas: [
          { rotulo: "1", valores: ["2x + 1", "2·3 + 1", "7"] },
          { rotulo: "2", valores: ["x² − 4", "3² − 4", "5"] },
          { rotulo: "3", valores: ["5 − x", "5 − 3", "2"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "🔑 Ordem das operações: ( ) → ^ (potências) → × ÷ → + −. Sempre coloque valor NEGATIVO entre parênteses ao substituir.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Qual o procedimento seguro para calcular valor numérico?",
    pista: "1) Substitua a letra pelo número (use parênteses se for negativo). 2) Calcule respeitando ( ) → ^ → × ÷ → + −.",
    revelacao: "Substituir com parênteses → aplicar hierarquia das operações.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Calcule 3x − 5 com x = −2",
      passos: [
        { expr: "3x − 5", explica: "Expressão original.", status: "neutro" },
        { expr: "3·(−2) − 5", explica: "Substituo x por (−2).", status: "ok", professor: "OBRIGATÓRIO usar parênteses quando o valor é negativo. Sem parênteses fica '3·−2', ambíguo e propenso a erro." },
        { expr: "−6 − 5", explica: "Multiplico primeiro.", status: "ok", professor: "Hierarquia: multiplicação antes da subtração. 3·(−2) = −6." },
        { expr: "= −11", explica: "Subtração de sinais iguais.", status: "ok", professor: "−6 − 5 = −11. Somei os módulos e mantive o sinal negativo." },
      ],
      fatorada: "3x − 5 |_{x=−2} = −11",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Valor numérico passo a passo",
    etapas: [
      {
        texto: "Uma letra, um número — cuidado com sinais.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2x + 7 com x = −4",
            passos: [
              { expr: "2x + 7", explica: "Original.", status: "neutro" },
              { expr: "2·(−4) + 7", explica: "Substituo com parênteses.", status: "ok", professor: "Parênteses evitam erro de sinal. Sempre." },
              { expr: "−8 + 7", explica: "Multiplico.", status: "ok" },
              { expr: "= −1", explica: "Somei.", status: "ok", professor: "−8 + 7 = −1 (o de maior módulo é o −8, então o resultado é negativo)." },
            ],
            fatorada: "= −1",
          },
          destaque: "Negativo? Substitua com parênteses.",
        },
      },

      {
        texto: "Duas letras: substitua as duas ANTES de calcular.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2a + 3b com a = 4, b = 5",
            passos: [
              { expr: "2a + 3b", explica: "Original.", status: "neutro" },
              { expr: "2·(4) + 3·(5)", explica: "Substituo AS DUAS.", status: "ok", professor: "Substituo todas as letras antes de operar. Não faço parcial." },
              { expr: "8 + 15", explica: "Multiplico.", status: "ok" },
              { expr: "= 23", explica: "Somo.", status: "ok" },
            ],
            fatorada: "= 23",
          },
          destaque: "Todas as letras vão juntas.",
        },
      },

      {
        texto: "⚠️ Armadilha clássica do 8º ano: x² com x = −3.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² com x = −3",
            passos: [
              { expr: "x²", explica: "Original.", status: "neutro" },
              { expr: "(−3)²", explica: "Substituo COM parênteses.", status: "ok", professor: "Como x = −3 é negativo, obrigatoriamente entre parênteses: (−3)². Sem eles perderia o sinal." },
              { expr: "(−3)·(−3)", explica: "Menos × menos = mais.", status: "ok", professor: "Da aula U1-02: (−a)² = +a². O expoente cai sobre o −3 inteiro." },
              { expr: "= +9", explica: "POSITIVO.", status: "ok" },
              { expr: "Se alguém escrevesse −3², seria −9", explica: "Contra-exemplo.", status: "x", professor: "SEM parênteses o expoente pega só o 3: −3² = −(3²) = −9. Substituição CORRETA de x = −3 em x² gera (−3)² = +9. Se você viu −9, faltou parênteses na substituição." },
            ],
            fatorada: "x² |_{x=−3} = +9",
          },
          destaque: "Substituição de negativo SEMPRE entre parênteses.",
        },
      },

      {
        texto: "Ordem das operações vale sempre: potência antes de multiplicação, multiplicação antes de soma.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² + 2x − 1 com x = 3",
            passos: [
              { expr: "x² + 2x − 1", explica: "Original.", status: "neutro" },
              { expr: "3² + 2·3 − 1", explica: "Substituo.", status: "ok" },
              { expr: "9 + 2·3 − 1", explica: "Potência primeiro.", status: "ok", professor: "Ordem: (^) antes de (×). Calculo 3² = 9." },
              { expr: "9 + 6 − 1", explica: "Multiplicação.", status: "ok" },
              { expr: "= 14", explica: "Somas/subtrações no fim.", status: "ok" },
            ],
            fatorada: "= 14",
          },
          destaque: "( ) → ^ → × ÷ → + −.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: calcule x² − 3x com x = 4.",
    resposta: "4",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² − 3x com x = 4",
      passos: [
        { expr: "x² − 3x", explica: "Original.", status: "neutro" },
        { expr: "4² − 3·4", explica: "Substituo.", status: "ok" },
        { expr: "16 − 12", explica: "Potência e produto.", status: "ok" },
        { expr: "= 4", explica: "Subtraio.", status: "ok" },
      ],
      fatorada: "= 4",
      legenda: "Modelagem",
    },
    passos: ["x² = 16.", "3x = 12.", "16 − 12 = 4."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: 3x + 2 com x = 5.",
    dica: "Substitua e multiplique antes de somar.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3x + 2 com x = 5",
      passos: [
        { expr: "3·(5) + 2", explica: "Substituo.", status: "neutro" },
        { expr: "15 + 2 = 17", explica: "Multiplico e somo.", status: "ok" },
      ],
      fatorada: "= 17",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Valor:",
      opcoes: [{ nome: "17" }, { nome: "25" }, { nome: "10" }],
      respostaCerta: "17",
      feedbackAcerto: "🎯 3·5 = 15, + 2 = 17.",
      feedbackErro: "Ordem: multiplique 3·5 = 15 ANTES de somar. Se somou 5+2 primeiro, ignorou a hierarquia.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: 2a − b com a = 6 e b = 3.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2a − b com a = 6, b = 3",
      passos: [
        { expr: "2·(6) − (3)", explica: "Substituo os dois.", status: "neutro" },
        { expr: "12 − 3 = 9", explica: "Calculo.", status: "ok" },
      ],
      fatorada: "= 9",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Valor:",
      opcoes: [{ nome: "9" }, { nome: "3" }, { nome: "12" }],
      respostaCerta: "9",
      feedbackAcerto: "🎯 12 − 3 = 9.",
      feedbackErro: "2a = 2·6 = 12. Depois 12 − b = 12 − 3 = 9. Se deu 3, esqueceu de multiplicar 2·a.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma diária de aluguel de carro custa D(k) = 50 + 0,5·k reais, onde k = quilômetros rodados.",
    problema: "Quanto se paga por 200 km rodados?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "D(k) = 50 + 0,5·k, k = 200",
      passos: [
        { expr: "50 + 0,5·(200)", explica: "Substituo.", status: "neutro", professor: "Fórmulas do dia a dia são valor numérico: substituo o k e calculo D." },
        { expr: "50 + 100", explica: "Multiplico.", status: "ok" },
        { expr: "= 150", explica: "Somo.", status: "ok" },
      ],
      fatorada: "D(200) = R$ 150",
      legenda: "Aplicação — aluguel de carro",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 150" }, { nome: "R$ 250" }, { nome: "R$ 100" }],
      respostaCerta: "R$ 150",
      feedbackAcerto: "🎯 50 + 0,5·200 = 150.",
      feedbackErro: "0,5·200 = 100 (metade de 200). Depois 50 + 100 = 150. Não esqueça da parte fixa (R$ 50).",
    },
  },

  momento09_revisao: {
    pontos: [
      "1) Substitua todas as letras (parênteses se for negativo).",
      "2) Respeite a ordem: ( ) → ^ → × ÷ → + −.",
      "(−a)² = +a². Substituição de negativo NUNCA sem parênteses.",
      "Fórmulas reais (aluguel, consumo, salário) são valor numérico.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "x + 5 com x = 2:", opcoes: ["7", "10", "3"], correta: 0, feedbackAcerto: "🎉 2 + 5 = 7.", feedbackErro: "Substituo: 2 + 5. Não multiplico (não há coeficiente antes do x)." },
      { pergunta: "2x com x = −3:", opcoes: ["−6", "6", "−1"], correta: 0, feedbackAcerto: "🎉 2·(−3) = −6.", feedbackErro: "2·(−3) = −6. Positivo × negativo = negativo." },
      { pergunta: "x² com x = 4:", opcoes: ["16", "8", "12"], correta: 0, feedbackAcerto: "🎉 4·4 = 16.", feedbackErro: "x² = x·x, não 2x. 4·4 = 16." },
      { pergunta: "x² com x = −3:", opcoes: ["9", "−9", "−6"], correta: 0, feedbackAcerto: "🎉 (−3)² = (−3)·(−3) = +9.", feedbackErro: "Substituo com parênteses: (−3)². (−3)·(−3) = +9 (menos × menos = mais)." },
      { pergunta: "2a + b com a = −1, b = 5:", opcoes: ["3", "7", "−7"], correta: 0, feedbackAcerto: "🎉 2·(−1) + 5 = −2 + 5 = 3.", feedbackErro: "2·(−1) = −2. Depois −2 + 5 = 3." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Fórmula em casa",
    materiais: ["Papel"],
    passos: [
      "Escreva uma fórmula do dia a dia (mesada + gorjeta, corrida por km).",
      "Calcule o valor numérico para 3 situações diferentes.",
      "Explique para alguém por que a letra 'é um número disfarçado'.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
