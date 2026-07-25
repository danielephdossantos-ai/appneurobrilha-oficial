import type { AulaV4 } from "../../types";

/**
 * Aula-piloto "escola particular top" — Trinômio Quadrado Perfeito.
 *
 * Diferenciais em relação à versão anterior:
 *  - Motivação com contexto real (ladrilhar um piso quadrado).
 *  - Descoberta GEOMÉTRICA: (a+b)² = a² + 2ab + b² provada pela área
 *    de um quadrado dividido em 4 pedaços. É assim que a criança de
 *    verdade "vê" por que o meio vale 2ab.
 *  - Explicação em 4 etapas, cada uma com "🔎 Na prática" numérico +
 *    visual próprio (checklist ou prova geométrica).
 *  - Prevenção explícita de 3 erros clássicos (armadilhas).
 *  - Prática progressiva: fácil → coeficiente ≠ 1 → sinal negativo →
 *    aplicação em geometria (área de terreno) → prova pela expansão.
 */
export const aula04_trinomio: AulaV4 = {
  slug: "u3-04-trinomio",
  titulo: "Trinômio quadrado perfeito",
  iconeTrilha: "🔺",
  bncc: ["EF08MA06"],
  duracaoMin: 28,
  metodologias: ["skemp", "vergnaud", "cpa"],

  // -----------------------------------------------------------------
  momento01_motivacao: {
    titulo: "O piso do salão",
    historia:
      "{NOME}, um pedreiro precisa ladrilhar um salão QUADRADO. Ele tem dois tipos de ladrilho: uns grandes com lado x e uns pequenos com lado 3. Ele quer usar 1 ladrilho grande, 2 tiras retangulares e 1 ladrilho pequeno pra formar UM quadrado maior. Quanto mede o lado desse quadrado maior? A resposta é (x+3) — e é isso que a fatoração vai revelar pra gente hoje.",
  },

  // -----------------------------------------------------------------
  momento02_exploracao: {
    instrucao:
      "Olhe o quadrado abaixo. Ele tem lado (x+3). Repare como a área dele se quebra em 4 pedaços — e como o meio (2·x·3) aparece SOZINHO da geometria, sem ninguém decorar fórmula.",
    cenas: [
      {
        tipo: "trinomioQuadrado",
        a: "x",
        b: "3",
        sinal: "+",
        legenda: "Prova visual: (x+3)²",
      },
      {
        tipo: "texto",
        texto:
          "Perceba: os DOIS retângulos amarelos são iguais (x·3 cada). Somados dão 2·x·3 = 6x. Esse é o 'termo do meio' do trinômio.",
      },
    ],
  },

  // -----------------------------------------------------------------
  momento03_descoberta: {
    perguntaGuia:
      "Por que o meio do trinômio quadrado perfeito é SEMPRE 2 vezes o produto das raízes?",
    pista:
      "Olhe o desenho: o retângulo 'a·b' aparece 2 vezes (em cima e do lado). Não é decoreba — é geometria pura.",
    revelacao:
      "(a+b)² = a² + 2ab + b². O '2ab' é a assinatura do trinômio quadrado perfeito. Se você achar essa assinatura, pode 'voltar' pro quadrado: (a+b)². Se o meio for negativo, é (a−b)².",
  },

  // -----------------------------------------------------------------
  momento04_explicacao: {
    titulo: "Como reconhecer e fatorar um TQP",
    etapas: [
      // Etapa 1 — o teste das 3 condições
      {
        texto:
          "1) Um trinômio ax² + bx + c é 'quadrado perfeito' quando passa em 3 condições: (i) √1º termo é exata; (ii) √3º termo é exata; (iii) o meio bate com 2·(raiz do 1º)·(raiz do 3º).",
        exemploReal: {
          titulo: "🔎 Na prática — x² + 6x + 9",
          contexto: "Vamos aplicar o teste em x² + 6x + 9:",
          visualMat: {
            tipo: "checklistTQP",
            trinomio: "x² + 6x + 9",
            raiz1: "x",
            raiz3: "3",
            meio: "6x",
            sinalMeio: "+",
            ehPerfeito: true,
            fatorada: "(x+3)²",
            legenda: "Teste das 3 condições",
          },
          destaque: "Passou nas 3 → x² + 6x + 9 = (x+3)².",
        },
      },

      // Etapa 2 — por que funciona (prova geométrica)
      {
        texto:
          "2) Por que a fatorada é (a+b)²? Porque a área do quadrado de lado (a+b) é EXATAMENTE a² + 2ab + b². Não é regra decorada — é área.",
        exemploReal: {
          titulo: "🔎 Prova pelo quadrado",
          contexto: "Quadrado de lado (x+3):",
          visualMat: {
            tipo: "trinomioQuadrado",
            a: "x",
            b: "3",
            sinal: "+",
            legenda: "(x+3)² = x² + 6x + 9",
          },
          destaque: "As 4 áreas somadas reconstroem o trinômio.",
        },
      },

      // Etapa 3 — meio negativo
      {
        texto:
          "3) Se o termo do meio é NEGATIVO, o sinal dentro do parêntese vira '−'. Ou seja, x² − 2ab + b² = (a − b)². Os quadrados no início e no fim continuam POSITIVOS (número ao quadrado nunca é negativo).",
        exemploReal: {
          titulo: "🔎 Na prática — x² − 10x + 25",
          contexto: "Teste em x² − 10x + 25:",
          visualMat: {
            tipo: "checklistTQP",
            trinomio: "x² − 10x + 25",
            raiz1: "x",
            raiz3: "5",
            meio: "10x",
            sinalMeio: "-",
            ehPerfeito: true,
            fatorada: "(x−5)²",
            legenda: "Meio negativo → (a−b)²",
          },
          destaque: "= (x − 5)². Note: o 25 continua POSITIVO.",
        },
      },

      // Etapa 4 — coeficiente diferente de 1
      {
        texto:
          "4) Quando o 1º termo NÃO é x² puro (ex.: 4x², 9x²), a raiz do 1º muda. √4x² = 2x. √9x² = 3x. O teste é o mesmo — só troca quem é 'a'.",
        exemploReal: {
          titulo: "🔎 Na prática — 4x² + 12x + 9",
          contexto: "Teste em 4x² + 12x + 9:",
          visualMat: {
            tipo: "checklistTQP",
            trinomio: "4x² + 12x + 9",
            raiz1: "2x",
            raiz3: "3",
            meio: "12x",
            sinalMeio: "+",
            ehPerfeito: true,
            fatorada: "(2x+3)²",
            legenda: "√1º = 2x, não x!",
          },
          destaque: "= (2x + 3)². Confira: 2·(2x)·(3) = 12x ✅",
        },
      },

      // Etapa 5 — 3 armadilhas
      {
        texto:
          "⚠️ 3 erros clássicos: (a) √(x² + 9) NÃO é (x+3) — só vale se o meio bater. (b) O termo do meio precisa ter x elevado a 1, não a 2. (c) Se o 3º termo é NEGATIVO, nunca é TQP (raiz de negativo não é real).",
        exemploReal: {
          titulo: "🔎 Falso alarme",
          contexto: "x² + 5x + 9 parece TQP? Vamos ver:",
          visualMat: {
            tipo: "checklistTQP",
            trinomio: "x² + 5x + 9",
            raiz1: "x",
            raiz3: "3",
            meio: "5x",
            sinalMeio: "+",
            ehPerfeito: false,
            legenda: "2·x·3 = 6x, não 5x",
          },
          destaque: "Não é TQP. Precisa de outra técnica de fatoração.",
        },
      },
    ],
  },

  // -----------------------------------------------------------------
  momento05_modelagem: {
    enunciado:
      "Brilha resolve: fatore x² + 10x + 25 mostrando o raciocínio inteiro.",
    resposta: "(x + 5)²",
    passos: [
      "Passo 1 — Raiz do 1º termo: √x² = x. Anoto a = x.",
      "Passo 2 — Raiz do 3º termo: √25 = 5. Anoto b = 5.",
      "Passo 3 — Testo o meio: 2 · a · b = 2 · x · 5 = 10x. Bate com o meio do trinômio ✅.",
      "Passo 4 — Sinal do meio é +, então dentro do parêntese vai +.",
      "Passo 5 — Escrevo a fatoração: x² + 10x + 25 = (x + 5)².",
      "Verificação: (x+5)² = x² + 2·x·5 + 25 = x² + 10x + 25 ✔",
    ],
    visualMat: {
      tipo: "checklistTQP",
      trinomio: "x² + 10x + 25",
      raiz1: "x",
      raiz3: "5",
      meio: "10x",
      sinalMeio: "+",
      ehPerfeito: true,
      fatorada: "(x+5)²",
      legenda: "Modelagem — Brilha resolve",
    },
  },

  // -----------------------------------------------------------------
  momento06_praticaGuiada: {
    enunciado: "Nós fazemos juntos: fatore x² + 4x + 4.",
    dica: "√4 = 2. Teste: 2·x·2 = 4x. Meio bate.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a forma fatorada?",
      opcoes: [{ nome: "(x + 2)²" }, { nome: "(x + 4)²" }, { nome: "(x − 2)²" }],
      respostaCerta: "(x + 2)²",
      feedbackAcerto:
        "🎯 Perfeito. √x²=x, √4=2, e 2·x·2 = 4x — o meio bate. Como o sinal do meio é +, dentro do parêntese vai +. Logo: (x+2)².",
      feedbackErro:
        "Cuidado: √4 = 2, não 4. E o sinal do meio é +, então é (x+2)², não (x−2)². Refaça o teste 2·x·2.",
    },
  },

  // -----------------------------------------------------------------
  momento07_praticaIndependente: {
    enunciado:
      "Você faz: fatore 9x² − 24x + 16. (Cuidado com √9x² e com o sinal do meio.)",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a forma fatorada?",
      opcoes: [
        { nome: "(3x − 4)²" },
        { nome: "(3x + 4)²" },
        { nome: "(9x − 4)²" },
      ],
      respostaCerta: "(3x − 4)²",
      feedbackAcerto:
        "🎯 Excelente! √9x² = 3x (não 9x!), √16 = 4, e 2·(3x)·4 = 24x — bate. Como o meio é NEGATIVO, dentro do parêntese vai '−'. Resultado: (3x − 4)².",
      feedbackErro:
        "Dois cuidados: (1) √9x² = 3x, não 9x. (2) O meio é −24x, então o sinal dentro do parêntese é '−'. Refaça e escolha (3x − 4)².",
    },
  },

  // -----------------------------------------------------------------
  momento08_aplicacao: {
    contexto:
      "Um terreno QUADRADO tem área x² + 12x + 36 metros quadrados. Um engenheiro precisa saber quanto mede cada lado desse terreno pra pedir a quantidade certa de muro.",
    problema:
      "Se a área é x² + 12x + 36 m² e o terreno é quadrado, quanto mede o lado?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o lado do terreno:",
      opcoes: [{ nome: "x + 6" }, { nome: "x + 12" }, { nome: "x + 36" }],
      respostaCerta: "x + 6",
      feedbackAcerto:
        "🎯 Isso! A área de um quadrado é lado². Como x² + 12x + 36 = (x+6)², então o lado é (x+6) metros. Aqui a álgebra virou geometria de verdade.",
      feedbackErro:
        "Pense: qual número ao quadrado dá 36? É 6. E 2·x·6 = 12x, que é o meio. Logo (x+6)² = x²+12x+36. O lado é (x+6).",
    },
  },

  // -----------------------------------------------------------------
  momento09_revisao: {
    pontos: [
      "TQP tem 3 condições: √1º exata, √3º exata, meio = 2·(raiz 1º)·(raiz 3º).",
      "Sinal do meio decide: '+' → (a+b)²; '−' → (a−b)². O 3º termo sempre positivo.",
      "Prova geométrica: (a+b)² é a área do quadrado dividido em a² + 2ab + b².",
      "Quando 1º termo tem coeficiente (ex.: 4x²), a raiz é 2x — cuidado ao tirar √.",
    ],
  },

  // -----------------------------------------------------------------
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "x² + 2x + 1 fatorado é:",
        opcoes: ["(x + 1)²", "(x − 1)²", "x² + 1"],
        correta: 0,
        feedbackAcerto:
          "🎉 √x²=x, √1=1, 2·x·1=2x — bate. Sinal +, então (x+1)².",
        feedbackErro:
          "Confira o sinal do meio (+). Também: (x−1)² dá x²−2x+1, não x²+2x+1.",
      },
      {
        pergunta: "x² − 6x + 9 fatorado é:",
        opcoes: ["(x − 3)²", "(x + 3)²", "x² − 9"],
        correta: 0,
        feedbackAcerto:
          "🎉 Meio negativo → sinal '−' dentro do parêntese. √9=3, 2·x·3=6x, bate. Logo (x−3)².",
        feedbackErro:
          "O meio é −6x, então dentro do parêntese vai '−'. Não é (x+3)². Nem é x²−9 (isso é diferença de quadrados, sem termo do meio).",
      },
      {
        pergunta: "Qual dos trinômios abaixo NÃO é quadrado perfeito?",
        opcoes: [
          "x² + 8x + 16",
          "x² + 5x + 9",
          "4x² + 20x + 25",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Muito bem! Em x²+5x+9: √9=3, mas 2·x·3=6x — o meio deveria ser 6x, e é 5x. Falhou no teste. Não é TQP.",
        feedbackErro:
          "Refaça o teste do meio em cada um. x²+8x+16: 2·x·4=8x ✅. 4x²+20x+25: 2·(2x)·5=20x ✅. Só x²+5x+9 não bate.",
      },
    ],
  },

  // -----------------------------------------------------------------
  momento11_missaoFamilia: {
    titulo: "O quadrado escondido",
    materiais: ["Papel quadriculado", "Régua", "Lápis colorido"],
    passos: [
      "Desenhe um quadrado grande de lado (x+2) usando papel quadriculado (escolha um valor pra x, ex.: 4 quadradinhos).",
      "Divida o quadrado em 4 pedaços como no desenho da aula: x·x, x·2, 2·x, 2·2.",
      "Pinte de cores diferentes e escreva a área de cada pedaço.",
      "Some as 4 áreas e mostre pra alguém em casa que o total é x² + 4x + 4 = (x+2)².",
    ],
    registro:
      "📸 Foto do quadrado desenhado + escreva 1 frase explicando pra sua família por que (x+2)² tem 4x no meio.",
  },

  recompensa: { xp: 200, moedas: 100, medalha: "🏆 Mestre do Quadrado Perfeito" },
};
