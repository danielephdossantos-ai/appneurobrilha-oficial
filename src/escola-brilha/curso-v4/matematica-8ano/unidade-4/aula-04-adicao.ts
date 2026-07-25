import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto — Sistema 2×2 por adição (eliminação).
 * Formato: passo a passo interativo somando equações para ELIMINAR
 * uma letra, com foco em coeficientes opostos e multiplicação-preparação.
 */
export const aula04_adicao: AulaV4 = {
  slug: "u4-04-adicao",
  titulo: "Sistema 2×2 — método da adição",
  iconeTrilha: "➕",
  bncc: ["EF08MA08"],
  duracaoMin: 28,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Somar as equações e eliminar uma letra",
    historia:
      "{NOME}, o método da adição é uma sacada linda: se os coeficientes de UMA letra são OPOSTOS (+3y e −3y, por exemplo), ao somar as duas equações essa letra SUMS — sobra só a outra. Aí resolve como equação normal.",
  },

  momento02_exploracao: {
    instrucao:
      "Veja a mágica dos coeficientes opostos.",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "I) x + y = 10     II) x − y = 4",
        passos: [
          { expr: "olho os y: +y e −y", explica: "Já são OPOSTOS.", status: "neutro",
            professor: "Coef opostos = mesmo número, sinal contrário. +1 e −1 são opostos. +3 e −3 também. Quando estão assim, somar as equações elimina essa letra." },
          { expr: "somo I + II", explica: "Coluna a coluna.", status: "ok",
            professor: "Somo termo com termo: os x se somam (x + x = 2x); os y se cancelam (+y − y = 0); os constantes se somam (10 + 4 = 14)." },
          { expr: "2x = 14", explica: "O y sumiu.", status: "ok" },
          { expr: "x = 7", explica: "÷2.", status: "ok" },
          { expr: "volta em I: 7 + y = 10  →  y = 3", explica: "Uso o x já achado.", status: "ok",
            professor: "Confere na II: 7 − 3 = 4 ✅. Solução (x, y) = (7, 3)." },
        ],
        fatorada: "(x, y) = (7, 3)",
        legenda: "Prova visual: soma → uma letra some → resolve",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "E se os coeficientes NÃO forem opostos?",
    pista: "Eu MULTIPLICO uma (ou as duas) equações por números que criem coeficientes opostos.",
    revelacao:
      "Se não são opostos, EU PREPARO: multiplico cada equação por um número inteiro para que uma letra tenha coeficientes opostos. Depois somo.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) x + y = 5     II) 2x + 3y = 12",
      passos: [
        { expr: "quero eliminar x", explica: "Coefs: 1 e 2.", status: "neutro",
          professor: "Escolho eliminar a letra mais fácil. x tem coef 1 (em I) e 2 (em II)." },
        { expr: "multiplico I por (−2)", explica: "Vira −2x − 2y = −10.", status: "ok",
          professor: "Multiplico CADA termo da I por −2: −2·x + −2·y = −2·5. Cuidado com o sinal em cada termo." },
        { expr: "agora somo com II", explica: "(−2x + 2x) + (−2y + 3y) = −10 + 12.", status: "ok",
          professor: "Coluna x: −2x + 2x = 0 ✅. Coluna y: −2y + 3y = y. Constante: −10 + 12 = 2." },
        { expr: "y = 2", explica: "O x sumiu.", status: "ok" },
        { expr: "volta em I: x + 2 = 5  →  x = 3", explica: "Uso o y.", status: "ok",
          professor: "Confere na II: 2·3 + 3·2 = 6 + 6 = 12 ✅. Solução (3, 2)." },
      ],
      fatorada: "(x, y) = (3, 2)",
    },
  },

  momento04_explicacao: {
    titulo: "Adição — passo a passo",
    etapas: [
      {
        texto: "Caso 1: coefs opostos. Resolva I) 2x + 3y = 12;  II) 4x − 3y = 6.",
        exemploReal: {
          titulo: "🔎 Soma direta",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "I) 2x + 3y = 12     II) 4x − 3y = 6",
            passos: [
              { expr: "olho os y: +3y e −3y", explica: "Já opostos.", status: "ok",
                professor: "Não preciso preparar nada. Somo direto." },
              { expr: "I + II: 6x = 18", explica: "y some.", status: "ok",
                professor: "2x + 4x = 6x; 3y − 3y = 0; 12 + 6 = 18." },
              { expr: "x = 3", explica: "÷6.", status: "ok" },
              { expr: "volta em I: 6 + 3y = 12  →  y = 2", explica: "Uso x.", status: "ok",
                professor: "Confere na II: 4·3 − 3·2 = 12 − 6 = 6 ✅. (3, 2)." },
            ],
            fatorada: "(x, y) = (3, 2)",
          },
        },
      },
      {
        texto: "Caso 2: precisa multiplicar UMA equação. I) x + y = 5;  II) 2x + 3y = 12.",
        exemploReal: {
          titulo: "🔎 Prepara e soma",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "I) x + y = 5     II) 2x + 3y = 12",
            passos: [
              { expr: "quero eliminar x", explica: "Coefs 1 e 2.", status: "neutro" },
              { expr: "multiplico I por (−2)", explica: "−2x − 2y = −10.", status: "ok",
                professor: "Multiplique CADA TERMO — não esqueça o lado direito." },
              { expr: "somo com II", explica: "0 + y = 2  →  y = 2.", status: "ok" },
              { expr: "volta em I: x + 2 = 5  →  x = 3", explica: "", status: "ok",
                professor: "Confere na II: 2·3 + 3·2 = 12 ✅. (3, 2)." },
            ],
            fatorada: "(x, y) = (3, 2)",
          },
        },
      },
      {
        texto: "Caso 3: multiplico AS DUAS. I) 3x + 2y = 16;  II) 2x + 5y = 18.",
        exemploReal: {
          titulo: "🔎 Multiplicação cruzada",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "I) 3x + 2y = 16     II) 2x + 5y = 18",
            passos: [
              { expr: "MMC(3, 2) = 6", explica: "Objetivo: coefs opostos em x.", status: "neutro",
                professor: "Para eliminar x, quero que os coeficientes de x virem +6 e −6 (ou outro par de opostos). Uso o MMC dos coefs originais: MMC(3, 2) = 6." },
              { expr: "I × 2: 6x + 4y = 32", explica: "Multiplico I por 2.", status: "ok" },
              { expr: "II × (−3): −6x − 15y = −54", explica: "Multiplico II por −3.", status: "ok",
                professor: "Cuidado com o sinal: −3 muda TODOS os termos da II." },
              { expr: "soma: −11y = −22  →  y = 2", explica: "x some.", status: "ok" },
              { expr: "volta em I: 3x + 4 = 16  →  x = 4", explica: "", status: "ok",
                professor: "Confere na II: 2·4 + 5·2 = 8 + 10 = 18 ✅. (4, 2)." },
            ],
            fatorada: "(x, y) = (4, 2)",
          },
        },
      },
      {
        texto: "Armadilha: SUBTRAIR e SOMAR não são a mesma coisa. Cuide dos sinais.",
        exemploReal: {
          titulo: "🔎 Somar vs subtrair",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "I) 2x + y = 10     II) 2x + 3y = 16",
            passos: [
              { expr: "coefs de x iguais (+2 e +2)", explica: "Não são opostos.", status: "neutro",
                professor: "Aqui os coefs de x são IGUAIS, não opostos. Se eu somar direto, o x fica 4x, não some." },
              { expr: "opção A: II − I", explica: "Subtrai equações.", status: "ok",
                professor: "Subtrair II − I zera o x: (2x − 2x) + (3y − y) = 16 − 10 → 2y = 6 → y = 3." },
              { expr: "opção B: I × (−1), depois somo", explica: "Vira −2x − y = −10.", status: "ok",
                professor: "Multiplicar I por −1 é a mesma coisa que subtrair. Prefira sempre TROCAR SINAL e SOMAR, para não errar sinal na subtração." },
              { expr: "y = 3  →  x = 3,5", explica: "Volta em I: 2x + 3 = 10.", status: "ok" },
            ],
            fatorada: "(x, y) = (3,5; 3)",
          },
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve I) x + y = 12;  II) x − y = 2.",
    resposta: "(x, y) = (7, 5)",
    passos: ["Soma: 2x = 14", "x = 7", "y = 5"],
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) x + y = 12     II) x − y = 2",
      passos: [
        { expr: "coefs de y: +1 e −1 → opostos", explica: "Soma direto.", status: "ok" },
        { expr: "I + II: 2x = 14", explica: "y some.", status: "ok" },
        { expr: "x = 7", explica: "÷2.", status: "ok" },
        { expr: "volta em I: 7 + y = 12  →  y = 5", explica: "", status: "ok",
          professor: "Confere na II: 7 − 5 = 2 ✅." },
      ],
      fatorada: "(x, y) = (7, 5)",
      legenda: "Modelagem",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos juntos: I) x + y = 9;  II) x − y = 1.",
    dica: "Coefs de y são opostos. Soma direto.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) x + y = 9     II) x − y = 1",
      passos: [
        { expr: "soma: 2x = 10", explica: "y some.", status: "ok" },
        { expr: "x = 5", explica: "÷2.", status: "ok" },
        { expr: "y = 9 − 5 = 4", explica: "Volta.", status: "ok" },
      ],
      fatorada: "(x, y) = (5, 4)",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "5" }, { nome: "4" }, { nome: "9" }],
      respostaCerta: "5",
      feedbackAcerto: "🎯 Soma: 2x = 10 → x = 5.",
      feedbackErro: "Some as duas equações — o y some. 2x = 10 → x = 5.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: I) 3x + 2y = 16;  II) 3x − 2y = 8.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) 3x + 2y = 16     II) 3x − 2y = 8",
      passos: [
        { expr: "coefs de y opostos (+2 e −2)", explica: "Soma direto.", status: "ok" },
        { expr: "soma: 6x = 24", explica: "y some.", status: "ok" },
        { expr: "x = 4", explica: "÷6.", status: "ok" },
        { expr: "volta em I: 12 + 2y = 16  →  y = 2", explica: "", status: "ok",
          professor: "Confere na II: 12 − 4 = 8 ✅." },
      ],
      fatorada: "(x, y) = (4, 2)",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "4" }, { nome: "3" }, { nome: "6" }],
      respostaCerta: "4",
      feedbackAcerto: "🎯 6x = 24 → x = 4.",
      feedbackErro: "Coefs de y são opostos. Soma: 6x = 24 → x = 4.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Numa lanchonete: 2 sucos + 1 lanche custam R$ 20. 2 sucos + 3 lanches custam R$ 40.",
    problema: "Quanto custa 1 lanche?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) 2s + l = 20     II) 2s + 3l = 40",
      passos: [
        { expr: "define: s = suco, l = lanche", explica: "", status: "neutro" },
        { expr: "coefs de s iguais (+2 e +2)", explica: "Trocar sinal em uma e somar.", status: "neutro",
          professor: "Multiplico I por −1 para 'inverter'. −2s − l = −20. Agora somo com II." },
        { expr: "I × (−1): −2s − l = −20", explica: "Todos os termos trocam sinal.", status: "ok" },
        { expr: "soma com II: 2l = 20  →  l = 10", explica: "s some.", status: "ok" },
        { expr: "volta em I: 2s + 10 = 20  →  s = 5", explica: "", status: "ok",
          professor: "Suco R$ 5, lanche R$ 10. Confere na II: 2·5 + 3·10 = 40 ✅." },
      ],
      fatorada: "Lanche: R$ 10  |  Suco: R$ 5",
      legenda: "Aplicação — lanchonete",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "1 lanche =",
      opcoes: [{ nome: "R$ 10" }, { nome: "R$ 5" }, { nome: "R$ 8" }],
      respostaCerta: "R$ 10",
      feedbackAcerto: "🎯 Subtraindo as equações: 2 lanches = 20 → lanche R$ 10.",
      feedbackErro:
        "Multiplique I por −1 e some com II. O suco some, sobra 2l = 20 → l = R$ 10.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Coefs opostos → soma direto. A letra some.",
      "Coefs iguais → multiplique uma equação por −1 e some (não subtraia).",
      "Coefs quaisquer → multiplique para gerar opostos (use MMC quando quiser eliminar exato).",
      "Ache uma letra, volte na equação mais simples e ache a outra.",
      "Confira SEMPRE nas duas equações originais.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "I) x + y = 6;  II) x − y = 2. x =",
        opcoes: ["4", "2", "6"], correta: 0,
        feedbackAcerto: "🎉 2x = 8 → x = 4.",
        feedbackErro: "Coefs de y opostos. Soma: 2x = 8 → x = 4." },
      { pergunta: "Se somando dá 2x = 10, então x =",
        opcoes: ["5", "10", "2"], correta: 0,
        feedbackAcerto: "🎉 ÷2 → x = 5.",
        feedbackErro: "Divide por 2: x = 5." },
      { pergunta: "I) 2x + y = 7;  II) 2x + 3y = 13. y =",
        opcoes: ["3", "2", "1"], correta: 0,
        feedbackAcerto: "🎉 II − I: 2y = 6 → y = 3.",
        feedbackErro: "Multiplique I por −1 e some: 2y = 6 → y = 3." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Balcão de preços",
    materiais: ["Papel", "Lápis"],
    passos: [
      "Crie 2 problemas com 2 tipos de produtos e preços diferentes.",
      "Escreva o sistema, resolva por adição (prepare os coefs se necessário).",
      "Confira substituindo nas duas equações.",
    ],
    registro: "📸 Foto do caderno com os 2 sistemas resolvidos.",
  },

  recompensa: { xp: 190, moedas: 95 },
};
