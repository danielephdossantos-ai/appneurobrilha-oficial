import type { AulaV4 } from "../../types";

export const aula06_problemas: AulaV4 = {
  "slug": "u2-06-problemas",
  "titulo": "Problemas do Dia",
  "iconeTrilha": "📖",
  "bncc": [
    "EF03MA07",
    "EF03MA08"
  ],
  "duracaoMin": 20,
  "metodologias": [
    "skemp",
    "cpa"
  ],
  "momento01_motivacao": {
    "titulo": "Ler o problema com atenção",
    "historia": "Nem toda pergunta diz 'some'. 'Quanto sobrou' pede subtração. 'Quanto ao todo' pede soma. Aprender a LER o problema é metade da resposta."
  },
  "momento02_exploracao": {
    "instrucao": "Palavras-chave dão a pista.",
    "cenas": [
      {
        "tipo": "texto",
        "texto": "Ao todo, total, juntos → SOMA."
      },
      {
        "tipo": "texto",
        "texto": "Sobrou, tirou, quanto a mais → SUBTRAÇÃO.",
        "destaque": true
      }
    ]
  },
  "momento03_descoberta": {
    "perguntaGuia": "Como saber qual conta usar?",
    "pista": "Preste atenção nas palavras.",
    "revelacao": "Leia devagar, marque os números e a pergunta."
  },
  "momento04_explicacao": {
    "titulo": "Ler antes de calcular",
    "etapas": [
      {
        "texto": "1) Marque os NÚMEROS do enunciado.",
        "exemploReal": {
          "contexto": "'Ana tem 234 figurinhas. Pedro tem 158.'",
          "destaque": "Números: 234 e 158."
        }
      },
      {
        "texto": "2) Ache a PERGUNTA.",
        "exemploReal": {
          "contexto": "'Quantas figurinhas os dois têm juntos?'",
          "destaque": "'Juntos' → SOMA."
        }
      },
      {
        "texto": "3) Monte a conta.",
        "exemploReal": {
          "contexto": "234 + 158.",
          "destaque": "Some com reagrupamento.",
          "contaPassoAPasso": {
            "operacao": "soma",
            "operandos": [
              234,
              158
            ],
            "resultado": 392,
            "passos": [
              {
                "coluna": "U",
                "fala": "12 (2, v1).",
                "digito": 2,
                "vaiUm": 1
              },
              {
                "coluna": "D",
                "fala": "3+5+1=9.",
                "digito": 9
              },
              {
                "coluna": "C",
                "fala": "2+1=3.",
                "digito": 3
              }
            ]
          }
        }
      },
      {
        "texto": "Pergunta 'quanto a mais?' → SUBTRAÇÃO.",
        "exemploReal": {
          "contexto": "'Ana tem 234, Pedro 158. Quantas a mais tem Ana?'",
          "destaque": "234 − 158 = 76."
        }
      }
    ]
  },
  "momento05_modelagem": {
    "enunciado": "Marina tinha R$ 500. Gastou R$ 187. Quanto sobrou?",
    "passos": [
      "'Sobrou' → SUBTRAÇÃO.",
      "Monte a conta: 500 − 187.",
      "Resolva pela unidade, depois dezena, depois centena.",
      "Resultado: R$ 313."
    ],
    "resposta": "Sobrou R$ 313",
    "contaPassoAPasso": {
      "operacao": "sub",
      "operandos": [
        500,
        187
      ],
      "resultado": 313,
      "passos": [
        {
          "coluna": "U",
          "fala": "0 não tira 7. Empresta em cadeia: 10 − 7 = 3.",
          "digito": 3
        },
        {
          "coluna": "D",
          "fala": "A dezena virou 9 depois de emprestar: 9 − 8 = 1.",
          "digito": 1
        },
        {
          "coluna": "C",
          "fala": "A centena virou 4: 4 − 1 = 3.",
          "digito": 3
        }
      ]
    }
  },
  "momento06_praticaGuiada": {
    "enunciado": "A padaria fez 245 pães de manhã e 168 à tarde. Ao todo?",
    "dica": "'Ao todo' pede soma.",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "413"
        },
        {
          "nome": "403"
        },
        {
          "nome": "423"
        }
      ],
      "respostaCerta": "413",
      "feedbackAcerto": "🎉 'Ao todo' → soma: 413.",
      "feedbackErro": "245+168=413."
    }
  },
  "momento07_praticaIndependente": {
    "enunciado": "A biblioteca tinha 780 livros; emprestou 245. Quantos ficaram?",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "535"
        },
        {
          "nome": "545"
        },
        {
          "nome": "525"
        }
      ],
      "respostaCerta": "535",
      "feedbackAcerto": "🎯 'Ficaram' → subtração: 535.",
      "feedbackErro": "780−245=535."
    }
  },
  "momento08_aplicacao": {
    "contexto": "A escola arrecadou 320 latas na 1ª semana e 285 na 2ª. Meta: 700.",
    "problema": "Faltam quantas para a meta?",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "95"
        },
        {
          "nome": "105"
        },
        {
          "nome": "85"
        }
      ],
      "respostaCerta": "95",
      "feedbackAcerto": "🎯 320+285=605. 700−605=95.",
      "feedbackErro": "Some as duas semanas: 605. 700−605=95."
    }
  },
  "momento09_revisao": {
    "pontos": [
      "Leia o problema 2 vezes.",
      "Marque os números.",
      "Ache a palavra-chave.",
      "Some ou subtraia."
    ],
    "miniDesafio": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "Subtração"
        },
        {
          "nome": "Soma"
        },
        {
          "nome": "Divisão"
        }
      ],
      "respostaCerta": "Subtração",
      "feedbackAcerto": "🎉 'Quanto a mais' → subtração.",
      "feedbackErro": "'A mais' compara: subtrai."
    }
  },
  "momento10_avaliacao": {
    "perguntas": [
      {
        "pergunta": "Beatriz coletou 156 tampinhas; Rafael, 289. Ao todo?",
        "opcoes": [
          "445",
          "435",
          "455"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 156+289=445.",
        "feedbackErro": "Soma: 445."
      },
      {
        "pergunta": "Loja tinha 500 caixas; vendeu 246. Ficaram?",
        "opcoes": [
          "254",
          "264",
          "244"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 254.",
        "feedbackErro": "Subtração: 254."
      },
      {
        "pergunta": "João tem 128 selos, Maria tem 205. Quantos a mais tem Maria?",
        "opcoes": [
          "77",
          "87",
          "67"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 205−128=77.",
        "feedbackErro": "'A mais' → subtração: 77."
      }
    ]
  },
  "momento11_missaoFamilia": {
    "titulo": "Detetive dos Problemas",
    "materiais": [
      "Encarte de mercado"
    ],
    "passos": [
      "Invente 2 problemas com preços do encarte.",
      "1 de soma, 1 de subtração.",
      "Resolva no papel."
    ],
    "registro": "📸 Foto dos problemas."
  },
  "recompensa": {
    "xp": 200,
    "moedas": 100
  }
};
