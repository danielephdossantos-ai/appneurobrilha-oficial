import type { AulaV4 } from "../../types";

/**
 * Aula 1 · U1 — "Contando até 10.000"
 * Curso: Matemática 4º Ano · Reino dos Números
 * BNCC: EF04MA01. Base: CPA · Kamii · Skemp · Vergnaud · RME.
 */
export const aula01_contagemAte10000: AulaV4 = {
  slug: "u1-01-contagem-ate-10000",
  titulo: "Contando até 10.000",
  iconeTrilha: "🏰",
  bncc: ["EF04MA01"],
  duracaoMin: 22,
  metodologias: ["cpa", "kamii", "skemp", "vergnaud", "rme"],

  momento01_motivacao: {
    titulo: "Bem-vindo(a) ao REINO dos Números!",
    historia:
      "{NOME}, a Cidade cresceu tanto que virou um REINO. Dez cidades vizinhas se juntaram: agora o Reino tem quase 10.000 moradores. O mestre matemático te chama: quantos zeros o Reino inteiro tem? Como escrever esse número gigante sem se perder?",
  },

  momento02_exploracao: {
    instrucao: "Repare como os números crescem quando a gente pula de 1.000 em 1.000.",
    cenas: [
      { tipo: "texto", texto: "Contando de 1.000 em 1.000:", destaque: true },
      { tipo: "texto", texto: "1.000 · 2.000 · 3.000 · 4.000 · 5.000 · 6.000 · 7.000 · 8.000 · 9.000 · 10.000." },
      { tipo: "texto", texto: "Só 10 saltos e chegamos em DEZ MIL. Aparece uma casa nova à esquerda: a Unidade de Milhar (UM)." },
      { tipo: "texto", texto: "Um número de 4 algarismos guarda 4 mensagens: UM · C · D · U.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que 2.475 é maior que 2.457 se os dois usam os mesmos algarismos?",
    pista:
      "Cada casa vale 10 vezes mais que a casa da direita. Trocar dígitos de lugar TROCA o valor dele.",
    revelacao:
      "Em UM·C·D·U, o algarismo mais à esquerda é o mais forte. Em 2.475 o 7 está na dezena (70). Em 2.457 o 7 está na unidade (7). Por isso 2.475 > 2.457.",
  },

  momento04_explicacao: {
    titulo: "Ler um número de 4 algarismos",
    etapas: [
      {
        texto:
          "Todo número até 9.999 mora em 4 casas: Unidade de Milhar · Centena · Dezena · Unidade. Da esquerda pra direita, cada casa perde um zero.",
        exemploReal: {
          contexto:
            "O Reino tem 3.472 famílias cadastradas. Vamos ver onde cada algarismo mora:",
          casasValor: {
            numero: 3472,
            extenso: "três mil, quatrocentos e setenta e dois",
            mostrarDecomposicao: true,
          },
          destaque:
            "3 no UM vale 3.000 · 4 na Centena vale 400 · 7 na Dezena vale 70 · 2 na Unidade vale 2. Total: 3.472.",
        },
      },
      {
        texto:
          "Repare no número 5.860. O zero à direita segura a casa das unidades vazia — o número continua tendo 4 casas.",
        casasValor: {
          numero: 5860,
          mostrarDecomposicao: true,
          extenso: "cinco mil, oitocentos e sessenta",
        },
        exemploReal: {
          contexto: "Se eu trocar o 5 com o 8, vira 8.560 — muito maior:",
          casasValor: {
            numero: 8560,
            extenso: "oito mil, quinhentos e sessenta",
            mostrarDecomposicao: true,
          },
          destaque:
            "Mesmos algarismos (5, 8, 6, 0), mas 8.560 > 5.860 porque o 8 agora está no MILHAR.",
        },
      },
      {
        texto:
          "A leitura é sempre da esquerda pra direita: começa pelo Milhar, depois Centena, Dezena, Unidade.",
        exemploReal: {
          contexto: "O castelo do Reino tem 6.240 tijolos:",
          casasValor: {
            numero: 6240,
            extenso: "seis mil, duzentos e quarenta",
            mostrarDecomposicao: true,
          },
          destaque: "Seis mil (6.000) · duzentos (200) · e quarenta (40) → seis mil, duzentos e quarenta.",
        },
      },
      {
        texto:
          "Chegou a 10.000? Nasce uma casa nova: Dezena de Milhar. É o primeiro número de 5 algarismos.",
        casasValor: {
          numero: 10000,
          mostrarDecomposicao: true,
          extenso: "dez mil",
        },
        exemploReal: {
          contexto: "O Reino inteiro tem 10.000 moradores — um número redondo que abre a próxima casa.",
          casasValor: {
            numero: 10000,
            extenso: "dez mil",
            mostrarDecomposicao: true,
          },
          destaque: "1 na Dezena de Milhar (10.000) + 0 em UM + 0 em C + 0 em D + 0 em U.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "O escriba pediu: 'Some as famílias do lado Norte (3.240) com as do Sul (2.130).' Brilha resolve com o algoritmo, sem reagrupar.",
    resposta: "5.370 famílias",
    casasValor: {
      numero: 5370,
      mostrarDecomposicao: true,
      extenso: "cinco mil, trezentos e setenta",
    },
    passos: [
      "1º Armar a conta: UM com UM, C com C, D com D, U com U.",
      "2º Unidades: 0 + 0 = 0.",
      "3º Dezenas: 4 + 3 = 7.",
      "4º Centenas: 2 + 1 = 3.",
      "5º Milhares: 3 + 2 = 5. Total: 5.370.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado:
      "Juntos! O lado Leste tem 4.312 pessoas e o Oeste 2.235. Vamos somar passo a passo.",
    dica: "Sempre pelas UNIDADES primeiro (coluna da direita).",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [4312, 2235],
      resultado: 6547,
      modo: "explicacao",
      metodologia: "skemp",
      passos: [
        { coluna: "U", fala: "Unidades: 2 + 5 = 7.", digito: 7 },
        { coluna: "D", fala: "Dezenas: 1 + 3 = 4.", digito: 4 },
        { coluna: "C", fala: "Centenas: 3 + 2 = 5.", digito: 5 },
        { coluna: "UM", fala: "Milhares: 4 + 2 = 6.", digito: 6 },
      ],
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez. O bairro Central deu 5.123 pessoas e o Rural, 2.164. Some.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [5123, 2164],
      resultado: 7287,
      modo: "pratica",
      perguntaFinal: "Quanto deu o total do Central + Rural?",
      opcoes: [7287, 7387, 6287],
      feedbackAcerto:
        "🎯 Perfeito! 3+4=7 · 2+6=8 · 1+1=2 · 5+2=7 → 7.287 habitantes.",
      feedbackErro:
        "Refaça pelas unidades: 3+4=7, 2+6=8, 1+1=2, 5+2=7 → 7.287.",
      passos: [
        { coluna: "U", fala: "Unidades: 3 + 4 = 7.", digito: 7 },
        { coluna: "D", fala: "Dezenas: 2 + 6 = 8.", digito: 8 },
        { coluna: "C", fala: "Centenas: 1 + 1 = 2.", digito: 2 },
        { coluna: "UM", fala: "Milhares: 5 + 2 = 7.", digito: 7 },
      ],
    },
  },

  momento08_aplicacao: {
    contexto:
      "O escriba precisa mandar imprimir crachás. 'Como se escreve o número três mil e sete num crachá?' — o zero do meio confunde muita gente.",
    problema: "Qual dessas fichas está com 'três mil e sete' escrito CORRETAMENTE?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha a ficha certa:",
      opcoes: [{ nome: "3.007" }, { nome: "3.070" }, { nome: "37" }],
      respostaCerta: "3.007",
      feedbackAcerto:
        "🎯 Isso! Precisa de 4 casas: 3 (UM) · 0 (C) · 0 (D) · 7 (U). Os zeros seguram as casas vazias.",
      feedbackErro:
        "'Três mil e sete' tem 4 casas. Centena e dezena estão vazias — precisam de 0 pra segurar: 3.007.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Todo número até 9.999 tem 4 casas: UM · C · D · U.",
      "A posição decide o valor: 7 em 7.500 vale 7.000; em 5.700 vale 700.",
      "Zeros no meio SEGURAM casas vazias (3.007 ≠ 37).",
      "Somar de 4 dígitos: sempre pelas UNIDADES primeiro.",
      "Do 10.000 em diante começa a Dezena de Milhar.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "No número 4.628, quanto vale o algarismo 6?",
        opcoes: ["6", "60", "600"],
        correta: 2,
        feedbackAcerto: "🎉 Certo! O 6 está na CENTENA → 6 × 100 = 600.",
        feedbackErro: "O 6 é o 2º da esquerda pra direita: casa das centenas. 6 centenas = 600.",
      },
      {
        pergunta: "Como se escreve 'cinco mil e nove'?",
        opcoes: ["59", "5.009", "5.090"],
        correta: 1,
        feedbackAcerto: "🎉 Perfeito! 5 (UM) · 0 (C) · 0 (D) · 9 (U) → 5.009.",
        feedbackErro: "Precisa de 4 casas. Sem centenas e dezenas: zero para segurar. 5.009.",
      },
      {
        pergunta: "Somando 2.134 + 1.252, qual é o resultado?",
        opcoes: ["3.386", "3.286", "3.396"],
        correta: 0,
        feedbackAcerto: "🎉 4+2=6 · 3+5=8 · 1+2=3 · 2+1=3 → 3.386.",
        feedbackErro: "Pelas unidades: 4+2=6, 3+5=8, 1+2=3, 2+1=3 → 3.386.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caçada aos Números de 4 Algarismos",
    materiais: ["Caderno", "Lápis", "Uma conta de luz, extrato ou embalagem"],
    passos: [
      "Ache 5 números de 4 algarismos pela casa (conta de luz, CEP, ano, valor, código).",
      "Anote cada um no caderno.",
      "Ao lado, escreva por extenso (ex.: 3.472 = 'três mil, quatrocentos e setenta e dois').",
      "Marque em qual casa (UM, C, D ou U) mora o maior algarismo.",
      "Peça a alguém pra somar 2 deles no papel, passo a passo.",
    ],
    registro: "📸 Uma foto do caderno com os 5 números e a soma final.",
  },

  recompensa: {
    xp: 130,
    moedas: 70,
    medalha: "Aprendiz do Reino",
  },
};
