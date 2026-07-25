import type { AulaV4 } from "../../types";

export const aula04_subtracaoSimples: AulaV4 = {
  "slug": "u2-04-subtracao-simples",
  "titulo": "Tirar Sem Trocar",
  "iconeTrilha": "➖",
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
    "titulo": "Sobra quanto?",
    "historia": "A padaria tinha 458 pães e vendeu 235. Quantos sobraram? Precisa subtrair."
  },
  "momento02_exploracao": {
    "instrucao": "Subtração coluna por coluna, da direita pra esquerda.",
    "cenas": [
      {
        "tipo": "texto",
        "texto": "458 − 235 = ?"
      },
      {
        "tipo": "texto",
        "texto": "Some… não! SUBTRAI: em cada coluna, tira debaixo do de cima.",
        "destaque": true
      }
    ]
  },
  "momento03_descoberta": {
    "perguntaGuia": "E se o de cima for menor que o de baixo?",
    "pista": "Aí precisa 'pedir emprestado' (próxima aula).",
    "revelacao": "Quando cada dígito de cima ≥ o de baixo, subtrai direto."
  },
  "momento04_explicacao": {
    "titulo": "Subtração sem reagrupamento",
    "etapas": [
      {
        "texto": "1) Alinhe C-D-U.",
        "exemploReal": {
          "contexto": "458 − 235.",
          "destaque": "Pronto.",
          "casasValor": {
            "numero": 458,
            "mostrarDecomposicao": true,
            "extenso": "quatrocentos e cinquenta e oito"
          }
        }
      },
      {
        "texto": "2) U: 8 − 5 = 3.",
        "exemploReal": {
          "contexto": "Tira 5 de 8.",
          "destaque": "U = 3.",
          "contaPassoAPasso": {
            "operacao": "sub",
            "operandos": [
              458,
              235
            ],
            "resultado": 223,
            "passos": [
              {
                "coluna": "U",
                "fala": "8 − 5 = 3.",
                "digito": 3
              }
            ]
          }
        }
      },
      {
        "texto": "3) D: 5 − 3 = 2.",
        "exemploReal": {
          "contexto": "",
          "destaque": "D = 2.",
          "contaPassoAPasso": {
            "operacao": "sub",
            "operandos": [
              458,
              235
            ],
            "resultado": 223,
            "passos": [
              {
                "coluna": "D",
                "fala": "5 − 3 = 2.",
                "digito": 2
              }
            ]
          }
        }
      },
      {
        "texto": "4) C: 4 − 2 = 2.",
        "exemploReal": {
          "contexto": "",
          "destaque": "458 − 235 = 223.",
          "contaPassoAPasso": {
            "operacao": "sub",
            "operandos": [
              458,
              235
            ],
            "resultado": 223,
            "passos": [
              {
                "coluna": "C",
                "fala": "4 − 2 = 2.",
                "digito": 2
              }
            ]
          }
        }
      }
    ]
  },
  "momento05_modelagem": {
    "enunciado": "Subtraia 785 − 342.",
    "passos": [
      "U: 5−2=3.",
      "D: 8−4=4.",
      "C: 7−3=4.",
      "Resultado: 443."
    ],
    "resposta": "785 − 342 = 443",
    "casasValor": {
      "numero": 443,
      "mostrarDecomposicao": true,
      "extenso": "quatrocentos e quarenta e três"
    }
  },
  "momento06_praticaGuiada": {
    "enunciado": "596 − 251 = ?",
    "dica": "Tire de baixo do de cima em cada coluna.",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "345"
        },
        {
          "nome": "445"
        },
        {
          "nome": "335"
        }
      ],
      "respostaCerta": "345",
      "feedbackAcerto": "🎉 U:5, D:4, C:3.",
      "feedbackErro": "6−1=5, 9−5=4, 5−2=3."
    }
  },
  "momento07_praticaIndependente": {
    "enunciado": "874 − 421 = ?",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "453"
        },
        {
          "nome": "443"
        },
        {
          "nome": "463"
        }
      ],
      "respostaCerta": "453",
      "feedbackAcerto": "🎯 453.",
      "feedbackErro": "U:3, D:5, C:4."
    }
  },
  "momento08_aplicacao": {
    "contexto": "O ônibus tinha 245 passageiros; desceram 132.",
    "problema": "Ficaram:",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "113"
        },
        {
          "nome": "103"
        },
        {
          "nome": "123"
        }
      ],
      "respostaCerta": "113",
      "feedbackAcerto": "🎯 113.",
      "feedbackErro": "245−132=113."
    }
  },
  "momento09_revisao": {
    "pontos": [
      "Alinhe C-D-U.",
      "Tire da direita pra esquerda."
    ],
    "miniDesafio": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "346"
        },
        {
          "nome": "356"
        },
        {
          "nome": "336"
        }
      ],
      "respostaCerta": "346",
      "feedbackAcerto": "🎉 689−343=346.",
      "feedbackErro": "U:6, D:4, C:3."
    }
  },
  "momento10_avaliacao": {
    "perguntas": [
      {
        "pergunta": "567 − 234 = ?",
        "opcoes": [
          "333",
          "343",
          "323"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 333.",
        "feedbackErro": "U:3, D:3, C:3."
      },
      {
        "pergunta": "908 − 302 = ?",
        "opcoes": [
          "606",
          "506",
          "616"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 606.",
        "feedbackErro": "U:6, D:0, C:6."
      },
      {
        "pergunta": "749 − 425 = ?",
        "opcoes": [
          "324",
          "314",
          "334"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 324.",
        "feedbackErro": "U:4, D:2, C:3."
      }
    ]
  },
  "momento11_missaoFamilia": {
    "titulo": "Troco do Mercadinho",
    "materiais": [
      "2 notas de brinquedo",
      "Papel"
    ],
    "passos": [
      "Compre um item mais barato que a nota.",
      "Calcule o troco no papel."
    ],
    "registro": "📸 Foto do cálculo."
  },
  "recompensa": {
    "xp": 200,
    "moedas": 100
  }
};
