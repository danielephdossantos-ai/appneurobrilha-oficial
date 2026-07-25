import type { AulaV4 } from "../../types";

/**
 * Aula 3 — "A Centena Nasce (agrupar 10 dezenas em 1 centena)"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Foco: 10 unidades → 1 dezena; 10 dezenas → 1 centena. Consolida o
 * mecanismo de reagrupamento que sustentará adição/subtração.
 * BNCC: EF03MA02.
 * Metodologias: Kamii (construção do agrupamento) · Skemp · CPA.
 */
export const aula03_aCentena: AulaV4 = {
  slug: "03-a-centena",
  titulo: "A Centena Nasce",
  iconeTrilha: "🏢",
  bncc: ["EF03MA02"],
  duracaoMin: 20,
  metodologias: ["kamii", "skemp", "cpa"],

  momento01_motivacao: {
    titulo: "10 dezenas viram 1 centena — a troca mágica",
    historia:
      "O contador da Prefeitura registrou 99 habitantes no bairro Leste. Chegou mais 1 pessoa. Ele escreveu '9 dezenas e 10 unidades'. A Prefeita corrigiu: 'Nenhuma casa aceita 10! Reescreva.' Como transformar essa placa?",
  },

  momento02_exploracao: {
    instrucao: "Observe a regra do nosso sistema decimal.",
    cenas: [
      { tipo: "texto", texto: "Cada casa da placa CDU só aceita algarismos de 0 a 9." },
      { tipo: "texto", texto: "Se uma casa 'estourar' em 10, ela TROCA por 1 na casa da frente.", destaque: true },
      { tipo: "texto", texto: "10 unidades → 1 dezena · 10 dezenas → 1 centena · 10 centenas → 1 milhar." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se cada dezena vale 10, quanto valem 10 dezenas juntas?",
    pista: "10 × 10 = 100.",
    revelacao:
      "10 dezenas somam 100. E 100 é justamente 1 CENTENA. Por isso a próxima casa vale 10 vezes mais: ela GUARDA os agrupamentos de 10 que já 'estouraram'.",
  },

  momento04_explicacao: {
    titulo: "A regra do reagrupamento",
    etapas: [
      {
        texto:
          "REGRA: nenhuma casa da placa CDU aceita 10 ou mais. Ao chegar em 10, TROCA por 1 na casa da esquerda.",
        exemploReal: {
          contexto:
            "O contador tinha 9 unidades e chegou +1. Agora tem 10 unidades — não cabe. Troca por 1 dezena:",
          casasValor: {
            numero: 10,
            extenso: "dez",
            mostrarDecomposicao: true,
          },
          destaque: "10 unidades = 1 dezena + 0 unidades. A casa da unidade zera.",
        },
      },
      {
        texto:
          "A mesma regra vale entre dezena e centena: 10 dezenas trocam por 1 centena.",
        exemploReal: {
          contexto:
            "O bairro Leste tinha 99 habitantes. Chegou 1. Agora são 9 dezenas + 10 unidades. Fazendo os agrupamentos:",
          casasValor: {
            numero: 100,
            extenso: "cem",
            mostrarDecomposicao: true,
          },
          destaque:
            "10 unidades → 1 dezena. Ficam 10 dezenas → 1 CENTENA. Placa correta: 100.",
        },
      },
      {
        texto:
          "Ao SOMAR, se uma coluna dá 10 ou mais, escrevemos só o dígito da unidade e o 1 'sobe' pra coluna seguinte (vai-um).",
        exemploReal: {
          contexto:
            "A Prefeita quer somar 47 + 35 (moradores das quadras A e B). Vamos armar a conta e ver o vai-um em ação:",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [47, 35],
            resultado: 82,
            passos: [
              {
                coluna: "U",
                fala: "Unidades: 7 + 5 = 12. Não cabe em uma casa! Escrevo 2 na unidade e sobe 1 pra dezena.",
                digito: 2,
                vaiUm: 1,
                porque: "12 unidades = 1 dezena + 2 unidades. O 1 vai pra próxima casa.",
              },
              {
                coluna: "D",
                fala: "Dezenas: 4 + 3 + 1 (que subiu) = 8. Escrevo 8 na dezena.",
                digito: 8,
                porque: "Somo as dezenas somadas COM o vai-um que veio da unidade.",
              },
            ],
          },
          destaque: "Resultado: 82. O 'vai-um' é a troca mágica em ação.",
        },
      },
      {
        texto:
          "Todo número redondo (100, 200, 300...) é o resultado de um agrupamento cheio: exatamente N centenas.",
        casasValor: {
          numero: 100,
          extenso: "cem",
          mostrarDecomposicao: true,
        },
        exemploReal: {
          contexto:
            "O depósito da Prefeitura tem 300 caixas de papel: 3 grupos de 100. Cada grupo é uma centena cheia.",
          casasValor: {
            numero: 300,
            extenso: "trezentos",
            mostrarDecomposicao: true,
          },
          destaque: "300 = 3 centenas + 0 dezenas + 0 unidades.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "Brilha ajuda o contador: 8 dezenas + 15 unidades. Quantos habitantes ao todo?",
    passos: [
      "8 dezenas = 80. 15 unidades = 15. Total provisório: 95.",
      "Mas 15 não cabe em uma casa. Regrupo: 15 = 1 dezena + 5 unidades.",
      "Somo essa 1 dezena às 8 → 9 dezenas.",
      "Placa final: 9 dezenas + 5 unidades = 95.",
      "8 dezenas + 15 unidades = 95 habitantes. ✅",
    ],
    resposta: "95 habitantes",
    casasValor: {
      numero: 95,
      mostrarDecomposicao: true,
      extenso: "noventa e cinco",
    },
  },

  momento06_praticaGuiada: {
    enunciado:
      "Juntos! Some 58 + 26 (moradores da rua A + rua B). Precisamos usar o vai-um?",
    dica: "Comece pelas unidades. Se der 10 ou mais, sobe 1 pra dezena.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [58, 26],
      resultado: 84,
      modo: "explicacao",
      metodologia: "kamii",
      passos: [
        {
          coluna: "U",
          fala: "Unidades: 8 + 6 = 14. Escrevo 4, vai 1 pra dezena.",
          digito: 4,
          vaiUm: 1,
          porque: "14 = 1 dezena + 4 unidades. A dezena sobe.",
        },
        {
          coluna: "D",
          fala: "Dezenas: 5 + 2 + 1 (vai-um) = 8. Escrevo 8.",
          digito: 8,
          porque: "Sempre somo o vai-um junto com as dezenas.",
        },
      ],
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez! O prédio A tem 76 apartamentos e o B, 45. Quantos ao todo?",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [76, 45],
      resultado: 121,
      modo: "pratica",
      perguntaFinal: "Quanto deu no total?",
      opcoes: [121, 111, 131],
      feedbackAcerto:
        "🎯 Isso! 6+5=11 (escrevo 1, vai 1). 7+4+1=12 (escrevo 2, vai 1). Fica 121.",
      feedbackErro:
        "Cuidado com o vai-um. 6+5=11 → escreve 1, sobe 1. 7+4+1=12 → escreve 2, sobe 1 pra centena. Total: 121.",
      passos: [
        { coluna: "U", fala: "Unidades: 6 + 5 = 11.", digito: 1, vaiUm: 1 },
        { coluna: "D", fala: "Dezenas: 7 + 4 + 1 = 12.", digito: 2, vaiUm: 1 },
        { coluna: "C", fala: "Centenas: 0 + 0 + 1 = 1.", digito: 1 },
      ],
    },
  },

  momento08_aplicacao: {
    contexto:
      "O ajudante da Prefeita escreveu '10 dezenas' no relatório. A Prefeita mandou reescrever com o agrupamento correto.",
    problema: "Como o ajudante deve escrever '10 dezenas' de forma correta?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Reescreva '10 dezenas' na placa CDU:",
      opcoes: [
        { nome: "10 dezenas (deixar como está)" },
        { nome: "1 centena, 0 dezenas, 0 unidades" },
        { nome: "1 dezena, 0 unidades" },
      ],
      respostaCerta: "1 centena, 0 dezenas, 0 unidades",
      feedbackAcerto:
        "🎯 Isso! 10 dezenas SEMPRE viram 1 centena. A dezena zera. Placa: 100.",
      feedbackErro:
        "Nenhuma casa aceita 10. 10 dezenas → 1 centena + 0 dezenas + 0 unidades → 100.",
    },
  },

  momento09_revisao: {
    pontos: [
      "10 unidades → 1 dezena.",
      "10 dezenas → 1 CENTENA.",
      "Cada casa da placa só aceita 0 a 9. O 10 SEMPRE vira 1 na casa da frente.",
      "No algoritmo, isso aparece como 'vai-um': sobe pra próxima coluna.",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "10 dezenas equivalem a:",
      opcoes: [{ nome: "1 unidade" }, { nome: "1 centena" }, { nome: "10 centenas" }],
      respostaCerta: "1 centena",
      feedbackAcerto: "🎉 10 dezenas = 1 CENTENA = 100.",
      feedbackErro: "10 iguais viram 1 do próximo tamanho. 10 dezenas → 1 centena.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Somando 39 + 24, quanto dá?",
        opcoes: ["53", "63", "513"],
        correta: 1,
        feedbackAcerto:
          "🎉 9+4=13 (escreve 3, vai 1). 3+2+1=6. Total 63.",
        feedbackErro:
          "Unidades: 9+4=13 → escreve 3, sobe 1. Dezenas: 3+2+1=6. Resultado: 63.",
      },
      {
        pergunta: "Quantas centenas há em 700?",
        opcoes: ["7", "70", "700"],
        correta: 0,
        feedbackAcerto: "Isso! 700 = 7 centenas.",
        feedbackErro: "Cada centena vale 100. 700 ÷ 100 = 7 centenas.",
      },
      {
        pergunta: "9 dezenas + 12 unidades vira que número?",
        opcoes: ["912", "102", "9012"],
        correta: 1,
        feedbackAcerto:
          "🎉 12 unidades = 1 dezena + 2 unidades. Fica 10 dezenas + 2 = 1 centena + 0 + 2 = 102.",
        feedbackErro:
          "12 estourou. Regrupa: 12 = 1 dezena + 2. Somo à 9 → 10 dezenas → 1 centena. Placa: 102.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "10 vira 1",
    materiais: [
      "Palitos de fósforo, macarrão ou canudos (uns 100)",
      "Elástico ou barbante",
    ],
    passos: [
      "Faça grupinhos de 10 palitos (cada grupo é uma DEZENA). Amarre.",
      "Quando conseguir 10 grupinhos, amarre todos juntos: essa é 1 CENTENA.",
      "Peça um número (ex.: 143). Monte: 1 centena amarrada + 4 dezenas + 3 soltos.",
      "Fale em voz alta o valor de cada casa.",
      "Faça 3 números diferentes.",
    ],
    registro: "📸 Foto do 1º grupo de centena pronto (amarrado).",
  },

  recompensa: {
    xp: 120,
    moedas: 60,
    medalha: "Explorador(a) da Cidade dos Números",
  },
};
