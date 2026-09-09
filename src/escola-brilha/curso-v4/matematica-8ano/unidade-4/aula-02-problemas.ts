import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto — Traduzindo problemas em equações.
 * Formato: dicionário Português→Álgebra + passo a passo interativo
 * definindo x, montando a equação, resolvendo e VERIFICANDO no enunciado.
 */
export const aula02_problemas: AulaV4 = {
  slug: "u4-02-problemas",
  titulo: "Traduzindo problemas em equações",
  iconeTrilha: "🔍",
  bncc: ["EF08MA07"],
  duracaoMin: 28,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Português → Álgebra",
    historia:
      "{NOME}, o segredo de todo problema com equação é TRADUZIR o enunciado. 'O triplo', 'o dobro', 'menos', 'mais', 'tanto quanto' viram símbolos. Depois é só resolver — e voltar ao enunciado para responder o que foi perguntado.",
  },

  momento02_exploracao: {
    instrucao:
      "Dicionário mínimo: cada palavra vira um símbolo matemático.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Dicionário Português → Álgebra",
        cabecalhos: ["Palavra", "Símbolo", "Exemplo"],
        linhas: [
          { rotulo: "1", valores: ["a soma / mais", "+", "x + 5"] },
          { rotulo: "2", valores: ["a diferença / menos", "−", "x − 3"] },
          { rotulo: "3", valores: ["o dobro / duas vezes", "2x", "dobro de x"] },
          { rotulo: "4", valores: ["o triplo", "3x", "triplo de x"] },
          { rotulo: "5", valores: ["a metade", "x/2", "metade de x"] },
          { rotulo: "6", valores: ["a terça parte", "x/3", "terça parte de x"] },
          { rotulo: "7", valores: ["é / é igual a / dá", "=", "x = 10"] },
          { rotulo: "8", valores: ["consecutivo de x", "x + 1", "número seguinte"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Qual é o x?",
    pista: "Quase sempre é aquilo que o problema PERGUNTA.",
    revelacao:
      "3 passos SAGRADOS: (1) defina x com uma frase clara; (2) traduza cada frase em símbolos; (3) resolva e VOLTE ao enunciado para responder.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "O dobro de um número, mais 5, é igual a 21.",
      passos: [
        { expr: "seja x = o número", explica: "Passo 1: define x.", status: "neutro",
          professor: "Sempre comece por escrever uma frase: 'seja x = o número que quero descobrir'. Isso evita confusão nas próximas etapas." },
        { expr: "2x + 5 = 21", explica: "Passo 2: traduz.", status: "ok",
          professor: "'o dobro de um número' → 2x. 'mais 5' → + 5. 'é igual a 21' → = 21. Junto: 2x + 5 = 21." },
        { expr: "2x = 16", explica: "−5 dos dois lados.", status: "ok",
          professor: "Elimino o +5 subtraindo 5 dos dois lados." },
        { expr: "x = 8", explica: "÷2. Resposta: o número é 8.", status: "ok",
          professor: "Divido pelo coeficiente. Confere: 2·8 + 5 = 16 + 5 = 21. ✅" },
      ],
      fatorada: "O número é 8",
    },
  },

  momento04_explicacao: {
    titulo: "Traduzindo — passo a passo",
    etapas: [
      {
        texto: "Caso 1: idades. Ana tem o triplo da idade de Bruno. Juntos, 32 anos.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Ana tem o triplo da idade de Bruno. Juntos: 32.",
            passos: [
              { expr: "seja x = idade do Bruno", explica: "Escolho o MENOR como x — deixa a equação mais simples.", status: "neutro",
                professor: "Dica: quando um é 'o triplo do outro', escolha o mais NOVO (o menor) como x. Aí o outro fica 3x e a soma é limpa." },
              { expr: "Ana = 3x", explica: "Traduz 'triplo da idade de Bruno'.", status: "ok",
                professor: "'Ana tem o triplo do Bruno' → Ana = 3 vezes o Bruno = 3x." },
              { expr: "equação: x + 3x = 32", explica: "'juntos' significa somar.", status: "ok",
                professor: "'juntos' → soma das duas idades = 32." },
              { expr: "4x = 32", explica: "Soma os termos.", status: "ok" },
              { expr: "x = 8", explica: "÷4.", status: "ok",
                professor: "Bruno tem 8 anos." },
              { expr: "Ana = 3·8 = 24", explica: "Volta ao enunciado.", status: "ok",
                professor: "Sempre CALCULE também a outra grandeza e RESPONDA a pergunta do problema. Confere: 8 + 24 = 32. ✅" },
            ],
            fatorada: "Bruno: 8 anos  |  Ana: 24 anos",
          },
        },
      },
      {
        texto: "Caso 2: consecutivos. A soma de 3 números consecutivos é 30.",
        exemploReal: {
          titulo: "🔎 Consecutivos = x, x+1, x+2",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Soma de 3 consecutivos = 30",
            passos: [
              { expr: "x, x+1, x+2", explica: "Consecutivos: cada um vale +1 que o anterior.", status: "neutro",
                professor: "Truque: chame o MENOR de x. O seguinte é x+1. O outro é x+2. Nunca chame um de x e outro de y sem necessidade." },
              { expr: "x + (x+1) + (x+2) = 30", explica: "Soma = 30.", status: "ok" },
              { expr: "3x + 3 = 30", explica: "Junta termos semelhantes.", status: "ok",
                professor: "x + x + x = 3x. 1 + 2 = 3." },
              { expr: "3x = 27", explica: "−3 dos dois lados.", status: "ok" },
              { expr: "x = 9", explica: "÷3.", status: "ok" },
              { expr: "Números: 9, 10, 11", explica: "Volta ao enunciado.", status: "ok",
                professor: "Confere: 9 + 10 + 11 = 30. ✅" },
            ],
            fatorada: "9, 10, 11",
          },
        },
      },
      {
        texto: "Caso 3: dinheiro. Um livro custa R$ 15 a MAIS que uma caneta. Juntos: R$ 25.",
        exemploReal: {
          titulo: "🔎 'a mais que'",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Livro = caneta + 15. Livro + caneta = 25.",
            passos: [
              { expr: "seja x = caneta", explica: "Escolho a MAIS BARATA como x.", status: "neutro",
                professor: "'A é R$ 15 a mais que B' → A = B + 15. Chamo o menor (a caneta) de x. Assim o outro (livro) fica x + 15." },
              { expr: "livro = x + 15", explica: "Traduz 'R$ 15 a mais'.", status: "ok" },
              { expr: "x + (x + 15) = 25", explica: "'juntos' = soma.", status: "ok" },
              { expr: "2x + 15 = 25", explica: "Simplifica.", status: "ok" },
              { expr: "2x = 10  →  x = 5", explica: "−15, ÷2.", status: "ok" },
              { expr: "caneta = R$ 5, livro = R$ 20", explica: "Volta ao enunciado.", status: "ok",
                professor: "Confere: 5 + 20 = 25 e 20 − 5 = 15. ✅ Duas condições batendo." },
            ],
            fatorada: "Caneta: R$ 5  |  Livro: R$ 20",
          },
        },
      },
      {
        texto: "Armadilha: 'a mais que' é DIFERENTE de 'vezes'.",
        exemploReal: {
          titulo: "🔎 Cuidado com a palavra",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "'A tem 5 a mais que B'  vs.  'A tem 5 vezes o B'",
            passos: [
              { expr: "'5 a mais' → A = B + 5", explica: "É SOMA.", status: "ok",
                professor: "'a mais que' é diferença de valores — usa +. Se B = 3, A = 8." },
              { expr: "'5 vezes' → A = 5·B", explica: "É MULTIPLICAÇÃO.", status: "ok",
                professor: "'vezes' é multiplicação. Se B = 3, A = 15. Nunca confunda os dois." },
            ],
            fatorada: "'a mais' = soma  |  'vezes' = multiplicação",
          },
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: 'O triplo de um número menos 2 é 19'. Qual é o número?",
    resposta: "x = 7",
    passos: ["3x − 2 = 19", "3x = 21", "x = 7"],
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3x − 2 = 19",
      passos: [
        { expr: "seja x = o número", explica: "Passo 1.", status: "neutro" },
        { expr: "3x − 2 = 19", explica: "Traduz o enunciado.", status: "ok",
          professor: "'triplo' → 3x; 'menos 2' → −2; 'é 19' → = 19." },
        { expr: "3x = 21", explica: "+2 dos dois lados.", status: "ok" },
        { expr: "x = 7", explica: "÷3.", status: "ok",
          professor: "Confere: 3·7 − 2 = 21 − 2 = 19. ✅" },
      ],
      fatorada: "O número é 7",
      legenda: "Modelagem — Brilha resolve",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos juntos: 'O dobro de um número, mais 4, é 20'.",
    dica: "'dobro' → 2x; 'mais 4' → +4; 'é 20' → = 20.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2x + 4 = 20",
      passos: [
        { expr: "2x + 4 = 20", explica: "Traduz.", status: "ok" },
        { expr: "2x = 16", explica: "−4.", status: "ok" },
        { expr: "x = 8", explica: "÷2.", status: "ok" },
      ],
      fatorada: "O número é 8",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "8" }, { nome: "12" }, { nome: "10" }],
      respostaCerta: "8",
      feedbackAcerto: "🎯 2x + 4 = 20 → 2x = 16 → x = 8.",
      feedbackErro: "Primeiro −4 (2x = 16), depois ÷2. x = 8.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: 'A soma de 3 números consecutivos é 30. Qual é o MENOR?'",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x + (x+1) + (x+2) = 30",
      passos: [
        { expr: "consecutivos: x, x+1, x+2", explica: "Escolhe o menor como x.", status: "neutro" },
        { expr: "3x + 3 = 30", explica: "Soma termos.", status: "ok" },
        { expr: "3x = 27  →  x = 9", explica: "−3, ÷3.", status: "ok" },
        { expr: "menor = 9", explica: "Os 3 são 9, 10, 11.", status: "ok" },
      ],
      fatorada: "9, 10 e 11",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "O menor é:",
      opcoes: [{ nome: "9" }, { nome: "10" }, { nome: "11" }],
      respostaCerta: "9",
      feedbackAcerto: "🎯 3x + 3 = 30 → x = 9. Os 3 são 9, 10, 11.",
      feedbackErro: "Chame o menor de x. Soma: x + (x+1) + (x+2) = 30 → x = 9.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Um livro custa R$ 15 a MAIS que uma caneta. Juntos custam R$ 25.",
    problema: "Quanto custa a caneta?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x + (x + 15) = 25",
      passos: [
        { expr: "seja x = caneta", explica: "Escolhe a mais barata.", status: "neutro" },
        { expr: "livro = x + 15", explica: "'R$ 15 a mais'.", status: "ok" },
        { expr: "2x + 15 = 25", explica: "'juntos' = soma.", status: "ok" },
        { expr: "2x = 10  →  x = 5", explica: "−15, ÷2.", status: "ok" },
        { expr: "caneta R$ 5, livro R$ 20", explica: "Volta ao enunciado.", status: "ok" },
      ],
      fatorada: "Caneta: R$ 5",
      legenda: "Aplicação",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Caneta:",
      opcoes: [{ nome: "R$ 5" }, { nome: "R$ 10" }, { nome: "R$ 15" }],
      respostaCerta: "R$ 5",
      feedbackAcerto: "🎯 x + (x + 15) = 25 → x = 5.",
      feedbackErro:
        "Chame a caneta de x; o livro é x + 15. Juntos: x + (x+15) = 25 → x = 5.",
    },
  },

  momento09_revisao: {
    pontos: [
      "3 passos: define x → traduz → resolve e volta ao enunciado.",
      "'a mais que' → soma;  'vezes' → multiplicação. NÃO CONFUNDA.",
      "Consecutivos: x, x+1, x+2.",
      "'juntos' / 'ao todo' → soma total.",
      "Sempre substitua no enunciado (não só na equação) para conferir se a resposta faz sentido.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Dobro de x é 12. x =", opcoes: ["6", "10", "24"], correta: 0,
        feedbackAcerto: "🎉 2x = 12 → x = 6.",
        feedbackErro: "'Dobro' é 2x. 2x = 12 → x = 6." },
      { pergunta: "x + 4 = 10. x =", opcoes: ["6", "14", "4"], correta: 0,
        feedbackAcerto: "🎉 −4 → x = 6.",
        feedbackErro: "Subtraia 4 dos dois lados: x = 6." },
      { pergunta: "Metade de x mais 3 é 10. x =", opcoes: ["14", "7", "20"], correta: 0,
        feedbackAcerto: "🎉 x/2 + 3 = 10 → x/2 = 7 → x = 14.",
        feedbackErro: "x/2 = 7. Como 2 divide, passa multiplicando: x = 14." },
      { pergunta: "Ana tem 3 anos a mais que Bruno. Juntos: 21. Bruno =",
        opcoes: ["9", "12", "18"], correta: 0,
        feedbackAcerto: "🎉 x + (x+3) = 21 → x = 9.",
        feedbackErro: "Chame Bruno de x; Ana = x + 3. Soma = 21 → x = 9." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Detetive de problemas",
    materiais: ["Papel", "Lápis"],
    passos: [
      "Crie 3 problemas do dia a dia (idades, dinheiro, distância).",
      "Para cada um: escreva 'seja x = …', monte a equação, resolva e responda em frase.",
      "Confira substituindo no enunciado.",
    ],
    registro: "📸 Foto do caderno com os 3 problemas resolvidos.",
  },

  recompensa: { xp: 190, moedas: 95 },
};
