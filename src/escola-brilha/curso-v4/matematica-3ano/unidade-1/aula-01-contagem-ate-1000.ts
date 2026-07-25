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
      { tipo: "texto", texto: "Só 10 saltos e chegamos em MIL. O jeito rápido é ler o número inteiro, não contar pedacinho por pedacinho." },
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
      },
      {
        texto:
          "Repare no número 847. Cada algarismo tem um lugar fixo, e o lugar decide quanto ele vale.",
        casasValor: {
          numero: 847,
          mostrarDecomposicao: true,
          extenso: "oitocentos e quarenta e sete",
        },
      },
      {
        texto:
          "A leitura é sempre da esquerda pra direita: começa pela casa mais forte (Centena), depois Dezena, depois Unidade.",
      },
      {
        texto:
          "Quando aparece um ZERO no meio, ele SEGURA a casa vazia. Em 506 não é 'cinquenta e seis' — é 'quinhentos e seis'.",
        casasValor: {
          numero: 506,
          mostrarDecomposicao: true,
          extenso: "quinhentos e seis",
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
      "A Prefeita precisa mandar imprimir crachás. Ela pergunta: 'Quantos habitantes tem a Cidade se juntarmos Leste (325) + Oeste (243) + Norte (412) + Sul (235) + Central (523) + Rural (264)?' Antes de calcular tudo, ela quer saber qual é o número CERTO de 3 algarismos que representa quinhentos e seis.",
    problema: "Qual dessas fichas está com 'quinhentos e seis' escrito CORRETAMENTE?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha a ficha certa:",
      opcoes: [
        { nome: "506", imagemUrl: "" },
        { nome: "560", imagemUrl: "" },
        { nome: "56", imagemUrl: "" },
        { nome: "5006", imagemUrl: "" },
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
