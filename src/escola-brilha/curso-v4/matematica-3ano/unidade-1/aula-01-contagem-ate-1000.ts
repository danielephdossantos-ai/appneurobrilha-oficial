import type { AulaV4 } from "../../types";

/**
 * Aula 1 — "Contando até 1.000"
 * Curso: Matemática 3º Ano · Unidade 1: A Cidade dos Números
 *
 * ⚠️ Novo padrão (3º ano em diante):
 * - Zero contagem infantil (nada de "toque em cada maçã").
 * - O número ESCRITO é o objeto matemático. Casas de valor (C-D-U)
 *   são o centro visual.
 * - Modelagem usa `casasValor` + `contaPassoAPasso` — algoritmo real.
 * - Contextos são realistas (Freudenthal / RME): habitantes, placas,
 *   páginas de livro, quilômetros. Nada de "cesta de frutas".
 *
 * BNCC: EF03MA01 (leitura, escrita, comparação e ordenação até 1.000).
 * Base científica: CPA · Kamii · Skemp · Vergnaud · RME.
 */
export const aula01_contagemAte1000: AulaV4 = {
  slug: "01-contagem-ate-1000",
  titulo: "Contando até 1.000",
  iconeTrilha: "🏙️",
  bncc: ["EF03MA01"],
  duracaoMin: 20,
  metodologias: ["cpa", "kamii", "skemp", "vergnaud", "rme"],

  momento01_motivacao: {
    titulo: "Bem-vindo(a) à CIDADE dos Números!",
    historia:
      "Você é o novo(a) assistente da Prefeitura. Chegou o Censo: precisa registrar TODOS os habitantes da Cidade. São mais de 800 pessoas! Contar de 1 em 1 levaria uma semana. Como escrever esses números de um jeito rápido — e que qualquer pessoa consiga ler?",
  },

  momento02_exploracao: {
    instrucao: "Repare como os números crescem quando a gente pula de 100 em 100.",
    cenas: [
      { tipo: "texto", texto: "Contando de 100 em 100:", destaque: true },
      { tipo: "texto", texto: "100 · 200 · 300 · 400 · 500 · 600 · 700 · 800 · 900 · 1.000." },
      { tipo: "texto", texto: "De 100 até 1.000 são 9 saltos de 100 (100, 200, 300... 900, 1.000). Contando desde o 0, são 10 saltos. O jeito rápido é ler o número inteiro, não contar pedacinho por pedacinho." },
      { tipo: "texto", texto: "Um número de 3 algarismos guarda uma mensagem: cada algarismo ocupa uma CASA diferente.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que o mesmo dígito 5 vale coisas diferentes em 5, 50 e 500?",
    pista:
      "Nosso sistema é DECIMAL. Cada casa vale 10 vezes MAIS que a casa da direita. O 5 não muda de valor sozinho — quem muda é a CASA em que ele está.",
    revelacao:
      "Nas Centenas · Dezenas · Unidades, o algarismo mais à esquerda é o mais forte. Em 573, o 5 vale 500. Em 375, o 5 vale só 5. A posição faz o valor.",
  },

  momento04_explicacao: {
    titulo: "Ler um número de 3 algarismos",
    etapas: [
      {
        texto:
          "Todo número até 999 mora em 3 casas: Centena · Dezena · Unidade. Da esquerda pra direita, cada casa perde um zero.",
        exemploReal: {
          contexto:
            "O ônibus escolar da Cidade tem a placa 347. Vamos ver onde cada algarismo mora:",
          casasValor: {
            numero: 347,
            extenso: "trezentos e quarenta e sete",
            mostrarDecomposicao: true,
          },
          destaque:
            "3 na Centena vale 300 · 4 na Dezena vale 40 · 7 na Unidade vale 7. Somando: 300 + 40 + 7 = 347.",
        },
      },
      {
        texto:
          "Repare no número 847. Cada algarismo tem um lugar fixo, e o lugar decide quanto ele vale.",
        casasValor: {
          numero: 847,
          mostrarDecomposicao: true,
          extenso: "oitocentos e quarenta e sete",
        },
        exemploReal: {
          contexto:
            "A biblioteca da Cidade tem 847 livros. Se eu troco a posição dos algarismos pra 478, muda tudo:",
          casasValor: {
            numero: 478,
            extenso: "quatrocentos e setenta e oito",
            mostrarDecomposicao: true,
          },
          destaque:
            "Mesmos algarismos (8, 4, 7), mas 478 é MENOR que 847 porque a Centena agora é 4, não 8.",
        },
      },
      {
        texto:
          "A leitura é sempre da esquerda pra direita: começa pela casa mais forte (Centena), depois Dezena, depois Unidade.",
        exemploReal: {
          contexto:
            "O prédio da Prefeitura tem 625 janelas. Lendo da esquerda pra direita:",
          casasValor: {
            numero: 625,
            extenso: "seiscentos e vinte e cinco",
            mostrarDecomposicao: true,
          },
          destaque:
            "Seiscentos (600) · e vinte (20) · e cinco (5) → seiscentos e vinte e cinco.",
        },
      },
      {
        texto:
          "Quando aparece um ZERO no meio, ele SEGURA a casa vazia. Em 506 não é 'cinquenta e seis' — é 'quinhentos e seis'.",
        casasValor: {
          numero: 506,
          mostrarDecomposicao: true,
          extenso: "quinhentos e seis",
        },
        exemploReal: {
          contexto:
            "O código do crachá da Prefeita é 806. Se você esquecer o zero e escrever 86, o crachá vira outro funcionário!",
          casasValor: {
            numero: 806,
            extenso: "oitocentos e seis",
            mostrarDecomposicao: true,
          },
          destaque:
            "O 0 na Dezena não é 'nada' — ele segura a casa vazia pra que o 8 continue valendo 800.",
        },
      },
      {
        texto:
          "Chegou a 1.000? Nasce uma casa nova: Milhar. É o primeiro número de 4 algarismos.",
        casasValor: {
          numero: 1000,
          mostrarDecomposicao: true,
          extenso: "mil",
        },
        exemploReal: {
          contexto:
            "O Censo terminou: a Cidade tem 1.248 habitantes. Um número de 4 algarismos usa 4 casas:",
          casasValor: {
            numero: 1248,
            extenso: "mil duzentos e quarenta e oito",
            mostrarDecomposicao: true,
          },
          destaque:
            "1 Milhar (1.000) + 2 Centenas (200) + 4 Dezenas (40) + 8 Unidades (8) = 1.248.",
        },
      },
      {
        texto:
          "Pra SOMAR dois números de 3 algarismos, começamos sempre pelas UNIDADES (coluna da direita). Depois dezenas. Por último centenas.",
        exemploReal: {
          contexto:
            "O bairro Leste tem 325 pessoas e o Oeste 243. Vamos somar juntos, passo a passo:",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [325, 243],
            resultado: 568,
            passos: [
              {
                coluna: "U",
                fala: "Unidades: 5 + 3 = 8. Escrevo 8 na coluna das unidades.",
                digito: 8,
                porque:
                  "Começamos pela direita: se der 10 ou mais, sobra 1 pra dezena.",
              },
              {
                coluna: "D",
                fala: "Dezenas: 2 + 4 = 6. Escrevo 6 na coluna das dezenas.",
                digito: 6,
                porque: "Cada dezena vale 10. 2 dezenas + 4 dezenas = 60.",
              },
              {
                coluna: "C",
                fala: "Centenas: 3 + 2 = 5. Escrevo 5 na coluna das centenas.",
                digito: 5,
                porque: "Cada centena vale 100. 3 centenas + 2 centenas = 500.",
              },
            ],
          },
          destaque: "Total: 568 habitantes ao todo entre Leste e Oeste.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "A Prefeita pediu: 'Some as pessoas do bairro Leste (325) com as do Oeste (243). Quantos habitantes ao todo?' — Brilha resolve com o algoritmo, explicando cada passo.",
    resposta: "568 habitantes",
    casasValor: {
      numero: 568,
      mostrarDecomposicao: true,
      extenso: "quinhentos e sessenta e oito",
    },
    passos: [
      "1º Armar a conta: alinhar unidade com unidade, dezena com dezena, centena com centena.",
      "2º Começar pela DIREITA (unidades): 5 + 3 = 8. Escrevo 8 nas unidades.",
      "3º Ir pra dezenas: 2 + 4 = 6. Escrevo 6 nas dezenas.",
      "4º Ir pra centenas: 3 + 2 = 5. Escrevo 5 nas centenas.",
      "Total: 568 habitantes. Verificando de cabeça: 300+200=500 e 25+43=68. 500+68 = 568. ✅",
    ],
  },

  momento06_praticaGuiada: {
    enunciado:
      "Agora juntos! O bairro Norte tem 412 pessoas e o Sul tem 235. Vamos somar passo a passo.",
    dica:
      "Sempre começamos pelas UNIDADES (coluna da direita). Depois dezenas. Por último centenas.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [412, 235],
      resultado: 647,
      modo: "explicacao",
      metodologia: "skemp",
      passos: [
        {
          coluna: "U",
          fala: "Unidades: 2 + 5 = 7. Escrevo 7 na coluna das unidades.",
          digito: 7,
          porque: "Somamos primeiro as unidades porque, se der 10 ou mais, sobra 1 pra dezena.",
        },
        {
          coluna: "D",
          fala: "Dezenas: 1 + 3 = 4. Escrevo 4 na coluna das dezenas.",
          digito: 4,
          porque: "Cada dezena vale 10. 1 dezena + 3 dezenas = 4 dezenas = 40.",
        },
        {
          coluna: "C",
          fala: "Centenas: 4 + 2 = 6. Escrevo 6 na coluna das centenas.",
          digito: 6,
          porque: "Cada centena vale 100. 4 centenas + 2 centenas = 6 centenas = 600.",
        },
      ],
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "Sua vez, sozinho(a). O Censo do bairro Central deu 523 pessoas e o Rural, 264. Some.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [523, 264],
      resultado: 787,
      modo: "pratica",
      perguntaFinal: "Quanto deu o total do Central + Rural?",
      opcoes: [787, 877, 697],
      feedbackAcerto:
        "🎯 Perfeito! 3+4=7 (unidades) · 2+6=8 (dezenas) · 5+2=7 (centenas). Total: 787 habitantes.",
      feedbackErro:
        "Refaça pelas unidades: 3+4=7, 2+6=8, 5+2=7 → 787. É importante começar da direita.",
      passos: [
        {
          coluna: "U",
          fala: "Unidades: 3 + 4 = 7.",
          digito: 7,
        },
        {
          coluna: "D",
          fala: "Dezenas: 2 + 6 = 8.",
          digito: 8,
        },
        {
          coluna: "C",
          fala: "Centenas: 5 + 2 = 7.",
          digito: 7,
        },
      ],
    },
  },

  momento08_aplicacao: {
    contexto:
      "A Prefeita precisa mandar imprimir crachás para o Censo. Ela pergunta: 'Como é que se escreve o número quinhentos e seis num crachá?' — parece fácil, mas o zero do meio confunde muita gente.",
    problema: "Qual dessas fichas está com 'quinhentos e seis' escrito CORRETAMENTE?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha a ficha certa:",
      opcoes: [
        { nome: "506" },
        { nome: "560" },
        { nome: "56" },
      ],
      respostaCerta: "506",
      feedbackAcerto:
        "🎯 Isso! O zero SEGURA a casa das dezenas vazia. Sem esse zero, o 5 escorregaria pra dezena e mudaria o valor.",
      feedbackErro:
        "Cuidado com o zero do meio. 'Quinhentos e seis' precisa de 3 casas: 5 (centena), 0 (dezena, vazia) e 6 (unidade) → 506.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Todo número até 999 tem 3 casas: Centena · Dezena · Unidade.",
      "A posição decide o valor: o 5 em 573 vale 500; em 375 vale só 5.",
      "Zero no meio SEGURA a casa vazia (506 ≠ 56).",
      "Somar números de 3 algarismos: sempre pelas UNIDADES primeiro.",
      "Do 1.000 em diante começa uma casa nova: o MILHAR.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "No número 749, quanto vale o algarismo 4?",
        opcoes: ["4", "40", "400"],
        correta: 1,
        feedbackAcerto:
          "🎉 Certo! O 4 está na casa das DEZENAS. Cada dezena vale 10 → 4 × 10 = 40.",
        feedbackErro:
          "O 4 está na casa do MEIO (dezena). Dezena vale 10, então 4 dezenas = 40. Se estivesse à esquerda (centena), valeria 400.",
      },
      {
        pergunta: "Como se escreve 'oitocentos e nove'?",
        opcoes: ["89", "809", "890"],
        correta: 1,
        feedbackAcerto:
          "🎉 Perfeito! Oitocentos = 8 na centena. E nove unidades. A dezena está vazia → coloca 0 pra segurar: 809.",
        feedbackErro:
          "Oitocentos precisa de 3 casas. Como não há dezenas, colocamos 0 na dezena pra segurar a posição: 809.",
      },
      {
        pergunta: "Somando 234 + 152, qual é o resultado?",
        opcoes: ["386", "376", "486"],
        correta: 0,
        feedbackAcerto:
          "🎉 Excelente! 4+2=6 · 3+5=8 · 2+1=3 → 386. Você somou pela direita, do jeito certo.",
        feedbackErro:
          "Refaça pelas unidades: 4+2=6, depois 3+5=8, depois 2+1=3 → 386.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caçada aos Números de 3 Algarismos",
    materiais: [
      "Caderno ou folha",
      "Lápis",
      "Uma revista, embalagem ou livro à mão",
    ],
    passos: [
      "Ande pela casa procurando 5 números de 3 algarismos: placa de carro, preço, número da página, código de barras, contador de aparelho.",
      "Anote cada número no caderno.",
      "Ao lado de cada um, escreva por extenso (ex.: 347 = 'trezentos e quarenta e sete').",
      "Marque em qual casa mora o maior dígito de cada número (C, D ou U).",
      "Peça a alguém da família pra somar 2 dos números que você achou, no papel, passo a passo.",
    ],
    registro: "📸 Uma foto do caderno com os 5 números anotados e a soma final.",
  },

  recompensa: {
    xp: 120,
    moedas: 60,
    medalha: "Cartógrafo(a) da Cidade dos Números",
  },
};
