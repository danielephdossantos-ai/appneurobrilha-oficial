import type { AulaV4 } from "../../types";

/** Aula 02 · U3 — Função afim f(x) = ax + b. EF09MA06 */
export const aula02_funcaoAfim: AulaV4 = {
  slug: "u3-02-funcao-afim",
  titulo: "A Reta que Sobe ou Desce",
  iconeTrilha: "📈",
  bncc: ["EF09MA06"],
  duracaoMin: 30,
  metodologias: ["vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "Toda reta tem uma inclinação e um ponto de partida",
    historia:
      "{NOME}, pense numa rampa de skate: ela pode ser bem inclinada, suave, ou até descer. E toda rampa começa em algum lugar. Na função afim f(x) = ax + b, o número 'a' é a inclinação da rampa e 'b' é onde ela começa. Hoje você aprende a ler os dois números e desenhar a reta.",
  },

  momento02_exploracao: {
    instrucao: "Veja a função f(x) = 2x + 3 crescendo passo a passo.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "f(x) = 2x + 3",
        cabecalhos: ["x", "f(x)"],
        linhas: [
          { rotulo: "1", valores: [0, 3] },
          { rotulo: "2", valores: [1, 5] },
          { rotulo: "3", valores: [2, 7] },
        ],
      },
      {
        tipo: "graficoBarras",
        titulo: "f(x) = 2x + 3 crescendo",
        barras: [
          { rotulo: "x=0", valor: 3 },
          { rotulo: "x=1", valor: 5 },
          { rotulo: "x=2", valor: 7 },
        ],
        destaqueMaior: false,
      },
      {
        tipo: "texto",
        texto: "🔑 A cada +1 em x, f(x) aumenta sempre 2 — esse '2' é o coeficiente angular a.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Compare f(x) = 2x + 3 (sobe) com g(x) = −x + 5 (desce). O que diferencia elas?",
    pista: "Olhe o sinal do número que multiplica x.",
    revelacao: "Quando a > 0, a função é CRESCENTE. Quando a < 0, a função é DECRESCENTE. O sinal de 'a' decide a direção da reta.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "f(x)=2x+3 vs g(x)=−x+5",
      passos: [
        { expr: "f(x) = 2x + 3 → a = 2", explica: "a > 0", status: "ok" },
        { expr: "f(0)=3, f(1)=5, f(2)=7", explica: "Valores sobem.", status: "ok" },
        { expr: "g(x) = −x + 5 → a = −1", explica: "a < 0", status: "x" },
        { expr: "g(0)=5, g(1)=4, g(2)=3", explica: "Valores descem.", status: "ok", professor: "O sinal de a é o que decide se, ao aumentar x, f(x) sobe (a>0) ou desce (a<0)." },
      ],
      fatorada: "a>0 cresce; a<0 decresce",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Função afim: f(x) = ax + b",
    etapas: [
      {
        texto:
          "O COEFICIENTE ANGULAR 'a' mede a inclinação da reta: quanto f(x) muda a cada +1 em x. Quanto MAIOR o módulo de a, mais inclinada é a reta.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Em f(x) = 2x + 3, veja quanto f(x) sobe de x=0 para x=1.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Variação de f(x)=2x+3",
            passos: [
              { expr: "f(0) = 3", explica: "Ponto de partida.", status: "ok" },
              { expr: "f(1) = 5", explica: "Um passo à frente.", status: "ok" },
              { expr: "5 − 3 = 2", explica: "Variação = a.", status: "ok", professor: "Essa diferença constante (2, sempre) é exatamente o coeficiente angular a = 2." },
            ],
            fatorada: "a = 2",
          },
          destaque: "a mede quanto f(x) sobe (ou desce) a cada +1 em x.",
        },
      },
      {
        texto:
          "O COEFICIENTE LINEAR 'b' é onde a reta corta o eixo y — é o valor de f(x) quando x = 0.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Em f(x) = 2x + 3, calcule f(0).",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "f(0), com f(x)=2x+3",
            passos: [
              { expr: "f(0) = 2 · 0 + 3", explica: "Substituo x = 0.", status: "neutro" },
              { expr: "= 0 + 3", explica: "2 · 0 = 0.", status: "ok" },
              { expr: "= 3", explica: "b aparece sozinho.", status: "ok", professor: "Quando x=0, o termo ax some (vira 0) e sobra só b. Por isso b é o ponto onde a reta corta o eixo y: (0, b)." },
            ],
            fatorada: "b = 3, ponto (0,3)",
          },
          destaque: "f(0) = b sempre — é o corte no eixo y.",
        },
      },
      {
        texto:
          "O SINAL de a decide o comportamento: a > 0 → função CRESCENTE (reta sobe da esquerda para a direita); a < 0 → função DECRESCENTE (reta desce).",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Classifique f(x) = −2x + 4.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "f(x) = −2x + 4",
            passos: [
              { expr: "a = −2", explica: "Coeficiente angular.", status: "neutro" },
              { expr: "a < 0", explica: "Sinal negativo.", status: "x" },
              { expr: "Função decrescente", explica: "Reta desce.", status: "ok" },
            ],
            fatorada: "decrescente",
          },
          destaque: "a < 0 → sobe x, desce f(x).",
        },
      },
      {
        texto:
          "Para DESENHAR o gráfico de uma função afim, bastam DOIS pontos: calcule f(x) para dois valores de x (o mais fácil é x=0), marque os pontos e trace a reta que passa por eles.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Gráfico de f(x) = 2x + 3 usando x=0 e x=2.",
          visualMat: {
            tipo: "mapaGrade",
            linhas: 8,
            colunas: 5,
            pinos: [
              { linha: 4, coluna: 1, rotulo: "(0,3)" },
              { linha: 8, coluna: 3, rotulo: "(2,7)" },
            ],
            destaque: { linha: 4, coluna: 1 },
            legenda: "Dois pontos definem a reta",
          },
          destaque: "(0,3) e (2,7): trace a reta ligando os dois.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: monte o gráfico de f(x) = 3x − 2 com dois pontos e classifique crescente ou decrescente.",
    resposta: "Pontos (0,−2) e (1,1); crescente pois a=3>0",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "f(x) = 3x − 2",
      passos: [
        { expr: "f(0) = 3·0 − 2 = −2", explica: "Primeiro ponto: (0,−2).", status: "ok" },
        { expr: "f(1) = 3·1 − 2 = 1", explica: "Segundo ponto: (1,1).", status: "ok" },
        { expr: "a = 3 > 0", explica: "Coeficiente angular positivo.", status: "ok" },
        { expr: "Função crescente", explica: "Reta sobe.", status: "ok", professor: "Com dois pontos (0,−2) e (1,1) já dá pra traçar a reta inteira — retas ficam completamente definidas por dois pontos." },
      ],
      fatorada: "(0,−2) e (1,1), crescente",
      legenda: "Brilha resolve",
    },
    passos: [
      "Calculo f(0) para achar o primeiro ponto (corte no eixo y).",
      "Calculo f(1) (ou outro x fácil) para o segundo ponto.",
      "Olho o sinal de a para saber se é crescente ou decrescente.",
      "Marco os pontos e traço a reta.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: a função f(x) = −2x + 4 é crescente ou decrescente?",
    dica: "Olhe só o sinal do coeficiente que multiplica x.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "f(x) = −2x + 4",
      passos: [
        { expr: "a = −2", explica: "Coeficiente angular.", status: "neutro" },
        { expr: "f(0) = 4, f(1) = 2", explica: "Os valores caem.", status: "ok" },
      ],
      fatorada: "decrescente",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "A função é:",
      opcoes: [{ nome: "Decrescente" }, { nome: "Crescente" }, { nome: "Constante" }],
      respostaCerta: "Decrescente",
      feedbackAcerto: "🎯 a = −2 é negativo, então a função é decrescente: f(x) diminui quando x aumenta.",
      feedbackErro: "Veja o sinal de a: aqui a = −2 (negativo), então a função é DECRESCENTE.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: em f(x) = x − 3, qual é o ponto onde a reta corta o eixo y?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "f(0), com f(x)=x−3",
      passos: [
        { expr: "f(0) = 0 − 3", explica: "Substituo x = 0.", status: "neutro" },
        { expr: "= −3", explica: "Corte no eixo y.", status: "ok" },
      ],
      fatorada: "(0,−3)",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o ponto correto:",
      opcoes: [{ nome: "(0,−3)" }, { nome: "(0,3)" }, { nome: "(−3,0)" }],
      respostaCerta: "(0,−3)",
      feedbackAcerto: "🎯 f(0) = −3, então o ponto é (0,−3).",
      feedbackErro: "O corte no eixo y é sempre (0, b). Aqui b = −3, então o ponto é (0,−3).",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma conta de água tem taxa fixa de R$10 mais R$1,50 por metro cúbico consumido: f(x) = 1,5x + 10.",
    problema: "Se uma casa consumiu 20 m³ no mês, quanto foi a conta?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "f(20), com f(x) = 1,5x + 10",
      passos: [
        { expr: "f(20) = 1,5 · 20 + 10", explica: "Substituo x = 20.", status: "neutro", professor: "a = 1,5 (por m³, função crescente) e b = 10 (taxa fixa mesmo sem consumo)." },
        { expr: "= 30 + 10", explica: "Multiplico primeiro.", status: "ok" },
        { expr: "= 40", explica: "Somo a taxa fixa.", status: "ok" },
      ],
      fatorada: "f(20) = R$ 40",
      legenda: "Aplicação — conta de água",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quanto foi a conta de água?",
      opcoes: [{ nome: "R$ 40" }, { nome: "R$ 30" }, { nome: "R$ 35" }],
      respostaCerta: "R$ 40",
      feedbackAcerto: "🎯 1,5 · 20 = 30, mais a taxa fixa de 10: total R$40.",
      feedbackErro: "Primeiro 1,5 · 20 = 30, depois some a taxa fixa de R$10: 30 + 10 = 40.",
    },
  },

  momento09_revisao: {
    pontos: [
      "f(x) = ax + b é uma função afim.",
      "a é o coeficiente angular: inclinação da reta.",
      "b é o coeficiente linear: onde a reta corta o eixo y, ponto (0,b).",
      "a > 0 → crescente; a < 0 → decrescente.",
      "Dois pontos bastam para desenhar a reta inteira.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Em f(x) = 4x − 5, qual é o coeficiente angular?",
        opcoes: ["4", "−5", "−1"],
        correta: 0,
        feedbackAcerto: "🎉 O coeficiente angular é o número que multiplica x: 4.",
        feedbackErro: "O coeficiente angular a é o número que multiplica x. Em f(x) = 4x − 5, a = 4.",
      },
      {
        pergunta: "Em f(x) = 4x − 5, onde a reta corta o eixo y?",
        opcoes: ["(0, −5)", "(0, 4)", "(−5, 0)"],
        correta: 0,
        feedbackAcerto: "🎉 f(0) = 4·0 − 5 = −5, então o corte é em (0, −5).",
        feedbackErro: "O corte no eixo y é sempre (0, b). Aqui b = −5, então o ponto é (0, −5).",
      },
      {
        pergunta: "A função f(x) = −3x + 1 é:",
        opcoes: ["Decrescente", "Crescente", "Constante"],
        correta: 0,
        feedbackAcerto: "🎉 a = −3 é negativo: a função diminui quando x aumenta.",
        feedbackErro: "Olhe o sinal de a: aqui a = −3 é negativo, logo a função é decrescente.",
      },
      {
        pergunta: "Quais são dois pontos do gráfico de f(x) = x + 2?",
        opcoes: ["(0,2) e (1,3)", "(0,2) e (1,1)", "(2,0) e (3,1)"],
        correta: 0,
        feedbackAcerto: "🎉 f(0)=2 e f(1)=3, então os pontos são (0,2) e (1,3).",
        feedbackErro: "Calcule f(0) = 0+2 = 2 e f(1) = 1+2 = 3. Os pontos são (0,2) e (1,3).",
      },
      {
        pergunta: "Se a = 0 numa função f(x) = ax + b, o que acontece?",
        opcoes: ["A função vira constante: f(x) = b sempre", "A função fica crescente", "Não existe função"],
        correta: 0,
        feedbackAcerto: "🎉 Sem o termo ax, sobra só f(x) = b, um valor fixo para qualquer x — função constante.",
        feedbackErro: "Se a = 0, o termo ax desaparece e f(x) = b para qualquer x: é uma função constante, nem cresce nem decresce.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça às retas em casa",
    materiais: ["Papel quadriculado ou folha", "Caneta", "Régua"],
    passos: [
      "Escolha uma função afim, por exemplo f(x) = 2x − 1.",
      "Calcule f(0) e f(1) para achar dois pontos.",
      "Desenhe os eixos, marque os pontos e trace a reta com a régua.",
      "Diga para a família se a reta é crescente ou decrescente e por quê.",
    ],
    registro: "📸 Foto do gráfico desenhado.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Arquiteto de Retas" },
};
