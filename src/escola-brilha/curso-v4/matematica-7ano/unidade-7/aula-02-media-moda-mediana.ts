import type { AulaV4 } from "../../types";

/** Aula 02 · U7 — Média, moda, mediana e amplitude. */
export const aula02_mediaModaMediana: AulaV4 = {
  slug: "u7-02-media-moda-mediana",
  titulo: "O Número que Resume Tudo",
  iconeTrilha: "📊",
  bncc: ["EF07MA35"],
  duracaoMin: 32,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Um número para representar muitos",
    historia:
      "{NOME}, sua professora tem 30 notas na mão e o diretor pergunta: 'como foi a turma?'. Ela não vai ler as 30 notas. Vai dizer UM número que resume tudo. Esse número pode ser a média, a moda ou a mediana — e escolher errado pode contar uma história falsa.",
  },

  momento02_exploracao: {
    instrucao: "Cinco notas de um aluno: 6, 7, 8, 8, 9. Três formas de resumir.",
    cenas: [
      {
        tipo: "graficoBarras",
        titulo: "Notas do bimestre",
        unidade: "nota",
        barras: [
          { rotulo: "Prova 1", valor: 6 },
          { rotulo: "Prova 2", valor: 7 },
          { rotulo: "Prova 3", valor: 8 },
          { rotulo: "Prova 4", valor: 8 },
          { rotulo: "Prova 5", valor: 9 },
        ],
      },
      {
        tipo: "tabela",
        titulo: "Três medidas, três significados",
        cabecalhos: ["Medida", "Como se acha", "Resultado"],
        linhas: [
          { rotulo: "Média", valores: ["soma ÷ quantidade", "38 ÷ 5 = 7,6"] },
          { rotulo: "Moda", valores: ["valor que mais repete", "8"] },
          { rotulo: "Mediana", valores: ["valor do meio em ordem", "8"] },
          { rotulo: "Amplitude", valores: ["maior − menor", "9 − 6 = 3"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Média é o equilíbrio, moda é o mais comum, mediana é o do meio.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se um valor muito estranho entrar na lista, qual medida sofre mais?",
    pista: "Compare a média e a mediana de 6, 7, 8, 8, 9 com a de 6, 7, 8, 8, 100.",
    revelacao: "A média pula de 7,6 para 25,8, mas a mediana continua 8. A média é sensível a valores extremos; a mediana é resistente.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "O efeito de um valor extremo",
      passos: [
        { expr: "6, 7, 8, 8, 9 → média = 38 ÷ 5 = 7,6", explica: "Lista normal.", status: "neutro" },
        { expr: "6, 7, 8, 8, 100 → média = 129 ÷ 5 = 25,8", explica: "A média disparou.", status: "x" },
        {
          expr: "mediana continua 8 nas duas listas",
          explica: "O valor do meio não mudou.",
          status: "ok",
          professor:
            "É por isso que notícias sobre salário usam a MEDIANA: alguns salários gigantes puxam a média para cima e criam a falsa impressão de que todo mundo ganha bem. A mediana mostra o que acontece com quem está no meio.",
        },
      ],
      fatorada: "média sensível · mediana resistente",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Como calcular cada medida",
    etapas: [
      {
        texto: "MÉDIA ARITMÉTICA: some todos os valores e divida pela quantidade deles.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Notas 6, 7, 8, 8, 9",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "média = soma ÷ quantidade",
            passos: [
              { expr: "6 + 7 + 8 + 8 + 9 = 38", explica: "Soma total.", status: "neutro" },
              { expr: "38 ÷ 5", explica: "São 5 notas.", status: "neutro" },
              {
                expr: "média = 7,6",
                explica: "Resultado.",
                status: "ok",
                professor:
                  "A média está sempre entre o menor e o maior valor. Se der 7,6 numa lista que vai de 6 a 9, está coerente. Se der 12, com certeza houve erro de conta.",
              },
            ],
            fatorada: "7,6",
          },
          destaque: "Divida pela QUANTIDADE, não pelo maior valor.",
        },
      },
      {
        texto: "MEDIANA: coloque em ORDEM e pegue o do meio. Se a quantidade for par, faça a média dos dois centrais.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Lista par: 4, 6, 7, 9",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "mediana de lista par",
            passos: [
              { expr: "em ordem: 4, 6, 7, 9", explica: "Ordenar é obrigatório.", status: "neutro" },
              { expr: "centrais: 6 e 7", explica: "Quantidade par → dois do meio.", status: "neutro" },
              { expr: "(6 + 7) ÷ 2 = 6,5", explica: "Mediana.", status: "ok" },
              { expr: "Erro comum: pegar o meio sem ordenar", explica: "Ordene sempre antes.", status: "x" },
            ],
            fatorada: "6,5",
          },
          destaque: "Ordenar sempre vem primeiro.",
        },
      },
      {
        texto: "MODA é o valor mais frequente (pode haver duas ou nenhuma). AMPLITUDE = maior − menor, e mostra o quanto os dados variam.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Lista 3, 5, 5, 7, 12",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "moda e amplitude",
            passos: [
              { expr: "5 aparece 2 vezes → moda = 5", explica: "Mais frequente.", status: "ok" },
              { expr: "amplitude = 12 − 3 = 9", explica: "Distância entre extremos.", status: "ok", professor: "Duas turmas podem ter a mesma média e amplitudes muito diferentes. Amplitude pequena significa turma homogênea; grande significa alunos muito desiguais entre si." },
            ],
            fatorada: "moda 5 · amplitude 9",
          },
          destaque: "Moda conta frequência; amplitude mede variação.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: as idades de um time são 12, 13, 13, 14 e 18 anos. Calcule média, moda, mediana e amplitude.",
    resposta: "Média 14; moda 13; mediana 13; amplitude 6",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "12, 13, 13, 14, 18",
      passos: [
        { expr: "soma = 12+13+13+14+18 = 70", explica: "Total.", status: "neutro" },
        { expr: "média = 70 ÷ 5 = 14", explica: "Cinco jogadores.", status: "ok" },
        { expr: "moda = 13 (aparece 2 vezes)", explica: "Mais frequente.", status: "ok" },
        { expr: "mediana = 13 (3º valor em ordem)", explica: "O do meio.", status: "ok" },
        {
          expr: "amplitude = 18 − 12 = 6",
          explica: "Variação de idades.",
          status: "ok",
          professor:
            "Repare que a média (14) é maior que a mediana (13) porque o jogador de 18 anos puxa a média para cima. Sempre que média > mediana, existe um valor alto esticando os dados.",
        },
      ],
      fatorada: "14 · 13 · 13 · 6",
      legenda: "Brilha resolve",
    },
    passos: ["Ordeno os dados.", "Somo e divido para a média.", "Conto repetições para a moda.", "Pego o do meio e calculo maior − menor."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: qual é a média de 4, 6, 8 e 10?",
    dica: "Some tudo e divida por 4.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "média de 4, 6, 8, 10",
      passos: [
        { expr: "4 + 6 + 8 + 10 = 28", explica: "Soma.", status: "neutro" },
        { expr: "28 ÷ 4 = 7", explica: "Quatro valores.", status: "ok" },
      ],
      fatorada: "7",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7" }, { nome: "28" }, { nome: "8" }],
      respostaCerta: "7",
      feedbackAcerto: "🎯 28 ÷ 4.",
      feedbackErro: "28 é só a soma. Falta dividir pela quantidade de valores: 28 ÷ 4 = 7.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: qual é a mediana de 3, 9, 5, 7 e 1?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "mediana de 3, 9, 5, 7, 1",
      passos: [
        { expr: "em ordem: 1, 3, 5, 7, 9", explica: "Ordeno primeiro.", status: "neutro" },
        { expr: "valor central = 5", explica: "Terceiro de cinco.", status: "ok" },
      ],
      fatorada: "5",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5" }, { nome: "7" }, { nome: "9" }],
      respostaCerta: "5",
      feedbackAcerto: "🎯 Ordenou antes de escolher.",
      feedbackErro: "Sem ordenar, o valor do meio parecia 5 na posição errada. Em ordem (1, 3, 5, 7, 9) a mediana é 5.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma loja registrou as vendas diárias da semana: 20, 22, 18, 25, 20, 30 e 45 unidades.",
    problema: "A média representa bem o dia típico dessa loja?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "20, 22, 18, 25, 20, 30, 45",
      passos: [
        { expr: "soma = 180", explica: "20+22+18+25+20+30+45.", status: "neutro" },
        { expr: "média = 180 ÷ 7 ≈ 25,7", explica: "Sete dias.", status: "ok" },
        { expr: "em ordem: 18, 20, 20, 22, 25, 30, 45 → mediana = 22", explica: "Quarto valor.", status: "ok" },
        {
          expr: "média 25,7 > mediana 22",
          explica: "O sábado de 45 puxou a média.",
          status: "ok",
          professor:
            "Para descrever o dia comum da loja, a mediana (22) é mais honesta: em 4 dos 7 dias vendeu-se 22 ou menos. A média sozinha faria o gerente comprar estoque demais.",
        },
      ],
      fatorada: "mediana representa melhor",
      legenda: "Aplicação — vendas da semana",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a mediana das vendas?",
      opcoes: [{ nome: "22" }, { nome: "25,7" }, { nome: "45" }],
      respostaCerta: "22",
      feedbackAcerto: "🎯 Valor central da lista ordenada.",
      feedbackErro: "25,7 é a média. Ordenando os sete dias, o valor do meio (4º) é 22.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Média = soma ÷ quantidade.",
      "Moda = valor que mais se repete.",
      "Mediana = valor central com os dados EM ORDEM.",
      "Lista par: mediana é a média dos dois centrais.",
      "Amplitude = maior − menor. A média sofre com valores extremos; a mediana resiste.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "A média de 5, 10 e 15 é:", opcoes: ["10", "30", "15"], correta: 0, feedbackAcerto: "🎉 30 ÷ 3.", feedbackErro: "30 é a soma. Divida pela quantidade de valores: 30 ÷ 3 = 10." },
      { pergunta: "Na lista 2, 4, 4, 7, 9 a moda é:", opcoes: ["4", "7", "5,2"], correta: 0, feedbackAcerto: "🎉 O 4 aparece duas vezes.", feedbackErro: "Moda é o valor mais frequente. O 4 aparece duas vezes; os demais, uma." },
      { pergunta: "Para achar a mediana é obrigatório:", opcoes: ["ordenar os dados", "somar tudo", "achar a moda"], correta: 0, feedbackAcerto: "🎉 Ordem primeiro, sempre.", feedbackErro: "A mediana é o valor central da lista ORDENADA. Sem ordenar, o resultado é aleatório." },
      { pergunta: "A amplitude de 3, 8, 15 é:", opcoes: ["12", "15", "8"], correta: 0, feedbackAcerto: "🎉 15 − 3.", feedbackErro: "Amplitude é maior menos menor: 15 − 3 = 12." },
      { pergunta: "Um valor muito alto na lista afeta principalmente:", opcoes: ["a média", "a mediana", "a moda"], correta: 0, feedbackAcerto: "🎉 A média é sensível a extremos.", feedbackErro: "Como a média usa a soma de todos os valores, um número muito alto a desloca. A mediana quase não muda." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "A média da família",
    materiais: ["Caderno", "Fita métrica ou balança (opcional)"],
    passos: [
      "Anote a idade de todos os moradores da casa.",
      "Calcule média, moda, mediana e amplitude.",
      "Discuta qual das medidas descreve melhor a família e por quê.",
    ],
    registro: "📸 Foto das contas com a conclusão escrita.",
  },
  recompensa: { xp: 250, moedas: 130, medalha: "Analista de Dados" },
};
