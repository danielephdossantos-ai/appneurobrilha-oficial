import type { AulaV4 } from "../../types";

/**
 * Aula 05 · U3 — Missão de modelagem: comparar planos (afim) e lucro máximo (quadrática).
 * EF09MA06, EF09MA07, EF09MA08
 */
export const aula05_missaoModelagem: AulaV4 = {
  slug: "u3-05-missao-modelagem",
  titulo: "Missão: O Melhor Plano e o Lucro Máximo",
  iconeTrilha: "🚀",
  bncc: ["EF09MA06", "EF09MA07", "EF09MA08"],
  duracaoMin: 35,
  metodologias: ["vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "Você é o consultor de decisões",
    historia:
      "{NOME}, sua missão hoje é dupla: primeiro, ajudar uma família a escolher entre dois planos de internet usando funções afins. Depois, ajudar uma empresa a descobrir o PREÇO IDEAL para vender o máximo de lucro, usando uma função quadrática. Você vai usar tudo o que aprendeu sobre funções para tomar decisões reais — como um verdadeiro consultor matemático!",
  },

  momento02_exploracao: {
    instrucao: "Veja dois planos de internet: Plano A cobra taxa fixa de R$50 + R$0,20 por minuto de uso extra; Plano B cobra só R$0,40 por minuto, sem taxa fixa.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Plano A: f(x) = 50 + 0,20x  |  Plano B: g(x) = 0,40x",
        cabecalhos: ["minutos (x)", "Plano A (R$)", "Plano B (R$)"],
        linhas: [
          { rotulo: "1", valores: [0, 50, 0] },
          { rotulo: "2", valores: [100, 70, 40] },
          { rotulo: "3", valores: [250, 100, 100] },
          { rotulo: "4", valores: [400, 130, 160] },
        ],
      },
      {
        tipo: "graficoBarras",
        titulo: "Custo do Plano A conforme os minutos",
        barras: [
          { rotulo: "0 min", valor: 50 },
          { rotulo: "100 min", valor: 70 },
          { rotulo: "250 min", valor: 100 },
          { rotulo: "400 min", valor: 130 },
        ],
        destaqueMaior: false,
      },
      {
        tipo: "texto",
        texto: "🔑 Em 250 minutos, os dois planos custam exatamente R$100! Antes disso, o Plano B é mais barato; depois, o Plano A vence.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Em quantos minutos os dois planos custam exatamente o mesmo valor?",
    pista: "Iguale as duas funções: 50 + 0,20x = 0,40x. Resolva a equação para achar x.",
    revelacao: "Para comparar dois planos, igualamos f(x) = g(x) e resolvemos a equação. Aqui: 50 + 0,20x = 0,40x → 50 = 0,20x → x = 250 minutos. Esse é o PONTO DE EQUILÍBRIO entre os dois planos.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Igualando os planos: 50 + 0,20x = 0,40x",
      passos: [
        { expr: "50 + 0,20x = 0,40x", explica: "Igualo as duas funções.", status: "neutro" },
        { expr: "50 = 0,40x − 0,20x", explica: "Passo 0,20x para o outro lado.", status: "ok" },
        { expr: "50 = 0,20x", explica: "Simplifico.", status: "ok" },
        { expr: "x = 250", explica: "Divido 50 por 0,20.", status: "ok", professor: "Com menos de 250 minutos, o Plano B (sem taxa fixa) é mais barato. Com mais de 250 minutos, o Plano A (com taxa fixa menor por minuto) compensa mais." },
      ],
      fatorada: "ponto de equilíbrio: x = 250 min",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Comparando planos e maximizando lucro",
    etapas: [
      {
        texto:
          "Para comparar DOIS PLANOS (duas funções afins), igualamos as leis de formação: f(x) = g(x). O valor de x encontrado é o PONTO DE EQUILÍBRIO — antes dele um plano é mais barato, depois dele o outro passa a valer mais a pena.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Plano C: f(x) = 30 + 0,5x. Plano D: g(x) = 0,8x. Quando eles se igualam?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "30 + 0,5x = 0,8x",
            passos: [
              { expr: "30 + 0,5x = 0,8x", explica: "Igualo as funções.", status: "neutro" },
              { expr: "30 = 0,3x", explica: "Passo 0,5x para o outro lado.", status: "ok" },
              { expr: "x = 100", explica: "Divido 30 por 0,3.", status: "ok" },
            ],
            fatorada: "equilíbrio: x = 100",
          },
          destaque: "Com menos de 100 minutos, o Plano D é mais barato; com mais, o Plano C vence.",
        },
      },
      {
        texto:
          "Depois de achar o ponto de equilíbrio, testamos um valor de x MENOR e um MAIOR nas duas funções para confirmar qual plano é mais barato em cada faixa.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Testando x = 50 min nos planos A e B: f(50)=50+0,20·50=60 e g(50)=0,40·50=20.",
          visualMat: {
            tipo: "tabela",
            titulo: "Teste em x = 50 minutos",
            cabecalhos: ["Plano", "custo (R$)"],
            linhas: [
              { rotulo: "1", valores: ["Plano A", 60] },
              { rotulo: "2", valores: ["Plano B", 20] },
            ],
          },
          destaque: "Com 50 minutos, o Plano B (R$20) é bem mais barato que o Plano A (R$60).",
        },
      },
      {
        texto:
          "Numa função quadrática de LUCRO, L(x) = ax² + bx + c com a < 0, o VÉRTICE dá o lucro MÁXIMO. Calculamos xv = −b/2a (quantidade que gera o maior lucro) e yv = −Δ/4a (o valor do lucro máximo).",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Uma loja tem lucro L(x) = −x² + 20x − 51, onde x é o preço do produto acima de um valor base.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Lucro máximo de L(x) = −x² + 20x − 51",
            passos: [
              { expr: "a=−1, b=20, c=−51", explica: "Identifico coeficientes.", status: "neutro" },
              { expr: "xv = −20 / (2·(−1)) = 10", explica: "Calculo xv = −b/2a.", status: "ok" },
              { expr: "Δ = 400 − 204 = 196", explica: "Calculo Δ = b² − 4ac.", status: "ok" },
              { expr: "yv = −196 / (−4) = 49", explica: "Calculo yv = −Δ/4a.", status: "ok", professor: "O lucro máximo é R$49, atingido quando x=10. Como a<0, esse é o ponto mais alto da parábola do lucro." },
            ],
            fatorada: "lucro máximo: R$ 49",
          },
          destaque: "O maior lucro possível é R$49, quando x=10.",
        },
      },
      {
        texto:
          "A MODELAGEM MATEMÁTICA é o processo de transformar uma situação real numa função (afim ou quadrática) e usar as ferramentas que aprendemos — igualar funções, achar raízes, achar vértice — para tomar a MELHOR DECISÃO possível.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Resumo do processo de modelagem: 1) escrever a função; 2) usar a ferramenta certa (igualar, raiz ou vértice); 3) interpretar o resultado na vida real.",
          visualMat: {
            tipo: "tabela",
            titulo: "Resumo das ferramentas",
            cabecalhos: ["Situação", "Ferramenta"],
            linhas: [
              { rotulo: "1", valores: ["Comparar 2 planos", "Igualar f(x) = g(x)"] },
              { rotulo: "2", valores: ["Quando algo chega a zero", "Achar a raiz"] },
              { rotulo: "3", valores: ["Lucro/altura máxima", "Achar o vértice"] },
            ],
          },
          destaque: "Cada situação real pede uma ferramenta matemática diferente.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: Plano E: f(x) = 40 + 0,3x. Plano F: g(x) = 0,7x. Encontre o ponto de equilíbrio.",
    resposta: "x = 100 minutos",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "40 + 0,3x = 0,7x",
      passos: [
        { expr: "40 + 0,3x = 0,7x", explica: "Igualo as duas funções.", status: "neutro" },
        { expr: "40 = 0,7x − 0,3x", explica: "Passo 0,3x para o outro lado.", status: "ok" },
        { expr: "40 = 0,4x", explica: "Simplifico.", status: "ok" },
        { expr: "x = 100", explica: "Divido 40 por 0,4.", status: "ok", professor: "Com menos de 100 minutos, o Plano F é mais barato; com mais, o Plano E compensa." },
      ],
      fatorada: "equilíbrio: x = 100 min",
      legenda: "Brilha resolve",
    },
    passos: [
      "Escrevo as duas leis de formação dos planos.",
      "Igualo as duas funções: f(x) = g(x).",
      "Resolvo a equação isolando x.",
      "Interpreto: antes do x encontrado, um plano vence; depois, o outro.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: Plano G: f(x) = 60 + 0,1x. Plano H: g(x) = 0,3x. Qual é o ponto de equilíbrio?",
    dica: "Iguale as funções: 60 + 0,1x = 0,3x. Isole x passando 0,1x para o outro lado.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "60 + 0,1x = 0,3x",
      passos: [
        { expr: "60 + 0,1x = 0,3x", explica: "Igualo as funções.", status: "neutro" },
        { expr: "60 = 0,2x", explica: "Passo 0,1x para o outro lado.", status: "ok" },
        { expr: "x = 300", explica: "Divido 60 por 0,2.", status: "ok" },
      ],
      fatorada: "equilíbrio: x = 300 min",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o ponto de equilíbrio entre os planos G e H:",
      opcoes: [{ nome: "300 minutos" }, { nome: "60 minutos" }, { nome: "200 minutos" }],
      respostaCerta: "300 minutos",
      feedbackAcerto: "🎯 60 = 0,3x − 0,1x = 0,2x, então x = 60 ÷ 0,2 = 300.",
      feedbackErro: "Iguale: 60 + 0,1x = 0,3x → 60 = 0,2x → x = 60 ÷ 0,2 = 300 minutos.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: uma empresa tem lucro L(x) = −x² + 12x − 20. Qual é o lucro máximo?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Lucro máximo de L(x) = −x² + 12x − 20",
      passos: [
        { expr: "xv = −12 / (2·(−1)) = 6", explica: "Calculo xv = −b/2a.", status: "neutro" },
        { expr: "Δ = 144 − 80 = 64", explica: "Calculo Δ = b² − 4ac.", status: "ok" },
        { expr: "yv = −64 / (−4) = 16", explica: "Calculo yv = −Δ/4a.", status: "ok" },
      ],
      fatorada: "lucro máximo: R$ 16",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o lucro máximo:",
      opcoes: [{ nome: "R$ 16" }, { nome: "R$ 12" }, { nome: "R$ 6" }],
      respostaCerta: "R$ 16",
      feedbackAcerto: "🎯 xv=6, Δ=64, yv=−64/−4=16 reais de lucro máximo.",
      feedbackErro: "Calcule xv=−b/2a=6. Depois Δ=144−80=64, e yv=−Δ/4a=−64/−4=16.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Uma fábrica de camisetas tem lucro modelado por L(x) = −2x² + 80x − 600, onde x é o preço de venda de cada camiseta (em reais acima do custo).",
    problema: "Qual preço x gera o lucro máximo, e qual é esse lucro máximo?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Lucro máximo de L(x) = −2x² + 80x − 600",
      passos: [
        { expr: "a=−2, b=80, c=−600", explica: "Identifico os coeficientes.", status: "neutro" },
        { expr: "xv = −80 / (2·(−2)) = 20", explica: "Calculo xv = −b/2a.", status: "ok" },
        { expr: "Δ = 6400 − 4800 = 1600", explica: "Calculo Δ = b² − 4ac.", status: "ok" },
        { expr: "yv = −1600 / (−8) = 200", explica: "Calculo yv = −Δ/4a.", status: "ok", professor: "Com preço adicional de R$20, a fábrica atinge o lucro máximo de R$200 — nem preço muito baixo (poucas vendas) nem muito alto (poucos compradores) é o ideal." },
      ],
      fatorada: "preço ideal: x=20; lucro máximo: R$ 200",
      legenda: "Aplicação — fábrica de camisetas",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o lucro máximo da fábrica?",
      opcoes: [{ nome: "R$ 200" }, { nome: "R$ 80" }, { nome: "R$ 20" }],
      respostaCerta: "R$ 200",
      feedbackAcerto: "🎯 xv=20, Δ=1600, yv=−1600/−8=200 reais de lucro máximo.",
      feedbackErro: "Calcule xv=−b/2a=20. Depois Δ=1600, e yv=−Δ/4a=−1600/−8=200.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Para comparar dois planos, igualamos as funções: f(x) = g(x).",
      "O x encontrado é o ponto de equilíbrio, onde os dois valores se igualam.",
      "Numa função de lucro L(x)=ax²+bx+c com a<0, o vértice dá o lucro máximo.",
      "xv = −b/2a é a quantidade/preço ideal; yv = −Δ/4a é o valor máximo (ou mínimo).",
      "Modelar é transformar uma situação real numa função e usar a ferramenta certa para decidir.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Para comparar dois planos com funções f(x) e g(x), o que fazemos primeiro?",
        opcoes: ["Igualamos f(x) = g(x)", "Somamos f(x) + g(x)", "Multiplicamos f(x) por g(x)"],
        correta: 0,
        feedbackAcerto: "🎉 Igualar as duas funções encontra o ponto onde os planos custam o mesmo.",
        feedbackErro: "Para comparar planos, igualamos as funções: f(x) = g(x), e resolvemos para x.",
      },
      {
        pergunta: "Plano X: f(x) = 20 + 0,5x. Plano Y: g(x) = x. Em qual x eles se igualam?",
        opcoes: ["x = 40", "x = 20", "x = 10"],
        correta: 0,
        feedbackAcerto: "🎉 20 + 0,5x = x → 20 = 0,5x → x = 40.",
        feedbackErro: "Iguale: 20 + 0,5x = x → 20 = x − 0,5x = 0,5x → x = 40.",
      },
      {
        pergunta: "Numa função de lucro L(x) = ax² + bx + c com a < 0, o vértice representa:",
        opcoes: ["O lucro máximo", "O lucro mínimo", "O prejuízo total"],
        correta: 0,
        feedbackAcerto: "🎉 Com a<0, a parábola abre para baixo, e o vértice é o ponto mais alto — o lucro máximo.",
        feedbackErro: "Quando a < 0, a parábola tem concavidade para baixo, então o vértice é o ponto de LUCRO MÁXIMO.",
      },
      {
        pergunta: "Se L(x) = −x² + 8x, qual é o valor de x que dá o lucro máximo?",
        opcoes: ["x = 4", "x = 8", "x = 2"],
        correta: 0,
        feedbackAcerto: "🎉 xv = −b/2a = −8/(2·(−1)) = 4.",
        feedbackErro: "Use xv = −b/2a = −8 / (2·(−1)) = −8/−2 = 4.",
      },
      {
        pergunta: "Com o lucro L(x) = −x² + 8x, qual é o lucro máximo (yv)?",
        opcoes: ["16", "8", "4"],
        correta: 0,
        feedbackAcerto: "🎉 Δ = 64 − 0 = 64; yv = −64 / (4·(−1)) = 16.",
        feedbackErro: "Calcule Δ = b²−4ac = 64. Depois yv = −Δ/4a = −64/−4 = 16.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Consultor de planos em família",
    materiais: ["Papel", "Caneta", "Contas de planos reais da família (celular, internet, energia)"],
    passos: [
      "Escolha dois planos reais que sua família conhece (celular, streaming, energia).",
      "Escreva a lei de formação de cada plano como função afim.",
      "Encontre o ponto de equilíbrio e diga qual plano é melhor para o uso da sua família.",
    ],
    registro: "📸 Foto da comparação escrita entre os dois planos.",
  },
  recompensa: { xp: 250, moedas: 130, medalha: "Consultor Matemático" },
};
