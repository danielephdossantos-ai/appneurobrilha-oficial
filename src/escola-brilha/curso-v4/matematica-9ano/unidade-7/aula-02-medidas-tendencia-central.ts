import type { AulaV4 } from "../../types";

/**
 * Aula 02 · U7 — Medidas de tendência central e dispersão: média,
 * mediana, moda, amplitude e o efeito do valor atípico (outlier).
 */
export const aula02_medidasTendenciaCentral: AulaV4 = {
  slug: "u7-02-medidas-tendencia-central",
  titulo: "Um Número Para Resumir Todos",
  iconeTrilha: "📊",
  bncc: ["EF09MA22"],
  duracaoMin: 30,
  metodologias: ["vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "Como resumir 7 números em 1?",
    historia:
      "{NOME}, o Instituto Brilha entrevistou 7 famílias e perguntou: 'quantos irmãos e irmãs você tem?'. As respostas foram bem diferentes umas das outras. Como resumir tudo isso em um só número que representa o grupo? Hoje você aprende média, mediana, moda e amplitude — e descobre que um único valor pode enganar se não for bem escolhido.",
  },

  momento02_exploracao: {
    instrucao: "Veja os dados coletados pelo Instituto Brilha.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Quantidade de irmãos — 7 famílias",
        cabecalhos: ["Família", "Nº de irmãos"],
        linhas: [
          { rotulo: "1", valores: ["A", 1] },
          { rotulo: "2", valores: ["B", 2] },
          { rotulo: "3", valores: ["C", 1] },
          { rotulo: "4", valores: ["D", 1] },
          { rotulo: "5", valores: ["E", 3] },
          { rotulo: "6", valores: ["F", 1] },
          { rotulo: "7", valores: ["G", 9] },
        ],
      },
      {
        tipo: "graficoBarras",
        titulo: "Nº de irmãos por família",
        barras: [
          { rotulo: "A", valor: 1 },
          { rotulo: "B", valor: 2 },
          { rotulo: "C", valor: 1 },
          { rotulo: "D", valor: 1 },
          { rotulo: "E", valor: 3 },
          { rotulo: "F", valor: 1 },
          { rotulo: "G", valor: 9 },
        ],
        destaqueMaior: true,
      },
      {
        tipo: "texto",
        texto:
          "🔑 Repare na família G: 9 irmãos é bem diferente do resto do grupo. Esse valor tão distante chama-se OUTLIER (valor atípico).",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se eu calcular a MÉDIA dessas 7 famílias, o resultado representa bem o grupo?",
    pista: "Some todos os valores e divida por 7. Depois compare com os números originais: 1, 2, 1, 1, 3, 1, 9.",
    revelacao:
      "A média fica puxada para cima pelo 9 — nenhuma das outras 6 famílias tem número perto disso! Um outlier distorce a média.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Média de 1, 2, 1, 1, 3, 1, 9",
      passos: [
        { expr: "Soma: 1+2+1+1+3+1+9", explica: "Somo todos os valores.", status: "neutro" },
        { expr: "= 18", explica: "Total de irmãos somados.", status: "ok" },
        { expr: "Média = 18 ÷ 7", explica: "Divido pela quantidade de famílias.", status: "ok" },
        { expr: "≈ 2,57", explica: "Aproximadamente 2,6 irmãos por família.", status: "ok", professor: "Repare: 6 das 7 famílias têm 1, 2 ou 3 irmãos — nenhuma chega perto de 2,57 sozinha. O valor 9 'puxou' a média para cima." },
      ],
      fatorada: "Média ≈ 2,57 (distorcida pelo outlier 9)",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Média, mediana, moda e amplitude",
    etapas: [
      {
        texto:
          "MÉDIA ARITMÉTICA é a soma de todos os valores dividida pela quantidade de valores. É a medida mais usada, mas é sensível a valores muito distantes (outliers).",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Média de notas: 7, 8, 6, 9.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Média de 7, 8, 6, 9",
            passos: [
              { expr: "Soma: 7+8+6+9 = 30", explica: "Somo todas as notas.", status: "ok" },
              { expr: "Média = 30 ÷ 4", explica: "Divido pela quantidade de notas.", status: "ok" },
              { expr: "= 7,5", explica: "Resultado da média.", status: "ok" },
            ],
            fatorada: "Média = 7,5",
          },
          destaque: "Média = soma ÷ quantidade de valores.",
        },
      },
      {
        texto:
          "MEDIANA é o valor do MEIO quando os dados estão em ORDEM. Se a quantidade de valores é ímpar, é o valor central; se é par, é a média dos dois valores centrais. A mediana não é afetada por outliers.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Mediana de 1, 1, 1, 1, 2, 3, 9 (as 7 famílias, já em ordem).",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Mediana de 1, 1, 1, 1, 2, 3, 9",
            passos: [
              { expr: "1, 1, 1, 1, 2, 3, 9", explica: "Dados já em ordem crescente.", status: "neutro" },
              { expr: "7 valores → o do meio é o 4º", explica: "(7+1)÷2 = 4ª posição.", status: "ok" },
              { expr: "4º valor = 1", explica: "Conto: 1(1º), 1(2º), 1(3º), 1(4º).", status: "ok", professor: "Mesmo com o 9 na lista, a mediana continua 1 — ela não se importa com o tamanho do valor extremo, só com a posição." },
            ],
            fatorada: "Mediana = 1",
          },
          destaque: "Mediana = 1, bem diferente da média (≈2,57) — a mediana resiste ao outlier.",
        },
      },
      {
        texto:
          "MODA é o valor que aparece MAIS VEZES. Pode não existir moda (todos diferentes) ou existir mais de uma (bimodal). AMPLITUDE é a diferença entre o maior e o menor valor — mede o quanto os dados estão espalhados.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Moda e amplitude de 1, 1, 1, 1, 2, 3, 9.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Moda e amplitude",
            passos: [
              { expr: "1 aparece 4 vezes; 2, 3 e 9 aparecem 1 vez cada", explica: "Conto as repetições.", status: "ok" },
              { expr: "Moda = 1", explica: "É o valor mais frequente.", status: "ok" },
              { expr: "Amplitude = maior − menor = 9 − 1", explica: "Diferença entre os extremos.", status: "ok" },
              { expr: "= 8", explica: "Os dados variam até 8 unidades.", status: "ok", professor: "Amplitude grande (8) já avisa: existe muita variação nos dados, possivelmente por causa de um outlier." },
            ],
            fatorada: "Moda = 1; Amplitude = 8",
          },
          destaque: "Moda = valor mais comum; Amplitude = maior menos menor.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "Brilha resolve: sem a família G (o outlier de 9 irmãos), qual é a nova média das outras 6 famílias (1, 2, 1, 1, 3, 1)?",
    resposta: "Nova média = 1,5",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Média sem o outlier: 1, 2, 1, 1, 3, 1",
      passos: [
        { expr: "Soma: 1+2+1+1+3+1", explica: "Somo as 6 famílias restantes.", status: "neutro" },
        { expr: "= 9", explica: "Total sem a família G.", status: "ok" },
        { expr: "Média = 9 ÷ 6", explica: "Divido pela nova quantidade, 6.", status: "ok" },
        { expr: "= 1,5", explica: "Bem mais próxima dos valores reais do grupo.", status: "ok", professor: "Compare: COM o outlier a média era ≈2,57; SEM o outlier cai para 1,5. Essa diferença de mais de 1 unidade mostra o quanto um único valor extremo pode distorcer a média." },
      ],
      fatorada: "Média sem outlier = 1,5 (era ≈2,57 com o outlier)",
      legenda: "Brilha resolve",
    },
    passos: [
      "Retiro o valor 9, que é o outlier.",
      "Somo os 6 valores restantes: 1+2+1+1+3+1 = 9.",
      "Divido pela nova quantidade: 9 ÷ 6 = 1,5.",
      "Comparo: a média caiu de 2,57 para 1,5 — o outlier estava distorcendo o resultado.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado:
      "Nós fazemos: as idades de 5 primos são 12, 13, 12, 14, 40 (o 'primo 40' é o tio caçula que entrou na lista por engano). Qual é a MEDIANA dessas idades?",
    dica: "Primeiro ordene os valores: 12, 12, 13, 14, 40. Com 5 valores, o do meio é o 3º.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Mediana de 12, 13, 12, 14, 40",
      passos: [
        { expr: "Ordenando: 12, 12, 13, 14, 40", explica: "Coloco em ordem crescente.", status: "neutro" },
        { expr: "5 valores → o do meio é o 3º", explica: "(5+1)÷2 = 3ª posição.", status: "ok" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a mediana?",
      opcoes: [{ nome: "13" }, { nome: "12" }, { nome: "40" }],
      respostaCerta: "13",
      feedbackAcerto:
        "🎯 Isso! Ordenados: 12, 12, 13, 14, 40 — o 3º valor (do meio) é 13. E repare: mesmo com o 40 na lista, a mediana continuou perto dos outros valores.",
      feedbackErro:
        "Ordene primeiro: 12, 12, 13, 14, 40. Com 5 valores, o do meio é o 3º da lista ordenada, que é 13 — não é a média nem o maior valor.",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "Você faz: as notas de um aluno em 6 provas foram 7, 8, 7, 9, 7, 10. Qual é a MODA dessas notas?",
    visualMat: {
      tipo: "tabela",
      titulo: "Notas do aluno",
      cabecalhos: ["Prova", "Nota"],
      linhas: [
        { rotulo: "1", valores: ["1ª", 7] },
        { rotulo: "2", valores: ["2ª", 8] },
        { rotulo: "3", valores: ["3ª", 7] },
        { rotulo: "4", valores: ["4ª", 9] },
        { rotulo: "5", valores: ["5ª", 7] },
        { rotulo: "6", valores: ["6ª", 10] },
      ],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a moda das notas?",
      opcoes: [{ nome: "7" }, { nome: "8" }, { nome: "10" }],
      respostaCerta: "7",
      feedbackAcerto: "🎯 Exato! A nota 7 aparece 3 vezes — mais que qualquer outra. Essa é a moda.",
      feedbackErro:
        "Conte quantas vezes cada nota aparece: 7 aparece 3 vezes (provas 1, 3 e 5); as outras aparecem só 1 vez cada. A moda é o valor mais frequente: 7.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Uma empresa tem 5 funcionários. Os salários mensais são: R$ 2.000, R$ 2.200, R$ 2.100, R$ 2.000 e o dono, que recebe R$ 20.000.",
    problema:
      "O dono divulga: 'a média salarial da empresa é ótima!'. Calcule a média e diga se ela representa bem o salário dos funcionários comuns.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Média de 2000, 2200, 2100, 2000, 20000",
      passos: [
        { expr: "Soma: 2000+2200+2100+2000+20000", explica: "Somo todos os salários.", status: "neutro" },
        { expr: "= 28300", explica: "Total da folha de pagamento.", status: "ok" },
        { expr: "Média = 28300 ÷ 5", explica: "Divido pela quantidade de pessoas.", status: "ok" },
        { expr: "= 5660", explica: "Média salarial: R$ 5.660.", status: "ok", professor: "Só o dono ganha mais que a 'média' de R$ 5.660 — os outros 4 funcionários ganham entre R$ 2.000 e R$ 2.200. O salário do dono (outlier) infla a média e engana quem só olha esse número." },
      ],
      fatorada: "Média = R$ 5.660 (não representa o funcionário comum)",
      legenda: "Aplicação",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "A média de R$ 5.660 representa bem o salário dos funcionários comuns?",
      opcoes: [{ nome: "Não, o salário do dono distorce a média" }, { nome: "Sim, representa perfeitamente" }, { nome: "Não é possível calcular" }],
      respostaCerta: "Não, o salário do dono distorce a média",
      feedbackAcerto:
        "🎯 Isso! Quatro funcionários ganham perto de R$ 2.000, mas o salário do dono (outlier) empurra a média para R$ 5.660 — um número que ninguém, além do dono, realmente ganha.",
      feedbackErro:
        "Veja os valores: quatro pessoas ganham entre R$ 2.000 e R$ 2.200, bem longe dos R$ 5.660 de média. O salário do dono é um outlier que infla a média — nesse caso, a MEDIANA representaria melhor o grupo.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Média = soma dos valores ÷ quantidade de valores.",
      "Mediana = valor do meio (dados ordenados); resiste a outliers.",
      "Moda = valor mais frequente.",
      "Amplitude = maior valor − menor valor.",
      "Um outlier distorce a média, mas não muda tanto a mediana.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual é a média de 4, 6, 8, 10, 12?",
        opcoes: ["8", "10", "6"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Soma = 4+6+8+10+12 = 40; 40 ÷ 5 = 8.",
        feedbackErro: "Some tudo: 4+6+8+10+12 = 40. Depois divida pela quantidade de valores (5): 40 ÷ 5 = 8.",
      },
      {
        pergunta: "Em um conjunto de dados com um outlier muito alto, qual medida é MENOS afetada por ele?",
        opcoes: ["Mediana", "Média", "Soma total"],
        correta: 0,
        feedbackAcerto: "🎉 Isso mesmo! A mediana olha só a posição central, não o tamanho dos valores extremos.",
        feedbackErro:
          "A média soma todos os valores, então um outlier grande a puxa para cima. A mediana olha apenas a posição do valor central, por isso é mais resistente a outliers.",
      },
      {
        pergunta: "Qual é a mediana de 3, 7, 5, 9, 1 (ordenando: 1, 3, 5, 7, 9)?",
        opcoes: ["5", "7", "3"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Com 5 valores ordenados, o do meio (3ª posição) é 5.",
        feedbackErro: "Ordene primeiro: 1, 3, 5, 7, 9. Com 5 valores, o valor do meio é o 3º da lista: 5.",
      },
      {
        pergunta: "Um conjunto de dados é 2, 2, 3, 5, 8. Qual é a moda?",
        opcoes: ["2", "3", "8"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! O 2 aparece duas vezes; os outros valores aparecem só uma vez.",
        feedbackErro: "Conte as repetições: o 2 aparece 2 vezes, os demais aparecem 1 vez cada. A moda é o mais frequente: 2.",
      },
      {
        pergunta: "As alturas de 5 jogadores (em cm) são 180, 182, 179, 181, 230 (o 230 é o goleiro, muito mais alto). O que acontece com a MÉDIA por causa do goleiro?",
        opcoes: [
          "A média fica maior do que a altura da maioria dos jogadores",
          "A média fica exatamente igual à altura mais comum",
          "A média não é afetada por nenhum valor",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Isso! O goleiro é um outlier: sua altura bem maior puxa a média para cima, afastando-a da altura típica do time.",
        feedbackErro:
          "O goleiro é um valor bem mais alto que os outros — um outlier. Ele puxa a média para cima, fazendo com que ela fique maior do que a altura da maioria dos jogadores.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Estatística da própria casa",
    materiais: ["Papel", "Caneta", "Calculadora (opcional)"],
    passos: [
      "Anote a idade de 6 pessoas da família ou vizinhança (inclua alguém bem mais velho ou mais novo, se possível).",
      "Calcule a média, a mediana e a moda dessas idades.",
      "Descubra se existe algum outlier e explique como ele afeta a média.",
    ],
    registro: "📸 Foto da lista de idades com os cálculos de média e mediana.",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Mestre das Médias" },
};
