import type { AulaV4 } from "../../types";

/**
 * Aula 03 · U3 — Raiz (zero) da função afim e leitura de gráficos reais.
 * EF09MA06, EF09MA07
 */
export const aula03_zeroEGraficos: AulaV4 = {
  slug: "u3-03-zero-e-graficos",
  titulo: "O Ponto Onde Tudo Zera",
  iconeTrilha: "📉",
  bncc: ["EF09MA06", "EF09MA07"],
  duracaoMin: 30,
  metodologias: ["vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "Quando o gráfico toca o chão",
    historia:
      "{NOME}, imagine o tanque de um carro esvaziando enquanto ele roda. Existe um momento exato em que o tanque chega a ZERO. No gráfico da função, esse instante é o ponto onde a reta CORTA o eixo x. Hoje você aprende a encontrar esse ponto — a RAIZ da função — e a ler gráficos de situações reais como um verdadeiro detetive de números.",
  },

  momento02_exploracao: {
    instrucao: "Veja o gráfico de uma corrida de táxi: f(x) = 5x − 10, onde x é o km rodado e f(x) é o lucro (em reais) depois de pagar o custo fixo.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Lucro do táxi: f(x) = 5x − 10",
        cabecalhos: ["km rodado", "lucro (R$)"],
        linhas: [
          { rotulo: "1", valores: [0, -10] },
          { rotulo: "2", valores: [1, -5] },
          { rotulo: "3", valores: [2, 0] },
          { rotulo: "4", valores: [3, 5] },
          { rotulo: "5", valores: [4, 10] },
        ],
      },
      {
        tipo: "graficoBarras",
        titulo: "Lucro conforme os km rodados",
        barras: [
          { rotulo: "0 km", valor: -10 },
          { rotulo: "1 km", valor: -5 },
          { rotulo: "2 km", valor: 0 },
          { rotulo: "3 km", valor: 5 },
          { rotulo: "4 km", valor: 10 },
        ],
        destaqueMaior: false,
      },
      {
        tipo: "texto",
        texto: "🔑 Em x = 2 km, o lucro é ZERO — é aí que o gráfico cruza o eixo x. Antes disso o motorista tem prejuízo; depois, lucro.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Em que valor de x o lucro f(x) = 5x − 10 vale exatamente zero?",
    pista: "Iguale a lei de formação a zero: 5x − 10 = 0. Isole o x.",
    revelacao: "A RAIZ (ou ZERO) da função é o valor de x que faz f(x) = 0. Para achar, resolvemos a equação f(x) = 0. Aqui: 5x − 10 = 0 → x = 2. Esse é o ponto onde o gráfico corta o eixo x.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Raiz de f(x) = 5x − 10",
      passos: [
        { expr: "5x − 10 = 0", explica: "Igualo f(x) a zero.", status: "neutro" },
        { expr: "5x = 10", explica: "Passo −10 somando dos dois lados.", status: "ok" },
        { expr: "x = 10 ÷ 5", explica: "Isolo x dividindo por 5.", status: "ok" },
        { expr: "x = 2", explica: "Raiz encontrada.", status: "ok", professor: "No gráfico, o ponto (2, 0) é exatamente onde a reta cruza o eixo x — por isso a raiz também é chamada de 'zero da função'." },
      ],
      fatorada: "raiz: x = 2",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Raiz da função e leitura de gráficos",
    etapas: [
      {
        texto:
          "A RAIZ (ou ZERO) de uma função afim f(x) = ax + b é o valor de x tal que f(x) = 0. Geometricamente, é o ponto onde a reta do gráfico cruza o eixo x (o eixo horizontal). Para calcular, resolvemos a equação ax + b = 0.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Encontre a raiz de f(x) = 2x − 8.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Raiz de f(x) = 2x − 8",
            passos: [
              { expr: "2x − 8 = 0", explica: "Igualo a zero.", status: "neutro" },
              { expr: "2x = 8", explica: "Somo 8 dos dois lados.", status: "ok" },
              { expr: "x = 4", explica: "Divido por 2.", status: "ok" },
            ],
            fatorada: "raiz: x = 4",
          },
          destaque: "O gráfico de f(x) = 2x − 8 cruza o eixo x no ponto (4, 0).",
        },
      },
      {
        texto:
          "Num gráfico de situação real, o eixo x costuma representar TEMPO ou QUANTIDADE, e o eixo y representa o valor que muda (dinheiro, volume, distância). A raiz mostra o exato momento em que essa grandeza chega a zero.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Um tanque tem 40 litros e esvazia 8 litros por minuto: f(x) = 40 − 8x, onde x é o tempo em minutos.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Quando o tanque esvazia: f(x) = 40 − 8x",
            passos: [
              { expr: "40 − 8x = 0", explica: "Igualo o volume a zero.", status: "neutro" },
              { expr: "40 = 8x", explica: "Passo 8x para o outro lado.", status: "ok" },
              { expr: "x = 5", explica: "Divido 40 por 8.", status: "ok", professor: "Em 5 minutos, o tanque fica vazio — é a raiz da função, e no gráfico é o ponto onde a reta toca o eixo x." },
            ],
            fatorada: "raiz: x = 5 min",
          },
          destaque: "Depois de 5 minutos o tanque está vazio (f(x) não pode ser negativo aqui).",
        },
      },
      {
        texto:
          "Para LER um gráfico de reta, observe: onde ela cruza o eixo y (valor inicial, quando x = 0), se ela SOBE (a > 0, cresce) ou DESCE (a < 0, decresce), e onde ela cruza o eixo x (a raiz).",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Conta de luz: f(x) = 0,80x + 20, onde x é o número de kWh consumidos.",
          visualMat: {
            tipo: "tabela",
            titulo: "Conta de luz: f(x) = 0,80x + 20",
            cabecalhos: ["kWh", "conta (R$)"],
            linhas: [
              { rotulo: "1", valores: [0, 20] },
              { rotulo: "2", valores: [50, 60] },
              { rotulo: "3", valores: [100, 100] },
            ],
          },
          destaque: "Em x = 0, a conta já começa em R$20 (taxa fixa); como a > 0, quanto mais kWh, mais cara a conta.",
        },
      },
      {
        texto:
          "Quando a função representa algo que não pode ser negativo (como litros de água ou km rodados), a raiz marca o LIMITE da situação real: antes dela, positivo; depois, o modelo perde o sentido (ou muda de comportamento).",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "No táxi f(x) = 5x − 10, o motorista teve prejuízo até x = 2 km e lucro depois.",
          visualMat: {
            tipo: "retaNumerica",
            min: -10,
            max: 10,
            passo: 5,
            destacar: [{ valor: 0, cor: "#10b981", rotulo: "lucro zero em x=2" }],
            legenda: "Antes da raiz: prejuízo. Depois: lucro.",
          },
          destaque: "A raiz separa a região negativa da positiva no gráfico.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: encontre a raiz de f(x) = 3x − 15.",
    resposta: "x = 5",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Raiz de f(x) = 3x − 15",
      passos: [
        { expr: "3x − 15 = 0", explica: "Igualo f(x) a zero.", status: "neutro" },
        { expr: "3x = 15", explica: "Somo 15 dos dois lados.", status: "ok" },
        { expr: "x = 5", explica: "Divido por 3.", status: "ok", professor: "Verificação: f(5) = 3·5 − 15 = 15 − 15 = 0. Confirma que x=5 é a raiz." },
      ],
      fatorada: "raiz: x = 5",
      legenda: "Brilha resolve",
    },
    passos: [
      "Pego a lei de formação e igualo a zero: ax + b = 0.",
      "Isolo o termo com x, passando b para o outro lado.",
      "Divido pelo coeficiente a para achar x.",
      "Confiro substituindo o x encontrado de volta na função.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: qual é a raiz de f(x) = 4x − 20?",
    dica: "Iguale a zero: 4x − 20 = 0. Some 20 e depois divida por 4.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Raiz de f(x) = 4x − 20",
      passos: [
        { expr: "4x − 20 = 0", explica: "Igualo a zero.", status: "neutro" },
        { expr: "4x = 20", explica: "Somo 20 dos dois lados.", status: "ok" },
        { expr: "x = 5", explica: "Divido por 4.", status: "ok" },
      ],
      fatorada: "raiz: x = 5",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha a raiz de f(x) = 4x − 20:",
      opcoes: [{ nome: "x = 5" }, { nome: "x = 4" }, { nome: "x = 20" }],
      respostaCerta: "x = 5",
      feedbackAcerto: "🎯 4x = 20, então x = 20 ÷ 4 = 5.",
      feedbackErro: "Passe −20 somando: 4x = 20. Depois divida por 4: x = 5.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: qual é a raiz de f(x) = 6x − 18?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Raiz de f(x) = 6x − 18",
      passos: [
        { expr: "6x − 18 = 0", explica: "Igualo a zero.", status: "neutro" },
        { expr: "6x = 18", explica: "Somo 18 dos dois lados.", status: "ok" },
        { expr: "x = 3", explica: "Divido por 6.", status: "ok" },
      ],
      fatorada: "raiz: x = 3",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha a raiz de f(x) = 6x − 18:",
      opcoes: [{ nome: "x = 3" }, { nome: "x = 6" }, { nome: "x = 18" }],
      respostaCerta: "x = 3",
      feedbackAcerto: "🎯 6x = 18, então x = 18 ÷ 6 = 3.",
      feedbackErro: "Some 18 dos dois lados: 6x = 18. Depois divida por 6: x = 3.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Um tanque de gasolina tem 60 litros e o carro consome 12 litros a cada hora rodando: f(x) = 60 − 12x, onde x é o tempo em horas.",
    problema: "Depois de quantas horas o tanque estará completamente vazio?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Raiz de f(x) = 60 − 12x",
      passos: [
        { expr: "60 − 12x = 0", explica: "Igualo o volume a zero.", status: "neutro" },
        { expr: "60 = 12x", explica: "Passo 12x para o outro lado.", status: "ok" },
        { expr: "x = 5", explica: "Divido 60 por 12.", status: "ok", professor: "Depois de 5 horas, o tanque chega a zero litro — é a raiz da função representando o esvaziamento." },
      ],
      fatorada: "raiz: x = 5 h",
      legenda: "Aplicação — tanque de gasolina",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Em quantas horas o tanque fica vazio?",
      opcoes: [{ nome: "5 horas" }, { nome: "12 horas" }, { nome: "60 horas" }],
      respostaCerta: "5 horas",
      feedbackAcerto: "🎯 60 ÷ 12 = 5. Em 5 horas o tanque chega a zero litro.",
      feedbackErro: "Iguale a zero: 60 − 12x = 0 → 60 = 12x → x = 60 ÷ 12 = 5 horas.",
    },
  },

  momento09_revisao: {
    pontos: [
      "A raiz (ou zero) da função é o valor de x que faz f(x) = 0.",
      "No gráfico, a raiz é o ponto onde a reta cruza o eixo x.",
      "Para achar a raiz de f(x) = ax + b, resolvemos ax + b = 0.",
      "Em situações reais, a raiz marca o exato momento em que algo chega a zero.",
      "Ler um gráfico envolve observar onde ele cruza os eixos e se ele sobe ou desce.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual é a raiz de f(x) = 2x − 6?",
        opcoes: ["x = 3", "x = 2", "x = 6"],
        correta: 0,
        feedbackAcerto: "🎉 2x − 6 = 0 → 2x = 6 → x = 3.",
        feedbackErro: "Iguale a zero: 2x − 6 = 0. Some 6: 2x = 6. Divida por 2: x = 3.",
      },
      {
        pergunta: "No gráfico de uma função afim, a raiz é o ponto onde a reta:",
        opcoes: ["Cruza o eixo x", "Cruza o eixo y", "Passa pela origem sempre"],
        correta: 0,
        feedbackAcerto: "🎉 A raiz é exatamente onde f(x) = 0, ou seja, onde a reta toca o eixo horizontal (eixo x).",
        feedbackErro: "A raiz é onde f(x) = 0. No gráfico, isso acontece quando a reta cruza o eixo x (horizontal), não o eixo y.",
      },
      {
        pergunta: "Uma piscina com 30 mil litros esvazia 5 mil litros por hora: f(x) = 30 − 5x (em milhares). Quando ela fica vazia?",
        opcoes: ["x = 6 horas", "x = 5 horas", "x = 30 horas"],
        correta: 0,
        feedbackAcerto: "🎉 30 − 5x = 0 → 30 = 5x → x = 6 horas.",
        feedbackErro: "Iguale a zero: 30 − 5x = 0 → 5x = 30 → x = 30 ÷ 5 = 6 horas.",
      },
      {
        pergunta: "Uma corrida de táxi tem lucro f(x) = 4x − 12. Para x menor que a raiz, o lucro é:",
        opcoes: ["Negativo (prejuízo)", "Positivo (lucro)", "Sempre zero"],
        correta: 0,
        feedbackAcerto: "🎉 A raiz é x=3. Para x < 3, o valor de f(x) ainda é negativo — prejuízo.",
        feedbackErro: "A raiz de f(x)=4x−12 é x=3. Antes dela (x<3), f(x) é negativo: ainda há prejuízo.",
      },
      {
        pergunta: "Qual é a raiz de f(x) = −2x + 8?",
        opcoes: ["x = 4", "x = −4", "x = 2"],
        correta: 0,
        feedbackAcerto: "🎉 −2x + 8 = 0 → −2x = −8 → x = 4.",
        feedbackErro: "Iguale a zero: −2x + 8 = 0 → −2x = −8 → x = (−8) ÷ (−2) = 4.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Detetive dos gráficos em casa",
    materiais: ["Papel", "Caneta", "Conta de luz ou água da família (opcional)"],
    passos: [
      "Escolha uma situação real da sua casa que muda com o tempo (água de uma caixa, saldo de recarga de celular, etc).",
      "Escreva uma lei de formação simples do tipo f(x) = ax + b para essa situação.",
      "Calcule a raiz dessa função e explique o que ela significa na vida real.",
    ],
    registro: "📸 Foto ou desenho do gráfico com a raiz marcada.",
  },
  recompensa: { xp: 210, moedas: 100, medalha: "Detetive das Raízes" },
};
