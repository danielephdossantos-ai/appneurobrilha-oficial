import type { AulaV4 } from "../../types";

/** Aula 05 · U7 — MISSÃO FINAL DO 9º ANO: o Instituto de Pesquisa (retomada geral). */
export const aula05_missaoFinal: AulaV4 = {
  slug: "u7-05-missao-final-instituto-pesquisa",
  titulo: "Missão Final: O Instituto de Pesquisa",
  iconeTrilha: "🏆",
  bncc: ["EF09MA20", "EF09MA21", "EF09MA22", "EF09MA23"],
  duracaoMin: 40,
  metodologias: ["vergnaud", "skemp", "modelagem"],

  momento01_motivacao: {
    titulo: "Sua missão: virar pesquisador-chefe por um dia",
    historia:
      "{NOME}, chegou o grande dia! Você foi convidado a ser o PESQUISADOR-CHEFE do Instituto Brilha por 24 horas. Sua missão: investigar quanto tempo os alunos da escola passam estudando por dia, planejar a pesquisa, coletar e resumir os dados, montar um gráfico e ainda PREVER o resultado de um sorteio de brindes. Você vai usar TUDO que aprendeu no 9º ano — funções, Pitágoras, equações e estatística. Vamos lá?",
  },

  momento02_exploracao: {
    instrucao: "Veja os dados que o Instituto já coletou de uma amostra de 10 alunos (tempo de estudo por dia, em horas).",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Amostra: horas de estudo por dia (10 alunos)",
        cabecalhos: ["Aluno", "Horas"],
        linhas: [
          { rotulo: "1", valores: ["A", 2] },
          { rotulo: "2", valores: ["B", 3] },
          { rotulo: "3", valores: ["C", 2] },
          { rotulo: "4", valores: ["D", 4] },
          { rotulo: "5", valores: ["E", 3] },
          { rotulo: "6", valores: ["F", 2] },
          { rotulo: "7", valores: ["G", 5] },
          { rotulo: "8", valores: ["H", 3] },
          { rotulo: "9", valores: ["I", 2] },
          { rotulo: "10", valores: ["J", 4] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 Uma amostra bem escolhida representa o grupo todo. Aqui, 10 alunos foram sorteados aleatoriamente entre os 300 da escola — isso é AMOSTRAGEM.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Olhando os 10 valores (2,3,2,4,3,2,5,3,2,4), qual valor aparece mais vezes? E qual é o valor 'do meio' se organizarmos em ordem?",
    pista: "Organize em ordem: 2,2,2,2,3,3,3,4,4,5. Conte quantas vezes cada número aparece e observe o centro da lista.",
    revelacao:
      "O valor 2 aparece 4 vezes — é a MODA. Organizando os 10 valores, o 'meio' fica entre a 5ª e 6ª posição (3 e 3) — a MEDIANA é 3. A MÉDIA soma tudo (30) e divide por 10 = 3.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Dados: 2,3,2,4,3,2,5,3,2,4 (ordenados: 2,2,2,2,3,3,3,4,4,5)",
      passos: [
        { expr: "Moda = 2 (aparece 4 vezes)", explica: "O valor mais frequente.", status: "ok" },
        { expr: "Mediana: 5ª e 6ª posições = 3 e 3 → mediana = 3", explica: "Valor central da lista ordenada (10 valores, par).", status: "ok" },
        { expr: "Média = (2+3+2+4+3+2+5+3+2+4) ÷ 10 = 30 ÷ 10 = 3", explica: "Soma de tudo dividida pela quantidade.", status: "ok", professor: "Quando moda, mediana e média são próximas (aqui todas ≈ 3), isso indica que os dados estão bem concentrados, sem valores muito extremos puxando a média." },
      ],
      fatorada: "Moda = 2, Mediana = 3, Média = 3",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Retomando tudo: as 4 etapas da pesquisa + revisão geral do 9º ano",
    etapas: [
      {
        texto:
          "ETAPA 1 — PLANEJAR: definir a pergunta de pesquisa, a população (todos) e a amostra (parte representativa). Ex.: pergunta 'Quantas horas por dia os alunos estudam?', população = todos os alunos da escola, amostra = 10 alunos sorteados.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Escola com 300 alunos; pesquisa com amostra de 10.",
          visualMat: {
            tipo: "tabela",
            titulo: "Planejamento da pesquisa",
            cabecalhos: ["Elemento", "Definição"],
            linhas: [
              { rotulo: "1", valores: ["Pergunta", "Quantas horas por dia você estuda?"] },
              { rotulo: "2", valores: ["População", "300 alunos da escola"] },
              { rotulo: "3", valores: ["Amostra", "10 alunos sorteados aleatoriamente"] },
            ],
          },
          destaque: "Uma boa amostra precisa ser aleatória e representativa da população.",
        },
      },
      {
        texto:
          "ETAPA 2 — COLETAR E RESUMIR: depois de coletar os dados, resumimos com média, mediana e moda para entender o 'centro' dos dados de forma simples.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Dados já coletados: 2,3,2,4,3,2,5,3,2,4.",
          visualMat: {
            tipo: "tabela",
            titulo: "Resumo estatístico",
            cabecalhos: ["Medida", "Valor"],
            linhas: [
              { rotulo: "1", valores: ["Média", "3 horas"] },
              { rotulo: "2", valores: ["Mediana", "3 horas"] },
              { rotulo: "3", valores: ["Moda", "2 horas"] },
            ],
          },
          destaque: "As três medidas juntas contam uma história mais completa do que uma sozinha.",
        },
      },
      {
        texto:
          "ETAPA 3 — REPRESENTAR: escolher o gráfico certo (colunas para comparar categorias) e desenhá-lo com o eixo começando em ZERO, para não enganar quem lê.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Quantos alunos estudam cada quantidade de horas.",
          visualMat: {
            tipo: "graficoBarras",
            titulo: "Quantidade de alunos por horas de estudo",
            barras: [
              { rotulo: "2h", valor: 4 },
              { rotulo: "3h", valor: 3 },
              { rotulo: "4h", valor: 2 },
              { rotulo: "5h", valor: 1 },
            ],
            destaqueMaior: true,
          },
          destaque: "Gráfico honesto: eixo começa em zero, sem distorções.",
        },
      },
      {
        texto:
          "ETAPA 4 — PREVER: usar probabilidade para estimar chances futuras. Ex.: se sortearmos 1 aluno dessa amostra de 10, qual a chance de ele estudar 2 horas (moda)?",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Sorteio de 1 aluno entre os 10 da amostra.",
          visualMat: {
            tipo: "escalaProb",
            itens: [
              { evento: "Sortear um aluno que estuda 2h (4 de 10)", nivel: "pouco" },
              { evento: "Sortear um aluno que estuda 5h (1 de 10)", nivel: "impossivel" },
            ],
          },
          destaque: "P(estudar 2h) = 4/10 = 2/5 = 40%.",
        },
      },
      {
        texto:
          "REVISÃO — FUNÇÃO AFIM: f(x) = ax + b representa relações lineares. Ex.: o custo de uma pesquisa é C(x) = 5x + 20, sendo x o número de entrevistados e 20 reais o custo fixo de material.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Custo da pesquisa com 10 entrevistados: C(x) = 5x + 20.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "C(10) = 5(10) + 20",
            passos: [
              { expr: "C(10) = 5 × 10 + 20", explica: "Substituo x por 10.", status: "neutro" },
              { expr: "C(10) = 50 + 20 = 70", explica: "Custo total: R$ 70,00.", status: "ok" },
            ],
            fatorada: "C(10) = R$ 70,00",
          },
          destaque: "Função afim: coeficiente a = taxa de variação, b = valor fixo inicial.",
        },
      },
      {
        texto:
          "REVISÃO — TEOREMA DE PITÁGORAS: em um triângulo retângulo, a² = b² + c² (hipotenusa ao quadrado é igual à soma dos quadrados dos catetos). Útil, por exemplo, para calcular a distância entre dois pontos de coleta.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Dois pontos de coleta de dados formam um triângulo retângulo de catetos 6 km e 8 km.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "a² = 6² + 8²",
            passos: [
              { expr: "a² = 36 + 64 = 100", explica: "Somo os quadrados dos catetos.", status: "neutro" },
              { expr: "a = √100 = 10 km", explica: "Tiro a raiz quadrada para achar a hipotenusa.", status: "ok" },
            ],
            fatorada: "Distância = 10 km",
          },
          destaque: "Pitágoras ajuda a calcular distâncias diretas (em linha reta) a partir de dois deslocamentos perpendiculares.",
        },
      },
      {
        texto:
          "REVISÃO — EQUAÇÃO DO 2º GRAU: ax² + bx + c = 0, resolvida pela fórmula de Bhaskara. Ex.: usada para descobrir quantos entrevistados são necessários para um custo total desejado, quando a relação envolve um termo ao quadrado.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "x² − 5x + 6 = 0 (quantidade de grupos de entrevista que satisfazem uma condição).",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² − 5x + 6 = 0",
            passos: [
              { expr: "Δ = b² − 4ac = (−5)² − 4(1)(6) = 25 − 24 = 1", explica: "Calculo o discriminante.", status: "neutro" },
              { expr: "x = (5 ± 1) / 2", explica: "Aplico a fórmula de Bhaskara.", status: "neutro" },
              { expr: "x' = 3 e x'' = 2", explica: "As duas raízes da equação.", status: "ok" },
            ],
            fatorada: "x = 2 ou x = 3",
          },
          destaque: "Equações do 2º grau podem ter 0, 1 ou 2 soluções reais, dependendo do discriminante.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "Brilha resolve a missão: com a amostra de 10 alunos (média = mediana = 3h, moda = 2h), o Instituto quer sortear 1 brinde entre os 3 alunos que estudam EXATAMENTE 4 horas. Qual a probabilidade de o aluno D (que estuda 4h) ganhar o brinde?",
    resposta: "Existem 2 alunos que estudam 4h (D e J) sorteando entre eles: P(ser D) = 1/2.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Sorteio entre os alunos que estudam 4h",
      passos: [
        { expr: "Alunos com 4h de estudo: D e J → total = 2", explica: "Consulto a tabela de dados coletados.", status: "neutro" },
        { expr: "P(sortear D) = 1/2", explica: "1 favorável (D) entre 2 possíveis.", status: "ok" },
      ],
      fatorada: "P = 1/2 = 50%",
      legenda: "Brilha resolve",
    },
    passos: [
      "Releio a tabela de dados coletados para achar quantos alunos estudam 4 horas.",
      "Encontro 2 alunos (D e J) com 4 horas de estudo.",
      "Calculo a probabilidade de sortear justamente o aluno D: 1 favorável em 2 possíveis.",
      "Concluo que P(D ganhar) = 1/2, ou 50%.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado:
      "Nós fazemos: o Instituto decide comparar a média de horas de estudo (3h) com a mediana (3h) e a moda (2h) da amostra. Qual conclusão é mais correta sobre esse conjunto de dados?",
    dica: "Quando média e mediana são iguais mas a moda é menor, geralmente os dados estão concentrados, sem grandes valores extremos puxando a média para cima.",
    visualMat: {
      tipo: "tabela",
      titulo: "Comparando as medidas",
      cabecalhos: ["Medida", "Valor"],
      linhas: [
        { rotulo: "1", valores: ["Média", 3] },
        { rotulo: "2", valores: ["Mediana", 3] },
        { rotulo: "3", valores: ["Moda", 2] },
      ],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "O que essas três medidas juntas indicam sobre os dados?",
      opcoes: [
        { nome: "Os dados são bem concentrados, com a maioria estudando poucas horas (2 a 4h)" },
        { nome: "Todos os alunos estudam exatamente 3 horas" },
        { nome: "É impossível saber qualquer coisa com essas medidas" },
      ],
      respostaCerta: "Os dados são bem concentrados, com a maioria estudando poucas horas (2 a 4h)",
      feedbackAcerto:
        "🎯 Isso! Média e mediana próximas (ambas 3) e moda um pouco menor (2) indicam dados concentrados na faixa de 2 a 4 horas, sem valores extremos puxando a média.",
      feedbackErro:
        "As medidas não significam que TODOS têm o mesmo valor — apenas que os dados estão concentrados numa faixa parecida (2h a 4h), já que média, mediana e moda ficaram próximas.",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "Você faz: o Instituto quer calcular a distância direta entre a sede (ponto A) e o local da coleta (ponto B), sabendo que andou 9 km para o leste e depois 12 km para o norte (formando um triângulo retângulo).",
    visualMat: {
      tipo: "figuraPlana",
      forma: "triangulo",
      legenda: "Deslocamento do Instituto",
      medidasLados: ["12 km", "? km", "9 km"],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a distância direta (hipotenusa) entre a sede e o local de coleta?",
      opcoes: [{ nome: "15 km" }, { nome: "21 km" }, { nome: "10 km" }],
      respostaCerta: "15 km",
      feedbackAcerto:
        "🎯 Correto! a² = 9² + 12² = 81 + 144 = 225, e √225 = 15 km. Pitágoras resolve distâncias em linha reta a partir de deslocamentos perpendiculares.",
      feedbackErro:
        "Use Pitágoras: a² = 9² + 12² = 81 + 144 = 225. A raiz quadrada de 225 é 15 km — essa é a distância direta.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Missão final: o Instituto Brilha fecha a pesquisa. O custo total da pesquisa segue a função C(x) = 8x + 30 (x = número de entrevistados). Além disso, para sortear os brindes finais, uma urna tem 10 papéis (3 premiados) e serão sorteados 2 papéis, um após o outro, SEM reposição.",
    problema:
      "1) Calcule o custo total se x = 15 entrevistados. 2) Calcule a probabilidade de os DOIS primeiros papéis sorteados serem premiados.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "C(15) = 8(15) + 30 e P(premiado e premiado)",
      passos: [
        { expr: "C(15) = 8 × 15 + 30 = 120 + 30 = 150", explica: "Custo total da pesquisa com 15 entrevistados.", status: "ok" },
        { expr: "P(1º premiado) = 3/10", explica: "3 premiados em 10 papéis.", status: "neutro" },
        { expr: "Sem reposição: restam 9 papéis, 2 premiados", explica: "O papel sorteado sai do total.", status: "x", professor: "Sorteios sem reposição sempre reduzem tanto o total quanto (se o evento anterior foi do mesmo tipo) a quantidade favorável." },
        { expr: "P(2º premiado) = 2/9", explica: "2 premiados restantes em 9 papéis.", status: "neutro" },
        { expr: "P(premiado e premiado) = 3/10 × 2/9 = 6/90 = 1/15", explica: "Multiplico as duas probabilidades sucessivas.", status: "ok" },
      ],
      fatorada: "Custo = R$ 150,00; P = 1/15",
      legenda: "Missão Final — Aplicação",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o custo total com 15 entrevistados e a probabilidade de sortear 2 papéis premiados seguidos (sem reposição)?",
      opcoes: [
        { nome: "Custo R$ 150,00 e probabilidade 1/15" },
        { nome: "Custo R$ 120,00 e probabilidade 3/10" },
        { nome: "Custo R$ 150,00 e probabilidade 9/100" },
      ],
      respostaCerta: "Custo R$ 150,00 e probabilidade 1/15",
      feedbackAcerto:
        "🎯 Excelente trabalho, pesquisador-chefe! C(15) = 8×15+30 = 150. E P = 3/10 × 2/9 = 1/15, pois sem reposição o total e os premiados diminuem na 2ª retirada.",
      feedbackErro:
        "Custo: C(15) = 8×15+30 = 150. Probabilidade: 3/10 (1º premiado) × 2/9 (2º premiado, sem reposição, restam 9 papéis e 2 premiados) = 6/90 = 1/15.",
    },
  },

  momento09_revisao: {
    pontos: [
      "As 4 etapas de uma pesquisa estatística: planejar, coletar/resumir, representar e prever.",
      "Média, mediana e moda resumem o 'centro' dos dados, cada uma com sua utilidade.",
      "Gráficos honestos começam o eixo em zero; gráficos enganosos cortam o eixo.",
      "Probabilidade de eventos sucessivos: multiplicar, atentos a reposição (independentes) ou não (dependentes).",
      "Função afim, Pitágoras e equação do 2º grau continuam ferramentas essenciais para modelar situações reais.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual é a ordem correta das etapas de uma pesquisa estatística?",
        opcoes: [
          "Planejar → coletar/resumir → representar → prever",
          "Prever → planejar → representar → coletar",
          "Representar → prever → planejar → coletar",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Primeiro planejamos a pergunta e a amostra, coletamos e resumimos os dados, representamos com gráficos e por fim usamos probabilidade para prever.",
        feedbackErro: "A ordem lógica é: planejar a pesquisa, coletar e resumir os dados, representá-los em gráfico e, por fim, usar isso para prever situações futuras.",
      },
      {
        pergunta: "Numa amostra de 10 valores, média = mediana = 3 e moda = 2. Isso indica que:",
        opcoes: [
          "Os dados estão concentrados numa faixa próxima, sem grandes extremos",
          "Todos os 10 alunos estudam exatamente 3 horas",
          "É impossível calcular qualquer coisa a mais",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Média e mediana próximas indicam dados sem grandes discrepâncias — concentração em torno de um valor central.",
        feedbackErro: "Média e mediana próximas (e moda um pouco diferente) mostram que os dados estão concentrados, sem indicar que todos os valores são iguais.",
      },
      {
        pergunta: "Uma urna tem 10 papéis (3 premiados). Sorteando 2 SEM reposição, a probabilidade dos dois serem premiados é:",
        opcoes: ["3/10 × 2/9 = 1/15", "3/10 × 3/10 = 9/100", "3/10 + 2/9"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Sem reposição, o 2º sorteio tem 9 papéis com 2 premiados restantes: 3/10 × 2/9 = 1/15.",
        feedbackErro: "Sem reposição, depois do 1º papel premiado sair, restam 9 papéis com 2 premiados. A conta certa é 3/10 × 2/9 = 1/15.",
      },
      {
        pergunta: "Um triângulo retângulo tem catetos 9 km e 12 km. Qual é a hipotenusa?",
        opcoes: ["15 km", "21 km", "108 km"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! a² = 9² + 12² = 81 + 144 = 225, e √225 = 15 km, pelo Teorema de Pitágoras.",
        feedbackErro: "Use a² = 9² + 12² = 81 + 144 = 225. A raiz quadrada de 225 é 15 — essa é a hipotenusa.",
      },
      {
        pergunta: "Um gráfico de colunas comparando dois valores parecidos usa um eixo que começa em um número bem próximo dos valores (não em zero). Esse gráfico é:",
        opcoes: ["Enganoso — exagera visualmente a diferença real", "Sempre mais preciso que um gráfico com eixo em zero", "Impossível de interpretar"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Cortar o eixo (não começar em zero) faz diferenças pequenas parecerem muito maiores do que realmente são.",
        feedbackErro: "Um eixo que não começa em zero distorce a percepção visual, fazendo diferenças pequenas parecerem exageradas — isso é um gráfico enganoso.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Missão Final em Família: seu próprio Instituto de Pesquisa",
    materiais: ["Papel e caneta", "Celular ou computador (opcional, para gráfico)", "Família ou amigos como entrevistados"],
    passos: [
      "Escolha uma pergunta de pesquisa (ex.: 'Quantas horas de sono você tem por noite?') e entreviste ao menos 8 pessoas da família ou vizinhança.",
      "Calcule a média, a mediana e a moda dos dados coletados.",
      "Desenhe um gráfico de colunas honesto (eixo começando em zero) representando os dados.",
      "Calcule a probabilidade de sortear, entre os entrevistados, uma pessoa cuja resposta seja igual à moda encontrada.",
      "Apresente para a família seu 'relatório de pesquisa' completo, como um verdadeiro pesquisador-chefe.",
    ],
    registro: "📊 Foto do gráfico feito à mão (ou digital) junto com as contas de média, mediana, moda e probabilidade.",
  },
  recompensa: { xp: 500, moedas: 250, medalha: "Matemático do 9º Ano" },
};
