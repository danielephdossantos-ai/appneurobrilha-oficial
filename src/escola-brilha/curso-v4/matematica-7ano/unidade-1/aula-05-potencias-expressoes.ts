import type { AulaV4 } from "../../types";

/** Aula 05 · U1 — Potenciação com inteiros e expressões numéricas (missão da unidade). */
export const aula05_potenciasExpressoes: AulaV4 = {
  slug: "u1-05-potencias-expressoes",
  titulo: "Missão — Potências e Expressões",
  iconeTrilha: "🏅",
  bncc: ["EF07MA04"],
  duracaoMin: 32,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "O detalhe que derruba a turma inteira",
    historia:
      "{NOME}, (−2)² e −2² parecem a mesma coisa, mas dão resultados DIFERENTES. Nesta missão você fecha a unidade dos inteiros dominando potências e a ordem das operações.",
  },

  momento02_exploracao: {
    instrucao: "Guarde estas duas tabelas — elas resolvem quase tudo.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Potência de base negativa",
        cabecalhos: ["Expressão", "Expoente", "Resultado"],
        linhas: [
          { rotulo: "1", valores: ["(−2)²", "par", "+4"] },
          { rotulo: "2", valores: ["(−2)³", "ímpar", "−8"] },
          { rotulo: "3", valores: ["(−2)⁴", "par", "+16"] },
          { rotulo: "4", valores: ["−2²", "só o 2 elevado", "−4"] },
        ],
      },
      {
        tipo: "tabela",
        titulo: "Ordem das operações",
        cabecalhos: ["Prioridade", "Operação"],
        linhas: [
          { rotulo: "1º", valores: ["( ) parênteses, [ ], { }"] },
          { rotulo: "2º", valores: ["potências e raízes"] },
          { rotulo: "3º", valores: ["× e ÷ (esquerda → direita)"] },
          { rotulo: "4º", valores: ["+ e − (esquerda → direita)"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Sem parênteses, o sinal de menos NÃO entra na potência." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "(−2)² e −2² são iguais?",
    pista: "Pergunte: quem está sendo elevado ao quadrado?",
    revelacao: "Em (−2)² a base é −2 → +4. Em −2² a base é só o 2 → −(2·2) = −4.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(−2)²  vs  −2²",
      passos: [
        { expr: "(−2)² = (−2)·(−2)", explica: "Parênteses incluem o sinal.", status: "ok", professor: "Os parênteses dizem: TODO o número −2 é a base. Dois fatores negativos → produto positivo." },
        { expr: "= +4", explica: "Sinais iguais.", status: "ok" },
        { expr: "−2² = −(2·2)", explica: "Sem parênteses, só o 2 é base.", status: "x", professor: "O sinal de menos fica de fora, como se fosse −1 multiplicando: −1·(2²) = −1·4 = −4." },
        { expr: "= −4", explica: "Resultado diferente.", status: "ok" },
      ],
      fatorada: "(−2)² = +4   e   −2² = −4",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Potência de inteiro e ordem das operações",
    etapas: [
      {
        texto: "Base NEGATIVA com expoente PAR dá positivo; com expoente ÍMPAR dá negativo. É a regra dos sinais aplicada várias vezes.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "(−3)³",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(−3)³",
            passos: [
              { expr: "= (−3)·(−3)·(−3)", explica: "Três fatores.", status: "neutro" },
              { expr: "(−3)·(−3) = +9", explica: "Primeiro par → positivo.", status: "ok" },
              { expr: "(+9)·(−3) = −27", explica: "Sobrou um negativo.", status: "ok", professor: "Expoente ímpar sempre deixa um fator negativo sozinho, e é ele que define o sinal final." },
            ],
            fatorada: "= −27",
          },
          destaque: "Par → +, ímpar → −.",
        },
      },
      {
        texto: "Expoente 1 mantém o número; expoente 0 dá 1 para qualquer base diferente de zero.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "(−7)¹ e (−7)⁰",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(−7)¹  e  (−7)⁰",
            passos: [
              { expr: "(−7)¹ = −7", explica: "Um único fator.", status: "ok" },
              { expr: "(−7)⁰ = 1", explica: "Expoente zero.", status: "ok", professor: "Vale para qualquer base diferente de zero: a⁰ = 1 com a ≠ 0. A expressão 0⁰ é indeterminada e não é usada no 7º ano." },
            ],
            fatorada: "a⁰ = 1 (a ≠ 0)",
          },
          destaque: "Expoente 0 → 1, com base diferente de zero.",
        },
      },
      {
        texto: "Em expressões numéricas: resolva parênteses, depois potências, depois × e ÷, e por último + e −.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "−10 + (−2)³ ÷ 4 · 2",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "−10 + (−2)³ ÷ 4 · 2",
            passos: [
              { expr: "(−2)³ = −8", explica: "Potência primeiro.", status: "neutro" },
              { expr: "−10 + (−8) ÷ 4 · 2", explica: "Reescrevo.", status: "ok" },
              { expr: "(−8) ÷ 4 = −2", explica: "Divisão vem antes, está mais à esquerda.", status: "ok", professor: "× e ÷ têm a mesma prioridade. Como a divisão aparece primeiro, ela é resolvida primeiro." },
              { expr: "(−2) · 2 = −4", explica: "Agora a multiplicação.", status: "ok" },
              { expr: "−10 + (−4) = −14", explica: "Por último a adição.", status: "ok" },
            ],
            fatorada: "= −14",
          },
          destaque: "Ordem errada = resultado errado, mesmo com todas as contas certas.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: (−4)² − (−3) · 2.",
    resposta: "22",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(−4)² − (−3) · 2",
      passos: [
        { expr: "(−4)² = +16", explica: "Expoente par → positivo.", status: "neutro" },
        { expr: "(−3) · 2 = −6", explica: "Multiplicação antes da subtração.", status: "ok" },
        { expr: "16 − (−6)", explica: "Substituo.", status: "ok", professor: "Atenção ao sinal: estou subtraindo um resultado negativo, então vira adição." },
        { expr: "= 16 + 6 = 22", explica: "Somo o oposto.", status: "ok" },
      ],
      fatorada: "= 22",
      legenda: "Brilha resolve",
    },
    passos: [
      "(−4)² = +16 porque o expoente é par.",
      "(−3)·2 = −6.",
      "16 − (−6) = 16 + 6.",
      "= 22.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: (−5)² = ?",
    dica: "Os parênteses incluem o sinal; expoente 2 é par.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(−5)²",
      passos: [
        { expr: "= (−5)·(−5)", explica: "Dois fatores negativos.", status: "neutro" },
        { expr: "= +25", explica: "Sinais iguais.", status: "ok" },
      ],
      fatorada: "= +25",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "+25" }, { nome: "−25" }, { nome: "−10" }],
      respostaCerta: "+25",
      feedbackAcerto: "🎯 Expoente par com base negativa → positivo.",
      feedbackErro: "Com parênteses a base é −5: (−5)·(−5) = +25. Só seria −25 se estivesse escrito −5².",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: −3² = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "−3²",
      passos: [
        { expr: "= −(3·3)", explica: "Só o 3 está elevado.", status: "neutro" },
        { expr: "= −9", explica: "Sinal fica de fora.", status: "ok" },
      ],
      fatorada: "= −9",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "−9" }, { nome: "+9" }, { nome: "−6" }],
      respostaCerta: "−9",
      feedbackAcerto: "🎯 Sem parênteses, o sinal não entra na potência.",
      feedbackErro: "−3² significa −(3²) = −9. Para dar +9 teria que estar escrito (−3)².",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Um jogo dá +5 pontos por acerto e −3 pontos por erro. Ana teve 8 acertos e 6 erros; depois perdeu o dobro do que já tinha errado como penalidade.",
    problema: "Qual a pontuação final de Ana?  8·(+5) + 6·(−3) + 2·[6·(−3)]",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "8·(+5) + 6·(−3) + 2·[6·(−3)]",
      passos: [
        { expr: "8 · 5 = 40", explica: "Pontos dos acertos.", status: "neutro" },
        { expr: "6 · (−3) = −18", explica: "Pontos dos erros.", status: "ok" },
        { expr: "Colchete: 2 · (−18) = −36", explica: "Penalidade é o dobro.", status: "ok", professor: "Resolvo o que está dentro do colchete primeiro e só depois multiplico por 2." },
        { expr: "40 + (−18) + (−36)", explica: "Junto tudo.", status: "ok" },
        { expr: "Negativos: −18 − 36 = −54", explica: "Agrupo.", status: "ok" },
        { expr: "40 − 54 = −14", explica: "Sinais diferentes.", status: "ok" },
      ],
      fatorada: "Pontuação final = −14 pontos",
      legenda: "Aplicação — placar do jogo",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "−14 pontos" }, { nome: "+22 pontos" }, { nome: "−54 pontos" }],
      respostaCerta: "−14 pontos",
      feedbackAcerto: "🎯 40 de acertos contra 54 negativos: sobra −14.",
      feedbackErro: "Some tudo: +40, −18 e −36. Os negativos somam −54; 40 − 54 = −14. Ela terminou negativa.",
    },
  },

  momento09_revisao: {
    pontos: [
      "(−a)ⁿ com n par → positivo; com n ímpar → negativo.",
      "−aⁿ ≠ (−a)ⁿ: sem parênteses o sinal fica de fora.",
      "a⁰ = 1 para a ≠ 0.",
      "Ordem: parênteses → potências → × e ÷ → + e −.",
      "Adição e subtração de inteiros seguem módulo e sinal.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "(−3)⁴ =", opcoes: ["+81", "−81", "−12"], correta: 0, feedbackAcerto: "🎉 Expoente par → positivo. 3⁴ = 81.", feedbackErro: "3⁴ = 81 e o expoente é par, então o resultado é +81." },
      { pergunta: "(−2)⁵ =", opcoes: ["−32", "+32", "−10"], correta: 0, feedbackAcerto: "🎉 Expoente ímpar → negativo. 2⁵ = 32.", feedbackErro: "2⁵ = 32 e o expoente 5 é ímpar, então o resultado é −32." },
      { pergunta: "−4² =", opcoes: ["−16", "+16", "−8"], correta: 0, feedbackAcerto: "🎉 Sem parênteses: −(4²) = −16.", feedbackErro: "Só o 4 está elevado: −(4·4) = −16. Com parênteses, (−4)², daria +16." },
      { pergunta: "10 − 2 · (−3) =", opcoes: ["16", "−24", "4"], correta: 0, feedbackAcerto: "🎉 2·(−3) = −6 e 10 − (−6) = 16.", feedbackErro: "Multiplicação primeiro: 2·(−3) = −6. Depois 10 − (−6) = 10 + 6 = 16." },
      { pergunta: "(−6)⁰ + (−1)⁷ =", opcoes: ["0", "2", "−2"], correta: 0, feedbackAcerto: "🎉 1 + (−1) = 0.", feedbackErro: "(−6)⁰ = 1 (base diferente de zero) e (−1)⁷ = −1 (expoente ímpar). Soma: 1 + (−1) = 0." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma Mestre dos Inteiros",
    materiais: ["Papel", "Canetas coloridas"],
    passos: [
      "Monte um cartaz com as 4 regras: adição, subtração, multiplicação/divisão e potência de base negativa.",
      "Escreva um exemplo resolvido de cada uma, mostrando o passo a passo.",
      "Inclua o contra-exemplo (−2)² = +4 contra −2² = −4 destacado em vermelho.",
    ],
    registro: "📸 Foto do cartaz.",
  },
  recompensa: { xp: 240, moedas: 120, medalha: "Mestre dos Inteiros" },
};
