import type { AulaV4 } from "../../types";

/**
 * Aula 01 · U3 — A ideia de função: a máquina que transforma.
 * EF09MA06
 */
export const aula01_ideiaDeFuncao: AulaV4 = {
  slug: "u3-01-ideia-de-funcao",
  titulo: "A Máquina que Transforma",
  iconeTrilha: "⚙️",
  bncc: ["EF09MA06"],
  duracaoMin: 30,
  metodologias: ["vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "Toda máquina tem uma regra",
    historia:
      "{NOME}, imagine uma máquina mágica: você coloca um número lá dentro, ela aplica sempre a MESMA regra, e devolve outro número. Isso é uma FUNÇÃO. Hoje você vira o engenheiro dessa máquina e descobre a regra escondida (a lei de formação) só olhando o que entra e o que sai.",
  },

  momento02_exploracao: {
    instrucao: "Veja o que a máquina faz: ela dobra o número e soma 1.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Máquina: f(x) = 2x + 1",
        cabecalhos: ["x (entra)", "f(x) (sai)"],
        linhas: [
          { rotulo: "1", valores: [0, 1] },
          { rotulo: "2", valores: [1, 3] },
          { rotulo: "3", valores: [2, 5] },
          { rotulo: "4", valores: [3, 7] },
          { rotulo: "5", valores: [4, 9] },
        ],
      },
      {
        tipo: "graficoBarras",
        titulo: "Saídas da máquina f(x) = 2x + 1",
        barras: [
          { rotulo: "x=0", valor: 1 },
          { rotulo: "x=1", valor: 3 },
          { rotulo: "x=2", valor: 5 },
          { rotulo: "x=3", valor: 7 },
          { rotulo: "x=4", valor: 9 },
        ],
        destaqueMaior: false,
      },
      {
        tipo: "texto",
        texto: "🔑 Cada x entra e vira UM ÚNICO f(x). Nunca dois resultados para o mesmo x — isso é o que faz ser função.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Olhando a tabela, qual é a regra que liga x a f(x)?",
    pista: "Compare x=0 com f(x)=1, depois x=1 com f(x)=3. O que você faz com x para chegar em f(x)?",
    revelacao: "A regra é: multiplica x por 2 e soma 1. Por isso escrevemos f(x) = 2x + 1 — a LEI DE FORMAÇÃO da função.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Descobrindo a lei a partir da tabela",
      passos: [
        { expr: "x = 0 → f(x) = 1", explica: "0 · 2 + 1 = 1", status: "ok" },
        { expr: "x = 1 → f(x) = 3", explica: "1 · 2 + 1 = 3", status: "ok" },
        { expr: "x = 2 → f(x) = 5", explica: "2 · 2 + 1 = 5", status: "ok", professor: "Sempre que x aumenta 1, f(x) aumenta 2 — isso mostra que o padrão é 'multiplicar por 2' escondido dentro da regra." },
        { expr: "Padrão: f(x) = 2x + 1", explica: "Regra confirmada nas 3 linhas.", status: "ok" },
      ],
      fatorada: "f(x) = 2x + 1",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Função: entrada, regra e saída",
    etapas: [
      {
        texto:
          "Numa função, x é a VARIÁVEL INDEPENDENTE (você escolhe o valor que entra) e f(x), também chamada de y, é a VARIÁVEL DEPENDENTE (o resultado depende do x escolhido). Cada x tem exatamente UM f(x) correspondente.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Na máquina f(x) = 2x + 1, escolho x = 3.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "f(3), com f(x) = 2x + 1",
            passos: [
              { expr: "f(3) = 2 · 3 + 1", explica: "Substituo x por 3.", status: "neutro", professor: "x = 3 é a entrada, escolhida por mim. f(3) é a saída, que depende do que eu escolhi." },
              { expr: "= 6 + 1", explica: "Multiplico primeiro.", status: "ok" },
              { expr: "= 7", explica: "Somo por último.", status: "ok" },
            ],
            fatorada: "f(3) = 7",
          },
          destaque: "x é o que eu escolho; f(x) é o que a função devolve.",
        },
      },
      {
        texto:
          "A LEI DE FORMAÇÃO é a fórmula geral que descreve a máquina para QUALQUER x, como f(x) = 3x − 1. Para achar um valor de saída, é só trocar x pelo número escolhido e resolver a conta.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Na função f(x) = 3x − 1, calcule f(2).",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "f(2), com f(x) = 3x − 1",
            passos: [
              { expr: "f(2) = 3 · 2 − 1", explica: "Substituo x = 2.", status: "neutro" },
              { expr: "= 6 − 1", explica: "Multiplico primeiro.", status: "ok" },
              { expr: "= 5", explica: "Subtraio por último.", status: "ok", professor: "Ordem das operações: sempre multiplicação/divisão antes de soma/subtração, mesmo dentro de uma função." },
            ],
            fatorada: "f(2) = 5",
          },
          destaque: "Trocar x pelo número e seguir a ordem das operações.",
        },
      },
      {
        texto:
          "A TABELA DE VALORES organiza vários pares (x, f(x)) de uma vez, repetindo a mesma lei de formação para cada x escolhido.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Tabela de f(x) = 3x − 1 para x = 0, 1, 2, 3.",
          visualMat: {
            tipo: "tabela",
            titulo: "f(x) = 3x − 1",
            cabecalhos: ["x", "f(x)"],
            linhas: [
              { rotulo: "1", valores: [0, -1] },
              { rotulo: "2", valores: [1, 2] },
              { rotulo: "3", valores: [2, 5] },
              { rotulo: "4", valores: [3, 8] },
            ],
          },
          destaque: "Cada linha é: substitua x, resolva, anote f(x).",
        },
      },
      {
        texto:
          "Cada par (x, f(x)) vira um PONTO no plano cartesiano: x indica a posição na horizontal, f(x) na vertical. Marcando vários pontos da tabela, eles desenham o gráfico da função.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Pontos de f(x) = x + 1: (0,1), (1,2), (2,3), (3,4).",
          visualMat: {
            tipo: "mapaGrade",
            linhas: 5,
            colunas: 5,
            pinos: [
              { linha: 2, coluna: 1, rotulo: "(0,1)" },
              { linha: 3, coluna: 2, rotulo: "(1,2)" },
              { linha: 4, coluna: 3, rotulo: "(2,3)" },
              { linha: 5, coluna: 4, rotulo: "(3,4)" },
            ],
            destaque: { linha: 3, coluna: 2 },
            legenda: "Cada pino é um par (x, f(x))",
          },
          destaque: "Quanto mais pontos, mais nítido fica o desenho da função.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: construa a tabela de f(x) = 3x − 1 para x = 0, 1, 2, 3 e conte a lógica em voz alta.",
    resposta: "f(0)=−1, f(1)=2, f(2)=5, f(3)=8",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Tabela de f(x) = 3x − 1",
      passos: [
        { expr: "f(0) = 3·0 − 1 = −1", explica: "Substituo x = 0.", status: "ok" },
        { expr: "f(1) = 3·1 − 1 = 2", explica: "Substituo x = 1.", status: "ok" },
        { expr: "f(2) = 3·2 − 1 = 5", explica: "Substituo x = 2.", status: "ok" },
        { expr: "f(3) = 3·3 − 1 = 8", explica: "Substituo x = 3.", status: "ok", professor: "Repito a MESMA lei de formação para cada x — é isso que garante que é uma função e não uma tabela aleatória." },
      ],
      fatorada: "(0,−1) (1,2) (2,5) (3,8)",
      legenda: "Brilha resolve",
    },
    passos: [
      "Pego a lei de formação f(x) = 3x − 1.",
      "Substituo x por cada valor pedido, um de cada vez.",
      "Resolvo a conta respeitando a ordem das operações.",
      "Organizo os resultados em pares (x, f(x)).",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: na função f(x) = 3x − 1, quanto vale f(4)?",
    dica: "Troque x por 4 na lei de formação e resolva: multiplicação primeiro, depois subtração.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "f(4), com f(x) = 3x − 1",
      passos: [
        { expr: "f(4) = 3 · 4 − 1", explica: "Substituo x = 4.", status: "neutro" },
        { expr: "= 12 − 1", explica: "Multiplico primeiro.", status: "ok" },
        { expr: "= 11", explica: "Resultado final.", status: "ok" },
      ],
      fatorada: "f(4) = 11",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o valor de f(4):",
      opcoes: [{ nome: "11" }, { nome: "10" }, { nome: "12" }],
      respostaCerta: "11",
      feedbackAcerto: "🎯 3 · 4 = 12, depois 12 − 1 = 11.",
      feedbackErro: "Primeiro multiplique 3 · 4 = 12, só depois subtraia 1: 12 − 1 = 11.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: na função f(x) = 2x + 4, quanto vale f(5)?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "f(5), com f(x) = 2x + 4",
      passos: [
        { expr: "f(5) = 2 · 5 + 4", explica: "Substituo x = 5.", status: "neutro" },
        { expr: "= 10 + 4", explica: "Multiplico primeiro.", status: "ok" },
        { expr: "= 14", explica: "Resultado final.", status: "ok" },
      ],
      fatorada: "f(5) = 14",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o valor de f(5):",
      opcoes: [{ nome: "14" }, { nome: "10" }, { nome: "9" }],
      respostaCerta: "14",
      feedbackAcerto: "🎯 2 · 5 = 10, depois 10 + 4 = 14.",
      feedbackErro: "Substitua x por 5: 2 · 5 + 4 = 10 + 4 = 14.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Uma loja de figurinhas cobra uma taxa fixa de entrega de R$2 e R$4 por pacote comprado. O custo total é uma função do número de pacotes x.",
    problema: "Se a lei de formação é f(x) = 4x + 2, quanto custa comprar 5 pacotes?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "f(5), com f(x) = 4x + 2",
      passos: [
        { expr: "f(5) = 4 · 5 + 2", explica: "Substituo x = 5 pacotes.", status: "neutro", professor: "x é o número de pacotes (variável independente); f(x) é o custo total em reais (variável dependente)." },
        { expr: "= 20 + 2", explica: "Multiplico primeiro.", status: "ok" },
        { expr: "= 22", explica: "Somo a taxa fixa.", status: "ok" },
      ],
      fatorada: "f(5) = R$ 22",
      legenda: "Aplicação — compra de figurinhas",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quanto custam 5 pacotes?",
      opcoes: [{ nome: "R$ 22" }, { nome: "R$ 20" }, { nome: "R$ 26" }],
      respostaCerta: "R$ 22",
      feedbackAcerto: "🎯 4 · 5 = 20, mais a taxa fixa de R$2: total R$22.",
      feedbackErro: "Calcule 4 · 5 = 20 primeiro, depois some a taxa fixa de R$2: 20 + 2 = 22.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Função: cada x entra e vira exatamente UM f(x).",
      "x é a variável independente; f(x) é a variável dependente.",
      "A lei de formação é a fórmula, ex.: f(x) = 2x + 1.",
      "A tabela de valores repete a mesma lei para vários x.",
      "Cada par (x, f(x)) é um ponto no plano cartesiano.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Na função f(x) = 5x, quanto vale f(3)?",
        opcoes: ["15", "8", "53"],
        correta: 0,
        feedbackAcerto: "🎉 Substituindo x por 3: 5 · 3 = 15.",
        feedbackErro: "Substitua x por 3 na lei de formação: f(3) = 5 · 3 = 15.",
      },
      {
        pergunta: "Em f(x) = 2x + 7, qual variável é a INDEPENDENTE?",
        opcoes: ["x", "f(x)", "7"],
        correta: 0,
        feedbackAcerto: "🎉 x é escolhido livremente; f(x) depende do valor de x.",
        feedbackErro: "A variável independente é aquela que VOCÊ escolhe: é x. f(x) depende do valor escolhido para x.",
      },
      {
        pergunta: "Uma tabela mostra: x=0→f(x)=2; x=1→f(x)=5; x=2→f(x)=8. Qual é a lei de formação?",
        opcoes: ["f(x) = 3x + 2", "f(x) = 2x + 3", "f(x) = x + 2"],
        correta: 0,
        feedbackAcerto: "🎉 A cada +1 em x, f(x) sobe 3; e f(0)=2, então f(x) = 3x + 2.",
        feedbackErro: "Veja quanto f(x) aumenta a cada x: aumenta 3. E quando x=0, f(x)=2. Logo f(x) = 3x + 2.",
      },
      {
        pergunta: "O par (2, 9) de uma função significa que:",
        opcoes: ["f(2) = 9", "f(9) = 2", "x = 9 e f(x) = 2"],
        correta: 0,
        feedbackAcerto: "🎉 No par (x, f(x)), o primeiro número é a entrada e o segundo é a saída: f(2) = 9.",
        feedbackErro: "No par (x, f(x)), o primeiro é a entrada (x=2) e o segundo é a saída: f(2) = 9.",
      },
      {
        pergunta: "Pode uma função ter x=4 dando duas saídas diferentes, como f(4)=3 e f(4)=7?",
        opcoes: ["Não, cada x tem só um f(x)", "Sim, se a regra for diferente", "Sim, sempre pode"],
        correta: 0,
        feedbackAcerto: "🎉 Isso é a regra de ouro das funções: um mesmo x nunca pode ter duas saídas diferentes.",
        feedbackErro: "Não pode! A definição de função exige que cada x tenha EXATAMENTE um resultado f(x).",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Invente sua própria máquina de funções",
    materiais: ["Papel", "Caneta", "Calculadora (opcional)"],
    passos: [
      "Invente uma lei de formação, por exemplo f(x) = 5x − 3.",
      "Escolha 4 valores de x e monte uma tabela com os resultados f(x).",
      "Peça para alguém da família adivinhar sua regra só olhando a tabela.",
    ],
    registro: "📸 Foto da tabela criada.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Engenheiro das Funções" },
};
