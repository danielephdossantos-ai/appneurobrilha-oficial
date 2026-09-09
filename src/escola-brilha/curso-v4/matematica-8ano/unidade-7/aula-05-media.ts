import type { AulaV4 } from "../../types";

export const aula05_media: AulaV4 = {
  slug: "u7-05-media",
  titulo: "Média, moda e mediana",
  iconeTrilha: "📊",
  bncc: ["EF08MA25"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Três jeitos de resumir um monte de números",
    historia:
      "{NOME}, se eu te der 30 notas da turma, você não consegue 'ver' a turma olhando tudo. Por isso a Estatística usa três resumos: a MÉDIA (equilíbrio), a MODA (o que mais aparece) e a MEDIANA (o valor do meio). Cada uma conta uma história diferente — e às vezes uma delas mente.",
  },
  momento02_exploracao: {
    instrucao: "Observe os dados e as três medidas calculadas sobre eles.",
    cenas: [
      {
        tipo: "graficoBarras",
        titulo: "Notas de 5 alunos",
        unidade: "pontos",
        barras: [
          { rotulo: "Ana", valor: 4 },
          { rotulo: "Bia", valor: 6 },
          { rotulo: "Caio", valor: 6 },
          { rotulo: "Duda", valor: 8 },
          { rotulo: "Eli", valor: 10 },
        ],
      },
      {
        tipo: "tabela",
        titulo: "As 3 medidas de tendência central",
        cabecalhos: ["Nome", "Como calcular", "Neste exemplo"],
        linhas: [
          { rotulo: "Média", valores: ["soma ÷ quantidade", "34 ÷ 5 = 6,8"] },
          { rotulo: "Moda", valores: ["valor que mais se repete", "6 (aparece 2×)"] },
          { rotulo: "Mediana", valores: ["valor central após ORDENAR", "6"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "Regra de ouro: para achar a mediana, ORDENE primeiro. Se a quantidade for par, a mediana é a média dos dois centrais.",
        destaque: true,
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Numa empresa, 9 pessoas ganham R$ 2.000 e o dono ganha R$ 100.000. A média representa bem os salários?",
    pista: "Some tudo e divida por 10. Depois olhe quanto a maioria realmente ganha.",
    revelacao:
      "A média dá R$ 11.800 — ninguém ganha isso! A mediana (R$ 2.000) representa muito melhor. Valores extremos distorcem a média.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "9 salários de 2000 e 1 de 100000",
      passos: [
        { expr: "Soma = 9 · 2000 + 100000 = 118000", explica: "Total pago.", status: "neutro" },
        { expr: "Média = 118000 ÷ 10 = 11800", explica: "Parece ótimo…", status: "x" },
        {
          expr: "Mediana = 2000",
          explica: "O valor do meio após ordenar.",
          status: "ok",
          professor:
            "A média é sensível a valores extremos (outliers); a mediana não é. Quando existe um valor muito fora da curva, a mediana descreve melhor o grupo. É por isso que notícias sobre renda costumam usar mediana.",
        },
      ],
      fatorada: "Média 11 800 · Mediana 2 000",
    },
  },
  momento04_explicacao: {
    titulo: "Uma medida de cada vez, com a conta montada",
    etapas: [
      {
        texto: "Média aritmética: some tudo e divida pela quantidade de valores.",
        exemploReal: {
          contexto: "Notas 5, 7, 8, 8 e 10.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Média = soma ÷ quantidade",
            passos: [
              { expr: "Soma = 5 + 7 + 8 + 8 + 10", explica: "Somo todos.", status: "neutro" },
              { expr: "Soma = 38", explica: "", status: "neutro" },
              { expr: "Quantidade = 5", explica: "Conto quantos valores existem.", status: "neutro" },
              {
                expr: "Média = 38 ÷ 5 = 7,6",
                explica: "",
                status: "ok",
                professor:
                  "A média não precisa ser um dos valores da lista, e pode ter vírgula. Ela representa o ponto de equilíbrio: se todos tivessem a mesma nota, seria 7,6.",
              },
            ],
            fatorada: "Média = 7,6",
          },
          destaque: "Média = 7,6.",
        },
      },
      {
        texto: "Moda: o valor que aparece mais vezes. Pode não existir, ou existir mais de uma.",
        exemploReal: {
          contexto: "Dados: 2, 3, 3, 5, 7.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2, 3, 3, 5, 7",
            passos: [
              { expr: "2 aparece 1× · 3 aparece 2× · 5 aparece 1× · 7 aparece 1×", explica: "Conto as repetições.", status: "neutro" },
              {
                expr: "Moda = 3",
                explica: "É o que mais se repete.",
                status: "ok",
                professor:
                  "Se nenhum valor se repetir, o conjunto é amodal (sem moda). Se dois valores empatarem na maior frequência, é bimodal e ambos são moda. A moda é a única medida que serve também para dados não numéricos, como cor preferida.",
              },
            ],
            fatorada: "Moda = 3",
          },
          destaque: "Moda = 3.",
        },
      },
      {
        texto: "Mediana com quantidade ÍMPAR: ordene e pegue o do meio.",
        exemploReal: {
          contexto: "Dados: 9, 1, 5, 3, 7.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "9, 1, 5, 3, 7",
            passos: [
              { expr: "Ordenando: 1, 3, 5, 7, 9", explica: "Passo obrigatório.", status: "neutro" },
              { expr: "5 valores → posição central é a 3ª", explica: "(5 + 1) ÷ 2 = 3.", status: "neutro" },
              { expr: "Mediana = 5", explica: "", status: "ok" },
            ],
            fatorada: "Mediana = 5",
          },
          destaque: "Ordene sempre antes.",
        },
      },
      {
        texto: "Mediana com quantidade PAR: média dos dois centrais.",
        exemploReal: {
          contexto: "Dados: 4, 6, 8, 10.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "4, 6, 8, 10 (já ordenados)",
            passos: [
              { expr: "4 valores → centrais são o 2º e o 3º", explica: "6 e 8.", status: "neutro" },
              { expr: "Mediana = (6 + 8) ÷ 2", explica: "Média dos dois.", status: "neutro" },
              {
                expr: "Mediana = 7",
                explica: "",
                status: "ok",
                professor:
                  "Com quantidade par não existe um único valor central, então a convenção é usar a média dos dois do meio. Note que 7 não aparece na lista — e tudo bem.",
              },
            ],
            fatorada: "Mediana = 7",
          },
          destaque: "Par → média dos 2 centrais.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "🤝 Nós fazemos: notas 5, 7, 8, 8 e 10. Calcule a média.",
    resposta: "7,6",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Média = soma ÷ quantidade",
      passos: [
        { expr: "Soma = 38", explica: "5+7+8+8+10.", status: "neutro" },
        { expr: "38 ÷ 5", explica: "São 5 notas.", status: "neutro" },
        { expr: "Média = 7,6", explica: "", status: "ok" },
      ],
      fatorada: "Média = 7,6",
    },
    passos: ["Some: 38.", "Conte: 5 notas.", "Divida: 38 ÷ 5 = 7,6."],
  },
  momento06_praticaGuiada: {
    enunciado: "💪 Você faz: qual a moda de 2, 3, 3, 5 e 7?",
    dica: "Procure o valor que se repete.",
    visualMat: {
      tipo: "graficoBarras",
      titulo: "Frequência de cada valor",
      unidade: "vezes",
      barras: [
        { rotulo: "2", valor: 1 },
        { rotulo: "3", valor: 2 },
        { rotulo: "5", valor: 1 },
        { rotulo: "7", valor: 1 },
      ],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Moda =",
      opcoes: [{ nome: "3" }, { nome: "5" }, { nome: "2" }],
      respostaCerta: "3",
      feedbackAcerto: "🎯 O 3 aparece 2 vezes.",
      feedbackErro: "Moda é o mais FREQUENTE, não o maior nem o do meio: é o 3.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Qual a mediana de 1, 3, 5, 7 e 9?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1, 3, 5, 7, 9",
      passos: [
        { expr: "Já estão ordenados", explica: "Confiro sempre.", status: "neutro" },
        { expr: "5 valores → 3ª posição", explica: "", status: "neutro" },
        { expr: "Mediana = 5", explica: "", status: "ok" },
      ],
      fatorada: "Mediana = 5",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Mediana =",
      opcoes: [{ nome: "5" }, { nome: "3" }, { nome: "7" }],
      respostaCerta: "5",
      feedbackAcerto: "🎯 Valor central.",
      feedbackErro: "Com 5 valores ordenados, o central é o terceiro: 5.",
    },
  },
  momento08_aplicacao: {
    contexto:
      "🌎 Na vida real: numa turma, as notas do bimestre foram 6, 7, 8, 9 e 10. A escola exige média 7 para aprovação direta.",
    problema: "Qual a média da turma e ela passa?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Notas: 6, 7, 8, 9, 10",
      passos: [
        { expr: "Soma = 6 + 7 + 8 + 9 + 10 = 40", explica: "", status: "neutro" },
        { expr: "Média = 40 ÷ 5 = 8", explica: "", status: "ok" },
        {
          expr: "8 > 7 → aprovada",
          explica: "Comparo com a exigência.",
          status: "ok",
          professor:
            "Repare que aqui média (8), moda (não existe, todos aparecem uma vez) e mediana (8) contam histórias coerentes, porque os dados são bem distribuídos e não há valores extremos.",
        },
      ],
      fatorada: "Média = 8 → aprovada",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Média da turma:",
      opcoes: [{ nome: "8" }, { nome: "7" }, { nome: "9" }],
      respostaCerta: "8",
      feedbackAcerto: "🎯 40 ÷ 5 = 8.",
      feedbackErro: "Some tudo (40) e divida pela quantidade (5).",
    },
  },
  momento09_revisao: {
    pontos: [
      "Média = soma ÷ quantidade.",
      "Moda = valor mais frequente (pode não existir ou ser dupla).",
      "Mediana = valor central APÓS ordenar; com quantidade par, média dos dois centrais.",
      "Valores extremos distorcem a média, mas não a mediana.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Média de 2, 4 e 6:", opcoes: ["4", "3", "6"], correta: 0, feedbackAcerto: "🎉 12 ÷ 3.", feedbackErro: "Some 12 e divida por 3." },
      { pergunta: "Moda de 1, 1 e 2:", opcoes: ["1", "2", "3"], correta: 0, feedbackAcerto: "🎉 O 1 aparece 2×.", feedbackErro: "O valor que mais se repete é o 1." },
      { pergunta: "Mediana de 3, 1 e 2:", opcoes: ["2", "1", "3"], correta: 0, feedbackAcerto: "🎉 Ordenado: 1, 2, 3.", feedbackErro: "Ordene primeiro: 1, 2, 3 → central é 2." },
      { pergunta: "Mediana de 2, 4, 6 e 8:", opcoes: ["5", "4", "6"], correta: 0, feedbackAcerto: "🎉 (4+6)÷2 = 5.", feedbackErro: "Quantidade par: média dos dois centrais." },
      { pergunta: "Qual medida sofre mais com um valor muito alto?", opcoes: ["Média", "Mediana", "Moda"], correta: 0, feedbackAcerto: "🎉 Exato.", feedbackErro: "A média é puxada pelos extremos." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Estatístico da família",
    materiais: ["Papel", "Caneta"],
    passos: [
      "Anote a idade de 5 pessoas da família.",
      "Calcule média, moda e mediana das idades.",
      "Explique a alguém qual das três representa melhor a família e por quê.",
    ],
    registro: "📸 Foto das três contas montadas.",
  },
  recompensa: { xp: 175, moedas: 90 },
};
