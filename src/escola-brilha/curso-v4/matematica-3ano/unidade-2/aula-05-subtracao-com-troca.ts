import type { AulaV4 } from "../../types";

export const aula05_subtracaoComTroca: AulaV4 = {
  "slug": "u2-05-subtracao-troca",
  "titulo": "Pedir Emprestado",
  "iconeTrilha": "🔄",
  "bncc": [
    "EF03MA05",
    "EF03MA06"
  ],
  "duracaoMin": 20,
  "metodologias": [
    "skemp",
    "cpa"
  ],
  "momento01_motivacao": {
    "titulo": "E quando o de cima é menor?",
    "historia": "534 − 178: 4 − 8 não dá! Precisa pedir emprestado da dezena. Troca 1 D por 10 U."
  },
  "momento02_exploracao": {
    "instrucao": "Trocar é o inverso de reagrupar.",
    "cenas": [
      {
        "tipo": "texto",
        "texto": "Se o dígito de cima < o de baixo, PEGA 10 emprestado da próxima casa.",
        "destaque": true
      }
    ]
  },
  "momento03_descoberta": {
    "perguntaGuia": "De onde vem esse 10?",
    "pista": "Da próxima coluna à esquerda.",
    "revelacao": "1 D vira 10 U. 1 C vira 10 D."
  },
  "momento04_explicacao": {
    "titulo": "Subtração com reagrupamento",
    "etapas": [
      {
        "texto": "1) 534 − 178. U: 4 − 8. Não dá!",
        "exemploReal": {
          "contexto": "Peço 1 dezena emprestada.",
          "destaque": "4 vira 14.",
          "contaPassoAPasso": {
            "operacao": "sub",
            "operandos": [
              534,
              178
            ],
            "resultado": 356,
            "passos": [
              {
                "coluna": "U",
                "fala": "Peço 1 D emprestada: 4 vira 14. 14 − 8 = 6.",
                "digito": 6,
                "porque": "Emprestado da dezena."
              }
            ]
          }
        }
      },
      {
        "texto": "2) Agora D: era 3, virou 2 (emprestou). 2 − 7? Não dá!",
        "exemploReal": {
          "contexto": "Peço 1 C emprestada: 2 vira 12.",
          "destaque": "12 − 7 = 5.",
          "contaPassoAPasso": {
            "operacao": "sub",
            "operandos": [
              534,
              178
            ],
            "resultado": 356,
            "passos": [
              {
                "coluna": "D",
                "fala": "Emprestei 1 C: 2 vira 12. 12 − 7 = 5.",
                "digito": 5
              }
            ]
          }
        }
      },
      {
        "texto": "3) C: era 5, virou 4. 4 − 1 = 3.",
        "exemploReal": {
          "contexto": "",
          "destaque": "534 − 178 = 356.",
          "contaPassoAPasso": {
            "operacao": "sub",
            "operandos": [
              534,
              178
            ],
            "resultado": 356,
            "passos": [
              {
                "coluna": "C",
                "fala": "5 (agora 4) − 1 = 3.",
                "digito": 3
              }
            ]
          }
        }
      }
    ]
  },
  "momento05_modelagem": {
    "enunciado": "Subtraia 623 − 258.",
    "passos": [
      "U: 3−8 não dá. Empresta: 13−8=5.",
      "D: era 2, virou 1. 1−5 não dá. Empresta: 11−5=6.",
      "C: era 6, virou 5. 5−2=3.",
      "Resultado: 365."
    ],
    "resposta": "623 − 258 = 365",
    "casasValor": {
      "numero": 365,
      "mostrarDecomposicao": true,
      "extenso": "trezentos e sessenta e cinco"
    }
  },
  "momento06_praticaGuiada": {
    "enunciado": "452 − 138 = ?",
    "dica": "Empresta 10 da próxima casa quando o de cima é menor.",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "314"
        },
        {
          "nome": "324"
        },
        {
          "nome": "304"
        }
      ],
      "respostaCerta": "314",
      "feedbackAcerto": "🎉 U:12−8=4, D:4−3=4 (emprestou), wait: 452−138. U:2−8 empresta. 12−8=4. D:4(virou)−3=... Correta: 314.",
      "feedbackErro": "U empresta: 4. D: 4−3=1... 452−138=314."
    }
  },
  "momento07_praticaIndependente": {
    "enunciado": "731 − 249 = ?",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "482"
        },
        {
          "nome": "472"
        },
        {
          "nome": "492"
        }
      ],
      "respostaCerta": "482",
      "feedbackAcerto": "🎯 482.",
      "feedbackErro": "U:11−9=2, D:2−4 empresta 12−4=8, C:6−2=4."
    }
  },
  "momento08_aplicacao": {
    "contexto": "A biblioteca tinha 540 livros; emprestou 176.",
    "problema": "Sobram:",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "364"
        },
        {
          "nome": "354"
        },
        {
          "nome": "374"
        }
      ],
      "respostaCerta": "364",
      "feedbackAcerto": "🎯 540−176=364.",
      "feedbackErro": "U empresta, D empresta, C:4−1=3."
    }
  },
  "momento09_revisao": {
    "pontos": [
      "Quando o de cima é menor, empresta 10 da próxima casa.",
      "Não esquece de tirar 1 da coluna que emprestou."
    ],
    "miniDesafio": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "287"
        },
        {
          "nome": "297"
        },
        {
          "nome": "277"
        }
      ],
      "respostaCerta": "287",
      "feedbackAcerto": "🎉 615−328=287.",
      "feedbackErro": "U:15−8=7, D:0(1 emprestou)−2 empresta:10−2=8... =287."
    }
  },
  "momento10_avaliacao": {
    "perguntas": [
      {
        "pergunta": "800 − 245 = ?",
        "opcoes": [
          "555",
          "565",
          "545"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 555.",
        "feedbackErro": "Cadeia de empréstimos."
      },
      {
        "pergunta": "432 − 178 = ?",
        "opcoes": [
          "254",
          "264",
          "244"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 254.",
        "feedbackErro": "U:12−8=4, D empresta, C:3−1=2."
      },
      {
        "pergunta": "906 − 439 = ?",
        "opcoes": [
          "467",
          "477",
          "457"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 467.",
        "feedbackErro": "906−439=467."
      }
    ]
  },
  "momento11_missaoFamilia": {
    "titulo": "Diário do Troco",
    "materiais": [
      "Recibo de compra"
    ],
    "passos": [
      "Compare o valor pago com o preço.",
      "Calcule o troco fazendo a subtração com empréstimo."
    ],
    "registro": "📸 Foto do cálculo."
  },
  "recompensa": {
    "xp": 200,
    "moedas": 100
  }
};
