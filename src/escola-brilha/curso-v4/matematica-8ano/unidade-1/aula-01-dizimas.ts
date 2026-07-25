import type { AulaV4 } from "../../types";

/**
 * Aula 01 · U1 — Dízimas periódicas e fração geratriz.
 * Padrão piloto: conta armada passo a passo + Professor explica.
 */
export const aula01_dizimas: AulaV4 = {
  slug: "u1-01-dizimas",
  titulo: "Dízimas periódicas e fração geratriz",
  iconeTrilha: "🔧",
  bncc: ["EF08MA01"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Um número que não termina",
    historia:
      "{NOME}, hoje a Oficina abre. Brilha te mostra um truque: transformar um número que NUNCA acaba (como 0,333…) numa fração exata. Vamos armar a conta passo a passo, sem decoreba.",
  },

  momento02_exploracao: {
    instrucao: "Divida 1 por 3 na chave e observe o RESTO. Ele volta.",
    cenas: [
      {
        tipo: "texto",
        texto:
          "Divisão de 1 por 3 na chave:\n\n   1,000 | 3\n  −  9    ────\n     ───   0,333…\n     10\n    − 9\n     ───\n      10\n     − 9\n      ───\n       1  ← o resto NUNCA zera. Sempre volta 1.\n\nComo o resto se repete, o quociente também: 0,333333… — é uma dízima periódica.",
        destaque: true,
      },
      {
        tipo: "tabela",
        titulo: "Decimal exato × dízima — quem é quem?",
        cabecalhos: ["Fração", "Decimal", "Denom. só tem 2 e/ou 5?", "Tipo"],
        linhas: [
          { rotulo: "1/2", valores: ["1/2", "0,5", "Sim (2)", "Exato"] },
          { rotulo: "1/4", valores: ["1/4", "0,25", "Sim (2·2)", "Exato"] },
          { rotulo: "1/5", valores: ["1/5", "0,2", "Sim (5)", "Exato"] },
          { rotulo: "1/3", valores: ["1/3", "0,333…", "Não (tem 3)", "Dízima"] },
          { rotulo: "2/3", valores: ["2/3", "0,666…", "Não (tem 3)", "Dízima"] },
          { rotulo: "1/9", valores: ["1/9", "0,111…", "Não (tem 3·3)", "Dízima"] },
          { rotulo: "1/11", valores: ["1/11", "0,0909…", "Não (tem 11)", "Dízima"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "🔑 Critério: uma fração irredutível vira DECIMAL EXATO se o denominador só tiver os fatores 2 e/ou 5. Se aparecer qualquer outro fator (3, 7, 11, 13…), vira DÍZIMA.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como voltar de 0,333… para fração?",
    pista: "Chame o número de x. Multiplique por 10 (mesmo tamanho do período) e subtraia — a cauda cancela.",
    revelacao: "Nomeie x, multiplique por 10, subtraia, isole x. Resultado: 1/3.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "0,333…  →  fração?",
      passos: [
        { expr: "x = 0,333…", explica: "Nomeio o número.", status: "neutro", professor: "Dou um nome ao desconhecido: x = 0,333…" },
        { expr: "10·x = 3,333…", explica: "Multiplico por 10 (1 dígito no período).", status: "ok", professor: "Multiplico os dois lados por 10 para alinhar a cauda periódica." },
        { expr: "10x − x = 3,333… − 0,333…", explica: "Subtraio uma equação da outra.", status: "ok", professor: "As caudas 0,333… são IDÊNTICAS e se cancelam na subtração." },
        { expr: "9x = 3", explica: "Cauda cancelou.", status: "ok", professor: "Do lado esquerdo, 10x − x = 9x. Do direito, sobrou 3." },
        { expr: "x = 3/9 = 1/3", explica: "Isolo x e simplifico.", status: "ok", professor: "Divido por 9 e simplifico por 3: x = 1/3." },
      ],
      fatorada: "0,333… = 1/3",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Dízima → fração — armando a conta",
    etapas: [
      {
        texto: "Dízima simples de 1 dígito. Vamos transformar 0,777… em fração.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "0,777…  →  fração?",
            passos: [
              {
                expr: "x = 0,777…",
                explica: "Chamo o número de x.",
                status: "neutro",
                professor:
                  "Truque padrão para dízima periódica: dou um nome ao número desconhecido. Aqui, chamo x = 0,777… . Isso permite fazer contas com ele como se fosse uma incógnita comum.",
              },
              {
                expr: "10·x = 7,777…",
                explica: "Multiplico por 10 (1 dígito no período).",
                status: "ok",
                professor:
                  "Multiplico os dois lados por 10 porque o período tem 1 dígito. Assim, a parte que se repete ‘alinha’: 10x = 7,777… . Se o período tivesse 2 dígitos, multiplicaria por 100.",
              },
              {
                expr: "10x − x = 7,777… − 0,777…",
                explica: "Subtraio uma equação da outra.",
                status: "ok",
                professor:
                  "Aqui está o pulo do gato: subtraio 10x − x. Do lado direito, 7,777… menos 0,777… . Como as caudas 0,777… são IGUAIS, elas se cancelam. Sobra só a parte inteira: 7.",
              },
              {
                expr: "9x = 7",
                explica: "Cauda repetida cancela.",
                status: "ok",
                professor:
                  "Do lado esquerdo, 10x − x = 9x. Do lado direito, sobrou 7. Portanto, 9x = 7.",
              },
              {
                expr: "x = 7/9",
                explica: "Divido os dois lados por 9.",
                status: "ok",
                professor:
                  "Isolando x: x = 7 ÷ 9 = 7/9. Fim. A fração geratriz de 0,777… é 7/9. Repare no atalho: numerador = período, denominador = tantos 9 quanto os dígitos do período.",
              },
            ],
            fatorada: "0,777… = 7/9",
          },
        },
      },

      {
        texto: "Dízima simples de 2 dígitos. 0,181818… tem período ‘18’.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "0,181818…  →  fração?",
            passos: [
              {
                expr: "x = 0,181818…",
                explica: "Nomeio o número.",
                status: "neutro",
                professor:
                  "Chamo x = 0,181818… . Período de 2 dígitos (18), então em vez de multiplicar por 10, vou multiplicar por 100.",
              },
              {
                expr: "100·x = 18,181818…",
                explica: "Multiplico por 100 (2 dígitos no período).",
                status: "ok",
                professor:
                  "Multiplicando por 100, a parte periódica se alinha: 100x = 18,181818… . A regra é: multiplique por 10 elevado ao NÚMERO DE DÍGITOS do período.",
              },
              {
                expr: "100x − x = 18",
                explica: "Subtraio; a cauda cancela.",
                status: "ok",
                professor:
                  "100x − x = 99x. Do lado direito, 18,181818… − 0,181818… = 18. Cauda periódica cortada.",
              },
              {
                expr: "99x = 18",
                explica: "Isolo x.",
                status: "ok",
                professor:
                  "Ficou 99x = 18. Divido os dois lados por 99: x = 18/99.",
              },
              {
                expr: "x = 18/99 = 2/11",
                explica: "Simplifico dividindo por 9.",
                status: "ok",
                professor:
                  "Sempre simplifique a fração no fim. 18 e 99 são divisíveis por 9: 18÷9 = 2, 99÷9 = 11. Logo, 0,181818… = 2/11.",
              },
            ],
            fatorada: "0,181818… = 2/11",
          },
        },
      },

      {
        texto: "Dízima composta. Tem parte fixa antes do período. Ex.: 0,04777… (‘04’ fixo, ‘7’ repete).",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "0,04777…  →  fração?",
            passos: [
              {
                expr: "x = 0,04777…",
                explica: "Nomeio o número.",
                status: "neutro",
                professor:
                  "Aqui a dízima é COMPOSTA: existe uma parte fixa (‘04’) antes de o período começar. Estratégia: multiplicar duas vezes por 10 até isolar a parte periódica sozinha depois da vírgula, subtrair, e resolver.",
              },
              {
                expr: "100·x = 4,777…",
                explica: "×100 empurra o ‘04’ pra parte inteira.",
                status: "ok",
                professor:
                  "Multiplico por 100 (2 dígitos não periódicos: ‘04’). Isso passa o ‘04’ para antes da vírgula: 100x = 4,777… . Agora tenho uma dízima simples do outro lado.",
              },
              {
                expr: "1000·x = 47,777…",
                explica: "×1000 empurra também 1 dígito do período.",
                status: "ok",
                professor:
                  "Multiplico agora por 1000 (2 fixos + 1 do período). Fica 1000x = 47,777… . As caudas dos dois casos são IGUAIS (0,777…), o que permite a subtração perfeita.",
              },
              {
                expr: "1000x − 100x = 47 − 4",
                explica: "Subtraio; cauda cancela.",
                status: "ok",
                professor:
                  "1000x − 100x = 900x. E 47,777… − 4,777… = 43. Cauda cancelada.",
              },
              {
                expr: "900x = 43",
                explica: "Isolo x.",
                status: "ok",
                professor:
                  "900x = 43 → x = 43/900. Confere na calculadora: 43 ÷ 900 = 0,04777… ✅",
              },
              {
                expr: "x = 43/900",
                explica: "Resposta final.",
                status: "ok",
                professor:
                  "Fórmula prática para 0,04777…: numerador = 47 − 4 = 43 (número TODO com um período menos a parte FIXA). Denominador = tantos 9 quanto dígitos do período, seguidos de tantos 0 quanto dígitos fixos. Aqui: 9 (um dígito no período) e 00 (dois dígitos fixos) → 900.",
              },
            ],
            fatorada: "0,04777… = 43/900",
          },
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: escreva 0,444… como fração. Clica Continuar.",
    resposta: "4/9",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "0,444…  →  fração?",
      passos: [
        { expr: "x = 0,444…", explica: "Nomeio.", status: "neutro", professor: "Chamo x = 0,444…. Período de 1 dígito." },
        { expr: "10x = 4,444…", explica: "×10 (1 dígito no período).", status: "ok", professor: "Multiplico por 10 para alinhar a cauda periódica." },
        { expr: "10x − x = 4", explica: "Cauda cancela.", status: "ok", professor: "4,444… − 0,444… = 4. As caudas 0,444… são idênticas e se anulam." },
        { expr: "9x = 4", explica: "Isolo x.", status: "ok", professor: "10x − x = 9x. Então 9x = 4." },
        { expr: "x = 4/9", explica: "Fim.", status: "ok", professor: "x = 4 ÷ 9 = 4/9. Atalho: período 4 sobre 9." },
      ],
      fatorada: "0,444… = 4/9",
      legenda: "Modelagem",
    },
    passos: ["x = 0,444…", "10x = 4,444…", "9x = 4", "x = 4/9"],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos juntos: qual a fração geratriz de 0,555…?",
    dica: "Período 5 (1 dígito) → denominador 9.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "0,555…  →  fração?",
      passos: [
        { expr: "x = 0,555…", explica: "Nomeio.", status: "neutro" },
        { expr: "10x = 5,555…", explica: "×10.", status: "ok" },
        { expr: "9x = 5", explica: "Cauda cancela.", status: "ok" },
        { expr: "x = 5/9", explica: "Resposta.", status: "ok" },
      ],
      fatorada: "0,555… = 5/9",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a fração geratriz?",
      opcoes: [{ nome: "5/9" }, { nome: "5/10" }, { nome: "1/2" }],
      respostaCerta: "5/9",
      feedbackAcerto: "🎯 Período 5 sobre 9.",
      feedbackErro: "1 dígito no período → 1 nove no denominador. Refaz 10x − x.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: 0,232323… como fração.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "0,232323…  →  fração?",
      passos: [
        { expr: "x = 0,232323…", explica: "Nomeio.", status: "neutro" },
        { expr: "100x = 23,232323…", explica: "×100 (2 dígitos no período).", status: "ok" },
        { expr: "99x = 23", explica: "Cauda cancela.", status: "ok" },
        { expr: "x = 23/99", explica: "Já está simplificada.", status: "ok" },
      ],
      fatorada: "0,232323… = 23/99",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a fração geratriz?",
      opcoes: [{ nome: "23/99" }, { nome: "23/100" }, { nome: "23/9" }],
      respostaCerta: "23/99",
      feedbackAcerto: "🎯 Dois dígitos de período → 99 no denominador.",
      feedbackErro: "Período tem 2 dígitos (‘23’). Multiplica por 100, subtrai, dá 99x = 23.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma calculadora simples mostra 0,666… ao dividir 2 por 3. O engenheiro precisa da fração EXATA para não perder precisão numa obra.",
    problema: "Qual fração exata a calculadora está aproximando?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "0,666…  →  fração exata?",
      passos: [
        { expr: "x = 0,666…", explica: "Nomeio.", status: "neutro" },
        { expr: "10x = 6,666…", explica: "×10.", status: "ok" },
        { expr: "9x = 6", explica: "Cauda cancela.", status: "ok" },
        { expr: "x = 6/9", explica: "Divido por 3 em cima e embaixo.", status: "ok" },
        { expr: "x = 2/3", explica: "Fração simplificada.", status: "ok", professor: "Sempre simplifique no fim. 6 e 9 têm MDC = 3. 6÷3 = 2, 9÷3 = 3. Fração final: 2/3." },
      ],
      fatorada: "0,666… = 2/3",
      legenda: "Aplicação — precisão de engenharia",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a fração exata?",
      opcoes: [{ nome: "2/3" }, { nome: "6/10" }, { nome: "3/5" }],
      respostaCerta: "2/3",
      feedbackAcerto: "🎯 0,666… = 6/9 = 2/3.",
      feedbackErro: "Faça 10x − x → 9x = 6 → 6/9 = 2/3.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Dízima simples: multiplique por 10ⁿ (n = dígitos do período) e subtraia — a cauda cancela.",
      "Dízima simples atalho: período sobre tantos 9 quanto os dígitos do período.",
      "Dízima composta: separe parte fixa e período. Denominador = 9…90…0 (9s do período, 0s da parte fixa).",
      "Sempre simplifique a fração no final.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "0,111… é igual a:", opcoes: ["1/9", "1/10", "1/11"], correta: 0, feedbackAcerto: "🎉 Período 1 sobre 9.", feedbackErro: "10x − x = 1, então 9x = 1, logo x = 1/9." },
      { pergunta: "0,272727… é igual a:", opcoes: ["27/99", "27/100", "3/10"], correta: 0, feedbackAcerto: "🎉 Dois dígitos → 99.", feedbackErro: "Período tem 2 dígitos. 100x − x = 27 → 99x = 27 → 27/99." },
      { pergunta: "1/3 em decimal:", opcoes: ["0,333…", "0,3", "0,033…"], correta: 0, feedbackAcerto: "🎉 1 ÷ 3 = 0,333…", feedbackErro: "Divida 1 por 3 na chave — o 3 se repete infinitamente." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça-dízima em casa",
    materiais: ["Calculadora simples ou celular"],
    passos: [
      "Divida 1 por cada número de 1 a 12.",
      "Anote quais deram dízima e qual é o período.",
      "Escolha uma dízima e transforme em fração usando o passo a passo da aula.",
    ],
    registro: "📸 Foto da lista.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
