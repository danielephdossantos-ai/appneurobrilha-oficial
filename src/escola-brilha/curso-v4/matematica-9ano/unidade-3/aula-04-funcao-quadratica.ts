import type { AulaV4 } from "../../types";

/**
 * Aula 04 · U3 — Função quadrática: parábola, zeros (Bhaskara) e vértice.
 * EF09MA06
 */
export const aula04_funcaoQuadratica: AulaV4 = {
  slug: "u3-04-funcao-quadratica",
  titulo: "A Curva que Sobe e Desce",
  iconeTrilha: "🎢",
  bncc: ["EF09MA06"],
  duracaoMin: 35,
  metodologias: ["vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "A trajetória de uma bola no ar",
    historia:
      "{NOME}, quando você chuta uma bola para o alto, ela sobe, para no ponto mais alto e desce — desenhando uma curva chamada PARÁBOLA. Essa curva é o gráfico de uma FUNÇÃO QUADRÁTICA, do tipo f(x) = ax² + bx + c. Hoje você vai descobrir como encontrar o ponto mais alto (ou mais baixo) dessa curva e onde ela toca o chão.",
  },

  momento02_exploracao: {
    instrucao: "Veja a tabela de f(x) = x² − 4x + 3 e observe como os valores sobem e depois descem... ou o contrário!",
    cenas: [
      {
        tipo: "tabela",
        titulo: "f(x) = x² − 4x + 3",
        cabecalhos: ["x", "f(x)"],
        linhas: [
          { rotulo: "1", valores: [0, 3] },
          { rotulo: "2", valores: [1, 0] },
          { rotulo: "3", valores: [2, -1] },
          { rotulo: "4", valores: [3, 0] },
          { rotulo: "5", valores: [4, 3] },
        ],
      },
      {
        tipo: "graficoBarras",
        titulo: "Formato de parábola (concavidade para cima)",
        barras: [
          { rotulo: "x=0", valor: 3 },
          { rotulo: "x=1", valor: 0 },
          { rotulo: "x=2", valor: -1 },
          { rotulo: "x=3", valor: 0 },
          { rotulo: "x=4", valor: 3 },
        ],
        destaqueMaior: false,
      },
      {
        tipo: "texto",
        texto: "🔑 Os valores DESCEM até x=2 e depois SOBEM de novo — isso forma uma parábola com um ponto mais baixo (vértice) em x=2.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que a função quadrática forma uma curva (parábola) e não uma reta?",
    pista: "Numa função afim, x aumenta e f(x) muda sempre na mesma taxa. Na quadrática, existe o termo x² — repare como f(x) muda de forma diferente perto do meio da tabela.",
    revelacao: "Numa função quadrática f(x) = ax² + bx + c (com a ≠ 0), o gráfico é sempre uma PARÁBOLA. Se a > 0, a parábola tem concavidade para CIMA (forma de U, com um ponto MÍNIMO). Se a < 0, a concavidade é para BAIXO (forma de ∩, com um ponto MÁXIMO).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Concavidade de f(x) = x² − 4x + 3",
      passos: [
        { expr: "a = 1, b = −4, c = 3", explica: "Identifico os coeficientes.", status: "neutro" },
        { expr: "a = 1 > 0", explica: "O coeficiente a é positivo.", status: "ok" },
        { expr: "Concavidade para CIMA", explica: "Parábola em forma de U, com ponto mínimo.", status: "ok", professor: "O sinal de a decide tudo: a>0 abre para cima (mínimo), a<0 abre para baixo (máximo). Nunca precisamos desenhar para saber — só olhar o sinal de a." },
      ],
      fatorada: "concavidade: para cima",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Parábola, zeros e vértice",
    etapas: [
      {
        texto:
          "A FUNÇÃO QUADRÁTICA tem a forma f(x) = ax² + bx + c, com a, b, c reais e a ≠ 0 (se a fosse zero, viraria função afim). O gráfico é sempre uma PARÁBOLA, e o sinal de a define a concavidade: a > 0 abre para cima, a < 0 abre para baixo.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Em f(x) = −2x² + 3x − 1, identifique a concavidade.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Concavidade de f(x) = −2x² + 3x − 1",
            passos: [
              { expr: "a = −2", explica: "Coeficiente de x².", status: "neutro" },
              { expr: "a < 0", explica: "a é negativo.", status: "ok" },
              { expr: "Concavidade para BAIXO", explica: "Parábola em forma de ∩, com ponto máximo.", status: "ok" },
            ],
            fatorada: "concavidade: para baixo",
          },
          destaque: "a < 0 → parábola abre para baixo → tem ponto de máximo.",
        },
      },
      {
        texto:
          "Os ZEROS (ou raízes) da função quadrática são os valores de x onde f(x) = 0, ou seja, onde a parábola cruza o eixo x. Encontramos com a fórmula de BHASKARA: x = (−b ± √Δ) / (2a), sendo Δ = b² − 4ac.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Encontre as raízes de f(x) = x² − 5x + 6.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Bhaskara em f(x) = x² − 5x + 6",
            passos: [
              { expr: "Δ = (−5)² − 4·1·6", explica: "Calculo o discriminante.", status: "neutro" },
              { expr: "Δ = 25 − 24 = 1", explica: "Resolvo as contas.", status: "ok" },
              { expr: "x = (5 ± √1) / 2", explica: "Aplico a fórmula de Bhaskara.", status: "ok" },
              { expr: "x' = 3 e x'' = 2", explica: "(5+1)/2 = 3 e (5−1)/2 = 2.", status: "ok", professor: "Δ > 0 significa que existem DUAS raízes reais diferentes — a parábola cruza o eixo x em dois pontos." },
            ],
            fatorada: "raízes: x = 2 e x = 3",
          },
          destaque: "A parábola corta o eixo x em x = 2 e x = 3.",
        },
      },
      {
        texto:
          "O VÉRTICE da parábola é o seu ponto mais alto (se a<0) ou mais baixo (se a>0). Calculamos xv = −b/(2a) e yv = −Δ/(4a). O yv é o valor MÁXIMO da função (se a<0) ou o valor MÍNIMO (se a>0).",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Encontre o vértice de f(x) = x² − 4x + 3.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Vértice de f(x) = x² − 4x + 3",
            passos: [
              { expr: "a=1, b=−4, c=3", explica: "Identifico coeficientes.", status: "neutro" },
              { expr: "xv = −(−4) / (2·1) = 2", explica: "Calculo xv = −b/2a.", status: "ok" },
              { expr: "Δ = 16 − 12 = 4", explica: "Calculo Δ = b² − 4ac.", status: "ok" },
              { expr: "yv = −4 / (4·1) = −1", explica: "Calculo yv = −Δ/4a.", status: "ok", professor: "Como a=1>0, a parábola abre para cima, então yv=−1 é o valor MÍNIMO da função — o ponto mais baixo da curva." },
            ],
            fatorada: "vértice: (2, −1)",
          },
          destaque: "O ponto (2, −1) é o vértice — aqui, o valor MÍNIMO de f(x).",
        },
      },
      {
        texto:
          "Quando Δ < 0, a fórmula de Bhaskara envolve raiz quadrada de número negativo, então a função NÃO tem raízes reais — a parábola não toca o eixo x (fica totalmente acima ou totalmente abaixo dele).",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Verifique se f(x) = x² + 2x + 5 tem raízes reais.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Δ de f(x) = x² + 2x + 5",
            passos: [
              { expr: "Δ = 2² − 4·1·5", explica: "Calculo o discriminante.", status: "neutro" },
              { expr: "Δ = 4 − 20 = −16", explica: "Δ é negativo.", status: "x", professor: "Como Δ < 0, não existe raiz quadrada real de −16, então a função não corta o eixo x — não tem zeros reais." },
            ],
            fatorada: "sem raízes reais",
          },
          destaque: "Δ < 0 → a parábola nunca toca o eixo x.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: encontre os zeros e o vértice de f(x) = x² − 2x − 3.",
    resposta: "raízes x=3 e x=−1; vértice (1, −4)",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "f(x) = x² − 2x − 3",
      passos: [
        { expr: "Δ = (−2)² − 4·1·(−3)", explica: "Calculo o discriminante.", status: "neutro" },
        { expr: "Δ = 4 + 12 = 16", explica: "Resolvo as contas.", status: "ok" },
        { expr: "x = (2 ± 4) / 2", explica: "Aplico Bhaskara.", status: "ok" },
        { expr: "x' = 3 e x'' = −1", explica: "(2+4)/2=3 e (2−4)/2=−1.", status: "ok" },
        { expr: "xv = −(−2)/2 = 1", explica: "Calculo o xv.", status: "ok" },
        { expr: "yv = −16/4 = −4", explica: "Calculo o yv.", status: "ok", professor: "Como a=1>0, o vértice (1,−4) é o ponto MÍNIMO da parábola." },
      ],
      fatorada: "raízes: −1 e 3; vértice: (1, −4)",
      legenda: "Brilha resolve",
    },
    passos: [
      "Identifico a, b e c na função.",
      "Calculo Δ = b² − 4ac.",
      "Se Δ ≥ 0, aplico Bhaskara para achar as raízes.",
      "Calculo xv = −b/2a e yv = −Δ/4a para achar o vértice.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: quais são as raízes de f(x) = x² − x − 6?",
    dica: "Calcule Δ = b² − 4ac primeiro, com a=1, b=−1, c=−6. Depois aplique Bhaskara.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "f(x) = x² − x − 6",
      passos: [
        { expr: "Δ = (−1)² − 4·1·(−6)", explica: "Calculo Δ.", status: "neutro" },
        { expr: "Δ = 1 + 24 = 25", explica: "Resolvo as contas.", status: "ok" },
        { expr: "x = (1 ± 5) / 2", explica: "Aplico Bhaskara.", status: "ok" },
        { expr: "x' = 3 e x'' = −2", explica: "(1+5)/2=3 e (1−5)/2=−2.", status: "ok" },
      ],
      fatorada: "raízes: x = −2 e x = 3",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha as raízes de f(x) = x² − x − 6:",
      opcoes: [{ nome: "−2 e 3" }, { nome: "2 e −3" }, { nome: "1 e −6" }],
      respostaCerta: "−2 e 3",
      feedbackAcerto: "🎯 Δ=25, x=(1±5)/2, resultando em x=3 e x=−2.",
      feedbackErro: "Calcule Δ = 1+24 = 25. Depois x = (1 ± 5)/2, dando x=3 ou x=−2.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: qual é o vértice de f(x) = x² − 6x + 8?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Vértice de f(x) = x² − 6x + 8",
      passos: [
        { expr: "xv = −(−6) / (2·1) = 3", explica: "Calculo xv = −b/2a.", status: "neutro" },
        { expr: "Δ = 36 − 32 = 4", explica: "Calculo Δ = b² − 4ac.", status: "ok" },
        { expr: "yv = −4 / 4 = −1", explica: "Calculo yv = −Δ/4a.", status: "ok" },
      ],
      fatorada: "vértice: (3, −1)",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o vértice de f(x) = x² − 6x + 8:",
      opcoes: [{ nome: "(3, −1)" }, { nome: "(6, 8)" }, { nome: "(−3, 1)" }],
      respostaCerta: "(3, −1)",
      feedbackAcerto: "🎯 xv = 6/2 = 3; Δ = 36−32 = 4; yv = −4/4 = −1.",
      feedbackErro: "Calcule xv = −b/2a = 6/2 = 3. Depois Δ = 36−32=4, e yv=−4/4=−1.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A altura de uma bola chutada para o alto segue a função h(x) = −x² + 6x, onde x é o tempo em segundos e h(x) é a altura em metros.",
    problema: "Qual é a altura MÁXIMA que a bola atinge?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Altura máxima: h(x) = −x² + 6x",
      passos: [
        { expr: "a=−1, b=6, c=0", explica: "Identifico os coeficientes.", status: "neutro" },
        { expr: "xv = −6 / (2·(−1)) = 3", explica: "Calculo xv = −b/2a.", status: "ok" },
        { expr: "Δ = 36 − 0 = 36", explica: "Calculo Δ = b² − 4ac.", status: "ok" },
        { expr: "yv = −36 / (4·(−1)) = 9", explica: "Calculo yv = −Δ/4a.", status: "ok", professor: "Como a=−1<0, a parábola abre para baixo, então yv=9 é a altura MÁXIMA atingida pela bola, em x=3 segundos." },
      ],
      fatorada: "altura máxima: 9 metros",
      legenda: "Aplicação — trajetória da bola",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a altura máxima da bola?",
      opcoes: [{ nome: "9 metros" }, { nome: "6 metros" }, { nome: "3 metros" }],
      respostaCerta: "9 metros",
      feedbackAcerto: "🎯 xv=3, Δ=36, yv=−36/(−4)=9 metros — a altura máxima.",
      feedbackErro: "Calcule xv=−b/2a=3. Depois Δ=36, e yv=−Δ/4a=−36/−4=9 metros.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Função quadrática: f(x) = ax² + bx + c, com a ≠ 0, gráfico em forma de parábola.",
      "a > 0: concavidade para cima (ponto mínimo). a < 0: concavidade para baixo (ponto máximo).",
      "Zeros da função: raízes de ax²+bx+c=0, encontradas pela fórmula de Bhaskara.",
      "Vértice: xv = −b/2a e yv = −Δ/4a, é o ponto de máximo ou mínimo da função.",
      "Δ < 0 significa que a função não tem raízes reais.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Em f(x) = 3x² − x + 2, qual é o valor de a?",
        opcoes: ["3", "−1", "2"],
        correta: 0,
        feedbackAcerto: "🎉 O coeficiente de x² é 3, então a = 3.",
        feedbackErro: "Em f(x) = ax² + bx + c, o a é o número que multiplica x². Aqui, a = 3.",
      },
      {
        pergunta: "Se a < 0 numa função quadrática, a parábola tem concavidade:",
        opcoes: ["Para baixo, com ponto máximo", "Para cima, com ponto mínimo", "Reta, sem curva"],
        correta: 0,
        feedbackAcerto: "🎉 a < 0 abre para baixo (forma de ∩), com um ponto de máximo no topo.",
        feedbackErro: "Quando a < 0, a parábola abre para BAIXO (forma de ∩) e tem um ponto MÁXIMO.",
      },
      {
        pergunta: "Qual é o discriminante Δ de f(x) = x² + 2x − 3?",
        opcoes: ["16", "4", "1"],
        correta: 0,
        feedbackAcerto: "🎉 Δ = 2² − 4·1·(−3) = 4 + 12 = 16.",
        feedbackErro: "Δ = b² − 4ac = 2² − 4·1·(−3) = 4 + 12 = 16.",
      },
      {
        pergunta: "Qual é o vértice de f(x) = x² − 2x + 1?",
        opcoes: ["(1, 0)", "(2, 1)", "(−1, 0)"],
        correta: 0,
        feedbackAcerto: "🎉 xv = 2/2 = 1; Δ = 4−4=0; yv = 0/4 = 0. Vértice: (1, 0).",
        feedbackErro: "xv = −b/2a = 2/2 = 1. Δ = 4−4=0, então yv=0. O vértice é (1, 0).",
      },
      {
        pergunta: "A função f(x) = x² + x + 1 tem raízes reais?",
        opcoes: ["Não, pois Δ = −3 < 0", "Sim, x=1 e x=−1", "Sim, x=0 e x=1"],
        correta: 0,
        feedbackAcerto: "🎉 Δ = 1 − 4 = −3, que é negativo, então não existem raízes reais.",
        feedbackErro: "Calcule Δ = 1² − 4·1·1 = 1 − 4 = −3. Como Δ < 0, não há raízes reais.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caçador de parábolas em casa",
    materiais: ["Papel", "Caneta", "Bola ou objeto para observar trajetória (opcional)"],
    passos: [
      "Observe algo em casa que faça um movimento de subida e descida (jato d'água, bola quicando, arco).",
      "Escreva uma função quadrática simples do tipo f(x) = −x² + bx que poderia representar essa trajetória.",
      "Calcule o vértice dessa função e explique o que ele representa na trajetória observada.",
    ],
    registro: "📸 Foto ou vídeo curto da trajetória observada.",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Mestre da Parábola" },
};
