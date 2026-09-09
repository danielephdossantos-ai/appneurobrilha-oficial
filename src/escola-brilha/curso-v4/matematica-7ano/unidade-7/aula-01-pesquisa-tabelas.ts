import type { AulaV4 } from "../../types";

/** Aula 01 · U7 — Pesquisa estatística: população, amostra, tabela e gráfico. */
export const aula01_pesquisaTabelas: AulaV4 = {
  slug: "u7-01-pesquisa-tabelas",
  titulo: "A Pergunta que Vira Dado",
  iconeTrilha: "📋",
  bncc: ["EF07MA36"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "De onde saem os números do jornal?",
    historia:
      "{NOME}, quando a TV diz que '62% dos brasileiros preferem X', ninguém perguntou para 200 milhões de pessoas. Perguntaram para alguns milhares bem escolhidos. Hoje você vai aprender a fazer uma pesquisa de verdade: escolher a amostra, organizar a tabela e transformar tudo em gráfico.",
  },

  momento02_exploracao: {
    instrucao: "Olhe como uma pergunta simples vira tabela e depois vira gráfico.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Esporte preferido — 40 alunos do 7º ano",
        cabecalhos: ["Esporte", "Frequência (fᵢ)", "Frequência relativa"],
        linhas: [
          { rotulo: "Futebol", valores: [16, "40%"] },
          { rotulo: "Vôlei", valores: [10, "25%"] },
          { rotulo: "Basquete", valores: [8, "20%"] },
          { rotulo: "Natação", valores: [6, "15%"] },
        ],
      },
      {
        tipo: "graficoBarras",
        titulo: "Esporte preferido (40 alunos)",
        unidade: "alunos",
        barras: [
          { rotulo: "Futebol", valor: 16 },
          { rotulo: "Vôlei", valor: 10 },
          { rotulo: "Basquete", valor: 8 },
          { rotulo: "Natação", valor: 6 },
        ],
      },
      { tipo: "texto", texto: "🔑 A soma das frequências é o total (40) e a soma das relativas é 100%.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como transformar 16 votos em porcentagem?",
    pista: "Divida pela quantidade total de pesquisados e multiplique por 100.",
    revelacao: "Frequência relativa = frequência ÷ total × 100. Assim 16 ÷ 40 = 0,4 → 40%.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "16 votos em 40 alunos",
      passos: [
        { expr: "16 ÷ 40 = 0,4", explica: "Parte dividida pelo todo.", status: "neutro" },
        { expr: "0,4 × 100 = 40%", explica: "Transformo em porcentagem.", status: "ok" },
        {
          expr: "conferindo: 40 + 25 + 20 + 15 = 100%",
          explica: "Fecha em 100.",
          status: "ok",
          professor:
            "Sempre confira se as porcentagens somam 100%. Se der 99% ou 101%, geralmente é arredondamento; se der muito diferente, tem erro na contagem ou na divisão.",
        },
      ],
      fatorada: "40%",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "População, amostra, tabela e gráfico",
    etapas: [
      {
        texto: "POPULAÇÃO é o grupo todo que interessa. AMOSTRA é a parte pesquisada. A amostra precisa representar bem a população.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Pesquisa sobre transporte usado pelos 600 alunos da escola",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "População × amostra",
            passos: [
              { expr: "população = 600 alunos", explica: "Grupo total.", status: "neutro" },
              { expr: "amostra = 60 alunos sorteados", explica: "10% do total.", status: "ok" },
              {
                expr: "amostra só do 1º ano = enviesada",
                explica: "Não representa a escola inteira.",
                status: "x",
                professor:
                  "Amostra enviesada é o erro mais grave da estatística. Perguntar só na fila da cantina, só para os amigos ou só numa turma distorce o resultado. Sorteio é a forma mais simples de garantir representatividade.",
              },
            ],
            fatorada: "amostra sorteada representa melhor",
          },
          destaque: "Amostra representativa = resultado confiável.",
        },
      },
      {
        texto: "TABELA DE FREQUÊNCIAS: cada categoria, quantas vezes apareceu (fᵢ) e quanto isso representa em %.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "20 alunos: 5 vão de ônibus, 5 a pé, 8 de carro, 2 de bicicleta",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Montando a tabela",
            passos: [
              { expr: "total = 5 + 5 + 8 + 2 = 20", explica: "Confiro o total.", status: "neutro" },
              { expr: "carro: 8 ÷ 20 = 40%", explica: "Maior categoria.", status: "ok" },
              { expr: "bicicleta: 2 ÷ 20 = 10%", explica: "Menor categoria.", status: "ok" },
            ],
            fatorada: "tabela fecha em 100%",
          },
          destaque: "Some sempre para conferir o total.",
        },
      },
      {
        texto: "GRÁFICO DE BARRAS: altura proporcional à frequência, eixos rotulados e escala regular.",
        exemploReal: {
          titulo: "🔎 Gráfico correspondente",
          contexto: "Mesma pesquisa de transporte, agora em barras",
          visualMat: {
            tipo: "graficoBarras",
            titulo: "Como os alunos vão à escola (20 alunos)",
            unidade: "alunos",
            barras: [
              { rotulo: "Ônibus", valor: 5 },
              { rotulo: "A pé", valor: 5 },
              { rotulo: "Carro", valor: 8 },
              { rotulo: "Bicicleta", valor: 2 },
            ],
          },
          destaque: "A barra mais alta é a categoria mais frequente.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: numa pesquisa com 50 pessoas, 30 disseram que reciclam lixo. Qual é a frequência relativa e como fica no gráfico?",
    resposta: "60% reciclam e 40% não reciclam",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "30 em 50 pessoas",
      passos: [
        { expr: "30 ÷ 50 = 0,6", explica: "Divido parte pelo todo.", status: "neutro" },
        { expr: "0,6 × 100 = 60%", explica: "Quem recicla.", status: "ok" },
        {
          expr: "100 − 60 = 40% não reciclam",
          explica: "O complemento.",
          status: "ok",
          professor:
            "Em pesquisa com apenas duas respostas possíveis, achar uma porcentagem entrega a outra de graça pelo complemento. Isso serve de verificação rápida.",
        },
      ],
      fatorada: "60% e 40%",
      legenda: "Brilha resolve",
    },
    passos: ["Anoto o total pesquisado.", "Divido cada categoria pelo total.", "Multiplico por 100.", "Confiro se soma 100%."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: 12 de 48 alunos preferem ciências. Qual é a porcentagem?",
    dica: "12 ÷ 48 e depois × 100.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "12 ÷ 48",
      passos: [
        { expr: "12 ÷ 48 = 0,25", explica: "Um quarto.", status: "neutro" },
        { expr: "0,25 × 100 = 25%", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "25%",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "25%" }, { nome: "12%" }, { nome: "40%" }],
      respostaCerta: "25%",
      feedbackAcerto: "🎯 12 é um quarto de 48.",
      feedbackErro: "12% seria se o total fosse 100. Como o total é 48: 12 ÷ 48 = 0,25 → 25%.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: numa tabela as categorias têm 30%, 25% e 20%. Quanto falta para a última categoria?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Completando 100%",
      passos: [
        { expr: "30 + 25 + 20 = 75%", explica: "Somo as conhecidas.", status: "neutro" },
        { expr: "100 − 75 = 25%", explica: "Falta para fechar.", status: "ok" },
      ],
      fatorada: "25%",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "25%" }, { nome: "15%" }, { nome: "75%" }],
      respostaCerta: "25%",
      feedbackAcerto: "🎯 A tabela sempre fecha em 100%.",
      feedbackErro: "As três somam 75%. Como o total é 100%, sobra 100 − 75 = 25%.",
    },
  },

  momento08_aplicacao: {
    contexto: "A escola quer saber qual fruta comprar para o lanche e entrevistou 60 alunos: 24 maçã, 18 banana, 12 laranja, 6 uva.",
    problema: "Qual fruta lidera e com que porcentagem?",
    visualMat: {
      tipo: "graficoBarras",
      titulo: "Fruta preferida (60 alunos)",
      unidade: "alunos",
      barras: [
        { rotulo: "Maçã", valor: 24 },
        { rotulo: "Banana", valor: 18 },
        { rotulo: "Laranja", valor: 12 },
        { rotulo: "Uva", valor: 6 },
      ],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Que porcentagem prefere maçã?",
      opcoes: [{ nome: "40%" }, { nome: "24%" }, { nome: "30%" }],
      respostaCerta: "40%",
      feedbackAcerto: "🎯 24 ÷ 60 = 0,4.",
      feedbackErro: "24 é a quantidade, não a porcentagem. Divida pelo total: 24 ÷ 60 = 0,4 → 40%.",
    },
  },

  momento09_revisao: {
    pontos: [
      "População é o grupo todo; amostra é a parte pesquisada.",
      "Amostra precisa ser representativa — sorteio ajuda.",
      "Frequência (fᵢ) é quantas vezes cada resposta apareceu.",
      "Frequência relativa = fᵢ ÷ total × 100.",
      "As porcentagens da tabela somam 100%.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Numa pesquisa, a parte do grupo que é entrevistada chama-se:", opcoes: ["amostra", "população", "frequência"], correta: 0, feedbackAcerto: "🎉 Amostra é o pedaço pesquisado.", feedbackErro: "População é o grupo TODO. A parte efetivamente entrevistada é a amostra." },
      { pergunta: "Em 200 pessoas, 50 escolheram A. Isso equivale a:", opcoes: ["25%", "50%", "4%"], correta: 0, feedbackAcerto: "🎉 50 ÷ 200 = 0,25.", feedbackErro: "Divida pelo total: 50 ÷ 200 = 0,25 → 25%. O número 50 sozinho não é porcentagem." },
      { pergunta: "A soma de todas as frequências relativas de uma tabela é:", opcoes: ["100%", "50%", "depende da pesquisa"], correta: 0, feedbackAcerto: "🎉 Sempre fecha o todo.", feedbackErro: "Todas as categorias juntas formam o total, ou seja, 100%." },
      { pergunta: "Perguntar só aos amigos da mesma turma torna a amostra:", opcoes: ["enviesada", "representativa", "maior"], correta: 0, feedbackAcerto: "🎉 Falta representar os outros grupos.", feedbackErro: "Uma amostra que não representa a população toda é enviesada e distorce o resultado." },
      { pergunta: "No gráfico de barras, a altura da barra indica:", opcoes: ["a frequência", "a porcentagem sempre", "a ordem alfabética"], correta: 0, feedbackAcerto: "🎉 Altura = quantidade.", feedbackErro: "A altura é proporcional à frequência (quantidade) daquela categoria." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Pesquisa em casa",
    materiais: ["Caderno", "Régua"],
    passos: [
      "Escolha uma pergunta com 3 ou 4 respostas possíveis.",
      "Entreviste pelo menos 10 pessoas e monte a tabela de frequências.",
      "Calcule as porcentagens e desenhe o gráfico de barras.",
    ],
    registro: "📸 Foto da tabela e do gráfico feitos à mão.",
  },
  recompensa: { xp: 240, moedas: 125, medalha: "Pesquisador de Dados" },
};
