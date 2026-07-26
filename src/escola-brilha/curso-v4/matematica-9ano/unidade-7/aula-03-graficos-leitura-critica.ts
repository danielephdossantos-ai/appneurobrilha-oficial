import type { AulaV4 } from "../../types";

/** Aula 03 · U7 — Gráficos e leitura crítica: barras, colunas, linhas, setores e gráficos enganosos. */
export const aula03_graficosLeituraCritica: AulaV4 = {
  slug: "u7-03-graficos-leitura-critica",
  titulo: "Gráficos Podem Enganar",
  iconeTrilha: "📈",
  bncc: ["EF09MA22", "EF09MA23"],
  duracaoMin: 30,
  metodologias: ["vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "Nem todo gráfico conta a verdade",
    historia:
      "{NOME}, o Instituto Brilha recebeu dois gráficos sobre o mesmo resultado de uma eleição estudantil — mas um deles parece mostrar uma vitória esmagadora, e o outro mostra um empate quase técnico! Os números são os MESMOS. O que mudou foi a forma de desenhar o gráfico. Hoje você aprende a ler gráficos com olhar crítico.",
  },

  momento02_exploracao: {
    instrucao: "Veja os votos da eleição do grêmio estudantil.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Votos para presidente do grêmio",
        cabecalhos: ["Candidato", "Votos"],
        linhas: [
          { rotulo: "1", valores: ["Ana", 52] },
          { rotulo: "2", valores: ["Bruno", 48] },
        ],
      },
      {
        tipo: "graficoBarras",
        titulo: "Gráfico honesto (eixo começa em 0)",
        barras: [
          { rotulo: "Ana", valor: 52 },
          { rotulo: "Bruno", valor: 48 },
        ],
        destaqueMaior: true,
      },
      {
        tipo: "texto",
        texto:
          "🔑 Nesse gráfico honesto, a diferença entre 52 e 48 parece pequena — porque ELA É pequena (só 4 votos de diferença em 100).",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia:
      "Se alguém desenhar o mesmo gráfico começando o eixo em 45 (em vez de 0), o que acontece com a barra de 48 comparada com a de 52?",
    pista: "Pense: se o eixo começa em 45, a barra de 48 mostra só 3 unidades de altura, e a de 52 mostra 7 — quase o dobro visualmente!",
    revelacao:
      "Cortar o eixo faz uma diferença pequena PARECER enorme. Isso é um GRÁFICO ENGANOSO — os números não mudam, mas a impressão visual, sim.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Mesmo dado, dois eixos diferentes",
      passos: [
        { expr: "Eixo de 0 a 60: barra Ana=52, Bruno=48", explica: "Diferença visual pequena (correta).", status: "ok" },
        { expr: "Eixo cortado de 45 a 55: barra Ana=52, Bruno=48", explica: "Alturas: Ana 7, Bruno 3 — parece o dobro!", status: "x", professor: "Cortar o eixo vertical (não começar em zero) é a forma mais comum de gráfico enganoso: amplia visualmente diferenças pequenas." },
        { expr: "Os votos continuam 52 e 48", explica: "Os números não mudaram.", status: "neutro" },
      ],
      fatorada: "Eixo cortado engana; sempre confira onde o eixo começa",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Tipos de gráfico e leitura crítica",
    etapas: [
      {
        texto:
          "GRÁFICO DE BARRAS/COLUNAS compara categorias (barras horizontais ou colunas verticais). GRÁFICO DE LINHAS mostra uma variação ao longo do TEMPO. GRÁFICO DE SETORES (pizza) mostra como um todo se divide em partes (em %).",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Vendas de sorvete por mês (variação no tempo).",
          visualMat: {
            tipo: "tabela",
            titulo: "Quando usar cada gráfico",
            cabecalhos: ["Situação", "Gráfico ideal"],
            linhas: [
              { rotulo: "1", valores: ["Comparar votos de 4 candidatos", "Colunas"] },
              { rotulo: "2", valores: ["Ver a temperatura ao longo do dia", "Linhas"] },
              { rotulo: "3", valores: ["Ver como as notas se dividem entre 4 faixas (em %)", "Setores (pizza)"] },
            ],
          },
          destaque: "Escolher o gráfico certo já é parte de contar a verdade dos dados.",
        },
      },
      {
        texto:
          "GRÁFICO DE EIXO CORTADO: quando o eixo vertical não começa em zero, pequenas diferenças parecem gigantes. Sempre confira o valor onde o eixo começa antes de tirar conclusões.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Comparando o crescimento de vendas de duas lojas.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Loja A: 100 → 103 vendas em um mês",
            passos: [
              { expr: "Aumento real: 103 − 100 = 3", explica: "Crescimento de apenas 3 vendas.", status: "ok" },
              { expr: "Gráfico com eixo de 99 a 104", explica: "A barra de 103 parece MUITO maior que a de 100.", status: "x", professor: "Um crescimento de 3%, quando o eixo é cortado, pode parecer um crescimento de 300% aos olhos de quem não confere a escala." },
              { expr: "Gráfico com eixo de 0 a 120", explica: "As duas barras ficam quase do mesmo tamanho — a verdade.", status: "ok" },
            ],
            fatorada: "Sempre olhe o início do eixo vertical",
          },
          destaque: "Eixo cortado é o truque mais comum para exagerar diferenças.",
        },
      },
      {
        texto:
          "ESCALA DISTORCIDA: quando os intervalos entre os valores do eixo não são iguais (ex.: 0, 10, 20, 100 no mesmo espaço que 0, 10, 20, 30), a posição das barras engana o olho, mesmo sem cortar o eixo.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Eixo com intervalos desiguais.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Eixo: 0, 10, 20, 100 (espaçados igualmente no desenho)",
            passos: [
              { expr: "Distância 0→10 = distância 20→100 no desenho", explica: "Mas numericamente são diferenças bem diferentes (10 x 80).", status: "x", professor: "Numa escala correta, o espaço entre marcações deve ser proporcional à diferença numérica. Aqui, 80 unidades ocupam o mesmo espaço que 10 unidades — isso é escala distorcida." },
              { expr: "Escala correta: 0, 20, 40, 60, 80, 100", explica: "Intervalos iguais e proporcionais.", status: "ok" },
            ],
            fatorada: "Intervalos do eixo devem ser sempre iguais e proporcionais",
          },
          destaque: "Escala distorcida é outro jeito de manipular a leitura de um gráfico.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "Brilha resolve: uma propaganda mostra um gráfico de colunas com eixo de 90 a 100 comparando o produto A (98 pontos) e o produto B (91 pontos) em uma pesquisa de satisfação. A coluna de A parece 8 vezes mais alta que a de B. Isso é justo?",
    resposta: "Não — a diferença real é pequena (7 pontos em 100); o eixo cortado exagera a diferença visualmente.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Satisfação: produto A = 98, produto B = 91",
      passos: [
        { expr: "Diferença real: 98 − 91 = 7 pontos", explica: "Numa escala de 100, é uma diferença pequena.", status: "neutro" },
        { expr: "Eixo cortado de 90 a 100: alturas 8 e 1", explica: "Altura de A parece 8 vezes a de B.", status: "x", professor: "8 ÷ 1 = 8 vezes na imagem, mas na realidade 98 é só cerca de 1,08 vez o valor de 91 — a propaganda distorce a diferença." },
        { expr: "Eixo correto de 0 a 100: alturas 98 e 91", explica: "As colunas ficam quase do mesmo tamanho.", status: "ok" },
      ],
      fatorada: "O eixo cortado engana; a diferença real é pequena",
      legenda: "Brilha resolve",
    },
    passos: [
      "Calculo a diferença real entre os valores: 98 − 91 = 7.",
      "Percebo que o eixo do gráfico da propaganda começa em 90, não em 0.",
      "Refaço mentalmente com eixo de 0 a 100: as colunas ficam parecidas.",
      "Concluo que o gráfico foi desenhado para exagerar a diferença.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado:
      "Nós fazemos: um gráfico de linhas mostra a temperatura da cidade subindo de 24°C para 25°C ao longo do dia, mas o eixo vai de 23,5 a 25,5. A linha parece subir MUITO. O aumento real de 1°C é grande ou pequeno?",
    dica: "Pense na escala real de temperatura: em geral, variações de 1°C ao longo de um dia são pequenas.",
    visualMat: {
      tipo: "tabela",
      titulo: "Temperatura ao longo do dia",
      cabecalhos: ["Hora", "Temperatura"],
      linhas: [
        { rotulo: "1", valores: ["8h", "24°C"] },
        { rotulo: "2", valores: ["14h", "25°C"] },
      ],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "O aumento de 24°C para 25°C é:",
      opcoes: [{ nome: "Pequeno, mas o eixo cortado faz parecer grande" }, { nome: "Enorme, quase dobrou" }, { nome: "Impossível de saber" }],
      respostaCerta: "Pequeno, mas o eixo cortado faz parecer grande",
      feedbackAcerto:
        "🎯 Isso! 1°C de variação é pequeno. O eixo indo só de 23,5 a 25,5 faz essa pequena subida parecer um salto enorme na linha do gráfico.",
      feedbackErro:
        "A diferença real é só 1°C (de 24 para 25), o que é pouco. O eixo cortado (23,5 a 25,5) é que faz a subida parecer grande demais no desenho.",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "Você faz: em uma pesquisa de opinião com 200 pessoas, 120 preferem o produto X e 80 preferem o produto Y. Qual gráfico melhor representa isso?",
    visualMat: {
      tipo: "graficoBarras",
      titulo: "Preferência dos 200 entrevistados",
      barras: [
        { rotulo: "Produto X", valor: 120 },
        { rotulo: "Produto Y", valor: 80 },
      ],
      destaqueMaior: true,
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Um gráfico de colunas com eixo de 0 a 140 mostrando 120 e 80 é:",
      opcoes: [{ nome: "Honesto — mostra a diferença real" }, { nome: "Enganoso — exagera a diferença" }, { nome: "Impossível de desenhar" }],
      respostaCerta: "Honesto — mostra a diferença real",
      feedbackAcerto:
        "🎯 Correto! Com o eixo começando em 0, a altura das colunas é proporcional aos valores reais (120 e 80) — é uma leitura honesta.",
      feedbackErro:
        "Quando o eixo começa em 0, as alturas das colunas ficam PROPORCIONAIS aos valores reais — isso é um gráfico honesto, não enganoso.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Uma reportagem mostra um gráfico de colunas com eixo de 40 a 50 comparando a nota média da escola A (49) e da escola B (41), fazendo parecer que a escola A é MUITO melhor.",
    problema: "Calcule a diferença real entre as notas e avalie se o gráfico é honesto.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Nota média: escola A = 49, escola B = 41",
      passos: [
        { expr: "Diferença real: 49 − 41 = 8 pontos", explica: "Numa escala de 0 a 100, essa é uma diferença moderada.", status: "neutro" },
        { expr: "Eixo cortado de 40 a 50: alturas 9 e 1", explica: "A coluna de A parece 9 vezes a de B.", status: "x", professor: "A proporção visual (9 para 1) é muito maior que a proporção real das notas (49 para 41, quase iguais em escala de 0 a 100). O gráfico manipula a percepção." },
        { expr: "Eixo correto de 0 a 100", explica: "As colunas ficam bem mais parecidas em altura.", status: "ok" },
      ],
      fatorada: "O gráfico da reportagem é enganoso (eixo cortado)",
      legenda: "Aplicação",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "O gráfico da reportagem é honesto ou enganoso?",
      opcoes: [{ nome: "Enganoso — o eixo cortado exagera a diferença" }, { nome: "Honesto — mostra a realidade" }, { nome: "Não é possível avaliar" }],
      respostaCerta: "Enganoso — o eixo cortado exagera a diferença",
      feedbackAcerto:
        "🎯 Isso! A diferença real de 8 pontos (em 100) é moderada, mas o eixo de 40 a 50 faz a coluna de A parecer 9 vezes maior que a de B.",
      feedbackErro:
        "Com o eixo começando em 40, uma diferença real de apenas 8 pontos (em uma escala de 0 a 100) aparece exagerada. Isso caracteriza um gráfico enganoso.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Colunas/barras comparam categorias; linhas mostram variação no tempo; setores mostram partes de um todo.",
      "Sempre confira onde o eixo vertical COMEÇA — cortar o eixo exagera diferenças.",
      "Escala distorcida (intervalos desiguais no eixo) também engana a leitura.",
      "Os números podem estar certos e o gráfico ainda assim enganar pela forma como foi desenhado.",
      "Leitura crítica: compare a diferença real (subtração) com a diferença visual do gráfico.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Para mostrar a variação da temperatura ao longo de um dia, o melhor gráfico é:",
        opcoes: ["Gráfico de linhas", "Gráfico de setores (pizza)", "Nenhum gráfico serve"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Linhas são ideais para mostrar como um valor muda ao longo do tempo.",
        feedbackErro: "Setores mostram partes de um todo, não mudança no tempo. Para variação ao longo do tempo, o gráfico de linhas é o ideal.",
      },
      {
        pergunta: "Um gráfico de colunas tem eixo vertical começando em 80 em vez de 0. Isso pode:",
        opcoes: ["Exagerar visualmente diferenças pequenas", "Deixar o gráfico mais preciso", "Não muda nada na leitura"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Cortar o eixo faz diferenças pequenas parecerem enormes no desenho.",
        feedbackErro: "Cortar o eixo (não começar em 0) faz diferenças pequenas parecerem muito maiores do que realmente são.",
      },
      {
        pergunta: "Dois produtos venderam 210 e 200 unidades. Um gráfico com eixo de 195 a 215 faz a diferença parecer:",
        opcoes: ["Maior do que realmente é", "Exatamente igual à diferença real", "Menor do que realmente é"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A diferença real (10 unidades) é pequena perto de 200, mas o eixo cortado amplia essa diferença visualmente.",
        feedbackErro: "Um eixo cortado (de 195 a 215) faz uma diferença pequena (10 em 200) parecer bem maior visualmente do que ela é de fato.",
      },
      {
        pergunta: "Para mostrar como as notas de uma turma se dividem entre as faixas 'insuficiente', 'regular' e 'ótimo' (em %), o melhor gráfico é:",
        opcoes: ["Gráfico de setores (pizza)", "Gráfico de linhas", "Nenhum gráfico serve para isso"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Setores mostram bem como um total se divide em partes percentuais.",
        feedbackErro: "Linhas servem para variação no tempo. Para mostrar como um todo se divide em partes (%), o gráfico de setores é o mais indicado.",
      },
      {
        pergunta: "Antes de tirar conclusões de um gráfico de colunas, o que é essencial verificar?",
        opcoes: ["Onde o eixo vertical começa e se os intervalos são iguais", "Só a cor das colunas", "Apenas o título do gráfico"],
        correta: 0,
        feedbackAcerto: "🎉 Isso mesmo! Conferir o início do eixo e a escala evita cair em gráficos enganosos.",
        feedbackErro: "A cor e o título não garantem que o gráfico é honesto. O essencial é checar onde o eixo começa e se os intervalos entre os valores são iguais.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça aos gráficos enganosos",
    materiais: ["Jornal, revista ou internet", "Papel", "Caneta"],
    passos: [
      "Encontre com a família um gráfico em uma notícia, propaganda ou rede social.",
      "Verifique onde o eixo vertical começa: é zero ou foi cortado?",
      "Refaça mentalmente (ou no papel) o gráfico com o eixo começando em zero e compare a diferença visual.",
      "Explique para a família se o gráfico encontrado é honesto ou enganoso, e por quê.",
    ],
    registro: "📸 Foto do gráfico encontrado com sua análise anotada ao lado.",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Leitor Crítico de Gráficos" },
};
