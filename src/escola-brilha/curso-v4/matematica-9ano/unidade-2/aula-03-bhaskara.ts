import type { AulaV4 } from "../../types";

export const aula03_bhaskara: AulaV4 = {
  slug: "u2-03-bhaskara",
  titulo: "A Fórmula de Bhaskara",
  iconeTrilha: "🧮",
  bncc: ["EF09MA09"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "A fórmula que resolve QUALQUER equação do 2º grau",
    historia:
      "{NOME}, e quando a equação tem a, b e c todos diferentes de zero, sem atalho possível? Existe uma fórmula que resolve TODAS as equações do 2º grau, sem exceção: a fórmula de Bhaskara. Hoje você aprende a usá-la passo a passo.",
  },

  momento02_exploracao: {
    instrucao: "Observe a fórmula e suas duas partes.",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "x = (−b ± √Δ) / 2a",
        passos: [
          { expr: "Δ = b² − 4ac", explica: "Primeiro calculo o discriminante Δ (delta).", status: "ok" },
          { expr: "x = (−b ± √Δ) / 2a", explica: "Depois uso Δ dentro da fórmula.", status: "ok", professor: "Δ é sempre calculado ANTES: sem ele, não dá para continuar a fórmula. O símbolo ± indica que existem duas contas: uma com + e outra com −." },
        ],
        fatorada: "Duas etapas: calcular Δ, depois aplicar a fórmula",
        legenda: "A fórmula de Bhaskara",
      },
      {
        tipo: "texto",
        texto: "🔑 O ± gera duas raízes: x' = (−b + √Δ)/2a e x'' = (−b − √Δ)/2a.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como resolver x² + x − 12 = 0 com Bhaskara?",
    pista: "Identifique a, b, c primeiro. Depois calcule Δ = b² − 4ac.",
    revelacao: "Δ = 1² − 4·1·(−12) = 1 + 48 = 49. Como √49 = 7, as raízes são x = (−1+7)/2 = 3 e x = (−1−7)/2 = −4.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² + x − 12 = 0",
      passos: [
        { expr: "a=1, b=1, c=−12", explica: "Identifico os coeficientes.", status: "neutro" },
        { expr: "Δ = 1² − 4·1·(−12) = 1 + 48 = 49", explica: "Calculo o discriminante.", status: "ok", professor: "Atenção ao sinal: −4·1·(−12) é −4 vezes −12, que dá +48, porque menos vezes menos é mais." },
        { expr: "√49 = 7", explica: "Raiz quadrada exata.", status: "ok" },
        { expr: "x = (−1 ± 7) / 2", explica: "Substituo na fórmula.", status: "ok" },
        { expr: "x' = 3 e x'' = −4", explica: "(−1+7)/2 = 3 e (−1−7)/2 = −4.", status: "ok" },
      ],
      fatorada: "x = 3 ou x = −4",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Bhaskara passo a passo",
    etapas: [
      {
        texto: "PASSO 1 — Identifique a, b, c na forma ax² + bx + c = 0, com o sinal correto de cada um.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "x² − 5x + 6 = 0",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² − 5x + 6 = 0",
            passos: [
              { expr: "a = 1", explica: "Coeficiente de x².", status: "ok" },
              { expr: "b = −5", explica: "Coeficiente de x, com o sinal.", status: "ok" },
              { expr: "c = 6", explica: "Termo independente.", status: "ok" },
            ],
            fatorada: "a=1, b=−5, c=6",
          },
          destaque: "Sem identificar bem os sinais, todo o resto da conta erra.",
        },
      },
      {
        texto: "PASSO 2 — Calcule o discriminante Δ = b² − 4ac. Fique atento aos sinais: −4·a·c pode virar positivo.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Continuando x² − 5x + 6 = 0",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Δ = b² − 4ac",
            passos: [
              { expr: "Δ = (−5)² − 4·1·6", explica: "Substituo os valores.", status: "neutro" },
              { expr: "Δ = 25 − 24", explica: "(−5)² = 25 e 4·1·6 = 24.", status: "ok" },
              { expr: "Δ = 1", explica: "25 − 24 = 1.", status: "ok", professor: "Δ = 1 é positivo e é um quadrado perfeito (1 = 1²), o que já garante duas raízes reais e uma raiz quadrada exata." },
            ],
            fatorada: "Δ = 1",
          },
          destaque: "Δ decide quantas raízes reais a equação tem — próxima aula você vai ver isso a fundo.",
        },
      },
      {
        texto: "PASSO 3 — Substitua na fórmula x = (−b ± √Δ)/2a e separe as duas raízes, calculando com + e depois com −.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Finalizando x² − 5x + 6 = 0",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x = (−(−5) ± √1) / (2·1)",
            passos: [
              { expr: "x = (5 ± 1) / 2", explica: "−b = −(−5) = 5, e √1 = 1.", status: "neutro", professor: "Cuidado: −b quando b já é negativo vira positivo. −(−5) = 5." },
              { expr: "x' = (5 + 1)/2 = 3", explica: "Uso o sinal +.", status: "ok" },
              { expr: "x'' = (5 − 1)/2 = 2", explica: "Uso o sinal −.", status: "ok" },
              { expr: "Verificação: 3²−5·3+6=0 e 2²−5·2+6=0", explica: "As duas raízes conferem.", status: "ok" },
            ],
            fatorada: "x = 3 ou x = 2",
          },
          destaque: "SEMPRE verifique substituindo as raízes de volta na equação original.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: 2x² − 3x − 2 = 0.",
    resposta: "x = 2 ou x = −1/2",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2x² − 3x − 2 = 0",
      passos: [
        { expr: "a=2, b=−3, c=−2", explica: "Identifico os coeficientes.", status: "neutro" },
        { expr: "Δ = (−3)² − 4·2·(−2) = 9 + 16 = 25", explica: "Calculo Δ com atenção ao sinal duplo negativo.", status: "ok", professor: "−4·2·(−2): primeiro −4·2 = −8, depois −8·(−2) = +16. Menos vezes menos dá mais." },
        { expr: "x = (3 ± 5) / 4", explica: "−b = 3, √25 = 5, 2a = 4.", status: "ok" },
        { expr: "x' = 8/4 = 2 e x'' = −2/4 = −1/2", explica: "Separo as duas contas.", status: "ok", professor: "Confirmando: 2·(2)²−3·2−2 = 8−6−2=0. E 2·(1/4)−3·(−1/2)−2 = 0,5+1,5−2=0." },
      ],
      fatorada: "x = 2 ou x = −1/2",
      legenda: "Brilha resolve",
    },
    passos: [
      "Identifico a, b, c com os sinais corretos.",
      "Calculo Δ = b² − 4ac, com muita atenção aos sinais.",
      "Substituo na fórmula e separo as duas raízes, uma com + e outra com −.",
      "Verifico substituindo as raízes na equação original.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: resolva x² − 2x − 15 = 0.",
    dica: "a=1, b=−2, c=−15. Calcule Δ primeiro, depois aplique a fórmula.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² − 2x − 15 = 0",
      passos: [
        { expr: "Δ = (−2)² − 4·1·(−15) = 4 + 60 = 64", explica: "Calculo o discriminante.", status: "neutro" },
        { expr: "√64 = 8", explica: "Raiz quadrada exata.", status: "neutro" },
        { expr: "x = (2 ± 8) / 2", explica: "Substituo na fórmula.", status: "neutro" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha as raízes corretas:",
      opcoes: [{ nome: "x = 5 ou x = −3" }, { nome: "x = 5 ou x = 3" }, { nome: "x = 10 ou x = −6" }],
      respostaCerta: "x = 5 ou x = −3",
      feedbackAcerto: "🎯 (2+8)/2 = 5 e (2−8)/2 = −3. Verificando: 25−10−15=0 e 9+6−15=0.",
      feedbackErro: "x = (2 ± 8)/2. Com +: (2+8)/2 = 5. Com −: (2−8)/2 = −6/2 = −3.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: resolva x² + 6x + 5 = 0.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² + 6x + 5 = 0",
      passos: [
        { expr: "Δ = 6² − 4·1·5 = 36 − 20 = 16", explica: "Calculo Δ.", status: "neutro" },
        { expr: "x = (−6 ± 4) / 2", explica: "√16 = 4.", status: "neutro" },
      ],
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x = −1 ou x = −5" }, { nome: "x = 1 ou x = 5" }, { nome: "x = −1 ou x = 5" }],
      respostaCerta: "x = −1 ou x = −5",
      feedbackAcerto: "🎯 (−6+4)/2 = −1 e (−6−4)/2 = −5. Ambas negativas.",
      feedbackErro: "x = (−6 ± 4)/2. Com +: (−6+4)/2 = −1. Com −: (−6−4)/2 = −10/2 = −5.",
    },
  },

  momento08_aplicacao: {
    contexto: "A altura de um foguete de brinquedo em metros é dada pela equação relacionada a h = −t² + 4t + 5, onde t é o tempo em segundos.",
    problema: "Igualando h a zero, obtemos t² − 4t − 5 = 0 (multiplicando por −1). Em que instante o foguete toca o chão?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "t² − 4t − 5 = 0",
      passos: [
        { expr: "Δ = (−4)² − 4·1·(−5) = 16 + 20 = 36", explica: "Calculo o discriminante.", status: "neutro" },
        { expr: "√36 = 6", explica: "Raiz quadrada exata.", status: "ok" },
        { expr: "t = (4 ± 6) / 2", explica: "Substituo na fórmula.", status: "ok" },
        { expr: "t' = 5 e t'' = −1", explica: "(4+6)/2=5 e (4−6)/2=−1.", status: "ok" },
        { expr: "Descarto t = −1", explica: "Tempo negativo não existe no contexto.", status: "ok", professor: "Um instante de tempo negativo não tem sentido físico aqui. Por isso a única resposta válida é t = 5 segundos." },
      ],
      fatorada: "O foguete toca o chão em t = 5 segundos",
      legenda: "Aplicação",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5 segundos" }, { nome: "−1 segundo" }, { nome: "6 segundos" }],
      respostaCerta: "5 segundos",
      feedbackAcerto: "🎯 As raízes são 5 e −1, mas tempo negativo não existe: a resposta é 5 segundos.",
      feedbackErro: "A fórmula dá t = 5 ou t = −1. Como tempo não pode ser negativo, a resposta certa é 5 segundos.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Δ = b² − 4ac é calculado ANTES de aplicar a fórmula.",
      "x = (−b ± √Δ) / 2a — o ± gera duas contas separadas.",
      "Cuidado com os sinais: −(−b) vira positivo, e −4·a·c pode virar positivo.",
      "Sempre verifique as raízes substituindo na equação original.",
      "Em problemas reais, descarte raízes que não fazem sentido no contexto (tempo negativo, etc.).",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Em x² − x − 6 = 0, o valor de Δ é:",
        opcoes: ["25", "−23", "1"],
        correta: 0,
        feedbackAcerto: "🎉 Δ = (−1)² − 4·1·(−6) = 1 + 24 = 25.",
        feedbackErro: "Δ = b²−4ac = (−1)² − 4·1·(−6) = 1 + 24 = 25. Cuidado com o sinal duplo negativo: −4·(−6) = +24.",
      },
      {
        pergunta: "Resolvendo x² − x − 6 = 0, as raízes são:",
        opcoes: ["x = 3 ou x = −2", "x = 3 ou x = 2", "x = 6 ou x = −1"],
        correta: 0,
        feedbackAcerto: "🎉 x = (1 ± 5)/2, então x = 3 ou x = −2. Verificando: 9−3−6=0 e 4+2−6=0.",
        feedbackErro: "Δ = 25, √25 = 5. x = (1 ± 5)/2: com + dá 3, com − dá −2.",
      },
      {
        pergunta: "Qual passo vem primeiro na fórmula de Bhaskara?",
        opcoes: ["Calcular Δ = b² − 4ac", "Substituir direto na fórmula final", "Dividir por 2a"],
        correta: 0,
        feedbackAcerto: "🎉 Sem Δ calculado, não é possível continuar a fórmula.",
        feedbackErro: "A ordem correta é: identificar a,b,c → calcular Δ → só então usar x = (−b±√Δ)/2a.",
      },
      {
        pergunta: "Em 2x² + 5x + 2 = 0, o valor de Δ é:",
        opcoes: ["9", "41", "17"],
        correta: 0,
        feedbackAcerto: "🎉 Δ = 5² − 4·2·2 = 25 − 16 = 9.",
        feedbackErro: "Δ = b²−4ac = 25 − 4·2·2 = 25 − 16 = 9.",
      },
      {
        pergunta: "Resolvendo 2x² + 5x + 2 = 0 (Δ=9), as raízes são:",
        opcoes: ["x = −2 ou x = −1/2", "x = 2 ou x = 1/2", "x = −2 ou x = 1/2"],
        correta: 0,
        feedbackAcerto: "🎉 x = (−5 ± 3)/4: com + dá −2/4=−1/2, com − dá −8/4=−2.",
        feedbackErro: "x = (−5±3)/4. Com +: (−5+3)/4 = −1/2. Com −: (−5−3)/4 = −2. As duas raízes são negativas aqui.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Bhaskara em casa",
    materiais: ["Papel", "Caneta", "Calculadora (para conferir)"],
    passos: [
      "Escreva uma equação do 2º grau com a, b, c diferentes de zero.",
      "Resolva usando a fórmula de Bhaskara, mostrando cada etapa (Δ, depois as duas raízes).",
      "Peça para alguém da família verificar suas raízes substituindo na equação original.",
    ],
    registro: "📸 Foto da resolução completa, com Δ calculado e as duas raízes.",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Mestre de Bhaskara" },
};
