import type { AulaV4 } from "../../types";

/**
 * Aula 2 — "O Endereço dos Números (Valor Posicional)"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Padrão formal (3º ano+): sem cesta de frutas. O número escrito
 * (CDU) é o objeto matemático. Cada etapa da explicação traz um
 * exemplo real de aplicação.
 * BNCC: EF03MA02 (composição/decomposição por ordens).
 * Metodologias: CPA · Skemp (compreensão relacional) · RME.
 */
export const aula02_valorPosicional: AulaV4 = {
  slug: "02-valor-posicional",
  titulo: "O Endereço dos Números",
  iconeTrilha: "🏷️",
  bncc: ["EF03MA02"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp", "rme"],

  momento01_motivacao: {
    titulo: "Cada dígito tem um ENDEREÇO",
    historia:
      "A Prefeita entregou pra você três placas: 3, 30 e 300. 'Repare bem: o dígito 3 aparece nas três, mas em cada uma vale uma coisa diferente. Como pode? Hoje vamos descobrir como o LUGAR muda o valor.'",
  },

  momento02_exploracao: {
    instrucao: "Observe como o mesmo dígito muda de valor conforme a posição.",
    cenas: [
      { tipo: "texto", texto: "Placa A: 3   →   3 vale 3 (Unidade)" },
      { tipo: "texto", texto: "Placa B: 30  →   3 vale 30 (Dezena)" },
      { tipo: "texto", texto: "Placa C: 300 →   3 vale 300 (Centena)", destaque: true },
      { tipo: "texto", texto: "Mesmo algarismo. Três valores. Só a POSIÇÃO mudou." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que o mesmo algarismo vale coisas diferentes em cada posição?",
    pista:
      "Nosso sistema é DECIMAL: cada casa vale 10 vezes mais que a casa da direita.",
    revelacao:
      "Da direita pra esquerda: Unidade (1) · Dezena (10) · Centena (100). O algarismo NÃO muda de valor sozinho — quem muda é a CASA em que ele mora.",
  },

  momento04_explicacao: {
    titulo: "Ler a placa CDU: 3 casas, 3 tamanhos",
    etapas: [
      {
        texto:
          "Casa da UNIDADE (à direita): cada 1 vale 1. É a casa mais 'fraca'.",
        exemploReal: {
          contexto:
            "A senha do cofre da Prefeitura termina em 4. Esse 4 mora na Unidade e vale 4.",
          casasValor: {
            numero: 4,
            extenso: "quatro",
            mostrarDecomposicao: false,
          },
          destaque: "Na Unidade, cada algarismo vale ele mesmo.",
        },
      },
      {
        texto:
          "Casa da DEZENA (meio): cada 1 vale 10. Um passo pra esquerda multiplica por 10.",
        exemploReal: {
          contexto:
            "O ônibus 30 passa na Praça Central. O 3 dessa placa está na Dezena — vale 30, não 3.",
          casasValor: {
            numero: 30,
            extenso: "trinta",
            mostrarDecomposicao: true,
          },
          destaque: "3 na Dezena = 3 × 10 = 30.",
        },
      },
      {
        texto:
          "Casa da CENTENA (à esquerda): cada 1 vale 100.",
        exemploReal: {
          contexto:
            "A biblioteca da Cidade tem 200 livros de história. O 2 está na Centena.",
          casasValor: {
            numero: 200,
            extenso: "duzentos",
            mostrarDecomposicao: true,
          },
          destaque: "2 na Centena = 2 × 100 = 200.",
        },
      },
      {
        texto:
          "DECOMPOR um número: somar o valor de cada casa. Vira uma conta transparente.",
        casasValor: {
          numero: 234,
          extenso: "duzentos e trinta e quatro",
          mostrarDecomposicao: true,
        },
        exemploReal: {
          contexto:
            "A rua da Prefeita tem 234 postes de luz. Decompondo esse número:",
          casasValor: {
            numero: 234,
            extenso: "duzentos e trinta e quatro",
            mostrarDecomposicao: true,
          },
          destaque: "234 = 200 + 30 + 4. Toda decomposição é apenas somar as casas.",
        },
      },
      {
        texto:
          "O ZERO SEGURA uma casa vazia. Sem ele, o algarismo escorrega pra outra casa e o valor muda.",
        exemploReal: {
          contexto:
            "O código do crachá da secretária é 603. Se esquecermos o 0, vira 63 — um crachá completamente diferente.",
          casasValor: {
            numero: 603,
            extenso: "seiscentos e três",
            mostrarDecomposicao: true,
          },
          destaque: "603 = 600 + 0 + 3. O zero na Dezena segura o lugar vazio.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "Brilha vai decompor 456 falando o valor de cada casa em voz alta:",
    passos: [
      "Olho a CENTENA: dígito 4. Vale 4 × 100 = 400.",
      "Olho a DEZENA: dígito 5. Vale 5 × 10 = 50.",
      "Olho a UNIDADE: dígito 6. Vale 6.",
      "Somo o valor de cada casa: 400 + 50 + 6 = 456. ✅",
    ],
    resposta: "456 = 400 + 50 + 6",
    casasValor: {
      numero: 456,
      mostrarDecomposicao: true,
      extenso: "quatrocentos e cinquenta e seis",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Juntos! Decomponha 372.",
    dica: "3 na Centena = 300 · 7 na Dezena = 70 · 2 na Unidade = 2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a decomposição correta de 372?",
      opcoes: [
        { nome: "3 + 7 + 2" },
        { nome: "30 + 70 + 2" },
        { nome: "300 + 70 + 2" },
      ],
      respostaCerta: "300 + 70 + 2",
      feedbackAcerto:
        "🎯 Perfeito! 300 (Centena) + 70 (Dezena) + 2 (Unidade) = 372.",
      feedbackErro:
        "Centena vale 100. 3 centenas = 300. A decomposição certa é 300 + 70 + 2.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez, sozinho(a). No número 158, quanto vale o algarismo 5?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "O 5 em 158 vale:",
      opcoes: [{ nome: "5" }, { nome: "50" }, { nome: "500" }],
      respostaCerta: "50",
      feedbackAcerto:
        "🎯 Isso! Da direita: 8 (Unidade), 5 (DEZENA), 1 (Centena). 5 na Dezena = 50.",
      feedbackErro:
        "Da direita pra esquerda: 8 é Unidade, 5 é DEZENA, 1 é Centena. Na Dezena, 5 vale 50.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A Prefeita ditou pra Brilha: '6 centenas, 0 dezenas e 3 unidades'. Brilha precisa escrever esse número no cartaz da entrada da Prefeitura.",
    problema: "Qual das fichas está com o número correto?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o número certo:",
      opcoes: [{ nome: "63" }, { nome: "603" }, { nome: "630" }],
      respostaCerta: "603",
      feedbackAcerto:
        "🎯 Isso! 600 + 0 + 3 = 603. O zero na Dezena segura a casa vazia.",
      feedbackErro:
        "6 centenas = 600. 0 dezena. 3 unidade. O zero SEGURA o lugar vazio: 603.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Cada algarismo tem uma CASA: Unidade, Dezena, Centena.",
      "O VALOR do algarismo depende da casa onde mora.",
      "234 = 200 + 30 + 4 (decomposição = somar as casas).",
      "O ZERO segura o lugar de uma casa vazia (603 ≠ 63).",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "4 centenas + 0 dezenas + 7 unidades = ?",
      opcoes: [{ nome: "47" }, { nome: "407" }, { nome: "470" }],
      respostaCerta: "407",
      feedbackAcerto: "🎉 Perfeito! 400 + 0 + 7 = 407.",
      feedbackErro:
        "0 dezenas mantém a casa vazia: 400 na centena, 0 na dezena, 7 na unidade → 407.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Em 528, quanto vale o algarismo 5?",
        opcoes: ["5", "50", "500"],
        correta: 2,
        feedbackAcerto: "🎉 500. O 5 está na casa da CENTENA.",
        feedbackErro:
          "Da esquerda: 5 mora na Centena → vale 500. A posição decide o valor.",
      },
      {
        pergunta: "Qual é a decomposição de 719?",
        opcoes: ["7 + 1 + 9", "70 + 10 + 9", "700 + 10 + 9"],
        correta: 2,
        feedbackAcerto: "Isso! 700 + 10 + 9 = 719.",
        feedbackErro:
          "7 centenas = 700, 1 dezena = 10, 9 unidades = 9. Soma: 700 + 10 + 9.",
      },
      {
        pergunta: "5 centenas + 4 unidades (0 dezenas) escreve-se:",
        opcoes: ["54", "504", "540"],
        correta: 1,
        feedbackAcerto: "🎉 504. O zero segura a casa da dezena vazia.",
        feedbackErro:
          "500 + 0 + 4 → 504. Sem o zero, o 5 escorregaria pra dezena.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Placas CDU em Casa",
    materiais: [
      "3 papeizinhos separados",
      "Caneta",
      "Uma caixa ou 3 espaços marcados no papel",
    ],
    passos: [
      "Marque 3 espaços em uma folha: [C] [D] [U].",
      "Peça um número de 3 dígitos a alguém da família (ex.: 385).",
      "Escreva cada algarismo em UM papelzinho e coloque na casa certa.",
      "Fale em voz alta: '3 vale 300, 8 vale 80, 5 vale 5. Total 385.'",
      "Repita com 5 números diferentes.",
    ],
    registro: "📸 Foto da folha com o último número montado nas 3 casas.",
  },

  recompensa: {
    xp: 120,
    moedas: 60,
    medalha: "Cartógrafo(a) da Cidade dos Números",
  },
};
