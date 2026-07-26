import type { AulaV4 } from "../../types";

export const aula07_missaoFinalU2: AulaV4 = {
  "slug": "u2-07-missao-final",
  "titulo": "Contador Oficial da Cidade",
  "iconeTrilha": "🏆",
  "bncc": [
    "EF03MA05",
    "EF03MA06",
    "EF03MA07",
    "EF03MA08"
  ],
  "duracaoMin": 20,
  "metodologias": [
    "skemp",
    "cpa"
  ],
  "momento01_motivacao": {
    "titulo": "A Cidade escolhe seu Contador",
    "historia": "A Prefeita busca um novo Contador Oficial. VOCÊ é candidato(a), {NOME}! São 5 provas: somar, reagrupar, subtrair, emprestar e resolver problema."
  },
  "momento02_exploracao": {
    "instrucao": "5 desafios em sequência.",
    "cenas": [
      {
        "tipo": "texto",
        "texto": "Some · Reagrupe · Subtraia · Empreste · Problema"
      },
      {
        "tipo": "texto",
        "texto": "Se acertar tudo, vira Contador Oficial! 🏆",
        "destaque": true
      }
    ]
  },
  "momento03_descoberta": {
    "perguntaGuia": "Você está pronto?",
    "pista": "Revise: reagrupar sobe 1; emprestar pega 10.",
    "revelacao": "Vai lá!"
  },
  "momento04_explicacao": {
    "titulo": "Prova prática",
    "etapas": [
      {
        "texto": "Desafio 1 warm-up: 232 + 154.",
        "exemploReal": {
          "contexto": "Sem reagrupar.",
          "destaque": "U:6, D:8, C:3 → 386.",
          "contaPassoAPasso": {
            "operacao": "soma",
            "operandos": [
              232,
              154
            ],
            "resultado": 386,
            "passos": [
              {
                "coluna": "U",
                "fala": "6.",
                "digito": 6
              },
              {
                "coluna": "D",
                "fala": "8.",
                "digito": 8
              },
              {
                "coluna": "C",
                "fala": "3.",
                "digito": 3
              }
            ]
          }
        }
      },
      {
        "texto": "Desafio 2: 267 + 148.",
        "exemploReal": {
          "contexto": "Com reagrupar.",
          "destaque": "U:15(5,v1), D:11(1,v1), C:4 → 415.",
          "contaPassoAPasso": {
            "operacao": "soma",
            "operandos": [
              267,
              148
            ],
            "resultado": 415,
            "passos": [
              {
                "coluna": "U",
                "fala": "15 (5, vai 1).",
                "digito": 5,
                "vaiUm": 1
              },
              {
                "coluna": "D",
                "fala": "6+4+1=11 (1, vai 1).",
                "digito": 1,
                "vaiUm": 1
              },
              {
                "coluna": "C",
                "fala": "2+1+1=4.",
                "digito": 4
              }
            ]
          }
        }
      },
      {
        "texto": "Desafio 3: 685 − 342.",
        "exemploReal": {
          "contexto": "Sem emprestar.",
          "destaque": "→ 343.",
          "contaPassoAPasso": {
            "operacao": "sub",
            "operandos": [
              685,
              342
            ],
            "resultado": 343,
            "passos": [
              {
                "coluna": "U",
                "fala": "3.",
                "digito": 3
              },
              {
                "coluna": "D",
                "fala": "4.",
                "digito": 4
              },
              {
                "coluna": "C",
                "fala": "3.",
                "digito": 3
              }
            ]
          }
        }
      },
      {
        "texto": "Desafio 4: 500 − 236.",
        "exemploReal": {
          "contexto": "Emprestando.",
          "destaque": "→ 264.",
          "contaPassoAPasso": {
            "operacao": "sub",
            "operandos": [
              500,
              236
            ],
            "resultado": 264,
            "passos": [
              {
                "coluna": "U",
                "fala": "Empresta em cadeia.",
                "digito": 4
              },
              {
                "coluna": "D",
                "fala": "",
                "digito": 6
              },
              {
                "coluna": "C",
                "fala": "",
                "digito": 2
              }
            ]
          }
        }
      }
    ]
  },
  "momento05_modelagem": {
    "enunciado": "Modelo: A doceria tinha 620 doces e vendeu 348. Quanto sobrou?",
    "passos": [
      "'Sobrou' → subtração.",
      "Monte a conta: 620 − 348.",
      "Resolva pela unidade, depois dezena, depois centena.",
      "Sobrou: 272."
    ],
    "resposta": "272 doces",
    "contaPassoAPasso": {
      "operacao": "sub",
      "operandos": [
        620,
        348
      ],
      "resultado": 272,
      "passos": [
        {
          "coluna": "U",
          "fala": "0 não tira 8. Empresta 1 dezena: 10 − 8 = 2.",
          "digito": 2
        },
        {
          "coluna": "D",
          "fala": "A dezena ficou 1. 1 não tira 4; empresta da centena: 11 − 4 = 7.",
          "digito": 7
        },
        {
          "coluna": "C",
          "fala": "A centena ficou 5. 5 − 3 = 2.",
          "digito": 2
        }
      ]
    }
  },
  "momento06_praticaGuiada": {
    "enunciado": "231 + 456 = ?",
    "dica": "Comece pela unidade.",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "687"
        },
        {
          "nome": "697"
        },
        {
          "nome": "677"
        }
      ],
      "respostaCerta": "687",
      "feedbackAcerto": "🎉 U:7, D:8, C:6 → 687.",
      "feedbackErro": "Some coluna a coluna."
    }
  },
  "momento07_praticaIndependente": {
    "enunciado": "654 − 219 = ?",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "435"
        },
        {
          "nome": "445"
        },
        {
          "nome": "425"
        }
      ],
      "respostaCerta": "435",
      "feedbackAcerto": "🎯 U: 4−9 empresta → 14−9=5. D: o 5 virou 4 → 4−1=3. C: 6−2=4. Resultado: 435.",
      "feedbackErro": "Empresta na unidade: 14−9=5."
    }
  },
  "momento08_aplicacao": {
    "contexto": "A escola tem 385 alunos de manhã e 267 à tarde. A meta é 700.",
    "problema": "Passou da meta em quantos?",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "Nenhum, faltam 48"
        },
        {
          "nome": "Nenhum, faltam 58"
        },
        {
          "nome": "Passou em 12"
        }
      ],
      "respostaCerta": "Nenhum, faltam 48",
      "feedbackAcerto": "🎯 385+267=652. 700−652=48. Faltam 48.",
      "feedbackErro": "Some 652 e compare com 700."
    }
  },
  "momento09_revisao": {
    "pontos": [
      "Somar: coluna ≥ 10 sobe 1.",
      "Subtrair: se cima < baixo, empresta 10.",
      "'Ao todo'=soma; 'sobrou'/'a mais'=subtração."
    ],
    "miniDesafio": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "308"
        },
        {
          "nome": "318"
        },
        {
          "nome": "298"
        }
      ],
      "respostaCerta": "308",
      "feedbackAcerto": "🏆 Prova final: 745 − 437 = 308. Você é CONTADOR OFICIAL!",
      "feedbackErro": "U: 5−7 empresta → 15−7=8. D: o 4 virou 3 → 3−3=0. C: 7−4=3. Resultado: 308."
    }
  },
  "momento10_avaliacao": {
    "perguntas": [
      {
        "pergunta": "329 + 456 = ?",
        "opcoes": [
          "785",
          "775",
          "795"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 785.",
        "feedbackErro": "U:15(5,v1), D:8, C:7."
      },
      {
        "pergunta": "800 − 356 = ?",
        "opcoes": [
          "444",
          "454",
          "434"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 444.",
        "feedbackErro": "Empresta em cadeia: 444."
      },
      {
        "pergunta": "'Loja tinha 480 clientes; entraram mais 245. Total?'",
        "opcoes": [
          "725",
          "715",
          "735"
        ],
        "correta": 0,
        "feedbackAcerto": "🏆 CONTADOR OFICIAL! 480+245=725.",
        "feedbackErro": "'Total' → soma: 725."
      }
    ]
  },
  "momento11_missaoFamilia": {
    "titulo": "Diploma de Contador Oficial",
    "materiais": [
      "Papel",
      "Canetinha",
      "Adulto para assinar"
    ],
    "passos": [
      "Escreva um diploma: 'Eu, {NOME}, sou CONTADOR OFICIAL da Cidade.'",
      "Assine e peça o adulto assinar.",
      "Pendure num lugar visível."
    ],
    "registro": "📸 Foto do diploma."
  },
  "recompensa": {
    "xp": 300,
    "moedas": 150,
    "medalha": "Contador Oficial da Cidade"
  }
};
