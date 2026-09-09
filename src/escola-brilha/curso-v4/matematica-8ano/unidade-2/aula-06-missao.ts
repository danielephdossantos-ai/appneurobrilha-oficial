import type { AulaV4 } from "../../types";

/**
 * Aula 06 · U2 — Missão: reconhecer e aplicar os 3 produtos notáveis.
 * Padrão piloto: passo a passo interativo + Professor + reconhecimento de padrão.
 */
export const aula06_missao: AulaV4 = {
  slug: "u2-06-missao",
  titulo: "Missão — Mestre dos Produtos Notáveis",
  iconeTrilha: "🏅",
  bncc: ["EF08MA06"],
  duracaoMin: 28,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Fechando a Unidade 2",
    historia:
      "{NOME}, hoje TUDO junto: valor numérico, monômios, polinômios e os três produtos notáveis. Sua missão é RECONHECER o padrão antes de calcular. Reconheceu → usa o atalho. Não reconheceu → distributiva.",
  },

  momento02_exploracao: {
    instrucao: "Kit da Unidade 2 e o que cada um resolve.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Kit — quando usar",
        cabecalhos: ["Ferramenta", "Formato", "Resultado"],
        linhas: [
          { rotulo: "1", valores: ["Valor num.", "Substituir letra", "número"] },
          { rotulo: "2", valores: ["±×÷ Monômios", "peças semelhantes", "outro monômio"] },
          { rotulo: "3", valores: ["(a+b)²", "quadrado da soma", "a² + 2ab + b²"] },
          { rotulo: "4", valores: ["(a−b)²", "quadrado da diferença", "a² − 2ab + b²"] },
          { rotulo: "5", valores: ["(a+b)(a−b)", "soma × diferença", "a² − b²"] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 Cheque os sinais e a estrutura antes de calcular. Padrão errado = calculo perdido.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como reconhecer o padrão em 3 segundos?",
    pista: "Sinais iguais nos parênteses → quadrado perfeito. Sinais opostos → diferença de quadrados. Só um parêntese elevado → quadrado perfeito.",
    revelacao: "Padrão certo → atalho pronto. Erra o padrão → aplica fórmula errada.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Diagnóstico rápido de 4 expressões",
      passos: [
        { expr: "(x + 7)² → padrão (a+b)²", explica: "Um parêntese ao quadrado.", status: "ok", professor: "Vejo (⋯)² → quadrado perfeito. Se dentro tem +, é soma; se tem −, é diferença." },
        { expr: "(x − 4)(x + 4) → padrão (a−b)(a+b)", explica: "Sinais opostos.", status: "ok", professor: "Dois parênteses com mesma 1ª parte e sinais opostos → diferença de quadrados." },
        { expr: "(x + 3)(x + 5) → distributiva comum", explica: "Não é padrão notável.", status: "x", professor: "Sinais iguais mas constantes diferentes (3 e 5) — não é (a+b)². Usa distributiva normal." },
        { expr: "(2x − 1)² → padrão (a−b)²", explica: "Um parêntese ao quadrado, sinal negativo dentro.", status: "ok" },
      ],
      fatorada: "Diagnóstico: veja parênteses e sinais",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Combos — reconhecer e aplicar",
    etapas: [
      {
        texto: "(x + 7)(x + 7) é o mesmo que (x + 7)². Reconheça e use o atalho.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(x + 7)(x + 7)",
            passos: [
              { expr: "(x + 7)(x + 7)", explica: "Mesmo fator repetido.", status: "neutro", professor: "Reconhecimento: dois fatores idênticos = quadrado. (x+7)(x+7) = (x+7)²." },
              { expr: "= (x + 7)²", explica: "Reescrevo.", status: "ok" },
              { expr: "= x² + 2·x·7 + 7²", explica: "Aplico (a+b)².", status: "ok" },
              { expr: "= x² + 14x + 49", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "= x² + 14x + 49",
          },
          destaque: "Fator repetido = quadrado.",
        },
      },

      {
        texto: "Compare diferença de quadrados com quadrado da diferença.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(x − 4)(x + 4)  vs  (x − 4)²",
            passos: [
              { expr: "(x − 4)(x + 4)", explica: "Sinais opostos.", status: "neutro" },
              { expr: "= x² − 16", explica: "Diferença de quadrados: 2 termos.", status: "ok" },
              { expr: "(x − 4)²", explica: "Um parêntese ao quadrado.", status: "ok" },
              { expr: "= x² − 8x + 16", explica: "Quadrado da diferença: 3 termos.", status: "ok", professor: "Note: no quadrado perfeito, o b² é sempre POSITIVO (+16), mesmo com o meio negativo." },
            ],
            fatorada: "2 termos    vs    3 termos",
          },
          destaque: "Padrões diferentes → resultados diferentes.",
        },
      },

      {
        texto: "Nem toda multiplicação é notável. Se não é padrão, use distributiva.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(x + 3)(x + 5)  — não é notável",
            passos: [
              { expr: "(x + 3)(x + 5)", explica: "Constantes diferentes → distributiva.", status: "neutro" },
              { expr: "= x² + 5x + 3x + 15", explica: "4 produtos.", status: "ok" },
              { expr: "= x² + 8x + 15", explica: "Junto semelhantes.", status: "ok", professor: "Padrão útil: (x+a)(x+b) = x² + (a+b)x + a·b. Aqui a=3, b=5 → soma 8 e produto 15." },
            ],
            fatorada: "= x² + 8x + 15",
          },
          destaque: "Não é notável? Distributiva normal.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: desenvolva (2x + 5)².",
    resposta: "4x² + 20x + 25",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(2x + 5)²",
      passos: [
        { expr: "(2x + 5)²", explica: "Padrão (a+b)² com a=2x, b=5.", status: "neutro" },
        { expr: "= (2x)² + 2·(2x)·5 + 5²", explica: "Fórmula.", status: "ok" },
        { expr: "= 4x² + 20x + 25", explica: "(2x)² = 4x².", status: "ok", professor: "Coef eleva junto." },
      ],
      fatorada: "= 4x² + 20x + 25",
      legenda: "Modelagem",
    },
    passos: ["(2x)² = 4x².", "2·(2x)·5 = 20x.", "5² = 25.", "= 4x² + 20x + 25."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: (x − 6)² = ?",
    dica: "Padrão (a−b)² → a² − 2ab + b².",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(x − 6)²",
      passos: [
        { expr: "= x² − 2·x·6 + 6²", explica: "Fórmula.", status: "neutro" },
        { expr: "= x² − 12x + 36", explica: "Meio negativo, quadrados positivos.", status: "ok" },
      ],
      fatorada: "= x² − 12x + 36",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x² − 12x + 36" }, { nome: "x² − 36" }, { nome: "x² + 12x + 36" }],
      respostaCerta: "x² − 12x + 36",
      feedbackAcerto: "🎯 Quadrado da diferença.",
      feedbackErro: "É (a−b)² (um parêntese ao quadrado), não (a−b)(a+b). Tem 3 termos, meio negativo, b² positivo.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: (2x + 3)(2x − 3) = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(2x + 3)(2x − 3)",
      passos: [
        { expr: "= (2x)² − 3²", explica: "Soma × diferença.", status: "neutro" },
        { expr: "= 4x² − 9", explica: "Sem termo do meio.", status: "ok" },
      ],
      fatorada: "= 4x² − 9",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4x² − 9" }, { nome: "4x² + 12x − 9" }, { nome: "2x² − 9" }],
      respostaCerta: "4x² − 9",
      feedbackAcerto: "🎯 Diferença de quadrados.",
      feedbackErro: "Sinais opostos entre parênteses → SEM termo do meio. E (2x)² = 4x² (eleva o coef).",
    },
  },

  momento08_aplicacao: {
    contexto: "Um terreno quadrado tem lado (x + 10). O dono corta da ponta um quadrado menor de lado x.",
    problema: "Que área SOBRA depois do corte? Área que sobra = (x + 10)² − x².",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(x + 10)² − x²",
      passos: [
        { expr: "(x + 10)² − x²", explica: "Área total menos área cortada.", status: "neutro" },
        { expr: "= (x² + 20x + 100) − x²", explica: "Desenvolvo o quadrado.", status: "ok", professor: "(x+10)² = x² + 2·x·10 + 100 = x² + 20x + 100." },
        { expr: "= x² + 20x + 100 − x²", explica: "Tiro parênteses (menos troca sinais).", status: "ok" },
        { expr: "= 20x + 100", explica: "x² − x² cancelam.", status: "ok", professor: "Também dá pra ver como (a+b)² − a² = 2ab + b² = 2·x·10 + 100 = 20x + 100. Mesmo resultado, pensando pelo atalho." },
      ],
      fatorada: "Área que sobra = 20x + 100",
      legenda: "Aplicação — subtração de áreas",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "20x + 100" }, { nome: "100" }, { nome: "x² + 100" }],
      respostaCerta: "20x + 100",
      feedbackAcerto: "🎯 (x²+20x+100) − x² = 20x + 100.",
      feedbackErro: "Desenvolva (x+10)² completo (com o 2ab!) e depois subtraia x². Só o x² cancela; o 20x fica.",
    },
  },

  momento09_revisao: {
    pontos: [
      "3 padrões: (a+b)², (a−b)², (a+b)(a−b).",
      "Sinais IGUAIS entre parênteses → quadrado perfeito (3 termos).",
      "Sinais OPOSTOS → diferença de quadrados (2 termos).",
      "Coeficientes elevam junto ((2x)² = 4x²).",
      "Sem padrão? Distributiva normal.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "(x+3)² =", opcoes: ["x²+6x+9", "x²+9", "x²+6x"], correta: 0, feedbackAcerto: "🎉 Não esqueça de 2ab.", feedbackErro: "3 termos: x² + 2·x·3 + 3² = x²+6x+9. Nunca só x²+9 (falta o meio)." },
      { pergunta: "(y−1)² =", opcoes: ["y²−2y+1", "y²−1", "y²+2y+1"], correta: 0, feedbackAcerto: "🎉 Meio negativo.", feedbackErro: "(a−b)² tem meio −2ab (=−2y) e b² positivo (=+1). 3 termos." },
      { pergunta: "(x+8)(x−8) =", opcoes: ["x²−64", "x²+64", "x²−16x+64"], correta: 0, feedbackAcerto: "🎉 Sem termo do meio.", feedbackErro: "Sinais opostos → diferença de quadrados: x² − 8² = x² − 64. Sem meio." },
      { pergunta: "(3+x)² =", opcoes: ["9+6x+x²", "9+x²", "6+6x+x²"], correta: 0, feedbackAcerto: "🎉 3² + 2·3·x + x² = 9+6x+x².", feedbackErro: "(3+x)² = 3² + 2·3·x + x² = 9+6x+x². Não esqueça o 3² = 9 (não 6)." },
      { pergunta: "(x+4)(x+5) =", opcoes: ["x²+9x+20", "x²+20", "x²+9x"], correta: 0, feedbackAcerto: "🎉 Não é notável — distributiva.", feedbackErro: "Constantes diferentes (4 e 5) → não é (a+b)². Distributiva: x² + 5x + 4x + 20 = x²+9x+20." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma Mestre dos Produtos Notáveis",
    materiais: ["Papel, canetas"],
    passos: [
      "Faça o diploma 'Mestre dos Produtos Notáveis'.",
      "Escreva os 3 padrões e um exemplo de cada, mostrando a fórmula aplicada.",
      "Inclua um EXEMPLO onde NÃO é notável e você precisou usar distributiva.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 230, moedas: 115, medalha: "Mestre dos Produtos Notáveis" },
};
