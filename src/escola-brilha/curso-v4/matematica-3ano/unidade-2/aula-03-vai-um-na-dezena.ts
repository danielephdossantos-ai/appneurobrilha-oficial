import type { AulaV4 } from "../../types";

export const aula03_vaiUmDezena: AulaV4 = {
  "slug": "u2-03-vai-um-dezena",
  "titulo": "Sobe pra Centena!",
  "iconeTrilha": "💯",
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
    "titulo": "Passou de 9 na dezena",
    "historia": "372 + 261: dezenas somam 7 + 6 = 13. Reagrupa também aqui — sobe 1 pra CENTENA."
  },
  "momento02_exploracao": {
    "instrucao": "Reagrupamento em qualquer coluna.",
    "cenas": [
      {
        "tipo": "texto",
        "texto": "10 D = 1 C."
      },
      {
        "tipo": "texto",
        "texto": "Se D soma 10+, sobe 1 pra C.",
        "destaque": true
      }
    ]
  },
  "momento03_descoberta": {
    "perguntaGuia": "E se DUAS colunas passarem de 9?",
    "pista": "Reagrupa em cada uma.",
    "revelacao": "Regra geral: coluna ≥ 10 → sobe 1 pra próxima. Vale em U, D, C."
  },
  "momento04_explicacao": {
    "titulo": "Reagrupar na dezena",
    "etapas": [
      {
        "texto": "1) 372 + 261. U: 2+1=3.",
        "exemploReal": {
          "contexto": "Sem reagrupar.",
          "destaque": "U = 3.",
          "contaPassoAPasso": {
            "operacao": "soma",
            "operandos": [
              372,
              261
            ],
            "resultado": 633,
            "passos": [
              {
                "coluna": "U",
                "fala": "2+1=3.",
                "digito": 3
              }
            ]
          }
        }
      },
      {
        "texto": "2) D: 7+6=13. Escrevo 3, vai 1.",
        "exemploReal": {
          "contexto": "13 D = 1 C + 3 D.",
          "destaque": "D = 3, sobe 1.",
          "contaPassoAPasso": {
            "operacao": "soma",
            "operandos": [
              372,
              261
            ],
            "resultado": 633,
            "passos": [
              {
                "coluna": "D",
                "fala": "7+6=13. Escrevo 3, vai 1.",
                "digito": 3,
                "vaiUm": 1
              }
            ]
          }
        }
      },
      {
        "texto": "3) C: 3+2+1=6.",
        "exemploReal": {
          "contexto": "Somei o 'vai 1'.",
          "destaque": "372+261 = 633.",
          "contaPassoAPasso": {
            "operacao": "soma",
            "operandos": [
              372,
              261
            ],
            "resultado": 633,
            "passos": [
              {
                "coluna": "C",
                "fala": "3+2+1=6.",
                "digito": 6
              }
            ]
          }
        }
      }
    ]
  },
  "momento05_modelagem": {
    "enunciado": "Some 285 + 143.",
    "passos": [
      "U: 5+3=8.",
      "D: 8+4=12 (2, vai 1).",
      "C: 2+1+1=4.",
      "Resultado: 428."
    ],
    "resposta": "285 + 143 = 428",
    "casasValor": {
      "numero": 428,
      "mostrarDecomposicao": true,
      "extenso": "quatrocentos e vinte e oito"
    }
  },
  "momento06_praticaGuiada": {
    "enunciado": "163 + 172 = ?",
    "dica": "Se D > 9, sobe 1 pra C.",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "335"
        },
        {
          "nome": "325"
        },
        {
          "nome": "345"
        }
      ],
      "respostaCerta": "335",
      "feedbackAcerto": "🎉 D:13(3,v1), C:3.",
      "feedbackErro": "D passa de 9, sobe 1."
    }
  },
  "momento07_praticaIndependente": {
    "enunciado": "354 + 273 = ?",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "627"
        },
        {
          "nome": "617"
        },
        {
          "nome": "637"
        }
      ],
      "respostaCerta": "627",
      "feedbackAcerto": "🎯 627.",
      "feedbackErro": "D:12(2,v1), C:6."
    }
  },
  "momento08_aplicacao": {
    "contexto": "285 alunos de manhã e 172 à tarde.",
    "problema": "Total:",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "457"
        },
        {
          "nome": "447"
        },
        {
          "nome": "467"
        }
      ],
      "respostaCerta": "457",
      "feedbackAcerto": "🎯 285+172=457.",
      "feedbackErro": "U:7, D:15(5,v1), C:4."
    }
  },
  "momento09_revisao": {
    "pontos": [
      "Reagrupar vale em U, D e C.",
      "Sempre soma o 'vai 1' na próxima."
    ],
    "miniDesafio": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "420"
        },
        {
          "nome": "410"
        },
        {
          "nome": "430"
        }
      ],
      "respostaCerta": "420",
      "feedbackAcerto": "🎉 184+236=420.",
      "feedbackErro": "U:10(0,v1), D:12(2,v1), C:4."
    }
  },
  "momento10_avaliacao": {
    "perguntas": [
      {
        "pergunta": "257 + 165 = ?",
        "opcoes": [
          "422",
          "412",
          "432"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 422.",
        "feedbackErro": "U:12(2,v1), D:12(2,v1), C:4."
      },
      {
        "pergunta": "381 + 254 = ?",
        "opcoes": [
          "635",
          "625",
          "645"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 635.",
        "feedbackErro": "D:13(3,v1)."
      },
      {
        "pergunta": "192 + 348 = ?",
        "opcoes": [
          "540",
          "530",
          "550"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 540.",
        "feedbackErro": "U:10, D:14(4,v1), C:5."
      }
    ]
  },
  "momento11_missaoFamilia": {
    "titulo": "Cartaz das Trocas",
    "materiais": [
      "Cartolina",
      "Canetinha"
    ],
    "passos": [
      "Escreva: 10 U = 1 D · 10 D = 1 C.",
      "Desenhe grupinhos ilustrando."
    ],
    "registro": "📸 Foto do cartaz."
  },
  "recompensa": {
    "xp": 200,
    "moedas": 100
  }
};
