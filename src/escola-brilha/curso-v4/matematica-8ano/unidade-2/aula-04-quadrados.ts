import type { AulaV4 } from "../../types";

/**
 * Aula 04 · U2 — Quadrado da soma e quadrado da diferença.
 * Padrão piloto: prova geométrica + passo a passo + Professor + armadilha do 2ab.
 */
export const aula04_quadrados: AulaV4 = {
  slug: "u2-04-quadrados",
  titulo: "Produtos notáveis: (a+b)² e (a−b)²",
  iconeTrilha: "🟦",
  bncc: ["EF08MA06"],
  duracaoMin: 26,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Padrões que se repetem para sempre",
    historia:
      "{NOME}, tem produtos que aparecem SEMPRE em Álgebra: quadrados de soma e de diferença. Decorar por decorar não vale — a Oficina PROVA a fórmula uma vez e depois é atalho pra vida toda.",
  },

  momento02_exploracao: {
    instrucao: "Multiplique passo a passo e observe o padrão que sai.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "(a+b)² como tabela (distributiva)",
        cabecalhos: ["×", "a", "b"],
        linhas: [
          { rotulo: "a", valores: ["a²", "ab"] },
          { rotulo: "b", valores: ["ab", "b²"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "🔑 Soma das 4 células: a² + ab + ab + b² = a² + 2ab + b². Os DOIS ab do meio se juntam formando 2ab. Este é o famoso 'termo do meio' que muita gente esquece.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se (a+b)² = a² + 2ab + b², como fica (a−b)²?",
    pista: "Troque b por −b. Note o que muda no termo do meio.",
    revelacao: "(a−b)² = a² − 2ab + b². Só o SINAL do meio muda; os quadrados continuam positivos.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(a−b)² = ?",
      passos: [
        { expr: "(a − b)² = (a − b)·(a − b)", explica: "Elevar ao quadrado = multiplicar por si mesmo.", status: "neutro", professor: "Nunca faça (a−b)² = a² − b². Isso PULA o meio e está sempre errado (a menos que b=0)." },
        { expr: "= a·a + a·(−b) + (−b)·a + (−b)·(−b)", explica: "Distributiva completa.", status: "ok", professor: "4 produtos. Menos × menos no último dá positivo." },
        { expr: "= a² − ab − ab + b²", explica: "Calculo cada produto.", status: "ok" },
        { expr: "= a² − 2ab + b²", explica: "Junto os dois −ab.", status: "ok", professor: "Os dois termos do meio (−ab e −ab) se juntam em −2ab. Note que b² é positivo porque (−b)² = +b²." },
      ],
      fatorada: "(a − b)² = a² − 2ab + b²",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Dois quadrados perfeitos",
    etapas: [
      {
        texto: "Quadrado da SOMA: (a+b)² = a² + 2ab + b².",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(x + 3)² = ?",
            passos: [
              { expr: "(x + 3)²", explica: "Aplico o padrão (a+b)² com a=x e b=3.", status: "neutro" },
              { expr: "= x² + 2·x·3 + 3²", explica: "Substituo na fórmula.", status: "ok", professor: "Ordem obrigatória: (1º)² + 2·(1º)·(2º) + (2º)². Não pode faltar o do meio." },
              { expr: "= x² + 6x + 9", explica: "Calculo cada parte.", status: "ok" },
            ],
            fatorada: "(x + 3)² = x² + 6x + 9",
          },
          destaque: "Ordem: quadrado do 1º + 2·produto + quadrado do 2º.",
        },
      },

      {
        texto: "Quadrado da DIFERENÇA: (a−b)² = a² − 2ab + b². Só o meio muda de sinal.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(x − 5)² = ?",
            passos: [
              { expr: "(x − 5)²", explica: "Padrão (a−b)².", status: "neutro" },
              { expr: "= x² − 2·x·5 + 5²", explica: "Meio negativo, quadrados positivos.", status: "ok", professor: "Erro comum: escrever −5² como −25. O quadrado de −5 é +25 (menos × menos). Aqui a fórmula já vem com +b², então não erra." },
              { expr: "= x² − 10x + 25", explica: "Calculo.", status: "ok" },
            ],
            fatorada: "(x − 5)² = x² − 10x + 25",
          },
          destaque: "b² SEMPRE positivo. Só o 2ab muda de sinal.",
        },
      },

      {
        texto: "⚠️ Armadilha do 8º ano: (a+b)² NÃO é a² + b². Esquecer o 2ab é o erro nº 1.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Confirma numericamente: (3+4)²",
            passos: [
              { expr: "(3 + 4)² = 7² = 49", explica: "Cálculo direto.", status: "neutro", professor: "Vou testar com números concretos: 3+4 = 7, e 7² = 49. Este é o valor CORRETO." },
              { expr: "Errado: 3² + 4² = 9 + 16 = 25", explica: "Sem o 2ab.", status: "x", professor: "Se eu esquecer o 2ab, dá 25. Diferente de 49. Prova: a fórmula (a+b)² = a²+b² está ERRADA." },
              { expr: "Certo: 3² + 2·3·4 + 4² = 9 + 24 + 16 = 49", explica: "Com o 2ab.", status: "ok", professor: "Com o 2ab (=24), soma dá 49 — bate com o cálculo direto. A fórmula CORRETA é a²+2ab+b²." },
            ],
            fatorada: "(a+b)² ≠ a²+b². Sempre com 2ab.",
          },
          destaque: "SEMPRE inclua o 2ab.",
        },
      },

      {
        texto: "⚠️ Armadilha 2: elevar coeficientes. Em (2x + 3)², o (2x)² é 4x² (não 2x²).",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(2x + 3)² = ?",
            passos: [
              { expr: "(2x + 3)²", explica: "Aplico o padrão com a=2x, b=3.", status: "neutro" },
              { expr: "= (2x)² + 2·(2x)·3 + 3²", explica: "Cuidado: a INTEIRO ao quadrado.", status: "ok", professor: "O 'a' aqui é 2x — inteiro. (2x)² = 2²·x² = 4x². Nunca escreva só 2x² (esquecer o coeficiente ao quadrado)." },
              { expr: "= 4x² + 12x + 9", explica: "Calculo cada parte.", status: "ok" },
            ],
            fatorada: "(2x + 3)² = 4x² + 12x + 9",
          },
          destaque: "(coef · x)² eleva TAMBÉM o coeficiente.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: desenvolva (x − 5)².",
    resposta: "x² − 10x + 25",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(x − 5)²",
      passos: [
        { expr: "(x − 5)²", explica: "Padrão (a−b)².", status: "neutro" },
        { expr: "= x² − 2·x·5 + 5²", explica: "Aplico a fórmula.", status: "ok" },
        { expr: "= x² − 10x + 25", explica: "Calculo.", status: "ok" },
      ],
      fatorada: "= x² − 10x + 25",
      legenda: "Modelagem",
    },
    passos: ["Quadrado do 1º: x².", "2·produto: −2·x·5 = −10x.", "Quadrado do 2º: 25.", "= x² − 10x + 25."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: (x + 4)² = ?",
    dica: "(a+b)² = a² + 2ab + b². a=x, b=4.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(x + 4)²",
      passos: [
        { expr: "= x² + 2·x·4 + 4²", explica: "Aplico a fórmula.", status: "neutro" },
        { expr: "= x² + 8x + 16", explica: "Calculo.", status: "ok" },
      ],
      fatorada: "= x² + 8x + 16",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x² + 8x + 16" }, { nome: "x² + 16" }, { nome: "x² + 4x + 8" }],
      respostaCerta: "x² + 8x + 16",
      feedbackAcerto: "🎯 Meio = 2·x·4 = 8x.",
      feedbackErro: "Não esqueça do 2ab: 2·x·4 = 8x. (x+4)² ≠ x²+16.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: (2x − 3)² = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(2x − 3)²",
      passos: [
        { expr: "= (2x)² − 2·(2x)·3 + 3²", explica: "Padrão (a−b)² com a=2x.", status: "neutro" },
        { expr: "= 4x² − 12x + 9", explica: "Cuidado com (2x)²=4x².", status: "ok" },
      ],
      fatorada: "= 4x² − 12x + 9",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4x² − 12x + 9" }, { nome: "4x² + 12x + 9" }, { nome: "2x² − 6x + 9" }],
      respostaCerta: "4x² − 12x + 9",
      feedbackAcerto: "🎯 (2x)² − 2·(2x)·3 + 3² = 4x² − 12x + 9.",
      feedbackErro: "(2x)² = 4x² (eleva o coef 2 também). E o meio é NEGATIVO (diferença): −12x. Cuide dos dois erros comuns.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um jardim quadrado tem lado (x + 6) metros.",
    problema: "Qual a área expressa como polinômio?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Área = (x + 6)²",
      passos: [
        { expr: "(x + 6)²", explica: "Área de quadrado = lado².", status: "neutro" },
        { expr: "= x² + 2·x·6 + 6²", explica: "Fórmula.", status: "ok" },
        { expr: "= x² + 12x + 36", explica: "Resultado.", status: "ok", professor: "Se x = 2m, área = 4 + 24 + 36 = 64 = 8². Confere: lado 2+6=8, área 64." },
      ],
      fatorada: "Área = x² + 12x + 36 m²",
      legenda: "Aplicação — área de quadrado",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x² + 12x + 36" }, { nome: "x² + 36" }, { nome: "x² + 12x + 6" }],
      respostaCerta: "x² + 12x + 36",
      feedbackAcerto: "🎯 (x+6)² com todos os 3 termos.",
      feedbackErro: "6² = 36 (não 6). E não esqueça do 2·x·6 = 12x no meio.",
    },
  },

  momento09_revisao: {
    pontos: [
      "(a+b)² = a² + 2ab + b². (a−b)² = a² − 2ab + b².",
      "Sempre 3 termos. NUNCA 2. O 2ab é obrigatório.",
      "Coeficientes elevam junto: (2x)² = 4x².",
      "b² é sempre POSITIVO, mesmo em (a−b)².",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "(x+1)² =", opcoes: ["x²+2x+1", "x²+1", "x²+2x"], correta: 0, feedbackAcerto: "🎉 x² + 2·x·1 + 1².", feedbackErro: "Não esqueça do 2ab (=2x) e do b² (=1). São SEMPRE 3 termos." },
      { pergunta: "(x−2)² =", opcoes: ["x²−4x+4", "x²+4x+4", "x²−4"], correta: 0, feedbackAcerto: "🎉 Meio negativo, quadrados positivos.", feedbackErro: "(a−b)² tem meio negativo (−2ab = −4x) mas b² positivo (=+4). Nunca x²−4 (isso pula o 2ab)." },
      { pergunta: "(3x+1)² =", opcoes: ["9x²+6x+1", "9x²+1", "3x²+6x+1"], correta: 0, feedbackAcerto: "🎉 (3x)² = 9x², 2·(3x)·1 = 6x.", feedbackErro: "(3x)² = 3²·x² = 9x² (eleva o coef!). Se deu 3x², esqueceu o coef ao quadrado." },
      { pergunta: "(a+b)² é igual a a² + b²?", opcoes: ["Não, é a² + 2ab + b²", "Sim, sempre", "Só se a = b"], correta: 0, feedbackAcerto: "🎉 Sempre com 2ab.", feedbackErro: "Teste com números: (3+4)² = 49, mas 3²+4² = 25. Diferentes. A fórmula correta sempre tem o 2ab." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Tabuada dos quadrados",
    materiais: ["Papel"],
    passos: [
      "Desenvolva (x+2)², (x−4)², (2x+5)² passo a passo.",
      "Explique para alguém a regra dos 3 termos.",
      "Prove numericamente que (3+4)² ≠ 3² + 4².",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 180, moedas: 90 },
};
