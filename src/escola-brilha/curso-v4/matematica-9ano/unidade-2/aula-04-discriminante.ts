import type { AulaV4 } from "../../types";

export const aula04_discriminante: AulaV4 = {
  slug: "u2-04-discriminante",
  titulo: "O Discriminante e as Relações de Soma e Produto",
  iconeTrilha: "🔮",
  bncc: ["EF09MA09"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "{NOME}, dá para saber quantas raízes existem SEM resolver tudo?",
    historia:
      "{NOME}, imagina economizar tempo de prova: só de olhar para Δ = b² − 4ac, você já sabe se a equação tem duas raízes, uma raiz só, ou nenhuma raiz real — sem nem terminar a fórmula de Bhaskara! E tem mais: existe um atalho para achar as raízes por soma e produto, sem nem calcular Δ. Vem descobrir.",
  },

  momento02_exploracao: {
    instrucao: "Observe o que cada sinal de Δ revela.",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "Δ = b² − 4ac",
        passos: [
          { expr: "Δ > 0", explica: "Duas raízes reais e diferentes.", status: "ok" },
          { expr: "Δ = 0", explica: "Uma única raiz real (raiz dupla).", status: "ok" },
          { expr: "Δ < 0", explica: "Nenhuma raiz real.", status: "x", professor: "Δ < 0 significa que precisaríamos da raiz quadrada de um número negativo, o que não existe no conjunto dos números reais." },
        ],
        fatorada: "O sinal de Δ decide o número de raízes",
        legenda: "O discriminante decide",
      },
      {
        tipo: "texto",
        texto: "🔑 Outro atalho: S = −b/a (soma das raízes) e P = c/a (produto das raízes).",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Sem resolver Bhaskara todo, quantas raízes reais tem x² − 4x + 4 = 0?",
    pista: "Calcule só o Δ = b² − 4ac e observe o sinal.",
    revelacao: "Δ = (−4)² − 4·1·4 = 16 − 16 = 0. Como Δ = 0, a equação tem uma raiz dupla: x = −b/2a = 4/2 = 2.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² − 4x + 4 = 0",
      passos: [
        { expr: "a=1, b=−4, c=4", explica: "Identifico os coeficientes.", status: "neutro" },
        { expr: "Δ = (−4)² − 4·1·4 = 16 − 16 = 0", explica: "Calculo o discriminante.", status: "ok", professor: "Quando Δ = 0, as duas raízes da fórmula (com + e com −) dão o MESMO valor, pois √0 = 0." },
        { expr: "x = −b/2a = 4/2 = 2", explica: "Raiz dupla: x' = x'' = 2.", status: "ok" },
      ],
      fatorada: "x = 2 (raiz dupla)",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Δ decide, e S e P encontram raízes mais rápido",
    etapas: [
      {
        texto: "REGRA 1 — Calcule Δ = b² − 4ac. Se Δ > 0, há duas raízes reais diferentes.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "x² − 3x − 4 = 0",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² − 3x − 4 = 0",
            passos: [
              { expr: "Δ = (−3)² − 4·1·(−4) = 9 + 16 = 25", explica: "Δ = 25, que é positivo.", status: "ok" },
              { expr: "Δ > 0 → duas raízes reais e diferentes", explica: "Aqui já sei sem terminar a fórmula que existem duas respostas.", status: "ok", professor: "√25 = 5 é exato, então as raízes até vão ser números inteiros: x = (3±5)/2, ou seja, x=4 e x=−1." },
            ],
            fatorada: "Δ = 25 > 0",
          },
          destaque: "Δ > 0 garante duas raízes reais, antes mesmo de terminar a conta.",
        },
      },
      {
        texto: "REGRA 2 — Se Δ = 0, há uma única raiz real (raiz dupla), calculada por x = −b/2a.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "x² + 6x + 9 = 0",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² + 6x + 9 = 0",
            passos: [
              { expr: "Δ = 6² − 4·1·9 = 36 − 36 = 0", explica: "Δ = 0.", status: "ok" },
              { expr: "x = −b/2a = −6/2 = −3", explica: "Raiz dupla.", status: "ok", professor: "Isso é justamente um Trinômio Quadrado Perfeito: x²+6x+9 = (x+3)². A raiz dupla −3 é a raiz de (x+3)² = 0." },
            ],
            fatorada: "x = −3 (raiz dupla)",
          },
          destaque: "Δ = 0 é o caso especial do Trinômio Quadrado Perfeito que você já conhece.",
        },
      },
      {
        texto: "REGRA 3 — Se Δ < 0, não existe raiz real. E use os atalhos S = −b/a e P = c/a para achar raízes por tentativa ou montar equações a partir de raízes conhecidas.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "x² + x + 1 = 0 e depois S/P de x² − 7x + 12 = 0",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² + x + 1 = 0",
            passos: [
              { expr: "Δ = 1² − 4·1·1 = 1 − 4 = −3", explica: "Δ é negativo.", status: "x" },
              { expr: "Δ < 0 → nenhuma raiz real", explica: "Não existe √(−3) nos reais.", status: "x" },
              { expr: "Agora: x² − 7x + 12 = 0 → S = −b/a = 7 e P = c/a = 12", explica: "Procuro dois números que somam 7 e multiplicam 12.", status: "ok" },
              { expr: "3 + 4 = 7 e 3 · 4 = 12", explica: "As raízes são 3 e 4, achadas por tentativa, sem Bhaskara!", status: "ok", professor: "S e P são um atalho: quando os números são 'redondos', dá para achar as raízes só pensando em pares que somam S e multiplicam P." },
            ],
            fatorada: "x = 3 ou x = 4 (por soma e produto)",
          },
          destaque: "S = −b/a e P = c/a permitem achar raízes por tentativa, sem Bhaskara.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: analise Δ de 2x² − x + 3 = 0 e depois monta uma equação com raízes 2 e 5.",
    resposta: "Δ = −23 (nenhuma raiz real). Equação com raízes 2 e 5: x² − 7x + 10 = 0.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2x² − x + 3 = 0",
      passos: [
        { expr: "Δ = (−1)² − 4·2·3 = 1 − 24 = −23", explica: "Δ é negativo.", status: "x", professor: "Como Δ < 0, essa equação não tem nenhuma raiz real — a parábola nem toca o eixo x." },
        { expr: "Montando com raízes 2 e 5: S = 2+5 = 7 e P = 2·5 = 10", explica: "Uso as raízes conhecidas para achar S e P.", status: "ok" },
        { expr: "x² − Sx + P = 0 → x² − 7x + 10 = 0", explica: "Monto a equação com S e P.", status: "ok", professor: "A fórmula x² − Sx + P = 0 sempre monta a equação a partir das raízes: coloco −S no meio e P no fim." },
      ],
      fatorada: "x² − 7x + 10 = 0",
      legenda: "Brilha resolve",
    },
    passos: [
      "Calculo Δ = b² − 4ac para saber quantas raízes existem.",
      "Se Δ < 0, não há raiz real; não preciso continuar a fórmula.",
      "Para montar equação a partir de raízes, calculo S (soma) e P (produto) delas.",
      "Escrevo x² − Sx + P = 0.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: quantas raízes reais tem x² + 2x + 5 = 0?",
    dica: "Calcule só Δ = b² − 4ac e observe o sinal.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² + 2x + 5 = 0",
      passos: [
        { expr: "Δ = 2² − 4·1·5 = 4 − 20 = −16", explica: "Calculo o discriminante.", status: "neutro" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Nenhuma raiz real (Δ < 0)" }, { nome: "Duas raízes reais (Δ > 0)" }, { nome: "Uma raiz dupla (Δ = 0)" }],
      respostaCerta: "Nenhuma raiz real (Δ < 0)",
      feedbackAcerto: "🎯 Δ = 4 − 20 = −16, que é negativo. Não existe raiz real para essa equação.",
      feedbackErro: "Δ = 2² − 4·1·5 = 4 − 20 = −16. Como Δ é negativo, não há raiz real.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: quais números somam 8 e multiplicam 15? Use isso para achar as raízes de x² − 8x + 15 = 0.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² − 8x + 15 = 0",
      passos: [
        { expr: "S = −b/a = 8 e P = c/a = 15", explica: "Calculo soma e produto das raízes.", status: "neutro" },
      ],
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha as raízes:",
      opcoes: [{ nome: "x = 3 ou x = 5" }, { nome: "x = 4 ou x = 4" }, { nome: "x = 1 ou x = 15" }],
      respostaCerta: "x = 3 ou x = 5",
      feedbackAcerto: "🎯 3 + 5 = 8 e 3 · 5 = 15. As duas condições batem!",
      feedbackErro: "Procure dois números que somam 8 E multiplicam 15 ao mesmo tempo: 3 e 5 funcionam (3+5=8, 3·5=15). 1 e 15 somam 16, não 8.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um engenheiro está projetando a trajetória de uma bola de basquete: a altura h (em metros) segue h = −x² + 2x − 5, onde x é a distância horizontal.",
    problema: "Para saber se a bola algum dia toca o chão (h = 0), ele precisa resolver x² − 2x + 5 = 0 (multiplicando por −1). O que o discriminante revela sobre essa trajetória?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² − 2x + 5 = 0",
      passos: [
        { expr: "Δ = (−2)² − 4·1·5 = 4 − 20 = −16", explica: "Calculo o discriminante.", status: "x" },
        { expr: "Δ < 0 → nenhuma raiz real", explica: "A equação não tem solução real.", status: "x", professor: "Isso significa que, matematicamente, essa trajetória nunca cruza h = 0 — o modelo pode estar mal ajustado, ou a bola nunca desce até o chão nesse trecho." },
      ],
      fatorada: "Nenhuma raiz real — a bola (nesse modelo) nunca atinge h = 0",
      legenda: "Aplicação",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "O que o Δ negativo revela?",
      opcoes: [{ nome: "A equação não tem raiz real" }, { nome: "A equação tem duas raízes reais" }, { nome: "A equação tem uma raiz dupla" }],
      respostaCerta: "A equação não tem raiz real",
      feedbackAcerto: "🎯 Δ = −16 < 0 significa que não existe solução real: a curva não cruza o eixo nesse modelo.",
      feedbackErro: "Δ negativo (nesse caso −16) sempre indica que não existe raiz real.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Δ > 0: duas raízes reais e diferentes.",
      "Δ = 0: uma raiz real (raiz dupla), x = −b/2a.",
      "Δ < 0: nenhuma raiz real.",
      "S = −b/a (soma das raízes) e P = c/a (produto das raízes).",
      "Com S e P, dá para achar raízes por tentativa ou montar equação x² − Sx + P = 0 a partir de raízes conhecidas.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Em x² + 5x + 6 = 0, o Δ vale:",
        opcoes: ["1", "49", "−1"],
        correta: 0,
        feedbackAcerto: "🎉 Δ = 5² − 4·1·6 = 25 − 24 = 1.",
        feedbackErro: "Δ = b²−4ac = 25 − 24 = 1.",
      },
      {
        pergunta: "Se Δ = 0, quantas raízes reais a equação tem?",
        opcoes: ["Uma raiz real (dupla)", "Duas raízes reais diferentes", "Nenhuma raiz real"],
        correta: 0,
        feedbackAcerto: "🎉 Δ = 0 significa que as duas raízes da fórmula coincidem: uma raiz dupla.",
        feedbackErro: "Δ = 0 dá apenas uma raiz real, chamada raiz dupla.",
      },
      {
        pergunta: "Em x² − 9x + 20 = 0, quais números somam 9 e multiplicam 20?",
        opcoes: ["4 e 5", "2 e 10", "1 e 20"],
        correta: 0,
        feedbackAcerto: "🎉 4 + 5 = 9 e 4 · 5 = 20. As raízes são 4 e 5.",
        feedbackErro: "Procure dois números que satisfazem as DUAS condições: 4+5=9 e 4·5=20. Já 2 e 10 somam 12, não 9.",
      },
      {
        pergunta: "Qual equação tem raízes 3 e −2?",
        opcoes: ["x² − x − 6 = 0", "x² + x − 6 = 0", "x² − x + 6 = 0"],
        correta: 0,
        feedbackAcerto: "🎉 S = 3+(−2) = 1 e P = 3·(−2) = −6. Então x² − Sx + P = x² − x − 6 = 0.",
        feedbackErro: "S = 3+(−2)=1 e P = 3·(−2)=−6. A fórmula é x² − Sx + P = 0, ou seja, x² − x − 6 = 0.",
      },
      {
        pergunta: "Em x² + 4x + 9 = 0, o Δ é negativo. O que isso significa?",
        opcoes: ["A equação não tem raiz real", "A equação tem duas raízes iguais", "Houve erro de cálculo, sempre há raiz"],
        correta: 0,
        feedbackAcerto: "🎉 Δ = 16 − 36 = −20 < 0: nenhuma raiz real existe para essa equação. Isso é normal e válido.",
        feedbackErro: "Δ negativo é um resultado válido e comum: ele indica que a equação não tem raiz real, e não um erro de conta.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça ao Δ em casa",
    materiais: ["Papel", "Caneta"],
    passos: [
      "Escreva 3 equações do 2º grau diferentes.",
      "Calcule o Δ de cada uma e classifique: duas raízes, uma raiz dupla, ou nenhuma raiz real.",
      "Escolha uma dupla de raízes (ex.: 2 e 6) e monte a equação usando S e P.",
    ],
    registro: "📸 Foto das 3 equações classificadas e da equação montada por S e P.",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Guardião do Discriminante" },
};
