import type { AulaV4 } from "../../types";

/** Aula 02 · U4 — Reduzir termos semelhantes e aplicar a distributiva. */
export const aula02_termosSemelhantes: AulaV4 = {
  slug: "u4-02-termos-semelhantes",
  titulo: "Juntar o que é Igual",
  iconeTrilha: "🧩",
  bncc: ["EF07MA13", "EF07MA14"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Não se soma laranja com maçã",
    historia:
      "{NOME}, se você tem 3 caixas de laranja e 2 caixas de maçã, não pode dizer que tem 5 caixas de laranja. Na álgebra é igual: 3x + 2y não vira 5xy. Hoje você descobre exatamente quais termos podem ser juntados — e por quê.",
  },

  momento02_exploracao: {
    instrucao: "Termos semelhantes têm a MESMA parte literal (mesmas letras com os mesmos expoentes).",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Semelhantes ou não?",
        cabecalhos: ["Termos", "Parte literal", "Podem juntar?"],
        linhas: [
          { rotulo: "1", valores: ["5x e 3x", "x e x", "Sim → 8x"] },
          { rotulo: "2", valores: ["5x e 3y", "x e y", "Não"] },
          { rotulo: "3", valores: ["4x² e 7x²", "x² e x²", "Sim → 11x²"] },
          { rotulo: "4", valores: ["4x² e 7x", "x² e x", "Não"] },
          { rotulo: "5", valores: ["2ab e 6ab", "ab e ab", "Sim → 8ab"] },
          { rotulo: "6", valores: ["9 e 4", "nenhuma letra", "Sim → 13"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Ao juntar termos semelhantes, some ou subtraia apenas os coeficientes. A parte literal se repete igual, nunca muda." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que 4x² e 7x não podem ser somados, se os dois têm x?",
    pista: "Teste com x = 2 e veja se juntar dá o mesmo resultado.",
    revelacao: "Porque x² e x são grandezas diferentes: com x = 2, 4x² + 7x = 16 + 14 = 30, enquanto '11x²' daria 44.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Testando 4x² + 7x com x = 2",
      passos: [
        { expr: "4 · 2² = 4 · 4 = 16", explica: "Primeiro termo.", status: "neutro" },
        { expr: "7 · 2 = 14", explica: "Segundo termo.", status: "neutro" },
        { expr: "16 + 14 = 30", explica: "Valor verdadeiro.", status: "ok" },
        { expr: "Se juntasse: 11x² = 11 · 4 = 44", explica: "Resultado diferente.", status: "x", professor: "O teste numérico é a prova definitiva: se juntar muda o valor, os termos não eram semelhantes." },
        { expr: "30 ≠ 44 → não são semelhantes", explica: "Conclusão.", status: "ok" },
      ],
      fatorada: "4x² + 7x permanece assim",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Reduzir, distribuir e eliminar parênteses",
    etapas: [
      {
        texto: "REDUZIR TERMOS SEMELHANTES: some os coeficientes e repita a parte literal.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Reduzir 7x + 4y − 3x + 2y",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "7x + 4y − 3x + 2y",
            passos: [
              { expr: "(7x − 3x) + (4y + 2y)", explica: "Agrupo semelhantes.", status: "neutro", professor: "Cada termo carrega o sinal que está à sua esquerda. O −3x viaja com o sinal de menos." },
              { expr: "= 4x + 6y", explica: "Somo coeficientes.", status: "ok" },
              { expr: "Não dá para juntar 4x com 6y", explica: "Letras diferentes.", status: "ok" },
            ],
            fatorada: "4x + 6y",
          },
          destaque: "Só os coeficientes mudam; a letra fica igual.",
        },
      },
      {
        texto: "DISTRIBUTIVA: multiplique o número de fora por CADA termo de dentro do parêntese.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Desenvolver 3(2x − 5)",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3(2x − 5)",
            passos: [
              { expr: "3 · 2x = 6x", explica: "Primeiro termo.", status: "neutro" },
              { expr: "3 · (−5) = −15", explica: "Segundo termo, com sinal.", status: "ok", professor: "Um erro comum é multiplicar só o primeiro termo e escrever 6x − 5. O fator de fora atinge todos os termos de dentro." },
              { expr: "= 6x − 15", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "6x − 15",
          },
          destaque: "O fator de fora multiplica TODOS os termos.",
        },
      },
      {
        texto: "SINAL DE MENOS ANTES DO PARÊNTESE: ele troca o sinal de todos os termos internos.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Simplificar 8x − (3x − 4)",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "8x − (3x − 4)",
            passos: [
              { expr: "−(3x − 4) = −1 · (3x − 4)", explica: "O menos é um −1.", status: "neutro", professor: "Enxergar o menos como −1 evita o erro mais comum da álgebra: esquecer de trocar o sinal do segundo termo." },
              { expr: "= −3x + 4", explica: "Todos os sinais trocam.", status: "ok" },
              { expr: "8x − 3x + 4", explica: "Reescrevo a expressão.", status: "ok" },
              { expr: "= 5x + 4", explica: "Reduzo semelhantes.", status: "ok" },
              { expr: "Erro comum: 8x − 3x − 4 = 5x − 4", explica: "Sinal esquecido.", status: "x" },
            ],
            fatorada: "5x + 4",
          },
          destaque: "Menos na frente do parêntese inverte todos os sinais de dentro.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: simplifique 5(x + 2) − 2(x − 3).",
    resposta: "3x + 16",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5(x + 2) − 2(x − 3)",
      passos: [
        { expr: "5(x + 2) = 5x + 10", explica: "Primeira distributiva.", status: "neutro" },
        { expr: "−2(x − 3) = −2x + 6", explica: "Segunda distributiva, com o menos.", status: "ok", professor: "O fator é −2, não 2. Assim, −2 · (−3) = +6." },
        { expr: "5x + 10 − 2x + 6", explica: "Junto tudo.", status: "ok" },
        { expr: "(5x − 2x) + (10 + 6)", explica: "Agrupo semelhantes.", status: "ok" },
        { expr: "= 3x + 16", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "3x + 16",
      legenda: "Brilha resolve",
    },
    passos: ["Distribuo o 5.", "Distribuo o −2 (atenção ao sinal).", "Agrupo os termos com x e os números.", "Resultado 3x + 16."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: reduza 9a − 4a + 2a.",
    dica: "Todos têm a mesma parte literal a. Some e subtraia só os coeficientes.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "9a − 4a + 2a",
      passos: [
        { expr: "9 − 4 + 2 = 7", explica: "Coeficientes.", status: "neutro" },
        { expr: "parte literal: a", explica: "Repete igual.", status: "ok" },
      ],
      fatorada: "= 7a",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7a" }, { nome: "15a" }, { nome: "7a³" }],
      respostaCerta: "7a",
      feedbackAcerto: "🎯 9 − 4 + 2 = 7, e a parte literal continua sendo a.",
      feedbackErro: "15a soma tudo ignorando o sinal de menos. E 7a³ inventa expoente: juntar termos não multiplica letras.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: desenvolva 4(2x − 3).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4(2x − 3)",
      passos: [
        { expr: "4 · 2x = 8x", explica: "Primeiro termo.", status: "neutro" },
        { expr: "4 · (−3) = −12", explica: "Segundo termo.", status: "ok" },
      ],
      fatorada: "= 8x − 12",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8x − 12" }, { nome: "8x − 3" }, { nome: "6x − 12" }],
      respostaCerta: "8x − 12",
      feedbackAcerto: "🎯 O 4 multiplicou os dois termos.",
      feedbackErro: "8x − 3 esqueceu de multiplicar o −3 pelo 4. A distributiva alcança todos os termos do parêntese.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "O perímetro de um retângulo é a soma dos quatro lados. Um retângulo tem base (2x + 3) cm e altura (x − 1) cm.",
    problema: "Escreva o perímetro na forma mais simples.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "P = 2 · base + 2 · altura",
      passos: [
        { expr: "P = 2(2x + 3) + 2(x − 1)", explica: "Fórmula do perímetro.", status: "neutro" },
        { expr: "2(2x + 3) = 4x + 6", explica: "Distributiva.", status: "ok" },
        { expr: "2(x − 1) = 2x − 2", explica: "Distributiva.", status: "ok" },
        { expr: "4x + 6 + 2x − 2", explica: "Somo tudo.", status: "ok" },
        { expr: "= 6x + 4", explica: "Reduzo semelhantes.", status: "ok", professor: "A expressão 6x + 4 vale para qualquer x válido. Com x = 5, por exemplo, o perímetro é 34 cm — e conferindo lado a lado: 13 + 4 + 13 + 4 = 34." },
      ],
      fatorada: "Perímetro = (6x + 4) cm",
      legenda: "Aplicação — perímetro algébrico",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o perímetro:",
      opcoes: [{ nome: "6x + 4" }, { nome: "3x + 2" }, { nome: "6x + 8" }],
      respostaCerta: "6x + 4",
      feedbackAcerto: "🎯 4x + 6 + 2x − 2 = 6x + 4.",
      feedbackErro: "3x + 2 é a soma de apenas UM par de lados. O perímetro conta os quatro lados, então é o dobro disso: 6x + 4.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Termos semelhantes têm a mesma parte literal, com os mesmos expoentes.",
      "Ao reduzir, some apenas os coeficientes e repita a letra.",
      "x e x² nunca são semelhantes.",
      "Distributiva: o fator de fora multiplica TODOS os termos de dentro.",
      "Menos antes do parêntese troca o sinal de todos os termos internos.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "6x + 2x =", opcoes: ["8x", "8x²", "12x"], correta: 0, feedbackAcerto: "🎉 Somei só os coeficientes.", feedbackErro: "Somar termos semelhantes não muda a letra nem cria expoente: 6 + 2 = 8, logo 8x." },
      { pergunta: "5a + 3b pode ser reduzido a:", opcoes: ["não pode reduzir", "8ab", "8a"], correta: 0, feedbackAcerto: "🎉 Letras diferentes não se juntam.", feedbackErro: "a e b são grandezas diferentes. A expressão 5a + 3b já está na forma mais simples." },
      { pergunta: "2(x + 4) =", opcoes: ["2x + 8", "2x + 4", "x + 8"], correta: 0, feedbackAcerto: "🎉 O 2 multiplicou os dois termos.", feedbackErro: "Pela distributiva, 2 · x = 2x e 2 · 4 = 8, resultando em 2x + 8." },
      { pergunta: "10x − (4x + 1) =", opcoes: ["6x − 1", "6x + 1", "14x + 1"], correta: 0, feedbackAcerto: "🎉 O menos trocou os dois sinais: 10x − 4x − 1.", feedbackErro: "O sinal de menos antes do parêntese inverte tudo: −(4x + 1) = −4x − 1. Logo 10x − 4x − 1 = 6x − 1." },
      { pergunta: "3x² + 5x² − x² =", opcoes: ["7x²", "7x⁶", "7x"], correta: 0, feedbackAcerto: "🎉 3 + 5 − 1 = 7, mantendo x².", feedbackErro: "Lembre que x² sozinho vale 1x². Então 3 + 5 − 1 = 7 e a parte literal continua x²." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "O perímetro da sala",
    materiais: ["Fita métrica ou passos", "Papel", "Caneta"],
    passos: [
      "Meça a base e a altura de um cômodo retangular da casa.",
      "Escreva o perímetro como 2(base) + 2(altura) e depois reduza a expressão.",
      "Compare o resultado com a soma direta dos quatro lados medidos.",
    ],
    registro: "📸 Foto do desenho do cômodo com as medidas e a expressão.",
  },
  recompensa: { xp: 225, moedas: 115, medalha: "Simplificador" },
};
