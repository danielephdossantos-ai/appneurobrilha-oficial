import type { AulaV4 } from "../../types";

/** Aula 04 · U3 — Grandezas inversamente proporcionais. */
export const aula04_inversamente: AulaV4 = {
  slug: "u3-04-inversamente-proporcionais",
  titulo: "Regra de Três Inversa",
  iconeTrilha: "📉",
  bncc: ["EF07MA17"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Mais gente, menos tempo",
    historia:
      "{NOME}, se 1 pintor leva 12 dias para pintar uma casa, 2 pintores levam 24? Claro que não — levam 6. Aqui, quando uma grandeza aumenta, a outra DIMINUI. É a proporcionalidade inversa.",
  },

  momento02_exploracao: {
    instrucao: "Na inversa, o PRODUTO é constante — não o quociente.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Pintores × dias",
        cabecalhos: ["Pintores", "Dias", "Produto"],
        linhas: [
          { rotulo: "1", valores: [1, 12, 12] },
          { rotulo: "2", valores: [2, 6, 12] },
          { rotulo: "3", valores: [3, 4, 12] },
          { rotulo: "4", valores: [4, 3, 12] },
        ],
      },
      { tipo: "texto", texto: "🔑 Direta: y/x constante. Inversa: x·y constante. Sempre teste antes de montar a conta." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que na inversa a proporção fica de cabeça para baixo?",
    pista: "Se x·y é constante, então x₁·y₁ = x₂·y₂. Reescreva isso como uma proporção.",
    revelacao: "De x₁·y₁ = x₂·y₂ vem x₁/x₂ = y₂/y₁ — a segunda razão aparece INVERTIDA.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Por que inverter?",
      passos: [
        { expr: "Produto constante: x₁·y₁ = x₂·y₂", explica: "Característica da inversa.", status: "neutro", professor: "Na tabela, 1·12, 2·6, 3·4 e 4·3 dão sempre 12. Esse 12 é o total de trabalho: 12 dias-pintor." },
        { expr: "Divido os dois lados por x₂·y₁", explica: "Reorganizo.", status: "ok" },
        { expr: "x₁/x₂ = y₂/y₁", explica: "A segunda razão inverteu.", status: "ok" },
        { expr: "Exemplo: 3 pintores → 4 dias", explica: "3 · 4 = 12.", status: "ok" },
        { expr: "6 pintores → 12 ÷ 6 = 2 dias", explica: "Aplico o produto constante.", status: "ok", professor: "O caminho mais rápido em problemas de inversa é achar o produto constante e dividir." },
      ],
      fatorada: "x₁ · y₁ = x₂ · y₂",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Identificar e resolver",
    etapas: [
      {
        texto: "PRIMEIRO identifique o tipo. Pergunte: se uma grandeza aumenta, a outra aumenta ou diminui?",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Casos típicos",
          visualMat: {
            tipo: "tabela",
            titulo: "Direta ou inversa?",
            cabecalhos: ["Situação", "Tipo", "Por quê"],
            linhas: [
              { rotulo: "1", valores: ["quantidade × preço", "DIRETA", "mais itens, mais caro"] },
              { rotulo: "2", valores: ["trabalhadores × tempo", "INVERSA", "mais gente, menos tempo"] },
              { rotulo: "3", valores: ["velocidade × tempo", "INVERSA", "mais rápido, menos tempo"] },
              { rotulo: "4", valores: ["tempo × distância (v fixa)", "DIRETA", "mais tempo, mais distância"] },
            ],
          },
          destaque: "Errar o tipo é errar tudo, mesmo com contas certas.",
        },
      },
      {
        texto: "Na INVERSA, multiplique os valores da mesma linha: x₁·y₁ = x₂·y₂.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "6 máquinas fazem um serviço em 10 h. Quanto levam 4 máquinas?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "6 · 10 = 4 · x",
            passos: [
              { expr: "Menos máquinas → mais tempo", explica: "Inversa.", status: "neutro", professor: "Previsão: com menos máquinas o tempo tem que ser MAIOR que 10 h. Se a resposta der menor, algo está errado." },
              { expr: "Produto constante = 6 · 10 = 60", explica: "Total de trabalho.", status: "ok" },
              { expr: "4 · x = 60", explica: "Mesma constante.", status: "ok" },
              { expr: "x = 15 horas", explica: "Divido por 4.", status: "ok" },
            ],
            fatorada: "15 horas",
          },
          destaque: "Inversa: multiplique na horizontal.",
        },
      },
      {
        texto: "Velocidade e tempo são inversamente proporcionais quando a distância é fixa.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "A 60 km/h a viagem leva 4 h. A 80 km/h leva quanto?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "60 · 4 = 80 · x",
            passos: [
              { expr: "Distância = 60 · 4 = 240 km", explica: "É a constante.", status: "neutro" },
              { expr: "80 · x = 240", explica: "Mesma distância.", status: "ok" },
              { expr: "x = 3 horas", explica: "Divido por 80.", status: "ok", professor: "Mais rápido, menos tempo: 3 h é menor que 4 h. A previsão bateu com o resultado." },
            ],
            fatorada: "3 horas",
          },
          destaque: "Distância fixa → velocidade e tempo são inversas.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: 8 operários terminam uma obra em 15 dias. Quantos dias levam 10 operários?",
    resposta: "12 dias",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "8 · 15 = 10 · x",
      passos: [
        { expr: "Mais operários → menos dias", explica: "Inversa.", status: "neutro" },
        { expr: "Constante = 8 · 15 = 120", explica: "Dias-operário.", status: "ok" },
        { expr: "10x = 120", explica: "Mesma constante.", status: "ok" },
        { expr: "x = 12 dias", explica: "Divido por 10.", status: "ok", professor: "12 é menor que 15, como esperado ao aumentar a equipe." },
      ],
      fatorada: "12 dias",
      legenda: "Brilha resolve",
    },
    passos: ["Mais operários, menos dias → inversa.", "8 · 15 = 120.", "10 · x = 120.", "x = 12 dias."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: 3 torneiras enchem um tanque em 8 h. Com 6 torneiras, quanto tempo?",
    dica: "Inversa: 3 · 8 = 6 · x.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3 · 8 = 6 · x",
      passos: [
        { expr: "Constante = 24", explica: "3 · 8.", status: "neutro" },
        { expr: "6x = 24", explica: "Monto.", status: "ok" },
        { expr: "x = 4 h", explica: "Divido.", status: "ok" },
      ],
      fatorada: "4 horas",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4 horas" }, { nome: "16 horas" }, { nome: "8 horas" }],
      respostaCerta: "4 horas",
      feedbackAcerto: "🎯 O dobro de torneiras enche na metade do tempo.",
      feedbackErro: "É inversa: dobrando as torneiras, o tempo cai pela metade. 8 ÷ 2 = 4 horas.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: um alimento dura 20 dias para 6 pessoas. Para 8 pessoas dura quantos dias?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "6 · 20 = 8 · x",
      passos: [
        { expr: "Constante = 120", explica: "Rações totais.", status: "neutro" },
        { expr: "8x = 120", explica: "Monto.", status: "ok" },
        { expr: "x = 15", explica: "Divido.", status: "ok" },
      ],
      fatorada: "15 dias",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "15 dias" }, { nome: "27 dias" }, { nome: "26 dias" }],
      respostaCerta: "15 dias",
      feedbackAcerto: "🎯 Mais pessoas, menos dias: 120 ÷ 8 = 15.",
      feedbackErro: "Mais bocas para alimentar significa MENOS dias. Total de rações: 6 · 20 = 120. Para 8 pessoas: 120 ÷ 8 = 15 dias.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Uma gráfica com 5 máquinas imprime um pedido em 12 horas. Duas máquinas quebraram.",
    problema: "Com as 3 máquinas restantes, em quanto tempo o pedido fica pronto?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5 · 12 = 3 · x",
      passos: [
        { expr: "Menos máquinas → mais tempo", explica: "Inversa.", status: "neutro" },
        { expr: "Constante = 5 · 12 = 60", explica: "Horas-máquina do pedido.", status: "ok", professor: "A constante representa o TRABALHO TOTAL: 60 horas-máquina. Isso não muda quando as máquinas quebram." },
        { expr: "3x = 60", explica: "Monto.", status: "ok" },
        { expr: "x = 20 horas", explica: "Divido por 3.", status: "ok" },
      ],
      fatorada: "20 horas",
      legenda: "Aplicação — máquinas quebradas",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "20 horas" }, { nome: "7,2 horas" }, { nome: "12 horas" }],
      respostaCerta: "20 horas",
      feedbackAcerto: "🎯 60 horas-máquina divididas por 3 máquinas = 20 h.",
      feedbackErro: "Com menos máquinas o tempo AUMENTA. 7,2 h seria regra de três direta, que não vale aqui. O certo é 60 ÷ 3 = 20 h.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Inversa: uma cresce, a outra diminui.",
      "Na inversa o PRODUTO x·y é constante.",
      "x₁·y₁ = x₂·y₂ (multiplica na horizontal).",
      "Trabalhadores × tempo e velocidade × tempo são inversas.",
      "Preveja se o resultado deve aumentar ou diminuir antes de calcular.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "4 pedreiros fazem um muro em 9 dias. 6 pedreiros levam:", opcoes: ["6 dias", "13,5 dias", "9 dias"], correta: 0, feedbackAcerto: "🎉 4·9 = 36 e 36 ÷ 6 = 6 dias.", feedbackErro: "Mais pedreiros = menos dias. Constante 4·9 = 36; 36 ÷ 6 = 6 dias." },
      { pergunta: "A 90 km/h leva 2 h. A 60 km/h leva:", opcoes: ["3 h", "1,33 h", "2 h"], correta: 0, feedbackAcerto: "🎉 Distância 180 km; 180 ÷ 60 = 3 h.", feedbackErro: "Distância fixa: 90 · 2 = 180 km. A 60 km/h: 180 ÷ 60 = 3 horas. Mais devagar, mais tempo." },
      { pergunta: "Qual relação é INVERSA?", opcoes: ["número de máquinas e tempo", "quantidade e preço total", "horas trabalhadas e salário"], correta: 0, feedbackAcerto: "🎉 Mais máquinas, menos tempo.", feedbackErro: "Preço total e salário crescem junto com a outra grandeza (diretas). Só máquinas × tempo é inversa." },
      { pergunta: "12 pessoas comem uma ração em 10 dias. 15 pessoas:", opcoes: ["8 dias", "12,5 dias", "10 dias"], correta: 0, feedbackAcerto: "🎉 120 ÷ 15 = 8 dias.", feedbackErro: "Total de rações: 12 · 10 = 120. Para 15 pessoas: 120 ÷ 15 = 8 dias." },
      { pergunta: "Numa inversa, se x triplica, y:", opcoes: ["fica um terço", "triplica", "não muda"], correta: 0, feedbackAcerto: "🎉 O produto precisa continuar constante.", feedbackErro: "Como x·y é constante, se x fica 3 vezes maior, y precisa ficar 3 vezes menor." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Cronômetro da tarefa",
    materiais: ["Cronômetro", "Papel", "Caneta"],
    passos: [
      "Escolha uma tarefa de casa (arrumar a mesa, dobrar roupas) e cronometre fazendo sozinho.",
      "Refaça com mais uma pessoa ajudando e cronometre de novo.",
      "Compare com a previsão da regra de três inversa e escreva por que na prática pode não bater exatamente.",
    ],
    registro: "📸 Foto dos tempos e da previsão calculada.",
  },
  recompensa: { xp: 215, moedas: 110, medalha: "Estrategista da Inversa" },
};
