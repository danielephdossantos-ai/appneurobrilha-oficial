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
    "historia": "A operação não é escolhida por uma palavra isolada. Precisamos entender o que aconteceu com a quantidade e qual valor a pergunta quer descobrir."
  },
  "momento02_exploracao": {
    "instrucao": "Organize a história: o que havia no começo, o que mudou e o que precisa ser descoberto.",
    "cenas": [
      {
        "tipo": "texto",
        "texto": "Quando conhecemos duas partes e procuramos o total, juntamos as partes."
      },
      {
        "tipo": "texto",
        "texto": "Quando conhecemos o total e uma parte, ou queremos a diferença, procuramos o valor que falta.",
        "destaque": true
      }
    ]
  },
  "momento03_descoberta": {
    "perguntaGuia": "Como saber qual conta usar?",
    "pista": "Desenhe a relação entre as quantidades antes de escolher a conta.",
    "revelacao": "Leia devagar e pergunte: estou juntando partes, acompanhando uma mudança ou comparando quantidades?"
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
          "destaque": "Conhecemos as duas partes e procuramos o total: 234 + 158."
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
        "texto": "Quando a pergunta pede a diferença entre duas quantidades, compare o maior valor com o menor.",
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
      "Havia 500 e uma retirada de 187 diminuiu essa quantidade.",
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
    "dica": "As produções da manhã e da tarde são duas partes; a pergunta pede o total formado por elas.",
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
      "feedbackAcerto": "🎉 Juntamos as duas quantidades: 245 + 168 = 413.",
      "feedbackErro": "As duas partes formam o total; por isso calculamos 245 + 168 = 413."
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
      "feedbackAcerto": "🎯 Partimos de 780 e retiramos 245: 780 − 245 = 535.",
      "feedbackErro": "A quantidade diminuiu de 780 em 245; por isso 780 − 245 = 535."
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
      "Conte o que aconteceu com a quantidade.",
      "Escolha a operação pela relação entre os dados e a pergunta."
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
      "feedbackAcerto": "🎉 Para achar a diferença, comparamos as quantidades por subtração.",
      "feedbackErro": "A pergunta pede a diferença entre duas quantidades; subtraia a menor da maior."
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
        "feedbackErro": "Estamos comparando 205 e 128; a diferença é 205 − 128 = 77."
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
